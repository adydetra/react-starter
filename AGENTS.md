# Agent Guide

React 19 + Vite 8 starter template with TypeScript, Tailwind CSS v4, and Zustand state management.

Read only the document needed:
- `docs/architecture.md`: component hierarchy, Zustand state store, hooks, and asset pipeline.
- `docs/style.md`: Tailwind CSS v4 setup with `@tailwindcss/vite` and utility styling conventions.
- `docs/testing.md`: TypeScript compiler check (`tsc -b`), linting commands, and build validation.
- `docs/push.md`: branch naming, commit standards, pull request lifecycle, and pre-push validation.
- `docs/status.md`: implemented features, key dependencies, and roadmap.

## Source Map

- `src/main.tsx`: React DOM client mount and root render.
- `src/App.tsx`: main application shell and feature view.
- `src/index.css`: Tailwind CSS v4 entry point and global typography/colors.
- `vite.config.ts`: Vite 8 configuration with `@vitejs/plugin-react` and `@tailwindcss/vite`.
- `tsconfig.json`: root TypeScript configuration referencing project solution configs.
- `tsconfig.app.json`: client TypeScript compiler options.
- `eslint.config.js`: ESLint flat configuration for React Hooks, React Refresh, and TypeScript.
- `package.json`: scripts and dependency declarations.

## Invariants

- Use React 19 functional components with standard hooks (`useState`, `useEffect`, `useCallback`, `useMemo`).
- Manage global/client state with Zustand stores; avoid heavy redux boilerplate or prop drilling.
- Prefer Tailwind utility classes over ad-hoc CSS. Use CSS variables in `src/index.css` for system theme tokens.
- Strict TypeScript: keep type safety without `any`. Verify using `tsc -b`.
- Maintain clean code adhering to ESLint flat config (`eslint .`).

## Change Workflow

Read `package.json` before altering dependencies or scripts. Run `bun run build` (or `tsc -b && vite build`) and `bun run lint` before committing any code changes. Follow `docs/push.md` for git conventions, and keep `docs/` updated if architectural invariants change.
