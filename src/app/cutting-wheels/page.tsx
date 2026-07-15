import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { buildFaqPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Cutting Disc & Cut-Off Wheel Sourcing | SCOTTCHEN",
  description: "China OEM cut-off wheel sourcing for metal and stainless steel in 4.5 to 9 inch sizes. Compare specifications, safety documents, samples and quoted MOQ.",
  path: "/cutting-wheels",
  alternatePath: "/zh/cutting-wheels",
});

export default function CuttingWheelsPage() {
  const subtypes = [
    {
      name: "Metal Cutting-Off Wheels (Type 1 / Type 41)",
      desc: "Type 1 / Type 41 flat cutting-wheel configurations can be evaluated for metal cutting. The buyer must provide the workpiece, section, tool, guard, spindle, operating conditions and target market; formulation, reinforcement, rated speed, cut result and safety evidence are then approved for the exact quoted SKU.",
      features: ["Flat Type 1/Type 41 profile for straight cutting", "Thickness confirmed by diameter and SKU", "Abrasive formulation confirmed in the approved specification", "Reinforcement and safety evidence verified per SKU"],
    },
    {
      name: "Stainless Steel (INOX) Cutting Discs",
      desc: "INOX cutting-disc configurations can be evaluated for stainless steel and high-alloy applications. The buyer must state any iron, sulfur and chlorine limit, abrasive formulation, target standard and end-use restrictions in the RFQ, then require applicable evidence for the exact quoted SKU.",
      features: ["Fe, S and Cl limits stated by the buyer", "Formulation and material evidence confirmed per SKU", "Corrosion and heat claims verified by representative test", "Tool, guard and application compatibility approved in writing"],
    },
    {
      name: "Thin Cut-Off Wheels (1.0-1.6mm)",
      desc: "Common ultra-thin inquiry thicknesses include 1.0mm, 1.2mm and 1.6mm. Kerf, cut time, burr, heat, life and stability depend on formulation, reinforcement, workpiece, tool and feed; compare candidates under the same test method and approve only with applicable evidence for the exact SKU.",
      features: ["Common RFQ thicknesses: 1.0mm, 1.2mm, 1.6mm", "Kerf and cut time measured in the sample test", "Heat, burr and wear recorded under common conditions", "Metal or INOX scope confirmed by formulation and evidence"],
    },
    {
      name: "Depressed Center Cutting Wheels (Type 27)",
      desc: "A depressed-center cutting-wheel inquiry must identify the wheel type, permitted use, tool, guard, flange, thickness and rated speed. Do not use a cutting wheel for side grinding unless the exact product label, responsible producer and applicable safety documents explicitly permit that operation.",
      features: ["Depressed-center profile confirmed by SKU", "Thickness and permitted operation stated on approved label", "Tool, guard and flange compatibility checked", "Metal or INOX formulation supported by evidence"],
    },
    {
      name: "Cast Iron & Foundry Cutting Wheels",
      desc: "Cast-iron and foundry cutting-wheel configurations can use silicon carbide or aluminum-oxide blends. Material, bond, reinforcement, diameter, rated speed and expected life must be defined for the quoted SKU and compared on the buyer's equipment and workpiece.",
      features: ["Abrasive blend confirmed by SKU", "Bond and service-life targets tested under agreed conditions", "Reinforcement supported by the approved specification", "Diameter and machine compatibility confirmed in writing"],
    },
    {
      name: "Masonry & Stone Cutting Discs",
      desc: "Masonry or stone cutting-wheel configurations can use silicon carbide or other formulations. The quoted source must identify the target material, bond, reinforcement, diameter, rated speed, tool, guard and applicable safety evidence; performance and suitability are approved through representative testing.",
      features: ["Target mineral material stated in the RFQ", "Grain, bond and reinforcement confirmed by SKU", "Diameter and rated speed checked against the tool", "Safety evidence verified for the quoted construction"],
    },
  ];

  const faqs = [
    {
      q: "What is the MOQ for wholesale cut-off wheel orders?",
      a: "MOQ is quoted per diameter, thickness, formulation, label and packaging format. Thin wheels, INOX formulations, printed labels and retail packs can have different setup quantities. Require the quotation to identify every MOQ assumption instead of applying one website number across all cut-off wheels.",
    },
    {
      q: "Which cutting-wheel safety documents should a buyer request?",
      a: "State the target market and applicable standard in the RFQ, then request the certificate or test report number, issuing body, covered product family, dimensions, validity and label requirements for the exact quoted SKU. Do not rely on a general website statement as evidence of EN12413, ANSI B7.1, MPA, oSa or any other market requirement.",
    },
    {
      q: "What sizes and thicknesses are available?",
      a: "Common inquiry dimensions include 4\" through 14\" diameters, several thicknesses and different arbor sizes. Availability, dimensional tolerance, rated speed, tool and guard compatibility, production source and applicable evidence must be confirmed for the exact quoted SKU.",
    },
    {
      q: "Can I use metal cutting discs on stainless steel?",
      a: "Do not assume a general metal wheel is suitable for stainless steel. State the material, tool, guard, target standard and any Fe, S or Cl limit in the RFQ, then verify the exact INOX formulation with applicable documents and representative sample tests before approval.",
    },
    {
      q: "How are cutting discs packaged for wholesale distribution?",
      a: "Packaging can be quoted as industrial cartons, shrink-wrapped bundles, color boxes, blister packs or storage tins. The buyer must provide current safety text, translations, barcode data and channel requirements; the final label and carton scope is controlled by the approved artwork rather than an assumed marketplace-compliance claim.",
    },
    {
      q: "What is the shelf life and storage recommendation for cutting wheels?",
      a: "Shelf life, manufacture date, storage orientation and recommended-use period must follow the exact product label, responsible producer's instructions and applicable market requirements. Require these details in the approved specification and label artwork; this page does not set a universal three-year period or claim that every wheel is date-marked.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cutting Wheels", href: "/cutting-wheels" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">B2B Wholesale &amp; OEM</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              Cutting Disc Sourcing &amp; OEM Project Support
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              OEM cut-off wheel sourcing for metal, stainless steel (INOX), cast iron, and masonry applications. Confirm reinforcement, formulation, rated speed, safety documents, MOQ and inspection scope for the exact quoted SKU.
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
                <div className="text-2xl font-black text-industry-orange">Per Market</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Documents Checked</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">Per SKU</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">INOX Limits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">Per SKU</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Reinforcement Verified</div>
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
                  Cut-Off Wheel Specifications and Safety Evidence for B2B Buyers
                </h2>
                <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                  <p>
                    SCOTTCHEN provides Shanghai-based B2B sourcing and OEM project support for bonded cutting-wheel inquiries. The responsible production source, formulation, reinforcement, rated speed, applicable standard and report coverage must be identified for the exact quoted SKU; this page does not assert an owned factory or manufacturing history.
                  </p>
                  <p>
                    Cutting wheel safety is non-negotiable, so the RFQ must name the applicable market standard, rated speed, guard and tool compatibility, reinforcement construction, label warnings and required test evidence. For INOX wheels, state the allowed iron, sulfur and chlorine limits and request test evidence for the quoted formulation. Approval should be based on applicable documents and representative samples, not generic marketing claims.
                  </p>
                  <p>
                    Cut rate, wheel life, burr, temperature and stability depend on formulation, reinforcement, workpiece, tool and operation. Compare candidate SKUs under one approved test method, then record the selected construction, inspection plan, MOQ, lead time, payment and Incoterms in the quotation or contract.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  Cutting Wheel Types &amp; Product Range
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
                  Common RFQ Dimensions — Not Approved SKU Data
                </h2>
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">Size</th>
                        <th className="px-4 py-3 font-semibold uppercase">Thickness</th>
                        <th className="px-4 py-3 font-semibold uppercase">Arbor</th>
                        <th className="px-4 py-3 font-semibold uppercase">Rated-Speed Evidence</th>
                        <th className="px-4 py-3 font-semibold uppercase">Application</th>
                        <th className="px-4 py-3 font-semibold uppercase">Material</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr>
                        <td className="px-4 py-3">4.5\" (115mm)</td>
                        <td className="px-4 py-3">1.0 / 1.2 / 1.6 / 2.5 / 3.2mm</td>
                        <td className="px-4 py-3">7/8\" (22.23mm)</td>
                        <td className="px-4 py-3">Per SKU label and report</td>
                        <td className="px-4 py-3">Metal / INOX</td>
                        <td className="px-4 py-3">A/O / White A/O</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3">5\" (125mm)</td>
                        <td className="px-4 py-3">1.0 / 1.2 / 1.6 / 2.5 / 3.2mm</td>
                        <td className="px-4 py-3">7/8\" (22.23mm)</td>
                        <td className="px-4 py-3">Per SKU label and report</td>
                        <td className="px-4 py-3">Metal / INOX</td>
                        <td className="px-4 py-3">A/O / White A/O</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">7\" (180mm)</td>
                        <td className="px-4 py-3">1.6 / 2.0 / 2.5 / 3.2mm</td>
                        <td className="px-4 py-3">7/8\" (22.23mm)</td>
                        <td className="px-4 py-3">Per SKU label and report</td>
                        <td className="px-4 py-3">Metal / INOX</td>
                        <td className="px-4 py-3">A/O / White A/O</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3">9\" (230mm)</td>
                        <td className="px-4 py-3">1.9 / 2.0 / 2.5 / 3.2mm</td>
                        <td className="px-4 py-3">7/8\" (22.23mm)</td>
                        <td className="px-4 py-3">Per SKU label and report</td>
                        <td className="px-4 py-3">Metal / INOX / Cast Iron</td>
                        <td className="px-4 py-3">A/O / SiC Blend</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">14\" (355mm)</td>
                        <td className="px-4 py-3">2.5 / 3.0 / 3.2 / 4.0mm</td>
                        <td className="px-4 py-3">1\" (25.4mm) / 20mm</td>
                        <td className="px-4 py-3">Per SKU label and report</td>
                        <td className="px-4 py-3">Chop saw: Metal / Masonry</td>
                        <td className="px-4 py-3">A/O / SiC</td>
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
                    "Steel fabrication and structural steel cutting",
                    "Pipe and tube cutting (steel, stainless, EMT)",
                    "Stainless steel fabrication and food equipment",
                    "Sheet metal and auto body panel cutting",
                    "Rebar and reinforcing steel cutting",
                    "Foundry and cast iron cutting",
                    "Construction site metal cutting",
                    "Masonry, brick, block, and concrete cutting",
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
                  Why Choose Our Cutting Wheels
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Safety Evidence by SKU", desc: "Request the applicable standard, report number, issuing body, covered dimensions, validity and label scope for the exact wheel." },
                    { title: "Reinforcement by SKU", desc: "Layer count, mesh, construction and related safety evidence are confirmed in the approved specification." },
                    { title: "INOX Limits by SKU", desc: "Any Fe, S or Cl limit requires applicable material or test evidence for the quoted wheel." },
                    { title: "Comparative Cut Test", desc: "Kerf, burr, temperature, cut time and wear are compared under buyer-approved conditions." },
                    { title: "Written Quality Plan", desc: "Dimensional, rotational, side-load or other checks and sampling are agreed per order." },
                    { title: "Private Label Scope", desc: "Branded labels, color boxes, tins and multilingual instructions can be scoped from buyer-approved safety and channel requirements." },
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
                    SCOTTCHEN supports OEM and private-label cutting-wheel sourcing for distributors, welding suppliers, tool brands and industrial buyers. Grain, formulation, thickness, profile, reinforcement, label and packaging options are confirmed with the responsible production source in the written quotation.
                  </p>
                  <p>
                    Private-label options can include shrink wrap, printed labels, color boxes, storage tins, blister packs and industrial cartons. The buyer is responsible for confirming the applicable standard, maximum RPM, safety pictograms, translations and channel barcode data; the approved artwork defines what may appear on the wheel and packaging.
                  </p>
                  <p>
                    Custom formulation requests require the application, workpiece, equipment, rated speed, performance targets and applicable standard. Development feasibility, samples, testing responsibility and any production commitment are confirmed in the project documents.
                  </p>
                </div>
                <div className="pt-2">
                  <Link href="/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover">
                    Request OEM Cutting Disc Quote
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
                  alt="SCOTTCHEN Cutting Wheels and Cut-Off Discs"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  B2B Sourcing Parameters
                </h3>
                <div className="space-y-4 text-xs font-mono">
                  <div><span className="text-industry-slate-500 block">MOQ:</span><span className="text-white font-bold">Quoted per size, formulation and pack</span></div>
                  <div><span className="text-industry-slate-500 block">Lead Time:</span><span className="text-white font-bold">Confirmed in written order schedule</span></div>
                  <div><span className="text-industry-slate-500 block">Safety Evidence:</span><span className="text-white font-bold">Confirmed for target market and SKU</span></div>
                  <div><span className="text-industry-slate-500 block">Diameters:</span><span className="text-white font-bold">4\" - 14\" (100mm - 355mm)</span></div>
                  <div><span className="text-industry-slate-500 block">Packaging:</span><span className="text-white font-bold">Bulk, color boxes, metal tins, blister packs</span></div>
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
                  <li><Link href="/resources/cutting-wheel-compliance-checklist" className="font-bold text-industry-orange hover:underline">Compliance Checklist</Link></li>
                  <li><Link href="/flap-discs" className="text-industry-orange hover:underline">Flap Discs</Link></li>
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
                "@id": absoluteUrl("/cutting-wheels#productgroup"),
                "name": "SCOTTCHEN Cutting Wheels & Cut-Off Discs",
                "description": "B2B sourcing support for cut-off wheels for metal, stainless steel, cast iron and masonry; reinforcement and compliance evidence are confirmed per SKU.",
                "url": absoluteUrl("/cutting-wheels"),
                "image": absoluteUrl("/images/fiber_discs.webp"),
                "brand": { "@type": "Brand", "name": "SCOTTCHEN" },
                "category": "Cutting wheels and cut-off discs",
                "material": "Resin-bonded abrasive; formulation and reinforcement confirmed per SKU",
                "additionalProperty": [
                  { "@type": "PropertyValue", "name": "MOQ basis", "value": "Quoted by size, formulation, label, packaging and quantity" },
                  { "@type": "PropertyValue", "name": "Reinforcement", "value": "Confirmed in the approved SKU specification" }
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
