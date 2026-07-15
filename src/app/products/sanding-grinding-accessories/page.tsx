import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "OEM Sandpaper & Grinding Disc Sourcing | SCOTTCHEN",
  description: "Source sandpaper sheets, sanding rolls, screens, grinding discs, sanding sticks and dispenser kits with SKU-level source, evidence and quoted terms.",
  path: "/products/sanding-grinding-accessories",
  alternatePath: "/zh/products/sanding-grinding-accessories",
});

export default function SandingGrindingAccessories() {
  const subtypes = [
    {
      name: "Sanding Sheets & Rolls",
      desc: "An inquiry category for sheet, roll or dispenser concepts. Material, backing, grit, dimensions, source and application fit are not approved until documented for the quoted SKU.",
      features: [
        "RFQ fields: substrate, process, tool, wet/dry use and target finish",
        "SKU evidence: grain, backing, dimensions, grit system and operating limits",
        "Approval: source documents, samples, packaging and written commercial terms",
      ],
    },
    {
      name: "Grinding & Zirconia Fiber Discs",
      desc: "A sourcing scenario for fiber-disc and grinding-disc inquiries. Grain, bond, backing, arbor, speed rating and substrate compatibility require source evidence and sample approval.",
      features: [
        "RFQ fields: disc type, tool, diameter, arbor, substrate and removal target",
        "Safety evidence: marked operating limit, traceability and applicable documents",
        "Commercial scope: sample fee, MOQ, lead time, payment and Incoterms quoted by project",
      ],
    },
    {
      name: "Drywall Sanding Screens & Mesh Sheets",
      desc: "An inquiry category for open-mesh sanding products. Mesh construction, coating, dimensions, attachment and dust-extraction compatibility must be verified for the selected source and SKU.",
      features: [
        "RFQ fields: surface, sanding method, holder, extraction layout and desired grit",
        "SKU evidence: mesh material, coating, dimensions and labeled use limits",
        "Approval: fit sample, packaging specification and dated quotation",
      ],
    },
    {
      name: "Detail Sanding Sticks",
      desc: "A planning category for narrow-access hand-sanding tools and replaceable abrasive components. Handle, tension, belt dimensions and use claims must be confirmed from the quoted source.",
      features: [
        "RFQ fields: workpiece, access space, abrasive size, grit progression and pack concept",
        "Compatibility: handle, tension system and replacement-belt fit approved by sample",
        "Retail scope: BOM, warnings, artwork, barcode data and channel responsibility documented",
      ],
    },
    {
      name: "Diamond & Specialty Abrasives",
      desc: "A higher-risk inquiry category that requires exact construction, tool, substrate, operating limits and applicable compliance evidence before any suitability statement is accepted.",
      features: [
        "RFQ fields: substrate, process, tool, speed, cooling method and finish target",
        "SKU evidence: abrasive construction, backing/core, dimensions and warnings",
        "Approval: source identity, test basis, sample result and written use boundary",
      ],
    },
    {
      name: "Sanding Dispenser Kits",
      desc: "A private-label pack-out scenario, not an approved stock kit. Roll count, grit mix, cutter design, packaging materials and channel requirements are RFQ inputs.",
      features: [
        "BOM approval: each component source, identity, quantity and compatibility",
        "Packaging approval: dieline owner, cutter safety, artwork, warnings and barcode data",
        "Commercial approval: sample, MOQ, lead time, pack-out inspection and Incoterms",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top CTA Area */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Sanding & Grinding Accessories", href: "/products/sanding-grinding-accessories" },
            ]}
          />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">SPECIFICATIONS & OEM OPTIONS</span>
              <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
                Sanding & Grinding Accessories
              </h1>
              <p className="mt-3 text-base text-industry-slate-400">
                Sourcing inquiries for sandpaper, grinding discs, mesh sheets, detail tools and private-label dispenser concepts.
              </p>
            </div>

            <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-orange-hover hover:scale-[1.02] text-center"
              >
                Request Abrasives Quote
              </Link>
              <Link
                href="/sample-kit"
                className="inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-slate-750 text-center"
              >
                Get Sample Abrasive Kit
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
                <h2 className="text-2xl font-black text-white mt-1">RFQ Specification Fields</h2>
                <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">
                  Fields buyers and sources should document before a SKU, sample or commercial term is treated as approved.
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Full Grit Spectrum:</strong> Dry/wet sandpaper from coarse P60 to ultra-fine P2500, with dynamic latex paper or tear-resistant cloth backings.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Heavy Duty Discs:</strong> Vulcanized zirconia fiber grinding discs with 7/8&quot; bore holes and center star hubs for standard angle grinders.</span>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Open Mesh:</strong> Fiberglass screens with silicon carbide coating allow dust to pass through and can reduce loading under suitable operating conditions.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Quoted minimums:</strong> Quantity and lead time depend on product construction, grit mix, packaging and order quantity.</span>
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
                Sanding and grinding facts for comparable RFQs
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-industry-slate-400">
                These fields help buyers compare abrasive suppliers and define sample
                tests for sandpaper, discs, mesh screens and detail tools.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
              {[
                ["Primary products", "Wet/dry sandpaper sheets, continuous sanding rolls, fiberglass mesh sanding screens, zirconia fiber discs, detail sanding sticks and dispenser kits."],
                ["MOQ basis", "Quoted per product construction, size, grit mix, packaging and order quantity."],
                ["Quoted lead time", "Dated material, sample, packaging, production, inspection and shipment milestones are confirmed in writing."],
                ["Specification controls", "Grain type, applicable grit designation standard, backing, dimensions, arbor hole, attachment method and pack quantity are defined by SKU."],
                ["Quality checks", "Backing tensile strength, grain adhesion, dimensional fit, grit assortment, barcode scan and carton configuration can be checked against the approved specification."],
                ["Next verification step", "Use the material selection guide for grain and backing choices, then request a sample abrasive kit with substrate and tool details."],
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
            <Link className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white hover:border-industry-orange" href="/resources/abrasive-material-selection-guide">
              Open material guide
            </Link>
            <Link className="rounded bg-industry-orange-cta px-5 py-3 text-sm font-bold text-white" href="/sample-kit">
              Request sample abrasive kit
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
                  Abrasive Products & Technical Configurations
                </h2>
                
                <div className="space-y-8">
                  {subtypes.map((sub) => (
                    <div key={sub.name} className="glass-panel p-6 rounded-lg space-y-4">
                      <h3 className="text-lg font-bold text-industry-orange" id={sub.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}>
                        {sub.name}
                      </h3>
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
                <h3 className="text-lg font-bold text-white uppercase">Sanding roll dispensers & retail bundles</h3>
                <p className="text-sm text-industry-slate-400 max-w-lg mx-auto">
                  Dispenser cases or blister cards can be evaluated with buyer-approved artwork, warnings and buyer-supplied barcode data. Scope, sample scanning and marketplace responsibility are confirmed in writing.
                </p>
                <div className="pt-2">
                  <Link
                    href="/oem-private-label"
                    className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover"
                  >
                    Configure Custom Packaging Specs
                  </Link>
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="space-y-4">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  Abrasive Specification Table
                </h2>
                
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">Accessory Category</th>
                        <th className="px-4 py-3 font-semibold uppercase">Abrasive Grain</th>
                        <th className="px-4 py-3 font-semibold uppercase">Grit Standard Scope</th>
                        <th className="px-4 py-3 font-semibold uppercase">Backing Type</th>
                        <th className="px-4 py-3 font-semibold uppercase">MOQ Basis</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr>
                        <td className="px-4 py-3 font-bold">Sanding Sheets</td>
                        <td className="px-4 py-3">Silicon Carbide / Aluminum Oxide</td>
                        <td className="px-4 py-3">P60 to P2500</td>
                        <td className="px-4 py-3">C-wt / J-wt Latex Paper</td>
                        <td className="px-4 py-3">Quoted per SKU</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3 font-bold">Zirconia Fiber Discs</td>
                        <td className="px-4 py-3">Zirconia Alumina</td>
                        <td className="px-4 py-3">P36 to P120</td>
                        <td className="px-4 py-3">0.8mm Vulcanized Fiber</td>
                        <td className="px-4 py-3">Quoted per SKU</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-bold">Drywall Sanding Screen</td>
                        <td className="px-4 py-3">Silicon Carbide double-coat</td>
                        <td className="px-4 py-3">P80 to P240</td>
                        <td className="px-4 py-3">Fiberglass Open Mesh</td>
                        <td className="px-4 py-3">Quoted per SKU</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3 font-bold">Detail Sanding sticks</td>
                        <td className="px-4 py-3">Aluminum Oxide belts</td>
                        <td className="px-4 py-3">P80 to P400</td>
                        <td className="px-4 py-3">Resilient plastic stick</td>
                        <td className="px-4 py-3">Quoted per SKU</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-bold">Diamond Grinders</td>
                        <td className="px-4 py-3">Electroplated Diamond</td>
                        <td className="px-4 py-3">P50 to P3000</td>
                        <td className="px-4 py-3">Flexible backing or Steel core</td>
                        <td className="px-4 py-3">Quoted per SKU</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Backing evidence fields */}
              <div id="tensile-table" className="space-y-4 pt-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  Abrasive Backing Evidence Fields by Quoted SKU
                </h2>
                <p className="text-xs text-industry-slate-400 leading-relaxed font-mono">
                  No mechanical value is published as a product claim without a source document and exact SKU. Use this matrix to request the backing identity, test method, measured result and approval evidence from the responsible source.
                </p>
                
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">Abrasive Backing Type</th>
                        <th className="px-4 py-3 font-semibold uppercase">Specification to Request</th>
                        <th className="px-4 py-3 font-semibold uppercase">Test Method</th>
                        <th className="px-4 py-3 font-semibold uppercase">Result Status</th>
                        <th className="px-4 py-3 font-semibold uppercase">Release Evidence</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr>
                        <td className="px-4 py-3 font-bold">Vulcanized Fiber Backing</td>
                        <td className="px-4 py-3">Material, thickness, source and lot identity</td>
                        <td className="px-4 py-3">Defined by source and buyer quality plan</td>
                        <td className="px-4 py-3">Not published; record measured values by SKU</td>
                        <td className="px-4 py-3">Specification, source file and sample record</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3 font-bold">Latex C-weight Paper</td>
                        <td className="px-4 py-3">Paper weight, treatment, source and wet-use claim</td>
                        <td className="px-4 py-3">Defined by source and buyer quality plan</td>
                        <td className="px-4 py-3">Not published; verify against approved sample</td>
                        <td className="px-4 py-3">Specification, test record and sample sign-off</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-bold">Cotton J-weight Cloth</td>
                        <td className="px-4 py-3">Cloth weight, fiber content, flexibility and source</td>
                        <td className="px-4 py-3">Defined by source and buyer quality plan</td>
                        <td className="px-4 py-3">Not published; record longitudinal and transverse data</td>
                        <td className="px-4 py-3">Source file, joint/sample test and approval</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3 font-bold">Fiberglass Mesh</td>
                        <td className="px-4 py-3">Mesh, binder, grain, dimensions and source</td>
                        <td className="px-4 py-3">Defined by source and buyer quality plan</td>
                        <td className="px-4 py-3">Not published; record strength and retention method</td>
                        <td className="px-4 py-3">Specification, sample result and release record</td>
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
                  src="/images/sanding_tools.webp"
                  alt="SCOTTCHEN Sanding & Grinding Accessories"
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
                    <span className="text-white font-bold">Quoted by SKU, packaging and quantity</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">Custom Grits combo:</span>
                    <span className="text-white font-bold">Allowed in 5-grit retail assortments</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">Antislip backing:</span>
                    <span className="text-white font-bold leading-normal">Optional velcro hook & loop backing on sandpaper sheets.</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">Shipping terms:</span>
                    <span className="text-white font-bold leading-normal">FOB, CIF or door-to-door options scoped per quotation.</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-industry-slate-850">
                  <Link
                    href="/sample-kit"
                    className="w-full inline-flex justify-center items-center rounded border border-industry-orange text-industry-orange font-bold uppercase tracking-wider py-3 hover:bg-industry-orange hover:text-white transition-all text-xs"
                  >
                    Request Grit Sample Roll
                  </Link>
                </div>
              </div>

              {/* Substrate list */}
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Substrate Compatibility
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {["Hardwood / Softwood", "Drywall Plaster", "Carbon Steel", "High-Alloy Welds", "Fiberglass", "Ceramic / Porcelain", "Marble / Tile", "Gemstones / Glass"].map((sub) => (
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
                title: "Zirconia Sanding Grinding Discs",
                asin: "B0G3PWBTQ5",
                desc: "Heavy-duty zirconia resin fiber grinding discs designed for rapid weld leveling and rust removal on metals.",
                url: "https://www.amazon.com/SCOTTCHEN-Zirconia-Sanding-Grinding-Fiberglass/dp/B0G3PWBTQ5/ref=sr_1_34?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/fiber_discs.webp"
              },
              {
                title: "Latex Wet/Dry Sandpaper Sheets",
                asin: "B0F4R3QBTD",
                desc: "Silicon carbide premium wet/dry sheets with high-flex latex C-wt backing for auto body styling and polishing.",
                url: "https://www.amazon.com/SCOTTCHEN-Sandpaper-Metalworking-Woodworker-Furniture/dp/B0F4R3QBTD/ref=sr_1_32?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/sanding_sheets.webp"
              },
              {
                title: "Abrasive Sanding Dispenser Box",
                asin: "B0CW65P854",
                desc: "Multi-roll shop sandpaper roll dispenser box containing 150-grit to 400-grit rolls with a built-in steel tearing edge.",
                url: "https://www.amazon.com/SCOTTCHEN-Abrasive-Sanding-Dispenser-Finishing/dp/B0CW65P854/ref=sr_1_33?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/sanding_dispenser.webp"
              },
              {
                title: "Multi-Grit Sandpaper Rolls Pack",
                asin: "B0CGKS2Z37",
                desc: "Professional heavy-duty dry sanding paper rolls set suited for industrial woodturning and metal finishing.",
                url: "https://www.amazon.com/SCOTTCHEN-Sanding-Sandpaper-Woodworking-Furniture/dp/B0CGKS2Z37/ref=sr_1_2?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/sanding_sheets.webp"
              },
              {
                title: "Drywall Sanding Screen (16-inch)",
                asin: "B07HDZX5M9",
                desc: "Premium silicon carbide open mesh sheets for drywall plaster smoothing and dust extraction compliance.",
                url: "https://www.amazon.com/Drywall-Sanding-Screen-16in-x-12pcs/dp/B07HDZX5M9/ref=sr_1_5?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/sanding_screens.webp"
              },
              {
                title: "Plumbing Sanding Emery Cloth Roll",
                asin: "B0D45B7591",
                desc: "High-flex 180-grit plumbers cloth roll designed for sanding copper pipes and cleaning brass fittings.",
                url: "https://www.amazon.com/SCOTTCHEN-Plumbing-Plumbers-Aluminum-180-1Roll/dp/B0D45B7591/ref=sr_1_6?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/sanding_sheets.webp"
              },
              {
                title: "Drywall Sanding Sheets with Holes",
                asin: "B0C4TNHRWZ",
                desc: "Multi-hole vacuum-compatible sanding screens covering P80 to P150 grits for vacuum-assisted sanding platforms.",
                url: "https://www.amazon.com/SCOTTCHEN-Drywall-include-Sanding-80%EF%BC%8C100%EF%BC%8C150/dp/B0C4TNHRWZ/ref=sr_1_8?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/sanding_screens.webp"
              },
              {
                title: "Detail Sanding Sticks & Belts Kit",
                asin: "B07ZQZT1Q6",
                desc: "Mini spring-tension detail sanding tools and replacement belts for crafting tight scale channels.",
                url: "https://www.amazon.com/SCOTTCHEN-Sanding-Sticks-Matchsticks-Detailing/dp/B07ZQZT1Q6/ref=sr_1_9?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/detail_sanding.webp"
              },
              {
                title: "Diamond Abrasive Sanding Sheets",
                asin: "B0F66QL77V",
                desc: "Electroplated diamond hand pads designed for grinding high-hardness gemstones, quartz, glass, and porcelain tiles.",
                url: "https://www.amazon.com/SCOTTCHEN-Grinding-Polishing-Gemstone-Porcelain/dp/B0F66QL77V/ref=sr_1_12?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/diamond_polishing.webp"
              },
              {
                title: "Multi-Use Sanding Blocks Set",
                asin: "B0CMXGQ8R3",
                desc: "Ergonomic contour hand sanders set providing firm backing for auto body styling and woodwork finishing.",
                url: "https://www.amazon.com/SCOTTCHEN-Multi-Use-Woodworking-Restoration-Automotive/dp/B0CMXGQ8R3/ref=sr_1_23?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/sanding_sheets.webp"
              },
              {
                title: "Diamond Granite Grinding Cup Wheel",
                asin: "B08BFHBTCP",
                desc: "Heavy-duty 4-inch diamond segmented cup wheel designed for aggressive granite, concrete, and stone edge leveling.",
                url: "https://www.amazon.com/Diamond-Grinding-Abrasive-Sanding-Granite/dp/B08BFHBTCP/ref=sr_1_25?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/diamond_polishing.webp"
              },
              {
                title: "Diamond Edge Profiling Wheel",
                asin: "B08BF8MZC1",
                desc: "Vacuum-brazed diamond grinding wheel designed to shape bullnose edges on marble and quartz slabs.",
                url: "https://www.amazon.com/Diamond-Grinding-Abrasive-Sanding-Granite/dp/B08BF8MZC1/ref=sr_1_27?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/diamond_polishing.webp"
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
              Technical parameters, backing weights, grain types, and logistics for B2B sanding and grinding accessories.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What backing weights and materials are available for Scottchen sandpaper sheets?",
                a: "C-weight paper, cloth or other backings can be evaluated after the buyer states wet or dry use, tool, pressure and finish target. Weight, fiber, treatment, wet strength and tensile performance require source evidence and representative tests for the quoted SKU; no tear-prevention claim is made by this page."
              },
              {
                q: "Why do you use silicon carbide for drywall sanding screens instead of aluminum oxide?",
                a: "Silicon carbide has a sharp grain profile, while the open-weave fiberglass mesh allows gypsum dust to pass through. This combination can reduce loading under suitable pressure and extraction conditions; cut rate and finish should be verified on the target substrate."
              },
              {
                q: "What center hole dimensions and backing options do you support for grinding discs?",
                a: "State the tool, diameter, arbor or center geometry, backing, substrate and use conditions in the RFQ. Exact dimensions, construction, labeled operating limit and compatibility must be confirmed by the quoted source, SKU evidence and approved sample; this page publishes no fixed available configuration."
              },
              {
                q: "Can we mix multiple grits in a custom-labeled dispenser box?",
                a: "A multi-grit dispenser concept can be evaluated. The quotation must confirm the source, number of grits, roll dimensions, cutter safety, pack structure, branding, warnings, barcode data and approval sample; this page does not promise a fixed configuration."
              },
              {
                q: "What is the minimum order quantity (MOQ) for detail sanding sticks?",
                a: "Pack composition, grit mix, packaging, production source, MOQ and lead time are confirmed for the quoted detail-sanding-stick SKU; this page does not set a standard starting quantity."
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
                "@id": absoluteUrl("/products/sanding-grinding-accessories#catalog"),
                "name": "Sanding and Grinding Accessory RFQ Catalog",
                "description": "Sourcing reference for abrasive accessory configurations. Exact grain, backing, dimensions, operating limits, availability and terms require a dated SKU quotation and approved evidence.",
                "url": absoluteUrl("/products/sanding-grinding-accessories"),
                "image": absoluteUrl("/images/sanding_tools.webp"),
                "isPartOf": { "@id": absoluteUrl("/#website") }
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
