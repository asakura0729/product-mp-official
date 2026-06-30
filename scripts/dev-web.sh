#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

if [ -s "${NVM_DIR:-$HOME/.nvm}/nvm.sh" ]; then
	# shellcheck source=/dev/null
	. "${NVM_DIR:-$HOME/.nvm}/nvm.sh"
	nvm use --silent 2>/dev/null || nvm use 22 --silent 2>/dev/null || true
fi

node "$ROOT/scripts/ensure-node.mjs"
cd "$ROOT/apps/web"
exec npx astro dev "$@"
