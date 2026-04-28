// src/content/conditions/spine/spinal-stenosis.ts
// Rand Medical Center — Spinal Stenosis (Condition Page)

import type { SEOMeta, HeroSection, SymptomItem, CauseItem, ConditionLink, TreatmentLink, ServiceLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Spinal Stenosis Treatment in Arlington Heights, IL | Rand Medical Center",
  description: "Spinal stenosis treatment in Arlington Heights, IL. Relieve leg pain, cramping, and numbness caused by a narrowed spinal canal. Conservative and surgical options. Call (224) 735-3522.",
  keywords: ["spinal stenosis treatment Arlington Heights", "spinal stenosis doctor near me", "spinal stenosis specialist", "lumbar stenosis leg pain treatment", "neurogenic claudication specialist northwest suburbs"],
  canonical: "https://www.randmedicalcenter.com/conditions/spine/spinal-stenosis",
};

export const hero: HeroSection = {
  eyebrow: "Spine Conditions",
  headline: "Spinal Stenosis Treatment in Arlington Heights, IL",
  subheadline: "If leg pain or cramping forces you to stop walking after a short distance — but sitting down brings relief — you may have spinal stenosis. Our Arlington Heights team specializes in diagnosing and treating this common but often misidentified condition.",
  primaryCTA: { text: "Schedule an Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const definition = {
  headline: "What Is Spinal Stenosis?",
  body: "Spinal stenosis is a progressive narrowing of the spinal canal — the bony channel that houses and protects the spinal cord and nerve roots as they travel down the back. When this canal or the lateral passages (neural foramina) through which nerve roots exit the spine become too narrow, the nerves inside become compressed, leading to pain, numbness, weakness, and functional limitations that can significantly affect quality of life.\n\nThe condition most commonly affects the lumbar spine (lower back), where it produces a characteristic symptom cluster called neurogenic claudication: aching, heaviness, or cramping in the legs that develops after walking a certain distance and is relieved by sitting down or leaning forward. This positional pattern distinguishes spinal stenosis from other causes of leg pain — particularly vascular claudication (from arterial disease), which does not improve with leaning forward.\n\nThe spinal canal narrows through a combination of mechanisms. The intervertebral discs lose height and bulge inward. The facet joints on the back of the spine enlarge as they take on more load, forming bone spurs that protrude into the canal. The ligamentum flavum — a tough ligament that runs along the back of the canal — thickens and buckles inward with repeated flexion-extension cycles. Together, these degenerative changes gradually reduce the available space for the neural structures.\n\nSpinal stenosis is most prevalent in adults over 50, though it can occasionally affect younger individuals with a congenitally narrow canal. It develops slowly over years, and symptoms tend to worsen gradually rather than suddenly. At Rand Medical Center in Arlington Heights, IL, we evaluate spinal stenosis thoroughly using clinical examination and imaging to characterize the severity of narrowing and guide the most appropriate treatment approach.",
};

export const symptoms = {
  headline: "Common Spinal Stenosis Symptoms",
  items: [
    { text: "Pain or cramping in the legs when walking or standing", detail: "Neurogenic claudication is the hallmark of lumbar stenosis. As you walk, the upright posture extends the lumbar spine, further narrowing the canal and compressing the nerve roots. The resulting leg aching or cramping typically forces patients to stop after a specific distance — sometimes just half a block — before subsiding with rest." },
    { text: "Relief when sitting or leaning forward", detail: "Flexing the lumbar spine — by sitting, leaning on a shopping cart, or walking slightly bent forward — increases the cross-sectional area of the spinal canal and lateral recesses, temporarily decompressing the nerve roots and relieving symptoms. This positional relief is a diagnostically significant feature that distinguishes stenosis from arterial claudication." },
    { text: "Numbness or tingling in the legs or feet", detail: "Compressed nerve roots produce sensory disturbances in their dermatomal distribution. The pattern may be bilateral (both legs) in central stenosis or predominantly unilateral in lateral recess or foraminal stenosis. Symptoms often worsen progressively during a walking bout and resolve with sitting." },
    { text: "Weakness in the legs", detail: "Motor nerve compression causes muscle weakness that may be subtle initially — a slight scuff of the foot with walking, difficulty climbing stairs — and becomes more pronounced as stenosis progresses. Significant bilateral leg weakness warrants prompt evaluation to assess for cervical myelopathy or severe central stenosis." },
    { text: "Lower back pain", detail: "Most patients with lumbar stenosis also experience baseline lower back pain from the underlying facet arthritis and disc degeneration driving the canal narrowing. This back pain is often a secondary concern compared to the leg symptoms, and treating the stenosis frequently improves it as well." },
    { text: "Difficulty walking long distances", detail: "The progressive reduction in walking distance over months and years is one of the most disabling aspects of spinal stenosis. Patients often unconsciously restructure their daily lives around this limitation — parking closer, avoiding walks, using carts — before seeking evaluation. Restoring walking tolerance is a primary goal of treatment." }
  ] as SymptomItem[],
};

export const causes = {
  headline: "Common Causes of Spinal Stenosis",
  items: [
    { text: "Age-related degeneration and bone spur formation", detail: "The most common cause. As spinal discs degenerate and facet joints develop osteoarthritis, the body attempts to stabilize the unstable segments by forming osteophytes (bone spurs) along the disc edges and facet joints. These bony growths progressively encroach on the spinal canal and neural foramina." },
    { text: "Thickened spinal ligaments", detail: "The ligamentum flavum — a pair of elastic ligaments on the posterior wall of the spinal canal — hypertrophies and loses elasticity with aging and repetitive mechanical stress. As it thickens, it buckles inward during extension, significantly reducing the available space for the neural structures." },
    { text: "Herniated discs contributing to canal narrowing", detail: "A disc bulge or herniation directly reduces spinal canal volume at the affected level. When combined with bone spur formation and ligament hypertrophy at the same level, even a moderate disc protrusion can trigger significant nerve compression and symptoms." },
    { text: "Arthritis of the facet joints", detail: "Facet joint osteoarthritis causes joint enlargement and capsular thickening. The overgrown facet joints encroach on the lateral recesses and foramina where nerve roots exit, producing foraminal stenosis that causes single-nerve-root symptoms alongside central canal narrowing." },
    { text: "Congenital narrow spinal canal", detail: "Some individuals are born with a constitutionally small spinal canal diameter. They may be asymptomatic for decades, but even mild degenerative changes that would be inconsequential in a normal-sized canal can produce significant compression. These patients tend to develop symptoms at a younger age than typical degenerative stenosis patients." }
  ] as CauseItem[],
};

export const whenToSeeDoctor = {
  headline: "When to See a Doctor",
  body: "See a doctor if your symptoms last more than a few weeks, are getting worse, started after an injury or accident, or are affecting your ability to work and perform daily activities. Our team in Arlington Heights can often see you the same day or next day.",
  redFlags: [
    "Rapidly progressive weakness in one or both legs — particularly new difficulty lifting the foot or standing from a chair",
    "New loss of bladder or bowel control, or difficulty urinating (possible severe central stenosis or cauda equina compromise — seek emergency evaluation)",
    "Bilateral leg numbness or weakness that has suddenly worsened rather than progressing gradually",
    "Stenosis symptoms that began after a fall or trauma — imaging is needed to rule out fracture or acute disc herniation superimposed on existing stenosis"
  ],
};

export const howWeHelp = {
  headline: "Spinal Stenosis Treatment at Rand Medical Center",
  body: "At Rand Medical Center, spinal stenosis treatment begins with a careful evaluation that includes a detailed history of your walking tolerance and positional symptoms, a neurological exam, and lumbar imaging. X-rays assess overall spinal alignment and disc height loss; MRI provides the definitive picture of canal dimensions and nerve compression.\n\nFor most patients, we begin with a conservative treatment program. Physical therapy focuses on lumbar flexion-based exercises and postural training — flexion relieves the neural compression by opening the canal, while core and hip strengthening reduces the mechanical demand on the degenerating spinal structures. Aquatic therapy is particularly well-tolerated by patients whose walking tolerance limits land-based exercise.\n\nLumbar epidural steroid injections — delivered via an interlaminar or transforaminal approach under fluoroscopic guidance — reduce inflammation around the compressed nerve roots and can significantly improve walking distance and pain levels. Many patients benefit from a series of 2–3 injections spaced over several weeks. For patients whose relief from injections is meaningful but short-lived, radiofrequency ablation of the medial branch nerves can provide longer-lasting facet pain relief.\n\nFor patients with severe or progressive symptoms that have not responded adequately to 3–6 months of conservative care, our orthopedic spine team evaluates surgical decompression. Minimally invasive lumbar decompression (laminotomy or laminectomy with or without fusion, depending on spinal stability) has high success rates in appropriately selected patients and can restore meaningful walking capacity. We are honest about when surgery is and is not likely to help.",
};

export const treatmentOptions = {
  headline: "Treatment Options",
  treatments: [
    { name: "Epidural Steroid Injections", slug: "epidural-steroid-injections", href: "/services/pain-management/epidural-steroid-injections" },
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" },
    { name: "Spine Surgery", slug: "spine-surgery", href: "/services/orthopedics/spine-surgery" }
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
    { name: "Sciatica", slug: "sciatica", href: "/conditions/spine/sciatica" },
    { name: "Herniated Disc", slug: "herniated-disc", href: "/conditions/spine/herniated-disc" },
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
  headline: "Regain Your Walking Freedom — Spinal Stenosis Care in Arlington Heights",
  body: "If leg pain, cramping, or weakness is limiting how far you can walk or what you can do each day, our team at Rand Medical Center in Arlington Heights can help. We'll evaluate your stenosis precisely, explain your treatment options clearly, and build a plan focused on restoring your mobility. Same-day and next-day appointments available for patients across the northwest Chicago suburbs.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Will spinal stenosis get worse over time?", answer: "Spinal stenosis is a progressive degenerative condition, meaning the underlying structural changes tend to worsen gradually over years. However, the rate of progression varies widely — some patients remain stable for many years, while others experience more rapid symptom escalation. Consistent physical therapy, maintaining a healthy weight, and prompt treatment of flares can slow functional decline. Many patients achieve lasting improvement in symptoms and walking tolerance through conservative management without surgery." },
  { question: "Is surgery always needed for spinal stenosis?", answer: "No. Many patients with spinal stenosis — even moderate-to-severe stenosis on imaging — achieve meaningful symptom control and functional improvement through a combination of physical therapy, epidural steroid injections, and activity modification. Surgery is typically recommended when conservative treatments have been pursued adequately without sufficient relief, when neurological deficits are progressing, or when quality of life is severely compromised. Imaging findings alone do not determine the need for surgery — your functional status and symptom severity matter most." },
  { question: "Why do my legs feel better when I sit or lean on a shopping cart?", answer: "This is neurogenic claudication, the hallmark of lumbar spinal stenosis. When you lean forward or sit, you flex the lumbar spine, which increases the cross-sectional area of the spinal canal and reduces pressure on the compressed nerve roots — immediately improving symptoms. When you stand upright or walk, the spine extends, the canal narrows, and nerve compression increases. Identifying this pattern is an important part of diagnosing stenosis and distinguishing it from other causes of leg pain." },
  { question: "What should I bring to my first visit?", answer: "Bring a photo ID, your insurance card or workers' compensation information, a current medication list, and any prior imaging studies (X-rays, MRI) or medical records related to your spine. If you've already had a course of physical therapy or injections elsewhere, a brief summary of those treatments and your response to them is very helpful. If you have imaging CDs, please bring those as well — our team can review them directly." },
];
