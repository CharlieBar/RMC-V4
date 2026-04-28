import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogCategories } from "@content/content/global/blog-categories";
import { getArticlesByCategory } from "@/lib/mdx";
import SectionLabel from "@/components/ui/SectionLabel";
import ArticleCard from "@/components/blog/ArticleCard";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogCategories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = blogCategories.find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: category.seo.title,
    description: category.seo.description,
    alternates: {
      canonical: `https://www.randmedicalcenter.com/blog/category/${slug}`,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = blogCategories.find((c) => c.slug === slug);

  if (!category) notFound();

  const articles = getArticlesByCategory(slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.randmedicalcenter.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.randmedicalcenter.com/blog" },
      { "@type": "ListItem", position: 3, name: category.name, item: `https://www.randmedicalcenter.com/blog/category/${slug}` },
    ],
  };

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
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="hover:text-navy transition-colors duration-200">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-navy font-medium" aria-current="page">
              {category.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* Category hero */}
      <section className="pt-10 pb-16 px-[5vw] bg-white">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel text="Blog Category" className="mb-6" />
          <h1
            className="font-serif text-navy leading-tight mb-6 max-w-[700px]"
            style={{ fontSize: "clamp(36px, 4vw, 54px)" }}
          >
            {category.heroHeadline}
          </h1>
          {category.description && (
            <p className="text-[17px] text-grey-700 leading-relaxed max-w-[560px]">
              {category.description}
            </p>
          )}

          {/* Back link */}
          <div className="mt-8">
            <Link
              href="/blog"
              className="text-[13px] font-semibold text-grey-400 hover:text-navy transition-colors duration-200 flex items-center gap-2"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="px-[5vw] pb-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          {articles.length > 0 ? (
            <>
              <p className="text-sm text-grey-400 mb-8">
                {articles.length} article{articles.length !== 1 ? "s" : ""} in {category.name}
              </p>
              <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                  <StaggerItem key={article.slug}>
                    <ArticleCard
                      article={article}
                      featured={index === 0}
                    />
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </>
          ) : (
            <div className="py-16 text-center">
              <p className="text-grey-500 text-lg">
                No articles in this category yet. Check back soon.
              </p>
              <Link
                href="/blog"
                className="mt-6 inline-block text-red font-semibold hover:underline"
              >
                Browse all articles
              </Link>
            </div>
          )}
        </div>
      </section>

      <CTASection
        headline="Have a Question Not Covered Here?"
        body="Our blog covers the most common questions we hear from patients, but every situation is different. Call us or schedule a consultation for personalized guidance."
        primaryCTA={{
          text: "Schedule an Appointment",
          href: "https://www.tebra.com/care/practice/rand-medical-center-456192",
          variant: "primary",
        }}
        secondaryCTA={{
          text: "Call (224) 735-3522",
          href: "tel:+12247353522",
          variant: "secondary",
        }}
        variant="red"
      />

      <JsonLd data={breadcrumbSchema} />
    </>
  );
}
