// src/content/conditions/spine/facet-syndrome.ts
// Rand Medical Center — Facet Joint Syndrome (Condition Page)

import type { SEOMeta, HeroSection, SymptomItem, CauseItem, ConditionLink, TreatmentLink, ServiceLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Facet Joint Syndrome Treatment in Arlington Heights, IL | Rand Medical Center",
  description: "Facet Joint Syndrome treatment in Arlington Heights, IL. Arthritis and irritation in the small joints along the spine causing localized back or neck pain. Call (224) 735-3522.",
  keywords: ["facet syndrome treatment Arlington Heights", "facet syndrome doctor near me", "facet joint syndrome specialist"],
  canonical: "https://www.randmedicalcenter.com/conditions/spine/facet-syndrome",
};

export const hero: HeroSection = {
  eyebrow: "Spine Conditions",
  headline: "Facet Joint Syndrome Treatment in Arlington Heights, IL",
  subheadline: "Arthritis and irritation in the small joints along the spine causing localized back or neck pain.",
  primaryCTA: { text: "Schedule an Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const definition = {
  headline: "What Is Facet Joint Syndrome?",
  body: "Arthritis and irritation in the small joints along the spine causing localized back or neck pain. At Rand Medical Center in Arlington Heights, IL, we evaluate this condition thoroughly and create a personalized treatment plan to help you feel and function better.",
};

export const symptoms = {
  headline: "Common Symptoms",
  items: [
    { text: "Localized back or neck pain that worsens with extension or twisting" },
    { text: "Pain that improves with forward bending" },
    { text: "Morning stiffness" },
    { text: "Tenderness over the spine" },
    { text: "Pain that does not typically radiate far into the limbs" }
  ] as SymptomItem[],
};

export const causes = {
  headline: "Common Causes",
  items: [
    { text: "Degenerative arthritis in the facet joints" },
    { text: "Repetitive spinal stress" },
    { text: "Prior injuries or whiplash" },
    { text: "Poor posture" },
    { text: "Age-related cartilage wear" }
  ] as CauseItem[],
};

export const whenToSeeDoctor = {
  headline: "When to See a Doctor",
  body: "See a doctor if your symptoms last more than a few weeks, are getting worse, started after an injury or accident, or are affecting your ability to work and perform daily activities. Our team in Arlington Heights can often see you the same day or next day.",
  redFlags: ["Progressive weakness or numbness", "Symptoms following a work injury or car accident", "Pain not responding to rest and over-the-counter medications"],
};

export const howWeHelp = {
  headline: "Facet Joint Syndrome Treatment at Rand Medical Center",
  body: "Treatment begins with a thorough evaluation — your doctor reviews your history, performs an examination, and orders imaging when needed. Based on your diagnosis, we create a coordinated plan that may include physical therapy, pain management procedures, medication when appropriate, and specialist referrals. For work injuries and auto accident cases, we handle all documentation.",
};

export const treatmentOptions = {
  headline: "Treatment Options",
  treatments: [
    { name: "Facet Joint Blocks", slug: "facet-joint-blocks", href: "/services/pain-management/facet-joint-blocks" },
    { name: "Radiofrequency Ablation", slug: "radiofrequency-ablation", href: "/services/pain-management/radiofrequency-ablation" },
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" }
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
    { name: "Back Pain", slug: "back-pain", href: "/conditions/spine/back-pain" },
    { name: "Neck Pain", slug: "neck-pain", href: "/conditions/spine/neck-pain" },
    { name: "Degenerative Disc Disease", slug: "degenerative-disc-disease", href: "/conditions/spine/degenerative-disc-disease" }
  ] as ConditionLink[],
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" },
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" }
  ] as ServiceLink[],
};

export const relatedBlogPosts = { headline: "Resources", posts: [] };

export const ctaSection = {
  headline: "Get Help for Facet Joint Syndrome in Arlington Heights",
  body: "Don't let facet joint syndrome hold you back. Our team can evaluate your condition and build a treatment plan that works for you. Schedule an appointment or call today.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Do I need a referral?", answer: "In most cases, no. You can call us directly. Some insurance plans may require a referral — our team can verify before your visit." },
  { question: "Do you treat this condition for work injuries?", answer: "Yes. We regularly treat work-related cases and handle all workers\' compensation documentation and billing." },
  { question: "What should I bring to my first visit?", answer: "Bring a photo ID, insurance card or workers\' comp info, medication list, and any prior imaging or medical records." },
];
