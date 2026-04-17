# Hello BranchKit (TypeScript)

A minimal [BranchKit](https://branchkit.dev) plugin that types a greeting at the cursor.

This is a **starter template** — clone it, customize it, and use it as the foundation for your own plugin.

## What it does

- **Voice**: Say "hello branchkit" → types "Hello, BranchKit!" at your cursor
- **Voice**: Say "hello Alice" → types "Hello, Alice!"
- **Keybind**: Alt+Shift+H → types "Hello, BranchKit!"

## Setup

### 1. Clone

```bash
git clone https://github.com/branchkit/branchkit-plugin-hello-ts.git my-plugin
cd my-plugin
```

### 2. Install dependencies

```bash
cd src && bun install
```

### 3. Generate typed params (optional)

If you add or change fields in `action_types`, re-run the codegen tool:

```bash
go install github.com/branchkit/branchkit-gen@latest
branchkit-gen --plugin .
```

This updates `src/actions_gen.ts` with typed interfaces derived from your `plugin.json`.

### 4. Install

Copy the plugin into BranchKit's plugin directory:

```bash
cp -r . ~/Library/Application\ Support/BranchKitDev/plugins/hello/
```

Restart BranchKit. Your plugin loads automatically — no build step needed. BranchKit runs `run.sh` which invokes `bun run src/index.ts` directly.

## Files

| File | Purpose |
|---|---|
| `plugin.json` | Manifest — declares actions, keybinds, voice commands |
| `commands.json` | Voice command patterns that trigger actions |
| `run.sh` | Entry point — BranchKit spawns this as the plugin process |
| `src/index.ts` | Handler logic — your plugin's behavior |
| `src/actions_gen.ts` | Generated typed params (from `branchkit-gen`) |

## Customizing

1. Change `"id"` and `"action_prefix"` in `plugin.json` to your plugin's name
2. Add actions to `action_types` with the fields they accept
3. Run `branchkit-gen --plugin .` to regenerate `src/actions_gen.ts`
4. Write handler logic in `src/index.ts`
5. Add voice commands to `commands.json` and keybinds to `plugin.json`

## Learn more

- [Your First Plugin](https://branchkit.dev/guide/getting-started/your-first-plugin) — step-by-step tutorial
- [Actions](https://branchkit.dev/guide/concepts/actions) — action routing, typed params, validation
- [Plugin SDK (TypeScript)](https://github.com/branchkit/plugin-sdk-ts) — full SDK reference
- [branchkit-gen](https://github.com/branchkit/branchkit-gen) — codegen tool

## License

MIT
