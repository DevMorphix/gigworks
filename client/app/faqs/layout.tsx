import type { Metadata } from "next";

// Metadata for SEO
export const metadata: Metadata = {
  title: "FAQs - Gigwork | WhatsApp-Based Service Directory in Kerala",
  description: "Get answers to all your questions about Gigwork - Kerala's WhatsApp-based service directory. Find electricians, plumbers, AC technicians & more. Available 24/7, no app needed.",
  keywords: "Gigwork FAQ, WhatsApp service directory Kerala, verified electricians Kerala, plumbers near me, AC repair Kerala, how Gigwork works, service providers Kerala",
  openGraph: {
    title: "Frequently Asked Questions - Gigwork Kerala",
    description: "Everything you need to know about finding verified service providers in Kerala through WhatsApp. No app required, 24/7 availability.",
    type: "website",
    locale: "en_IN",
    siteName: "Gigwork",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs - Gigwork | WhatsApp Service Directory Kerala",
    description: "Get instant answers about using Gigwork to find verified electricians, plumbers, and service providers across Kerala via WhatsApp.",
  },
  alternates: {
    canonical: "https://gigwork.co.in/faqs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
