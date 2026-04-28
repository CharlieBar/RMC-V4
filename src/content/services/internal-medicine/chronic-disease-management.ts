// src/content/services/internal-medicine/chronic-disease-management.ts
// Rand Medical Center — Chronic Disease Management (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Chronic Disease Management in Arlington Heights, IL | Rand Medical Center",
  description: "Ongoing management of diabetes, high blood pressure, and high cholesterol in Arlington Heights, IL. Regular monitoring and personalized care plans.",
  keywords: ["chronic disease management Arlington Heights", "chronic disease management near me"],
  canonical: "https://www.randmedicalcenter.com/services/internal-medicine/chronic-disease-management",
};

export const hero: HeroSection = {
  eyebrow: "Internal Medicine",
  headline: "Chronic Disease Management in Arlington Heights, IL",
  subheadline: "Ongoing management of diabetes, high blood pressure, and high cholesterol in Arlington Heights, IL. Regular monitoring and personalized care plans..",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About Chronic Disease Management",
  body: "Chronic disease management at Rand Medical Center focuses on helping patients with long-term conditions — diabetes, hypertension, high cholesterol, and others — maintain control and prevent complications through regular monitoring, medication adjustments, and lifestyle guidance.\n\nOur approach combines scheduled follow-up visits, in-house lab work for convenient monitoring, medication optimization, and practical lifestyle recommendations that fit your real life.",
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
