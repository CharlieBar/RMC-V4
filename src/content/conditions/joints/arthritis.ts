// src/content/conditions/joints/arthritis.ts
// Rand Medical Center — Arthritis (Condition Page)

import type { SEOMeta, HeroSection, SymptomItem, CauseItem, ConditionLink, TreatmentLink, ServiceLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Arthritis Treatment in Arlington Heights, IL | Rand Medical Center",
  description: "Arthritis treatment in Arlington Heights, IL for knee, hip, shoulder, and spine arthritis. Expert pain management and orthopedic care. Same-day appointments. Call (224) 735-3522.",
  keywords: ["arthritis treatment Arlington Heights", "arthritis doctor near me", "arthritis specialist", "joint pain arthritis northwest suburbs", "osteoarthritis treatment Arlington Heights IL"],
  canonical: "https://www.randmedicalcenter.com/conditions/joints/arthritis",
};

export const hero: HeroSection = {
  eyebrow: "Joints Conditions",
  headline: "Arthritis Treatment in Arlington Heights, IL",
  subheadline: "Arthritis is manageable — with the right combination of therapies, most patients reduce their pain significantly and preserve their function for years. Our Arlington Heights team creates individualized plans for every arthritis type and every stage.",
  primaryCTA: { text: "Schedule an Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const definition = {
  headline: "What Is Arthritis?",
  body: "Arthritis is not a single disease — it is an umbrella term for more than 100 conditions that cause joint pain, stiffness, and inflammation. In the United States alone, more than 54 million adults have been diagnosed with some form of arthritis, making it one of the leading causes of chronic pain and disability. Understanding which type of arthritis you have is essential to getting the right treatment.\n\nOsteoarthritis (OA) is by far the most prevalent type, accounting for the majority of arthritis cases seen in a musculoskeletal clinic. OA is a degenerative disease in which articular cartilage — the smooth, protective coating on the ends of bones — progressively breaks down. As cartilage thins and disappears, bones begin to contact each other directly, causing pain, stiffness, swelling, and the formation of bone spurs (osteophytes) at the joint margins. The knees, hips, hands, and spine are most commonly affected.\n\nRheumatoid arthritis (RA) is an autoimmune condition in which the immune system attacks the synovial membrane lining the joints, producing chronic inflammation that destroys cartilage and bone over time. RA often affects multiple joints symmetrically and can involve the hands and wrists early in the disease. Unlike OA, RA requires disease-modifying medications prescribed by a rheumatologist, and early aggressive treatment dramatically improves outcomes.\n\nPost-traumatic arthritis develops in joints that have sustained prior injury — fractures, ligament tears, or meniscal damage — even years after the initial trauma. Gout and pseudogout are crystalline arthropathies caused by urate or calcium pyrophosphate crystal deposits in joints, producing intensely painful, episodic flares.\n\nAt Rand Medical Center in Arlington Heights, IL, we evaluate the type and severity of your arthritis carefully and build a coordinated, multi-specialty treatment plan designed to reduce pain, preserve joint function, and slow progression.",
};

export const symptoms = {
  headline: "Common Arthritis Symptoms",
  items: [
    { text: "Joint pain that worsens with activity", detail: "Osteoarthritis pain typically increases with load-bearing activity — walking, climbing stairs, lifting — and improves with rest, at least early in the disease. As OA progresses, pain at rest and at night becomes more common, indicating more advanced cartilage loss and increased bone marrow inflammation." },
    { text: "Morning stiffness lasting 30+ minutes", detail: "Morning stiffness that persists for 30 minutes or longer is a key distinguishing feature of inflammatory arthritis (rheumatoid arthritis, psoriatic arthritis). OA morning stiffness typically resolves within 15–20 minutes. Prolonged morning stiffness warrants laboratory evaluation for inflammatory markers." },
    { text: "Swelling and tenderness around joints", detail: "Joint swelling in arthritis comes from two sources: synovial fluid accumulation (effusion) and soft-tissue thickening from chronic synovitis. Swelling over the joint itself (intra-articular) differs in character from the bony enlargement of advanced OA (Heberden's and Bouchard's nodes in the finger joints) and helps distinguish the type and stage of disease." },
    { text: "Reduced range of motion", detail: "Progressive loss of joint mobility results from cartilage loss, osteophyte formation, capsular contraction, and muscle guarding around the painful joint. Reduced range of motion directly affects function — difficulty fully bending the knee, inability to look over the shoulder, or trouble reaching overhead are common functional consequences." },
    { text: "Grinding or crackling sensation", detail: "Crepitus — a grating, grinding, or crackling sensation during joint movement — occurs when irregular articular surfaces or osteophytes move against each other. In the knee, it may be felt with the hand over the patella during flexion and extension. Crepitus is common and not always painful, but its presence correlates with the degree of cartilage damage." },
    { text: "Joint deformity over time", detail: "Advanced osteoarthritis can produce visible joint deformity as bone spurs enlarge and cartilage space collapses asymmetrically. In the knee, this often manifests as a varus (bow-legged) or valgus (knock-kneed) alignment. In rheumatoid arthritis, chronic synovitis causes tendon damage and characteristic ulnar deviation of the fingers." }
  ] as SymptomItem[],
};

export const causes = {
  headline: "Common Causes and Types of Arthritis",
  items: [
    { text: "Osteoarthritis (wear-and-tear degeneration)", detail: "The most common form, caused by the cumulative breakdown of articular cartilage from mechanical load, age-related changes in cartilage metabolism, and prior joint injury. Risk increases significantly after age 50, with obesity, heavy manual occupations, and prior sports injuries all accelerating progression." },
    { text: "Rheumatoid arthritis (autoimmune)", detail: "An autoimmune disorder in which the body's immune system attacks the synovial lining of joints, causing persistent inflammation that erodes cartilage and bone. RA typically affects smaller joints first (wrists, fingers, feet), is symmetric, and requires disease-modifying anti-rheumatic drugs (DMARDs) managed by a rheumatologist alongside orthopedic and pain care." },
    { text: "Post-traumatic arthritis from prior injuries", detail: "Joint fractures, ligament tears (especially ACL), and significant cartilage injuries predispose the affected joint to early-onset arthritis, sometimes appearing 10–15 years after the original injury. Even well-treated fractures can lead to post-traumatic OA if articular surface congruence was imperfectly restored." },
    { text: "Gout and crystalline arthropathy", detail: "Gout results from uric acid crystal deposition in joints — characteristically the big toe, ankle, or knee — producing sudden, severe, red-hot joint flares. Pseudogout involves calcium pyrophosphate crystals and often affects the knee. Both are treatable with medications, though recurrent attacks require dietary and pharmacological urate management." },
    { text: "Age-related cartilage loss", detail: "Cartilage has limited ability to regenerate. Normal aging produces progressive changes in chondrocyte (cartilage cell) function and extracellular matrix composition, reducing the cartilage's resilience to repeated loading. This background of age-related degeneration underlies the sharply increasing prevalence of OA after age 50." },
    { text: "Obesity increasing joint stress", detail: "Every pound of body weight generates approximately 3–6 pounds of force across the knee joint during walking. Obesity not only increases mechanical joint stress dramatically but also promotes low-grade systemic inflammation that accelerates cartilage breakdown. Weight reduction is one of the most evidence-supported interventions for knee and hip arthritis." }
  ] as CauseItem[],
};

export const whenToSeeDoctor = {
  headline: "When to See a Doctor",
  body: "See a doctor if your symptoms last more than a few weeks, are getting worse, started after an injury or accident, or are affecting your ability to work and perform daily activities. Our team in Arlington Heights can often see you the same day or next day.",
  redFlags: [
    "Sudden, severe joint swelling with redness, warmth, and fever — possible septic arthritis (joint infection), which requires emergency evaluation and antibiotics",
    "Rapidly progressive joint destruction or worsening deformity — inflammatory arthritis can cause significant damage quickly without disease-modifying treatment",
    "Joint pain in a young person (under 40) without a clear injury history — may indicate inflammatory arthritis, crystalline disease, or another systemic condition requiring specific diagnosis",
    "New joint symptoms after a known infection, skin rash, or systemic illness — possible reactive or psoriatic arthritis"
  ],
};

export const howWeHelp = {
  headline: "Arthritis Treatment at Rand Medical Center",
  body: "At Rand Medical Center, arthritis care begins with identifying which type of arthritis you have and how advanced it is. Your doctor performs a joint-specific examination, reviews your symptom history and functional limitations, and obtains weight-bearing X-rays that accurately reflect the degree of joint space narrowing and alignment. For suspected inflammatory arthritis, laboratory evaluation (ESR, CRP, rheumatoid factor, anti-CCP) is ordered to identify autoimmune activity.\n\nFor osteoarthritis — the most common type we treat — our approach is graduated and individualized. Physical therapy builds the muscle strength and neuromuscular control that compensate for lost cartilage support. Low-impact aerobic exercise, aquatic therapy, and targeted strengthening reduce loading forces on the arthritic joint without further damaging it. Activity modification and weight management guidance are incorporated when relevant.\n\nJoint injections are a central tool in arthritis management. Corticosteroid injections reduce acute inflammatory flares quickly and effectively. Hyaluronic acid (viscosupplementation) injections provide joint lubrication and additional symptom relief in mild-to-moderate osteoarthritis over a longer period. Our pain management physicians perform these injections precisely, using landmark or ultrasound guidance depending on the joint.\n\nFor advanced arthritis with severe pain and functional limitation despite comprehensive conservative care, our orthopedic team evaluates whether joint replacement is appropriate. We provide honest, transparent guidance about when surgical intervention is likely to improve quality of life — and when it isn't. For inflammatory arthritis, we coordinate care with rheumatology when disease-modifying medications are needed.",
};

export const treatmentOptions = {
  headline: "Treatment Options",
  treatments: [
    { name: "Joint Injections", slug: "joint-injections", href: "/services/pain-management/joint-injections" },
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" },
    { name: "Joint Replacement", slug: "joint-replacement", href: "/services/orthopedics/joint-replacement" },
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
    { name: "Knee Pain", slug: "knee-pain", href: "/conditions/joints/knee-pain" },
    { name: "Hip Pain", slug: "hip-pain", href: "/conditions/joints/hip-pain" },
    { name: "Shoulder Pain", slug: "shoulder-pain", href: "/conditions/joints/shoulder-pain" },
    { name: "Osteoarthritis", slug: "osteoarthritis", href: "/conditions/joints/osteoarthritis" }
  ] as ConditionLink[],
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    { name: "Orthopedics", slug: "orthopedics", href: "/services/orthopedics" },
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" },
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" },
    { name: "Internal Medicine", slug: "internal-medicine", href: "/services/internal-medicine" }
  ] as ServiceLink[],
};

export const relatedBlogPosts = { headline: "Resources", posts: [] };

export const ctaSection = {
  headline: "Live Better With Arthritis — Expert Care in Arlington Heights",
  body: "Arthritis doesn't have to define your daily life. At Rand Medical Center in Arlington Heights, our pain management, orthopedic, and internal medicine teams work together to reduce your joint pain, protect your function, and build a long-term management plan that fits your life. Same-day and next-day appointments available for patients across the northwest Chicago suburbs.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Is there a cure for arthritis?", answer: "There is no cure for osteoarthritis — the cartilage loss cannot currently be reversed — but the condition is very manageable. Most patients achieve significant pain reduction and maintain good function for years through a combination of physical therapy, weight management, activity modification, and periodic injections. The goal of treatment is to maximize your quality of life at each stage of the disease, and for many people that means avoiding or significantly delaying the need for joint replacement surgery." },
  { question: "How do I know if I have osteoarthritis or rheumatoid arthritis?", answer: "The clinical distinction matters because the treatments are different. Osteoarthritis typically develops gradually in older adults, affects weight-bearing joints asymmetrically, improves briefly with rest, and shows joint space narrowing with bone spurs on X-ray. Rheumatoid arthritis often begins earlier in life, affects multiple joints symmetrically (especially hands and wrists), causes prolonged morning stiffness (>1 hour), and shows elevated inflammatory blood markers (ESR, CRP, RF, anti-CCP). Your doctor can differentiate them with examination and lab work at your first visit." },
  { question: "Do joint injections help arthritis?", answer: "Yes, particularly for osteoarthritis of the knee, hip, and shoulder. Corticosteroid injections reduce inflammation and provide pain relief, typically lasting weeks to several months and improving function between injection cycles. Hyaluronic acid injections provide joint lubrication and can reduce pain in mild-to-moderate knee osteoarthritis, with effects lasting 6–12 months for many patients. Neither replaces the structural benefit of physical therapy and strength training, but they serve an important role in managing pain and allowing active participation in rehabilitation." },
  { question: "When should I consider joint replacement for arthritis?", answer: "Joint replacement is generally considered when arthritis has progressed to the point where conservative treatments — therapy, injections, activity modification, and medications — no longer provide adequate pain control or functional ability, and quality of life is significantly affected. Imaging showing severe joint space loss confirms the structural extent of disease. Joint replacement is highly effective for end-stage knee and hip osteoarthritis, but it is major surgery with a recovery timeline of 3–6 months and is not recommended prematurely. Our team will give you an honest assessment of where you fall on that spectrum." },
];
