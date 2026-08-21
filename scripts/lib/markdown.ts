import GithubSlugger from 'github-slugger';
import { parse, stringify } from 'yaml';

export interface ParsedFrontmatter {
  data: Record<string, unknown>;
  body: string;
}

export interface PreparedMarkdown {
  body: string;
  title: string;
  anchorMap: Map<string, string>;
  headingCount: number;
  aliasCount: number;
  warnings: string[];
}

export interface AdmonitionResult {
  markdown: string;
  converted: number;
}

interface Heading {
  lineIndex: number;
  depth: number;
  markerPrefix: string;
  rawText: string;
  plainText: string;
  legacyId: string;
  targetId: string;
  removed: boolean;
}

const FRONTMATTER_PATTERN = /^---\n([\s\S]*?)\n---(?:\n|$)/;
const HEADING_PATTERN = /^( {0,3})(#{1,6})(?:[ \t]+)(.*?)(?:[ \t]+#+[ \t]*)?$/;
const MALFORMED_H1_PATTERN = /^( {0,3})#([^#\s].*)$/;

export function parseFrontmatter(markdown: string): ParsedFrontmatter {
  const normalized = markdown.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n');
  const match = normalized.match(FRONTMATTER_PATTERN);
  if (!match) return { data: {}, body: normalized };

  const parsed = parse(match[1] ?? '') as unknown;
  const data = parsed && typeof parsed === 'object' && !Array.isArray(parsed)
    ? (parsed as Record<string, unknown>)
    : {};
  return { data, body: normalized.slice(match[0].length) };
}

export function serializeFrontmatter(data: Record<string, unknown>, body: string): string {
  const yaml = stringify(data, { lineWidth: 0 }).trimEnd();
  return `---\n${yaml}\n---\n\n${body.replace(/^\n+/, '').replace(/\s*$/, '\n')}`;
}

function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex: string) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#([0-9]+);/g, (_, decimal: string) => String.fromCodePoint(Number.parseInt(decimal, 10)));
}

export function plainHeadingText(value: string): string {
  return decodeHtmlEntities(value)
    .replace(/\s*\{\s*data-toc-label="[^"]+"\s*\}\s*$/, '')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/[*_~]/g, '')
    .replace(/\\([\\`*{}\[\]()#+.!_-])/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function pythonMarkdownSlug(value: string): string {
  const ascii = [...decodeHtmlEntities(value).normalize('NFKD')]
    .filter((character) => !/[\u0300-\u036f]/.test(character))
    .filter((character) => character.charCodeAt(0) < 128)
    .join('');
  return ascii
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[-\s]+/g, '-');
}

function uniqueLegacySlug(value: string, used: Map<string, number>): string {
  const base = pythonMarkdownSlug(value) || 'section';
  const count = used.get(base) ?? 0;
  used.set(base, count + 1);
  return count === 0 ? base : `${base}_${count}`;
}

function collectHeadings(lines: string[]): Heading[] {
  const headings: Heading[] = [];
  const legacyIds = new Map<string, number>();
  let fence: string | undefined;

  lines.forEach((line, lineIndex) => {
    const fenceMatch = line.match(/^\s*(`{3,}|~{3,})/);
    if (fenceMatch) {
      const marker = fenceMatch[1]?.[0];
      if (!fence) fence = marker;
      else if (fence === marker) fence = undefined;
      return;
    }
    if (fence) return;

    const match = line.match(HEADING_PATTERN);
    const malformed = !match ? line.match(MALFORMED_H1_PATTERN) : undefined;
    if (!match && !malformed) return;

    const markerPrefix = match?.[1] ?? malformed?.[1] ?? '';
    const depth = match ? match[2]?.length ?? 1 : 1;
    const rawText = (match?.[3] ?? malformed?.[2] ?? '').trim();
    const plainText = plainHeadingText(rawText);
    headings.push({
      lineIndex,
      depth,
      markerPrefix,
      rawText,
      plainText,
      legacyId: uniqueLegacySlug(plainText, legacyIds),
      targetId: '',
      removed: false,
    });
  });

  return headings;
}

function firstSubstantiveLine(lines: string[]): number {
  let inComment = false;
  for (let index = 0; index < lines.length; index += 1) {
    const trimmed = lines[index]?.trim() ?? '';
    if (inComment) {
      if (trimmed.includes('-->')) inComment = false;
      continue;
    }
    if (trimmed.startsWith('<!--')) {
      if (!trimmed.includes('-->')) inComment = true;
      continue;
    }
    if (trimmed) return index;
  }
  return -1;
}

function escapeAttribute(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

export function prepareMarkdown(
  body: string,
  existingTitle: unknown,
  navigationTitle: string | undefined,
  fallbackTitle: string,
): PreparedMarkdown {
  const lines = body.replace(/\r\n?/g, '\n').split('\n');
  const headings = collectHeadings(lines);
  const h1Headings = headings.filter((heading) => heading.depth === 1);
  const firstContent = firstSubstantiveLine(lines);
  const structuralH1 = h1Headings.length === 1 && h1Headings[0]?.lineIndex === firstContent
    ? h1Headings[0]
    : undefined;
  const warnings: string[] = [];

  const frontmatterTitle = typeof existingTitle === 'string' && existingTitle.trim()
    ? existingTitle.trim()
    : undefined;
  const title = plainHeadingText(
    frontmatterTitle ?? structuralH1?.rawText ?? navigationTitle ?? fallbackTitle,
  );

  if (!frontmatterTitle && !structuralH1 && !navigationTitle) {
    warnings.push(`Title derived from file name: ${fallbackTitle}`);
  }
  if (h1Headings.length > 1) {
    warnings.push(`Demoted ${h1Headings.length} body H1 headings; page title came from navigation or file name.`);
  }
  if (h1Headings.length === 1 && !structuralH1) {
    warnings.push('Demoted a body H1 that was not the page title.');
  }
  if (frontmatterTitle && structuralH1 && plainHeadingText(structuralH1.rawText) !== plainHeadingText(frontmatterTitle)) {
    warnings.push(`Frontmatter title differs from removed body H1: "${structuralH1.rawText}".`);
  }

  if (structuralH1) structuralH1.removed = true;

  const githubSlugger = new GithubSlugger();
  const anchorMap = new Map<string, string>();
  for (const heading of headings) {
    heading.targetId = heading.removed ? '_top' : githubSlugger.slug(heading.plainText);
    anchorMap.set(heading.legacyId, heading.targetId);
    anchorMap.set(heading.targetId, heading.targetId);
  }

  const headingsByLine = new Map(headings.map((heading) => [heading.lineIndex, heading]));
  const output: string[] = [];
  let aliasCount = 0;

  const removedTitleAlias = structuralH1 && structuralH1.legacyId !== structuralH1.targetId
    ? structuralH1.legacyId
    : undefined;
  if (removedTitleAlias) {
    output.push(`<span id="${escapeAttribute(removedTitleAlias)}" class="legacy-anchor" aria-hidden="true"></span>`);
    aliasCount += 1;
  }

  lines.forEach((line, lineIndex) => {
    const heading = headingsByLine.get(lineIndex);
    if (!heading) {
      output.push(line);
      return;
    }
    if (heading.removed) return;

    if (heading.legacyId !== heading.targetId) {
      output.push(`${heading.markerPrefix}<span id="${escapeAttribute(heading.legacyId)}" class="legacy-anchor" aria-hidden="true"></span>`);
      aliasCount += 1;
    }
    if (heading.depth === 1) {
      output.push(`${heading.markerPrefix}## ${heading.rawText}`);
    } else {
      output.push(line);
    }
  });

  return {
    body: output.join('\n').replace(/^\n+/, ''),
    title: title || fallbackTitle,
    anchorMap,
    headingCount: headings.length,
    aliasCount,
    warnings,
  };
}

function indentationLength(line: string): number {
  return line.match(/^[ \t]*/)?.[0].replace(/\t/g, '    ').length ?? 0;
}

function stripIndent(line: string, count: number): string {
  let remaining = count;
  let index = 0;
  while (index < line.length && remaining > 0) {
    if (line[index] === ' ') remaining -= 1;
    else if (line[index] === '\t') remaining -= 4;
    else break;
    index += 1;
  }
  return line.slice(index);
}

export function convertMkDocsAdmonitions(markdown: string): AdmonitionResult {
  const lines = markdown.replace(/\r\n?/g, '\n').split('\n');
  const output: string[] = [];
  let converted = 0;

  const markerPattern = /^(\s*)(!!!|\?\?\?\+?)\s*(warning|info|question|note|node)\s*(?:"([^"]*)")?\s*$/i;
  const malformedPattern = /^(\s*)!!!\s*(warning|info|question|note|node)"([^"]*)"\s*$/i;
  const typeMap: Record<string, string> = {
    warning: 'caution',
    info: 'note',
    note: 'note',
    question: 'tip',
    node: 'note',
  };

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index] ?? '';
    const regular = line.match(markerPattern);
    const malformed = !regular ? line.match(malformedPattern) : undefined;
    if (!regular && !malformed) {
      output.push(line);
      continue;
    }

    const baseIndent = regular?.[1] ?? malformed?.[1] ?? '';
    const marker = regular?.[2] ?? '!!!';
    const sourceType = (regular?.[3] ?? malformed?.[2] ?? 'note').toLowerCase();
    const title = regular?.[4] ?? malformed?.[3];
    const baseLength = baseIndent.replace(/\t/g, '    ').length;
    let end = index + 1;
    while (end < lines.length) {
      const candidate = lines[end] ?? '';
      if (!candidate.trim() || indentationLength(candidate) > baseLength) {
        end += 1;
        continue;
      }
      break;
    }

    const contentLines = lines.slice(index + 1, end);
    const nonBlankIndents = contentLines
      .filter((candidate) => candidate.trim())
      .map(indentationLength);
    const contentIndent = nonBlankIndents.length > 0
      ? Math.min(...nonBlankIndents)
      : baseLength + 4;
    const dedented = contentLines.map((candidate) => candidate.trim() ? stripIndent(candidate, contentIndent) : '');
    const nested = convertMkDocsAdmonitions(dedented.join('\n'));
    converted += 1 + nested.converted;
    const nestedLines = nested.markdown.split('\n').map((candidate) => `${baseIndent}${candidate}`);

    if (marker.startsWith('???')) {
      output.push(`${baseIndent}<details>`);
      output.push(`${baseIndent}<summary>${title || sourceType}</summary>`);
      output.push(...nestedLines);
      output.push(`${baseIndent}</details>`);
    } else {
      const asideTitle = title ? `[${title.replace(/]/g, '\\]')}]` : '';
      output.push(`${baseIndent}:::${typeMap[sourceType] ?? 'note'}${asideTitle}`);
      output.push(...nestedLines);
      output.push(`${baseIndent}:::`);
    }

    index = end - 1;
  }

  return { markdown: output.join('\n'), converted };
}
