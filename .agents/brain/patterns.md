# Patterns — portfolio_mubeen

> Approved implementation patterns. Update when a new pattern is adopted, not on every commit.

---

## 1. Scroll-Reveal Animation

**Use `useScrollAnimation` hook or `<AnimatedSection>` wrapper — never raw CSS transitions for scroll reveals.**

```tsx
// Hook (direct ref control)
import { useScrollAnimation } from "@/shared/hooks/use-scroll-animation";

const ref = useScrollAnimation({ variant: "fade-up", delay: 200, duration: 1000 });
return <div ref={ref} className="opacity-0">...</div>;

// Component wrapper (preferred for full sections/cards)
import { AnimatedSection } from "@/shared/components/AnimatedSection";

<AnimatedSection variant="fade-left" delay={300} duration={800}>
  <MyContent />
</AnimatedSection>
```

**Available variants:** `fade-up` (default) | `fade-down` | `fade-left` | `fade-right` | `scale` | `slide-left` | `slide-right`

**Key details:**
- The wrapped element must start with `className="opacity-0"` (AnimatedSection adds this automatically).
- `once: true` by default — animation fires once on first intersection, then observer is disconnected.
- Uses `IntersectionObserver` with a default `threshold` of `0.1`.

---

## 2. Stagger Animation for Child Lists

**Use `useStaggerAnimation` for animating lists of cards/items.**

```tsx
import { useStaggerAnimation } from "@/shared/hooks/use-scroll-animation";

const containerRef = useStaggerAnimation({ delay: 100 });

return (
  <div ref={containerRef}>
    {items.map((item) => (
      <div key={item.id} className="opacity-0">...</div>
    ))}
  </div>
);
```

Each direct child is animated sequentially with `i * delay` offset. Children must start `opacity-0`.

---

## 3. Hero Entrance Animation

**Use `<HeroAnimation>` wrapper + CSS class selectors for sequenced hero entrance.**

```tsx
<HeroAnimation>
  <h1 className="hero-title">Name</h1>
  <p className="hero-subtitle">Role</p>
  <p className="hero-description">Bio</p>
  <div className="hero-button">CTA</div>
  <a className="hero-social">Social</a>
</HeroAnimation>
```

`HeroAnimation` uses an anime.js `createTimeline()` to sequence: title chars → subtitle → description → buttons → socials. The `.hero-*` class names are **the contract** — do not rename them.

---

## 4. Feature Section Structure

**Every portfolio section follows this layout pattern.**

```
src/features/<section>/
├── <Section>.tsx          # Default export — <section id="<section>"> root
└── components/            # Sub-components used only by this section
    └── <SubComponent>.tsx
```

- Root element is a `<section id="<sectionId>">` — the `id` is the scroll target used by Navbar.
- Section background: `bg-[#0d0f14]` with decorative blurred radial gradients (`bg-primary/5`, `bg-secondary/5`) as absolute non-interactive overlays.
- Content is wrapped in `<div className="container mx-auto px-4 relative z-10">`.
- Section heading structure: badge pill → `<h2>` → subtitle paragraph.

---

## 5. Navbar Section Tracking

**Sections are identified by their HTML `id` attribute and detected by the Navbar via `getBoundingClientRect()`.**

Registered section ids (order matters for detection):
```
"hero" | "about" | "skills" | "experience" | "projects" | "contact"
```

Any new section **must** have a matching `id` prop on its `<section>` root and be added to the Navbar's `sections` array. Smooth-scroll is `window.scrollTo({ behavior: "smooth" })` with a 550 ms debounce guard to prevent click-spam glitches.

---

## 6. Shared UI Components (shadcn/ui)

**All generic UI primitives (Button, Card, Dialog, etc.) live in `src/shared/components/ui/` and are generated via shadcn CLI.**

Do not hand-write primitive components — add them via:
```bash
npx shadcn@latest add <component>
```

Import from the alias path:
```tsx
import { Button } from "@/shared/components/ui/button";
```

---

## 7. Styling Conventions

**Utility-first Tailwind. Never write ad-hoc inline styles for anything covered by the design token system.**

| Token group | Tailwind class prefix | Example |
|---|---|---|
| Brand primary | `primary` | `text-primary`, `bg-primary/10` |
| Glow accent | `primary-glow` | `text-primary-glow` |
| Card surfaces | `card`, `card-glass`, `card-border` | `bg-card`, `border-card-border` |
| Glass navbar | custom class | `glass-nav` (defined in global CSS) |

CSS variables are the single source of truth for all color values — extended through `tailwind.config.ts`.

---

## 8. Project Data Pattern (Inline Static Data)

**Project/experience/skills data is colocated in the feature component file as a static array, not fetched from an API or external file.**

```tsx
// Inside Projects.tsx
const projects = [
  { title: "...", tech: [...], impact: "...", ... },
];
```

If data grows significantly, the pattern to adopt is a sibling `data/` folder within the feature:
```
src/features/projects/
├── Projects.tsx
├── data/projects.ts    ← future migration target
└── components/
```

---

## 9. Path Alias Convention

Always import using path aliases — never relative `../../` imports that cross module boundaries.

| Alias | Resolves to |
|---|---|
| `@/` | `src/` |
| `@/app` | `src/app/` |
| `@/features` | `src/features/` |
| `@/shared` | `src/shared/` |

**Cross-module rule:** Features must not import from other features. Features can import from `@/shared`. Shared components must not import from features.

---

## 10. Utility Function (`cn`)

**Always compose Tailwind class strings with the `cn()` helper from `@/shared/lib`.**

```tsx
import { cn } from "@/shared/lib/utils";

<div className={cn("base-class", condition && "conditional-class", className)} />
```

`cn()` wraps `clsx` + `tailwind-merge` to deduplicate conflicting utility classes correctly.
