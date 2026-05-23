"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname() || "";

  const navItems = [
    { name: "Products", href: "/products" },
    { name: "OEM Solutions", href: "/oem-private-label" },
    { name: "Applications", href: "/applications" },
    { name: "Quality Control", href: "/quality-control" },
    { name: "Sample Kit", href: "/sample-kit" },
  ];

  const isActive = (path: string) => pathname === path || (path !== "/" && pathname.startsWith(path));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-industry-slate-800/80 bg-industry-slate-950/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
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

          {/* CTA & Contact info */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded bg-industry-orange px-5 py-2.5 text-sm font-bold tracking-wide text-white transition-all-custom hover:bg-industry-orange-hover hover:scale-[1.02] shadow-lg shadow-industry-orange/20"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-industry-slate-400 hover:bg-industry-slate-800 hover:text-white focus:outline-none"
              aria-expanded={mobileMenuOpen}
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
        <div className="md:hidden border-t border-industry-slate-800 bg-industry-slate-950 px-4 pt-2 pb-6 space-y-3">
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
          <div className="pt-4 border-t border-industry-slate-850">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center rounded bg-industry-orange py-3 text-base font-bold text-white transition-colors hover:bg-industry-orange-hover"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
