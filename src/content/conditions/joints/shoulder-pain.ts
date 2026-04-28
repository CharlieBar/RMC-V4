// src/content/conditions/joints/shoulder-pain.ts
// Rand Medical Center — Shoulder Pain (Condition Page)

import type { SEOMeta, HeroSection, SymptomItem, CauseItem, ConditionLink, TreatmentLink, ServiceLink, FeatureItem, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Shoulder Pain Treatment in Arlington Heights, IL | Rand Medical Center",
  description: "Shoulder pain treatment in Arlington Heights, IL for rotator cuff tears, bursitis, frozen shoulder, and arthritis. Same-day appointments available. Call (224) 735-3522.",
  keywords: ["shoulder pain treatment Arlington Heights", "shoulder pain doctor near me", "shoulder pain specialist", "rotator cuff treatment northwest suburbs", "frozen shoulder treatment Arlington Heights"],
  canonical: "https://www.randmedicalcenter.com/conditions/joints/shoulder-pain",
};

export const hero: HeroSection = {
  eyebrow: "Joints Conditions",
  headline: "Shoulder Pain Treatment in Arlington Heights, IL",
  subheadline: "Night pain, weakness when lifting your arm, or stiffness that won't resolve — shoulder problems respond well to expert care. Our Arlington Heights team diagnoses the exact cause and treats it precisely.",
  primaryCTA: { text: "Schedule an Evaluation", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const definition = {
  headline: "What Is Shoulder Pain?",
  body: "The shoulder is the most mobile joint in the body, capable of moving through a greater arc than any other joint. That extraordinary mobility comes at the cost of inherent instability — the shoulder's socket (glenoid) is comparatively shallow, making it dependent on the rotator cuff muscles, labrum, and surrounding ligaments for stability. This trade-off means the shoulder is highly susceptible to a distinctive set of injuries and degenerative conditions.\n\nThe rotator cuff is a group of four muscles and their tendons (supraspinatus, infraspinatus, subscapularis, and teres minor) that wrap around the humeral head. These tendons pass through a narrow subacromial space beneath the acromion bone. When this space becomes crowded — from tendon swelling, a bone spur, or structural damage — the tendons are impinged and can develop partial or complete tears over time.\n\nShoulder pain can originate from multiple structures: the rotator cuff tendons and bursa, the glenohumeral (ball-and-socket) joint, the acromioclavicular (AC) joint at the top of the shoulder, the biceps tendon, or the labrum. Each produces a characteristic symptom pattern. Rotator cuff pathology is most often felt as outer arm pain and weakness with overhead activities and at night. Frozen shoulder (adhesive capsulitis) produces progressive, severe stiffness in all planes. AC joint arthritis causes sharp pain at the top of the shoulder with cross-body motions. Accurate identification of the pain source is essential to directing effective treatment.\n\nAt Rand Medical Center in Arlington Heights, IL, we evaluate shoulder pain with clinical examination, provocative testing, and imaging to pinpoint the underlying diagnosis and build a targeted treatment plan.",
};

export const symptoms = {
  headline: "Common Shoulder Pain Symptoms",
  items: [
    { text: "Pain with overhead reaching or lifting", detail: "Pain that occurs in the arc between 60 and 120 degrees of arm elevation is a classic sign of subacromial impingement — the rotator cuff tendons being compressed between the humeral head and acromion during mid-range elevation. Full overhead reach may be possible but painful, and loading (carrying a bag or pushing a door open) intensifies the pain." },
    { text: "Night pain that disrupts sleep", detail: "Night pain — particularly when lying on the affected shoulder — is one of the most disabling symptoms of rotator cuff pathology and subacromial bursitis. It occurs because lying on the shoulder compresses the inflamed bursa and tendon against the acromion. Many patients report waking multiple times per night, which compounds fatigue and delays recovery." },
    { text: "Weakness when raising the arm", detail: "Rotator cuff tears reduce the force the shoulder muscles can generate during elevation and external rotation. Patients may be unable to hold a glass of water at shoulder height or reach overhead without the arm giving way. Sudden onset of severe weakness after a fall or heavy lift may indicate an acute full-thickness tear." },
    { text: "Stiffness and limited range of motion", detail: "Gradual, progressive stiffness in all planes of shoulder motion — particularly external rotation — is the hallmark of frozen shoulder (adhesive capsulitis). Unlike rotator cuff problems, frozen shoulder restricts passive as well as active motion and typically progresses through three phases: freezing, frozen, and thawing, spanning 1–3 years without treatment." },
    { text: "Popping or grinding with movement", detail: "Crepitus — felt or heard during shoulder movement — may come from the AC joint, the subacromial space (tendon surfaces moving against each other), or the glenohumeral joint (arthritic surfaces). A single significant pop at the time of a fall or heavy lift can indicate a rotator cuff or labral tear and warrants evaluation." },
    { text: "Pain radiating down the upper arm", detail: "Rotator cuff pathology and subacromial bursitis frequently produce pain that radiates down the outer upper arm, toward the deltoid insertion. If pain, numbness, or tingling travels below the elbow into the forearm or hand, a cervical source — such as a herniated disc compressing a nerve root — should be considered alongside the shoulder diagnosis." }
  ] as SymptomItem[],
};

export const causes = {
  headline: "Common Causes of Shoulder Pain",
  items: [
    { text: "Rotator cuff tears or tendonitis", detail: "Rotator cuff pathology is the most common cause of shoulder pain in adults. Tendinitis (tendon inflammation) from repetitive overhead work or sports usually responds well to conservative treatment. Partial and full-thickness tears range from minor injuries to complete ruptures that may require surgical repair, particularly in active patients." },
    { text: "Shoulder bursitis", detail: "The subacromial bursa is a fluid-filled sac that cushions the rotator cuff tendons. When it becomes inflamed — from overuse, impingement, or a direct fall — it produces sharp pain with arm elevation and a deep aching that is often worst at night. Bursal injections are often highly effective for acute bursitis." },
    { text: "Frozen shoulder (adhesive capsulitis)", detail: "Frozen shoulder develops when the glenohumeral joint capsule becomes inflamed, then thickened and adherent, progressively restricting all shoulder movement. It can occur after injury, surgery, or prolonged immobilization, and is more common in people with diabetes. Physical therapy and targeted injections can accelerate recovery through all three stages." },
    { text: "Arthritis", detail: "Glenohumeral osteoarthritis — loss of cartilage in the ball-and-socket joint — produces deep, diffuse shoulder pain and progressive loss of motion. AC joint arthritis causes sharp top-of-shoulder pain with cross-body and behind-the-back movements. Both respond to physical therapy and injections in earlier stages, with joint replacement as an advanced option." },
    { text: "Shoulder impingement", detail: "Structural or dynamic narrowing of the subacromial space causes the rotator cuff tendons and bursa to be mechanically pinched (impinged) during arm elevation. Over time, repetitive impingement produces tendon inflammation, fraying, and eventual tearing. Correcting the scapular mechanics that allow impingement is a central focus of physical therapy." },
    { text: "Labral tears from sports or injury", detail: "The labrum is a rim of fibrocartilage that deepens the shoulder socket and anchors the biceps tendon. Labral tears can result from a shoulder dislocation, a fall on an outstretched arm, or repetitive overhead throwing. Bankart lesions (anterior labral tears from dislocation) and SLAP tears (superior labrum) are common types, producing pain with specific movements and sometimes instability." }
  ] as CauseItem[],
};

export const whenToSeeDoctor = {
  headline: "When to See a Doctor",
  body: "See a doctor if your symptoms last more than a few weeks, are getting worse, started after an injury or accident, or are affecting your ability to work and perform daily activities. Our team in Arlington Heights can often see you the same day or next day.",
  redFlags: [
    "Sudden, severe weakness or inability to lift the arm after a fall or heavy lift — possible acute rotator cuff rupture requiring urgent imaging",
    "First-time shoulder dislocation — requires reduction and imaging to assess for fracture and labral damage",
    "Shoulder pain following a car accident or direct blow — evaluate for fracture, AC separation, and neurovascular injury",
    "Shoulder pain with fever and warmth — possible septic arthritis, which requires emergency evaluation"
  ],
};

export const howWeHelp = {
  headline: "Shoulder Pain Treatment at Rand Medical Center",
  body: "At Rand Medical Center, shoulder pain evaluation begins with a specific clinical examination — your doctor assesses range of motion in all planes, performs provocative tests (Hawkins, empty can, O'Brien, apprehension) to isolate the pain source, and evaluates rotator cuff strength. On-site X-rays assess for arthritis, AC joint changes, calcific tendinitis, and acromion morphology. When soft-tissue injury is suspected, we coordinate prompt shoulder MRI.\n\nTreatment is guided by your diagnosis and follows a conservative-first sequence. Physical therapy for shoulder conditions addresses scapular stabilization and positioning (which directly affects subacromial space dimensions), rotator cuff strengthening progressions, and posterior capsule stretching for impingement and early frozen shoulder. Most rotator cuff tendinitis, bursitis, and impingement cases respond meaningfully within 4–8 weeks of targeted therapy.\n\nFor patients with significant inflammation, subacromial bursa injections (corticosteroid combined with local anesthetic) provide rapid relief and allow better participation in therapy. For frozen shoulder, a series of glenohumeral joint injections combined with aggressive physical therapy can dramatically accelerate recovery through the frozen and thawing phases. For AC joint arthritis, a targeted AC joint injection is highly effective.\n\nFor patients with significant rotator cuff tears, labral tears, or advanced arthritis that has not responded to conservative care, our orthopedic team evaluates arthroscopic repair or, for end-stage glenohumeral arthritis, shoulder joint replacement.",
};

export const treatmentOptions = {
  headline: "Treatment Options",
  treatments: [
    { name: "Joint Injections", slug: "joint-injections", href: "/services/pain-management/joint-injections" },
    { name: "Bursa Injections", slug: "bursa-injections", href: "/services/pain-management/bursa-injections" },
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
  headline: "Targeted Shoulder Pain Care in Arlington Heights — Sleep Better, Move Better",
  body: "Shoulder pain that wakes you at night or limits what you can lift, reach, or carry deserves expert diagnosis — not guesswork. Our orthopedic and pain management team in Arlington Heights will identify the exact source of your shoulder problem and start you on the most effective treatment path. Same-day and next-day appointments available.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" as const },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" as const },
};

export const faqs: FAQItem[] = [
  { question: "Do all rotator cuff tears require surgery?", answer: "No. Many partial-thickness rotator cuff tears — and even some small full-thickness tears in older, less active patients — respond well to physical therapy and subacromial injections without surgical repair. The decision depends on the tear's size and location, your age and activity level, your functional limitations, and your response to conservative treatment. Larger tears causing significant weakness, and tears in younger active patients who need full shoulder function, are more likely to benefit from surgical repair. Our orthopedic team will give you an honest assessment of your specific tear." },
  { question: "How long does frozen shoulder take to resolve?", answer: "Untreated frozen shoulder typically resolves spontaneously over 1–3 years, but this timeline involves substantial pain and disability. With active treatment — a combination of physical therapy, glenohumeral joint injections, and home stretching — most patients recover meaningful motion and function significantly faster, often within 6–12 months. Early intervention in the freezing phase produces the best outcomes. If you've noticed gradually worsening shoulder stiffness over weeks to months, don't wait." },
  { question: "Do you treat work-related shoulder injuries?", answer: "Yes. We regularly treat occupational shoulder injuries — from acute rotator cuff tears from a single lifting event to cumulative rotator cuff tendinitis from years of overhead work. We handle all workers' compensation documentation from the first visit forward, including injury reports, work-restriction letters, and progress notes for your employer's insurer. You can call us directly — you do not need your employer to set up the appointment in Illinois." },
  { question: "What should I bring to my first shoulder appointment?", answer: "Bring a photo ID, your insurance card or workers' compensation paperwork, a medication list, and any prior shoulder imaging (X-rays, MRI). If you've already had surgery on this shoulder or previously seen another provider, a brief summary of the prior care and your response to it is very helpful. Wearing a loose-fitting top allows easier physical examination." },
];
