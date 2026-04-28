// src/content/pages/what-to-expect.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — What to Expect
// ─────────────────────────────────────────────────────────

import type { SEOMeta, HeroSection, ProcessStep } from "@/types/content";

export const seo: SEOMeta = {
  title: "What to Expect at Your Visit | Rand Medical Center | Arlington Heights, IL",
  description:
    "Know what to expect before, during, and after your first appointment at Rand Medical Center in Arlington Heights, IL. A step-by-step patient guide.",
  canonical: "https://www.randmedicalcenter.com/patient-resources/what-to-expect",
};

export const hero: HeroSection = {
  eyebrow: "Patient Resources",
  headline: "What to Expect at Your Visit",
  subheadline: "Your first visit sets the foundation for your care. Here's a step-by-step look at what happens from arrival to your treatment plan.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const intro = {
  headline: "We Want You to Feel Prepared",
  body: "Walking into a new doctor's office can be stressful, especially when you're in pain or dealing with an injury. We want to take the guesswork out of it. Here's exactly what happens at each stage of your visit to Rand Medical Center.",
};

export const beforeVisit = {
  headline: "Before Your Visit",
  items: [
    "Complete patient forms — download from our website or arrive 15 minutes early to fill them out",
    "Gather your insurance card, photo ID, and workers' comp or accident information",
    "Bring a list of current medications and dosages",
    "Bring any prior imaging (X-rays, MRI) or medical records from other providers",
    "Write down your symptoms — when they started, what makes them worse or better, and how they affect your daily life",
    "Prepare a list of questions you'd like to ask your doctor",
  ],
};

export const duringVisit = {
  headline: "During Your Visit",
  steps: [
    { step: "01", title: "Check-In", description: "Our front desk team collects your paperwork, verifies your insurance, and gets you settled. For work injury and auto accident patients, we begin documentation at this stage." },
    { step: "02", title: "Vitals and Intake", description: "A medical assistant records your vital signs and reviews your symptoms, medical history, and medications." },
    { step: "03", title: "Doctor Evaluation", description: "Your physician performs a thorough physical examination, reviews your symptoms in detail, and discusses how your condition is affecting your daily life and work." },
    { step: "04", title: "Imaging (If Needed)", description: "If your doctor needs a closer look, on-site X-rays can be taken during the same visit. MRI or other advanced imaging is coordinated quickly when indicated." },
    { step: "05", title: "Diagnosis and Plan", description: "Your doctor explains your diagnosis in clear terms, presents treatment options, and answers your questions. Together you'll agree on a plan that may include therapy, procedures, medications, or follow-up testing." },
    { step: "06", title: "Scheduling and Checkout", description: "Before you leave, our team schedules any follow-up appointments, physical therapy sessions, or procedures. For injury cases, work status documentation is provided." },
  ] as ProcessStep[],
};

export const afterVisit = {
  headline: "After Your Visit",
  items: [
    "Follow your doctor's instructions and any prescribed activity restrictions",
    "Fill prescriptions if medications were prescribed",
    "Begin your home exercise program if physical therapy provided one",
    "Attend scheduled follow-up appointments and therapy sessions",
    "Call our office if symptoms worsen or you have questions between visits",
    "For work injuries: provide your work status report to your employer",
  ],
};

export const ctaSection = {
  headline: "Ready to Get Started?",
  body: "Now that you know what to expect, schedule your first appointment. Our team in Arlington Heights will take care of the rest.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};
