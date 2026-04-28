import Link from "next/link";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/animations";

interface BlogPreviewSectionProps {
  headline: string;
  subheadline?: string;
  cta: {
    text: string;
    href: string;
  };
}

const PREVIEW_ARTICLES = [
  {
    category: "Pain Management",
    title: "Non-Surgical Back Pain Treatments You Should Know About",
    excerpt:
      "Chronic back pain doesn't always require surgery. Learn about evidence-based non-surgical options — from injections to physical therapy — that can significantly reduce pain and restore function.",
    date: "March 2025",
    readTime: "6 min read",
    featured: true,
  },
  {
    category: "Workers' Comp",
    title: "What to Do After a Workplace Injury: A Step-by-Step Guide",
    excerpt:
      "Knowing the right steps after a work injury protects both your health and your claim.",
    date: "February 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    category: "Physical Therapy",
    title: "Your First Physical Therapy Visit: What to Expect",
    excerpt:
      "A first PT appointment can feel unfamiliar. Here's exactly what happens and how to prepare.",
    date: "January 2025",
    readTime: "4 min read",
    featured: false,
  },
];

export default function BlogPreviewSection({
  headline,
  cta,
}: BlogPreviewSectionProps) {
  return (
    <section className="bg-navy py-[100px] px-[5vw]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <ScrollReveal className="flex justify-between items-end mb-12 gap-6 flex-wrap">
          <h2
            className="font-serif text-white leading-tight"
            style={{ fontSize: "clamp(32px, 3vw, 46px)" }}
          >
            {headline}
          </h2>
          <Link
            href={cta.href}
            className="text-[13px] font-semibold text-white/50 hover:text-red transition-colors duration-200 shrink-0"
          >
            {cta.text} →
          </Link>
        </ScrollReveal>

        {/* Article grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-0.5 bg-white/[0.08]">
          {PREVIEW_ARTICLES.map((article, index) => (
            <StaggerItem key={article.title}>
              <Link
                href={cta.href}
                className="bg-navy p-9 hover:bg-red/[0.12] transition-colors duration-200 flex flex-col group h-full"
              >
                <span
                  className="text-[10px] font-bold tracking-[2.5px] uppercase text-red mb-3.5"
                  aria-label={`Category: ${article.category}`}
                >
                  {article.category}
                </span>

                <h3
                  className="font-serif text-white leading-snug mb-3 group-hover:text-white/90 transition-colors duration-200"
                  style={{
                    fontSize: index === 0 ? "clamp(20px, 1.8vw, 26px)" : "18px",
                  }}
                >
                  {article.title}
                </h3>

                {index === 0 && (
                  <p className="text-sm text-white/55 leading-relaxed mb-4 flex-1">
                    {article.excerpt}
                  </p>
                )}

                <div className="text-xs text-white/35 mt-auto pt-5 flex items-center gap-3">
                  <span>{article.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
