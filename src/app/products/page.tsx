import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Surface Finishing Accessories Catalog | SCOTTCHEN",
  description: "Browse our technical dimensions, standard B2B MOQ parameters, and packaging options for polishing wheels, sanding screen, grinding discs, and custom kits.",
  alternates: {
    canonical: "https://www.scottchentools.com/products",
    languages: {
      "en": "https://www.scottchentools.com/products",
      "zh-CN": "https://www.scottchentools.com/zh/products",
      "x-default": "https://www.scottchentools.com/products",
    },
  },
};

export default function ProductsOverview() {
  const categories = [
    {
      family: "Polishing & Finishing (Core)",
      items: [
        {
          name: "Buffing & Polishing Wheels",
          url: "/products/buffing-polishing-wheels",
          types: "Cotton spiral stitched, loose cotton flannel, airway wheels, sisal wheels, felt wheels, drill polishers.",
          moq: "500 pcs/size",
          pack: "Bulk carton / customized private label box",
          img: "/images/buffing_wheels.png",
        },
        {
          name: "Polishing Wheel Kits",
          url: "/products/buffing-polishing-wheels",
          types: "Drill polishing kits, bench grinder restoration kits, mixed size compound kits, retail blister packs.",
          moq: "500 sets",
          pack: "Double blister pack / custom color box / polybag",
          img: "/images/hero_abrasives_kit.png",
        },
      ],
    },
    {
      family: "Sanding & Substrate Prep",
      items: [
        {
          name: "Sanding Sheets & Sandpaper Rolls",
          url: "/products/sanding-grinding-accessories",
          types: "Woodworking sandpaper, automotive wet/dry sheets, furniture refinishing sanding rolls, assorted grits.",
          moq: "10,000 sheets / 200 rolls",
          pack: "Grit-assorted sleeves, cardboard roll dispenser boxes",
          img: "/images/sanding_sheets.png",
        },
        {
          name: "Sanding Screens & Drywall Abrasives",
          url: "/products/sanding-grinding-accessories",
          types: "Silicon carbide drywall mesh sanding screen, dust-free sanding screens, contractor rolls.",
          moq: "5,000 sheets",
          pack: "Individually wrapped paper covers / shrink wrap",
          img: "/images/sanding_screens.png",
        },
        {
          name: "Detail Sanding Tools",
          url: "/products/sanding-grinding-accessories",
          types: "Sanding sticks, mini matchstick details, mold polishing blocks, scale craft smoothing rods.",
          moq: "1,000 packs",
          pack: "Clear hanging bags / retail barcode header cards",
          img: "/images/detail_sanding.png",
        },
      ],
    },
    {
      family: "Heavy Grinding & Special Substrates",
      items: [
        {
          name: "Grinding & Fiber Discs",
          url: "/products/sanding-grinding-accessories",
          types: "Zirconia alumina fiber discs, angle grinder discs, metal weld removal, fiberglass sanding backings.",
          moq: "2,000 discs/grit",
          pack: "Shrink packs / inner white boxes / bulk export cartons",
          img: "/images/fiber_discs.png",
        },
        {
          name: "Diamond & Specialty Abrasives",
          url: "/products/sanding-grinding-accessories",
          types: "Diamond polishing sheets, stone grinding discs, marble and granite grinders, tile/porcelain finishers.",
          moq: "500 discs",
          pack: "Inner boxes with warning cards",
          img: "/images/diamond_polishing.png",
        },
        {
          name: "Sanding Dispenser Kits",
          url: "/products/sanding-grinding-accessories",
          types: "Workshop multi-roll dispenser kits, sandpaper roll refills, assorted grit rolls with racks.",
          moq: "300 racks",
          pack: "Color display box with metal tearing edge",
          img: "/images/sanding_dispenser.png",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header section */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">SPECIFICATIONS CATALOG</span>
          <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
            Surface Finishing Accessories Catalog
          </h1>
          <p className="mt-4 text-base text-industry-slate-400 max-w-3xl leading-relaxed">
            Scottchen specializes in supplying configured, customized accessory kits to tool brand catalogs and high-volume retail sellers. Explore our technical dimensions, standard B2B MOQ parameters, and packaging options.
          </p>
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
                    <span className="text-industry-slate-200"><strong>Product Families:</strong> Concentrated B2B supply of cotton buffing wheels, sanding rolls, open-mesh screens, and zirconia fiber grinding discs.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Standard MOQs:</strong> Polishing wheels: 500 pcs; compound kits: 500 sets; sandpapers: 10,000 sheets; fiber discs: 2,000 pcs/grit.</span>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Packaging Configurations:</strong> Pre-assembled grit sleeves, kraft dispenser boxes, double blisters, or FBA shrink cartons.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Import Readiness:</strong> Complete barcode labels (FNSKU/UPC), custom warnings, and third-party QA pre-shipment clearance.</span>
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
                              Verified B2B MOQ
                            </span>
                          </div>
                          <p className="text-sm text-industry-slate-400 leading-relaxed">
                            <strong className="text-industry-slate-300">Description / Subtypes:</strong> {item.types}
                          </p>
                          
                          {/* B2B Sourcing Parameters */}
                          <div className="grid grid-cols-2 gap-4 border-t border-industry-slate-850 pt-4 text-xs font-mono">
                            <div>
                              <span className="text-industry-slate-500 block">Sourcing MOQ:</span>
                              <span className="text-white font-bold">{item.moq}</span>
                            </div>
                            <div>
                              <span className="text-industry-slate-500 block">Standard Packaging:</span>
                              <span className="text-white font-bold leading-normal">{item.pack}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 flex items-center justify-between border-t border-industry-slate-850 pt-4">
                          <Link
                            href={item.url}
                            className="text-xs font-bold text-industry-orange hover:text-industry-orange-light uppercase tracking-wider transition-colors"
                          >
                            View Full Spec Sheet &rarr;
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
              Technical compliance parameters, customization specs, and shipment logistics details for bulk importers.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What options do you support for custom catalog configurations?",
                a: "We allow complete customization of B2B kit configurations. Sourcing agents can determine specific ply counts for cotton buffing wheels, select compound wax bars by chemical formulations, and bundle diverse sandpaper grits (from P60 to P2500) within a single color box or blister layout."
              },
              {
                q: "What testing certificates do you provide for grinding and fiber discs?",
                a: "All zirconia grinding and fiber discs are subjected to speed stress evaluations up to 1.5x of operating rating. We provide dynamic balance spindle check sheets and grit distribution reports with every shipment batch."
              },
              {
                q: "How do you prevent layout shifts and damage to custom color boxes?",
                a: "We pack retail bundles using double-walled corrugated shipping cartons, with corner guards and heavy poly-strapping. We support full wood or plastic palletization with shrink-wrap bands for export container shipments."
              },
              {
                q: "Do you support custom bore/arbor hole size inserts?",
                a: "Yes. We offer standard telescoping cardboard inserts, brass arbors, and zinc flange plates. Sizing options include 1/2\", 5/8\", 3/4\", and 1\" bore diameters, as well as 1/4\" round and hex shanks for impact drills."
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
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What options do you support for custom catalog configurations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We allow complete customization of B2B kit configurations. Sourcing agents can determine specific ply counts for cotton buffing wheels, select compound wax bars by chemical formulations, and bundle diverse sandpaper grits (from P60 to P2500) within a single color box or blister layout."
                }
              },
              {
                "@type": "Question",
                "name": "What testing certificates do you provide for grinding and fiber discs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All zirconia grinding and fiber discs are subjected to speed stress evaluations up to 1.5x of operating rating. We provide dynamic balance spindle check sheets and grit distribution reports with every shipment batch."
                }
              },
              {
                "@type": "Question",
                "name": "How do you prevent layout shifts and damage to custom color boxes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We pack retail bundles using double-walled corrugated shipping cartons, with corner guards and heavy poly-strapping. We support full wood or plastic palletization with shrink-wrap bands for export container shipments."
                }
              },
              {
                "@type": "Question",
                "name": "Do you support custom bore/arbor hole size inserts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We offer standard telescoping cardboard inserts, brass arbors, and zinc flange plates. Sizing options include 1/2\", 5/8\", 3/4\", and 1\" bore diameters, as well as 1/4\" round and hex shanks for impact drills."
                }
              }
            ]
          })
        }}
      />

      {/* Persistent CTA Banner */}
      <CTASection />
    </div>
  );
}
