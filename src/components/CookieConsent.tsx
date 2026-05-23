"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname() || "";
  const isZh = pathname === "/zh" || pathname.startsWith("/zh/");

  useEffect(() => {
    const consent = localStorage.getItem("scottchen_cookie_consent");
    if (!consent) {
      // Small delay to make the entrance smooth and avoid CLS
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("scottchen_cookie_consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 animate-fade-in-up">
      <div className="glass-panel p-6 rounded-xl border border-industry-slate-800 bg-industry-slate-950/90 backdrop-blur-lg shadow-2xl space-y-4 relative">
        <div className="space-y-2">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center">
            <svg className="w-4 h-4 text-industry-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            {isZh ? "Cookie 与隐私保护说明" : "Cookies & Privacy Consent"}
          </h4>
          <p className="text-xs text-industry-slate-400 leading-relaxed">
            {isZh ? (
              <>
                本站仅使用保证表单提交防攻击的**技术性必需 Cookie**。我们不加载任何行为追踪器或第三方广告脚本。查看我们的{" "}
                <Link href="/cookie-policy" className="text-industry-orange hover:underline font-bold">
                  Cookie 政策
                </Link>{" "}
                与{" "}
                <Link href="/privacy" className="text-industry-orange hover:underline font-bold">
                  隐私政策
                </Link>{" "}
                以了解详情。
              </>
            ) : (
              <>
                Our website uses only **strictly necessary technical cookies** to run secure RFQ forms safely and prevent anti-CSRF spam. We do not load third-party behavioral trackers. Review our{" "}
                <Link href="/cookie-policy" className="text-industry-orange hover:underline font-bold">
                  Cookie Policy
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-industry-orange hover:underline font-bold">
                  Privacy Policy
                </Link>{" "}
                for details.
              </>
            )}
          </p>
        </div>
        <div className="flex justify-end space-x-3 pt-2">
          <Link
            href={isZh ? "/zh/privacy" : "/privacy"}
            className="text-[10px] font-bold text-industry-slate-400 hover:text-white uppercase tracking-wider py-2 px-3 border border-industry-slate-800 rounded transition-colors text-center"
          >
            {isZh ? "隐私详情" : "Privacy Policy"}
          </Link>
          <button
            onClick={handleAccept}
            className="text-[10px] font-bold text-white bg-industry-orange hover:bg-industry-orange-hover uppercase tracking-wider py-2 px-4 rounded transition-all-custom cursor-pointer hover:scale-[1.02]"
          >
            {isZh ? "同意并接受" : "Accept & Proceed"}
          </button>
        </div>
      </div>
    </div>
  );
}
