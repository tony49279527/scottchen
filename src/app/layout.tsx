import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";
import AttributionTracker from "@/components/AttributionTracker";
import DocumentShell from "@/components/DocumentShell";
import {
  absoluteUrl,
  RETAIL_SITE_URL,
  SITE_EMAIL,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-site-sans",
  display: "swap",
});

const displayFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-site-display",
  display: "swap",
});

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fffefb" },
    { media: "(prefers-color-scheme: dark)", color: "#070a13" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "OEM Abrasive, Sanding & Polishing Accessory Kits | SCOTTCHEN",
  description: "SCOTTCHEN supplies retail-ready surface finishing accessory kits with private-label packaging, custom grit assortments and B2B sourcing support.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Industrial Manufacturing",
  referrer: "strict-origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en": SITE_URL,
      "zh-CN": absoluteUrl("/zh"),
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "OEM Abrasive, Sanding & Polishing Accessory Kits | SCOTTCHEN",
    description:
      "Retail-ready surface finishing kits, custom assortments, private label packaging and B2B sourcing support.",
    url: SITE_URL,
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "SCOTTCHEN OEM abrasive, sanding and polishing solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OEM Abrasive, Sanding & Polishing Kits | SCOTTCHEN",
    description:
      "Retail-ready surface finishing kits, private label packaging and B2B sourcing support.",
    images: [absoluteUrl("/opengraph-image")],
  },
};

const corporateSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": "SCOTTCHEN",
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": absoluteUrl("/icon.svg"),
      },
      "image": absoluteUrl("/images/hero_abrasives_kit.webp"),
      "email": SITE_EMAIL,
      "slogan": "Industrial OEM Abrasive, Sanding & Polishing Solutions",
      "description":
        "B2B sourcing and private-label support for abrasive, sanding and polishing accessory kits.",
      "knowsAbout": [
        "Coated abrasives",
        "Cotton buffing wheels",
        "Private-label tool accessory kits",
        "Retail packaging and barcode preparation"
      ],
      "sameAs": [RETAIL_SITE_URL],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "email": SITE_EMAIL,
          "contactType": "sales",
          "availableLanguage": ["English", "Chinese"]
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": SITE_NAME,
      "publisher": {
        "@id": `${SITE_URL}/#organization`
      },
      "inLanguage": ["en", "zh-CN"]
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DocumentShell
      className={`${bodyFont.variable} ${displayFont.variable} h-full`}
      bodyClassName="h-full antialiased bg-industry-slate-900 text-industry-slate-200 font-sans"
      head={
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(corporateSchema) }}
        />
      }
    >
      <Analytics />
      <div className="min-h-full flex flex-col">
        <AttributionTracker />
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <CookieConsent />
      </div>
    </DocumentShell>
  );
}
