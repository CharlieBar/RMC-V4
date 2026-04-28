// src/content/conditions/joints/elbow-hand-pain.ts
// Rand Medical Center — Elbow and Hand Pain (Condition Page)

import type { SEOMeta, HeroSection, SymptomItem, CauseItem, ConditionLink, TreatmentLink, ServiceLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Elbow and Hand Pain Treatment in Arlington Heights, IL | Rand Medical Center",
  description: "Elbow and Hand Pain treatment in Arlington Heights, IL. Pain in the elbow, wrist, or hand from tendonitis, overuse, or joint problems. Call (224) 735-3522.",
  keywords: ["elbow hand pain treatment Arlington Heights", "elbow hand pain doctor near me", "elbow and hand pain specialist"],
  canonical: "https://www.randmedicalcenter.com/conditions/joints/elbow-hand-pain",
};

export const hero: HeroSection = {
  eyebrow: "Joints Conditions",
  headline: "Elbow and Hand Pain Treatment in Arlington Heights, IL",
  subheadline: "Pain in the elbow, wrist, or hand from tendonitis, overuse, or joint problems.",
  primaryCTA: { text: "Schedule an Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const definition = {
  headline: "What Is Elbow and Hand Pain?",
  body: "Pain in the elbow, wrist, or hand from tendonitis, overuse, or joint problems. At Rand Medical Center in Arlington Heights, IL, we evaluate this condition thoroughly and create a personalized treatment plan to help you feel and function better.",
};

export const symptoms = {
  headline: "Common Symptoms",
  items: [
    { text: "Pain with gripping, twisting, or lifting" },
    { text: "Tenderness at the elbow, wrist, or finger joints" },
    { text: "Numbness or tingling in the fingers" },
    { text: "Weakness in grip strength" },
    { text: "Stiffness in the morning" }
  ] as SymptomItem[],
};

export const causes = {
  headline: "Common Causes",
  items: [
    { text: "Tennis elbow or golfer's elbow (tendonitis)" },
    { text: "Carpal tunnel syndrome" },
    { text: "Arthritis" },
    { text: "Repetitive work motions" },
    { text: "Work injuries" },
    { text: "Trigger finger" }
  ] as CauseItem[],
};

export const whenToSeeDoctor = {
  headline: "When to See a Doctor",
  body: "See a doctor if your symptoms last more than a few weeks, are getting worse, started after an injury or accident, or are affecting your ability to work and perform daily activities. Our team in Arlington Heights can often see you the same day or next day.",
  redFlags: ["Progressive weakness or numbness", "Symptoms following a work injury or car accident", "Pain not responding to rest and over-the-counter medications"],
};

export const howWeHelp = {
  headline: "Elbow and Hand Pain Treatment at Rand Medical Center",
  body: "Treatment begins with a thorough evaluation — your doctor reviews your history, performs an examination, and orders imaging when needed. Based on your diagnosis, we create a coordinated plan that may include physical therapy, pain management procedures, medication when appropriate, and specialist referrals. For work injuries and auto accident cases, we handle all documentation.",
};

export const treatmentOptions = {
  headline: "Treatment Options",
  treatments: [
    { name: "Orthopedics", slug: "orthopedics", href: "/services/orthopedics" },
    { name: "Joint Injections", slug: "joint-injections", href: "/services/pain-management/joint-injections" },
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
    { name: "Carpal Tunnel", slug: "carpal-tunnel", href: "/conditions/nerves/carpal-tunnel" },
    { name: "Arthritis", slug: "arthritis", href: "/conditions/joints/arthritis" }
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
  headline: "Get Help for Elbow and Hand Pain in Arlington Heights",
  body: "Don't let elbow and hand pain hold you back. Our team can evaluate your condition and build a treatment plan that works for you. Schedule an appointment or call today.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Do I need a referral?", answer: "In most cases, no. You can call us directly. Some insurance plans may require a referral — our team can verify before your visit." },
  { question: "Do you treat this condition for work injuries?", answer: "Yes. We regularly treat work-related cases and handle all workers\' compensation documentation and billing." },
  { question: "What should I bring to my first visit?", answer: "Bring a photo ID, insurance card or workers\' comp info, medication list, and any prior imaging or medical records." },
];
