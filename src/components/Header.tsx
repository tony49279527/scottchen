"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { alternateLocalePath } from "@/lib/site";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname() || "";

  const isZh = pathname === "/zh" || pathname.startsWith("/zh/");

  const navItems = isZh
    ? [
        { name: "产品目录", href: "/zh/products" },
        { name: "OEM定制", href: "/zh/oem-private-label" },
        { name: "应用场景", href: "/zh/applications" },
        { name: "质量控制", href: "/zh/quality-control" },
        { name: "样品申领", href: "/zh/sample-kit" },
      ]
    : [
        { name: "Products", href: "/products" },
        { name: "OEM Solutions", href: "/oem-private-label" },
        { name: "Applications", href: "/applications" },
        { name: "Quality Control", href: "/quality-control" },
        { name: "Sample Kit", href: "/sample-kit" },
      ];

  const getLanguageToggleLink = (targetLang: "en" | "zh") => {
    return alternateLocalePath(pathname, targetLang);
  };

  const isActive = (path: string) => pathname === path || (path !== "/" && pathname.startsWith(path));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-industry-slate-800/80 bg-industry-slate-950/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
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

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-8" aria-label="Main navigation">
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

          {/* CTA & Contact info & Lang Switcher */}
          <div className="hidden md:flex items-center space-x-6">
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

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-industry-slate-400 hover:bg-industry-slate-800 hover:text-white focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isZh ? "打开主导航" : "Open main menu"}
            >
              <span className="sr-only">Open main menu</span>
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="md:hidden border-t border-industry-slate-800 bg-industry-slate-950 px-4 pt-2 pb-6 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block rounded px-3 py-2 text-base font-medium transition-colors hover:bg-industry-slate-800 hover:text-white ${
                isActive(item.href) ? "text-industry-orange bg-industry-slate-900" : "text-industry-slate-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-industry-slate-850 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-industry-slate-500">{isZh ? "切换语言:" : "Language:"}</span>
              <div className="flex items-center space-x-3 text-sm font-mono bg-industry-slate-900 border border-industry-slate-800 px-3 py-1 rounded">
                <Link
                  href={getLanguageToggleLink("en")}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors hover:text-white ${!isZh ? "text-industry-orange font-bold" : "text-industry-slate-400"}`}
                >
                  EN
                </Link>
                <span className="text-industry-slate-800">|</span>
                <Link
                  href={getLanguageToggleLink("zh")}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors hover:text-white ${isZh ? "text-industry-orange font-bold" : "text-industry-slate-400"}`}
                >
                  中文
                </Link>
              </div>
            </div>
            <Link
              href={isZh ? "/zh/contact" : "/contact"}
              onClick={() => setMobileMenuOpen(false)}
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
