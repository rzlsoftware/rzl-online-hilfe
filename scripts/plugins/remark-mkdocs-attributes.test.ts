import assert from 'node:assert/strict';
import test from 'node:test';
import type { Root } from 'mdast';

import remarkMkDocsAttributes from '../../src/plugins/remark-mkdocs-attributes.ts';

test('converts image mode and width attributes', () => {
  const tree: Root = {
    type: 'root',
    children: [{
      type: 'paragraph',
      children: [
        { type: 'image', url: 'img/logo.svg#only-dark', alt: 'Logo' },
        { type: 'text', value: '{:width="1000px"}' },
      ],
    }],
  };
  remarkMkDocsAttributes()(tree);
  const image = tree.children[0]?.type === 'paragraph' ? tree.children[0].children[0] : undefined;
  assert.equal(image?.type, 'image');
  if (image?.type !== 'image') return;
  assert.equal(image.url, 'img/logo.svg');
  assert.deepEqual(image.data?.hProperties?.className, ['img-dark']);
  assert.equal(image.data?.hProperties?.style, 'width:1000px;');
});

test('converts link target and inline-code clipboard attributes', () => {
  const tree: Root = {
    type: 'root',
    children: [{
      type: 'paragraph',
      children: [
        { type: 'link', url: 'https://example.com', children: [{ type: 'text', value: 'Extern' }] },
        { type: 'text', value: '{:target="_blank"} und ' },
        { type: 'inlineCode', value: 'Formel()' },
        { type: 'text', value: '{data-clipboard-text="Formel()"}' },
      ],
    }],
  };
  remarkMkDocsAttributes()(tree);
  const paragraph = tree.children[0];
  assert.equal(paragraph?.type, 'paragraph');
  if (paragraph?.type !== 'paragraph') return;
  const link = paragraph.children[0];
  const inlineCode = paragraph.children[2];
  assert.equal(link?.data?.hProperties?.target, '_blank');
  assert.equal(inlineCode?.data?.hProperties?.['data-clipboard-text'], 'Formel()');
});

test('converts width/target attributes split by remark-directive into Text("{") + textDirective + Text(rest)', () => {
  // Starlight registers remark-directive (for its `:::note`/`:::caution` asides)
  // as a syntax extension, which intercepts `{:name=...}` during parsing and
  // splits what looks like one sibling Text node into three siblings. This
  // reproduces that exact shape without needing remark-directive as a
  // dependency (see remark-mkdocs-attributes.ts for the full explanation).
  const tree: Root = {
    type: 'root',
    children: [{
      type: 'paragraph',
      children: [
        { type: 'image', url: 'img/logo.svg#only-light', alt: 'Logo' },
        { type: 'text', value: '{' },
        { type: 'textDirective', name: 'width', attributes: {}, children: [] },
        { type: 'text', value: '="1000px"}\n' },
        { type: 'link', url: 'https://example.com', children: [{ type: 'text', value: 'Extern' }] },
        { type: 'text', value: '{' },
        { type: 'textDirective', name: 'target', attributes: {}, children: [] },
        { type: 'text', value: '="_blank"}' },
      ],
    }],
  };
  remarkMkDocsAttributes()(tree);
  const paragraph = tree.children[0];
  assert.equal(paragraph?.type, 'paragraph');
  if (paragraph?.type !== 'paragraph') return;

  const image = paragraph.children[0];
  assert.equal(image?.type, 'image');
  if (image?.type === 'image') {
    assert.equal(image.url, 'img/logo.svg');
    assert.deepEqual(image.data?.hProperties?.className, ['img-light']);
    assert.equal(image.data?.hProperties?.style, 'width:1000px;');
  }

  const trailingText = paragraph.children[1];
  assert.equal(trailingText?.type, 'text');
  if (trailingText?.type === 'text') assert.equal(trailingText.value, '\n');

  const link = paragraph.children[2];
  assert.equal(link?.type, 'link');
  assert.equal(link?.data?.hProperties?.target, '_blank');
  assert.equal(link?.data?.hProperties?.rel, 'noopener noreferrer');
  assert.equal(paragraph.children.length, 3);
});
