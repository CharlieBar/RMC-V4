import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

interface RelatedLinkItem {
  name: string;
  slug?: string;
  href: string;
  description?: string;
}

interface RelatedLinksProps {
  headline: string;
  items: RelatedLinkItem[];
  columns?: 2 | 3 | 4;
}

const colClassMap: Record<2 | 3 | 4, string> = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
};

export default function RelatedLinks({
  headline,
  items,
  columns = 3,
}: RelatedLinksProps) {
  return (
    <section className="py-[100px] px-[5vw]">
      <div className="max-w-[1400px] mx-auto">
        <SectionLabel text="Related" className="mb-4" />
        <h2
          className="font-serif text-navy mb-16 max-w-[560px]"
          style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
        >
          {headline}
        </h2>

        <div className={`grid ${colClassMap[columns]} gap-6`}>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border border-grey-100 p-8 hover:border-grey-300 hover:-translate-y-1 transition-all duration-200 group block"
            >
              <div className="h-0.5 bg-red mb-6 w-12" aria-hidden="true" />
              <h3 className="font-serif text-lg text-navy mb-2 group-hover:text-red transition-colors duration-200">
                {item.name}
              </h3>
              {item.description && (
                <p className="text-sm text-grey-500 mb-4 leading-relaxed">
                  {item.description}
                </p>
              )}
              <span className="text-[13px] font-bold text-navy uppercase tracking-wide flex items-center gap-2 group-hover:gap-3.5 transition-all duration-200">
                Learn more
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
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
