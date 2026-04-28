// src/content/pages/patient-resources-index.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Patient Resources Index
// ─────────────────────────────────────────────────────────

import type { SEOMeta, HeroSection, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Patient Resources | Rand Medical Center | Arlington Heights, IL",
  description:
    "Find patient forms, insurance information, FAQs, and guides to help you prepare for your visit at Rand Medical Center in Arlington Heights, IL.",
  keywords: ["patient resources Rand Medical Center", "patient forms Arlington Heights", "insurance information Rand Medical"],
  canonical: "https://www.randmedicalcenter.com/patient-resources",
};

export const hero: HeroSection = {
  eyebrow: "Patient Resources",
  headline: "Patient Resources and Information",
  subheadline: "Everything you need to prepare for your visit — insurance details, patient forms, FAQs, and guides to help you know what to expect.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const intro = {
  headline: "We Make It Easy to Get Started",
  body: "Whether you're a new patient preparing for your first visit or an existing patient looking for forms and information, we've organized everything in one place. If you can't find what you need here, call our office at (224) 735-3522 and our team will help.",
};

export const resourceCards = [
  {
    title: "Insurance and Billing",
    description: "Learn which insurance plans we accept, how workers' comp billing works, and how to verify your coverage before your visit.",
    href: "/patient-resources/insurance",
    icon: "credit-card",
  },
  {
    title: "Patient Forms",
    description: "Download and complete patient forms before your appointment to save time at check-in.",
    href: "/patient-resources/patient-forms",
    icon: "file-text",
  },
  {
    title: "Frequently Asked Questions",
    description: "Answers to the most common questions about appointments, services, workers' comp, and what to expect.",
    href: "/patient-resources/faq",
    icon: "help-circle",
  },
  {
    title: "What to Expect",
    description: "A step-by-step guide to your first visit, including what to bring and how your appointment will go.",
    href: "/patient-resources/what-to-expect",
    icon: "clipboard",
  },
  {
    title: "Patient Portal",
    description: "Access your medical records, appointment history, and communication with your care team through our secure patient portal.",
    href: "/patient-resources/patient-portal",
    icon: "lock",
  },
];

export const ctaSection = {
  headline: "Questions? We're Here to Help.",
  body: "If you need assistance with forms, insurance, scheduling, or anything else, call our team. We'll walk you through whatever you need.",
  primaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "primary" as const },
  secondaryCTA: { text: "Schedule Online", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "secondary" as const },
};
