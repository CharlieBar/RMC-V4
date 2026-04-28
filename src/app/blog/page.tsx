import type { Metadata } from "next";
import Link from "next/link";
import * as content from "@content/content/hubs/blog-index";
import { getAllArticles, formatPublishDate } from "@/lib/mdx";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import ArticleCard from "@/components/blog/ArticleCard";
import JsonLd from "@/components/seo/JsonLd";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords,
  alternates: { canonical: content.seo.canonical },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.randmedicalcenter.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.randmedicalcenter.com/blog" },
  ],
};

export default function BlogPage() {
  const articles = getAllArticles();
  const [featuredArticle, ...restArticles] = articles;

  const CATEGORY_LABELS: Record<string, string> = {
    "pain-management": "Pain Management",
    "injury-recovery": "Injury Recovery",
    "workers-compensation": "Workers' Comp",
    "physical-therapy": "Physical Therapy",
    "prevention-wellness": "Prevention & Wellness",
    "patient-resources": "Patient Resources",
  };

  function getCategoryLabel(slug: string): string {
    return CATEGORY_LABELS[slug] ?? slug.replace(/-/g, " ");
  }

  return (
    <>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="pt-[100px] pb-0 px-[5vw] bg-white"
      >
        <div className="max-w-[1400px] mx-auto">
          <ol className="flex items-center gap-2 text-xs text-grey-400">
            <li>
              <Link href="/" className="hover:text-navy transition-colors duration-200">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <span>/</span>
            </li>
            <li className="text-navy font-medium" aria-current="page">
              Blog
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <HeroSection
        variant="page"
        eyebrow={content.hero.eyebrow}
        headline={content.hero.headline}
        body={content.hero.subheadline}
        primaryCTA={content.hero.primaryCTA}
        secondaryCTA={content.hero.secondaryCTA}
      />

      {/* Category navigation */}
      <section className="bg-white px-[5vw] pb-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap gap-2" role="list" aria-label="Blog categories">
            {content.categoryNav.map((cat) => (
              <Link
                key={cat.slug}
                href={cat.href}
                role="listitem"
                className="text-[12px] font-semibold tracking-wide px-4 py-2 border border-grey-200 text-grey-500 hover:border-red hover:text-red transition-colors duration-200"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured + article grid — navy background */}
      <section className="bg-navy py-[80px] px-[5vw]">
        <div className="max-w-[1400px] mx-auto">
          {/* Featured article */}
          {featuredArticle && (
            <div className="mb-12">
              <p className="text-[11px] font-bold tracking-[3px] uppercase text-red/70 mb-6">
                Featured Article
              </p>
              <Link
                href={`/blog/${featuredArticle.slug}`}
                className="group relative grid grid-cols-1 lg:grid-cols-[2fr_1fr] bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-red/30 transition-all duration-300 overflow-hidden"
                aria-label={`Read featured article: ${featuredArticle.title}`}
              >
                <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red via-red to-amber transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" aria-hidden="true" />
                <div className="p-10 lg:p-12">
                  <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-red mb-4 block">
                    {getCategoryLabel(featuredArticle.category)}
                  </span>
                  <h2
                    className="font-serif text-white leading-tight mb-4 group-hover:text-white/90 transition-colors duration-200"
                    style={{ fontSize: "clamp(26px, 3vw, 40px)" }}
                  >
                    {featuredArticle.title}
                  </h2>
                  {featuredArticle.description && (
                    <p className="text-white/60 text-[15px] leading-relaxed mb-6 max-w-[520px]">
                      {featuredArticle.description}
                    </p>
                  )}
                  <div className="flex items-center gap-3 text-xs text-white/35">
                    {featuredArticle.publishDate && (
                      <time dateTime={featuredArticle.publishDate}>
                        {formatPublishDate(featuredArticle.publishDate)}
                      </time>
                    )}
                    {featuredArticle.readTime && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{featuredArticle.readTime} read</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-end p-10 border-l border-white/10">
                  <span className="text-white/20 font-serif text-[80px] leading-none select-none group-hover:text-red/30 transition-colors duration-200">
                    &ldquo;
                  </span>
                </div>
              </Link>
            </div>
          )}

          {/* Article grid */}
          {restArticles.length > 0 && (
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {restArticles.map((article) => (
                <StaggerItem key={article.slug}>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="group relative bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-red/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_-24px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col p-9"
                    aria-label={`Read article: ${article.title}`}
                  >
                    <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red via-red to-amber transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" aria-hidden="true" />
                    <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-red mb-3.5 block">
                      {getCategoryLabel(article.category)}
                    </span>
                    <h3 className="font-serif text-white text-[18px] leading-snug mb-3 flex-1 group-hover:text-white/90 transition-colors duration-200">
                      {article.title}
                    </h3>
                    <div className="text-xs text-white/35 mt-auto pt-5 flex items-center gap-3 border-t border-white/[0.08]">
                      {article.publishDate && (
                        <time dateTime={article.publishDate}>
                          {formatPublishDate(article.publishDate)}
                        </time>
                      )}
                      {article.readTime && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>{article.readTime}</span>
                        </>
                      )}
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerChildren>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline={content.ctaSection.headline}
        body={content.ctaSection.body}
        primaryCTA={content.ctaSection.primaryCTA}
        secondaryCTA={content.ctaSection.secondaryCTA}
        variant="red"
      />

      <JsonLd data={breadcrumbSchema} />
    </>
  );
}
