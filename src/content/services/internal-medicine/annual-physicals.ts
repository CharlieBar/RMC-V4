// src/content/services/internal-medicine/annual-physicals.ts
// Rand Medical Center — Annual Physicals (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Annual Physicals in Arlington Heights, IL | Rand Medical Center",
  description: "Annual physical exams in Arlington Heights, IL for preventive health screenings, health assessment, and early detection of problems.",
  keywords: ["annual physicals Arlington Heights", "annual physicals near me"],
  canonical: "https://www.randmedicalcenter.com/services/internal-medicine/annual-physicals",
};

export const hero: HeroSection = {
  eyebrow: "Internal Medicine",
  headline: "Annual Physicals in Arlington Heights, IL",
  subheadline: "Annual physical exams in Arlington Heights, IL for preventive health screenings, health assessment, and early detection of problems..",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About Annual Physicals",
  body: "Annual physicals give you and your doctor a regular opportunity to assess your overall health, update preventive screenings, review medications, and catch potential problems before they become serious.\n\nYour annual physical at Rand Medical Center includes a comprehensive physical examination, vital signs review, age-appropriate health screenings, medication review, and discussion of any health concerns or symptoms you've been experiencing.",
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
