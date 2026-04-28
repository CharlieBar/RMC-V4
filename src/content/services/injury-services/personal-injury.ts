// src/content/services/injury-services/personal-injury.ts
// Rand Medical Center — Personal Injury Medical Care (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Personal Injury Medical Care — Slip & Fall, Premises Liability | Arlington Heights, IL",
  description: "Objective injury evaluation, treatment, and legal documentation for slip-and-fall, premises liability, and assault cases in Arlington Heights, IL. Lien-based billing available.",
  keywords: [
    "personal injury Arlington Heights",
    "personal injury medical care near me",
    "slip and fall doctor Arlington Heights IL",
    "premises liability injury evaluation northwest suburbs",
  ],
  canonical: "https://www.randmedicalcenter.com/services/injury-services/personal-injury",
};

export const hero: HeroSection = {
  eyebrow: "Injury Services",
  headline: "Personal Injury Medical Care in Arlington Heights, IL",
  subheadline: "Expert evaluation and treatment for slip-and-fall accidents, premises liability injuries, assault-related trauma, and other incidents caused by someone else's negligence — with documentation built to support your claim.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About Personal Injury Medical Care",
  body: "Personal injury medical care at Rand Medical Center provides objective evaluation, treatment, and documentation for patients who have been injured due to someone else's negligence. We see patients injured in slip-and-fall accidents on commercial and residential properties, premises liability incidents involving unsafe conditions, assault-related injuries, and other situations where a third party's actions or failures caused physical harm.\n\nCommon injuries in personal injury cases include soft tissue sprains and strains of the neck, back, and shoulders; knee and hip injuries from falls; head injuries and post-concussion symptoms; and acute fractures or contusions. Regardless of the legal context, treatment follows the same evidence-based protocols we use for all patients — our clinical decisions are driven by your medical needs, not by case strategy.\n\nWhere we do bring specific expertise is in documentation. Our physicians are experienced in producing the type of objective, clinically supported medical records that personal injury cases require: detailed initial evaluation notes, imaging reports, treatment summaries, causation analysis linking the injury to the incident, and final narrative medical reports. We coordinate with personal injury attorneys, respond to records requests promptly, and ensure our documentation meets the evidentiary standards of legal proceedings.\n\nFor qualified patients with an active personal injury claim, we offer lien-based billing — meaning you can receive the care you need now, with payment deferred until your case resolves.",
};

export const whyChooseUs = {
  headline: "Why Choose Rand Medical Center?",
  features: [
    {
      icon: "users",
      title: "Coordinated Multi-Specialty Team",
      description: "Your care is managed by providers who communicate directly across disciplines — pain management, orthopedics, physical therapy, and primary care under one roof. This coordination produces a cohesive medical record, which is particularly important in personal injury cases where continuity of care and consistency across providers matters during the claims process.",
    },
    {
      icon: "clock",
      title: "Same-Day and Next-Day Access",
      description: "Prompt evaluation after an injury is important both medically and legally. Gaps between the incident and your first medical visit can complicate a claim. We prioritize injury cases for quick scheduling so you are evaluated, diagnosed, and documented as soon as possible.",
    },
    {
      icon: "briefcase",
      title: "Personal Injury Documentation Expertise",
      description: "Our physicians understand what a personal injury claim requires beyond basic treatment notes. We produce narrative medical reports, causation statements, work-status letters, and attorney-ready summaries that clearly connect your injuries to the incident — while remaining clinically objective and defensible.",
    },
    {
      icon: "map-pin",
      title: "Convenient Arlington Heights Location",
      description: "Located in Arlington Heights with easy access from Mount Prospect, Palatine, Des Plaines, Schaumburg, and the northwest suburbs. We make it straightforward to attend appointments consistently, which matters for both your recovery and the continuity of your medical record.",
    },
  ] as FeatureItem[],
};

export const ctaSection = {
  headline: "Injured Due to Someone Else's Negligence? Start with an Evaluation.",
  body: "Your medical care and your claim both benefit from a thorough early evaluation. Our team in Arlington Heights, IL is ready to help — call (224) 735-3522 or schedule online today.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  {
    question: "Do I need a referral to be seen for a personal injury?",
    answer: "In most cases, no. You can call us directly at (224) 735-3522 to schedule without a referral from another provider. If your health insurance requires a referral for specialist visits, our team can help verify your benefits and coordinate the referral paperwork before your appointment so there are no delays in getting you evaluated.",
  },
  {
    question: "Do you work with personal injury attorneys?",
    answer: "Yes. We regularly coordinate with personal injury attorneys on behalf of our patients. This includes responding to records requests, producing narrative medical reports, writing causation letters that connect injuries to specific incidents, and providing final medical summaries. We communicate directly with your legal team so you are not in the middle managing information flow between your doctor and your attorney.",
  },
  {
    question: "What should I bring to my first personal injury visit?",
    answer: "Bring a photo ID, any insurance information you have (health insurance or a personal injury claim number if one has been opened), a list of current medications, and any records or imaging from emergency or urgent care visits following the incident. If you have an incident report, witness information, or photographs from the scene, bring those as well — while we are your medical team and not your legal team, that context helps us document the mechanism of injury accurately.",
  },
];
