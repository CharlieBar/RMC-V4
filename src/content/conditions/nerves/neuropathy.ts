// src/content/conditions/nerves/neuropathy.ts
// Rand Medical Center — Peripheral Neuropathy (Condition Page)

import type { SEOMeta, HeroSection, SymptomItem, CauseItem, ConditionLink, TreatmentLink, ServiceLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Peripheral Neuropathy Treatment in Arlington Heights, IL | Rand Medical Center",
  description: "Peripheral neuropathy treatment in Arlington Heights, IL. Burning, tingling, and numbness in the hands and feet from nerve damage — diagnosed and treated by specialists. Call (224) 735-3522.",
  keywords: ["neuropathy treatment Arlington Heights", "neuropathy doctor near me", "peripheral neuropathy specialist", "burning feet treatment northwest suburbs", "diabetic neuropathy treatment Arlington Heights"],
  canonical: "https://www.randmedicalcenter.com/conditions/nerves/neuropathy",
};

export const hero: HeroSection = {
  eyebrow: "Nerves Conditions",
  headline: "Peripheral Neuropathy Treatment in Arlington Heights, IL",
  subheadline: "Burning feet, numbness in your hands, or electric pain that worsens at night — peripheral neuropathy has many causes, but our Arlington Heights team systematically identifies yours and builds a targeted treatment plan.",
  primaryCTA: { text: "Schedule an Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const definition = {
  headline: "What Is Peripheral Neuropathy?",
  body: "Peripheral neuropathy is damage or dysfunction of the peripheral nervous system — the vast network of motor and sensory nerves that connect the brain and spinal cord to every other part of the body. When peripheral nerves are damaged, they send abnormal signals that the brain interprets as pain, burning, tingling, or numbness, even when there is no external stimulus causing those sensations.\n\nThe peripheral nervous system includes three types of nerve fibers: motor fibers (controlling muscle movement), sensory fibers (transmitting touch, temperature, and pain signals), and autonomic fibers (regulating involuntary functions like blood pressure, heart rate, and digestion). Depending on which fiber types are damaged, neuropathy can produce a wide range of symptoms — from sensory disturbances to muscle weakness to autonomic dysfunction such as dizziness on standing.\n\nThe most common pattern of peripheral neuropathy is length-dependent polyneuropathy: symptoms begin in the longest nerves first, producing a characteristic 'stocking-and-glove' distribution where numbness and burning start in the feet and toes, then gradually advance upward toward the knees, and may later appear in the fingertips and hands. Diabetes is the leading cause of this pattern.\n\nNot all peripheral neuropathy follows this pattern. Mononeuropathy (damage to a single nerve, such as carpal tunnel syndrome) and multifocal neuropathy (damage to multiple individual nerves) have distinct causes and treatments. Identifying the type and underlying cause of neuropathy is critical to determining the appropriate treatment strategy.\n\nAt Rand Medical Center in Arlington Heights, IL, our internal medicine and pain management teams work together to evaluate neuropathy systematically — identifying treatable causes when present, and building targeted symptom management plans when the underlying condition requires ongoing management.",
};

export const symptoms = {
  headline: "Common Peripheral Neuropathy Symptoms",
  items: [
    { text: "Burning or tingling in hands or feet", detail: "The most characteristic symptom of small-fiber sensory neuropathy. The burning is typically constant, often described as 'walking on hot coals' or wearing invisible socks, and is frequently worst at night when other sensory stimuli are absent and skin temperature changes. It commonly begins in the soles of the feet before spreading." },
    { text: "Numbness that starts in the toes or fingers", detail: "In length-dependent polyneuropathy, sensory loss progresses in a predictable pattern — starting at the tips of the toes, advancing up the foot and ankle toward the knee, and eventually appearing in the fingertips. Numbness impairs the ability to detect temperature, texture, and pressure, increasing the risk of undetected foot injuries in diabetic patients." },
    { text: "Sharp, stabbing pains", detail: "Neuropathic pain is often described as electric, shooting, or stabbing — sudden, brief, intense pain signals fired erratically by damaged nerve fibers. These pain bursts can occur spontaneously or be triggered by light touch (allodynia), and they significantly disrupt sleep and daily function." },
    { text: "Sensitivity to touch (allodynia)", detail: "Allodynia — pain from normally non-painful stimuli — is a particularly distressing feature of peripheral neuropathy. The weight of bedsheets, the texture of socks, or a gentle touch on the foot can trigger significant pain. This occurs because damaged nerve fibers become hypersensitized and misfire in response to ordinary stimuli." },
    { text: "Weakness or clumsiness", detail: "When motor nerve fibers are damaged alongside sensory fibers, muscle weakness develops in the feet and lower legs — producing foot drop, difficulty with balance, and a high-stepping or shuffling gait. Weakness in the hands causes difficulty with fine motor tasks: buttoning, handwriting, picking up small objects." },
    { text: "Balance problems and fall risk", detail: "Peripheral sensory nerves continuously relay position and movement information to the brain (proprioception). When this signaling is disrupted, balance is impaired — particularly in dim lighting or on uneven surfaces where vision cannot compensate. Neuropathy-related balance problems significantly increase fall risk and are a key target of physical therapy." }
  ] as SymptomItem[],
};

export const causes = {
  headline: "Common Causes of Peripheral Neuropathy",
  items: [
    { text: "Diabetes (most common cause)", detail: "Diabetic peripheral neuropathy affects approximately 50% of people with diabetes. Chronic high blood glucose damages the small blood vessels (vasa nervorum) that supply peripheral nerves, causing progressive nerve fiber loss. Tight glycemic control slows but does not always prevent progression. Diabetic neuropathy is the leading cause of non-traumatic lower-limb amputation due to impaired protective sensation." },
    { text: "Vitamin deficiencies", detail: "Vitamin B12 deficiency is a common and treatable cause of peripheral neuropathy, particularly in older adults, vegans, and patients on metformin (which reduces B12 absorption). Deficiency of vitamins B1, B6, and E can also produce neuropathy. Blood tests identify these deficiencies, and supplementation often produces meaningful improvement." },
    { text: "Autoimmune conditions", detail: "Conditions such as lupus, rheumatoid arthritis, Sjögren's syndrome, and Guillain-Barré syndrome can damage peripheral nerves through immune-mediated mechanisms. These inflammatory neuropathies may require immunosuppressive treatment and benefit from close coordination between neurology and internal medicine." },
    { text: "Chemotherapy-induced neuropathy", detail: "Several chemotherapy agents — particularly platinum-based drugs, taxanes, and vinca alkaloids — are neurotoxic and can cause a painful peripheral neuropathy that begins during treatment and may persist long after completion. Managing this side effect is an important part of supportive oncology care." },
    { text: "Chronic alcohol use", detail: "Long-term alcohol use causes peripheral neuropathy through a combination of direct neurotoxicity and nutritional deficiencies (particularly B vitamins). Alcohol-related neuropathy typically produces a burning, painful, symmetric distal polyneuropathy that can partially improve with sobriety and nutritional correction." },
    { text: "Nerve compression or entrapment", detail: "Focal compression of individual peripheral nerves — carpal tunnel syndrome (median nerve), ulnar nerve entrapment at the elbow, or tarsal tunnel syndrome at the ankle — produces neuropathic symptoms in the distribution of the compressed nerve. These are among the most treatable forms of neuropathy, often responding well to targeted therapy, splinting, or surgical decompression." }
  ] as CauseItem[],
};

export const whenToSeeDoctor = {
  headline: "When to See a Doctor",
  body: "See a doctor if your symptoms last more than a few weeks, are getting worse, started after an injury or accident, or are affecting your ability to work and perform daily activities. Our team in Arlington Heights can often see you the same day or next day.",
  redFlags: [
    "Rapidly progressive weakness in the feet or hands over days to weeks — possible Guillain-Barré syndrome or other acute inflammatory neuropathy requiring urgent evaluation",
    "Neuropathy symptoms in a young person without diabetes or obvious risk factors — systemic disease workup is indicated",
    "Autonomic symptoms alongside peripheral neuropathy: postural dizziness, unexplained sweating changes, or bladder/bowel dysfunction — indicates involvement of autonomic nerve fibers",
    "Foot numbness in a diabetic patient with any skin breakdown, wound, or ulcer — risk of infection and amputation without immediate wound care evaluation"
  ],
};

export const howWeHelp = {
  headline: "Peripheral Neuropathy Treatment at Rand Medical Center",
  body: "At Rand Medical Center, peripheral neuropathy evaluation starts with identifying the underlying cause — because treating the root cause (when present and treatable) is far more important than symptom management alone. Your internal medicine physician reviews your medical history, performs a neurological examination, and orders targeted laboratory testing: fasting glucose, hemoglobin A1c, complete metabolic panel, thyroid function, B12 levels, and inflammatory markers as clinically appropriate.\n\nFor diabetic and pre-diabetic neuropathy — the most common type we see — close glycemic management through our internal medicine team is the foundation of treatment. Improved blood sugar control can slow and sometimes partially reverse early neuropathy. For vitamin B12 deficiency-related neuropathy, repletion with high-dose B12 supplementation or injections often produces meaningful improvement.\n\nNeuropathic pain management is approached thoughtfully. First-line medications — gabapentinoids (gabapentin, pregabalin), tricyclic antidepressants, and SNRIs (duloxetine) — reduce aberrant nerve firing and improve pain scores in the majority of patients with significant symptoms. These are titrated carefully to balance efficacy and side effects. Topical agents including lidocaine patches and capsaicin can reduce peripheral sensitization with minimal systemic effects.\n\nFor patients with focal neuropathic pain — particularly post-herpetic neuralgia or localized nerve entrapment — diagnostic and therapeutic nerve blocks can provide targeted relief. Physical therapy addresses balance, proprioception, and fall prevention, which are essential components of care for patients with significant sensory loss.",
};

export const treatmentOptions = {
  headline: "Treatment Options",
  treatments: [
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" },
    { name: "Nerve Blocks", slug: "nerve-blocks", href: "/services/pain-management/nerve-blocks" },
    { name: "Internal Medicine", slug: "internal-medicine", href: "/services/internal-medicine" }
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
    { name: "Diabetic Neuropathy", slug: "diabetic-neuropathy", href: "/conditions/nerves/diabetic-neuropathy" },
    { name: "Chronic Pain", slug: "chronic-pain", href: "/conditions/pain-syndromes/chronic-pain" },
    { name: "Carpal Tunnel", slug: "carpal-tunnel", href: "/conditions/nerves/carpal-tunnel" }
  ] as ConditionLink[],
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" },
    { name: "Internal Medicine", slug: "internal-medicine", href: "/services/internal-medicine" }
  ] as ServiceLink[],
};

export const relatedBlogPosts = { headline: "Resources", posts: [] };

export const ctaSection = {
  headline: "Find Out What's Causing Your Neuropathy — Evaluation in Arlington Heights",
  body: "Burning feet, numbness, and electric pain at night are not something you have to accept. Our internal medicine and pain management team at Rand Medical Center in Arlington Heights will identify the cause of your neuropathy, address it at the source where possible, and build an effective symptom management plan. Same-day and next-day appointments available.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Can peripheral neuropathy be cured?", answer: "Whether neuropathy is reversible depends on its cause and how early it is caught. Neuropathy from B12 deficiency, hypothyroidism, or medication toxicity often improves significantly or resolves with treatment of the underlying cause. Diabetic neuropathy can stabilize and partially improve with tight glucose control, particularly in early stages. Idiopathic neuropathy (no identifiable cause) is less likely to resolve, but its symptoms can usually be managed effectively. The most important step is early evaluation — nerve damage that is caught and addressed early causes far less long-term disability." },
  { question: "What medications are used for neuropathic pain?", answer: "Several classes of medications have good evidence for reducing neuropathic pain. Gabapentin and pregabalin (anticonvulsants) reduce abnormal nerve firing and are effective for burning and electric pain. Duloxetine (an SNRI) is FDA-approved for diabetic neuropathic pain and also improves mood in patients dealing with chronic pain. Low-dose tricyclic antidepressants work well for nighttime burning and sleep disruption. Topical lidocaine patches and capsaicin cream can address localized areas of painful numbness without systemic side effects. Your doctor will choose based on your specific symptoms, comorbidities, and other medications." },
  { question: "Is exercise safe with peripheral neuropathy?", answer: "Yes, and it is actively encouraged. Regular aerobic exercise improves circulation to peripheral nerves, supports glycemic control in diabetic patients, and has been shown in research to promote modest nerve fiber regeneration. Balance training and proprioceptive exercises specifically address the fall risk associated with sensory loss. Your physical therapist will design a safe program that accounts for your level of numbness and balance impairment." },
  { question: "What should I bring to my first neuropathy appointment?", answer: "Bring a complete medication list (including supplements), your most recent laboratory results if available (blood glucose, A1c, B12), any prior nerve conduction study reports, and a list of when your symptoms began and how they've changed over time. Knowing whether your primary care physician has already started a workup — and what it showed — allows us to build on prior testing rather than repeat it." },
];
