export const SITE_NAME = "SCOTTCHEN";

const PRODUCTION_SITE_URL = "https://www.scottchentools.com";

const rawConfiguredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

function resolveSiteUrl(): string {
  if (!rawConfiguredSiteUrl) {
    return PRODUCTION_SITE_URL;
  }
  const trimmed = rawConfiguredSiteUrl.replace(/\/+$/, "");
  if (
    trimmed.includes("run.app") ||
    trimmed.includes("localhost") ||
    trimmed.match(/^https?:\/\/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)
  ) {
    if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_ALLOW_NON_CANONICAL) {
      return PRODUCTION_SITE_URL;
    }
    return trimmed;
  }
  return trimmed;
}

export const SITE_URL = resolveSiteUrl();
export const SITE_EMAIL = "sales@scottchentools.com";
export const SITE_UPDATED = "2026-07-15";
export const PRODUCTION_DOMAIN = "www.scottchentools.com";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

const localizedPaths = new Set([
  "/",
  "/about",
  "/products",
  "/products/buffing-polishing-wheels",
  "/products/sanding-grinding-accessories",
  "/buffing-wheels",
  "/sanding-discs",
  "/flap-discs",
  "/sanding-belts",
  "/cutting-wheels",
  "/abrasive-kits",
  "/china-abrasive-manufacturer",
  "/wholesale-abrasives",
  "/oem-private-label",
  "/applications",
  "/quality-control",
  "/sample-kit",
  "/contact",
  "/supplier-profile",
  "/evidence-center",
  "/product-compliance",
  "/procurement-terms",
  "/packaging-private-label",
  "/case-studies",
  "/resources",
  "/resources/abrasive-sourcing-checklist",
  "/resources/abrasive-material-selection-guide",
  "/resources/oem-abrasive-supplier-evaluation",
  "/resources/flap-disc-rfq-guide",
  "/resources/sanding-belt-rfq-guide",
  "/resources/cutting-wheel-compliance-checklist",
  "/terms",
  "/privacy",
  "/cookie-policy",
  "/thank-you",
]);

export function alternateLocalePath(pathname: string, target: "en" | "zh") {
  const englishPath = pathname.replace(/^\/zh(?=\/|$)/, "") || "/";

  if (!localizedPaths.has(englishPath)) {
    return target === "zh" ? "/zh" : "/";
  }

  if (target === "en") {
    return englishPath;
  }

  return englishPath === "/" ? "/zh" : `/zh${englishPath}`;
}
