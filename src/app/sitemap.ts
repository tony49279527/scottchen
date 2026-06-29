import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

const SITE_UPDATED = new Date("2026-06-29");

const localizedRoutes = [
  { en: "/", zh: "/zh", priority: 1.0, changefreq: "weekly" as const },
  { en: "/products", zh: "/zh/products", priority: 0.9, changefreq: "weekly" as const },
  {
    en: "/products/buffing-polishing-wheels",
    zh: "/zh/products/buffing-polishing-wheels",
    priority: 0.9,
    changefreq: "monthly" as const,
  },
  {
    en: "/products/sanding-grinding-accessories",
    zh: "/zh/products/sanding-grinding-accessories",
    priority: 0.9,
    changefreq: "monthly" as const,
  },
  { en: "/oem-private-label", zh: "/zh/oem-private-label", priority: 0.9, changefreq: "monthly" as const },
  { en: "/applications", zh: "/zh/applications", priority: 0.8, changefreq: "monthly" as const },
  { en: "/quality-control", zh: "/zh/quality-control", priority: 0.8, changefreq: "monthly" as const },
  { en: "/sample-kit", zh: "/zh/sample-kit", priority: 0.8, changefreq: "monthly" as const },
  { en: "/contact", zh: "/zh/contact", priority: 0.9, changefreq: "monthly" as const },
  { en: "/supplier-profile", zh: "/zh/supplier-profile", priority: 0.7, changefreq: "monthly" as const },
  {
    en: "/resources/abrasive-sourcing-checklist",
    zh: "/zh/resources/abrasive-sourcing-checklist",
    priority: 0.7,
    changefreq: "monthly" as const,
  },
  {
    en: "/resources/abrasive-material-selection-guide",
    zh: "/zh/resources/abrasive-material-selection-guide",
    priority: 0.7,
    changefreq: "monthly" as const,
  },
] as const;

const standaloneRoutes = [
  { path: "/terms", priority: 0.2 },
  { path: "/privacy", priority: 0.2 },
  { path: "/cookie-policy", priority: 0.2 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedEntries = localizedRoutes.flatMap(({ en, zh, priority, changefreq }) => {
    const languages = {
      en: absoluteUrl(en),
      "zh-CN": absoluteUrl(zh),
      "x-default": absoluteUrl(en),
    };

    return [en, zh].map((p) => ({
      url: absoluteUrl(p),
      lastModified: SITE_UPDATED,
      changeFrequency: changefreq,
      priority,
      alternates: { languages },
    }));
  });

  return [
    ...localizedEntries,
    ...standaloneRoutes.map(({ path: p, priority }) => ({
      url: absoluteUrl(p),
      lastModified: SITE_UPDATED,
      changeFrequency: "yearly" as const,
      priority,
    })),
  ];
}
