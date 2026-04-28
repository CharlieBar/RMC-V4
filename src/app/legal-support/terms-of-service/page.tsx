import type { Metadata } from "next";
import type { LegalPageContent } from "@content/types/content";
import * as content from "@content/content/pages/terms-of-service";
import LegalPageTemplate from "@/components/pages/LegalPageTemplate";

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  alternates: { canonical: content.seo.canonical },
  robots: content.seo.noIndex ? { index: false } : undefined,
};

const pageContent: LegalPageContent = {
  seo: content.seo,
  hero: content.hero,
  lastUpdated: content.lastUpdated,
  body: content.body,
};

export default function TermsOfServicePage() {
  return (
    <LegalPageTemplate
      content={pageContent}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Legal", href: "/legal-support" },
        { label: "Terms of Service" },
      ]}
    />
  );
}
