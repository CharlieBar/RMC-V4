// src/content/services/physical-therapy/index.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Physical Therapy & Rehabilitation (Service Pillar)
// ─────────────────────────────────────────────────────────

import type { SEOMeta, HeroSection, ConditionLink, TreatmentLink, ServiceLink, BlogPostLink, ProcessStep, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Physical Therapy Clinic in Arlington Heights, IL | Rand Medical Center",
  description:
    "Physical therapy in Arlington Heights, IL for work injuries, auto accidents, post-surgical rehab, and chronic pain — with direct coordination between therapists, surgeons, and pain specialists. Call (224) 735-3522.",
  keywords: [
    "physical therapy clinic Arlington Heights IL",
    "injury rehabilitation northwest Chicago suburbs",
    "auto accident physical therapy",
    "work injury rehab Arlington Heights",
    "post-surgical rehabilitation near me",
  ],
  canonical: "https://www.randmedicalcenter.com/services/physical-therapy",
};

export const hero: HeroSection = {
  eyebrow: "Physical Therapy & Rehabilitation",
  headline: "Physical Therapy in Arlington Heights, IL",
  subheadline:
    "Diagnosis-specific rehabilitation programs combining manual therapy, therapeutic exercise, and functional training — with direct communication between your therapist, pain management physician, and orthopedic surgeon to keep your recovery on track.",
  primaryCTA: { text: "Schedule a PT Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
  image: { src: "/images/services/physical-therapy-hero.jpg", alt: "Physical therapist guiding a patient through a rehabilitation exercise at Rand Medical Center" },
};

export const intro = {
  headline: "Rebuild Strength, Restore Movement, Return to Life",
  body: "Physical therapy at Rand Medical Center is built around your specific diagnosis, your physical job demands, and your personal recovery goals. Whether you're a warehouse worker in Arlington Heights rehabbing a lumbar strain, a construction laborer recovering from rotator cuff surgery, a driver dealing with post-MVA whiplash, or an active adult rebuilding knee function after total replacement, our therapists design a step-by-step program tailored to your clinical picture — not a generic protocol.\n\nEvery treatment plan draws on a core set of evidence-based techniques. Manual therapy — including joint mobilization, soft tissue mobilization, and myofascial release — addresses restricted movement and muscle guarding directly. Therapeutic exercise progressively rebuilds strength, stability, and neuromuscular control in the affected area. For patients returning to physically demanding jobs, we incorporate work simulation activities: the actual postures, lifting mechanics, and movements your job requires, practiced safely and progressively until you can perform them without risk of re-injury. Balance and gait training are included when lower extremity injuries, post-surgical changes, or neurological involvement affect how you walk and move.\n\nWhat genuinely distinguishes our program is the clinical integration. Our physical therapists work steps away from the pain management physicians and orthopedic surgeons who are managing your case. When your surgeon needs to modify your post-op weight-bearing protocol, your therapist knows the same day. When your therapist identifies a movement pattern suggesting an unresolved pain generator, that observation reaches your physician without delay. No faxes sitting in queues. No two-week waits for updated orders. This direct communication shortens recovery timelines and reduces the risk that therapy will inadvertently stress a structure that still needs protection.\n\nOur clinic in Arlington Heights, IL serves patients from Mount Prospect, Palatine, Des Plaines, Rolling Meadows, Schaumburg, and across the northwest Chicago suburbs.",
  secondaryImage: { src: "/images/services/physical-therapy-manual.jpg", alt: "Manual physical therapy at Rand Medical Center" },
};

export const whoWeHelp = {
  headline: "Who We Help",
  groups: [
    { title: "Injured Workers", description: "Construction, warehouse, manufacturing, healthcare, and office workers recovering from lifting injuries, falls, repetitive strain, and other job-related problems." },
    { title: "Auto Accident Patients", description: "People recovering from whiplash, back and neck pain, soft tissue injuries, and stiffness after a car, truck, or motorcycle accident." },
    { title: "Post-Surgical Patients", description: "Patients rebuilding strength and range of motion after joint replacement, spine surgery, arthroscopy, or other orthopedic procedures." },
    { title: "Chronic Pain Patients", description: "People who need movement-based therapy to complement pain management procedures and improve daily function." },
    { title: "Athletes and Active Adults", description: "Recreational and competitive athletes recovering from sprains, strains, overuse injuries, and returning to sport safely." },
  ],
};

export const conditionsTreated = {
  headline: "Conditions and Injuries We Treat",
  conditions: [
    { name: "Back Pain", slug: "back-pain", href: "/conditions/spine/back-pain" },
    { name: "Neck Pain", slug: "neck-pain", href: "/conditions/spine/neck-pain" },
    { name: "Sciatica", slug: "sciatica", href: "/conditions/spine/sciatica" },
    { name: "Knee Pain", slug: "knee-pain", href: "/conditions/joints/knee-pain" },
    { name: "Shoulder Pain", slug: "shoulder-pain", href: "/conditions/joints/shoulder-pain" },
    { name: "Hip Pain", slug: "hip-pain", href: "/conditions/joints/hip-pain" },
    { name: "Sprains and Strains", slug: "muscle-strain", href: "/conditions/muscle/muscle-strain" },
    { name: "Work Injuries", slug: "workplace-injury", href: "/conditions/other/workplace-injury" },
    { name: "Auto Accident Injuries", slug: "auto-injury", href: "/conditions/other/auto-injury" },
    { name: "Sports Injuries", slug: "sports-injury", href: "/conditions/other/sports-injury" },
  ] as ConditionLink[],
};

export const treatments = {
  headline: "Our Physical Therapy Programs",
  body: "Each program is tailored to your diagnosis, injury type, and recovery goals.",
  items: [
    { name: "Orthopedic Rehab", slug: "orthopedic-rehab", href: "/services/physical-therapy/orthopedic-rehab", description: "Recovery from fractures, joint injuries, and orthopedic surgery" },
    { name: "Work Injury Rehab", slug: "work-injury-rehab", href: "/services/physical-therapy/work-injury-rehab", description: "Rehabilitation focused on returning safely to job duties" },
    { name: "Auto Injury Rehab", slug: "auto-injury-rehab", href: "/services/physical-therapy/auto-injury-rehab", description: "Targeted recovery from whiplash and accident-related injuries" },
    { name: "Post-Surgical Rehab", slug: "post-surgical-rehab", href: "/services/physical-therapy/post-surgical-rehab", description: "Structured recovery after spine, joint, and soft tissue surgeries" },
    { name: "Sports Rehab", slug: "sports-rehab", href: "/services/physical-therapy/sports-rehab", description: "Performance-focused recovery for athletes and active adults" },
    { name: "Balance & Strength Programs", slug: "balance-and-strength-programs", href: "/services/physical-therapy/balance-and-strength-programs", description: "Fall prevention and core stability training" },
  ] as TreatmentLink[],
};

export const approach = {
  headline: "What Physical Therapy Involves",
  body: "Your therapy plan may include manual therapy (hands-on techniques to improve joint mobility and reduce muscle tension), therapeutic exercises tailored to your diagnosis, gait and balance training, work simulation activities for return-to-work preparation, and a home exercise program you can continue between sessions.\n\nSessions typically last 45–60 minutes and are scheduled two to three times per week during the most active phase of recovery. As you improve, visit frequency decreases and your home program takes a larger role.",
  highlights: [
    "Manual therapy and soft tissue mobilization",
    "Strengthening and flexibility exercises",
    "Functional movement and work simulation",
    "Balance and gait training",
    "Home exercise program development",
    "Progress tracking and regular re-evaluations",
  ],
};

export const process = {
  headline: "What to Expect from Physical Therapy",
  steps: [
    { step: "01", title: "Evaluation", description: "Your therapist conducts a comprehensive initial evaluation — reviewing your medical records, physician notes, and imaging findings, then assessing your posture, range of motion, strength, sensation, and functional movement patterns. You'll discuss your recovery goals clearly: return to a physically demanding job, get back to a recreational sport, or simply move through daily activities without pain. This baseline shapes every subsequent session." },
    { step: "02", title: "Personalized Plan", description: "Based on your evaluation findings and your physician's clinical recommendations, we build a structured therapy plan with specific techniques, exercise progressions, and measurable milestones. The plan accounts for your diagnosis, your work demands, your current functional level, and any precautions from surgery or ongoing pain management treatment." },
    { step: "03", title: "Regular Sessions", description: "You attend sessions two to three times per week during the most intensive phase of recovery. Each session integrates hands-on treatment — manual therapy, mobilization, soft tissue work — with progressive therapeutic exercise. Your therapist monitors your response at each visit and adjusts the challenge level accordingly, making sure you're always progressing without being pushed past safe limits." },
    { step: "04", title: "Home Exercises", description: "Between clinic sessions, you follow a home exercise program that reinforces the gains made during treatment. Your therapist explains each exercise clearly, demonstrates proper form, and gives you benchmarks so you know you're doing them correctly. Adherence to the home program is one of the strongest predictors of a good outcome." },
    { step: "05", title: "Re-Evaluation and Graduation", description: "We perform formal re-evaluations at regular intervals to measure objective progress — range of motion, strength, functional movement quality, and pain scores — and adjust your plan based on the data. When your functional goals are met, we transition you to a home maintenance program and discharge you with the tools to protect your recovery independently." },
  ] as ProcessStep[],
};

export const whyChooseUs = {
  headline: "Why Choose Rand Medical Center for Physical Therapy?",
  features: [
    { icon: "link", title: "Direct Coordination With Your Doctors", description: "Your therapist communicates directly with your pain management physician or orthopedic surgeon — no faxes sitting in queues, no delayed orders, no miscommunication about weight-bearing restrictions or activity modifications. When your clinical picture changes, every member of your team knows promptly." },
    { icon: "briefcase", title: "Work Injury and Auto Accident Specialization", description: "Our therapists have deep experience with Illinois workers' compensation and personal injury cases — including functional capacity evaluations (FCEs), work hardening and work conditioning programs, return-to-work testing, and the detailed progress documentation that carriers and attorneys require. We understand what 'light duty' and 'full duty' mean in practical terms for specific occupations." },
    { icon: "dumbbell", title: "Fully Equipped Rehab Gym", description: "Our rehabilitation gym is equipped for the full range of recovery needs — from manual therapy tables and modalities to free weights, resistance equipment, balance training tools, and sport-specific functional movement stations. Whether you're rebuilding fine motor control in your hand or training to return to heavy lifting, we have the space and equipment to progress your program." },
    { icon: "calendar", title: "Flexible Scheduling", description: "We offer appointment times designed around real-world schedules, including early and late slots that work for patients who are still employed, managing childcare, or attending multiple medical appointments. Consistent scheduling is one of the most important factors in a successful rehabilitation outcome, and we make it as easy as possible." },
    { icon: "map-pin", title: "Arlington Heights Location", description: "Our clinic is centrally located and easily accessible for patients from Mount Prospect, Palatine, Des Plaines, Rolling Meadows, and across the northwest Chicago suburbs — saving you the time and stress of traveling to a larger medical campus in the city." },
  ] as FeatureItem[],
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" },
    { name: "Orthopedics", slug: "orthopedics", href: "/services/orthopedics" },
    { name: "Injury Services", slug: "injury-services", href: "/services/injury-services" },
    { name: "Immediate Care", slug: "immediate-care", href: "/services/immediate-care" },
  ] as ServiceLink[],
};

export const relatedBlogPosts = {
  headline: "Physical Therapy Resources",
  posts: [
    { title: "What to Expect at Your First Physical Therapy Visit", slug: "first-physical-therapy-visit", href: "/blog/first-physical-therapy-visit", category: "Physical Therapy" },
    { title: "5 Stretches for Lower Back Pain Relief", slug: "stretches-lower-back-pain", href: "/blog/stretches-lower-back-pain", category: "Physical Therapy" },
    { title: "How Long Will I Need Physical Therapy?", slug: "how-long-need-physical-therapy", href: "/blog/how-long-need-physical-therapy", category: "Physical Therapy" },
  ] as BlogPostLink[],
};

export const ctaSection = {
  headline: "Start Your Recovery Today",
  body: "Whether you're recovering from a work injury, an auto accident, orthopedic surgery, or persistent pain that hasn't improved on its own, our physical therapy team in Arlington Heights, IL is ready to build a recovery plan around your specific diagnosis and goals. With direct coordination between your therapist, your pain management physician, and your orthopedic surgeon — all under one roof — your rehabilitation stays on course from the first session to discharge. Call (224) 735-3522 or schedule your evaluation online today.",
  primaryCTA: { text: "Schedule a PT Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Do I need a referral for physical therapy?", answer: "Illinois law permits direct access to physical therapy without a physician referral, and many patients come to us this way. However, some insurance plans — particularly HMOs — still require a referral before covering PT services. Our front desk team will verify your specific insurance requirements before your first visit. If a referral is needed, our on-site physicians can issue one quickly, often the same day." },
  { question: "How many physical therapy sessions will I need?", answer: "The number of sessions depends heavily on your diagnosis, injury severity, and how your body responds to treatment. Many acute injuries and post-surgical cases show meaningful progress within six to twelve sessions over three to six weeks. Complex injuries, failed-back surgery syndrome, or multi-level spinal conditions may require longer courses of eight to sixteen weeks. Your therapist will give you a realistic estimated timeline at your initial evaluation and update it as your recovery progresses." },
  { question: "Will physical therapy be painful?", answer: "Some therapeutic discomfort is normal and expected — particularly when manual therapy is addressing stiff joints or tight muscle tissue, or when exercises challenge recently healed structures. Your therapist will explain what you should feel during each technique and monitor your response carefully. The principle is appropriate challenge, not unnecessary pain. If something causes sharp or worsening pain, tell your therapist immediately — the approach will be adjusted." },
  { question: "Can I do physical therapy while also getting injections or other procedures?", answer: "Yes, and combining the two typically produces better outcomes than either alone. Pain management injections — such as epidural steroids or joint injections — reduce inflammation and pain intensity, which allows you to participate more fully and productively in therapy. Physical therapy then rebuilds the strength and movement patterns that protect the treated area from re-injury. Our team coordinates the timing between procedures and therapy sessions to maximize the benefit of both." },
  { question: "Do you accept workers' compensation for physical therapy?", answer: "Yes. We treat injured workers under Illinois workers' compensation regularly and are experienced with all WC documentation requirements — including initial evaluations, progress notes, functional capacity evaluations (FCEs), work conditioning documentation, and return-to-work reports. Our administrative team handles carrier communication so your treatment isn't delayed by billing issues." },
];
