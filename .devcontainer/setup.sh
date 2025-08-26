#!/bin/bash

set -e # Exit immediately if a command exits with a non-zero status.

git config --local pull.rebase true

pip3 install mkdocs-material mkdocs-awesome-pages-plugin mkdocs-minify-plugin mkdocs-enumerate-headings-plugin
