import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import CookieConsent from './components/CookieConsent';

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pauhex | AI Smart Medication Dispensing & Senior Health Hub",
  description: "Pauhex Technology offers AI-powered smart medication dispensing systems and digital health monitoring solutions for senior care. Built on American core technology and high-precision engineering.",
  keywords: ["AI Medication Dispenser", "Senior Health Hub", "Smart Elderly Care", "Pauhex Systems", "Medication Safety", "Health Monitoring"],
  authors: [{ name: "Pauhex Technology (USA)" }],
  openGraph: {
    title: "Pauhex | AI Smart Medication Dispensing & Senior Health Hub",
    description: "Pauhex Technology offers AI-powered smart medication dispensing systems and digital health monitoring solutions for senior care.",
    url: "https://pauhex.com",
    siteName: "Pauhex",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pauhex | AI Smart Medication Dispensing & Senior Health Hub",
    description: "Pauhex Technology offers AI-powered smart medication dispensing systems and digital health monitoring solutions for senior care.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["MedicalDevice", "TechnologyCompany"],
              "name": "Pauhex Systems, Inc.",
              "url": "https://pauhex.com",
              "logo": "https://pauhex.com/logo.png",
              "description": "US-based AI technology company specializing in smart medication dispensing and senior health monitoring systems.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Innovation Way",
                "addressLocality": "Palo Alto",
                "addressRegion": "CA",
                "postalCode": "94304",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://linkedin.com/company/pauhex"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main style={{ paddingTop: '80px' }}>{children}</main>
        <CookieConsent />
        <Footer />
        {/* Hidden internal container for Google Translate widget */}

      </body>
    </html>
  );
}
