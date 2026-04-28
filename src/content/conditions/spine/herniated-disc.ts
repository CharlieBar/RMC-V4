// src/content/conditions/spine/herniated-disc.ts
// Rand Medical Center — Herniated Disc (Condition Page)

import type { SEOMeta, HeroSection, SymptomItem, CauseItem, ConditionLink, TreatmentLink, ServiceLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Herniated Disc Treatment in Arlington Heights, IL | Rand Medical Center",
  description: "Herniated disc treatment in Arlington Heights, IL. Expert care for back and leg pain from bulging or ruptured spinal discs. Conservative-first approach. Call (224) 735-3522.",
  keywords: ["herniated disc treatment Arlington Heights IL", "bulging disc doctor near me", "slipped disc treatment", "disc herniation specialist", "lumbar disc herniation Arlington Heights", "cervical herniated disc treatment northwest suburbs"],
  canonical: "https://www.randmedicalcenter.com/conditions/spine/herniated-disc",
};

export const hero: HeroSection = {
  eyebrow: "Spine Conditions",
  headline: "Herniated Disc Treatment in Arlington Heights, IL",
  subheadline: "A herniated disc compressing a nerve can cause severe back, leg, or arm pain — but most cases respond to non-surgical treatment. Our Arlington Heights team specializes in getting you the right care quickly.",
  primaryCTA: { text: "Schedule an Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const definition = {
  headline: "What Is a Herniated Disc?",
  body: "A herniated disc occurs when the soft, gel-like nucleus pulposus at the center of a spinal disc pushes through a crack or tear in the tough fibrous outer ring called the annulus fibrosus. This displaced disc material can press directly on adjacent spinal nerve roots or the spinal cord, triggering a combination of mechanical pressure and chemical inflammation that produces pain, numbness, tingling, or weakness.\n\nTo understand why this matters, consider the anatomy. The spine is composed of bony vertebrae stacked on top of one another, separated by intervertebral discs that act as shock absorbers and allow movement. At each spinal level, nerve roots exit through narrow passages called neural foramina on both sides. The disc's nucleus is under constant compressive pressure \u2014 and when the annulus weakens from injury or degenerative wear, that pressure can force nuclear material outward into the foramen or spinal canal, where even a small protrusion can contact a pain-sensitive nerve root.\n\nHerniated discs are most common in the lower back (lumbar spine), particularly at the L4\u2013L5 and L5\u2013S1 levels, which bear the highest mechanical load. The second most common location is the neck (cervical spine), especially at C5\u2013C6 and C6\u2013C7. Thoracic (mid-back) herniations are less common but do occur.\n\nDisc herniations can result from a single acute event \u2014 a heavy lift with poor mechanics, a fall, a car accident \u2014 or develop gradually through repetitive strain and age-related disc degeneration that progressively weakens the annular fibers. Many patients cannot identify a clear triggering event.\n\nAt Rand Medical Center in Arlington Heights, IL, we use clinical examination, neurological testing, and imaging to pinpoint the herniated level and determine the best individualized treatment approach.",
};

export const symptoms = {
  headline: "Common Herniated Disc Symptoms",
  items: [
    { text: "Sharp pain in the lower back or neck", detail: "The initial pain at the site of herniation is often sudden and severe, caused by annular tearing, local disc inflammation, and muscle guarding. Lower back herniations typically produce a sharp, catch-like pain that may be worst immediately after the triggering event and improves slightly after the acute phase." },
    { text: "Pain radiating into the leg (lumbar herniation) or arm (cervical herniation)", detail: "Radicular pain — pain that travels along the compressed nerve's pathway — is the hallmark of a clinically significant herniation. A lumbar herniation at L4–L5 typically sends pain into the outer thigh, shin, and top of the foot; an L5–S1 herniation sends pain into the posterior thigh, calf, and heel. Cervical herniations produce arm and hand symptoms following the affected nerve root's dermatomal distribution." },
    { text: "Numbness or tingling in the affected limb", detail: "Sensory fiber compression produces distinct numbness or tingling in a dermatomal pattern. The specific location helps identify the herniated level — for example, C6 nerve root compression typically causes altered sensation in the thumb and index finger, while L5 root compression affects the outer lower leg and top of the foot." },
    { text: "Muscle weakness in the leg, foot, arm, or hand", detail: "When motor fibers are compressed, specific muscle groups weaken. L5 herniation can impair foot and great toe dorsiflexion (difficulty lifting the foot — 'foot drop'); S1 compression weakens plantarflexion (toe push-off during walking). Cervical herniations can cause grip weakness, difficulty with fine motor tasks, or shoulder abductor weakness depending on the level." },
    { text: "Pain that worsens with bending, lifting, or sitting", detail: "Disc herniations are characteristically aggravated by positions and activities that increase intradiscal pressure: forward bending, prolonged sitting, lifting from a flexed position, and Valsalva maneuvers (coughing, sneezing). Many patients find some relief lying flat with knees slightly bent, which reduces the load on the disc." },
    { text: "Difficulty finding a comfortable position", detail: "The combination of local back or neck pain and radiating nerve pain can make it very difficult to find a comfortable resting or sleeping position. Patients often describe lying, sitting, and standing as all being painful to different degrees, and they may develop an antalgic lean — tilting away from the side of herniation to reduce nerve compression." }
  ] as SymptomItem[],
};

export const causes = {
  headline: "Common Causes of Herniated Disc",
  items: [
    { text: "Sudden heavy lifting with poor body mechanics", detail: "Loading the lumbar spine in a flexed, rotated position — as commonly occurs during manual labor, moving furniture, or warehouse work — generates enormous internal disc pressure. The annular fibers are most vulnerable to radial tearing in this position, and a single high-force lift can cause an acute herniation." },
    { text: "Car accident or trauma", detail: "The compressive and shearing forces transmitted through the spine during a vehicle collision, fall from height, or direct blow can acutely herniate a disc, particularly in the cervical or lumbar regions. A disc that was already degenerated is far more susceptible to traumatic herniation." },
    { text: "Repetitive bending or twisting at work", detail: "Cumulative microtrauma from thousands of repetitive bending and twisting motions progressively fatigues the annular fibers over months or years. Workers in construction, nursing, roofing, and warehouse industries are at elevated risk for this mechanism of herniation." },
    { text: "Age-related disc degeneration weakening the disc wall", detail: "Discs lose water content and elasticity with age, becoming stiffer and less resilient. The annular fibers develop micro-tears and lose their ability to contain the nucleus under load. This background degeneration explains why disc herniations become more common after age 30, even without a traumatic event." },
    { text: "Genetics and family history of disc problems", detail: "Research shows a significant hereditary component to disc degeneration and herniation risk. Specific gene variants affecting collagen structure and disc matrix composition are associated with earlier and more severe disc degeneration, independent of physical activity or occupation." },
    { text: "Prolonged sitting combined with weak core muscles", detail: "Hours of sustained lumbar flexion during computer work, driving, or desk-based jobs steadily creeps the posterior annular fibers toward failure. When combined with weak deep core muscles (transversus abdominis, multifidus) that fail to stabilize the spine, the disc is chronically overloaded — a setup for gradual herniation without a single identifiable injury event." }
  ] as CauseItem[],
};

export const whenToSeeDoctor = {
  headline: "When to See a Doctor for Herniated Disc",
  body: "See a doctor if you have back or neck pain with radiating arm or leg symptoms, progressive weakness, or numbness that doesn't resolve within a few days. Herniated discs diagnosed and treated early tend to respond better to conservative care.",
  redFlags: [
    "Progressive or rapidly worsening weakness in one arm or leg — particularly new inability to lift the foot (foot drop) or grip objects",
    "Any sudden loss of bladder or bowel control, or new difficulty initiating urination (possible cauda equina syndrome — seek emergency care immediately)",
    "Numbness spreading to the groin, inner thighs, or perineum (saddle anesthesia) — another hallmark of cauda equina syndrome",
    "Severe, unrelenting pain that does not respond to any position change, including lying down — suggests a large extrusion or sequestered disc fragment"
  ],
};

export const howWeHelp = {
  headline: "Herniated Disc Treatment at Rand Medical Center",
  body: "Most herniated discs — roughly 80–90% — improve with non-surgical treatment, and our approach is built around that reality. We start with an accurate diagnosis: a detailed neurological examination to map dermatomal symptoms, on-site X-rays for spinal alignment, and MRI coordination when nerve root or cord compression needs to be confirmed. Knowing the level, size, and direction of the herniation shapes every treatment decision.\n\nThe conservative-first sequence at Rand typically proceeds as follows. Physical therapy addresses the mechanical component — lumbar decompression positioning, McKenzie-based directional preference exercises, nerve flossing techniques, and progressive core stabilization to reduce load on the affected disc. For patients with significant nerve inflammation producing severe radicular pain, our pain management physicians perform a targeted epidural steroid injection — either an interlaminar or transforaminal approach depending on the anatomy — which delivers anti-inflammatory medication directly to the irritated nerve root. This combination of therapy and injection allows most patients to make meaningful progress within 6–8 weeks.\n\nMedication management plays a supporting role: short courses of oral steroids, NSAIDs, and neuropathic agents (such as gabapentinoids) can reduce the acute inflammatory burden and improve participation in therapy. These are prescribed judiciously and tapered as other treatments take effect.\n\nFor the minority of patients who do not respond adequately to conservative care after an appropriate trial, or for those with progressive neurological deficits, our orthopedic spine team evaluates surgical options. Minimally invasive microdiscectomy — removing the herniated fragment through a small incision — has excellent outcomes for appropriately selected candidates, with the majority returning to full activity within 4–6 weeks.",
};

export const treatmentOptions = {
  headline: "Herniated Disc Treatment Options",
  treatments: [
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" },
    { name: "Epidural Steroid Injections", slug: "epidural-steroid-injections", href: "/services/pain-management/epidural-steroid-injections" },
    { name: "Transforaminal Epidurals", slug: "transforaminal-epidurals", href: "/services/pain-management/transforaminal-epidural-injections" },
    { name: "Spine Surgery", slug: "spine-surgery", href: "/services/orthopedics/spine-surgery" },
    { name: "Selective Nerve Root Blocks", slug: "selective-nerve-root-blocks", href: "/services/pain-management/selective-nerve-root-blocks" }
  ] as TreatmentLink[],
};

export const whyChooseUs = {
  headline: "Why Choose Rand Medical Center for Herniated Disc?",
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
    { name: "Sciatica", slug: "sciatica", href: "/conditions/spine/sciatica" },
    { name: "Back Pain", slug: "back-pain", href: "/conditions/spine/back-pain" },
    { name: "Spinal Stenosis", slug: "spinal-stenosis", href: "/conditions/spine/spinal-stenosis" },
    { name: "Radiculopathy", slug: "radiculopathy", href: "/conditions/spine/radiculopathy" },
    { name: "Degenerative Disc Disease", slug: "degenerative-disc-disease", href: "/conditions/spine/degenerative-disc-disease" }
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
  headline: "Get Expert Herniated Disc Care in Arlington Heights — Most Cases Don't Need Surgery",
  body: "A herniated disc causing nerve pain is treatable, and the majority of patients recover without surgery. Our pain management and orthopedic team in Arlington Heights will confirm your diagnosis, explain your options in plain terms, and start you on the most effective conservative treatment path. Same-day and next-day appointments are available for patients across the northwest Chicago suburbs.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Do all herniated discs require surgery?", answer: "No \u2014 the large majority do not. Approximately 80\u201390% of herniated disc cases improve meaningfully with a structured non-surgical treatment program including physical therapy, epidural steroid injections, and activity modification. The body's natural resorption process also helps: over several months, the immune system gradually breaks down the herniated nucleus material, reducing the disc protrusion and relieving nerve pressure. Surgery is reserved for patients with severe, progressive neurological deficits, or those who have not responded to thorough conservative care over an adequate trial period." },
  { question: "How long does it take for a herniated disc to heal?", answer: "With appropriate treatment, many patients see significant symptom improvement within 6\u201312 weeks. The most dramatic improvements often occur in the first 6\u20138 weeks as inflammation settles and the disc begins to resorb. The disc itself does not fully 'heal' in the traditional sense \u2014 the annular tear persists \u2014 but symptoms often resolve well before the disc has completely resorbed. Your treatment timeline will be tailored to your specific level, symptom severity, and response to initial treatment." },
  { question: "Can a herniated disc come back?", answer: "A previously herniated disc is more structurally vulnerable to re-injury at the same level, particularly in the first 1\u20132 years following the original episode. However, targeted rehabilitation that strengthens the deep core stabilizing muscles (multifidus, transversus abdominis) and teaches proper body mechanics significantly reduces recurrence risk. Patients who complete their physical therapy program and maintain their exercises long-term have substantially lower rates of re-herniation." },
  { question: "Should I rest completely if I have a herniated disc?", answer: "Complete bed rest is not recommended and may actually slow recovery. Brief periods of relative rest in the acute phase \u2014 particularly avoiding the positions that dramatically worsen radicular pain \u2014 are reasonable. But beyond the first few days, guided gentle movement, walking, and specific therapeutic exercises promote faster healing than immobility. Your physical therapist will identify which movements are safe and beneficial for your specific level of herniation and direct you away from positions that increase disc pressure." }
];
