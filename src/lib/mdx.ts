import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(
  process.cwd(),
  "src/content/articles"
);

export interface ArticleMeta {
  title: string;
  slug: string;
  description: string;
  publishDate: string;
  updatedDate?: string;
  author: string;
  authorRole?: string;
  category: string;
  tags: string[];
  readTime?: string;
  featuredImage?: { src: string; alt: string };
  seo: { title: string; description: string; keywords?: string[] };
}

export function getAllArticles(): ArticleMeta[] {
  let files: string[] = [];
  try {
    files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".mdx"));
  } catch {
    return [];
  }

  const articles: ArticleMeta[] = [];

  for (const file of files) {
    try {
      const filePath = path.join(ARTICLES_DIR, file);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(raw);

      const slug = data.slug ?? file.replace(/\.mdx$/, "");

      const article: ArticleMeta = {
        title: data.title ?? slug,
        slug,
        description: data.description ?? "",
        publishDate: data.publishDate ?? "",
        updatedDate: data.updatedDate,
        author: data.author ?? "Rand Medical Center",
        authorRole: data.authorRole,
        category: data.category ?? "general",
        tags: Array.isArray(data.tags) ? data.tags : [],
        readTime: data.readTime,
        featuredImage:
          data.featuredImage?.src
            ? { src: data.featuredImage.src, alt: data.featuredImage.alt ?? "" }
            : undefined,
        seo: {
          title: data.seo?.title ?? data.title ?? slug,
          description: data.seo?.description ?? data.description ?? "",
          keywords: Array.isArray(data.seo?.keywords)
            ? data.seo.keywords
            : undefined,
        },
      };

      articles.push(article);
    } catch {
      // skip malformed files
    }
  }

  return articles.sort((a, b) => {
    const dateA = a.publishDate ? new Date(a.publishDate).getTime() : 0;
    const dateB = b.publishDate ? new Date(b.publishDate).getTime() : 0;
    return dateB - dateA;
  });
}

export function getArticleBySlug(slug: string): {
  meta: ArticleMeta;
  content: string;
} {
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const meta: ArticleMeta = {
    title: data.title ?? slug,
    slug: data.slug ?? slug,
    description: data.description ?? "",
    publishDate: data.publishDate ?? "",
    updatedDate: data.updatedDate,
    author: data.author ?? "Rand Medical Center",
    authorRole: data.authorRole,
    category: data.category ?? "general",
    tags: Array.isArray(data.tags) ? data.tags : [],
    readTime: data.readTime,
    featuredImage:
      data.featuredImage?.src
        ? { src: data.featuredImage.src, alt: data.featuredImage.alt ?? "" }
        : undefined,
    seo: {
      title: data.seo?.title ?? data.title ?? slug,
      description: data.seo?.description ?? data.description ?? "",
      keywords: Array.isArray(data.seo?.keywords) ? data.seo.keywords : undefined,
    },
  };

  return { meta, content };
}

export function getArticlesByCategory(category: string): ArticleMeta[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function formatPublishDate(dateStr: string): string {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}
