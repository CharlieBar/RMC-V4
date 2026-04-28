// src/content/services/physical-therapy/post-surgical-rehab.ts
// Rand Medical Center — Post-Surgical Rehabilitation (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Post-Surgical Rehabilitation in Arlington Heights, IL | Rand Medical Center",
  description: "Post-surgical rehabilitation in Arlington Heights, IL to restore strength, motion, and function after spine, joint, and soft tissue surgeries.",
  keywords: ["post surgical rehab Arlington Heights", "post-surgical rehabilitation near me"],
  canonical: "https://www.randmedicalcenter.com/services/physical-therapy/post-surgical-rehab",
};

export const hero: HeroSection = {
  eyebrow: "Physical Therapy",
  headline: "Post-Surgical Rehabilitation in Arlington Heights, IL",
  subheadline: "Post-surgical rehabilitation in Arlington Heights, IL to restore strength, motion, and function after spine, joint, and soft tissue surgeries..",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About Post-Surgical Rehabilitation",
  body: "Post-surgical rehabilitation is critical for achieving the best possible outcome after orthopedic or spine surgery. Your surgeon removes or repairs the damaged structure, but physical therapy is what restores your strength, flexibility, and ability to function in daily life.\n\nOur post-surgical rehab programs follow evidence-based protocols specific to your procedure — whether that's a knee replacement, rotator cuff repair, spinal fusion, or arthroscopic surgery. Your therapist communicates directly with your surgeon to ensure the rehab timeline and intensity match your healing progress.\n\nSessions are scheduled frequently in the early weeks after surgery and gradually decrease as you gain independence.",
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
