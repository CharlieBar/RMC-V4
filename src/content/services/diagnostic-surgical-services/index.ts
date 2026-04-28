// src/content/services/diagnostic-surgical-services/index.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Diagnostic & Surgical Services (Service Pillar)
// ─────────────────────────────────────────────────────────

import type { SEOMeta, HeroSection, TreatmentLink, ProcessStep, FeatureItem, FAQItem, ServiceLink } from "@/types/content";

export const seo: SEOMeta = {
  title: "Diagnostic Imaging & Outpatient Surgery Center | Arlington Heights, IL | Rand Medical Center",
  description:
    "On-site X-rays, in-house lab, and accredited outpatient surgery center in Arlington Heights, IL — same-day diagnostics and minimally invasive procedures coordinated with your treating physician. Call (224) 735-3522.",
  keywords: ["diagnostic imaging Arlington Heights IL", "outpatient surgery center near me", "x-ray clinic Arlington Heights", "in-house lab Arlington Heights"],
  canonical: "https://www.randmedicalcenter.com/services/diagnostic-surgical-services",
};

export const hero: HeroSection = {
  eyebrow: "Diagnostic & Surgical Services",
  headline: "Diagnostic Imaging and Outpatient Surgery Center",
  subheadline: "On-site X-rays, in-house laboratory, and a fully accredited outpatient surgery center — giving your treating physician same-day diagnostic results and a safe, efficient environment for minimally invasive procedures without hospital admission.",
  image: { src: "/images/services/diagnostic-surgical-services-hero.jpg", alt: "Diagnostic imaging and outpatient surgery at Rand Medical Center" },
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const intro = {
  headline: "Diagnostics and Procedures Under One Roof",
  body: "Rand Medical Center offers a fully integrated suite of diagnostic and procedural capabilities — on-site X-ray, in-house laboratory, and an affiliated outpatient surgery center — so that your physician can order tests, review results, and perform or coordinate procedures without routing you to three different facilities across the northwest Chicago suburbs.\n\nFor acute injury patients, same-day imaging changes the trajectory of care. When a physician can review your X-rays within the hour rather than waiting days for an external radiology report, diagnosis is faster, treatment begins sooner, and the risk of missed or delayed injuries is reduced. On-site X-ray covers fracture evaluation, joint space assessment, spinal alignment, and a range of orthopedic and musculoskeletal applications. When MRI, CT, or other advanced imaging is needed, we coordinate urgent scheduling with established imaging partners and review results as soon as they are available.\n\nOur in-house laboratory handles the routine and targeted blood work that primary care and internal medicine patients require for chronic disease monitoring, pre-surgical assessment, and medication management — eliminating a separate lab visit and speeding results back to your physician.\n\nThe affiliated outpatient surgery center is equipped for a broad range of minimally invasive procedures: image-guided pain management injections and radiofrequency ablations, arthroscopic orthopedic procedures, neurological procedures, and minor general surgery cases. Procedures performed in an accredited outpatient surgery center cost significantly less than the equivalent hospital-based procedure while meeting the same accreditation and safety standards. Most patients go home the same day and recover in their own environment — a meaningful quality-of-life advantage for patients in Arlington Heights and the surrounding northwest suburbs.\n\nAll diagnostic and surgical services are tightly coordinated with your treating physicians at Rand Medical Center. Results reach your provider directly and promptly, surgical teams communicate with your rehabilitation team before and after procedures, and nothing falls through the communication gaps that commonly occur when care is scattered across multiple unaffiliated locations.",
  secondaryImage: { src: "/images/services/surgery-center-operating-room.jpg", alt: "Outpatient surgery center at Rand Medical Center" },
};

export const treatments = {
  headline: "Available Services",
  items: [
    { name: "Diagnostic Imaging", slug: "diagnostic-imaging", href: "/services/diagnostic-surgical-services/diagnostic-imaging", description: "On-site X-rays and coordination for advanced imaging like MRI and CT" },
    { name: "X-Rays", slug: "x-rays", href: "/services/diagnostic-surgical-services/x-rays", description: "Quick, low-radiation imaging for bones, joints, and some spine conditions" },
    { name: "MRI Referrals", slug: "mri-referrals", href: "/services/diagnostic-surgical-services/mri-referrals", description: "Coordinated MRI scheduling with rapid results" },
    { name: "In-House Laboratory", slug: "in-house-lab", href: "/services/diagnostic-surgical-services/in-house-lab", description: "Blood work and basic lab testing on-site" },
    { name: "Blood Work", slug: "blood-work", href: "/services/diagnostic-surgical-services/blood-work", description: "Routine and targeted blood tests for monitoring health and medications" },
    { name: "Outpatient Surgery Center", slug: "outpatient-surgery-center", href: "/services/diagnostic-surgical-services/outpatient-surgery-center", description: "Fully equipped center for same-day surgical and interventional procedures" },
    { name: "Same-Day Procedures", slug: "same-day-procedures", href: "/services/diagnostic-surgical-services/same-day-procedures", description: "Go home the same day with careful follow-up instructions" },
    { name: "Pain Management Procedures", slug: "pain-management-procedures", href: "/services/diagnostic-surgical-services/pain-management-procedures", description: "Image-guided injections and ablations in a surgical environment" },
    { name: "Orthopedic Procedures", slug: "orthopedic-procedures", href: "/services/diagnostic-surgical-services/orthopedic-procedures", description: "Arthroscopy and minor orthopedic surgeries" },
    { name: "Neurological Procedures", slug: "neurological-procedures", href: "/services/diagnostic-surgical-services/neurological-procedures", description: "Select nerve-related procedures in a monitored setting" },
    { name: "General Surgery Procedures", slug: "general-surgery", href: "/services/diagnostic-surgical-services/general-surgery", description: "Minor outpatient general surgery" },
  ] as TreatmentLink[],
};

export const whyChooseUs = {
  headline: "Why On-Site Diagnostics and Surgery Matter",
  features: [
    { icon: "zap", title: "Faster Diagnosis", description: "On-site X-rays and in-house labs produce results the same day — no waiting two to five business days for an outside imaging center or reference lab to deliver findings. For injury patients and pre-surgical patients, this speed directly affects how quickly the right treatment begins." },
    { icon: "building", title: "Modern Outpatient Surgery Center", description: "Our affiliated surgery center meets current accreditation standards for safety, staffing, infection control, and emergency preparedness. It is fully equipped for image-guided pain management procedures, arthroscopic orthopedic surgery, neurological procedures, and minor general surgery — in an environment purpose-built for outpatient care." },
    { icon: "dollar-sign", title: "Lower Cost Than Hospital", description: "Outpatient procedures performed in our surgery center typically cost significantly less than the equivalent hospital-based procedure — sometimes 40 to 60 percent less — while meeting the same clinical quality and accreditation standards. For patients with high-deductible plans, this difference can be substantial." },
    { icon: "link", title: "Seamless Coordination", description: "Your diagnostic results reach your treating physician directly and promptly. Your surgical team communicates with your rehabilitation team before and after procedures. Your post-procedure follow-up appointments are arranged before you leave. The coordination that typically gets lost between separate, unaffiliated facilities is built into how we operate." },
    { icon: "home", title: "Go Home the Same Day", description: "The vast majority of procedures performed in our surgery center are same-day: you arrive, have the procedure under appropriate anesthesia or sedation, recover for a monitored period, and go home to continue recovering in your own environment. Written discharge instructions, emergency contact information, and follow-up scheduling are provided before you leave." },
  ] as FeatureItem[],
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" },
    { name: "Orthopedics", slug: "orthopedics", href: "/services/orthopedics" },
    { name: "Internal Medicine", slug: "internal-medicine", href: "/services/internal-medicine" },
    { name: "Immediate Care", slug: "immediate-care", href: "/services/immediate-care" },
  ] as ServiceLink[],
};

export const ctaSection = {
  headline: "Need Imaging or a Procedure?",
  body: "Diagnostic imaging, laboratory services, and outpatient surgical procedures are coordinated by your treating physician as an integrated part of your care plan — not as separate referrals to outside facilities. If you're a current patient and your physician has recommended imaging or a procedure, contact our clinic at (224) 735-3522 to coordinate scheduling. If you're a new patient, schedule an appointment and we'll ensure your diagnostic and procedural needs are addressed efficiently.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Do I need a referral for imaging?", answer: "X-rays and other on-site imaging are ordered by your treating physician as part of your clinical evaluation — if you're being seen at Rand Medical Center, your doctor can order imaging during the same visit. For patients requesting imaging from an outside physician's order, contact our clinic at (224) 735-3522 and our team will clarify the appropriate process based on your insurance and the type of imaging required." },
  { question: "How long do X-ray results take?", answer: "On-site X-rays are taken and reviewed by your physician during your appointment — there is no wait for an external radiology read. For advanced imaging coordinated externally (MRI, CT), formal radiology reports are typically available within one to three business days, and your physician will review the findings with you promptly once received." },
  { question: "Is the outpatient surgery center safe?", answer: "Yes. Our affiliated surgery center meets current accreditation standards covering patient safety protocols, staffing qualifications, infection prevention, emergency equipment and preparedness, and quality improvement processes. Outpatient surgery centers with proper accreditation have well-documented safety records for the types of procedures they perform — and ours is designed specifically for the minimally invasive pain management, orthopedic, and neurological procedures that our patient population requires." },
  { question: "Will my insurance cover procedures at the surgery center?", answer: "Most commercial insurance plans, Medicare, and workers' compensation cover medically necessary outpatient procedures performed at an accredited surgery center — often at a substantially lower cost-share than hospital-based procedures. Our billing team performs insurance verification and obtains any required pre-authorizations before your procedure date, so there are no billing surprises. If you have questions about your specific coverage, our team is available to review your benefits with you." },
];
