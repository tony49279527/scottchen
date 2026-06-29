import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl, SITE_UPDATED } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Abrasive Grain, Backing & Grit Selection Guide",
  description:
    "A B2B buyer's guide to abrasive grain, backing, FEPA P-grit, sample approval, barcode quality and Incoterms for comparable sandpaper and polishing RFQs.",
  path: "/resources/abrasive-material-selection-guide",
  alternatePath: "/zh/resources/abrasive-material-selection-guide",
});

const sources = [
  {
    label: "FEPA abrasive standards and P-grit nomenclature",
    href: "https://fepa-abrasives.org/abrasives/standards/",
  },
  {
    label: "FEPA overview of coated abrasive construction",
    href: "https://fepa-abrasives.org/abrasives/",
  },
  {
    label: "FEPA safety publications for abrasive products",
    href: "https://fepa-abrasives.org/safety/safety-publications/",
  },
  {
    label: "GS1 barcode quality checks",
    href: "https://support.gs1.org/support/solutions/articles/43000734141-what-should-i-check-to-ensure-good-quality-barcodes-",
  },
  {
    label: "ICC Incoterms 2020 overview",
    href: "https://iccwbo.org/business-solutions/incoterms-rules/incoterms-2020/",
  },
] as const;

const grainRows = [
  {
    grain: "Aluminum oxide",
    commonFit: "General-purpose sanding of wood and many metals",
    verify: "Substrate, coating type, backing, pressure and target finish",
  },
  {
    grain: "Silicon carbide",
    commonFit: "Fine finishing, wet sanding and hard or brittle surfaces",
    verify: "Wet/dry use, backing water resistance and scratch pattern",
  },
  {
    grain: "Alumina zirconia",
    commonFit: "Higher-pressure stock removal on metal",
    verify: "Tool speed, disc format, working pressure and heat behavior",
  },
] as const;

export default function AbrasiveMaterialSelectionGuide() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": absoluteUrl("/resources/abrasive-material-selection-guide#article"),
    headline: "Abrasive Grain, Backing and Grit Selection Guide for B2B Buyers",
    description:
      "A procurement guide for writing comparable abrasive specifications and sample acceptance criteria.",
    inLanguage: "en",
    mainEntityOfPage: absoluteUrl("/resources/abrasive-material-selection-guide"),
    author: { "@id": `${absoluteUrl("/")}#organization` },
    publisher: { "@id": `${absoluteUrl("/")}#organization` },
    datePublished: SITE_UPDATED,
    dateModified: SITE_UPDATED,
    citation: sources.map((source) => source.href),
    about: ["Coated abrasives", "FEPA P-grit", "Private-label sourcing", "Barcode quality"],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <section className="border-b border-industry-slate-800 bg-industry-slate-950 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              {
                label: "Abrasive Material Selection Guide",
                href: "/resources/abrasive-material-selection-guide",
              },
            ]}
          />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            Specification Guide
          </span>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Abrasive Grain, Backing & Grit Selection Guide
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-industry-slate-300">
            A buyer-oriented framework for turning application requirements into a
            comparable sandpaper, sanding disc or finishing-kit RFQ.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-industry-slate-400">
            <span>Published by SCOTTCHEN sourcing team</span>
            <span>Technical references reviewed 28 June 2026</span>
          </div>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-industry-orange/30 bg-industry-orange/5 p-7 sm:p-9">
            <h2 className="text-2xl font-bold text-white">Short answer for procurement teams</h2>
            <p className="mt-4 leading-relaxed text-industry-slate-200">
              Do not approve an abrasive by grit number alone. A comparable specification
              needs the substrate, process stage, grain, backing, coating or bond, dimensions,
              tool interface, operating limit, packaging and an agreed sample test.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-xl border border-industry-slate-800">
            <table className="min-w-full divide-y divide-industry-slate-800 text-left text-sm">
              <thead className="bg-industry-slate-950 text-industry-slate-300">
                <tr>
                  <th className="px-5 py-4 font-bold">Grain family</th>
                  <th className="px-5 py-4 font-bold">Common starting point</th>
                  <th className="px-5 py-4 font-bold">What the buyer must verify</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-industry-slate-800 bg-industry-slate-900">
                {grainRows.map((row) => (
                  <tr key={row.grain}>
                    <th className="px-5 py-4 font-bold text-white">{row.grain}</th>
                    <td className="px-5 py-4 text-industry-slate-300">{row.commonFit}</td>
                    <td className="px-5 py-4 text-industry-slate-300">{row.verify}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-industry-slate-400">
            These are sourcing starting points, not universal performance guarantees.
            Final selection requires a representative sample on the buyer&apos;s actual
            workpiece and tool.
          </p>
        </div>
      </section>

      <section className="border-y border-industry-slate-800 bg-industry-slate-950 py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="glass-panel rounded-xl p-7 sm:p-9">
            <span className="font-mono text-sm font-bold text-industry-orange-light">01</span>
            <h2 className="mt-3 text-2xl font-bold text-white">Use the right grit system</h2>
            <p className="mt-4 leading-relaxed text-industry-slate-300">
              FEPA distinguishes P-grit for coated abrasives from F-grit for bonded
              abrasives. Record the complete designation rather than copying a bare
              number between product types. FEPA also describes grit size as a
              distribution, not one single particle diameter.
            </p>
          </article>
          <article className="glass-panel rounded-xl p-7 sm:p-9">
            <span className="font-mono text-sm font-bold text-industry-orange-light">02</span>
            <h2 className="mt-3 text-2xl font-bold text-white">Specify the backing</h2>
            <p className="mt-4 leading-relaxed text-industry-slate-300">
              Coated abrasives combine a backing, abrasive grain and bonding coats.
              State whether the project needs paper, cloth, film, fibre or mesh, then
              define flexibility, tear resistance, wet use and attachment requirements
              in the approved specification.
            </p>
          </article>
          <article className="glass-panel rounded-xl p-7 sm:p-9">
            <span className="font-mono text-sm font-bold text-industry-orange-light">03</span>
            <h2 className="mt-3 text-2xl font-bold text-white">Approve a test method</h2>
            <p className="mt-4 leading-relaxed text-industry-slate-300">
              Compare cut rate, scratch consistency, useful life, heat, shedding,
              adhesion and dimensional fit on the intended substrate. Keep one approved
              reference sample and record the tool, speed, pressure and test duration.
            </p>
          </article>
          <article className="glass-panel rounded-xl p-7 sm:p-9">
            <span className="font-mono text-sm font-bold text-industry-orange-light">04</span>
            <h2 className="mt-3 text-2xl font-bold text-white">Treat safety as SKU-specific</h2>
            <p className="mt-4 leading-relaxed text-industry-slate-300">
              Operating limits and safety instructions depend on product construction
              and tool compatibility. Require the marked limit and applicable instruction
              for the quoted SKU; do not reuse a generic RPM statement across unrelated
              wheels, discs or mounted accessories.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white">Packaging and commercial release</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="glass-panel rounded-xl p-7">
              <h3 className="text-xl font-bold text-white">Barcode release check</h3>
              <p className="mt-3 text-sm leading-relaxed text-industry-slate-300">
                GS1 highlights check digits, quiet zones, contrast, symbol size,
                bar height, packaging interference, damage and placement as common
                barcode quality checks. Buyer-supplied barcode data should still be
                scan-checked on the final packaging material.
              </p>
            </div>
            <div className="glass-panel rounded-xl p-7">
              <h3 className="text-xl font-bold text-white">Name the delivery rule</h3>
              <p className="mt-3 text-sm leading-relaxed text-industry-slate-300">
                ICC Incoterms rules allocate obligations, risk and costs between buyer
                and seller. Put the full rule, named place and edition in the quotation;
                terms such as FOB, CIF or DAP are incomplete without a named location.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-industry-slate-800 bg-industry-slate-950 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">Primary references</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-industry-slate-400">
            The references below support the standards and procurement principles in this
            guide. Product suitability and contractual terms remain project-specific.
          </p>
          <ul className="mt-6 grid gap-3">
            {sources.map((source) => (
              <li key={source.href}>
                <a
                  className="text-sm font-semibold text-industry-orange-light hover:underline"
                  href={source.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {source.label} ↗
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white" href="/resources/abrasive-sourcing-checklist">
              Open the RFQ checklist
            </Link>
            <Link className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white" href="/supplier-profile">
              Review supplier profile
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
