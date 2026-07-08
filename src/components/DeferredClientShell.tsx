"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const analyticsEnabled = Boolean(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);

const Analytics = dynamic(() => import("@/components/Analytics"), { ssr: false });
const AttributionTracker = dynamic(() => import("@/components/AttributionTracker"), { ssr: false });
const CookieConsent = dynamic(() => import("@/components/CookieConsent"), { ssr: false });

function scheduleIdle(callback: () => void) {
  const scheduler = window as Window &
    typeof globalThis & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

  if (typeof scheduler.requestIdleCallback === "function") {
    const handle = scheduler.requestIdleCallback(callback, { timeout: 2500 });
    return () => scheduler.cancelIdleCallback?.(handle);
  }

  const handle = globalThis.setTimeout(callback, 1200);
  return () => globalThis.clearTimeout(handle);
}

export default function DeferredClientShell() {
  const [ready, setReady] = useState(false);

  useEffect(() => scheduleIdle(() => setReady(true)), []);

  if (!ready) return null;

  return (
    <>
      <AttributionTracker />
      {analyticsEnabled ? (
        <>
          <Analytics />
          <CookieConsent />
        </>
      ) : null}
    </>
  );
}
