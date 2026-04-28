// src/content/services/pain-management/trigger-point-injections.ts
// Rand Medical Center — Trigger Point Injections (Service Detail)

import type { SEOMeta, HeroSection, KeyFact, ConditionLink, TreatmentLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Trigger Point Injections in Arlington Heights, IL | Rand Medical Center",
  description: "Trigger point injections in Arlington Heights, IL for tight, painful muscle knots in the neck, shoulders, and back. Quick relief. Call (224) 735-3522.",
  keywords: ["trigger point injections Arlington Heights", "trigger point injections near me", "trigger point injections treatment"],
  canonical: "https://www.randmedicalcenter.com/services/pain-management/trigger-point-injections",
};

export const hero: HeroSection = {
  eyebrow: "Pain Management",
  headline: "Trigger Point Injections in Arlington Heights, IL",
  subheadline: "Trigger point injections in Arlington Heights, IL for tight, painful muscle knots in the neck, shoulders, and back. Quick relief.",
  primaryCTA: { text: "Schedule a Consultation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "What Are Trigger Point Injections?",
  body: "Trigger point injections target painful knots of muscle — called trigger points — that form when muscles stay tight and won't relax. These knots can cause localized pain, referred pain to other areas, and restricted movement. They're common in the neck, shoulders, upper back, and lower back.\n\nDuring the injection, your doctor inserts a thin needle into the trigger point and injects a small amount of local anesthetic, sometimes with a corticosteroid. This relaxes the muscle, improves blood flow, and breaks the pain-spasm cycle. Many patients feel relief within minutes.\n\nTrigger point injections are quick, minimally invasive, and can be performed right in our clinic during a regular office visit.",
  keyFacts: [
    { label: "Procedure Time", value: "15–30 minutes" },
    { label: "Recovery", value: "Resume normal activities in 1–2 days" },
    { label: "Guidance", value: "Fluoroscopy or ultrasound" },
  ] as KeyFact[],
};

export const howItWorks = {
  headline: "How Trigger Point Injections Work",
  body: "Your doctor identifies the trigger point by palpating (feeling) the tight muscle band. A thin needle is inserted directly into the knot and medication is injected. The procedure takes just a few minutes per trigger point. Most patients tolerate it well with only mild discomfort.",
};

export const conditionsTreated = {
  headline: "Conditions Treated",
  conditions: [
    {
        "name": "Myofascial Pain",
        "slug": "myofascial-pain",
        "href": "/conditions/muscle/myofascial-pain"
    },
    {
        "name": "Muscle Spasms",
        "slug": "muscle-spasms",
        "href": "/conditions/muscle/muscle-spasms"
    },
    {
        "name": "Neck Pain",
        "slug": "neck-pain",
        "href": "/conditions/spine/neck-pain"
    },
    {
        "name": "Back Pain",
        "slug": "back-pain",
        "href": "/conditions/spine/back-pain"
    }
] as ConditionLink[],
};

export const benefits = {
  headline: "Benefits of Trigger Point Injections",
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
        "name": "Facet Joint Blocks",
        "slug": "facet-joint-blocks",
        "href": "/services/pain-management/facet-joint-blocks"
    },
    {
        "name": "Physical Therapy",
        "slug": "physical-therapy",
        "href": "/services/physical-therapy"
    }
] as TreatmentLink[],
};

export const ctaSection = {
  headline: "Find Out If Trigger Point Injections Are Right for You",
  body: "Schedule a consultation with our pain management team in Arlington Heights, IL to discuss whether trigger point injections could help with your condition.",
  primaryCTA: { text: "Schedule a Consultation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "How quickly will I feel results?", answer: "Many patients notice some relief from the local anesthetic within hours. The full anti-inflammatory effect of the steroid typically develops over 2–7 days." },
  { question: "Is the procedure painful?", answer: "Most patients describe mild pressure or discomfort during the injection. The area is numbed with local anesthetic beforehand, and sedation options are available if needed." },
  { question: "Does insurance cover this procedure?", answer: "Most health insurance plans and workers' compensation programs cover trigger point injections when medically necessary. Our billing team can verify your coverage before the procedure." },
  { question: "How many treatments will I need?", answer: "It depends on your condition and response. Some patients get significant relief from a single injection, while others benefit from a series of 2–3 over several weeks. Your doctor will recommend a plan based on your specific situation." },
];
