// src/content/services/pain-management/joint-injections.ts
// Rand Medical Center — Joint Injections (Service Detail)

import type { SEOMeta, HeroSection, KeyFact, ConditionLink, TreatmentLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Joint Injections in Arlington Heights, IL | Rand Medical Center",
  description: "Knee, shoulder, hip, and other joint injections in Arlington Heights, IL to reduce arthritis and injury-related pain and swelling. Call (224) 735-3522.",
  keywords: ["joint injections Arlington Heights", "joint injections near me", "joint injections treatment"],
  canonical: "https://www.randmedicalcenter.com/services/pain-management/joint-injections",
};

export const hero: HeroSection = {
  eyebrow: "Pain Management",
  headline: "Joint Injections in Arlington Heights, IL",
  subheadline: "Knee, shoulder, hip, and other joint injections in Arlington Heights, IL to reduce arthritis and injury-related pain and swelling.",
  primaryCTA: { text: "Schedule a Consultation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const overview = {
  headline: "What Are Joint Injections?",
  body: "Joint injections deliver corticosteroid or other anti-inflammatory medication directly into a painful joint — typically the knee, shoulder, hip, or ankle. The medication reduces inflammation inside the joint, which decreases pain, swelling, and stiffness.\n\nJoint injections are commonly used for arthritis, bursitis, and joint injuries that haven't responded adequately to oral medications and physical therapy. They can provide meaningful relief lasting weeks to months and can be repeated periodically as needed.\n\nAt Rand Medical Center, joint injections may be performed with or without ultrasound guidance, depending on the joint and clinical situation.",
  keyFacts: [
    { label: "Procedure Time", value: "15–30 minutes" },
    { label: "Recovery", value: "Resume normal activities in 1–2 days" },
    { label: "Guidance", value: "Fluoroscopy or ultrasound" },
  ] as KeyFact[],
};

export const howItWorks = {
  headline: "How Joint Injections Work",
  body: "Your doctor cleans the injection site and may use ultrasound to visualize the joint. A thin needle is inserted into the joint space and medication is injected. The procedure takes just a few minutes. You may feel pressure but significant pain is uncommon.",
};

export const conditionsTreated = {
  headline: "Conditions Treated",
  conditions: [
    {
        "name": "Knee Pain",
        "slug": "knee-pain",
        "href": "/conditions/joints/knee-pain"
    },
    {
        "name": "Hip Pain",
        "slug": "hip-pain",
        "href": "/conditions/joints/hip-pain"
    },
    {
        "name": "Shoulder Pain",
        "slug": "shoulder-pain",
        "href": "/conditions/joints/shoulder-pain"
    },
    {
        "name": "Arthritis",
        "slug": "arthritis",
        "href": "/conditions/joints/arthritis"
    },
    {
        "name": "Osteoarthritis",
        "slug": "osteoarthritis",
        "href": "/conditions/joints/osteoarthritis"
    }
] as ConditionLink[],
};

export const benefits = {
  headline: "Benefits of Joint Injections",
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
        "name": "Bursa Injections",
        "slug": "bursa-injections",
        "href": "/services/pain-management/bursa-injections"
    },
    {
        "name": "Physical Therapy",
        "slug": "physical-therapy",
        "href": "/services/physical-therapy"
    },
    {
        "name": "Radiofrequency Ablation",
        "slug": "radiofrequency-ablation",
        "href": "/services/pain-management/radiofrequency-ablation"
    }
] as TreatmentLink[],
};

export const ctaSection = {
  headline: "Find Out If Joint Injections Are Right for You",
  body: "Schedule a consultation with our pain management team in Arlington Heights, IL to discuss whether joint injections could help with your condition.",
  primaryCTA: { text: "Schedule a Consultation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "How quickly will I feel results?", answer: "Many patients notice some relief from the local anesthetic within hours. The full anti-inflammatory effect of the steroid typically develops over 2–7 days." },
  { question: "Is the procedure painful?", answer: "Most patients describe mild pressure or discomfort during the injection. The area is numbed with local anesthetic beforehand, and sedation options are available if needed." },
  { question: "Does insurance cover this procedure?", answer: "Most health insurance plans and workers' compensation programs cover joint injections when medically necessary. Our billing team can verify your coverage before the procedure." },
  { question: "How many treatments will I need?", answer: "It depends on your condition and response. Some patients get significant relief from a single injection, while others benefit from a series of 2–3 over several weeks. Your doctor will recommend a plan based on your specific situation." },
];
