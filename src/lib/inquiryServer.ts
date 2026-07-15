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

const FIELD_LIMITS = {
  name: 120,
  company: 180,
  email: 254,
  country: 120,
  url: 2048,
  attribution: 300,
  selection: 200,
  message: 5000,
  honeypot: 200,
} as const;

function hasValidString(value: unknown, maxLength: number, required = false) {
  if (typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return !required || value.trim().length > 0;
}

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

export function isValidEmail(email: string): boolean {
  return emailRegex.test(email);
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
  const validBaseFields =
    hasValidString(payload.fullName, FIELD_LIMITS.name, true) &&
    hasValidString(payload.companyName, FIELD_LIMITS.company, true) &&
    hasValidString(payload.email, FIELD_LIMITS.email, true) &&
    hasValidString(payload.country, FIELD_LIMITS.country, true) &&
    hasValidString(payload.landingPage, FIELD_LIMITS.url, true) &&
    hasValidString(payload.sourcePage, FIELD_LIMITS.url) &&
    hasValidString(payload.referrer, FIELD_LIMITS.url) &&
    hasValidString(payload.utmSource, FIELD_LIMITS.attribution) &&
    hasValidString(payload.utmMedium, FIELD_LIMITS.attribution) &&
    hasValidString(payload.utmCampaign, FIELD_LIMITS.attribution) &&
    hasValidString(payload.utmTerm, FIELD_LIMITS.attribution) &&
    hasValidString(payload.utmContent, FIELD_LIMITS.attribution) &&
    hasValidString(payload.formStartedAt, FIELD_LIMITS.selection, true) &&
    hasValidString(payload.message, FIELD_LIMITS.message) &&
    (payload.hpField === undefined || hasValidString(payload.hpField, FIELD_LIMITS.honeypot)) &&
    (payload.locale === "en" || payload.locale === "zh-CN");

  if (!validBaseFields) {
    return "One or more contact fields are missing, invalid, or too long.";
  }

  if (!isValidEmail(payload.email)) {
    return "Please enter a valid email address.";
  }

  if (isQuotePayload(payload)) {
    const validQuoteFields =
      hasValidString(payload.buyerType, FIELD_LIMITS.selection, true) &&
      hasValidString(payload.productCategory, FIELD_LIMITS.selection, true) &&
      hasValidString(payload.quantity, FIELD_LIMITS.selection, true) &&
      hasValidString(payload.customPackaging, FIELD_LIMITS.selection, true) &&
      hasValidString(payload.targetMarket, FIELD_LIMITS.selection);

    if (!validQuoteFields) {
      return "One or more quote fields are missing, invalid, or too long.";
    }
  }

  if (isSamplePayload(payload)) {
    const validCategories =
      Array.isArray(payload.categories) &&
      payload.categories.length > 0 &&
      payload.categories.length <= 12 &&
      payload.categories.every((category) =>
        hasValidString(category, FIELD_LIMITS.selection, true)
      );
    const validSampleFields =
      hasValidString(payload.website, FIELD_LIMITS.url, true) &&
      isLikelyBusinessWebsite(payload.website) &&
      validCategories &&
      hasValidString(payload.application, FIELD_LIMITS.selection) &&
      hasValidString(payload.targetMaterial, FIELD_LIMITS.selection) &&
      hasValidString(payload.estimatedQuantity, FIELD_LIMITS.selection, true) &&
      hasValidString(payload.oemNeeded, FIELD_LIMITS.selection, true);

    if (!validSampleFields) {
      return "One or more sample request fields are missing, invalid, or too long.";
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
