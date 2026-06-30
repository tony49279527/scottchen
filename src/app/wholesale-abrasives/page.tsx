import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Wholesale Abrasive Tools | Bulk Sanding & Polishing Supplies Supplier | SCOTTCHEN",
  description: "Wholesale abrasive tools and bulk sanding & polishing supplies for distributors, retailers, and industrial buyers. Factory-direct pricing from China manufacturer. MOQ 500pcs, FOB Shanghai.",
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
    { name: "Abrasive Kits", link: "/abrasive-kits", desc: "Buffing kits, sanding assortments, polishing kits, drill accessory kits with retail-ready packaging" },
  ];

  const faqs = [
    {
      q: "Who is eligible for a wholesale abrasive tools account?",
      a: "Our wholesale abrasives program is open to distributors, hardware retailers, industrial supply companies, tool brands, e-commerce sellers, Amazon FBA sellers, and industrial end-users purchasing in bulk quantities. We do not sell directly to retail consumers at wholesale pricing. To qualify for wholesale pricing, buyers must be purchasing for resale or industrial use and meet our minimum order quantities. We verify business credentials through your website, business license, tax ID, or resale certificate. New wholesale customers typically start with a trial order to evaluate product quality before committing to larger recurring container shipments.",
    },
    {
      q: "What are your wholesale payment terms?",
      a: "Standard payment terms for new wholesale customers are 30% T/T deposit at order confirmation with the remaining 70% balance due against copy of the bill of lading before shipment. For established repeat customers with a consistent order history and good payment record, we may extend more flexible terms including lower deposit percentages or net payment terms on a case-by-case basis. We also accept L/C at sight for larger orders exceeding a defined threshold. Sample orders are paid in full before shipment via T/T, PayPal, or trade assurance platforms such as Alibaba Trade Assurance.",
    },
    {
      q: "Do you offer volume discounts and container pricing?",
      a: "Yes. We offer tiered volume discount pricing based on order quantity, with the most competitive pricing applied to full-container (FCL) orders. Our pricing tiers typically start at MOQ level (500 pieces per SKU), increase to discounted pricing at 5,000 pieces per SKU, further discounted pricing at 20,000+ pieces, and the deepest factory-direct pricing for full 20ft or 40ft container orders. Mixed-SKU containers that combine multiple product categories are encouraged and qualify for FCL pricing once total container volume meets the threshold. We also offer annual contract pricing for customers with committed annual volumes.",
    },
    {
      q: "What shipping terms do you offer for wholesale orders?",
      a: "Standard shipping terms are FOB Shanghai (Free On Board), where we handle all inland transport to Shanghai Port, export customs clearance, and loading onto the vessel, at which point risk and freight responsibility transfer to the buyer. We can also quote EXW (Ex Works) from our factory, CIF (Cost, Insurance, Freight) to your destination port, or door-to-door delivery via our freight forwarding partners. For LCL (less than container load) shipments, we consolidate cargo with our freight forwarder. FCL shipments use standard 20ft and 40ft containers, which we can load and secure at our factory to prevent transit damage.",
    },
    {
      q: "Can I get exclusive distribution rights in my market?",
      a: "We consider exclusive distribution arrangements for established distributors who can demonstrate strong market coverage, sales volume commitments, brand-building investment, and the ability to represent the SCOTTCHEN brand professionally in their territory. Exclusivity is granted on a per-product-category and per-country/region basis and requires a minimum annual purchase commitment. Exclusive distributors receive enhanced marketing support, priority production scheduling, new product development input, and territorial protection. Contact our sales team with your company profile, market coverage, and volume projections to discuss exclusive distribution.",
    },
    {
      q: "Do you offer dropshipping or FBA fulfillment support?",
      a: "While we are primarily a wholesale and OEM manufacturer selling in bulk quantities, we support e-commerce sellers by preparing orders to FBA specifications, including FNSKU labeling, polybag prep, suffocation warnings, and carton labeling per Amazon requirements. We can ship directly from our factory to Amazon fulfillment centers worldwide or to your designated third-party prep center. For established private label customers with significant volume, we can also offer dropshipping fulfillment services on a limited basis. We do not operate a consumer-facing dropshipping program for single-unit orders.",
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
              Factory-direct wholesale abrasive tools for distributors, hardware retailers, e-commerce sellers, and industrial buyers. Bulk sanding discs, flap discs, cutting wheels, sanding belts, buffing wheels, and private label abrasive kits at competitive China manufacturer pricing.
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
                <div className="text-2xl font-black text-industry-orange">MOQ 500</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Starting Order</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">FOB Shanghai</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Shipping Terms</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">6 Categories</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Full Abrasive Range</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">Private Label</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Branding Available</div>
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
                SCOTTCHEN operates a dedicated wholesale abrasives program for distributors, hardware retailers, industrial supply companies, tool brands, e-commerce sellers, and large industrial buyers worldwide. As a factory-direct China abrasive manufacturer, we cut out multiple layers of trading company and importer margins to deliver competitive wholesale pricing on a complete range of abrasive tools—sanding discs, flap discs, cutting wheels, sanding belts, buffing wheels, polishing compounds, and retail-ready abrasive kits—all produced in our ISO 9001 certified Shanghai facility.
              </p>
              <p>
                We serve wholesale customers across a range of business models. Traditional abrasives distributors and industrial supply companies stock our products for resale to fabricators, welders, contractors, and industrial accounts. Hardware retailers and home-center chains carry our retail-packaged products on their shelves. E-commerce sellers and Amazon FBA merchants sell our private label products online. Large industrial end-users—metal fabrication shops, foundries, polishing operations, knife making workshops—buy direct in bulk for their own production use at wholesale pricing. Whatever your business model, we can structure a wholesale program that fits your volume, packaging, and delivery requirements.
              </p>
              <p>
                When you open a wholesale account with SCOTTCHEN, you work directly with a dedicated sales contact who manages your orders, provides quotations, coordinates sample production, tracks production status, and handles post-shipment support. Our sales team includes English-speaking professionals with extensive experience in international abrasive trade, export documentation, and logistics coordination to make sourcing from China straightforward and reliable.
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
                Our wholesale pricing is tiered by order volume to reward larger commitments with deeper discounts. The following reference tiers illustrate our discount structure; exact pricing is quoted per SKU based on product specifications and packaging requirements.
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
                      <td className="px-4 py-3 font-bold text-industry-orange">MOQ</td>
                      <td className="px-4 py-3">500 pieces</td>
                      <td className="px-4 py-3">Standard wholesale</td>
                      <td className="px-4 py-3">25-35 days</td>
                    </tr>
                    <tr className="bg-industry-slate-900/40">
                      <td className="px-4 py-3 font-bold text-industry-orange">Volume</td>
                      <td className="px-4 py-3">5,000 pieces</td>
                      <td className="px-4 py-3">5-10% discount</td>
                      <td className="px-4 py-3">25-35 days</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-bold text-industry-orange">Large Volume</td>
                      <td className="px-4 py-3">20,000 pieces</td>
                      <td className="px-4 py-3">10-18% discount</td>
                      <td className="px-4 py-3">30-40 days</td>
                    </tr>
                    <tr className="bg-industry-slate-900/40">
                      <td className="px-4 py-3 font-bold text-industry-orange">FCL (Full Container)</td>
                      <td className="px-4 py-3">20ft / 40ft container</td>
                      <td className="px-4 py-3">Best factory-direct</td>
                      <td className="px-4 py-3">30-45 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-industry-slate-500 italic">
                * Discount percentages are indicative ranges. Exact pricing is quoted per SKU and may vary by product category, grain type, packaging format, and current raw material costs.
              </p>
            </div>

            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Shipping &amp; Logistics</span>
              <h2 className="text-2xl font-extrabold text-white">Shipping &amp; Logistics</h2>
              <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                <p>
                  Standard wholesale orders ship FOB Shanghai from our factory, which is located approximately one hour from Shanghai Port. We manage all inland transport, export customs clearance, and container loading. For buyers without an established freight forwarder, we can recommend reliable forwarders and quote CIF or door-to-door rates for delivery to your destination port or warehouse.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  <div className="glass-panel p-4 rounded border border-industry-slate-800">
                    <h3 className="text-sm font-bold text-white">LCL Shipments</h3>
                    <p className="text-xs text-industry-slate-400 mt-1">Less than container load orders are consolidated at our forwarder's warehouse and shipped with other cargo, suitable for smaller trial orders or mixed product orders under 10 CBM.</p>
                  </div>
                  <div className="glass-panel p-4 rounded border border-industry-slate-800">
                    <h3 className="text-sm font-bold text-white">FCL Containers</h3>
                    <p className="text-xs text-industry-slate-400 mt-1">20ft (approx. 26-28 CBM) and 40ft HQ (approx. 66-68 CBM) containers loaded directly at our factory with careful bracing to prevent transit damage. Most economical per-unit shipping.</p>
                  </div>
                  <div className="glass-panel p-4 rounded border border-industry-slate-800">
                    <h3 className="text-sm font-bold text-white">Consolidation</h3>
                    <p className="text-xs text-industry-slate-400 mt-1">We can hold production batches and consolidate multiple product categories into a single container shipment, reducing your total logistics costs and simplifying receiving.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Fulfillment Programs</span>
            <h2 className="text-2xl font-extrabold text-white">Dropshipping, FBA &amp; Private Label Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800">
                <h3 className="text-base font-bold text-industry-orange mb-3">FBA Fulfillment Prep</h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  We prepare orders to Amazon FBA specifications including FNSKU barcode labels on each sellable unit, polybag application with suffocation warnings, carton content labels, and carton weight/dimension labels per Amazon's current requirements. We can ship directly from our factory to Amazon fulfillment centers in the US, EU, UK, Japan, and other marketplaces.
                </p>
              </div>
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800">
                <h3 className="text-base font-bold text-industry-orange mb-3">Private Label for Wholesale</h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  All products are available under your private brand including custom labels, color boxes, blister packs, molded cases, and branded cartons. Private label MOQ applies per SKU. We provide packaging design support, product photography, and marketing assets to help you launch and promote your branded product line.
                </p>
              </div>
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800">
                <h3 className="text-base font-bold text-industry-orange mb-3">Marketing Support</h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  Wholesale partners receive access to high-resolution product images, lifestyle photography, product descriptions, A+ content copy, safety data sheets, specification sheets, and application guides for use on your website, catalogs, and marketplace listings. Co-branded marketing materials can be developed for key accounts.
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
                { step: "4. Place First Order", desc: "Approve samples, confirm your first order, pay the deposit, and we begin production with regular status updates through shipment." },
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
                "description": "Wholesale abrasive tools and bulk sanding and polishing supplies for distributors, retailers, and industrial buyers from China manufacturer.",
                "url": absoluteUrl("/wholesale-abrasives"),
              },
              {
                "@type": "FAQPage",
                "@id": absoluteUrl("/wholesale-abrasives#faqpage"),
                "mainEntity": faqs.map((faq) => ({
                  "@type": "Question",
                  "name": faq.q,
                  "acceptedAnswer": { "@type": "Answer", "text": faq.a },
                })),
              },
            ],
          }),
        }}
      />

      <CTASection />
    </div>
  );
}
