import type { Metadata } from "next";
import type { ResourcePageContent } from "@content/types/content";
import * as content from "@content/content/pages/insurance";
import ResourcePageTemplate from "@/components/pages/ResourcePageTemplate";

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords,
  alternates: { canonical: content.seo.canonical },
};

const pageContent: ResourcePageContent = {
  seo: content.seo,
  hero: content.hero,
  intro: content.intro,
  sections: content.sections,
  ctaSection: content.ctaSection,
  faqs: content.faqs,
};

export default function InsurancePage() {
  return (
    <ResourcePageTemplate
      content={pageContent}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Patient Resources", href: "/patient-resources" },
        { label: "Insurance & Billing" },
      ]}
    />
  );
}
