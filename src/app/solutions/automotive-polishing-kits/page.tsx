import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import DecisionGuides from "@/components/DecisionGuides";
import { createPageMetadata } from "@/lib/seo";
import { buildFaqPageSchema } from "@/lib/schema";
import { absoluteUrl, SITE_UPDATED } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Automotive Polishing Kits for Aftermarket Brands | SCOTTCHEN",
  description:
    "Source private-label automotive polishing kits for wheel and metal restoration. Configure wheels, compounds, adapters, packaging and sample approval.",
  path: "/solutions/automotive-polishing-kits",
});

const kitBlocks = [
  {
    title: "Cut and surface preparation",
    body: "Define the substrate and starting condition before selecting wet/dry abrasives, sanding shapes or the first cutting compound.",
  },
  {
    title: "Drill-mounted access",
    body: "Specify the tool interface and working area for cone, cylinder, mushroom or wheel shapes used around spokes, lips and recessed surfaces.",
  },
  {
    title: "Finish progression",
    body: "Pair wheel construction and compounds to the intended cut-to-color sequence, then validate the sequence on the buyer's target substrate.",
  },
  {
    title: "Packaging approval plan",
    body: "Confirm component map, instructions, warnings, buyer-supplied barcode data, carton marks and sample scan checks in the approved pack specification.",
  },
] as const;

const faqs = [
  {
    q: "What can an automotive wheel polishing kit include?",
    a: "A scoped kit can combine drill-mounted cotton shapes, bench-grinder wheels, matched compounds, wet/dry abrasives, adapters and buyer-approved instructions. Final contents depend on the target workflow.",
  },
  {
    q: "Can automotive polishing kits use private-label packaging?",
    a: "Yes. Color boxes, blister formats, inserts, warnings and buyer-supplied barcode data can be discussed and confirmed in the approved packaging specification.",
  },
  {
    q: "What is the MOQ for a custom automotive polishing kit?",
    a: "MOQ depends on the selected components, packaging, print process, tooling and order quantity. It is confirmed in a dated written quotation after the kit specification is reviewed.",
  },
  {
    q: "How should an automotive polishing kit be validated?",
    a: "Test the proposed sequence on the intended substrate and tool. Record component identity, fit, finish result, packaging contents and acceptance criteria before production approval.",
  },
] as const;

export default function AutomotivePolishingKitsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/solutions/automotive-polishing-kits#webpage"),
        url: absoluteUrl("/solutions/automotive-polishing-kits"),
        name: "Automotive Polishing Kits for Aftermarket Brands",
        description: "A B2B private-label solution page for automotive wheel and metal polishing kits.",
        inLanguage: "en",
        dateModified: SITE_UPDATED,
        isPartOf: { "@id": absoluteUrl("/#website") },
        about: { "@id": absoluteUrl("/#organization") },
      },
      {
        "@type": "Service",
        "@id": absoluteUrl("/solutions/automotive-polishing-kits#service"),
        name: "Private-label automotive polishing kit sourcing",
        description:
          "B2B sourcing and sample-approval support for configurable automotive polishing kits that combine polishing wheels, compounds, adapters, abrasives and retail packaging.",
        serviceType: "Private-label automotive polishing kit development",
        provider: { "@id": absoluteUrl("/#organization") },
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Automotive aftermarket brands, retailers and distributors",
        },
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
              { label: "Automotive polishing kits", href: "/solutions/automotive-polishing-kits" },
            ]}
          />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            Automotive Aftermarket Solution
          </span>
          <h1 className="mt-3 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Private-label automotive polishing kits for aftermarket brands
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-industry-slate-300">
            Build a wheel and metal polishing kit around a defined substrate, tool and
            finish sequence, then approve samples and packaging before production.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/sample-kit" className="rounded bg-industry-orange-cta px-6 py-3 text-sm font-bold text-white">
              Request a sample kit
            </Link>
            <Link href="/contact" className="rounded border border-industry-slate-700 px-6 py-3 text-sm font-bold text-white">
              Get a written quote
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white">Common aftermarket kit challenges</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Unclear compatibility", "Tool interface, wheel diameter, shank and working area must be explicit."],
              ["Incomplete sequence", "A kit needs a logical preparation, cutting and finishing progression."],
              ["Substrate mismatch", "Aluminum, chrome-plated and ferrous parts require different validation."],
              ["Pack ambiguity", "Component maps, instructions and labels must match the approved physical kit."],
            ].map(([title, body]) => (
              <article key={title} className="glass-panel rounded-lg p-6">
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-industry-slate-400">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-industry-slate-800 bg-industry-slate-950 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white">How the kit specification is built</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {kitBlocks.map((block) => (
              <article key={block.title} className="glass-panel rounded-lg p-7">
                <h3 className="text-lg font-bold text-industry-orange-light">{block.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-industry-slate-300">{block.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/products/buffing-polishing-wheels" className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white">
              Review wheel options
            </Link>
            <Link href="/quality-control" className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white">
              Plan acceptance checks
            </Link>
            <Link href="/oem-private-label" className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white">
              Review private-label workflow
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold text-white">Evidence before a production order</h2>
              <p className="mt-4 text-sm leading-relaxed text-industry-slate-400">
                This page does not claim a universal finish result. The buyer should approve
                the actual sample sequence on the intended substrate and tool.
              </p>
            </div>
            <ol className="space-y-4 text-sm text-industry-slate-300">
              <li className="glass-panel rounded-lg p-5"><strong className="text-white">1. Product sample:</strong> verify fit, sequence and finish on the target part.</li>
              <li className="glass-panel rounded-lg p-5"><strong className="text-white">2. Pack sample:</strong> verify quantities, labels, instructions and barcode data.</li>
              <li className="glass-panel rounded-lg p-5"><strong className="text-white">3. Written quality plan:</strong> confirm inspection items, sampling and acceptance criteria.</li>
              <li className="glass-panel rounded-lg p-5"><strong className="text-white">4. Written quotation:</strong> confirm MOQ, lead-time assumptions, Incoterms and exclusions.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-industry-slate-800 bg-industry-slate-950 py-16">
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
        title="Build an automotive polishing kit sample brief"
        subtitle="Share the target substrate, tool, finish sequence, quantity and packaging format. We will confirm the sample and quotation path."
      />
    </div>
  );
}
