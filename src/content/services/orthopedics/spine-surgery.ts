// src/content/services/orthopedics/spine-surgery.ts
// Rand Medical Center — Spine Surgery (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Spine Surgery in Arlington Heights, IL | Rand Medical Center",
  description: "Spine surgery in Arlington Heights, IL for herniated discs, spinal stenosis, and structural spine problems that haven't responded to conservative care.",
  keywords: ["spine surgery Arlington Heights", "spine surgery near me"],
  canonical: "https://www.randmedicalcenter.com/services/orthopedics/spine-surgery",
};

export const hero: HeroSection = {
  eyebrow: "Orthopedics",
  headline: "Spine Surgery in Arlington Heights, IL",
  subheadline: "Spine surgery in Arlington Heights, IL for herniated discs, spinal stenosis, and structural spine problems that haven't responded to conservative care..",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About Spine Surgery",
  body: "Spine surgery is considered when conservative treatments — physical therapy, injections, medications — have not provided adequate relief for conditions like herniated discs, spinal stenosis, degenerative disc disease, or spinal instability.\n\nOur orthopedic spine surgeons perform procedures ranging from minimally invasive discectomy and laminectomy to more complex spinal fusion. The goal of every surgery is to relieve nerve compression, stabilize the spine, and restore function with the smallest possible incision and fastest recovery.\n\nAt Rand Medical Center, spine surgery decisions are made collaboratively — your pain management physician and physical therapist contribute to the discussion alongside your surgeon.",
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
