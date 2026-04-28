// src/lib/schema.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — JSON-LD Schema Builders
// Returns plain objects ready for the JsonLd component.
// ─────────────────────────────────────────────────────────

import type {
  ConditionPageContent,
  ServiceDetailContent,
  ServicePillarContent,
  FAQItem,
} from '@content/types/content';
import type { ArticleMeta } from '@/lib/mdx';
import { site } from '@content/content/global/site';

// ── Shared clinic provider reference ──────────────────────

function buildClinicProvider() {
  return {
    '@type': 'MedicalClinic',
    name: site.name,
    url: site.url,
    telephone: site.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: 'US',
    },
  };
}

// ── MedicalClinic schema (homepage / contact page) ────────

export function buildMedicalClinicSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalClinic', 'MedicalBusiness'],
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.coordinates.lat,
      longitude: site.coordinates.lng,
    },
    openingHoursSpecification: site.hoursSchema.map((spec) => ({
      '@type': 'OpeningHoursSpecification',
      description: spec,
    })),
    medicalSpecialty: site.medicalSpecialties,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.reviews.google.rating,
      reviewCount: site.reviews.google.count,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: Object.values(site.social),
  };
}

// ── MedicalCondition schema ────────────────────────────────

export function buildMedicalConditionSchema(
  content: ConditionPageContent
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: content.hero.headline,
    description: content.seo.description,
    signOrSymptom: content.symptoms.items.map((s) => ({
      '@type': 'MedicalSymptom',
      name: s.text,
    })),
    possibleTreatment: content.treatmentOptions.treatments.map((t) => ({
      '@type': 'MedicalTherapy',
      name: t.name,
      url: `${site.url}${t.href}`,
    })),
    relevantSpecialty: {
      '@type': 'MedicalSpecialty',
      name: 'Pain Management',
    },
    recognizingAuthority: buildClinicProvider(),
  };
}

// ── MedicalProcedure schema (detail pages) ─────────────────

export function buildMedicalProcedureSchema(
  content: ServiceDetailContent | ServicePillarContent
): Record<string, unknown> {
  const isDetail = 'overview' in content;

  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: content.hero.headline,
    description: content.seo.description,
    ...(isDetail && {
      howPerformed: (content as ServiceDetailContent).overview.body,
    }),
    provider: buildClinicProvider(),
    recognizingAuthority: {
      '@type': 'MedicalOrganization',
      name: site.name,
      url: site.url,
    },
  };
}

// ── Article schema ─────────────────────────────────────────

export function buildArticleSchema(meta: ArticleMeta): Record<string, unknown> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || site.url;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.description,
    datePublished: meta.publishDate,
    ...(meta.updatedDate && { dateModified: meta.updatedDate }),
    author: {
      '@type': 'Person',
      name: meta.author,
      ...(meta.authorRole && { jobTitle: meta.authorRole }),
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${meta.slug}`,
    },
    ...(meta.featuredImage && {
      image: {
        '@type': 'ImageObject',
        url: meta.featuredImage.src,
        description: meta.featuredImage.alt,
      },
    }),
    keywords: meta.tags.join(', '),
  };
}

// ── BreadcrumbList schema ──────────────────────────────────

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function buildBreadcrumbSchema(
  items: BreadcrumbItem[]
): Record<string, unknown> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || site.url;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href && { item: `${siteUrl}${item.href}` }),
    })),
  };
}

// ── FAQPage schema ─────────────────────────────────────────

export function buildFAQSchema(items: FAQItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
