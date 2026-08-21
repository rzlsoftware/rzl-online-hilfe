/**
 * Program filter for Starlight's Pagefind-based search.
 *
 * Ports the behavior of the legacy `docs/scripts/search-filter.js` (MkDocs
 * Material) to the Pagefind default UI mounted by
 * `@astrojs/starlight/components/Search.astro`.
 *
 * Pagefind does not currently facet on our `program` frontmatter field (no
 * `data-pagefind-filter` attributes are emitted during the content build),
 * so the program id for each result is derived client-side from the first
 * path segment of the result URL, same as the legacy `deriveProgramFromLocation`
 * fallback. The route -> id mapping comes from `src/nav/programs.generated.ts`.
 */

export interface ProgramOption {
  id: string;
  label: string;
  route: string;
}

const STORAGE_KEY = 'program-filter';

const RESULTS_SELECTOR = '.pagefind-ui__results';
const RESULT_ITEM_SELECTOR = ':scope > .pagefind-ui__result';
const MESSAGE_SELECTOR = '.pagefind-ui__message';

function readOptions(): ProgramOption[] {
  const node = document.getElementById('program-filter-options');
  if (!node?.textContent) return [];
  try {
    const parsed: unknown = JSON.parse(node.textContent);
    return Array.isArray(parsed) ? (parsed as ProgramOption[]) : [];
  } catch (error) {
    console.warn('Programmfilter: Optionen konnten nicht gelesen werden.', error);
    return [];
  }
}

function firstSegment(path: string): string {
  return path.split('/').filter(Boolean)[0] ?? '';
}

function buildRouteSegmentToId(programs: ProgramOption[]): Map<string, string> {
  const map = new Map<string, string>();
  for (const program of programs) {
    const segment = firstSegment(program.route);
    if (segment) map.set(segment, program.id);
  }
  return map;
}

function getStored(): string {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? '';
  } catch (error) {
    console.warn('Programmfilter: Lesen aus localStorage fehlgeschlagen.', error);
    return '';
  }
}

function setStored(value: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch (error) {
    console.warn('Programmfilter: Speichern in localStorage fehlgeschlagen.', error);
  }
}

function deriveProgramId(resultEl: Element, routeSegmentToId: Map<string, string>): string {
  const anchor = resultEl.querySelector('a[href]');
  const href = anchor?.getAttribute('href');
  if (!href) return '';
  try {
    const url = new URL(href, window.location.href);
    const segment = firstSegment(url.pathname);
    return routeSegmentToId.get(segment) ?? segment;
  } catch (error) {
    console.warn('Programmfilter: Konnte Programm nicht aus URL ableiten.', error);
    return '';
  }
}

function updateMessage(container: HTMLElement, visible: number, total: number, label: string): void {
  const message = container.querySelector<HTMLElement>(MESSAGE_SELECTOR);
  if (!message) return;
  if (!message.dataset.originalText) {
    message.dataset.originalText = message.textContent ?? '';
  }
  if (!label) {
    message.textContent = message.dataset.originalText;
    return;
  }
  message.textContent =
    visible > 0 ? `${visible} Treffer (${label})` : `Keine Treffer (${label})`;
  void total;
}

function applyFilter(
  resultsContainer: HTMLElement,
  select: HTMLSelectElement,
  routeSegmentToId: Map<string, string>,
): void {
  const selected = select.value;
  const selectedLabel = selected ? select.selectedOptions[0]?.textContent?.trim() ?? '' : '';
  const items = Array.from(resultsContainer.querySelectorAll<HTMLElement>(RESULT_ITEM_SELECTOR));

  let visible = 0;
  for (const item of items) {
    const programId = deriveProgramId(item, routeSegmentToId);
    const match = !selected || programId === selected;
    // Pagefind's bundled CSS (`@pagefind/default-ui/css/ui.css`) sets
    // `display: flex` on `.pagefind-ui__result` as an author-origin style,
    // which always overrides the User-Agent default `[hidden] { display: none }`
    // regardless of specificity. Setting an inline style instead reliably wins
    // over the external stylesheet.
    item.style.display = match ? '' : 'none';
    if (match) visible += 1;
  }

  updateMessage(resultsContainer, visible, items.length, selectedLabel);
}

function watchForResultsContainer(host: HTMLElement, onFound: (container: HTMLElement) => void): void {
  const existing = host.querySelector<HTMLElement>(RESULTS_SELECTOR);
  if (existing) {
    onFound(existing);
    return;
  }
  const observer = new MutationObserver(() => {
    const found = host.querySelector<HTMLElement>(RESULTS_SELECTOR);
    if (found) {
      observer.disconnect();
      onFound(found);
    }
  });
  observer.observe(host, { childList: true, subtree: true });
}

function buildSelect(programs: ProgramOption[]): HTMLSelectElement {
  const select = document.createElement('select');
  select.setAttribute('data-program-filter-select', '');
  select.setAttribute('aria-label', 'Programm');

  const allOption = document.createElement('option');
  allOption.value = '';
  allOption.textContent = 'Alle Programme';
  select.append(allOption);

  for (const program of programs) {
    const option = document.createElement('option');
    option.value = program.id;
    option.textContent = program.label;
    select.append(option);
  }

  return select;
}

function setup(): void {
  const target = document.getElementById('starlight__search');
  const container = target?.parentElement;
  if (!target || !container) return;
  if (container.querySelector('[data-program-filter]')) return; // already initialized

  const programs = readOptions();
  if (programs.length === 0) return;
  const routeSegmentToId = buildRouteSegmentToId(programs);

  const wrapper = document.createElement('div');
  wrapper.setAttribute('data-program-filter', '');
  wrapper.className = 'program-filter';

  const select = buildSelect(programs);
  const stored = getStored();
  if (stored && Array.from(select.options).some((option) => option.value === stored)) {
    select.value = stored;
  }

  wrapper.append(select);
  container.insertBefore(wrapper, target);

  const apply = () => {
    const resultsContainer = target.querySelector<HTMLElement>(RESULTS_SELECTOR);
    if (resultsContainer) applyFilter(resultsContainer, select, routeSegmentToId);
  };

  select.addEventListener('change', () => {
    setStored(select.value);
    apply();
  });

  watchForResultsContainer(target, (resultsContainer) => {
    apply();
    const resultsObserver = new MutationObserver(() => apply());
    resultsObserver.observe(resultsContainer, { childList: true });
  });
}

export function initProgramFilter(): void {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup, { once: true });
  } else {
    setup();
  }
}
