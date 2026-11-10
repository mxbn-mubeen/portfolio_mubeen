# Mistakes — portfolio_mubeen

Append-only log. Never delete entries. Mark resolved ones as `Status: Resolved`.

---

- Problem: `master-memory.md` stated developer location as "Dubai, UAE"
- Cause: Initial brain generation inferred location without grepping source files. Both `index.html` and `site.html` clearly state "Sharjah, UAE".
- Fix: Corrected `master-memory.md` to "Sharjah, UAE". Source of truth is the HTML meta tags.
- Status: Resolved
- Date: 2026-07-03

---

- Problem: `site.html` references `og-image.png` in its meta tags but the file does not exist in `/public`. Only `og-image.webp` exists.
- Cause: Likely stale copy from an earlier iteration before the image was converted to WebP.
- Fix: Update `site.html` OG image reference from `og-image.png` → `og-image.webp`.
- Status: Resolved
- Date: 2026-07-03

---

- Problem: `site.html` exists at repo root as a near-duplicate of `index.html` with non-identical meta tags. `architecture.md` previously omitted `site.html` entirely.
- Cause: Initial brain scan likely only checked `index.html` as the "obvious" entry file.
- Fix: `site.html` was removed from the repository root.
- Status: Resolved
- Date: 2026-07-03 (Resolved: 2026-11-10)

---

- Problem: `src/shared/components/navbar/Components/` folder uses a capital C, inconsistent with every other lowercase `components/` directory in the project.
- Cause: Likely a manual folder creation that bypassed naming conventions.
- Fix: Renamed `Components/` → `components/` via commit b640c8f.
- Status: Resolved
- Date: 2026-07-03 (Resolved: 2026-11-10)

---

- Problem: Conflicting and potentially outdated Visa validity dates across sections (`About.tsx` specifies "Valid until Feb 2026" while `Contact.tsx` specifies "Valid until SEP 2026").
- Cause: Manual text duplication without a shared single source of truth or constants file.
- Fix: Consolidate personal status details into a shared constant configuration.
- Status: Open
- Date: 2026-11-10

---

- Problem: `ProjectCard` used `lg:flex-row` with `lg:border-l` for `isLarge` cards, causing an empty half-card split and awkward stretching when neighboring cards expanded.
- Cause: Legacy split-card markup assumed horizontal side-by-side content, but the right column only contained tags, leaving a giant empty black space and stretching sibling cards.
- Fix: Unify `ProjectCard` layout into a clean vertical flow and remove the artificial two-column split.
- Status: Resolved
- Date: 2026-11-10

---

- Problem: `index.html` and `site.html` meta keywords and description advertise "React, Next.js, TypeScript, tRPC & PostgreSQL". `package.json` has no Next.js, no tRPC, no Postgres client — these are completely absent from the actual codebase.
- Cause: SEO copy appears to be pasted from a resume/template and never reconciled with the actual tech stack.
- Fix: Rewrite meta description/keywords to accurately reflect: React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, anime.js, Spline.
- Status: Resolved
- Date: 2026-07-03

---

- Problem: Nested double-border ("box inside box") and asymmetrical stretching across project cards.
- Cause: `Projects.tsx` previously wrapped `ProjectCard` inside `MagicBentoCard` (each applying their own borders, backgrounds, and radiuses), and used an uneven 3-column bento span (`col-span-2` vs `col-span-1`).
- Fix: Removed `MagicBentoCard` wrapper completely, refactored project cards into a balanced 2-column responsive grid (`grid-cols-1 md:grid-cols-2 gap-6 items-start`), and gave each card an inline left-accent spec accordion without nested card containers.
- Status: Resolved
- Date: 2026-11-10

---

- Problem: `public/logo.svg` had JSX-style comments `{/* ... */}` which made the SVG invalid XML, preventing browser favicon rendering.
- Cause: React JSX comment syntax inadvertently used in a static SVG file.
- Fix: Cleaned `public/logo.svg` into valid standalone XML with proper gradient defs, viewBox attributes, and added `<link rel="apple-touch-icon" href="/logo.svg" />` to `index.html`.
- Status: Resolved
- Date: 2026-11-10
