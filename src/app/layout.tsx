import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

export const metadata: Metadata = {
  title: "OEM Abrasive, Sanding & Polishing Accessory Kits | SCOTTCHEN",
  description: "SCOTTCHEN manufactures retail-ready surface finishing accessory kits. Private label packaging, custom grit assortments, and optimized compatibility. Low MOQs.",
  alternates: {
    canonical: "https://www.scottchentools.com/",
    languages: {
      "en": "https://www.scottchentools.com/",
      "x-default": "https://www.scottchentools.com/",
    },
  },
};

const corporateSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.scottchentools.com/#organization",
      "name": "SCOTTCHEN",
      "url": "https://www.scottchentools.com/",
      "logo": "https://www.scottchentools.com/images/hero_abrasives_kit.png",
      "telephone": "+86-21-6100-2008",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No. 88 Industry Ring Road",
        "addressLocality": "Shanghai",
        "addressRegion": "Shanghai",
        "postalCode": "200120",
        "addressCountry": "CN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/scottchen-tools",
        "https://www.youtube.com/hashtag/scottchen"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+86-21-6100-2008",
          "email": "sales@scottchentools.com",
          "contactType": "B2B Sales",
          "availableLanguage": ["English", "Chinese"]
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.scottchentools.com/#localbusiness",
      "name": "SCOTTCHEN Tools",
      "image": "https://www.scottchentools.com/images/hero_abrasives_kit.png",
      "url": "https://www.scottchentools.com/",
      "email": "sales@scottchentools.com",
      "telephone": "+86-21-6100-2008",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No. 88 Industry Ring Road",
        "addressLocality": "Shanghai",
        "addressRegion": "Shanghai",
        "postalCode": "200120",
        "addressCountry": "CN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 31.2304,
        "longitude": 121.4737
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:30",
        "closes": "18:00"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(corporateSchema) }}
        />
      </head>
      <body className="h-full antialiased bg-industry-slate-900 text-industry-slate-200 font-sans">
        <div className="min-h-full flex flex-col">
          <Header />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}
