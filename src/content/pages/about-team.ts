// src/content/pages/about-team.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Our Team Page
// ─────────────────────────────────────────────────────────

import type { SEOMeta, HeroSection, TeamMember } from "@/types/content";

export const seo: SEOMeta = {
  title: "Our Medical Team | Doctors & Specialists | Rand Medical Center",
  description:
    "Meet the physicians, surgeons, therapists, and staff at Rand Medical Center in Arlington Heights, IL — experienced specialists in pain management, orthopedics, and rehabilitation.",
  keywords: [
    "Rand Medical Center doctors",
    "pain management doctor Arlington Heights",
    "orthopedic surgeon Arlington Heights IL",
    "physical therapist Arlington Heights",
  ],
  canonical: "https://www.randmedicalcenter.com/about/our-team",
};

export const hero: HeroSection = {
  eyebrow: "Our Team",
  headline: "Meet the Rand Medical Center Team",
  subheadline:
    "Experienced physicians, surgeons, therapists, and staff working together to provide coordinated injury and pain care in Arlington Heights, IL.",
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
  headline: "A Team That Works Together — For You",
  body: "At Rand Medical Center, your care doesn't depend on a single provider. Our team of pain management physicians, orthopedic surgeons, physical therapists, and advanced practice providers collaborate on treatment plans, share information in real time, and coordinate your visits so that every appointment moves you closer to recovery.\n\nThis coordinated approach is especially important for complex cases — work injuries, auto accident injuries, and chronic pain conditions that involve multiple specialties. When your providers are in the same building and communicate directly, care is faster, more consistent, and more effective.",
};

export const departments = [
  {
    name: "Pain Management",
    description:
      "Our pain management physicians specialize in diagnosing the source of acute and chronic pain and using interventional procedures — injections, nerve blocks, and advanced techniques — to reduce pain and improve function.",
  },
  {
    name: "Orthopedics",
    description:
      "Our orthopedic team evaluates and treats bone, joint, and soft tissue injuries, including fractures, arthritis, sports injuries, and conditions requiring surgical intervention.",
  },
  {
    name: "Physical Therapy & Rehabilitation",
    description:
      "Our physical therapists design personalized rehab programs for work injuries, auto accidents, post-surgical recovery, and chronic pain. They work closely with our physicians to align therapy with your overall treatment plan.",
  },
  {
    name: "Internal Medicine & Primary Care",
    description:
      "Our internal medicine team provides primary care, chronic disease management, preventive screenings, and preoperative medical clearance for patients who need it.",
  },
  {
    name: "Immediate Care",
    description:
      "Our immediate care team handles walk-in visits for sudden injuries, acute pain episodes, and urgent work-related incidents that need prompt attention.",
  },
];

// ASSUMPTION: Individual provider names, bios, and credentials not provided.
// Replace these placeholder entries with actual provider information.
export const team: TeamMember[] = [
  {
    name: "Provider Name, MD",
    role: "Pain Management Physician",
    credentials: "Board-Certified in Pain Medicine",
    bio: "Specializes in interventional pain procedures including epidural injections, nerve blocks, radiofrequency ablation, and spinal cord stimulation. Experienced in treating work injuries and auto accident pain.",
    specialties: ["Spine Pain", "Joint Injections", "Nerve Blocks", "Workers' Comp Cases"],
    image: {
      src: "/images/team/pain-management-physician.jpg",
      alt: "Pain management physician at Rand Medical Center",
    },
  },
  {
    name: "Provider Name, MD",
    role: "Orthopedic Surgeon",
    credentials: "Board-Certified in Orthopedic Surgery",
    bio: "Provides orthopedic consultation, fracture care, arthroscopic surgery, and joint replacement. Experienced in managing sports injuries and complex musculoskeletal conditions.",
    specialties: ["Fracture Care", "Joint Replacement", "Sports Medicine", "Arthroscopy"],
    image: {
      src: "/images/team/orthopedic-surgeon.jpg",
      alt: "Orthopedic surgeon at Rand Medical Center",
    },
  },
  {
    name: "Provider Name, DPT",
    role: "Physical Therapist",
    credentials: "Doctor of Physical Therapy",
    bio: "Designs and leads rehabilitation programs for work injuries, auto accidents, post-surgical recovery, and chronic pain. Focuses on functional restoration and safe return to work and daily activities.",
    specialties: ["Work Injury Rehab", "Post-Surgical Recovery", "Sports Rehabilitation", "Manual Therapy"],
    image: {
      src: "/images/team/physical-therapist.jpg",
      alt: "Physical therapist at Rand Medical Center",
    },
  },
  {
    name: "Provider Name, MD",
    role: "Internal Medicine Physician",
    credentials: "Board-Certified in Internal Medicine",
    bio: "Provides primary care, chronic disease management, preventive medicine, and preoperative clearance. Coordinates with the pain management and orthopedic teams to support whole-patient care.",
    specialties: ["Primary Care", "Chronic Disease Management", "Preventive Care", "Preoperative Clearance"],
    image: {
      src: "/images/team/internal-medicine-physician.jpg",
      alt: "Internal medicine physician at Rand Medical Center",
    },
  },
];

export const ctaSection = {
  headline: "Schedule With Our Team",
  body: "Our providers are accepting new patients for pain management, orthopedics, physical therapy, internal medicine, and immediate care. Call us or schedule online — we look forward to helping you feel better.",
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
