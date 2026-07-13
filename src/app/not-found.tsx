import Link from "next/link";
import BackButton from "@/components/BackButton";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-industry-slate-900 flex-grow justify-center py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-10 rounded-lg border border-industry-slate-800 shadow-2xl space-y-6">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-950/50 border border-amber-800/50 text-amber-400">
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <div>
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase block mb-2">
              ERROR 404
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Page Not Found
            </h1>
          </div>

          <p className="text-sm text-industry-slate-400 leading-relaxed max-w-lg mx-auto">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable.
            Try navigating to one of our main sections below, or <Link href="/contact" className="text-industry-orange hover:underline">contact our sales team</Link> directly for immediate assistance.
          </p>

          <div className="pt-4 border-t border-industry-slate-800/80">
            <p className="text-xs font-bold text-industry-slate-500 uppercase tracking-wider mb-4">Popular Destinations</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <Link href="/products" className="flex flex-col items-center gap-2 rounded-lg border border-industry-slate-800 bg-industry-slate-900/50 p-3 text-xs font-bold text-industry-slate-300 hover:border-industry-orange/50 hover:bg-industry-slate-800/50 hover:text-white transition-colors">
                <svg className="h-5 w-5 text-industry-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                Products
              </Link>
              <Link href="/products/buffing-polishing-wheels" className="flex flex-col items-center gap-2 rounded-lg border border-industry-slate-800 bg-industry-slate-900/50 p-3 text-xs font-bold text-industry-slate-300 hover:border-industry-orange/50 hover:bg-industry-slate-800/50 hover:text-white transition-colors">
                <svg className="h-5 w-5 text-industry-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Buffing Wheels
              </Link>
              <Link href="/products/sanding-grinding-accessories" className="flex flex-col items-center gap-2 rounded-lg border border-industry-slate-800 bg-industry-slate-900/50 p-3 text-xs font-bold text-industry-slate-300 hover:border-industry-orange/50 hover:bg-industry-slate-800/50 hover:text-white transition-colors">
                <svg className="h-5 w-5 text-industry-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                Sanding Discs
              </Link>
              <Link href="/oem-private-label" className="flex flex-col items-center gap-2 rounded-lg border border-industry-slate-800 bg-industry-slate-900/50 p-3 text-xs font-bold text-industry-slate-300 hover:border-industry-orange/50 hover:bg-industry-slate-800/50 hover:text-white transition-colors">
                <svg className="h-5 w-5 text-industry-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                OEM / Private Label
              </Link>
              <Link href="/contact" className="flex flex-col items-center gap-2 rounded-lg border border-industry-slate-800 bg-industry-slate-900/50 p-3 text-xs font-bold text-industry-slate-300 hover:border-industry-orange/50 hover:bg-industry-slate-800/50 hover:text-white transition-colors">
                <svg className="h-5 w-5 text-industry-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Sales
              </Link>
              <Link href="/sample-kit" className="flex flex-col items-center gap-2 rounded-lg border border-industry-slate-800 bg-industry-slate-900/50 p-3 text-xs font-bold text-industry-slate-300 hover:border-industry-orange/50 hover:bg-industry-slate-800/50 hover:text-white transition-colors">
                <svg className="h-5 w-5 text-industry-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                Request Samples
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-industry-slate-800/80 flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="flex-1 inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover transition-colors"
            >
              Back to Home
            </Link>
            <BackButton className="flex-1 inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-slate-700 transition-colors cursor-pointer">
              Go Back
            </BackButton>
          </div>

          <div className="pt-4 text-center">
            <p className="text-xs text-industry-slate-500">
              中文用户请访问：<Link href="/zh" className="text-industry-orange hover:underline">SCOTTCHEN 中文站</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
