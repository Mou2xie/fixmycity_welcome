# fixmycity_welcome

## Commands

| Action | Command |
|---|---|
| Dev server | `npm run dev` |
| Build + typecheck | `npm run build` |
| Lint | `npm run lint` |
| Preview build | `npm run preview` |

`npm run build` runs `tsc -b && vite build` — typecheck errors will fail the build.

**No test framework or formatter is configured.**

## Stack

- React 19 + TypeScript 6 + Vite 8
- ESLint 10 (flat config) — run `npm run lint` before committing
- CSS is global (`src/index.css`, `src/App.css`) — no CSS modules, no Tailwind, no CSS-in-JS
- Icons: `lucide-react` — always import from `lucide-react`, never inline SVGs
- Routing: `react-router` is installed but **not yet used** in source
- Design system: See `DESIGN.md` for the visual spec. Actual tokens live in `src/index.css` `:root` — always use CSS custom properties, not hardcoded hex values
- Fonts: Comfortaa (headings) + Inter (body) loaded via Google Fonts in `index.html`
- Light-only theme (no dark mode) — color scheme is `color-scheme: light`

## TypeScript notes

- `erasableSyntaxOnly: true` — no `enum`, `namespace`, or `parameter properties`
- `noUnusedLocals` and `noUnusedParameters` are enabled
- Two tsconfigs: `tsconfig.app.json` (app source) and `tsconfig.node.json` (vite config)
- Build uses `tsc -b` (project references mode) — both configs must pass

## Project structure

- `index.html` → `src/main.tsx` → `src/App.tsx`
- Single package (not a monorepo), never published (`"private": true`)
- No CI, no pre-commit hooks, no env files, no codegen