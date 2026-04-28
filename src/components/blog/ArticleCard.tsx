import Link from "next/link";
import type { ArticleMeta } from "@/lib/mdx";
import { formatPublishDate } from "@/lib/mdx";

interface ArticleCardProps {
  article: ArticleMeta;
  featured?: boolean;
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

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const categoryLabel = getCategoryLabel(article.category);

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group relative block h-full bg-white border border-grey-100 hover:border-red/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_-24px_rgba(10,22,40,0.18)] overflow-hidden"
      aria-label={`Read article: ${article.title}`}
    >
      <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red via-red to-amber transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" aria-hidden="true" />
      <div className="p-8 flex flex-col h-full">
        {/* Category tag */}
        <span
          className="text-[10px] font-bold tracking-[2.5px] uppercase text-red mb-3.5 block"
          aria-label={`Category: ${categoryLabel}`}
        >
          {categoryLabel}
        </span>

        {/* Title */}
        <h3
          className={`font-serif text-navy leading-snug mb-3 group-hover:text-red transition-colors duration-200 flex-1 ${
            featured
              ? "text-[clamp(22px,2vw,30px)]"
              : "text-[18px]"
          }`}
        >
          {article.title}
        </h3>

        {/* Description — only in featured variant */}
        {featured && article.description && (
          <p className="text-[15px] text-grey-500 leading-relaxed mb-5">
            {article.description}
          </p>
        )}

        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-grey-400 mt-auto pt-4 border-t border-grey-100">
          {article.publishDate && (
            <time dateTime={article.publishDate}>
              {formatPublishDate(article.publishDate)}
            </time>
          )}
          {article.publishDate && article.readTime && (
            <span aria-hidden="true">·</span>
          )}
          {article.readTime && <span>{article.readTime} read</span>}
        </div>
      </div>
    </Link>
  );
}
