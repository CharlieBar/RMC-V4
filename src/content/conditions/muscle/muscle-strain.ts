// src/content/conditions/muscle/muscle-strain.ts
// Rand Medical Center — Muscle Strain (Condition Page)

import type { SEOMeta, HeroSection, SymptomItem, CauseItem, ConditionLink, TreatmentLink, ServiceLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Muscle Strain Treatment in Arlington Heights, IL | Rand Medical Center",
  description: "Muscle Strain treatment in Arlington Heights, IL. Overstretching or tearing of muscle fibers from sudden or repeated physical stress. Call (224) 735-3522.",
  keywords: ["muscle strain treatment Arlington Heights", "muscle strain doctor near me", "muscle strain specialist"],
  canonical: "https://www.randmedicalcenter.com/conditions/muscle/muscle-strain",
};

export const hero: HeroSection = {
  eyebrow: "Muscle Conditions",
  headline: "Muscle Strain Treatment in Arlington Heights, IL",
  subheadline: "Overstretching or tearing of muscle fibers from sudden or repeated physical stress.",
  primaryCTA: { text: "Schedule an Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const definition = {
  headline: "What Is Muscle Strain?",
  body: "Overstretching or tearing of muscle fibers from sudden or repeated physical stress. At Rand Medical Center in Arlington Heights, IL, we evaluate this condition thoroughly and create a personalized treatment plan to help you feel and function better.",
};

export const symptoms = {
  headline: "Common Symptoms",
  items: [
    { text: "Sudden pain during activity" },
    { text: "Swelling or bruising" },
    { text: "Muscle weakness" },
    { text: "Difficulty using the affected muscle" },
    { text: "A popping sensation at the time of injury" }
  ] as SymptomItem[],
};

export const causes = {
  headline: "Common Causes",
  items: [
    { text: "Sudden heavy lifting" },
    { text: "Quick, forceful movements" },
    { text: "Sports activities" },
    { text: "Work-related physical labor" },
    { text: "Fatigue and inadequate warm-up" }
  ] as CauseItem[],
};

export const whenToSeeDoctor = {
  headline: "When to See a Doctor",
  body: "See a doctor if your symptoms last more than a few weeks, are getting worse, started after an injury or accident, or are affecting your ability to work and perform daily activities. Our team in Arlington Heights can often see you the same day or next day.",
  redFlags: ["Progressive weakness or numbness", "Symptoms following a work injury or car accident", "Pain not responding to rest and over-the-counter medications"],
};

export const howWeHelp = {
  headline: "Muscle Strain Treatment at Rand Medical Center",
  body: "Treatment begins with a thorough evaluation — your doctor reviews your history, performs an examination, and orders imaging when needed. Based on your diagnosis, we create a coordinated plan that may include physical therapy, pain management procedures, medication when appropriate, and specialist referrals. For work injuries and auto accident cases, we handle all documentation.",
};

export const treatmentOptions = {
  headline: "Treatment Options",
  treatments: [
    { name: "Immediate Care", slug: "immediate-care", href: "/services/immediate-care" },
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
    { name: "Lumbar Sprain", slug: "lumbar-sprain", href: "/conditions/spine/lumbar-sprain" },
    { name: "Muscle Spasms", slug: "muscle-spasms", href: "/conditions/muscle/muscle-spasms" },
    { name: "Sports Injury", slug: "sports-injury", href: "/conditions/other/sports-injury" }
  ] as ConditionLink[],
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    { name: "Immediate Care", slug: "immediate-care", href: "/services/immediate-care" },
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" }
  ] as ServiceLink[],
};

export const relatedBlogPosts = { headline: "Resources", posts: [] };

export const ctaSection = {
  headline: "Get Help for Muscle Strain in Arlington Heights",
  body: "Don't let muscle strain hold you back. Our team can evaluate your condition and build a treatment plan that works for you. Schedule an appointment or call today.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Do I need a referral?", answer: "In most cases, no. You can call us directly. Some insurance plans may require a referral — our team can verify before your visit." },
  { question: "Do you treat this condition for work injuries?", answer: "Yes. We regularly treat work-related cases and handle all workers\' compensation documentation and billing." },
  { question: "What should I bring to my first visit?", answer: "Bring a photo ID, insurance card or workers\' comp info, medication list, and any prior imaging or medical records." },
];
