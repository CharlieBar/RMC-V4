// src/content/pages/insurance.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Insurance & Billing
// ─────────────────────────────────────────────────────────

import type { SEOMeta, HeroSection, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Insurance & Billing | Rand Medical Center | Arlington Heights, IL",
  description:
    "Rand Medical Center accepts most major insurance, workers' compensation, and personal injury cases. Learn about coverage, billing, and payment options.",
  keywords: ["Rand Medical Center insurance", "accepted insurance Arlington Heights", "workers comp billing", "personal injury lien billing"],
  canonical: "https://www.randmedicalcenter.com/patient-resources/insurance",
};

export const hero: HeroSection = {
  eyebrow: "Patient Resources",
  headline: "Insurance and Billing Information",
  subheadline: "We accept most major insurance plans, workers' compensation, and personal injury cases. Our billing team can verify your coverage before your visit.",
  primaryCTA: { text: "Call to Verify Coverage", href: "tel:+12247353522", variant: "primary" },
  secondaryCTA: { text: "Schedule Online", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "secondary" },
};

export const intro = {
  headline: "Understanding Your Coverage",
  body: "We believe insurance and billing shouldn't be a barrier to getting the care you need. Our billing team works with you to verify coverage, explain costs, and navigate the billing process — whether you have private insurance, workers' compensation, or a personal injury case.",
};

export const sections = [
  {
    id: "accepted-insurance",
    headline: "Insurance Plans We Accept",
    body: "Rand Medical Center accepts most major health insurance plans, including PPO and HMO plans from major carriers. We also accept Medicare and many Medicaid managed care plans. Because insurance networks change frequently, we recommend calling our office to confirm that your specific plan is accepted before your visit.",
    // ASSUMPTION: Specific carrier list not provided — update when available
    items: [
      "Most major PPO and HMO plans",
      "Medicare",
      "Medicaid managed care plans (select)",
      "Blue Cross Blue Shield",
      "Aetna",
      "Cigna",
      "UnitedHealthcare",
      "Humana",
      "Workers' compensation (all carriers)",
      "Personal injury / lien-based cases",
    ],
  },
  {
    id: "workers-comp",
    headline: "Workers' Compensation Billing",
    body: "If you've been injured at work, your medical treatment is covered by your employer's workers' compensation insurance. You should not receive a bill for covered treatment related to your work injury. Our billing team handles all communication with the workers' comp carrier, including claim submission, authorization requests, and payment follow-up. You need to provide your employer's name, your claim number (if assigned), and details about how the injury occurred.",
  },
  {
    id: "personal-injury",
    headline: "Personal Injury and Auto Accident Billing",
    body: "For qualified auto accident and personal injury cases, we can provide treatment on a lien basis. This means your treatment is provided now and payment is deferred until your legal case resolves. We also accept auto insurance medical payments (MedPay) coverage and health insurance for accident-related treatment. Our billing team can help determine the best billing arrangement for your situation.",
  },
  {
    id: "out-of-pocket",
    headline: "Self-Pay and Payment Options",
    body: "If you don't have insurance or prefer to pay out of pocket, please contact our billing office to discuss pricing and payment arrangements. We're committed to transparency about costs and will provide estimates whenever possible before treatment begins.",
  },
  {
    id: "verify",
    headline: "How to Verify Your Coverage",
    body: "Call our office at (224) 735-3522 before your visit. Have your insurance card ready. Our billing team will verify your plan, check whether pre-authorization is needed for specific procedures, and let you know about any copays or deductibles that may apply.",
  },
];

export const ctaSection = {
  headline: "Don't Let Insurance Questions Delay Your Care",
  body: "Call our billing team and we'll help you figure out your coverage. If you've been injured at work or in an accident, we can often get you started the same day regardless of insurance status.",
  primaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "primary" as const },
  secondaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Do I need to bring my insurance card?", answer: "Yes. Please bring your insurance card (front and back) to every visit. For workers' comp, bring your claim number and employer information." },
  { question: "Will I owe a copay?", answer: "It depends on your insurance plan. Most plans have a copay for specialist visits. Workers' comp visits typically have no copay. Our team will inform you of any expected costs before your visit." },
  { question: "What if my insurance requires pre-authorization?", answer: "Our office handles pre-authorization requests for procedures and imaging. We'll obtain approval before scheduling to avoid unexpected costs." },
  { question: "Can I still be seen if I don't have insurance?", answer: "Yes. Contact our billing office to discuss self-pay options and pricing. We'll work with you to make care accessible." },
];
