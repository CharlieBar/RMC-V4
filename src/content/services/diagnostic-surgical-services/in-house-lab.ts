// src/content/services/diagnostic-surgical-services/in-house-lab.ts
// Rand Medical Center — In-House Laboratory (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "In-House Laboratory in Arlington Heights, IL | Rand Medical Center",
  description: "In-house lab services in Arlington Heights, IL for blood work and basic testing at Rand Medical Center.",
  keywords: ["in house lab Arlington Heights", "in-house laboratory near me"],
  canonical: "https://www.randmedicalcenter.com/services/diagnostic-surgical-services/in-house-lab",
};

export const hero: HeroSection = {
  eyebrow: "Diagnostic & Surgical Services",
  headline: "In-House Laboratory in Arlington Heights, IL",
  subheadline: "In-house lab services in Arlington Heights, IL for blood work and basic testing at Rand Medical Center..",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About In-House Laboratory",
  body: "Our in-house laboratory provides convenient access to routine blood work and basic lab testing without a separate trip to an outside lab. Results are available quickly and reviewed directly by your treating physician.\n\nIn-house lab services are particularly convenient for patients who need regular monitoring for chronic conditions, preoperative lab work before surgery, or baseline blood tests as part of a new patient evaluation.",
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
