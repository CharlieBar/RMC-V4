// src/content/services/orthopedics/index.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Orthopedics (Service Pillar)
// ─────────────────────────────────────────────────────────

import type { SEOMeta, HeroSection, ConditionLink, TreatmentLink, ServiceLink, BlogPostLink, ProcessStep, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Orthopedic Care in Arlington Heights, IL | Rand Medical Center",
  description:
    "Orthopedic surgeons in Arlington Heights, IL treating fractures, joint replacements, sports injuries, and arthritis — with on-site imaging, same-day appointments, and in-house PT. Call (224) 735-3522.",
  keywords: [
    "orthopedic doctor Arlington Heights IL",
    "bone and joint specialist near me",
    "fracture care Arlington Heights",
    "sports injury doctor northwest Chicago suburbs",
    "joint replacement Arlington Heights",
  ],
  canonical: "https://www.randmedicalcenter.com/services/orthopedics",
};

export const hero: HeroSection = {
  eyebrow: "Orthopedics",
  headline: "Orthopedic Care in Arlington Heights, IL",
  subheadline:
    "Board-certified orthopedic surgeons treating fractures, sports injuries, joint degeneration, and spinal conditions — with on-site imaging, an outpatient surgery center, and in-house physical therapy for seamless recovery.",
  primaryCTA: { text: "Schedule an Orthopedic Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
  image: { src: "/images/services/orthopedics-hero.jpg", alt: "Orthopedic surgeon examining a patient's knee at Rand Medical Center" },
};

export const intro = {
  headline: "Bone, Joint, and Musculoskeletal Expertise",
  body: "Whether you've broken a bone in a fall, torn a ligament during a weekend soccer game, or are dealing with years of progressive knee or hip arthritis that's now limiting your daily function, the orthopedic team at Rand Medical Center in Arlington Heights, IL has the depth to manage your case from first evaluation through full recovery.\n\nOur orthopedic surgeons treat the complete spectrum of musculoskeletal conditions. On the acute side, that includes fracture evaluation and casting, ligament and tendon injuries, and emergency splinting for injuries that can't wait. On the elective side, we perform arthroscopic knee and shoulder procedures — including meniscus repairs, ACL reconstructions, and rotator cuff repairs — along with total and partial joint replacements for patients with end-stage arthritis in the hip or knee. Spinal conditions, including herniated discs and spinal stenosis, are also within our surgical scope when conservative measures have been exhausted.\n\nWhat distinguishes our orthopedic program is continuity. Imaging is reviewed the same day it's taken. Our pain management team can provide joint injections or nerve blocks to bridge the gap while surgical scheduling is arranged. After any procedure, physical therapy begins in our own rehabilitation gym under therapists who communicate directly with your surgeon. For patients in Arlington Heights, Palatine, Mount Prospect, and the surrounding northwest Chicago suburbs, this level of integrated orthopedic care is available without the wait times and logistical complexity of a large hospital system.\n\nWe also carry substantial experience with work-related orthopedic injuries and auto accident musculoskeletal trauma — including the detailed documentation, work status reporting, and case manager communication that these cases require.",
  secondaryImage: { src: "/images/services/orthopedics-xray-review.jpg", alt: "Orthopedic X-ray review at Rand Medical Center" },
};

export const conditionsTreated = {
  headline: "Orthopedic Conditions We Treat",
  body: "Our orthopedic team evaluates and treats a wide range of bone, joint, and musculoskeletal conditions:",
  conditions: [
    { name: "Knee Pain", slug: "knee-pain", href: "/conditions/joints/knee-pain" },
    { name: "Hip Pain", slug: "hip-pain", href: "/conditions/joints/hip-pain" },
    { name: "Shoulder Pain", slug: "shoulder-pain", href: "/conditions/joints/shoulder-pain" },
    { name: "Arthritis", slug: "arthritis", href: "/conditions/joints/arthritis" },
    { name: "Osteoarthritis", slug: "osteoarthritis", href: "/conditions/joints/osteoarthritis" },
    { name: "Fractures", slug: "fractures", href: "/conditions/other/sports-injury" },
    { name: "Sports Injuries", slug: "sports-injury", href: "/conditions/other/sports-injury" },
    { name: "Elbow & Hand Pain", slug: "elbow-hand-pain", href: "/conditions/joints/elbow-hand-pain" },
    { name: "Foot & Ankle Pain", slug: "foot-ankle-pain", href: "/conditions/joints/foot-ankle-pain" },
    { name: "Herniated Disc", slug: "herniated-disc", href: "/conditions/spine/herniated-disc" },
    { name: "Spinal Stenosis", slug: "spinal-stenosis", href: "/conditions/spine/spinal-stenosis" },
    { name: "Scoliosis", slug: "scoliosis", href: "/conditions/spine/scoliosis" },
    { name: "Carpal Tunnel Syndrome", slug: "carpal-tunnel", href: "/conditions/nerves/carpal-tunnel" },
  ] as ConditionLink[],
};

export const treatments = {
  headline: "Orthopedic Services and Procedures",
  body: "From conservative management to surgical intervention, we match each patient with the right level of care.",
  items: [
    { name: "Joint Replacement", slug: "joint-replacement", href: "/services/orthopedics/joint-replacement", description: "Hip and knee replacement for severe arthritis or joint damage" },
    { name: "Spine Surgery", slug: "spine-surgery", href: "/services/orthopedics/spine-surgery", description: "Surgical correction of herniated discs, stenosis, and structural spine problems" },
    { name: "Fracture Care", slug: "fracture-care", href: "/services/orthopedics/fracture-care", description: "Evaluation, imaging, casting, splinting, and surgical repair of broken bones" },
    { name: "Sports Medicine", slug: "sports-medicine", href: "/services/orthopedics/sports-medicine", description: "Non-surgical and surgical care for sprains, strains, and overuse injuries" },
    { name: "Arthroscopic Surgery", slug: "arthroscopic-surgery", href: "/services/orthopedics/arthroscopic-surgery", description: "Minimally invasive joint surgery through small incisions" },
    { name: "Fracture Clinic", slug: "fracture-clinic", href: "/services/orthopedics/fracture-clinic", description: "Dedicated clinic for prompt fracture evaluation and treatment planning" },
  ] as TreatmentLink[],
};

export const approach = {
  headline: "Our Approach to Orthopedic Care",
  body: "Orthopedic care at Rand Medical Center starts with a thorough evaluation — your surgeon reviews your history, examines the affected area, and orders imaging when needed. We believe in explaining your diagnosis clearly and presenting all reasonable options before recommending a path.\n\nMany orthopedic conditions respond well to conservative treatment — physical therapy, bracing, injections, and activity modification. When surgery is the best option, our surgeons perform procedures at our affiliated outpatient surgery center, and your physical therapy begins right here in our building.\n\nFor work injury and auto accident patients, we coordinate documentation, work status reports, and communication with case managers and attorneys throughout your treatment.",
  highlights: [
    "Thorough evaluation with on-site imaging",
    "Conservative treatment options explored first",
    "On-site outpatient surgery center for procedures",
    "Coordinated post-surgical rehabilitation in our PT gym",
    "Workers' comp and auto accident documentation expertise",
  ],
};

export const process = {
  headline: "What to Expect at Your Orthopedic Visit",
  steps: [
    { step: "01", title: "Examination", description: "Your orthopedic surgeon takes a detailed history — including when the problem started, what activities aggravate it, and how it affects your work and daily life. The physical exam assesses range of motion, joint stability, strength, and neurovascular status. For acute injuries, swelling, point tenderness, and neurovascular status guide the urgency of the next steps." },
    { step: "02", title: "Imaging", description: "We obtain X-rays on-site and review them with you during your appointment. For soft tissue injuries — ligament tears, rotator cuff pathology, disc herniations — we coordinate MRI scheduling promptly and review results as soon as they're available, usually within one to three business days." },
    { step: "03", title: "Diagnosis and Options", description: "Your surgeon explains your diagnosis in clear, plain language and presents the full range of treatment options — from conservative care like bracing, activity modification, and injections, to surgical repair or reconstruction. No path is pushed prematurely; you'll understand the rationale for each option before making any decision." },
    { step: "04", title: "Treatment and Recovery", description: "Whether your plan involves immobilization, a pain management injection, an arthroscopic procedure, or a joint replacement, every step is coordinated within our clinic. Surgical scheduling, pre-op clearance, post-op physical therapy, and follow-up imaging all happen here — keeping your recovery on schedule." },
  ] as ProcessStep[],
};

export const whyChooseUs = {
  headline: "Why Choose Rand Medical Center for Orthopedic Care?",
  features: [
    { icon: "building", title: "On-Site Surgery Center", description: "Arthroscopic procedures, joint replacements, and other surgeries are performed at our affiliated outpatient surgery center — no hospital admission required for most cases. You arrive, have your procedure, and go home the same day in a modern, accredited facility designed specifically for outpatient orthopedic care." },
    { icon: "refresh-cw", title: "Seamless Rehab Coordination", description: "Post-surgical physical therapy begins right here in our building, supervised by therapists who communicate directly with your surgeon throughout your recovery. There's no handoff delay, no repeated intake paperwork, and no risk of mixed signals between your surgical and rehabilitation teams." },
    { icon: "scan", title: "On-Site Imaging", description: "X-rays are taken and reviewed on-site during your appointment, giving your surgeon the information needed to diagnose and plan treatment the same day. When MRI or CT is required, we coordinate rapid scheduling and review results promptly." },
    { icon: "briefcase", title: "Injury Case Experience", description: "We handle work-related fractures, joint injuries, and auto accident musculoskeletal trauma regularly — including all workers' compensation documentation, work status reports, functional limitations, and attorney coordination. Our records are built to the standard that carriers and legal teams require." },
    { icon: "map-pin", title: "Arlington Heights Location", description: "Our clinic is easy to reach from Mount Prospect, Palatine, Des Plaines, Schaumburg, Rolling Meadows, and the northwest Chicago suburbs — offering specialist-level orthopedic care without a long drive or extended hospital wait." },
  ] as FeatureItem[],
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management", description: "Injections and procedures to manage pain alongside orthopedic care" },
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy", description: "Post-surgical and injury rehabilitation" },
    { name: "Immediate Care", slug: "immediate-care", href: "/services/immediate-care", description: "Walk-in visits for urgent fractures and injuries" },
    { name: "Diagnostic Imaging", slug: "diagnostic-surgical-services", href: "/services/diagnostic-surgical-services", description: "On-site X-rays and imaging coordination" },
  ] as ServiceLink[],
};

export const relatedBlogPosts = {
  headline: "Orthopedic Resources",
  posts: [
    { title: "Sports Injury Recovery: When Can I Play Again?", slug: "sports-injury-recovery-timeline", href: "/blog/sports-injury-recovery-timeline", category: "Injury Recovery" },
    { title: "Strengthening Exercises for Knee Pain", slug: "strengthening-exercises-knee-pain", href: "/blog/strengthening-exercises-knee-pain", category: "Physical Therapy" },
    { title: "Signs Your Injury Needs Medical Attention", slug: "injury-signs-need-medical-attention", href: "/blog/injury-signs-need-medical-attention", category: "Injury Recovery" },
  ] as BlogPostLink[],
};

export const ctaSection = {
  headline: "Schedule an Orthopedic Evaluation",
  body: "If you're dealing with a fracture, progressive joint pain, a sports injury that isn't healing, or a musculoskeletal problem that's limiting your work or daily life, our orthopedic team in Arlington Heights is ready to help. We offer same-day and next-day appointments for urgent injuries, and a full surgical and rehabilitation program for complex conditions. Call (224) 735-3522 or schedule online — and get a clear diagnosis and a plan you can act on.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Do I need a referral to see an orthopedic surgeon?", answer: "In most cases, no — you can call us directly at (224) 735-3522 to schedule an orthopedic evaluation. Some insurance plans, particularly HMOs, may require a primary care referral. Our front desk team can verify your specific requirements before your visit so there are no surprises." },
  { question: "When should I see an orthopedic surgeon instead of my primary care doctor?", answer: "An orthopedic evaluation is appropriate if you have a suspected fracture, a ligament or tendon injury that isn't improving after two to four weeks, joint pain that's limiting your daily activities or sleep, symptoms of nerve compression such as weakness or numbness in an arm or leg, or if your primary care doctor has recommended a specialist for a bone or joint problem." },
  { question: "Do you treat work injuries and auto accident injuries?", answer: "Yes, and it's a significant part of our orthopedic practice. We treat fractures, joint injuries, disc herniations, and soft tissue injuries resulting from workplace accidents and motor vehicle collisions. Our team handles all workers' compensation documentation — including initial reports, work status restrictions, progress notes, and return-to-work clearances — as well as personal injury case records and attorney communication." },
  { question: "Will I need surgery?", answer: "Not necessarily, and we don't recommend it until conservative options have been given a genuine trial. Many orthopedic conditions — including rotator cuff tendinopathy, knee meniscus tears, lumbar disc herniations, and moderate arthritis — respond well to physical therapy, bracing, corticosteroid injections, or a combination. Surgery is recommended when the diagnosis clearly warrants it and when non-surgical treatment hasn't provided adequate functional improvement." },
  { question: "How long is recovery after orthopedic surgery?", answer: "Recovery timelines vary considerably by procedure. Knee arthroscopy for a meniscus tear often allows return to light activity within two to four weeks and full function in six to twelve weeks. ACL reconstruction typically requires six to nine months before return to sport. Total joint replacement — hip or knee — usually involves three to six months of progressive rehabilitation before full return to normal activities. Your surgeon will walk you through a specific recovery roadmap before your procedure." },
];
