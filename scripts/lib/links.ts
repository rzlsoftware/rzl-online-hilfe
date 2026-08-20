import path from 'node:path';

import { decodePath, normalizeRoute } from './paths.ts';

export interface LinkRewriteContext {
  sourcePage: string;
  targetPage: string;
  sourceToTarget: Map<string, string>;
  markdownRoutes: Map<string, string>;
  legacyRoutes: Map<string, string>;
  anchors: Map<string, Map<string, string>>;
  warnings: string[];
}

export interface LinkRewriteResult {
  markdown: string;
  rewritten: number;
}

const LOCAL_ASSET_PATTERN = /\.(?:avif|gif|jpe?g|png|svg|webp|pdf)$/i;

function splitDestination(destination: string): { pathname: string; query: string; hash: string } {
  const hashIndex = destination.indexOf('#');
  const beforeHash = hashIndex >= 0 ? destination.slice(0, hashIndex) : destination;
  const hash = hashIndex >= 0 ? destination.slice(hashIndex) : '';
  const queryIndex = beforeHash.indexOf('?');
  return {
    pathname: queryIndex >= 0 ? beforeHash.slice(0, queryIndex) : beforeHash,
    query: queryIndex >= 0 ? beforeHash.slice(queryIndex) : '',
    hash,
  };
}

function encodeRelativePath(value: string): string {
  return value
    .split('/')
    .map((segment) => encodeURI(segment).replace(/#/g, '%23').replace(/\?/g, '%3F'))
    .join('/');
}

function rewriteHash(sourceMarkdown: string, hash: string, context: LinkRewriteContext): string {
  if (!hash || hash === '#only-light' || hash === '#only-dark') return hash;
  const raw = decodePath(hash.slice(1));
  const pageAnchors = context.anchors.get(sourceMarkdown);
  let target = pageAnchors?.get(raw);
  if (!target && pageAnchors) {
    const prefixMatches = [...pageAnchors.entries()].filter(([source]) => source.startsWith(raw));
    if (prefixMatches.length === 1) target = prefixMatches[0]?.[1];
  }
  if (target) return `#${encodeURIComponent(target)}`;
  context.warnings.push(`Unresolved anchor "${hash}" in link to ${sourceMarkdown}.`);
  return hash;
}

function resolveAbsoluteRoute(pathname: string, hash: string, query: string, context: LinkRewriteContext): string | undefined {
  const sourceMarkdown = context.legacyRoutes.get(normalizeRoute(pathname));
  if (!sourceMarkdown) return undefined;
  const route = context.markdownRoutes.get(sourceMarkdown);
  if (!route) return undefined;
  return `${route}${query}${rewriteHash(sourceMarkdown, hash, context)}`;
}

function resolveDestination(destination: string, context: LinkRewriteContext): string {
  if (!destination) return destination;
  if (destination.startsWith('#')) {
    return rewriteHash(context.sourcePage, destination, context);
  }

  if (/^https?:\/\//i.test(destination)) {
    try {
      const url = new URL(destination);
      if (url.hostname !== 'hilfe.rzlsoftware.at') return destination;
      return resolveAbsoluteRoute(url.pathname, url.hash, url.search, context) ?? destination;
    } catch {
      return destination;
    }
  }
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(destination)) return destination;

  const { pathname, query, hash } = splitDestination(destination);
  if (pathname.startsWith('/')) {
    return resolveAbsoluteRoute(pathname, hash, query, context) ?? destination;
  }

  const normalizedPath = decodePath(pathname.replace(/\.md\/$/i, '.md'));
  const sourceDirectory = path.posix.dirname(context.sourcePage);
  let resolvedSource = path.posix.normalize(path.posix.join(sourceDirectory, normalizedPath));
  resolvedSource = resolvedSource.replace(/^\.\//, '');

  let targetPath = context.sourceToTarget.get(resolvedSource);
  if (!targetPath && normalizedPath.endsWith('/')) {
    resolvedSource = path.posix.normalize(path.posix.join(sourceDirectory, normalizedPath.replace(/\/+$/, '')));
    targetPath = context.sourceToTarget.get(resolvedSource);
  }

  if (!targetPath) {
    if (/\.md\/?$/i.test(pathname) || LOCAL_ASSET_PATTERN.test(pathname)) {
      context.warnings.push(`Unresolved local target "${destination}".`);
    }
    return destination;
  }

  if (/\.md$/i.test(resolvedSource)) {
    const route = context.markdownRoutes.get(resolvedSource);
    if (!route) return destination;
    return `${route}${query}${rewriteHash(resolvedSource, hash, context)}`;
  }

  const targetDirectory = path.posix.dirname(context.targetPage);
  const relative = path.posix.relative(targetDirectory, targetPath) || path.posix.basename(targetPath);
  return `${encodeRelativePath(relative)}${query}${hash}`;
}

function rewriteLine(line: string, context: LinkRewriteContext): { line: string; rewritten: number } {
  let output = line;
  let cursor = 0;
  let rewritten = 0;

  while (cursor < output.length) {
    const opener = output.indexOf('](', cursor);
    if (opener < 0) break;
    let contentStart = opener + 2;
    while (/\s/.test(output[contentStart] ?? '')) contentStart += 1;

    let destinationStart = contentStart;
    let destinationEnd = contentStart;
    let outerEnd = -1;

    if (output[contentStart] === '<') {
      destinationStart = contentStart + 1;
      destinationEnd = output.indexOf('>', destinationStart);
      if (destinationEnd < 0) {
        cursor = contentStart;
        continue;
      }
      outerEnd = output.indexOf(')', destinationEnd + 1);
    } else {
      let depth = 0;
      let index = contentStart;
      for (; index < output.length; index += 1) {
        const character = output[index];
        if (character === '\\') {
          index += 1;
          continue;
        }
        if (character === '(') depth += 1;
        if (character === ')') {
          if (depth === 0) {
            outerEnd = index;
            break;
          }
          depth -= 1;
        }
      }
      if (outerEnd < 0) {
        cursor = contentStart;
        continue;
      }

      const inside = output.slice(contentStart, outerEnd);
      const titleMatch = inside.match(/\s+(?:"[^"]*"|'[^']*'|\([^)]*\))\s*$/);
      destinationEnd = contentStart + (titleMatch?.index ?? inside.length);
      while (destinationEnd > destinationStart && /\s/.test(output[destinationEnd - 1] ?? '')) {
        destinationEnd -= 1;
      }
    }

    if (outerEnd < 0 || destinationEnd <= destinationStart) {
      cursor = Math.max(contentStart + 1, outerEnd + 1);
      continue;
    }

    const original = output.slice(destinationStart, destinationEnd);
    const replacement = resolveDestination(original, context);
    if (replacement !== original) {
      output = `${output.slice(0, destinationStart)}${replacement}${output.slice(destinationEnd)}`;
      const difference = replacement.length - original.length;
      outerEnd += difference;
      rewritten += 1;
    }
    cursor = outerEnd + 1;
  }

  return { line: output, rewritten };
}

export function rewriteMarkdownLinks(markdown: string, context: LinkRewriteContext): LinkRewriteResult {
  const lines = markdown.split('\n');
  let fence: string | undefined;
  let rewritten = 0;
  const output = lines.map((line) => {
    const fenceMatch = line.match(/^\s*(`{3,}|~{3,})/);
    if (fenceMatch) {
      const marker = fenceMatch[1]?.[0];
      if (!fence) fence = marker;
      else if (marker === fence) fence = undefined;
      return line;
    }
    if (fence) return line;
    const result = rewriteLine(line, context);
    rewritten += result.rewritten;
    return result.line;
  });
  return { markdown: output.join('\n'), rewritten };
}
