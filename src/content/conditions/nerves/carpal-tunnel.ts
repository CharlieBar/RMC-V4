// src/content/conditions/nerves/carpal-tunnel.ts
// Rand Medical Center — Carpal Tunnel Syndrome (Condition Page)

import type { SEOMeta, HeroSection, SymptomItem, CauseItem, ConditionLink, TreatmentLink, ServiceLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Carpal Tunnel Syndrome Treatment in Arlington Heights, IL | Rand Medical Center",
  description: "Carpal Tunnel Syndrome treatment in Arlington Heights, IL. Nerve compression at the wrist causing hand numbness, tingling, and weakness. Call (224) 735-3522.",
  keywords: ["carpal tunnel treatment Arlington Heights", "carpal tunnel doctor near me", "carpal tunnel syndrome specialist"],
  canonical: "https://www.randmedicalcenter.com/conditions/nerves/carpal-tunnel",
};

export const hero: HeroSection = {
  eyebrow: "Nerves Conditions",
  headline: "Carpal Tunnel Syndrome Treatment in Arlington Heights, IL",
  subheadline: "Nerve compression at the wrist causing hand numbness, tingling, and weakness.",
  primaryCTA: { text: "Schedule an Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const definition = {
  headline: "What Is Carpal Tunnel Syndrome?",
  body: "Nerve compression at the wrist causing hand numbness, tingling, and weakness. At Rand Medical Center in Arlington Heights, IL, we evaluate this condition thoroughly and create a personalized treatment plan to help you feel and function better.",
};

export const symptoms = {
  headline: "Common Symptoms",
  items: [
    { text: "Numbness or tingling in thumb, index, and middle fingers" },
    { text: "Hand weakness and dropping objects" },
    { text: "Pain radiating up the forearm" },
    { text: "Symptoms worse at night" },
    { text: "Shaking hands to relieve symptoms" }
  ] as SymptomItem[],
};

export const causes = {
  headline: "Common Causes",
  items: [
    { text: "Repetitive hand and wrist motions" },
    { text: "Wrist anatomy" },
    { text: "Pregnancy-related fluid retention" },
    { text: "Arthritis" },
    { text: "Diabetes" },
    { text: "Work-related repetitive strain" }
  ] as CauseItem[],
};

export const whenToSeeDoctor = {
  headline: "When to See a Doctor",
  body: "See a doctor if your symptoms last more than a few weeks, are getting worse, started after an injury or accident, or are affecting your ability to work and perform daily activities. Our team in Arlington Heights can often see you the same day or next day.",
  redFlags: ["Progressive weakness or numbness", "Symptoms following a work injury or car accident", "Pain not responding to rest and over-the-counter medications"],
};

export const howWeHelp = {
  headline: "Carpal Tunnel Syndrome Treatment at Rand Medical Center",
  body: "Treatment begins with a thorough evaluation — your doctor reviews your history, performs an examination, and orders imaging when needed. Based on your diagnosis, we create a coordinated plan that may include physical therapy, pain management procedures, medication when appropriate, and specialist referrals. For work injuries and auto accident cases, we handle all documentation.",
};

export const treatmentOptions = {
  headline: "Treatment Options",
  treatments: [
    { name: "Orthopedics", slug: "orthopedics", href: "/services/orthopedics" },
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" },
    { name: "Arthroscopic Surgery", slug: "arthroscopic-surgery", href: "/services/orthopedics/arthroscopic-surgery" }
  ] as TreatmentLink[],
};

export const whyChooseUs = {
  headline: "Why Choose Rand Medical Center?",
  features: [
    { icon: "users", title: "Coordinated Multi-Specialty Care", description: "Pain management, orthopedics, PT, and primary care working together under one roof." },
    { icon: "briefcase", title: "Injury Case Expertise", description: "Experienced with workers' comp and personal injury documentation." },
    { icon: "building", title: "On-Site Diagnostics and Treatment", description: "X-rays, procedures, and therapy available without extra trips." },
    { icon: "map-pin", title: "Arlington Heights Location", description: "Serving Mount Prospect, Palatine, Des Plaines, and the northwest Chicago suburbs." },
  ] as FeatureItem[],
};

export const relatedConditions = {
  headline: "Related Conditions",
  conditions: [
    { name: "Neuropathy", slug: "neuropathy", href: "/conditions/nerves/neuropathy" },
    { name: "Elbow Hand Pain", slug: "elbow-hand-pain", href: "/conditions/joints/elbow-hand-pain" },
    { name: "Nerve Entrapment", slug: "nerve-entrapment", href: "/conditions/nerves/nerve-entrapment" }
  ] as ConditionLink[],
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    { name: "Orthopedics", slug: "orthopedics", href: "/services/orthopedics" },
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" }
  ] as ServiceLink[],
};

export const relatedBlogPosts = { headline: "Resources", posts: [] };

export const ctaSection = {
  headline: "Get Help for Carpal Tunnel Syndrome in Arlington Heights",
  body: "Don't let carpal tunnel syndrome hold you back. Our team can evaluate your condition and build a treatment plan that works for you. Schedule an appointment or call today.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Do I need a referral?", answer: "In most cases, no. You can call us directly. Some insurance plans may require a referral — our team can verify before your visit." },
  { question: "Do you treat this condition for work injuries?", answer: "Yes. We regularly treat work-related cases and handle all workers\' compensation documentation and billing." },
  { question: "What should I bring to my first visit?", answer: "Bring a photo ID, insurance card or workers\' comp info, medication list, and any prior imaging or medical records." },
];
