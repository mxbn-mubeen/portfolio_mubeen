# Decisions — portfolio_mubeen

> Append-only log. Move superseded entries to `decisions-archive.md`, never delete.

---

- **Decision**: Feature-module folder structure (`src/features/hero`, `src/features/about`, etc.)
- **Reason**: Keeps each portfolio section self-contained with its own sub-components, making it easy to add, remove, or refactor a section without touching unrelated code.
- **Alternatives considered**: Flat `src/components/sections/` directory — rejected because it conflates section logic with reusable component code.
- **Date**: 2026-07-03

---

- **Decision**: Tailwind CSS v3 as the primary styling system with CSS-variable-based design tokens
- **Reason**: Pairs well with shadcn/ui (which ships with Radix UI primitives and Tailwind-based styling). CSS variables allow runtime theming without extra JS.
- **Alternatives considered**: Styled-components / Emotion — rejected due to heavier runtime and no alignment with shadcn/ui pattern.
- **Date**: 2026-07-03

---

- **Decision**: Dark theme enforced globally via CSS variables (class-based, `darkMode: ["class"]` in Tailwind config)
- **Reason**: Portfolio has a fixed dark aesthetic. `next-themes` manages the class toggle on `<html>` if a toggle is added later.
- **Alternatives considered**: Media-query-only dark mode — rejected because it wouldn't support an explicit user toggle.
- **Date**: 2026-07-03

---

- **Decision**: anime.js v4 for scroll reveal animations + 3D hero background via @splinetool/react-spline
- **Reason**: anime.js is lightweight and imperative, pairing well with a custom `use-scroll-animation` hook. Spline adds a zero-code interactive 3D scene to the hero without bespoke WebGL.
- **Alternatives considered**: Framer Motion — considered but rejected to keep the bundle lean; Framer Motion's API is heavier for a pure portfolio use case.
- **Date**: 2026-07-03

---

- **Decision**: @tanstack/react-query included but not actively used
- **Reason**: Scaffolded for future data fetching (e.g., CMS integration, blog posts). Adding it at setup is cheaper than retrofitting later.
- **Alternatives considered**: Plain fetch/useEffect — would be simpler now but harder to scale.
- **Date**: 2026-07-03

---

- **Decision**: Deployed to Vercel with SPA rewrite rule (`/* → /index.html`)
- **Reason**: Vercel provides zero-config CI/CD from GitHub, free hosting, and fast global CDN. The SPA rewrite is required because react-router-dom uses BrowserRouter (HTML5 history API).
- **Alternatives considered**: Netlify (equivalent), GitHub Pages (no rewrite rule support out of box) — Vercel chosen for ease.
- **Date**: 2026-07-03

---

- **Decision**: No test framework configured
- **Reason**: Early-stage personal portfolio; velocity prioritised over test coverage.
- **Alternatives considered**: Vitest + React Testing Library — recommended to add if component complexity grows.
- **Date**: 2026-07-03
