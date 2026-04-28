// src/content/services/immediate-care/minor-illnesses.ts
// Rand Medical Center — Minor Illnesses (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Minor Illnesses in Arlington Heights, IL | Rand Medical Center",
  description: "Walk-in treatment for colds, flu, minor infections, and common illnesses in Arlington Heights, IL.",
  keywords: ["minor illnesses Arlington Heights", "minor illnesses near me"],
  canonical: "https://www.randmedicalcenter.com/services/immediate-care/minor-illnesses",
};

export const hero: HeroSection = {
  eyebrow: "Immediate Care",
  headline: "Minor Illnesses in Arlington Heights, IL",
  subheadline: "Walk-in treatment for colds, flu, minor infections, and common illnesses in Arlington Heights, IL..",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About Minor Illnesses",
  body: "When you're feeling sick and can't wait for your regular doctor, our immediate care clinic provides evaluation and treatment for common non-emergency illnesses. We treat cold and flu symptoms, sinus infections, urinary tract infections, skin infections, and other conditions that need attention but don't require an emergency room visit.",
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
