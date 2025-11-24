from setuptools import find_packages, setup


setup(
    name="rzl-mkdocs-plugins",
    version="0.1.0",
    description="Local MkDocs plugins for the RZL Online Hilfe",
    packages=find_packages(include=["plugins"]),
    entry_points={
        "mkdocs.plugins": [
            "program-filter = plugins.program_filter:ProgramFilterPlugin",
        ]
    },
    install_requires=[],
)
