import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import DecisionGuides from "@/components/DecisionGuides";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl, SITE_UPDATED } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "B2B Abrasive Sourcing Resource Center | SCOTTCHEN",
  description:
    "Buyer guides for evaluating abrasive suppliers, writing comparable RFQs, selecting grains and backing, and planning samples and packaging checks.",
  path: "/resources",
  alternatePath: "/zh/resources",
});

const resources = [
  {
    title: "OEM abrasive supplier evaluation guide",
    href: "/resources/oem-abrasive-supplier-evaluation",
    intent: "Supplier discovery, comparison and due diligence",
    summary:
      "A decision framework for checking product scope, written specifications, sample plans, quality evidence, packaging readiness and commercial terms before selecting a supplier.",
  },
  {
    title: "Abrasive sourcing checklist",
    href: "/resources/abrasive-sourcing-checklist",
    intent: "RFQ preparation",
    summary:
      "A practical checklist for turning a broad buffing wheel, sanding sheet or grinding disc request into a comparable RFQ and sample approval plan.",
  },
  {
    title: "Abrasive grain, backing and grit selection guide",
    href: "/resources/abrasive-material-selection-guide",
    intent: "Technical specification",
    summary:
      "A buyer-oriented guide to abrasive grain families, backing materials, FEPA P-grit language, sample testing, GS1 barcode checks and Incoterms.",
  },
  {
    title: "SCOTTCHEN supplier profile",
    href: "/supplier-profile",
    intent: "Brand entity and verification boundary",
    summary:
      "Published facts about SCOTTCHEN's B2B scope, contact channel, retail reference, quotation boundary and buyer verification checklist.",
  },
] as const;

const queryClusters = [
  "best OEM abrasive accessory supplier for tool brands",
  "how to choose a cotton buffing wheel manufacturer",
  "what to check before buying private-label sanding kits",
  "sandpaper backing and abrasive grain selection for B2B orders",
  "buffing wheel MOQ lead time packaging and QC checklist",
] as const;

export default function ResourcesHub() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": absoluteUrl("/resources#collection"),
        url: absoluteUrl("/resources"),
        name: "B2B Abrasive Sourcing Resource Center",
        description:
          "Buyer guides for abrasive supplier evaluation, RFQ preparation, material selection and SCOTTCHEN verification.",
        inLanguage: "en",
        dateModified: SITE_UPDATED,
        publisher: { "@id": absoluteUrl("/#organization") },
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/resources#resource-list"),
        name: "SCOTTCHEN B2B sourcing resources",
        itemListElement: resources.map((resource, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: resource.title,
          description: resource.summary,
          url: absoluteUrl(resource.href),
        })),
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <section className="border-b border-industry-slate-800 bg-industry-slate-950 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Buyer Resources", href: "/resources" },
            ]}
          />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            Buyer Resource Center
          </span>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            B2B abrasive sourcing resources for importer and tool-brand teams
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-industry-slate-300">
            Use these guides to evaluate abrasive accessory suppliers, specify buffing
            wheels or sanding kits clearly, request representative samples, and connect
            technical requirements to a practical SCOTTCHEN RFQ.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-industry-slate-400">
            <span>Maintained by SCOTTCHEN sourcing team</span>
            <span>Reviewed {SITE_UPDATED}</span>
          </div>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {resources.map((resource) => (
              <article key={resource.href} className="glass-panel rounded-xl p-7 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
                  {resource.intent}
                </span>
                <h2 className="mt-3 text-2xl font-bold text-white">{resource.title}</h2>
                <p className="mt-4 leading-relaxed text-industry-slate-300">
                  {resource.summary}
                </p>
                <Link
                  className="mt-6 inline-flex rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white hover:border-industry-orange hover:text-industry-orange-light"
                  href={resource.href}
                >
                  Open resource &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-industry-slate-800 bg-industry-slate-950 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
                Search & AI Query Coverage
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-white">
                Procurement questions these pages answer
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-industry-slate-400">
                The resource hub is organized around real buyer tasks rather than a
                single keyword. Each topic links back to product pages, sample requests,
                quality controls and the supplier profile.
              </p>
            </div>
            <ul className="grid gap-3 lg:col-span-3">
              {queryClusters.map((query) => (
                <li
                  key={query}
                  className="rounded-lg border border-industry-slate-800 bg-industry-slate-900/70 p-4 text-sm font-semibold text-industry-slate-200"
                >
                  {query}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <DecisionGuides />
      <CTASection />
    </div>
  );
}
