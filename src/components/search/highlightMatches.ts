/**
 * Highlights the search terms on the page a search result led to.
 *
 * The terms arrive as repeated `?highlight=` query parameters, added to the
 * result links by `searchResultLinks.ts`. Pagefind ships a highlighter
 * (`pagefind-highlight.js`, a thin wrapper around mark.js) as part of the
 * search bundle, so it is reused here instead of hand-rolling text matching —
 * it already handles matches spanning text nodes, diacritics and skipping
 * `[data-pagefind-ignore]` regions.
 *
 * That script is only fetched when a `highlight` parameter is actually
 * present, so ordinary navigation doesn't pay for it.
 */

const HIGHLIGHT_PARAM = 'highlight';
export const HIGHLIGHT_CLASS = 'rzl-search-highlight';

const pagefindBase = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/pagefind/`;

function prefersReducedMotion(): boolean {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
}

async function highlight(): Promise<void> {
  const terms = new URLSearchParams(window.location.search)
    .getAll(HIGHLIGHT_PARAM)
    .filter((term) => term.trim().length > 0);
  if (terms.length === 0) return;

  try {
    const { default: PagefindHighlight } = await import(
      /* @vite-ignore */ `${pagefindBase}pagefind-highlight.js`
    );

    new PagefindHighlight({
      highlightParam: HIGHLIGHT_PARAM,
      // Pagefind would otherwise inject `background: yellow; color: black`,
      // which ignores the site's colour scheme. Styled in `rzl.css` instead.
      addStyles: false,
      markOptions: { className: HIGHLIGHT_CLASS },
    });
  } catch (error) {
    // Highlighting is a nicety; never let it break the page.
    console.warn('Suchtreffer konnten nicht hervorgehoben werden.', error);
    return;
  }

  // When the result linked to a heading anchor the browser has already
  // scrolled there and the match is just below it, so leave the position
  // alone. Without an anchor the match can be anywhere on the page.
  if (window.location.hash) return;
  const first = document.querySelector(`.${HIGHLIGHT_CLASS}`);
  first?.scrollIntoView({
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
