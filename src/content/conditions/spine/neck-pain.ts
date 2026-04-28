// src/content/conditions/spine/neck-pain.ts
// Rand Medical Center — Neck Pain (Condition Page)

import type { SEOMeta, HeroSection, SymptomItem, CauseItem, ConditionLink, TreatmentLink, ServiceLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Neck Pain Doctor in Arlington Heights, IL | Rand Medical Center",
  description: "Neck pain treatment in Arlington Heights, IL for stiffness, whiplash, cervical disc problems, and pinched nerve. Same-day appointments available. Call (224) 735-3522.",
  keywords: ["neck pain treatment Arlington Heights IL", "neck pain doctor near me", "cervical pain specialist", "stiff neck treatment", "whiplash treatment Arlington Heights", "cervical radiculopathy specialist northwest suburbs"],
  canonical: "https://www.randmedicalcenter.com/conditions/spine/neck-pain",
};

export const hero: HeroSection = {
  eyebrow: "Spine Conditions",
  headline: "Neck Pain Treatment in Arlington Heights, IL",
  subheadline: "From morning stiffness and whiplash to a pinched cervical nerve causing arm pain, our Arlington Heights team diagnoses the source and builds a treatment plan that moves past temporary relief.",
  primaryCTA: { text: "Schedule an Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const definition = {
  headline: "What Is Neck Pain?",
  body: "Neck pain is one of the most common musculoskeletal complaints, affecting up to 70% of adults at some point in their lives. It can range from a mild, temporary ache after sleeping in an awkward position to severe, chronic pain that limits your ability to work, drive, look over your shoulder, or sleep comfortably.\n\nThe cervical spine \u2014 the seven vertebrae (C1\u2013C7) of the neck \u2014 accomplishes a remarkable combination of functions. It supports the weight of the head (roughly 10\u201312 pounds), protects the spinal cord and eight pairs of nerve roots, and enables an exceptionally wide range of motion: flexion, extension, rotation, and side-bending. This mobility comes at a cost \u2014 the cervical spine is more vulnerable to injury from sudden acceleration-deceleration forces, repetitive postural strain, and degenerative wear than nearly any other spinal region.\n\nNeck pain can originate from several distinct structures. Cervical muscle strains and ligament sprains are the most common acute cause, particularly after whiplash injuries. Cervical disc herniations compress nerve roots as they exit between vertebrae, producing pain, numbness, or weakness that radiates down the arm \u2014 a condition called cervical radiculopathy. Facet joint arthritis produces localized neck pain and stiffness, often worse in the morning. Advanced degenerative changes and bone spur formation can narrow the spinal canal itself (cervical stenosis) or compress the spinal cord (myelopathy), which is a more serious condition requiring prompt attention.\n\nAt Rand Medical Center in Arlington Heights, IL, we evaluate neck pain thoroughly to identify the exact source \u2014 whether muscular, disc-related, joint-related, or nerve-related \u2014 and build a coordinated treatment plan that addresses it.",
};

export const symptoms = {
  headline: "Common Neck Pain Symptoms",
  items: [
    { text: "Aching or stiffness in the neck, especially after sleeping or sitting", detail: "A persistent dull ache or morning stiffness that requires several minutes of movement to loosen up is a classic sign of cervical facet arthritis or muscle tension. Prolonged computer work or phone use often triggers or worsens this pattern." },
    { text: "Sharp pain with movement, particularly turning or tilting the head", detail: "Sudden, localized pain that spikes when you rotate your head to check a blind spot or tilt it sideways suggests an acute muscle strain, facet irritation, or a disc annular tear. The pain is usually reproducible and may cause you to guard the movement entirely." },
    { text: "Pain that radiates into the shoulders, upper back, or arms", detail: "Referred pain from the cervical facet joints commonly spreads into the upper trapezius and shoulder blade area. If the pain travels down the arm in a specific pattern — following a nerve distribution — it indicates cervical radiculopathy from a herniated disc or foramen narrowing." },
    { text: "Headaches starting at the base of the skull", detail: "Cervicogenic headaches originate from irritated cervical joints, muscles, or the C2–C3 nerve root. They typically begin as a dull pressure at the back of the head and spread forward, often mimicking tension or migraine headaches but triggered by neck movements or postures." },
    { text: "Numbness or tingling in the hands or fingers", detail: "Sensory changes in the hands and fingers strongly suggest compression of a cervical nerve root. The specific fingers affected help localize the level: C6 nerve root involvement typically affects the thumb and index finger, while C7 affects the middle finger." },
    { text: "Muscle tightness or spasms in the neck and upper back", detail: "Paraspinal and upper trapezius muscle spasm is a common protective response to cervical injury or inflammation. The muscles tighten to restrict painful movement, but persistent spasm itself becomes a pain generator and can be effectively targeted with trigger point injections or manual therapy." },
    { text: "Reduced range of motion when turning or looking up", detail: "Restricted cervical motion — particularly difficulty looking fully to one side or extending the head backward — may reflect facet joint stiffening, disc height loss, or pain guarding. Gradual progressive loss of motion over months is more consistent with degenerative change than with acute injury." }
  ] as SymptomItem[],
};

export const causes = {
  headline: "Common Causes of Neck Pain",
  items: [
    { text: "Muscle strain from poor posture, computer work, or sleeping position", detail: "\"Tech neck\" — the chronic forward-head posture associated with screens and prolonged sitting — places up to 60 lbs of compressive force on the cervical spine at full forward tilt. Over time, this leads to muscle fatigue, ligament laxity, and accelerated disc degeneration." },
    { text: "Whiplash from a car accident or sudden impact", detail: "The rapid hyperextension-flexion sequence of a rear-end collision strains the cervical muscles, facet joint capsules, and intervertebral discs. Symptoms often don't peak until 24–48 hours after the accident, and without proper treatment, whiplash can become a source of chronic neck pain and headaches." },
    { text: "Herniated or bulging cervical disc", detail: "A cervical disc herniation compresses an exiting nerve root, causing pain, numbness, or weakness in a dermatomal pattern down the arm. C5–C6 and C6–C7 are the most commonly affected levels, producing symptoms in the forearm and hand." },
    { text: "Cervical degenerative disc disease", detail: "Age-related desiccation and height loss in the cervical discs reduces the cushioning between vertebrae, loads the facet joints, and narrows the neural foramina. The result is a constellation of stiffness, intermittent arm pain, and positional aching that becomes more persistent over time." },
    { text: "Cervical spinal stenosis", detail: "When the spinal canal in the neck narrows significantly, it can compress not just nerve roots but the spinal cord itself — a condition called cervical myelopathy. This is more serious than radiculopathy and may cause clumsiness, balance problems, and weakness in the hands and legs in addition to neck pain." },
    { text: "Facet joint arthritis in the neck", detail: "The small paired facet joints at each cervical level guide movement and prevent excessive rotation. Cartilage wear in these joints causes localized neck pain that is typically worst with extension and rotation, often accompanied by a grinding sensation and referred pain into the upper back and skull." },
    { text: "Work injuries from repetitive motion or heavy lifting", detail: "Assembly workers, healthcare staff, and laborers who perform repetitive overhead reaching, heavy carrying, or sustained awkward neck postures are at elevated risk for cumulative cervical injury. Early treatment and ergonomic intervention can prevent short-term strain from becoming long-term disability." },
    { text: "Pinched nerve (cervical radiculopathy)", detail: "Cervical radiculopathy — nerve root compression from a herniated disc or bone spur — produces a characteristic pattern of pain, numbness, and sometimes weakness that radiates from the neck down the shoulder, arm, and into specific fingers. The pattern helps pinpoint the exact level affected." }
  ] as CauseItem[],
};

export const whenToSeeDoctor = {
  headline: "When to See a Doctor for Neck Pain",
  body: "See a doctor if your neck pain lasts more than a week or two without improvement, started after a car accident or injury, is accompanied by numbness, tingling, or weakness in your arms or hands, or radiates consistently into your shoulders or down your arm.\n\nIf you live or work near Arlington Heights, Mount Prospect, Des Plaines, or Palatine, our team can often see you the same day or next day for urgent neck pain evaluations.",
  redFlags: [
    "Pain, numbness, or weakness radiating into both arms simultaneously — may indicate spinal cord compression (myelopathy)",
    "Difficulty walking, unsteady gait, or loss of fine motor coordination in the hands (dropping objects, difficulty buttoning) — possible cervical myelopathy requiring urgent evaluation",
    "Neck pain that began immediately after a fall, car accident, or direct trauma — do not wait to see if it improves",
    "Severe headache with stiff neck and fever — possible meningitis, which requires emergency evaluation"
  ],
};

export const howWeHelp = {
  headline: "Neck Pain Treatment at Rand Medical Center",
  body: "Neck pain treatment at Rand Medical Center begins with a careful evaluation. Your doctor reviews your injury or symptom history, performs a physical and neurological exam \u2014 including dermatomal sensory testing and upper extremity strength assessment \u2014 and may order cervical X-rays to evaluate alignment and disc space height or coordinate an MRI when disc or nerve compression is suspected.\n\nMost patients begin with a structured physical therapy program: manual cervical traction to decompress the disc spaces, soft tissue mobilization to release muscle spasm, and progressive strengthening of the deep cervical flexors and scapular stabilizers \u2014 the muscles most responsible for long-term neck stability. This conservative foundation alone resolves a significant proportion of cases within 4\u20136 weeks.\n\nFor patients with nerve root compression producing arm symptoms, or with facet joint arthritis causing persistent localized pain, our pain management physicians add targeted injections: cervical epidural steroid injections to reduce nerve root inflammation, cervical facet joint blocks to confirm and treat joint-mediated pain, or medial branch radiofrequency ablation for longer-lasting facet pain relief. Trigger point injections address acute upper trapezius and suboccipital muscle spasm that is contributing to cervicogenic headaches.\n\nFor auto accident and work injury neck pain, we provide thorough documentation from the first visit forward \u2014 injury reports, work-status letters, progress notes for adjusters, and coordination with attorneys when needed.",
};

export const treatmentOptions = {
  headline: "Neck Pain Treatment Options",
  treatments: [
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" },
    { name: "Facet Joint Blocks", slug: "facet-joint-blocks", href: "/services/pain-management/facet-joint-blocks" },
    { name: "Epidural Steroid Injections", slug: "epidural-steroid-injections", href: "/services/pain-management/epidural-steroid-injections" },
    { name: "Trigger Point Injections", slug: "trigger-point-injections", href: "/services/pain-management/trigger-point-injections" },
    { name: "Nerve Blocks", slug: "nerve-blocks", href: "/services/pain-management/nerve-blocks" },
    { name: "Radiofrequency Ablation", slug: "radiofrequency-ablation", href: "/services/pain-management/radiofrequency-ablation" }
  ] as TreatmentLink[],
};

export const whyChooseUs = {
  headline: "Why Choose Rand Medical Center for Neck Pain?",
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
    { name: "Radiculopathy", slug: "radiculopathy", href: "/conditions/spine/radiculopathy" },
    { name: "Facet Syndrome", slug: "facet-syndrome", href: "/conditions/spine/facet-syndrome" },
    { name: "Whiplash / Auto Injury", slug: "whiplash-/-auto-injury", href: "/conditions/other/auto-injury" }
  ] as ConditionLink[],
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" },
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" },
    { name: "Orthopedics", slug: "orthopedics", href: "/services/orthopedics" },
    { name: "Injury Services", slug: "injury-services", href: "/services/injury-services" }
  ] as ServiceLink[],
};

export const relatedBlogPosts = { headline: "Resources", posts: [] };

export const ctaSection = {
  headline: "Get Real Answers for Your Neck Pain — Arlington Heights",
  body: "Neck pain that isn't properly diagnosed rarely improves on its own — and masking it with temporary measures can allow the underlying problem to worsen. Our team in Arlington Heights will identify the source of your pain, explain your options, and start you on a treatment path focused on lasting relief. Same-day and next-day appointments available for patients across the northwest Chicago suburbs.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Should I go to the ER for neck pain?", answer: "Go to the ER immediately if your neck pain followed a serious fall or car accident (especially if there's any possibility of fracture), if you have weakness in both arms or difficulty walking, or if you have a severe headache with fever and stiff neck (possible meningitis). For the majority of neck pain \u2014 including post-whiplash, disc-related pain, or a flare of chronic neck stiffness \u2014 our clinic can evaluate you the same day without the ER wait, cost, and limited specialist access." },
  { question: "Can neck pain cause headaches?", answer: "Yes, and cervicogenic headaches are more common than most people realize. They originate from irritated cervical facet joints (particularly C2\u2013C3), tight suboccipital muscles, or upper cervical nerve root irritation. The pain typically starts at the base of the skull, spreads forward, and may mimic a tension or migraine headache. The key distinguishing feature is that neck movements or postures trigger or worsen it. Cervical facet blocks or trigger point injections targeting the upper cervical region can be highly effective when the headaches have a cervical origin." },
  { question: "How long does neck pain take to heal?", answer: "Acute cervical muscle strains from poor posture or minor injury typically improve meaningfully within 1\u20133 weeks with physical therapy and activity modification. Whiplash-associated neck pain can take 6\u201312 weeks, and a significant minority of whiplash patients develop chronic symptoms if undertreated. Disc-related or nerve-related neck pain varies widely based on the degree of compression and how quickly treatment begins. Your doctor will give you a realistic timeline at your first visit based on your specific diagnosis and imaging findings." },
  { question: "Is it safe to exercise with neck pain?", answer: "Gentle, guided movement is generally beneficial and preferable to complete rest for most types of neck pain. However, the specific exercises that help versus harm depend entirely on your diagnosis. High-impact activities, heavy overhead lifting, and extreme cervical ranges of motion should be avoided until you've been evaluated. Your physical therapist will design an evidence-based program specific to your condition \u2014 and will tell you clearly what to avoid during recovery." }
];
