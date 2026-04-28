// src/content/services/diagnostic-surgical-services/mri-referrals.ts
// Rand Medical Center — MRI Referrals (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "MRI Referrals in Arlington Heights, IL | Rand Medical Center",
  description: "Coordinated MRI scheduling in Arlington Heights, IL with rapid results and direct communication with your treating physician.",
  keywords: ["mri referrals Arlington Heights", "mri referrals near me"],
  canonical: "https://www.randmedicalcenter.com/services/diagnostic-surgical-services/mri-referrals",
};

export const hero: HeroSection = {
  eyebrow: "Diagnostic & Surgical Services",
  headline: "MRI Referrals in Arlington Heights, IL",
  subheadline: "Coordinated MRI scheduling in Arlington Heights, IL with rapid results and direct communication with your treating physician..",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About MRI Referrals",
  body: "When your doctor determines that an MRI is needed to evaluate soft tissue injuries, disc problems, ligament tears, or other conditions that X-rays can't fully assess, we coordinate the referral to a nearby imaging center.\n\nOur team handles scheduling, pre-authorization with your insurance, and follow-up to ensure results are received promptly. Your doctor reviews the MRI findings and discusses them with you at a follow-up appointment.",
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
