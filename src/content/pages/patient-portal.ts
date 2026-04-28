// src/content/pages/patient-portal.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Patient Portal
// ─────────────────────────────────────────────────────────

import type { SEOMeta, HeroSection, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Patient Portal | Rand Medical Center | Arlington Heights, IL",
  description:
    "Access your medical records, appointment history, and secure messaging through the Rand Medical Center patient portal.",
  canonical: "https://www.randmedicalcenter.com/patient-resources/patient-portal",
};

export const hero: HeroSection = {
  eyebrow: "Patient Resources",
  headline: "Patient Portal",
  subheadline: "Access your health information, view appointment details, and communicate with your care team through our secure online portal.",
  // ASSUMPTION: Patient portal URL not provided — update when available
  primaryCTA: { text: "Log In to Patient Portal", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const intro = {
  headline: "Your Health Information at Your Fingertips",
  body: "Our patient portal gives you convenient, secure access to your medical information 24/7. View your records, check appointments, and communicate with our team — all from your computer or phone.",
};

export const features = [
  { title: "View Medical Records", description: "Access visit summaries, diagnoses, treatment plans, and lab results." },
  { title: "Appointment Management", description: "View upcoming appointments, request scheduling changes, and check appointment history." },
  { title: "Secure Messaging", description: "Send non-urgent messages to your care team and receive responses during business hours." },
  { title: "Medication List", description: "View your current medications and request refills when appropriate." },
  { title: "Test Results", description: "Access lab work and imaging results as they become available." },
  { title: "Forms and Documents", description: "Access and download forms, referral letters, and other documents." },
];

export const gettingStarted = {
  headline: "How to Access the Portal",
  steps: [
    "Ask our front desk team to set up your portal account during your next visit",
    "You'll receive an email invitation with a link to create your login credentials",
    "Set up a username and password, then log in from any device",
    "For technical issues, call our office at (224) 735-3522",
  ],
};

export const ctaSection = {
  headline: "Need Help With the Portal?",
  body: "If you need assistance setting up or accessing your patient portal account, our team is happy to help. Call us during business hours.",
  primaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "primary" as const },
  secondaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Is the patient portal secure?", answer: "Yes. The portal uses encryption and secure login credentials to protect your health information in compliance with HIPAA regulations." },
  { question: "Can I use the portal to schedule appointments?", answer: "You can view and manage existing appointments through the portal. For new appointments, please call our office or use our online scheduling system." },
  { question: "How quickly will I get a response to a portal message?", answer: "Messages are typically responded to within 1–2 business days. For urgent medical questions, please call our office directly at (224) 735-3522." },
];
