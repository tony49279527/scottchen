import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import DecisionGuides from "@/components/DecisionGuides";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "OEM Cotton Buffing Wheel Sourcing | SCOTTCHEN",
  description: "Source cotton buffing wheels, spiral-stitched pads, flannel wheels, drill buffers and compound kits with SKU-level source and quoted terms.",
  path: "/products/buffing-polishing-wheels",
  alternatePath: "/zh/products/buffing-polishing-wheels",
});

export default function BuffingPolishingWheels() {
  const subtypes = [
    {
      name: "Spiral Stitched Cotton Buffing Wheels",
      desc: "A spiral-stitched construction can be evaluated for rough polishing, deburring or surface preparation. Fiber composition, ply count, thread, stitch spacing, bore, operating limit and performance must be confirmed by quoted SKU and representative test.",
      features: ["Ply count: confirmed by quoted SKU and sample", "Stitch pattern and spacing: documented in the approved specification", "Bore and insert: matched to the buyer's machine and verified by sample"],
    },
    {
      name: "Loose Flannel Polishing Wheels",
      desc: "A loose flannel construction can be evaluated for lighter buffing and coloring. Exact fiber composition, wheel construction, compound pairing, operating limit, heat and finish must be approved on the buyer's workpiece.",
      features: ["Material: fiber composition confirmed by SKU", "Stitching and edge construction: documented by source", "Use case and finish: tested on the buyer's workpiece"],
    },
    {
      name: "Bench Grinder Polishing Wheels (Extra Thick)",
      desc: "A bench-machine wheel inquiry category. Construction, dimensions, bore fit, guarding, labeled operating limit and acceptance checks must be confirmed in the approved SKU specification.",
      features: ["Diameter and thickness: matched to the tool and confirmed by SKU", "Layer construction: documented by source and checked on sample", "Bore insert and flange fit: approved against the buyer's machine"],
    },
    {
      name: "Drill Polishing Wheels (Mounted Cylindrical & Dome)",
      desc: "Shank-mounted dome, cone, cylinder or goblet shapes can be scoped for recessed or contoured areas. Shank dimensions, tool compatibility, operating limit, material and performance require SKU-level confirmation and sample approval.",
      features: ["Shank geometry and dimensions: confirmed against the tool", "Shape and material: selected from the workpiece and access requirement", "MOQ: quoted by approved SKU, material, packaging and quantity"],
    },
    {
      name: "Polishing Compound Bar Kits",
      desc: "Compound-bar inquiries can compare color-coded formulations for different cut and finish targets. Composition, hazards, intended substrate, bar weight, shelf information and performance must come from the responsible source and be approved with the exact wheel and workpiece.",
      features: ["Bar weight quoted by SKU", "Composition and safety information requested from source", "Wheel, substrate and finish target recorded", "Label and barcode scope approved before printing"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header (Top CTA area) */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Buffing & Polishing Wheels", href: "/products/buffing-polishing-wheels" },
            ]}
          />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">SPECIFICATIONS & OEM OPTIONS</span>
              <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
                Buffing & Polishing Wheels
              </h1>
              <p className="mt-3 text-base text-industry-slate-400">
                Sourcing inquiries for stitched or loose wheels, bench-machine and shank-mounted concepts, and compound bars.
              </p>
            </div>

            <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-orange-hover hover:scale-[1.02] text-center"
              >
                Request Buffing Wheel Quote
              </Link>
              <Link
                href="/sample-kit"
                className="inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-slate-750 text-center"
              >
                Get Sample Wheel Kit
              </Link>
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
                <h2 className="text-2xl font-black text-white mt-1">Buffing Wheel RFQ Fields</h2>
                <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">
                  Information that must be tied to an exact source, SKU, sample and written quotation before approval.
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Construction & Size:</strong> Diameter, thickness, ply count, fiber composition and stitch construction require source documents and sample measurements.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Tool Fit:</strong> Bore, insert, flange or shank geometry must be matched to the buyer's machine, guarding and labeled operating limits.</span>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Compound Pairing:</strong> Composition, hazards, bar weight, wheel pairing and finish target must come from the responsible source and be tested on the workpiece.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Written Order Terms:</strong> Production source, MOQ, sample charges, lead time, payment and Incoterms are confirmed by SKU and configuration in the quotation or contract.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-industry-slate-850 bg-industry-slate-950 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
                Procurement Evidence Pack
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-white">
                Facts buyers and AI answers can extract
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-industry-slate-400">
                Use these fields when comparing cotton buffing wheel suppliers or
                preparing an OEM polishing kit RFQ.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
              {[
                ["Primary products", "Spiral-stitched cotton wheels, loose flannel wheels, bench-grinder wheels, shank-mounted drill buffers and compound bar kits."],
                ["MOQ basis", "Quoted per wheel construction, size, shank or bore, packaging and order quantity."],
                ["Quoted lead time", "Dated material, sample, artwork, production, inspection and shipment milestones are confirmed in writing."],
                ["Packaging evidence", "Shrink wrap, blister card, color box, barcode label and buyer-approved warning/instruction layouts can be included in the pack specification."],
                ["Quality checks", "Dimensions, bore fit, construction, labeled operating limit, packaging and sample acceptance criteria are recorded against the approved SKU."],
                ["Next verification step", "Compare supplier facts on the evaluation guide, then request a sample wheel kit or submit an RFQ with tool, substrate and packaging requirements."],
              ].map(([label, value]) => (
                <div key={label} className="glass-panel rounded-lg p-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-industry-orange-light">
                    {label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-industry-slate-300">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white hover:border-industry-orange" href="/resources/oem-abrasive-supplier-evaluation">
              Evaluate supplier fit
            </Link>
            <Link className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white hover:border-industry-orange" href="/resources/abrasive-sourcing-checklist">
              Open RFQ checklist
            </Link>
            <Link className="rounded bg-industry-orange-cta px-5 py-3 text-sm font-bold text-white" href="/sample-kit">
              Request sample wheel kit
            </Link>
          </div>
        </div>
      </section>

      {/* Main Specs Section */}
      <section className="py-16 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Specification details */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  Product Subtypes & B2B Parameters
                </h2>
                
                <div className="space-y-8">
                  {subtypes.map((sub) => (
                    <div key={sub.name} className="glass-panel p-6 rounded-lg space-y-4">
                      <h3 className="text-lg font-bold text-industry-orange">{sub.name}</h3>
                      <p className="text-sm text-industry-slate-300 leading-relaxed">
                        {sub.desc}
                      </p>
                      <div className="border-t border-industry-slate-800/80 pt-4">
                        <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">Technical Capabilities:</span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-industry-slate-400 font-mono">
                          {sub.features.map((feat) => (
                            <li key={feat} className="flex items-center space-x-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-industry-orange" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Middle CTA */}
              <div className="bg-industry-slate-950 border border-industry-slate-800 p-8 rounded-lg text-center space-y-4">
                <h3 className="text-lg font-bold text-white uppercase">Looking for custom kit bundling and barcodes?</h3>
                <p className="text-sm text-industry-slate-400 max-w-lg mx-auto">
                  Blister packs or color boxes can be evaluated with buyer-approved artwork, warnings and buyer-supplied FNSKU or UPC data. Scope, sample scanning and marketplace responsibility are confirmed in writing.
                </p>
                <div className="pt-2">
                  <Link
                    href="/oem-private-label"
                    className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover"
                  >
                    Configure Custom Package Options
                  </Link>
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div id="spec-table" className="space-y-4">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  SKU Approval Matrix — No Published Standard Sizes
                </h2>
                
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">RFQ Field</th>
                        <th className="px-4 py-3 font-semibold uppercase">Buyer Input</th>
                        <th className="px-4 py-3 font-semibold uppercase">Source Evidence</th>
                        <th className="px-4 py-3 font-semibold uppercase">Sample Check</th>
                        <th className="px-4 py-3 font-semibold uppercase">Approval Record</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr>
                        <td className="px-4 py-3">Machine fit</td>
                        <td className="px-4 py-3">Tool, arbor, flange and guard</td>
                        <td className="px-4 py-3">Drawing and labeled operating limit</td>
                        <td className="px-4 py-3">Fit, clearance and runout</td>
                        <td className="px-4 py-3">Signed SKU specification</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3">Wheel construction</td>
                        <td className="px-4 py-3">Target cut, color and workpiece</td>
                        <td className="px-4 py-3">Fiber, ply and stitch record</td>
                        <td className="px-4 py-3">Dimensions and visible construction</td>
                        <td className="px-4 py-3">Approved sample ID</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Compound</td>
                        <td className="px-4 py-3">Substrate and finish target</td>
                        <td className="px-4 py-3">Composition, hazards and shelf data</td>
                        <td className="px-4 py-3">Representative workpiece test</td>
                        <td className="px-4 py-3">Test plan and result</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3">Packaging</td>
                        <td className="px-4 py-3">Channel, warnings and artwork</td>
                        <td className="px-4 py-3">Source, material and dieline</td>
                        <td className="px-4 py-3">Pack-out and label review</td>
                        <td className="px-4 py-3">Approved pack specification</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Commercial terms</td>
                        <td className="px-4 py-3">Quantity, destination and timing</td>
                        <td className="px-4 py-3">Named source and quotation basis</td>
                        <td className="px-4 py-3">Sample and milestone approval</td>
                        <td className="px-4 py-3">Dated quotation or contract</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Material Density & Thread Specifications Table */}
              <div id="density-table" className="space-y-4 pt-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  Construction Evidence Matrix by Quoted Wheel SKU
                </h2>
                <p className="text-xs text-industry-slate-400 leading-relaxed font-mono">
                  The site does not publish a fiber grade, yarn count or stitch construction as fact without a source document and exact SKU. Request the following evidence before approval:
                </p>
                
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">Construction</th>
                        <th className="px-4 py-3 font-semibold uppercase">Material Evidence</th>
                        <th className="px-4 py-3 font-semibold uppercase">Dimensions &amp; Stitching</th>
                        <th className="px-4 py-3 font-semibold uppercase">Operating Evidence</th>
                        <th className="px-4 py-3 font-semibold uppercase">Approval Record</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr>
                        <td className="px-4 py-3 font-bold">Spiral-stitched wheel</td>
                        <td className="px-4 py-3">Fiber declaration and source document</td>
                        <td className="px-4 py-3">Diameter, ply, bore, thread and pitch by SKU</td>
                        <td className="px-4 py-3">Label limit, tool fit and sample test</td>
                        <td className="px-4 py-3">Signed specification and reference sample</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3 font-bold">Loose flannel wheel</td>
                        <td className="px-4 py-3">Fiber declaration and source document</td>
                        <td className="px-4 py-3">Diameter, ply, bore and center stitching by SKU</td>
                        <td className="px-4 py-3">Label limit, compound and sample finish</td>
                        <td className="px-4 py-3">Signed specification and reference sample</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-bold">Sisal or blended wheel</td>
                        <td className="px-4 py-3">Fiber blend, source and safety data</td>
                        <td className="px-4 py-3">Diameter, layers, bore and stitching by SKU</td>
                        <td className="px-4 py-3">Label limit, tool fit and sample test</td>
                        <td className="px-4 py-3">Signed specification and source evidence</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3 font-bold">Open-fold finishing wheel</td>
                        <td className="px-4 py-3">Fiber declaration and source document</td>
                        <td className="px-4 py-3">Diameter, folds, bore and construction by SKU</td>
                        <td className="px-4 py-3">Label limit, compound and sample finish</td>
                        <td className="px-4 py-3">Signed specification and reference sample</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Sourcing Side Panel */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="glass-panel rounded-lg overflow-hidden border border-industry-slate-800 shadow-xl relative">
                <img
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  src="/images/buffing_wheels.webp"
                  alt="SCOTTCHEN Buffing & Polishing Wheels"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              {/* Sourcing parameters */}
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  B2B Sourcing Parameters
                </h3>
                
                <div className="space-y-4 text-xs font-mono">
                  <div>
                    <span className="text-industry-slate-500 block">Lead Time:</span>
                    <span className="text-white font-bold">Quoted by SKU, packaging and sample approval</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">Sample Policy:</span>
                    <span className="text-white font-bold">Sample and freight terms confirmed per configuration</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">Material Selection:</span>
                    <span className="text-white font-bold leading-normal">Proposed cotton/flannel construction and exact fiber composition confirmed in the SKU specification.</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">Arbor Centers:</span>
                    <span className="text-white font-bold leading-normal">Telescoping cardboard centers, metal reinforcing washers, or plastic adapters.</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-industry-slate-850">
                  <Link
                    href="/sample-kit"
                    className="w-full inline-flex justify-center items-center rounded border border-industry-orange text-industry-orange font-bold uppercase tracking-wider py-3 hover:bg-industry-orange hover:text-white transition-all text-xs"
                  >
                    Request Physical Sample Wheel
                  </Link>
                </div>
              </div>

              {/* Substrate Compatibility */}
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Substrate Compatibility
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {["Stainless Steel", "Aluminum Alloy", "Copper / Brass", "Carbon Steel", "Acrylic / Resin", "Chrome Trim", "Wood Finishes"].map((sub) => (
                    <span key={sub} className="bg-industry-slate-950 px-2 py-1 rounded text-industry-slate-400 border border-industry-slate-800">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Buyer Evidence Center
                </h3>
                <p className="text-xs leading-relaxed text-industry-slate-300">
                  Review current document status, verification boundaries, and the
                  materials to request before placing a B2B order.
                </p>
                <Link href="/evidence-center" className="text-xs font-bold text-industry-orange hover:underline">
                  Review buyer evidence &rarr;
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Amazon Retail Store Showcase */}
      <section className="py-20 bg-industry-slate-900 border-t border-industry-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">External Retail Links</span>
            <h2 className="text-3xl font-extrabold text-white mt-3">Amazon Retail Listing References</h2>
            <p className="mt-4 text-sm text-industry-slate-400 max-w-2xl mx-auto leading-relaxed">
              External retail-listing references only. Card titles and descriptions summarize marketplace positioning and do not prove SCOTTCHEN OEM source, current availability, specifications, compliance, brand rights or performance. Amazon controls listing status and pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Buffing & Polishing Wheels Kit",
                asin: "B0828K5RH1",
                desc: "Drill adapter mounted wheels set combined with green, white, red polishing compounds for auto restoration.",
                url: "https://www.amazon.com/SCOTTCHEN-Buffing-Polishing-Cutting-Compounds/dp/B0828K5RH1/ref=sr_1_1?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/hero_abrasives_kit.webp"
              },
              {
                title: "Spiral Stitched & Loose Cotton Wheels",
                asin: "B086KR8H5Y",
                desc: "Concentric cotton spiral stitched wheels and soft loose flannel wheels for bench grinder buffing.",
                url: "https://www.amazon.com/SCOTTCHEN-Abrasives-Buffing-Polishing-Grinder/dp/B086KR8H5Y/ref=sr_1_3?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/buffing_wheels.webp"
              },
              {
                title: "Extra Thick Cotton Buffing Wheels",
                asin: "B07BGV23GK",
                desc: "Extra-thick polishing-wheel reference; fiber composition, construction and intended use require current listing and SKU verification.",
                url: "https://www.amazon.com/SCOTTCHEN-Extra-Buffing-Polishing-grinder/dp/B07BGV23GK/ref=sr_1_4?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/buffing_wheels.webp"
              },
              {
                title: "Lapidary & Jewelry Buffing Wheels",
                asin: "B0DQCZYRXR",
                desc: "Fine-fold unbleached cotton wheels suited to finishing gemstones, gold, silver, and other precious-metal workpieces after process testing.",
                url: "https://www.amazon.com/SCOTTCHEN-Buffing-Polishing-Lapidary-Metalworking/dp/B0DQCZYRXR/ref=sr_1_11?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/buffing_wheels.webp"
              },
              {
                title: "Non-Woven Buffing Pads with Compounds",
                asin: "B0D6V976G5",
                desc: "Non-woven scuff conditioning wheels and polish blocks for heavy rust scraping and metallic blending.",
                url: "https://www.amazon.com/SCOTTCHEN-Buffing-Polishing-Compounds-Non-Woven/dp/B0D6V976G5/ref=sr_1_14?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/hero_abrasives_kit.webp"
              },
              {
                title: "Non-Woven Medium Abrasive Wheels",
                asin: "B07Y564CX4",
                desc: "Medium density non-woven abrasive wheels for rapid paint stripping and steel deburring without scoring.",
                url: "https://www.amazon.com/SCOTTCHEN-Buffing-Polishing-Wheels-Medium/dp/B07Y564CX4/ref=sr_1_21?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/buffing_wheels.webp"
              },
              {
                title: "Threaded Arbor Extension Adapters",
                asin: "B07ZP52HCK",
                desc: "Extended mandrel adapters designed to mount buffing wheels securely on standard tools and bench grinders.",
                url: "https://www.amazon.com/SCOTTCHEN-Buffing-Polishing-Extended-Extender/dp/B07ZP52HCK/ref=sr_1_24?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/detail_sanding.webp"
              }
            ].map((prod) => (
              <div key={prod.asin} className="glass-panel rounded-lg overflow-hidden flex flex-col justify-between hover:border-industry-slate-700 transition-colors group">
                <div className="h-40 w-full overflow-hidden relative bg-industry-slate-950 border-b border-industry-slate-850">
                  <img
                    width={1024}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                    src={prod.img}
                    alt={prod.title}
                    className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-300 opacity-80"
                  />
                  <span className="absolute top-2 left-2 text-[9px] font-mono bg-industry-orange/20 text-industry-orange border border-industry-orange/30 px-1.5 py-0.5 rounded font-bold">
                    ASIN: {prod.asin}
                  </span>
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4 text-left">
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-white leading-snug">{prod.title}</h3>
                    <p className="text-xs text-industry-slate-400 leading-relaxed line-clamp-3">
                      {prod.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-industry-slate-850">
                    <a
                      href={prod.url}
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="w-full inline-flex justify-center items-center rounded bg-industry-orange py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover transition-colors text-center"
                    >
                      Buy on Amazon &rarr;
                    </a>
                  </div>
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
              Technical specifications, material grades, and customization logistics for B2B polishing wheel bulk orders.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What is the difference between spiral-stitched and loose-flannel buffing wheels?",
                a: "Spiral-stitched buffing wheels feature concentric circles of stitching, creating a firmer surface for medium-to-heavy cut polishing and metal preparation. Loose-flannel wheels are stitched at the arbor center so the softer layers can flare out for coloring and final finishing. Confirm the wheel, compound, substrate, pressure, and speed with a workpiece test."
              },
              {
                q: "How do I match Scottchen buffing wheels with the correct compound bar color?",
                a: "Color names do not prove formulation or suitability. Ask the quoted source for composition, hazards and intended substrate, then compare each compound with the exact wheel, workpiece, pressure and speed. Approve the combination from a representative test rather than this page."
              },
              {
                q: "Do you supply telescoping arbor hole inserts and custom shanks?",
                a: "Bore inserts and hex or round shanks can be requested. Availability, material, dimensions, tool fit and labeled operating limit must be confirmed by quoted SKU and approved sample before use."
              },
              {
                q: "What are the standard packaging options for retail-ready distribution?",
                a: "Shrink wrap, blister cards or color boxes can be evaluated for quotation. Source, dieline, artwork, rights, warnings, buyer barcode data, sample and scan record must be approved per project; this page does not promise a format or marketplace acceptance."
              },
              {
                q: "What is the typical minimum order quantity (MOQ) and production lead time?",
                a: "Quantity, lead time, sample charges and packaging scope are quoted by wheel construction, size, shank or bore and order quantity."
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
            "@graph": [
              {
                "@type": "CollectionPage",
                "@id": absoluteUrl("/products/buffing-polishing-wheels#catalog"),
                "name": "Buffing and Polishing Wheel RFQ Catalog",
                "description": "Sourcing reference for wheel and compound configurations. Exact material, dimensions, operating limits, availability and commercial terms require a dated SKU quotation and approved evidence.",
                "url": absoluteUrl("/products/buffing-polishing-wheels"),
                "image": absoluteUrl("/images/buffing_wheels.webp"),
                "isPartOf": { "@id": absoluteUrl("/#website") }
              }
            ]
          })
        }}
      />

      {/* Persistent CTA Banner (Bottom CTA area) */}
      <DecisionGuides />
      <CTASection />
    </div>
  );
}
