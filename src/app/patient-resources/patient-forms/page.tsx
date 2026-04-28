import type { Metadata } from "next";
import type { ResourcePageContent } from "@content/types/content";
import * as content from "@content/content/pages/patient-forms";
import ResourcePageTemplate from "@/components/pages/ResourcePageTemplate";

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
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

export default function PatientFormsPage() {
  return (
    <ResourcePageTemplate
      content={pageContent}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Patient Resources", href: "/patient-resources" },
        { label: "Patient Forms" },
      ]}
    />
  );
}
