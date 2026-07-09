import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Flap Disc Manufacturer | Type 27 & 29 Wholesale | SCOTTCHEN",
  description: "OEM flap disc manufacturer in China. Type 27 and 29 zirconia or ceramic flap discs in 4.5, 5 and 7 inch sizes with fiberglass backing. MOQ 500 pcs.",
  path: "/flap-discs",
  alternatePath: "/zh/flap-discs",
});

export default function FlapDiscsPage() {
  const subtypes = [
    {
      name: "Type 27 (Depressed Center) Flap Discs",
      desc: "Type 27 flap discs feature a depressed center hub that allows flush grinding on flat surfaces and provides clearance for the angle grinder spindle nut. They are the most widely used flap disc profile in metal fabrication and welding shops, delivering a balanced blend of stock removal and finishing. Type 27 discs are ideal for general-purpose grinding, weld blending, and surface preparation where a controlled cut rate and smooth finish are both required.",
      features: ["Depressed center profile for flush grinding clearance", "Available in 4.5\", 5\", 7\" diameters", "Grits: P36, P40, P60, P80, P120", "Fiberglass backing plate with 7/8\" arbor"],
    },
    {
      name: "Type 29 (Conical) Flap Discs",
      desc: "Type 29 flap discs have an angled, conical flap arrangement that presents the abrasive flaps at approximately 15-18 degrees to the workpiece surface. This aggressive angle delivers faster stock removal and more contact pressure on edge grinding and weld seam work. Type 29 conical discs are preferred by welders and fabricators for high-pressure grinding, heavy stock removal, and contour work where aggressive cutting action is the priority.",
      features: ["Conical profile for aggressive high-pressure grinding", "Ideal for weld seams, edge chamfering, heavy stock removal", "Diameters: 4.5\", 5\", 7\"", "Available in zirconia and ceramic grain options"],
    },
    {
      name: "Zirconia Alumina Flap Discs",
      desc: "Zirconia alumina abrasive grain offers excellent self-sharpening characteristics, making it the workhorse grain for steel, stainless steel, and alloy grinding. As zirconia grains fracture during use, fresh sharp cutting edges are continuously exposed, resulting in consistent cut rates throughout disc life. Zirconia flap discs are the most popular choice for industrial fabrication, structural steel, and general metalworking applications.",
      features: ["Premium German zirconia grain option available", "Self-sharpening for consistent cut rate throughout life", "Outstanding on carbon steel, stainless steel, cast iron", "Density options: standard (7/8\" arbor) and high-density"],
    },
    {
      name: "Ceramic Alumina Flap Discs",
      desc: "Ceramic alumina grain represents the premium tier of abrasive performance for flap discs. Ceramic micro-grains fracture in a controlled manner to produce ultra-sharp cutting points at a microscopic level, delivering significantly faster cut rates and 30-50% longer disc life compared to zirconia, while generating less heat on the workpiece. Ceramic flap discs are the preferred choice for stainless steel, high-alloy steel, hard metals, and high-production environments where labor cost savings from fewer disc changes outweigh the higher unit cost.",
      features: ["Micro-fracturing ceramic grain for ultra-fast cutting", "Reduced heat buildup prevents blueing on stainless", "30-50% longer life than zirconia discs", "Top-tier choice for stainless steel and hard alloys"],
    },
    {
      name: "Aluminum Oxide Flap Discs",
      desc: "Aluminum oxide flap discs offer an economical solution for general-purpose metal sanding, woodworking, and light fabrication where premium zirconia or ceramic performance is not required. A/O flap discs provide reliable cutting action on carbon steel, non-ferrous metals, and wood at a lower price point, making them a popular entry-level option for hardware retail, DIY markets, and budget-conscious industrial users.",
      features: ["Economical aluminum oxide grain for general-purpose use", "Suitable for carbon steel, non-ferrous metals, wood", "Standard density with fiberglass backing", "Grits: P40 through P120"],
    },
    {
      name: "High-Density Jumbo Flap Discs",
      desc: "High-density flap discs use additional layers of abrasive flaps, creating a thicker disc with significantly more abrasive material and up to double the service life of standard-density discs. Jumbo flap discs reduce disc change frequency in high-production environments such as foundries, structural steel fabrication, and heavy equipment manufacturing, where downtime for disc changes directly impacts labor productivity.",
      features: ["Extra-thick flap arrangement for extended service life", "Up to 2x longer life than standard density discs", "Ideal for high-volume production grinding", "Available in zirconia and ceramic grain, Type 27/29 profiles"],
    },
  ];

  const faqs = [
    {
      q: "What is the minimum order quantity for wholesale flap discs?",
      a: "Our reference MOQ for flap disc wholesale orders is 500 pieces per size, type, grit, and grain combination for standard zirconia and aluminum oxide flap discs. Ceramic and premium German zirconia flap discs have a reference MOQ of 1,000 pieces per configuration. Private label packaging, custom label printing, and high-density jumbo discs may require higher MOQs based on raw material purchasing requirements. We accept mixed-container orders combining multiple sizes, grits, and types to help distributors stock a complete flap disc range.",
    },
    {
      q: "What is the difference between Type 27 and Type 29 flap discs?",
      a: "Type 27 flap discs have a flat profile with a depressed center that provides spindle nut clearance while keeping the abrasive surface relatively parallel to the workpiece, making them versatile for both grinding and finishing on flat surfaces. Type 29 flap discs feature an angled conical flap arrangement of approximately 15-18 degrees, presenting the abrasive flaps more aggressively to the workpiece for faster stock removal on edges, weld seams, and contours. Choose Type 27 for general-purpose blending and finishing, and Type 29 for aggressive high-pressure grinding and heavy stock removal.",
    },
    {
      q: "Are your flap discs suitable for stainless steel?",
      a: "Yes. We produce stainless-grade flap discs formulated with zirconia alumina and ceramic grain on contaminant-free fiberglass backing plates. Stainless-grade discs contain less than 0.1% iron, sulfur, and chlorine to prevent contamination and after-rust on stainless steel surfaces. We recommend ceramic alumina grain for stainless steel applications because it cuts faster with less heat buildup, reducing the risk of blueing and heat-affected zone discoloration on stainless workpieces.",
    },
    {
      q: "What safety certifications do your flap discs meet?",
      a: "Our flap discs are manufactured under ISO 9001 quality management and comply with EN12413 safety standards for bonded abrasive products. Each disc is rated for maximum RPM appropriate to its diameter: 4.5\" discs at 13,300 RPM, 5\" discs at 12,200 RPM, and 7\" discs at 8,600 RPM. Discs carry appropriate safety markings, expiration dates, and application restrictions. We can provide MPA and third-party test reports for qualified buyers upon request.",
    },
    {
      q: "What is the production lead time for flap disc orders?",
      a: "Standard production lead time for flap disc orders is 25 to 35 days after deposit and pre-production sample approval. Standard zirconia and aluminum oxide flap discs in common 4.5\" and 5\" sizes with bulk packaging are typically at the shorter end of this range, while ceramic grain, high-density jumbo, and private-label packaged orders may require 30 to 40 days. Rush production can be scheduled for qualified repeat customers with urgent replenishment needs.",
    },
    {
      q: "Can you supply flap discs under our private label brand?",
      a: "Yes. We offer comprehensive private label services for flap discs including custom printed labels with your brand name, logo, specifications, safety warnings, and multilingual text. Private label packaging options include individual shrink wrap per disc, color box sleeves, branded inner cartons, and retail blister packs. We can also apply your UPC/EAN or FNSKU barcode labels to individual discs and cartons for retail and FBA distribution. Private label MOQ and printing setup costs are confirmed in the quotation based on your label design and order volume.",
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
              Flap Disc Manufacturer &amp; Abrasive Flap Disc Supplier
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              OEM flap disc manufacturer producing Type 27 and Type 29 flap discs in zirconia alumina, ceramic, and aluminum oxide. Fiberglass-backed, precision-balanced for vibration-free angle grinder operation. MOQ 500 pieces.
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
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Pieces per SKU</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">25-35 Days</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Lead Time</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">EN12413</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Safety Standard</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">Vibration-Free</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Balanced Build</div>
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
                  Wholesale Flap Discs From a Specialized OEM Flap Disc Manufacturer
                </h2>
                <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                  <p>
                    SCOTTCHEN has manufactured flap discs and abrasive flap disc products at our Shanghai, China facility since 2014, serving metal fabricators, welding supply distributors, tool brands, hardware chains, and industrial supply companies worldwide. As a dedicated flap disc manufacturer, we produce Type 27 depressed-center and Type 29 conical flap discs across a full range of grain types, grits, and sizes for angle grinder applications ranging from heavy weld grinding and stock removal to stainless finishing and surface preparation.
                  </p>
                  <p>
                    Our flap disc production begins with premium abrasive cloth sourced from leading coated abrasive manufacturers—including German zirconia alumina cloth for top-tier performance applications. Abrasive flaps are precisely cut, layered onto high-strength fiberglass backing plates using automated flap arrangement equipment, and bonded with heat-resistant epoxy adhesive to ensure the flaps remain secured under heavy grinding pressure and high operating temperatures. Each production batch is tested for bond integrity, balance, run-out, and RPM performance before final packaging.
                  </p>
                  <p>
                    As an abrasive flap disc supplier for wholesale distribution, we understand that fabricators and end-users depend on consistent cut rate, long disc life, and vibration-free operation to maximize productivity. Our flap discs are precision-balanced to minimize vibration and operator fatigue during extended grinding sessions, and we offer both standard-density and high-density jumbo configurations to match the production volume requirements of your customers. Whether you are supplying structural steel fabricators, welding shops, foundries, or home-improvement retailers, we can tailor flap disc specifications and packaging to your market.
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
                  Standard Specifications
                </h2>
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
                    { title: "Premium German Zirconia Option", desc: "We source premium zirconia alumina abrasive cloth from top German manufacturers for maximum cut rate and disc life in demanding industrial applications." },
                    { title: "Fiberglass Backing Plate", desc: "High-density fiberglass backing plates provide rigid, stable support while absorbing vibration, ensuring smooth operation without backing plate failure under heavy grinding pressure." },
                    { title: "Precision-Balanced Build", desc: "Automated flap arrangement and precision assembly produce balanced discs that reduce vibration and operator fatigue during extended angle grinder use." },
                    { title: "Heat-Resistant Bond", desc: "Industrial epoxy adhesive bonds flaps to the backing plate under heat and pressure, preventing flap detachment even in high-temperature heavy grinding conditions." },
                    { title: "Contaminant-Free for Stainless", desc: "Stainless-grade discs contain Fe+S+Cl below 0.1%, preventing after-rust and contamination on stainless steel workpieces." },
                    { title: "Full Private Label Support", desc: "Custom labels, retail packaging, FBA prep, barcode labeling, and branded cartons to support your brand distribution across all channels." },
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
                    SCOTTCHEN provides comprehensive OEM flap disc manufacturing services for distributors, welding supply brands, private label tool companies, and industrial supply chains. Our OEM services include grain selection (aluminum oxide, zirconia alumina, ceramic alumina, premium German zirconia), density configuration (standard or high-density jumbo), Type 27 or Type 29 profile, and custom flap angle specifications to match your target application requirements.
                  </p>
                  <p>
                    Private label packaging options include individual shrink wrap with branded labels, color boxes, bulk industrial cartons with your logo, and retail-ready blister packs for hardware and home-center distribution. All labels can include your brand name, product specifications, ANSI/CAMI or FEPA grit marking, maximum RPM, safety warnings, and usage instructions in multiple languages. Barcode labels (UPC/EAN/FNSKU) can be applied to individual discs or cartons for inventory and retail scanning.
                  </p>
                  <p>
                    For large OEM customers with recurring volume requirements, we can develop custom flap disc formulations including specialized grain blends for specific applications such as stainless steel, aluminum, titanium, or aerospace alloys. Contact our sales engineering team to discuss your performance targets and we will develop a custom specification with pre-production samples for testing and approval before mass production.
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
                  alt="SCOTTCHEN Flap Discs Wholesale Manufacturer"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  B2B Sourcing Parameters
                </h3>
                <div className="space-y-4 text-xs font-mono">
                  <div><span className="text-industry-slate-500 block">MOQ:</span><span className="text-white font-bold">500 pcs per size/grit/type</span></div>
                  <div><span className="text-industry-slate-500 block">Lead Time:</span><span className="text-white font-bold">25 - 35 days after sample approval</span></div>
                  <div><span className="text-industry-slate-500 block">Max RPM (4.5\"):</span><span className="text-white font-bold">13,300 RPM</span></div>
                  <div><span className="text-industry-slate-500 block">Max RPM (5\"):</span><span className="text-white font-bold">12,200 RPM</span></div>
                  <div><span className="text-industry-slate-500 block">Max RPM (7\"):</span><span className="text-white font-bold">8,600 RPM</span></div>
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
            "@type": "ProductGroup",
            "@id": absoluteUrl("/flap-discs#productgroup"),
            "name": "SCOTTCHEN Flap Discs",
            "description": "OEM Type 27 and Type 29 flap discs in zirconia alumina, ceramic, and aluminum oxide on fiberglass backing plates.",
            "url": absoluteUrl("/flap-discs"),
            "image": absoluteUrl("/images/fiber_discs.webp"),
            "brand": { "@type": "Brand", "name": "SCOTTCHEN" },
            "manufacturer": { "@id": absoluteUrl("/#organization") },
            "category": "Flap discs and abrasive flap wheels",
            "material": "Zirconia alumina, ceramic, aluminum oxide on fiberglass backing",
            "additionalProperty": [
              { "@type": "PropertyValue", "name": "Shapes", "value": "Type 27 flat and Type 29 conical" },
              { "@type": "PropertyValue", "name": "Reference MOQ", "value": "500 discs per common size and grit" }
            ],
          }),
        }}
      />

      <CTASection />
    </div>
  );
}
