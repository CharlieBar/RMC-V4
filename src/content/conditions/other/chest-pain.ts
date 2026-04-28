// src/content/conditions/other/chest-pain.ts
// Rand Medical Center — Musculoskeletal Chest Pain (Condition Page)

import type { SEOMeta, HeroSection, SymptomItem, CauseItem, ConditionLink, TreatmentLink, ServiceLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Musculoskeletal Chest Pain Treatment in Arlington Heights, IL | Rand Medical Center",
  description: "Musculoskeletal Chest Pain treatment in Arlington Heights, IL. Chest pain from muscles, joints, or nerves in the chest wall rather than the heart. Call (224) 735-3522.",
  keywords: ["chest pain treatment Arlington Heights", "chest pain doctor near me", "musculoskeletal chest pain specialist"],
  canonical: "https://www.randmedicalcenter.com/conditions/other/chest-pain",
};

export const hero: HeroSection = {
  eyebrow: "Other Conditions",
  headline: "Musculoskeletal Chest Pain Treatment in Arlington Heights, IL",
  subheadline: "Chest pain from muscles, joints, or nerves in the chest wall rather than the heart.",
  primaryCTA: { text: "Schedule an Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const definition = {
  headline: "What Is Musculoskeletal Chest Pain?",
  body: "Chest pain from muscles, joints, or nerves in the chest wall rather than the heart. At Rand Medical Center in Arlington Heights, IL, we evaluate this condition thoroughly and create a personalized treatment plan to help you feel and function better.",
};

export const symptoms = {
  headline: "Common Symptoms",
  items: [
    { text: "Sharp or aching chest wall pain" },
    { text: "Pain worsened by breathing, movement, or pressing" },
    { text: "Tenderness over the ribs or sternum" },
    { text: "Pain that changes with body position" }
  ] as SymptomItem[],
};

export const causes = {
  headline: "Common Causes",
  items: [
    { text: "Costochondritis (inflammation of rib cartilage)" },
    { text: "Rib fracture or bruise" },
    { text: "Intercostal nerve irritation" },
    { text: "Muscle strain in the chest wall" },
    { text: "Shingles affecting the chest" }
  ] as CauseItem[],
};

export const whenToSeeDoctor = {
  headline: "When to See a Doctor",
  body: "See a doctor if your symptoms last more than a few weeks, are getting worse, started after an injury or accident, or are affecting your ability to work and perform daily activities. Our team in Arlington Heights can often see you the same day or next day.",
  redFlags: ["Progressive weakness or numbness", "Symptoms following a work injury or car accident", "Pain not responding to rest and over-the-counter medications"],
};

export const howWeHelp = {
  headline: "Musculoskeletal Chest Pain Treatment at Rand Medical Center",
  body: "Treatment begins with a thorough evaluation — your doctor reviews your history, performs an examination, and orders imaging when needed. Based on your diagnosis, we create a coordinated plan that may include physical therapy, pain management procedures, medication when appropriate, and specialist referrals. For work injuries and auto accident cases, we handle all documentation.",
};

export const treatmentOptions = {
  headline: "Treatment Options",
  treatments: [
    { name: "Immediate Care", slug: "immediate-care", href: "/services/immediate-care" },
    { name: "Intercostal Nerve Blocks", slug: "intercostal-nerve-blocks", href: "/services/pain-management/intercostal-nerve-blocks" }
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
    { name: "Muscle Strain", slug: "muscle-strain", href: "/conditions/muscle/muscle-strain" }
  ] as ConditionLink[],
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    { name: "Immediate Care", slug: "immediate-care", href: "/services/immediate-care" },
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" }
  ] as ServiceLink[],
};

export const relatedBlogPosts = { headline: "Resources", posts: [] };

export const ctaSection = {
  headline: "Get Help for Musculoskeletal Chest Pain in Arlington Heights",
  body: "Don't let musculoskeletal chest pain hold you back. Our team can evaluate your condition and build a treatment plan that works for you. Schedule an appointment or call today.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Do I need a referral?", answer: "In most cases, no. You can call us directly. Some insurance plans may require a referral — our team can verify before your visit." },
  { question: "Do you treat this condition for work injuries?", answer: "Yes. We regularly treat work-related cases and handle all workers\' compensation documentation and billing." },
  { question: "What should I bring to my first visit?", answer: "Bring a photo ID, insurance card or workers\' comp info, medication list, and any prior imaging or medical records." },
];
