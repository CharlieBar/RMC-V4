// src/content/services/orthopedics/fracture-care.ts
// Rand Medical Center — Fracture Care (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Fracture Care in Arlington Heights, IL | Rand Medical Center",
  description: "Fracture evaluation and treatment in Arlington Heights, IL — X-rays, casting, splinting, and surgical repair for broken bones from accidents and injuries.",
  keywords: ["fracture care Arlington Heights", "fracture care near me"],
  canonical: "https://www.randmedicalcenter.com/services/orthopedics/fracture-care",
};

export const hero: HeroSection = {
  eyebrow: "Orthopedics",
  headline: "Fracture Care in Arlington Heights, IL",
  subheadline: "X-rays, casting, splinting, and surgical repair for broken bones from accidents and injuries..",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About Fracture Care",
  body: "A fracture (broken bone) can range from a hairline crack to a complete break requiring surgical repair. Common fractures we treat include wrist, ankle, foot, hand, arm, and rib fractures from falls, work injuries, car accidents, and sports.\n\nOur fracture care process starts with on-site X-rays to assess the break. Depending on the type and location, treatment may include casting, splinting, bracing, or surgical fixation. We monitor healing with follow-up imaging and coordinate physical therapy when the bone is ready for rehabilitation.\n\nFor work injuries and auto accident fractures, we handle all documentation from the first visit through final recovery.",
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
