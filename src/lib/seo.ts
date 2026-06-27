import type { Metadata } from "next";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  locale?: "en" | "zh-CN";
  alternatePath?: string;
  noIndex?: boolean;
}

export function createPageMetadata({
  title,
  description,
  path,
  locale = "en",
  alternatePath,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const englishPath = locale === "en" ? path : alternatePath;
  const chinesePath = locale === "zh-CN" ? path : alternatePath;
  const languages =
    englishPath && chinesePath
      ? {
          en: absoluteUrl(englishPath),
          "zh-CN": absoluteUrl(chinesePath),
          "x-default": absoluteUrl(englishPath),
        }
      : undefined;

  return {
    title,
    description,
    alternates: {
      canonical,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url: canonical,
      locale: locale === "zh-CN" ? "zh_CN" : "en_US",
      alternateLocale: [locale === "zh-CN" ? "en_US" : "zh_CN"],
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
      title,
      description,
      images: [absoluteUrl("/opengraph-image")],
    },
    ...(noIndex
      ? {
          robots: {
            index: false,
            follow: false,
            noarchive: true,
          },
        }
      : {}),
  };
}
