// src/content/services/orthopedics/sports-medicine.ts
// Rand Medical Center — Sports Medicine (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Sports Medicine in Arlington Heights, IL | Rand Medical Center",
  description: "Sports medicine in Arlington Heights, IL for sprains, strains, ligament tears, and overuse injuries in athletes and active adults.",
  keywords: ["sports medicine Arlington Heights", "sports medicine near me"],
  canonical: "https://www.randmedicalcenter.com/services/orthopedics/sports-medicine",
};

export const hero: HeroSection = {
  eyebrow: "Orthopedics",
  headline: "Sports Medicine in Arlington Heights, IL",
  subheadline: "Sports medicine in Arlington Heights, IL for sprains, strains, ligament tears, and overuse injuries in athletes and active adults..",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About Sports Medicine",
  body: "Sports medicine at Rand Medical Center focuses on diagnosing and treating injuries related to sports, exercise, and active lifestyles. Whether you're a high school athlete, a weekend runner, or someone who stays active through physical work, our sports medicine team helps you recover safely and return to your activities.\n\nCommon conditions we treat include ACL and meniscus tears, rotator cuff injuries, ankle sprains, tendonitis, stress fractures, and overuse injuries. Treatment plans combine surgical and non-surgical options based on your injury, your goals, and how quickly you need to return to activity.\n\nOur sports rehab physical therapists work closely with the orthopedic team to design return-to-sport programs that rebuild strength, agility, and confidence.",
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
