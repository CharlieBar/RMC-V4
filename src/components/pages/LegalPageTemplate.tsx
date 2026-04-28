import type { LegalPageContent } from "@content/types/content";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { formatDate } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface LegalPageTemplateProps {
  content: LegalPageContent;
  breadcrumbs: BreadcrumbItem[];
}

/**
 * Converts plain text with **bold** markers and paragraph breaks into HTML.
 * Used to render legal page body content.
 */
function renderBody(body: string): string {
  const paragraphs = body.split(/\n\n+/);
  return paragraphs
    .map((para) => {
      // Replace **text** with <strong>text</strong>
      const withBold = para.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      return `<p>${withBold}</p>`;
    })
    .join("\n");
}

export default function LegalPageTemplate({
  content,
  breadcrumbs,
}: LegalPageTemplateProps) {
  const htmlBody = renderBody(content.body);

  return (
    <>
      <Breadcrumb items={breadcrumbs} />

      {/* Minimal hero */}
      <section className="pt-[120px] pb-12 px-[5vw] border-b border-grey-100">
        <div className="max-w-[800px] mx-auto">
          {content.hero.eyebrow && (
            <p className="text-[11px] font-bold tracking-[3px] uppercase text-red mb-4">
              {content.hero.eyebrow}
            </p>
          )}
          <h1
            className="font-serif leading-tight text-navy"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
          >
            {content.hero.headline}
          </h1>
        </div>
      </section>

      {/* Last updated badge + body */}
      <section className="py-16 px-[5vw]">
        <div className="max-w-[800px] mx-auto">
          {content.lastUpdated && (
            <p className="text-[13px] text-grey-500 mb-10 font-medium">
              Last Updated:{" "}
              <time dateTime={content.lastUpdated}>
                {formatDate(content.lastUpdated)}
              </time>
            </p>
          )}

          <ScrollReveal variant="fade-up">
            <div
              className="prose prose-slate max-w-3xl font-sans prose-headings:font-serif prose-headings:text-navy prose-p:text-grey-700 prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: htmlBody }}
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
