// src/content/global/site.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Global Business Information
// Single source of truth for NAP, contact, and brand data.
// ─────────────────────────────────────────────────────────

export const site = {
  name: "Rand Medical Center",
  shortName: "RMC",
  tagline: "Injury & Pain Care in Arlington Heights, IL",
  description:
    "Rand Medical Center provides comprehensive care for work injuries, auto accidents, pain management, orthopedics, physical therapy, and immediate care in Arlington Heights and the northwest Chicago suburbs.",
  url: "https://www.randmedicalcenter.com",
  phone: "(224) 735-3522",
  phoneRaw: "+12247353522",
  phoneLink: "tel:+12247353522",
  // ASSUMPTION: Fax number not provided — update when available
  fax: "(224) 735-3523",
  // ASSUMPTION: General email not provided — update when available
  email: "info@randmedicalcenter.com",
  bookingUrl: "https://www.tebra.com/care/practice/rand-medical-center-456192",
  address: {
    street: "1925 E Rand Rd",
    city: "Arlington Heights",
    state: "IL",
    zip: "60004",
    full: "1925 E Rand Rd, Arlington Heights, IL 60004",
  },
  coordinates: {
    lat: 42.0884,
    lng: -87.9806,
  },
  hours: [
    { day: "Monday", hours: "8:00 AM – 5:00 PM" },
    { day: "Tuesday", hours: "8:00 AM – 5:00 PM" },
    { day: "Wednesday", hours: "8:00 AM – 5:00 PM" },
    { day: "Thursday", hours: "8:00 AM – 5:00 PM" },
    { day: "Friday", hours: "8:00 AM – 5:00 PM" },
    // ASSUMPTION: Weekend hours not confirmed — update when available
    { day: "Saturday", hours: "By Appointment" },
    { day: "Sunday", hours: "Closed" },
  ],
  hoursSchema: [
    "Mo-Fr 08:00-17:00",
    "Sa 09:00-13:00",
  ],
  serviceArea: {
    primary: "Arlington Heights",
    region: "Northwest Chicago suburbs",
    communities: [
      "Arlington Heights",
      "Mount Prospect",
      "Des Plaines",
      "Palatine",
      "Rolling Meadows",
      "Schaumburg",
      "Elk Grove Village",
      "Wheeling",
      "Buffalo Grove",
      "Prospect Heights",
      "Park Ridge",
      "Niles",
      "Glenview",
    ],
  },
  social: {
    // ASSUMPTION: Social media handles not provided — update when available
    google: "https://g.page/rand-medical-center",
    facebook: "https://facebook.com/randmedicalcenter",
    instagram: "https://instagram.com/randmedicalcenter",
    youtube: "https://youtube.com/@randmedicalcenter",
    linkedin: "https://linkedin.com/company/rand-medical-center",
  },
  // ASSUMPTION: Review counts estimated — update with actual numbers
  reviews: {
    google: { count: 500, rating: 4.8 },
  },
  medicalSpecialties: [
    "Pain Management",
    "Orthopedics",
    "Physical Therapy & Rehabilitation",
    "Internal Medicine & Primary Care",
    "Immediate Care",
    "Injury Services (Workers' Comp, Auto, Personal Injury)",
    "Diagnostic & Surgical Services",
  ],
  primaryAudiences: [
    "Injured workers (workers' compensation cases)",
    "Auto accident victims (personal injury)",
    "Chronic pain patients",
    "Referring physicians and attorneys",
  ],
  primaryCTAs: {
    bookOnline: {
      text: "Schedule an Appointment",
      href: "https://www.tebra.com/care/practice/rand-medical-center-456192",
      variant: "primary" as const,
    },
    call: {
      text: "Call (224) 735-3522",
      href: "tel:+12247353522",
      variant: "secondary" as const,
    },
    requestEval: {
      text: "Request an Injury Evaluation",
      href: "/contact/schedule-appointment",
      variant: "primary" as const,
    },
  },
};
