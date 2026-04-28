// src/content/conditions/spine/degenerative-disc-disease.ts
// Rand Medical Center — Degenerative Disc Disease (Condition Page)

import type { SEOMeta, HeroSection, SymptomItem, CauseItem, ConditionLink, TreatmentLink, ServiceLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Degenerative Disc Disease Treatment in Arlington Heights, IL | Rand Medical Center",
  description: "Degenerative Disc Disease treatment in Arlington Heights, IL. Age-related wear on spinal discs causing chronic back or neck pain and stiffness. Call (224) 735-3522.",
  keywords: ["degenerative disc disease treatment Arlington Heights", "degenerative disc disease doctor near me", "degenerative disc disease specialist"],
  canonical: "https://www.randmedicalcenter.com/conditions/spine/degenerative-disc-disease",
};

export const hero: HeroSection = {
  eyebrow: "Spine Conditions",
  headline: "Degenerative Disc Disease Treatment in Arlington Heights, IL",
  subheadline: "Age-related wear on spinal discs causing chronic back or neck pain and stiffness.",
  primaryCTA: { text: "Schedule an Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const definition = {
  headline: "What Is Degenerative Disc Disease?",
  body: "Age-related wear on spinal discs causing chronic back or neck pain and stiffness. At Rand Medical Center in Arlington Heights, IL, we evaluate this condition thoroughly and create a personalized treatment plan to help you feel and function better.",
};

export const symptoms = {
  headline: "Common Symptoms",
  items: [
    { text: "Chronic low back or neck pain that worsens over time" },
    { text: "Stiffness that improves with movement" },
    { text: "Pain that flares with bending, lifting, or twisting" },
    { text: "Occasional radiating pain into the legs or arms" },
    { text: "Muscle spasms near the affected area" }
  ] as SymptomItem[],
};

export const causes = {
  headline: "Common Causes",
  items: [
    { text: "Normal aging and disc dehydration" },
    { text: "Prior spine injuries" },
    { text: "Repetitive stress from physical work" },
    { text: "Genetics" },
    { text: "Smoking (reduces disc nutrition)" }
  ] as CauseItem[],
};

export const whenToSeeDoctor = {
  headline: "When to See a Doctor",
  body: "See a doctor if your symptoms last more than a few weeks, are getting worse, started after an injury or accident, or are affecting your ability to work and perform daily activities. Our team in Arlington Heights can often see you the same day or next day.",
  redFlags: ["Progressive weakness or numbness", "Symptoms following a work injury or car accident", "Pain not responding to rest and over-the-counter medications"],
};

export const howWeHelp = {
  headline: "Degenerative Disc Disease Treatment at Rand Medical Center",
  body: "Treatment begins with a thorough evaluation — your doctor reviews your history, performs an examination, and orders imaging when needed. Based on your diagnosis, we create a coordinated plan that may include physical therapy, pain management procedures, medication when appropriate, and specialist referrals. For work injuries and auto accident cases, we handle all documentation.",
};

export const treatmentOptions = {
  headline: "Treatment Options",
  treatments: [
    { name: "Facet Joint Blocks", slug: "facet-joint-blocks", href: "/services/pain-management/facet-joint-blocks" },
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" },
    { name: "Radiofrequency Ablation", slug: "radiofrequency-ablation", href: "/services/pain-management/radiofrequency-ablation" }
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
    { name: "Spinal Stenosis", slug: "spinal-stenosis", href: "/conditions/spine/spinal-stenosis" },
    { name: "Facet Syndrome", slug: "facet-syndrome", href: "/conditions/spine/facet-syndrome" },
    { name: "Herniated Disc", slug: "herniated-disc", href: "/conditions/spine/herniated-disc" }
  ] as ConditionLink[],
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" },
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" },
    { name: "Orthopedics", slug: "orthopedics", href: "/services/orthopedics" }
  ] as ServiceLink[],
};

export const relatedBlogPosts = { headline: "Resources", posts: [] };

export const ctaSection = {
  headline: "Get Help for Degenerative Disc Disease in Arlington Heights",
  body: "Don't let degenerative disc disease hold you back. Our team can evaluate your condition and build a treatment plan that works for you. Schedule an appointment or call today.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Do I need a referral?", answer: "In most cases, no. You can call us directly. Some insurance plans may require a referral — our team can verify before your visit." },
  { question: "Do you treat this condition for work injuries?", answer: "Yes. We regularly treat work-related cases and handle all workers\' compensation documentation and billing." },
  { question: "What should I bring to my first visit?", answer: "Bring a photo ID, insurance card or workers\' comp info, medication list, and any prior imaging or medical records." },
];
