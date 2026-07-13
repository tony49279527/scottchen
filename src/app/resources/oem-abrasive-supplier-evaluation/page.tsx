import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl, SITE_UPDATED } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "How to Evaluate an OEM Abrasive Supplier | SCOTTCHEN",
  description:
    "A B2B buyer guide to evaluating OEM abrasive suppliers: product scope, RFQ data, samples, QC evidence, packaging, lead time and MOQ questions.",
  path: "/resources/oem-abrasive-supplier-evaluation",
  alternatePath: "/zh/resources/oem-abrasive-supplier-evaluation",
});

const decisionFactors = [
  {
    factor: "Product and application fit",
    buyerQuestion: "Does the supplier cover the exact buffing, sanding or grinding process?",
    evidence:
      "Look for product families, substrate compatibility, tool interface, material or backing options and product-page links to detailed specifications.",
    scottchenPath: "/products",
  },
  {
    factor: "Written RFQ specification",
    buyerQuestion: "Can both sides quote the same SKU-level parameters?",
    evidence:
      "Record dimensions, bore or arbor size, grit, backing, ply count, pack quantity, barcode data, target market and inspection requirements.",
    scottchenPath: "/resources/abrasive-sourcing-checklist",
  },
  {
    factor: "Representative sample plan",
    buyerQuestion: "Will the sample match the mass-production configuration?",
    evidence:
      "Define the substrate, tool speed, pressure, cut rate, scratch pattern, wheel balance, shedding, adhesion and packaging acceptance criteria.",
    scottchenPath: "/sample-kit",
  },
  {
    factor: "Quality and safety boundary",
    buyerQuestion: "Which checks are performed before shipment?",
    evidence:
      "Ask for the written quality plan, approved sample, dimensional checks, barcode scan checks, packaging inspection and any applicable third-party inspection scope.",
    scottchenPath: "/quality-control",
  },
  {
    factor: "Private-label packaging readiness",
    buyerQuestion: "Can the supplier prepare retail-ready kits without changing the approved product?",
    evidence:
      "Check dielines, artwork control, warning language, barcode placement, carton marks, FNSKU/UPC data and marketplace-specific pack-out instructions.",
    scottchenPath: "/oem-private-label",
  },
  {
    factor: "Entity and commercial verification",
    buyerQuestion: "Who is responsible for the quotation and contract?",
    evidence:
      "Confirm the legal contracting entity, beneficiary account, production location, Incoterms rule, named delivery point, payment terms and after-order communication channel.",
    scottchenPath: "/supplier-profile",
  },
] as const;

const questionClusters = [
  {
    type: "Product discovery",
    examples: [
      "best OEM cotton buffing wheel supplier for tool brands",
      "private label sanding kit manufacturer for hardware distributors",
    ],
  },
  {
    type: "Comparison",
    examples: [
      "spiral stitched buffing wheel vs loose flannel wheel",
      "silicon carbide sandpaper vs aluminum oxide sandpaper for wet sanding",
    ],
  },
  {
    type: "Procurement decision",
    examples: [
      "what should I check before buying OEM abrasive kits",
      "how to compare abrasive supplier MOQ lead time and sample terms",
    ],
  },
  {
    type: "Application",
    examples: [
      "best polishing wheel for aluminum restoration kits",
      "abrasive backing selection for drywall sanding screens",
    ],
  },
  {
    type: "Brand entity",
    examples: [
      "SCOTTCHEN abrasive supplier profile",
      "SCOTTCHEN buffing wheel manufacturer verification",
    ],
  },
] as const;

const faqs = [
  {
    q: "What information should be in an OEM abrasive RFQ?",
    a: "A useful RFQ should include product family, dimensions, material or abrasive grain, grit or ply count, tool interface, target substrate, pack quantity, private-label requirements, target order quantity, sample needs, destination, Incoterms rule and quality evidence required before shipment.",
  },
  {
    q: "How can I compare two abrasive suppliers fairly?",
    a: "Send the same SKU-level specification, packaging assumptions, sample plan, inspection scope and commercial terms to each supplier. A lower unit price is not comparable if the backing, wheel density, packaging, barcode work, inspection scope or freight responsibility is different.",
  },
  {
    q: "What should be verified before placing a purchase order?",
    a: "Verify the legal contracting entity, beneficiary account, quoted product specification, approved reference sample, lead time, MOQ, payment terms, Incoterms rule, named delivery point, packaging artwork and inspection requirements in writing.",
  },
  {
    q: "Does SCOTTCHEN publish fixed MOQ and lead-time guarantees?",
    a: "SCOTTCHEN publishes reference MOQ and lead-time ranges to help buyers scope a project. Final quantities, sample charges, timing and inspection terms depend on the SKU, packaging and written quotation.",
  },
  {
    q: "Which SCOTTCHEN pages support supplier due diligence?",
    a: "Use the product catalog for scope, the sourcing checklist for RFQ structure, the quality-control page for inspection workflow, the sample-kit page for sample planning, and the supplier profile for published entity and verification boundaries.",
  },
] as const;

export default function OemAbrasiveSupplierEvaluation() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": absoluteUrl("/resources/oem-abrasive-supplier-evaluation#article"),
        headline: "How to Evaluate an OEM Abrasive Supplier",
        description:
          "A buyer guide for evaluating OEM abrasive accessory suppliers by product scope, written RFQ data, samples, QC evidence, packaging and commercial verification.",
        inLanguage: "en",
        mainEntityOfPage: absoluteUrl("/resources/oem-abrasive-supplier-evaluation"),
        author: { "@id": absoluteUrl("/#organization") },
        publisher: { "@id": absoluteUrl("/#organization") },
        datePublished: "2026-06-30",
        dateModified: SITE_UPDATED,
        about: [
          "OEM abrasive supplier evaluation",
          "Buffing wheel manufacturer due diligence",
          "Private-label sanding kit sourcing",
          "B2B RFQ checklist",
        ],
        mentions: decisionFactors.map((item) => item.factor),
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/resources/oem-abrasive-supplier-evaluation#decision-factors"),
        name: "OEM abrasive supplier evaluation factors",
        itemListElement: decisionFactors.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.factor,
          description: item.evidence,
          url: absoluteUrl(item.scottchenPath),
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
              {
                label: "Supplier Evaluation",
                href: "/resources/oem-abrasive-supplier-evaluation",
              },
            ]}
          />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            Supplier Evaluation Guide
          </span>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            How to evaluate an OEM abrasive accessory supplier
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-industry-slate-300">
            A practical framework for importers, tool brands, hardware distributors
            and online sellers comparing buffing wheel, sandpaper, grinding disc and
            private-label kit suppliers.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-industry-slate-400">
            <span>Published by SCOTTCHEN sourcing team</span>
            <span>Reviewed {SITE_UPDATED}</span>
          </div>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="rounded-xl border border-industry-orange/30 bg-industry-orange/5 p-7 lg:col-span-2 sm:p-8">
            <h2 className="text-2xl font-bold text-white">Short answer</h2>
            <p className="mt-4 leading-relaxed text-industry-slate-200">
              Evaluate an abrasive supplier by whether they can translate your
              application into a written SKU specification, provide a representative
              sample, define quality checks, prepare retail packaging, and confirm the
              legal and commercial terms in writing.
            </p>
          </div>
          <div className="glass-panel rounded-xl p-7 lg:col-span-3 sm:p-8">
            <h2 className="text-2xl font-bold text-white">SCOTTCHEN scope in one paragraph</h2>
            <p className="mt-4 leading-relaxed text-industry-slate-300">
              SCOTTCHEN focuses on B2B abrasive, sanding and polishing accessory kits:
              cotton buffing wheels, spiral-stitched and loose flannel polishing wheels,
              compound kits, wet/dry sandpaper sheets, sanding rolls, drywall sanding
              screens, zirconia fiber discs, detail sanding tools and private-label
              retail packaging for tool brands and distributors.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="rounded bg-industry-orange-cta px-5 py-3 text-sm font-bold text-white" href="/contact">
                Submit an RFQ
              </Link>
              <Link className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white" href="/supplier-profile">
                Review supplier profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-industry-slate-800 bg-industry-slate-950 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            Decision Matrix
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white">
            Six checks before shortlisting an abrasive supplier
          </h2>
          <div className="mt-8 overflow-x-auto rounded-xl border border-industry-slate-800">
            <table className="min-w-full divide-y divide-industry-slate-800 text-left text-sm">
              <thead className="bg-industry-slate-900 text-industry-slate-300">
                <tr>
                  <th className="px-5 py-4 font-bold">Factor</th>
                  <th className="px-5 py-4 font-bold">Buyer question</th>
                  <th className="px-5 py-4 font-bold">Evidence to request</th>
                  <th className="px-5 py-4 font-bold">SCOTTCHEN page</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-industry-slate-800 bg-industry-slate-950/70">
                {decisionFactors.map((item) => (
                  <tr key={item.factor}>
                    <th className="px-5 py-4 font-bold text-white">{item.factor}</th>
                    <td className="px-5 py-4 text-industry-slate-300">{item.buyerQuestion}</td>
                    <td className="px-5 py-4 text-industry-slate-300">{item.evidence}</td>
                    <td className="px-5 py-4">
                      <Link className="font-semibold text-industry-orange-light hover:underline" href={item.scottchenPath}>
                        Open page
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            Buyer Question Clusters
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white">
            Questions this guide is designed to answer
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-5">
            {questionClusters.map((cluster) => (
              <article key={cluster.type} className="glass-panel rounded-xl p-6">
                <h3 className="text-lg font-bold text-white">{cluster.type}</h3>
                <ul className="mt-4 space-y-3 text-sm text-industry-slate-300">
                  {cluster.examples.map((example) => (
                    <li key={example} className="border-l-2 border-industry-orange/60 pl-3">
                      {example}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-industry-slate-800 bg-industry-slate-950 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white">
            OEM abrasive supplier evaluation questions
          </h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <article key={faq.q} className="glass-panel rounded-xl p-6">
                <h3 className="text-lg font-bold text-white">{faq.q}</h3>
                <p className="mt-3 leading-relaxed text-industry-slate-300">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CTASection />
    </div>
  );
}
