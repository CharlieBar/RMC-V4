// src/content/services/pain-management/spinal-cord-stimulation.ts
// Rand Medical Center — Spinal Cord Stimulation (Service Detail)

import type { SEOMeta, HeroSection, KeyFact, ConditionLink, TreatmentLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Spinal Cord Stimulation in Arlington Heights, IL | Rand Medical Center",
  description: "Spinal cord stimulation (SCS) in Arlington Heights, IL for chronic nerve pain that hasn't responded to other treatments. Call (224) 735-3522.",
  keywords: ["spinal cord stimulation Arlington Heights", "spinal cord stimulation near me", "spinal cord stimulation treatment"],
  canonical: "https://www.randmedicalcenter.com/services/pain-management/spinal-cord-stimulation",
};

export const hero: HeroSection = {
  eyebrow: "Pain Management",
  headline: "Spinal Cord Stimulation in Arlington Heights, IL",
  subheadline: "Spinal cord stimulation (SCS) in Arlington Heights, IL for chronic nerve pain that hasn't responded to other treatments.",
  primaryCTA: { text: "Schedule a Consultation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "What Are Spinal Cord Stimulation?",
  body: "Spinal cord stimulation (SCS) is an advanced pain management option for patients with chronic nerve-related pain that has not responded to medications, injections, or other conservative treatments. It uses a small implanted device to deliver gentle electrical pulses to the spinal cord, which modifies pain signals before they reach the brain.\n\nSCS is most commonly considered for failed back surgery syndrome, complex regional pain syndrome (CRPS), chronic radiculopathy, and neuropathic pain. The treatment begins with a trial period — a temporary lead is placed to test whether the stimulation provides meaningful relief before any permanent device is implanted.\n\nAt Rand Medical Center, our pain management physicians evaluate candidates for SCS and manage the trial and implant process.",
  keyFacts: [
    { label: "Procedure Time", value: "15–30 minutes" },
    { label: "Recovery", value: "Resume normal activities in 1–2 days" },
    { label: "Guidance", value: "Fluoroscopy or ultrasound" },
  ] as KeyFact[],
};

export const howItWorks = {
  headline: "How Spinal Cord Stimulation Work",
  body: "The process starts with a trial phase: thin leads are placed near the spinal cord through a minimally invasive procedure, connected to an external generator. You try the system for 5–7 days in your daily life. If the trial provides significant pain relief (typically 50% or more), a permanent device can be implanted in a separate procedure.",
};

export const conditionsTreated = {
  headline: "Conditions Treated",
  conditions: [
    {
        "name": "Failed Back Surgery Syndrome",
        "slug": "failed-back-surgery-syndrome",
        "href": "/conditions/spine/failed-back-surgery"
    },
    {
        "name": "Chronic Pain",
        "slug": "chronic-pain",
        "href": "/conditions/pain-syndromes/chronic-pain"
    },
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
  headline: "Benefits of Spinal Cord Stimulation",
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
        "name": "Nerve Blocks",
        "slug": "nerve-blocks",
        "href": "/services/pain-management/nerve-blocks"
    },
    {
        "name": "Radiofrequency Ablation",
        "slug": "radiofrequency-ablation",
        "href": "/services/pain-management/radiofrequency-ablation"
    }
] as TreatmentLink[],
};

export const ctaSection = {
  headline: "Find Out If Spinal Cord Stimulation Are Right for You",
  body: "Schedule a consultation with our pain management team in Arlington Heights, IL to discuss whether spinal cord stimulation could help with your condition.",
  primaryCTA: { text: "Schedule a Consultation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "How quickly will I feel results?", answer: "Many patients notice some relief from the local anesthetic within hours. The full anti-inflammatory effect of the steroid typically develops over 2–7 days." },
  { question: "Is the procedure painful?", answer: "Most patients describe mild pressure or discomfort during the injection. The area is numbed with local anesthetic beforehand, and sedation options are available if needed." },
  { question: "Does insurance cover this procedure?", answer: "Most health insurance plans and workers' compensation programs cover spinal cord stimulation when medically necessary. Our billing team can verify your coverage before the procedure." },
  { question: "How many treatments will I need?", answer: "It depends on your condition and response. Some patients get significant relief from a single injection, while others benefit from a series of 2–3 over several weeks. Your doctor will recommend a plan based on your specific situation." },
];
