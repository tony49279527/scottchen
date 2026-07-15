"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ANALYTICS_CONSENT_EVENT,
  ANALYTICS_CONSENT_KEY,
  type AnalyticsConsent,
} from "@/lib/consent";

const analyticsEnabled = Boolean(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
const privacyLinkClass =
  "font-bold text-industry-slate-200 underline decoration-industry-orange decoration-2 underline-offset-2 hover:text-industry-slate-300";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname() || "";
  const isZh = pathname === "/zh" || pathname.startsWith("/zh/");

  useEffect(() => {
    const consent = localStorage.getItem(ANALYTICS_CONSENT_KEY);
    if (analyticsEnabled && !consent) {
      const timer = setTimeout(() => setVisible(true), 700);
      return () => clearTimeout(timer);
    }
  }, []);

  const setConsent = (consent: AnalyticsConsent) => {
    localStorage.setItem(ANALYTICS_CONSENT_KEY, consent);
    window.dispatchEvent(
      new CustomEvent<AnalyticsConsent>(ANALYTICS_CONSENT_EVENT, {
        detail: consent,
      })
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-3 left-3 right-3 md:bottom-6 md:left-auto md:right-6 md:max-w-md z-50"
      role="dialog"
      aria-label={isZh ? "网站分析 Cookie 设置" : "Analytics cookie settings"}
    >
      <div className="glass-panel p-6 rounded-xl border border-industry-slate-800 bg-industry-slate-950/90 backdrop-blur-lg shadow-2xl space-y-4 relative">
        <div className="space-y-2">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center">
            <svg className="w-4 h-4 text-industry-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            {isZh ? "网站分析与隐私设置" : "Analytics & Privacy"}
          </h4>
          <p className="text-xs text-industry-slate-400 leading-relaxed">
            {isZh ? (
              <>
                如果您同意，我们会使用 Google Analytics 了解哪些页面和询盘入口最有帮助。拒绝不会影响网站或询盘表单使用。查看{" "}
                <Link href="/zh/cookie-policy" className={privacyLinkClass}>
                  Cookie 政策
                </Link>{" "}
                与{" "}
                <Link href="/zh/privacy" className={privacyLinkClass}>
                  隐私政策
                </Link>{" "}
                以了解详情。
              </>
            ) : (
              <>
                With your permission, we use Google Analytics to understand which pages and inquiry paths are useful. Declining does not affect the site or RFQ forms. Review our{" "}
                <Link href="/cookie-policy" className={privacyLinkClass}>
                  Cookie Policy
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className={privacyLinkClass}>
                  Privacy Policy
                </Link>{" "}
                for details.
              </>
            )}
          </p>
        </div>
        <div className="flex flex-wrap justify-end gap-3 pt-2">
          <Link
            href={isZh ? "/zh/privacy" : "/privacy"}
            className="text-xs font-bold text-industry-slate-300 hover:text-white uppercase tracking-wider py-2 px-3 border border-industry-slate-700 rounded transition-colors text-center"
          >
            {isZh ? "隐私详情" : "Privacy Policy"}
          </Link>
          <button
            type="button"
            onClick={() => setConsent("declined")}
            className="text-xs font-bold text-industry-slate-200 hover:text-white uppercase tracking-wider py-2 px-3 border border-industry-slate-700 rounded transition-colors cursor-pointer"
          >
            {isZh ? "仅必要功能" : "Decline"}
          </button>
          <button
            type="button"
            onClick={() => setConsent("accepted")}
            className="text-xs font-bold text-white bg-industry-orange-cta hover:bg-industry-orange-hover uppercase tracking-wider py-2 px-4 rounded transition-all-custom cursor-pointer hover:scale-[1.02]"
          >
            {isZh ? "同意分析" : "Allow Analytics"}
          </button>
        </div>
      </div>
    </div>
  );
}
