"use client";

import type { InquiryAnalyticsEvent } from "@/lib/inquiry";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: InquiryAnalyticsEvent) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", event.event, {
    locale: event.locale,
    form_type: event.formType,
    category: event.category,
    buyer_type: event.buyerType,
  });
}

