import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { buildFaqPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Wholesale Abrasive Tools & Bulk Supplies | SCOTTCHEN",
  description: "Wholesale abrasive tools and bulk sanding and polishing supplies for distributors, retailers and industrial buyers. Compare SKU scope, samples and quoted terms.",
  path: "/wholesale-abrasives",
  alternatePath: "/zh/wholesale-abrasives",
});

export default function WholesaleAbrasivesPage() {
  const categories = [
    { name: "Buffing Wheels", link: "/buffing-wheels", desc: "Cotton buffs, spiral-stitched wheels, airway buffs, sisal-cotton treated wheels, and polishing compounds" },
    { name: "Sanding Discs", link: "/sanding-discs", desc: "Hook & loop, PSA, fiber resin, quick-change roll-lock, mesh anti-clog net discs, wet/dry discs" },
    { name: "Flap Discs", link: "/flap-discs", desc: "Type 27 depressed center and Type 29 conical flap discs in zirconia, ceramic, and aluminum oxide" },
    { name: "Sanding Belts", link: "/sanding-belts", desc: "Portable, bench, file, wide, knife making, and silicon carbide belts in custom sizes" },
    { name: "Cutting Wheels", link: "/cutting-wheels", desc: "Metal, INOX stainless, thin cut-off, Type 27 depressed center, cast iron, and masonry cutting discs" },
    { name: "Abrasive Kits", link: "/abrasive-kits", desc: "Buffing, sanding, polishing and drill-accessory kit concepts quoted by BOM and packaging scope" },
  ];

  const faqs = [
    {
      q: "Who is eligible for a wholesale abrasive tools account?",
      a: "The program is intended for distributors, retailers, industrial suppliers, tool brands, e-commerce sellers and industrial buyers. Buyer qualification, trial quantities, SKU-level minimums and any supporting business documents are reviewed per project and recorded in the written quotation.",
    },
    {
      q: "What are your wholesale payment terms?",
      a: "Payment method, deposit or balance milestones, currency, beneficiary and any credit terms vary by project. They become commitments only when the legal supplier and buyer record them in the quotation, pro forma invoice or contract; this page does not establish a fixed 30/70 structure or accepted payment channel.",
    },
    {
      q: "Do you offer volume discounts and container pricing?",
      a: "Pricing is quoted by SKU, specification, packaging, quantity, Incoterms and current input costs. Ask for evaluation, replenishment, mixed-SKU and container scenarios in the same quotation so discounts and logistics assumptions can be compared without relying on generic website tiers.",
    },
    {
      q: "What shipping terms do you offer for wholesale orders?",
      a: "EXW, FOB, CIF or door-to-door scenarios may be evaluated, but the named place, production source, exporter and importer roles, customs scope, risk transfer and freight responsibility must be confirmed for each shipment in the written quotation or contract. No Incoterm is fixed by this page.",
    },
    {
      q: "Can I get exclusive distribution rights in my market?",
      a: "Potential exclusivity can be discussed by product category and territory. Any purchase commitment, term, channel restriction, support scope or territorial protection exists only in a separately signed agreement; the website does not grant exclusivity.",
    },
    {
      q: "Can marketplace packaging and barcode requirements be included?",
      a: "Buyer-supplied FNSKU, UPC, warning, polybag and carton data can be included in the packaging specification. Marketplace rules change and acceptance is not guaranteed by this website; the buyer must confirm current requirements, importer responsibilities and final destination before shipment is quoted.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Wholesale Abrasives", href: "/wholesale-abrasives" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Wholesale &amp; Distribution Program</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              Wholesale Abrasive Tools &amp; Bulk Sanding Supplies
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              Wholesale abrasive sourcing for distributors, hardware retailers, e-commerce sellers and industrial buyers. Compare sanding discs, flap discs, cutting wheels, sanding belts, buffing wheels and private-label kit quotations on the same written basis.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link href="/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-orange-hover hover:scale-[1.02] text-center">
              Open Wholesale Account
            </Link>
            <Link href="/sample-kit" className="inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-slate-750 text-center">
              Request Wholesale Catalog
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-industry-slate-900 border-b border-industry-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-industry-slate-800 bg-industry-slate-950/40">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">Per SKU</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">MOQ Quoted</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">Per Quote</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Named Incoterms</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">By Category</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Source &amp; SKU Verified</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">Private Label</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Scope Quoted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="space-y-5 max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Wholesale Program Overview</span>
            <h2 className="text-2xl font-extrabold text-white tracking-wide">
              Wholesale Abrasive Tools Program for Distributors, Retailers &amp; Industrial Buyers
            </h2>
            <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
              <p>
                SCOTTCHEN supports wholesale abrasive sourcing for distributors, retailers, tool brands, e-commerce sellers and industrial buyers. The quotation identifies the product source, SKU specification, packaging, inspection scope, MOQ, lead-time milestones and commercial terms so buyers can compare offers on a like-for-like basis.
              </p>
              <p>
                The sourcing workflow can be evaluated for distributors, retailers, industrial suppliers, e-commerce sellers and industrial end-users. Product source, channel packaging, barcode workflow, order quantity and delivery responsibilities are confirmed for the actual SKU rather than inferred from a buyer category.
              </p>
              <p>
                A project contact can coordinate RFQ clarification, samples, written approvals and shipment documents. The responsible supplier, production source, inspection scope and post-shipment responsibilities must remain visible in the quotation and contract.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Who We Serve</span>
            <h2 className="text-2xl font-extrabold text-white">Wholesale Customers We Partner With</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Distributors", desc: "Abrasives distributors, welding supply distributors, and industrial MRO suppliers serving regional and national markets." },
                { title: "Hardware Stores", desc: "Independent hardware retailers, hardware chains, home centers, and auto parts stores carrying retail-packaged abrasives." },
                { title: "E-commerce Sellers", desc: "Amazon FBA sellers, Shopify stores, eBay sellers, and online retailers in need of private label abrasive products." },
                { title: "Industrial Suppliers", desc: "Industrial supply companies, catalog houses, and B2B suppliers serving manufacturing and fabrication end-users." },
              ].map((cust) => (
                <div key={cust.title} className="glass-panel p-6 rounded-lg border border-industry-slate-800">
                  <h3 className="text-base font-bold text-industry-orange">{cust.title}</h3>
                  <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">{cust.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Product Categories</span>
            <h2 className="text-2xl font-extrabold text-white">Wholesale Product Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((cat) => (
                <Link key={cat.name} href={cat.link} className="glass-panel p-6 rounded-lg border border-industry-slate-800 hover:border-industry-orange transition-colors block group">
                  <h3 className="text-lg font-bold text-white group-hover:text-industry-orange transition-colors">{cat.name}</h3>
                  <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">{cat.desc}</p>
                  <span className="inline-flex items-center text-xs font-bold text-industry-orange mt-4 group-hover:underline">
                    View Wholesale Details &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Pricing Structure</span>
              <h2 className="text-2xl font-extrabold text-white">Bulk Pricing &amp; Volume Discount Tiers</h2>
              <p className="text-sm text-industry-slate-300 leading-relaxed">
                Ask for multiple quantity scenarios in one quotation. Each scenario should keep the SKU specification, packaging, quality plan and Incoterms basis visible so a lower unit price is not confused with a different product or service scope.
              </p>
              <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                  <thead className="bg-industry-slate-900 text-industry-slate-400">
                    <tr>
                      <th className="px-4 py-3 font-semibold uppercase">Tier</th>
                      <th className="px-4 py-3 font-semibold uppercase">Volume (per SKU)</th>
                      <th className="px-4 py-3 font-semibold uppercase">Discount Level</th>
                      <th className="px-4 py-3 font-semibold uppercase">Lead Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-industry-slate-850 text-white">
                    <tr>
                      <td className="px-4 py-3 font-bold text-industry-orange">Evaluation</td>
                      <td className="px-4 py-3">Quoted by SKU</td>
                      <td className="px-4 py-3">Pricing basis stated</td>
                      <td className="px-4 py-3">Written schedule</td>
                    </tr>
                    <tr className="bg-industry-slate-900/40">
                      <td className="px-4 py-3 font-bold text-industry-orange">Volume</td>
                      <td className="px-4 py-3">Quoted by SKU</td>
                      <td className="px-4 py-3">Volume scenario</td>
                      <td className="px-4 py-3">Written schedule</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-bold text-industry-orange">Large Volume</td>
                      <td className="px-4 py-3">Quoted by SKU</td>
                      <td className="px-4 py-3">Replenishment scenario</td>
                      <td className="px-4 py-3">Written schedule</td>
                    </tr>
                    <tr className="bg-industry-slate-900/40">
                      <td className="px-4 py-3 font-bold text-industry-orange">FCL (Full Container)</td>
                      <td className="px-4 py-3">Named load plan</td>
                      <td className="px-4 py-3">FCL scenario</td>
                      <td className="px-4 py-3">Written schedule</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-industry-slate-500 italic">
                * No generic discount or lead-time promise is made here. Use the dated quotation and approved SKU scope as the commercial source of truth.
              </p>
            </div>

            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Shipping &amp; Logistics</span>
              <h2 className="text-2xl font-extrabold text-white">Shipping &amp; Logistics</h2>
              <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                <p>
                  Logistics are quoted per shipment. The written offer must name the production source, origin and destination, Incoterm and named place, exporter and importer roles, inland transport, customs, loading, freight and insurance scope. FOB Shanghai, CIF and door-to-door can be compared as scenarios but are not standing commitments.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  <div className="glass-panel p-4 rounded border border-industry-slate-800">
                    <h3 className="text-sm font-bold text-white">LCL Shipments</h3>
                    <p className="text-xs text-industry-slate-400 mt-1">Less than container load orders are consolidated at our forwarder's warehouse and shipped with other cargo, suitable for smaller trial orders or mixed product orders under 10 CBM.</p>
                  </div>
                  <div className="glass-panel p-4 rounded border border-industry-slate-800">
                    <h3 className="text-sm font-bold text-white">FCL Containers</h3>
                    <p className="text-xs text-industry-slate-400 mt-1">FCL equipment, usable volume, loading location, bracing method and cost basis are confirmed against the approved load plan and forwarder quotation.</p>
                  </div>
                  <div className="glass-panel p-4 rounded border border-industry-slate-800">
                    <h3 className="text-sm font-bold text-white">Consolidation</h3>
                    <p className="text-xs text-industry-slate-400 mt-1">If consolidation is requested, storage, mixed-source handling, inspection, loading responsibility and any added cost are listed in the quotation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Fulfillment Programs</span>
            <h2 className="text-2xl font-extrabold text-white">Marketplace Packaging &amp; Private Label Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800">
                <h3 className="text-base font-bold text-industry-orange mb-3">Buyer-Supplied Channel Requirements</h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  FNSKU or UPC data, polybag warnings, carton content labels and weight or dimension marks can be scoped from buyer-approved files. Current marketplace rules, destination, importer role and acceptance remain the buyer's responsibility and must be confirmed before shipment.
                </p>
              </div>
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800">
                <h3 className="text-base font-bold text-industry-orange mb-3">Private Label for Wholesale</h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  Private-label feasibility varies by SKU and production source. Artwork, packaging format, barcode data, warning text, print setup and MOQ are confirmed in the approved packaging specification and written quotation.
                </p>
              </div>
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800">
                <h3 className="text-base font-bold text-industry-orange mb-3">Marketing Support</h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  Any available product images, instructions, specification sheets, safety files or listing-support materials are itemized for the quoted SKU. Availability and usage rights are not implied by this page.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-industry-slate-950 border border-industry-slate-800 p-8 rounded-lg space-y-5">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Get Started</span>
            <h2 className="text-2xl font-extrabold text-white">How to Open a Wholesale Account</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1. Submit Inquiry", desc: "Contact us via our wholesale inquiry form, email, or RFQ page with your company information, product interests, estimated volumes, and target market." },
                { step: "2. Account Review", desc: "We review your business credentials and assign a dedicated sales representative who will work with you throughout the relationship." },
                { step: "3. Quotation & Samples", desc: "Receive detailed wholesale pricing, request product samples for evaluation, and finalize specifications and packaging." },
                { step: "4. Confirm Order Controls", desc: "Approve samples, sign the specification and artwork, confirm payment and Incoterms, then follow the written schedule for the identified production source through inspection and shipment." },
              ].map((s) => (
                <div key={s.step} className="border-l-2 border-industry-orange pl-4">
                  <h3 className="text-sm font-bold text-white">{s.step}</h3>
                  <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-8 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover">
                Apply for Wholesale Account
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-white text-center">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {faqs.map((faq, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-lg border border-industry-slate-800/80">
                  <h3 className="text-base font-bold text-white flex items-start">
                    <span className="text-industry-orange mr-2 shrink-0">Q{idx + 1}:</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-industry-slate-400 mt-2 pl-8 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": absoluteUrl("/wholesale-abrasives#webpage"),
                "name": "SCOTTCHEN Wholesale Abrasive Tools",
                "description": "Shanghai-based B2B sourcing and OEM project support for wholesale abrasive tools, with production source and commercial terms confirmed per SKU in writing.",
                "url": absoluteUrl("/wholesale-abrasives"),
              },
              buildFaqPageSchema(faqs),
            ],
          }),
        }}
      />

      <CTASection />
    </div>
  );
}
