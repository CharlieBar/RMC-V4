// src/content/conditions/joints/knee-pain.ts
// Rand Medical Center — Knee Pain (Condition Page)

import type { SEOMeta, HeroSection, SymptomItem, CauseItem, ConditionLink, TreatmentLink, ServiceLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Knee Pain Treatment in Arlington Heights, IL | Rand Medical Center",
  description: "Knee pain treatment in Arlington Heights, IL for arthritis, meniscus tears, ligament injuries, and overuse conditions. Same-day appointments. Call (224) 735-3522.",
  keywords: ["knee pain treatment Arlington Heights", "knee pain doctor near me", "knee pain specialist", "knee arthritis treatment northwest suburbs", "knee injection Arlington Heights"],
  canonical: "https://www.randmedicalcenter.com/conditions/joints/knee-pain",
};

export const hero: HeroSection = {
  eyebrow: "Joints Conditions",
  headline: "Knee Pain Treatment in Arlington Heights, IL",
  subheadline: "Whether your knee pain is from arthritis, a sports injury, or a workplace accident, our Arlington Heights team identifies the exact cause and creates a treatment plan to get you moving again.",
  primaryCTA: { text: "Schedule an Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const definition = {
  headline: "What Is Knee Pain?",
  body: "The knee is the largest joint in the body and one of the most mechanically complex — a meeting point of the femur (thigh bone), tibia (shin bone), and patella (kneecap), stabilized by four major ligaments, padded by two C-shaped menisci, and surrounded by multiple bursa sacs that reduce friction. Because it bears the body's full weight through a wide range of motion, the knee is one of the most frequently injured and most commonly arthritic joints.\n\nKnee pain is one of the leading musculoskeletal complaints affecting adults of all ages. In younger and active patients, it most often results from ligament sprains (ACL, MCL), meniscus tears from twisting injuries, or patellar tendinitis from repetitive loading in athletes and laborers. In adults over 45, osteoarthritis — progressive loss of articular cartilage — becomes increasingly prevalent, producing the characteristic morning stiffness, activity-related aching, and gradual loss of motion that so many patients recognize.\n\nAccurate diagnosis is essential because the appropriate treatment differs significantly by cause. A meniscus tear in a young patient may benefit from arthroscopic surgery, while the same symptom in an older patient with underlying arthritis may respond equally well to physical therapy and an injection. At Rand Medical Center in Arlington Heights, IL, we evaluate knee pain with careful clinical examination, on-site X-rays, and MRI coordination when soft-tissue injury is suspected — then build the most appropriate treatment plan around your specific findings.",
};

export const symptoms = {
  headline: "Common Knee Pain Symptoms",
  items: [
    { text: "Pain with walking, climbing stairs, or kneeling", detail: "Activity-related knee pain that worsens with weight-bearing tasks is characteristic of arthritis, meniscus pathology, or patellar tracking problems. Stair climbing — which loads the patellofemoral joint at 2–3 times body weight — is frequently the most provocative activity for patients with anterior knee pain." },
    { text: "Swelling or stiffness", detail: "Joint swelling indicates active inflammation within the knee — whether from arthritis, a torn meniscus, a ligament sprain, or bursitis. Swelling that develops within hours of an injury suggests bleeding into the joint (hemarthrosis), which may indicate an ACL tear or fracture. Chronic low-grade swelling that fluctuates with activity is more typical of arthritis." },
    { text: "Popping or grinding sensation", detail: "Occasional clicking or popping with movement is common and often benign. Persistent grinding (crepitus) during knee flexion and extension, however, may reflect articular cartilage damage or patellofemoral maltracking. A single audible pop at the time of injury — particularly during a pivoting or landing motion — is a classic sign of ACL rupture." },
    { text: "Feeling of instability or giving way", detail: "The knee 'giving out' during walking, turning, or descending stairs indicates ligamentous laxity (ACL or PCL insufficiency), meniscus instability from a bucket-handle tear, or quadriceps weakness from prolonged pain inhibition. Instability significantly increases fall risk and should be evaluated promptly." },
    { text: "Reduced range of motion", detail: "Difficulty fully straightening or bending the knee may result from effusion limiting joint space, scar tissue formation, a mechanical block from a displaced meniscus tear, or arthritic joint changes. Loss of full extension (an extensor lag) is particularly functionally limiting and warrants prompt assessment." },
    { text: "Pain after prolonged sitting", detail: "The 'movie sign' — increasing knee pain after sitting with the knee flexed for 30 or more minutes, relieved by standing and walking briefly — is a classic presentation of patellofemoral pain syndrome. It occurs because sustained flexion increases pressure between the patella and femur, and the pain eases as motion redistributes that load." }
  ] as SymptomItem[],
};

export const causes = {
  headline: "Common Causes of Knee Pain",
  items: [
    { text: "Osteoarthritis (wear-and-tear)", detail: "The most common cause of knee pain in adults over 50. Progressive loss of articular cartilage on the femoral and tibial surfaces causes bone-on-bone friction, reactive synovitis, and osteophyte formation. The medial compartment is most often affected, producing a characteristic varus (bow-legged) deformity in advanced cases." },
    { text: "Meniscus tears", detail: "The medial and lateral menisci are C-shaped fibrocartilage structures that distribute load and stabilize the knee. Acute tears occur through twisting mechanisms in younger active patients; degenerative tears in older adults happen with minimal trauma on cartilage that has become brittle over time. Both cause medial or lateral joint-line pain and swelling." },
    { text: "Ligament injuries (ACL, MCL)", detail: "The ACL (anterior cruciate ligament) is most commonly torn during non-contact pivoting, cutting, or landing movements — the audible pop and immediate swelling are characteristic. The MCL is typically injured by a direct blow to the outer knee. Both injuries produce instability and require careful functional evaluation to determine whether surgical or conservative management is most appropriate." },
    { text: "Tendonitis or bursitis", detail: "Patellar tendinitis (jumper's knee) from repetitive loading, quadriceps tendinitis from overuse, or prepatellar/pes anserine bursitis from prolonged kneeling are common in both athletes and workers whose jobs require kneeling or squatting. These conditions produce focal tenderness and pain that correlates precisely with the affected structure's location." },
    { text: "Work injuries from kneeling or heavy labor", detail: "Tradespeople, flooring workers, roofers, and laborers who spend hours kneeling are at elevated risk for prepatellar bursitis, meniscal degeneration, and osteoarthritis. Work-related knee injuries often have workers' compensation implications that require thorough documentation from the first visit." },
    { text: "Sports injuries", detail: "Basketball, soccer, skiing, and running each place characteristic loads on the knee. Overuse injuries such as iliotibial band syndrome and patellofemoral pain are common in runners; pivot-sport athletes are at higher risk for ACL and meniscus injuries. Our sports medicine-trained orthopedic team evaluates and treats the full spectrum of athletic knee injuries." }
  ] as CauseItem[],
};

export const whenToSeeDoctor = {
  headline: "When to See a Doctor",
  body: "See a doctor if your symptoms last more than a few weeks, are getting worse, started after an injury or accident, or are affecting your ability to work and perform daily activities. Our team in Arlington Heights can often see you the same day or next day.",
  redFlags: [
    "Sudden severe pain and swelling immediately following a fall, pivot, or direct blow — may indicate ACL rupture, fracture, or significant ligament injury",
    "Knee that is locked and cannot be fully straightened — possible displaced meniscus bucket-handle tear requiring urgent evaluation",
    "Hot, red, significantly swollen knee with or without fever — possible septic arthritis (joint infection), which is a medical emergency",
    "Inability to bear weight on the leg after an injury"
  ],
};

export const howWeHelp = {
  headline: "Knee Pain Treatment at Rand Medical Center",
  body: "At Rand Medical Center, knee pain evaluation starts with a detailed history of your symptoms — when and how they began, what makes them better or worse, and how they're affecting your daily function. Your doctor performs a hands-on physical examination including ligament stress tests, meniscal provocation tests, and assessment of range of motion and swelling. On-site weight-bearing X-rays provide the most accurate view of joint space narrowing and alignment. When soft-tissue injury is suspected, we coordinate prompt MRI.\n\nFor most patients, initial treatment follows a conservative-first sequence. Physical therapy targets the specific deficits identified on examination: quadriceps and hip strengthening to reduce compressive load on the articular cartilage, neuromuscular training for proprioception and stability, and manual therapy to address soft-tissue restrictions. For patients with significant inflammatory pain limiting participation in therapy, a corticosteroid joint injection can reduce inflammation quickly and meaningfully. For arthritis, viscosupplementation (hyaluronic acid injections) provides lubrication and additional symptom relief over a longer period.\n\nMost patients with arthritis, tendinitis, or mild-to-moderate meniscal pathology respond well to conservative care within 6–8 weeks. For patients with structural damage that has not responded to conservative treatment — significant ligament tears, large meniscus tears causing mechanical symptoms, or advanced arthritis with severe functional impairment — our orthopedic team evaluates arthroscopic or surgical options, including joint replacement for appropriate candidates.",
};

export const treatmentOptions = {
  headline: "Treatment Options",
  treatments: [
    { name: "Orthopedics", slug: "orthopedics", href: "/services/orthopedics" },
    { name: "Joint Injections", slug: "joint-injections", href: "/services/pain-management/joint-injections" },
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" },
    { name: "Arthroscopic Surgery", slug: "arthroscopic-surgery", href: "/services/orthopedics/arthroscopic-surgery" }
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
    { name: "Arthritis", slug: "arthritis", href: "/conditions/joints/arthritis" },
    { name: "Osteoarthritis", slug: "osteoarthritis", href: "/conditions/joints/osteoarthritis" },
    { name: "Sports Injury", slug: "sports-injury", href: "/conditions/other/sports-injury" }
  ] as ConditionLink[],
};

export const relatedServices = {
  headline: "Related Services",
  services: [
    { name: "Orthopedics", slug: "orthopedics", href: "/services/orthopedics" },
    { name: "Physical Therapy", slug: "physical-therapy", href: "/services/physical-therapy" },
    { name: "Pain Management", slug: "pain-management", href: "/services/pain-management" }
  ] as ServiceLink[],
};

export const relatedBlogPosts = { headline: "Resources", posts: [] };

export const ctaSection = {
  headline: "Get Back on Your Feet — Knee Pain Evaluation in Arlington Heights",
  body: "Knee pain that limits your mobility, sleep, or ability to work deserves a real diagnosis — not a prescription and a referral elsewhere. Our orthopedic and pain management team at Rand Medical Center in Arlington Heights evaluates and treats the full range of knee conditions, from acute injuries to chronic arthritis. Same-day and next-day appointments available.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Will knee arthritis always require surgery?", answer: "No. Many patients with knee osteoarthritis — including moderate-to-severe cases — achieve sustained symptom relief and functional improvement without surgery through a combination of physical therapy, weight management, activity modification, and periodic joint injections. Surgery, including knee replacement, is typically considered after conservative measures have been pursued over an adequate period and quality of life remains significantly limited. We will give you an honest assessment of your options and never recommend surgery prematurely." },
  { question: "What is the best injection for knee pain?", answer: "The best injection depends on your diagnosis and goals. Corticosteroid injections provide rapid anti-inflammatory relief and work well for inflammatory arthritis flares, bursitis, and acute tendinitis — usually effective within a few days and lasting weeks to months. Hyaluronic acid (viscosupplementation) injections are more appropriate for mild-to-moderate osteoarthritis and work more gradually, providing lubrication and mild symptom reduction over a longer period. Your doctor will recommend the right approach based on your specific condition, imaging, and response to prior treatments." },
  { question: "Do you treat work-related knee injuries?", answer: "Yes. We regularly evaluate and treat work-related knee injuries — whether from a single acute event (fall, struck-by, machine accident) or cumulative exposure (prolonged kneeling, repetitive squatting). We handle all workers' compensation documentation: initial injury reports, work-status letters, progress notes for adjusters, and functional capacity information. You can call us directly to schedule — you do not need to wait for your employer to arrange the appointment." },
  { question: "What should I bring to my first knee pain appointment?", answer: "Bring a photo ID, your insurance card or workers' compensation information, a current medication list, and any prior imaging studies (X-rays, MRI) or medical records related to your knee. If you've already had physical therapy, injections, or a prior surgical procedure on the knee, a brief summary helps us pick up where prior care left off and avoid duplicate testing." },
];
