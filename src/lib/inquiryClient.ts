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

export function getAttributionFields(pathname: string): AttributionFields {
  const isZh = pathname === "/zh" || pathname.startsWith("/zh/");

  return {
    landingPage: typeof window === "undefined" ? pathname : window.location.href,
    locale: isZh ? "zh-CN" : "en",
    referrer: typeof document === "undefined" ? "" : document.referrer,
    utmSource: readUtmParam("utm_source"),
    utmMedium: readUtmParam("utm_medium"),
    utmCampaign: readUtmParam("utm_campaign"),
    utmTerm: readUtmParam("utm_term"),
    utmContent: readUtmParam("utm_content"),
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

