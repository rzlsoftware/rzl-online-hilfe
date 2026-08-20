import { copyFile, mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { parse, stringify } from 'yaml';

import { rewriteMarkdownLinks } from './lib/links.ts';
import {
  convertMkDocsAdmonitions,
  parseFrontmatter,
  prepareMarkdown,
  serializeFrontmatter,
  type PreparedMarkdown,
} from './lib/markdown.ts';
import {
  encodedRoute,
  humanizeFileName,
  normalizeRoute,
  programFromSourcePath,
  routeFromMarkdownPath,
  targetPathForSource,
  toPosixPath,
} from './lib/paths.ts';

interface Options {
  sourceRoot: string;
  targetRoot: string;
  reportPath: string;
}

interface StagedPage {
  sourcePath: string;
  targetPath: string;
  frontmatter: Record<string, unknown>;
  prepared: PreparedMarkdown;
  admonitions: number;
  original: string;
}

interface RouteReport {
  source: string;
  target: string;
  legacyPath: string;
  encodedLegacyPath: string;
  newPath: string;
  title: string;
  program?: string;
}

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SKIPPED_ROOT_DIRECTORIES = new Set(['scripts', 'stylesheets']);

function parseOptions(arguments_: string[]): Options {
  const values = new Map(
    arguments_
      .filter((argument) => argument.startsWith('--') && argument.includes('='))
      .map((argument) => {
        const [key, ...value] = argument.slice(2).split('=');
        return [key, value.join('=')] as const;
      }),
  );
  return {
    sourceRoot: path.resolve(ROOT, values.get('source') ?? 'docs'),
    targetRoot: path.resolve(ROOT, values.get('target') ?? 'src/content/docs'),
    reportPath: path.resolve(ROOT, values.get('report') ?? 'migration-report.json'),
  };
}

async function walkFiles(root: string, relativeDirectory = ''): Promise<string[]> {
  const directory = path.join(root, relativeDirectory);
  const entries = await readdir(directory, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const relativePath = toPosixPath(path.join(relativeDirectory, entry.name));
    if (entry.isDirectory()) files.push(...await walkFiles(root, relativePath));
    else if (entry.isFile()) files.push(relativePath);
  }
  return files;
}

function shouldMigrate(sourcePath: string): boolean {
  return !SKIPPED_ROOT_DIRECTORIES.has(sourcePath.split('/')[0] ?? '');
}

function targetDirectoryForSource(sourceDirectory: string): string {
  if (!sourceDirectory || sourceDirectory === '.') return '';
  return path.posix.dirname(targetPathForSource(`${sourceDirectory}/placeholder.md`));
}

function sourceReference(directory: string, reference: string): string {
  return path.posix.normalize(path.posix.join(directory, reference)).replace(/^\.\//, '');
}

async function navigationTitles(
  sourceRoot: string,
  pagesFiles: string[],
  sourceToTarget: Map<string, string>,
): Promise<Map<string, string>> {
  const titles = new Map<string, string>();
  for (const pagesPath of pagesFiles) {
    const yaml = parse(await readFile(path.join(sourceRoot, pagesPath), 'utf8')) as { nav?: unknown[] } | undefined;
    const directory = path.posix.dirname(pagesPath);
    for (const item of yaml?.nav ?? []) {
      if (!item || typeof item !== 'object' || Array.isArray(item)) continue;
      const [label, reference] = Object.entries(item)[0] ?? [];
      if (!label || typeof reference !== 'string') continue;
      const resolved = sourceReference(directory, reference);
      if (sourceToTarget.has(resolved)) titles.set(resolved, label);
      else if (sourceToTarget.has(`${resolved}/index.md`)) titles.set(`${resolved}/index.md`, label);
    }
  }
  return titles;
}

function transformPagesYaml(
  source: string,
  sourcePath: string,
  sourceToTarget: Map<string, string>,
): string {
  const parsed = parse(source) as { nav?: unknown[] } | undefined;
  const sourceDirectory = path.posix.dirname(sourcePath);
  const targetPagesPath = sourceToTarget.get(sourcePath);
  if (!targetPagesPath) throw new Error(`Missing target path for ${sourcePath}.`);
  const targetDirectory = path.posix.dirname(targetPagesPath);

  const transformReference = (reference: string): string => {
    if (reference === '...') return reference;
    const resolved = sourceReference(sourceDirectory, reference);
    const targetFile = sourceToTarget.get(resolved);
    if (targetFile) return path.posix.relative(targetDirectory, targetFile) || path.posix.basename(targetFile);

    const targetIndex = sourceToTarget.get(`${resolved}/index.md`);
    if (targetIndex) {
      const directory = path.posix.dirname(targetIndex);
      return path.posix.relative(targetDirectory, directory) || path.posix.basename(directory);
    }

    const targetDirectoryPath = targetDirectoryForSource(resolved);
    return path.posix.relative(targetDirectory, targetDirectoryPath) || path.posix.basename(targetDirectoryPath);
  };

  const nav = (parsed?.nav ?? []).map((item) => {
    if (typeof item === 'string') {
      const transformed = transformReference(item);
      if (item !== '...') {
        const resolved = sourceReference(sourceDirectory, item);
        const isDirectory = !sourceToTarget.has(resolved) && (
          sourceToTarget.has(`${resolved}/index.md`) ||
          [...sourceToTarget.keys()].some((sourceFile) => sourceFile.startsWith(`${resolved}/`))
        );
        if (isDirectory && transformed !== item) return { [item]: transformed };
      }
      return transformed;
    }
    if (item && typeof item === 'object' && !Array.isArray(item)) {
      const [label, reference] = Object.entries(item)[0] ?? [];
      if (label && typeof reference === 'string') return { [label]: transformReference(reference) };
    }
    throw new Error(`Unsupported .pages entry in ${sourcePath}: ${JSON.stringify(item)}`);
  });
  return stringify({ nav }, { lineWidth: 0 });
}

function sourceCounts(markdown: string): { themeImages: number; attributes: number } {
  return {
    themeImages: (markdown.match(/#only-(?:light|dark)/g) ?? []).length,
    attributes: (markdown.match(/\{(?::)?\s*(?:width|target|data-clipboard-text|data-toc-label)\s*=/g) ?? []).length,
  };
}

async function main(): Promise<void> {
  const options = parseOptions(process.argv.slice(2));
  const sourceInfo = await stat(options.sourceRoot).catch(() => undefined);
  if (!sourceInfo?.isDirectory()) throw new Error(`Source directory does not exist: ${options.sourceRoot}`);

  const allSourceFiles = (await walkFiles(options.sourceRoot)).filter(shouldMigrate).sort((a, b) => a.localeCompare(b, 'de'));
  const sourceToTarget = new Map<string, string>();
  const targetToSource = new Map<string, string>();
  for (const sourcePath of allSourceFiles) {
    const targetPath = targetPathForSource(sourcePath);
    const collision = targetToSource.get(targetPath);
    if (collision) throw new Error(`Normalized path collision: ${collision} and ${sourcePath} -> ${targetPath}`);
    sourceToTarget.set(sourcePath, targetPath);
    targetToSource.set(targetPath, sourcePath);
  }

  const markdownFiles = allSourceFiles.filter((file) => /\.md$/i.test(file));
  const pagesFiles = allSourceFiles.filter((file) => path.posix.basename(file) === '.pages');
  const assetFiles = allSourceFiles.filter((file) => !/\.md$/i.test(file) && path.posix.basename(file) !== '.pages');
  const titles = await navigationTitles(options.sourceRoot, pagesFiles, sourceToTarget);
  const markdownRoutes = new Map<string, string>();
  const legacyRoutes = new Map<string, string>();
  for (const sourcePath of markdownFiles) {
    const targetPath = sourceToTarget.get(sourcePath);
    if (!targetPath) throw new Error(`Missing target mapping for ${sourcePath}.`);
    markdownRoutes.set(sourcePath, routeFromMarkdownPath(targetPath));
    legacyRoutes.set(normalizeRoute(routeFromMarkdownPath(sourcePath)), sourcePath);
  }

  const stagedPages: StagedPage[] = [];
  const anchors = new Map<string, Map<string, string>>();
  const warnings: string[] = [];
  let admonitionCount = 0;
  let headingCount = 0;
  let aliasCount = 0;
  let themeImageCount = 0;
  let attributeCount = 0;

  for (const sourcePath of markdownFiles) {
    const original = await readFile(path.join(options.sourceRoot, sourcePath), 'utf8');
    const parsed = parseFrontmatter(original);
    const admonitions = convertMkDocsAdmonitions(parsed.body);
    const prepared = prepareMarkdown(
      admonitions.markdown,
      parsed.data.title,
      titles.get(sourcePath),
      humanizeFileName(sourcePath),
    );
    const targetPath = sourceToTarget.get(sourcePath);
    if (!targetPath) throw new Error(`Missing target mapping for ${sourcePath}.`);
    stagedPages.push({ sourcePath, targetPath, frontmatter: parsed.data, prepared, admonitions: admonitions.converted, original });
    anchors.set(sourcePath, prepared.anchorMap);
    admonitionCount += admonitions.converted;
    headingCount += prepared.headingCount;
    aliasCount += prepared.aliasCount;
    const counts = sourceCounts(original);
    themeImageCount += counts.themeImages;
    attributeCount += counts.attributes;
    warnings.push(...prepared.warnings.map((warning) => `${sourcePath}: ${warning}`));
  }

  await rm(options.targetRoot, { recursive: true, force: true });
  await mkdir(options.targetRoot, { recursive: true });

  let rewrittenLinks = 0;
  const routes: RouteReport[] = [];
  for (const page of stagedPages) {
    const pageWarnings: string[] = [];
    const rewritten = rewriteMarkdownLinks(page.prepared.body, {
      sourcePage: page.sourcePath,
      targetPage: page.targetPath,
      sourceToTarget,
      markdownRoutes,
      legacyRoutes,
      anchors,
      warnings: pageWarnings,
    });
    warnings.push(...pageWarnings.map((warning) => `${page.sourcePath}: ${warning}`));
    rewrittenLinks += rewritten.rewritten;

    const program = typeof page.frontmatter.program === 'string'
      ? page.frontmatter.program
      : page.frontmatter.program === false
        ? undefined
        : programFromSourcePath(page.sourcePath);
    const hide = Array.isArray(page.frontmatter.hide) ? page.frontmatter.hide : [];
    const frontmatter: Record<string, unknown> = { title: page.prepared.title };
    if (typeof page.frontmatter.description === 'string') frontmatter.description = page.frontmatter.description;
    if (program) frontmatter.program = program;
    if (hide.includes('footer')) frontmatter.hideFooter = true;

    const targetFile = path.join(options.targetRoot, page.targetPath);
    await mkdir(path.dirname(targetFile), { recursive: true });
    await writeFile(targetFile, serializeFrontmatter(frontmatter, rewritten.markdown), 'utf8');

    const legacyPath = routeFromMarkdownPath(page.sourcePath);
    routes.push({
      source: page.sourcePath,
      target: page.targetPath,
      legacyPath,
      encodedLegacyPath: encodedRoute(legacyPath),
      newPath: markdownRoutes.get(page.sourcePath) ?? routeFromMarkdownPath(page.targetPath),
      title: page.prepared.title,
      ...(program ? { program } : {}),
    });
  }

  for (const pagesPath of pagesFiles) {
    const targetPath = sourceToTarget.get(pagesPath);
    if (!targetPath) throw new Error(`Missing target mapping for ${pagesPath}.`);
    const transformed = transformPagesYaml(
      await readFile(path.join(options.sourceRoot, pagesPath), 'utf8'),
      pagesPath,
      sourceToTarget,
    );
    const targetFile = path.join(options.targetRoot, targetPath);
    await mkdir(path.dirname(targetFile), { recursive: true });
    await writeFile(targetFile, transformed, 'utf8');
  }

  for (const assetPath of assetFiles) {
    const targetPath = sourceToTarget.get(assetPath);
    if (!targetPath) throw new Error(`Missing target mapping for ${assetPath}.`);
    const targetFile = path.join(options.targetRoot, targetPath);
    await mkdir(path.dirname(targetFile), { recursive: true });
    await copyFile(path.join(options.sourceRoot, assetPath), targetFile);
  }

  const remainingAdmonitions = stagedPages.reduce(
    (total, page) => total + (convertMkDocsAdmonitions(page.prepared.body).converted),
    0,
  );
  const report = {
    sourceRoot: path.relative(ROOT, options.sourceRoot) || '.',
    targetRoot: path.relative(ROOT, options.targetRoot) || '.',
    files: {
      markdown: markdownFiles.length,
      pages: pagesFiles.length,
      assets: assetFiles.length,
      total: allSourceFiles.length,
    },
    transformations: {
      admonitions: admonitionCount,
      remainingAdmonitions,
      headings: headingCount,
      legacyAnchorAliases: aliasCount,
      themeImages: themeImageCount,
      mkdocsAttributes: attributeCount,
      rewrittenLinks,
    },
    warnings: [...new Set(warnings)].sort((a, b) => a.localeCompare(b, 'de')),
    routes: routes.sort((a, b) => a.source.localeCompare(b.source, 'de')),
  };
  await writeFile(options.reportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

  console.log(`Migrated ${markdownFiles.length} Markdown pages, ${pagesFiles.length} .pages files, and ${assetFiles.length} assets.`);
  console.log(`Converted ${admonitionCount} admonitions and rewrote ${rewrittenLinks} links.`);
  console.log(`Recorded ${report.warnings.length} review warnings in ${path.relative(ROOT, options.reportPath)}.`);
}

await main();
