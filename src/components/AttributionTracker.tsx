"use client";

import { useEffect } from "react";

const ATTRIBUTION_KEY = "scottchen_attribution";
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export default function AttributionTracker() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const hasCampaign = UTM_KEYS.some((key) => params.has(key));
    const existing = sessionStorage.getItem(ATTRIBUTION_KEY);

    if (existing && !hasCampaign) {
      return;
    }

    sessionStorage.setItem(
      ATTRIBUTION_KEY,
      JSON.stringify({
        landingPage: window.location.href,
        referrer: document.referrer,
        utmSource: params.get("utm_source") || "",
        utmMedium: params.get("utm_medium") || "",
        utmCampaign: params.get("utm_campaign") || "",
        utmTerm: params.get("utm_term") || "",
        utmContent: params.get("utm_content") || "",
      })
    );
  }, []);

  return null;
}
