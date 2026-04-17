#!/bin/bash
# BranchKit spawns this script as the plugin process.
# bun runs the TypeScript source directly — no build step needed.
exec bun run "$(dirname "$0")/src/index.ts"
