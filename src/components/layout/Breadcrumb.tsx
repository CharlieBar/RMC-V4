import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="bg-grey-100 py-3 px-[5vw]">
      <div className="max-w-[1400px] mx-auto">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5" role="list">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;

              return (
                <li key={index} className="flex items-center gap-1.5">
                  {isLast || !item.href ? (
                    <span
                      className="text-[13px] text-navy font-medium"
                      aria-current={isLast ? "page" : undefined}
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-[13px] text-grey-500 hover:text-navy transition-colors focus-visible:outline-red rounded"
                    >
                      {item.label}
                    </Link>
                  )}

                  {!isLast && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                      className="flex-shrink-0 text-grey-300"
                    >
                      <path
                        d="M4 2L8 6L4 10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
