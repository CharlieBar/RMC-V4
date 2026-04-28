// src/content/services/physical-therapy/orthopedic-rehab.ts
// Rand Medical Center — Orthopedic Rehabilitation (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Orthopedic Rehabilitation in Arlington Heights, IL | Rand Medical Center",
  description: "Orthopedic physical therapy in Arlington Heights, IL for recovery after fractures, joint injuries, and orthopedic surgery.",
  keywords: ["orthopedic rehab Arlington Heights", "orthopedic rehabilitation near me"],
  canonical: "https://www.randmedicalcenter.com/services/physical-therapy/orthopedic-rehab",
};

export const hero: HeroSection = {
  eyebrow: "Physical Therapy",
  headline: "Orthopedic Rehabilitation in Arlington Heights, IL",
  subheadline: "Orthopedic physical therapy in Arlington Heights, IL for recovery after fractures, joint injuries, and orthopedic surgery..",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About Orthopedic Rehabilitation",
  body: "Orthopedic rehabilitation focuses on restoring strength, range of motion, and function after bone, joint, or soft tissue injuries. Whether you've fractured a wrist, torn a knee ligament, or had joint replacement surgery, orthopedic rehab helps you regain the mobility and confidence you need to return to daily activities.\n\nYour physical therapist designs a progressive program based on your specific injury, your surgeon's guidelines (if applicable), and your functional goals. Sessions include manual therapy, targeted exercises, and functional movement training.\n\nAt Rand Medical Center, your therapist communicates directly with your orthopedic surgeon — so your rehab plan stays aligned with your overall recovery.",
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
