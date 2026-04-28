// src/content/services/pain-management/sacroiliac-joint-injections.ts
// Rand Medical Center — Sacroiliac Joint Injections (Service Detail)

import type { SEOMeta, HeroSection, KeyFact, ConditionLink, TreatmentLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Sacroiliac Joint Injections in Arlington Heights, IL | Rand Medical Center",
  description: "SI joint injections in Arlington Heights, IL to diagnose and treat lower back and buttock pain from sacroiliac joint dysfunction. Call (224) 735-3522.",
  keywords: ["sacroiliac joint injections Arlington Heights", "sacroiliac joint injections near me", "sacroiliac joint injections treatment"],
  canonical: "https://www.randmedicalcenter.com/services/pain-management/sacroiliac-joint-injections",
};

export const hero: HeroSection = {
  eyebrow: "Pain Management",
  headline: "Sacroiliac Joint Injections in Arlington Heights, IL",
  subheadline: "SI joint injections in Arlington Heights, IL to diagnose and treat lower back and buttock pain from sacroiliac joint dysfunction.",
  primaryCTA: { text: "Schedule a Consultation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "What Are Sacroiliac Joint Injections?",
  body: "The sacroiliac (SI) joints connect the base of your spine (sacrum) to your pelvis. When these joints become inflamed or dysfunctional — from injury, arthritis, pregnancy, or repetitive stress — they can cause pain in the lower back, buttock, hip, or groin that may mimic other conditions like sciatica.\n\nAn SI joint injection places corticosteroid and local anesthetic directly into the joint under fluoroscopic guidance. The injection serves both a diagnostic and therapeutic purpose: if it significantly reduces your pain, it confirms the SI joint as the source.\n\nSI joint injections are performed as an outpatient procedure at Rand Medical Center.",
  keyFacts: [
    { label: "Procedure Time", value: "15–30 minutes" },
    { label: "Recovery", value: "Resume normal activities in 1–2 days" },
    { label: "Guidance", value: "Fluoroscopy or ultrasound" },
  ] as KeyFact[],
};

export const howItWorks = {
  headline: "How Sacroiliac Joint Injections Work",
  body: "You lie face down on a procedure table. Using fluoroscopy, your doctor guides a thin needle into the SI joint. Contrast dye confirms correct placement, then medication is injected. The procedure takes about 15–20 minutes.",
};

export const conditionsTreated = {
  headline: "Conditions Treated",
  conditions: [
    {
        "name": "SI Joint Pain",
        "slug": "si-joint-pain",
        "href": "/conditions/spine/si-joint-pain"
    },
    {
        "name": "Back Pain",
        "slug": "back-pain",
        "href": "/conditions/spine/back-pain"
    },
    {
        "name": "Hip Pain",
        "slug": "hip-pain",
        "href": "/conditions/joints/hip-pain"
    }
] as ConditionLink[],
};

export const benefits = {
  headline: "Benefits of Sacroiliac Joint Injections",
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
        "name": "Facet Joint Blocks",
        "slug": "facet-joint-blocks",
        "href": "/services/pain-management/facet-joint-blocks"
    },
    {
        "name": "Radiofrequency Ablation",
        "slug": "radiofrequency-ablation",
        "href": "/services/pain-management/radiofrequency-ablation"
    },
    {
        "name": "Physical Therapy",
        "slug": "physical-therapy",
        "href": "/services/physical-therapy"
    }
] as TreatmentLink[],
};

export const ctaSection = {
  headline: "Find Out If Sacroiliac Joint Injections Are Right for You",
  body: "Schedule a consultation with our pain management team in Arlington Heights, IL to discuss whether sacroiliac joint injections could help with your condition.",
  primaryCTA: { text: "Schedule a Consultation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "How quickly will I feel results?", answer: "Many patients notice some relief from the local anesthetic within hours. The full anti-inflammatory effect of the steroid typically develops over 2–7 days." },
  { question: "Is the procedure painful?", answer: "Most patients describe mild pressure or discomfort during the injection. The area is numbed with local anesthetic beforehand, and sedation options are available if needed." },
  { question: "Does insurance cover this procedure?", answer: "Most health insurance plans and workers' compensation programs cover sacroiliac joint injections when medically necessary. Our billing team can verify your coverage before the procedure." },
  { question: "How many treatments will I need?", answer: "It depends on your condition and response. Some patients get significant relief from a single injection, while others benefit from a series of 2–3 over several weeks. Your doctor will recommend a plan based on your specific situation." },
];
