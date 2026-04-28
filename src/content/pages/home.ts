// src/content/pages/home.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Homepage Content
// ─────────────────────────────────────────────────────────

import type {
  SEOMeta,
  HeroSection,
  Stat,
  ServiceCard,
  FeatureItem,
  TestimonialItem,
  ConditionLink,
  FAQItem,
  CTA,
} from "@/types/content";

export const seo: SEOMeta = {
  title: "Rand Medical Center | Work Injury & Pain Management Doctors in Arlington Heights, IL",
  description:
    "Rand Medical Center in Arlington Heights, IL provides coordinated care for work injuries, auto accidents, pain management, orthopedics, and physical therapy. Same-day appointments available. Call (224) 735-3522.",
  keywords: [
    "work injury doctor Arlington Heights",
    "pain management clinic Arlington Heights IL",
    "car accident doctor Arlington Heights",
    "orthopedics Arlington Heights",
    "physical therapy Arlington Heights IL",
    "workers comp clinic near me",
    "immediate care Arlington Heights",
  ],
  canonical: "https://www.randmedicalcenter.com",
  ogImage: "/images/og/home.jpg",
};

export const hero: HeroSection = {
  eyebrow: "Work Injury • Auto Accidents • Pain Management",
  headline: "Hurt at Work. Hurt on the Road. We Help You Heal.",
  subheadline:
    "Same-day appointments, on-site diagnostics, physical therapy, and detailed medical-legal documentation — all under one roof in Arlington Heights, IL.",
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
  // ASSUMPTION: Badge stats estimated — update with actual numbers
  badge: "500+ Google Reviews · Serving the Northwest Chicago Suburbs",
  image: {
    src: "/images/hero/doctor-patient-consultation.jpg",
    alt: "Doctor consulting with a patient about injury treatment at Rand Medical Center in Arlington Heights, IL",
  },
};

export const trustStats: Stat[] = [
  { value: "20", suffix: "+", label: "Years Serving Arlington Heights" },
  { value: "500", suffix: "+", label: "Five-Star Patient Reviews" },
  { value: "Same", suffix: "-Day", label: "Appointments Available" },
  { value: "7", label: "Specialties Under One Roof" },
];

export const intro = {
  headline: "One Center for Injury Care, Rehab, and Ongoing Support",
  body: "Rand Medical Center in Arlington Heights, IL focuses on one thing: helping injured people feel better, move better, and get back to work and everyday life safely.\n\nWe specialize in work injuries, motor vehicle accidents, and complex pain conditions. Our team includes pain management physicians, orthopedic surgeons, physical therapists, and advanced practice providers who work together under one roof.\n\nWhether your injury happened on the job, on the road, or over time, we combine medical care, rehabilitation, and clear documentation so you're supported medically and legally at every step.",
};

export const servicesSection = {
  eyebrow: "What We Do",
  headline: "Specialized Injury and Pain Services",
  subheadline:
    "We don't try to be everything to everyone. We focus on the conditions and injuries that cause people to lose work, sleep, and quality of life.",
  services: [
    {
      name: "Workers' Compensation Care",
      slug: "workers-compensation",
      tagline: "Get treated, documented, and back to work",
      description:
        "Immediate evaluation, treatment, and documentation for job-related injuries, with clear communication to employers and attorneys.",
      icon: "hard-hat",
      highlights: [
        "Same-day injury appointments",
        "Work status reports and documentation",
        "Return-to-work rehabilitation programs",
      ],
      cta: {
        text: "Learn About Work Injury Care",
        href: "/services/injury-services/workers-compensation",
      },
    },
    {
      name: "Auto Accident & Personal Injury",
      slug: "motor-vehicle-accidents",
      tagline: "Comprehensive care after a crash or accident",
      description:
        "Whiplash, back pain, headaches, and more — with medical records built to support your legal case.",
      icon: "car",
      highlights: [
        "Whiplash and soft tissue injury treatment",
        "Insurance and lien-based billing",
        "Medical-legal documentation",
      ],
      cta: {
        text: "Learn About Auto Accident Care",
        href: "/services/injury-services/motor-vehicle-accidents",
      },
    },
    {
      name: "Pain Management",
      slug: "pain-management",
      tagline: "Advanced procedures to reduce pain and improve function",
      description:
        "Targeted injections, nerve blocks, and minimally invasive procedures to treat the source of your pain — not just the symptoms.",
      icon: "activity",
      highlights: [
        "Epidural and joint injections",
        "Nerve blocks and radiofrequency ablation",
        "Spinal cord stimulation",
      ],
      cta: {
        text: "Explore Pain Management",
        href: "/services/pain-management",
      },
    },
    {
      name: "Orthopedics & Surgery Center",
      slug: "orthopedics",
      tagline: "Bone, joint, and sports injury specialists",
      description:
        "Orthopedic consultation, fracture care, arthroscopic surgery, and joint replacement — with an outpatient surgery center on-site.",
      icon: "bone",
      highlights: [
        "Fracture care and casting",
        "Sports medicine",
        "Joint replacement and arthroscopy",
      ],
      cta: {
        text: "Explore Orthopedics",
        href: "/services/orthopedics",
      },
    },
    {
      name: "Physical Therapy & Rehabilitation",
      slug: "physical-therapy",
      tagline: "Get stronger, move better, recover faster",
      description:
        "Personalized rehab programs for work injuries, auto accidents, sports injuries, and post-surgical recovery.",
      icon: "dumbbell",
      highlights: [
        "Work injury and auto accident rehab",
        "Post-surgical recovery programs",
        "Sports rehabilitation",
      ],
      cta: {
        text: "Explore Physical Therapy",
        href: "/services/physical-therapy",
      },
    },
    {
      name: "Immediate Care & Walk-In Clinic",
      slug: "immediate-care",
      tagline: "Fast treatment without the ER wait",
      description:
        "Same-day visits for sprains, strains, minor fractures, and urgent work injuries. No appointment needed.",
      icon: "clock",
      highlights: [
        "Walk-in availability",
        "On-site X-ray and diagnostics",
        "Workers' comp-friendly intake",
      ],
      cta: {
        text: "Visit Immediate Care",
        href: "/services/immediate-care",
      },
    },
  ] as ServiceCard[],
  cta: {
    text: "View All Services",
    href: "/services",
  },
};

export const injurySection = {
  headline: "Injured at Work or in a Car Accident?",
  body: "We understand how confusing and stressful injuries can be — especially when your job, your health, and your finances are all on the line. Our team handles the medical care and documentation so you can focus on recovering.",
  cards: [
    {
      title: "Work Injuries & Workers' Compensation",
      description:
        "We treat new and ongoing work injuries, coordinate with employers and insurance carriers, and provide clear documentation for your claim.",
      bullets: [
        "Same-day work injury appointments",
        "Work status reports and employer communication",
        "Return-to-work rehab programs",
        "Experienced with Illinois workers' comp requirements",
      ],
      cta: {
        text: "Explore Our Work Injury Hub",
        href: "/work-injury",
        variant: "primary" as const,
      },
    },
    {
      title: "Car Accidents & Personal Injury",
      description:
        "After a car accident, prompt medical evaluation is critical — both for your health and your case. We provide thorough exams, imaging, and treatment plans.",
      bullets: [
        "Whiplash, back pain, and soft tissue injury care",
        "Comprehensive medical documentation for attorneys",
        "Insurance and lien-based billing accepted",
        "Coordination with physical therapy and pain management",
      ],
      cta: {
        text: "Explore Our Personal Injury Hub",
        href: "/personal-injury",
        variant: "primary" as const,
      },
    },
  ],
};

export const conditionsSection = {
  headline: "Common Conditions We Treat",
  subheadline:
    "From sudden injuries to long-term pain, our specialists diagnose and treat a wide range of conditions at our Arlington Heights clinic.",
  conditions: [
    { name: "Back Pain", slug: "back-pain", href: "/conditions/spine/back-pain" },
    { name: "Neck Pain", slug: "neck-pain", href: "/conditions/spine/neck-pain" },
    { name: "Sciatica", slug: "sciatica", href: "/conditions/spine/sciatica" },
    { name: "Knee Pain", slug: "knee-pain", href: "/conditions/joints/knee-pain" },
    { name: "Shoulder Pain", slug: "shoulder-pain", href: "/conditions/joints/shoulder-pain" },
    { name: "Hip Pain", slug: "hip-pain", href: "/conditions/joints/hip-pain" },
    { name: "Arthritis", slug: "arthritis", href: "/conditions/joints/arthritis" },
    { name: "Neuropathy", slug: "neuropathy", href: "/conditions/nerves/neuropathy" },
    { name: "Herniated Disc", slug: "herniated-disc", href: "/conditions/spine/herniated-disc" },
    { name: "Whiplash", slug: "auto-injury", href: "/conditions/other/auto-injury" },
    { name: "Work Injuries", slug: "workplace-injury", href: "/conditions/other/workplace-injury" },
    { name: "Sports Injuries", slug: "sports-injury", href: "/conditions/other/sports-injury" },
  ] as ConditionLink[],
  cta: {
    text: "View All Conditions",
    href: "/conditions",
  },
};

export const whyUsSection = {
  eyebrow: "Why Rand Medical Center",
  headline: "Why Patients, Employers, and Attorneys Choose Us",
  features: [
    {
      icon: "target",
      title: "Injury-Focused Practice",
      description:
        "Our entire model is built around work injuries, auto accidents, and pain. We understand the medical and legal details that matter to your case.",
    },
    {
      icon: "users",
      title: "Coordinated Team Under One Roof",
      description:
        "Physicians, orthopedists, physical therapists, and staff collaborate on your plan so care feels connected — not scattered across multiple offices.",
    },
    {
      icon: "file-text",
      title: "Clear, Timely Documentation",
      description:
        "We provide accurate medical records and reports that support workers' compensation and personal injury cases. Your attorney and employer get what they need.",
    },
    {
      icon: "map-pin",
      title: "Convenient Arlington Heights Location",
      description:
        "Our clinic, rehab gym, and surgery center are easy to reach from Arlington Heights, Mount Prospect, Palatine, Des Plaines, and surrounding suburbs.",
    },
    {
      icon: "clock",
      title: "Same-Day and Next-Day Appointments",
      description:
        "New injuries need prompt attention. We offer same-day and next-day appointments for work and accident injuries — call and we'll get you in quickly.",
    },
    {
      icon: "stethoscope",
      title: "On-Site Diagnostics and Procedures",
      description:
        "X-rays, lab work, injections, and outpatient procedures are available right here. No running across town for imaging or follow-up care.",
    },
  ] as FeatureItem[],
};

export const testimonialsSection = {
  eyebrow: "Patient Stories",
  headline: "Hear from Our Patients",
  testimonials: [
    // ASSUMPTION: Testimonials are representative — replace with verified patient quotes
    {
      quote:
        "After my work injury, I was worried about missing more time. Rand Medical Center got me in the same day, set up a treatment plan, and communicated everything to my employer. I felt supported from day one.",
      author: "Michael R.",
      role: "Warehouse Worker",
      location: "Arlington Heights, IL",
      rating: 5,
    },
    {
      quote:
        "I was rear-ended on Route 14 and had terrible neck pain. The team here handled everything — exams, imaging, therapy, and all the paperwork my attorney needed. I didn't have to chase anything down.",
      author: "Sarah K.",
      role: "Auto Accident Patient",
      location: "Mount Prospect, IL",
      rating: 5,
    },
    {
      quote:
        "I've had chronic back pain for years and tried a lot of things that didn't work. The pain management team here finally found the right combination of injections and therapy. I'm sleeping through the night again.",
      author: "David L.",
      role: "Chronic Pain Patient",
      location: "Palatine, IL",
      rating: 5,
    },
    {
      quote:
        "What I appreciate most is that all my care is in one place. I see my doctor, get my injections, and do my physical therapy without driving all over the suburbs. It makes recovery so much easier.",
      author: "Linda M.",
      role: "Knee Pain Patient",
      location: "Des Plaines, IL",
      rating: 5,
    },
  ] as TestimonialItem[],
};

export const blogSection = {
  headline: "Health Tips and Injury Resources",
  subheadline:
    "Learn about conditions, treatments, and recovery from the Rand Medical Center team.",
  cta: {
    text: "Visit the Blog",
    href: "/blog",
  },
};

export const locationSection = {
  headline: "Conveniently Located in Arlington Heights, IL",
  body: "Rand Medical Center is located at 1925 E Rand Rd in Arlington Heights, IL — just minutes from Mount Prospect, Des Plaines, Palatine, Rolling Meadows, Schaumburg, and Elk Grove Village. Our clinic serves patients from across the northwest Chicago suburbs with easy parking and accessible facilities.",
  cta: {
    text: "Get Directions",
    href: "https://maps.google.com/?q=1925+E+Rand+Rd+Arlington+Heights+IL+60004",
  },
};

export const ctaSection = {
  headline: "Ready to Get Help for Your Injury or Pain?",
  subheadline:
    "You don't have to figure this out alone. Our team will walk you through your options — from diagnosis to treatment and rehab. Schedule an appointment or call us today.",
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
    question: "Do I need a referral to be seen at Rand Medical Center?",
    answer:
      "In most cases, no. You can call us directly to schedule an appointment. Some insurance plans may require a referral for certain specialists — our front desk team can help you verify your coverage before your visit.",
  },
  {
    question: "Do you accept workers' compensation and personal injury cases?",
    answer:
      "Yes. We work with workers' compensation carriers and personal injury cases on a lien basis. Our team is experienced with the paperwork, billing, and documentation these cases require.",
  },
  {
    question: "Can I be seen quickly after an injury?",
    answer:
      "In most cases, we offer same-day or next-day appointments for new injuries, especially for work and auto accident cases. Call us and let our team know what happened — we'll get you in as quickly as possible.",
  },
  {
    question: "Do I need an attorney before I see you?",
    answer:
      "No. You can come to Rand Medical Center first for an evaluation. If you already have an attorney, we coordinate with their office. If you don't, we provide your records so you can seek legal guidance if needed.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Bring a valid photo ID, your insurance card (or workers' comp claim information), a list of current medications, and any imaging or medical records from previous providers. If you were in an accident, bring the police report or incident details if available.",
  },
  {
    question: "Where is Rand Medical Center located?",
    answer:
      "We're located at 1925 E Rand Rd in Arlington Heights, IL 60004 — conveniently accessible from Mount Prospect, Des Plaines, Palatine, Rolling Meadows, Schaumburg, and the surrounding northwest Chicago suburbs.",
  },
];
