import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-industry-slate-900 flex-grow justify-center py-20">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
        <div className="glass-panel p-8 rounded-lg border border-industry-slate-800 shadow-2xl space-y-6">
          
          {/* Warning Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-950 border border-amber-800 text-amber-400">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>

          <span className="text-xs font-bold tracking-widest text-industry-orange uppercase block">
            404 PAGE NOT FOUND
          </span>
          
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Requested Resource Unavailable
          </h1>
          
          <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed text-left border-t border-industry-slate-850 pt-6">
            <p>
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. 
            </p>
            <p>
              Please verify the URL or navigate back using the actions below to browse our commercial OEM catalog.
            </p>
          </div>

          <div className="pt-6 border-t border-industry-slate-850 flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="flex-1 inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover"
            >
              Catalog Home
            </Link>
            <Link
              href="/products"
              className="flex-1 inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-slate-750"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
