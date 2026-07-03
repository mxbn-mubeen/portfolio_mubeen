# Master Memory — portfolio_mubeen

last_brain_review: 2026-07-03

## What the Project Does

Personal developer portfolio for **Mohamed Mubeen A S**, Full Stack Developer based in **Sharjah, UAE**.
<!-- Verified: both index.html and site.html meta tags confirm "Sharjah, UAE". Previous brain incorrectly stated Dubai — fabricated, not from source. -->
Live at: https://portfolio-mxbn.vercel.app/

A single-page application (SPA) that scrolls through sections: Hero → About → Skills → Experience → Projects → Contact. It features animated transitions, a dark theme, and responsive design.

## Key Features

- **Hero** — Animated intro with rotating role titles and an interactive particle/animation background (HeroAnimation component, uses anime.js / @splinetool/react-spline)
- **About** — Bio, career stats, highlights, certifications
- **Skills** — Tech stack display with icons (react-icons)
- **Experience** — Work history in a timeline/card layout
- **Projects** — Project cards with links
- **Contact** — Contact form
- **Navbar** — Sticky responsive navigation, smooth-scroll links
- **Footer** — Social links, copyright
- **Dark theme** — Global CSS variables, class-based dark mode via `next-themes`
- **Scroll animations** — Custom hook `use-scroll-animation.ts` using IntersectionObserver + anime.js
- **SEO** — Open Graph / Twitter metadata in `index.html`

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite 5 (SWC plugin) |
| Styling | Tailwind CSS 3 + tailwindcss-animate |
| UI components | shadcn/ui (Radix UI primitives) |
| Animation | anime.js 4, @splinetool/react-spline |
| Routing | react-router-dom v6 (BrowserRouter, 2 routes: `/` and `*`) |
| State / data | @tanstack/react-query (QueryClient set up in App.tsx; not heavily used yet) |
| Forms | react-hook-form + zod + @hookform/resolvers |
| Icons | lucide-react, react-icons |
| Deployment | Vercel (SPA rewrite rule; framework=vite) |

## Current State

- **Active work**: Portfolio sections are all implemented. Recent commits focus on SEO metadata, OG images, and responsive hero/navbar.
- **Completeness**: All 6 sections + Navbar + Footer are wired up in `Index.tsx`.
- **No backend**: Pure frontend static site.
- **No tests**: No test framework configured.

## Git Activity Summary (last ~15 commits)

- Implemented responsive hero + custom navigation
- Scaffolded feature modules + shared component structure
- Implemented About section (career stats, highlights, certifications)
- Implemented Experience and About sections
- Updated OG/Twitter metadata images (WebP)
- General code refactors for readability
