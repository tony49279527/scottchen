"use client";

import { usePathname } from "next/navigation";

export default function DocumentShell({
  children,
  className,
  bodyClassName,
  head,
}: {
  children: React.ReactNode;
  className: string;
  bodyClassName: string;
  head: React.ReactNode;
}) {
  const pathname = usePathname() || "";
  const language = pathname === "/zh" || pathname.startsWith("/zh/") ? "zh-CN" : "en";

  return (
    <html lang={language} className={className}>
      <head>{head}</head>
      <body className={bodyClassName}>{children}</body>
    </html>
  );
}
