import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import DecisionGuides from "@/components/DecisionGuides";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "OEM Abrasive Products Catalog | SCOTTCHEN",
  description: "Compare abrasive product families, specification controls and packaging options. MOQ, production source, evidence and terms are quoted by SKU.",
  path: "/products",
  alternatePath: "/zh/products",
});

export default function ProductsOverview() {
  const categories = [
    {
      family: "Polishing & Finishing (Core)",
      items: [
        {
          name: "Buffing & Polishing Wheels",
          url: "/products/buffing-polishing-wheels",
          types: "Candidate wheel constructions and tool-mounted concepts; fiber, build, dimensions, use limits and source require SKU evidence.",
          moq: "Quoted per SKU",
          pack: "RFQ: source, materials, dieline, pack-out and approval sample",
          img: "/images/buffing_wheels.webp",
        },
        {
          name: "Polishing Wheel Kits",
          url: "/products/buffing-polishing-wheels",
          types: "Candidate wheel, compound, adapter and pack-out combinations; there is no approved stock BOM on this page.",
          moq: "Quoted per SKU",
          pack: "RFQ: BOM, tooling, artwork, warnings and channel requirements",
          img: "/images/hero_abrasives_kit.webp",
        },
      ],
    },
    {
      family: "Sanding & Substrate Prep",
      items: [
        {
          name: "Sanding Sheets & Sandpaper Rolls",
          url: "/products/sanding-grinding-accessories",
          types: "Candidate sheet, roll and dispenser inquiries; grain, backing, grit system, dimensions and wet/dry use require source evidence.",
          moq: "Quoted per SKU",
          pack: "RFQ: roll or sheet count, materials, cutter safety and dieline",
          img: "/images/sanding_sheets.webp",
        },
        {
          name: "Sanding Screens & Drywall Abrasives",
          url: "/products/sanding-grinding-accessories",
          types: "Candidate mesh sheet or roll inquiries; mesh construction, coating and equipment compatibility require SKU confirmation.",
          moq: "Quoted per SKU",
          pack: "RFQ: protection, labels, warnings, pack quantity and transport test",
          img: "/images/sanding_screens.webp",
        },
        {
          name: "Detail Sanding Tools",
          url: "/products/sanding-grinding-accessories",
          types: "Candidate hand-sanding tools and replacement abrasives; handle, tension system and abrasive fit require sample approval.",
          moq: "Quoted per SKU",
          pack: "RFQ: pack format, artwork rights, warnings and buyer barcode data",
          img: "/images/detail_sanding.webp",
        },
      ],
    },
    {
      family: "Heavy Grinding & Special Substrates",
      items: [
        {
          name: "Grinding & Fiber Discs",
          url: "/products/sanding-grinding-accessories",
          types: "Candidate fiber-disc or grinding-disc inquiries; grain, bond, backing, arbor and operating limit require exact source evidence.",
          moq: "Quoted per SKU",
          pack: "RFQ: product protection, warnings, traceability and carton scope",
          img: "/images/fiber_discs.webp",
        },
        {
          name: "Diamond & Specialty Abrasives",
          url: "/products/sanding-grinding-accessories",
          types: "Higher-risk specialty-abrasive inquiry category; construction, tool, substrate, cooling and safety evidence must be approved.",
          moq: "Quoted per SKU",
          pack: "RFQ: protective format, warnings, instructions and source documents",
          img: "/images/diamond_polishing.webp",
        },
        {
          name: "Sanding Dispenser Kits",
          url: "/products/sanding-grinding-accessories",
          types: "Candidate multi-roll dispenser or refill concept; BOM, cutter, roll dimensions, grit mix and source are RFQ fields.",
          moq: "Quoted per SKU",
          pack: "RFQ: structural sample, cutter safety, artwork and pack-out approval",
          img: "/images/sanding_dispenser.webp",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header section */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
            ]}
          />
          <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">SPECIFICATIONS CATALOG</span>
          <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
            Surface Finishing Accessories Catalog
          </h1>
          <p className="mt-2 text-base font-semibold text-industry-slate-400 sm:text-lg">
            Shanghai B2B sourcing and OEM project support for buffing wheels, sanding discs, flap discs, belts, cutting wheels and kits
          </p>
          <p className="mt-4 text-base text-industry-slate-400 max-w-3xl leading-relaxed">
            Compare candidate product families for tool-brand, distributor and retail projects. Production source, technical evidence, MOQ basis, packaging scope and commercial terms are confirmed per SKU in writing.
          </p>
        </div>
      </section>

      <section className="border-b border-industry-slate-850 bg-industry-slate-950 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                title: "Evaluate supplier fit",
                body: "Compare product scope, samples, QC evidence, packaging readiness and commercial verification before shortlisting.",
                href: "/resources/oem-abrasive-supplier-evaluation",
              },
              {
                title: "Prepare a comparable RFQ",
                body: "Use the sourcing checklist to define dimensions, backing, grit, pack quantity, sample plan and inspection requirements.",
                href: "/resources/abrasive-sourcing-checklist",
              },
              {
                title: "Select grain and backing",
                body: "Review grain families, backing materials, FEPA P-grit wording, barcode checks and delivery terms.",
                href: "/resources/abrasive-material-selection-guide",
              },
            ].map((item) => (
              <Link
                key={item.href}
                className="glass-panel rounded-xl p-6 hover:border-industry-orange"
                href={item.href}
              >
                <h2 className="text-lg font-bold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-industry-slate-400">
                  {item.body}
                </p>
                <span className="mt-4 inline-block text-sm font-bold text-industry-orange-light">
                  Open guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways / B2B Quick Facts */}
      <section className="py-8 bg-industry-slate-900 border-b border-industry-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-industry-slate-800 bg-industry-slate-950/40 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="md:w-1/3">
                <span className="text-[10px] font-mono font-bold tracking-widest text-industry-orange uppercase">B2B QUICK TAKEAWAYS</span>
                <h2 className="text-2xl font-black text-white mt-1">Catalog Parameters</h2>
                <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">
                  Consolidated technical and compliance checklist for global procurement managers.
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Inquiry Families:</strong> Candidate sourcing categories include buffing wheels, sanding rolls, open-mesh screens and fiber grinding discs; availability is confirmed per SKU.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Quoted minimums:</strong> Final quantities depend on SKU construction, materials, packaging, print method and order mix.</span>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Packaging Brief:</strong> Sleeves, dispenser boxes, blister concepts or cartons are RFQ formats; source, dieline, materials and sample approval remain project-specific.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Import Evidence:</strong> Assign responsibility for buyer barcode data, warnings, destination rules and any third-party inspection in the dated quotation; no clearance is implied.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Matrix */}
      <section className="py-16 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {categories.map((familyGroup) => (
              <div key={familyGroup.family} className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  {familyGroup.family}
                </h2>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {familyGroup.items.map((item) => (
                    <div key={item.name} className="glass-panel rounded-lg overflow-hidden flex flex-col justify-between hover:border-industry-slate-700 transition-colors group">
                      <div className="relative h-48 w-full overflow-hidden border-b border-industry-slate-850 bg-industry-slate-950">
                        <img
                          width={1024}
                          height={1024}
                          loading="lazy"
                          decoding="async"
                          src={item.img}
                          alt={item.name}
                          className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-300 opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 to-transparent opacity-60" />
                      </div>
                      
                      <div className="p-8 flex-grow flex flex-col justify-between">
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-bold text-white">{item.name}</h3>
                            <span className="text-[10px] font-mono text-industry-orange bg-industry-orange/10 border border-industry-orange/20 px-2 py-0.5 rounded">
                              RFQ category — not stock
                            </span>
                          </div>
                          <p className="text-sm text-industry-slate-400 leading-relaxed">
                            <strong className="text-industry-slate-300">Candidate inquiry scope:</strong> {item.types}
                          </p>
                          
                          {/* B2B Sourcing Parameters */}
                          <div className="grid grid-cols-2 gap-4 border-t border-industry-slate-850 pt-4 text-xs font-mono">
                            <div>
                              <span className="text-industry-slate-500 block">MOQ basis:</span>
                              <span className="text-white font-bold">{item.moq}</span>
                            </div>
                            <div>
                              <span className="text-industry-slate-500 block">Packaging RFQ field:</span>
                              <span className="text-white font-bold leading-normal">{item.pack}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 flex items-center justify-between border-t border-industry-slate-850 pt-4">
                          <Link
                            href={item.url}
                            className="text-xs font-bold text-industry-orange hover:text-industry-orange-light uppercase tracking-wider transition-colors"
                          >
                            Open RFQ Detail &rarr;
                          </Link>
                          <Link
                            href="/contact"
                            className="text-xs font-bold text-white bg-industry-slate-800 hover:bg-industry-slate-700 px-4 py-2 rounded transition-colors"
                          >
                            Request Spec Quote
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-industry-slate-950 border-t border-industry-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">SPEC INDEX & FAQS</span>
            <h2 className="text-3xl font-extrabold text-white mt-3">Frequently Asked Questions</h2>
            <p className="mt-4 text-sm text-industry-slate-400">
              SKU specifications, evidence requests, customization scope and quoted logistics assumptions for bulk importers.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What options do you support for custom catalog configurations?",
                a: "B2B kit configurations can be evaluated by SKU, including wheel construction, compound selection, grit assortment and packaging layout. Each component's production source, specification, evidence and commercial scope must be confirmed in the quotation and approved sample."
              },
              {
                q: "What testing certificates do you provide for grinding and fiber discs?",
                a: "Required reports depend on the product, destination, and agreed quality plan. Buyers should specify the applicable standard, test method, sampling level, and evidence required before placing the order."
              },
              {
                q: "How are shipping cartons and pallet requirements confirmed?",
                a: "The packaging specification can define corrugated construction, corner protection, strapping, pallet material and wrap requirements according to product weight and transport conditions. Final pack-out and any transport test are quoted per project."
              },
              {
                q: "Do you support custom bore/arbor hole size inserts?",
                a: "Provide the tool, spindle or chuck, flange, guard and operating limit. Bore inserts, arbor materials and shank options are confirmed only for the quoted SKU and responsible source, then approved through fit and sample checks."
              }
            ].map((faq, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-lg border border-industry-slate-800/80">
                <h3 className="text-base font-bold text-white flex items-start">
                  <span className="text-industry-orange mr-2 shrink-0">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-industry-slate-400 mt-2 pl-5 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": absoluteUrl("/products#collection"),
            name: "Surface Finishing Accessories Catalog",
            url: absoluteUrl("/products"),
            inLanguage: "en",
            isPartOf: { "@id": absoluteUrl("/#website") },
            about: { "@id": absoluteUrl("/#organization") },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: categories
                .flatMap((family) => family.items)
                .map((item, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  name: item.name,
                  description: item.types,
                  url: absoluteUrl(item.url),
                })),
            },
          }),
        }}
      />

      {/* Persistent CTA Banner */}
      <DecisionGuides />
      <CTASection />
    </div>
  );
}
