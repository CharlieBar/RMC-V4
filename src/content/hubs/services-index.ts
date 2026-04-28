// src/content/hubs/services-index.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — All Services Hub Page
// ─────────────────────────────────────────────────────────

import type { SEOMeta, HeroSection, HubPageContent } from "@/types/content";

export const seo: SEOMeta = {
  title: "Medical Services | Rand Medical Center | Arlington Heights, IL",
  description:
    "Explore all clinical services at Rand Medical Center — pain management, orthopedics, physical therapy, internal medicine, immediate care, injury services, and diagnostics in Arlington Heights, IL.",
  keywords: [
    "medical services Arlington Heights IL",
    "pain management clinic near me",
    "orthopedic care Arlington Heights",
    "physical therapy Arlington Heights",
    "injury doctor northwest Chicago suburbs",
  ],
  canonical: "https://www.randmedicalcenter.com/services",
};

export const hero: HeroSection = {
  eyebrow: "Our Services",
  headline: "Clinical Services at Rand Medical Center",
  subheadline:
    "Multiple specialties working together under one roof — so your care is coordinated, your records stay connected, and your recovery stays on track.",
  primaryCTA: {
    text: "Schedule an Appointment",
    href: "https://www.tebra.com/care/practice/rand-medical-center-456192",
    variant: "primary",
  },
  secondaryCTA: {
    text: "Call (224) 735-3522",
    href: "tel:+12247353522",
    variant: "secondary",
  },
};

export const intro = {
  headline: "Coordinated Care in One Location",
  body: "Rand Medical Center brings together multiple specialties under one roof so you can receive coordinated care in one place. From the moment you walk in, our goal is to understand what happened, how your pain affects your life, and what it will take to help you recover safely.\n\nBrowse our services below to learn how we evaluate, treat, and support patients with injuries and pain.",
};

export const categories = [
  {
    id: "pain-management",
    name: "Pain Management",
    description:
      "Advanced injections, nerve blocks, and minimally invasive procedures to diagnose and treat the source of your pain.",
    icon: "activity",
    items: [
      { name: "Pain Management Overview", slug: "pain-management", href: "/services/pain-management", tagline: "Comprehensive evaluation and interventional pain care" },
      { name: "Epidural Steroid Injections", slug: "epidural-steroid-injections", href: "/services/pain-management/epidural-steroid-injections", tagline: "Targeted spinal nerve inflammation relief" },
      { name: "Facet Joint Blocks", slug: "facet-joint-blocks", href: "/services/pain-management/facet-joint-blocks", tagline: "Diagnosis and treatment of spinal joint pain" },
      { name: "Nerve Blocks", slug: "nerve-blocks", href: "/services/pain-management/nerve-blocks", tagline: "Targeted injections to block pain signals" },
      { name: "Trigger Point Injections", slug: "trigger-point-injections", href: "/services/pain-management/trigger-point-injections", tagline: "Relief for painful muscle knots" },
      { name: "Radiofrequency Ablation", slug: "radiofrequency-ablation", href: "/services/pain-management/radiofrequency-ablation", tagline: "Longer-lasting nerve pain relief" },
      { name: "Joint Injections", slug: "joint-injections", href: "/services/pain-management/joint-injections", tagline: "Corticosteroid injections for knee, hip, and shoulder pain" },
      { name: "Bursa Injections", slug: "bursa-injections", href: "/services/pain-management/bursa-injections", tagline: "Bursitis pain relief" },
      { name: "SI Joint Injections", slug: "sacroiliac-joint-injections", href: "/services/pain-management/sacroiliac-joint-injections", tagline: "Lower back and buttock pain treatment" },
      { name: "Spinal Cord Stimulation", slug: "spinal-cord-stimulation", href: "/services/pain-management/spinal-cord-stimulation", tagline: "Implantable device for chronic nerve pain" },
      { name: "Transforaminal Epidurals", slug: "transforaminal-epidural-injections", href: "/services/pain-management/transforaminal-epidural-injections", tagline: "Targeted nerve root injections" },
      { name: "Selective Nerve Root Blocks", slug: "selective-nerve-root-blocks", href: "/services/pain-management/selective-nerve-root-blocks", tagline: "Single nerve root diagnosis and treatment" },
      { name: "Intercostal Nerve Blocks", slug: "intercostal-nerve-blocks", href: "/services/pain-management/intercostal-nerve-blocks", tagline: "Rib and chest wall pain relief" },
      { name: "Stellate Ganglion Block", slug: "stellate-ganglion-block", href: "/services/pain-management/stellate-ganglion-block", tagline: "Upper body nerve pain treatment" },
    ],
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    description:
      "Bone, joint, and sports injury care — from fractures and arthritis to joint replacement and arthroscopic surgery.",
    icon: "bone",
    items: [
      { name: "Orthopedics Overview", slug: "orthopedics", href: "/services/orthopedics", tagline: "Comprehensive bone and joint care" },
      { name: "Joint Replacement", slug: "joint-replacement", href: "/services/orthopedics/joint-replacement", tagline: "Hip and knee replacement surgery" },
      { name: "Spine Surgery", slug: "spine-surgery", href: "/services/orthopedics/spine-surgery", tagline: "Surgical correction of spine problems" },
      { name: "Fracture Care", slug: "fracture-care", href: "/services/orthopedics/fracture-care", tagline: "Broken bone evaluation and treatment" },
      { name: "Sports Medicine", slug: "sports-medicine", href: "/services/orthopedics/sports-medicine", tagline: "Care for athletic and overuse injuries" },
      { name: "Arthroscopic Surgery", slug: "arthroscopic-surgery", href: "/services/orthopedics/arthroscopic-surgery", tagline: "Minimally invasive joint surgery" },
      { name: "Fracture Clinic", slug: "fracture-clinic", href: "/services/orthopedics/fracture-clinic", tagline: "Dedicated fracture evaluation" },
    ],
  },
  {
    id: "physical-therapy",
    name: "Physical Therapy & Rehabilitation",
    description:
      "Hands-on therapy and exercise programs to rebuild strength, mobility, and confidence after injury or surgery.",
    icon: "dumbbell",
    items: [
      { name: "Physical Therapy Overview", slug: "physical-therapy", href: "/services/physical-therapy", tagline: "Personalized rehabilitation programs" },
      { name: "Orthopedic Rehab", slug: "orthopedic-rehab", href: "/services/physical-therapy/orthopedic-rehab", tagline: "Post-fracture and joint injury therapy" },
      { name: "Work Injury Rehab", slug: "work-injury-rehab", href: "/services/physical-therapy/work-injury-rehab", tagline: "Return-to-work rehabilitation" },
      { name: "Auto Injury Rehab", slug: "auto-injury-rehab", href: "/services/physical-therapy/auto-injury-rehab", tagline: "Whiplash and accident recovery" },
      { name: "Post-Surgical Rehab", slug: "post-surgical-rehab", href: "/services/physical-therapy/post-surgical-rehab", tagline: "Recovery after surgery" },
      { name: "Sports Rehab", slug: "sports-rehab", href: "/services/physical-therapy/sports-rehab", tagline: "Athletic injury recovery" },
      { name: "Balance & Strength", slug: "balance-and-strength-programs", href: "/services/physical-therapy/balance-and-strength-programs", tagline: "Fall prevention and core stability" },
    ],
  },
  {
    id: "internal-medicine",
    name: "Internal Medicine & Primary Care",
    description:
      "Ongoing primary care for adults — checkups, chronic disease management, prevention, and preoperative clearance.",
    icon: "stethoscope",
    items: [
      { name: "Internal Medicine Overview", slug: "internal-medicine", href: "/services/internal-medicine", tagline: "Adult primary care and chronic disease management" },
      { name: "Primary Care", slug: "primary-care", href: "/services/internal-medicine/primary-care", tagline: "Checkups, sick visits, and referrals" },
      { name: "Chronic Disease Management", slug: "chronic-disease-management", href: "/services/internal-medicine/chronic-disease-management", tagline: "Diabetes, high blood pressure, and more" },
      { name: "Annual Physicals", slug: "annual-physicals", href: "/services/internal-medicine/annual-physicals", tagline: "Preventive health screenings" },
      { name: "Preventive Care", slug: "preventive-care", href: "/services/internal-medicine/preventive-care", tagline: "Vaccines, screenings, and wellness" },
      { name: "Preoperative Clearance", slug: "preoperative-clearance", href: "/services/internal-medicine/preoperative-clearance", tagline: "Medical evaluation before surgery" },
    ],
  },
  {
    id: "immediate-care",
    name: "Immediate Care",
    description:
      "Walk-in visits for sudden injuries, acute illness, and urgent work-related incidents that need fast attention.",
    icon: "clock",
    items: [
      { name: "Immediate Care Overview", slug: "immediate-care", href: "/services/immediate-care", tagline: "Walk-in care for urgent needs" },
      { name: "Walk-In Clinic", slug: "walk-in-clinic", href: "/services/immediate-care/walk-in-clinic", tagline: "Same-day visits without appointment" },
      { name: "Minor Injuries", slug: "minor-injuries", href: "/services/immediate-care/minor-injuries", tagline: "Sprains, strains, and simple fractures" },
      { name: "Minor Illnesses", slug: "minor-illnesses", href: "/services/immediate-care/minor-illnesses", tagline: "Colds, flu, and common infections" },
      { name: "Work Injury Immediate Care", slug: "work-injury-urgent-care", href: "/services/immediate-care/work-injury-urgent-care", tagline: "Rapid work injury evaluation" },
      { name: "On-Site Medications", slug: "on-site-medications", href: "/services/immediate-care/on-site-medications", tagline: "Selected medications available on-site" },
    ],
  },
  {
    id: "injury-services",
    name: "Injury Services",
    description:
      "Coordinated medical care, documentation, and rehabilitation for workers' compensation, auto accident, and personal injury cases.",
    icon: "shield",
    items: [
      { name: "Injury Services Overview", slug: "injury-services", href: "/services/injury-services", tagline: "Comprehensive injury care and documentation" },
      { name: "Workers' Compensation", slug: "workers-compensation", href: "/services/injury-services/workers-compensation", tagline: "Work injury care and return-to-work programs" },
      { name: "Motor Vehicle Accidents", slug: "motor-vehicle-accidents", href: "/services/injury-services/motor-vehicle-accidents", tagline: "Auto accident injury treatment" },
      { name: "Personal Injury", slug: "personal-injury", href: "/services/injury-services/personal-injury", tagline: "Slip-and-fall and liability injury care" },
      { name: "Workplace Injuries", slug: "workplace-injuries", href: "/services/injury-services/workplace-injuries", tagline: "On-the-job injury treatment" },
    ],
  },
  {
    id: "diagnostic-surgical",
    name: "Diagnostic & Surgical Services",
    description:
      "On-site imaging, laboratory, and outpatient surgery center for convenient, coordinated diagnostic and procedural care.",
    icon: "scan",
    items: [
      { name: "Diagnostics Overview", slug: "diagnostic-surgical-services", href: "/services/diagnostic-surgical-services", tagline: "Imaging, lab, and surgery center" },
      { name: "Diagnostic Imaging", slug: "diagnostic-imaging", href: "/services/diagnostic-surgical-services/diagnostic-imaging", tagline: "X-rays and advanced imaging" },
      { name: "X-Rays", slug: "x-rays", href: "/services/diagnostic-surgical-services/x-rays", tagline: "On-site bone and joint imaging" },
      { name: "In-House Lab", slug: "in-house-lab", href: "/services/diagnostic-surgical-services/in-house-lab", tagline: "Blood work and basic testing" },
      { name: "Outpatient Surgery Center", slug: "outpatient-surgery-center", href: "/services/diagnostic-surgical-services/outpatient-surgery-center", tagline: "Same-day procedures" },
    ],
  },
];

export const ctaSection = {
  headline: "Not Sure Which Service You Need?",
  body: "That's okay — our team can help. Call us, describe what's going on, and we'll point you to the right specialist. Many patients start with a general evaluation and we guide them from there.",
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
