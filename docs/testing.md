# Development & Quality Assurance

Commands and workflows for type checking, linting, and build validation.

## Commands

```bash
# Run local development server
bun run dev

# Run TypeScript type check and build
bun run build

# Run ESLint validation
bun run lint

# Preview production build locally
bun run preview
```

## Quality Checklist

Before opening a pull request or pushing commits:
1. Ensure `tsc -b` compiles without errors.
2. Ensure `bun run lint` passes without warnings or errors.
3. Ensure `bun run build` produces the `dist/` directory successfully.
