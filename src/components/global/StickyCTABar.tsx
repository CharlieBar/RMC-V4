"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@content/content/global/site";

const STORAGE_KEY = "rmc_sticky_cta_dismissed";

export default function StickyCTABar() {
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const dismissed = window.sessionStorage.getItem(STORAGE_KEY);
    if (dismissed !== "1") setVisible(true);
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* sessionStorage may be blocked — fail silent */
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          aria-label="Schedule an appointment"
          initial={prefersReducedMotion ? false : { y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={prefersReducedMotion ? undefined : { y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0, 0, 1], delay: 0.4 }}
          className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-navy/95 backdrop-blur-md shadow-[0_-8px_24px_rgba(0,0,0,0.18)]"
        >
          <div className="mx-auto flex max-w-[1400px] flex-col items-stretch gap-3 px-[5vw] py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-2.5">
            {/* Status message */}
            <div className="flex items-center gap-3 text-white">
              <span className="relative inline-flex h-2.5 w-2.5 shrink-0">
                <span
                  className="absolute inline-flex h-full w-full rounded-full bg-amber opacity-70"
                  style={{
                    animation: "ping 1.8s cubic-bezier(0,0,0.2,1) infinite",
                  }}
                  aria-hidden="true"
                />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber" />
              </span>
              <span className="text-[13px] leading-tight sm:text-[14px]">
                <span className="font-semibold">
                  Accepting New Patients
                </span>
                <span className="hidden text-white/70 sm:inline">
                  {" "}
                  — Same-day appointments available
                </span>
                <span className="text-white/70 sm:hidden">
                  {" "}
                  · same-day available
                </span>
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-sm bg-red px-4 py-2.5 text-center text-[13px] font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-red-dark sm:flex-none sm:px-5 sm:py-2"
              >
                Schedule Now
              </a>
              <a
                href={site.phoneLink}
                className="flex-1 rounded-sm border border-white/30 px-4 py-2.5 text-center text-[13px] font-semibold tracking-wide text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/5 sm:flex-none sm:px-5 sm:py-2"
              >
                <span className="sm:hidden">Call</span>
                <span className="hidden sm:inline">Call {site.phone}</span>
              </a>
              <button
                type="button"
                onClick={dismiss}
                aria-label="Dismiss appointment bar"
                className="flex h-9 w-9 shrink-0 items-center justify-center text-white/60 transition-colors duration-200 hover:text-white"
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
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
