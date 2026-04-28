// src/content/services/pain-management/index.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Pain Management (Service Pillar)
// ─────────────────────────────────────────────────────────

import type {
  SEOMeta,
  HeroSection,
  ConditionLink,
  TreatmentLink,
  ServiceLink,
  BlogPostLink,
  ProcessStep,
  FeatureItem,
  FAQItem,
  CTA,
} from "@/types/content";

export const seo: SEOMeta = {
  title: "Pain Management Clinic in Arlington Heights, IL | Rand Medical Center",
  description:
    "Interventional pain management in Arlington Heights, IL — image-guided injections, nerve blocks, and radiofrequency ablation for chronic back, neck, joint, and nerve pain. Call (224) 735-3522.",
  keywords: [
    "pain management clinic Arlington Heights IL",
    "back pain specialist near me",
    "chronic pain treatment Arlington Heights",
    "neck pain doctor Arlington Heights",
    "nerve block injections",
    "pain doctor northwest Chicago suburbs",
  ],
  canonical: "https://www.randmedicalcenter.com/services/pain-management",
};

export const hero: HeroSection = {
  eyebrow: "Pain Management",
  headline: "Pain Management Clinic in Arlington Heights, IL",
  subheadline:
    "Image-guided injections, nerve blocks, and minimally invasive procedures — delivered by interventional pain specialists who treat the source, not just the symptoms, to help you reclaim your daily life.",
  primaryCTA: {
    text: "Schedule a Pain Management Appointment",
    href: "https://www.tebra.com/care/practice/rand-medical-center-456192",
    variant: "primary",
  },
  secondaryCTA: {
    text: "Call (224) 735-3522",
    href: "tel:+12247353522",
    variant: "secondary",
  },
  image: {
    src: "/images/services/pain-management-hero.jpg",
    alt: "Pain management physician consulting with a patient at Rand Medical Center in Arlington Heights",
  },
};

export const intro = {
  headline: "Relief Starts With the Right Diagnosis",
  body: "Living with chronic pain reshapes every corner of your life — the job you can no longer do comfortably, the sleep that won't come, the activities you've quietly given up. At Rand Medical Center in Arlington Heights, IL, our interventional pain management team focuses first on understanding the precise source of your pain, then building a treatment plan that targets it with clinical precision.\n\nOur approach combines detailed diagnostic evaluation with image-guided procedures. For spinal pain, that may mean fluoroscopically guided epidural steroid injections or transforaminal nerve root blocks to reach the exact level of irritation. For facet-mediated pain — common after whiplash or degenerative changes — we use diagnostic medial branch blocks followed by radiofrequency ablation to quiet the nerve signals responsible for your discomfort. Joint pain from arthritis in the knee, hip, or shoulder often responds well to targeted corticosteroid injections or viscosupplementation. Our goal at every stage is not to mask symptoms indefinitely, but to interrupt the pain cycle long enough for healing and rehabilitation to take hold.\n\nBecause our pain management physicians work side by side with orthopedic surgeons and physical therapists in the same Arlington Heights clinic, your care stays tightly coordinated. A pain management procedure can be followed by a physical therapy evaluation the same week. If imaging reveals a structural problem requiring surgical consideration, our orthopedic team is steps away. Whether your pain began after a lifting injury at a warehouse in the northwest suburbs, a rear-end collision on I-90, or years of gradual spinal degeneration, we create a plan calibrated to your specific diagnosis, functional demands, and treatment goals.",
  secondaryImage: { src: "/images/services/pain-management-injection.jpg", alt: "Pain management injection procedure at Rand Medical Center" },
};

export const conditionsTreated = {
  headline: "Conditions We Treat",
  body: "Our pain management team evaluates and treats a wide range of acute and chronic pain conditions, including:",
  conditions: [
    { name: "Back Pain", slug: "back-pain", href: "/conditions/spine/back-pain" },
    { name: "Neck Pain", slug: "neck-pain", href: "/conditions/spine/neck-pain" },
    { name: "Sciatica", slug: "sciatica", href: "/conditions/spine/sciatica" },
    { name: "Herniated Disc", slug: "herniated-disc", href: "/conditions/spine/herniated-disc" },
    { name: "Spinal Stenosis", slug: "spinal-stenosis", href: "/conditions/spine/spinal-stenosis" },
    { name: "Degenerative Disc Disease", slug: "degenerative-disc-disease", href: "/conditions/spine/degenerative-disc-disease" },
    { name: "Facet Joint Syndrome", slug: "facet-syndrome", href: "/conditions/spine/facet-syndrome" },
    { name: "Radiculopathy", slug: "radiculopathy", href: "/conditions/spine/radiculopathy" },
    { name: "Knee Pain", slug: "knee-pain", href: "/conditions/joints/knee-pain" },
    { name: "Shoulder Pain", slug: "shoulder-pain", href: "/conditions/joints/shoulder-pain" },
    { name: "Hip Pain", slug: "hip-pain", href: "/conditions/joints/hip-pain" },
    { name: "Arthritis", slug: "arthritis", href: "/conditions/joints/arthritis" },
    { name: "Neuropathy", slug: "neuropathy", href: "/conditions/nerves/neuropathy" },
    { name: "CRPS", slug: "complex-regional-pain-syndrome", href: "/conditions/nerves/complex-regional-pain-syndrome" },
    { name: "Headaches & Migraines", slug: "headaches", href: "/conditions/other/headaches" },
    { name: "Chronic Pain", slug: "chronic-pain", href: "/conditions/pain-syndromes/chronic-pain" },
    { name: "Failed Back Surgery Syndrome", slug: "failed-back-surgery", href: "/conditions/spine/failed-back-surgery" },
    { name: "Myofascial Pain", slug: "myofascial-pain", href: "/conditions/muscle/myofascial-pain" },
  ] as ConditionLink[],
};

export const treatments = {
  headline: "Pain Management Treatments and Procedures",
  body: "We offer a full range of interventional pain procedures performed in our clinic or outpatient surgery center. Each treatment is selected based on your diagnosis and response to previous care.",
  items: [
    {
      name: "Epidural Steroid Injections",
      slug: "epidural-steroid-injections",
      href: "/services/pain-management/epidural-steroid-injections",
      description: "Image-guided injections to reduce inflammation around irritated spinal nerves",
    },
    {
      name: "Facet Joint Blocks",
      slug: "facet-joint-blocks",
      href: "/services/pain-management/facet-joint-blocks",
      description: "Injections into small spinal joints to diagnose and treat arthritis-related pain",
    },
    {
      name: "Nerve Blocks",
      slug: "nerve-blocks",
      href: "/services/pain-management/nerve-blocks",
      description: "Targeted injections that temporarily block pain signals from specific nerves",
    },
    {
      name: "Trigger Point Injections",
      slug: "trigger-point-injections",
      href: "/services/pain-management/trigger-point-injections",
      description: "Quick injections into tight muscle knots to relax muscles and ease myofascial pain",
    },
    {
      name: "Radiofrequency Ablation",
      slug: "radiofrequency-ablation",
      href: "/services/pain-management/radiofrequency-ablation",
      description: "Minimally invasive procedure using heat to quiet pain-signaling nerves for longer-term relief",
    },
    {
      name: "Joint Injections",
      slug: "joint-injections",
      href: "/services/pain-management/joint-injections",
      description: "Corticosteroid injections directly into painful knee, shoulder, or hip joints",
    },
    {
      name: "Bursa Injections",
      slug: "bursa-injections",
      href: "/services/pain-management/bursa-injections",
      description: "Targeted injections to relieve painful bursitis in the shoulder, hip, or knee",
    },
    {
      name: "Sacroiliac Joint Injections",
      slug: "sacroiliac-joint-injections",
      href: "/services/pain-management/sacroiliac-joint-injections",
      description: "Injections into the SI joint to reduce lower back and buttock pain",
    },
    {
      name: "Spinal Cord Stimulation",
      slug: "spinal-cord-stimulation",
      href: "/services/pain-management/spinal-cord-stimulation",
      description: "Implantable device that delivers gentle electrical pulses to change how pain signals are felt",
    },
    {
      name: "Transforaminal Epidural Injections",
      slug: "transforaminal-epidural-injections",
      href: "/services/pain-management/transforaminal-epidural-injections",
      description: "More targeted epidural injections near a specific irritated nerve root",
    },
    {
      name: "Selective Nerve Root Blocks",
      slug: "selective-nerve-root-blocks",
      href: "/services/pain-management/selective-nerve-root-blocks",
      description: "Diagnostic and therapeutic injections around a single nerve root",
    },
    {
      name: "Intercostal Nerve Blocks",
      slug: "intercostal-nerve-blocks",
      href: "/services/pain-management/intercostal-nerve-blocks",
      description: "Injections along the rib cage to ease chest wall and post-surgical pain",
    },
    {
      name: "Stellate Ganglion Block",
      slug: "stellate-ganglion-block",
      href: "/services/pain-management/stellate-ganglion-block",
      description: "Injection around neck nerves to reduce pain and improve blood flow in the head and upper body",
    },
  ] as TreatmentLink[],
};

export const approach = {
  headline: "Our Approach to Pain Management",
  body: "Pain management at Rand Medical Center starts with listening. We take time to understand your pain — when it started, what makes it worse, how it affects your daily life, and what treatments you've already tried.\n\nFrom there, we build a step-by-step plan that may include imaging, diagnostic injections to pinpoint the pain source, therapeutic procedures to reduce inflammation or block pain signals, and coordinated physical therapy to rebuild strength and mobility.\n\nOur pain management physicians work closely with orthopedic surgeons, physical therapists, and primary care providers in our clinic. This means your care stays coordinated — no repeating your story, no waiting weeks for referrals, no scattered appointments across town.",
  highlights: [
    "Thorough evaluation and imaging when needed",
    "Personalized treatment plans based on your specific diagnosis",
    "Step-by-step approach — conservative treatments first, procedures when appropriate",
    "Close coordination with orthopedics and physical therapy",
    "Focus on restoring function and quality of life, not just masking pain",
  ],
};

export const process = {
  headline: "What to Expect at Your Visit",
  steps: [
    {
      step: "01",
      title: "Evaluation",
      description:
        "Your pain management physician conducts a thorough intake — reviewing your medical history, prior imaging, previous treatments, and current medications. The physical exam assesses your posture, range of motion, neurological signs, and pain patterns. You'll have time to describe how the pain affects your work, sleep, and daily activities so the plan reflects your real functional needs.",
    },
    {
      step: "02",
      title: "Diagnosis",
      description:
        "Based on your exam findings, we may order on-site X-rays, coordinate an MRI, or perform a diagnostic injection to confirm the anatomical source of your pain. Diagnostic precision matters — treating the right target with the right procedure produces meaningfully better outcomes than a trial-and-error approach.",
    },
    {
      step: "03",
      title: "Treatment Plan",
      description:
        "We build a stepwise plan that matches your diagnosis and severity. This typically starts with the least invasive effective option — a targeted injection, nerve block, or combination with physical therapy — and escalates only if the response is insufficient. Every step is explained clearly before we proceed, and you always have the opportunity to ask questions.",
    },
    {
      step: "04",
      title: "Follow-Up and Support",
      description:
        "After each procedure, we schedule a follow-up to assess your response, document your progress, and determine whether additional treatment is warranted. If your condition requires orthopedic evaluation or surgical consultation, we make that coordination happen within our clinic so your timeline isn't disrupted.",
    },
  ] as ProcessStep[],
};

export const whyChooseUs = {
  headline: "Why Choose Rand Medical Center for Pain Management?",
  features: [
    {
      icon: "award",
      title: "Experienced Pain Management Specialists",
      description:
        "Our physicians are fellowship-trained in interventional pain medicine and perform hundreds of image-guided procedures each year — from epidural steroid injections and facet blocks to radiofrequency ablation and spinal cord stimulation. They stay current with evolving techniques and apply evidence-based protocols to each case.",
    },
    {
      icon: "building",
      title: "On-Site Imaging and Procedures",
      description:
        "X-rays, diagnostic tests, and interventional procedures are available right here in Arlington Heights — no need to drive to a separate imaging center or hospital outpatient department. Fluoroscopy-guided procedures are performed in our procedure suite, improving accuracy and shortening your overall care timeline.",
    },
    {
      icon: "users",
      title: "Team-Based Coordinated Care",
      description:
        "Pain management works alongside orthopedics, physical therapy, and primary care in one clinic — your providers communicate directly with each other, not through delayed faxes or fragmented referrals. This means your injection can be paired with a PT plan the same week, or escalated to surgical evaluation without you losing continuity.",
    },
    {
      icon: "briefcase",
      title: "Workers' Comp and Auto Accident Experience",
      description:
        "We understand the documentation, billing, and communication requirements for work injury and personal injury cases. Our team produces the objective, detailed records that workers' comp carriers, IME physicians, and personal injury attorneys rely on — including clear causation narratives and functional limitation assessments.",
    },
    {
      icon: "map-pin",
      title: "Convenient Arlington Heights Location",
      description:
        "Our clinic on Rand Road in Arlington Heights is easily accessible from Mount Prospect, Palatine, Des Plaines, Rolling Meadows, Schaumburg, and the broader northwest Chicago suburbs — a practical alternative to driving into the city for specialty pain care.",
    },
  ] as FeatureItem[],
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    {
      name: "Orthopedics",
      slug: "orthopedics",
      href: "/services/orthopedics",
      description: "Bone, joint, and surgical care for injuries and degenerative conditions",
    },
    {
      name: "Physical Therapy & Rehabilitation",
      slug: "physical-therapy",
      href: "/services/physical-therapy",
      description: "Hands-on therapy and exercise programs to rebuild strength and mobility",
    },
    {
      name: "Injury Services",
      slug: "injury-services",
      href: "/services/injury-services",
      description: "Coordinated care and documentation for work, auto, and personal injuries",
    },
    {
      name: "Immediate Care",
      slug: "immediate-care",
      href: "/services/immediate-care",
      description: "Walk-in visits for sudden injuries and urgent pain episodes",
    },
  ] as ServiceLink[],
};

export const relatedBlogPosts = {
  headline: "Pain Management Resources",
  posts: [
    {
      title: "5 Non-Surgical Treatments for Chronic Back Pain",
      slug: "non-surgical-back-pain-treatments",
      href: "/blog/non-surgical-back-pain-treatments",
      category: "Pain Management",
    },
    {
      title: "Understanding Epidural Steroid Injections: What to Expect",
      slug: "epidural-steroid-injections-guide",
      href: "/blog/epidural-steroid-injections-guide",
      category: "Pain Management",
    },
    {
      title: "When to See a Pain Management Specialist",
      slug: "when-see-pain-management-specialist",
      href: "/blog/when-see-pain-management-specialist",
      category: "Pain Management",
    },
  ] as BlogPostLink[],
};

export const ctaSection = {
  headline: "Schedule a Pain Management Appointment",
  body: "If pain is limiting your work, disrupting your sleep, or keeping you from activities you care about, don't wait to get answers. Our interventional pain management team in Arlington Heights, IL is ready to evaluate your condition thoroughly, explain every option clearly, and build a personalized treatment plan designed around your diagnosis and goals — not a one-size-fits-all protocol. Same-week appointments are often available. Call (224) 735-3522 or schedule online today.",
  primaryCTA: {
    text: "Schedule an Appointment",
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
    question: "What types of pain does a pain management specialist treat?",
    answer:
      "Pain management specialists treat a wide range of conditions including chronic back and neck pain, sciatica, herniated discs, spinal stenosis, facet joint arthritis, radiculopathy, joint pain from osteoarthritis, neuropathy, complex regional pain syndrome (CRPS), myofascial pain, and refractory headaches. If your pain has lasted more than a few weeks, is radiating into your arms or legs, or is significantly limiting your ability to work, sleep, or function, a pain management evaluation is the appropriate next step.",
  },
  {
    question: "Are pain management injections painful?",
    answer:
      "Most patients describe mild discomfort during injections — typically a brief stinging from the local anesthetic, followed by a sense of pressure as the needle is positioned. We use local anesthesia at the skin before every procedure, and for more involved procedures, light sedation is available to keep you comfortable. Most procedures take 10–20 minutes from prep to finish, and the majority of patients return to normal light activities within one to two days.",
  },
  {
    question: "How quickly will I feel results from pain management treatments?",
    answer:
      "Timing varies by procedure and individual response. Some patients notice relief within hours after a nerve block as the anesthetic takes effect. For steroid-based injections such as epidurals or facet blocks, the corticosteroid's anti-inflammatory effect typically builds over three to seven days. Radiofrequency ablation may take two to four weeks to reach its full effect as the targeted nerve fibers lose their ability to transmit pain signals. Your physician will give you a realistic timeline based on your specific treatment.",
  },
  {
    question: "Do you accept workers' compensation for pain management visits?",
    answer:
      "Yes. We regularly treat injured workers under Illinois workers' compensation and handle all required documentation — including initial injury reports, work status notes, functional restrictions, and carrier communication. Our billing team is experienced with WC billing requirements so that coverage delays don't slow down your treatment.",
  },
  {
    question: "Will I need physical therapy along with pain management?",
    answer:
      "In most cases, combining interventional procedures with physical therapy produces the best long-term outcomes. Injections reduce inflammation and pain intensity, creating a therapeutic window in which physical therapy can make meaningful progress on strength, stability, and movement mechanics. At Rand Medical Center in Arlington Heights, pain management and physical therapy share the same building, so your providers can coordinate your plan directly rather than communicating across separate facilities.",
  },
  {
    question: "How do I know if I need pain management instead of surgery?",
    answer:
      "Our team consistently starts with the least invasive effective option. A large proportion of patients with disc herniations, spinal stenosis, facet arthritis, and joint pain achieve meaningful, sustained relief through injections and structured physical therapy without ever needing surgery. If conservative and interventional measures fail to provide adequate relief, our orthopedic surgeons are in the same clinic and can evaluate you for surgical options without requiring you to start over at a new practice.",
  },
];
