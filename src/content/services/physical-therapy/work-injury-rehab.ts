// src/content/services/physical-therapy/work-injury-rehab.ts
// Rand Medical Center — Work Injury Rehabilitation (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Work Injury Rehabilitation in Arlington Heights, IL | Rand Medical Center",
  description: "Work injury rehab in Arlington Heights, IL focused on safe return to job duties after workers' compensation injuries.",
  keywords: ["work injury rehab Arlington Heights", "work injury rehabilitation near me"],
  canonical: "https://www.randmedicalcenter.com/services/physical-therapy/work-injury-rehab",
};

export const hero: HeroSection = {
  eyebrow: "Physical Therapy",
  headline: "Work Injury Rehabilitation in Arlington Heights, IL",
  subheadline: "Work injury rehab in Arlington Heights, IL focused on safe return to job duties after workers' compensation injuries..",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About Work Injury Rehabilitation",
  body: "Work injury rehabilitation is designed around the physical demands of your job. Unlike general physical therapy, work injury rehab considers what you do for a living — lifting requirements, standing tolerance, repetitive movements — and builds a program that specifically prepares you to return to those duties safely.\n\nOur therapists are experienced with workers' compensation cases and understand the documentation requirements, including progress reports, functional capacity evaluations, and work hardening protocols.\n\nAt Rand Medical Center, work injury rehab is coordinated with your treating physician and communicated to your employer and case manager throughout the process.",
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
