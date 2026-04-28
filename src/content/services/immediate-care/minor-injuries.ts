// src/content/services/immediate-care/minor-injuries.ts
// Rand Medical Center — Minor Injuries (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Minor Injuries in Arlington Heights, IL | Rand Medical Center",
  description: "Quick assessment and treatment for sprains, strains, minor fractures, and simple wounds in Arlington Heights, IL.",
  keywords: ["minor injuries Arlington Heights", "minor injuries near me"],
  canonical: "https://www.randmedicalcenter.com/services/immediate-care/minor-injuries",
};

export const hero: HeroSection = {
  eyebrow: "Immediate Care",
  headline: "Minor Injuries in Arlington Heights, IL",
  subheadline: "Quick assessment and treatment for sprains, strains, minor fractures, and simple wounds in Arlington Heights, IL..",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About Minor Injuries",
  body: "Minor injuries — sprains, strains, minor fractures, cuts, and bruises — are some of the most common reasons people visit our immediate care clinic. While these injuries aren't life-threatening, they still need proper evaluation and treatment to heal correctly and prevent complications.\n\nOur team can perform on-site X-rays, apply splints or braces, clean and dress wounds, and provide appropriate pain management from the first visit.",
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
