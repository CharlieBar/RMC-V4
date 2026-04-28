// src/content/conditions/spine/si-joint-pain.ts
// Rand Medical Center — Sacroiliac (SI) Joint Pain (Condition Page)

import type { SEOMeta, HeroSection, SymptomItem, CauseItem, ConditionLink, TreatmentLink, ServiceLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Sacroiliac (SI) Joint Pain Treatment in Arlington Heights, IL | Rand Medical Center",
  description: "Sacroiliac (SI) Joint Pain treatment in Arlington Heights, IL. Pain where the spine meets the pelvis, often felt in the buttock or lower back from SI joint dysfunction. Call (224) 735-3522.",
  keywords: ["si joint pain treatment Arlington Heights", "si joint pain doctor near me", "sacroiliac (si) joint pain specialist"],
  canonical: "https://www.randmedicalcenter.com/conditions/spine/si-joint-pain",
};

export const hero: HeroSection = {
  eyebrow: "Spine Conditions",
  headline: "Sacroiliac (SI) Joint Pain Treatment in Arlington Heights, IL",
  subheadline: "Pain where the spine meets the pelvis, often felt in the buttock or lower back from SI joint dysfunction.",
  primaryCTA: { text: "Schedule an Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const definition = {
  headline: "What Is Sacroiliac (SI) Joint Pain?",
  body: "Pain where the spine meets the pelvis, often felt in the buttock or lower back from SI joint dysfunction. At Rand Medical Center in Arlington Heights, IL, we evaluate this condition thoroughly and create a personalized treatment plan to help you feel and function better.",
};

export const symptoms = {
  headline: "Common Symptoms",
  items: [
    { text: "Pain in the lower back and buttock, often one-sided" },
    { text: "Pain radiating into the hip or groin" },
    { text: "Stiffness in the lower back and hips" },
    { text: "Pain worsened by standing on one leg, climbing stairs, or prolonged sitting" },
    { text: "Pain that shifts from side to side" }
  ] as SymptomItem[],
};

export const causes = {
  headline: "Common Causes",
  items: [
    { text: "SI joint inflammation from arthritis" },
    { text: "Injury from falls or auto accidents" },
    { text: "Pregnancy-related ligament loosening" },
    { text: "Uneven leg length" },
    { text: "Abnormal walking patterns" }
  ] as CauseItem[],
};

export const whenToSeeDoctor = {
  headline: "When to See a Doctor",
  body: "See a doctor if your symptoms last more than a few weeks, are getting worse, started after an injury or accident, or are affecting your ability to work and perform daily activities. Our team in Arlington Heights can often see you the same day or next day.",
  redFlags: ["Progressive weakness or numbness", "Symptoms following a work injury or car accident", "Pain not responding to rest and over-the-counter medications"],
};

export const howWeHelp = {
  headline: "Sacroiliac (SI) Joint Pain Treatment at Rand Medical Center",
  body: "Treatment begins with a thorough evaluation — your doctor reviews your history, performs an examination, and orders imaging when needed. Based on your diagnosis, we create a coordinated plan that may include physical therapy, pain management procedures, medication when appropriate, and specialist referrals. For work injuries and auto accident cases, we handle all documentation.",
};

export const treatmentOptions = {
  headline: "Treatment Options",
  treatments: [
    { name: "Sacroiliac Joint Injections", slug: "sacroiliac-joint-injections", href: "/services/pain-management/sacroiliac-joint-injections" },
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
    { name: "Hip Pain", slug: "hip-pain", href: "/conditions/joints/hip-pain" },
    { name: "Sciatica", slug: "sciatica", href: "/conditions/spine/sciatica" }
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
  headline: "Get Help for Sacroiliac (SI) Joint Pain in Arlington Heights",
  body: "Don't let sacroiliac (si) joint pain hold you back. Our team can evaluate your condition and build a treatment plan that works for you. Schedule an appointment or call today.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Do I need a referral?", answer: "In most cases, no. You can call us directly. Some insurance plans may require a referral — our team can verify before your visit." },
  { question: "Do you treat this condition for work injuries?", answer: "Yes. We regularly treat work-related cases and handle all workers\' compensation documentation and billing." },
  { question: "What should I bring to my first visit?", answer: "Bring a photo ID, insurance card or workers\' comp info, medication list, and any prior imaging or medical records." },
];
