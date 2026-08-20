import { mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { parse } from 'yaml';

import { parseFrontmatter } from './lib/markdown.ts';
import { routeFromMarkdownPath, toPosixPath } from './lib/paths.ts';

interface SidebarLink {
  slug: string;
  label?: string;
}

interface SidebarGroup {
  label: string;
  items: SidebarItem[];
}

type SidebarItem = string | SidebarLink | SidebarGroup;

interface ProgramDefinition {
  id: string;
  label: string;
  route: string;
}

interface NavReference {
  reference: string;
  label?: string;
}

interface Options {
  contentRoot: string;
  sidebarOutput: string;
  programsOutput: string;
}

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const collator = new Intl.Collator('de', { numeric: true, sensitivity: 'base' });

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
    contentRoot: path.resolve(ROOT, values.get('content') ?? 'src/content/docs'),
    sidebarOutput: path.resolve(ROOT, values.get('sidebar') ?? 'src/nav/sidebar.generated.ts'),
    programsOutput: path.resolve(ROOT, values.get('programs') ?? 'src/nav/programs.generated.ts'),
  };
}

async function exists(filePath: string): Promise<boolean> {
  return Boolean(await stat(filePath).catch(() => undefined));
}

async function walkMarkdown(root: string, relativeDirectory = ''): Promise<string[]> {
  const entries = await readdir(path.join(root, relativeDirectory), { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const relativePath = toPosixPath(path.join(relativeDirectory, entry.name));
    if (entry.isDirectory()) files.push(...await walkMarkdown(root, relativePath));
    else if (entry.isFile() && /\.md$/i.test(entry.name)) files.push(relativePath);
  }
  return files;
}

function parseNav(source: string, pagesPath: string): NavReference[] {
  const yaml = parse(source) as { nav?: unknown[] } | undefined;
  if (!Array.isArray(yaml?.nav)) throw new Error(`${pagesPath} must contain a nav array.`);
  return yaml.nav.map((item) => {
    if (typeof item === 'string') return { reference: item };
    if (item && typeof item === 'object' && !Array.isArray(item)) {
      const entries = Object.entries(item);
      if (entries.length === 1 && typeof entries[0]?.[1] === 'string') {
        return { label: entries[0][0], reference: entries[0][1] as string };
      }
    }
    throw new Error(`Unsupported navigation entry in ${pagesPath}: ${JSON.stringify(item)}`);
  });
}

function humanize(value: string): string {
  const words = value.replace(/\.md$/i, '').split(/[-_]+/).filter(Boolean);
  return words.map((word, index) => index === 0 ? `${word[0]?.toUpperCase() ?? ''}${word.slice(1)}` : word).join(' ');
}

function slugFor(markdownPath: string): string {
  return routeFromMarkdownPath(markdownPath).replace(/^\/+|\/+$/g, '');
}

async function frontmatterFor(contentRoot: string, markdownPath: string): Promise<Record<string, unknown>> {
  return parseFrontmatter(await readFile(path.join(contentRoot, markdownPath), 'utf8')).data;
}

async function directoryLabel(contentRoot: string, directory: string): Promise<string> {
  const indexPath = path.posix.join(directory, 'index.md');
  if (await exists(path.join(contentRoot, indexPath))) {
    const title = (await frontmatterFor(contentRoot, indexPath)).title;
    if (typeof title === 'string' && title.trim()) return title.trim();
  }
  return humanize(path.posix.basename(directory));
}

async function immediateNavigableEntries(contentRoot: string, directory: string): Promise<string[]> {
  const entries = await readdir(path.join(contentRoot, directory), { withFileTypes: true });
  const candidates: string[] = [];
  for (const entry of entries) {
    if (entry.isFile() && /\.md$/i.test(entry.name)) candidates.push(entry.name);
    if (entry.isDirectory()) {
      const nested = await walkMarkdown(contentRoot, path.posix.join(directory, entry.name));
      if (nested.length > 0) candidates.push(entry.name);
    }
  }
  return candidates.sort((left, right) => {
    if (left.toLowerCase() === 'index.md') return -1;
    if (right.toLowerCase() === 'index.md') return 1;
    return collator.compare(left, right);
  });
}

async function referencesForDirectory(contentRoot: string, directory: string): Promise<NavReference[]> {
  const pagesPath = path.posix.join(directory, '.pages');
  if (await exists(path.join(contentRoot, pagesPath))) {
    return parseNav(await readFile(path.join(contentRoot, pagesPath), 'utf8'), pagesPath);
  }
  return [{ reference: '...' }];
}

async function buildDirectoryItems(
  contentRoot: string,
  directory: string,
  usedPages: Map<string, number>,
): Promise<SidebarItem[]> {
  const configured = await referencesForDirectory(contentRoot, directory);
  const immediate = await immediateNavigableEntries(contentRoot, directory);
  const explicit = new Set(configured.filter(({ reference }) => reference !== '...').map(({ reference }) => reference));
  const expanded: NavReference[] = [];

  for (const item of configured) {
    if (item.reference === '...') {
      expanded.push(...immediate.filter((reference) => !explicit.has(reference)).map((reference) => ({ reference })));
    } else {
      expanded.push(item);
    }
  }

  const items: SidebarItem[] = [];
  for (const item of expanded) {
    const relative = path.posix.normalize(path.posix.join(directory, item.reference)).replace(/^\.\//, '');
    const absolute = path.join(contentRoot, relative);
    const info = await stat(absolute).catch(() => undefined);
    if (!info) throw new Error(`Broken .pages reference in ${directory || '.'}: ${item.reference}`);

    if (info.isFile() && /\.md$/i.test(relative)) {
      const count = (usedPages.get(relative) ?? 0) + 1;
      usedPages.set(relative, count);
      if (count > 1) throw new Error(`Page appears more than once in navigation: ${relative}`);
      const slug = slugFor(relative);
      items.push(item.label ? { slug, label: item.label } : slug);
      continue;
    }

    if (info.isDirectory()) {
      const nestedItems = await buildDirectoryItems(contentRoot, relative, usedPages);
      if (nestedItems.length === 0) throw new Error(`Navigation group is empty: ${relative}`);
      items.push({ label: item.label ?? await directoryLabel(contentRoot, relative), items: nestedItems });
      continue;
    }

    throw new Error(`Unsupported .pages target in ${directory || '.'}: ${item.reference}`);
  }
  return items;
}

function moduleHeader(): string {
  return '// Generated from src/content/docs/**/.pages. Do not edit manually.\n';
}

async function main(): Promise<void> {
  const options = parseOptions(process.argv.slice(2));
  if (!await exists(options.contentRoot)) throw new Error(`Content root does not exist: ${options.contentRoot}`);

  const usedPages = new Map<string, number>();
  const sidebar = await buildDirectoryItems(options.contentRoot, '', usedPages);
  const allPages = (await walkMarkdown(options.contentRoot)).sort((a, b) => collator.compare(a, b));
  const hiddenPages = allPages.filter((page) => !usedPages.has(page));

  const rootReferences = await referencesForDirectory(options.contentRoot, '');
  const programs: ProgramDefinition[] = [];
  for (const item of rootReferences) {
    if (item.reference === '...') continue;
    const directory = item.reference;
    const info = await stat(path.join(options.contentRoot, directory)).catch(() => undefined);
    if (!info?.isDirectory()) continue;
    const indexPath = path.posix.join(directory, 'index.md');
    const hasIndex = await exists(path.join(options.contentRoot, indexPath));
    const firstPage = hasIndex
      ? indexPath
      : (await walkMarkdown(options.contentRoot, directory)).sort((left, right) => collator.compare(left, right))[0];
    if (!firstPage) continue;
    const data = await frontmatterFor(options.contentRoot, firstPage);
    const id = typeof data.program === 'string' ? data.program : directory;
    programs.push({
      id,
      label: item.label ?? await directoryLabel(options.contentRoot, directory),
      route: routeFromMarkdownPath(firstPage),
    });
  }

  const sidebarModule = `${moduleHeader()}import type { StarlightUserConfig } from '@astrojs/starlight/types';\n\nexport const sidebar = ${JSON.stringify(sidebar, null, 2)} satisfies NonNullable<StarlightUserConfig['sidebar']>;\n\nexport const hiddenPages = ${JSON.stringify(hiddenPages, null, 2)} as const;\n`;
  const programsModule = `${moduleHeader()}export interface ProgramDefinition {\n  id: string;\n  label: string;\n  route: string;\n}\n\nexport const programs = ${JSON.stringify(programs, null, 2)} as const satisfies readonly ProgramDefinition[];\n`;
  await mkdir(path.dirname(options.sidebarOutput), { recursive: true });
  await mkdir(path.dirname(options.programsOutput), { recursive: true });
  await writeFile(options.sidebarOutput, sidebarModule, 'utf8');
  await writeFile(options.programsOutput, programsModule, 'utf8');

  console.log(`Generated ${sidebar.length} top-level sidebar entries for ${usedPages.size} visible pages.`);
  console.log(`Recorded ${hiddenPages.length} intentionally omitted or landing pages and ${programs.length} programs.`);
}

await main();
