// src/content/conditions/spine/sciatica.ts
// Rand Medical Center — Sciatica (Condition Page)

import type { SEOMeta, HeroSection, SymptomItem, CauseItem, ConditionLink, TreatmentLink, ServiceLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Sciatica Treatment in Arlington Heights, IL | Rand Medical Center",
  description: "Sciatica treatment in Arlington Heights, IL for shooting leg pain, numbness, and burning from sciatic nerve compression. Same-day appointments available. Call (224) 735-3522.",
  keywords: ["sciatica treatment Arlington Heights IL", "sciatica doctor near me", "sciatic nerve pain relief", "sciatica specialist", "leg pain from back Arlington Heights", "sciatica injection treatment northwest suburbs"],
  canonical: "https://www.randmedicalcenter.com/conditions/spine/sciatica",
};

export const hero: HeroSection = {
  eyebrow: "Spine Conditions",
  headline: "Sciatica Treatment in Arlington Heights, IL",
  subheadline: "Shooting leg pain, burning, or numbness traveling from your lower back into your leg? Our Arlington Heights team identifies the exact cause of sciatic nerve compression and builds a targeted plan to relieve it.",
  primaryCTA: { text: "Schedule an Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const definition = {
  headline: "What Is Sciatica?",
  body: "Sciatica is pain that travels along the path of the sciatic nerve \u2014 the longest and thickest nerve in the body, formed by nerve roots that exit the lumbar spine at levels L4, L5, and S1 before merging and running through the buttock and down the back of each leg to the foot. When one or more of these nerve roots is compressed or chemically irritated, the resulting pain, numbness, tingling, or weakness radiates along the nerve's distribution \u2014 often from the low back through the buttock and calf, sometimes reaching the foot and toes.\n\nSciatica is a symptom, not a diagnosis in itself. The underlying cause determines the appropriate treatment. The most common cause is a lumbar disc herniation, where the soft nucleus of an L4\u2013L5 or L5\u2013S1 disc pushes through its outer wall and contacts the adjacent nerve root, triggering both mechanical pressure and a local inflammatory response. Lumbar spinal stenosis \u2014 narrowing of the spinal canal or lateral recess \u2014 can produce similar symptoms, particularly in older adults, and is often described as leg heaviness or cramping that develops after a few minutes of walking. Less commonly, the piriformis muscle in the buttock compresses the sciatic nerve directly, producing pain that mimics disc-related sciatica but originates outside the spine.\n\nBecause the treatment approaches differ significantly across these causes, accurate diagnosis is the essential first step. At Rand Medical Center in Arlington Heights, IL, our pain management and orthopedic teams use physical examination, neurological testing, and imaging to identify the exact source of your nerve irritation \u2014 then build a targeted treatment plan around that finding.",
};

export const symptoms = {
  headline: "Common Sciatica Symptoms",
  items: [
    { text: "Sharp, burning, or shooting pain from the low back down one leg", detail: "The defining symptom of sciatica, this electric or searing pain follows the nerve's path from the lower back into the buttock, thigh, calf, and sometimes the foot. It is almost always one-sided and can range from a dull, persistent ache to a severe, incapacitating jolt with movement." },
    { text: "Numbness or tingling in the leg, foot, or toes", detail: "Nerve compression disrupts sensory signals, producing a distinct numb patch or pins-and-needles sensation along the affected dermatome. The specific location — outer calf and top of foot for L5, heel and sole for S1 — helps identify which nerve root is involved." },
    { text: "Weakness in the affected leg or foot", detail: "Motor fiber compression causes noticeable weakness in specific muscle groups. L5 nerve root involvement may make it difficult to lift the front of the foot (foot drop), while S1 compression can weaken calf push-off when walking or standing on tiptoe." },
    { text: "Pain that worsens with sitting, coughing, or sneezing", detail: "These activities increase intradiscal pressure and temporarily stretch the nerve roots. If sitting reliably triggers or intensifies your leg pain after just a few minutes, a disc herniation compressing a lumbar nerve root is a likely cause." },
    { text: "Constant pain on one side of the buttock", detail: "Deep buttock pain that doesn't move much and is present even at rest can indicate piriformis syndrome compressing the sciatic nerve within the muscle belly, or it may reflect irritation of the L5–S1 nerve root before it exits the spine." },
    { text: "Difficulty standing up or walking", detail: "Sciatica from spinal stenosis often produces leg heaviness, fatigue, or cramping after walking only a short distance — a pattern called neurogenic claudication. Patients typically find relief by sitting or leaning forward, which opens the spinal canal." },
    { text: "A pins-and-needles sensation in the leg", detail: "Paresthesias — spontaneous abnormal sensations — occur when compressed nerve fibers fire erratically. The sensation may feel like your leg has 'fallen asleep' and can be constant, intermittent, or provoked by specific positions." }
  ] as SymptomItem[],
};

export const causes = {
  headline: "Common Causes of Sciatica",
  items: [
    { text: "Herniated or bulging lumbar disc pressing on a nerve root", detail: "The most common cause of true sciatica. A tear in the outer disc wall allows the inner nucleus to bulge or extrude, directly contacting the L4, L5, or S1 nerve root and triggering both mechanical compression and a chemical inflammatory reaction that intensifies the pain signal." },
    { text: "Lumbar spinal stenosis narrowing the nerve pathway", detail: "Progressive narrowing of the central spinal canal or lateral foramen — typically from bone spurs, thickened ligaments, and disc bulging — squeezes the nerve roots. Stenotic sciatica is more common in adults over 60 and typically produces bilateral leg symptoms that worsen with walking and improve with sitting." },
    { text: "Degenerative disc disease with bone spur formation", detail: "As discs lose height with age, the facet joints carry more load and the foramen narrows. Osteophytes (bone spurs) that form along the disc and joint margins can impinge on exiting nerve roots, causing chronic, positional sciatica." },
    { text: "Piriformis syndrome — a tight hip muscle compressing the nerve", detail: "The sciatic nerve passes through or beneath the piriformis muscle in the buttock. Muscle hypertrophy, spasm, or anatomical variation can compress the nerve here — producing buttock and leg pain that is often mistaken for disc-related sciatica and requires specific physical therapy techniques for relief." },
    { text: "Spondylolisthesis — a vertebra slipping out of position", detail: "Forward slippage of one vertebra over another narrows the spinal canal at that level and can stretch or compress the exiting nerve roots. The resulting sciatica is often positional and may be accompanied by a visible step-off in the lumbar spine." },
    { text: "Work injuries involving heavy lifting or twisting", detail: "Sudden forced lumbar flexion — such as lifting a heavy load with a bent, twisted spine — is one of the most common mechanisms for acute disc herniation in the working-age population. Workers in manual trades, warehousing, and healthcare are at elevated risk." },
    { text: "Car accidents causing lumbar disc damage", detail: "The compressive and shear forces transmitted through the lumbar spine during a collision can acutely herniate a disc or accelerate pre-existing degeneration. Sciatica from a car accident may not appear immediately — symptoms sometimes peak days after the crash as inflammation builds." }
  ] as CauseItem[],
};

export const whenToSeeDoctor = {
  headline: "When to See a Doctor for Sciatica",
  body: "See a doctor if your sciatica pain lasts more than a few weeks, is getting worse instead of better, involves progressive weakness in your leg, or started after a work injury or car accident. Early treatment typically leads to better outcomes.\n\nPrompt evaluation is especially important if you notice worsening weakness, difficulty controlling your bladder or bowels, or numbness in both legs.",
  redFlags: [
    "Progressive or rapidly worsening weakness in the leg or foot — particularly new difficulty lifting the foot (foot drop)",
    "Any loss of control over bladder or bowel function, or new difficulty initiating urination (possible cauda equina syndrome — seek emergency evaluation immediately)",
    "Numbness or tingling spreading to both legs simultaneously, or involving the groin and inner thighs (saddle anesthesia)",
    "Severe, unrelenting pain that does not ease with any position change, including lying flat with knees elevated"
  ],
};

export const howWeHelp = {
  headline: "Sciatica Treatment at Rand Medical Center",
  body: "Sciatica treatment at Rand Medical Center starts with identifying the exact cause \u2014 because a herniated disc, spinal stenosis, and piriformis syndrome each require different approaches, and treating the wrong target wastes time. Your doctor performs a detailed physical and neurological examination, assesses strength and sensation in specific dermatomal patterns, and may order lumbar X-rays or coordinate an MRI to visualize the nerve compression clearly.\n\nTreatment follows a deliberate sequence. Most patients begin with a targeted physical therapy program \u2014 spinal decompression positioning, nerve mobilization techniques, and core stabilization exercises that reduce mechanical pressure on the nerve root. If pain is severe enough to prevent participation in therapy, or if there is significant nerve inflammation, our pain management physicians may perform a lumbar transforaminal epidural steroid injection, which delivers anti-inflammatory medication directly to the irritated nerve root and can produce meaningful relief within days. Selective nerve root blocks both confirm the diagnosis and provide therapeutic benefit.\n\nFor sciatica that has not responded adequately after 6\u20138 weeks of conservative care, or when neurological deficits are progressing, our orthopedic spine team evaluates whether a minimally invasive decompression procedure \u2014 such as a microdiscectomy or laminotomy \u2014 is appropriate. All consultations, procedures, and follow-up care are coordinated in one location, keeping your care efficient and well-documented.",
};

export const treatmentOptions = {
  headline: "Sciatica Treatment Options",
  treatments: [
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" },
    { name: "Epidural Steroid Injections", slug: "epidural-steroid-injections", href: "/services/pain-management/epidural-steroid-injections" },
    { name: "Transforaminal Epidurals", slug: "transforaminal-epidurals", href: "/services/pain-management/transforaminal-epidural-injections" },
    { name: "Nerve Blocks", slug: "nerve-blocks", href: "/services/pain-management/nerve-blocks" },
    { name: "Radiofrequency Ablation", slug: "radiofrequency-ablation", href: "/services/pain-management/radiofrequency-ablation" }
  ] as TreatmentLink[],
};

export const whyChooseUs = {
  headline: "Why Choose Rand Medical Center for Sciatica?",
  features: [
    { icon: "users", title: "Team-Based Approach", description: "Pain management, orthopedics, and physical therapy working together on your care plan." },
    { icon: "briefcase", title: "Work Comp and Auto Accident Experience", description: "We handle all documentation for injury cases." },
    { icon: "building", title: "On-Site Imaging and Procedures", description: "X-rays, injections, and therapy available without extra trips." },
    { icon: "map-pin", title: "Convenient Arlington Heights Location", description: "Serving Mount Prospect, Palatine, Des Plaines, and the northwest suburbs." },
  ] as FeatureItem[],
};

export const relatedConditions = {
  headline: "Related Conditions",
  conditions: [
    { name: "Back Pain", slug: "back-pain", href: "/conditions/spine/back-pain" },
    { name: "Herniated Disc", slug: "herniated-disc", href: "/conditions/spine/herniated-disc" },
    { name: "Spinal Stenosis", slug: "spinal-stenosis", href: "/conditions/spine/spinal-stenosis" },
    { name: "Piriformis Syndrome", slug: "piriformis-syndrome", href: "/conditions/muscle/piriformis-syndrome" },
    { name: "Radiculopathy", slug: "radiculopathy", href: "/conditions/spine/radiculopathy" }
  ] as ConditionLink[],
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" },
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" },
    { name: "Orthopedics", slug: "orthopedics", href: "/services/orthopedics" }
  ] as ServiceLink[],
};

export const relatedBlogPosts = { headline: "Resources", posts: [] };

export const ctaSection = {
  headline: "Stop Living With Sciatic Pain — Get Evaluated in Arlington Heights",
  body: "Sciatica that isn't properly diagnosed and treated rarely improves on its own. Our pain management and orthopedic team in Arlington Heights, IL will identify the exact source of your nerve pain, explain your options clearly, and start you on a targeted treatment path. Same-day and next-day appointments are available for patients across the northwest Chicago suburbs.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Will sciatica go away on its own?", answer: "Mild sciatica from a small disc herniation can improve over several weeks as the extruded disc material gradually resorbs and inflammation settles \u2014 the body has a natural healing mechanism for this. However, sciatica caused by moderate-to-large disc herniations, spinal stenosis, or significant nerve root compression is unlikely to resolve on its own without treatment. Without intervention, symptoms can plateau or become chronic, and delayed treatment carries a small but real risk of lasting nerve damage. Early evaluation and a structured treatment plan typically produce the best outcomes." },
  { question: "What is the fastest way to relieve sciatica?", answer: "For rapid symptom relief, a lumbar transforaminal epidural steroid injection can reduce nerve root inflammation and produce meaningful pain reduction within 3\u20137 days \u2014 significantly faster than oral medications or physical therapy alone. For lasting improvement, combining injections with a structured physical therapy program that addresses the underlying mechanical cause typically produces the best long-term results. Rest alone is not recommended; gentle, guided movement is more effective." },
  { question: "Can sciatica cause permanent damage?", answer: "In the majority of cases, sciatica resolves with appropriate treatment without any permanent neurological consequences. However, prolonged or severe nerve compression \u2014 particularly when accompanied by progressive weakness or bowel and bladder changes \u2014 can cause lasting numbness, foot drop, or muscle weakness if not treated promptly. This is why worsening neurological symptoms should not be watched and waited: they warrant prompt evaluation and escalation of treatment." },
  { question: "Is walking good for sciatica?", answer: "For most types of sciatica, gentle walking is beneficial \u2014 it promotes blood flow, prevents connective tissue stiffening, and activates the core muscles that support the lumbar spine. However, patients with spinal stenosis often find that walking triggers or worsens their leg symptoms, and shorter, more frequent walks (or walking slightly bent forward) may be better tolerated. Your physical therapist will tailor a specific activity program to your diagnosis so you're moving in a way that promotes healing, not re-irritation." }
];
