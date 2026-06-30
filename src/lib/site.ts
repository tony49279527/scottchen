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
export const SITE_PHONE = "+86-21-1234-5678";
export const RETAIL_SITE_URL = "https://scottchen.online";
export const SITE_UPDATED = "2026-06-30";
export const PRODUCTION_DOMAIN = "www.scottchentools.com";
export const SITE_STREET_ADDRESS = "Shanghai, China";
export const SITE_GEO = { latitude: 31.2304, longitude: 121.4737 };

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

const localizedPaths = new Set([
  "/",
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
  "/resources/abrasive-sourcing-checklist",
  "/resources/abrasive-material-selection-guide",
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
