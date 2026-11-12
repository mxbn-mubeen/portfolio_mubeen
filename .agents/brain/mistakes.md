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

---

- Problem: Merge conflict — remote pushed phone, visa date, and Azure AI-103 cert directly to origin/main without coordinating with local working branch
- Cause: Diverged history (remote had 8 commits; local had 1). No branch protection / PR workflow in place.
- Fix: Manual 3-way merge of Certifications.tsx, Contact.tsx, About.tsx. Concluded merge with single commit `d92daad`. Kept remote's `+971 50 469 5147` phone and `4 Jan 2027` visa date as source of truth.
- Status: Resolved
- Date: 2026-11-10

---

- Problem: Dead code accumulation — 6 unused component files left in src after earlier refactors
- Cause: Refactors replaced MagicBento wrapper and old glass-card components without removing the orphaned source files
- Fix: Deleted MagicBento.tsx, MagicBento.css, ContactCard.tsx, HighlightCard.tsx, StatCard.tsx, SkillOrb.tsx. Extracted SaasUIIcon to its own file. Removed unused MapPin import from About.tsx.
- Status: Resolved
- Date: 2026-11-10

---

- Problem: ESLint CI failure — `@typescript-eslint/no-explicit-any` in Skills.tsx line 140 (`setFilter(cat.id as any)`)
- Cause: Filter state typed as union `"frontend" | "backend" | "database" | "tools"` but categories array `id` field inferred as `string`, requiring a cast. Used `as any` shortcut instead of the proper union cast.
- Fix: Replaced `as any` with `as "frontend" | "backend" | "database" | "tools"` — lint now passes with 0 errors, 0 warnings.
- Status: Resolved
- Date: 2026-11-11

---

- Problem: Resume.tsx had stale/incomplete content — only 3 bullet points per experience role, Accreditations section missing 3 of 6 certs (no Azure AI-103, no AI Skills Fest 2026, no Udemy)
- Cause: Resume.tsx written as a standalone page without being synced to Experience.tsx and Certifications.tsx source data
- Fix: Synced all 3 experience entries to match Experience.tsx bullet counts and wording. Added all 6 certs to Accreditations matching Certifications.tsx.
- Status: Resolved
- Date: 2026-11-11

---

- Problem: Mobile hero (iPhone SE 375px) — name "Mohamed Mubeen A S" wrapping to put "S" alone on its own line; role typewriter text clipped because fixed `h-12` container too short when text wraps
- Cause: `text-4xl` (36px) × 18 chars overflows 375px with padding. Fixed `h-12` height never accommodated 2-line role text on small screens.
- Fix: `text-[1.75rem]` base + `whitespace-nowrap` on name span (fits at 28px); `sm:text-5xl` restores desktop size. `min-h-[3rem]` on role span lets it grow if needed instead of clipping.
- Status: Resolved
- Date: 2026-11-12

---

- Problem: ProjectDetail.tsx was at 229 lines, and adding the new "AI Virtual Mouse Using Hand Gestures" case study data would have breached the ~230 line protocol threshold.
- Cause: Case study data dictionary was co-located inside the UI component file.
- Fix: Extracted `projectsDatabase` and `ProjectData` into `src/pages/project-detail-data.ts` (111 lines), bringing `ProjectDetail.tsx` down to 152 lines. Both files remain well below 230 lines.
- Status: Resolved
- Date: 2026-11-12

---

- Problem: LinkedIn Post Inspector reported "Image: No image found" and status "206 Success" on https://portfolio-mxbn.vercel.app/
- Cause: (1) vercel.json had a wildcard rewrite `/(.*)` to `/index.html` which could intercept static assets like `og-image.png` without CORS headers. (2) LinkedInBot sends a `Range: bytes=0-` header; Vercel's edge network responds with `206 Partial Content`, and `og:image` was buried far down in `<head>` after long keywords and description (byte 1851), so LinkedInBot's truncated 206 chunk missed it. (3) `<meta name="author">` placed before `og:type` caused LinkedIn to switch to Article mode.
- Fix: (1) Reordered `<head>` in `index.html` so `og:image`, `og:type="website"`, and `<meta name="image">` are placed at the very top right under `<title>` (within byte 800). (2) Updated `vercel.json` rewrite to `/(?!.*\\.[a-zA-Z0-9]+$).*` so static assets are never rewritten. (3) Added CORS and public Cache-Control headers for images in `vercel.json`.
- Status: Resolved
- Date: 2026-11-12
