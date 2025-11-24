import os
from typing import Optional, Set

from mkdocs.config import config_options
from mkdocs.plugins import BasePlugin
from mkdocs.structure.files import Files


class ProgramFilterPlugin(BasePlugin):
    """
    Derives a `program` metadata field from the first path segment under docs/ and
    collects all program names for use in templates. Manual front-matter values are
    respected and not overridden.
    """

    config_scheme = (
        ("meta_key", config_options.Type(str, default="program")),
        (
            "exclude",
            config_options.Type(
                list,
                default=[
                    "img",
                    "stylesheets",
                    "scripts",
                    "setup",
                ],
            ),
        ),
    )

    def __init__(self) -> None:
        self.programs: Set[str] = set()

    def on_config(self, config, **kwargs):
        self.programs = set()
        return config

    def on_files(self, files: Files, config, **kwargs):
        exclude = set(self.config["exclude"])
        programs: Set[str] = set()

        for file in files.documentation_pages():
            program = self._derive_program(file.src_path, exclude)
            if program:
                programs.add(program)

        self.programs = programs
        if programs:
            config.extra.setdefault("program_filters", sorted(programs))
        return files

    def on_page_markdown(self, markdown, page, config, files, **kwargs):
        exclude = set(self.config["exclude"])
        meta_key = self.config["meta_key"]

        program: Optional[str]
        if meta_key in page.meta and page.meta[meta_key]:
            program = str(page.meta[meta_key])
        else:
            program = self._derive_program(page.file.src_path, exclude)
            if program:
                page.meta[meta_key] = program

        if program:
            self.programs.add(program)
        return markdown

    def on_post_build(self, config, **kwargs):
        if self.programs:
            config.extra["program_filters"] = sorted(self.programs)

    @staticmethod
    def _derive_program(src_path: str, exclude: Set[str]) -> Optional[str]:
        parts = src_path.split(os.sep)
        if len(parts) <= 1:
            return None

        candidate = parts[0]
        if not candidate or candidate in exclude:
            return None
        return candidate
