# Style & Design System

The application uses Tailwind CSS v4 powered by `@tailwindcss/vite`.

## Setup & Configuration

- Styles are loaded in `src/index.css` via `@import "tailwindcss";`.
- Theme definitions and custom utility classes are added directly through CSS `@theme` tokens.

## Styling Conventions

- **Utility Classes**: Use standard Tailwind utilities for spacing, typography, flex/grid layouts, and responsive breakpoints.
- **Theme Variables**: Define global color variables in `src/index.css` to enable consistent theme usage.
- **Responsive**: Mobile-first design using standard breakpoints (`sm:`, `md:`, `lg:`, `xl:`).
