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
- Fix: Clarify intent — is `site.html` a staging/alternate entry or orphaned? If orphaned, delete it or unify meta tags with `index.html`.
- Status: Open
- Date: 2026-07-03

---

- Problem: `src/shared/components/navbar/Components/` folder uses a capital C, inconsistent with every other lowercase `components/` directory in the project.
- Cause: Likely a manual folder creation that bypassed naming conventions.
- Fix: Rename `Components/` → `components/` and update all import paths referencing it.
- Status: Open
- Date: 2026-07-03

---

- Problem: `index.html` and `site.html` meta keywords and description advertise "React, Next.js, TypeScript, tRPC & PostgreSQL". `package.json` has no Next.js, no tRPC, no Postgres client — these are completely absent from the actual codebase.
- Cause: SEO copy appears to be pasted from a resume/template and never reconciled with the actual tech stack.
- Fix: Rewrite meta description/keywords to accurately reflect: React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, anime.js, Spline.
- Status: Resolved
- Date: 2026-07-03
