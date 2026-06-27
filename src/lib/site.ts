export const SITE_NAME = "SCOTTCHEN";
export const SITE_URL = "https://www.scottchentools.com";
export const SITE_EMAIL = "sales@scottchentools.com";
export const RETAIL_SITE_URL = "https://scottchen.online";

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
  "/resources/abrasive-sourcing-checklist",
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
