// src/content/services/immediate-care/index.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Immediate Care (Service Pillar)
// ─────────────────────────────────────────────────────────

import type { SEOMeta, HeroSection, ConditionLink, TreatmentLink, ProcessStep, FeatureItem, FAQItem, ServiceLink, BlogPostLink } from "@/types/content";

export const seo: SEOMeta = {
  title: "Immediate Care & Walk-In Clinic in Arlington Heights, IL | Rand Medical Center",
  description:
    "Walk-in injury and illness clinic in Arlington Heights, IL — on-site X-rays, same-day work injury documentation, and direct access to orthopedic and pain specialists. No ER wait. Call (224) 735-3522.",
  keywords: ["immediate care Arlington Heights IL", "walk-in injury clinic near me", "urgent injury care northwest Chicago suburbs", "same-day injury appointment", "work injury walk-in clinic"],
  canonical: "https://www.randmedicalcenter.com/services/immediate-care",
};

export const hero: HeroSection = {
  eyebrow: "Immediate Care",
  headline: "Immediate Care & Walk-In Clinic in Arlington Heights, IL",
  subheadline: "Prompt evaluation and treatment for sudden injuries and illnesses — with on-site X-rays, same-day work injury documentation, and direct referrals to our orthopedic and pain management specialists when you need them.",
  primaryCTA: { text: "Walk In or Call Ahead", href: "tel:+12247353522", variant: "primary" },
  secondaryCTA: { text: "Schedule Online", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "secondary" },
  image: { src: "/images/services/immediate-care-hero.jpg", alt: "Immediate care clinic at Rand Medical Center in Arlington Heights" },
};

export const intro = {
  headline: "Urgent Injury Care Without the ER",
  body: "When you twist an ankle at work, tweak your back lifting something on a Saturday, or wake up with sudden neck pain that won't let you turn your head, you need answers and treatment now — not a three-week wait for a specialist appointment. Rand Medical Center's immediate care clinic in Arlington Heights, IL provides walk-in access for non-life-threatening injuries and acute illnesses, staffed by physicians and advanced practice providers who can move quickly and make good clinical decisions under pressure.\n\nOn-site X-rays are available during your visit, so you won't leave without knowing whether a bone is broken or a joint is structurally compromised. For sprains, strains, and acute back or neck pain, we initiate treatment the same day — including bracing, medications, and appropriate activity restrictions with written instructions. Minor wounds and lacerations receive wound care and follow-up planning. Acute illnesses — upper respiratory infections, flu symptoms, sinus infections, urinary tract infections, and similar non-emergency conditions — are evaluated and treated without the wait times or costs of an emergency room.\n\nWhat makes our immediate care clinic particularly valuable is what happens next. If your injury requires orthopedic evaluation, pain management follow-up, or a course of physical therapy, we set that up before you leave — connecting you directly to our specialists in the same building. You don't have to call a separate office, wait for a referral authorization, or repeat your story from scratch. For employers and injured workers, we handle all workers' compensation documentation from the first visit, including the employer notification letters, work status reports, and duty restriction summaries that Illinois WC law requires.",
  secondaryImage: { src: "/images/services/immediate-care-waiting.jpg", alt: "Immediate care waiting area at Rand Medical Center" },
};

export const conditionsTreated = {
  headline: "What We Treat in Immediate Care",
  conditions: [
    { name: "Sprains and Strains", slug: "muscle-strain", href: "/conditions/muscle/muscle-strain" },
    { name: "Minor Fractures", slug: "fractures", href: "/services/orthopedics/fracture-care" },
    { name: "Back Pain (Acute)", slug: "back-pain", href: "/conditions/spine/back-pain" },
    { name: "Neck Pain (Acute)", slug: "neck-pain", href: "/conditions/spine/neck-pain" },
    { name: "Work Injuries", slug: "workplace-injury", href: "/conditions/other/workplace-injury" },
    { name: "Sports Injuries", slug: "sports-injury", href: "/conditions/other/sports-injury" },
    { name: "Muscle Spasms", slug: "muscle-spasms", href: "/conditions/muscle/muscle-spasms" },
    { name: "Minor Cuts and Wounds", slug: "minor-injuries", href: "/services/immediate-care/minor-injuries" },
    { name: "Cold and Flu Symptoms", slug: "minor-illnesses", href: "/services/immediate-care/minor-illnesses" },
    { name: "Simple Infections", slug: "minor-illnesses", href: "/services/immediate-care/minor-illnesses" },
  ] as ConditionLink[],
};

export const treatments = {
  headline: "Immediate Care Services",
  items: [
    { name: "Walk-In Injury & Illness Clinic", slug: "walk-in-clinic", href: "/services/immediate-care/walk-in-clinic", description: "Same-day visits for urgent but non-emergency problems" },
    { name: "Minor Injuries", slug: "minor-injuries", href: "/services/immediate-care/minor-injuries", description: "Sprains, strains, minor fractures, and simple wounds" },
    { name: "Minor Illnesses", slug: "minor-illnesses", href: "/services/immediate-care/minor-illnesses", description: "Colds, flu, and common non-emergency illnesses" },
    { name: "Work Injury Immediate Care", slug: "work-injury-urgent-care", href: "/services/immediate-care/work-injury-urgent-care", description: "Rapid evaluation and documentation for new work injuries" },
    { name: "On-Site Medications", slug: "on-site-medications", href: "/services/immediate-care/on-site-medications", description: "Selected medications available right here for immediate treatment" },
  ] as TreatmentLink[],
};

export const process = {
  headline: "What to Expect at an Immediate Care Visit",
  steps: [
    { step: "01", title: "Check In", description: "Walk in or call ahead at (224) 735-3522. Our front desk collects your insurance or workers' comp information and triages you based on urgency. Work injury patients receive priority documentation setup — we begin completing the employer notification and work status forms while you wait, so nothing is delayed." },
    { step: "02", title: "Evaluation", description: "A physician or advanced practice provider reviews your history, examines the affected area, and asks targeted questions about your symptoms — mechanism of injury, onset, severity, radiation pattern, and what makes it better or worse. This assessment drives the decision about what testing is needed and what treatment is appropriate." },
    { step: "03", title: "Diagnostics", description: "If bone injury, joint instability, or a structural problem is suspected, we take X-rays on-site and review them with you immediately. For soft tissue injuries that may require MRI, we document the clinical findings and coordinate urgent imaging referral if needed." },
    { step: "04", title: "Treatment", description: "You receive treatment right away — splinting or bracing, prescription medications, wound cleaning and closure, muscle relaxants, or anti-inflammatory injections, depending on what your condition requires. We don't send you home without a plan and, where possible, without initial treatment already started." },
    { step: "05", title: "Follow-Up Plan", description: "Before you leave, we establish your next steps clearly. For straightforward injuries, that may mean a return visit in one to two weeks. For injuries requiring specialist evaluation, we set up that appointment in orthopedics, pain management, or physical therapy before you leave the building — so there's no gap in your care." },
  ] as ProcessStep[],
};

export const whyChooseUs = {
  headline: "Why Choose Rand Medical Center for Immediate Care?",
  features: [
    { icon: "clock", title: "No ER Wait Times", description: "Get seen quickly for non-life-threatening injuries and illnesses without the long waits and high costs of an emergency room visit. Our clinic is designed for efficient evaluation and treatment of acute but non-emergency conditions — exactly the scenarios that shouldn't require a multi-hour ER stay." },
    { icon: "scan", title: "On-Site X-Rays", description: "We take X-rays right here to evaluate potential fractures and joint injuries during your visit. Results are reviewed by your provider the same day, giving you a definitive answer about bone integrity before you go home — whether that means a cast, a referral for further imaging, or reassurance that no fracture is present." },
    { icon: "arrow-right", title: "Direct Specialist Access", description: "If your injury requires orthopedic surgery evaluation, a pain management consultation, or a physical therapy program, we connect you to our specialists in the same building before you leave. No separate phone calls, no new-patient intake from scratch, no weeks-long wait for a referral appointment." },
    { icon: "briefcase", title: "Workers' Comp From Day One", description: "We handle all workers' compensation documentation starting with your very first visit — including the employer injury notification, work status and duty restriction report, and medical records formatted to WC carrier standards. Getting this documentation right from the start protects your claim and keeps your treatment on track." },
    { icon: "map-pin", title: "Arlington Heights Location", description: "Walk-in access from Arlington Heights, Mount Prospect, Palatine, Des Plaines, Rolling Meadows, and surrounding northwest Chicago suburbs — a practical, accessible alternative to driving to a hospital-based urgent care or ER for non-emergency injuries." },
  ] as FeatureItem[],
};

export const emergencyNote = {
  headline: "When to Go to the ER Instead",
  body: "Our immediate care clinic treats urgent but non-life-threatening conditions. If you are experiencing chest pain, difficulty breathing, severe bleeding that won't stop, loss of consciousness, suspected stroke symptoms, or a serious head injury — call 911 or go to your nearest emergency room immediately.",
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    { name: "Orthopedics", slug: "orthopedics", href: "/services/orthopedics" },
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" },
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" },
    { name: "Injury Services", slug: "injury-services", href: "/services/injury-services" },
  ] as ServiceLink[],
};

export const relatedBlogPosts = {
  headline: "Immediate Care Resources",
  posts: [
    { title: "Signs Your Injury Needs Medical Attention", slug: "injury-signs-need-medical-attention", href: "/blog/injury-signs-need-medical-attention", category: "Injury Recovery" },
    { title: "Ice vs. Heat: Which Is Better for Your Injury?", slug: "ice-vs-heat-injury-treatment", href: "/blog/ice-vs-heat-injury-treatment", category: "Injury Recovery" },
    { title: "What to Do Immediately After a Workplace Injury", slug: "what-to-do-after-workplace-injury", href: "/blog/what-to-do-after-workplace-injury", category: "Workers' Compensation" },
  ] as BlogPostLink[],
};

export const ctaSection = {
  headline: "Injured? Come In Today.",
  body: "When injury or sudden illness can't wait, walk in to our Arlington Heights clinic or call us at (224) 735-3522. We'll evaluate you promptly, treat what we can treat the same day, and connect you to our orthopedic, pain management, or physical therapy team if your condition requires specialist follow-up — all without making you start over at a new facility. Don't wait in an ER line for a problem that can be handled here.",
  primaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "primary" as const },
  secondaryCTA: { text: "Schedule Online", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Do I need an appointment for immediate care?", answer: "No. Walk-ins are welcome during clinic hours — just come in. Calling ahead at (224) 735-3522 helps us prepare your paperwork and, for work injuries, set up your employer communication before you arrive, but it's not required to be seen. We triage patients on arrival based on urgency." },
  { question: "How much does an immediate care visit cost?", answer: "Costs depend on your insurance plan and the specific services provided during your visit. We accept most major commercial insurance, Medicare, workers' compensation, and personal injury liens. If you're paying out of pocket, our billing team will give you transparent cost information before services are rendered. We never want cost uncertainty to prevent someone from getting needed care." },
  { question: "Can you treat my work injury on my first visit?", answer: "Yes. We evaluate and begin treating work injuries the same day you come in — including physical examination, on-site X-rays if needed, initial treatment (bracing, medications, wound care), and complete workers' compensation documentation including the Illinois First Report of Injury, employer notification, and work status report specifying any duty restrictions." },
  { question: "What's the difference between immediate care and the ER?", answer: "Immediate care is designed for urgent but non-life-threatening conditions — sprains, strains, minor fractures, acute back or neck pain, mild illnesses, and minor wounds. The emergency room is for life-threatening emergencies: chest pain, difficulty breathing, loss of consciousness, suspected stroke, and severe uncontrolled bleeding. For non-emergency problems, our clinic offers faster service, lower costs, and the added advantage of direct access to our specialist team for follow-up care." },
];
