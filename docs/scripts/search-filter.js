(function () {
  const configNode = document.getElementById("__config");
  const runtimeConfig = configNode ? JSON.parse(configNode.textContent || "{}") : {};
  const baseUrl = (() => {
    try {
      return new URL(runtimeConfig.base || ".", window.location.href);
    } catch (error) {
      console.warn("Programmfilter: Konnte Basis-URL nicht bestimmen.", error);
      return new URL(window.location.href);
    }
  })();

  const indexUrl = new URL("search/search_index.json", baseUrl);
  const storageKey = "program-filter";

  const getStored = () => {
    try {
      if (typeof __md_get === "function") {
        return __md_get(storageKey);
      }
      const raw = localStorage.getItem(storageKey);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      console.warn("Programmfilter: Lesen aus localStorage fehlgeschlagen.", error);
      return null;
    }
  };

  const setStored = (value) => {
    try {
      if (typeof __md_set === "function") {
        __md_set(storageKey, value);
      } else {
        localStorage.setItem(storageKey, JSON.stringify(value || ""));
      }
    } catch (error) {
      console.warn("Programmfilter: Speichern in localStorage fehlgeschlagen.", error);
    }
  };

  let mappingPromise;
  const loadMapping = () => {
    if (!mappingPromise) {
      mappingPromise = fetch(indexUrl.toString())
        .then((response) => (response.ok ? response.json() : {}))
        .then((data) => ({
          programs: data.programs || {},
          options: data.program_options || [],
        }))
        .catch(() => ({ programs: {}, options: [] }));
    }
    return mappingPromise;
  };

  const normalizeLocation = (href) => {
    const resolved = new URL(href, baseUrl);
    let path = resolved.pathname;
    if (path.startsWith(baseUrl.pathname)) {
      path = path.slice(baseUrl.pathname.length);
    }
    path = path.replace(/^\/+/, "");
    const hash = resolved.hash || "";
    return hash ? `${path}${hash}` : path;
  };

  const deriveProgramFromLocation = (location) => {
    if (!location) return "";
    const clean = location.split("#")[0];
    const parts = clean.split("/").filter(Boolean);
    return parts.length ? parts[0] : "";
  };

  const resolveProgram = (mapping, location) => {
    if (!location) return "";
    return (
      mapping[location] ||
      mapping[location.split("#")[0]] ||
      deriveProgramFromLocation(location) ||
      ""
    );
  };

  const updateMeta = (meta, visible, labelText) => {
    if (!meta) return;
    const current = meta.textContent || "";
    if (!meta.dataset.originalText) {
      meta.dataset.originalText = current;
    }

    if (!labelText) {
      // Keep the live meta text unchanged when no filter is active.
      meta.dataset.originalText = meta.textContent || meta.dataset.originalText;
      return;
    }

    meta.textContent = visible
      ? `${visible} Treffer (${labelText})`
      : `Keine Treffer (${labelText})`;
  };

  const applyFilter = ({ select, list, meta }) =>
    loadMapping().then(({ programs }) => {
      const selected = select.value;
      const items = Array.from(list.children || []);
      let visible = 0;
      const selectedLabel = selected
        ? select.selectedOptions[0]?.textContent?.trim() || selected
        : "";

      for (const item of items) {
        const anchor = item.querySelector("a[href]");
        if (!anchor) continue;
        const location = normalizeLocation(anchor.getAttribute("href"));
        const programId = resolveProgram(programs, location);
        item.dataset.programId = programId;

        const match = !selected || (programId && programId === selected);
        item.classList.toggle("md-search-result__item--hidden", !match);
        item.toggleAttribute("hidden", !match);
        if (match) visible += 1;
      }

      updateMeta(meta, visible, selectedLabel);
    });

  const setup = (container) => {
    const select = container.querySelector("[data-program-filter-select]");
    const list = container.parentElement?.querySelector(".md-search-result__list");
    const meta = container.parentElement?.querySelector(".md-search-result__meta");
    if (!select || !list) return;

    const toggle = container.querySelector("[data-program-filter-toggle]");
    const panel = container.querySelector("[data-program-filter-panel]");
    const saved = getStored();
    if (saved && select.querySelector(`option[value="${saved}"]`)) {
      select.value = saved;
    }

    if (toggle && panel) {
      const setOpen = (open) => {
        container.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      };
      toggle.addEventListener("click", () => setOpen(!container.classList.contains("is-open")));
    }

    const apply = () => applyFilter({ select, list, meta });
    select.addEventListener("change", () => {
      setStored(select.value);
      apply();
    });

    const observer = new MutationObserver(() => {
      if (meta && !meta.dataset.originalText) {
        meta.dataset.originalText = meta.textContent || "";
      }
      apply();
    });
    observer.observe(list, { childList: true });

    apply();
  };

  const init = () => {
    const containers = document.querySelectorAll("[data-program-filter]");
    containers.forEach((container) => setup(container));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
