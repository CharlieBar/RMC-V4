// src/content/services/pain-management/bursa-injections.ts
// Rand Medical Center — Bursa Injections (Service Detail)

import type { SEOMeta, HeroSection, KeyFact, ConditionLink, TreatmentLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Bursa Injections in Arlington Heights, IL | Rand Medical Center",
  description: "Bursa injections in Arlington Heights, IL for painful bursitis in the shoulder, hip, knee, or elbow. Fast relief from swelling and pain. Call (224) 735-3522.",
  keywords: ["bursa injections Arlington Heights", "bursa injections near me", "bursa injections treatment"],
  canonical: "https://www.randmedicalcenter.com/services/pain-management/bursa-injections",
};

export const hero: HeroSection = {
  eyebrow: "Pain Management",
  headline: "Bursa Injections in Arlington Heights, IL",
  subheadline: "Bursa injections in Arlington Heights, IL for painful bursitis in the shoulder, hip, knee, or elbow. Fast relief from swelling and pain.",
  primaryCTA: { text: "Schedule a Consultation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "What Are Bursa Injections?",
  body: "Bursae are small, fluid-filled sacs that cushion bones, tendons, and muscles near joints. When a bursa becomes inflamed — a condition called bursitis — it causes pain, swelling, and tenderness around the affected joint. Bursitis commonly affects the shoulder, hip, knee, and elbow.\n\nA bursa injection delivers corticosteroid medication directly into the inflamed bursa to rapidly reduce swelling and pain. Most patients experience significant improvement within a few days of the injection.\n\nBursa injections are performed in our clinic and typically take just a few minutes.",
  keyFacts: [
    { label: "Procedure Time", value: "15–30 minutes" },
    { label: "Recovery", value: "Resume normal activities in 1–2 days" },
    { label: "Guidance", value: "Fluoroscopy or ultrasound" },
  ] as KeyFact[],
};

export const howItWorks = {
  headline: "How Bursa Injections Work",
  body: "Your doctor locates the inflamed bursa by palpation or ultrasound guidance, cleans the area, and inserts a thin needle into the bursa. A combination of corticosteroid and local anesthetic is injected. Relief from the anesthetic begins immediately; the full steroid effect develops over 2–5 days.",
};

export const conditionsTreated = {
  headline: "Conditions Treated",
  conditions: [
    {
        "name": "Shoulder Pain",
        "slug": "shoulder-pain",
        "href": "/conditions/joints/shoulder-pain"
    },
    {
        "name": "Hip Pain",
        "slug": "hip-pain",
        "href": "/conditions/joints/hip-pain"
    },
    {
        "name": "Knee Pain",
        "slug": "knee-pain",
        "href": "/conditions/joints/knee-pain"
    }
] as ConditionLink[],
};

export const benefits = {
  headline: "Benefits of Bursa Injections",
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
        "name": "Joint Injections",
        "slug": "joint-injections",
        "href": "/services/pain-management/joint-injections"
    },
    {
        "name": "Physical Therapy",
        "slug": "physical-therapy",
        "href": "/services/physical-therapy"
    },
    {
        "name": "Trigger Point Injections",
        "slug": "trigger-point-injections",
        "href": "/services/pain-management/trigger-point-injections"
    }
] as TreatmentLink[],
};

export const ctaSection = {
  headline: "Find Out If Bursa Injections Are Right for You",
  body: "Schedule a consultation with our pain management team in Arlington Heights, IL to discuss whether bursa injections could help with your condition.",
  primaryCTA: { text: "Schedule a Consultation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "How quickly will I feel results?", answer: "Many patients notice some relief from the local anesthetic within hours. The full anti-inflammatory effect of the steroid typically develops over 2–7 days." },
  { question: "Is the procedure painful?", answer: "Most patients describe mild pressure or discomfort during the injection. The area is numbed with local anesthetic beforehand, and sedation options are available if needed." },
  { question: "Does insurance cover this procedure?", answer: "Most health insurance plans and workers' compensation programs cover bursa injections when medically necessary. Our billing team can verify your coverage before the procedure." },
  { question: "How many treatments will I need?", answer: "It depends on your condition and response. Some patients get significant relief from a single injection, while others benefit from a series of 2–3 over several weeks. Your doctor will recommend a plan based on your specific situation." },
];
