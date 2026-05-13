---
trigger: always_on
glob: "**/*"
description: Core technical and behavioral rules for the pagemind-pricing project.
---

# Coding Standards: pagemind-pricing

## Technical Excellence

### 1. Modularity & Reuse
- **Base Components**: All UI elements (buttons, inputs, cards) must be built as base components in `src/components/ui`.
- **Atomic Design**: Components should be small, focused, and accept standard props (e.g., `className`, `children`).
- **Composition**: Favor composition over complex prop-drilling.

### 2. Centralized Theme
- **Tailwind First**: Always use Tailwind classes. Do not use inline styles or ad-hoc CSS.
- **Theme Variables**: Use `tailwind.config.js` and CSS variables in `index.css` for all design tokens.
- **Path Aliases**: Use `@/` for imports (mapped to `src/`).

### 3. Type Safety & Linting
- **Zero 'any'**: Strict TypeScript usage. No `any` types allowed.
- **Strict Linting**: Fix all ESLint/TSC warnings immediately.
- **Functional Components**: Use arrow functions and modern hooks (React 19 standards).

### 4. Project Structure
- `src/components/ui/`: Atomic, reusable UI components.
- `src/components/features/`: Feature-specific modules.
- `src/hooks/`: Reusable logic.
- `src/utils/`: Pure helper functions.
- `src/types/`: Centralized type definitions.
