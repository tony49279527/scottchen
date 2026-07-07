"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { alternateLocalePath } from "@/lib/site";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname() || "";

  const isZh = pathname === "/zh" || pathname.startsWith("/zh/");
  const prefix = isZh ? "/zh" : "";

  const productLinks = isZh
    ? [
        { name: "全部产品", href: "/zh/products" },
        { name: "抛光轮", href: "/zh/buffing-wheels" },
        { name: "砂纸片/砂碟", href: "/zh/sanding-discs" },
        { name: "百叶片", href: "/zh/flap-discs" },
        { name: "砂带", href: "/zh/sanding-belts" },
        { name: "切割片", href: "/zh/cutting-wheels" },
        { name: "磨具套装", href: "/zh/abrasive-kits" },
      ]
    : [
        { name: "All Products", href: "/products" },
        { name: "Buffing Wheels", href: "/buffing-wheels" },
        { name: "Sanding Discs", href: "/sanding-discs" },
        { name: "Flap Discs", href: "/flap-discs" },
        { name: "Sanding Belts", href: "/sanding-belts" },
        { name: "Cutting Wheels", href: "/cutting-wheels" },
        { name: "Abrasive Kits", href: "/abrasive-kits" },
      ];

  const navItems = isZh
    ? [
        { name: "OEM定制", href: "/zh/oem-private-label" },
        { name: "应用场景", href: "/zh/applications" },
        { name: "质量控制", href: "/zh/quality-control" },
        { name: "采购资源", href: "/zh/resources" },
        { name: "样品申领", href: "/zh/sample-kit" },
        { name: "关于工厂", href: "/zh/china-abrasive-manufacturer" },
        { name: "批发合作", href: "/zh/wholesale-abrasives" },
      ]
    : [
        { name: "OEM Solutions", href: "/oem-private-label" },
        { name: "Applications", href: "/applications" },
        { name: "Quality Control", href: "/quality-control" },
        { name: "Resources", href: "/resources" },
        { name: "Sample Kit", href: "/sample-kit" },
        { name: "Our Factory", href: "/china-abrasive-manufacturer" },
        { name: "Wholesale", href: "/wholesale-abrasives" },
      ];

  const getLanguageToggleLink = (targetLang: "en" | "zh") => {
    return alternateLocalePath(pathname, targetLang);
  };

  const isActive = (path: string) => pathname === path || (path !== "/" && path !== "/zh" && pathname.startsWith(path));

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-industry-slate-800/80 bg-industry-slate-950/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href={isZh ? "/zh" : "/"} className="flex items-center space-x-2">
              <svg
                className="h-8 w-8 text-industry-orange"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="text-xl font-black tracking-wider text-white">
                SCOTT<span className="text-industry-orange">CHEN</span>
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-6" aria-label="Main navigation">
            <Link
              href={`${prefix}/products`}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-white ${
                isActive(`${prefix}/products`) || isActive(`${prefix}/buffing-wheels`) || isActive(`${prefix}/sanding-discs`) || isActive(`${prefix}/flap-discs`) || isActive(`${prefix}/sanding-belts`) || isActive(`${prefix}/cutting-wheels`) || isActive(`${prefix}/abrasive-kits`)
                  ? "text-industry-orange"
                  : "text-industry-slate-400"
              }`}
            >
              {isZh ? "产品" : "Products"}
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-white ${
                  isActive(item.href) ? "text-industry-orange" : "text-industry-slate-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle isZh={isZh} />
            <div className="flex items-center space-x-2 text-xs font-mono border border-industry-slate-800/80 bg-industry-slate-900/60 px-2.5 py-1.5 rounded-md">
              <Link
                href={getLanguageToggleLink("en")}
                className={`transition-colors hover:text-white ${!isZh ? "text-industry-orange font-bold" : "text-industry-slate-400"}`}
              >
                EN
              </Link>
              <span className="text-industry-slate-800">|</span>
              <Link
                href={getLanguageToggleLink("zh")}
                className={`transition-colors hover:text-white ${isZh ? "text-industry-orange font-bold" : "text-industry-slate-400"}`}
              >
                中文
              </Link>
            </div>
            <Link
              href={isZh ? "/zh/contact" : "/contact"}
              className="inline-flex items-center justify-center rounded bg-industry-orange-cta px-5 py-2.5 text-sm font-bold tracking-wide text-white transition-all-custom hover:bg-industry-orange-hover hover:scale-[1.02] shadow-lg shadow-industry-orange/20"
            >
              {isZh ? "在线询盘" : "Request Quote"}
            </Link>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle isZh={isZh} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-industry-slate-400 hover:bg-industry-slate-800 hover:text-white focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isZh ? "打开主导航" : "Open main menu"}
            >
              <span className="sr-only">{isZh ? "打开主导航" : "Open main menu"}</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-navigation" className="md:hidden border-t border-industry-slate-800 bg-industry-slate-950 px-4 pt-2 pb-6 space-y-1">
          <button
            type="button"
            onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
            className={`flex w-full items-center justify-between rounded px-3 py-2 text-base font-medium transition-colors hover:bg-industry-slate-800 hover:text-white ${
              isActive(`${prefix}/products`) ? "text-industry-orange bg-industry-slate-900" : "text-industry-slate-400"
            }`}
          >
            <span>{isZh ? "产品目录" : "Products"}</span>
            <svg
              className={`h-4 w-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileProductsOpen && (
            <div className="pl-4 space-y-1 border-l border-industry-slate-800 ml-3">
              {productLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`block rounded px-3 py-1.5 text-sm transition-colors hover:bg-industry-slate-800 hover:text-white ${
                    isActive(item.href) ? "text-industry-orange" : "text-industry-slate-400"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMobileMenu}
              className={`block rounded px-3 py-2 text-base font-medium transition-colors hover:bg-industry-slate-800 hover:text-white ${
                isActive(item.href) ? "text-industry-orange bg-industry-slate-900" : "text-industry-slate-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-industry-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-industry-slate-500">{isZh ? "切换语言:" : "Language:"}</span>
              <div className="flex items-center space-x-3 text-sm font-mono bg-industry-slate-900 border border-industry-slate-800 px-3 py-1 rounded">
                <Link
                  href={getLanguageToggleLink("en")}
                  onClick={closeMobileMenu}
                  className={`transition-colors hover:text-white ${!isZh ? "text-industry-orange font-bold" : "text-industry-slate-400"}`}
                >
                  EN
                </Link>
                <span className="text-industry-slate-800">|</span>
                <Link
                  href={getLanguageToggleLink("zh")}
                  onClick={closeMobileMenu}
                  className={`transition-colors hover:text-white ${isZh ? "text-industry-orange font-bold" : "text-industry-slate-400"}`}
                >
                  中文
                </Link>
              </div>
            </div>
            <Link
              href={isZh ? "/zh/contact" : "/contact"}
              onClick={closeMobileMenu}
              className="block w-full text-center rounded bg-industry-orange-cta py-3 text-base font-bold text-white transition-colors hover:bg-industry-orange-hover"
            >
              {isZh ? "在线询盘" : "Request Quote"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
