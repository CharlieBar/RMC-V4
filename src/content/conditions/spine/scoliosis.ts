// src/content/conditions/spine/scoliosis.ts
// Rand Medical Center — Scoliosis (Condition Page)

import type { SEOMeta, HeroSection, SymptomItem, CauseItem, ConditionLink, TreatmentLink, ServiceLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Scoliosis Treatment in Arlington Heights, IL | Rand Medical Center",
  description: "Scoliosis treatment in Arlington Heights, IL. Abnormal sideways curvature of the spine that may cause pain, fatigue, or posture changes in adults. Call (224) 735-3522.",
  keywords: ["scoliosis treatment Arlington Heights", "scoliosis doctor near me", "scoliosis specialist"],
  canonical: "https://www.randmedicalcenter.com/conditions/spine/scoliosis",
};

export const hero: HeroSection = {
  eyebrow: "Spine Conditions",
  headline: "Scoliosis Treatment in Arlington Heights, IL",
  subheadline: "Abnormal sideways curvature of the spine that may cause pain, fatigue, or posture changes in adults.",
  primaryCTA: { text: "Schedule an Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const definition = {
  headline: "What Is Scoliosis?",
  body: "Abnormal sideways curvature of the spine that may cause pain, fatigue, or posture changes in adults. At Rand Medical Center in Arlington Heights, IL, we evaluate this condition thoroughly and create a personalized treatment plan to help you feel and function better.",
};

export const symptoms = {
  headline: "Common Symptoms",
  items: [
    { text: "Visible curvature of the spine" },
    { text: "Uneven shoulders or hips" },
    { text: "Back pain or fatigue" },
    { text: "Muscle tightness on one side" },
    { text: "Difficulty standing straight for long periods" }
  ] as SymptomItem[],
};

export const causes = {
  headline: "Common Causes",
  items: [
    { text: "Idiopathic scoliosis from adolescence progressing in adulthood" },
    { text: "Degenerative changes in the spine" },
    { text: "Osteoporosis-related vertebral changes" },
    { text: "Neuromuscular conditions" }
  ] as CauseItem[],
};

export const whenToSeeDoctor = {
  headline: "When to See a Doctor",
  body: "See a doctor if your symptoms last more than a few weeks, are getting worse, started after an injury or accident, or are affecting your ability to work and perform daily activities. Our team in Arlington Heights can often see you the same day or next day.",
  redFlags: ["Progressive weakness or numbness", "Symptoms following a work injury or car accident", "Pain not responding to rest and over-the-counter medications"],
};

export const howWeHelp = {
  headline: "Scoliosis Treatment at Rand Medical Center",
  body: "Treatment begins with a thorough evaluation — your doctor reviews your history, performs an examination, and orders imaging when needed. Based on your diagnosis, we create a coordinated plan that may include physical therapy, pain management procedures, medication when appropriate, and specialist referrals. For work injuries and auto accident cases, we handle all documentation.",
};

export const treatmentOptions = {
  headline: "Treatment Options",
  treatments: [
    { name: "Orthopedics", slug: "orthopedics", href: "/services/orthopedics" },
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" },
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" }
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
    { name: "Degenerative Disc Disease", slug: "degenerative-disc-disease", href: "/conditions/spine/degenerative-disc-disease" }
  ] as ConditionLink[],
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    { name: "Orthopedics", slug: "orthopedics", href: "/services/orthopedics" },
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" },
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" }
  ] as ServiceLink[],
};

export const relatedBlogPosts = { headline: "Resources", posts: [] };

export const ctaSection = {
  headline: "Get Help for Scoliosis in Arlington Heights",
  body: "Don't let scoliosis hold you back. Our team can evaluate your condition and build a treatment plan that works for you. Schedule an appointment or call today.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Do I need a referral?", answer: "In most cases, no. You can call us directly. Some insurance plans may require a referral — our team can verify before your visit." },
  { question: "Do you treat this condition for work injuries?", answer: "Yes. We regularly treat work-related cases and handle all workers\' compensation documentation and billing." },
  { question: "What should I bring to my first visit?", answer: "Bring a photo ID, insurance card or workers\' comp info, medication list, and any prior imaging or medical records." },
];
