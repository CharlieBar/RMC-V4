// src/content/services/immediate-care/work-injury-urgent-care.ts
// Rand Medical Center — Work Injury Immediate Care (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Work Injury Immediate Care in Arlington Heights, IL | Rand Medical Center",
  description: "Same-day work injury evaluation and treatment in Arlington Heights, IL with workers' comp documentation from the first visit.",
  keywords: ["work injury urgent care Arlington Heights", "work injury immediate care near me"],
  canonical: "https://www.randmedicalcenter.com/services/immediate-care/work-injury-urgent-care",
};

export const hero: HeroSection = {
  eyebrow: "Immediate Care",
  headline: "Work Injury Immediate Care in Arlington Heights, IL",
  subheadline: "Same-day work injury evaluation and treatment in Arlington Heights, IL with workers' comp documentation from the first visit..",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About Work Injury Immediate Care",
  body: "When a worker is injured on the job, prompt medical evaluation protects both the employee's health and the employer's interests. Our work injury immediate care service prioritizes same-day evaluation for new workplace injuries.\n\nFrom the first visit, we establish a diagnosis, begin treatment, generate work status documentation, and communicate with the employer and workers' compensation carrier. This documentation foundation is critical for a smooth claims process.\n\nEmployers can send injured workers directly to our clinic. No referral or pre-authorization is needed for initial evaluation of work injuries.",
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
