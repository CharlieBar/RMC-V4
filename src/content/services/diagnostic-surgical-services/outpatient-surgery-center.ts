// src/content/services/diagnostic-surgical-services/outpatient-surgery-center.ts
// Rand Medical Center — Outpatient Surgery Center (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Outpatient Surgery Center in Arlington Heights, IL | Rand Medical Center",
  description: "Outpatient surgery center in Arlington Heights, IL for same-day orthopedic, pain management, and other procedures.",
  keywords: ["outpatient surgery center Arlington Heights", "outpatient surgery center near me"],
  canonical: "https://www.randmedicalcenter.com/services/diagnostic-surgical-services/outpatient-surgery-center",
};

export const hero: HeroSection = {
  eyebrow: "Diagnostic & Surgical Services",
  headline: "Outpatient Surgery Center in Arlington Heights, IL",
  subheadline: "Outpatient surgery center in Arlington Heights, IL for same-day orthopedic, pain management, and other procedures..",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About Outpatient Surgery Center",
  body: "Our affiliated outpatient surgery center provides a safe, accredited environment for same-day surgical and interventional procedures. Patients benefit from shorter wait times, lower costs compared to hospital-based surgery, and the convenience of going home the same day.\n\nThe surgery center is equipped for pain management procedures (spinal cord stimulation, complex injections), orthopedic procedures (arthroscopy, minor fracture repair), and certain neurological and general surgical procedures. All procedures are performed by the same physicians who manage your care at Rand Medical Center.",
};

export const whyChooseUs = {
  headline: "Why Choose Rand Medical Center?",
  features: [
    { icon: "users", title: "Coordinated Multi-Specialty Team", description: "Your care is managed by providers who communicate directly — pain management, orthopedics, PT, and primary care under one roof." },
    { icon: "clock", title: "Same-Day and Next-Day Access", description: "For injury cases, we prioritize quick appointments so diagnosis and treatment aren't delayed." },
    { icon: "briefcase", title: "Workers' Comp and PI Experience", description: "We handle documentation, employer communication, and attorney coordination for injury cases." },
    { icon: "map-pin", title: "Convenient Arlington Heights Location", description: "Easy access from Mount Prospect, Palatine, Des Plaines, Schaumburg, and the northwest suburbs." },
  ] as FeatureItem[],
};

export const ctaSection = {
  headline: "Schedule Your Appointment",
  body: "Our team in Arlington Heights, IL is ready to help. Call us or schedule online to get started.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Do I need a referral?", answer: "In most cases, no. Call us directly to schedule. Some insurance plans may require a referral — our team can verify before your visit." },
  { question: "Do you accept workers' compensation?", answer: "Yes. We regularly treat work injury patients and handle all workers' comp documentation and billing." },
  { question: "What should I bring to my first visit?", answer: "Bring a photo ID, insurance card or workers' comp claim info, a list of medications, and any prior imaging or records from other providers." },
];
