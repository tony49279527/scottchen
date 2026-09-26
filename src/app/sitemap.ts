import type { MetadataRoute } from "next";
import { execSync } from "node:child_process";
import { pageDateForPath } from "@/lib/pageDates";
import { absoluteUrl, SITE_URL } from "@/lib/site";

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
  { en: "/evidence-center", zh: "/zh/evidence-center", priority: 0.9, changefreq: "monthly" as const },
  { en: "/product-compliance", zh: "/zh/product-compliance", priority: 0.85, changefreq: "monthly" as const },
  { en: "/procurement-terms", zh: "/zh/procurement-terms", priority: 0.85, changefreq: "monthly" as const },
  { en: "/packaging-private-label", zh: "/zh/packaging-private-label", priority: 0.85, changefreq: "monthly" as const },
  { en: "/case-studies", zh: "/zh/case-studies", priority: 0.75, changefreq: "monthly" as const },
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
  {
    en: "/resources/flap-disc-rfq-guide",
    zh: "/zh/resources/flap-disc-rfq-guide",
    priority: 0.8,
    changefreq: "monthly" as const,
  },
  {
    en: "/resources/sanding-belt-rfq-guide",
    zh: "/zh/resources/sanding-belt-rfq-guide",
    priority: 0.8,
    changefreq: "monthly" as const,
  },
  {
    en: "/resources/cutting-wheel-compliance-checklist",
    zh: "/zh/resources/cutting-wheel-compliance-checklist",
    priority: 0.85,
    changefreq: "monthly" as const,
  },
  {
    en: "/alternatives/abrasive-kit-sourcing-alternatives",
    zh: "/zh/alternatives/abrasive-kit-sourcing-alternatives",
    priority: 0.8,
    changefreq: "monthly" as const,
  },
  {
    en: "/compare/oem-vs-off-the-shelf-abrasive-kits",
    zh: "/zh/compare/oem-vs-off-the-shelf-abrasive-kits",
    priority: 0.8,
    changefreq: "monthly" as const,
  },
  {
    en: "/solutions/automotive-polishing-kits",
    zh: "/zh/solutions/automotive-polishing-kits",
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

const sitemapUrl = (path: string) => (path === "/" ? SITE_URL : absoluteUrl(path));

function lastModifiedFor(path: string): Date | undefined {
  // v2.1 audit P3 #10: derive lastmod at build time so deploys refresh it
  // automatically. Takes the later of (a) the page file's last git commit
  // date and (b) the curated PAGE_LAST_MODIFIED record; falls back to the
  // manual record when git history is unavailable.
  const manual = (pageDateForPath(path) ?? "").slice(0, 10);
  const gitDate = gitLastModified(pageFileForPath(path));
  const best = [manual, gitDate].filter(Boolean).sort().pop();
  return best ? new Date(best) : undefined;
}

// Map a sitemap route path to its page source file for git date lookup.
function pageFileForPath(path: string): string {
  if (path === "/catalog.pdf") return "public/catalog.pdf";
  const clean = path === "/" ? "" : path.replace(/\/$/, "");
  return `src/app${clean}/page.tsx`;
}

const gitDateCache = new Map<string, string>();

function gitLastModified(file: string): string {
  const cached = gitDateCache.get(file);
  if (cached !== undefined) return cached;
  let date = "";
  try {
    date = execSync(`git log -1 --format=%cI -- ${JSON.stringify(file)}`, {
      cwd: process.cwd(),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
      timeout: 10000,
    })
      .trim()
      .slice(0, 10);
  } catch {
    date = "";
  }
  gitDateCache.set(file, date);
  return date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedEntries = localizedRoutes.flatMap(({ en, zh, priority, changefreq }) => {
    const languages = {
      en: sitemapUrl(en),
      "zh-CN": sitemapUrl(zh),
      "x-default": sitemapUrl(en),
    };

    return [en, zh].map((p) => ({
      url: sitemapUrl(p),
      lastModified: lastModifiedFor(p),
      changeFrequency: changefreq,
      priority,
      alternates: { languages },
    }));
  });

  return [
    ...localizedEntries,
    ...utilityRoutes.map(({ path: p, priority, changefreq }) => ({
      url: absoluteUrl(p),
      lastModified: lastModifiedFor(p),
      changeFrequency: changefreq,
      priority,
    })),
  ];
}
