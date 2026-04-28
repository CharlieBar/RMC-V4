// src/content/pages/html-sitemap.ts
// Rand Medical Center — HTML Sitemap

import type { SEOMeta, HeroSection, LegalPageContent } from "@/types/content";

export const seo: SEOMeta = {
  title: "HTML Sitemap | Rand Medical Center",
  description: "A complete directory of all pages on the Rand Medical Center website for easy navigation.",
  canonical: "https://www.randmedicalcenter.com/legal-support/html-sitemap",
  noIndex: true,
};

export const hero: HeroSection = {
  eyebrow: "Legal",
  headline: "HTML Sitemap",
  subheadline: "A complete directory of all pages on the Rand Medical Center website for easy navigation.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const lastUpdated = "2026-01-01";

export const body = 'This page provides a complete list of all pages on the Rand Medical Center website. Use it to find information about our services, conditions, treatments, and resources. The sitemap is automatically generated from our site structure.';
