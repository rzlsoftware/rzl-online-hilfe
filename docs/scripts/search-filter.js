(() => {
  const STORAGE_KEY = "rzl-program-filter";
  const SELECT_SELECTOR = "[data-program-filter-select]";
  const TOGGLE_SELECTOR = "[data-program-filter-toggle]";
  const CONTROLS_SELECTOR = "[data-program-filter-controls]";
  const RESET_SELECTOR = "[data-program-filter-reset]";
  const RESULT_LIST_SELECTOR = ".md-search-result__list";
  const META_SELECTOR = "[data-md-component=\"search-result-meta\"]";
  const ALL = "__all";

  const loadSelection = () => window.localStorage.getItem(STORAGE_KEY) || ALL;
  const saveSelection = (value) => window.localStorage.setItem(STORAGE_KEY, value);

  const programFromHref = (href) => {
    if (!href) return "";
    try {
      const url = new URL(href, window.location.origin);
      href = url.pathname;
    } catch (e) {
      // ignore
    }
    const cleaned = href.replace(/^\/+/, "").split(/[?#]/)[0];
    if (!cleaned) return "";
    const [first] = cleaned.split("/");
    return first || "";
  };

  const applyFilter = (selected) => {
    const list = document.querySelector(RESULT_LIST_SELECTOR);
    if (!list) return;

    const items = Array.from(list.querySelectorAll(".md-search-result__item"));
    if (!items.length) return;

    let visible = 0;
    items.forEach((item) => {
      const link = item.querySelector("a");
      const program = programFromHref(link?.getAttribute("href"));
      const matches = selected === ALL || program === selected;
      item.style.display = matches ? "" : "none";
      if (matches) visible += 1;
    });

    const meta = document.querySelector(META_SELECTOR);
    if (meta) {
      if (!meta.dataset.baseLabel) {
        meta.dataset.baseLabel = meta.textContent || "";
      }
      const base = meta.dataset.baseLabel;
      if (selected === ALL) {
        meta.textContent = base;
      } else {
        const total = items.length;
        meta.textContent = `${base} – ${visible}/${total} für ${selected}`;
      }
    }
  };

  const initFilter = () => {
    const container = document.querySelector("[data-program-filter]");
    if (!container) return;

    const select = container.querySelector(SELECT_SELECTOR);
    const toggle = container.querySelector(TOGGLE_SELECTOR);
    const controls = container.querySelector(CONTROLS_SELECTOR);
    const reset = container.querySelector(RESET_SELECTOR);
    if (!select || !controls) return;

    const setCollapsed = (collapsed) => {
      container.classList.toggle("program-filter--collapsed", collapsed);
      controls.hidden = collapsed;
      if (toggle) {
        toggle.setAttribute("aria-expanded", String(!collapsed));
      }
    };

    const isMobile = () => window.matchMedia("(max-width: 720px)").matches;
    setCollapsed(isMobile());

    const current = loadSelection();
    select.value = current;

    const runFilter = () => applyFilter(select.value || ALL);

    select.addEventListener("change", () => {
      saveSelection(select.value);
      runFilter();
    });

    reset?.addEventListener("click", () => {
      select.value = ALL;
      saveSelection(ALL);
      runFilter();
    });

    toggle?.addEventListener("click", () => {
      const collapsed = container.classList.contains("program-filter--collapsed");
      setCollapsed(!collapsed);
    });

    window.addEventListener("resize", () => {
      if (isMobile()) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    });

    const list = document.querySelector(RESULT_LIST_SELECTOR);
    if (list) {
      const observer = new MutationObserver(runFilter);
      observer.observe(list, { childList: true, subtree: true });
    }

    runFilter();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFilter, { once: true });
  } else {
    initFilter();
  }
})();
