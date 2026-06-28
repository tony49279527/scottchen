export const SITE_NAME = "SCOTTCHEN";
const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://scottchen-b2b-530847966105.asia-east1.run.app";

export const SITE_URL = configuredSiteUrl.replace(/\/+$/, "");
export const SITE_EMAIL = "sales@scottchentools.com";
export const RETAIL_SITE_URL = "https://scottchen.online";
export const SITE_UPDATED = "2026-06-28";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

const localizedPaths = new Set([
  "/",
  "/products",
  "/products/buffing-polishing-wheels",
  "/products/sanding-grinding-accessories",
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
