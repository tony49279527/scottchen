import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { buildFaqPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Flap Disc Sourcing | Type 27 & 29 Wholesale | SCOTTCHEN",
  description: "OEM flap disc sourcing in China. Compare Type 27 and 29 zirconia or ceramic flap disc specifications, samples, packaging and quoted MOQ.",
  path: "/flap-discs",
  alternatePath: "/zh/flap-discs",
});

export default function FlapDiscsPage() {
  const subtypes = [
    {
      name: "Type 27 (Depressed Center) Flap Discs",
      desc: "Type 27 flap discs use a relatively flat working face and are commonly evaluated for flat-surface grinding, weld blending and surface preparation. The exact hub, backing, diameter, arbor, grain, grit and rated speed must match the buyer's grinder, guard and approved SKU documents.",
      features: ["Flat-profile application to validate", "Common RFQ diameters: 4.5\", 5\", 7\"", "Common RFQ grits: P36, P40, P60, P80, P120", "Backing and arbor confirmed by SKU"],
    },
    {
      name: "Type 29 (Conical) Flap Discs",
      desc: "Type 29 flap discs use a conical working face that can be evaluated for edges, weld seams and contours. Angle, contact behavior, stock-removal rate, finish and safe operating conditions depend on the quoted construction and must be compared on representative samples.",
      features: ["Conical-profile application to validate", "Weld, edge and contour test scenarios", "Common RFQ diameters: 4.5\", 5\", 7\"", "Zirconia or ceramic options subject to quotation"],
    },
    {
      name: "Zirconia Alumina Flap Discs",
      desc: "Zirconia alumina configurations can be evaluated for steel, stainless steel and alloy grinding. Cloth source, flap count, backing, rated speed, cut rate, heat and service life vary by construction, so the approved choice should come from a controlled comparison against the buyer's workpiece and operating conditions.",
      features: ["Zirconia material source confirmed in the quotation", "Sample testing can compare cut rate and service life", "Application suitability approved against buyer test conditions", "Density options confirmed by SKU"],
    },
    {
      name: "Ceramic Alumina Flap Discs",
      desc: "Ceramic alumina can be evaluated for stainless steel, high-alloy steel and higher-pressure grinding. Cut rate, heat, service life and cost depend on the abrasive cloth, disc construction, workpiece, tool and operating conditions, so comparative performance must be approved through representative sample testing rather than a fixed website percentage.",
      features: ["Ceramic grain option quoted by SKU", "Heat and cut-rate targets defined in the RFQ", "Service life compared under buyer-approved test conditions", "Material and application scope confirmed in writing"],
    },
    {
      name: "Aluminum Oxide Flap Discs",
      desc: "Aluminum oxide configurations can be evaluated for general-purpose metal sanding, woodworking and lighter-duty applications. Price, cut rate, finish and service life depend on the cloth and disc construction; suitability and any cost advantage must be confirmed in the SKU quotation and sample test.",
      features: ["Aluminum oxide option quoted by SKU", "Target workpiece recorded in the RFQ", "Density and backing confirmed in writing", "Common RFQ grits: P40 through P120"],
    },
    {
      name: "High-Density Jumbo Flap Discs",
      desc: "High-density flap-disc constructions use additional abrasive flaps and can be compared with standard-density discs for higher-volume grinding. Flap count, dimensions, grain, backing and expected service life must be defined for the quoted SKU and verified under the buyer's operating conditions.",
      features: ["Flap count and density confirmed by SKU", "Service life verified by comparative sample test", "Application conditions recorded in the approval plan", "Zirconia or ceramic configurations subject to quotation"],
    },
  ];

  const faqs = [
    {
      q: "What is the minimum order quantity for wholesale flap discs?",
      a: "MOQ is quoted per diameter, profile, grit, grain, density, backing and packaging format. Ceramic materials, high-density constructions and printed packaging can have different setup quantities. Require the SKU-level quotation to identify all minimums and mixed-SKU assumptions.",
    },
    {
      q: "What is the difference between Type 27 and Type 29 flap discs?",
      a: "Type 27 presents a relatively flat working face, while Type 29 presents a conical face. Type 27 can be evaluated for flat blending and finishing; Type 29 can be evaluated for edges, weld seams and contours. Final selection requires the exact grinder, guard, angle, pressure, workpiece, rated speed and representative sample result.",
    },
    {
      q: "Are your flap discs suitable for stainless steel?",
      a: "Zirconia or ceramic configurations can be evaluated for stainless steel. State any iron, sulfur and chlorine limit in the RFQ and require material or test evidence for the exact quoted SKU. Final suitability, heat behavior and finish should be approved through representative sample testing.",
    },
    {
      q: "What safety certifications do your flap discs meet?",
      a: "The RFQ should state the target market, applicable safety standard, maximum RPM, grinder and guard compatibility, label requirements and evidence needed for the exact disc. Request report numbers, covered sizes and validity instead of relying on a general ISO, EN12413, MPA or oSa statement.",
    },
    {
      q: "What is the production lead time for flap disc orders?",
      a: "Lead time depends on the production source, abrasive cloth, construction, packaging, sample approval, inspection and quantity. Require dated material, sample, production, inspection and shipment milestones in the written quotation; this page does not promise a standard or rush schedule.",
    },
    {
      q: "Can you supply flap discs under our private label brand?",
      a: "Private-label scope can include printed labels, shrink wrap, color sleeves, cartons, blister packs and buyer-supplied UPC, EAN or FNSKU data. Safety text, translations and current retailer or marketplace requirements must be supplied and approved by the buyer; MOQ and print setup are confirmed in the quotation.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Flap Discs", href: "/flap-discs" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">B2B Wholesale &amp; OEM</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              Flap Disc Sourcing &amp; OEM Project Support
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              OEM flap disc sourcing for Type 27 and Type 29 configurations in zirconia alumina, ceramic and aluminum oxide. Confirm backing, balance criteria, rated speed, sample plan and MOQ per quoted SKU.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link href="/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-orange-hover hover:scale-[1.02] text-center">
              Request Quote
            </Link>
            <Link href="/sample-kit" className="inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-slate-750 text-center">
              Get Samples
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
                <div className="text-2xl font-black text-industry-orange">Written Plan</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Lead Time</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">Per Market</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Documents Checked</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">Per SKU</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Balance Criteria</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-5">
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Why SCOTTCHEN</span>
                <h2 className="text-2xl font-extrabold text-white tracking-wide">
                  Shanghai B2B Flap Disc Sourcing and OEM Support
                </h2>
                <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                  <p>
                    SCOTTCHEN provides Shanghai-based B2B sourcing and OEM project support for Type 27 and Type 29 flap-disc inquiries. The responsible production source, abrasive cloth, backing, construction, rated speed and applicable documents must be identified for the exact quoted SKU rather than inferred from a general factory or history claim.
                  </p>
                  <p>
                    The quotation should state the abrasive-cloth source, flap count, backing, bond construction and agreed inspection plan. Material origin, bond integrity, balance, run-out and speed-related evidence are confirmed per SKU through supplier documents, representative samples and the written quality plan.
                  </p>
                  <p>
                    Buyers can compare standard- and high-density configurations under a common test plan. Cut rate, service life, vibration, finish and packaging requirements should be measured against the approved sample; MOQ, lead time, payment and Incoterms are confirmed in the written quotation or contract.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  Flap Disc Types &amp; Configurations
                </h2>
                <div className="space-y-6">
                  {subtypes.map((sub) => (
                    <div key={sub.name} className="glass-panel p-6 rounded-lg space-y-4 border border-industry-slate-800">
                      <h3 className="text-lg font-bold text-industry-orange">{sub.name}</h3>
                      <p className="text-sm text-industry-slate-300 leading-relaxed">{sub.desc}</p>
                      <div className="border-t border-industry-slate-800/80 pt-4">
                        <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">Key Specifications:</span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-industry-slate-400 font-mono">
                          {sub.features.map((feat) => (
                            <li key={feat} className="flex items-center space-x-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-industry-orange shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  Common RFQ Reference — Availability Not Implied
                </h2>
                <p className="text-xs text-industry-slate-400">These combinations are inquiry examples, not approved SCOTTCHEN SKUs. Source, construction, rated speed, evidence and availability are confirmed in the written quotation.</p>
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">Size</th>
                        <th className="px-4 py-3 font-semibold uppercase">Arbor</th>
                        <th className="px-4 py-3 font-semibold uppercase">Grit Range</th>
                        <th className="px-4 py-3 font-semibold uppercase">Backing</th>
                        <th className="px-4 py-3 font-semibold uppercase">Type</th>
                        <th className="px-4 py-3 font-semibold uppercase">Material</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr>
                        <td className="px-4 py-3">4.5\" (115mm)</td>
                        <td className="px-4 py-3">7/8\"</td>
                        <td className="px-4 py-3">P36 - P120</td>
                        <td className="px-4 py-3">Fiberglass</td>
                        <td className="px-4 py-3">Type 27 / T29</td>
                        <td className="px-4 py-3">Zirconia / Ceramic / A/O</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3">5\" (125mm)</td>
                        <td className="px-4 py-3">7/8\"</td>
                        <td className="px-4 py-3">P36 - P320</td>
                        <td className="px-4 py-3">Fiberglass</td>
                        <td className="px-4 py-3">Type 27 / T29</td>
                        <td className="px-4 py-3">Zirconia / Ceramic / A/O</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">7\" (180mm)</td>
                        <td className="px-4 py-3">7/8\"</td>
                        <td className="px-4 py-3">P36 - P120</td>
                        <td className="px-4 py-3">Fiberglass (heavy-duty)</td>
                        <td className="px-4 py-3">Type 27 / T29</td>
                        <td className="px-4 py-3">Zirconia / Ceramic</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  Applications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Weld grinding and weld seam removal",
                    "Heavy stock removal on carbon steel",
                    "Deburring and edge chamfering",
                    "Stainless steel finishing and blending",
                    "Steel fabrication and structural steel work",
                    "Foundry and casting cleaning",
                    "Rust, scale, and oxidation removal",
                    "Pipe and tube notching and grinding",
                  ].map((app) => (
                    <div key={app} className="glass-panel p-4 rounded border border-industry-slate-800 flex items-start">
                      <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-industry-slate-200">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  Why Choose Our Flap Discs
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Documented Material Source", desc: "Abrasive-cloth brand, grade and country of origin are stated only when supported for the quoted SKU." },
                    { title: "Backing Specification", desc: "Backing material, dimensions and construction are recorded in the approved specification." },
                    { title: "Agreed Balance Criteria", desc: "Balance, run-out and sample acceptance methods are defined in the written quality plan." },
                    { title: "Bond Evidence", desc: "Bond construction and any strength or speed-related test evidence are requested for the exact SKU." },
                    { title: "Stainless Limits by SKU", desc: "Any Fe, S or Cl limit must be stated in the RFQ and supported by applicable evidence." },
                    { title: "Private Label Scope", desc: "Custom labels, retail packaging, buyer-supplied barcode data and branded cartons are documented in the approved artwork." },
                  ].map((adv) => (
                    <div key={adv.title} className="glass-panel p-5 rounded-lg border border-industry-slate-800">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded bg-industry-orange/20 flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-industry-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-sm font-bold text-white">{adv.title}</h3>
                      </div>
                      <p className="text-xs text-industry-slate-400 leading-relaxed">{adv.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-industry-slate-950 border border-industry-slate-800 p-8 rounded-lg space-y-5">
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">OEM &amp; Private Label</span>
                <h2 className="text-xl font-extrabold text-white">OEM / Private Label Capabilities</h2>
                <div className="text-sm text-industry-slate-300 leading-relaxed space-y-4">
                  <p>
                    SCOTTCHEN supports OEM flap-disc sourcing for distributors, welding suppliers, tool brands and industrial buyers. The written RFQ and quotation can compare grain, density, Type 27 or Type 29 profile, flap angle, backing and application requirements while naming the responsible production source.
                  </p>
                  <p>
                    Private-label scope can include shrink wrap, printed labels, color boxes, industrial cartons or blister packs. Applicable grit convention, maximum RPM, warnings, translations and buyer-supplied barcode data must be verified for the target market and recorded in the approved artwork; no FEPA, ANSI or marketplace acceptance is implied by this page.
                  </p>
                  <p>
                    If a project requires a nonstandard grain, backing or construction, the RFQ can ask identified sources to assess feasibility. Any formulation, engineering responsibility, setup cost, safety evidence, sample plan and production approval must be stated in the quotation; this page does not claim in-house formulation or development capability.
                  </p>
                </div>
                <div className="pt-2">
                  <Link href="/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover">
                    Request OEM Flap Disc Quote
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
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

            <div className="lg:col-span-4 space-y-6">
              <div className="glass-panel rounded-lg overflow-hidden border border-industry-slate-800 shadow-xl relative">
                <Image
                  width={1024}
                  height={1024}
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  quality={70}
                  loading="lazy"
                  src="/images/fiber_discs.webp"
                  alt="SCOTTCHEN flap disc sourcing and wholesale project support"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  B2B Sourcing Parameters
                </h3>
                <div className="space-y-4 text-xs font-mono">
                  <div><span className="text-industry-slate-500 block">MOQ:</span><span className="text-white font-bold">Quoted per size, grit and construction</span></div>
                  <div><span className="text-industry-slate-500 block">Lead Time:</span><span className="text-white font-bold">Quoted by SKU, packaging and sample approval</span></div>
                  <div><span className="text-industry-slate-500 block">Rated Speed:</span><span className="text-white font-bold">Verify SKU label, report coverage and tool instructions</span></div>
                  <div><span className="text-industry-slate-500 block">Tool &amp; Guard:</span><span className="text-white font-bold">Approve against the buyer's exact equipment</span></div>
                  <div><span className="text-industry-slate-500 block">Safety Evidence:</span><span className="text-white font-bold">Quoted per market, size and construction</span></div>
                  <div><span className="text-industry-slate-500 block">Packaging:</span><span className="text-white font-bold">Shrink wrap, color boxes, bulk cartons</span></div>
                </div>
                <div className="pt-4 border-t border-industry-slate-850">
                  <Link href="/sample-kit" className="w-full inline-flex justify-center items-center rounded border border-industry-orange text-industry-orange font-bold uppercase tracking-wider py-3 hover:bg-industry-orange hover:text-white transition-all text-xs">
                    Request Sample Discs
                  </Link>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Related Categories
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/resources/flap-disc-rfq-guide" className="font-bold text-industry-orange hover:underline">Flap Disc RFQ Guide</Link></li>
                  <li><Link href="/cutting-wheels" className="text-industry-orange hover:underline">Cutting Wheels</Link></li>
                  <li><Link href="/sanding-discs" className="text-industry-orange hover:underline">Sanding Discs</Link></li>
                  <li><Link href="/sanding-belts" className="text-industry-orange hover:underline">Sanding Belts</Link></li>
                  <li><Link href="/buffing-wheels" className="text-industry-orange hover:underline">Buffing Wheels</Link></li>
                  <li><Link href="/wholesale-abrasives" className="text-industry-orange hover:underline">Wholesale Abrasives Program</Link></li>
                </ul>
              </div>
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
                "@type": "ProductGroup",
                "@id": absoluteUrl("/flap-discs#productgroup"),
                "name": "SCOTTCHEN Flap Discs",
                "description": "OEM Type 27 and Type 29 flap discs in zirconia alumina, ceramic, and aluminum oxide on fiberglass backing plates.",
                "url": absoluteUrl("/flap-discs"),
                "image": absoluteUrl("/images/fiber_discs.webp"),
                "brand": { "@id": absoluteUrl("/#brand") },
                "category": "Flap discs and abrasive flap wheels",
                "material": "Zirconia alumina, ceramic, aluminum oxide on fiberglass backing",
                "additionalProperty": [
                  { "@type": "PropertyValue", "name": "Shapes", "value": "Type 27 flat and Type 29 conical" },
                  { "@type": "PropertyValue", "name": "MOQ basis", "value": "Quoted by size, grit, construction, packaging and quantity" }
                ],
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
