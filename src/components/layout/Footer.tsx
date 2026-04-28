import Link from "next/link";
import { footer } from "@content/content/global/navigation";
import { site } from "@content/content/global/site";
import { ScrollReveal } from "@/components/animations";

// ─── Logo Mark (lighter version for dark bg) ──────────────────────────────────

function FooterLogoMark() {
  return (
    <span
      className="inline-flex items-center justify-center rounded-sm flex-shrink-0"
      style={{
        width: 36,
        height: 36,
        backgroundColor: "rgba(255,255,255,0.1)",
      }}
      aria-hidden="true"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="7" y="1" width="4" height="16" rx="1" fill="rgba(200,16,46,0.85)" />
        <rect x="1" y="7" width="16" height="4" rx="1" fill="rgba(200,16,46,0.85)" />
      </svg>
    </span>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer
      className="bg-navy border-t border-white/5"
      aria-label="Site footer"
    >
      <ScrollReveal variant="fade-up">
      <div className="max-w-[1400px] mx-auto py-16 px-[5vw]">
        {/* Main Grid */}
        <div
          className="grid gap-10 mb-12"
          style={{
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          {/* Col 1: Logo + Tagline (spans full width on mobile, 2fr on desktop) */}
          <div
            className="col-span-2"
            style={{ gridColumn: "1 / -1" }}
          >
            <div className="lg:hidden">
              {/* Mobile: logo + tagline stacked */}
              <Link
                href="/"
                className="flex items-center gap-2.5 mb-4 focus-visible:outline-red rounded"
                aria-label={`${site.name} — home`}
              >
                <FooterLogoMark />
                <span className="text-[15px] font-semibold text-white leading-tight">
                  {site.name}
                </span>
              </Link>
              <p className="text-white/40 text-[13px] leading-relaxed max-w-[280px]">
                {footer.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Grid: 5 columns with logo col */}
        <div className="hidden lg:grid gap-16 mb-12"
          style={{
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
          }}
        >
          {/* Brand col */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5 mb-4 focus-visible:outline-red rounded"
              aria-label={`${site.name} — home`}
            >
              <FooterLogoMark />
              <span className="text-[15px] font-semibold text-white leading-tight">
                {site.name}
              </span>
            </Link>
            <p className="text-white/40 text-[13px] leading-relaxed max-w-[280px]">
              {footer.tagline}
            </p>
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <p className="text-[11px] font-semibold uppercase tracking-[2px] text-white/30 mb-4">
                {col.heading}
              </p>
              <ul>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block text-[13px] text-white/55 hover:text-white transition-colors mb-2.5 focus-visible:outline-red rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile: 2-col link grid */}
        <div className="lg:hidden grid grid-cols-2 gap-8 mb-12">
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <p className="text-[11px] font-semibold uppercase tracking-[2px] text-white/30 mb-4">
                {col.heading}
              </p>
              <ul>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block text-[13px] text-white/55 hover:text-white transition-colors mb-2.5 focus-visible:outline-red rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="py-5 border-t border-white/5 border-b border-b-white/5 mb-6">
          <p className="text-white/40 text-xs flex flex-wrap gap-x-4 gap-y-1">
            <span>{footer.contact.address}</span>
            <span aria-hidden="true">·</span>
            <a
              href={footer.contact.phoneHref}
              className="hover:text-white/70 transition-colors focus-visible:outline-red rounded"
            >
              {footer.contact.phone}
            </a>
            <span aria-hidden="true">·</span>
            <span>{footer.contact.hours}</span>
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 pt-0">
          <p className="text-white/25 text-xs">{footer.legal.copyright}</p>
          <nav aria-label="Legal links">
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {footer.legal.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/25 text-xs hover:text-white/50 transition-colors focus-visible:outline-red rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      </ScrollReveal>
    </footer>
  );
}
