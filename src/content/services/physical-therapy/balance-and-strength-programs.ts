// src/content/services/physical-therapy/balance-and-strength-programs.ts
// Rand Medical Center — Balance and Strength Programs (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Balance and Strength Programs in Arlington Heights, IL | Rand Medical Center",
  description: "Balance and strength training in Arlington Heights, IL to reduce fall risk, improve stability, and build confidence in daily movement.",
  keywords: ["balance and strength programs Arlington Heights", "balance and strength programs near me"],
  canonical: "https://www.randmedicalcenter.com/services/physical-therapy/balance-and-strength-programs",
};

export const hero: HeroSection = {
  eyebrow: "Physical Therapy",
  headline: "Balance and Strength Programs in Arlington Heights, IL",
  subheadline: "Balance and strength training in Arlington Heights, IL to reduce fall risk, improve stability, and build confidence in daily movement..",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About Balance and Strength Programs",
  body: "Balance and strength programs at Rand Medical Center are designed for patients who need to improve core stability, reduce fall risk, or rebuild overall strength after injury, surgery, or prolonged inactivity.\n\nThese programs are especially valuable for older adults at risk of falls, patients recovering from hip or knee surgery, workers who need to meet physical job demands, and anyone experiencing weakness, unsteadiness, or loss of confidence in their movement.\n\nYour therapist assesses your baseline strength, balance, and functional mobility, then creates a progressive exercise program that builds safely over time.",
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
