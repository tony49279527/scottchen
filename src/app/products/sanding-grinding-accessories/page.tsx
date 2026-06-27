import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "OEM Sanding & Grinding Accessories | SCOTTCHEN",
  description: "Buy bulk sandpaper sheets, silicon carbide screens, zirconia grinding discs, mini sanding sticks, and custom abrasive dispenser kits. Standard B2B MOQ parameters.",
  path: "/products/sanding-grinding-accessories",
  alternatePath: "/zh/products/sanding-grinding-accessories",
});

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

      {/* Key Takeaways / B2B Quick Facts */}
      <section className="py-8 bg-industry-slate-900 border-b border-industry-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-industry-slate-800 bg-industry-slate-950/40 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="md:w-1/3">
                <span className="text-[10px] font-mono font-bold tracking-widest text-industry-orange uppercase">B2B QUICK TAKEAWAYS</span>
                <h2 className="text-2xl font-black text-white mt-1">Abrasives Specifications</h2>
                <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">
                  Consolidated technical parameters, backing weights, and packaging MOQs for volume buyers.
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
                    <span className="text-industry-slate-200"><strong>Clog-Free mesh:</strong> Fiberglass open-weave drywall screens coated on both sides with premium silicon carbide to prevent compound loading.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Volume MOQs:</strong> 10,000 sheets for sandpaper, 5,000 pcs for fiber discs, and 1,000 sets for dispenser boxes or detail sticks. Lead time: 20-30 days.</span>
                  </li>
                </ul>
              </div>
            </div>
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

              {/* Tensile Strength & Fracturing Specifications Table */}
              <div id="tensile-table" className="space-y-4 pt-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  Abrasive Backing Tensile Strength & Grain Adhesion Specifications
                </h2>
                <p className="text-xs text-industry-slate-400 leading-relaxed font-mono">
                  B2B surfacing operations require backing materials that withstand massive mechanical tension and shear stress without premature grain shedding or fracturing:
                </p>
                
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">Abrasive Backing Type</th>
                        <th className="px-4 py-3 font-semibold uppercase">Base Material Weight</th>
                        <th className="px-4 py-3 font-semibold uppercase">Longitudinal Tensile (N/50mm)</th>
                        <th className="px-4 py-3 font-semibold uppercase">Transverse Tensile (N/50mm)</th>
                        <th className="px-4 py-3 font-semibold uppercase">Bond & Grain Fracture Threshold</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr>
                        <td className="px-4 py-3 font-bold">Vulcanized Fiber Backing</td>
                        <td className="px-4 py-3">0.8 mm High-Density Vulcanized Cotton</td>
                        <td className="px-4 py-3">&ge; 1,050 N / 50mm</td>
                        <td className="px-4 py-3">&ge; 750 N / 50mm</td>
                        <td className="px-4 py-3">Phenolic resin bond / Zirconia micro-fracturing &ge; 120 N load</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3 font-bold">Latex C-weight Paper</td>
                        <td className="px-4 py-3">140 g/m&sup2; Premium Latex-Impregnated</td>
                        <td className="px-4 py-3">&ge; 350 N / 50mm</td>
                        <td className="px-4 py-3">&ge; 220 N / 50mm</td>
                        <td className="px-4 py-3">Double-coat resin / Silicon carbide self-sharpening fracture</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-bold">Cotton J-weight Cloth</td>
                        <td className="px-4 py-3">180 g/m&sup2; High-Flex Poly-Cotton Blend</td>
                        <td className="px-4 py-3">&ge; 820 N / 50mm</td>
                        <td className="px-4 py-3">&ge; 480 N / 50mm</td>
                        <td className="px-4 py-3">Glue/resin hybrid bond / Aluminum oxide progressive attrition</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3 font-bold">Fiberglass Mesh</td>
                        <td className="px-4 py-3">110 g/m&sup2; E-glass Open Interlock Mesh</td>
                        <td className="px-4 py-3">&ge; 450 N / 50mm</td>
                        <td className="px-4 py-3">&ge; 400 N / 50mm</td>
                        <td className="px-4 py-3">Phenolic binder coating / SiC grain retention index &ge; 98%</td>
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

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Retail Product Reference
                </h3>
                <p className="text-xs leading-relaxed text-industry-slate-300">
                  Review current SCOTTCHEN retail products to understand existing abrasive,
                  sanding, and kit configurations before requesting a custom B2B version.
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
                desc: "Multi-hole vacuum-compatible sanding screens covering P80 to P150 grits for dust-free sanding platforms.",
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
                      rel="noopener noreferrer"
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
                a: "We offer C-weight latex-impregnated paper backing for wet/dry hand sanding sheets (which prevents tearing when soaked), and heavy J-weight flexible cotton cloth backing for sander rolls, ensuring higher tensile strength during contour sanding and machine operation."
              },
              {
                q: "Why do you use silicon carbide for drywall sanding screens instead of aluminum oxide?",
                a: "Silicon carbide grains are harder and fracture under pressure to expose fresh, sharp cutting edges. The sharp grain profile combined with the open-weave fiberglass mesh prevents clogging from gypsum plaster, allowing dust to pass through easily while maintaining a fast, flat cut."
              },
              {
                q: "What center hole dimensions and backing options do you support for grinding discs?",
                a: "Our zirconia fiber discs come in standard 4.5\", 5\", and 7\" diameters with a 7/8\" (22.23mm) arbor hole. Sourcing agents can choose either a standard circular bore or a pre-cut star center hub. All discs are bonded on 0.8mm thick vulcanized fiber backing for maximum structural stability."
              },
              {
                q: "Can we mix multiple grits in a custom-labeled dispenser box?",
                a: "Yes. Our workshop sanding dispenser kits are customizable. You can specify a custom assortment of 4 or 5 sandpaper rolls (e.g., P150, P240, P320, P400) inside a single cardboard container with a metal tearing edge. We apply your private label design, warning logos, and UPC barcodes directly to the box."
              },
              {
                q: "What is the minimum order quantity (MOQ) for detail sanding sticks?",
                a: "For our spring-tensioned detail sanding sticks and replacement micro-grit belts, the standard MOQ is 1,000 retail packs. Each pack typically includes 1 detail stick and a customized selection of 15 replacement belts spanning different grits."
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
                "@id": "https://www.scottchentools.com/products/sanding-grinding-accessories#productgroup",
                "name": "SCOTTCHEN Sanding & Grinding Accessories Catalog",
                "description": "Industrial-grade abrasives including latex-backed wet/dry sandpaper sheets, non-clogging silicon carbide drywall sanding screens, zirconia fiber discs, and detail sanding rods.",
                "url": "https://www.scottchentools.com/products/sanding-grinding-accessories",
                "brand": {
                  "@type": "Brand",
                  "name": "SCOTTCHEN"
                },
                "manufacturer": {
                  "@type": "Organization",
                  "name": "SCOTTCHEN"
                },
                "hasVariant": [
                  {
                    "@type": "Product",
                    "name": "Latex Wet/Dry Sandpaper Sheets",
                    "description": "Premium silicon carbide sheets on latex C-weight backing for automotive styling and wet prep.",
                    "sku": "SC-SANDPAPER-SHEETS"
                  },
                  {
                    "@type": "Product",
                    "name": "Zirconia Vulcanized Fiber Grinding Discs",
                    "description": "Heavy weld-leveling zirconia discs with 7/8-inch star hubs on 0.8mm vulcanized backing.",
                    "sku": "SC-ZIRCONIA-DISCS"
                  },
                  {
                    "@type": "Product",
                    "name": "Fiberglass Mesh Drywall Sanding Screens",
                    "description": "Double-sided silicon carbide mesh sheets for clog-free dust-extracted drywall sanding.",
                    "sku": "SC-DRYWALL-MESH"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://www.scottchentools.com/products/sanding-grinding-accessories#faqpage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What backing weights and materials are available for Scottchen sandpaper sheets?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We offer C-weight latex-impregnated paper backing for wet/dry hand sanding sheets (which prevents tearing when soaked), and heavy J-weight flexible cotton cloth backing for sander rolls, ensuring higher tensile strength during contour sanding and machine operation."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Why do you use silicon carbide for drywall sanding screens instead of aluminum oxide?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Silicon carbide grains are harder and fracture under pressure to expose fresh, sharp cutting edges. The sharp grain profile combined with the open-weave fiberglass mesh prevents clogging from gypsum plaster, allowing dust to pass through easily while maintaining a fast, flat cut."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What center hole dimensions and backing options do you support for grinding discs?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our zirconia fiber discs come in standard 4.5\", 5\", and 7\" diameters with a 7/8\" (22.23mm) arbor hole. Sourcing agents can choose either a standard circular bore or a pre-cut star center hub. All discs are bonded on 0.8mm thick vulcanized fiber backing for maximum structural stability."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can we mix multiple grits in a custom-labeled dispenser box?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Our workshop sanding dispenser kits are customizable. You can specify a custom assortment of 4 or 5 sandpaper rolls (e.g., P150, P240, P320, P400) inside a single cardboard container with a metal tearing edge. We apply your private label design, warning logos, and UPC barcodes directly to the box."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the minimum order quantity (MOQ) for detail sanding sticks?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "For our spring-tensioned detail sanding sticks and replacement micro-grit belts, the standard MOQ is 1,000 retail packs. Each pack typically includes 1 detail stick and a customized selection of 15 replacement belts spanning different grits."
                    }
                  }
                ]
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
