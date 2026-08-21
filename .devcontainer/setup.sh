#!/bin/bash

set -e # Exit immediately if a command exits with a non-zero status.

git config --local pull.rebase true

corepack enable

pnpm install --frozen-lockfile
