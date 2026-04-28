import type { Metadata } from "next";
import * as content from "@content/content/pages/contact";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactForm from "@/components/contact/ContactForm";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Clock } from "lucide-react";

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords,
  alternates: { canonical: content.seo.canonical },
};

export default function ContactPage() {
  const { location, formConfig, emergencyNote, servingAreas } = content;

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <HeroSection variant="page" {...content.hero} />

      {/* Emergency note */}
      <section className="py-6 px-[5vw] bg-red">
        <div className="max-w-[1400px] mx-auto flex items-start gap-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 mt-0.5"
            aria-hidden="true"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <div>
            <p className="font-bold text-white text-[15px] mb-1">
              {emergencyNote.headline}
            </p>
            <p className="text-white/85 text-[14px] leading-relaxed max-w-[760px]">
              {emergencyNote.body}
            </p>
          </div>
        </div>
      </section>

      {/* Main contact section — two-column */}
      <section className="py-[80px] px-[5vw]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16">
          {/* Left: form */}
          <ScrollReveal variant="fade-up">
            <ContactForm
              headline={formConfig.headline}
              subheadline={formConfig.subheadline}
              fields={formConfig.fields}
              submitText={formConfig.submitText}
              privacyNote={formConfig.privacyNote}
            />
          </ScrollReveal>

          {/* Right: location info */}
          <aside>
            <SectionLabel text="Contact Info" className="mb-6" />

            {/* Address & phone */}
            <div className="space-y-6 mb-8">
              <div>
                <p className="text-[12px] font-bold tracking-[2px] uppercase text-grey-500 mb-1">
                  Address
                </p>
                <p className="text-navy font-semibold text-[15px]">
                  {location.address}
                </p>
                <p className="text-navy text-[15px]">
                  {location.city}, {location.state} {location.zip}
                </p>
              </div>

              <div>
                <p className="text-[12px] font-bold tracking-[2px] uppercase text-grey-500 mb-1">
                  Phone
                </p>
                <a
                  href={`tel:${location.phoneRaw}`}
                  className="text-navy font-semibold text-[15px] hover:text-red transition-colors"
                >
                  {location.phone}
                </a>
              </div>

              {location.fax && (
                <div>
                  <p className="text-[12px] font-bold tracking-[2px] uppercase text-grey-500 mb-1">
                    Fax
                  </p>
                  <p className="text-navy text-[15px]">{location.fax}</p>
                </div>
              )}

              {location.email && (
                <div>
                  <p className="text-[12px] font-bold tracking-[2px] uppercase text-grey-500 mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${location.email}`}
                    className="text-navy text-[15px] hover:text-red transition-colors"
                  >
                    {location.email}
                  </a>
                </div>
              )}
            </div>

            {/* Hours */}
            <div className="group relative mb-8 bg-white border border-grey-100 hover:border-red/30 transition-all duration-300 overflow-hidden">
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red via-red to-amber transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" aria-hidden="true" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-sm bg-red/10 text-red transition-all duration-300 group-hover:bg-red group-hover:text-white">
                    <Clock size={18} aria-hidden="true" />
                  </span>
                  <p className="text-[12px] font-bold tracking-[2px] uppercase text-grey-500">
                    Office Hours
                  </p>
                </div>
                <table className="w-full text-[14px]">
                  <tbody>
                    {location.hours.map((row) => (
                      <tr key={row.day} className="border-b border-grey-100">
                        <td className="py-2 text-navy font-medium w-1/2">
                          {row.day}
                        </td>
                        <td
                          className={`py-2 text-right ${
                            row.hours === "Closed"
                              ? "text-grey-500"
                              : "text-navy"
                          }`}
                        >
                          {row.hours}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Google Maps */}
            <div className="w-full aspect-video border border-grey-100 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.8!2d-87.98!3d42.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb0e5b5e5b5e5%3A0x0!2s1925+E+Rand+Rd%2C+Arlington+Heights%2C+IL+60004!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rand Medical Center location on Google Maps"
              />
            </div>
          </aside>
        </div>
      </section>

      {/* Serving areas */}
      <section className="py-[80px] px-[5vw] bg-off-white border-t border-grey-100">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel text="Service Area" className="mb-6" />
          <h2
            className="font-serif text-navy mb-6"
            style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
          >
            {servingAreas.headline}
          </h2>
          <p className="text-[16px] text-grey-700 leading-relaxed max-w-[640px] mb-8">
            {servingAreas.body}
          </p>
          <div className="flex flex-wrap gap-2">
            {servingAreas.communities.map((community) => (
              <span
                key={community}
                className="bg-white border border-grey-300 text-navy text-[13px] font-medium px-3 py-1.5"
              >
                {community}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {content.faqs && content.faqs.length > 0 && (
        <FAQAccordion
          items={content.faqs}
          headline="Frequently Asked Questions"
          eyebrow="FAQ"
        />
      )}

      <CTASection
        headline={content.ctaSection.headline}
        body={content.ctaSection.body}
        primaryCTA={content.ctaSection.primaryCTA}
        secondaryCTA={content.ctaSection.secondaryCTA}
        variant="red"
      />
    </>
  );
}
