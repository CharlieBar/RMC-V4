// src/content/services/injury-services/motor-vehicle-accidents.ts
// Rand Medical Center — Motor Vehicle Accident Injuries (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Car & Motor Vehicle Accident Injury Care | Arlington Heights, IL | Rand Medical",
  description: "Whiplash, herniated disc, soft tissue, and TBI follow-up care after a car accident in Arlington Heights, IL. Lien-based billing. Call (224) 735-3522.",
  keywords: [
    "motor vehicle accidents Arlington Heights",
    "car accident injury doctor near me",
    "whiplash treatment Arlington Heights IL",
    "auto accident injury clinic northwest suburbs",
  ],
  canonical: "https://www.randmedicalcenter.com/services/injury-services/motor-vehicle-accidents",
};

export const hero: HeroSection = {
  eyebrow: "Injury Services",
  headline: "Motor Vehicle Accident Injuries in Arlington Heights, IL",
  subheadline: "Comprehensive evaluation and treatment for whiplash, herniated discs, soft tissue injuries, and post-accident headaches — with thorough documentation for your insurance or legal claim.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About Motor Vehicle Accident Injuries",
  body: "After a motor vehicle accident, prompt medical evaluation is critical — both for your health and for any insurance or legal claim you may pursue. Many accident injuries, including whiplash, soft tissue damage, and disc injuries, may not produce severe symptoms immediately, but can worsen significantly over the following days and weeks. Delaying care can both compromise your recovery and create gaps in the medical record that insurers may use to dispute your claim.\n\nAt Rand Medical Center in Arlington Heights, we routinely evaluate and treat the full spectrum of motor vehicle accident injuries: cervical and lumbar whiplash, soft tissue sprains and strains, herniated and bulging discs, shoulder and knee trauma, traumatic headaches, and post-concussion follow-up care when a traumatic brain injury is a concern. Our physicians perform thorough initial evaluations, order appropriate imaging — including X-rays on-site and MRI referrals when indicated — and begin treatment without delay.\n\nWhat sets our approach apart is our coordinated multi-specialty model. Pain management, orthopedics, physical therapy, and primary care operate under one roof, communicating directly so your care plan evolves as your recovery does. We document everything with the clinical objectivity that insurance carriers and personal injury attorneys require, including narrative medical reports, work-status letters, and final medical summaries.\n\nWe accept auto accident cases on a lien basis for qualified patients, meaning you may be able to receive treatment now and settle the bill when your case resolves.",
};

export const whyChooseUs = {
  headline: "Why Choose Rand Medical Center?",
  features: [
    {
      icon: "users",
      title: "Coordinated Multi-Specialty Team",
      description: "Your care is managed by providers who communicate directly — pain management, orthopedics, physical therapy, and primary care under one roof. This means no referral delays, no fragmented records, and a cohesive treatment plan that moves as fast as your recovery does.",
    },
    {
      icon: "clock",
      title: "Same-Day and Next-Day Access",
      description: "For motor vehicle accident cases, time matters both medically and legally. We prioritize quick appointments so that your injuries are diagnosed and treatment begins as soon as possible — reducing the risk of chronic pain developing from untreated acute injuries.",
    },
    {
      icon: "briefcase",
      title: "Experienced in PI and Insurance Documentation",
      description: "Our physicians understand what insurance carriers and personal injury attorneys need from a medical record. We produce objective, clinically detailed documentation — including narrative reports and medical summaries — that holds up through the claims and litigation process.",
    },
    {
      icon: "map-pin",
      title: "Convenient Arlington Heights Location",
      description: "Easily accessible from Mount Prospect, Palatine, Des Plaines, Schaumburg, and throughout the northwest suburbs. Ample parking and straightforward scheduling mean one less obstacle between you and getting the care you need.",
    },
  ] as FeatureItem[],
};

export const ctaSection = {
  headline: "Injured in a Car Accident? Don't Wait.",
  body: "Early evaluation protects both your health and your claim. Our team in Arlington Heights, IL is ready to see you — call (224) 735-3522 or schedule online today.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  {
    question: "Do I need a referral to be seen after a car accident?",
    answer: "In most cases, no. You can call us directly at (224) 735-3522 to schedule your initial evaluation without a referral from another provider. If your health insurance requires a referral for specialist visits, our team can verify your benefits before your appointment and help coordinate the paperwork so there are no delays in starting treatment.",
  },
  {
    question: "Do you accept auto insurance or handle lien-based billing for accident cases?",
    answer: "Yes. For qualified patients involved in motor vehicle accidents with an active personal injury claim, we can treat you on a medical lien basis. This means you receive treatment now and payment is deferred until your insurance or legal case settles. Our billing team will discuss the details with you before your first visit so you understand exactly how it works.",
  },
  {
    question: "What should I bring to my first visit after a car accident?",
    answer: "Please bring a photo ID, your health insurance card or auto insurance claim information (including the claim number and adjuster contact), a list of current medications, and any imaging or records from the emergency room or urgent care you may have visited after the accident. If you have a copy of the police report, that is helpful as well — though not required to be seen.",
  },
];
