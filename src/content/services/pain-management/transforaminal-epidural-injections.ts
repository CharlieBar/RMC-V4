// src/content/services/pain-management/transforaminal-epidural-injections.ts
// Rand Medical Center — Transforaminal Epidural Injections (Service Detail)

import type { SEOMeta, HeroSection, KeyFact, ConditionLink, TreatmentLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Transforaminal Epidural Injections in Arlington Heights, IL | Rand Medical Center",
  description: "Targeted transforaminal epidural injections in Arlington Heights, IL to treat specific spinal nerve root pain. Call (224) 735-3522.",
  keywords: ["transforaminal epidural injections Arlington Heights", "transforaminal epidural injections near me", "transforaminal epidural injections treatment"],
  canonical: "https://www.randmedicalcenter.com/services/pain-management/transforaminal-epidural-injections",
};

export const hero: HeroSection = {
  eyebrow: "Pain Management",
  headline: "Transforaminal Epidural Injections in Arlington Heights, IL",
  subheadline: "Targeted transforaminal epidural injections in Arlington Heights, IL to treat specific spinal nerve root pain.",
  primaryCTA: { text: "Schedule a Consultation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "What Are Transforaminal Epidural Injections?",
  body: "A transforaminal epidural injection is a more targeted version of a standard epidural steroid injection. Instead of delivering medication broadly into the epidural space, the transforaminal approach guides the needle through the neural foramen — the small opening where a nerve root exits the spine. This places the medication right next to the specific irritated nerve.\n\nThis precision makes transforaminal injections particularly useful for patients with clear radiculopathy (pain radiating along a specific nerve), herniated discs pressing on a single nerve root, or sciatica that follows a defined nerve pathway.\n\nThe procedure is performed under fluoroscopic guidance at Rand Medical Center.",
  keyFacts: [
    { label: "Procedure Time", value: "15–30 minutes" },
    { label: "Recovery", value: "Resume normal activities in 1–2 days" },
    { label: "Guidance", value: "Fluoroscopy or ultrasound" },
  ] as KeyFact[],
};

export const howItWorks = {
  headline: "How Transforaminal Epidural Injections Work",
  body: "Using fluoroscopy, your physician guides a needle through the neural foramen to reach the specific nerve root. Contrast dye confirms placement, then a corticosteroid and anesthetic mixture is injected directly around the irritated nerve. The procedure takes 15–30 minutes.",
};

export const conditionsTreated = {
  headline: "Conditions Treated",
  conditions: [
    {
        "name": "Sciatica",
        "slug": "sciatica",
        "href": "/conditions/spine/sciatica"
    },
    {
        "name": "Radiculopathy",
        "slug": "radiculopathy",
        "href": "/conditions/spine/radiculopathy"
    },
    {
        "name": "Herniated Disc",
        "slug": "herniated-disc",
        "href": "/conditions/spine/herniated-disc"
    },
    {
        "name": "Spinal Stenosis",
        "slug": "spinal-stenosis",
        "href": "/conditions/spine/spinal-stenosis"
    }
] as ConditionLink[],
};

export const benefits = {
  headline: "Benefits of Transforaminal Epidural Injections",
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
        "name": "Selective Nerve Root Blocks",
        "slug": "selective-nerve-root-blocks",
        "href": "/services/pain-management/selective-nerve-root-blocks"
    },
    {
        "name": "Radiofrequency Ablation",
        "slug": "radiofrequency-ablation",
        "href": "/services/pain-management/radiofrequency-ablation"
    }
] as TreatmentLink[],
};

export const ctaSection = {
  headline: "Find Out If Transforaminal Epidural Injections Are Right for You",
  body: "Schedule a consultation with our pain management team in Arlington Heights, IL to discuss whether transforaminal epidural injections could help with your condition.",
  primaryCTA: { text: "Schedule a Consultation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "How quickly will I feel results?", answer: "Many patients notice some relief from the local anesthetic within hours. The full anti-inflammatory effect of the steroid typically develops over 2–7 days." },
  { question: "Is the procedure painful?", answer: "Most patients describe mild pressure or discomfort during the injection. The area is numbed with local anesthetic beforehand, and sedation options are available if needed." },
  { question: "Does insurance cover this procedure?", answer: "Most health insurance plans and workers' compensation programs cover transforaminal epidural injections when medically necessary. Our billing team can verify your coverage before the procedure." },
  { question: "How many treatments will I need?", answer: "It depends on your condition and response. Some patients get significant relief from a single injection, while others benefit from a series of 2–3 over several weeks. Your doctor will recommend a plan based on your specific situation." },
];
