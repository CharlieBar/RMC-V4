// src/content/services/pain-management/stellate-ganglion-block.ts
// Rand Medical Center — Stellate Ganglion Block (Service Detail)

import type { SEOMeta, HeroSection, KeyFact, ConditionLink, TreatmentLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Stellate Ganglion Block in Arlington Heights, IL | Rand Medical Center",
  description: "Stellate ganglion blocks in Arlington Heights, IL for nerve-related pain in the head, neck, and upper extremities. Call (224) 735-3522.",
  keywords: ["stellate ganglion block Arlington Heights", "stellate ganglion block near me", "stellate ganglion block treatment"],
  canonical: "https://www.randmedicalcenter.com/services/pain-management/stellate-ganglion-block",
};

export const hero: HeroSection = {
  eyebrow: "Pain Management",
  headline: "Stellate Ganglion Block in Arlington Heights, IL",
  subheadline: "Stellate ganglion blocks in Arlington Heights, IL for nerve-related pain in the head, neck, and upper extremities.",
  primaryCTA: { text: "Schedule a Consultation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "What Are Stellate Ganglion Block?",
  body: "A stellate ganglion block targets the stellate ganglion — a collection of sympathetic nerves located in the neck near the voice box. These nerves can play a role in certain chronic pain conditions affecting the head, neck, upper chest, and arms.\n\nThe injection delivers local anesthetic around the ganglion to temporarily block sympathetic nerve activity. Stellate ganglion blocks are used to diagnose and treat conditions such as complex regional pain syndrome (CRPS), certain types of arm pain, and some vascular conditions. They can also help determine whether sympathetic nerve involvement is contributing to your pain.\n\nThis procedure is performed under fluoroscopic or ultrasound guidance at Rand Medical Center.",
  keyFacts: [
    { label: "Procedure Time", value: "15–30 minutes" },
    { label: "Recovery", value: "Resume normal activities in 1–2 days" },
    { label: "Guidance", value: "Fluoroscopy or ultrasound" },
  ] as KeyFact[],
};

export const howItWorks = {
  headline: "How Stellate Ganglion Block Work",
  body: "You lie on your back with your neck slightly extended. Using image guidance, your physician advances a thin needle to the stellate ganglion in the front of the neck. After confirming position, local anesthetic is injected. The procedure takes about 15–20 minutes. Temporary effects may include drooping of the eyelid, nasal congestion, and warmth in the arm on the treated side — all signs that the block is working.",
};

export const conditionsTreated = {
  headline: "Conditions Treated",
  conditions: [
    {
        "name": "CRPS",
        "slug": "crps",
        "href": "/conditions/nerves/complex-regional-pain-syndrome"
    },
    {
        "name": "Peripheral Neuropathy",
        "slug": "peripheral-neuropathy",
        "href": "/conditions/nerves/neuropathy"
    }
] as ConditionLink[],
};

export const benefits = {
  headline: "Benefits of Stellate Ganglion Block",
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
        "name": "Nerve Blocks",
        "slug": "nerve-blocks",
        "href": "/services/pain-management/nerve-blocks"
    },
    {
        "name": "Spinal Cord Stimulation",
        "slug": "spinal-cord-stimulation",
        "href": "/services/pain-management/spinal-cord-stimulation"
    },
    {
        "name": "Radiofrequency Ablation",
        "slug": "radiofrequency-ablation",
        "href": "/services/pain-management/radiofrequency-ablation"
    }
] as TreatmentLink[],
};

export const ctaSection = {
  headline: "Find Out If Stellate Ganglion Block Are Right for You",
  body: "Schedule a consultation with our pain management team in Arlington Heights, IL to discuss whether stellate ganglion block could help with your condition.",
  primaryCTA: { text: "Schedule a Consultation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "How quickly will I feel results?", answer: "Many patients notice some relief from the local anesthetic within hours. The full anti-inflammatory effect of the steroid typically develops over 2–7 days." },
  { question: "Is the procedure painful?", answer: "Most patients describe mild pressure or discomfort during the injection. The area is numbed with local anesthetic beforehand, and sedation options are available if needed." },
  { question: "Does insurance cover this procedure?", answer: "Most health insurance plans and workers' compensation programs cover stellate ganglion block when medically necessary. Our billing team can verify your coverage before the procedure." },
  { question: "How many treatments will I need?", answer: "It depends on your condition and response. Some patients get significant relief from a single injection, while others benefit from a series of 2–3 over several weeks. Your doctor will recommend a plan based on your specific situation." },
];
