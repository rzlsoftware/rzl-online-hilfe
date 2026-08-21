import assert from 'node:assert/strict';
import test from 'node:test';

import {
  encodedRoute,
  routeFromMarkdownPath,
  slugifySegment,
  targetPathForSource,
} from './paths.ts';

test('slugifySegment transliterates German characters', () => {
  assert.equal(slugifySegment('Änderung ÖGK Straße'), 'aenderung-oegk-strasse');
  assert.equal(slugifySegment('FIBUNext'), 'fibu-next');
  assert.equal(slugifySegment('WiEReG Anbindung'), 'wiereg-anbindung');
});

test('targetPathForSource normalizes content paths but retains asset names', () => {
  assert.equal(
    targetPathForSource('LOHN/Freie Lohnarten/Lohnarten ändern.md'),
    'lohn/freie-lohnarten/lohnarten-aendern.md',
  );
  assert.equal(targetPathForSource('Board/img/Board DM.svg'), 'board/img/Board DM.svg');
});

test('route helpers preserve directory URLs', () => {
  assert.equal(routeFromMarkdownPath('board/index.md'), '/board/');
  assert.equal(routeFromMarkdownPath('index.md'), '/');
  assert.equal(encodedRoute('/Freie Lohnarten/Änderung/'), '/Freie%20Lohnarten/%C3%84nderung/');
});
