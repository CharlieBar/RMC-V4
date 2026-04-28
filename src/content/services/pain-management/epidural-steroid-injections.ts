// src/content/services/pain-management/epidural-steroid-injections.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Epidural Steroid Injections (Service Detail)
// ─────────────────────────────────────────────────────────

import type {
  SEOMeta,
  HeroSection,
  KeyFact,
  ConditionLink,
  TreatmentLink,
  ProcessStep,
  FeatureItem,
  FAQItem,
} from "@/types/content";

export const seo: SEOMeta = {
  title: "Epidural Steroid Injections in Arlington Heights, IL | Rand Medical Center",
  description:
    "Targeted epidural steroid injections in Arlington Heights, IL to reduce inflammation and relieve back and leg pain from herniated discs, sciatica, and spinal stenosis. Call (224) 735-3522.",
  keywords: [
    "epidural steroid injection Arlington Heights",
    "epidural injection for back pain",
    "lumbar epidural injection near me",
    "ESI injection for sciatica",
    "spine injection Arlington Heights IL",
  ],
  canonical: "https://www.randmedicalcenter.com/services/pain-management/epidural-steroid-injections",
};

export const hero: HeroSection = {
  eyebrow: "Pain Management",
  headline: "Epidural Steroid Injections in Arlington Heights, IL",
  subheadline:
    "Image-guided injections that deliver anti-inflammatory medication directly to irritated spinal nerves — reducing pain and helping you move more comfortably.",
  primaryCTA: {
    text: "Schedule Your Consultation",
    href: "https://www.tebra.com/care/practice/rand-medical-center-456192",
    variant: "primary",
  },
  secondaryCTA: {
    text: "Call (224) 735-3522",
    href: "tel:+12247353522",
    variant: "secondary",
  },
};

export const overview = {
  headline: "What Are Epidural Steroid Injections?",
  body: "An epidural steroid injection (ESI) delivers a combination of corticosteroid medication and local anesthetic into the epidural space surrounding the spinal cord and nerve roots. The goal is to reduce inflammation around irritated nerves that are causing pain in your back, legs, neck, or arms.\n\nEpidural injections are one of the most commonly performed pain management procedures. They can provide significant relief for patients whose pain has not responded adequately to oral medications, rest, or physical therapy alone.\n\nAt Rand Medical Center, epidural injections are performed using fluoroscopic (X-ray) guidance to ensure precise placement of the medication exactly where it's needed.",
  keyFacts: [
    { label: "Procedure Time", value: "15–30 minutes" },
    { label: "Recovery", value: "Rest day of procedure; most return to normal activity in 1–2 days" },
    { label: "Pain Relief Onset", value: "2–7 days for full effect" },
    { label: "Relief Duration", value: "Weeks to months (varies by patient)" },
    { label: "Anesthesia", value: "Local anesthetic; light sedation available" },
    { label: "Guidance", value: "Fluoroscopy (live X-ray) for precise placement" },
  ] as KeyFact[],
};

export const howItWorks = {
  headline: "How Epidural Steroid Injections Work",
  body: "When a spinal disc herniates, narrows, or degenerates, it can compress or irritate nearby nerve roots. This irritation causes inflammation, which produces the pain, numbness, or tingling you feel in your back, legs, neck, or arms.\n\nAn epidural steroid injection places anti-inflammatory medication directly at the site of nerve irritation. The corticosteroid reduces swelling around the nerve, which decreases pain signals. The local anesthetic provides immediate temporary relief while the steroid takes effect over the following days.\n\nThe procedure is performed with you lying face down on a procedure table. Your doctor uses fluoroscopy (a real-time X-ray) to guide a thin needle to the exact location, then injects a small amount of contrast dye to confirm placement before delivering the medication.",
  steps: [
    {
      step: "01",
      title: "Preparation",
      description:
        "You lie face down on a procedure table. The injection area is cleaned and numbed with a local anesthetic so you stay comfortable throughout.",
    },
    {
      step: "02",
      title: "Needle Placement",
      description:
        "Using fluoroscopic (X-ray) guidance, your doctor advances a thin needle to the epidural space near the affected nerve roots.",
    },
    {
      step: "03",
      title: "Confirmation",
      description:
        "A small amount of contrast dye is injected to confirm the needle is in the correct position before any medication is delivered.",
    },
    {
      step: "04",
      title: "Injection",
      description:
        "The corticosteroid and anesthetic mixture is injected into the epidural space. The entire injection takes only a few minutes.",
    },
    {
      step: "05",
      title: "Recovery",
      description:
        "You rest briefly in our recovery area while we monitor you. Most patients go home the same day with instructions for the next 24–48 hours.",
    },
  ] as ProcessStep[],
};

export const conditionsTreated = {
  headline: "Conditions Treated with Epidural Injections",
  conditions: [
    { name: "Back Pain", slug: "back-pain", href: "/conditions/spine/back-pain" },
    { name: "Sciatica", slug: "sciatica", href: "/conditions/spine/sciatica" },
    { name: "Herniated Disc", slug: "herniated-disc", href: "/conditions/spine/herniated-disc" },
    { name: "Spinal Stenosis", slug: "spinal-stenosis", href: "/conditions/spine/spinal-stenosis" },
    { name: "Degenerative Disc Disease", slug: "degenerative-disc-disease", href: "/conditions/spine/degenerative-disc-disease" },
    { name: "Radiculopathy", slug: "radiculopathy", href: "/conditions/spine/radiculopathy" },
    { name: "Neck Pain", slug: "neck-pain", href: "/conditions/spine/neck-pain" },
  ] as ConditionLink[],
};

export const benefits = {
  headline: "Benefits of Epidural Steroid Injections",
  items: [
    "Delivers anti-inflammatory medication directly to the pain source — more targeted than oral medications",
    "Can provide weeks to months of meaningful pain relief",
    "Minimally invasive with no incisions and a short recovery period",
    "Performed on an outpatient basis — you go home the same day",
    "May reduce or eliminate the need for stronger pain medications",
    "Can improve your ability to participate in physical therapy and daily activities",
    "Helps determine which nerve is causing your pain (diagnostic value)",
    "May help you avoid or delay surgery in some cases",
  ],
};

export const whatToExpect = {
  headline: "What to Expect Before and After Your Injection",
  body: "Before the procedure, your doctor will review your imaging, discuss your symptoms, and explain what to expect. You may be asked to stop certain medications (like blood thinners) for a few days before the injection.\n\nOn the day of the procedure, plan for about 60–90 minutes total at the clinic, including check-in, the procedure itself (15–30 minutes), and a brief recovery period. You'll need someone to drive you home.\n\nAfter the injection, you may feel some numbness or mild soreness at the injection site. Most patients rest for the remainder of that day and return to normal activities within 1–2 days. The full anti-inflammatory effect of the steroid typically develops over 2–7 days.\n\nYour doctor will schedule a follow-up visit to assess your response and determine next steps, which may include additional injections, physical therapy, or other treatments.",
};

export const risks = {
  headline: "Risks and Side Effects",
  body: "Epidural steroid injections are generally considered safe when performed by an experienced physician using image guidance. As with any medical procedure, there are potential risks, including temporary soreness at the injection site, mild headache, temporary increase in pain, and rare complications such as infection or nerve injury. Your doctor will discuss the specific risks and benefits with you before the procedure and answer any questions you have.",
};

export const whyChooseUs = {
  headline: "Why Choose Rand Medical Center for Epidural Injections?",
  features: [
    {
      icon: "target",
      title: "Fluoroscopy-Guided Precision",
      description:
        "Every epidural injection at Rand Medical Center is performed under fluoroscopic guidance for accurate needle placement and optimal results.",
    },
    {
      icon: "award",
      title: "Experienced Pain Specialists",
      description:
        "Our pain management physicians perform hundreds of spinal injections each year and stay current with the latest techniques and evidence.",
    },
    {
      icon: "building",
      title: "On-Site Procedure Suite",
      description:
        "Injections are performed in our clinic's procedure suite or outpatient surgery center — no need to go to a hospital.",
    },
    {
      icon: "refresh-cw",
      title: "Coordinated Follow-Up Care",
      description:
        "After your injection, our physical therapy team is right here to help you rebuild strength and prevent the problem from returning.",
    },
  ] as FeatureItem[],
};

export const relatedTreatments = {
  headline: "Related Pain Management Treatments",
  items: [
    {
      name: "Transforaminal Epidural Injections",
      slug: "transforaminal-epidural-injections",
      href: "/services/pain-management/transforaminal-epidural-injections",
      description: "A more targeted form of epidural injection near a specific nerve root",
    },
    {
      name: "Facet Joint Blocks",
      slug: "facet-joint-blocks",
      href: "/services/pain-management/facet-joint-blocks",
      description: "Injections into spinal joints for arthritis-related back and neck pain",
    },
    {
      name: "Nerve Blocks",
      slug: "nerve-blocks",
      href: "/services/pain-management/nerve-blocks",
      description: "Targeted injections that block pain signals from specific nerves",
    },
    {
      name: "Radiofrequency Ablation",
      slug: "radiofrequency-ablation",
      href: "/services/pain-management/radiofrequency-ablation",
      description: "Longer-lasting relief by gently heating selected pain-signaling nerves",
    },
  ] as TreatmentLink[],
};

export const ctaSection = {
  headline: "Find Out If an Epidural Injection Is Right for You",
  body: "If back pain, leg pain, or sciatica is limiting your ability to work, sleep, or enjoy daily activities, an epidural steroid injection may help. Schedule a consultation with our pain management team in Arlington Heights, IL to discuss your options.",
  primaryCTA: {
    text: "Schedule a Consultation",
    href: "https://www.tebra.com/care/practice/rand-medical-center-456192",
    variant: "primary" as const,
  },
  secondaryCTA: {
    text: "Call (224) 735-3522",
    href: "tel:+12247353522",
    variant: "secondary" as const,
  },
};

export const faqs: FAQItem[] = [
  {
    question: "How many epidural injections can I have?",
    answer:
      "Most pain management guidelines recommend no more than three to four epidural steroid injections per area per year. Your doctor will monitor your response and adjust the treatment plan based on how much relief you experience.",
  },
  {
    question: "Will the injection hurt?",
    answer:
      "Most patients feel mild pressure during the injection, but the area is numbed with local anesthetic beforehand. Some patients describe a brief sensation of pressure or fullness. If you're nervous about the procedure, we can discuss sedation options to help you stay comfortable.",
  },
  {
    question: "How long does the pain relief from an epidural injection last?",
    answer:
      "Relief varies by patient and condition. Some patients experience weeks of relief; others may benefit for several months. The injection also has diagnostic value — if it provides relief, it confirms the nerve source of your pain and helps guide future treatment decisions.",
  },
  {
    question: "Can I go back to work the next day?",
    answer:
      "Most patients can return to desk work and light activities within one to two days. Your doctor may recommend avoiding heavy lifting, bending, or strenuous activity for a short period after the injection.",
  },
  {
    question: "Does insurance cover epidural steroid injections?",
    answer:
      "Most health insurance plans and workers' compensation programs cover epidural steroid injections when medically necessary. Our billing team can help verify your coverage before your procedure.",
  },
];
