// src/content/conditions/nerves/phantom-limb-pain.ts
// Rand Medical Center — Phantom Limb Pain (Condition Page)

import type { SEOMeta, HeroSection, SymptomItem, CauseItem, ConditionLink, TreatmentLink, ServiceLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Phantom Limb Pain Treatment in Arlington Heights, IL | Rand Medical Center",
  description: "Phantom Limb Pain treatment in Arlington Heights, IL. Pain felt in a limb that has been amputated, due to changes in the nervous system. Call (224) 735-3522.",
  keywords: ["phantom limb pain treatment Arlington Heights", "phantom limb pain doctor near me", "phantom limb pain specialist"],
  canonical: "https://www.randmedicalcenter.com/conditions/nerves/phantom-limb-pain",
};

export const hero: HeroSection = {
  eyebrow: "Nerves Conditions",
  headline: "Phantom Limb Pain Treatment in Arlington Heights, IL",
  subheadline: "Pain felt in a limb that has been amputated, due to changes in the nervous system.",
  primaryCTA: { text: "Schedule an Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const definition = {
  headline: "What Is Phantom Limb Pain?",
  body: "Pain felt in a limb that has been amputated, due to changes in the nervous system. At Rand Medical Center in Arlington Heights, IL, we evaluate this condition thoroughly and create a personalized treatment plan to help you feel and function better.",
};

export const symptoms = {
  headline: "Common Symptoms",
  items: [
    { text: "Pain felt in the missing limb" },
    { text: "Shooting, stabbing, or burning sensations" },
    { text: "Feeling of the limb being in an uncomfortable position" },
    { text: "Tingling or itching in the absent limb" }
  ] as SymptomItem[],
};

export const causes = {
  headline: "Common Causes",
  items: [
    { text: "Nervous system reorganization after amputation" },
    { text: "Nerve damage at the amputation site" },
    { text: "Memory of pre-amputation pain" },
    { text: "Spinal cord changes" }
  ] as CauseItem[],
};

export const whenToSeeDoctor = {
  headline: "When to See a Doctor",
  body: "See a doctor if your symptoms last more than a few weeks, are getting worse, started after an injury or accident, or are affecting your ability to work and perform daily activities. Our team in Arlington Heights can often see you the same day or next day.",
  redFlags: ["Progressive weakness or numbness", "Symptoms following a work injury or car accident", "Pain not responding to rest and over-the-counter medications"],
};

export const howWeHelp = {
  headline: "Phantom Limb Pain Treatment at Rand Medical Center",
  body: "Treatment begins with a thorough evaluation — your doctor reviews your history, performs an examination, and orders imaging when needed. Based on your diagnosis, we create a coordinated plan that may include physical therapy, pain management procedures, medication when appropriate, and specialist referrals. For work injuries and auto accident cases, we handle all documentation.",
};

export const treatmentOptions = {
  headline: "Treatment Options",
  treatments: [
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" },
    { name: "Nerve Blocks", slug: "nerve-blocks", href: "/services/pain-management/nerve-blocks" },
    { name: "Spinal Cord Stimulation", slug: "spinal-cord-stimulation", href: "/services/pain-management/spinal-cord-stimulation" }
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
    { name: "Chronic Pain", slug: "chronic-pain", href: "/conditions/pain-syndromes/chronic-pain" },
    { name: "Neuropathy", slug: "neuropathy", href: "/conditions/nerves/neuropathy" }
  ] as ConditionLink[],
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" }
  ] as ServiceLink[],
};

export const relatedBlogPosts = { headline: "Resources", posts: [] };

export const ctaSection = {
  headline: "Get Help for Phantom Limb Pain in Arlington Heights",
  body: "Don't let phantom limb pain hold you back. Our team can evaluate your condition and build a treatment plan that works for you. Schedule an appointment or call today.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Do I need a referral?", answer: "In most cases, no. You can call us directly. Some insurance plans may require a referral — our team can verify before your visit." },
  { question: "Do you treat this condition for work injuries?", answer: "Yes. We regularly treat work-related cases and handle all workers\' compensation documentation and billing." },
  { question: "What should I bring to my first visit?", answer: "Bring a photo ID, insurance card or workers\' comp info, medication list, and any prior imaging or medical records." },
];
