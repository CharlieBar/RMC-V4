// src/content/pages/patient-forms.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Patient Forms
// ─────────────────────────────────────────────────────────

import type { SEOMeta, HeroSection, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Patient Forms | Rand Medical Center | Arlington Heights, IL",
  description:
    "Download and complete patient forms before your appointment at Rand Medical Center. Save time at check-in by filling out paperwork in advance.",
  canonical: "https://www.randmedicalcenter.com/patient-resources/patient-forms",
};

export const hero: HeroSection = {
  eyebrow: "Patient Resources",
  headline: "Patient Forms",
  subheadline: "Complete your paperwork before your appointment to save time at check-in. Download, fill out, and bring your forms to your visit.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const intro = {
  headline: "Save Time at Your Visit",
  body: "Completing your forms ahead of time lets your doctor spend more time with you and less time on paperwork. Download the forms you need below, fill them out at home, and bring them to your appointment.",
};

// ASSUMPTION: Actual form PDFs not provided — update hrefs when forms are created
export const sections = [
  {
    id: "new-patient",
    headline: "New Patient Forms",
    body: "All new patients should complete the following forms before their first visit:",
    items: [
      "New Patient Registration Form",
      "Medical History Questionnaire",
      "Medication List",
      "Insurance Information Form",
      "HIPAA Privacy Acknowledgment",
      "Consent to Treatment",
    ],
    cta: { text: "Download New Patient Packet", href: "/forms/new-patient-packet.pdf" },
  },
  {
    id: "workers-comp",
    headline: "Workers' Compensation Forms",
    body: "If you're visiting for a work-related injury, please also complete:",
    items: [
      "Workers' Compensation Information Form",
      "Employer and Injury Details Form",
      "Authorization for Release of Medical Records",
    ],
    cta: { text: "Download Workers' Comp Forms", href: "/forms/workers-comp-packet.pdf" },
  },
  {
    id: "auto-accident",
    headline: "Auto Accident / Personal Injury Forms",
    body: "If you're visiting after an auto accident or personal injury, please also complete:",
    items: [
      "Accident Information Form",
      "Attorney Information (if applicable)",
      "Insurance and Billing Authorization",
    ],
    cta: { text: "Download Auto/PI Forms", href: "/forms/auto-injury-packet.pdf" },
  },
  {
    id: "medical-records",
    headline: "Medical Records Release",
    body: "To request copies of your medical records or authorize transfer of records to another provider:",
    items: [
      "Authorization for Release of Medical Information (HIPAA-compliant)",
    ],
    cta: { text: "Download Records Release Form", href: "/forms/records-release.pdf" },
  },
];

export const ctaSection = {
  headline: "Need Help With Forms?",
  body: "If you have trouble downloading or completing any forms, call our office and we'll help. You can also complete forms when you arrive — just plan to arrive 15 minutes early.",
  primaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "primary" as const },
  secondaryCTA: { text: "Schedule Online", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Can I complete forms when I arrive?", answer: "Yes. However, completing forms in advance saves 10–15 minutes at check-in and ensures your appointment starts on time." },
  { question: "Do I need to fill out new forms for every visit?", answer: "No. New patient forms are completed once. You may be asked to update your information annually or if your insurance or medications change." },
  { question: "Are the forms available in other languages?", answer: "Please call our office to request forms in other languages. We're happy to accommodate when possible." },
];
