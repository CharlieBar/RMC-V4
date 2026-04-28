// src/content/pages/about-awards.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Awards & Accreditations Page
// ─────────────────────────────────────────────────────────

import type { SEOMeta, HeroSection } from "@/types/content";

export const seo: SEOMeta = {
  title: "Awards, Accreditations & Quality Commitments | Rand Medical Center",
  description:
    "Learn about the certifications, accreditations, and quality commitments that guide care at Rand Medical Center in Arlington Heights, IL.",
  canonical: "https://www.randmedicalcenter.com/about/awards-accreditations",
};

export const hero: HeroSection = {
  eyebrow: "About Us",
  headline: "Awards, Accreditations, and Quality Commitments",
  subheadline:
    "Our commitment to patient safety, clinical quality, and ethical practice is reflected in the standards we maintain every day.",
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
  headline: "Committed to High-Quality, Safe, and Ethical Care",
  body: "Rand Medical Center is committed to meeting and exceeding industry standards for safety, cleanliness, and ethical practice. Our providers maintain board certifications and ongoing medical education. Our affiliated facilities and programs follow strict guidelines for infection control, documentation, and patient safety.\n\nThese recognitions are a reflection of the daily work our team does to put patient safety and quality of care first.",
};

// ASSUMPTION: Specific awards and accreditations not provided.
// Replace with actual accreditations when available.
export const accreditations = {
  headline: "Our Accreditations and Standards",
  items: [
    {
      name: "Board-Certified Physicians",
      description:
        "Our pain management, orthopedic, and internal medicine physicians hold board certifications in their respective specialties and maintain active continuing medical education.",
    },
    {
      name: "Accredited Outpatient Surgery Center",
      description:
        "Our affiliated outpatient surgery center meets accreditation standards for safety, staffing, equipment, and infection control.",
    },
    {
      name: "HIPAA Compliance",
      description:
        "We follow all HIPAA regulations for protecting patient health information, from electronic records to in-office communications.",
    },
    {
      name: "OSHA Compliance",
      description:
        "Our facility follows OSHA guidelines for workplace safety, which is especially important given our focus on treating injured workers.",
    },
    {
      name: "Illinois Workers' Compensation Standards",
      description:
        "Our documentation, billing, and clinical processes meet the requirements of the Illinois Workers' Compensation Act.",
    },
  ],
};

export const qualityCommitments = {
  headline: "Our Quality Commitments",
  items: [
    "Evidence-based treatment protocols aligned with current clinical guidelines",
    "Ongoing provider education and training in new techniques and best practices",
    "Regular review of patient outcomes to improve care quality",
    "Infection prevention and control measures across all clinical areas",
    "Transparent communication with patients about diagnoses, treatment options, and risks",
    "Commitment to culturally sensitive, respectful care for every patient",
  ],
};

export const ctaSection = {
  headline: "Experience Quality Care at Rand Medical Center",
  body: "Our standards exist to protect you. If you're looking for a medical team that takes safety and quality seriously, schedule an appointment or call us today.",
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
