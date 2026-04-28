// src/content/services/injury-services/index.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Injury Services (Service Pillar)
// ─────────────────────────────────────────────────────────

import type { SEOMeta, HeroSection, TreatmentLink, ProcessStep, FeatureItem, FAQItem, ServiceLink, BlogPostLink, ConditionLink } from "@/types/content";

export const seo: SEOMeta = {
  title: "Work Injury & Auto Accident Doctors in Arlington Heights, IL | Rand Medical Center",
  description:
    "Work injury and auto accident medical care in Arlington Heights, IL — same-day evaluations, Illinois workers' comp documentation, and coordinated treatment across orthopedics, pain management, and PT. Call (224) 735-3522.",
  keywords: ["work injury doctor Arlington Heights", "car accident doctor near me", "workers compensation clinic Arlington Heights IL", "personal injury medical care", "auto accident injury treatment"],
  canonical: "https://www.randmedicalcenter.com/services/injury-services",
};

export const hero: HeroSection = {
  eyebrow: "Injury Services",
  headline: "Work Injury, Auto Accident, and Personal Injury Care",
  subheadline: "Comprehensive injury care for workers' compensation, auto accident, and personal injury patients — with same-day evaluations, detailed medical documentation, and all specialties coordinated under one roof in Arlington Heights, IL.",
  primaryCTA: { text: "Request an Injury Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
  image: { src: "/images/services/injury-services-hero.jpg", alt: "Doctor evaluating a work injury patient at Rand Medical Center" },
};

export const intro = {
  headline: "Injury Care That Covers the Medical and the Legal",
  body: "When you're injured at work, in a car accident, or in any other incident, you need more than a diagnosis and a prescription — you need a clinical team that understands the documentation standards, legal timelines, and communication protocols that protect both your health and your claim from the very first visit.\n\nRand Medical Center has built its injury care program around this dual mandate. Our physicians are experienced with the specific mechanisms of injury common in northwest Chicago suburban workplaces and on the area's busy roadways — including lumbar strains and herniations from lifting and loading at warehouse and manufacturing facilities, cervical whiplash injuries from rear-end collisions on routes like I-90 and Rand Road, carpal tunnel syndrome from repetitive assembly work, and lower extremity injuries from construction falls. We know what these injuries look like clinically, what imaging is appropriate, and what the realistic treatment and return-to-work timelines are.\n\nOn the documentation side, our administrative and clinical teams produce the records that Illinois workers' compensation carriers, personal injury attorneys, and independent medical examiners rely on. Every evaluation note includes a clear mechanism of injury, objective physical findings, diagnostic reasoning, treatment rationale, and functional limitations stated in specific, defensible terms. Work status reports are completed at every visit and faxed to employers and carriers the same day.\n\nFor auto accident and personal injury patients, we work with your attorney's office to ensure timely records delivery and, where appropriate, can provide narrative summaries that explain your injuries and treatment course clearly for settlement or litigation purposes. We also accept qualified personal injury and auto accident cases on a lien basis, so that payment delays never interrupt your care.\n\nOur clinic in Arlington Heights, IL serves injured workers and accident victims from across Cook County, the northwest Chicago suburbs, and surrounding communities.",
  secondaryImage: { src: "/images/services/injury-services-documentation.jpg", alt: "Injury documentation at Rand Medical Center" },
};

export const treatments = {
  headline: "Injury Programs",
  items: [
    { name: "Workers' Compensation", slug: "workers-compensation", href: "/services/injury-services/workers-compensation", description: "Complete work injury care, documentation, and return-to-work programs" },
    { name: "Motor Vehicle Accident Injuries", slug: "motor-vehicle-accidents", href: "/services/injury-services/motor-vehicle-accidents", description: "Evaluation and treatment for car, truck, and motorcycle accident injuries" },
    { name: "Personal Injury Medical Care", slug: "personal-injury", href: "/services/injury-services/personal-injury", description: "Slip-and-fall, premises liability, and other injury case documentation and treatment" },
    { name: "Workplace Injuries", slug: "workplace-injuries", href: "/services/injury-services/workplace-injuries", description: "Treatment plans for lifting injuries, falls, repetitive strain, and on-the-job accidents" },
  ] as TreatmentLink[],
};

export const conditionsTreated = {
  headline: "Common Injury Types We Treat",
  conditions: [
    { name: "Back Pain (Injury-Related)", slug: "back-pain", href: "/conditions/spine/back-pain" },
    { name: "Neck Pain & Whiplash", slug: "neck-pain", href: "/conditions/spine/neck-pain" },
    { name: "Sciatica", slug: "sciatica", href: "/conditions/spine/sciatica" },
    { name: "Herniated Disc", slug: "herniated-disc", href: "/conditions/spine/herniated-disc" },
    { name: "Fractures", slug: "fracture-care", href: "/services/orthopedics/fracture-care" },
    { name: "Sprains and Strains", slug: "muscle-strain", href: "/conditions/muscle/muscle-strain" },
    { name: "Shoulder Injuries", slug: "shoulder-pain", href: "/conditions/joints/shoulder-pain" },
    { name: "Knee Injuries", slug: "knee-pain", href: "/conditions/joints/knee-pain" },
    { name: "Carpal Tunnel Syndrome", slug: "carpal-tunnel", href: "/conditions/nerves/carpal-tunnel" },
    { name: "Headaches & Migraines", slug: "headaches", href: "/conditions/other/headaches" },
  ] as ConditionLink[],
};

export const approach = {
  headline: "How Injury Care Works at Rand Medical Center",
  body: "From your first visit, we treat your injury case as both a medical matter and a documentation matter. Every evaluation, diagnosis, treatment, and progress note is recorded with the detail and clarity that workers' comp carriers, personal injury attorneys, and insurance companies need.\n\nOur team coordinates your care across specialties. If you need pain management injections, orthopedic evaluation, and physical therapy, all three happen here. Your providers share information directly. You don't have to chase records or repeat your story.\n\nFor workers' compensation patients, we provide work status reports, employer communication, and return-to-work planning. For auto accident and personal injury patients, we produce objective medical records and coordinate with your legal team.",
  highlights: [
    "Same-day appointments for new injuries",
    "Detailed medical documentation from day one",
    "Work status reports and employer communication",
    "Coordination with attorneys and insurance carriers",
    "All specialties under one roof — no fragmented care",
    "Return-to-work and functional restoration programs",
  ],
};

export const process = {
  headline: "What to Expect After an Injury",
  steps: [
    { step: "01", title: "Same-Day Evaluation", description: "Call us at (224) 735-3522 immediately after your injury. For work injuries and auto accident cases, we prioritize same-day or next-day scheduling. The first evaluation establishes the foundational medical and legal record for your case — we take the time to document mechanism, symptoms, and objective findings thoroughly from the outset." },
    { step: "02", title: "Diagnosis and Imaging", description: "Your physician conducts a comprehensive examination, orders on-site X-rays or coordinates urgent MRI when indicated, and establishes a clear, defensible diagnosis with detailed records. Imaging findings are reviewed with you and documented with specific clinical correlation so the records accurately represent your injury." },
    { step: "03", title: "Treatment Plan", description: "Based on your diagnosis, we build a coordinated care plan that draws on the full scope of our clinic — pain management injections, orthopedic evaluation, physical therapy, bracing and DME, and medication management as appropriate. Each component is documented as part of a coherent treatment plan, not as isolated unrelated visits." },
    { step: "04", title: "Ongoing Care and Documentation", description: "At every follow-up visit, we update your medical records, work status notes, and functional restrictions. We communicate proactively with employers, adjusters, and attorneys as needed, providing interim reports and responding to records requests in a timely manner so your case doesn't stall due to documentation gaps." },
    { step: "05", title: "Return to Work / Settlement Support", description: "As you approach maximum medical improvement, we provide functional capacity evaluations that objectively measure your physical abilities against specific job demands. We issue final medical reports, narrative summaries, and return-to-work recommendations that give all parties the clinical clarity needed to resolve your case appropriately." },
  ] as ProcessStep[],
};

export const whyChooseUs = {
  headline: "Why Injured Patients, Employers, and Attorneys Choose Rand",
  features: [
    { icon: "file-text", title: "Documentation That Holds Up", description: "Our medical records are detailed, objective, and internally consistent — built to meet the standards that Illinois workers' compensation carriers, independent medical examiners, personal injury attorneys, and arbitrators expect. We document mechanism of injury, objective physical findings, functional limitations, and treatment rationale in clinical language that supports your claim rather than undermining it." },
    { icon: "clock", title: "Same-Day Injury Appointments", description: "New injuries receive priority scheduling at our Arlington Heights clinic. In most cases, we see you the same day or within 24 hours of your call. For workers' compensation cases, a prompt initial evaluation is critical — both for your health and for the legal timelines that protect your claim." },
    { icon: "users", title: "All Specialties, One Clinic", description: "Pain management, orthopedics, physical therapy, diagnostic imaging, and an outpatient surgery center are all coordinated in our Arlington Heights location. This means your care doesn't get fragmented across providers who don't communicate — every specialist involved in your case shares records, communicates treatment plans, and coordinates your progression from injury through recovery." },
    { icon: "briefcase", title: "Illinois Workers' Comp Expertise", description: "Our team knows Illinois workers' compensation law, WC billing requirements, and the return-to-work process in practical detail. We understand what a section 12 examination involves, how light-duty accommodations are documented, and what the maximum medical improvement determination requires — giving injured workers, employers, and adjusters the clarity they need to move cases forward." },
    { icon: "shield", title: "Lien-Based Billing for PI Cases", description: "For qualified personal injury and auto accident cases, we accept treatment on a medical lien basis — meaning your care is provided now and payment is deferred until your case resolves. This ensures that your injury treatment is never delayed by insurance disputes or out-of-pocket cost concerns during the litigation process." },
  ] as FeatureItem[],
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" },
    { name: "Orthopedics", slug: "orthopedics", href: "/services/orthopedics" },
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" },
    { name: "Immediate Care", slug: "immediate-care", href: "/services/immediate-care" },
  ] as ServiceLink[],
};

export const relatedBlogPosts = {
  headline: "Injury Resources",
  posts: [
    { title: "What to Do Immediately After a Workplace Injury", slug: "what-to-do-after-workplace-injury", href: "/blog/what-to-do-after-workplace-injury", category: "Workers' Compensation" },
    { title: "How Long Does Whiplash Take to Heal?", slug: "whiplash-recovery-timeline", href: "/blog/whiplash-recovery-timeline", category: "Injury Recovery" },
    { title: "Understanding Your Workers' Comp Rights in Illinois", slug: "workers-comp-rights-illinois", href: "/blog/workers-comp-rights-illinois", category: "Workers' Compensation" },
  ] as BlogPostLink[],
};

export const ctaSection = {
  headline: "Injured? Call Us Now.",
  body: "The sooner you're evaluated and documented after a work injury, auto accident, or personal injury incident, the better — for your health and for the integrity of your claim. Delays in seeking care create gaps in the medical record that can complicate your case later. Call (224) 735-3522 now and we'll get you in for a same-day or next-day evaluation. Our team handles the medical and the paperwork — so you can focus on getting better.",
  primaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "primary" as const },
  secondaryCTA: { text: "Schedule Online", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Do I need to tell my employer before I come in for a work injury?", answer: "Under Illinois workers' compensation law, you are required to notify your employer of a work injury within 45 days, though reporting as soon as possible is strongly advisable. However, you do not need your employer's permission to seek medical care, and you have the right to choose your own treating physician. Call us directly at (224) 735-3522 to schedule your evaluation — we'll guide you through the notification and documentation process and ensure your rights are protected from the start." },
  { question: "Can I see you after a car accident without an attorney?", answer: "Yes, and many patients come to us for medical care well before they've decided whether to pursue a legal claim. We provide complete medical evaluation and treatment regardless of your legal representation status. Our records are objective and thorough, which means they'll support your case if you later decide to consult an attorney — and they won't be a liability if you don't." },
  { question: "Will you communicate with my attorney?", answer: "Yes. We coordinate regularly with personal injury and workers' compensation attorneys — providing medical records, treatment summaries, narrative reports, and responses to legal requests. Our records are organized and formatted to be immediately useful in legal proceedings, and we respond to attorney requests promptly so your case doesn't stall waiting on medical documentation." },
  { question: "What if I was hurt at work but my employer sent me to a different doctor?", answer: "In Illinois, you have a statutory right to choose your own treating physician under the Illinois Workers' Compensation Act. If your employer directed you to a specific clinic, you may have the right to make a one-time physician change — or in some circumstances, more. Contact us at (224) 735-3522 and we'll help clarify your rights and facilitate the transition to our care without disrupting your treatment timeline." },
  { question: "How much will it cost me?", answer: "For workers' compensation cases, your treatment is covered by your employer's workers' comp insurance carrier at no out-of-pocket cost to you. For auto accident and qualifying personal injury cases, we accept treatment on a medical lien — meaning your care is rendered now and payment is deferred until your case settles or resolves. Our billing team will discuss your specific situation at your first visit so there are no surprises." },
];
