// src/content/pages/about-facility.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Facility Tour Page
// ─────────────────────────────────────────────────────────

import type { SEOMeta, HeroSection, ImageAsset } from "@/types/content";

export const seo: SEOMeta = {
  title: "Facility Tour | Rand Medical Center | Arlington Heights, IL",
  description:
    "Take a virtual tour of Rand Medical Center — exam rooms, diagnostic imaging, physical therapy gym, and outpatient surgery center, all in one Arlington Heights location.",
  canonical: "https://www.randmedicalcenter.com/about/facility-tour",
};

export const hero: HeroSection = {
  eyebrow: "Our Facility",
  headline: "Take a Look Inside Rand Medical Center",
  subheadline:
    "Our Arlington Heights clinic brings together exam rooms, diagnostic imaging, a physical therapy gym, and an outpatient surgery center — so your care stays under one roof.",
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
  headline: "Everything You Need in One Location",
  body: "Rand Medical Center was designed to keep as much of your care as possible under one roof. Our facility features comfortable waiting areas, private exam rooms, on-site diagnostics, a dedicated physical therapy gym, and access to an outpatient surgery center for advanced procedures.\n\nPatients appreciate that they don't have to drive all over the suburbs for imaging, injections, and rehab — most services are available right here in Arlington Heights, IL.",
};

export const facilityAreas = [
  {
    id: "reception",
    name: "Reception and Waiting Areas",
    description:
      "Our welcoming reception area is designed for comfort and efficiency. Check-in is straightforward, and our staff works to minimize wait times, especially for urgent injury visits.",
    image: {
      src: "/images/facility/reception.jpg",
      alt: "Clean, comfortable reception and waiting area at Rand Medical Center",
    },
  },
  {
    id: "exam-rooms",
    name: "Private Exam Rooms",
    description:
      "All consultations and evaluations take place in private exam rooms. Our physicians take time to listen, explain your diagnosis, and answer your questions without rushing.",
    image: {
      src: "/images/facility/exam-room.jpg",
      alt: "Private exam room for patient consultations at Rand Medical Center",
    },
  },
  {
    id: "imaging",
    name: "On-Site Diagnostic Imaging",
    description:
      "Our clinic includes on-site X-ray capabilities for quick evaluation of fractures, joint problems, and spine conditions. When an MRI or advanced imaging is needed, we coordinate referrals and get results quickly.",
    image: {
      src: "/images/facility/imaging.jpg",
      alt: "Diagnostic imaging suite at Rand Medical Center in Arlington Heights",
    },
  },
  {
    id: "procedure-suite",
    name: "Procedure Suite",
    description:
      "Many pain management injections and minor procedures are performed in our dedicated procedure suite, equipped with fluoroscopic guidance for precise, safe treatment.",
    image: {
      src: "/images/facility/procedure-suite.jpg",
      alt: "Pain management procedure suite with fluoroscopy at Rand Medical Center",
    },
  },
  {
    id: "pt-gym",
    name: "Physical Therapy Gym",
    description:
      "Our therapy gym is outfitted with the equipment and space needed for manual therapy, therapeutic exercises, balance training, and sport-specific rehabilitation. Physical therapists work alongside your doctors for seamless coordination.",
    image: {
      src: "/images/facility/pt-gym.jpg",
      alt: "Fully equipped physical therapy gym at Rand Medical Center",
    },
  },
  {
    id: "surgery-center",
    name: "Outpatient Surgery Center",
    description:
      "For patients who need arthroscopic surgery, spinal cord stimulation, or other advanced procedures, our affiliated outpatient surgery center provides a safe, modern environment for same-day procedures.",
    image: {
      src: "/images/facility/surgery-center.jpg",
      alt: "Outpatient surgery center affiliated with Rand Medical Center",
    },
  },
];

export const accessibility = {
  headline: "Accessibility and Convenience",
  items: [
    "Free on-site parking with accessible spaces near the entrance",
    "ADA-compliant facility with wheelchair access throughout",
    "Conveniently located on E Rand Rd in Arlington Heights, IL",
    "Easy access from Route 14, Route 53, and I-90",
    "Minutes from Mount Prospect, Palatine, Des Plaines, and Rolling Meadows",
  ],
};

export const ctaSection = {
  headline: "See Our Facility in Person",
  body: "The best way to experience Rand Medical Center is to visit us. Schedule an appointment or stop by our Arlington Heights clinic — we're happy to show you around.",
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
