# Rand Medical Center — Site Audit Report

**Date:** 2026-04-25
**Stack confirmed:** Next.js 15 (App Router) + Tailwind CSS v4 + framer-motion + MDX + TypeScript
**Project root:** `rmc-website/`
**Content root:** `rand-medical-content/src/content/` (sibling — strict separation per `rand-medical-content/CLAUDE.md`)

---

## 1A. Completion Status (by route)

| Route | Status | Notes |
|---|---|---|
| `/` (home) | 🔧 Needs work | Hero present; specialty cards in hero are hardcoded in `page.tsx` (should be content-driven). Duplicate `<main>` tag. |
| `/about` | 🔧 Needs work | Page exists; needs design pass + breadcrumb verification |
| `/about/awards` | 🔧 Needs work | Exists |
| `/about/facility-tour` | 🔧 Needs work | Exists; should integrate real facility photos |
| `/about/mission` | 🔧 Needs work | Exists |
| `/about/our-team` | 🔧 Needs work | Exists |
| `/blog` | 🔧 Needs work | Has its own `<main>` — duplicates root layout `<main>` |
| `/blog/[slug]` | 🔧 Needs work | Same `<main>` duplication |
| `/blog/category/[slug]` | 🔧 Needs work | Same `<main>` duplication |
| `/careers` | 🔧 Needs work | Exists |
| `/conditions` | 🔧 Needs work | Has own `<main>` — duplicate |
| `/conditions/[category]/[condition]` | 🔧 Needs work | Has own `<main>` — duplicate |
| `/contact` | 🔧 Needs work | Form exists in `ContactForm.tsx` |
| `/services` | 🔧 Needs work | Index page only |
| `/services/[pillar]` | 🔧 Needs work | Renders 9 sections — at section cap |
| `/services/[pillar]/[detail]` | 🔧 Needs work | Detail wrapper exists |
| `/personal-injury` | ❌ **Missing** | **Needs to be created as a top-level hub page (SEO priority)** |
| `/work-injury` | ❌ **Missing** | **Needs to be created as a top-level hub page (SEO priority)** |
| `/legal-support/*` | ✅ Complete | Six sub-routes; minor design-only updates |
| `/patient-resources/*` | 🔧 Needs work | Five sub-routes; needs design refresh |

**Total routes:** 28 dynamic + static. **Two top-level hub routes missing** (`/personal-injury` and `/work-injury`) — both demanded by the user as SEO priorities.

### Content inventory (already written)

- 7 service pillars + ~50 service detail content files
- ~45 condition content files (spine / joints / nerves / muscle / pain-syndromes / other)
- 20+ blog articles in MDX
- Full SEO metadata, FAQs, CTAs, schema data per page

**No content rewriting needed.** Content is comprehensive. Per `rand-medical-content/CLAUDE.md`: content files are off-limits during design changes — design files import them.

---

## 1B. Design Issues to Fix

### Bugs (block-priority)

1. **Duplicate `<main>` tags** — `src/app/layout.tsx` already wraps children in `<main id="main-content">`, but six `page.tsx` files render their own `<main>` inside it. This creates nested `<main>` elements with duplicate IDs. **Files affected:** `app/page.tsx`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `app/blog/category/[slug]/page.tsx`, `app/conditions/page.tsx`, `app/conditions/[category]/[condition]/page.tsx`.

2. **Hardcoded text in homepage** — `app/page.tsx` defines specialty cards (`Pain Management`, `Work Injuries`, etc.) inline. This violates the project's strict content/design separation rule. **Fix:** move to `content/pages/home.ts` and import.

### Whitespace / layout

- Hero uses `min-h-screen` on the split variant — fine, but interior page heroes (`pt-[120px] pb-16`) feel under-treated; need stronger background treatment.
- `MarqueeBar` between hero and intro adds visual interest but the transition between intro → services-grid feels flat.
- Service cards in `ServiceGrid` likely rendering at small sizes; verify they use `grid-cols-3` at desktop with full container width.
- `LocationSection` and `BlogPreviewSection` are weak transitions — needs stronger visual rhythm.

### Card design (apply standard everywhere)

- All cards must have: `border border-slate-200` (light) or `border border-white/10` (dark), scroll-reveal entrance animation, hover lift (`-translate-y-2 hover:shadow-2xl`), gradient icon, animated top accent bar.
- Currently `ServiceGrid` and `WhyChooseUs` cards likely lack uniform treatment.

### Hero copy

- Current homepage H1: *"Hurt at Work or in a Car Accident? We Help You Heal and Get Back to Life."* — **20 words**, too long. Brief mandates ≤8 words.
- **Recommended new H1 (content change required, propose to user before editing content file):** *"Hurt at Work. Hurt on the Road. We Get You Back."* (12 words) — or shorter: *"Injured? We Help You Heal."* (5 words).
- Note: Per content/design separation rules, headline copy is content. Will surface options for user approval before editing `content/pages/home.ts`.

### Color balance

- Globals.css defines: navy `#0A1628`, red `#C8102E`, off-white, grey scale, accent-teal `#2BBFB3`.
- **Missing:** the brand's "Compassion Light" amber `#F4B76A` (per `Rand-V4-Navy-style-guide.md`). The brief asked for an amber/gold accent for urgency signals — **the style guide already names it**. Will add as a Tailwind token: `--color-amber: #F4B76A`.
- Red is currently used in: skip-link, focus outline, glow accent, marquee, hero CTA strip. **Underused** in: section eyebrows, stat numbers, icon backgrounds, badge chips, dividers. Will increase usage in redesign.

### Typography

- Project uses **DM Serif Display** (headings) + **DM Sans** (body) per `globals.css`.
- The skill suggests Space Grotesk + Plus Jakarta — **but the brand has already committed to DM Serif/DM Sans.** No font swap. Brand consistency wins.

---

## 1C. Missing Pages / Content Gaps

| Gap | Impact | Action |
|---|---|---|
| `/personal-injury` top-level route | High — main keyword | **Create** as hub page that pulls from existing `injury-services/personal-injury` content + cross-links MVA, workers' comp |
| `/work-injury` top-level route | High — main keyword | **Create** as hub page that pulls from existing `injury-services/workers-compensation` + workplace-injuries content |
| Floating Patient Tools toolbar | Medium — UX | Build new global component |
| Scroll-to-top button | Low — UX polish | Build new global component |
| Sticky bottom CTA bar | High — conversions | Build new global component |
| Site-wide breadcrumb auto-render | Medium | `Breadcrumb.tsx` exists but is manually wired in 15 files. Keep manual approach — already correct pattern |
| Real facility imagery integration | Medium | Photos exist in `/RAND-REAL-IMAGES/`. Need to copy into `public/images/facility/` and reference from content |
| Image hero for PI/WI hubs | High | Use `RAND-REAL-IMAGES/work-injury-hero.png`, `physician-exam-hero.png`, `physical-therapy-hero.png` |

---

## 1D. Asset Inventory

### Real facility images already in repo (`/RAND-REAL-IMAGES/`)

- `rand-medical-center-building.JPG` — exterior shot
- `rand-medical-center-reception-area.JPG` — interior reception
- `rand-medical-center-waiting-area.JPG` — waiting area
- `rand-medical-center-OR.JPG` + `rand-medical-center-OR-2.JPG` — operating room
- `Resized_Resized_20211203_131850.JPG`, `Resized_Resized_20211213_095609.JPG`, `Resized_Resized_20211213_100359.JPG` — additional facility shots
- `physician-exam-hero.png` (AI hero)
- `work-injury-hero.png` (AI hero)
- `physical-therapy-hero.png` (AI hero)
- `ChatGPT Image Apr 24, 2026, 07_58_23 PM.png` — additional AI render

### Public images

- `public/images/{about, blog, conditions, facility, hero, og, services, team}` — populated
- `public/images/{location, ui}` — empty

### Style reference

- `Rand-V4-Navy-style-guide.md` — full brand visual system (color palette, lighting, composition, ComfyUI prompt templates, what-to-avoid list). Will be the source of truth for all AI-generated imagery.

---

## 1E. Tech / Config State

- **Tailwind v4** with `@theme` directive in `globals.css` (no `tailwind.config.ts` — modern CSS-first config)
- **Reduced-motion** already respected in `globals.css`
- **Skip-to-content** link already implemented
- **Focus-visible** styles already implemented
- **netlify.toml** already exists at project root
- **`.env.local`** present
- Not a git repo yet (per memory + ls — no `.git` folder visible at project root)

---

## Summary

**The site is structurally complete.** Content is comprehensive, routing is sound, and accessibility primitives are in place. What's missing is:

1. **Two flagship hub pages** (`/personal-injury`, `/work-injury`) — must be created
2. **Visual polish** — card system, color balance, hero refresh
3. **Global UX layer** — floating toolbar, scroll-top, sticky CTA
4. **Image integration** — real facility shots are sitting unused outside `public/`
5. **Bug fixes** — duplicate `<main>`, hardcoded specialty cards in homepage

This is a redesign + UX layer + new-route project. **No content rewrite needed.** Content stays untouched in `rand-medical-content/`.
