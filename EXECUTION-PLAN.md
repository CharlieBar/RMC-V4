# Rand Medical Center — Execution Plan

**Companion to:** `AUDIT-REPORT.md`
**Convention:** Complexity rated S (≤30 min), M (30–90 min), L (90 min+)

---

## Guiding Constraints

1. **Strict content/design separation** (`rand-medical-content/CLAUDE.md`) — NEVER modify content files for design work. Only edit components, page wrappers, and styles. Two exceptions allowed in this engagement, both flagged for user sign-off:
   - Adding hero copy for the new `/personal-injury` and `/work-injury` hub pages (new content files).
   - Shortening the homepage H1 (proposed in audit; needs explicit approval before content file edit).

2. **Section caps** — Pillar pages: 9 sections max. Detail pages: 8 max. Conditions: 9 max. Do not exceed. Enrich existing sections instead of adding new ones.

3. **Brand fonts** — DM Serif Display + DM Sans. Do NOT swap to Space Grotesk / Plus Jakarta despite skill defaults.

4. **Color tokens** — Add `--color-amber: #F4B76A` (style guide "Compassion Light"). Use for urgency signals.

---

## Sequenced Tasks

### 🟦 Block A — Foundation Fixes (do first, low-risk)

| # | Task | Complexity | Files |
|---|---|---|---|
| A1 | Remove duplicated `<main>` tags from page files | S | `app/page.tsx`, `app/blog/**/page.tsx`, `app/conditions/**/page.tsx` |
| A2 | Move hardcoded specialty cards out of `app/page.tsx` into `content/pages/home.ts` as `hero.specialtyCards` | S | `app/page.tsx`, `content/pages/home.ts` (single approved exception) |
| A3 | Add `--color-amber` token + amber utility tier to `globals.css` | S | `app/globals.css` |
| A4 | Copy `RAND-REAL-IMAGES/*` into `public/images/facility/` and `public/images/hero/` (rename for slug-friendliness) | S | `public/images/` |

### 🟧 Block B — Global UX Layer (Phase 2 of brief)

| # | Task | Complexity | Files |
|---|---|---|---|
| B1 | `FloatingToolbar` — 5-tab patient-tools panel, navy bg, red active, amber "available" dot, mobile bottom-bar variant | M | `components/global/FloatingToolbar.tsx` |
| B2 | `ScrollToTop` — appears after 400px scroll, red circle, smooth scroll, mobile-aware position | S | `components/global/ScrollToTop.tsx` |
| B3 | `StickyCTABar` — sticky bottom bar above footer, dismissible (sessionStorage), pulsing green dot | M | `components/global/StickyCTABar.tsx` |
| B4 | Wire all three into `app/layout.tsx` so they render site-wide | S | `app/layout.tsx` |
| B5 | Verify existing `Breadcrumb.tsx` JSON-LD output. If missing, add `BreadcrumbList` schema embed | S | `components/layout/Breadcrumb.tsx` |

### 🟥 Block C — Homepage Redesign (Phase 3)

| # | Task | Complexity | Files |
|---|---|---|---|
| C1 | New `HeroAward.tsx` — premium-hero standard: THEME constant, EASE tuple, fadeUp/clipReveal helpers, video/image background option, layered animation, mobile sticky CTA | L | `components/sections/HeroAward.tsx` |
| C2 | Wire `HeroAward` into homepage with PI/WI as **primary** specialty cards (not buried at position 3 + 4) | M | `app/page.tsx` |
| C3 | Redesign `ServiceGrid` cards — `border border-slate-200`, animated top accent, gradient icon, hover lift, scroll reveal | M | `components/sections/ServiceGrid.tsx` |
| C4 | Redesign `InjurySection` — give it the most visual weight after the hero. PI on left, WI on right, full-bleed dual hub teaser. | M | `components/homepage/InjurySection.tsx` |
| C5 | Re-order homepage sections: Hero → MarqueeBar → **InjurySection (PI+WI dual hub teaser)** → Intro → ServiceGrid → ConditionsGrid → WhyUs → Testimonials → Blog → Location → FAQ → CTA. Bring the injury hubs above the fold-fold. | S | `app/page.tsx` |
| C6 | `WhyChooseUs` design refresh — alternating image+text rows on desktop using real facility photos | M | `components/sections/WhyChooseUs.tsx` |

### 🟪 Block D — Personal Injury & Work Injury Hub Pages (NEW)

These are **new top-level routes** for SEO + UX, mirroring the brief's "make them visible" mandate.

| # | Task | Complexity | Files |
|---|---|---|---|
| D1 | New content file `content/pages/personal-injury-hub.ts` — pulls + recombines existing PI / MVA detail content into a hub. SEO meta, hero, why-rand, services-included grid, conditions, process, FAQ, CTA | M | `rand-medical-content/src/content/pages/personal-injury-hub.ts` |
| D2 | New content file `content/pages/work-injury-hub.ts` — pulls + recombines workers-comp / workplace-injuries / IC work-injury / PT work-injury-rehab content | M | `rand-medical-content/src/content/pages/work-injury-hub.ts` |
| D3 | New page wrapper `app/personal-injury/page.tsx` (design only — imports content) | S | `app/personal-injury/page.tsx` |
| D4 | New page wrapper `app/work-injury/page.tsx` (design only — imports content) | S | `app/work-injury/page.tsx` |
| D5 | New `HubPageTemplate.tsx` shared shell — hero / hub-grid / process / why-rand / conditions / blog-feed / FAQ / sticky-cta | L | `components/pages/HubPageTemplate.tsx` |
| D6 | Add hub page schema (`MedicalSpecialty` + `Service` JSON-LD) | S | `components/seo/JsonLd.tsx` (extend) |
| D7 | Wire hubs into header navigation as primary nav items | S | `content/global/navigation.ts` (approved nav-only edit) |
| D8 | Sitemap.ts — auto-include both hub routes | S | `app/sitemap.ts` |
| D9 | Update homepage InjurySection CTAs to point at new hub URLs (`/personal-injury`, `/work-injury`) instead of `/services/injury-services/*` | S | `content/pages/home.ts` (approved edit — URL updates only) |

### 🟫 Block E — Page-by-Page Polish (Phase 4)

Apply the design pass to each remaining page. Each is **design-only** (component-level) — no content edits.

| # | Page Group | Complexity | Approach |
|---|---|---|---|
| E1 | `/services/[pillar]` (7 pillars) | M | Verify each renders with HeroAward variant, refreshed cards, real imagery from facility folder |
| E2 | `/services/[pillar]/[detail]` (~50 pages) | M | Refresh treatments-list cards, ensure breadcrumbs render, FAQ schema |
| E3 | `/conditions/[category]/[condition]` (~45 pages) | M | Refresh CausesSection, SymptomsSection, HowWeHelpSection cards |
| E4 | `/about/*` (5 pages) | M | Real facility photos, team section refresh |
| E5 | `/contact` | S | Map embed, contact form polish, hours card |
| E6 | `/patient-resources/*` (5 pages) | M | Card refresh, sticky CTA verification |
| E7 | `/legal-support/*` (6 pages) | S | Mostly typography polish |
| E8 | `/blog/*` (3 routes) | M | Card refresh, ToC styling, MDX prose pass |
| E9 | `/careers` | S | Light refresh |

### 🟨 Block F — Content Plans (Phase 5 + 6, deliverables only)

| # | Task | Complexity | Files |
|---|---|---|---|
| F1 | `content/blog-content-plan.md` — 5 clusters × 8–12 articles, pillar+supports, internal linking map | M | `rmc-website/content/blog-content-plan.md` |
| F2 | `content/image-generation-queue.md` — every page audited for image needs, ComfyUI prompt per image, slot mapping, using `Rand-V4-Navy-style-guide.md` as the style anchor | M | `rmc-website/content/image-generation-queue.md` |
| F3 | Generate first 5 hero images via ComfyUI (PI hub, WI hub, pain-management, ortho, immediate-care) | L | ComfyUI local API |

### 🟩 Block G — Deployment (Phase 7)

| # | Task | Complexity | Notes |
|---|---|---|---|
| G1 | Verify `netlify.toml` is correct for Next.js 15 (uses `@netlify/plugin-nextjs`, not the SPA redirect from the brief — that's an Astro pattern) | S | `netlify.toml` |
| G2 | `git init`, `git add`, first commit, `git branch -M main` | S | (await user confirmation before running) |
| G3 | Connect to GitHub remote (await user for repo URL) | S | Manual / `gh repo create` |
| G4 | Connect Netlify project (await user for site name) | S | `netlify init` or dashboard |
| G5 | Final `npm run build` smoke test in CI mode | S | — |

---

## Critical Notes — Brief vs. Reality

The brief was drafted assuming **Astro**. Several specifics need translation:

- **Stack:** Next.js 15, not Astro. `@astrojs/image` rules don't apply. No `astro:assets`. Use `next/image`.
- **`netlify.toml` redirect** in the brief (`from = "/*", to = "/index.html"`) is for SPAs. **Wrong for Next.js.** Existing `netlify.toml` already uses `@netlify/plugin-nextjs` which handles routing correctly. **Keep the existing config.**
- **Skill file path** in the brief (`/mnt/skills/...`) is a Linux path; we're on Windows. The skill was loaded by name from the available skills list.
- **Fonts** in the brief (Space Grotesk + Plus Jakarta) conflict with the brand's committed DM Serif + DM Sans. Brand consistency wins.
- **Color accent** in the brief (`#D97706` Amber/Gold) — the brand style guide names this color as `#F4B76A` "Compassion Light." Using the brand-correct hex.

These deviations are flagged here so the user can override if they prefer the brief's letter over the codebase's spirit.

---

## Order of Execution (do this in sequence)

1. Block A (foundation fixes) → verify `npm run build` clean — ✅ DONE (prev session)
2. Block B (global UX layer) — ✅ DONE (prev session)
3. Block C (homepage redesign) — ✅ DONE (prev session)
4. Block D (PI + WI hub pages) ← **flagship deliverable** — ✅ DONE (prev session)
5. Block F1 + F2 (markdown plans — quick wins) — ✅ DONE (prev session)
6. Block E (page-by-page polish — iterative) — ✅ DONE this session (E1–E6)
7. Block F3 (image generation — long-running) — ✅ DONE this session, Waves 1–5 + pillar features
8. Block F1.1 (5 pillar articles, 2,000+ words each) — ✅ DONE this session
9. Block F1.2 (17 support articles) — ⏸ PAUSED — confirm before continuing
10. Block G (deployment — pause for user input) — ⏸ PAUSED for user

## Completion Snapshot (this session)

- 26 new images generated via local ComfyUI (V4 Navy style template):
  - Wave 1: 5 priority hero images (PI hub, WI hub, Pain Mgmt, Ortho, Immediate Care)
  - Wave 2: 2 pillar heroes (Internal Medicine, Injury Services)
  - Wave 3: 6 procedural treatment illustrations
  - Wave 4: 4 blog cluster bases
  - Wave 5: 3 OG social images
  - Pillar features: 5 article hero images
- 5 new pillar blog articles written (workers' comp, auto accident, non-surgical pain, ortho, PT)
- All 5 condition-section components refreshed with the standard card pattern (45 pages improved)
- Service detail template polished (50 pages improved)
- Facility photos integrated into 5 about pages
- Patient resources, legal, contact, careers polished
- Blog index, category, article cards refreshed
- Hub content files updated to reference new image paths
- Final build: ✅ 181/181 static pages, zero TypeScript errors
