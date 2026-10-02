# Architecture

Single-page application built with React 19, Vite 8, and TypeScript.

## Component Structure

```text
src/main.tsx (React DOM Client Root)
└── src/App.tsx (Main Application Shell)
```

- **Functional Components**: All UI elements are written as React 19 functional components utilizing hooks.
- **State Management**: Powered by Zustand (`zustand`) for lightweight, decoupled store management outside component trees.

## Build Pipeline

- **Bundler**: Vite 8 with `@vitejs/plugin-react`.
- **Styling**: Tailwind CSS v4 integration via `@tailwindcss/vite`.
- **Type Checking**: Project solution references (`tsconfig.app.json`, `tsconfig.node.json`) compiled via `tsc -b`.
