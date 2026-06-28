import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

const lastModified = new Date("2026-06-28");

const localizedRoutes = [
  { en: "/", zh: "/zh", priority: 1 },
  { en: "/products", zh: "/zh/products", priority: 0.9 },
  {
    en: "/products/buffing-polishing-wheels",
    zh: "/zh/products/buffing-polishing-wheels",
    priority: 0.9,
  },
  {
    en: "/products/sanding-grinding-accessories",
    zh: "/zh/products/sanding-grinding-accessories",
    priority: 0.9,
  },
  { en: "/oem-private-label", zh: "/zh/oem-private-label", priority: 0.9 },
  { en: "/applications", zh: "/zh/applications", priority: 0.8 },
  { en: "/quality-control", zh: "/zh/quality-control", priority: 0.8 },
  { en: "/sample-kit", zh: "/zh/sample-kit", priority: 0.9 },
  { en: "/contact", zh: "/zh/contact", priority: 0.9 },
  { en: "/supplier-profile", zh: "/zh/supplier-profile", priority: 0.8 },
  {
    en: "/resources/abrasive-sourcing-checklist",
    zh: "/zh/resources/abrasive-sourcing-checklist",
    priority: 0.8,
  },
  {
    en: "/resources/abrasive-material-selection-guide",
    zh: "/zh/resources/abrasive-material-selection-guide",
    priority: 0.8,
  },
] as const;

const standaloneRoutes = ["/terms", "/privacy", "/cookie-policy"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedEntries = localizedRoutes.flatMap(({ en, zh, priority }) => {
    const languages = {
      en: absoluteUrl(en),
      "zh-CN": absoluteUrl(zh),
      "x-default": absoluteUrl(en),
    };

    return [en, zh].map((path) => ({
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages },
    }));
  });

  return [
    ...localizedEntries,
    ...standaloneRoutes.map((path) => ({
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];
}
