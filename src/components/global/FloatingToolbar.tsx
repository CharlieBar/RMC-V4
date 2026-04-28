"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@content/content/global/site";

type ToolKey = "book" | "location" | "forms" | "symptoms" | "call";

interface Tool {
  key: ToolKey;
  label: string;
  description: string;
  href: string;
  external?: boolean;
  icon: React.ReactNode;
}

const ICON_PROPS = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const TOOLS: Tool[] = [
  {
    key: "book",
    label: "Book Appointment",
    description: "Schedule online via Tebra",
    href: site.bookingUrl,
    external: true,
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M9 16h.01M13 16h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    key: "location",
    label: "Find Our Location",
    description: site.address.full,
    href: `https://maps.google.com/?q=${encodeURIComponent(site.address.full)}`,
    external: true,
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    key: "forms",
    label: "Patient Forms",
    description: "Download intake forms",
    href: "/patient-resources/patient-forms",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </svg>
    ),
  },
  {
    key: "symptoms",
    label: "Symptom Checker",
    description: "Find the right service",
    href: "/conditions",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    key: "call",
    label: "Call Now",
    description: site.phone,
    href: site.phoneLink,
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export default function FloatingToolbar() {
  const [active, setActive] = useState<ToolKey | null>(null);
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => setMounted(true), []);

  // Close drawer on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!mounted) return null;

  const toolButton = (tool: Tool, layout: "rail" | "drawer") => {
    const isActive = active === tool.key;
    const sharedClass =
      "group relative flex items-center transition-colors duration-200 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber";

    if (layout === "rail") {
      return (
        <button
          key={tool.key}
          type="button"
          aria-label={tool.label}
          aria-expanded={isActive}
          aria-controls={`fttool-${tool.key}`}
          onClick={() => setActive(isActive ? null : tool.key)}
          className={`${sharedClass} h-12 w-12 justify-center text-white ${
            isActive ? "bg-red" : "hover:bg-red/80"
          }`}
        >
          {tool.icon}
          <span
            className={`pointer-events-none absolute right-full mr-2 whitespace-nowrap rounded-sm bg-navy px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 ${
              isActive ? "opacity-0" : ""
            }`}
            aria-hidden="true"
          >
            {tool.label}
          </span>
        </button>
      );
    }

    // drawer row — link
    const linkProps = tool.external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <Link
        key={tool.key}
        id={`fttool-${tool.key}`}
        href={tool.href}
        {...linkProps}
        className="group flex items-center gap-3 px-4 py-3 text-left transition-colors duration-150 hover:bg-red/10"
        onClick={() => setActive(null)}
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-navy text-white group-hover:bg-red">
          {tool.icon}
        </span>
        <span className="flex flex-col">
          <span className="text-[13px] font-semibold text-navy">
            {tool.label}
          </span>
          <span className="text-[11px] text-grey-500">{tool.description}</span>
        </span>
      </Link>
    );
  };

  return (
    <div
      className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 lg:flex"
      role="region"
      aria-label="Patient tools"
    >
      {/* Drawer */}
      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, x: 20 }}
            transition={{ duration: 0.22, ease: [0.25, 0, 0, 1] }}
            className="absolute right-12 top-0 w-[280px] -translate-y-0 origin-right border border-navy/20 bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-grey-100 px-4 py-3">
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-red">
                Patient Tools
              </span>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close patient tools"
                className="text-grey-500 transition-colors hover:text-navy"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col py-1">
              {TOOLS.map((t) => toolButton(t, "drawer"))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rail */}
      <div className="flex flex-col bg-navy shadow-lg">
        {/* Available-now amber dot */}
        <div
          className="flex h-9 w-12 items-center justify-center bg-navy-mid"
          aria-label="Office available now"
          title="Open now — same-day appointments available"
        >
          <span className="relative inline-flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full rounded-full bg-amber opacity-75"
              style={{ animation: "ping 2s cubic-bezier(0,0,0.2,1) infinite" }}
              aria-hidden="true"
            />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
          </span>
        </div>
        {TOOLS.map((t) => toolButton(t, "rail"))}
      </div>
    </div>
  );
}
