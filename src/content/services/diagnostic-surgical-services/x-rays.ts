// src/content/services/diagnostic-surgical-services/x-rays.ts
// Rand Medical Center — X-Rays (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "X-Rays in Arlington Heights, IL | Rand Medical Center",
  description: "On-site X-rays in Arlington Heights, IL for quick evaluation of fractures, joint problems, and spine conditions.",
  keywords: ["x rays Arlington Heights", "x-rays near me"],
  canonical: "https://www.randmedicalcenter.com/services/diagnostic-surgical-services/x-rays",
};

export const hero: HeroSection = {
  eyebrow: "Diagnostic & Surgical Services",
  headline: "X-Rays in Arlington Heights, IL",
  subheadline: "On-site X-rays in Arlington Heights, IL for quick evaluation of fractures, joint problems, and spine conditions..",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About X-Rays",
  body: "X-rays are a fast, low-radiation imaging method that allows your doctor to evaluate bones, joints, and certain soft tissue conditions during your visit. Our on-site X-ray equipment produces digital images that are available immediately, so your doctor can review them with you the same day.\n\nX-rays are commonly used to assess suspected fractures, evaluate joint alignment, monitor healing of broken bones, and screen for arthritis or degenerative changes.",
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
