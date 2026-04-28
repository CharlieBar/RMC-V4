// src/content/services/orthopedics/arthroscopic-surgery.ts
// Rand Medical Center — Arthroscopic Surgery (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Arthroscopic Surgery in Arlington Heights, IL | Rand Medical Center",
  description: "Minimally invasive arthroscopic surgery in Arlington Heights, IL for knee, shoulder, and other joint problems. Faster recovery, smaller incisions.",
  keywords: ["arthroscopic surgery Arlington Heights", "arthroscopic surgery near me"],
  canonical: "https://www.randmedicalcenter.com/services/orthopedics/arthroscopic-surgery",
};

export const hero: HeroSection = {
  eyebrow: "Orthopedics",
  headline: "Arthroscopic Surgery in Arlington Heights, IL",
  subheadline: "Minimally invasive arthroscopic surgery in Arlington Heights, IL for knee, shoulder, and other joint problems. Faster recovery, smaller incisions..",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About Arthroscopic Surgery",
  body: "Arthroscopic surgery uses a tiny camera (arthroscope) and specialized instruments inserted through small incisions to diagnose and treat problems inside joints. It's far less invasive than traditional open surgery, resulting in smaller scars, less pain, and faster recovery.\n\nCommon arthroscopic procedures include meniscus repair or removal, rotator cuff repair, labral repair, loose body removal, and cartilage smoothing. The procedure is performed at our affiliated outpatient surgery center, and most patients go home the same day.\n\nPost-surgical physical therapy begins at Rand Medical Center within days to weeks of surgery, depending on the procedure.",
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
