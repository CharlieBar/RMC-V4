// src/content/services/immediate-care/on-site-medications.ts
// Rand Medical Center — On-Site Medications (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "On-Site Medications in Arlington Heights, IL | Rand Medical Center",
  description: "Selected medications available on-site at Rand Medical Center in Arlington Heights, IL for immediate care and injury visits.",
  keywords: ["on site medications Arlington Heights", "on-site medications near me"],
  canonical: "https://www.randmedicalcenter.com/services/immediate-care/on-site-medications",
};

export const hero: HeroSection = {
  eyebrow: "Immediate Care",
  headline: "On-Site Medications in Arlington Heights, IL",
  subheadline: "Selected medications available on-site at Rand Medical Center in Arlington Heights, IL for immediate care and injury visits..",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About On-Site Medications",
  body: "For certain immediate care and injury visits, we can provide select medications right here at the clinic rather than sending you to an outside pharmacy. This is especially useful for work injury patients and after-hours visits when pharmacy access may be limited.\n\nOn-site medication dispensing is available for certain pain relievers, anti-inflammatory medications, and other commonly needed treatments. Your provider will determine if on-site medication is appropriate for your condition.",
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
