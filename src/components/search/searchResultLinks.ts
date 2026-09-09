/**
 * Carries the current search terms over to the page a search result links to,
 * so the matching text can be highlighted there.
 *
 * Pagefind can do this itself via its `highlightParam` option, but that option
 * has to be handed to the Pagefind backend. Starlight's `pagefind` config
 * schema doesn't include `highlightParam` and strips it. Before backend
 * initialization, runtime options replace the whole stored options object,
 * so a separate call can overwrite or be overwritten by the search UI.
 * Options merge after initialization, but coordinating with Starlight's
 * private UI lifecycle would add another dependency on upstream internals.
 *
 * Rewriting the rendered result links instead is deterministic and has the
 * added benefit of working for every way of following a result — normal click,
 * middle click, "open in new tab" and "copy link address" — because the term
 * is part of the `href` rather than applied during a click handler.
 */

import { termsFromQuery } from './searchTerms.ts';

const HIGHLIGHT_PARAM = 'highlight';
const SEARCH_ROOT_ID = 'starlight__search';
const INPUT_SELECTOR = '.pagefind-ui__search-input';
const RESULT_LINK_SELECTOR = '.pagefind-ui__result a[href]';
/** Remembers the untouched href so repeated passes stay idempotent. */
const BASE_HREF_ATTR = 'data-rzl-base-href';

function decorateResultLinks(root: HTMLElement): void {
  const query = root.querySelector<HTMLInputElement>(INPUT_SELECTOR)?.value ?? '';
  const terms = termsFromQuery(query);

  for (const link of root.querySelectorAll<HTMLAnchorElement>(RESULT_LINK_SELECTOR)) {
    const base = link.getAttribute(BASE_HREF_ATTR) ?? link.getAttribute('href');
    if (base === null) continue;
    link.setAttribute(BASE_HREF_ATTR, base);

    if (terms.length === 0) {
      link.setAttribute('href', base);
      continue;
    }

    try {
      const url = new URL(base, window.location.href);
      url.searchParams.delete(HIGHLIGHT_PARAM);
      for (const term of terms) url.searchParams.append(HIGHLIGHT_PARAM, term);
      link.setAttribute('href', `${url.pathname}${url.search}${url.hash}`);
    } catch {
      link.setAttribute('href', base);
    }
  }
}

export function initSearchResultLinks(): void {
  const start = (): void => {
    const root = document.getElementById(SEARCH_ROOT_ID);
    if (!root) return;

    const update = () => decorateResultLinks(root);

    // Results are rendered asynchronously and re-rendered on every query or
    // filter change. Only `childList` is observed, so rewriting the `href`
    // attributes below can't re-trigger this observer.
    new MutationObserver(update).observe(root, { childList: true, subtree: true });
    root.addEventListener('input', update);
    update();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
}
