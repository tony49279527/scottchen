import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Surface Finishing Application Scenarios | SCOTTCHEN",
  description: "Discover custom accessory configurations matched to specific substrate workflows: Metalworking deburring, Woodworking smoothing, Automotive restoration, Jewelry finishing.",
  alternates: {
    canonical: "https://www.scottchentools.com/applications",
    languages: {
      "en": "https://www.scottchentools.com/applications",
      "x-default": "https://www.scottchentools.com/applications",
    },
  },
};

export default function ApplicationsOverview() {
  const applications = [
    {
      id: "metalworking",
      name: "Metalworking Surface Prep & deburring",
      tag: "Heavy Weld Dressing & Rust Removal",
      challenges: "Welded steel plates, rusted tubular structures, and rough cast metals require high-grit grinding before receiving finishes. Standard sandpapers tear easily on metal edges; vulcanized backing fiber discs are required.",
      products: "Zirconia fiber discs, spiral stitched cotton buffing wheels, emery compound bars.",
      packaging: "Bulk supply cartons, heavy heat-shrink packs of 25 discs.",
    },
    {
      id: "woodworking",
      name: "Woodworking & Furniture Refinishing",
      tag: "Calibrated Grits for Grain Smoothing",
      challenges: "Furniture manufacturing, paint stripping, and contour sanding require consistent grits to prevent deep, uneven scratch lines. Sanding paper must be flexible enough to conform to curved chair legs and mouldings.",
      products: "Alumina oxide sanding rolls, C-weight paper sheets, detail mini sanding sticks.",
      packaging: "Cardboard dispenser boxes with metal tearing borders, assorted grit sheets sleeves.",
    },
    {
      id: "automotive",
      name: "Automotive Restoration & Wheel Polishing",
      tag: "Detail Buffing & Rim De-oxidation",
      challenges: "Mag wheels, chrome trim exhaust pipes, and body panels require drill-compatible shank tools for tight spaces. Compounds must match soft chrome or aluminum alloys without causing micro-scratch haze.",
      products: "Shank-mounted cone/cylinder drill polishing wheels, green chromium oxide bars, fine wet/dry sandpapers.",
      packaging: "Double blister retail hanger cards with wheel-shank adapters.",
    },
    {
      id: "jewelry",
      name: "Jewelry, Crafts & Model Detailing",
      tag: "Precision Small-Scale Surface Finishing",
      challenges: "Mold lines in resin models, silver jewelry, and delicate craft materials require miniature tooling. Standard orbital pads are too aggressive and round off fine design edges.",
      products: "Mini detail sanding sticks, micro-grit belt refills, loose cotton flannel buffer wheels.",
      packaging: "Clear plastic hanging display bags with retail card headers.",
    },
    {
      id: "drywall",
      name: "Drywall & Contractor Renovation",
      tag: "Mesh Sanding Screens for Dust-Free Operation",
      challenges: "Plaster and joint compounds clog typical sandpaper grains instantly, reducing performance. Open-mesh fiberglass screens are necessary to let dust pass through to vacuum systems.",
      products: "Drywall mesh sanding screen sheets, mesh rolls, contractor pack consumables.",
      packaging: "Bulk contract cases, paper-wrapped retail packs of 10 sheets.",
    },
    {
      id: "online-sellers",
      name: "Online Seller Specialty Accessory Kits",
      tag: "Amazon, eBay, and Shopify Retail-Ready Packs",
      challenges: "Abrasives online suffer from high return rates if tool compatibility is ambiguous. Custom kits must be lightweight to qualify for low tier storage fees, and include clear guides to prevent bad consumer feedback.",
      products: "Pre-bundled polishing wheel kits, assorted sandpaper rolls, multi-grit detail stick packs.",
      packaging: "Amazon-ready mailer boxes with barcode sticker applications, instruction sheets.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page header */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 text-left">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">APPLICATION WORKFLOWS</span>
              <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
                Scenario-Specific Surface Finishing
              </h1>
              <p className="mt-4 text-base text-industry-slate-400 leading-relaxed">
                We build accessory combinations matched to specific substrates. Align your catalog with the exact workflows of your target buyers.
              </p>
            </div>
            
            <div className="lg:col-span-5 hidden lg:block">
              <div className="glass-panel rounded-xl overflow-hidden border border-industry-slate-800 shadow-2xl relative">
                <img
                  src="/images/applications_banner.png"
                  alt="Industrial finishing application scenarios"
                  className="object-cover w-full h-48 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>
            </div>
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
                <h2 className="text-2xl font-black text-white mt-1">Application Workflows</h2>
                <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">
                  Tailored accessory configurations for metal, wood, automotive, jewelry, and drywall trades.
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Metalworking Synergy:</strong> Pairing high-stress zirconia fiber discs for weld leveling with spiral-stitched wheels and emery waxes for deburring.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Wood & Drywall:</strong> Clog-free drywall mesh screens (silicon carbide) and J-weight cloth rolls configured for workshop dispenser racks.</span>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Automotive & Jewelry:</strong> 1/4&quot; hex shank-mounted domes and cylinders for recessed alloy polishing alongside spring-tensioned micro sanding belts.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Distribution Kits:</strong> Customizable tool pairings in private labeled double blisters or FBA-compliant boxes with low MOQs (500 sets).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Matrix */}
      <section className="py-16 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app) => (
              <div
                key={app.id}
                id={app.id}
                className="glass-panel p-8 rounded-lg flex flex-col justify-between hover:border-industry-orange/40 transition-colors group border-t-2 border-t-industry-slate-800 focus-within:border-industry-orange"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-industry-orange font-mono uppercase tracking-wide">
                      {app.tag}
                    </span>
                    <span className="text-[10px] font-mono text-industry-slate-500 uppercase bg-industry-slate-950 px-2 py-0.5 rounded border border-industry-slate-800">
                      Workflow ID: {app.id.substring(0, 3).toUpperCase()}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-extrabold text-white group-hover:text-industry-orange transition-colors">
                    {app.name}
                  </h3>
                  
                  <div className="text-sm text-industry-slate-300 leading-relaxed pt-2">
                    <strong className="text-white text-xs block uppercase mb-1">Process Challenge:</strong>
                    {app.challenges}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-industry-slate-850 pt-4 text-xs font-mono">
                    <div>
                      <span className="text-industry-slate-500 block uppercase">Recommended Tools:</span>
                      <span className="text-white font-bold leading-normal">{app.products}</span>
                    </div>
                    <div>
                      <span className="text-industry-slate-500 block uppercase">Sourcing Packaging:</span>
                      <span className="text-white font-bold leading-normal">{app.packaging}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-industry-slate-850 pt-4">
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-industry-orange hover:text-industry-orange-light uppercase tracking-wider transition-colors"
                  >
                    Request Application Quote &rarr;
                  </Link>
                  <Link
                    href="/sample-kit"
                    className="text-xs font-bold text-white bg-industry-slate-850 hover:bg-industry-slate-800 px-4 py-2 rounded transition-colors"
                  >
                    Request Sample Kit
                  </Link>
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
              Tool matching, substrate solutions, packaging specs, and bulk configurations for custom applications.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How do I choose between cotton buffing wheels and zirconia fiber discs for metalworking?",
                a: "Zirconia fiber discs are engineered for aggressive material removal, weld leveling, and rust grinding. Once the surface is mechanically prepped and flat, cotton buffing wheels paired with abrasive compounds (like Black Emery or White Rouge) are used to deburr, clean, and color the metal to a reflective finish."
              },
              {
                q: "What are the default grit options included in woodworking and sanding paper kits?",
                a: "For woodworking and refinishing, our kits typically range from coarse P80 and P120 (for shaping and varnish stripping) up to P180, P240, and P320 (for pre-stain grain smoothing). Sourcing agents can customize this mix for their specific market target."
              },
              {
                q: "Are the drywall sanding screens compatible with automated dust-extraction tools?",
                a: "Yes. Our silicon carbide drywall mesh screens feature an open fiberglass design that allows standard vacuum sanders to draw dust directly through the screen. We cut mesh sheets to standard 9x11\" and 3.25x11\" dimensions to fit popular orbital and manual hand sanders."
              },
              {
                q: "Can we configure automotive wheel-polishing kits with custom shanks and compound weights?",
                a: "Yes. We offer standard 1/4\" round and hex shank adapter fittings for power drills and impact drivers, and can bundle these with 100g or 250g compound bars. We package these into custom-molded blister packs featuring your branding."
              },
              {
                q: "Do you offer private labeled, application-specific kits for ecommerce store launches?",
                a: "Yes, this is our specialty. Sourcing managers can define a targeted workflow (like 'Boat Gelcoat Repair' or 'Knife Mirror Polishing') and choose the exact combination of wheels, pads, and abrasives. We provide custom color box packaging with barcodes, pre-sorted and ready for ecommerce fulfillment."
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
            "@id": "https://www.scottchentools.com/applications#faqpage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I choose between cotton buffing wheels and zirconia fiber discs for metalworking?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Zirconia fiber discs are engineered for aggressive material removal, weld leveling, and rust grinding. Once the surface is mechanically prepped and flat, cotton buffing wheels paired with abrasive compounds (like Black Emery or White Rouge) are used to deburr, clean, and color the metal to a reflective finish."
                }
              },
              {
                "@type": "Question",
                "name": "What are the default grit options included in woodworking and sanding paper kits?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For woodworking and refinishing, our kits typically range from coarse P80 and P120 (for shaping and varnish stripping) up to P180, P240, and P320 (for pre-stain grain smoothing). Sourcing agents can customize this mix for their specific market target."
                }
              },
              {
                "@type": "Question",
                "name": "Are the drywall sanding screens compatible with automated dust-extraction tools?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Our silicon carbide drywall mesh screens feature an open fiberglass design that allows standard vacuum sanders to draw dust directly through the screen. We cut mesh sheets to standard 9x11\" and 3.25x11\" dimensions to fit popular orbital and manual hand sanders."
                }
              },
              {
                "@type": "Question",
                "name": "Can we configure automotive wheel-polishing kits with custom shanks and compound weights?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We offer standard 1/4\" round and hex shank adapter fittings for power drills and impact drivers, and can bundle these with 100g or 250g compound bars. We package these into custom-molded blister packs featuring your branding."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer private labeled, application-specific kits for ecommerce store launches?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, this is our specialty. Sourcing managers can define a targeted workflow (like 'Boat Gelcoat Repair' or 'Knife Mirror Polishing') and choose the exact combination of wheels, pads, and abrasives. We provide custom color box packaging with barcodes, pre-sorted and ready for ecommerce fulfillment."
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
