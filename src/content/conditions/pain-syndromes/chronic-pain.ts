// src/content/conditions/pain-syndromes/chronic-pain.ts
// Rand Medical Center — Chronic Pain (Condition Page)

import type { SEOMeta, HeroSection, SymptomItem, CauseItem, ConditionLink, TreatmentLink, ServiceLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Chronic Pain Treatment in Arlington Heights, IL | Rand Medical Center",
  description: "Chronic pain treatment in Arlington Heights, IL. Persistent pain from back injuries, nerve damage, arthritis, and more — treated with a structured, multi-specialty approach. Call (224) 735-3522.",
  keywords: ["chronic pain treatment Arlington Heights", "chronic pain doctor near me", "chronic pain specialist", "pain management clinic northwest suburbs", "long-term pain relief Arlington Heights IL"],
  canonical: "https://www.randmedicalcenter.com/conditions/pain-syndromes/chronic-pain",
};

export const hero: HeroSection = {
  eyebrow: "Pain Syndromes Conditions",
  headline: "Chronic Pain Treatment in Arlington Heights, IL",
  subheadline: "Pain that has lasted more than three months changes how the nervous system processes signals — and requires a different approach than acute pain. Our Arlington Heights specialists build structured, individualized plans to reduce pain and restore function.",
  primaryCTA: { text: "Schedule an Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const definition = {
  headline: "What Is Chronic Pain?",
  body: "Chronic pain is broadly defined as pain that persists beyond three to six months — past the typical healing time for the injury or condition that caused it. It affects an estimated 50 million adults in the United States, representing one of the most prevalent and undertreated health conditions in modern medicine.\n\nChronic pain is fundamentally different from acute pain, and this distinction matters enormously for treatment. Acute pain is a protective alarm signal — it tells the brain that tissue is being damaged and prompts a protective response. Chronic pain, by contrast, is often no longer simply a signal of ongoing tissue damage. Over time, the nervous system undergoes a process called central sensitization: the spinal cord and brain become progressively more reactive to pain signals, amplifying them and lowering the threshold at which they fire. Pain can persist even after the original injury has healed, and in some patients, becomes partially or fully independent of the original structural problem.\n\nThis neurobiological shift means that chronic pain requires a different treatment approach than acute pain. Interventions that worked in the acute phase — rest, immobilization, short-term pain medication — are often counterproductive for chronic pain. Effective chronic pain management typically combines targeted interventional procedures (to address specific structural pain generators), physical rehabilitation (to restore function and recondition the pain-inhibitory systems), and medication management (to modulate the sensitized nervous system).\n\nCommon underlying sources of chronic pain seen at Rand Medical Center include chronic back and neck pain from spinal degeneration, failed surgical outcomes, neuropathic pain from nerve damage, arthritis, fibromyalgia, and complex regional pain syndrome. Many patients come to us after years of inadequate care, having been undertreated or told that nothing more can be done. We take a different view: most patients with chronic pain can achieve meaningful improvement with the right combination of treatments.\n\nAt Rand Medical Center in Arlington Heights, IL, our pain management physicians specialize in building individualized, evidence-based treatment plans for chronic pain — honest about what we can and cannot achieve, but committed to maximizing your quality of life.",
};

export const symptoms = {
  headline: "Common Chronic Pain Symptoms",
  items: [
    { text: "Pain persisting beyond normal healing time", detail: "Pain that continues for three or more months after the expected healing period for an injury or surgery — or that has no clear acute cause — signals that the nervous system has shifted into a chronic pain state. This persistence is the defining feature and should prompt a different treatment approach than continued acute pain management." },
    { text: "Pain that may be constant or intermittent", detail: "Some patients experience unrelenting pain throughout the day; others have significant pain-free intervals punctuated by severe flares triggered by activity, stress, or weather changes. Both patterns reflect the variability of central sensitization and the fluctuating nature of underlying structural pain generators. Characterizing the pattern helps guide treatment decisions." },
    { text: "Fatigue and sleep disturbances", detail: "Chronic pain and sleep disruption form a vicious cycle. Pain interferes with falling and staying asleep; poor sleep lowers pain thresholds and amplifies the pain experience. Clinically significant fatigue, difficulty maintaining sleep, and non-restorative sleep are present in the majority of chronic pain patients and are important treatment targets in their own right." },
    { text: "Mood changes including anxiety or depression", detail: "Comorbid depression and anxiety affect 30–50% of patients with chronic pain, and the relationship is bidirectional — chronic pain increases the risk of depression, and depression amplifies the subjective experience of pain. Addressing mood as part of comprehensive pain treatment is not secondary care; it is essential to achieving meaningful pain reduction." },
    { text: "Reduced activity and social withdrawal", detail: "Pain-related fear of movement (kinesiophobia) leads many chronic pain patients to progressively reduce their activity level, avoid social situations, and withdraw from work and relationships. This deconditioning cycle worsens physical function, increases the pain experience, and deepens depression. Graduated activity restoration is one of the most important treatment goals." },
    { text: "Difficulty concentrating ('brain fog')", detail: "Impaired attention, memory, and cognitive processing — often described as 'brain fog' — are common in chronic pain and are partly attributable to disrupted sleep, mood changes, and the attentional demands of managing constant pain. Some medications used for pain management also contribute to cognitive effects, which should be considered when selecting therapies." }
  ] as SymptomItem[],
};

export const causes = {
  headline: "Common Causes of Chronic Pain",
  items: [
    { text: "Prior injuries that didn't fully resolve", detail: "Work injuries, car accidents, and sports injuries that are inadequately treated — or in which the underlying structural problem was never properly identified — can become sources of ongoing chronic pain. Persistent inflammation, scar tissue formation, and post-traumatic central sensitization all contribute to the transition from acute to chronic pain." },
    { text: "Arthritis and degenerative conditions", detail: "Osteoarthritis, degenerative disc disease, spinal stenosis, and facet joint arthritis are among the most common structural sources of chronic pain. The ongoing mechanical stress and low-grade inflammation from these conditions continuously stimulates pain-signaling pathways, making them a major driver of long-term musculoskeletal pain." },
    { text: "Nerve damage or neuropathy", detail: "Peripheral nerve damage — from diabetes, disc herniation, chemotherapy, or entrapment — produces chronic neuropathic pain that often outlasts the original injury. The damaged nerve fibers fire abnormally and persistently, and the spinal cord pain-processing circuits that handle their input become sensitized over time." },
    { text: "Failed prior surgeries (post-surgical pain syndrome)", detail: "A subset of patients who undergo spinal, joint, or abdominal surgery develop persistent pain that outlasts the expected surgical recovery. This may result from inadequate structural correction, scar tissue nerve entrapment, or central sensitization established before surgery. Specialized pain management — sometimes including spinal cord stimulation — is often needed for this population." },
    { text: "Central sensitization (amplified pain processing)", detail: "In central sensitization, the spinal cord and brain become hypersensitized to pain signals — widening the pain map, lowering pain thresholds, and amplifying the experience of pain independent of ongoing tissue damage. This neuroplastic change underlies fibromyalgia, complex regional pain syndrome, and chronic widespread pain, and requires treatments that target the central nervous system rather than peripheral structures." },
    { text: "Fibromyalgia", detail: "Fibromyalgia is a central sensitization syndrome characterized by widespread musculoskeletal pain, fatigue, sleep disturbances, and cognitive difficulties. It occurs without identifiable structural damage and requires a specific management approach combining medications that modulate central pain processing (duloxetine, pregabalin, low-dose naltrexone) with graded physical activity and sleep improvement." }
  ] as CauseItem[],
};

export const whenToSeeDoctor = {
  headline: "When to See a Doctor",
  body: "See a doctor if your symptoms last more than a few weeks, are getting worse, started after an injury or accident, or are affecting your ability to work and perform daily activities. Our team in Arlington Heights can often see you the same day or next day.",
  redFlags: [
    "New progressive neurological symptoms (weakness, loss of coordination, bowel/bladder changes) alongside chronic pain — requires prompt imaging to rule out structural deterioration",
    "Sudden significant worsening of chronic pain without clear precipitant — new injury, fracture, or infection may be superimposed on the existing condition",
    "Unintentional weight loss, night sweats, or fever accompanying chronic pain — possible systemic disease including malignancy",
    "Chronic pain in a patient on long-term opioid therapy who develops new confusion, respiratory slowing, or extreme sedation — possible medication toxicity requiring immediate evaluation"
  ],
};

export const howWeHelp = {
  headline: "Chronic Pain Treatment at Rand Medical Center",
  body: "At Rand Medical Center, chronic pain management starts with a genuinely thorough evaluation — one that takes the time to understand your full pain history, prior treatments and their outcomes, functional limitations, and quality-of-life impact. Many chronic pain patients have seen multiple providers without adequate resolution. Our goal is to identify what prior care may have missed and build a more targeted, coordinated plan.\n\nInterventional pain management is a core pillar of our approach. Epidural steroid injections, facet joint blocks, selective nerve root blocks, trigger point injections, and sympathetic nerve blocks allow our physicians to deliver treatment precisely to the anatomical source of pain — often providing relief that medications alone cannot. For patients whose pain has not responded adequately to injections and therapy, spinal cord stimulation is a powerful option: an implanted neuromodulation system that interrupts chronic pain signals at the spinal cord level, with excellent outcomes for failed back surgery syndrome, complex regional pain syndrome, and refractory neuropathic pain.\n\nPhysical therapy for chronic pain follows a fundamentally different model than acute injury rehabilitation. Rather than protecting injured tissue, the goal is graduated exposure — progressively increasing movement and load in a structured, supported way that reconditions the pain-modulation systems and rebuilds confidence in the body's ability to move safely. This evidence-based approach, guided by experienced therapists, is one of the most effective long-term treatments for central sensitization.\n\nMedication management for chronic pain is approached with care. We use medications as one tool among many — not the primary strategy — and prescribe them thoughtfully with attention to efficacy, side effects, and long-term safety. For patients already on opioid therapy managed elsewhere, we provide comprehensive and responsible ongoing management when clinically appropriate.",
};

export const treatmentOptions = {
  headline: "Treatment Options",
  treatments: [
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" },
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" },
    { name: "Spinal Cord Stimulation", slug: "spinal-cord-stimulation", href: "/services/pain-management/spinal-cord-stimulation" }
  ] as TreatmentLink[],
};

export const whyChooseUs = {
  headline: "Why Choose Rand Medical Center?",
  features: [
    { icon: "users", title: "Coordinated Multi-Specialty Care", description: "Pain management, orthopedics, PT, and primary care working together under one roof." },
    { icon: "briefcase", title: "Injury Case Expertise", description: "Experienced with workers' comp and personal injury documentation." },
    { icon: "building", title: "On-Site Diagnostics and Treatment", description: "X-rays, procedures, and therapy available without extra trips." },
    { icon: "map-pin", title: "Arlington Heights Location", description: "Serving Mount Prospect, Palatine, Des Plaines, and the northwest Chicago suburbs." },
  ] as FeatureItem[],
};

export const relatedConditions = {
  headline: "Related Conditions",
  conditions: [
    { name: "Back Pain", slug: "back-pain", href: "/conditions/spine/back-pain" },
    { name: "Neuropathy", slug: "neuropathy", href: "/conditions/nerves/neuropathy" },
    { name: "Fibromyalgia", slug: "fibromyalgia", href: "/conditions/muscle/fibromyalgia" },
    { name: "Failed Back Surgery", slug: "failed-back-surgery", href: "/conditions/spine/failed-back-surgery" }
  ] as ConditionLink[],
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" },
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" },
    { name: "Internal Medicine", slug: "internal-medicine", href: "/services/internal-medicine" }
  ] as ServiceLink[],
};

export const relatedBlogPosts = { headline: "Resources", posts: [] };

export const ctaSection = {
  headline: "You Don't Have to Accept Chronic Pain — Expert Care in Arlington Heights",
  body: "If you've been living with persistent pain and haven't found adequate relief, our pain management team at Rand Medical Center in Arlington Heights offers a fresh, thorough evaluation and a more comprehensive treatment approach. Most patients with chronic pain can achieve meaningful improvement. Same-day and next-day appointments available for patients across the northwest Chicago suburbs.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Can chronic pain actually be improved, or is it permanent?", answer: "Most chronic pain patients can achieve meaningful improvement — the goal of treatment is significant reduction in pain intensity and restoration of functional ability, even if complete elimination of pain is not always realistic. Many patients who come to us having lived with poorly controlled chronic pain for years achieve their best outcomes yet with the right combination of interventional procedures, physical rehabilitation, and medication management. The neuroplasticity that enables central sensitization also means the nervous system can be partially recalibrated with the right inputs." },
  { question: "Is spinal cord stimulation right for me?", answer: "Spinal cord stimulation (SCS) is considered for patients with chronic neuropathic pain — particularly failed back surgery syndrome, complex regional pain syndrome, or refractory leg pain from spinal stenosis — who have not achieved adequate relief from injections, therapy, and medications. The process involves a trial stimulation period (typically 5–7 days) before a permanent system is implanted, allowing patients to assess their response before committing. SCS has excellent evidence in appropriately selected patients and can dramatically reduce both pain and medication requirements. Our pain management physicians will evaluate whether you're a candidate." },
  { question: "How do you manage chronic pain without relying on opioids?", answer: "Effective chronic pain management in 2024 is multi-modal, and opioids play a limited role. Our first-line approach combines targeted interventional procedures (injections, blocks, ablation) to address structural pain generators, physical therapy to rebuild function and modulate central sensitization, and non-opioid medications (neuropathic agents, anti-inflammatories, muscle relaxants) appropriately tailored to your diagnosis. For patients already on opioid therapy, we manage it responsibly within clinical guidelines while actively working to reduce reliance through other treatments." },
  { question: "I've seen multiple doctors with no improvement. Can you still help?", answer: "Yes, and this is a common situation we encounter. Patients with chronic pain often come to us after years of fragmented care, inadequate diagnosis, or treatment that addressed symptoms rather than causes. Our team takes a fresh look: reviewing your full history, imaging, prior treatments and responses, and functional status. We often identify missed pain generators, undertreated comorbidities (like sleep disruption or anxiety that amplifies pain), or interventional options that weren't offered. We cannot guarantee outcomes, but we can offer a genuinely thorough re-evaluation and a more coordinated approach." },
];
