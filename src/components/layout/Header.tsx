"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { navigation } from "@content/content/global/navigation";

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavLink {
  label: string;
  href: string;
  description?: string;
}

interface NavGroup {
  heading: string;
  links: NavLink[];
}

interface NavItem {
  label: string;
  href: string;
  children?: NavGroup[];
}

// ─── Logo Mark ────────────────────────────────────────────────────────────────

function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-sm bg-navy flex-shrink-0"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        width={size * 0.5}
        height={size * 0.5}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="7" y="1" width="4" height="16" rx="1" fill="#C8102E" />
        <rect x="1" y="7" width="16" height="4" rx="1" fill="#C8102E" />
      </svg>
    </span>
  );
}

// ─── Mega Menu ────────────────────────────────────────────────────────────────

function MegaMenu({
  groups,
  isOpen,
}: {
  groups: NavGroup[];
  isOpen: boolean;
}) {
  if (!isOpen) return null;

  return (
    <div
      role="region"
      className="absolute top-full left-1/2 -translate-x-1/2 mt-0 bg-white shadow-xl border-t-2 border-red z-50 min-w-[480px]"
      style={{ width: "max-content", maxWidth: "min(900px, 90vw)" }}
    >
      <div className="flex gap-0 p-6">
        {groups.map((group) => (
          <div key={group.heading} className="flex-1 min-w-[160px] px-4 first:pl-0 last:pr-0">
            <p className="text-[11px] font-semibold uppercase tracking-[2px] text-grey-500 mb-3">
              {group.heading}
            </p>
            <ul className="space-y-1">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-1.5 text-[14px] text-grey-700 hover:text-navy transition-colors focus-visible:outline-red"
                  >
                    {link.label}
                    {link.description && (
                      <span className="block text-[12px] text-grey-500 font-normal mt-0.5 leading-snug">
                        {link.description}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Desktop Nav Item ─────────────────────────────────────────────────────────

function NavItemDesktop({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timerRef.current = setTimeout(() => setOpen(false), 100);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!item.children) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    },
    [item.children]
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          className="text-[14px] font-medium text-grey-700 hover:text-navy transition-colors px-3 py-2 block focus-visible:outline-red rounded"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        aria-haspopup="true"
        aria-expanded={open}
        onKeyDown={handleKeyDown}
        className="flex items-center gap-1 text-[14px] font-medium text-grey-700 hover:text-navy transition-colors px-3 py-2 focus-visible:outline-red rounded cursor-pointer"
      >
        {item.label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M2 4L6 8L10 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <MegaMenu groups={item.children} isOpen={open} />
    </li>
  );
}

// ─── Mobile Accordion Item ─────────────────────────────────────────────────────

function MobileNavItem({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <li className="border-b border-grey-100">
        <Link
          href={item.href}
          onClick={onClose}
          className="block px-4 py-4 text-[15px] font-medium text-navy hover:text-red transition-colors"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="border-b border-grey-100">
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex items-center justify-between w-full px-4 py-4 text-[15px] font-medium text-navy text-left"
      >
        {item.label}
        <svg
          width="16"
          height="16"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M2 4L6 8L10 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <div className="bg-grey-100 px-4 pb-4">
          {item.children.map((group) => (
            <div key={group.heading} className="pt-4">
              <p className="text-[11px] font-semibold uppercase tracking-[2px] text-grey-500 mb-2">
                {group.heading}
              </p>
              <ul className="space-y-1">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block py-1.5 text-[14px] text-grey-700 hover:text-navy transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </li>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Scroll-based backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 h-[72px] border-b border-grey-100 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-white"
        }`}
      >
        <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-[5vw]">
          {/* Logo */}
          <Link
            href={navigation.logo.href}
            className="flex items-center gap-2.5 flex-shrink-0 focus-visible:outline-red rounded"
            aria-label={navigation.logo.alt}
          >
            <LogoMark size={36} />
            <span className="text-[15px] font-semibold leading-tight">
              <span className="text-navy">Rand</span>{" "}
              <span className="text-red">Medical</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {(navigation.primary as NavItem[]).map((item) => (
                <NavItemDesktop key={item.href + item.label} item={item} />
              ))}
            </ul>
          </nav>

          {/* Right Side CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={navigation.phoneCta.href}
              className="text-[14px] font-medium text-grey-700 hover:text-navy transition-colors focus-visible:outline-red rounded"
              aria-label={`Call us at ${navigation.phoneCta.text}`}
            >
              {navigation.phoneCta.text}
            </a>
            <a
              href={navigation.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy text-white px-6 py-2.5 text-sm font-semibold hover:bg-red transition-colors focus-visible:outline-red rounded"
            >
              {navigation.cta.text}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus-visible:outline-red rounded"
          >
            <span
              className={`block w-6 h-0.5 bg-navy transition-all duration-200 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-navy transition-all duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-navy transition-all duration-200 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-label="Mobile navigation"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-white flex flex-col"
          style={{ paddingTop: "72px" }}
        >
          {/* Phone CTA prominent at top */}
          <div className="px-4 py-4 border-b border-grey-100 bg-grey-100">
            <a
              href={navigation.phoneCta.href}
              className="flex items-center justify-center gap-2 text-[15px] font-semibold text-navy"
              onClick={closeMobile}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.4 19.79 19.79 0 0 1 1.61 4.82 2 2 0 0 1 3.6 2.63h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.2a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.54 17.5l.38-.58z" />
              </svg>
              {navigation.phoneCta.text}
            </a>
          </div>

          {/* Nav Links */}
          <nav
            aria-label="Mobile navigation"
            className="flex-1 overflow-y-auto"
          >
            <ul>
              {(navigation.primary as NavItem[]).map((item) => (
                <MobileNavItem
                  key={item.href + item.label}
                  item={item}
                  onClose={closeMobile}
                />
              ))}
            </ul>
          </nav>

          {/* Book Now CTA */}
          <div className="px-4 py-5 border-t border-grey-100">
            <a
              href={navigation.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              className="block w-full text-center bg-navy text-white px-6 py-3 text-[15px] font-semibold hover:bg-red transition-colors focus-visible:outline-red rounded"
            >
              {navigation.cta.text}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
