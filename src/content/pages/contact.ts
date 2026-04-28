// src/content/pages/contact.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Contact Page
// ─────────────────────────────────────────────────────────

import type { SEOMeta, HeroSection, LocationInfo, FAQItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "Contact Rand Medical Center | Arlington Heights, IL | (224) 735-3522",
  description:
    "Contact Rand Medical Center in Arlington Heights, IL. Call (224) 735-3522 or schedule online for pain management, orthopedics, physical therapy, and injury care. Walk-ins welcome for urgent injuries.",
  keywords: [
    "Rand Medical Center phone number",
    "Rand Medical Center address",
    "injury doctor Arlington Heights IL",
    "schedule appointment Arlington Heights",
    "walk-in injury clinic near me",
  ],
  canonical: "https://www.randmedicalcenter.com/contact",
};

export const hero: HeroSection = {
  eyebrow: "Contact Us",
  headline: "Get in Touch With Rand Medical Center",
  subheadline:
    "Call us, schedule online, or walk in for urgent injuries. Our Arlington Heights clinic is open Monday through Friday, with same-day appointments available for new injuries.",
  primaryCTA: {
    text: "Schedule Online",
    href: "https://www.tebra.com/care/practice/rand-medical-center-456192",
    variant: "primary",
  },
  secondaryCTA: {
    text: "Call (224) 735-3522",
    href: "tel:+12247353522",
    variant: "secondary",
  },
};

export const location: LocationInfo = {
  name: "Rand Medical Center",
  address: "1925 E Rand Rd",
  city: "Arlington Heights",
  state: "IL",
  zip: "60004",
  phone: "(224) 735-3522",
  phoneRaw: "+12247353522",
  // ASSUMPTION: Fax not confirmed
  fax: "(224) 735-3523",
  // ASSUMPTION: Email not confirmed
  email: "info@randmedicalcenter.com",
  hours: [
    { day: "Monday", hours: "8:00 AM – 5:00 PM" },
    { day: "Tuesday", hours: "8:00 AM – 5:00 PM" },
    { day: "Wednesday", hours: "8:00 AM – 5:00 PM" },
    { day: "Thursday", hours: "8:00 AM – 5:00 PM" },
    { day: "Friday", hours: "8:00 AM – 5:00 PM" },
    { day: "Saturday", hours: "By Appointment" },
    { day: "Sunday", hours: "Closed" },
  ],
  coordinates: { lat: 42.0884, lng: -87.9806 },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960!2d-87.9806!3d42.0884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDA1JzE4LjIiTiA4N8KwNTgnNTAuMiJX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
};

export const formConfig = {
  headline: "Send Us a Message",
  subheadline:
    "Have a question about services, insurance, or scheduling? Fill out the form below and our team will respond within one business day.",
  fields: [
    "First Name",
    "Last Name",
    "Phone Number",
    "Email Address",
    "Reason for Visit",
    "Insurance/Workers' Comp Info (optional)",
    "Preferred Date and Time",
    "Message",
  ],
  submitText: "Submit Request",
  privacyNote:
    "Your information is protected and will only be used to respond to your inquiry. See our privacy policy for details.",
};

export const emergencyNote = {
  headline: "Need Immediate Help?",
  body: "If you are experiencing a medical emergency — such as chest pain, difficulty breathing, severe bleeding, or loss of consciousness — please call 911 or go to your nearest emergency room immediately. Rand Medical Center provides urgent injury care but is not an emergency room.",
};

export const servingAreas = {
  headline: "Serving the Northwest Chicago Suburbs",
  body: "Rand Medical Center is conveniently located in Arlington Heights, IL on E Rand Rd — just minutes from Route 14, Route 53, and I-90. We serve patients from across the northwest Chicago suburbs.",
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
};

export const directionsNote = {
  headline: "Directions and Parking",
  body: "Our clinic is located at 1925 E Rand Rd in Arlington Heights, IL 60004. Free parking is available on-site with accessible spaces near the main entrance. The facility is ADA-compliant and wheelchair accessible throughout.",
};

export const ctaSection = {
  headline: "Ready to Schedule?",
  body: "You can book online through our scheduling system, call our office directly, or walk in for urgent injury visits. Our team is ready to help.",
  primaryCTA: {
    text: "Schedule Online",
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
    question: "Do I need an appointment, or can I walk in?",
    answer:
      "We accept both. Scheduled appointments are recommended for most visits, but we also accept walk-ins for urgent injuries and immediate care needs. Call ahead if possible so we can prepare for your visit.",
  },
  {
    question: "What should I bring to my first visit?",
    answer:
      "Bring a valid photo ID, your insurance card or workers' comp claim number, a list of current medications, and any prior imaging or medical records. For work injuries, bring your employer's information and any incident report details.",
  },
  {
    question: "Do you accept my insurance?",
    answer:
      "We accept most major insurance plans, workers' compensation, and personal injury cases on a lien basis. Call our office at (224) 735-3522 and our billing team can verify your coverage before your visit.",
  },
  {
    question: "How quickly can I get an appointment?",
    answer:
      "For new injuries — especially work injuries and auto accidents — we offer same-day or next-day appointments in most cases. For routine visits, we typically schedule within a few days. Call us and we'll find the earliest available time.",
  },
];
