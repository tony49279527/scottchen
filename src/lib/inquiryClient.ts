import type {
  AttributionFields,
  InquiryApiResponse,
  InquiryPayload,
  QuoteInquiryPayload,
  SampleInquiryPayload,
} from "@/lib/inquiry";

function readUtmParam(name: string): string {
  if (typeof window === "undefined") {
    return "";
  }

  return new URLSearchParams(window.location.search).get(name) || "";
}

function readStoredAttribution() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return JSON.parse(
      sessionStorage.getItem("scottchen_attribution") || "null"
    ) as Partial<AttributionFields> | null;
  } catch {
    return null;
  }
}

export function getAttributionFields(pathname: string): AttributionFields {
  const isZh = pathname === "/zh" || pathname.startsWith("/zh/");
  const stored = readStoredAttribution();

  return {
    landingPage:
      stored?.landingPage ||
      (typeof window === "undefined" ? pathname : window.location.href),
    locale: isZh ? "zh-CN" : "en",
    referrer:
      stored?.referrer || (typeof document === "undefined" ? "" : document.referrer),
    utmSource: readUtmParam("utm_source") || stored?.utmSource || "",
    utmMedium: readUtmParam("utm_medium") || stored?.utmMedium || "",
    utmCampaign: readUtmParam("utm_campaign") || stored?.utmCampaign || "",
    utmTerm: readUtmParam("utm_term") || stored?.utmTerm || "",
    utmContent: readUtmParam("utm_content") || stored?.utmContent || "",
    formStartedAt: new Date().toISOString(),
  };
}

export async function submitInquiry(
  payload: InquiryPayload
): Promise<InquiryApiResponse> {
  const response = await fetch("/api/inquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => null)) as InquiryApiResponse | null;

  if (!response.ok) {
    return {
      ok: false,
      message: data?.message || "Submission failed.",
    };
  }

  return data || { ok: true };
}

export function buildQuotePayload(
  pathname: string,
  fields: Omit<QuoteInquiryPayload, keyof AttributionFields | "type">
): QuoteInquiryPayload {
  return {
    type: "quote",
    ...fields,
    ...getAttributionFields(pathname),
  };
}

export function buildSamplePayload(
  pathname: string,
  fields: Omit<SampleInquiryPayload, keyof AttributionFields | "type">
): SampleInquiryPayload {
  return {
    type: "sample",
    ...fields,
    ...getAttributionFields(pathname),
  };
}
