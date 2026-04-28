// src/content/services/pain-management/intercostal-nerve-blocks.ts
// Rand Medical Center — Intercostal Nerve Blocks (Service Detail)

import type { SEOMeta, HeroSection, KeyFact, ConditionLink, TreatmentLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Intercostal Nerve Blocks in Arlington Heights, IL | Rand Medical Center",
  description: "Intercostal nerve blocks in Arlington Heights, IL for rib and chest wall pain after injury or surgery. Call (224) 735-3522.",
  keywords: ["intercostal nerve blocks Arlington Heights", "intercostal nerve blocks near me", "intercostal nerve blocks treatment"],
  canonical: "https://www.randmedicalcenter.com/services/pain-management/intercostal-nerve-blocks",
};

export const hero: HeroSection = {
  eyebrow: "Pain Management",
  headline: "Intercostal Nerve Blocks in Arlington Heights, IL",
  subheadline: "Intercostal nerve blocks in Arlington Heights, IL for rib and chest wall pain after injury or surgery.",
  primaryCTA: { text: "Schedule a Consultation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "What Are Intercostal Nerve Blocks?",
  body: "Intercostal nerve blocks target the nerves that run along the underside of each rib. These nerves can become irritated or inflamed after rib fractures, chest surgery, shingles, or trauma to the chest wall — causing sharp, burning, or aching pain that wraps around the side of the body.\n\nThe injection delivers a local anesthetic and corticosteroid near the affected intercostal nerve to block pain transmission and reduce inflammation. Relief can be rapid and may last days to weeks.\n\nIntercostal nerve blocks are performed in our clinic with fluoroscopic or ultrasound guidance.",
  keyFacts: [
    { label: "Procedure Time", value: "15–30 minutes" },
    { label: "Recovery", value: "Resume normal activities in 1–2 days" },
    { label: "Guidance", value: "Fluoroscopy or ultrasound" },
  ] as KeyFact[],
};

export const howItWorks = {
  headline: "How Intercostal Nerve Blocks Work",
  body: "Your doctor identifies the affected nerve level based on your pain pattern. Using image guidance, a thin needle is advanced to the intercostal nerve. After confirming position, medication is injected. The procedure takes about 10–15 minutes per level treated.",
};

export const conditionsTreated = {
  headline: "Conditions Treated",
  conditions: [
    {
        "name": "Chest Pain",
        "slug": "chest-pain",
        "href": "/conditions/other/chest-pain"
    },
    {
        "name": "Post-Operative Pain",
        "slug": "post-operative-pain",
        "href": "/conditions/pain-syndromes/post-operative-pain"
    }
] as ConditionLink[],
};

export const benefits = {
  headline: "Benefits of Intercostal Nerve Blocks",
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
        "name": "Trigger Point Injections",
        "slug": "trigger-point-injections",
        "href": "/services/pain-management/trigger-point-injections"
    },
    {
        "name": "Epidural Steroid Injections",
        "slug": "epidural-steroid-injections",
        "href": "/services/pain-management/epidural-steroid-injections"
    }
] as TreatmentLink[],
};

export const ctaSection = {
  headline: "Find Out If Intercostal Nerve Blocks Are Right for You",
  body: "Schedule a consultation with our pain management team in Arlington Heights, IL to discuss whether intercostal nerve blocks could help with your condition.",
  primaryCTA: { text: "Schedule a Consultation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "How quickly will I feel results?", answer: "Many patients notice some relief from the local anesthetic within hours. The full anti-inflammatory effect of the steroid typically develops over 2–7 days." },
  { question: "Is the procedure painful?", answer: "Most patients describe mild pressure or discomfort during the injection. The area is numbed with local anesthetic beforehand, and sedation options are available if needed." },
  { question: "Does insurance cover this procedure?", answer: "Most health insurance plans and workers' compensation programs cover intercostal nerve blocks when medically necessary. Our billing team can verify your coverage before the procedure." },
  { question: "How many treatments will I need?", answer: "It depends on your condition and response. Some patients get significant relief from a single injection, while others benefit from a series of 2–3 over several weeks. Your doctor will recommend a plan based on your specific situation." },
];
