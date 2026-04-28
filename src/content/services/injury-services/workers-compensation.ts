// src/content/services/injury-services/workers-compensation.ts
// Rand Medical Center — Workers' Compensation Care (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Illinois Workers' Compensation Care | Arlington Heights, IL | Rand Medical Center",
  description: "Same-day work injury evaluation, treatment, and return-to-work documentation under Illinois workers' comp in Arlington Heights, IL. You choose your doctor. Call (224) 735-3522.",
  keywords: [
    "workers compensation Arlington Heights",
    "workers compensation doctor near me Illinois",
    "Illinois workers comp injury evaluation",
    "work injury treatment northwest suburbs IL",
  ],
  canonical: "https://www.randmedicalcenter.com/services/injury-services/workers-compensation",
};

export const hero: HeroSection = {
  eyebrow: "Injury Services",
  headline: "Workers' Compensation Care in Arlington Heights, IL",
  subheadline: "Same-day evaluation, evidence-based treatment, accurate work-status reporting, and structured return-to-work programs — managed by physicians experienced in Illinois workers' compensation requirements.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About Workers' Compensation Care",
  body: "Workers' compensation care at Rand Medical Center covers the entire journey from initial injury evaluation through return to work. We evaluate new work injuries on the same day whenever possible, establish an accurate diagnosis, begin appropriate treatment, and generate the documentation that employers, case managers, and workers' compensation insurance carriers require under Illinois law.\n\nOur physicians are specifically experienced with Illinois workers' compensation requirements. We understand the importance of accurate and timely work-status reports, clear communication with employers and insurance case managers, and structured return-to-work programs that balance the patient's recovery with the practical demands of their job. Whether your injury is acute — a lifting strain, a fall, a laceration — or a longer-developing condition like repetitive stress injury or occupational hearing loss, we build a treatment plan calibrated to your diagnosis and your work demands.\n\nWe provide the full documentation trail required under Illinois workers' comp: initial evaluation notes, diagnostic imaging reports (X-rays on-site, MRI referrals when indicated), treatment records, work-restriction letters, and final medical reports. When disputes arise, our records are objective, thorough, and clinically defensible.\n\nUnder Illinois law, you have the right to choose your own treating physician for a workers' compensation injury. You do not have to see the doctor your employer designates. Call us directly — you can schedule your evaluation without waiting for your employer to arrange it.",
};

export const whyChooseUs = {
  headline: "Why Choose Rand Medical Center?",
  features: [
    {
      icon: "users",
      title: "Coordinated Multi-Specialty Team",
      description: "Workers' compensation injuries frequently require care from multiple disciplines — orthopedics for fractures and musculoskeletal injuries, pain management for chronic work-related pain, physical therapy for rehabilitation, and primary care for overall health management. At Rand, all of these providers communicate directly under one roof, so your care is coordinated rather than fragmented across multiple facilities.",
    },
    {
      icon: "clock",
      title: "Same-Day and Next-Day Access",
      description: "Delayed evaluation after a workplace injury can complicate both your recovery and your claim. We prioritize work injury cases for same-day or next-day appointments whenever possible, so that injuries are documented, diagnosed, and treated before conditions worsen — and before gaps in the medical timeline create problems with the carrier.",
    },
    {
      icon: "briefcase",
      title: "Illinois Workers' Comp Experience",
      description: "Our physicians know Illinois workers' compensation inside and out — the documentation requirements, the work-restriction letter standards, and the return-to-work reporting that employers and carriers expect. We handle communication with case managers and employers directly, so you are not navigating the administrative side of your claim alone.",
    },
    {
      icon: "map-pin",
      title: "Convenient Arlington Heights Location",
      description: "Our clinic is easily accessible from Mount Prospect, Palatine, Des Plaines, Schaumburg, Elk Grove Village, and throughout the northwest suburbs — a practical choice for workers and employers across the region who need consistent, accessible care throughout a workers' comp case.",
    },
  ] as FeatureItem[],
};

export const ctaSection = {
  headline: "Hurt at Work? You Have the Right to Choose Your Own Doctor.",
  body: "Under Illinois workers' comp law, you don't have to see your employer's doctor. Our team in Arlington Heights, IL is ready to evaluate and treat your injury today — call (224) 735-3522 or schedule online.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  {
    question: "Do I need a referral to be seen for a workers' compensation injury?",
    answer: "No. Under Illinois workers' compensation law, you have the right to choose your own treating physician and to schedule directly without going through your employer. Call us at (224) 735-3522 and we will schedule your evaluation. Please have your employer's workers' comp insurance carrier name and claim number available if one has been opened — if a claim hasn't been filed yet, we can help walk you through that process.",
  },
  {
    question: "Do you bill workers' compensation insurance directly?",
    answer: "Yes. We bill the workers' compensation carrier directly for all treatment related to your work injury. You should not be out-of-pocket for medical care covered under a valid workers' comp claim. If there is a dispute about coverage or the claim is being contested, our billing team will communicate with the carrier and keep you informed of your options.",
  },
  {
    question: "What should I bring to my first workers' compensation visit?",
    answer: "Bring a photo ID, your employer's workers' compensation insurance information (carrier name, claim number, and adjuster contact if available), a description of how the injury occurred and when, and any prior imaging or records if you were seen at an emergency room or urgent care after the incident. If your employer gave you a specific form or panel of physicians, bring that as well — though again, you are not required to use your employer's designated provider.",
  },
];
