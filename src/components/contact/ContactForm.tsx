"use client";

import { useState, FormEvent } from "react";

interface ContactFormProps {
  headline: string;
  subheadline?: string;
  fields: string[];
  submitText: string;
  privacyNote: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm({
  headline,
  subheadline,
  submitText,
  privacyNote,
}: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full border border-grey-300 px-4 py-3 text-[15px] text-navy placeholder:text-grey-500 focus:outline-none focus:border-navy transition-colors duration-200 bg-white";

  const labelClass = "block text-[13px] font-semibold text-navy mb-1.5 uppercase tracking-wide";

  return (
    <div>
      <h2
        className="font-serif text-navy mb-3"
        style={{ fontSize: "clamp(24px, 2.5vw, 36px)" }}
      >
        {headline}
      </h2>
      {subheadline && (
        <p className="text-[15px] text-grey-700 mb-8 leading-relaxed">
          {subheadline}
        </p>
      )}

      {status === "success" ? (
        <div className="bg-off-white border border-grey-100 p-8 text-center">
          <p className="font-semibold text-navy text-lg mb-2">Message Sent</p>
          <p className="text-grey-700 text-[15px]">
            Thank you for reaching out. Our team will respond within one business day.
          </p>
        </div>
      ) : (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          noValidate
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className={labelClass}>
                First Name <span className="text-red" aria-hidden="true">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className={inputClass}
                placeholder="First name"
                required
                aria-required="true"
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className={labelClass}>
                Last Name <span className="text-red" aria-hidden="true">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className={inputClass}
                placeholder="Last name"
                required
                aria-required="true"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            {/* Phone */}
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone Number <span className="text-red" aria-hidden="true">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className={inputClass}
                placeholder="(XXX) XXX-XXXX"
                required
                aria-required="true"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelClass}>
                Email Address <span className="text-red" aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={inputClass}
                placeholder="your@email.com"
                required
                aria-required="true"
              />
            </div>
          </div>

          {/* Injury type */}
          <div className="mb-5">
            <label htmlFor="injuryType" className={labelClass}>
              Reason for Visit
            </label>
            <select
              id="injuryType"
              name="injuryType"
              className={inputClass}
            >
              <option value="">Select a reason...</option>
              <option value="Work Injury">Work Injury</option>
              <option value="Auto Accident">Auto Accident</option>
              <option value="Chronic Pain">Chronic Pain</option>
              <option value="Sports Injury">Sports Injury</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className={`${inputClass} resize-none`}
              placeholder="How can we help you?"
            />
          </div>

          {status === "error" && (
            <p className="text-red text-sm mb-4" role="alert">
              Something went wrong. Please try again or call us at (224) 735-3522.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-red text-white py-4 font-bold text-[15px] tracking-wide hover:bg-red-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Sending…" : submitText}
          </button>

          <p className="text-xs text-grey-500 mt-3 leading-relaxed">
            {privacyNote}
          </p>
        </form>
      )}
    </div>
  );
}
