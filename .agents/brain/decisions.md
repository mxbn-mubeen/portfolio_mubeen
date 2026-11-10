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

---

- **Decision**: Full End-to-End Modernization to Linear/Vercel Dark Engineering Aesthetic
- **Reason**: Replace outdated 2020 glassmorphism, heavy blurry glow blobs, cartoon avatar speech bubble, and awkward circular orbiting skills with a high-impact, refined, professional developer portfolio aesthetic (#09090b canvas, hairline borders, spotlight micro-interactions, clean typography, and interactive tech/project Bento).
- **Alternatives considered**: Cyberpunk high-contrast or minimalist editorial — user selected Linear/Vercel dark style for maximum professional appeal to tech recruiters and engineering leads.
- **Affected modules**: `src/style/`, `src/features/hero/`, `src/features/skills/`, `src/features/about/`, `src/features/projects/`, `src/features/experience/`, `src/features/contact/`, `src/shared/components/`
- **Date**: 2026-11-10

---

- **Decision**: Unified Celestial Luminous Aesthetic Across Full Site & Balanced 2-Column Projects
- **Reason**: Propagate the glowing aura, stardust motes, and ambient rays from the Experience section across all sections (Hero, About, Skills, Experience, Projects, Contact, Resume, 404) while removing childish terminology. Replace awkward 3-column bento and nested `MagicBentoCard` with a symmetrical 2-column grid (`grid-cols-1 md:grid-cols-2 gap-6 items-start`) and inline left-accent spec accordions.
- **Alternatives considered**: Retaining 3-column bento — rejected due to uneven card widths and vertical empty voids when expanding cards.
- **Affected modules**: `src/features/projects/`, `src/features/skills/`, `src/features/contact/`, `src/pages/`
- **Date**: 2026-11-10

---

- **Decision**: Brand Emblem Monogram Mark, Valid XML SVG Favicon & Full SEO + 1200x630 OG Image
- **Reason**: Remove plain text "mubeen" from the logo in favor of a minimalist geometric code-bracket monogram emblem. Replace broken/outdated favicon and OG metadata with a dedicated 1200x630 PNG card, JSON-LD Schema.org Person/WebSite structured data, expanded `sitemap.xml` routes (`/`, `/resume`, and project case study deep links), and enhanced Twitter cards.
- **Alternatives considered**: Text-heavy logo mark — rejected per user request for clean emblem-only brand identity.
- **Affected modules**: `src/shared/components/BrandLogo.tsx`, `public/logo.svg`, `public/og-image.png`, `public/sitemap.xml`, `index.html`
- **Date**: 2026-11-10
