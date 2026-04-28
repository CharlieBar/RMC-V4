'use client';

import Link from 'next/link';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  return (
    <section className="min-h-screen bg-navy flex items-center justify-center px-[5vw] py-[120px]">
      <div className="max-w-[640px] mx-auto text-center">
        {/* Status label */}
        <p className="text-red font-sans font-semibold text-[14px] tracking-[0.15em] uppercase mb-6">
          Unexpected Error
        </p>

        {/* Headline */}
        <h1
          className="font-serif text-white mb-6"
          style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.1 }}
        >
          Something Went Wrong
        </h1>

        {/* Body */}
        <p className="text-[17px] leading-relaxed text-grey-300 mb-10 max-w-[480px] mx-auto">
          We encountered an unexpected error. Please try again or return to the
          homepage.
          {error.digest && (
            <span className="block mt-3 text-[13px] text-grey-500 font-mono">
              Error ID: {error.digest}
            </span>
          )}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center px-8 py-4 bg-red text-white font-sans font-semibold text-[15px] rounded-none hover:bg-red-dark transition-colors duration-200 cursor-pointer"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 border border-grey-300 text-grey-300 font-sans font-semibold text-[15px] rounded-none hover:border-white hover:text-white transition-colors duration-200"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
