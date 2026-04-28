// src/content/hubs/blog-index.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Blog Index Hub Page
// ─────────────────────────────────────────────────────────

import type { SEOMeta, HeroSection } from "@/types/content";

export const seo: SEOMeta = {
  title: "Health Blog | Injury Recovery & Pain Tips | Rand Medical Center",
  description:
    "Read articles about pain management, injury recovery, workers' compensation, physical therapy, and wellness from the medical team at Rand Medical Center in Arlington Heights, IL.",
  keywords: [
    "pain management blog",
    "injury recovery tips",
    "workers compensation information",
    "physical therapy articles",
    "back pain resources Arlington Heights",
  ],
  canonical: "https://www.randmedicalcenter.com/blog",
};

export const hero: HeroSection = {
  eyebrow: "Blog & Resources",
  headline: "Health Tips, Injury Resources, and Patient Guides",
  subheadline:
    "Practical information from the Rand Medical Center team — helping you understand your condition, explore treatment options, and take the right next steps.",
  primaryCTA: {
    text: "Schedule an Appointment",
    href: "https://www.tebra.com/care/practice/rand-medical-center-456192",
    variant: "primary",
  },
  secondaryCTA: {
    text: "Call (224) 735-3522",
    href: "tel:+12247353522",
    variant: "secondary",
  },
};

export const intro = {
  headline: "Learn From Our Medical Team",
  body: "Our blog is written by the physicians, therapists, and staff at Rand Medical Center to help patients and families understand injuries, pain conditions, treatment options, and the recovery process. Browse by category below or explore our latest posts.",
};

export const categoryNav = [
  {
    name: "Pain Management",
    slug: "pain-management",
    href: "/blog/category/pain-management",
    description: "Tips for managing chronic and acute pain",
    articleCount: 6,
  },
  {
    name: "Injury Recovery",
    slug: "injury-recovery",
    href: "/blog/category/injury-recovery",
    description: "Guides for recovering from injuries",
    articleCount: 6,
  },
  {
    name: "Workers' Compensation",
    slug: "workers-compensation",
    href: "/blog/category/workers-compensation",
    description: "Work injury claims and rights in Illinois",
    articleCount: 6,
  },
  {
    name: "Physical Therapy",
    slug: "physical-therapy",
    href: "/blog/category/physical-therapy",
    description: "Exercise tips and rehabilitation guides",
    articleCount: 6,
  },
  {
    name: "Prevention & Wellness",
    slug: "prevention-wellness",
    href: "/blog/category/prevention-wellness",
    description: "Injury prevention and healthy habits",
    articleCount: 6,
  },
  {
    name: "Patient Resources",
    slug: "patient-resources",
    href: "/blog/category/patient-resources",
    description: "Insurance, forms, and what to expect",
    articleCount: 6,
  },
];

export const featuredPosts = [
  {
    title: "5 Non-Surgical Treatments for Chronic Back Pain",
    slug: "non-surgical-back-pain-treatments",
    href: "/blog/non-surgical-back-pain-treatments",
    category: "Pain Management",
    readTime: "6 min",
    description: "Chronic back pain doesn't always require surgery. Learn about five proven non-surgical treatments.",
  },
  {
    title: "What to Do Immediately After a Workplace Injury",
    slug: "what-to-do-after-workplace-injury",
    href: "/blog/what-to-do-after-workplace-injury",
    category: "Workers' Compensation",
    readTime: "5 min",
    description: "The steps you take right after a work injury can affect your claim and your recovery.",
  },
  {
    title: "What to Expect at Your First Physical Therapy Visit",
    slug: "first-physical-therapy-visit",
    href: "/blog/first-physical-therapy-visit",
    category: "Physical Therapy",
    readTime: "4 min",
    description: "Nervous about starting PT? Here's a straightforward look at what your first session involves.",
  },
];

export const ctaSection = {
  headline: "Have a Question Not Covered Here?",
  body: "Our blog covers the most common questions we hear from patients, but every situation is different. If you need specific guidance for your injury or condition, call us or schedule a consultation.",
  primaryCTA: {
    text: "Schedule an Appointment",
    href: "https://www.tebra.com/care/practice/rand-medical-center-456192",
    variant: "primary" as const,
  },
  secondaryCTA: {
    text: "Call (224) 735-3522",
    href: "tel:+12247353522",
    variant: "secondary" as const,
  },
};
