// src/content/conditions/other/headaches.ts
// Rand Medical Center — Headaches and Migraines (Condition Page)

import type { SEOMeta, HeroSection, SymptomItem, CauseItem, ConditionLink, TreatmentLink, ServiceLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Headaches and Migraines Treatment in Arlington Heights, IL | Rand Medical Center",
  description: "Headaches and Migraines treatment in Arlington Heights, IL. Recurring head pain from tension headaches to migraines, often treatable when the cause is identified. Call (224) 735-3522.",
  keywords: ["headaches treatment Arlington Heights", "headaches doctor near me", "headaches and migraines specialist"],
  canonical: "https://www.randmedicalcenter.com/conditions/other/headaches",
};

export const hero: HeroSection = {
  eyebrow: "Other Conditions",
  headline: "Headaches and Migraines Treatment in Arlington Heights, IL",
  subheadline: "Recurring head pain from tension headaches to migraines, often treatable when the cause is identified.",
  primaryCTA: { text: "Schedule an Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const definition = {
  headline: "What Is Headaches and Migraines?",
  body: "Recurring head pain from tension headaches to migraines, often treatable when the cause is identified. At Rand Medical Center in Arlington Heights, IL, we evaluate this condition thoroughly and create a personalized treatment plan to help you feel and function better.",
};

export const symptoms = {
  headline: "Common Symptoms",
  items: [
    { text: "Throbbing, pressing, or aching head pain" },
    { text: "Pain behind the eyes or at the base of the skull" },
    { text: "Sensitivity to light, sound, or smells (migraines)" },
    { text: "Nausea (migraines)" },
    { text: "Neck tightness accompanying the headache" },
    { text: "Aura or visual disturbances before migraines" }
  ] as SymptomItem[],
};

export const causes = {
  headline: "Common Causes",
  items: [
    { text: "Tension in the neck and upper back muscles" },
    { text: "Cervical spine problems (cervicogenic headaches)" },
    { text: "Migraine disorder" },
    { text: "Whiplash or neck injury" },
    { text: "Stress and poor sleep" },
    { text: "Medication overuse" }
  ] as CauseItem[],
};

export const whenToSeeDoctor = {
  headline: "When to See a Doctor",
  body: "See a doctor if your symptoms last more than a few weeks, are getting worse, started after an injury or accident, or are affecting your ability to work and perform daily activities. Our team in Arlington Heights can often see you the same day or next day.",
  redFlags: ["Progressive weakness or numbness", "Symptoms following a work injury or car accident", "Pain not responding to rest and over-the-counter medications"],
};

export const howWeHelp = {
  headline: "Headaches and Migraines Treatment at Rand Medical Center",
  body: "Treatment begins with a thorough evaluation — your doctor reviews your history, performs an examination, and orders imaging when needed. Based on your diagnosis, we create a coordinated plan that may include physical therapy, pain management procedures, medication when appropriate, and specialist referrals. For work injuries and auto accident cases, we handle all documentation.",
};

export const treatmentOptions = {
  headline: "Treatment Options",
  treatments: [
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" },
    { name: "Nerve Blocks", slug: "nerve-blocks", href: "/services/pain-management/nerve-blocks" },
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
    { name: "Neck Pain", slug: "neck-pain", href: "/conditions/spine/neck-pain" },
    { name: "Occipital Neuralgia", slug: "occipital-neuralgia", href: "/conditions/nerves/occipital-neuralgia" }
  ] as ConditionLink[],
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    { name: "Internal Medicine", slug: "internal-medicine", href: "/services/internal-medicine" },
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" }
  ] as ServiceLink[],
};

export const relatedBlogPosts = { headline: "Resources", posts: [] };

export const ctaSection = {
  headline: "Get Help for Headaches and Migraines in Arlington Heights",
  body: "Don't let headaches and migraines hold you back. Our team can evaluate your condition and build a treatment plan that works for you. Schedule an appointment or call today.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Do I need a referral?", answer: "In most cases, no. You can call us directly. Some insurance plans may require a referral — our team can verify before your visit." },
  { question: "Do you treat this condition for work injuries?", answer: "Yes. We regularly treat work-related cases and handle all workers\' compensation documentation and billing." },
  { question: "What should I bring to my first visit?", answer: "Bring a photo ID, insurance card or workers\' comp info, medication list, and any prior imaging or medical records." },
];
