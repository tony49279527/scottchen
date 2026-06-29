import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Thank You for Your Inquiry | SCOTTCHEN",
  description: "Your SCOTTCHEN B2B inquiry has been received.",
  path: "/thank-you",
  alternatePath: "/zh/thank-you",
  noIndex: true,
});

export default function ThankYou() {
  return (
    <div className="flex flex-col min-h-screen bg-industry-slate-900 flex-grow justify-center py-20">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
        <div className="glass-panel p-8 rounded-lg border border-industry-slate-800 shadow-2xl space-y-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Thank You", href: "/thank-you" }]} />
          
          {/* Success Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <span className="text-xs font-bold tracking-widest text-industry-orange uppercase block">
            INQUIRY RECEIVED SUCCESSFULLY
          </span>
          
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Thank You For Your Request
          </h1>
          
          <div className="space-y-4 text-sm text-industry-slate-350 leading-relaxed text-left border-t border-industry-slate-850 pt-6">
            <p>
              We have successfully received your business details and custom specifications.
            </p>
            <p>
              <strong>What happens next?</strong>
            </p>
            <ul className="space-y-2 pl-4 list-disc text-xs text-industry-slate-400 font-mono">
              <li>
                <strong>Specification Review:</strong> The submitted sizing, grit assortment, backing and tool interface are reviewed before a configuration is quoted.
              </li>
              <li>
                <strong>B2B Quote Generation:</strong> We compile bulk contract options, packaging toolings cost, and lead times.
              </li>
              <li>
                <strong>Contact:</strong> We typically reply to the email provided within <strong>one business day</strong>.
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-industry-slate-850 flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="flex-1 inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover"
            >
              Return to Catalog Home
            </Link>
            <Link
              href="/products"
              className="flex-1 inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-slate-750"
            >
              Browse Specifications
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
