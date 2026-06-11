import type { InquiryPayload } from "@/lib/inquiry";

const FREE_EMAIL_DOMAINS = new Set([
  "163.com",
  "126.com",
  "qq.com",
  "foxmail.com",
  "gmail.com",
  "hotmail.com",
  "outlook.com",
  "yahoo.com",
  "icloud.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "gmx.com",
]);

const COUNTRY_ALIASES: Record<string, string> = {
  usa: "United States",
  us: "United States",
  "u.s.": "United States",
  uk: "United Kingdom",
  "u.k.": "United Kingdom",
  uae: "United Arab Emirates",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isQuotePayload(payload: InquiryPayload): payload is Extract<InquiryPayload, { type: "quote" }> {
  return payload.type === "quote";
}

export function isSamplePayload(payload: InquiryPayload): payload is Extract<InquiryPayload, { type: "sample" }> {
  return payload.type === "sample";
}

export function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function normalizeCountry(value: string): string {
  const normalized = value.trim().replace(/\s+/g, " ");
  const alias = COUNTRY_ALIASES[normalized.toLowerCase()];

  return alias || normalized;
}

export function isBusinessEmail(email: string): boolean {
  if (!emailRegex.test(email)) {
    return false;
  }

  const domain = email.split("@")[1]?.toLowerCase() || "";

  return !FREE_EMAIL_DOMAINS.has(domain);
}

export function isLikelyBusinessWebsite(value: string): boolean {
  if (!isNonEmptyString(value)) {
    return false;
  }

  try {
    const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
    const url = new URL(withProtocol);
    const hostname = url.hostname.toLowerCase();

    if (!hostname.includes(".")) {
      return false;
    }

    if (hostname === "amazon.com" || hostname.endsWith(".amazon.com")) {
      return true;
    }

    return !hostname.endsWith(".local");
  } catch {
    return false;
  }
}

export function validatePayload(payload: InquiryPayload): string | null {
  const baseChecks = [
    payload.fullName,
    payload.companyName,
    payload.email,
    payload.country,
    payload.landingPage,
    payload.locale,
    payload.formStartedAt,
  ];

  if (baseChecks.some((value) => !isNonEmptyString(value))) {
    return "Missing required contact fields.";
  }

  if (!isBusinessEmail(payload.email)) {
    return "Please use a business email address.";
  }

  if (isQuotePayload(payload)) {
    if (
      !isNonEmptyString(payload.buyerType) ||
      !isNonEmptyString(payload.productCategory) ||
      !isNonEmptyString(payload.quantity) ||
      !isNonEmptyString(payload.customPackaging)
    ) {
      return "Missing required quote fields.";
    }
  }

  if (isSamplePayload(payload)) {
    if (
      !isLikelyBusinessWebsite(payload.website) ||
      !Array.isArray(payload.categories) ||
      payload.categories.length === 0 ||
      !isNonEmptyString(payload.estimatedQuantity) ||
      !isNonEmptyString(payload.oemNeeded)
    ) {
      return "Missing required sample request fields.";
    }
  }

  return null;
}

export function computeLeadScore(payload: InquiryPayload): number {
  let score = 0;

  if (payload.utmSource) score += 5;
  if (payload.referrer) score += 5;
  if (isBusinessEmail(payload.email)) score += 20;
  if (payload.message.trim().length >= 40) score += 10;

  if (isQuotePayload(payload)) {
    if (payload.customPackaging === "yes") score += 10;
    if (/container|5000|high volume/i.test(payload.quantity)) score += 20;
    if (/amazon|fba|walmart/i.test(payload.targetMarket)) score += 10;
  }

  if (isSamplePayload(payload)) {
    if (isLikelyBusinessWebsite(payload.website)) score += 15;
    if (payload.oemNeeded === "yes") score += 10;
    if (/5000|high volume/i.test(payload.estimatedQuantity)) score += 20;
    if (payload.categories.length >= 3) score += 5;
  }

  return score;
}

export function getLeadTier(score: number): "high" | "medium" | "low" {
  if (score >= 60) return "high";
  if (score >= 35) return "medium";
  return "low";
}

export function isSubmissionTooFast(formStartedAt: string, now = Date.now()): boolean {
  const started = Date.parse(formStartedAt);

  if (Number.isNaN(started)) {
    return true;
  }

  return now - started < 1500;
}

