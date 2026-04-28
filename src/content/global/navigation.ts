// src/content/global/navigation.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Navigation & Footer Content
// ─────────────────────────────────────────────────────────

export const navigation = {
  topBar: {
    phone: { text: "(224) 735-3522", href: "tel:+12247353522" },
    address: "1925 E Rand Rd, Arlington Heights, IL 60004",
    hours: "Mon–Fri 8am–5pm",
  },
  logo: {
    text: "Rand Medical Center",
    href: "/",
    alt: "Rand Medical Center logo",
  },
  primary: [
    {
      label: "Services",
      href: "/services",
      children: [
        {
          heading: "Core Services",
          links: [
            {
              label: "Pain Management",
              href: "/services/pain-management",
              description: "Injections, nerve blocks, and advanced pain procedures",
            },
            {
              label: "Orthopedics",
              href: "/services/orthopedics",
              description: "Bone, joint, and sports injury care",
            },
            {
              label: "Physical Therapy",
              href: "/services/physical-therapy",
              description: "Rehabilitation for injuries, surgery, and chronic pain",
            },
            {
              label: "Internal Medicine",
              href: "/services/internal-medicine",
              description: "Primary care, chronic disease management, and prevention",
            },
            {
              label: "Immediate Care",
              href: "/services/immediate-care",
              description: "Walk-in visits for urgent injuries and illnesses",
            },
          ],
        },
        {
          heading: "Specialized Care",
          links: [
            {
              label: "Injury Services",
              href: "/services/injury-services",
              description: "Workers' comp, auto accident, and personal injury care",
            },
            {
              label: "Diagnostic & Surgical Services",
              href: "/services/diagnostic-surgical-services",
              description: "On-site imaging, lab, and outpatient surgery center",
            },
          ],
        },
      ],
    },
    {
      label: "Conditions",
      href: "/conditions",
      children: [
        {
          heading: "Spine Conditions",
          links: [
            { label: "Back Pain", href: "/conditions/spine/back-pain" },
            { label: "Neck Pain", href: "/conditions/spine/neck-pain" },
            { label: "Sciatica", href: "/conditions/spine/sciatica" },
            { label: "Herniated Disc", href: "/conditions/spine/herniated-disc" },
            { label: "Spinal Stenosis", href: "/conditions/spine/spinal-stenosis" },
          ],
        },
        {
          heading: "Joint Conditions",
          links: [
            { label: "Knee Pain", href: "/conditions/joints/knee-pain" },
            { label: "Shoulder Pain", href: "/conditions/joints/shoulder-pain" },
            { label: "Hip Pain", href: "/conditions/joints/hip-pain" },
            { label: "Arthritis", href: "/conditions/joints/arthritis" },
          ],
        },
        {
          heading: "More Conditions",
          links: [
            { label: "Neuropathy", href: "/conditions/nerves/neuropathy" },
            { label: "Sports Injuries", href: "/conditions/other/sports-injury" },
            { label: "Work Injuries", href: "/conditions/other/workplace-injury" },
            { label: "View All Conditions", href: "/conditions" },
          ],
        },
      ],
    },
    {
      label: "Programs",
      href: "/services/injury-services",
      children: [
        {
          heading: "Injury Programs",
          links: [
            {
              label: "Workers' Compensation",
              href: "/services/injury-services/workers-compensation",
              description: "Care, documentation, and return-to-work programs",
            },
            {
              label: "Motor Vehicle Accidents",
              href: "/services/injury-services/motor-vehicle-accidents",
              description: "Whiplash, back pain, and soft tissue injury care",
            },
            {
              label: "Personal Injury",
              href: "/services/injury-services/personal-injury",
              description: "Slip-and-fall, premises, and liability injury care",
            },
          ],
        },
      ],
    },
    { label: "About", href: "/about" },
    { label: "Patient Resources", href: "/patient-resources" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  cta: {
    text: "Book Now",
    href: "https://www.tebra.com/care/practice/rand-medical-center-456192",
    variant: "primary" as const,
  },
  phoneCta: {
    text: "(224) 735-3522",
    href: "tel:+12247353522",
    icon: "phone",
  },
};

export const footer = {
  tagline:
    "Rand Medical Center provides coordinated injury care, pain management, orthopedics, and physical therapy in Arlington Heights, IL and the northwest Chicago suburbs.",
  columns: [
    {
      heading: "Services",
      links: [
        { label: "Pain Management", href: "/services/pain-management" },
        { label: "Orthopedics", href: "/services/orthopedics" },
        { label: "Physical Therapy", href: "/services/physical-therapy" },
        { label: "Internal Medicine", href: "/services/internal-medicine" },
        { label: "Immediate Care", href: "/services/immediate-care" },
        { label: "Injury Services", href: "/services/injury-services" },
        { label: "Diagnostics & Surgery", href: "/services/diagnostic-surgical-services" },
      ],
    },
    {
      heading: "Injury Programs",
      links: [
        { label: "Workers' Compensation", href: "/services/injury-services/workers-compensation" },
        { label: "Motor Vehicle Accidents", href: "/services/injury-services/motor-vehicle-accidents" },
        { label: "Personal Injury", href: "/services/injury-services/personal-injury" },
      ],
    },
    {
      heading: "Conditions",
      links: [
        { label: "Back Pain", href: "/conditions/spine/back-pain" },
        { label: "Neck Pain", href: "/conditions/spine/neck-pain" },
        { label: "Sciatica", href: "/conditions/spine/sciatica" },
        { label: "Knee Pain", href: "/conditions/joints/knee-pain" },
        { label: "Shoulder Pain", href: "/conditions/joints/shoulder-pain" },
        { label: "All Conditions", href: "/conditions" },
      ],
    },
    {
      heading: "Patient Resources",
      links: [
        { label: "Insurance & Billing", href: "/patient-resources/insurance" },
        { label: "Patient Forms", href: "/patient-resources/patient-forms" },
        { label: "FAQ", href: "/patient-resources/faq" },
        { label: "What to Expect", href: "/patient-resources/what-to-expect" },
        { label: "Patient Portal", href: "/patient-resources/patient-portal" },
      ],
    },
    {
      heading: "About",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/about/our-team" },
        { label: "Facility Tour", href: "/about/facility-tour" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
  contact: {
    address: "1925 E Rand Rd, Arlington Heights, IL 60004",
    phone: "(224) 735-3522",
    phoneHref: "tel:+12247353522",
    hours: "Monday–Friday: 8:00 AM – 5:00 PM",
  },
  legal: {
    copyright: `© ${new Date().getFullYear()} Rand Medical Center. All rights reserved.`,
    links: [
      { label: "Privacy Policy", href: "/legal-support/privacy-policy" },
      { label: "Terms of Service", href: "/legal-support/terms-of-service" },
      { label: "HIPAA Notice", href: "/legal-support/hipaa-notice-of-privacy-practices" },
      { label: "Accessibility", href: "/legal-support/accessibility-statement" },
      { label: "Medical Disclaimer", href: "/legal-support/medical-disclaimer" },
      { label: "Sitemap", href: "/legal-support/html-sitemap" },
    ],
  },
  servingAreas:
    "Proudly serving Arlington Heights, Mount Prospect, Des Plaines, Palatine, Rolling Meadows, Schaumburg, Elk Grove Village, Wheeling, Buffalo Grove, Prospect Heights, Park Ridge, Niles, and Glenview.",
};
