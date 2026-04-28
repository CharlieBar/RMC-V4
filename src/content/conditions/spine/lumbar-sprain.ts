// src/content/conditions/spine/lumbar-sprain.ts
// Rand Medical Center — Lumbar Sprain and Strain (Condition Page)

import type { SEOMeta, HeroSection, SymptomItem, CauseItem, ConditionLink, TreatmentLink, ServiceLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Lumbar Sprain and Strain Treatment in Arlington Heights, IL | Rand Medical Center",
  description: "Lumbar Sprain and Strain treatment in Arlington Heights, IL. Injury to the muscles or ligaments of the lower back from lifting, sudden movement, or physical labor. Call (224) 735-3522.",
  keywords: ["lumbar sprain treatment Arlington Heights", "lumbar sprain doctor near me", "lumbar sprain and strain specialist"],
  canonical: "https://www.randmedicalcenter.com/conditions/spine/lumbar-sprain",
};

export const hero: HeroSection = {
  eyebrow: "Spine Conditions",
  headline: "Lumbar Sprain and Strain Treatment in Arlington Heights, IL",
  subheadline: "Injury to the muscles or ligaments of the lower back from lifting, sudden movement, or physical labor.",
  primaryCTA: { text: "Schedule an Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const definition = {
  headline: "What Is Lumbar Sprain and Strain?",
  body: "Injury to the muscles or ligaments of the lower back from lifting, sudden movement, or physical labor. At Rand Medical Center in Arlington Heights, IL, we evaluate this condition thoroughly and create a personalized treatment plan to help you feel and function better.",
};

export const symptoms = {
  headline: "Common Symptoms",
  items: [
    { text: "Sudden onset of low back pain after lifting or twisting" },
    { text: "Muscle tightness and spasms" },
    { text: "Pain worsened by movement" },
    { text: "Difficulty bending or standing straight" },
    { text: "Tenderness in the lower back muscles" }
  ] as SymptomItem[],
};

export const causes = {
  headline: "Common Causes",
  items: [
    { text: "Heavy lifting with poor mechanics" },
    { text: "Sudden twisting or bending" },
    { text: "Falls or work accidents" },
    { text: "Repetitive physical labor" },
    { text: "Weak core muscles" }
  ] as CauseItem[],
};

export const whenToSeeDoctor = {
  headline: "When to See a Doctor",
  body: "See a doctor if your symptoms last more than a few weeks, are getting worse, started after an injury or accident, or are affecting your ability to work and perform daily activities. Our team in Arlington Heights can often see you the same day or next day.",
  redFlags: ["Progressive weakness or numbness", "Symptoms following a work injury or car accident", "Pain not responding to rest and over-the-counter medications"],
};

export const howWeHelp = {
  headline: "Lumbar Sprain and Strain Treatment at Rand Medical Center",
  body: "Treatment begins with a thorough evaluation — your doctor reviews your history, performs an examination, and orders imaging when needed. Based on your diagnosis, we create a coordinated plan that may include physical therapy, pain management procedures, medication when appropriate, and specialist referrals. For work injuries and auto accident cases, we handle all documentation.",
};

export const treatmentOptions = {
  headline: "Treatment Options",
  treatments: [
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" },
    { name: "Immediate Care", slug: "immediate-care", href: "/services/immediate-care" },
    { name: "Trigger Point Injections", slug: "trigger-point-injections", href: "/services/pain-management/trigger-point-injections" }
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
    { name: "Muscle Spasms", slug: "muscle-spasms", href: "/conditions/muscle/muscle-spasms" },
    { name: "Muscle Strain", slug: "muscle-strain", href: "/conditions/muscle/muscle-strain" }
  ] as ConditionLink[],
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" },
    { name: "Immediate Care", slug: "immediate-care", href: "/services/immediate-care" },
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" }
  ] as ServiceLink[],
};

export const relatedBlogPosts = { headline: "Resources", posts: [] };

export const ctaSection = {
  headline: "Get Help for Lumbar Sprain and Strain in Arlington Heights",
  body: "Don't let lumbar sprain and strain hold you back. Our team can evaluate your condition and build a treatment plan that works for you. Schedule an appointment or call today.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Do I need a referral?", answer: "In most cases, no. You can call us directly. Some insurance plans may require a referral — our team can verify before your visit." },
  { question: "Do you treat this condition for work injuries?", answer: "Yes. We regularly treat work-related cases and handle all workers\' compensation documentation and billing." },
  { question: "What should I bring to my first visit?", answer: "Bring a photo ID, insurance card or workers\' comp info, medication list, and any prior imaging or medical records." },
];
