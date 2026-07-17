import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredClientShell from "@/components/DeferredClientShell";
import DocumentShell from "@/components/DocumentShell";
import {
  absoluteUrl,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import { buildOrganizationNode } from "@/lib/schema";
import "./globals.css";

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fffefb" },
    { media: "(prefers-color-scheme: dark)", color: "#070a13" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "B2B Abrasive Sourcing & Private-Label Project Support | SCOTTCHEN",
  description: "Shanghai-based B2B sourcing and project support for abrasive, sanding and polishing accessories, samples, packaging plans and written commercial terms.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Industrial Procurement",
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
      "B2B abrasive sourcing, proposed assortments, private-label packaging planning and written project controls.",
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
      "B2B abrasive sourcing, private-label packaging planning and written project controls.",
    images: [absoluteUrl("/opengraph-image")],
  },
};

const corporateSchema = {
  "@context": "https://schema.org",
  "@graph": [
    buildOrganizationNode(),
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${SITE_NAME} - OEM Abrasive Sourcing Support`,
      description:
        "B2B abrasive, sanding and polishing accessory sourcing site with English and Simplified Chinese buyer resources.",
      about: {
        "@id": `${SITE_URL}/#organization`,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: ["en", "zh-CN"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DocumentShell
      className="h-full"
      bodyClassName="h-full antialiased bg-industry-slate-900 text-industry-slate-200 font-sans"
      head={
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(corporateSchema) }}
        />
      }
    >
      <div className="min-h-full flex flex-col">
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <DeferredClientShell />
      </div>
    </DocumentShell>
  );
}
