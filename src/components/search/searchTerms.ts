/**
 * Shared handling of the terms used for search hit highlighting.
 *
 * Used by both ends of the feature: `searchResultLinks.ts` puts the terms into
 * the result URLs, `highlightMatches.ts` marks them on the target page.
 */

/**
 * German function words. Highlighting these is pure noise — searching
 * "Mitarbeiter und Klientenliste" should not paint every "und" on the page —
 * and they never help to locate a passage.
 *
 * Deliberately a stop-word list rather than a minimum term length: short
 * tokens like "KV", "BV" or "L19" are meaningful in this documentation.
 */
const STOP_WORDS = new Set([
  'ab', 'aber', 'alle', 'allen', 'aller', 'alles', 'als', 'am', 'an', 'auch', 'auf', 'aus',
  'bei', 'beim', 'bin', 'bis', 'bzw',
  'da', 'damit', 'dann', 'das', 'dass', 'dem', 'den', 'denn', 'der', 'des', 'die', 'dies',
  'diese', 'diesem', 'diesen', 'dieser', 'dieses', 'doch', 'dort', 'durch',
  'ein', 'eine', 'einem', 'einen', 'einer', 'eines', 'er', 'es', 'etwa',
  'fur', 'gegen',
  'hat', 'hatte', 'hatten', 'hier',
  'ich', 'ihr', 'ihre', 'ihrem', 'ihren', 'ihrer', 'im', 'in', 'ins', 'ist',
  'kann', 'konnen',
  'man', 'mit', 'muss', 'mussen',
  'nach', 'nicht', 'noch', 'nur',
  'ob', 'oder', 'ohne',
  'sich', 'sie', 'sind', 'so', 'soll', 'sollen', 'sowie',
  'uber', 'um', 'und', 'uns', 'unter',
  'vom', 'von', 'vor',
  'war', 'waren', 'was', 'wenn', 'werden', 'wie', 'wird', 'wo', 'wurde', 'wurden',
  'zu', 'zum', 'zur', 'zwischen',
]);

/**
 * Lower-cases and strips diacritics so "für" and "fur" compare equal, matching
 * how the terms are compared against headings.
 */
export function normaliseTerm(value: string): string {
  return value
    .toLocaleLowerCase('de')
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .trim();
}

/** Guards against an unwieldy query bloating the URL. */
const MAX_TERMS = 8;

/**
 * Reduces a raw query to the terms worth highlighting: no stop words, no
 * single characters and no duplicates.
 */
export function meaningfulTerms(rawTerms: readonly string[]): string[] {
  const seen = new Set<string>();
  const terms: string[] = [];

  for (const rawTerm of rawTerms) {
    const term = rawTerm.trim();
    if (term.length < 2) continue;

    const key = normaliseTerm(term);
    if (!key || STOP_WORDS.has(key) || seen.has(key)) continue;

    seen.add(key);
    terms.push(term);
    if (terms.length === MAX_TERMS) break;
  }

  return terms;
}

/** Splits a query string into its individual, highlight-worthy terms. */
export function termsFromQuery(query: string): string[] {
  return meaningfulTerms(query.split(/\s+/));
}
