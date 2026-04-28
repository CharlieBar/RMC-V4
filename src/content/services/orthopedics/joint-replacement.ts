// src/content/services/orthopedics/joint-replacement.ts
// Rand Medical Center — Joint Replacement Surgery (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Joint Replacement Surgery in Arlington Heights, IL | Rand Medical Center",
  description: "Hip and knee joint replacement in Arlington Heights, IL to reduce severe arthritis pain and restore mobility.",
  keywords: ["joint replacement Arlington Heights", "joint replacement surgery near me"],
  canonical: "https://www.randmedicalcenter.com/services/orthopedics/joint-replacement",
};

export const hero: HeroSection = {
  eyebrow: "Orthopedics",
  headline: "Joint Replacement Surgery in Arlington Heights, IL",
  subheadline: "Hip and knee joint replacement in Arlington Heights, IL to reduce severe arthritis pain and restore mobility..",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About Joint Replacement Surgery",
  body: "Joint replacement surgery removes damaged cartilage and bone from a severely worn or injured joint and replaces it with an artificial implant (prosthesis). It's most commonly performed on knees and hips when arthritis, injury, or degeneration has caused pain and loss of function that no longer responds to conservative treatments.\n\nModern joint replacements are designed to restore natural movement and last 15–25 years or more. The surgery is performed at our affiliated outpatient surgery center, and post-surgical rehabilitation begins right here at Rand Medical Center in our physical therapy gym.\n\nOur orthopedic team evaluates whether joint replacement is the right option for you — and always explores conservative alternatives first.",
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
