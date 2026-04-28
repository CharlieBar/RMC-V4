// src/content/pages/about.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — About Us Page
// ─────────────────────────────────────────────────────────

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "About Rand Medical Center | Injury & Pain Care in Arlington Heights, IL",
  description:
    "Learn about Rand Medical Center — a multi-specialty injury and pain clinic in Arlington Heights, IL with pain management, orthopedics, physical therapy, and immediate care under one roof.",
  keywords: [
    "about Rand Medical Center",
    "injury clinic Arlington Heights IL",
    "pain management doctors Arlington Heights",
    "multi-specialty medical center northwest Chicago suburbs",
  ],
  canonical: "https://www.randmedicalcenter.com/about",
};

export const hero: HeroSection = {
  eyebrow: "About Us",
  headline: "About Rand Medical Center",
  subheadline:
    "A multi-specialty clinic in Arlington Heights, IL built around one goal — helping injured people heal, recover, and get back to the life they want.",
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
  image: {
    src: "/images/about/clinic-exterior.jpg",
    alt: "Exterior view of Rand Medical Center in Arlington Heights, IL",
  },
};

export const story = {
  headline: "Why Rand Medical Center Exists",
  body: "Rand Medical Center was created to solve a common problem: injured patients being bounced from clinic to clinic, repeating their story at every stop, and still not getting clear answers or coordinated care.\n\nToo often, someone hurt at work or in a car accident sees one doctor for a diagnosis, drives across town for imaging, waits weeks for a specialist referral, and then starts physical therapy at yet another location. Records get lost. Communication breaks down. Recovery stalls.\n\nWe built Rand Medical Center to change that. Our physicians, surgeons, therapists, and support staff work together in one location — sharing information, coordinating treatment plans, and keeping patients informed at every step. The result is faster diagnoses, more consistent care, and better outcomes for people dealing with pain and injuries.",
};

export const mission = {
  headline: "Our Mission",
  body: "To deliver safe, evidence-based injury and pain care that helps patients move better, feel better, and return to meaningful work and daily life. Every decision we make is guided by one question: is this in the best interest of the patient's health and long-term function?",
};

export const vision = {
  headline: "Our Vision",
  body: "To be the trusted regional center for work injuries, auto accidents, and complex pain conditions — known for clinical excellence, clear communication, and coordinated care across the northwest Chicago suburbs.",
};

export const values = {
  headline: "What Guides Our Care",
  items: [
    {
      icon: "heart",
      title: "Patient-Centered Decisions",
      description:
        "Every treatment recommendation starts with what's best for you — not what's fastest or most profitable. We explain your options honestly and let you participate in the decision.",
    },
    {
      icon: "users",
      title: "Coordinated Team Approach",
      description:
        "Your pain management doctor, orthopedic surgeon, and physical therapist are in the same building and communicate directly. No fragmented care, no lost records.",
    },
    {
      icon: "file-text",
      title: "Clear Documentation and Communication",
      description:
        "We know that injured workers and accident victims need accurate, timely records. We produce thorough documentation and communicate clearly with employers, attorneys, and insurance carriers.",
    },
    {
      icon: "shield",
      title: "Evidence-Based Medicine",
      description:
        "Our providers follow current clinical guidelines and use treatments supported by medical evidence. We don't chase trends or recommend procedures that lack solid support.",
    },
    {
      icon: "clock",
      title: "Accessibility and Responsiveness",
      description:
        "Injuries don't wait, and neither should you. We offer same-day and next-day appointments for new injuries and respond to referral requests promptly.",
    },
    {
      icon: "map-pin",
      title: "Community Commitment",
      description:
        "We're proud to serve Arlington Heights, Mount Prospect, Palatine, Des Plaines, and the surrounding northwest Chicago suburbs. This community is our home, and your health matters to us.",
    },
  ] as FeatureItem[],
};

export const byTheNumbers = {
  headline: "Rand Medical Center at a Glance",
  stats: [
    // ASSUMPTION: All stats estimated — update with verified numbers
    { value: "20", suffix: "+", label: "Years Serving the Community" },
    { value: "7", label: "Medical Specialties On-Site" },
    { value: "500", suffix: "+", label: "Five-Star Patient Reviews" },
    { value: "1", label: "Location — All Services Under One Roof" },
  ],
};

export const servingAreas = {
  headline: "Serving the Northwest Chicago Suburbs",
  body: "Rand Medical Center is located at 1925 E Rand Rd in Arlington Heights, IL — centrally positioned to serve patients from across the northwest Chicago suburbs. Many of our patients come from nearby communities including Mount Prospect, Des Plaines, Palatine, Rolling Meadows, Schaumburg, Elk Grove Village, Wheeling, Buffalo Grove, Prospect Heights, Park Ridge, Niles, and Glenview.\n\nOur clinic, physical therapy gym, and outpatient surgery center are all on-site, so patients don't have to travel between multiple locations for their care.",
};

export const ctaSection = {
  headline: "Ready to Learn More or Schedule a Visit?",
  body: "Whether you're dealing with a new injury or a chronic pain condition, our team is here to help. Schedule an appointment or call us to discuss your situation.",
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
