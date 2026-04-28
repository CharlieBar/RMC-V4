// src/types/content.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Master Content Type Definitions
// This file is the data contract. Claude Code reads these
// interfaces to understand the shape of every content file.
// ─────────────────────────────────────────────────────────

// ── Core Primitives ──────────────────────────────────────

export interface SEOMeta {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export interface CTA {
  text: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "outline";
}

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Stat {
  value: string;
  suffix?: string;
  label: string;
}

export interface InternalLink {
  label: string;
  href: string;
  description?: string;
}

// ── Section Types ────────────────────────────────────────

export interface HeroSection {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  body?: string;
  primaryCTA: CTA;
  secondaryCTA?: CTA;
  badge?: string;
  image?: ImageAsset;
  stats?: Stat[];
}

export interface FeatureItem {
  icon?: string;
  title: string;
  description: string;
}

export interface ServiceCard {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon?: string;
  image?: ImageAsset;
  highlights?: string[];
  cta: CTA;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role?: string;
  location?: string;
  rating?: number;
  image?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  credentials?: string;
  bio: string;
  specialties?: string[];
  image?: ImageAsset;
}

export interface LocationInfo {
  name?: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  phoneRaw: string;
  fax?: string;
  email?: string;
  hours: { day: string; hours: string }[];
  coordinates?: { lat: number; lng: number };
  mapEmbed?: string;
}

// ── Medical-Specific Types ───────────────────────────────

export interface KeyFact {
  label: string;
  value: string;
}

export interface ConditionLink {
  name: string;
  slug: string;
  href: string;
}

export interface TreatmentLink {
  name: string;
  slug: string;
  href: string;
  description?: string;
}

export interface ServiceLink {
  name: string;
  slug: string;
  href: string;
  description?: string;
}

export interface BlogPostLink {
  title: string;
  slug: string;
  href: string;
  category?: string;
}

export interface SymptomItem {
  text: string;
  detail?: string;
}

export interface CauseItem {
  text: string;
  detail?: string;
}

// ── Page Content Shapes ──────────────────────────────────

/** Homepage content shape */
export interface HomePageContent {
  seo: SEOMeta;
  hero: HeroSection;
  intro: {
    headline: string;
    body: string;
  };
  trustStats: Stat[];
  servicesSection: {
    eyebrow?: string;
    headline: string;
    subheadline?: string;
    services: ServiceCard[];
    cta?: CTA;
  };
  injurySection: {
    headline: string;
    body?: string;
    cards: {
      title: string;
      description: string;
      bullets: string[];
      cta: CTA;
    }[];
  };
  conditionsSection: {
    headline: string;
    subheadline?: string;
    conditions: ConditionLink[];
    cta: CTA;
  };
  whyUsSection: {
    eyebrow?: string;
    headline: string;
    features: FeatureItem[];
  };
  testimonialsSection: {
    eyebrow?: string;
    headline: string;
    testimonials: TestimonialItem[];
  };
  blogSection: {
    headline: string;
    subheadline?: string;
    cta: CTA;
  };
  locationSection: {
    headline: string;
    body: string;
    cta: CTA;
  };
  ctaSection: {
    headline: string;
    subheadline: string;
    primaryCTA: CTA;
    secondaryCTA?: CTA;
  };
  faqs: FAQItem[];
}

/** Service Pillar page content shape (Pain Mgmt, Ortho, PT, etc.) */
export interface ServicePillarContent {
  seo: SEOMeta;
  hero: HeroSection;
  intro: {
    headline: string;
    body: string;
    secondaryImage?: ImageAsset;
  };
  conditionsTreated: {
    headline: string;
    body?: string;
    conditions: ConditionLink[];
  };
  treatments: {
    headline: string;
    body?: string;
    items: TreatmentLink[];
  };
  approach: {
    headline: string;
    body: string;
    highlights?: string[];
  };
  process: {
    headline: string;
    steps: ProcessStep[];
  };
  whyChooseUs: {
    headline: string;
    features: FeatureItem[];
  };
  relatedServices: {
    headline: string;
    services: ServiceLink[];
  };
  relatedBlogPosts: {
    headline: string;
    posts: BlogPostLink[];
  };
  ctaSection: {
    headline: string;
    body: string;
    primaryCTA: CTA;
    secondaryCTA?: CTA;
  };
  faqs: FAQItem[];
}

/** Service Detail page content shape (e.g., Epidural Injections) */
export interface ServiceDetailContent {
  seo: SEOMeta;
  hero: HeroSection;
  overview: {
    headline: string;
    body: string;
    keyFacts?: KeyFact[];
  };
  howItWorks: {
    headline: string;
    body: string;
    steps?: ProcessStep[];
  };
  conditionsTreated: {
    headline: string;
    conditions: ConditionLink[];
  };
  benefits: {
    headline: string;
    items: string[];
  };
  whatToExpect: {
    headline: string;
    body: string;
  };
  risks?: {
    headline: string;
    body: string;
  };
  whyChooseUs: {
    headline: string;
    features: FeatureItem[];
  };
  relatedTreatments: {
    headline: string;
    items: TreatmentLink[];
  };
  ctaSection: {
    headline: string;
    body: string;
    primaryCTA: CTA;
    secondaryCTA?: CTA;
  };
  faqs: FAQItem[];
}

/** Condition page content shape (e.g., Back Pain, Sciatica) */
export interface ConditionPageContent {
  seo: SEOMeta;
  hero: HeroSection;
  definition: {
    headline: string;
    body: string;
  };
  symptoms: {
    headline: string;
    items: SymptomItem[];
  };
  causes: {
    headline: string;
    items: CauseItem[];
  };
  whenToSeeDoctor: {
    headline: string;
    body: string;
    redFlags?: string[];
  };
  howWeHelp: {
    headline: string;
    body: string;
  };
  treatmentOptions: {
    headline: string;
    body?: string;
    treatments: TreatmentLink[];
  };
  whyChooseUs: {
    headline: string;
    features: FeatureItem[];
  };
  relatedConditions: {
    headline: string;
    conditions: ConditionLink[];
  };
  relatedServices: {
    headline: string;
    services: ServiceLink[];
  };
  relatedBlogPosts: {
    headline: string;
    posts: BlogPostLink[];
  };
  ctaSection: {
    headline: string;
    body: string;
    primaryCTA: CTA;
    secondaryCTA?: CTA;
  };
  faqs: FAQItem[];
}

/** Hub / Index page content shape */
export interface HubPageContent {
  seo: SEOMeta;
  hero: HeroSection;
  intro: {
    headline: string;
    body: string;
  };
  categories: {
    id: string;
    name: string;
    description: string;
    icon?: string;
    items: {
      name: string;
      slug: string;
      href: string;
      tagline: string;
    }[];
  }[];
  ctaSection: {
    headline: string;
    body: string;
    primaryCTA: CTA;
    secondaryCTA?: CTA;
  };
}

/** About page content shape */
export interface AboutPageContent {
  seo: SEOMeta;
  hero: HeroSection;
  story: {
    headline: string;
    body: string;
  };
  mission?: {
    headline: string;
    body: string;
  };
  vision?: {
    headline: string;
    body: string;
  };
  values?: {
    headline: string;
    items: FeatureItem[];
  };
  team?: {
    headline: string;
    subheadline?: string;
    members: TeamMember[];
  };
  credentials?: {
    headline: string;
    items: string[];
  };
  ctaSection: {
    headline: string;
    body: string;
    primaryCTA: CTA;
    secondaryCTA?: CTA;
  };
}

/** Contact page content shape */
export interface ContactPageContent {
  seo: SEOMeta;
  hero: HeroSection;
  location: LocationInfo;
  formConfig: {
    headline: string;
    subheadline?: string;
    fields: string[];
    submitText: string;
    privacyNote: string;
  };
  emergencyNote: {
    headline: string;
    body: string;
  };
  servingAreas: {
    headline: string;
    body: string;
    communities: string[];
  };
  ctaSection: {
    headline: string;
    body: string;
    primaryCTA: CTA;
    secondaryCTA?: CTA;
  };
}

/** Patient Resource page content shape */
export interface ResourcePageContent {
  seo: SEOMeta;
  hero: HeroSection;
  intro: {
    headline: string;
    body: string;
  };
  sections: {
    id: string;
    headline: string;
    body: string;
    items?: string[];
    cta?: CTA;
  }[];
  ctaSection: {
    headline: string;
    body: string;
    primaryCTA: CTA;
    secondaryCTA?: CTA;
  };
  faqs: FAQItem[];
}

/** Blog Article frontmatter shape (used in .mdx files) */
export interface ArticleMeta {
  title: string;
  slug: string;
  description: string;
  publishDate: string;
  updatedDate?: string;
  author: string;
  authorRole?: string;
  authorImage?: string;
  category: string;
  tags: string[];
  readTime?: string;
  featuredImage?: ImageAsset;
  relatedArticles?: string[];
  relatedConditions?: string[];
  relatedServices?: string[];
  seo: SEOMeta;
}

/** Blog Category content shape */
export interface BlogCategoryContent {
  seo: SEOMeta;
  name: string;
  slug: string;
  description: string;
  heroHeadline: string;
}

/** Legal page content shape */
export interface LegalPageContent {
  seo: SEOMeta;
  hero: HeroSection;
  lastUpdated: string;
  body: string;
}

// ── Schema.org Types ─────────────────────────────────────

export interface MedicalBusinessSchema {
  type: "MedicalClinic";
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: string[];
  medicalSpecialty: string[];
  availableService: string[];
}

export interface MedicalConditionSchema {
  type: "MedicalCondition";
  name: string;
  description: string;
  possibleTreatment: string[];
  signOrSymptom: string[];
}

export interface MedicalProcedureSchema {
  type: "MedicalProcedure";
  name: string;
  description: string;
  bodyLocation?: string;
  howPerformed?: string;
}
