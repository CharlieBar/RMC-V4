// src/content/pages/medical-disclaimer.ts
// Rand Medical Center — Medical Disclaimer

import type { SEOMeta, HeroSection, LegalPageContent } from "@/types/content";

export const seo: SEOMeta = {
  title: "Medical Disclaimer | Rand Medical Center",
  description: "Important information about the educational nature of content on the Rand Medical Center website.",
  canonical: "https://www.randmedicalcenter.com/legal-support/medical-disclaimer",
  noIndex: false,
};

export const hero: HeroSection = {
  eyebrow: "Legal",
  headline: "Medical Disclaimer",
  subheadline: "Important information about the educational nature of content on the Rand Medical Center website.",
  primaryCTA: { text: "Schedule an Appointment", href: "https://www.tebra.com/care/practice/rand-medical-center-456192", variant: "primary" },
  secondaryCTA: { text: "Call (224) 735-3522", href: "tel:+12247353522", variant: "secondary" },
};

export const lastUpdated = "2026-01-01";

export const body = 'The content on the Rand Medical Center website (www.randmedicalcenter.com) is provided for general informational and educational purposes only.\n\n**Not Medical Advice**\n\nNothing on this website is intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay seeking it because of something you have read on this website.\n\n**No Doctor-Patient Relationship**\n\nThe information on this website does not create a doctor-patient relationship between you and Rand Medical Center or any of its providers. A doctor-patient relationship is established only through an in-person evaluation.\n\n**Emergency Situations**\n\nIf you are experiencing a medical emergency — including chest pain, difficulty breathing, severe bleeding, or loss of consciousness — call 911 or go to your nearest emergency room immediately. Do not rely on this website for emergency medical information.\n\n**Accuracy and Currency**\n\nWhile we make every effort to keep the information on this website accurate and current, medical knowledge evolves and individual conditions vary. The information here may not reflect the most recent medical research or apply to your specific situation.\n\n**External Links**\n\nOur website may contain links to external websites. We are not responsible for the content, accuracy, or privacy practices of those sites.\n\n**Contact**\n\nFor medical questions specific to your condition, please schedule an appointment or call our office at (224) 735-3522.';
