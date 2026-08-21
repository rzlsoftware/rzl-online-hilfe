import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { parseFrontmatter } from './lib/markdown.ts';
import { routeFromMarkdownPath, toPosixPath } from './lib/paths.ts';

interface MigrationRoute {
  source: string;
  target: string;
  legacyPath: string;
  encodedLegacyPath: string;
  newPath: string;
}

interface MigrationReport {
  files: { markdown: number; pages: number; assets: number; total: number };
  transformations: { remainingAdmonitions: number };
  routes: MigrationRoute[];
}

interface RedirectArtifact {
  redirects: Array<{ route: string; redirect: string; statusCode: number }>;
}

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT_ROOT = path.join(ROOT, 'src/content/docs');

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

function redirectVariants(route: MigrationRoute): string[] {
  const variants = new Set<string>();
  for (const base of [route.legacyPath, route.encodedLegacyPath]) {
    variants.add(base);
    if (base !== '/') variants.add(`${base.replace(/\/+$/, '')}/index.html`);
  }
  return [...variants];
}

async function main(): Promise<void> {
  const errors: string[] = [];
  const report = JSON.parse(await readFile(path.join(ROOT, 'migration-report.json'), 'utf8')) as MigrationReport;
  const redirects = JSON.parse(await readFile(path.join(ROOT, 'redirects.generated.json'), 'utf8')) as RedirectArtifact;
  const redirectLookup = new Map(redirects.redirects.map((rule) => [rule.route, rule]));
  const allMarkdownFiles = (await walkMarkdown(CONTENT_ROOT)).sort();
  // 404.md is Starlight's custom not-found page (see
  // https://starlight.astro.build/guides/customization/#custom-404-page),
  // authored directly rather than migrated from legacy MkDocs content, so it
  // is intentionally absent from migration-report.json and does not build to
  // a directory route.
  const markdownFiles = allMarkdownFiles.filter((file) => file !== '404.md');
  const routes = new Map<string, string>();

  if (markdownFiles.length !== report.files.markdown) {
    errors.push(`Report contains ${report.files.markdown} pages but content contains ${markdownFiles.length}.`);
  }
  if (report.transformations.remainingAdmonitions !== 0) {
    errors.push(`Migration report contains ${report.transformations.remainingAdmonitions} unconverted admonitions.`);
  }

  for (const markdownPath of markdownFiles) {
    const route = routeFromMarkdownPath(markdownPath);
    const collision = routes.get(route);
    if (collision) errors.push(`Duplicate canonical route ${route}: ${collision}, ${markdownPath}.`);
    routes.set(route, markdownPath);

    const source = await readFile(path.join(CONTENT_ROOT, markdownPath), 'utf8');
    const parsed = parseFrontmatter(source);
    if (typeof parsed.data.title !== 'string' || !parsed.data.title.trim()) {
      errors.push(`${markdownPath} has no frontmatter title.`);
    }
    if (/^\s*!!!\s/m.test(parsed.body)) errors.push(`${markdownPath} contains an unconverted MkDocs admonition.`);
    if (/^ {0,3}#[ \t]+/m.test(parsed.body)) errors.push(`${markdownPath} contains a duplicate body H1.`);
    if (/\]\((?:<)?(?!https?:|mailto:|tel:|ms-settings:|\/|#)[^)>]*\.md\/?(?:#[^)>]*)?(?:>)?\)/i.test(parsed.body)) {
      errors.push(`${markdownPath} contains an unresolved relative .md link.`);
    }
  }

  for (const route of report.routes) {
    if (!routes.has(route.newPath)) errors.push(`Canonical route is missing for ${route.source}: ${route.newPath}`);
    if (route.legacyPath === route.newPath) continue;
    for (const variant of redirectVariants(route)) {
      const rule = redirectLookup.get(variant);
      if (!rule) errors.push(`Redirect artifact does not cover ${variant}.`);
      else if (rule.redirect !== route.newPath || rule.statusCode !== 301) {
        errors.push(`Redirect ${variant} does not permanently target ${route.newPath}.`);
      }
    }
  }

  const configPath = path.join(ROOT, 'staticwebapp.config.json');
  const configSize = (await stat(configPath)).size;
  if (configSize > 20 * 1024) errors.push(`staticwebapp.config.json exceeds Azure's 20 KB limit (${configSize} bytes).`);

  const distInfo = await stat(path.join(ROOT, 'dist')).catch(() => undefined);
  if (distInfo?.isDirectory()) {
    for (const route of routes.keys()) {
      const output = route === '/' ? 'index.html' : `${route.slice(1)}index.html`;
      if (!await stat(path.join(ROOT, 'dist', output)).catch(() => undefined)) {
        errors.push(`Built route is missing: ${route}`);
      }
    }
    if (!await stat(path.join(ROOT, 'dist', '404.html')).catch(() => undefined)) {
      errors.push('Built route is missing: /404 (404.html)');
    }
  }

  if (errors.length > 0) {
    throw new Error(`URL validation failed with ${errors.length} error(s):\n${errors.slice(0, 100).map((error) => `- ${error}`).join('\n')}${errors.length > 100 ? `\n- ... ${errors.length - 100} more` : ''}`);
  }
  console.log(`Validated ${markdownFiles.length} pages, ${routes.size} canonical routes, and ${redirects.redirects.length} redirect rules.`);
}

await main();
