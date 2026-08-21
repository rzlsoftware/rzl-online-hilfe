import assert from 'node:assert/strict';
import test from 'node:test';

import { rewriteMarkdownLinks, type LinkRewriteContext } from './links.ts';

function context(): LinkRewriteContext {
  return {
    sourcePage: 'Bereich/Start Seite.md',
    targetPage: 'bereich/start-seite.md',
    sourceToTarget: new Map([
      ['Bereich/Start Seite.md', 'bereich/start-seite.md'],
      ['Bereich/Andere Seite.md', 'bereich/andere-seite.md'],
      ['Bereich/img/Bild Datei.png', 'bereich/img/Bild Datei.png'],
    ]),
    markdownRoutes: new Map([
      ['Bereich/Start Seite.md', '/bereich/start-seite/'],
      ['Bereich/Andere Seite.md', '/bereich/andere-seite/'],
    ]),
    legacyRoutes: new Map([
      ['/Bereich/Andere Seite/', 'Bereich/Andere Seite.md'],
    ]),
    anchors: new Map([
      ['Bereich/Start Seite.md', new Map([['uberblick', 'überblick']])],
      ['Bereich/Andere Seite.md', new Map([['anderung', 'änderung']])],
    ]),
    warnings: [],
  };
}

test('rewrites Markdown pages, anchors, and encoded assets', () => {
  const result = rewriteMarkdownLinks(
    '[Andere](<Andere Seite.md/#anderung>)\n![Bild](<img/Bild Datei.png#only-light>)\n[Hier](#uberblick)',
    context(),
  );
  assert.match(result.markdown, /\/bereich\/andere-seite\/#%C3%A4nderung/);
  assert.match(result.markdown, /img\/Bild%20Datei.png#only-light/);
  assert.match(result.markdown, /#%C3%BCberblick/);
  assert.equal(result.rewritten, 3);
});

test('does not rewrite links inside fenced code', () => {
  const result = rewriteMarkdownLinks('```md\n[Andere](Andere Seite.md)\n```', context());
  assert.equal(result.rewritten, 0);
});
