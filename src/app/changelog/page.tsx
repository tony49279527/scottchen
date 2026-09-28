import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Website Changelog | SCOTTCHEN",
  description:
    "Dated record of substantive changes to the SCOTTCHEN website: SEO fixes, page updates and policy changes.",
  path: "/changelog",
  alternatePath: "/zh/changelog",
});

const entries = [
  {
    date: "2026-09-28",
    items: [
      "Title-tag CTR experiments started on /sanding-discs, /wholesale-abrasives and /china-abrasive-manufacturer (title only; descriptions, URLs and page bodies unchanged).",
      "Published this changelog page.",
    ],
  },
  {
    date: "2026-09-26",
    items: [
      "SEO maintenance from v2.1 audit: removed ?from= internal tracking parameters from CTAs site-wide (attribution now via session storage with referrer fallback).",
      "Fixed Chinese H1 separators on category pages.",
      "Sitemap lastmod is now derived from git at build time instead of stale manual dates.",
    ],
  },
  {
    date: "2026-09-23",
    items: [
      "Corrected Product schema to CollectionPage and four other minor schema fixes across 16 pages.",
    ],
  },
  {
    date: "2026-09-15",
    items: [
      "Not-found responses now return noindex.",
      "B2B discovery and route fixes; product inquiry attribution preserved.",
      "Sourcing entity and attribution clarified across buyer-facing pages.",
    ],
  },
  {
    date: "2026-09-08",
    items: ["Refined B2B product discovery and category navigation."],
  },
  {
    date: "2026-08-29",
    items: [
      "Strengthened B2B RFQ evidence paths and RFQ landing pages.",
      "Improved wholesale disclaimer contrast (accessibility).",
    ],
  },
  {
    date: "2026-08-22",
    items: ["Fixed B2B discovery and routes."],
  },
  {
    date: "2026-08-12",
    items: ["Preserved inquiry source on intent pages."],
  },
];

export default function ChangelogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Changelog", href: "/changelog" },
            ]}
          />
          <h1 className="mt-6 text-4xl font-bold text-white">
            Website Changelog
          </h1>
          <p className="mt-4 max-w-2xl text-industry-slate-300">
            A dated record of substantive changes to this website. Cosmetic
            edits are not listed; every entry below corresponds to a deployed
            change.
          </p>
        </div>
      </section>

      <section className="bg-industry-slate-950 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {entries.map((entry) => (
              <div key={entry.date}>
                <h2 className="text-xl font-semibold text-white">
                  {entry.date}
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-industry-slate-300">
                  {entry.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-12 text-sm text-industry-slate-500">
            Looking for product or sourcing information instead?{" "}
            <Link href="/" className="underline">
              Start from the home page
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
