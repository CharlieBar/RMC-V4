// src/content/services/internal-medicine/index.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Internal Medicine & Primary Care (Service Pillar)
// ─────────────────────────────────────────────────────────

import type { SEOMeta, HeroSection, TreatmentLink, ProcessStep, FeatureItem, FAQItem, ServiceLink, BlogPostLink } from "@/types/content";

export const seo: SEOMeta = {
  title: "Internal Medicine & Primary Care in Arlington Heights, IL | Rand Medical Center",
  description:
    "Internal medicine and primary care in Arlington Heights, IL — chronic disease management, annual physicals, preventive screenings, and preoperative clearance in a multi-specialty clinic. Call (224) 735-3522.",
  keywords: ["internal medicine doctor Arlington Heights IL", "primary care physician near me", "chronic disease management Arlington Heights", "annual physical Arlington Heights"],
  canonical: "https://www.randmedicalcenter.com/services/internal-medicine",
};

export const hero: HeroSection = {
  eyebrow: "Internal Medicine & Primary Care",
  headline: "Internal Medicine and Primary Care in Arlington Heights, IL",
  subheadline: "Comprehensive adult primary care for chronic disease management, annual physicals, preventive screenings, and preoperative clearance — with the advantage of direct coordination between your internist and our orthopedic, pain, and surgical specialists.",
  image: { src: "/images/services/internal-medicine-hero.jpg", alt: "Internal medicine and primary care at Rand Medical Center" },
  primaryCTA: { text: "Schedule a Primary Care Visit", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const intro = {
  headline: "Your Health, Managed in One Place",
  body: "The internal medicine team at Rand Medical Center provides primary care for adults across a broad spectrum of needs — from annual physicals and age-appropriate preventive screenings to long-term management of complex chronic conditions including type 2 diabetes, hypertension, hyperlipidemia, thyroid disorders, and obesity. Whether you're establishing care with a new physician or managing conditions that require consistent monitoring and medication management, our internists provide the continuity and attentiveness that good primary care requires.\n\nWhat distinguishes primary care at Rand Medical Center is the depth of integration available within one clinic. Adults in Arlington Heights frequently deal with overlapping medical and musculoskeletal needs — a patient managing diabetes may also develop a knee condition requiring orthopedic evaluation; a patient with high blood pressure may need pain management for chronic back pain; a patient preparing for joint replacement surgery needs medical clearance from a provider who can communicate directly with the surgical team. At Rand Medical Center, these conversations happen in-house, without the multi-week referral delays and repeated intake processes that fragment care at separate facilities.\n\nPreoperative medical clearance is a particular strength of our program. Our internists conduct thorough pre-surgical evaluations — reviewing cardiovascular risk, medication management, glycemic control, pulmonary status, and relevant lab values — and communicate their findings directly to our orthopedic surgeons and anesthesia team. This keeps surgical scheduling on track and reduces the risk of preventable pre-surgical delays.\n\nWe serve adult patients from Arlington Heights, Mount Prospect, Des Plaines, Palatine, Schaumburg, and the broader northwest Chicago suburban area.",
  secondaryImage: { src: "/images/services/internal-medicine-checkup.jpg", alt: "Internal medicine checkup at Rand Medical Center" },
};

export const treatments = {
  headline: "Internal Medicine Services",
  items: [
    { name: "Primary Care", slug: "primary-care", href: "/services/internal-medicine/primary-care", description: "Checkups, sick visits, medication management, and specialist referrals" },
    { name: "Chronic Disease Management", slug: "chronic-disease-management", href: "/services/internal-medicine/chronic-disease-management", description: "Ongoing care for diabetes, hypertension, and high cholesterol" },
    { name: "Annual Physicals", slug: "annual-physicals", href: "/services/internal-medicine/annual-physicals", description: "Yearly health assessments and preventive screenings" },
    { name: "Preventive Care", slug: "preventive-care", href: "/services/internal-medicine/preventive-care", description: "Vaccines, screenings, and lifestyle counseling" },
    { name: "Preoperative Clearance", slug: "preoperative-clearance", href: "/services/internal-medicine/preoperative-clearance", description: "Medical evaluations to ensure you're ready for surgery" },
  ] as TreatmentLink[],
};

export const process = {
  headline: "What to Expect",
  steps: [
    { step: "01", title: "Health Review", description: "Your doctor takes a complete medical history — including current and past diagnoses, medications, family history, lifestyle factors, and any symptoms or concerns you want to prioritize. This conversation sets the foundation for a care plan that addresses your full health picture, not just today's chief complaint." },
    { step: "02", title: "Examination", description: "A thorough physical examination includes vital signs, cardiovascular and pulmonary assessment, abdominal exam, and any targeted evaluations relevant to your history. For annual physicals, we follow evidence-based guidelines for age- and sex-appropriate screenings — ensuring nothing important gets missed." },
    { step: "03", title: "Testing", description: "Blood work, lab panels, urinalysis, and other screening tests are ordered based on your clinical picture and preventive care guidelines. Many common tests can be drawn and processed through our in-house laboratory, expediting results and eliminating the need for a separate lab visit." },
    { step: "04", title: "Care Plan", description: "Your doctor reviews all findings with you clearly, adjusts medications or dosages as needed, and creates a structured follow-up plan. If specialist coordination is needed — pain management, orthopedic evaluation, or surgical clearance — those referrals are made immediately, directly to the appropriate team in our clinic." },
  ] as ProcessStep[],
};

export const whyChooseUs = {
  headline: "Why Choose Rand Medical Center for Primary Care?",
  features: [
    { icon: "link", title: "Integrated Multi-Specialty Clinic", description: "Your primary care doctor coordinates directly with our pain management physicians, orthopedic surgeons, and physical therapists — all in the same building. When you need a specialist referral, it happens the same week, not after a month-long wait, and your internist stays in the communication loop throughout your specialty care." },
    { icon: "flask", title: "On-Site Lab Work", description: "Routine blood work, lipid panels, hemoglobin A1c, thyroid function tests, and other standard labs can be drawn right here in our clinic, with results reviewed promptly by your provider. There's no separate lab visit, no courier delay, and no results lost in the gap between facilities." },
    { icon: "shield", title: "Preventive Focus", description: "We take prevention seriously — recommending and administering age-appropriate vaccines, ordering cancer screenings on schedule, monitoring cardiovascular risk factors proactively, and providing counseling on nutrition, weight management, and lifestyle modifications that can meaningfully alter the trajectory of chronic disease." },
    { icon: "calendar", title: "Convenient Scheduling", description: "Same-week availability for most primary care appointments, and same-day access for acute sick visits when available. We understand that primary care often needs to be responsive, and we build our schedule to accommodate urgent needs without making established patients wait unreasonably." },
    { icon: "map-pin", title: "Arlington Heights Location", description: "Our clinic is conveniently located for patients from Arlington Heights, Mount Prospect, Palatine, Des Plaines, Schaumburg, and the surrounding northwest Chicago suburbs — providing consistent, accessible primary care close to where you live." },
  ] as FeatureItem[],
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" },
    { name: "Diagnostic & Surgical Services", slug: "diagnostic-surgical-services", href: "/services/diagnostic-surgical-services" },
    { name: "Immediate Care", slug: "immediate-care", href: "/services/immediate-care" },
  ] as ServiceLink[],
};

export const relatedBlogPosts = { headline: "Health Resources", posts: [] as BlogPostLink[] };

export const ctaSection = {
  headline: "Schedule a Primary Care Visit",
  body: "Whether you need an annual physical, ongoing management of a chronic condition, or preoperative clearance before orthopedic surgery, our internal medicine team in Arlington Heights is ready to provide the attentive, coordinated primary care you deserve. New patients are welcome. Same-week appointments are available for most visits. Call (224) 735-3522 or schedule online today.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Are you accepting new primary care patients?", answer: "Yes. We welcome new adult patients for primary care and internal medicine services. New patient visits typically include a comprehensive health assessment, review of prior records and medications, and establishment of a personalized preventive and management plan. Call (224) 735-3522 or schedule online to set up your first visit — same-week appointments are often available." },
  { question: "Can I see you for a sick visit if I'm not a regular patient?", answer: "Yes. Our immediate care clinic provides walk-in sick visits for non-emergency illnesses — upper respiratory infections, flu, sinusitis, urinary tract infections, and similar conditions. For established primary care patients, we also offer same-day scheduling for acute concerns when appointment slots are available. We want to be accessible when you need care, not just during scheduled wellness visits." },
  { question: "Do you manage chronic conditions like diabetes and high blood pressure?", answer: "Yes, and it's a core part of our internal medicine practice. We manage type 2 diabetes with regular A1c monitoring, medication optimization, and lifestyle counseling. We treat hypertension with evidence-based medication protocols and blood pressure monitoring. High cholesterol, thyroid disorders, and obesity are also within our scope. The goal is proactive management — catching complications before they become serious, not just reacting to them after they occur." },
  { question: "Can your primary care team handle my preoperative clearance?", answer: "Yes. We perform thorough preoperative medical evaluations tailored to the specific procedure and the patient's medical history — assessing cardiovascular risk, reviewing anticoagulation management, evaluating pulmonary function, and confirming glycemic control in diabetic patients. We communicate our clearance directly to the surgical and anesthesia teams, including our own orthopedic surgeons, to keep your surgical timeline on track." },
];
