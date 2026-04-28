import type { Metadata } from "next";
import { dmSans, dmSerif } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingToolbar from "@/components/global/FloatingToolbar";
import ScrollToTop from "@/components/global/ScrollToTop";
import StickyCTABar from "@/components/global/StickyCTABar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.randmedicalcenter.com"
  ),
  title: {
    default:
      "Rand Medical Center | Work Injury & Pain Management in Arlington Heights, IL",
    template: "%s | Rand Medical Center",
  },
  description:
    "Rand Medical Center provides comprehensive care for work injuries, auto accidents, pain management, orthopedics, physical therapy, and immediate care in Arlington Heights, IL.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Rand Medical Center",
    images: [
      {
        url: "/images/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "Rand Medical Center — Work Injury & Pain Management in Arlington Heights, IL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="font-sans">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingToolbar />
        <ScrollToTop />
        <StickyCTABar />
      </body>
    </html>
  );
}
