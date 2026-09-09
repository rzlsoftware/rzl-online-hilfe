#!/bin/bash

set -e # Exit immediately if a command exits with a non-zero status.

git config --local pull.rebase true

# The image's Node patch can lag behind .nvmrc.
source "${NVM_DIR}/nvm.sh" --no-use
nvm install
nvm alias default "$(node --version)"

# Node 25+ no longer bundles Corepack.
npm install --global corepack@0.36.0
corepack enable pnpm

pnpm install --frozen-lockfile
