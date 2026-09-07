/**
 * Highlights the search terms on the page a search result led to.
 *
 * The terms arrive as repeated `?highlight=` query parameters, added to the
 * result links by `searchResultLinks.ts`. Pagefind ships a highlighter
 * (`pagefind-highlight.js`, a thin wrapper around mark.js) as part of the
 * search bundle, so it is reused here instead of hand-rolling text matching —
 * it already handles matches spanning text nodes, diacritics and skipping
 * `[data-pagefind-ignore]` regions. That script is only fetched when a
 * `highlight` parameter is actually present, so ordinary navigation doesn't
 * pay for it.
 *
 * Highlighting is deliberately skipped when it would only restate what the
 * reader already knows — see `shouldHighlight()` — and can always be dismissed
 * via the control added by `showClearControl()` or the Escape key.
 */

import { meaningfulTerms, normaliseTerm } from './searchTerms.ts';

const HIGHLIGHT_PARAM = 'highlight';
export const HIGHLIGHT_CLASS = 'rzl-search-highlight';
const CONTROL_CLASS = 'search-highlight-bar';

const pagefindBase = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/pagefind/`;

function prefersReducedMotion(): boolean {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
}

/**
 * The heading the reader navigated to: the anchored heading when the result
 * linked to one, otherwise the page title.
 *
 * Legacy anchors (`<span id="…" class="legacy-anchor">`) carry no text, so an
 * empty element falls back to the `<h1>`, which is what those anchors mirror.
 */
function navigationTarget(): HTMLElement | null {
  const rawHash = window.location.hash.slice(1);
  if (rawHash) {
    let id = rawHash;
    try {
      id = decodeURIComponent(rawHash);
    } catch {
      /* keep the raw value */
    }
    const anchored = document.getElementById(id) ?? document.getElementById(rawHash);
    if (anchored?.textContent?.trim()) return anchored;
  }
  return document.querySelector<HTMLElement>('main h1');
}

/**
 * Highlighting earns its keep when it helps locate something in a long page.
 * If the query simply names the page or section that was opened, every match
 * is a restatement of the heading already on screen, so nothing is marked.
 */
function shouldHighlight(terms: readonly string[], target: HTMLElement | null): boolean {
  if (terms.length === 0) return false;
  const title = normaliseTerm(target?.textContent ?? '');
  if (!title) return true;
  return !terms.every((term) => title.includes(normaliseTerm(term)));
}

function excludeSelectors(target: HTMLElement | null): string[] {
  const selectors = [
    '[data-pagefind-ignore]',
    '[data-pagefind-ignore] *',
    // The page title is what was clicked in the results; marking it again
    // adds nothing.
    'h1',
    'h1 *',
  ];
  if (target?.id) {
    const escaped = `#${CSS.escape(target.id)}`;
    selectors.push(escaped, `${escaped} *`);
  }
  return selectors;
}

function removeHighlightParam(): void {
  const url = new URL(window.location.href);
  if (!url.searchParams.has(HIGHLIGHT_PARAM)) return;
  url.searchParams.delete(HIGHLIGHT_PARAM);
  window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`);
}

/**
 * Rewrites the URL to exactly the terms that will be highlighted.
 *
 * `PagefindHighlight` reads the parameters from the URL itself rather than
 * taking them as an argument, so this is what makes it honour the stop-word
 * filtering — and it keeps hand-edited or older links tidy too.
 */
function setHighlightParams(terms: readonly string[]): void {
  const url = new URL(window.location.href);
  url.searchParams.delete(HIGHLIGHT_PARAM);
  for (const term of terms) url.searchParams.append(HIGHLIGHT_PARAM, term);
  window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`);
}

/** Unwraps the `<mark>` elements, restoring the original text nodes. */
function clearHighlights(): void {
  for (const mark of document.querySelectorAll(`mark.${HIGHLIGHT_CLASS}`)) {
    const parent = mark.parentNode;
    if (!parent) continue;
    while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
    parent.removeChild(mark);
    // Merge the text nodes back together so later passes see intact text.
    parent.normalize();
  }
  document.querySelector(`.${CONTROL_CLASS}`)?.remove();
  removeHighlightParam();
}

/**
 * Anything highlighted on the page needs an obvious way back to a clean view,
 * by mouse and by keyboard.
 */
function showClearControl(marks: ArrayLike<Element>, terms: readonly string[]): void {
  // Name only the terms that actually matched — a query can carry terms that
  // matched the page's metadata or a different section, and claiming to have
  // highlighted them would be misleading.
  const matched = new Set(
    Array.from(marks, (mark) => normaliseTerm(mark.textContent ?? '')).filter(Boolean)
  );
  const named = terms.filter((term) => matched.has(normaliseTerm(term)));
  const quoted = (named.length > 0 ? named : terms).map((term) => `„${term}“`).join(', ');

  const bar = document.createElement('div');
  bar.className = CONTROL_CLASS;
  bar.setAttribute('role', 'status');

  const label = document.createElement('span');
  label.className = `${CONTROL_CLASS}__text`;
  label.textContent =
    marks.length === 1
      ? `1 Fundstelle für ${quoted} hervorgehoben`
      : `${marks.length} Fundstellen für ${quoted} hervorgehoben`;

  const button = document.createElement('button');
  button.type = 'button';
  button.className = `${CONTROL_CLASS}__button`;
  button.textContent = 'Hervorhebung entfernen';
  button.append(Object.assign(document.createElement('kbd'), { textContent: 'Esc' }));
  button.addEventListener('click', clearHighlights);

  bar.append(label, button);
  document.body.append(bar);

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || event.defaultPrevented) return;
    // While the search dialog is open Escape belongs to the dialog.
    if (document.body.hasAttribute('data-search-modal-open')) return;
    if (!document.querySelector(`.${CONTROL_CLASS}`)) return;
    clearHighlights();
  });
}

async function highlight(): Promise<void> {
  const terms = meaningfulTerms(new URLSearchParams(window.location.search).getAll(HIGHLIGHT_PARAM));
  const target = navigationTarget();
  if (!shouldHighlight(terms, target)) {
    removeHighlightParam();
    return;
  }

  try {
    const { default: PagefindHighlight } = await import(
      /* @vite-ignore */ `${pagefindBase}pagefind-highlight.js`
    );

    setHighlightParams(terms);
    new PagefindHighlight({
      highlightParam: HIGHLIGHT_PARAM,
      // Pagefind would otherwise inject `background: yellow; color: black`,
      // which ignores the site's colour scheme. Styled in `rzl.css` instead.
      addStyles: false,
      markOptions: { className: HIGHLIGHT_CLASS, exclude: excludeSelectors(target) },
    });
  } catch (error) {
    // Highlighting is a nicety; never let it break the page.
    console.warn('Suchtreffer konnten nicht hervorgehoben werden.', error);
    return;
  }

  const marks = document.querySelectorAll(`mark.${HIGHLIGHT_CLASS}`);
  if (marks.length === 0) {
    removeHighlightParam();
    return;
  }

  showClearControl(marks, terms);

  // When the result linked to a heading anchor the browser has already
  // scrolled there and the match is just below it, so leave the position
  // alone. Without an anchor the match can be anywhere on the page.
  if (window.location.hash) return;
  marks[0]?.scrollIntoView({
    block: 'center',
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  });
}

export function initSearchHighlight(): void {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => void highlight(), { once: true });
  } else {
    void highlight();
  }
}
