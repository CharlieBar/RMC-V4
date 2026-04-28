// src/content/pages/faq.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Frequently Asked Questions
// ─────────────────────────────────────────────────────────

import type { SEOMeta, HeroSection, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Frequently Asked Questions | Rand Medical Center | Arlington Heights, IL",
  description:
    "Answers to common questions about appointments, services, insurance, workers' comp, and what to expect at Rand Medical Center in Arlington Heights, IL.",
  keywords: ["Rand Medical Center FAQ", "Arlington Heights injury clinic questions", "workers comp doctor FAQ"],
  canonical: "https://www.randmedicalcenter.com/patient-resources/faq",
};

export const hero: HeroSection = {
  eyebrow: "Patient Resources",
  headline: "Frequently Asked Questions",
  subheadline: "Answers to the most common questions from patients, employers, and attorneys about our services, scheduling, and billing.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const faqCategories = [
  {
    category: "Appointments and Scheduling",
    faqs: [
      { question: "Do I need a referral to be seen?", answer: "In most cases, no. You can call us directly to schedule. Some insurance plans require a referral for specialist visits — our team can check for you before your appointment." },
      { question: "How quickly can I get an appointment?", answer: "For new injuries — especially work injuries and auto accidents — we offer same-day or next-day appointments in most cases. For routine visits, we typically schedule within a few days." },
      { question: "Do you accept walk-in patients?", answer: "Yes. Our immediate care clinic accepts walk-ins for urgent injuries and illnesses during regular hours. For specialist visits (pain management, orthopedics), scheduling ahead is recommended." },
      { question: "What are your office hours?", answer: "We're open Monday through Friday, 8:00 AM to 5:00 PM. Saturday hours may be available by appointment. Call (224) 735-3522 to check availability." },
      { question: "Where are you located?", answer: "Rand Medical Center is at 1925 E Rand Rd, Arlington Heights, IL 60004 — convenient to Mount Prospect, Des Plaines, Palatine, Rolling Meadows, Schaumburg, and the surrounding suburbs." },
    ] as FAQItem[],
  },
  {
    category: "Insurance and Billing",
    faqs: [
      { question: "What insurance do you accept?", answer: "We accept most major health insurance plans, Medicare, select Medicaid plans, all workers' compensation carriers, and personal injury cases on a lien basis. Call to verify your specific plan." },
      { question: "Will I owe a copay?", answer: "Copays depend on your insurance plan. Workers' compensation visits typically have no copay. Our team will inform you of expected costs before your visit." },
      { question: "Do you handle workers' comp billing?", answer: "Yes. We bill workers' compensation carriers directly. You should not receive a bill for covered work injury treatment." },
      { question: "Can I be seen without insurance?", answer: "Yes. Contact our billing office to discuss self-pay pricing and payment arrangements." },
    ] as FAQItem[],
  },
  {
    category: "Workers' Compensation",
    faqs: [
      { question: "Can I choose my own workers' comp doctor?", answer: "Yes. In Illinois, you have the right to choose your own treating physician. You can call us directly to schedule your evaluation." },
      { question: "What should I bring for a work injury visit?", answer: "Your employer's name and contact information, workers' comp claim number (if assigned), details about how the injury happened, photo ID, and any prior imaging or medical records." },
      { question: "Will you communicate with my employer?", answer: "Yes. We provide work status reports, communicate with case managers, and produce documentation throughout your treatment." },
      { question: "Do you help with return-to-work planning?", answer: "Yes. We provide work restrictions, modified duty recommendations, and structured return-to-work programs coordinated with your physical therapy." },
    ] as FAQItem[],
  },
  {
    category: "Auto Accidents and Personal Injury",
    faqs: [
      { question: "Do I need an attorney before I can see you?", answer: "No. You can be evaluated and start treatment before consulting an attorney. We'll provide records that you or your attorney can use later." },
      { question: "How will treatment be paid for?", answer: "For qualified cases, we can work on a lien basis (payment deferred until case resolution). We also accept auto insurance MedPay and health insurance." },
      { question: "How soon after an accident should I be seen?", answer: "As soon as possible. Many accident injuries worsen over the first 24–72 hours, and early documentation strengthens your case." },
      { question: "Do you work with attorneys?", answer: "Yes. We coordinate regularly with personal injury and workers' compensation attorneys, providing records, narrative reports, and deposition support." },
    ] as FAQItem[],
  },
  {
    category: "Services and Treatment",
    faqs: [
      { question: "What services does Rand Medical Center offer?", answer: "We offer pain management, orthopedics, physical therapy, internal medicine and primary care, immediate care, injury services (workers' comp, auto, personal injury), and diagnostic and surgical services — all under one roof." },
      { question: "Do I need surgery for my condition?", answer: "Most conditions we treat respond to non-surgical options — physical therapy, injections, medication, and lifestyle changes. Surgery is recommended only when conservative treatments haven't provided adequate relief." },
      { question: "Will I need imaging (X-ray or MRI)?", answer: "Not always. Your doctor will determine whether imaging is needed based on your symptoms and exam. X-rays are available on-site. MRI is coordinated with nearby imaging centers when needed." },
      { question: "How long is a typical appointment?", answer: "First visits typically take 45–60 minutes. Follow-up appointments are usually 15–30 minutes. Physical therapy sessions are 45–60 minutes." },
    ] as FAQItem[],
  },
];

export const ctaSection = {
  headline: "Still Have Questions?",
  body: "We're happy to help. Call our office and a team member will answer your questions or help you get started.",
  primaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "primary" as const },
  secondaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "secondary" as const },
};
