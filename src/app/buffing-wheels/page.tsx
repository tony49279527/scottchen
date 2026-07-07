import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Buffing Wheel Manufacturer & Wholesale Supplier | SCOTTCHEN",
  description: "Shanghai OEM buffing wheel manufacturer since 2014. Wholesale cotton buffing and polishing wheels for metal finishing, MOQ 500 pcs per size.",
  path: "/buffing-wheels",
  alternatePath: "/zh/buffing-wheels",
});

export default function BuffingWheelsPage() {
  const subtypes = [
    {
      name: "Spiral Stitched Cotton Buffs",
      desc: "Concentrically stitched with high-tensile cotton thread for rigid, aggressive cutting action. Spiral-stitched cotton buffs are the workhorse of industrial polishing lines, ideal for deburring, scratch removal, and preparing surfaces before color buffing. The stitching prevents the cotton layers from splaying under pressure, giving a consistent firm face across long production runs.",
      features: ["Ply count: 30/40/50/60/80 Ply options", "Stitch spacing: 1/8\", 1/4\", 3/8\" concentric rings", "Diameters: 3\" to 12\" for bench grinders and buffers", "Premium unbleached cotton canvas or muslin cloth"],
    },
    {
      name: "Loose Section Cotton Buffs",
      desc: "Soft cotton layers stitched only at the center arbor hole so the cloth flares out under rotation, producing a gentle coloring and mirror polish action. Loose section buffs are used after spiral-stitched cutting to achieve a final high-gloss finish on stainless steel, chrome, brass, and precious metals without burning or marring the surface.",
      features: ["100% fine carded cotton flannel or white muslin", "Single center-ring stitching for maximum softness", "Works with White Rouge and Green Chrome compounds", "Ideal for automotive chrome, jewelry, and acrylic finishing"],
    },
    {
      name: "Airway / Ventilated Buffs",
      desc: "Constructed with internal pleats that create air channels between cotton sections, dissipating heat and allowing faster polishing speeds without compound burn-through. Airway buffs are the preferred choice for high-production automatic polishing machines in cookware, faucet, and tubular-furniture factories where continuous operation raises surface temperatures.",
      features: ["Pleated airway design reduces heat buildup by 30-40%", "Suitable for high-RPM automatic polishing equipment", "Available in 8\" to 14\" diameters with steel centers", "Longer service life than solid cotton wheels"],
    },
    {
      name: "Sisal-Cotton Treated Buffs",
      desc: "Abrasive sisal fiber blended with cotton cloth and treated with a bonding agent for aggressive cutting on stainless steel, carbon steel, and cast iron. Sisal-cotton treated buffs remove deep scratches, weld discoloration, and scale quickly. They are used as the first step in a multi-stage buffing line before cotton cutting and color steps.",
      features: ["Sisal-cotton blend with resin treatment for rigidity", "Hard density cuts faster than plain cotton", "Recommended with Black Emery or stainless-cutting compounds", "Available in spiral-stitched and bias-weave constructions"],
    },
    {
      name: "Bench Grinder Polishing Wheel Kits",
      desc: "Pre-assembled buffing wheel sets sized for 6-inch and 8-inch bench grinders, typically combining a sisal wheel, spiral-stitched cotton wheel, and loose flannel wheel with matched compound bars. These kits are packaged for retail, hardware, and e-commerce channels, ready to FBA standards with barcode labels and multilingual instructions.",
      features: ["6\" and 8\" diameters with 1/2\" and 5/8\" arbor holes", "3-step polishing sequence: sisal cut → cotton cut → color", "Shrink-wrapped or blister-card retail packaging available", "FNSKU/UPC labeling and polybag FBA prep upon request"],
    },
    {
      name: "Drill-Mounted Buffing Sets",
      desc: "Shank-mounted buffing wheels in cylinder, dome, cone, mushroom, and T-pad shapes with 1/4\" hex shanks that fit standard drills and impact drivers. Drill-mounted buffs are designed for reaching recessed areas such as wheel rims, exhaust pipes, engine bays, and contoured metalwork where bench grinders cannot reach.",
      features: ["1/4\" (6.35mm) hex shank for cordless drills", "Shapes: cylinder, cone, dome, mushroom, goblet, T-shape", "Sold in multi-piece kits with compound bars", "MOQ: 1,000 sets per shape combination"],
    },
    {
      name: "Polishing Compound Bars",
      desc: "Wax-bound abrasive compounds formulated in matched grits to pair with each buffing wheel type. Black Emery for heavy cut on steel and iron, Red Tripoli for medium cut on brass and copper, White Rouge for high-gloss on chrome and stainless, and Green Chromium Oxide for mirror finishing on stainless and aluminum. Compound bars are available in 100g, 250g, 500g, and 1kg sizes.",
      features: ["Four standard colors: Black, Red, White, Green", "Custom grit formulations for automatic polishing lines", "Heat-sealed shrink wrap with barcode sticker option", "Private label color boxes and blister packs available"],
    },
  ];

  const faqs = [
    {
      q: "What is the minimum order quantity for wholesale cotton buffing wheels?",
      a: "Our standard MOQ for cotton buffing wheel wholesale orders is 500 pieces per size and ply configuration for standard bench-grinder wheels. Shank-mounted and drill buffing sets start at 1,000 sets per shape combination. For custom constructions, treated sisal-cotton wheels, or private label packaged kits, MOQ is confirmed in the quotation based on material availability and setup costs. We accept mixed-SKU trial orders for qualified distributors to evaluate quality across multiple product lines.",
    },
    {
      q: "How long is the typical lead time for buffing wheel production?",
      a: "Standard production lead time for cotton buffing and polishing wheel orders is 25 to 35 days after sample approval and deposit confirmation. Lead times vary by order volume, ply count complexity, packaging requirements, and current factory schedule. Private label packaging with custom printing, blister cards, or color boxes typically adds 7 to 10 days. Rush production can be arranged for urgent orders on a case-by-case basis with a priority scheduling surcharge.",
    },
    {
      q: "Do you provide compound bars matched to your buffing wheels?",
      a: "Yes. We manufacture polishing compound bars in all four standard grades—Black Emery, Red Tripoli, White Rouge, and Green Chromium Oxide—to pair with our buffing wheels in the correct sequence. We can also supply custom-formulated compounds for automatic polishing machines used in cookware, faucet, and hardware manufacturing. Compounds are sold separately or bundled into kits with buffing wheels for retail distribution.",
    },
    {
      q: "What arbor hole sizes are available for your polishing wheels?",
      a: "Standard arbor hole sizes include 1/4\", 3/8\", 1/2\", 5/8\", 3/4\", 1\", and 1-1/4\" to fit most bench grinders, pedestal buffers, and automatic polishing machines. We supply telescoping cardboard or plastic center inserts that adapt a single wheel to multiple spindle diameters, as well as metal reinforcing washers for heavy-duty applications. Custom bore sizes and keyway configurations for industrial machinery are available on request.",
    },
    {
      q: "Are your buffing wheels balanced for smooth high-speed operation?",
      a: "Yes. All SCOTTCHEN cotton buffing wheels are manufactured under precision-balanced assembly with a bore tolerance of +/-0.05mm to minimize vibration at rated RPM. Each production batch is tested on balancing equipment before packaging. For large-diameter airway and ventilated buffs used on automatic polishing lines, we use steel-center hubs with precision-punched arbor holes to ensure concentricity and long service life without spindle wear.",
    },
    {
      q: "Can you produce buffing wheels with our private label and custom packaging?",
      a: "Absolutely. We offer full OEM and private label services including custom ply configurations, branded compound bar wrappers, printed color boxes, blister cards with hang tabs, heat-shrinked polybags with FNSKU/UPC barcode labels, and FBA-ready carton labeling. We support distributors, e-commerce sellers, and tool brands with retail-ready packaging that meets Amazon FBA, big-box hardware, and industrial distributor requirements. Send us your artwork and specifications for a custom quotation.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Buffing Wheels", href: "/buffing-wheels" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">B2B Wholesale &amp; OEM</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              Buffing Wheel Manufacturer &amp; Polishing Wheel Supplier
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              Shanghai-based OEM manufacturer of cotton buffing wheels, spiral-stitched polishing wheels, airway buffs, and matched polishing compound bars. Precision-balanced, ISO 9001 certified, serving distributors, tool brands, and industrial polishing operations worldwide.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/contact"
              className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-orange-hover hover:scale-[1.02] text-center"
            >
              Request Quote
            </Link>
            <Link
              href="/sample-kit"
              className="inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-slate-750 text-center"
            >
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
                <div className="text-2xl font-black text-industry-orange">FOB Shanghai</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Global Shipping</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">ISO 9001</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Certified Factory</div>
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
                  Precision Cotton Buffing Wheels &amp; Polishing Wheels From a Trusted Buffing Wheel Manufacturer
                </h2>
                <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                  <p>
                    Since 2014, SCOTTCHEN has operated as a dedicated buffing wheel manufacturer and polishing wheel supplier headquartered in Shanghai, China. We produce cotton buffing wheels for metal fabricators, automotive restoration shops, jewelry makers, cookware manufacturers, hardware distributors, e-commerce sellers, and private label tool brands across North America, Europe, and Asia-Pacific. Our in-house production covers every stage from raw cotton cloth cutting and spiral stitching to final wheel assembly, balancing, compound bar molding, and retail-ready packaging.
                  </p>
                  <p>
                    As a wholesale buffing wheel supplier, we understand that industrial buyers and polishing operations require more than just a wheel—they need consistent density, reliable arbor fit, balanced rotation, and compounds matched to the substrate. Whether you are ordering spiral-stitched cotton buffs for stainless steel weld removal, loose flannel wheels for chrome mirror finishing, airway ventilated buffs for automatic polishing machines, or sisal-cotton treated wheels for aggressive ferrous metal cutting, every batch is manufactured to approved specifications and tested for balance, ply count, and bore tolerance before leaving the factory.
                  </p>
                  <p>
                    Distributors sourcing cotton buffing wheels wholesale from SCOTTCHEN benefit from factory-direct pricing, flexible MOQ structures starting at 500 pieces, custom packaging for retail and FBA channels, and a responsive engineering team that can develop custom wheel constructions for specialized applications such as medical device polishing, aerospace component finishing, and high-volume automatic polishing lines. We also supply matched polishing compound bars in all standard colors and grit formulations so buyers can source complete polishing solutions from a single China buffing wheel manufacturer.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  Product Types &amp; Wholesale Configurations
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
                  Standard Specifications Table
                </h2>
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">Diameter</th>
                        <th className="px-4 py-3 font-semibold uppercase">Ply Count</th>
                        <th className="px-4 py-3 font-semibold uppercase">Arbor Hole</th>
                        <th className="px-4 py-3 font-semibold uppercase">Max RPM</th>
                        <th className="px-4 py-3 font-semibold uppercase">Material</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr>
                        <td className="px-4 py-3">3\" (75mm)</td>
                        <td className="px-4 py-3">30 / 40 Ply</td>
                        <td className="px-4 py-3">1/4\" Hex Shank</td>
                        <td className="px-4 py-3">6,000 RPM</td>
                        <td className="px-4 py-3">Cotton / Shank-mounted</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3">4\" (100mm)</td>
                        <td className="px-4 py-3">30 / 40 Ply</td>
                        <td className="px-4 py-3">3/8\", 1/2\"</td>
                        <td className="px-4 py-3">6,000 RPM</td>
                        <td className="px-4 py-3">Cotton Muslin</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">6\" (150mm)</td>
                        <td className="px-4 py-3">40 / 50 / 60 Ply</td>
                        <td className="px-4 py-3">1/2\", 5/8\"</td>
                        <td className="px-4 py-3">4,500 RPM</td>
                        <td className="px-4 py-3">Cotton / Sisal-Cotton</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3">8\" (200mm)</td>
                        <td className="px-4 py-3">40 / 50 / 60 Ply</td>
                        <td className="px-4 py-3">5/8\", 3/4\", 1\"</td>
                        <td className="px-4 py-3">3,600 RPM</td>
                        <td className="px-4 py-3">Cotton / Airway</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">10\" (250mm)</td>
                        <td className="px-4 py-3">50 / 60 / 80 Ply</td>
                        <td className="px-4 py-3">5/8\", 3/4\", 1\"</td>
                        <td className="px-4 py-3">3,000 RPM</td>
                        <td className="px-4 py-3">Cotton / Sisal / Airway</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3">12\" (300mm)</td>
                        <td className="px-4 py-3">60 / 80 Ply</td>
                        <td className="px-4 py-3">1\", 1-1/4\"</td>
                        <td className="px-4 py-3">2,400 RPM</td>
                        <td className="px-4 py-3">Airway / Steel-center</td>
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
                    "Stainless steel weld finishing and polishing",
                    "Aluminum and brass hardware finishing",
                    "Automotive chrome and wheel rim restoration",
                    "Jewelry and precious metal mirror polishing",
                    "Metal fabrication and weld discoloration removal",
                    "Cookware and kitchen utensil buffing lines",
                    "Cast iron and carbon steel scale removal",
                    "Acrylic and plastic surface polishing",
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
                  Why Choose Our Buffing Wheels
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Precision-Balanced Assembly", desc: "Every wheel is balanced on precision equipment with a +/-0.05mm bore tolerance to minimize vibration and spindle wear at rated RPM." },
                    { title: "ISO 9001 Certified Production", desc: "Our Shanghai factory operates under ISO 9001 quality management with incoming cloth inspection, in-process stitching checks, and final AQL batch inspection." },
                    { title: "Matched Compound System", desc: "We manufacture the full range of compound bars—Black Emery, Red Tripoli, White Rouge, Green Chrome—so you can source complete polishing systems from one supplier." },
                    { title: "Flexible OEM & Private Label", desc: "Custom ply configurations, branded packaging, blister cards, color boxes, FNSKU/UPC labeling, and FBA-ready prep for e-commerce sellers and tool brands." },
                    { title: "FBA-Ready Packaging", desc: "Retail kits are packed in polybags, blister cards, or color boxes with scannable barcodes and FBA-compliant carton labels for Amazon fulfillment." },
                    { title: "Engineering Support", desc: "Our technical team can develop custom wheel constructions, compound formulations, and multi-step polishing sequences for automatic polishing lines and specialized substrates." },
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
                    SCOTTCHEN provides comprehensive OEM and private label manufacturing for cotton buffing wheels and polishing wheel products. We work with distributors, importers, tool brands, and e-commerce sellers to develop custom wheel lines under your brand name. Our OEM services include custom cloth selection (unbleached muslin, yellow treated cotton, white flannel, sisal-cotton blend), custom ply counts and stitch patterns, arbor hole modifications, and private label compounds in matched colors.
                  </p>
                  <p>
                    For private label retail, we offer a full range of packaging options including bulk industrial cartons, branded color boxes, hang-tag blister cards, heat-shrink polybags, and clamshell packaging. We print your logo, product specifications, safety warnings, and multilingual instructions directly on packaging, and apply FNSKU or UPC barcode labels as required for Amazon FBA and other marketplace fulfillment. Our FBA prep service includes polybag suffocation warnings, carton weight labels, and ASIN/FNSKU labeling.
                  </p>
                  <p>
                    The OEM process begins with your product specifications and target application, after which we provide technical consultation, produce pre-production samples for approval, and move to mass production only after written sample approval. We also support kitting—combining buffing wheels, compound bars, arbor adapters, and drill accessories into multi-piece sets with custom inserts and retail displays. Contact our sales team to discuss your private label buffing wheel project.
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover"
                  >
                    Discuss Your OEM Project
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
                  src="/images/buffing_wheels.webp"
                  alt="SCOTTCHEN Cotton Buffing Wheels and Polishing Wheels"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  B2B Sourcing Parameters
                </h3>
                <div className="space-y-4 text-xs font-mono">
                  <div>
                    <span className="text-industry-slate-500 block">MOQ:</span>
                    <span className="text-white font-bold">500 pcs per size (standard) / 1,000 sets (kits)</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">Lead Time:</span>
                    <span className="text-white font-bold">25 - 35 Days after deposit &amp; sample approval</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">Shipping Terms:</span>
                    <span className="text-white font-bold">FOB Shanghai / EXW / CIF by arrangement</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">Payment Terms:</span>
                    <span className="text-white font-bold">T/T 30% deposit, 70% before shipment</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">Materials:</span>
                    <span className="text-white font-bold leading-normal">Cotton muslin, cotton flannel, sisal-cotton blend, steel centers, wax-bound abrasive compounds</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-industry-slate-850">
                  <Link
                    href="/sample-kit"
                    className="w-full inline-flex justify-center items-center rounded border border-industry-orange text-industry-orange font-bold uppercase tracking-wider py-3 hover:bg-industry-orange hover:text-white transition-all text-xs"
                  >
                    Request Sample Kit
                  </Link>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Related Categories
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/abrasive-kits" className="text-industry-orange hover:underline">Buffing &amp; Polishing Kits</Link></li>
                  <li><Link href="/sanding-discs" className="text-industry-orange hover:underline">Sanding Discs</Link></li>
                  <li><Link href="/flap-discs" className="text-industry-orange hover:underline">Flap Discs</Link></li>
                  <li><Link href="/sanding-belts" className="text-industry-orange hover:underline">Sanding Belts</Link></li>
                  <li><Link href="/wholesale-abrasives" className="text-industry-orange hover:underline">Wholesale Abrasives Program</Link></li>
                  <li><Link href="/china-abrasive-manufacturer" className="text-industry-orange hover:underline">China Factory Profile</Link></li>
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
            "@id": absoluteUrl("/buffing-wheels#productgroup"),
            "name": "SCOTTCHEN Buffing Wheels & Polishing Wheels",
            "description": "Wholesale cotton buffing wheels, spiral-stitched polishing wheels, airway buffs, sisal-cotton treated buffs, and polishing compound bars from Shanghai OEM manufacturer.",
            "url": absoluteUrl("/buffing-wheels"),
            "brand": { "@type": "Brand", "name": "SCOTTCHEN" },
            "manufacturer": { "@id": absoluteUrl("/#organization") },
          }),
        }}
      />

      <CTASection />
    </div>
  );
}
