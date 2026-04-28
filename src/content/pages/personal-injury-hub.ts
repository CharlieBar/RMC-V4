// src/content/pages/personal-injury-hub.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Personal Injury Hub Page
// Top-level /personal-injury route. Recombines existing
// injury-services pillar content with PI-focused SEO + hero.
// ─────────────────────────────────────────────────────────

import type {
  SEOMeta,
  HeroSection,
  TreatmentLink,
} from "@/types/content";

import * as injury from "@/content/services/injury-services/index";

export const seo: SEOMeta = {
  title:
    "Personal Injury Doctor in Arlington Heights, IL | Auto Accident Care",
  description:
    "Personal injury and auto accident medical care in Arlington Heights, IL. Same-day evaluation, on-site imaging, attorney coordination, and lien-based billing. Call (224) 735-3522.",
  keywords: [
    "personal injury doctor Arlington Heights",
    "auto accident doctor near me",
    "car accident injury treatment Arlington Heights",
    "whiplash doctor Chicago suburbs",
    "personal injury medical care Illinois",
    "PI lien doctor Arlington Heights",
  ],
  canonical: "https://www.randmedicalcenter.com/personal-injury",
  ogImage: "/images/hero/personal-injury-hero.jpg",
};

export const hero: HeroSection = {
  eyebrow: "Personal Injury Hub · Auto Accident · Slip & Fall",
  headline: "Personal Injury Care in Arlington Heights",
  subheadline:
    "Same-day evaluation after a car accident, slip-and-fall, or any injury caused by someone else's negligence — with the documentation your attorney needs.",
  primaryCTA: {
    text: "Schedule an Injury Evaluation",
    href: "https://www.tebra.com/care/practice/rand-medical-center-456192",
    variant: "primary",
  },
  secondaryCTA: {
    text: "Call (224) 735-3522",
    href: "tel:+12247353522",
    variant: "secondary",
  },
  image: {
    src: "/images/hero/personal-injury-hero.jpg",
    alt: "Physician evaluating a personal injury patient at Rand Medical Center in Arlington Heights, IL",
  },
};

export const intro = {
  headline: "Trusted Personal Injury Doctors for the Northwest Chicago Suburbs",
  body:
    "If you've been hurt in a car accident, slip-and-fall, or any other incident caused by someone else's negligence, the medical care you receive in the first days matters — both for your recovery and for your case. Rand Medical Center provides same-day evaluation, treatment, and the objective documentation that personal injury attorneys, insurance carriers, and the courts expect.\n\nOur multi-specialty team handles whiplash, soft-tissue injuries, fractures, herniated discs, traumatic brain injury follow-up, and the chronic pain that can develop after a serious accident. Pain management, orthopedics, on-site imaging, and physical therapy live under one roof in Arlington Heights, so your care is coordinated from day one.\n\nWe accept lien-based billing for qualified personal injury cases, which means treatment isn't delayed by out-of-pocket cost. We coordinate with your attorney directly and produce the records your case needs.",
  secondaryImage: {
    src: "/images/facility/exam-room.jpg",
    alt: "Personal injury exam room at Rand Medical Center",
  },
};

// Filter to PI-relevant programs only — auto accident, personal injury, MVA
export const treatments = {
  headline: "Personal Injury Programs We Provide",
  items: [
    {
      name: "Motor Vehicle Accident Care",
      slug: "motor-vehicle-accidents",
      href: "/services/injury-services/motor-vehicle-accidents",
      description:
        "Whiplash, back pain, and soft-tissue injury treatment after car, truck, or motorcycle accidents — with imaging and attorney-ready records.",
    },
    {
      name: "Personal Injury Medical Care",
      slug: "personal-injury",
      href: "/services/injury-services/personal-injury",
      description:
        "Slip-and-fall, premises liability, and assault injury cases — objective evaluation, treatment, and narrative medical reports.",
    },
    {
      name: "Pain Management Procedures",
      slug: "pain-management",
      href: "/services/pain-management",
      description:
        "Targeted injections, nerve blocks, and minimally invasive procedures for accident-related chronic pain.",
    },
    {
      name: "Auto Injury Rehabilitation",
      slug: "auto-injury-rehab",
      href: "/services/physical-therapy/auto-injury-rehab",
      description:
        "Personalized physical therapy programs for whiplash, back pain, and soft-tissue recovery after auto accidents.",
    },
  ] as TreatmentLink[],
};

export const conditionsTreated = injury.conditionsTreated;
export const approach = {
  headline: "How Personal Injury Care Works at Rand",
  body: injury.approach.body,
  highlights: injury.approach.highlights,
};
export const process = injury.process;
export const whyChooseUs = injury.whyChooseUs;
export const relatedServices = injury.relatedServices;
export const relatedBlogPosts = injury.relatedBlogPosts;

export const ctaSection = {
  headline: "Injured in an Accident? Call Us Today.",
  body: "Prompt medical evaluation protects both your health and your personal injury case. We accept lien-based billing for qualified cases — call us today and we'll get you in quickly.",
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
