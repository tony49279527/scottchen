import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import DecisionGuides from "@/components/DecisionGuides";
import { createPageMetadata } from "@/lib/seo";
import { buildFaqPageSchema } from "@/lib/schema";
import { absoluteUrl, SITE_UPDATED } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Abrasive Kit Sourcing Alternatives for B2B | SCOTTCHEN",
  description:
    "Compare factory-direct OEM, distributors, trading companies, contract packers and in-house assembly. Choose a sourcing model, then request a scoped quote.",
  path: "/alternatives/abrasive-kit-sourcing-alternatives",
});

const models = [
  {
    name: "Factory-direct OEM",
    cost: "Quoted to specification",
    minimum: "Often production MOQ; SCOTTCHEN kit RFQs commonly start at 500 sets",
    control: "High product, assortment and packaging control",
    bestFor: "Brands with repeat demand and a defined private-label brief",
  },
  {
    name: "Industrial distributor",
    cost: "Published or account pricing",
    minimum: "Often lower case quantities",
    control: "Low; existing brands and packs",
    bestFor: "Fast replenishment and product validation before customization",
  },
  {
    name: "Trading company",
    cost: "Quoted across multiple factories",
    minimum: "Varies by source and consolidation plan",
    control: "Medium; verify factory and inspection ownership",
    bestFor: "Mixed categories that one factory cannot supply",
  },
  {
    name: "Contract packer",
    cost: "Components plus assembly and packaging",
    minimum: "Varies by labor, tooling and print method",
    control: "High pack control; components sourced separately",
    bestFor: "Buyers that already own component supply relationships",
  },
  {
    name: "In-house assembly",
    cost: "Components, labor, inventory and compliance overhead",
    minimum: "Flexible, limited by component case quantities",
    control: "Highest; buyer owns assembly and release checks",
    bestFor: "Pilot launches or teams with local kitting capacity",
  },
] as const;

const faqs = [
  {
    q: "What is the best alternative to factory-direct abrasive kit sourcing?",
    a: "A distributor is usually the fastest alternative for low-volume validation. A contract packer or in-house assembly gives more pack control when the buyer already has approved component suppliers.",
  },
  {
    q: "When does a factory-direct OEM abrasive kit make sense?",
    a: "Factory-direct OEM fits repeat B2B demand where the buyer needs a controlled assortment, private-label packaging, written specifications and a repeatable sample-to-production process.",
  },
  {
    q: "How should buyers compare sourcing quotations?",
    a: "Use the same SKU list, materials, sizes, packaging artwork, labeling, inspection scope, Incoterms and destination assumptions. Exclude any item that is not confirmed in writing.",
  },
  {
    q: "Does SCOTTCHEN publish fixed abrasive kit pricing?",
    a: "No. Pricing depends on the selected components, quantity, packaging, print process, inspection scope and shipping assumptions. SCOTTCHEN confirms these items in a written quotation.",
  },
] as const;

export default function AbrasiveKitSourcingAlternativesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/alternatives/abrasive-kit-sourcing-alternatives#webpage"),
        url: absoluteUrl("/alternatives/abrasive-kit-sourcing-alternatives"),
        name: "Abrasive Kit Sourcing Alternatives for B2B",
        description: "A buyer comparison of five abrasive accessory kit sourcing models.",
        inLanguage: "en",
        dateModified: SITE_UPDATED,
        isPartOf: { "@id": absoluteUrl("/#website") },
        about: { "@id": absoluteUrl("/#organization") },
      },
      buildFaqPageSchema(faqs),
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <section className="border-b border-industry-slate-800 bg-industry-slate-950 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Sourcing alternatives", href: "/alternatives/abrasive-kit-sourcing-alternatives" },
            ]}
          />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            B2B Sourcing Alternatives
          </span>
          <h1 className="mt-3 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Five abrasive kit sourcing alternatives for B2B buyers
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-industry-slate-300">
            Factory-direct OEM is best for repeat private-label programs; distributors
            are faster for small trials. Compare all five models before issuing an RFQ.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded bg-industry-orange-cta px-6 py-3 text-sm font-bold text-white">
              Request a scoped quote
            </Link>
            <Link href="/resources/abrasive-sourcing-checklist" className="rounded border border-industry-slate-700 px-6 py-3 text-sm font-bold text-white">
              Open RFQ checklist
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white">Sourcing model comparison</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-industry-slate-400">
            Cost and minimums are not directly comparable until every supplier quotes the
            same assortment, quality plan, packaging and shipping assumptions.
          </p>
          <div className="mt-8 overflow-x-auto rounded border border-industry-slate-800">
            <table className="min-w-[900px] w-full text-left text-sm">
              <thead className="bg-industry-slate-950 text-industry-slate-300">
                <tr>
                  {['Sourcing model', 'Pricing basis', 'Minimum', 'Buyer control', 'Best fit'].map((heading) => (
                    <th key={heading} className="px-4 py-4 font-bold">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-industry-slate-800 bg-industry-slate-900 text-industry-slate-300">
                {models.map((model) => (
                  <tr key={model.name}>
                    <th className="px-4 py-4 font-bold text-white">{model.name}</th>
                    <td className="px-4 py-4">{model.cost}</td>
                    <td className="px-4 py-4">{model.minimum}</td>
                    <td className="px-4 py-4">{model.control}</td>
                    <td className="px-4 py-4">{model.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-y border-industry-slate-800 bg-industry-slate-950 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["1. Define the decision", "Confirm whether the launch needs speed, private-label control, mixed-category consolidation or local assembly flexibility."],
            ["2. Normalize the RFQ", "Give every candidate the same product list, target quantities, packaging files, acceptance criteria and destination assumptions."],
            ["3. Verify before award", "Review samples, factory or supplier identity, quality evidence, payment beneficiary and written commercial terms before a purchase order."],
          ].map(([title, body]) => (
            <article key={title} className="glass-panel rounded-lg p-6">
              <h2 className="text-lg font-bold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-industry-slate-400">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white">Frequently asked questions</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <article key={faq.q} className="glass-panel rounded-lg p-6">
                <h3 className="font-bold text-white">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-industry-slate-400">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <DecisionGuides />
      <CTASection
        title="Need a factory-direct OEM quotation?"
        subtitle="Share the target assortment, quantity, packaging and destination. We will confirm scope, MOQ and commercial assumptions in writing."
      />
    </div>
  );
}
