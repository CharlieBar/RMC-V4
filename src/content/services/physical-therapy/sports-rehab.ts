// src/content/services/physical-therapy/sports-rehab.ts
// Rand Medical Center — Sports Rehabilitation (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Sports Rehabilitation in Arlington Heights, IL | Rand Medical Center",
  description: "Sports rehabilitation in Arlington Heights, IL to help athletes recover from injuries and return to sport safely and confidently.",
  keywords: ["sports rehab Arlington Heights", "sports rehabilitation near me"],
  canonical: "https://www.randmedicalcenter.com/services/physical-therapy/sports-rehab",
};

export const hero: HeroSection = {
  eyebrow: "Physical Therapy",
  headline: "Sports Rehabilitation in Arlington Heights, IL",
  subheadline: "Sports rehabilitation in Arlington Heights, IL to help athletes recover from injuries and return to sport safely and confidently..",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About Sports Rehabilitation",
  body: "Sports rehabilitation goes beyond basic injury recovery — it's about rebuilding the strength, speed, agility, and confidence you need to perform at your level. Whether you're a high school athlete recovering from an ACL tear or a weekend warrior healing from a rotator cuff repair, our sports rehab program is built around your sport and your goals.\n\nOur therapists use sport-specific exercises, plyometrics, balance training, and progressive return-to-play protocols. We work closely with your orthopedic surgeon or sports medicine physician to ensure you're cleared at each phase of recovery.\n\nThe goal isn't just getting you back on the field — it's getting you back stronger and less likely to be reinjured.",
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
