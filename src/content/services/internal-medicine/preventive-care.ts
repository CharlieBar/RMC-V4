// src/content/services/internal-medicine/preventive-care.ts
// Rand Medical Center — Preventive Care (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Preventive Care in Arlington Heights, IL | Rand Medical Center",
  description: "Preventive care in Arlington Heights, IL — vaccines, health screenings, and lifestyle counseling to keep you healthy and catch problems early.",
  keywords: ["preventive care Arlington Heights", "preventive care near me"],
  canonical: "https://www.randmedicalcenter.com/services/internal-medicine/preventive-care",
};

export const hero: HeroSection = {
  eyebrow: "Internal Medicine",
  headline: "Preventive Care in Arlington Heights, IL",
  subheadline: "vaccines, health screenings, and lifestyle counseling to keep you healthy and catch problems early..",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About Preventive Care",
  body: "Preventive care focuses on stopping health problems before they start. At Rand Medical Center, our preventive care services include immunizations, cancer screenings, cardiovascular risk assessment, diabetes screening, and lifestyle counseling for nutrition, exercise, and stress management.\n\nPrevention is the most effective and least expensive form of healthcare. Regular preventive visits help you stay ahead of potential problems and make informed decisions about your health.",
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
