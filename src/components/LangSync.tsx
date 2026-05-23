"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LangSync() {
  const pathname = usePathname() || "";

  useEffect(() => {
    document.documentElement.lang =
      pathname === "/zh" || pathname.startsWith("/zh/") ? "zh-CN" : "en";
  }, [pathname]);

  return null;
}

