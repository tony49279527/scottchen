import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "OEM Cotton Buffing Wheels Manufacturer | SCOTTCHEN",
  description: "Source OEM cotton buffing wheels, spiral-stitched pads, flannel wheels, drill buffers and compound kits with reference MOQ and lead times.",
  path: "/products/buffing-polishing-wheels",
  alternatePath: "/zh/products/buffing-polishing-wheels",
});

export default function BuffingPolishingWheels() {
  const subtypes = [
    {
      name: "Spiral Stitched Cotton Buffing Wheels",
      desc: "Stitched with high-tensile cotton thread in concentric rings. Increases wheel rigidity for heavy cut polishing, deburring, and surface prep. Ideal for brass, steel, and aluminum rough polishing.",
      features: ["Ply count: 30 Ply, 40 Ply, 50 Ply, 60 Ply options", "Concentric stitching spacing: 3/8\" or 1/4\" spacing", "Bore sizing options: 1/2\", 5/8\", 3/4\", 1\" center inserts"],
    },
    {
      name: "Loose Flannel Polishing Wheels",
      desc: "Soft cotton flannel layers stitched only around the center arbor hole. Designed for light cut buffing, coloring, and final mirror polish. Soft material holds fine rouge compounds evenly without burning finishes.",
      features: ["Material: 100% fine carded cotton flannel", "Stitching: single concentric circle at center", "Use cases: Jewelry finishing, automotive trim coloring, acrylic shine"],
    },
    {
      name: "Bench Grinder Polishing Wheels (Extra Thick)",
      desc: "Reinforced 6-inch and 8-inch wheel options for compatible bench grinders. Construction, bore fit, labeled operating limit and acceptance checks must be confirmed in the approved SKU specification.",
      features: ["Diameter: 6\" (150mm), 8\" (200mm), 10\" (250mm)", "Thickness: 1/2\" to 2.5\" laminated layers", "Bore inserts: Metal flange center plates or telescope plastic sleeves"],
    },
    {
      name: "Drill Polishing Wheels (Mounted Cylindrical & Dome)",
      desc: "Shank-mounted accessories in dome, cone, cylinder, and goblet shapes. Ideal for polishing recessed wheels, engine headers, pipe interiors, and contours. Hex shank fits standard impact drivers.",
      features: ["Shank size: 1/4\" (6.35mm) hex shank or round metal arbor", "Shapes: T-shape pad, cylinder, cone, dome, mushroom", "MOQ: 1,000 units/shape, or bundled in customized hex kits"],
    },
    {
      name: "Polishing Compound Bar Kits",
      desc: "Premium abrasive waxes categorized by grit scale. Green Chromium Oxide (fine mirror shine), White Rouge (chrome/hard metal final gloss), Red Tripoli (brass/copper medium polishing), Black Emery (heavy cut metal cleaning).",
      features: ["Bar dimensions: 100g, 250g, 500g customized packaging", "Base: Wax/Tallow binding matrix", "Custom labeling: Heat-sealed shrink wrap with barcode sticker"],
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
                High-durability cotton buffing pads, bench grinder wheels, shank buffers, and color compound blocks.
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
                <h2 className="text-2xl font-black text-white mt-1">Buffing Wheel Specifications</h2>
                <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">
                  Key procurement, sizing, and compatibility details for wholesale polishing wheel orders.
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Calibrated Ply & Sizes:</strong> Available from 3&quot; to 10&quot; diameters, with ply options ranging from 30 Ply to 80 Ply for varied polishing aggressiveness.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Flexible Bore Configuration:</strong> Standard 1/2&quot;, 5/8&quot;, 3/4&quot;, and 1&quot; telescoping arbor hole inserts, plus 1/4&quot; hex/round shanks for drill mounts.</span>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Compound Synergy:</strong> Custom-formulated wax-binded color compound bars (Green Chrome, White Rouge, Red Tripoli, Black Emery) in 100g to 500g sizes.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Reference Order Terms:</strong> Many inquiries start at 500 standard wheels or 1,000 shank-mounted pieces; MOQ, sample charges and lead time are confirmed by configuration.</span>
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
                ["Reference MOQ", "500 pieces per common bench-grinder wheel size; 1,000 pieces per shank-mounted shape; final MOQ is quoted per configuration."],
                ["Quoted lead time", "Common batch-production planning range is 25 to 35 days after sample, artwork and specification approval."],
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
                  We specialize in packaging custom wheel sizes and compound bars into blister packs or color boxes complete with FNSKU labels for online Sellers.
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
                  Standard Sizing & Bore Specification Index
                </h2>
                
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">Diameter</th>
                        <th className="px-4 py-3 font-semibold uppercase">Ply Count</th>
                        <th className="px-4 py-3 font-semibold uppercase">Arbor Hole Inner Diameter</th>
                        <th className="px-4 py-3 font-semibold uppercase">Spiral Stitch Spacing</th>
                        <th className="px-4 py-3 font-semibold uppercase">B2B MOQ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr>
                        <td className="px-4 py-3">3&quot; (75mm)</td>
                        <td className="px-4 py-3">30 Ply / 40 Ply</td>
                        <td className="px-4 py-3">1/4&quot; Hex Shank Mounted</td>
                        <td className="px-4 py-3">3/8&quot; (9.5mm)</td>
                        <td className="px-4 py-3">1,000 units</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3">4&quot; (100mm)</td>
                        <td className="px-4 py-3">30 Ply / 40 Ply</td>
                        <td className="px-4 py-3">3/8&quot;, 1/2&quot;</td>
                        <td className="px-4 py-3">3/8&quot; or 1/4&quot;</td>
                        <td className="px-4 py-3">1,000 units</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">6&quot; (150mm)</td>
                        <td className="px-4 py-3">40 Ply / 50 Ply / 60 Ply</td>
                        <td className="px-4 py-3">1/2&quot;, 5/8&quot;</td>
                        <td className="px-4 py-3">3/8&quot;, 1/4&quot;, 1/8&quot; (airway)</td>
                        <td className="px-4 py-3">500 units</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3">8&quot; (200mm)</td>
                        <td className="px-4 py-3">40 Ply / 50 Ply / 60 Ply</td>
                        <td className="px-4 py-3">5/8&quot;, 3/4&quot;, 1&quot;</td>
                        <td className="px-4 py-3">3/8&quot; or 1/4&quot;</td>
                        <td className="px-4 py-3">500 units</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">10&quot; (250mm)</td>
                        <td className="px-4 py-3">50 Ply / 60 Ply / 80 Ply</td>
                        <td className="px-4 py-3">5/8&quot;, 3/4&quot;, 1&quot;, 1-1/4&quot;</td>
                        <td className="px-4 py-3">3/8&quot; or 1/4&quot;</td>
                        <td className="px-4 py-3">300 units</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Material Density & Thread Specifications Table */}
              <div id="density-table" className="space-y-4 pt-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  Cotton Fiber Density & Stitching Specifications
                </h2>
                <p className="text-xs text-industry-slate-400 leading-relaxed font-mono">
                  Different finishing applications require specialized cotton weave counts and stitching rigidity:
                </p>
                
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">Cotton Quality Grade</th>
                        <th className="px-4 py-3 font-semibold uppercase">Warp / Weft Count</th>
                        <th className="px-4 py-3 font-semibold uppercase">Thread ply</th>
                        <th className="px-4 py-3 font-semibold uppercase">Stitching Pitch Ring Spacing</th>
                        <th className="px-4 py-3 font-semibold uppercase">Target Application</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr>
                        <td className="px-4 py-3 font-bold">Premium Unbleached Cotton</td>
                        <td className="px-4 py-3">21s / 21s (84 x 72 threads/inch)</td>
                        <td className="px-4 py-3">32s / 2 ply carded cotton thread</td>
                        <td className="px-4 py-3">1/4&quot; (6.35 mm) concentric</td>
                        <td className="px-4 py-3">Heavy brass/stainless rough polishing</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3 font-bold">Fine Yellow Flannel</td>
                        <td className="px-4 py-3">32s / 32s (100 x 80 threads/inch)</td>
                        <td className="px-4 py-3">21s / 2 ply soft sewing thread</td>
                        <td className="px-4 py-3">3/8&quot; (9.53 mm) loose concentric</td>
                        <td className="px-4 py-3">Automotive clear coat high gloss shine</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-bold">Reinforced Sisal-Cotton Blend</td>
                        <td className="px-4 py-3">10s / 10s heavy canvas weave</td>
                        <td className="px-4 py-3">40s / 3 ply high-strength nylon core</td>
                        <td className="px-4 py-3">1/8&quot; (3.18 mm) tight interlocking</td>
                        <td className="px-4 py-3">Iron cast heavy weld material leveling</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3 font-bold">White Open Flannel</td>
                        <td className="px-4 py-3">40s / 40s (120 x 100 threads/inch)</td>
                        <td className="px-4 py-3">16s / 2 ply zero-twist soft cotton</td>
                        <td className="px-4 py-3">None (Loose-fold layout)</td>
                        <td className="px-4 py-3">Fine jewelry & precious metal coloring</td>
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
                    <span className="text-white font-bold">25 - 35 Days (Batch production)</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">Sample Policy:</span>
                    <span className="text-white font-bold">Sample and freight terms confirmed per configuration</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">Material Selection:</span>
                    <span className="text-white font-bold leading-normal">100% fine cotton flannel, military cotton canvas, yellow treated hard cotton fabric.</span>
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
                  Retail Product Reference
                </h3>
                <p className="text-xs leading-relaxed text-industry-slate-300">
                  Review current SCOTTCHEN retail products to understand existing wheel,
                  compound, and kit configurations before requesting a custom B2B version.
                </p>
                <a href="https://scottchen.online" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-industry-orange hover:underline">
                  View the SCOTTCHEN retail store &rarr;
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Amazon Retail Store Showcase */}
      <section className="py-20 bg-industry-slate-900 border-t border-industry-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Shop Samples on Amazon</span>
            <h2 className="text-3xl font-extrabold text-white mt-3">Amazon Retail Listing References</h2>
            <p className="mt-4 text-sm text-industry-slate-400 max-w-2xl mx-auto leading-relaxed">
              Use the selected Amazon listings below as retail product references. Availability, pricing, seller status, and Prime eligibility are controlled by Amazon and may change.
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
                desc: "Super thick 100% natural cotton polishing wheel designed for rigid heavy-duty bench grinder cutting.",
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
                a: "For heavy metal cutting and oxidation removal, use our Black Emery compound with spiral-stitched wheels. For medium cutting on brass or copper, use Red Tripoli compound. White Rouge is designed for high-gloss coloring on steel, chrome, and hard metals, while Green Chromium Oxide is used for final mirror finishes on stainless steel and aluminum, typically paired with soft loose flannel wheels."
              },
              {
                q: "Do you supply telescoping arbor hole inserts and custom shanks?",
                a: "We can provide telescoping inserts and 1/4\" hex or round shank options. Buyers must confirm spindle or chuck dimensions, tool type, the product's labeled maximum speed, and the tool manufacturer's limits in the approved specification before use."
              },
              {
                q: "What are the standard packaging options for retail-ready distribution?",
                a: "Available formats include shrink wrap, blister cards, and printed color boxes. Buyer-approved logos, warnings, instructions, and FNSKU or UPC data can be applied and sample-scanned; final acceptance depends on the retailer or marketplace's current rules."
              },
              {
                q: "What is the typical minimum order quantity (MOQ) and production lead time?",
                a: "Reference MOQs are 500 pieces per size for bench-grinder wheels and 1,000 pieces per shape for shank-mounted pads. Quantity, lead time, sample charges, and packaging scope are confirmed in the written quotation."
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
                "@type": "ProductGroup",
                "@id": absoluteUrl("/products/buffing-polishing-wheels#productgroup"),
                "name": "SCOTTCHEN Buffing & Polishing Wheels Catalog",
                "description": "Industrial-grade cotton buffing wheels, spiral stitched polishing pads, loose flannel wheels, and compound bars. Tailored for metal restoration, automotive deburring, and catalog distribution.",
                "url": absoluteUrl("/products/buffing-polishing-wheels"),
                "image": absoluteUrl("/images/buffing_wheels.webp"),
                "brand": {
                  "@type": "Brand",
                  "name": "SCOTTCHEN"
                },
                "manufacturer": {
                  "@id": absoluteUrl("/#organization")
                },
                "category": "Cotton buffing wheels and polishing accessory kits",
                "material": "Cotton flannel, cotton canvas, sisal-cotton blend, polishing compound wax",
                "additionalProperty": [
                  {
                    "@type": "PropertyValue",
                    "name": "Reference MOQ",
                    "value": "500 pieces per common bench-grinder wheel size; 1,000 pieces per shank-mounted shape"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Quoted lead time",
                    "value": "25 to 35 days after sample, artwork and specification approval"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Packaging options",
                    "value": "Shrink wrap, blister card, color box, barcode label and custom warning or instruction layout"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Common applications",
                    "value": "Stainless steel, aluminum, brass, carbon steel, acrylic, chrome trim and wood finishes"
                  }
                ],
                "hasVariant": [
                  {
                    "@type": "Product",
                    "name": "Spiral Stitched Cotton Buffing Wheel",
                    "description": "Concentric stitched, high-tensile cotton wheel for aggressive cutting and heavy metal prep.",
                    "sku": "SC-SPIRAL-COTTON",
                    "manufacturer": {
                      "@id": absoluteUrl("/#organization")
                    },
                    "material": "Cotton canvas or reinforced cotton blend",
                    "additionalProperty": [
                      { "@type": "PropertyValue", "name": "Ply count", "value": "30 Ply, 40 Ply, 50 Ply or 60 Ply options" },
                      { "@type": "PropertyValue", "name": "Bore sizing", "value": "1/2 inch, 5/8 inch, 3/4 inch or 1 inch center inserts" }
                    ]
                  },
                  {
                    "@type": "Product",
                    "name": "Loose Cotton Flannel Coloring Wheel",
                    "description": "Fine-weave loose flannel wheel for final coloring, coloring trim, and mirror finishes.",
                    "sku": "SC-LOOSE-FLANNEL",
                    "manufacturer": {
                      "@id": absoluteUrl("/#organization")
                    },
                    "material": "Fine carded cotton flannel",
                    "additionalProperty": [
                      { "@type": "PropertyValue", "name": "Stitching", "value": "Single concentric circle at center" },
                      { "@type": "PropertyValue", "name": "Use cases", "value": "Jewelry finishing, automotive trim coloring and acrylic shine" }
                    ]
                  },
                  {
                    "@type": "Product",
                    "name": "Shank Mounted Drill Buffing Wheels",
                    "description": "1/4-inch hex shank mounted mushroom, dome, cylindrical and goblet shapes for recessed polishing.",
                    "sku": "SC-SHANK-BUFFER",
                    "manufacturer": {
                      "@id": absoluteUrl("/#organization")
                    },
                    "additionalProperty": [
                      { "@type": "PropertyValue", "name": "Shank size", "value": "1/4 inch hex shank or round metal arbor" },
                      { "@type": "PropertyValue", "name": "Reference MOQ", "value": "1,000 units per shape, or bundled in customized hex kits" }
                    ]
                  }
                ]
              }
            ]
          })
        }}
      />

      {/* Persistent CTA Banner (Bottom CTA area) */}
      <CTASection />
    </div>
  );
}
