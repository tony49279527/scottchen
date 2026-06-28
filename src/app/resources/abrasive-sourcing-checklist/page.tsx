import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl, SITE_UPDATED } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Abrasive Sourcing Checklist for Importers | SCOTTCHEN",
  description:
    "A practical RFQ checklist for sourcing buffing wheels, sandpaper, grinding discs and private label kits: specifications, samples, QC, packaging and shipping.",
  path: "/resources/abrasive-sourcing-checklist",
  alternatePath: "/zh/resources/abrasive-sourcing-checklist",
});

const sections = [
  {
    number: "01",
    title: "Define the working application",
    body: "Start with the substrate, tool type, operating speed and required finish. The same diameter accessory can perform very differently when backing weight, wheel density, grain type or compound pairing changes.",
    checks: [
      "Substrate: carbon steel, stainless, aluminum, wood, paint, drywall or composite",
      "Tool interface: bench grinder, angle grinder, drill, orbital sander or hand sanding",
      "Process stage: stock removal, leveling, scratch refinement, coloring or mirror polish",
    ],
  },
  {
    number: "02",
    title: "Lock the technical specification",
    body: "Ask suppliers to quote against a written specification rather than a product photo alone. Record dimensions and tolerances in the approved sample or specification sheet.",
    checks: [
      "Dimensions, arbor or bore size, ply count, backing material and grit range",
      "Maximum operating speed and compatibility with the intended power tool",
      "Pack quantity, assortment mix, replacement components and labeling requirements",
    ],
  },
  {
    number: "03",
    title: "Build a representative sample plan",
    body: "A useful sample should represent the production configuration, not only an off-the-shelf substitute. Test it on the actual substrate and document the acceptance criteria before approving mass production.",
    checks: [
      "Compare cut rate, scratch consistency, heat generation and useful life",
      "Check wheel runout, balance, shedding, backing adhesion and dimensional fit",
      "Keep one approved reference sample for incoming inspection comparison",
    ],
  },
  {
    number: "04",
    title: "Specify packaging and compliance",
    body: "Packaging is part of the product for retail and ecommerce programs. Confirm dielines, barcode placement, warnings, country-of-origin marking and carton configuration before printing.",
    checks: [
      "Retail format: color box, blister, polybag, dispenser box or bulk carton",
      "Barcode type and quiet zone, instruction language and required safety information",
      "Master carton quantity, dimensions, gross weight and pallet requirements",
    ],
  },
  {
    number: "05",
    title: "Make the RFQ comparable",
    body: "Send the same commercial assumptions to every shortlisted supplier. A price without quantity, packaging, Incoterm and quality scope cannot be compared reliably.",
    checks: [
      "Target order quantity, annual estimate and acceptable MOQ",
      "Sample timing, production lead time, Incoterm, destination and payment terms",
      "Inspection method, defect handling and documents required before shipment",
    ],
  },
];

export default function AbrasiveSourcingChecklist() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Abrasive Sourcing Checklist for Importers and Tool Brands",
    description:
      "A practical checklist for sourcing buffing wheels, sanding products, grinding discs and private label finishing kits.",
    inLanguage: "en",
    mainEntityOfPage: absoluteUrl("/resources/abrasive-sourcing-checklist"),
    author: { "@id": absoluteUrl("/#organization") },
    publisher: { "@id": absoluteUrl("/#organization") },
    datePublished: "2026-06-27",
    dateModified: SITE_UPDATED,
  };

  return (
    <div className="flex min-h-screen flex-col">
      <section className="border-b border-industry-slate-800 bg-industry-slate-950 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              {
                label: "Abrasive Sourcing Checklist",
                href: "/resources/abrasive-sourcing-checklist",
              },
            ]}
          />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            Procurement Field Guide
          </span>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Abrasive Sourcing Checklist for Importers and Tool Brands
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-industry-slate-300">
            Use this checklist to turn a broad product request into a comparable RFQ,
            representative sample plan, and measurable pre-shipment quality standard.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-industry-slate-400">
            <span>Published by SCOTTCHEN sourcing team</span>
            <span>Reviewed 28 June 2026</span>
          </div>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6 lg:px-8">
          {sections.map((section) => (
            <article key={section.number} className="glass-panel rounded-xl p-7 sm:p-9">
              <div className="flex flex-col gap-5 sm:flex-row">
                <div className="font-mono text-3xl font-black text-industry-orange-light">
                  {section.number}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  <p className="mt-3 leading-relaxed text-industry-slate-300">{section.body}</p>
                  <ul className="mt-5 space-y-2 text-sm text-industry-slate-300">
                    {section.checks.map((check) => (
                      <li key={check} className="flex gap-3">
                        <span className="mt-1 text-industry-orange-light">✓</span>
                        <span>{check}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}

          <div className="grid gap-5 pt-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/resources/abrasive-material-selection-guide" className="rounded-lg border border-industry-slate-700 p-5 font-bold text-white hover:border-industry-orange">
              Read material selection guide →
            </Link>
            <Link href="/products" className="rounded-lg border border-industry-slate-700 p-5 font-bold text-white hover:border-industry-orange">
              Review product families →
            </Link>
            <Link href="/quality-control" className="rounded-lg border border-industry-slate-700 p-5 font-bold text-white hover:border-industry-orange">
              Review quality controls →
            </Link>
            <Link href="/sample-kit" className="rounded-lg border border-industry-slate-700 p-5 font-bold text-white hover:border-industry-orange">
              Plan a sample request →
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <CTASection />
    </div>
  );
}
