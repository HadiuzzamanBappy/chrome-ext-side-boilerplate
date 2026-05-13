---
description: Workflow for creating high-fidelity, premium UI components and pages.
---

# UI Design Workflow: pagemind-pricing

## Design Pillars

### 1. Compact & Minimal
- **Spacing**: Use tight but breathable padding (`gap-4`, `p-4`).
- **Typography**: Compact but legible. Favor `text-sm` for details and `text-4xl` for hero sections.
- **Layout**: Dense, logical grouping of elements.

### 2. Premium Aesthetics
- **Colors**: Use the centralized Tailwind palette (Primary: Indigo/Violet, Base: Zinc).
- **Glassmorphism**: Use the `.glass` utility class for cards and overlays.
- **Shadows**: Multi-layered, soft shadows (e.g., `shadow-xl`).

### 3. Dynamic Interaction
- **Micro-animations**: Use `transition-all` and `active:scale-95` for interactive elements.
- **Theme Transitions**: Ensure all elements support `dark:` variants seamlessly.

## Component Implementation
- Always start by checking if a base component exists in `src/components/ui`.
- Use the `cn()` utility for merging classes.
- Import icons from `lucide-react` individually.
- Keep components focused on a single responsibility.
