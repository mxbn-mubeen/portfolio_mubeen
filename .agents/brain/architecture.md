# Architecture — portfolio_mubeen

## Overview

Single-page React application (SPA) with client-side routing. No backend. Deployed as a static site on Vercel.

```
portfolio_mubeen/
├── index.html               # Primary entry HTML — SEO meta, OG tags, font imports
├── site.html                # ⚠️ Near-duplicate root HTML — also present at repo root. Has non-identical meta tags (references og-image.png which does NOT exist; only og-image.webp exists → broken OG image reference). Logged in mistakes.md.
├── vite.config.ts           # Vite config — path aliases (@, @/app, @/features, @/shared)
├── tailwind.config.ts       # Tailwind config — CSS variable-based design tokens
├── tsconfig.app.json        # TS config for src
├── vercel.json              # Vercel — SPA rewrite rule (/* → /index.html)
├── components.json          # shadcn/ui registry config
└── src/
    ├── main.tsx             # React DOM render root
    ├── app/
    │   └── App.tsx          # QueryClientProvider → TooltipProvider → BrowserRouter → Routes
    ├── pages/
    │   ├── Index.tsx        # Route "/" — composes Navbar + all 6 feature sections + Footer
    │   └── NotFound.tsx     # Route "*" — 404 page
    ├── features/            # Page section modules (each: SectionName.tsx + components/)
    │   ├── index.ts         # Barrel export for all 6 sections
    │   ├── hero/            # Hero.tsx, components/
    │   ├── about/           # About.tsx, components/
    │   ├── skills/          # Skills.tsx, components/
    │   ├── experience/      # Experience.tsx, components/
    │   ├── projects/        # Projects.tsx, components/
    │   └── contact/         # Contact.tsx, components/
    ├── shared/              # Cross-cutting concerns
    │   ├── components/
    │   │   ├── AnimatedSection.tsx     # Scroll-triggered animation wrapper
    │   │   ├── HeroAnimation.tsx       # Interactive hero background (anime.js / Spline)
    │   │   ├── Footer.tsx              # Site-wide footer with social links
    │   │   ├── navbar/
    │   │   │   ├── Navbar.tsx          # Top sticky navigation bar
    │   │   │   └── Components/         # ⚠️ Capitalized — inconsistent with all other lowercase component dirs. Should be renamed to `components/`. Logged in mistakes.md.
    │   │   └── ui/                     # shadcn/ui generated components (buttons, cards, etc.)
    │   ├── hooks/
    │   │   ├── use-scroll-animation.ts # IntersectionObserver + anime.js scroll reveal
    │   │   └── use-toast.ts            # Toast notification state hook
    │   └── lib/                        # Utilities (e.g., cn() from clsx + tailwind-merge)
    └── style/               # Global CSS / base styles
```

## Routing

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Index.tsx` | Single scrolling portfolio page |
| `*` | `NotFound.tsx` | 404 catch-all |

BrowserRouter with Vercel SPA rewrite handles deep-link refresh.

## Component Architecture

- **Feature modules** (`src/features/`): Self-contained section components. Each folder owns its sub-components. Barrel-exported via `src/features/index.ts`.
- **Shared components** (`src/shared/components/`): Layout primitives (Navbar, Footer, AnimatedSection), shadcn/ui library components in `ui/`.
- **Design tokens**: All colors, radii, and spacing via Tailwind CSS custom properties defined in the global CSS. Extended tokens: `primary.glow`, `primary.deep`, `card.glass`, `card.border`.

## State Management

- **No global state manager** — component-local state (useState/useReducer).
- **@tanstack/react-query** is configured (QueryClient in App.tsx) but not heavily used (no API calls yet).
- **Form state**: react-hook-form + zod for the Contact form.

## Animation Stack

- **anime.js 4**: Used in `HeroAnimation.tsx` and scroll reveal via `use-scroll-animation.ts`.
- **@splinetool/react-spline**: 3D interactive scene embedded in the hero section.
- **tailwindcss-animate + Radix UI**: For component-level micro-animations (accordions, dialogs, etc.).

## Build & Deploy

- **Dev**: `npm run dev` → Vite dev server on port 5173
- **Build**: `npm run build` → `dist/` (Vite bundler, SWC transpiler)
- **Deploy**: Vercel, auto-deploy from git. SPA rewrite configured in `vercel.json`.
- **Path aliases**: `@` → `src/`, `@/app` → `src/app/`, `@/features` → `src/features/`, `@/shared` → `src/shared/`
