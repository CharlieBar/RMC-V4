// src/content/hubs/conditions-index.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — All Conditions Hub Page
// ─────────────────────────────────────────────────────────

import type { SEOMeta, HeroSection } from "@/types/content";

export const seo: SEOMeta = {
  title: "Conditions We Treat | Rand Medical Center | Arlington Heights, IL",
  description:
    "Rand Medical Center treats spine, joint, nerve, and muscle conditions — including back pain, sciatica, arthritis, neuropathy, and work and auto injuries. Arlington Heights, IL.",
  keywords: [
    "conditions treated Arlington Heights IL",
    "back pain doctor near me",
    "joint pain specialist Arlington Heights",
    "nerve pain treatment northwest Chicago suburbs",
    "work injury conditions treated",
  ],
  canonical: "https://www.randmedicalcenter.com/conditions",
};

export const hero: HeroSection = {
  eyebrow: "Conditions We Treat",
  headline: "Conditions We Treat at Rand Medical Center",
  subheadline:
    "From spine and joint problems to nerve conditions and injury recovery — our specialists in Arlington Heights, IL diagnose and treat a wide range of pain and musculoskeletal conditions.",
  primaryCTA: {
    text: "Schedule an Evaluation",
    href: "https://www.tebra.com/care/practice/rand-medical-center-456192",
    variant: "primary",
  },
  secondaryCTA: {
    text: "Call (224) 735-3522",
    href: "tel:+12247353522",
    variant: "secondary",
  },
};

export const intro = {
  headline: "Find Your Condition Below",
  body: "Each condition page explains what the problem is, common symptoms and causes, when to see a doctor, and how Rand Medical Center can help. Browse by category or use the list below to find your specific condition.",
};

export const categories = [
  {
    id: "spine",
    name: "Spine Conditions",
    description: "Conditions affecting the neck, back, and spinal column — including disc problems, stenosis, and nerve irritation.",
    icon: "spine",
    image: { src: "/images/conditions/spine-conditions-hero.jpg", alt: "Spine conditions treatment at Rand Medical Center" },
    items: [
      { name: "Back Pain", slug: "back-pain", href: "/conditions/spine/back-pain", tagline: "Lower, mid, and upper back pain" },
      { name: "Neck Pain", slug: "neck-pain", href: "/conditions/spine/neck-pain", tagline: "Stiffness, strain, and disc-related neck pain" },
      { name: "Sciatica", slug: "sciatica", href: "/conditions/spine/sciatica", tagline: "Leg pain from sciatic nerve irritation" },
      { name: "Herniated Disc", slug: "herniated-disc", href: "/conditions/spine/herniated-disc", tagline: "Bulging or ruptured spinal disc" },
      { name: "Spinal Stenosis", slug: "spinal-stenosis", href: "/conditions/spine/spinal-stenosis", tagline: "Narrowing of the spinal canal" },
      { name: "Degenerative Disc Disease", slug: "degenerative-disc-disease", href: "/conditions/spine/degenerative-disc-disease", tagline: "Age-related disc wear" },
      { name: "Scoliosis", slug: "scoliosis", href: "/conditions/spine/scoliosis", tagline: "Abnormal spinal curvature" },
      { name: "Facet Joint Syndrome", slug: "facet-syndrome", href: "/conditions/spine/facet-syndrome", tagline: "Spinal joint arthritis" },
      { name: "Radiculopathy", slug: "radiculopathy", href: "/conditions/spine/radiculopathy", tagline: "Pinched spinal nerve" },
      { name: "Failed Back Surgery Syndrome", slug: "failed-back-surgery", href: "/conditions/spine/failed-back-surgery", tagline: "Persistent pain after spine surgery" },
      { name: "Lumbar Sprain & Strain", slug: "lumbar-sprain", href: "/conditions/spine/lumbar-sprain", tagline: "Lower back muscle and ligament injuries" },
      { name: "Vertebral Compression Fracture", slug: "vertebral-compression", href: "/conditions/spine/vertebral-compression", tagline: "Collapsed spinal vertebrae" },
      { name: "Coccydynia (Tailbone Pain)", slug: "coccydynia", href: "/conditions/spine/coccydynia", tagline: "Pain at the base of the spine" },
      { name: "SI Joint Pain", slug: "si-joint-pain", href: "/conditions/spine/si-joint-pain", tagline: "Sacroiliac joint dysfunction" },
    ],
  },
  {
    id: "joints",
    name: "Joint Conditions",
    description: "Pain, stiffness, and injury affecting the knees, hips, shoulders, elbows, and ankles.",
    icon: "circle-dot",
    image: { src: "/images/conditions/joint-conditions-hero.jpg", alt: "Joint conditions treatment at Rand Medical Center" },
    items: [
      { name: "Knee Pain", slug: "knee-pain", href: "/conditions/joints/knee-pain", tagline: "Arthritis, injuries, and overuse problems" },
      { name: "Hip Pain", slug: "hip-pain", href: "/conditions/joints/hip-pain", tagline: "Groin, side-hip, and buttock pain" },
      { name: "Shoulder Pain", slug: "shoulder-pain", href: "/conditions/joints/shoulder-pain", tagline: "Rotator cuff, bursitis, and arthritis" },
      { name: "Arthritis", slug: "arthritis", href: "/conditions/joints/arthritis", tagline: "Joint inflammation and cartilage wear" },
      { name: "Osteoarthritis", slug: "osteoarthritis", href: "/conditions/joints/osteoarthritis", tagline: "Wear-and-tear joint degeneration" },
      { name: "Elbow & Hand Pain", slug: "elbow-hand-pain", href: "/conditions/joints/elbow-hand-pain", tagline: "Tendonitis, overuse, and joint problems" },
      { name: "Foot & Ankle Pain", slug: "foot-ankle-pain", href: "/conditions/joints/foot-ankle-pain", tagline: "Sprains, tendonitis, and arthritis" },
    ],
  },
  {
    id: "nerves",
    name: "Nerve Conditions",
    description: "Nerve damage, compression, and irritation causing pain, numbness, tingling, or weakness.",
    icon: "zap",
    image: { src: "/images/conditions/nerve-conditions-hero.jpg", alt: "Nerve conditions treatment at Rand Medical Center" },
    items: [
      { name: "Peripheral Neuropathy", slug: "neuropathy", href: "/conditions/nerves/neuropathy", tagline: "Burning, tingling, and numbness" },
      { name: "Carpal Tunnel Syndrome", slug: "carpal-tunnel", href: "/conditions/nerves/carpal-tunnel", tagline: "Hand numbness from median nerve compression" },
      { name: "Diabetic Neuropathy", slug: "diabetic-neuropathy", href: "/conditions/nerves/diabetic-neuropathy", tagline: "Nerve damage from diabetes" },
      { name: "Occipital Neuralgia", slug: "occipital-neuralgia", href: "/conditions/nerves/occipital-neuralgia", tagline: "Shooting pain at the base of the skull" },
      { name: "Trigeminal Neuralgia", slug: "trigeminal-neuralgia", href: "/conditions/nerves/trigeminal-neuralgia", tagline: "Severe facial pain episodes" },
      { name: "CRPS", slug: "complex-regional-pain-syndrome", href: "/conditions/nerves/complex-regional-pain-syndrome", tagline: "Chronic pain after injury or surgery" },
      { name: "Nerve Entrapment", slug: "nerve-entrapment", href: "/conditions/nerves/nerve-entrapment", tagline: "Pinched nerves in muscles or ligaments" },
      { name: "Phantom Limb Pain", slug: "phantom-limb-pain", href: "/conditions/nerves/phantom-limb-pain", tagline: "Pain in an amputated limb" },
    ],
  },
  {
    id: "muscle",
    name: "Muscle Conditions",
    description: "Muscle pain, spasms, and chronic tightness from injury, overuse, or systemic conditions.",
    icon: "grip-horizontal",
    image: { src: "/images/conditions/muscle-conditions-hero.jpg", alt: "Muscle conditions treatment at Rand Medical Center" },
    items: [
      { name: "Myofascial Pain Syndrome", slug: "myofascial-pain", href: "/conditions/muscle/myofascial-pain", tagline: "Chronic muscle knots and trigger points" },
      { name: "Fibromyalgia", slug: "fibromyalgia", href: "/conditions/muscle/fibromyalgia", tagline: "Widespread pain and fatigue" },
      { name: "Piriformis Syndrome", slug: "piriformis-syndrome", href: "/conditions/muscle/piriformis-syndrome", tagline: "Deep hip muscle irritating the sciatic nerve" },
      { name: "Muscle Spasms", slug: "muscle-spasms", href: "/conditions/muscle/muscle-spasms", tagline: "Sudden painful muscle tightening" },
      { name: "Muscle Strain", slug: "muscle-strain", href: "/conditions/muscle/muscle-strain", tagline: "Torn or overstretched muscle fibers" },
    ],
  },
  {
    id: "pain-syndromes",
    name: "Pain Syndromes",
    description: "Complex and chronic pain conditions that require specialized management approaches.",
    icon: "flame",
    image: { src: "/images/conditions/pain-syndromes-hero.jpg", alt: "Pain syndrome treatment at Rand Medical Center" },
    items: [
      { name: "Chronic Pain", slug: "chronic-pain", href: "/conditions/pain-syndromes/chronic-pain", tagline: "Pain lasting more than three months" },
      { name: "Cancer-Related Pain", slug: "cancer-pain", href: "/conditions/pain-syndromes/cancer-pain", tagline: "Pain from cancer or cancer treatment" },
      { name: "Post-Operative Pain", slug: "post-operative-pain", href: "/conditions/pain-syndromes/post-operative-pain", tagline: "Persistent pain after surgery" },
      { name: "Pelvic Pain", slug: "pelvic-pain", href: "/conditions/pain-syndromes/pelvic-pain", tagline: "Lower abdomen and pelvic region pain" },
      { name: "Abdominal Pain", slug: "abdominal-pain", href: "/conditions/pain-syndromes/abdominal-pain", tagline: "Non-emergency stomach and abdominal pain" },
      { name: "Post-Stroke Pain", slug: "post-stroke-pain", href: "/conditions/pain-syndromes/post-stroke-pain", tagline: "Nerve and muscle pain after stroke" },
    ],
  },
  {
    id: "other",
    name: "Injuries & Other Conditions",
    description: "Sports injuries, work injuries, auto accident injuries, headaches, and other conditions.",
    icon: "alert-triangle",
    image: { src: "/images/conditions/injuries-other-hero.jpg", alt: "Injury treatment at Rand Medical Center" },
    items: [
      { name: "Headaches & Migraines", slug: "headaches", href: "/conditions/other/headaches", tagline: "Recurring head pain from tension to migraines" },
      { name: "Sports Injuries", slug: "sports-injury", href: "/conditions/other/sports-injury", tagline: "Sprains, strains, and overuse injuries" },
      { name: "Musculoskeletal Chest Pain", slug: "chest-pain", href: "/conditions/other/chest-pain", tagline: "Non-cardiac chest wall pain" },
      { name: "Auto Accident Injuries", slug: "auto-injury", href: "/conditions/other/auto-injury", tagline: "Whiplash, back pain, and crash injuries" },
      { name: "Workplace Injuries", slug: "workplace-injury", href: "/conditions/other/workplace-injury", tagline: "Lifting injuries, falls, and repetitive strain" },
    ],
  },
];

export const ctaSection = {
  headline: "Don't See Your Condition Listed?",
  body: "We treat many conditions beyond those listed here. Call our clinic and describe your symptoms — our team will help determine whether Rand Medical Center is the right place for your care.",
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
