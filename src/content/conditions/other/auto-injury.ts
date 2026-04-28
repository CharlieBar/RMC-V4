// src/content/conditions/other/auto-injury.ts
// Rand Medical Center — Auto Accident Injuries (Condition Page)

import type { SEOMeta, HeroSection, SymptomItem, CauseItem, ConditionLink, TreatmentLink, ServiceLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Auto Accident Injury Treatment in Arlington Heights, IL | Rand Medical Center",
  description: "Auto accident injury treatment in Arlington Heights, IL. Whiplash, back pain, disc injuries, and soft-tissue trauma from car accidents — with full documentation support. Call (224) 735-3522.",
  keywords: ["auto injury treatment Arlington Heights", "auto injury doctor near me", "auto accident injuries specialist", "whiplash treatment Arlington Heights IL", "car accident doctor northwest suburbs"],
  canonical: "https://www.randmedicalcenter.com/conditions/other/auto-injury",
};

export const hero: HeroSection = {
  eyebrow: "Other Conditions",
  headline: "Auto Accident Injuries Treatment in Arlington Heights, IL",
  subheadline: "Pain after a car accident can worsen over the first 48–72 hours — and early documentation protects both your health and your claim. Our Arlington Heights team evaluates and treats auto injuries with the urgency and thoroughness they require.",
  primaryCTA: { text: "Schedule an Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const definition = {
  headline: "Auto Accident Injuries: What You Need to Know",
  body: "Motor vehicle accidents generate tremendous forces in fractions of a second. Even a seemingly minor rear-end collision at 10–15 mph can produce enough cervical hyperextension-flexion to strain the neck's muscles, ligaments, and facet joint capsules — the injury pattern called whiplash. Higher-speed collisions, side impacts, and rollovers produce more severe and varied injuries: lumbar disc herniations, thoracic compression fractures, shoulder injuries from seatbelt restraint, and traumatic brain injury.\n\nOne of the most clinically important features of auto accident injuries is the delayed onset of symptoms. Adrenaline released at the time of the accident can mask pain for hours, and the inflammatory response that produces the most pronounced pain and stiffness typically peaks 24–72 hours after the collision. Many patients describe being 'fine' immediately after a crash, only to wake the next morning unable to turn their head or get out of bed without severe back pain. This delayed presentation has important legal and medical implications: seeking evaluation within 24–72 hours of a crash — even if you initially feel okay — creates an accurate medical record and allows treatment to begin before the inflammatory cycle fully escalates.\n\nThe most common auto injury presentations include whiplash-associated neck pain and headaches, lumbar and thoracic muscle strains, acute disc herniations from axial loading forces, shoulder injuries (labral tears, rotator cuff damage), and traumatic concussion. Multiple injuries often co-exist and should be evaluated simultaneously.\n\nAt Rand Medical Center in Arlington Heights, IL, we are fully equipped to evaluate and treat the complete spectrum of auto accident injuries — and to handle all the medical documentation that injury cases require.",
};

export const symptoms = {
  headline: "Common Auto Accident Injury Symptoms",
  items: [
    { text: "Neck pain and stiffness (whiplash)", detail: "The most common auto injury symptom. Whiplash-associated neck pain is typically worst 1–2 days after the accident as inflammation peaks. Patients experience severe stiffness, limited rotation, pain with any head movement, and often headaches at the base of the skull. Without treatment, acute whiplash can become chronic cervicogenic headache and neck pain lasting months or years." },
    { text: "Back pain that develops hours to days after the accident", detail: "Lumbar muscle strains, ligament sprains, and disc injuries from the compressive forces of a collision often produce delayed-onset back pain. The pain may begin as stiffness and progress to severe aching or sharp, movement-limiting pain over the first 24–72 hours. Disc herniations can produce radiating leg pain (sciatica) days to weeks after the initial crash." },
    { text: "Headaches after a car accident", detail: "Post-traumatic headaches following a car accident can have multiple sources: cervicogenic headache from injured cervical joints and muscles, concussion-related headache from mild traumatic brain injury, or muscle tension headache from neck strain. They often coexist and require different treatments — which is why characterizing their pattern is important at evaluation." },
    { text: "Shoulder and arm pain", detail: "Seatbelt-restrained occupants can sustain shoulder impingement, rotator cuff strain, or labral tears from the restraint force during a frontal collision. Direct impact injuries, bracing posture with arms on the steering wheel at impact, or airbag deployment can all produce shoulder trauma that requires imaging and evaluation separate from the cervical spine." },
    { text: "Numbness or tingling in arms or legs", detail: "Radiating neurological symptoms after a car accident indicate nerve involvement — usually from an acute disc herniation or nerve root irritation from facet joint injury. Arm tingling or numbness after a whiplash injury suggests cervical nerve root irritation; leg symptoms suggest lumbar disc or nerve root injury. These symptoms warrant prompt imaging." },
    { text: "Difficulty sleeping due to pain", detail: "Severe post-accident pain from whiplash, back injuries, or shoulder trauma frequently disrupts sleep — patients are unable to find a comfortable position, wake multiple times from pain, and experience the compounding fatigue that poor sleep produces. Sleep disruption slows recovery and amplifies pain perception, making early treatment and pain control particularly important." }
  ] as SymptomItem[],
};

export const causes = {
  headline: "Common Auto Accident Injury Mechanisms",
  items: [
    { text: "Whiplash from rear-end or side-impact collisions", detail: "Rear-end collisions are the most common cause of whiplash. The torso is accelerated forward by the seat while the head lags behind in extension, then snaps forward in flexion — the entire sequence occurring in under 200 milliseconds, far faster than voluntary muscle protection can respond. Side impacts create lateral flexion-rotation forces on the cervical spine that are equally injurious." },
    { text: "Acute disc herniations from sudden deceleration", detail: "Axial compressive forces combined with forward flexion during sudden deceleration can herniate lumbar or cervical discs — particularly at levels already affected by pre-existing degeneration. Post-accident disc herniations may produce immediate or delayed radicular symptoms and often require imaging to confirm." },
    { text: "Muscle and ligament strains", detail: "The paraspinal muscles and cervical and lumbar ligaments are among the most consistently injured structures in auto accidents. Ligament sprains — particularly the posterior capsular ligaments of the cervical facet joints — are a major source of persistent whiplash pain that may not be visible on standard MRI but produces profound functional limitation." },
    { text: "Joint sprains and facet injuries", detail: "The facet joints in the cervical and lumbar spine are vulnerable to capsular tearing during the sudden angular forces of a collision. Facet-mediated pain is one of the most common sources of persistent post-whiplash neck pain and can be diagnosed and treated effectively with targeted facet blocks and, when needed, radiofrequency ablation." },
    { text: "Nerve compression from post-injury swelling and inflammation", detail: "The inflammatory response to muscular, ligamentous, and disc injury produces swelling that can compress adjacent nerve roots in the already-narrow foraminal space. This mechanism explains why radicular symptoms — arm or leg pain, numbness, tingling — sometimes develop or worsen in the days following an accident rather than immediately." }
  ] as CauseItem[],
};

export const whenToSeeDoctor = {
  headline: "When to See a Doctor",
  body: "See a doctor if your symptoms last more than a few weeks, are getting worse, started after an injury or accident, or are affecting your ability to work and perform daily activities. Our team in Arlington Heights can often see you the same day or next day.",
  redFlags: [
    "Neck pain after a high-speed collision or rollover — cervical fracture must be ruled out with imaging before mobilization",
    "New weakness, numbness, or loss of coordination in the arms or legs after any car accident — possible spinal cord or nerve root injury",
    "Headache, confusion, memory difficulty, or vision changes after a collision — possible concussion or traumatic brain injury requiring evaluation",
    "Loss of consciousness during or after the accident — always warrants emergency evaluation regardless of how well you feel subsequently"
  ],
};

export const howWeHelp = {
  headline: "Auto Accident Injury Treatment at Rand Medical Center",
  body: "At Rand Medical Center, auto accident injury care begins with a prompt, thorough evaluation that serves dual purposes: accurate diagnosis to direct your treatment, and a legally valid medical record that documents your injuries. Your physician performs a full musculoskeletal and neurological examination, orders on-site X-rays to assess for fractures and alignment changes, and coordinates MRI or advanced imaging when soft-tissue or nerve injuries are suspected.\n\nTreatment follows a structured sequence. For whiplash and soft-tissue injuries, physical therapy begins early — cervical and lumbar mobilization, manual therapy for muscle spasm, postural restoration, and progressive strengthening. Early, active rehabilitation produces significantly better outcomes than rest alone and reduces the risk of chronic post-whiplash syndrome.\n\nFor patients with significant pain limiting function or therapy participation, our pain management physicians provide targeted interventions: trigger point injections for acute muscle spasm, cervical or lumbar epidural steroid injections for nerve root inflammation from disc injuries, and facet joint blocks when facet-mediated pain is identified. These procedures are performed promptly — we do not make patients wait weeks for access to interventional care.\n\nOn the documentation side, we provide complete, legally compliant injury documentation from the first visit forward: accident-related diagnoses, mechanism of injury, treatment plans, work-status letters, and regular progress notes for your attorney and insurance carrier. We work with personal injury attorneys and coordinate medical liens when needed, so financial concerns do not delay your care.",
};

export const treatmentOptions = {
  headline: "Treatment Options",
  treatments: [
    { name: "Motor Vehicle Accidents", slug: "motor-vehicle-accidents", href: "/services/injury-services/motor-vehicle-accidents" },
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" },
    { name: "Auto Injury Rehab", slug: "auto-injury-rehab", href: "/services/physical-therapy/auto-injury-rehab" }
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
    { name: "Neck Pain", slug: "neck-pain", href: "/conditions/spine/neck-pain" },
    { name: "Back Pain", slug: "back-pain", href: "/conditions/spine/back-pain" },
    { name: "Whiplash", slug: "whiplash", href: "/conditions/other/auto-injury" }
  ] as ConditionLink[],
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    { name: "Injury Services", slug: "injury-services", href: "/services/injury-services" },
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" },
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" }
  ] as ServiceLink[],
};

export const relatedBlogPosts = { headline: "Resources", posts: [] };

export const ctaSection = {
  headline: "Hurt in a Car Accident? Get Evaluated in Arlington Heights Today",
  body: "Early evaluation after a car accident protects your health and your legal rights. Our team at Rand Medical Center in Arlington Heights can see you the same day or next day, perform a thorough injury evaluation, begin treatment immediately, and handle all documentation for your insurance or attorney. Don't wait — call (224) 735-3522 or schedule online now.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "How soon after a car accident should I see a doctor?", answer: "As soon as possible — ideally within 24–72 hours. This is the most important step you can take for both your health and your legal interests. Early evaluation creates a contemporaneous medical record linking your injuries to the accident. Waiting days or weeks creates a gap that insurance adjusters may use to argue that your injuries were pre-existing or unrelated. Many of our patients come in the same day or the day after their accident, even if symptoms feel mild at first." },
  { question: "Do I need to use my health insurance for auto accident injuries?", answer: "Not necessarily. Auto accident injuries are typically covered under the at-fault driver's liability insurance or your own auto insurance's medical payments coverage (MedPay). In Illinois, you can also use a medical lien arrangement, in which treatment costs are deferred until your personal injury case settles — meaning you pay nothing upfront. Our team will help you understand your coverage options and coordinate billing appropriately at your first visit." },
  { question: "Do I need a lawyer to see you for an auto accident injury?", answer: "No. You do not need an attorney to receive treatment at Rand Medical Center for an auto injury. Many patients come directly without legal representation. If you choose to work with a personal injury attorney, we coordinate fully with your legal team — providing medical records, narrative reports, and expert documentation of your injuries. We work with many attorneys in the northwest Chicago suburbs and are experienced in the documentation requirements they need." },
  { question: "What if I have pre-existing back or neck problems?", answer: "Pre-existing conditions do not prevent you from seeking or receiving treatment for auto accident injuries. Under Illinois law and standard personal injury principles, if a car accident aggravated or worsened a pre-existing condition, the at-fault party is liable for that aggravation — this is sometimes called the 'eggshell plaintiff' doctrine. Our physicians document pre-existing conditions and the specific changes attributable to the accident accurately and completely, which is exactly the information your attorney needs." },
];
