import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist or has been moved.',
};

export default function NotFound() {
  return (
    <section className="min-h-screen bg-navy flex items-center justify-center px-[5vw] py-[120px]">
      <div className="max-w-[640px] mx-auto text-center">
        {/* Status code */}
        <p className="text-red font-sans font-semibold text-[14px] tracking-[0.15em] uppercase mb-6">
          404 Error
        </p>

        {/* Headline */}
        <h1
          className="font-serif text-white mb-6"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.1 }}
        >
          Page Not Found
        </h1>

        {/* Body */}
        <p className="text-[17px] leading-relaxed text-grey-300 mb-10 max-w-[480px] mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Try one of the links below or use the sitemap to find what you need.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-red text-white font-sans font-semibold text-[15px] rounded-none hover:bg-red-dark transition-colors duration-200"
          >
            Go to Homepage
          </Link>
          <a
            href="tel:+12247353522"
            className="inline-flex items-center justify-center px-8 py-4 border border-grey-300 text-grey-300 font-sans font-semibold text-[15px] rounded-none hover:border-white hover:text-white transition-colors duration-200"
          >
            Call (224) 735-3522
          </a>
        </div>

        {/* Sitemap link */}
        <p className="text-grey-500 text-[14px]">
          Looking for something specific?{' '}
          <Link
            href="/sitemap.xml"
            className="text-grey-300 underline underline-offset-4 hover:text-white transition-colors duration-200"
          >
            View our sitemap
          </Link>
        </p>
      </div>
    </section>
  );
}
