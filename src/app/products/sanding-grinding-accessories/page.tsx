import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "OEM Sanding & Grinding Accessories | SCOTTCHEN",
  description: "Buy bulk sandpaper sheets, silicone carbide screens, zirconia grinding discs, mini sanding sticks, and custom abrasive dispenser kits. Standard B2B MOQ parameters.",
  alternates: {
    canonical: "https://www.scottchentools.com/products/sanding-grinding-accessories",
  },
};

export default function SandingGrindingAccessories() {
  const subtypes = [
    {
      name: "Sanding Sheets & Rolls",
      desc: "Industrial silicon carbide (for wet/dry automotive prep) and aluminum oxide (for woodworking). Available in precut sheet bundles and continuous rolls designed for dispenser boxes.",
      features: [
        "Grits: P60, P80, P120, P150, P180, P240, P320, P400, P600, P800, P1000",
        "Sizing: 9\" x 11\" sheets, 2\" to 4.5\" width roll wraps",
        "Backing: C-weight latex paper, flexible J-weight cloth backing",
      ],
    },
    {
      name: "Grinding & Zirconia Fiber Discs",
      desc: "Zirconia alumina abrasive grains resin-bonded to a heavy vulcanized fiber backing. Engineered for high-speed weld dressing, heavy deburring, rust removal, and beveling on carbon steel and alloys.",
      features: [
        "Sizing: 4.5\" (115mm), 5\" (125mm), 7\" (180mm) outer diameter",
        "Arbor hole: 7/8\" (22.23mm) center round or star center hub",
        "MOQ: 2,000 discs per grit dimension",
      ],
    },
    {
      name: "Drywall Sanding Screens & Mesh Sheets",
      desc: "Open-mesh structure coated on both sides with premium silicon carbide. Prevents clogging during drywall compound sanding and plaster smoothing. Fully compatible with dust extraction sanders.",
      features: [
        "Material: Heavy fiberglass mesh substrate",
        "Grits: P80, P120, P150, P180, P220",
        "Sizing: Precut 9x11 sheets, 3.25\" x 11\" blocks, or custom rolls",
      ],
    },
    {
      name: "Detail Sanding Sticks",
      desc: "Rigid plastic mini sanding sticks with interchangeable micro-grit belts. Designed for scale model building, jewelry polishing, mold refinement, and tight corners where orbital sanders cannot reach.",
      features: [
        "Belt Width: 1/4\" (6.35mm), 1/2\" (12.7mm) options",
        "Structure: Spring-tensioned plastic rods",
        "Packaging: Multi-grit kits (1 rod + 5 belts per grit) ready for online retail",
      ],
    },
    {
      name: "Diamond & Specialty Abrasives",
      desc: "Electroplated diamond discs and flexible backing pads. Specially manufactured for grinding and beveling ceramic tile, porcelain, granite, marble, gemstones, and glass.",
      features: [
        "Grits: 50, 100, 200, 400, 800, 1500, 3000 grit range",
        "Backing: Hook and loop backing, or steel core plates",
        "Substrate: Granite, quartz, marble, tiles, gemstones",
      ],
    },
    {
      name: "Sanding Dispenser Kits",
      desc: "Workshop-ready combinations. A steel or heavy cardboard dispenser rack pre-packed with 4 to 5 rolls of assorted grits. Allows rapid tearing without unrolling the entire bundle.",
      features: [
        "Roll count: 4-roll and 5-roll combinations",
        "Packaging: Custom printed corrugated box with integrated cutting blades",
        "Ideal Buyers: Hardware store displays, automotive shop organizers",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top CTA Area */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">SPECIFICATIONS & OEM OPTIONS</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              Sanding & Grinding Accessories
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              Bulk sandpapers, zirconia resin fiber discs, mesh drywall screen sheets, and detail mini sanding stick kits.
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
                  We supply multi-grit sandpapers and detail sticks packaged in custom corrugated dispenser cases and blister backing cards with FNSKU barcodes.
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
                        <th className="px-4 py-3 font-semibold uppercase">B2B Sourcing MOQ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr>
                        <td className="px-4 py-3 font-bold">Sanding Sheets</td>
                        <td className="px-4 py-3">Silicon Carbide / Aluminum Oxide</td>
                        <td className="px-4 py-3">P60 to P2500</td>
                        <td className="px-4 py-3">C-wt / J-wt Latex Paper</td>
                        <td className="px-4 py-3">10,000 Sheets</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3 font-bold">Zirconia Fiber Discs</td>
                        <td className="px-4 py-3">Zirconia Alumina</td>
                        <td className="px-4 py-3">P36 to P120</td>
                        <td className="px-4 py-3">0.8mm Vulcanized Fiber</td>
                        <td className="px-4 py-3">5,000 Discs</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-bold">Drywall Sanding Screen</td>
                        <td className="px-4 py-3">Silicon Carbide double-coat</td>
                        <td className="px-4 py-3">P80 to P240</td>
                        <td className="px-4 py-3">Fiberglass Open Mesh</td>
                        <td className="px-4 py-3">5,000 Sheets</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3 font-bold">Detail Sanding sticks</td>
                        <td className="px-4 py-3">Aluminum Oxide belts</td>
                        <td className="px-4 py-3">P80 to P400</td>
                        <td className="px-4 py-3">Resilient plastic stick</td>
                        <td className="px-4 py-3">1,000 Kits</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-bold">Diamond Grinders</td>
                        <td className="px-4 py-3">Electroplated Diamond</td>
                        <td className="px-4 py-3">P50 to P3000</td>
                        <td className="px-4 py-3">Flexible backing or Steel core</td>
                        <td className="px-4 py-3">500 units</td>
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
                  src="/images/sanding_tools.png"
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
                    <span className="text-white font-bold">20 - 30 Days</span>
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
                    <span className="text-white font-bold leading-normal">FOB Shanghai, CIF ports, or FBA door-to-door courier options.</span>
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

              {/* YouTube Shorts Demo Links */}
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Shorts Demonstrations
                </h3>
                <ul className="space-y-4 text-xs">
                  <li>
                    <a 
                      href="https://www.youtube.com/hashtag/scottchen" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-industry-orange font-bold hover:underline block"
                    >
                      YouTube Shorts: #AF-03 &rarr;
                    </a>
                    <span className="text-industry-slate-300 block mt-1">Zirconia resin fiber disc leveling a thick weld joint in 15 seconds.</span>
                  </li>
                  <li>
                    <a 
                      href="https://www.youtube.com/hashtag/scottchen" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-industry-orange font-bold hover:underline block"
                    >
                      YouTube Shorts: #AF-04 &rarr;
                    </a>
                    <span className="text-industry-slate-300 block mt-1">Mini detail sanding sticks refining tiny tight channels in a resin plastic model.</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Persistent CTA Banner */}
      <CTASection />
    </div>
  );
}
