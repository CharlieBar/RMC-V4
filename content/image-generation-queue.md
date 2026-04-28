# Rand Medical Center — Image Generation Queue

**Style anchor:** `Rand-V4-Navy-style-guide.md` (canonical brand visual system).
**Tool:** ComfyUI local API with `z_image_turbo` model (or upgrade per `image_z_image_turbo-CLAUDE-TEST.json`).
**Aspect ratios:** Hero images `16:9` (2000×1125 or 2400×1350). Card thumbnails `4:3` or `3:2`. OG images `1200×630`.

## Style Prompt Template (paste into every generation)

```
Style: Rand V4 Navy. Cinematic medical photography. Deep navy (#071423) atmosphere
with 70% navy shadow, 20% clean white medical light, 8% Rand red (#D60B2F) accent glow,
2% warm amber (#F4B76A) comfort light. Soft clinical key light on subject. Red rim
or background glow. Navy gradient depth in corners. Premium medical campaign quality —
expert but compassionate. NOT emergency room, NOT urgent care stock photo, NOT
overexposed white room, NOT neon, NOT corporate flat. Real medical environment with
modern equipment. Professional clinician (mid-30s to mid-50s, warm expression) with
patient (relatable, mid-20s to mid-60s, calm demeanor). Negative space on the left
35–45% for headline overlay. 16:9 cinematic crop unless specified.
```

---

## Priority Image Set — Generate First (5 images)

These map to the highest-traffic pages and are the deliverable for Phase 6 of the brief.

### 1. `/public/images/hero/personal-injury-hero.jpg`
**Slot:** Hero background for `/personal-injury` hub page.
**Prompt addition:**
> Subject: a calm, professional physician in a navy lab coat reviewing tablet imaging with a young female auto-accident patient (subtle soft cervical collar, no visible injury). Patient is seated on exam bench. Doctor leaning slightly toward patient with a tablet showing a spinal MRI image. Background: modern exam room, deep navy walls, a single warm amber lamp in upper-left, subtle red glow from corridor. Mood: "you are hurt, but you are in the right place." Wide horizontal hero crop with negative space on the left third for headline overlay.

### 2. `/public/images/hero/work-injury-hero.jpg`
**Slot:** Hero background for `/work-injury` hub page.
**Prompt addition:**
> Subject: a male blue-collar patient in a high-visibility orange safety vest, mid-30s, seated on an exam bench. A doctor in a navy lab coat is gently examining the patient's right shoulder with both hands. Background: modern exam room with X-ray viewer on wall (subtle red Rand-branded label), warm amber desk lamp, navy walls, soft red rim light from background. Tablet on counter showing musculoskeletal anatomy. Wide horizontal hero crop, patient on right, negative space on left.

### 3. `/public/images/hero/pain-management-hero.jpg`
**Slot:** Hero background for `/services/pain-management` pillar page.
**Prompt addition:**
> Subject: a focused interventional pain physician in a navy scrub-top performing a precision injection procedure under fluoroscopic guidance (image-intensifier C-arm visible behind, partly out of focus). Sterile gloved hands, controlled lighting on the surgical field. Background: dark navy procedure suite with red equipment status indicators, warm amber accent on instrument tray. Cinematic, premium, medically accurate — not gory, no visible needle penetration. Wide horizontal crop, instrument field on right, negative space on upper-left.

### 4. `/public/images/hero/orthopedics-hero.jpg`
**Slot:** Hero background for `/services/orthopedics` pillar page.
**Prompt addition:**
> Subject: an orthopedic surgeon (early-50s, navy lab coat) showing a 3D printed knee joint model to a male patient (early-60s, casual button-down shirt). Both seated at a consultation table. Behind them, a wall-mounted X-ray viewer shows a clear knee radiograph with a subtle red Rand frame. Modern wood and navy office, warm amber desk lamp, soft red glow from doorway. Mood: trusted specialist explaining a clear plan. Wide horizontal crop, subjects on right, negative space on upper-left.

### 5. `/public/images/hero/immediate-care-hero.jpg`
**Slot:** Hero background for `/services/immediate-care` pillar page.
**Prompt addition:**
> Subject: a friendly nurse practitioner (early-40s, navy scrubs, stethoscope) greeting a walk-in patient (woman, mid-30s, holding her wrist gingerly) at a clean front-desk style intake area. Modern check-in counter with warm amber accent lamp, navy partition wall, soft red Rand-branded sign visible in soft focus. Mood: fast, caring, no waiting. Wide horizontal crop, subjects center-right, negative space on left.

---

## Full Image Audit by Page

### Homepage (`/`)

| Slot | File path | Status | Action |
|---|---|---|---|
| Hero right-panel ambient | (decorative gradient only) | ✅ rendered in code | none |
| InjurySection — Card 1 visual | `/images/hero/work-injury.png` | ✅ existing AI render | optional regenerate at higher res |
| InjurySection — Card 2 visual | `/images/hero/physician-exam.png` | ✅ existing AI render | optional regenerate at higher res |
| OG image | `/images/og/home.jpg` | ✅ existing | refresh with new hero |

### Hub Pages

| Page | Hero image | Intro side image | OG |
|---|---|---|---|
| `/personal-injury` | `/images/hero/physician-exam.png` (placeholder) → replace with **#1 above** | `/images/facility/exam-room.jpg` (real photo) ✅ | new — `/images/og/personal-injury.jpg` ⚪ |
| `/work-injury` | `/images/hero/work-injury.png` (placeholder) → replace with **#2 above** | `/images/facility/pt-gym.jpg` (real photo) ✅ | new — `/images/og/work-injury.jpg` ⚪ |

### Service Pillar Pages

| Page | Hero image | Status |
|---|---|---|
| `/services/pain-management` | `/images/services/pain-management-hero.jpg` | ⚪ Generate (#3 above) |
| `/services/orthopedics` | `/images/services/orthopedics-hero.jpg` | ⚪ Generate (#4 above) |
| `/services/physical-therapy` | `/images/services/physical-therapy-hero.jpg` | Use real photo `physical-therapy-hero.png` ✅ |
| `/services/immediate-care` | `/images/services/immediate-care-hero.jpg` | ⚪ Generate (#5 above) |
| `/services/internal-medicine` | `/images/services/internal-medicine-hero.jpg` | ⚪ Generate (see below) |
| `/services/injury-services` | `/images/services/injury-services-hero.jpg` | ⚪ Generate (see below) |
| `/services/diagnostic-surgical-services` | `/images/services/diagnostic-surgical-hero.jpg` | Use real photo `rand-medical-center-OR.JPG` ✅ |

### Service Pillar — Additional Generations

#### 6. `/services/internal-medicine` — `internal-medicine-hero.jpg`
> Subject: a primary-care internist (warm, welcoming, navy lab coat) listening to a long-time patient (60s, casual jacket) speak about their concerns. Open chart on tablet, modern internal-medicine exam room with warm wood accents, navy walls, amber desk lamp, soft red glow from background. Mood: lifelong partnership in health. Wide horizontal crop.

#### 7. `/services/injury-services` — `injury-services-hero.jpg`
> Subject: a multi-specialty care team (3 people in a casual conversation circle — physician in lab coat, physical therapist in navy polo, medical assistant with chart) reviewing an injury patient's plan. Behind them: a faint imaging X-ray monitor, warm amber lamp, deep navy walls. Confident, calm, coordinated. Wide horizontal crop.

### Service Detail Pages — Reuse Strategy

There are ~50 service detail pages. Generating a unique hero for each is cost-prohibitive.
**Strategy:** Each detail page inherits the pillar hero image but adds a small detail-specific
icon overlay or section illustration. Generate **6 procedural illustration images** instead:

| File | Subject |
|---|---|
| `/images/treatments/epidural-injection.jpg` | Lumbar epidural injection setup, sterile field, fluoroscopy |
| `/images/treatments/nerve-block.jpg` | Ultrasound-guided peripheral nerve block |
| `/images/treatments/joint-injection.jpg` | Knee joint injection, sterile field, gloved hands |
| `/images/treatments/rfa.jpg` | Radiofrequency ablation probes on prep tray |
| `/images/treatments/spinal-cord-stim.jpg` | SCS device + lead, in-package premium product shot |
| `/images/treatments/x-ray-fluoro.jpg` | C-arm fluoroscopy unit, navy lit suite |

### Condition Hub & Categories

`/conditions/page.tsx` already shows 6 category banners. All exist in `/images/conditions/`. ✅ No regeneration needed.

### About Pages

| Page | Image needs | Action |
|---|---|---|
| `/about` | `/images/about/team-1.jpg`, `team-2.jpg` | ✅ existing (verify quality) |
| `/about/facility-tour` | 6 facility photos | ✅ Use real `RAND-REAL-IMAGES/` exterior, reception, waiting-area, OR, OR-2 |
| `/about/our-team` | individual team headshots | ⚪ Generate or use real if available |
| `/about/awards` | award badge composite | ⚪ Skip — text + small logo grid is fine |

### Blog

Each MDX article already has a `featuredImage` reference in frontmatter. **22 NEW articles**
from the blog plan need featured images:

**Strategy:** Use a 4-image library + per-article variants:
- `/images/blog/work-injury-base.jpg` — generic work-injury exam scene
- `/images/blog/auto-accident-base.jpg` — auto-accident-related care
- `/images/blog/pain-mgmt-base.jpg` — pain treatment scene
- `/images/blog/pt-base.jpg` — PT recovery scene

Plus 8 specific images for pillar articles. Total NEW blog images: **12**.

---

## Generation Order (priority)

| Wave | Images | Why |
|---|---|---|
| **Wave 1 (now)** | 5 priority hero images (PI, WI, PM, Ortho, IC) | Hub + flagship service pages |
| Wave 2 | 2 service pillar heroes (IM, Injury Services) | Round out service heroes |
| Wave 3 | 6 procedural treatment illustrations | Service detail page polish |
| Wave 4 | 4 blog cluster bases + 8 pillar feature images | Blog content launch |
| Wave 5 | OG images (PI, WI hubs) | Social sharing polish |

**Estimated total NEW images:** 27 (after subtracting the slots already covered by real
facility photos and existing AI renders).

---

## ComfyUI Workflow Template

The repository already contains `image_z_image_turbo-CLAUDE-TEST.json` and a
`generate-images.sh` shell script. Use these to batch-generate. For each new image:

1. Edit `generate-images.sh` (or fork it) to point at this queue's prompts.
2. Set `output_path` to the target file path listed in this document.
3. Run with `--seed` deterministic so we can re-roll if a generation comes back off-style.
4. Inspect output against the style guide checklist below before committing to repo.

### Style guide acceptance checklist (per image)

- [ ] 70% navy shadow / 20% clean white / 8% Rand red / 2% amber lighting ratio matches
- [ ] No emergency-room aesthetic
- [ ] No overexposed white background
- [ ] No flat stock-photo lighting
- [ ] Subject placed right or center-right with usable left negative space
- [ ] Skin tones natural, not flushed
- [ ] Modern equipment, not dated 2010s clinic
- [ ] Doctor and patient body language warm and confident
- [ ] No identifiable real person without release (model-released or AI-rendered)
- [ ] File size optimized (`.jpg` ≤ 350KB at 2000px width)
