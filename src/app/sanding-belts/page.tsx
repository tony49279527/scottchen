import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Sanding Belt Supplier & OEM Belt Manufacturer | SCOTTCHEN",
  description: "Wholesale sanding belts for knife making, woodworking and metal fabrication. Custom sizes in aluminum oxide and zirconia from a China OEM factory.",
  path: "/sanding-belts",
  alternatePath: "/zh/sanding-belts",
});

export default function SandingBeltsPage() {
  const subtypes = [
    {
      name: "Portable Belt Sander Belts (3x21, 4x24)",
      desc: "Standard-sized sanding belts for popular portable belt sanders used in construction, woodworking, deck refinishing, and metal surface prep. The 3x21 and 4x24 sizes fit most common belt sander models from major power tool brands. These belts are produced in aluminum oxide for general wood and metal work, zirconia alumina for aggressive metal grinding, and ceramic for high-production applications.",
      features: ["Common sizes: 3\"x21\", 3\"x24\", 4\"x24\"", "Backing: X-weight or Y-weight cotton/polyester cloth", "Joint: precision-butt for smooth, bump-free operation", "Grits P36 through P400 in aluminum oxide and zirconia"],
    },
    {
      name: "Bench Sander Belts (6x48, 4x36)",
      desc: "Wider sanding belts designed for stationary bench and pedestal belt sanders used in cabinet shops, metal fabrication shops, knife making shops, and educational institutions. The 6x48 size is the industry standard for bench belt sanders, delivering a wide sanding surface for dimensioning, shaping, and finishing larger workpieces. These belts are available in aluminum oxide, zirconia, silicon carbide, and ceramic grain.",
      features: ["Common sizes: 6\"x48\", 4\"x36\", 6\"x88\" wide-belt", "Heavy Y-weight or YF-polyester backing for rigidity", "Bi-directional tape joint for reversible operation option", "Available in closed-coat and open-coat constructions"],
    },
    {
      name: "Narrow / File Belts (1x30, 1/2x18)",
      desc: "Narrow-width sanding belts for air file belt sanders, finger sanders, and detail grinding tools used in auto body, welding, fabrication, and hard-to-reach areas. The 1x30 size is also popular with hobbyist and entry-level knife makers using small bench belt grinders. Narrow belts are available in aluminum oxide for general work, zirconia for metal, and non-woven surface conditioning belts for blending and finishing.",
      features: ["Common sizes: 1/2\"x18\", 3/4\"x20-1/2\", 1\"x30\", 1\"x42\"", "Flexible J-weight or X-weight cloth backing", "Tape or butt joint for smooth running on small contact wheels", "Grits P40 through P1200 for stock removal to fine finish"],
    },
    {
      name: "Wide Sanding Belts",
      desc: "Wide belts for industrial wide-belt sanding machines used in panel processing, furniture manufacturing, plywood production, and metal coil processing. Wide sanding belts require precise tracking and uniform tension across the belt width, demanding precision joint construction and consistent cloth thickness. We produce wide belts in aluminum oxide, silicon carbide, and ceramic grain on heavy polyester backing for demanding industrial applications.",
      features: ["Custom widths: 12\" to 54\"+ for wide-belt machines", "Polyester or combination backing for dimensional stability", "Precision tape or overlap joint for vibration-free tracking", "Available in anti-static, open-coat, and closed-coat variants"],
    },
    {
      name: "Knife Making Belts (2x72)",
      desc: "Specialized sanding belts in the 2x72 size that has become the industry standard for professional knife making and bladesmithing belt grinders. Knife making belts require a premium combination of aggressive cut rate, long life, and heat resistance when grinding hardened tool steels, high-carbon steels, and stainless steel blade materials. We offer ceramic, zirconia, and structured abrasive belts optimized for knife makers.",
      features: ["Standard size: 2\"x72\" for knife grinders", "Premium ceramic and zirconia grain for hardened steel", "Heat-resistant resin bond prevents loading on steel", "Grits P36 through P2000 covering all blade-making stages"],
    },
    {
      name: "Silicon Carbide Belts (Glass / Stone)",
      desc: "Sharp, friable silicon carbide grain on waterproof polyester or cloth backing for grinding and finishing glass, stone, granite, marble, concrete, ceramic, and hard non-ferrous metals. Silicon carbide belts cut extremely hard materials effectively while producing a uniform scratch pattern. Wet or dry options are available with waterproof backing for wet grinding applications in stone fabrication, glass edgework, and lapidary.",
      features: ["Black silicon carbide grain for hard, brittle materials", "Waterproof polyester backing for wet grinding", "Applications: glass, stone, granite, marble, ceramic, carbide", "Grits P60 through P2000 for coarse to fine finishing"],
    },
  ];

  const faqs = [
    {
      q: "What is the MOQ for wholesale sanding belt orders?",
      a: "Reference MOQ for sanding belt wholesale orders is 500 belts per size and grit for standard sizes and aluminum oxide belts. Zirconia, ceramic, and custom-sized belts have a reference MOQ of 200-500 pieces depending on cloth availability and joint tooling requirements. Wide belts, custom sizes, and specialty applications are quoted individually based on abrasive cloth procurement and production setup. We accept mixed-size and mixed-grit orders to help distributors stock a complete belt range.",
    },
    {
      q: "Can you produce sanding belts in custom sizes?",
      a: "Yes. We manufacture sanding belts in custom widths and lengths to match virtually any belt sander, bench grinder, file sander, tube polisher, or wide-belt machine. Custom belt production requires the exact belt dimensions (width x length), cloth backing preference, abrasive grain type, grit, and joint type. We maintain tooling for most common sizes and can produce custom-joint tooling for non-standard dimensions with a one-time setup fee that is absorbed into volume orders.",
    },
    {
      q: "What joint types do you use on sanding belts?",
      a: "We offer two primary joint types: butt joints and tape overlap joints. Precision butt joints create a nearly invisible, smooth seam that runs without a bump over contact wheels and platens, making them ideal for fine finishing, knife making, and applications where the joint seam can cause witness marks on the workpiece. Tape overlap joints are stronger and more flexible, suitable for aggressive stock removal and narrow belts. All joints are precision-sanded to exact belt thickness for smooth tracking.",
    },
    {
      q: "How long does sanding belt production take?",
      a: "Standard production lead time for sanding belt wholesale orders is 25 to 35 days after deposit and sample approval for standard sizes in aluminum oxide. Custom sizes, ceramic belts, wide belts, and private label packaged orders may require 30 to 45 days depending on cloth sourcing and joint tooling preparation. Rush production is available for urgent repeat orders from established customers. We maintain inventory of common 3x21, 4x24, and 2x72 belt sizes for fast reorder fulfillment.",
    },
    {
      q: "What backing cloth weights are available?",
      a: "We produce sanding belts on several backing cloth weights to match application requirements: J-weight (flexible, for contour work and narrow belts), X-weight (general-purpose, most common for portable and bench sanders), Y-weight (heavy-duty for aggressive stock removal and metal grinding), YF-weight (rigid polyester for wide-belt and high-tension applications), and waterproof polyester backing for wet grinding applications. Backing selection depends on belt size, tool type, workpiece material, and grinding pressure.",
    },
    {
      q: "Do you offer private label packaging for sanding belts?",
      a: "Absolutely. We provide full private label packaging for sanding belts including branded cardboard sleeves, color boxes for multi-belt assortment packs, bulk cartons with your logo, and retail blister packs for hardware and home-center distribution. Each belt sleeve can be printed with your brand, belt size, grit designation, safety warnings, and usage instructions. FNSKU/UPC barcode labels and FBA-compliant carton labeling are available for Amazon sellers and e-commerce distribution.",
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
              Sanding Belt Supplier &amp; Abrasive Belts Manufacturer
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              Wholesale abrasive sanding belts for knife making, woodworking, metal fabrication, glass, and stone. Custom sizes available, precision-butt joints, aluminum oxide, zirconia, ceramic, and silicon carbide belts from China OEM factory.
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
                <div className="text-2xl font-black text-industry-orange">MOQ 500</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Belts per Size/Grit</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">Custom Sizes</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Any Dimension</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">25-35 Days</div>
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
                  Wholesale Sanding Belts From a Dedicated Abrasive Belts Manufacturer
                </h2>
                <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                  <p>
                    SCOTTCHEN is a specialized sanding belt supplier and abrasive belts manufacturer operating from our Shanghai production facility since 2014. We produce coated abrasive sanding belts in a comprehensive range of sizes, abrasive grain types, backing cloth weights, and joint configurations to serve woodworking shops, metal fabricators, knife makers, glass and stone fabricators, industrial wide-belt operations, and abrasive product distributors worldwide. As a wholesale sanding belt supplier, we combine factory-direct pricing with strict quality control over every production step—from abrasive cloth slitting and joint skiving to belt curing, testing, and packaging.
                  </p>
                  <p>
                    Sanding belt quality depends critically on the precision of the joint, the uniformity of the abrasive coating, and the stability of the backing cloth under tension. We use precision-butt joints on all finishing belts, skived and taped to a tolerance of less than 0.05mm thickness variation at the seam, ensuring the joint runs smoothly over contact wheels and platens without producing witness marks on the workpiece. Our heat-resistant resin bond system is formulated to withstand the high temperatures generated in aggressive metal grinding and knife making applications, preventing grain shedding and premature belt failure.
                  </p>
                  <p>
                    We understand that different applications demand different belt specifications, and our product range reflects that diversity. From lightweight J-weight cloth file belts for auto body detail work to heavy YF-polyester wide belts for industrial panel sanding; from premium ceramic 2x72 knife making belts to waterproof silicon carbide belts for stone and glass—we can supply the right belt for the application. We also produce custom-sized belts for non-standard machines and specialty applications, working from customer drawings or sample belts to match exact dimensions and performance requirements.
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
                  Standard Specifications
                </h2>
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
                    { title: "Precision Butt Joint", desc: "Every finishing belt is manufactured with a precision-butt joint skived to less than 0.05mm thickness variation, ensuring smooth, bump-free operation over contact wheels and platens." },
                    { title: "Heat-Resistant Resin Bond", desc: "Fully cured resin-over-resin bond system withstands high temperatures in aggressive metal grinding and knife making without premature grain shedding or belt failure." },
                    { title: "Custom Size Capability", desc: "We produce belts in any width and length for portable sanders, bench grinders, file belt tools, tube polishers, and industrial wide-belt machines." },
                    { title: "Full Grain Selection", desc: "Aluminum oxide for general work, zirconia alumina for metal, ceramic for hard steels, silicon carbide for glass/stone, and non-woven for blending and finishing." },
                    { title: "Tension-Tested Before Shipment", desc: "Each production batch undergoes tension testing to ensure belts run true, track correctly, and withstand rated operating speeds without splice failure." },
                    { title: "Private Label & Kits", desc: "Branded sleeves, color boxes, multi-grit assortment packs, and knife making belt kits available with your logo and FBA-ready packaging." },
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
                    SCOTTCHEN offers complete OEM and private label sanding belt manufacturing for distributors, abrasive supply companies, tool brands, knife making suppliers, and e-commerce sellers. Our OEM services include custom belt dimensions, abrasive grain selection, backing cloth weight, joint type, and special performance treatments such as anti-static coating, lubricant additives for metal grinding, and open-coat configurations for wood resin.
                  </p>
                  <p>
                    Private label packaging includes branded cardboard belt sleeves, color boxes for multi-belt assortment packs, bulk cartons with your logo and product information, and retail display packs for hardware and home-center distribution. We also produce popular kit configurations such as knife making belt sets (assorted grits from P36 to P2000 in one package), woodworking starter kits, and metalworking assortment packs. All packaging can include your brand, belt size, FEPA or CAMI grit markings, safety warnings, and barcode labels.
                  </p>
                  <p>
                    For large OEM customers, we can develop custom abrasive belt specifications for specialized applications including robotic grinding cells, automatic tube polishing lines, and wide-belt sanding operations. Our technical team works with you to define performance requirements, produce sample belts for in-house testing, and refine specifications before moving to mass production.
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
                  <div><span className="text-industry-slate-500 block">MOQ:</span><span className="text-white font-bold">500 belts per size/grit (standard)</span></div>
                  <div><span className="text-industry-slate-500 block">Custom Sizes:</span><span className="text-white font-bold">Any width x length, tooling fee may apply</span></div>
                  <div><span className="text-industry-slate-500 block">Lead Time:</span><span className="text-white font-bold">25 - 35 days standard production</span></div>
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
            "@type": "ProductGroup",
            "@id": absoluteUrl("/sanding-belts#productgroup"),
            "name": "SCOTTCHEN Sanding Belts & Abrasive Belts",
            "description": "Wholesale sanding belts in aluminum oxide, zirconia, ceramic, and silicon carbide for knife making, woodworking, metal fabrication, glass, and stone.",
            "url": absoluteUrl("/sanding-belts"),
            "brand": { "@type": "Brand", "name": "SCOTTCHEN" },
            "manufacturer": { "@id": absoluteUrl("/#organization") },
          }),
        }}
      />

      <CTASection />
    </div>
  );
}
