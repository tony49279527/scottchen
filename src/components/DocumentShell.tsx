"use client";

import { usePathname } from "next/navigation";

const themeInitScript = `
  (function () {
    try {
      var storedTheme = localStorage.getItem("scottchen-theme");
      var theme = storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch (error) {
      var fallbackTheme = window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
      document.documentElement.dataset.theme = fallbackTheme;
      document.documentElement.style.colorScheme = fallbackTheme;
    }
  })();
`;

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
    <html lang={language} className={className} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {head}
      </head>
      <body className={bodyClassName}>{children}</body>
    </html>
  );
}
