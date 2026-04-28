// src/content/services/pain-management/nerve-blocks.ts
// Rand Medical Center — Nerve Blocks (Service Detail)

import type { SEOMeta, HeroSection, KeyFact, ConditionLink, TreatmentLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Nerve Block Injections in Arlington Heights, IL | Rand Medical Center",
  description: "Targeted nerve block injections in Arlington Heights, IL to block pain signals from specific nerves in the neck, back, and extremities. Call (224) 735-3522.",
  keywords: ["nerve blocks Arlington Heights", "nerve blocks near me", "nerve blocks treatment"],
  canonical: "https://www.randmedicalcenter.com/services/pain-management/nerve-blocks",
};

export const hero: HeroSection = {
  eyebrow: "Pain Management",
  headline: "Nerve Blocks in Arlington Heights, IL",
  subheadline: "Targeted nerve block injections in Arlington Heights, IL to block pain signals from specific nerves in the neck, back, and extremities.",
  primaryCTA: { text: "Schedule a Consultation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "What Are Nerve Blocks?",
  body: "A nerve block is an injection of anesthetic and sometimes corticosteroid medication near a specific nerve or group of nerves to temporarily stop pain signals from reaching your brain. Nerve blocks can serve both diagnostic and therapeutic purposes — they help your doctor identify exactly which nerve is causing your pain, and they provide relief that can last days to weeks.\n\nNerve blocks are used for many types of pain, including pain from pinched nerves, neuropathy, complex regional pain syndrome (CRPS), and post-surgical pain. They are performed in our clinic under image guidance for safety and accuracy.",
  keyFacts: [
    { label: "Procedure Time", value: "15–30 minutes" },
    { label: "Recovery", value: "Resume normal activities in 1–2 days" },
    { label: "Guidance", value: "Fluoroscopy or ultrasound" },
  ] as KeyFact[],
};

export const howItWorks = {
  headline: "How Nerve Blocks Work",
  body: "Using fluoroscopy or ultrasound guidance, your physician guides a needle to the target nerve. After confirming position, a local anesthetic (with or without a steroid) is injected to block pain transmission from that nerve. The procedure typically takes 15–30 minutes.",
};

export const conditionsTreated = {
  headline: "Conditions Treated",
  conditions: [
    {
        "name": "Peripheral Neuropathy",
        "slug": "peripheral-neuropathy",
        "href": "/conditions/nerves/neuropathy"
    },
    {
        "name": "Chronic Pain",
        "slug": "chronic-pain",
        "href": "/conditions/pain-syndromes/chronic-pain"
    },
    {
        "name": "Neck Pain",
        "slug": "neck-pain",
        "href": "/conditions/spine/neck-pain"
    },
    {
        "name": "CRPS",
        "slug": "crps",
        "href": "/conditions/nerves/complex-regional-pain-syndrome"
    }
] as ConditionLink[],
};

export const benefits = {
  headline: "Benefits of Nerve Blocks",
  items: [
    "Targeted delivery of medication directly to the pain source",
    "Minimally invasive with no incisions",
    "Performed on an outpatient basis — go home the same day",
    "Can reduce or eliminate the need for stronger pain medications",
    "Helps diagnose the exact source of your pain",
    "May improve your ability to participate in physical therapy",
  ],
};

export const whatToExpect = {
  headline: "What to Expect",
  body: "The procedure is performed in our clinic or outpatient surgery center. Plan for about 60–90 minutes total including check-in and recovery. You'll need someone to drive you home. Most patients return to normal activities within 1–2 days. Your doctor will schedule a follow-up to assess your response.",
};

export const risks = {
  headline: "Risks and Considerations",
  body: "This procedure is generally considered safe when performed by an experienced physician using image guidance. As with any medical procedure, there are potential risks, including temporary soreness at the injection site, mild headache, temporary increase in pain, and rare complications such as infection or nerve injury. Your doctor will discuss the specific risks and benefits with you before the procedure.",
};

export const whyChooseUs = {
  headline: "Why Choose Rand Medical Center?",
  features: [
    { icon: "target", title: "Image-Guided Precision", description: "Every procedure is performed under fluoroscopic or ultrasound guidance for accurate needle placement." },
    { icon: "award", title: "Experienced Specialists", description: "Our pain management physicians perform hundreds of procedures each year." },
    { icon: "refresh-cw", title: "Coordinated Follow-Up", description: "Physical therapy and additional treatments are available right here for seamless recovery." },
  ] as FeatureItem[],
};

export const relatedTreatments = {
  headline: "Related Treatments",
  items: [
    {
        "name": "Epidural Steroid Injections",
        "slug": "epidural-steroid-injections",
        "href": "/services/pain-management/epidural-steroid-injections"
    },
    {
        "name": "Radiofrequency Ablation",
        "slug": "radiofrequency-ablation",
        "href": "/services/pain-management/radiofrequency-ablation"
    },
    {
        "name": "Stellate Ganglion Block",
        "slug": "stellate-ganglion-block",
        "href": "/services/pain-management/stellate-ganglion-block"
    }
] as TreatmentLink[],
};

export const ctaSection = {
  headline: "Find Out If Nerve Blocks Are Right for You",
  body: "Schedule a consultation with our pain management team in Arlington Heights, IL to discuss whether nerve blocks could help with your condition.",
  primaryCTA: { text: "Schedule a Consultation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "How quickly will I feel results?", answer: "Many patients notice some relief from the local anesthetic within hours. The full anti-inflammatory effect of the steroid typically develops over 2–7 days." },
  { question: "Is the procedure painful?", answer: "Most patients describe mild pressure or discomfort during the injection. The area is numbed with local anesthetic beforehand, and sedation options are available if needed." },
  { question: "Does insurance cover this procedure?", answer: "Most health insurance plans and workers' compensation programs cover nerve blocks when medically necessary. Our billing team can verify your coverage before the procedure." },
  { question: "How many treatments will I need?", answer: "It depends on your condition and response. Some patients get significant relief from a single injection, while others benefit from a series of 2–3 over several weeks. Your doctor will recommend a plan based on your specific situation." },
];
