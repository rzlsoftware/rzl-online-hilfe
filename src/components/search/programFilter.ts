/**
 * Program filter for Starlight's Pagefind-based search.
 *
 * The filter drives Pagefind's *native* index-level filtering rather than
 * hiding already-rendered results in the DOM. The page's program is indexed as
 * a `program` Pagefind filter (see `src/components/MarkdownContent.astro`), and
 * Pagefind's default UI renders a checkbox per filter value. We keep the
 * familiar dropdown, hide that native checkbox panel via CSS, and mirror the
 * dropdown selection onto the checkboxes — which is the component's own
 * supported way of changing `selected_filters` and re-running the search.
 *
 * Doing it natively (instead of the previous approach of hiding rendered
 * result nodes) fixes three things at once:
 *   - the result count in the message reflects the filter,
 *   - "load more" only appears when more *matching* results exist,
 *   - matches beyond the first page are no longer lost. Pagefind only renders
 *     5 results at a time, so hiding nodes could hide every loaded result while
 *     real matches sat further down the unfiltered result list.
 *
 * Additionally the option labels are annotated with per-program hit counts for
 * the current query, so it is obvious where the results actually are.
 */

export interface ProgramOption {
  id: string;
  label: string;
  route: string;
}

interface QueryCounts {
  perProgram: Record<string, number>;
  total: number;
}

// Only the generated Pagefind module's API used for the filter counts.
interface PagefindApi {
  search(term: string): Promise<{
    filters: Record<string, Record<string, number>>;
    results: unknown[];
  }>;
}

const STORAGE_KEY = 'program-filter';
const FILTER_KEY = 'program';
const SEARCH_ROOT_ID = 'starlight__search';
const INPUT_SELECTOR = '.pagefind-ui__search-input';
const CHECKBOX_SELECTOR = `input.pagefind-ui__filter-checkbox[name="${FILTER_KEY}"]`;
/** Slightly longer than Pagefind's own 300 ms debounce so we settle after it. */
const COUNT_DEBOUNCE_MS = 350;

const pagefindBundleBase = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/pagefind/`;

let pagefindPromise: Promise<PagefindApi> | undefined;
/**
 * Resolves the same module instance the Pagefind UI itself imports (identical
 * specifier => ES module cache hit), so this reuses the already-loaded index
 * rather than initialising a second copy.
 */
function loadPagefind(): Promise<PagefindApi> {
  pagefindPromise ??= import(/* @vite-ignore */ `${pagefindBundleBase}pagefind.js`);
  return pagefindPromise;
}

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
  const searchRoot = document.getElementById(SEARCH_ROOT_ID);
  const container = searchRoot?.parentElement;
  if (!searchRoot || !container) return;
  if (container.querySelector('[data-program-filter]')) return; // already initialised

  const programs = readOptions();
  if (programs.length === 0) return;

  const labels = new Map(programs.map((program) => [program.id, program.label]));

  const wrapper = document.createElement('div');
  wrapper.setAttribute('data-program-filter', '');
  wrapper.className = 'program-filter';

  const select = buildSelect(programs);
  const stored = getStored();
  if (stored && Array.from(select.options).some((option) => option.value === stored)) {
    select.value = stored;
  }

  const hint = document.createElement('p');
  hint.className = 'program-filter__hint';
  hint.setAttribute('role', 'status');
  hint.hidden = true;

  wrapper.append(select, hint);
  container.insertBefore(wrapper, searchRoot);

  let counts: QueryCounts | null = null;

  /** Mirror the dropdown onto Pagefind's own (visually hidden) checkboxes. */
  const syncNativeFilter = (): void => {
    const boxes = searchRoot.querySelectorAll<HTMLInputElement>(CHECKBOX_SELECTOR);
    for (const box of boxes) {
      const shouldBeChecked = box.value === select.value;
      // Only touch (and notify about) checkboxes that actually change, so the
      // MutationObserver below can't drive an endless update loop.
      if (box.checked !== shouldBeChecked) {
        box.checked = shouldBeChecked;
        box.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
  };

  const currentTerm = (): string => searchRoot.querySelector<HTMLInputElement>(INPUT_SELECTOR)?.value.trim() ?? '';

  const render = (): void => {
    const selected = select.value;

    for (const option of Array.from(select.options)) {
      const baseLabel = option.value === '' ? 'Alle Programme' : (labels.get(option.value) ?? option.value);
      if (!counts) {
        option.textContent = baseLabel;
        continue;
      }
      const count = option.value === '' ? counts.total : (counts.perProgram[option.value] ?? 0);
      option.textContent = `${baseLabel} (${count})`;
    }

    // Only explain the situation the filter can't otherwise make obvious:
    // the selected program has no hits while other programs do.
    const matching = selected && counts ? (counts.perProgram[selected] ?? 0) : 0;
    if (selected && counts && matching === 0 && counts.total > 0) {
      const label = labels.get(selected) ?? selected;
      hint.textContent = `Keine Treffer im Programm „${label}“ – ${counts.total} Treffer in allen Programmen.`;
      hint.hidden = false;
    } else {
      hint.hidden = true;
      hint.textContent = '';
    }
  };

  let countsToken = 0;
  const refreshCounts = async (): Promise<void> => {
    const token = ++countsToken;
    const term = currentTerm();
    if (!term) {
      counts = null;
      render();
      return;
    }
    try {
      const pagefind = await loadPagefind();
      // An unfiltered search yields both the overall hit count and the
      // per-program breakdown in one go.
      const result = await pagefind.search(term);
      if (token !== countsToken) return;
      counts = {
        perProgram: result?.filters?.[FILTER_KEY] ?? {},
        total: result?.results?.length ?? 0,
      };
    } catch (error) {
      console.warn('Programmfilter: Trefferanzahl konnte nicht ermittelt werden.', error);
      counts = null;
    }
    if (token === countsToken) render();
  };

  let countsTimer: ReturnType<typeof setTimeout> | undefined;
  const scheduleCountRefresh = (): void => {
    if (countsTimer) clearTimeout(countsTimer);
    countsTimer = setTimeout(() => void refreshCounts(), COUNT_DEBOUNCE_MS);
  };

  select.addEventListener('change', () => {
    setStored(select.value);
    syncNativeFilter();
    render();
  });

  // Pagefind renders its filter panel and results asynchronously, so re-apply
  // the selection whenever the search UI re-renders.
  const observer = new MutationObserver(() => {
    syncNativeFilter();
    scheduleCountRefresh();
  });
  observer.observe(searchRoot, { childList: true, subtree: true });

  searchRoot.addEventListener('input', (event) => {
    if ((event.target as HTMLElement | null)?.matches?.(INPUT_SELECTOR)) scheduleCountRefresh();
  });

  syncNativeFilter();
  scheduleCountRefresh();
}

export function initProgramFilter(): void {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup, { once: true });
  } else {
    setup();
  }
}
