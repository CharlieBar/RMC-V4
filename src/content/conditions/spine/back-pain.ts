// src/content/conditions/spine/back-pain.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Back Pain (Condition Page)
// ─────────────────────────────────────────────────────────

import type {
  SEOMeta,
  HeroSection,
  SymptomItem,
  CauseItem,
  ConditionLink,
  TreatmentLink,
  ServiceLink,
  BlogPostLink,
  FeatureItem,
  FAQItem,
} from "@/types/content";

export const seo: SEOMeta = {
  title: "Back Pain Doctor in Arlington Heights, IL | Rand Medical Center",
  description:
    "Expert back pain treatment in Arlington Heights, IL. Same-day appointments for lower, mid, and upper back pain from disc problems, arthritis, work injuries, and car accidents. Call (224) 735-3522.",
  keywords: [
    "back pain treatment Arlington Heights IL",
    "back pain specialist near me",
    "lower back pain doctor Arlington Heights",
    "back pain clinic northwest Chicago suburbs",
    "chronic back pain treatment",
    "back injury doctor",
    "lumbar pain specialist Arlington Heights",
    "back pain same day appointment northwest suburbs",
  ],
  canonical: "https://www.randmedicalcenter.com/conditions/spine/back-pain",
};

export const hero: HeroSection = {
  eyebrow: "Spine Conditions",
  headline: "Back Pain Treatment in Arlington Heights, IL",
  subheadline:
    "Whether your back pain started after an injury or has been building for years, our Arlington Heights team identifies the exact cause and builds a step-by-step treatment plan so you can move, work, and sleep without constant pain.",
  primaryCTA: {
    text: "Schedule a Back Pain Evaluation",
    href: "https://www.tebra.com/care/practice/rand-medical-center-456192",
    variant: "primary",
  },
  secondaryCTA: {
    text: "Call (224) 735-3522",
    href: "tel:+12247353522",
    variant: "secondary",
  },
};

export const definition = {
  headline: "What Is Back Pain?",
  body: "Back pain is one of the most common reasons people visit a doctor, miss work, or limit their daily activities — and one of the most misunderstood. It can affect the lower back (lumbar spine), the mid-back (thoracic spine), or the upper back near the neck, and may range from a dull, persistent ache to a sharp, disabling pain that makes bending or standing nearly impossible.\n\nThe spine is a complex structure of bones (vertebrae), shock-absorbing discs, facet joints, ligaments, muscles, and nerve roots. Back pain arises when any of these structures become injured, inflamed, worn, or structurally compromised. The lumbar region bears the greatest mechanical load, which is why lower back pain is by far the most common presentation. The lumbar discs, facet joints, and sacroiliac joints are frequent pain generators — and they often contribute simultaneously, complicating diagnosis.\n\nCommon pathways to back pain include disc herniation, in which the gel-like nucleus of a spinal disc bulges outward and presses on an adjacent nerve root; facet joint arthritis, causing stiffness and localized pain that worsens with extension; and lumbar spinal stenosis, where progressive narrowing of the spinal canal creates aching or cramping in the legs with walking. Muscle strains and ligament sprains — the most prevalent acute causes — occur when sudden force or awkward movement exceeds the tissue's tolerance.\n\nBack pain has many possible causes, and in many patients, several factors contribute at the same time. That complexity is why accurate diagnosis matters. At Rand Medical Center in Arlington Heights, IL, we evaluate back pain carefully — using physical examination, neurological testing, and imaging when indicated — to understand what's actually driving your symptoms. Our goal is to find the right combination of treatments, not just to reduce pain, but to help you get back to the work and activities that matter to you.",
};

export const symptoms = {
  headline: "Common Back Pain Symptoms",
  items: [
    { text: "Dull ache or stiffness in the lower, mid, or upper back", detail: "A persistent, low-grade ache is often the first sign of disc degeneration or facet arthritis. It tends to be worse in the morning after lying still, then improves slightly with movement before returning after prolonged activity." },
    { text: "Sharp or shooting pain, especially with movement", detail: "Sudden, knife-like pain that spikes with bending, lifting, or twisting typically points to muscle strain, a herniated disc, or an inflamed facet joint. The pain may be severe enough to stop you in your tracks and tends to ease when you find a position that unloads the affected structure." },
    { text: "Pain that radiates into the buttocks, hips, or down one or both legs", detail: "When a lumbar nerve root is compressed — most often by a herniated disc or bone spur — pain travels along the nerve's path into the leg. If the sciatic nerve is involved, the pain can extend from the buttock all the way to the foot and is often described as electric, burning, or shooting." },
    { text: "Muscle spasms or tightness along the spine", detail: "Involuntary muscle contractions occur as a protective response when the spine is injured or inflamed. Spasms can be surprisingly intense, causing visible muscle guarding and severely limiting your range of motion." },
    { text: "Trouble bending, lifting, twisting, or standing for long periods", detail: "Functional limitations are a hallmark of significant back pathology. Disc herniations and spinal stenosis often make forward bending excruciating, while facet joint problems are typically worst with extension and rotation." },
    { text: "Numbness, tingling, or weakness in the legs or feet", detail: "These neurological symptoms signal nerve involvement rather than pure musculoskeletal pain. Numbness and tingling along a predictable dermatomal pattern help identify which nerve root is affected; progressive weakness in the foot or leg is a more urgent finding that warrants prompt evaluation." },
    { text: "Pain that worsens after sitting, standing, or specific activities", detail: "Disc-related pain typically worsens with sitting and improves with walking, while spinal stenosis pain worsens with walking and improves when you sit or lean forward. Identifying these positional patterns is a key diagnostic clue." },
    { text: "Stiffness that improves with gentle movement but returns with rest", detail: "Inflammatory conditions such as facet arthritis and sacroiliac joint dysfunction characteristically cause morning stiffness that loosens up within 20–30 minutes of moving, only to return after extended sitting or lying down." },
  ] as SymptomItem[],
};

export const causes = {
  headline: "Common Causes of Back Pain",
  items: [
    { text: "Muscle strain or ligament sprain", detail: "The most common acute cause of back pain. Overstretched or torn fibers in the paraspinal muscles or spinal ligaments trigger immediate pain, inflammation, and protective muscle guarding — especially after sudden lifting, twisting, or a fall at work." },
    { text: "Herniated or bulging disc", detail: "The soft inner nucleus of a spinal disc pushes through a weakened section of the tough outer annulus fibrosus. If the displaced material contacts a nearby nerve root, it triggers a cascade of chemical inflammation and mechanical pressure that produces sharp local pain, radiating leg pain, and sometimes numbness or weakness." },
    { text: "Degenerative disc disease", detail: "Spinal discs gradually lose water content and height with age, reducing their ability to absorb load and cushion vertebral motion. This wear-and-tear process can cause chronic back stiffness, narrowing of the disc space, and — over time — facet joint overload and bone spur formation." },
    { text: "Spinal stenosis", detail: "Narrowing of the central spinal canal or the lateral nerve exit channels (foramina) compresses one or more nerve roots. The hallmark symptom is neurogenic claudication — leg pain or heaviness that develops with walking and is relieved by sitting or leaning forward." },
    { text: "Arthritis and facet joint disease", detail: "The facet joints — small paired joints on the back of each vertebral level — are prone to osteoarthritis. Cartilage loss and inflammation in these joints produces focal back pain that is typically worst with extension and rotation, often accompanied by morning stiffness." },
    { text: "Work injuries", detail: "Heavy manual labor, repetitive bending and lifting, prolonged awkward postures, and sudden falls at work are leading causes of lumbar injuries in the northwest Chicago suburbs. Early evaluation and workers' compensation documentation are essential to protect your recovery." },
    { text: "Auto accidents", detail: "The sudden deceleration forces in a car, truck, or motorcycle crash can strain spinal muscles and ligaments, herniate lumbar discs, and compress vertebral bodies — even at relatively low speeds. Symptoms sometimes don't peak until 24–72 hours after the collision." },
    { text: "Sciatica", detail: "Sciatic nerve irritation — most commonly from a herniated L4–L5 or L5–S1 disc or from lumbar stenosis — produces pain that travels from the lower back through the buttock and down one leg, sometimes reaching the calf or foot. It may be accompanied by electric tingling or numbness." },
    { text: "Vertebral compression fracture", detail: "A vertebral body can fracture under compressive load — particularly when bone density is reduced by osteoporosis. The resulting sudden, severe mid-to-lower back pain often occurs after a seemingly minor event such as coughing, bending forward, or lifting a light object." },
    { text: "Poor posture and ergonomics", detail: "Hours of forward head posture, prolonged unsupported sitting, and poorly adjusted workstations place chronic mechanical overload on the lumbar spine. Over months and years, this cumulative strain accelerates disc degeneration and facet wear, contributing to chronic low back pain." },
  ] as CauseItem[],
};

export const whenToSeeDoctor = {
  headline: "When to See a Doctor for Back Pain",
  body: "Most mild back pain improves within a few days to a couple of weeks with rest and gentle activity. However, you should see a doctor if your back pain lasts more than two to three weeks without improving, is getting worse instead of better, started after a fall, accident, or work injury, or is accompanied by numbness, tingling, or weakness in your legs.\n\nPrompt evaluation is especially important after a work injury or car accident — early documentation protects both your health and your legal rights.\n\nIf you live or work near Arlington Heights, Mount Prospect, Des Plaines, Palatine, or the surrounding northwest Chicago suburbs, our team can often see you the same day or next day.",
  redFlags: [
    "Severe or rapidly worsening pain that does not ease with any position change or rest",
    "New numbness, tingling, or progressive weakness in one or both legs or feet",
    "Back pain that began immediately after a fall, car accident, or work injury — even if initially mild",
    "Any difficulty controlling your bladder or bowels, or numbness in the groin or inner thighs (seek emergency evaluation immediately — these may indicate cauda equina syndrome)",
    "Back pain accompanied by unexplained weight loss, night sweats, or fever (possible signs of infection or malignancy)",
  ],
};

export const howWeHelp = {
  headline: "Back Pain Treatment at Rand Medical Center",
  body: "At Rand Medical Center, back pain treatment starts with a thorough evaluation. Your doctor reviews your medical history, performs a physical and neurological examination, and may order on-site X-rays or coordinate an MRI to identify the specific structural source of your pain — not just the symptom pattern.\n\nTreatment follows a conservative-first sequence. Most patients begin with a structured physical therapy program focused on core stabilization, flexibility, and movement retraining — the foundation of durable back pain relief. If inflammation is limiting progress, our pain management physicians may add targeted interventions: lumbar epidural steroid injections to reduce nerve root inflammation, facet joint blocks to confirm and treat arthritis-related pain, trigger point injections for acute muscle spasm, or radiofrequency ablation for longer-lasting facet pain relief.\n\nMedication management — including anti-inflammatories, muscle relaxants, or neuropathic agents when appropriate — is used judiciously as an adjunct, not a primary strategy. Most patients respond meaningfully to conservative care within 6–8 weeks. If symptoms persist despite thorough conservative treatment and imaging confirms a structural problem amenable to surgery, our orthopedic team evaluates whether a minimally invasive procedure is appropriate.\n\nFor patients with work injuries or auto accident injuries, we handle all documentation — work status reports, medical narratives, employer and attorney communication, and workers' compensation billing — so you can focus on getting better rather than managing paperwork.",
};

export const treatmentOptions = {
  headline: "Back Pain Treatment Options",
  body: "We use a stepped approach — starting with conservative treatments and adding procedures when needed:",
  treatments: [
    {
      name: "Physical Therapy",
      slug: "physical-therapy",
      href: "/services/physical-therapy",
      description: "Targeted exercises, manual therapy, and stretching to strengthen your back and improve mobility",
    },
    {
      name: "Epidural Steroid Injections",
      slug: "epidural-steroid-injections",
      href: "/services/pain-management/epidural-steroid-injections",
      description: "Anti-inflammatory injections near irritated spinal nerves to reduce pain and swelling",
    },
    {
      name: "Facet Joint Blocks",
      slug: "facet-joint-blocks",
      href: "/services/pain-management/facet-joint-blocks",
      description: "Injections into the small spinal joints to diagnose and treat arthritis-related back pain",
    },
    {
      name: "Trigger Point Injections",
      slug: "trigger-point-injections",
      href: "/services/pain-management/trigger-point-injections",
      description: "Quick injections into tight muscle knots causing referred pain in the back",
    },
    {
      name: "Radiofrequency Ablation",
      slug: "radiofrequency-ablation",
      href: "/services/pain-management/radiofrequency-ablation",
      description: "Longer-lasting pain relief by gently heating selected pain-signaling nerves",
    },
    {
      name: "Medication Management",
      slug: "pain-management",
      href: "/services/pain-management",
      description: "Careful use of anti-inflammatory, muscle relaxant, or nerve pain medications when appropriate",
    },
  ] as TreatmentLink[],
};

export const whyChooseUs = {
  headline: "Why Choose Rand Medical Center for Back Pain?",
  features: [
    {
      icon: "users",
      title: "Team-Based Approach",
      description:
        "Pain management physicians, orthopedic surgeons, and physical therapists collaborate on your care plan in one location.",
    },
    {
      icon: "briefcase",
      title: "Work Comp and Auto Accident Expertise",
      description:
        "We understand the documentation, timelines, and communication requirements for injury cases and handle them for you.",
    },
    {
      icon: "building",
      title: "On-Site Imaging and Procedures",
      description:
        "X-rays, diagnostic tests, and interventional procedures are available right here — no extra appointments at other facilities.",
    },
    {
      icon: "map-pin",
      title: "Convenient Arlington Heights Location",
      description:
        "Easy to reach from Mount Prospect, Palatine, Des Plaines, Rolling Meadows, Schaumburg, and the northwest Chicago suburbs.",
    },
  ] as FeatureItem[],
};

export const relatedConditions = {
  headline: "Related Conditions",
  conditions: [
    { name: "Sciatica", slug: "sciatica", href: "/conditions/spine/sciatica" },
    { name: "Herniated Disc", slug: "herniated-disc", href: "/conditions/spine/herniated-disc" },
    { name: "Spinal Stenosis", slug: "spinal-stenosis", href: "/conditions/spine/spinal-stenosis" },
    { name: "Degenerative Disc Disease", slug: "degenerative-disc-disease", href: "/conditions/spine/degenerative-disc-disease" },
    { name: "Neck Pain", slug: "neck-pain", href: "/conditions/spine/neck-pain" },
    { name: "SI Joint Pain", slug: "si-joint-pain", href: "/conditions/spine/si-joint-pain" },
    { name: "Lumbar Sprain & Strain", slug: "lumbar-sprain", href: "/conditions/spine/lumbar-sprain" },
  ] as ConditionLink[],
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" },
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" },
    { name: "Orthopedics", slug: "orthopedics", href: "/services/orthopedics" },
    { name: "Injury Services", slug: "injury-services", href: "/services/injury-services" },
  ] as ServiceLink[],
};

export const relatedBlogPosts = {
  headline: "Back Pain Resources",
  posts: [
    {
      title: "5 Non-Surgical Treatments for Chronic Back Pain",
      slug: "non-surgical-back-pain-treatments",
      href: "/blog/non-surgical-back-pain-treatments",
      category: "Pain Management",
    },
    {
      title: "Returning to Work After a Back Injury",
      slug: "returning-work-after-back-injury",
      href: "/blog/returning-work-after-back-injury",
      category: "Injury Recovery",
    },
    {
      title: "5 Stretches for Lower Back Pain Relief",
      slug: "stretches-lower-back-pain",
      href: "/blog/stretches-lower-back-pain",
      category: "Physical Therapy",
    },
  ] as BlogPostLink[],
};

export const ctaSection = {
  headline: "Get a Real Diagnosis for Your Back Pain — Same Day in Arlington Heights",
  body: "Back pain that isn't properly diagnosed rarely gets better on its own. Our team in Arlington Heights, IL will identify the source of your pain, explain your treatment options in plain language, and build a plan focused on lasting results — not just temporary relief. Same-day and next-day appointments are available. Patients from Mount Prospect, Palatine, Des Plaines, Rolling Meadows, Schaumburg, and the northwest Chicago suburbs are welcome.",
  primaryCTA: {
    text: "Schedule an Appointment",
    href: "https://www.tebra.com/care/practice/rand-medical-center-456192",
    variant: "primary" as const,
  },
  secondaryCTA: {
    text: "Call (224) 735-3522",
    href: "tel:+12247353522",
    variant: "secondary" as const,
  },
};

export const faqs: FAQItem[] = [
  {
    question: "What kind of doctor should I see for back pain?",
    answer:
      "It depends on your situation, which is why the team-based approach at Rand Medical Center is valuable. A pain management specialist is the right starting point for most cases — they can diagnose the cause, order imaging, and recommend targeted treatments like injections or physical therapy. An orthopedic surgeon is appropriate when structural problems like herniation or stenosis may require surgical evaluation. At Rand Medical Center, both specialties work in the same clinic, so you're routed to the right expertise from your very first visit without needing separate referrals.",
  },
  {
    question: "Should I go to the ER or a clinic for back pain?",
    answer:
      "Go to the emergency room immediately if you have severe weakness in your legs, sudden loss of bladder or bowel control, numbness in the groin area, or back pain with a high fever — these can indicate serious conditions that need urgent imaging and evaluation. For most other back pain — including new pain after a work injury or car accident, or pain that has lasted more than a few days — our clinic can see you the same day or next day. That's faster, less expensive, and gives you access to the right specialists from the start.",
  },
  {
    question: "How long does back pain take to heal?",
    answer:
      "Mild back muscle strains typically improve meaningfully within 2–4 weeks with appropriate activity modification and physical therapy. Disc-related pain, sciatica, and cases involving nerve compression often take 6–12 weeks of targeted treatment before significant improvement. Chronic back pain — present for 3 or more months — requires a more comprehensive approach and longer timeline, though most patients still achieve meaningful reduction in pain and improved function. Your treatment plan will include realistic timeline expectations based on your specific diagnosis.",
  },
  {
    question: "Can I get treatment for a back injury from work?",
    answer:
      "Yes, absolutely. We treat a high volume of work-related back injuries each year and are fully set up for workers' compensation cases. We handle all required documentation — initial injury reports, work status (return-to-work or light duty) letters, progress notes for your adjuster, and final medical narratives. You can call us directly to schedule; you do not need to wait for your employer to arrange the appointment, and in Illinois you generally have the right to choose your own treating physician for a work injury.",
  },
  {
    question: "Do I need an MRI for back pain?",
    answer:
      "Not always, and in fact guidelines recommend against routine MRI for uncomplicated back pain in the first 4–6 weeks. Many cases can be accurately diagnosed with a careful physical exam, neurological testing, and standing X-rays to assess alignment and disc height. Your doctor will recommend an MRI when you have symptoms suggesting nerve root compression (radiating leg pain, numbness, or weakness), when conservative treatment hasn't produced expected improvement, or when there is concern about infection, fracture, or malignancy. We coordinate imaging efficiently when it's clinically indicated.",
  },
  {
    question: "Will I need surgery for my back pain?",
    answer:
      "The large majority of back pain — including most disc herniations and nerve compression — resolves or improves adequately with non-surgical treatment. Surgery is typically considered only when: conservative measures (physical therapy, injections, activity modification) over an adequate trial period have not provided meaningful relief, and imaging shows a clear structural problem that is surgically correctable. Our team always exhausts appropriate non-surgical options first and will be honest with you if and when a surgical opinion would be in your best interest.",
  },
];
