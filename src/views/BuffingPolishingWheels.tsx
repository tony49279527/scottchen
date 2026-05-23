import { Link } from "react-router-dom";
import CTASection from "@/components/CTASection";

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
      desc: "Reinforced wheels designed to fit standard 6-inch and 8-inch bench grinders. Engineered to withstand high pressure without deformation. Double-stitched seams ensure fibers do not detach prematurely.",
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
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
              to="/contact"
              className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-orange-hover hover:scale-[1.02] text-center"
            >
              Request Buffing Wheel Quote
            </Link>
            <Link
              to="/sample-kit"
              className="inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-slate-750 text-center"
            >
              Get Sample Wheel Kit
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
                    to="/oem-private-label"
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
            </div>

            {/* Right Sourcing Side Panel */}
            <div className="lg:col-span-4 space-y-6">
              
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
                    <span className="text-white font-bold">Free sample kit (Verification shipping applies)</span>
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
                    to="/sample-kit"
                    className="w-full inline-flex justify-center items-center rounded border border-industry-orange text-industry-orange font-bold uppercase tracking-wider py-3 hover:bg-industry-orange hover:text-white transition-all text-xs"
                  >
                    Request Physical Sample Wheel
                  </Link>
                </div>
              </div>

              {/* Application Materials */}
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

              {/* YouTube Shorts Demo Links */}
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Workflow Demonstrations
                </h3>
                <ul className="space-y-3 text-xs">
                  <li>
                    <span className="text-industry-orange font-bold block">YouTube Shorts: #AF-01</span>
                    <span className="text-industry-slate-300">Shank buffer removing chrome wheel oxidation in 30 seconds.</span>
                  </li>
                  <li>
                    <span className="text-industry-orange font-bold block">YouTube Shorts: #AF-02</span>
                    <span className="text-industry-slate-300">Loose cotton coloring brass trim using White Rouge compound block.</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Persistent CTA Banner (Bottom CTA area) */}
      <CTASection />
    </div>
  );
}
