// src/content/services/pain-management/selective-nerve-root-blocks.ts
// Rand Medical Center — Selective Nerve Root Blocks (Service Detail)

import type { SEOMeta, HeroSection, KeyFact, ConditionLink, TreatmentLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Selective Nerve Root Blocks in Arlington Heights, IL | Rand Medical Center",
  description: "Selective nerve root blocks in Arlington Heights, IL to diagnose and treat pain from specific spinal nerves. Call (224) 735-3522.",
  keywords: ["selective nerve root blocks Arlington Heights", "selective nerve root blocks near me", "selective nerve root blocks treatment"],
  canonical: "https://www.randmedicalcenter.com/services/pain-management/selective-nerve-root-blocks",
};

export const hero: HeroSection = {
  eyebrow: "Pain Management",
  headline: "Selective Nerve Root Blocks in Arlington Heights, IL",
  subheadline: "Selective nerve root blocks in Arlington Heights, IL to diagnose and treat pain from specific spinal nerves.",
  primaryCTA: { text: "Schedule a Consultation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "What Are Selective Nerve Root Blocks?",
  body: "A selective nerve root block (SNRB) is a precision injection that targets a single nerve root as it exits the spinal column. It serves both a diagnostic purpose — confirming which nerve is causing your pain — and a therapeutic purpose, providing temporary relief by reducing inflammation around that nerve.\n\nSNRBs are especially useful when imaging shows abnormalities at multiple spinal levels but symptoms suggest a single nerve is responsible. By selectively blocking one nerve at a time, your doctor can pinpoint the exact source and plan more definitive treatment.\n\nThe procedure is performed under fluoroscopic guidance at Rand Medical Center.",
  keyFacts: [
    { label: "Procedure Time", value: "15–30 minutes" },
    { label: "Recovery", value: "Resume normal activities in 1–2 days" },
    { label: "Guidance", value: "Fluoroscopy or ultrasound" },
  ] as KeyFact[],
};

export const howItWorks = {
  headline: "How Selective Nerve Root Blocks Work",
  body: "Your physician uses fluoroscopy to guide a thin needle to the target nerve root. After confirming position with contrast dye, a local anesthetic and corticosteroid mixture is injected around the nerve. Relief from the anesthetic is typically immediate, helping confirm the pain source.",
};

export const conditionsTreated = {
  headline: "Conditions Treated",
  conditions: [
    {
        "name": "Radiculopathy",
        "slug": "radiculopathy",
        "href": "/conditions/spine/radiculopathy"
    },
    {
        "name": "Sciatica",
        "slug": "sciatica",
        "href": "/conditions/spine/sciatica"
    },
    {
        "name": "Herniated Disc",
        "slug": "herniated-disc",
        "href": "/conditions/spine/herniated-disc"
    }
] as ConditionLink[],
};

export const benefits = {
  headline: "Benefits of Selective Nerve Root Blocks",
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
        "name": "Transforaminal Epidurals",
        "slug": "transforaminal-epidurals",
        "href": "/services/pain-management/transforaminal-epidural-injections"
    },
    {
        "name": "Epidural Steroid Injections",
        "slug": "epidural-steroid-injections",
        "href": "/services/pain-management/epidural-steroid-injections"
    },
    {
        "name": "Nerve Blocks",
        "slug": "nerve-blocks",
        "href": "/services/pain-management/nerve-blocks"
    }
] as TreatmentLink[],
};

export const ctaSection = {
  headline: "Find Out If Selective Nerve Root Blocks Are Right for You",
  body: "Schedule a consultation with our pain management team in Arlington Heights, IL to discuss whether selective nerve root blocks could help with your condition.",
  primaryCTA: { text: "Schedule a Consultation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "How quickly will I feel results?", answer: "Many patients notice some relief from the local anesthetic within hours. The full anti-inflammatory effect of the steroid typically develops over 2–7 days." },
  { question: "Is the procedure painful?", answer: "Most patients describe mild pressure or discomfort during the injection. The area is numbed with local anesthetic beforehand, and sedation options are available if needed." },
  { question: "Does insurance cover this procedure?", answer: "Most health insurance plans and workers' compensation programs cover selective nerve root blocks when medically necessary. Our billing team can verify your coverage before the procedure." },
  { question: "How many treatments will I need?", answer: "It depends on your condition and response. Some patients get significant relief from a single injection, while others benefit from a series of 2–3 over several weeks. Your doctor will recommend a plan based on your specific situation." },
];
