import assert from 'node:assert/strict';
import test from 'node:test';

import {
  convertMkDocsAdmonitions,
  parseFrontmatter,
  prepareMarkdown,
  serializeFrontmatter,
} from './markdown.ts';

test('frontmatter parsing only consumes the opening YAML block', () => {
  const parsed = parseFrontmatter('---\nhide:\n  - footer\n---\n# Titel\n\n---\nText');
  assert.deepEqual(parsed.data, { hide: ['footer'] });
  assert.match(parsed.body, /^# Titel/);
  assert.match(serializeFrontmatter({ title: 'Titel' }, parsed.body), /^---\ntitle: Titel\n---/);
});

test('prepareMarkdown lifts a structural H1 and preserves its legacy anchor', () => {
  const prepared = prepareMarkdown('# Über uns\n\n## Für Klienten', undefined, undefined, 'fallback');
  assert.equal(prepared.title, 'Über uns');
  assert.doesNotMatch(prepared.body, /^# Über uns/m);
  assert.match(prepared.body, /id="uber-uns"/);
  assert.equal(prepared.anchorMap.get('fur-klienten'), 'für-klienten');
});

test('prepareMarkdown demotes a late H1 instead of using it as title', () => {
  const prepared = prepareMarkdown('Einleitung\n\n# Abschnitt', undefined, 'Seitentitel', 'fallback');
  assert.equal(prepared.title, 'Seitentitel');
  assert.match(prepared.body, /^## Abschnitt$/m);
});

test('admonition conversion handles nesting and custom titles', () => {
  const source = [
    '1. Schritt',
    '   !!! warning "Achtung"',
    '       Text',
    '       !!! info "Info"',
    '           Mehr',
  ].join('\n');
  const result = convertMkDocsAdmonitions(source);
  assert.equal(result.converted, 2);
  assert.match(result.markdown, /   :::caution\[Achtung\]/);
  assert.match(result.markdown, /   :::note\[Info\]/);
  assert.doesNotMatch(result.markdown, /!!!/);
});
