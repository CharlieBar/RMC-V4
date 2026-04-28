// src/content/conditions/other/workplace-injury.ts
// Rand Medical Center — Workplace Injuries (Condition Page)

import type { SEOMeta, HeroSection, SymptomItem, CauseItem, ConditionLink, TreatmentLink, ServiceLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Workplace Injury Doctor in Arlington Heights, IL | Rand Medical Center",
  description: "Workplace injury treatment in Arlington Heights, IL. Workers' comp accepted. Back injuries, falls, repetitive strain, and on-the-job accidents treated with full documentation. Call (224) 735-3522.",
  keywords: ["workplace injury treatment Arlington Heights", "workplace injury doctor near me", "workplace injuries specialist", "workers comp doctor Arlington Heights", "work injury clinic northwest suburbs"],
  canonical: "https://www.randmedicalcenter.com/conditions/other/workplace-injury",
};

export const hero: HeroSection = {
  eyebrow: "Other Conditions",
  headline: "Workplace Injuries Treatment in Arlington Heights, IL",
  subheadline: "Hurt on the job? In Illinois, you have the right to choose your own doctor. Our Arlington Heights clinic accepts workers' compensation, treats the full range of occupational injuries, and handles every piece of documentation your case requires.",
  primaryCTA: { text: "Schedule an Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const definition = {
  headline: "Workplace Injuries: Medical and Legal Context",
  body: "A workplace injury is any physical injury or illness that arises from or in the course of employment. In Illinois, employers are required to carry workers' compensation insurance that covers medical treatment, wage replacement, and disability benefits for injured workers — and employees have the right to choose their own treating physician, without employer or insurer control over that choice.\n\nWorkplace injuries span a wide spectrum. Acute injuries include sudden-onset events: back sprains from heavy lifting, fractures from falls from ladders or scaffolding, lacerations, crush injuries, and shoulder or knee injuries from machinery. These require prompt evaluation and documentation to establish the mechanism and extent of injury at the time it occurred.\n\nCumulative trauma disorders are equally common and often more complex. Repetitive motion injuries — carpal tunnel syndrome from years of keyboard or assembly work, rotator cuff tendinitis from repetitive overhead reaching, or lumbar disc degeneration from chronic heavy lifting — develop over months or years and may be harder to attribute to a single incident. Medical documentation that traces the relationship between the worker's job tasks and the diagnosed condition is essential to a successful workers' comp claim.\n\nThe physician's role in a workers' compensation case extends beyond treatment. Accurate documentation from the very first visit — injury mechanism, clinical findings, diagnosis, work restrictions, and treatment plan — forms the medical foundation of the entire workers' comp claim. Inadequate documentation in the early visits is one of the most common reasons claims are denied or delayed.\n\nAt Rand Medical Center in Arlington Heights, IL, we have extensive experience managing workers' compensation cases from the initial injury evaluation through maximum medical improvement. We treat the full spectrum of occupational injuries and understand the documentation and communication requirements that injury cases demand.",
};

export const symptoms = {
  headline: "Common Workplace Injury Symptoms",
  items: [
    { text: "Pain at the injury site", detail: "Localized pain at the site of acute trauma — a lifted shoulder, a fallen knee, a twisted back — is the most direct symptom of a workplace injury. The character, intensity, and radiation of the pain help identify the injured structure and should be documented in detail at the first medical visit for workers' compensation purposes." },
    { text: "Swelling or bruising", detail: "Visible swelling and ecchymosis (bruising) confirm significant tissue trauma — ligament tearing, muscle injury, joint hemorrhage, or bony injury. These objective findings are important for medical-legal documentation and typically appear within hours of the injury, though bruising may take 24–48 hours to surface at the skin." },
    { text: "Difficulty performing job duties", detail: "Functional impairment — inability to lift, carry, kneel, reach overhead, or operate equipment — is the central measure of work-related disability. Accurate description of which job tasks have been affected and to what degree is required for work-restriction letters that protect you and your employer during recovery." },
    { text: "Pain that worsens with work activities", detail: "When pain is consistently and specifically provoked by the activities of your job — a particular motion, a tool you use, a position you maintain — it strongly supports the occupational causation of the injury. This relationship between work tasks and symptom provocation is a key element of the medical record in any workers' comp case." },
    { text: "Numbness or weakness in affected areas", detail: "Neurological symptoms following a workplace injury indicate that a nerve structure has been involved — either directly injured (as in a crush injury), compressed by swelling, or irritated by a disc injury or joint displacement. These symptoms require timely evaluation, as prolonged nerve compression can cause permanent sensory or motor loss." }
  ] as SymptomItem[],
};

export const causes = {
  headline: "Common Causes of Workplace Injuries",
  items: [
    { text: "Heavy lifting with poor mechanics", detail: "Musculoskeletal injuries from manual material handling are the most common category of workplace injury across industries. Loading the lumbar spine with a heavy object while flexed and rotated dramatically increases disc and ligament stress. Proper body mechanics training reduces but does not eliminate this risk, particularly during fatigue or time pressure." },
    { text: "Slips, trips, and falls", detail: "Falls are a leading cause of serious workplace injury, particularly in construction, roofing, and warehouse environments. Same-level falls produce ankle sprains, knee injuries, hip fractures (especially in older workers), and wrist injuries from bracing. Elevated falls can cause vertebral compression fractures, shoulder injuries, and traumatic brain injury." },
    { text: "Repetitive motions over time (cumulative trauma)", detail: "Cumulative trauma disorders develop from the accumulated stress of thousands of repetitive motions: assembly line work, keyboard use, overhead reaching, forceful gripping, and vibration exposure. Common diagnoses include carpal tunnel syndrome, De Quervain's tenosynovitis, rotator cuff tendinitis, and lumbar strain from chronic postural load." },
    { text: "Being struck by objects", detail: "In construction, manufacturing, and warehouse settings, workers are regularly at risk of being struck by falling tools, shifting loads, or moving equipment. Struck-by injuries can cause contusions, fractures, and soft-tissue injuries at any body region — all of which require prompt evaluation and documentation." },
    { text: "Awkward postures held for extended periods", detail: "Sustained awkward positions — working with arms raised overhead, bending forward at the waist for extended periods, prolonged kneeling or squatting — place sustained mechanical stress on joints and soft tissues well above their tolerance threshold. This mechanism underlies many cases of chronic occupational back pain, shoulder tendinopathy, and knee arthritis in tradespeople." }
  ] as CauseItem[],
};

export const whenToSeeDoctor = {
  headline: "When to See a Doctor",
  body: "See a doctor if your symptoms last more than a few weeks, are getting worse, started after an injury or accident, or are affecting your ability to work and perform daily activities. Our team in Arlington Heights can often see you the same day or next day.",
  redFlags: [
    "Inability to bear weight or move a limb after an acute workplace injury — possible fracture requiring imaging before mobilization",
    "Rapidly progressive weakness, numbness, or loss of bladder/bowel control after a back injury at work — possible spinal cord or cauda equina involvement",
    "Head injury with loss of consciousness, confusion, persistent headache, or vision changes — possible concussion or intracranial injury requiring emergency evaluation",
    "Any significant chest pain, difficulty breathing, or abdominal pain following a workplace trauma — seek emergency evaluation immediately"
  ],
};

export const howWeHelp = {
  headline: "Workplace Injury Treatment at Rand Medical Center",
  body: "At Rand Medical Center, workplace injury care begins with a prompt evaluation designed to accomplish two things simultaneously: treat your injury as effectively as possible, and create the complete, accurate medical documentation your workers' compensation case requires. Your physician performs a detailed injury history (mechanism of injury, onset of symptoms, prior relevant conditions), a thorough physical and neurological examination, and orders on-site X-rays or other imaging as clinically indicated.\n\nWe accept workers' compensation insurance directly and have extensive experience working within the Illinois workers' comp system. From the first visit, we provide: a diagnosis linked to the occupational injury mechanism, work-status determinations (full duty, light duty, or temporary total disability), work-restriction letters for your employer, and regular progress notes for your adjuster. We complete all state-required forms and respond to adjuster requests promptly.\n\nFor musculoskeletal work injuries — the most common category — treatment follows a structured, functional rehabilitation model. Physical therapy for work injuries emphasizes functional restoration: not just pain reduction, but progressive return of the strength, range of motion, and functional capacity needed to safely return to work. We coordinate functional capacity evaluations when appropriate and provide return-to-work determinations with specific lifting and activity restrictions.\n\nFor injuries requiring interventional pain management — such as an acute disc herniation producing nerve root compression, or facet joint injury causing persistent pain — our pain management team provides targeted procedures without requiring patients to travel to a separate facility. Orthopedic consultation and surgical evaluation are available within our group when injury severity warrants it.",
};

export const treatmentOptions = {
  headline: "Treatment Options",
  treatments: [
    { name: "Workers Compensation", slug: "workers-compensation", href: "/services/injury-services/workers-compensation" },
    { name: "Work Injury Urgent Care", slug: "work-injury-urgent-care", href: "/services/immediate-care/work-injury-urgent-care" },
    { name: "Work Injury Rehab", slug: "work-injury-rehab", href: "/services/physical-therapy/work-injury-rehab" }
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
    { name: "Neck Pain", slug: "neck-pain", href: "/conditions/spine/neck-pain" },
    { name: "Carpal Tunnel", slug: "carpal-tunnel", href: "/conditions/nerves/carpal-tunnel" },
    { name: "Muscle Strain", slug: "muscle-strain", href: "/conditions/muscle/muscle-strain" }
  ] as ConditionLink[],
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    { name: "Injury Services", slug: "injury-services", href: "/services/injury-services" },
    { name: "Immediate Care", slug: "immediate-care", href: "/services/immediate-care" },
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" },
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" }
  ] as ServiceLink[],
};

export const relatedBlogPosts = { headline: "Resources", posts: [] };

export const ctaSection = {
  headline: "Injured at Work? You Choose Your Doctor — Come to Rand Medical Center",
  body: "Illinois law gives you the right to select your own workers' compensation physician. At Rand Medical Center in Arlington Heights, we evaluate workplace injuries thoroughly, treat the full range of occupational injuries across our multi-specialty team, and handle all workers' comp documentation from day one. Same-day and next-day appointments available — call (224) 735-3522.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Do I have to use the doctor my employer chooses in Illinois?", answer: "No. Under Illinois workers' compensation law, you have the right to choose your own treating physician for a work injury. Your employer or their insurance company cannot require you to see their designated doctor as your primary treating physician. You can call Rand Medical Center directly and schedule your evaluation — you do not need your employer's permission. We handle the billing with the workers' compensation carrier directly." },
  { question: "What if my employer says my injury isn't covered or denies my claim?", answer: "A denied claim does not mean your injury isn't real or isn't treatable. Our medical team's role is to evaluate and treat your injury accurately and thoroughly — the legal dispute over claim acceptance is a separate process. If your claim is denied, the medical documentation we create from your very first visit becomes critical evidence in any appeal or hearing. Many initially denied claims are later accepted when supported by clear, consistent medical records from a treating physician." },
  { question: "How quickly can I be seen after a workplace injury?", answer: "We offer same-day and next-day appointments for workplace injuries. Prompt evaluation is important for both your recovery and your claim — delays in seeking treatment create gaps in the medical record that workers' compensation insurers may use to challenge the work-relatedness of your injury. Call (224) 735-3522 and let our staff know you have a work injury; we will prioritize your appointment." },
  { question: "What should I bring to my first workers' comp appointment?", answer: "Bring a photo ID, your workers' compensation claim number and adjuster contact information if you have it, your employer's name and address, a description of exactly how and when the injury occurred, and any paperwork your employer has provided. If you've had prior imaging or treatment at an ER or urgent care, bring those records as well. If you don't yet have claim information, come anyway — we can help you understand the process at your first visit." },
];
