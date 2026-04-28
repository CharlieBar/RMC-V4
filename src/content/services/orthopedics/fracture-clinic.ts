// src/content/services/orthopedics/fracture-clinic.ts
// Rand Medical Center — Fracture Clinic (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Fracture Clinic in Arlington Heights, IL | Rand Medical Center",
  description: "Dedicated fracture clinic in Arlington Heights, IL for prompt evaluation, X-rays, and treatment of suspected broken bones.",
  keywords: ["fracture clinic Arlington Heights", "fracture clinic near me"],
  canonical: "https://www.randmedicalcenter.com/services/orthopedics/fracture-clinic",
};

export const hero: HeroSection = {
  eyebrow: "Orthopedics",
  headline: "Fracture Clinic in Arlington Heights, IL",
  subheadline: "Dedicated fracture clinic in Arlington Heights, IL for prompt evaluation, X-rays, and treatment of suspected broken bones..",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About Fracture Clinic",
  body: "Our fracture clinic provides focused, efficient care for patients with suspected or confirmed fractures. Rather than waiting for a general appointment, fracture clinic patients are prioritized for quick evaluation, on-site X-rays, and immediate treatment planning.\n\nThe fracture clinic is especially useful for work injury patients who need same-day fracture evaluation and documentation, ER follow-up patients who need orthopedic review of a fracture diagnosed in the emergency room, and athletes or active adults with acute bone injuries.\n\nAfter initial stabilization, our team monitors healing with follow-up visits and coordinates physical therapy when appropriate.",
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
