// src/content/services/injury-services/workplace-injuries.ts
// Rand Medical Center — Workplace Injuries (Service Detail)

import type { SEOMeta, HeroSection, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Workplace Injury Treatment — Back, Shoulder, Repetitive Strain | Arlington Heights, IL",
  description: "Treatment for lifting injuries, on-the-job falls, repetitive strain, and acute workplace accidents in Arlington Heights, IL. Workers' comp accepted. Call (224) 735-3522.",
  keywords: [
    "workplace injuries Arlington Heights",
    "workplace injury doctor near me",
    "work injury back pain treatment IL",
    "repetitive strain injury treatment northwest suburbs",
  ],
  canonical: "https://www.randmedicalcenter.com/services/injury-services/workplace-injuries",
};

export const hero: HeroSection = {
  eyebrow: "Injury Services",
  headline: "Workplace Injuries in Arlington Heights, IL",
  subheadline: "Personalized evaluation and treatment for lifting injuries, on-the-job falls, repetitive strain, struck-by incidents, and the full range of occupational injuries — with return-to-work programs designed around your job demands.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "About Workplace Injuries",
  body: "Workplace injuries are among the most common conditions we treat at Rand Medical Center, and our team is built to handle them comprehensively — from the initial evaluation through rehabilitation and return to work. We treat the full spectrum of occupational injuries: acute traumatic injuries and the slower-developing conditions that accumulate over years of repetitive work.\n\nAcute workplace injuries we regularly see include lumbar and cervical strains from lifting, moving, or awkward posture; shoulder injuries such as rotator cuff tears and AC joint injuries from falls or overhead work; knee injuries including meniscal damage and ligament sprains from slips and falls; hand and wrist injuries including fractures, lacerations, and crush injuries; and post-concussion evaluation following head impacts.\n\nOn the chronic and repetitive side, we evaluate and treat carpal tunnel syndrome and other nerve entrapment conditions from sustained hand or wrist use; tendonitis and bursitis of the shoulder, elbow, wrist, and knee; lateral and medial epicondylitis (tennis and golfer's elbow) from repetitive gripping or lifting; and lumbar disc conditions that develop or worsen over time from the physical demands of heavy work.\n\nEach case receives a personalized treatment plan that accounts for your specific diagnosis, the physical requirements of your job, your recovery timeline, and your return-to-work goals. We coordinate care across pain management, orthopedics, and physical therapy under one roof, and we produce the documentation — work-restriction letters, status reports, and final medical summaries — that your employer and workers' compensation carrier require.",
};

export const whyChooseUs = {
  headline: "Why Choose Rand Medical Center?",
  features: [
    {
      icon: "users",
      title: "Coordinated Multi-Specialty Team",
      description: "Workplace injuries rarely stay within a single specialty. A back injury may need pain management for acute care, orthopedic evaluation for structural assessment, and physical therapy for rehabilitation. At Rand, those providers work together directly under one roof — sharing records, aligning on your plan, and adjusting the approach as your recovery progresses. You get coordinated care without the delays of external referrals.",
    },
    {
      icon: "clock",
      title: "Same-Day and Next-Day Access",
      description: "When you're injured on the job, prompt evaluation matters — both for your health and for the integrity of your workers' compensation claim. We prioritize work injury cases for same-day or next-day appointments so that the injury is properly documented and treatment begins without delay. Early intervention also reduces the likelihood of acute injuries developing into chronic conditions.",
    },
    {
      icon: "briefcase",
      title: "Workers' Comp and Occupational Medicine Experience",
      description: "Our physicians understand the demands of occupational medicine — including work-restriction documentation, modified-duty letters, return-to-work clearances, and the communication that case managers and employers need throughout a claim. We take the administrative burden off your plate and handle coordination with the workers' compensation carrier directly.",
    },
    {
      icon: "map-pin",
      title: "Convenient Arlington Heights Location",
      description: "Conveniently located in Arlington Heights with easy access from Mount Prospect, Palatine, Des Plaines, Schaumburg, Elk Grove Village, and throughout Cook and Lake counties. Workers and employers across the northwest suburbs rely on us for consistent, accessible occupational injury care from initial evaluation through clearance.",
    },
  ] as FeatureItem[],
};

export const ctaSection = {
  headline: "Injured on the Job? Get Evaluated Today.",
  body: "The sooner you're evaluated, the better your outcome — medically and for your claim. Our team in Arlington Heights, IL is ready to see you. Call (224) 735-3522 or schedule online.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  {
    question: "Do I need a referral to be treated for a workplace injury?",
    answer: "No. Under Illinois workers' compensation law, you have the right to seek care directly from a physician of your choice. You do not need your employer's permission or a referral from another provider to schedule with us. Call (224) 735-3522 to set up your evaluation. If your employer's insurer requests documentation of your visit, we will provide it.",
  },
  {
    question: "Do you accept workers' compensation for workplace injuries?",
    answer: "Yes. We regularly treat work injury patients under Illinois workers' compensation and bill the carrier directly. You should not be responsible for out-of-pocket costs for treatment that is covered under a valid workers' comp claim. Our billing team will work with your employer's insurer from the start so you can focus on your recovery.",
  },
  {
    question: "What should I bring to my first workplace injury visit?",
    answer: "Bring a photo ID, your employer's workers' compensation insurance information (carrier name and claim number if one has been opened), and a clear description of how and when the injury occurred. If you were seen in an emergency room or urgent care after the incident, bring any records or imaging from that visit. The more complete the picture we have at the first visit, the more accurate and defensible your initial documentation will be.",
  },
];
