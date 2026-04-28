// src/content/pages/about-mission.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Mission & Vision Page
// ─────────────────────────────────────────────────────────

import type { SEOMeta, HeroSection, FeatureItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Our Mission & Vision | Rand Medical Center",
  description:
    "Rand Medical Center's mission is to provide focused, compassionate injury care that restores function and supports families throughout the northwest Chicago suburbs.",
  canonical: "https://www.randmedicalcenter.com/about/mission-vision",
};

export const hero: HeroSection = {
  eyebrow: "About Us",
  headline: "Our Mission and Vision",
  subheadline:
    "Focused, compassionate injury care that restores function, supports families, and respects the legal and workplace realities our patients face.",
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

export const mission = {
  headline: "Our Mission",
  body: "To deliver safe, evidence-based injury and pain care that helps patients move better, feel better, and return to meaningful work and daily life.\n\nEvery decision we make — from the treatments we recommend to the way we communicate with employers and attorneys — is guided by one question: is this in the best interest of the patient's health and long-term function?",
};

export const vision = {
  headline: "Our Vision",
  body: "To be the trusted regional center for work injuries, auto accidents, and complex pain conditions — recognized across the northwest Chicago suburbs for clinical excellence, clear communication, and genuinely coordinated care.\n\nWe envision a healthcare experience where injured patients never have to repeat their story, chase down records, or wonder what happens next. Where every provider on the team knows the plan. Where recovery feels supported, not scattered.",
};

export const principles = {
  headline: "Principles That Guide Our Practice",
  items: [
    {
      icon: "compass",
      title: "Start With the Patient",
      description:
        "Understand the person, not just the diagnosis. Consider their job, their family situation, their fears, and their goals before recommending a path forward.",
    },
    {
      icon: "shield",
      title: "Follow the Evidence",
      description:
        "Recommend treatments supported by clinical research and professional guidelines. Avoid procedures that lack solid evidence of benefit.",
    },
    {
      icon: "message-circle",
      title: "Communicate Clearly",
      description:
        "Explain diagnoses, treatment options, timelines, and expectations in plain language. Patients should understand their care, not just consent to it.",
    },
    {
      icon: "link",
      title: "Coordinate — Don't Fragment",
      description:
        "Keep all providers working from the same plan. Share information actively. Avoid the siloed care that wastes time and frustrates patients.",
    },
    {
      icon: "trending-up",
      title: "Measure Outcomes",
      description:
        "Track patient progress and adjust plans based on real results, not assumptions. What gets measured gets improved.",
    },
    {
      icon: "heart",
      title: "Treat People With Dignity",
      description:
        "Injured workers, accident victims, and chronic pain patients deserve respect and compassion. Pain is real. Fear is real. We take both seriously.",
    },
  ] as FeatureItem[],
};

export const ctaSection = {
  headline: "Experience Our Approach Firsthand",
  body: "The best way to understand our mission is to experience it. If you or someone you know is dealing with an injury or pain, we'd be glad to help.",
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
