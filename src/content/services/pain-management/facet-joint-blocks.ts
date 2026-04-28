// src/content/services/pain-management/facet-joint-blocks.ts
// Rand Medical Center — Facet Joint Blocks (Service Detail)

import type { SEOMeta, HeroSection, KeyFact, ConditionLink, TreatmentLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Facet Joint Injections in Arlington Heights, IL | Rand Medical Center",
  description: "Facet joint injections in Arlington Heights, IL to diagnose and treat arthritis-related neck and back pain. Call (224) 735-3522.",
  keywords: ["facet joint blocks Arlington Heights", "facet joint blocks near me", "facet joint blocks treatment"],
  canonical: "https://www.randmedicalcenter.com/services/pain-management/facet-joint-blocks",
};

export const hero: HeroSection = {
  eyebrow: "Pain Management",
  headline: "Facet Joint Blocks in Arlington Heights, IL",
  subheadline: "Facet joint injections in Arlington Heights, IL to diagnose and treat arthritis-related neck and back pain.",
  primaryCTA: { text: "Schedule a Consultation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "What Are Facet Joint Blocks?",
  body: "Facet joint blocks are diagnostic and therapeutic injections placed into the small joints that connect the vertebrae along your spine. These joints, called facet joints, can become inflamed from arthritis, injury, or normal wear and tear — causing localized back or neck pain that worsens with twisting or bending.\n\nThe injection contains a combination of local anesthetic and corticosteroid medication. The anesthetic provides immediate temporary relief, while the steroid reduces inflammation over the following days. If a facet joint block significantly reduces your pain, it confirms that the facet joint is the source — which helps guide further treatment decisions.\n\nAt Rand Medical Center, facet joint blocks are performed under fluoroscopic guidance to ensure precise needle placement.",
  keyFacts: [
    { label: "Procedure Time", value: "15–30 minutes" },
    { label: "Recovery", value: "Resume normal activities in 1–2 days" },
    { label: "Guidance", value: "Fluoroscopy or ultrasound" },
  ] as KeyFact[],
};

export const howItWorks = {
  headline: "How Facet Joint Blocks Work",
  body: "Your doctor uses live X-ray (fluoroscopy) to guide a thin needle into the facet joint or the nerves that supply it. A small amount of contrast dye confirms correct placement, then the medication is injected. The procedure takes about 15–20 minutes and most patients go home the same day.",
};

export const conditionsTreated = {
  headline: "Conditions Treated",
  conditions: [
    {
        "name": "Back Pain",
        "slug": "back-pain",
        "href": "/conditions/spine/back-pain"
    },
    {
        "name": "Neck Pain",
        "slug": "neck-pain",
        "href": "/conditions/spine/neck-pain"
    },
    {
        "name": "Facet Joint Syndrome",
        "slug": "facet-joint-syndrome",
        "href": "/conditions/spine/facet-syndrome"
    },
    {
        "name": "Degenerative Disc Disease",
        "slug": "degenerative-disc-disease",
        "href": "/conditions/spine/degenerative-disc-disease"
    }
] as ConditionLink[],
};

export const benefits = {
  headline: "Benefits of Facet Joint Blocks",
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
  body: "Facet joint blocks are generally considered safe when performed by an experienced physician using image guidance. As with any medical procedure, there are potential risks, including temporary soreness at the injection site, mild headache, temporary increase in pain, and rare complications such as infection or nerve injury. Your doctor will discuss the specific risks and benefits with you before the procedure.",
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
        "name": "Radiofrequency Ablation",
        "slug": "radiofrequency-ablation",
        "href": "/services/pain-management/radiofrequency-ablation"
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
  headline: "Find Out If Facet Joint Blocks Are Right for You",
  body: "Schedule a consultation with our pain management team in Arlington Heights, IL to discuss whether facet joint blocks could help with your condition.",
  primaryCTA: { text: "Schedule a Consultation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "How quickly will I feel results?", answer: "Many patients notice some relief from the local anesthetic within hours. The full anti-inflammatory effect of the steroid typically develops over 2–7 days." },
  { question: "Is the procedure painful?", answer: "Most patients describe mild pressure or discomfort during the injection. The area is numbed with local anesthetic beforehand, and sedation options are available if needed." },
  { question: "Does insurance cover this procedure?", answer: "Most health insurance plans and workers' compensation programs cover facet joint blocks when medically necessary. Our billing team can verify your coverage before the procedure." },
  { question: "How many treatments will I need?", answer: "It depends on your condition and response. Some patients get significant relief from a single injection, while others benefit from a series of 2–3 over several weeks. Your doctor will recommend a plan based on your specific situation." },
];
