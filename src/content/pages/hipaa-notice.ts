// src/content/pages/hipaa-notice.ts
// Rand Medical Center — HIPAA Notice of Privacy Practices

import type { SEOMeta, HeroSection, LegalPageContent } from "@/types/content";

export const seo: SEOMeta = {
  title: "HIPAA Notice of Privacy Practices | Rand Medical Center",
  description: "Learn how Rand Medical Center uses and protects your health information under the Health Insurance Portability and Accountability Act.",
  canonical: "https://www.randmedicalcenter.com/legal-support/hipaa-notice",
  noIndex: false,
};

export const hero: HeroSection = {
  eyebrow: "Legal",
  headline: "HIPAA Notice of Privacy Practices",
  subheadline: "Learn how Rand Medical Center uses and protects your health information under the Health Insurance Portability and Accountability Act.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const lastUpdated = "2026-01-01";

export const body = "This notice describes how medical information about you may be used and disclosed and how you can access this information. Please review it carefully.\n\n**Our Commitment to Your Privacy**\n\nRand Medical Center is committed to protecting the privacy of your health information. Federal law (HIPAA) requires us to maintain the privacy of Protected Health Information (PHI), provide you with notice of our legal duties and privacy practices, and follow the terms of our current Notice of Privacy Practices.\n\n**How We May Use and Disclose Your Health Information**\n\nWe may use and disclose your PHI for the following purposes: treatment (sharing information with providers involved in your care), payment (billing your insurance or workers' compensation carrier), healthcare operations (quality improvement, training, and administrative activities), as required by law, for public health activities, and as otherwise permitted by HIPAA.\n\n**Uses and Disclosures Requiring Your Authorization**\n\nCertain uses of your PHI require your written authorization, including marketing communications, sale of your health information, and most uses of psychotherapy notes. You may revoke an authorization in writing at any time.\n\n**Your Rights Regarding Your Health Information**\n\nYou have the right to request restrictions on certain uses and disclosures, receive confidential communications, inspect and copy your health records, request amendments to your records, receive an accounting of disclosures, and obtain a paper copy of this notice.\n\n**Our Responsibilities**\n\nWe are required by law to maintain the privacy and security of your PHI, notify you of any breach of unsecured PHI, and abide by the terms of this Notice.\n\n**Filing a Complaint**\n\nIf you believe your privacy rights have been violated, you may file a complaint with our office or with the U.S. Department of Health and Human Services. We will not retaliate against you for filing a complaint.\n\n**Contact Information**\n\nRand Medical Center Privacy Officer, 1925 E Rand Rd, Arlington Heights, IL 60004. Phone: (224) 735-3522.";
