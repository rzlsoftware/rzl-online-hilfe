import path from 'node:path';

const GERMAN_TRANSLITERATION: Record<string, string> = {
  Ä: 'Ae',
  Ö: 'Oe',
  Ü: 'Ue',
  ä: 'ae',
  ö: 'oe',
  ü: 'ue',
  ß: 'ss',
};

export function toPosixPath(value: string): string {
  return value.split(path.sep).join('/');
}

export function decodePath(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export function slugifySegment(value: string): string {
  const wordSeparated = value
    .replace(/([A-Z]{2,})([A-Z][a-z]{2,})/g, '$1-$2')
    .replace(/([a-z0-9])([A-Z][a-z]{2,})/g, '$1-$2');
  const transliterated = [...wordSeparated]
    .map((character) => GERMAN_TRANSLITERATION[character] ?? character)
    .join('');
  const slug = transliterated
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');

  if (!slug) {
    throw new Error(`Cannot create a URL-safe segment from "${value}".`);
  }
  return slug;
}

export function targetPathForSource(sourcePath: string): string {
  const normalized = toPosixPath(sourcePath).replace(/^\.\//, '');
  const segments = normalized.split('/');
  const fileName = segments.pop();
  if (!fileName) throw new Error(`Invalid source path: ${sourcePath}`);

  const targetDirectories = segments.map(slugifySegment);
  let targetFileName = fileName;
  if (fileName === '.pages') {
    targetFileName = fileName;
  } else if (/\.md$/i.test(fileName)) {
    const extension = path.posix.extname(fileName).toLowerCase();
    const stem = fileName.slice(0, -extension.length);
    targetFileName = `${stem.toLowerCase() === 'index' ? 'index' : slugifySegment(stem)}${extension}`;
  }

  return [...targetDirectories, targetFileName].join('/');
}

export function routeFromMarkdownPath(markdownPath: string): string {
  const normalized = toPosixPath(markdownPath).replace(/^\/+/, '');
  const withoutExtension = normalized.replace(/\.md$/i, '');
  const routePath = withoutExtension.replace(/(^|\/)index$/i, '$1').replace(/\/+$/, '');
  return routePath ? `/${routePath}/` : '/';
}

export function encodedRoute(route: string): string {
  return route
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
}

export function normalizeRoute(route: string): string {
  const decoded = decodePath(route.split(/[?#]/, 1)[0] ?? route);
  const withLeadingSlash = decoded.startsWith('/') ? decoded : `/${decoded}`;
  if (withLeadingSlash === '/') return '/';
  return `${withLeadingSlash.replace(/\/+$/, '')}/`;
}

export function programFromSourcePath(sourcePath: string): string | undefined {
  const [first, second] = toPosixPath(sourcePath).split('/');
  return second ? first : undefined;
}

export function humanizeFileName(sourcePath: string): string {
  const normalized = toPosixPath(sourcePath);
  const fileName = path.posix.basename(normalized, path.posix.extname(normalized));
  const candidate = fileName.toLowerCase() === 'index' ? path.posix.basename(path.posix.dirname(normalized)) : fileName;
  if (!candidate || candidate === '.') return 'RZL Online Hilfe';
  return candidate.replace(/_+/g, ' ').replace(/\s+/g, ' ').trim();
}
