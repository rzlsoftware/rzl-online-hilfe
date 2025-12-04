"""MkDocs hook module that tags pages with their program for search filtering."""

from __future__ import annotations

import json
from pathlib import Path
from typing import Dict, List, Tuple

import yaml
from mkdocs.config.defaults import MkDocsConfig
from mkdocs.plugins import get_plugin_logger

log = get_plugin_logger(__name__)

# Ordered list of (program id, display title) from docs/.pages nav.
PROGRAM_ENTRIES: List[Tuple[str, str]] = []
# Quick lookup of id -> title.
PROGRAM_LOOKUP: Dict[str, str] = {}
# Mapping of page.url -> {"id": program, "label": title}
PAGE_PROGRAMS: Dict[str, Dict[str, str]] = {}


def _load_program_entries(config: MkDocsConfig) -> List[Tuple[str, str]]:
    """Read docs/.pages to build an ordered list of program ids and titles."""
    pages_path = Path(config.docs_dir) / ".pages"
    if not pages_path.exists():
        return []

    try:
        data = yaml.safe_load(pages_path.read_text(encoding="utf-8")) or {}
    except Exception as exc:  # pragma: no cover - defensive
        log.warning("program_filter: Failed to read %s (%s)", pages_path, exc)
        return []

    entries: List[Tuple[str, str]] = []
    for item in data.get("nav", []):
        if isinstance(item, str):
            entries.append((item, item))
        elif isinstance(item, dict):
            # Expect a single key/value mapping: {Title: Directory}
            title, directory = next(iter(item.items()))
            if isinstance(directory, str):
                entries.append((directory, title))
        else:
            log.debug("program_filter: Ignoring nav entry %r", item)
    return entries


def _derive_program_from_path(src_path: str | Path) -> str | None:
    """Return the first directory segment for a docs page, or None for root files."""
    parts = Path(src_path).parts
    if len(parts) > 1:
        return parts[0]
    return None


def _label_for_program(program: str | None) -> str | None:
    if not program:
        return None
    if program in PROGRAM_LOOKUP:
        return PROGRAM_LOOKUP[program]
    # Fallback: humanize the id
    cleaned = program.replace("_", " ").replace("-", " ").strip()
    return cleaned.title() if cleaned else program


def _normalized_program(value: object) -> str | None:
    if value is False:
        return None
    if value is None:
        return None
    program = str(value).strip()
    return program or None


def _program_options() -> List[Dict[str, str]]:
    return [{"id": program_id, "title": title} for program_id, title in PROGRAM_ENTRIES]


def _update_program_mapping(url: str, program: str | None, label: str | None) -> None:
    if program:
        PAGE_PROGRAMS[url or ""] = {"id": program, "label": label or program}


def on_config(config: MkDocsConfig, **_: object) -> MkDocsConfig:
    """Load program labels and expose them to templates via config.extra."""
    global PROGRAM_ENTRIES, PROGRAM_LOOKUP, PAGE_PROGRAMS
    PROGRAM_ENTRIES = _load_program_entries(config)
    PROGRAM_LOOKUP = {program_id: title for program_id, title in PROGRAM_ENTRIES}
    PAGE_PROGRAMS = {}

    config.extra.setdefault("program_filter", {})
    config.extra["program_filter"]["programs"] = _program_options()
    return config


def on_page_markdown(markdown: str, page, config: MkDocsConfig, files, **_: object) -> str:
    """Attach program metadata to each page."""
    raw_program = page.meta.get("program") if isinstance(page.meta, dict) else None
    program = _normalized_program(raw_program) or _derive_program_from_path(page.file.src_path)
    label = _label_for_program(program)

    if program:
        page.meta["program"] = program
    elif isinstance(page.meta, dict) and "program" in page.meta:
        page.meta.pop("program", None)

    if label and isinstance(page.meta, dict) and "program_label" not in page.meta:
        page.meta["program_label"] = label

    _update_program_mapping(page.url, program, label)
    return markdown


def on_post_build(config: MkDocsConfig, **_: object) -> None:
    """Append program metadata to the generated search index for client-side filters."""
    if not PAGE_PROGRAMS:
        return

    index_path = Path(config.site_dir) / "search" / "search_index.json"
    if not index_path.exists():
        log.warning("program_filter: search index %s not found", index_path)
        return

    try:
        data = json.loads(index_path.read_text(encoding="utf-8"))
    except Exception as exc:  # pragma: no cover - defensive
        log.warning("program_filter: Failed to read search index (%s)", exc)
        return

    data["programs"] = PAGE_PROGRAMS
    data["program_options"] = _program_options()

    index_path.write_text(
        json.dumps(data, sort_keys=True, separators=(",", ":"), ensure_ascii=True),
        encoding="utf-8",
    )
