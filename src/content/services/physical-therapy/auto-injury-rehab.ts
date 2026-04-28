// src/content/services/physical-therapy/auto-injury-rehab.ts
// Rand Medical Center — Auto Injury Rehabilitation (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Auto Injury Rehabilitation in Arlington Heights, IL | Rand Medical Center",
  description: "Physical therapy for auto accident injuries in Arlington Heights, IL — whiplash, back pain, neck pain, and soft tissue recovery.",
  keywords: ["auto injury rehab Arlington Heights", "auto injury rehabilitation near me"],
  canonical: "https://www.randmedicalcenter.com/services/physical-therapy/auto-injury-rehab",
};

export const hero: HeroSection = {
  eyebrow: "Physical Therapy",
  headline: "Auto Injury Rehabilitation in Arlington Heights, IL",
  subheadline: "whiplash, back pain, neck pain, and soft tissue recovery..",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About Auto Injury Rehabilitation",
  body: "After a car accident, even injuries that seem minor can lead to prolonged pain and stiffness if not properly rehabilitated. Auto injury rehabilitation at Rand Medical Center targets the specific problems caused by motor vehicle accidents — whiplash, cervical strain, low back pain, shoulder injuries, and soft tissue damage.\n\nOur therapists design recovery programs that address the acute phase (reducing pain and inflammation) and the strengthening phase (rebuilding stability and preventing chronic problems). Treatment may include manual therapy, cervical and lumbar stabilization exercises, and posture retraining.\n\nAll auto injury rehab is documented thoroughly for insurance and legal purposes.",
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
