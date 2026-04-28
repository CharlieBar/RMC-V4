interface TableOfContentsProps {
  content: string;
}

interface TocItem {
  text: string;
  id: string;
}

function extractHeadings(content: string): TocItem[] {
  const matches = content.match(/^## (.+)$/gm);
  if (!matches) return [];

  return matches.map((match) => {
    const text = match.replace(/^## /, "");
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
    return { text, id };
  });
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const headings = extractHeadings(content);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="sticky top-24">
      <p className="text-[11px] font-bold tracking-[2.5px] uppercase text-red mb-4 flex items-center gap-2">
        <span className="w-5 h-0.5 bg-red" aria-hidden="true" />
        In This Article
      </p>

      <ol className="space-y-2.5">
        {headings.map((heading, index) => (
          <li key={heading.id} className="flex items-start gap-3">
            <span className="text-[11px] font-bold text-red/50 mt-0.5 shrink-0 w-4 text-right">
              {String(index + 1).padStart(2, "0")}
            </span>
            <a
              href={`#${heading.id}`}
              className="text-[13px] text-grey-500 leading-snug hover:text-navy hover:underline transition-colors duration-200"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
