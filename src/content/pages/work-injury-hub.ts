// src/content/pages/work-injury-hub.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Work Injury Hub Page
// Top-level /work-injury route. Recombines existing
// injury-services pillar content with WI-focused SEO + hero.
// ─────────────────────────────────────────────────────────

import type {
  SEOMeta,
  HeroSection,
  TreatmentLink,
} from "@/types/content";

import * as injury from "@/content/services/injury-services/index";

export const seo: SEOMeta = {
  title:
    "Work Injury Doctor in Arlington Heights, IL | Workers' Comp Care",
  description:
    "Work injury and workers' compensation care in Arlington Heights, IL. Same-day evaluations, work status reports, and return-to-work programs. We handle the documentation. Call (224) 735-3522.",
  keywords: [
    "work injury doctor Arlington Heights",
    "workers compensation clinic Arlington Heights IL",
    "workers comp doctor near me",
    "occupational injury Arlington Heights",
    "return to work doctor Chicago suburbs",
    "Illinois workers comp doctor",
  ],
  canonical: "https://www.randmedicalcenter.com/work-injury",
  ogImage: "/images/hero/work-injury-hero.jpg",
};

export const hero: HeroSection = {
  eyebrow: "Work Injury Hub · Workers' Comp · Same-Day",
  headline: "Work Injury Care in Arlington Heights",
  subheadline:
    "Same-day evaluation, treatment, and Illinois workers' compensation documentation — with employer communication and structured return-to-work programs.",
  primaryCTA: {
    text: "Schedule a Work Injury Visit",
    href: "https://www.tebra.com/care/practice/rand-medical-center-456192",
    variant: "primary",
  },
  secondaryCTA: {
    text: "Call (224) 735-3522",
    href: "tel:+12247353522",
    variant: "secondary",
  },
  image: {
    src: "/images/hero/work-injury-hero.jpg",
    alt: "Work injury evaluation at Rand Medical Center in Arlington Heights, IL",
  },
};

export const intro = {
  headline: "Workers' Compensation Doctors Built Around Injured Workers",
  body:
    "If you were injured on the job in Illinois, you have the right to choose your own doctor. You don't have to wait for your employer to set up the appointment — you can call Rand Medical Center directly. We see new work injuries the same day whenever possible, document everything from day one, and produce the work status reports your employer and insurance carrier need.\n\nWe treat the full range of workplace injuries: lifting injuries, falls, repetitive strain, lacerations, fractures, head injuries, and the chronic pain that can develop when an injury doesn't heal cleanly. Pain management, orthopedics, physical therapy, on-site imaging, and an outpatient surgery center all live under one roof in Arlington Heights — so your care is coordinated, not scattered.\n\nOur team is experienced with Illinois workers' compensation requirements, billing, and the structured return-to-work process. We communicate directly with employers, case managers, and attorneys when needed, so you can focus on getting better.",
  secondaryImage: {
    src: "/images/facility/pt-gym.jpg",
    alt: "Work injury rehabilitation gym at Rand Medical Center",
  },
};

// Filter to WI-relevant programs only
export const treatments = {
  headline: "Work Injury Programs We Provide",
  items: [
    {
      name: "Workers' Compensation Care",
      slug: "workers-compensation",
      href: "/services/injury-services/workers-compensation",
      description:
        "Complete work injury care, work status reports, employer communication, and return-to-work planning.",
    },
    {
      name: "Workplace Injury Treatment",
      slug: "workplace-injuries",
      href: "/services/injury-services/workplace-injuries",
      description:
        "Treatment plans for lifting injuries, falls, repetitive strain, and on-the-job accidents.",
    },
    {
      name: "Work Injury Urgent Care",
      slug: "work-injury-urgent-care",
      href: "/services/immediate-care/work-injury-urgent-care",
      description:
        "Walk-in care for new work injuries — same-day evaluation, on-site X-rays, and immediate treatment.",
    },
    {
      name: "Work Injury Rehabilitation",
      slug: "work-injury-rehab",
      href: "/services/physical-therapy/work-injury-rehab",
      description:
        "Structured physical therapy programs designed to restore function and support a safe return to work.",
    },
  ] as TreatmentLink[],
};

export const conditionsTreated = injury.conditionsTreated;
export const approach = {
  headline: "How Workers' Compensation Care Works at Rand",
  body: injury.approach.body,
  highlights: injury.approach.highlights,
};
export const process = injury.process;
export const whyChooseUs = injury.whyChooseUs;
export const relatedServices = injury.relatedServices;
export const relatedBlogPosts = injury.relatedBlogPosts;

export const ctaSection = {
  headline: "Hurt at Work? Call Us Today.",
  body: "Same-day work injury appointments. Documentation handled from day one. We coordinate with your employer and case manager. Call us — we'll take care of the medical side so you can focus on recovering.",
  primaryCTA: {
    text: "Call (224) 735-3522",
    href: "tel:+12247353522",
    variant: "primary" as const,
  },
  secondaryCTA: {
    text: "Schedule Online",
    href: "https://www.tebra.com/care/practice/rand-medical-center-456192",
    variant: "secondary" as const,
  },
};

export const faqs = injury.faqs;
