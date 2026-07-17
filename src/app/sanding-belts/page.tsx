import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { buildFaqPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Sanding Belt Sourcing & OEM Project Support | SCOTTCHEN",
  description: "Sanding-belt sourcing for knife making, woodworking and metal fabrication. Sizes, materials, joints, source and terms are confirmed per SKU.",
  path: "/sanding-belts",
  alternatePath: "/zh/sanding-belts",
});

export default function SandingBeltsPage() {
  const subtypes = [
    {
      name: "Portable Belt Sander Belts (3x21, 4x24)",
      desc: "Portable-sander belt inquiries can start with common 3x21 and 4x24 formats for woodworking, refinishing or metal surface preparation. Machine model, exact dimensions, grain, backing, joint, direction and operating conditions must be confirmed before a source or SKU is approved.",
      features: ["Common RFQ sizes: 3\"x21\", 3\"x24\", 4\"x24\"", "Backing weight confirmed by application", "Joint and direction approved by sample", "Grain and grit range quoted by SKU"],
    },
    {
      name: "Bench Sander Belts (6x48, 4x36)",
      desc: "Bench-sander belt inquiries can cover formats such as 6x48 and 4x36 for shaping, grinding or finishing. Tool dimensions, tension, direction, workpiece and finish target control the grain, backing, joint and coat construction; availability is confirmed only in the written SKU quotation.",
      features: ["Common RFQ sizes: 6\"x48\", 4\"x36\", 6\"x88\"", "Backing selected against tool tension", "Joint direction confirmed before sampling", "Open- or closed-coat scope quoted by SKU"],
    },
    {
      name: "Narrow / File Belts (1x30, 1/2x18)",
      desc: "Narrow-belt inquiries can cover air files, finger sanders and detail grinders used in confined areas. The buyer should provide the machine, width, circumference, contact wheel, direction and target operation; grain, backing, joint and grit range are then confirmed by quotation and sample.",
      features: ["Common RFQ sizes: 1/2\"x18\", 3/4\"x20-1/2\", 1\"x30\", 1\"x42\"", "Backing flexibility confirmed by application", "Joint checked on the target tool", "Grit range quoted by SKU"],
    },
    {
      name: "Wide Sanding Belts",
      desc: "Wide belts for industrial wide-belt sanding machines can be evaluated for panel processing, furniture, plywood or metal applications. Width, circumference, grain, backing, joint, tracking criteria and responsible production source are confirmed for each quoted SKU and approved through representative samples.",
      features: ["Exact width and circumference supplied by buyer", "Backing selected for the machine and workpiece", "Joint and tracking criteria included in approval", "Coat and anti-static requirements quoted by SKU"],
    },
    {
      name: "Knife Making Belts (2x72)",
      desc: "A 2x72 belt program for knife-making should define each process step, workpiece steel, heat-treatment state, machine speed, pressure and finish target. Ceramic, zirconia, aluminum oxide or structured-abrasive options are evaluated only when the responsible source, construction and representative sample are documented.",
      features: ["Common RFQ size: 2\"x72\"", "Grain selected by process step", "Heat and loading behavior tested on the target steel", "Grit sequence quoted and sampled by SKU"],
    },
    {
      name: "Silicon Carbide Belts (Glass / Stone)",
      desc: "Silicon-carbide belt configurations can be evaluated for glass, stone, ceramic, coatings and selected non-ferrous materials. Wet use, backing, adhesive system, dimensions, grit range and scratch pattern must be specified by the quoted source and validated on the buyer's equipment and workpiece.",
      features: ["Silicon-carbide option quoted by SKU", "Wet or dry use stated in writing", "Target material and finish recorded", "Grit range confirmed by source and sample"],
    },
  ];

  const faqs = [
    {
      q: "What is the MOQ for wholesale sanding belt orders?",
      a: "MOQ is quoted per belt size, grit, grain, backing and joint. Custom widths, ceramic materials and specialty joints can have different cloth and setup minimums. Ask the quotation to state mixed-size, mixed-grit and trial-order assumptions explicitly.",
    },
    {
      q: "Can you produce sanding belts in custom sizes?",
      a: "Custom widths and circumferences can be evaluated after the buyer provides the machine, exact dimensions, grain, grit, backing, joint and application. Production source, tooling feasibility, sample quantity, setup charge and MOQ must be confirmed in the written quotation rather than assumed from this page.",
    },
    {
      q: "What joint types do you use on sanding belts?",
      a: "Butt, overlap or other joint constructions may suit different machines and finishes. The approved specification should identify the joint, direction, thickness or tolerance target and test method. Joint strength, tracking and finish are verified on representative samples and the agreed inspection plan.",
    },
    {
      q: "How long does sanding belt production take?",
      a: "Lead time depends on abrasive-cloth availability, dimensions, joint tooling, packaging, sample approval, inspection and quantity. Require dated material, sample, production, inspection and shipment milestones in the written quotation; this page does not promise standard, rush or stocked availability.",
    },
    {
      q: "What backing cloth weights are available?",
      a: "A quoted sanding-belt source can be evaluated across several backing weights: J-weight for flexible contour work, X-weight for general-purpose portable and bench sanding, Y-weight for heavier stock removal, YF polyester for higher-tension applications, and waterproof polyester where wet use is required. Availability and suitability depend on the exact size, tool, workpiece, pressure and approved sample.",
    },
    {
      q: "Do you offer private label packaging for sanding belts?",
      a: "Private-label scope can include cardboard sleeves, assortment boxes, cartons and blister packs. Brand files, dimensions, grit designation, warnings, instructions and barcode data must be buyer-approved and checked against current retailer or marketplace requirements.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Sanding Belts", href: "/sanding-belts" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">B2B Wholesale &amp; OEM</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              Sanding Belt Sourcing &amp; OEM Project Support
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              Shanghai-based B2B support for sanding-belt inquiries. Size, abrasive cloth, backing, joint, production source, sample plan, MOQ, lead time, payment and Incoterms are confirmed per SKU in writing.
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
                <div className="text-2xl font-black text-industry-orange">Custom Sizes</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Confirmed Per SKU</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">Written Plan</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Lead Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">Butt Joint</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Smooth Operation</div>
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
                  Shanghai B2B Sanding Belt Sourcing and OEM Support
                </h2>
                <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                  <p>
                    SCOTTCHEN provides Shanghai-based B2B sourcing and OEM project support for sanding-belt inquiries. The written quotation must name the responsible production source and define the size, abrasive cloth, backing, joint, packaging and inspection scope for the exact SKU; the website does not assert an owned factory, operating history or factory-direct price.
                  </p>
                  <p>
                    Sanding-belt performance depends on joint construction, abrasive coating, backing stability, workpiece, machine and operating conditions. Joint tolerance, bond, tracking, tension and finish criteria should be defined in the RFQ and verified through representative samples and the agreed quality plan instead of universal website claims.
                  </p>
                  <p>
                    Portable, narrow, knife-making, bench and wide-belt configurations can be compared from buyer drawings or samples. Feasibility, material source, sample charges, MOQ, lead time, payment and Incoterms remain subject to the SKU-level quotation or contract.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  Sanding Belt Types &amp; Product Range
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
                <p className="text-xs text-industry-slate-400">These combinations are inquiry examples, not approved SCOTTCHEN SKUs. Source, dimensions, backing, joint, evidence and availability are confirmed in the written quotation.</p>
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">Size (W x L)</th>
                        <th className="px-4 py-3 font-semibold uppercase">Grit Range</th>
                        <th className="px-4 py-3 font-semibold uppercase">Joint Type</th>
                        <th className="px-4 py-3 font-semibold uppercase">Backing</th>
                        <th className="px-4 py-3 font-semibold uppercase">Material</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr>
                        <td className="px-4 py-3">1\" x 30\"</td>
                        <td className="px-4 py-3">P40 - P1200</td>
                        <td className="px-4 py-3">Butt / Tape</td>
                        <td className="px-4 py-3">J/X-weight cloth</td>
                        <td className="px-4 py-3">A/O, Zirconia</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3">3\" x 21\"</td>
                        <td className="px-4 py-3">P36 - P400</td>
                        <td className="px-4 py-3">Butt joint</td>
                        <td className="px-4 py-3">X/Y-weight cloth</td>
                        <td className="px-4 py-3">A/O, Zirconia, Ceramic</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">4\" x 24\"</td>
                        <td className="px-4 py-3">P36 - P400</td>
                        <td className="px-4 py-3">Butt joint</td>
                        <td className="px-4 py-3">X/Y-weight cloth</td>
                        <td className="px-4 py-3">A/O, Zirconia, Ceramic</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3">4\" x 36\"</td>
                        <td className="px-4 py-3">P36 - P600</td>
                        <td className="px-4 py-3">Butt / Tape</td>
                        <td className="px-4 py-3">X/Y-weight cloth</td>
                        <td className="px-4 py-3">A/O, Zirconia, SiC</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">6\" x 48\"</td>
                        <td className="px-4 py-3">P36 - P600</td>
                        <td className="px-4 py-3">Butt / Tape</td>
                        <td className="px-4 py-3">Y-weight / Polyester</td>
                        <td className="px-4 py-3">A/O, Zirconia, Ceramic, SiC</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3">2\" x 72\"</td>
                        <td className="px-4 py-3">P36 - P2000</td>
                        <td className="px-4 py-3">Butt joint</td>
                        <td className="px-4 py-3">X/Y-weight cloth</td>
                        <td className="px-4 py-3">Ceramic, Zirconia, A/O, Trizact-style</td>
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
                    "Knife making and bladesmithing (2x72 grinders)",
                    "Woodworking and furniture sanding",
                    "Metal fabrication and weld removal",
                    "Tube and pipe polishing",
                    "Glass grinding and edge finishing",
                    "Stone, granite, and marble fabrication",
                    "Deck refinishing and surface preparation",
                    "Auto body sheet metal work",
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
                  Why Choose Our Sanding Belts
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Joint Specification", desc: "Joint type, direction, thickness target and acceptance method are defined for the quoted SKU." },
                    { title: "Bond and Backing Evidence", desc: "Bond, backing and operating-condition claims require applicable supplier data or sample tests." },
                    { title: "Custom Size Evaluation", desc: "Width, circumference, tooling feasibility and tolerance are confirmed from the machine, drawing or sample." },
                    { title: "Material Selection", desc: "Grain and backing options are compared against the workpiece, machine and buyer test plan." },
                    { title: "Written Inspection Plan", desc: "Tracking, tension, joint and dimensional checks and their sampling level are agreed per order." },
                    { title: "Private Label & Kits", desc: "Branded sleeves, color boxes, multi-grit packs and knife-making belt kits can use buyer-approved artwork and barcode data." },
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
                    SCOTTCHEN supports OEM and private-label sanding-belt sourcing for distributors, abrasive suppliers, tool brands and industrial buyers. The RFQ can cover dimensions, grain, backing, joint and special treatment requirements; the quotation identifies what the responsible production source can supply.
                  </p>
                  <p>
                    Private-label packaging may include sleeves, color boxes, cartons or assortment packs. The applicable grit convention, warnings, translations and buyer-supplied barcode data must be checked for the target market and recorded in approved artwork; no FEPA, ANSI or marketplace acceptance is implied.
                  </p>
                  <p>
                    For specialized equipment, buyers should provide drawings, operating conditions and performance targets. Feasibility, samples, testing responsibility and any production commitment are confirmed in the project quotation and approved specification.
                  </p>
                </div>
                <div className="pt-2">
                  <Link href="/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover">
                    Discuss Custom Belt Requirements
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
                  src="/images/sanding_tools.webp"
                  alt="SCOTTCHEN Abrasive Sanding Belts Wholesale"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  B2B Sourcing Parameters
                </h3>
                <div className="space-y-4 text-xs font-mono">
                  <div><span className="text-industry-slate-500 block">MOQ:</span><span className="text-white font-bold">Quoted per size, grit, backing and joint</span></div>
                  <div><span className="text-industry-slate-500 block">Custom Sizes:</span><span className="text-white font-bold">Any width x length, tooling fee may apply</span></div>
                  <div><span className="text-industry-slate-500 block">Lead Time:</span><span className="text-white font-bold">Quoted by size, material, packaging and quantity</span></div>
                  <div><span className="text-industry-slate-500 block">Grains:</span><span className="text-white font-bold">A/O, Zirconia, Ceramic, SiC, Non-woven</span></div>
                  <div><span className="text-industry-slate-500 block">Backing Weights:</span><span className="text-white font-bold">J, X, Y, YF, Waterproof Polyester</span></div>
                </div>
                <div className="pt-4 border-t border-industry-slate-850">
                  <Link href="/sample-kit" className="w-full inline-flex justify-center items-center rounded border border-industry-orange text-industry-orange font-bold uppercase tracking-wider py-3 hover:bg-industry-orange hover:text-white transition-all text-xs">
                    Request Belt Samples
                  </Link>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Related Categories
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/resources/sanding-belt-rfq-guide" className="font-bold text-industry-orange hover:underline">Sanding Belt RFQ Guide</Link></li>
                  <li><Link href="/sanding-discs" className="text-industry-orange hover:underline">Sanding Discs</Link></li>
                  <li><Link href="/flap-discs" className="text-industry-orange hover:underline">Flap Discs</Link></li>
                  <li><Link href="/abrasive-kits" className="text-industry-orange hover:underline">Knife Sharpening Belt Kits</Link></li>
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
                "@id": absoluteUrl("/sanding-belts#productgroup"),
                "name": "SCOTTCHEN Sanding Belts & Abrasive Belts",
                "description": "Wholesale sanding belts in aluminum oxide, zirconia, ceramic, and silicon carbide for knife making, woodworking, metal fabrication, glass, and stone.",
                "url": absoluteUrl("/sanding-belts"),
                "image": absoluteUrl("/images/sanding_tools.webp"),
                "brand": { "@id": absoluteUrl("/#brand") },
                "category": "Sanding belts and abrasive belts",
                "material": "Aluminum oxide, zirconia, ceramic, silicon carbide",
                "additionalProperty": [
                  { "@type": "PropertyValue", "name": "MOQ basis", "value": "Quoted by size, grain, backing, joint and quantity" },
                  { "@type": "PropertyValue", "name": "Custom sizing", "value": "Width and circumference cut to approved drawing" }
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
