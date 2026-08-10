import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import DecisionGuides from "@/components/DecisionGuides";
import { createPageMetadata } from "@/lib/seo";
import { buildFaqPageSchema } from "@/lib/schema";
import { pageDateForPath } from "@/lib/pageDates";
import { absoluteUrl, SITE_UPDATED } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "OEM vs Off-the-Shelf Abrasive Kits for B2B | SCOTTCHEN",
  description:
    "Compare OEM and off-the-shelf abrasive kits by MOQ, branding, assortment, validation, risk and replenishment. Choose the right route for your B2B launch.",
  path: "/compare/oem-vs-off-the-shelf-abrasive-kits",
  alternatePath: "/zh/compare/oem-vs-off-the-shelf-abrasive-kits",
});

const comparison = [
  ["Launch speed", "Requires specification, sample and artwork approval", "Faster when stock is available"],
  ["Branding", "Private-label pack, instructions and buyer-supplied barcode data", "Existing brand and packaging"],
  ["Assortment", "Configured sizes, grits, wheel types and compounds", "Fixed by the stock SKU"],
  ["MOQ", "Production MOQ quoted by SKU, packaging and quantity", "Often case or distributor minimum"],
  ["Validation", "Buyer approves product and packaging criteria before production", "Buyer tests the available stock item"],
  ["Replenishment", "Planned production against an approved specification", "Dependent on distributor or brand inventory"],
  ["Unit pricing / total cost", "Quoted to configuration, volume, pack, inspection and Incoterms", "Published or account pricing may be available; landed cost still needs freight and duties"],
  ["Key risk", "Longer approval cycle; unclear brief causes rework", "Assortment drift, stockouts, limited brand control"],
] as const;

const faqs = [
  {
    q: "Are OEM abrasive kits better than off-the-shelf kits?",
    a: "OEM kits are better when branding, assortment and repeatability matter. Off-the-shelf kits are better for fast, low-volume validation when the available configuration already fits the use case.",
  },
  {
    q: "What MOQ should buyers expect for a private-label abrasive kit?",
    a: "MOQ depends on the components, packaging, print method, tooling and production plan. It is confirmed in the dated written quotation after specification review.",
  },
  {
    q: "Can a buyer test an OEM kit before mass production?",
    a: "Verified commercial buyers can request samples. The sample configuration, charges, courier cost and approval criteria are confirmed before dispatch.",
  },
  {
    q: "What should an OEM abrasive kit specification include?",
    a: "List every component, size, material, grit or ply, tool compatibility, packaging format, label data, warnings, inspection criteria, quantity and shipping assumption.",
  },
] as const;

export default function OemVsStockAbrasiveKitsPage() {
  const reviewedAt = pageDateForPath("/compare/oem-vs-off-the-shelf-abrasive-kits") ?? SITE_UPDATED;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/compare/oem-vs-off-the-shelf-abrasive-kits#webpage"),
        url: absoluteUrl("/compare/oem-vs-off-the-shelf-abrasive-kits"),
        name: "OEM vs Off-the-Shelf Abrasive Kits for B2B",
        description: "A B2B comparison of custom OEM and stock abrasive accessory kits.",
        inLanguage: "en",
        dateModified: reviewedAt,
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
              { label: "OEM vs stock kits", href: "/compare/oem-vs-off-the-shelf-abrasive-kits" },
            ]}
          />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            B2B Product Comparison
          </span>
          <h1 className="mt-3 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            OEM vs off-the-shelf abrasive kits: which fits your launch?
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-industry-slate-300">
            Choose OEM for controlled branding and repeat assortments. Choose stock kits
            for faster, lower-volume validation when customization is not required.
          </p>
          <p className="mt-4 text-sm text-industry-slate-500">
            Reviewed {reviewedAt}. Unit prices and MOQ are confirmed only in a dated written quotation.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/sample-kit" className="rounded bg-industry-orange-cta px-6 py-3 text-sm font-bold text-white">
              Request an OEM sample
            </Link>
            <Link href="/abrasive-kits" className="rounded border border-industry-slate-700 px-6 py-3 text-sm font-bold text-white">
              Review kit capabilities
            </Link>
            <Link href="/oem-private-label" className="rounded border border-industry-slate-700 px-6 py-3 text-sm font-bold text-white">
              Private-label workflow
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white">Complete B2B comparison</h2>
          <div className="mt-8 overflow-x-auto rounded border border-industry-slate-800">
            <table className="min-w-[760px] w-full text-left text-sm">
              <thead className="bg-industry-slate-950 text-industry-slate-300">
                <tr>
                  <th className="px-4 py-4 font-bold">Decision factor</th>
                  <th className="px-4 py-4 font-bold">OEM abrasive kit</th>
                  <th className="px-4 py-4 font-bold">Off-the-shelf kit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-industry-slate-800 bg-industry-slate-900 text-industry-slate-300">
                {comparison.map(([factor, oem, stock]) => (
                  <tr key={factor}>
                    <th className="px-4 py-4 font-bold text-white">{factor}</th>
                    <td className="px-4 py-4">{oem}</td>
                    <td className="px-4 py-4">{stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-y border-industry-slate-800 bg-industry-slate-950 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="glass-panel rounded-lg p-7">
            <h2 className="text-xl font-bold text-white">Choose OEM when control is the constraint</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-industry-slate-300">
              <li>Private-label packaging and buyer-supplied barcode data are required.</li>
              <li>The kit needs a specific grit, wheel, compound or adapter sequence.</li>
              <li>Future orders must match an approved product and packaging specification.</li>
              <li>The buyer can support sample, artwork and production approval work.</li>
            </ul>
          </article>
          <article className="glass-panel rounded-lg p-7">
            <h2 className="text-xl font-bold text-white">Choose stock when speed is the constraint</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-industry-slate-300">
              <li>A ready-made assortment already matches the intended workflow.</li>
              <li>The launch volume is below a practical custom production minimum.</li>
              <li>Existing branding and packaging are acceptable.</li>
              <li>The immediate goal is demand or product-fit validation.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white">Conclusion conditions</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-industry-slate-400">
            Use these conditions to decide which path to RFQ. Do not treat this page as a price list
            or a guarantee of finish results.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="glass-panel rounded-lg p-7">
              <h3 className="text-lg font-bold text-industry-orange-light">OEM is the better next step if</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-industry-slate-300">
                <li>You need a controlled assortment and private-label pack for repeat orders.</li>
                <li>You can approve a sample and packaging specification before production.</li>
                <li>You accept that MOQ, lead time and unit cost are quoted only after scope review.</li>
              </ul>
            </article>
            <article className="glass-panel rounded-lg p-7">
              <h3 className="text-lg font-bold text-industry-orange-light">Stock is the better next step if</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-industry-slate-300">
                <li>An existing kit already matches the tool, substrate and finish target.</li>
                <li>You need a small trial before committing to custom production.</li>
                <li>Brand packaging control is optional for this launch stage.</li>
              </ul>
            </article>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/procurement-terms" className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white">
              Review procurement terms
            </Link>
            <Link href="/resources/oem-abrasive-supplier-evaluation" className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white">
              Supplier evaluation guide
            </Link>
            <Link href="/alternatives/abrasive-kit-sourcing-alternatives" className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white">
              Other sourcing alternatives
            </Link>
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
        title="Turn the comparison into a sample brief"
        subtitle="Share the intended workflow, component list, target quantity and packaging. We will confirm what can be sampled and quoted."
      />
    </div>
  );
}
