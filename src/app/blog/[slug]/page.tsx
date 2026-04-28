import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Calendar } from "lucide-react";
import { getAllArticles, getArticleBySlug, formatPublishDate } from "@/lib/mdx";
import { mdxComponents } from "@/components/blog/MDXComponents";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleCard from "@/components/blog/ArticleCard";
import JsonLd from "@/components/seo/JsonLd";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = getArticleBySlug(slug);
    return {
      title: meta.seo.title,
      description: meta.seo.description,
      keywords: meta.seo.keywords,
      alternates: {
        canonical: `https://www.randmedicalcenter.com/blog/${slug}`,
      },
      openGraph: {
        title: meta.seo.title,
        description: meta.seo.description,
        type: "article",
        publishedTime: meta.publishDate,
        modifiedTime: meta.updatedDate,
        authors: [meta.author],
      },
    };
  } catch {
    return {};
  }
}

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

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  let meta, content;
  try {
    ({ meta, content } = getArticleBySlug(slug));
  } catch {
    notFound();
  }

  // Get related articles: same category, excluding current
  const allArticles = getAllArticles();
  const related = allArticles
    .filter((a) => a.slug !== slug && a.category === meta.category)
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    author: {
      "@type": "Organization",
      name: meta.author,
    },
    publisher: {
      "@type": "MedicalOrganization",
      name: "Rand Medical Center",
      url: "https://www.randmedicalcenter.com",
    },
    datePublished: meta.publishDate,
    dateModified: meta.updatedDate ?? meta.publishDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.randmedicalcenter.com/blog/${slug}`,
    },
    ...(meta.featuredImage && {
      image: meta.featuredImage.src,
    }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.randmedicalcenter.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.randmedicalcenter.com/blog" },
      { "@type": "ListItem", position: 3, name: meta.title, item: `https://www.randmedicalcenter.com/blog/${slug}` },
    ],
  };

  const categoryHref = `/blog/category/${meta.category}`;

  return (
    <>
      {/* Article header */}
      <header className="pt-[110px] pb-10 px-[5vw] bg-white border-b border-grey-100">
        <div className="max-w-[1400px] mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
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
              <li>
                <Link href={categoryHref} className="hover:text-navy transition-colors duration-200">
                  {getCategoryLabel(meta.category)}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-grey-600 font-medium truncate max-w-[200px]" aria-current="page">
                {meta.title}
              </li>
            </ol>
          </nav>

          {/* Category tag */}
          <Link
            href={categoryHref}
            className="inline-block text-[10px] font-bold tracking-[2.5px] uppercase text-red mb-4 hover:text-red-dark transition-colors duration-200"
          >
            {getCategoryLabel(meta.category)}
          </Link>

          {/* Title */}
          <h1
            className="font-serif text-navy leading-tight mb-6 max-w-[760px]"
            style={{ fontSize: "clamp(32px, 3.5vw, 50px)" }}
          >
            {meta.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-grey-500">
            <span className="font-medium text-grey-700">{meta.author}</span>
            {meta.authorRole && (
              <>
                <span aria-hidden="true">·</span>
                <span>{meta.authorRole}</span>
              </>
            )}
            {meta.publishDate && (
              <>
                <span aria-hidden="true">·</span>
                <time dateTime={meta.publishDate}>
                  {formatPublishDate(meta.publishDate)}
                </time>
              </>
            )}
            {meta.readTime && (
              <>
                <span aria-hidden="true">·</span>
                <span>{meta.readTime} read</span>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Two-column layout */}
      <section className="px-[5vw] py-16 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 items-start">
          {/* Article body */}
          <article aria-label={meta.title}>
            <MDXRemote
              source={content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />

            {/* Tags */}
            {meta.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-grey-100">
                <p className="text-[11px] font-bold tracking-[2.5px] uppercase text-grey-400 mb-3">
                  Topics
                </p>
                <div className="flex flex-wrap gap-2">
                  {meta.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 bg-grey-50 text-grey-500 border border-grey-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside aria-label="Sidebar">
            {/* Table of contents */}
            <div className="mb-10">
              <TableOfContents content={content} />
            </div>

            {/* Appointment CTA */}
            <div className="group relative bg-navy border border-white/10 hover:border-red/30 transition-all duration-300 overflow-hidden sticky top-24">
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red via-red to-amber transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" aria-hidden="true" />
              <div className="p-8">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-sm bg-red/20 text-red transition-all duration-300 group-hover:bg-red group-hover:text-white mb-4">
                  <Calendar size={18} aria-hidden="true" />
                </span>
                <p className="text-[10px] font-bold tracking-[2.5px] uppercase text-red mb-3">
                  Ready to Get Help?
                </p>
                <h2 className="font-serif text-white text-[22px] leading-snug mb-4">
                  Schedule an Appointment
                </h2>
                <p className="text-white/60 text-[14px] leading-relaxed mb-6">
                  Our medical team is ready to evaluate your condition and build a
                  treatment plan tailored to your needs.
                </p>
                <a
                  href="https://www.tebra.com/care/practice/rand-medical-center-456192"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-red text-white font-bold text-[14px] tracking-wide py-4 hover:bg-red-dark transition-colors duration-200 mb-3"
                >
                  Book Online
                </a>
                <a
                  href="tel:+12247353522"
                  className="block w-full text-center border border-white/20 text-white text-[14px] font-semibold py-3.5 hover:border-white/50 transition-colors duration-200"
                >
                  Call (224) 735-3522
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="px-[5vw] py-16 bg-grey-50 border-t border-grey-100">
          <div className="max-w-[1400px] mx-auto">
            <p className="text-[11px] font-bold tracking-[3px] uppercase text-red mb-2 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-red" aria-hidden="true" />
              More Articles
            </p>
            <h2 className="font-serif text-navy text-[28px] leading-tight mb-10">
              Related Reading
            </h2>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((article) => (
                <StaggerItem key={article.slug}>
                  <ArticleCard article={article} />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
      )}

      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}
