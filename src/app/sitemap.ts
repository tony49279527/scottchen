import type { MetadataRoute } from "next";
import { absoluteUrl, SITE_UPDATED, SITE_URL } from "@/lib/site";

const LAST_MODIFIED = new Date(SITE_UPDATED);

const localizedRoutes = [
  { en: "/", zh: "/zh", priority: 1.0, changefreq: "weekly" as const },
  { en: "/about", zh: "/zh/about", priority: 0.85, changefreq: "monthly" as const },
  { en: "/products", zh: "/zh/products", priority: 0.9, changefreq: "weekly" as const },
  {
    en: "/products/buffing-polishing-wheels",
    zh: "/zh/products/buffing-polishing-wheels",
    priority: 0.8,
    changefreq: "monthly" as const,
  },
  {
    en: "/products/sanding-grinding-accessories",
    zh: "/zh/products/sanding-grinding-accessories",
    priority: 0.8,
    changefreq: "monthly" as const,
  },
  {
    en: "/buffing-wheels",
    zh: "/zh/buffing-wheels",
    priority: 0.9,
    changefreq: "monthly" as const,
  },
  {
    en: "/sanding-discs",
    zh: "/zh/sanding-discs",
    priority: 0.9,
    changefreq: "monthly" as const,
  },
  {
    en: "/flap-discs",
    zh: "/zh/flap-discs",
    priority: 0.9,
    changefreq: "monthly" as const,
  },
  {
    en: "/sanding-belts",
    zh: "/zh/sanding-belts",
    priority: 0.85,
    changefreq: "monthly" as const,
  },
  {
    en: "/cutting-wheels",
    zh: "/zh/cutting-wheels",
    priority: 0.85,
    changefreq: "monthly" as const,
  },
  {
    en: "/abrasive-kits",
    zh: "/zh/abrasive-kits",
    priority: 0.85,
    changefreq: "monthly" as const,
  },
  {
    en: "/china-abrasive-manufacturer",
    zh: "/zh/china-abrasive-manufacturer",
    priority: 0.85,
    changefreq: "monthly" as const,
  },
  {
    en: "/wholesale-abrasives",
    zh: "/zh/wholesale-abrasives",
    priority: 0.8,
    changefreq: "monthly" as const,
  },
  { en: "/oem-private-label", zh: "/zh/oem-private-label", priority: 0.9, changefreq: "monthly" as const },
  { en: "/applications", zh: "/zh/applications", priority: 0.8, changefreq: "monthly" as const },
  { en: "/quality-control", zh: "/zh/quality-control", priority: 0.8, changefreq: "monthly" as const },
  { en: "/sample-kit", zh: "/zh/sample-kit", priority: 0.8, changefreq: "monthly" as const },
  { en: "/contact", zh: "/zh/contact", priority: 0.9, changefreq: "monthly" as const },
  { en: "/supplier-profile", zh: "/zh/supplier-profile", priority: 0.7, changefreq: "monthly" as const },
  { en: "/resources", zh: "/zh/resources", priority: 0.8, changefreq: "monthly" as const },
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
  {
    en: "/resources/oem-abrasive-supplier-evaluation",
    zh: "/zh/resources/oem-abrasive-supplier-evaluation",
    priority: 0.85,
    changefreq: "monthly" as const,
  },
  { en: "/terms", zh: "/zh/terms", priority: 0.2, changefreq: "yearly" as const },
  { en: "/privacy", zh: "/zh/privacy", priority: 0.2, changefreq: "yearly" as const },
  { en: "/cookie-policy", zh: "/zh/cookie-policy", priority: 0.2, changefreq: "yearly" as const },
] as const;

const utilityRoutes = [
  { path: "/catalog.pdf", priority: 0.6, changefreq: "monthly" as const },
] as const;

const decisionRoutes = [
  {
    path: "/alternatives/abrasive-kit-sourcing-alternatives",
    priority: 0.8,
    changefreq: "monthly" as const,
  },
  {
    path: "/compare/oem-vs-off-the-shelf-abrasive-kits",
    priority: 0.8,
    changefreq: "monthly" as const,
  },
  {
    path: "/solutions/automotive-polishing-kits",
    priority: 0.85,
    changefreq: "monthly" as const,
  },
] as const;

const sitemapUrl = (path: string) => (path === "/" ? SITE_URL : absoluteUrl(path));

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedEntries = localizedRoutes.flatMap(({ en, zh, priority, changefreq }) => {
    const languages = {
      en: sitemapUrl(en),
      "zh-CN": sitemapUrl(zh),
      "x-default": sitemapUrl(en),
    };

    return [en, zh].map((p) => ({
      url: sitemapUrl(p),
      lastModified: LAST_MODIFIED,
      changeFrequency: changefreq,
      priority,
      alternates: { languages },
    }));
  });

  return [
    ...localizedEntries,
    ...decisionRoutes.map(({ path: p, priority, changefreq }) => ({
      url: absoluteUrl(p),
      lastModified: LAST_MODIFIED,
      changeFrequency: changefreq,
      priority,
    })),
    ...utilityRoutes.map(({ path: p, priority, changefreq }) => ({
      url: absoluteUrl(p),
      lastModified: LAST_MODIFIED,
      changeFrequency: changefreq,
      priority,
    })),
  ];
}
