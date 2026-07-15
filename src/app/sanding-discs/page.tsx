import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { buildFaqPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Sanding Disc Wholesale Supplier & OEM Factory | SCOTTCHEN",
  description: "OEM aluminum oxide, zirconia and silicon carbide sanding disc sourcing. Compare backing, attachment, grit, sample plans, packaging and quoted MOQ.",
  path: "/sanding-discs",
  alternatePath: "/zh/sanding-discs",
});

export default function SandingDiscsPage() {
  const subtypes = [
    {
      name: "Hook & Loop Sanding Discs",
      desc: "Hook-and-loop backed sanding discs designed for quick, tool-free changes on random orbital sanders and dual-action polishers. The nylon hook-and-loop backing bonds firmly to the sander pad during use and peels off cleanly for grit changes, reducing downtime in high-volume woodworking, auto body, and metal finishing shops. We produce hook and loop sanding discs with premium resin-bonded aluminum oxide, zirconia alumina, or ceramic grain on C-weight, D-weight, or E-weight paper backing, as well as film-backed options for fine finishing.",
      features: ["Diameters: 4.5\", 5\", 6\", 7\", 9\" common sizes", "Grit range: P24 to P3000 (coarse to ultra-fine)", "Backing: C/D/E-weight paper, polyester film, or cloth", "8-hole, 15-hole, multi-hole, or no-hole dust extraction patterns"],
    },
    {
      name: "PSA (Sticky / Self-Adhesive) Sanding Discs",
      desc: "Pressure-sensitive adhesive sanding discs that adhere directly to flat or soft DA sander backup pads without a hook-and-loop interface. PSA discs offer a secure bond for aggressive stock removal and are widely used in autobody repair, metal fabrication, and solid-surface fabrication shops where heat and pressure can lift hook-and-loop discs. Available in aluminum oxide and zirconia grain on durable paper or cloth backing.",
      features: ["High-tack pressure-sensitive adhesive backing", "Compatible with standard PSA backup pads", "Resin-over-resin bond for heat resistance", "Grits P36 to P2000 in aluminum oxide and zirconia"],
    },
    {
      name: "Fiber Resin Discs",
      desc: "Rigid vulcanized fiber backing coated with aluminum oxide, zirconia alumina, or ceramic grain for heavy-duty grinding on angle grinders. Fiber resin discs are designed for weld grinding, stock removal, deburring, and edge chamfering on steel, stainless steel, and cast iron. They mount on a rigid rubber backup pad and deliver aggressive cutting action with excellent grain retention under heavy pressure.",
      features: ["Diameters: 4\", 4.5\", 5\", 7\", 9\"", "Arbor hole: 7/8\" standard", "Grains: aluminum oxide, zirconia alumina, ceramic", "Grits P24 to P120 for heavy grinding"],
    },
    {
      name: "Quick-Change / Roll-Lock Discs",
      desc: "Compact sanding discs with a quick-change threaded or twist-lock backing that mounts to a matching holder on die grinders and pneumatic tools. Roll-lock discs are used in hard-to-reach areas for spot weld removal, blending, deburring, and surface prep in auto body, aerospace, and metal fabrication. Available in aluminum oxide, zirconia, non-woven surface conditioning, and ceramic types.",
      features: ["Diameters: 2\", 3\", 4\" mini discs", "Type R, Type S, Type TS quick-change attachments", "Surface conditioning non-woven options available", "Ideal for die grinders and right-angle tools"],
    },
    {
      name: "Mesh Anti-Clog Net Sanding Discs",
      desc: "Open-mesh sanding net discs that allow near-full-surface dust extraction, dramatically reducing clogging and loading when sanding painted surfaces, wood, filler, and drywall. The mesh grid structure allows dust to pass through the entire disc surface rather than through dedicated holes, delivering longer disc life and a cleaner working environment. Mesh sanding discs are compatible with multi-hole and standard hook-and-loop backup pads.",
      features: ["Grid mesh structure for 99%+ dust extraction", "Anti-clog, long-life aluminum oxide or ceramic grain", "Compatible with Festool, Mirka, and standard DA sanders", "Grits P80 to P800 for wood, paint, filler, drywall"],
    },
    {
      name: "Wet/Dry Sanding Discs",
      desc: "Waterproof latex-paper or film-backed sanding discs designed for wet sanding applications in automotive paint correction, solid surface finishing, marine gel coat, and precision metal finishing. Wet/dry discs use silicon carbide or premium aluminum oxide grain bonded with a waterproof resin that withstands water, lubricants, and compounds without grain shedding. Available as hook-and-loop or PSA backed in fine grit ranges.",
      features: ["Waterproof latex paper or polyester film backing", "Silicon carbide or aluminum oxide grain options", "Grits P600 to P3000 for fine finishing", "Works with water, compounds, and lubricants"],
    },
  ];

  const faqs = [
    {
      q: "What is the MOQ for wholesale sanding disc orders?",
      a: "MOQ is quoted per diameter, grit, grain, backing, attachment, hole pattern and packaging format. Custom patterns, ceramic materials and printed packs can require different setup quantities. Ask for mixed-SKU and trial-order assumptions to be stated on the quotation.",
    },
    {
      q: "What materials are your sanding discs made from?",
      a: "We produce sanding discs in three primary abrasive grain types: aluminum oxide for general-purpose wood, metal, and paint sanding; zirconia alumina for aggressive stock removal and metal grinding with superior self-sharpening characteristics; and silicon carbide for hard materials like stone, glass, auto paint, and hard metals where a fine, consistent scratch pattern is required. Backing materials include C/D/E-weight kraft paper, vulcanized fiber, polyester film, and Y/W-weight cotton cloth for heavy-duty applications.",
    },
    {
      q: "Can you produce sanding discs with custom hole patterns?",
      a: "Yes. We manufacture sanding discs with standard 5-hole, 6-hole, 8-hole, 15-hole, and multi-hole patterns as well as custom hole configurations to match specific sander brands including Festool, Mirka, Makita, DeWalt, Bosch, and Milwaukee. Custom die-cutting tools can be produced for proprietary hole patterns subject to a tooling charge that is refunded after cumulative order volume reaches an agreed threshold. Contact our engineering team with your sander model and hole pattern drawing.",
    },
    {
      q: "Do you offer private label and retail packaging for sanding discs?",
      a: "Private-label scope can include sleeves, clamshells, color boxes, dispenser packs and cartons with buyer-approved artwork. The buyer supplies current warnings, translations, barcode data and channel rules; the approved packaging specification controls the final pack-out.",
    },
    {
      q: "How long does sanding disc production take?",
      a: "Standard production lead time for sanding disc wholesale orders is 20 to 30 days after deposit and pre-production sample approval for standard aluminum oxide discs in common sizes and grits. Zirconia, ceramic, and specialty backings may extend lead time to 30 to 40 days depending on grain availability. Private label packaging with custom printing adds approximately 7 to 10 days. We maintain safety stock of common SKUs for repeat customers to enable faster reorder cycles.",
    },
    {
      q: "What is the shelf life and how should sanding discs be stored?",
      a: "When stored in a cool, dry environment away from direct sunlight and moisture at temperatures between 15-25°C and 40-60% relative humidity, resin-bonded sanding discs maintain full performance for 24 to 36 months from production. PSA discs should be stored with the liner intact and used within 18 months for optimal adhesive performance. We recommend avoiding storage near heat sources, solvent vapors, or high-humidity environments that can degrade paper backing and adhesive bonds.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Sanding Discs", href: "/sanding-discs" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">B2B Wholesale &amp; OEM</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              Sanding Disc Wholesale &amp; Sandpaper Discs Bulk Supplier
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              OEM sanding disc sourcing for aluminum oxide, zirconia, silicon carbide, ceramic and mesh products. Confirm backing, attachment, grit, hole pattern, sample acceptance and quoted MOQ per SKU.
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
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Quoted Minimums</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">Written Plan</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Lead-Time Milestones</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">P24-P3000</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Grit Range</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">Private Label</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">OEM Packaging</div>
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
                  Wholesale Sanding Discs From a Dedicated Sandpaper Discs Supplier
                </h2>
                <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                  <p>
                    SCOTTCHEN supports sanding-disc sourcing from Shanghai across aluminum oxide, zirconia alumina, silicon carbide and ceramic configurations. Each quotation should identify the production source, backing, attachment, grain, grit, hole pattern, packaging, inspection scope and commercial terms for the exact SKU.
                  </p>
                  <p>
                    Buyers should verify which party performs jumbo-roll converting, die cutting, laminating, adhesive work and packaging for each quoted disc. Approval criteria can cover grit distribution, backing weight, attachment bond, dimensions and hole alignment, with representative samples retained for incoming inspection.
                  </p>
                  <p>
                    Whether the requirement is hook-and-loop discs, zirconia fiber discs, mesh discs or assorted grit packs, the RFQ should identify grain, backing, attachment, hole pattern, target substrate and packaging configuration. Trial and replenishment quantities are confirmed against the selected SKU scope.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  Sanding Disc Types &amp; Product Range
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
                        <th className="px-4 py-3 font-semibold uppercase">Diameter</th>
                        <th className="px-4 py-3 font-semibold uppercase">Grit Range</th>
                        <th className="px-4 py-3 font-semibold uppercase">Backing Type</th>
                        <th className="px-4 py-3 font-semibold uppercase">Material</th>
                        <th className="px-4 py-3 font-semibold uppercase">Attachment</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr>
                        <td className="px-4 py-3">4.5\" (115mm)</td>
                        <td className="px-4 py-3">P36 - P120</td>
                        <td className="px-4 py-3">Vulcanized Fiber</td>
                        <td className="px-4 py-3">Zirconia / Ceramic</td>
                        <td className="px-4 py-3">7/8\" Arbor</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3">5\" (125mm)</td>
                        <td className="px-4 py-3">P40 - P3000</td>
                        <td className="px-4 py-3">C/D/E-weight Paper / Film</td>
                        <td className="px-4 py-3">A/O, Zirconia, SiC, Ceramic</td>
                        <td className="px-4 py-3">Hook &amp; Loop / PSA</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">6\" (150mm)</td>
                        <td className="px-4 py-3">P40 - P3000</td>
                        <td className="px-4 py-3">C/D/E-weight Paper / Film / Mesh</td>
                        <td className="px-4 py-3">A/O, Ceramic, Mesh</td>
                        <td className="px-4 py-3">Hook &amp; Loop (multi-hole)</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3">7\" (180mm)</td>
                        <td className="px-4 py-3">P24 - P220</td>
                        <td className="px-4 py-3">Vulcanized Fiber / Cloth</td>
                        <td className="px-4 py-3">Zirconia / Ceramic</td>
                        <td className="px-4 py-3">7/8\" Arbor</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">9\" (225mm)</td>
                        <td className="px-4 py-3">P40 - P240</td>
                        <td className="px-4 py-3">D/E-weight Paper / Cloth</td>
                        <td className="px-4 py-3">Aluminum Oxide / SiC</td>
                        <td className="px-4 py-3">Hook &amp; Loop / PSA</td>
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
                    "Metal grinding and stock removal",
                    "Woodworking and furniture sanding",
                    "Auto body repair and paint prep",
                    "Paint, rust, and coating removal",
                    "Weld blending and deburring",
                    "Stainless steel finishing",
                    "Drywall sanding and joint compound",
                    "Solid surface and composite finishing",
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
                  Why Choose Our Sanding Discs
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Premium Resin Bond System", desc: "Resin-over-resin bonding anchors abrasive grains at high heat, preventing premature grain shedding and extending disc life under heavy pressure." },
                    { title: "Anti-Clog Coating", desc: "Stearate and special anti-loading coatings prevent paint, wood resin, and metal particles from loading the disc surface, improving cut rate and finish consistency." },
                    { title: "Consistent Grit Distribution", desc: "Electrostatic grain orientation ensures uniform grit coverage and consistent scratch patterns from disc to disc and batch to batch." },
                    { title: "Custom Hole Patterns", desc: "Standard 8/15/multi-hole patterns plus custom die-cut hole configurations to match any orbital sander brand or proprietary backup pad." },
                    { title: "Private Label & Retail Packaging", desc: "Shrink packs, clamshells, dispenser boxes and color sleeves can use buyer-approved barcode data, artwork and multilingual copy." },
                    { title: "Full Grit Range", desc: "P24 extra-coarse for heavy stock removal through P3000 ultra-fine for wet sanding and finish polishing—all available from a single supplier." },
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
                    SCOTTCHEN offers complete OEM and private label manufacturing for sanding discs and sandpaper disc products. We work with distributors, hardware chains, tool brands, and e-commerce sellers to develop custom sanding disc lines under your brand. Choose abrasive grain type (aluminum oxide, zirconia alumina, silicon carbide, ceramic), backing weight and material (paper, film, fiber, cloth, mesh), hole pattern, attachment system (hook-and-loop, PSA, arbor mount, roll-lock), and packaging format.
                  </p>
                  <p>
                    Retail packaging options can include shrink-wrapped grit packs, clamshells, dispenser boxes, assortment packs and bulk contractor packs. Logo files, product specifications, grit designations, warnings and barcode data must be confirmed in buyer-approved artwork and checked against current channel rules.
                  </p>
                  <p>
                    We also produce assorted sanding disc kits that combine multiple grits in a single package for DIY, woodworking, and automotive retail channels. Custom assortments can include foam interface pads, backup pads, and sanding accessories as add-on items. Contact our sales team with your target market, sander compatibility requirements, and volume projections for a customized OEM quotation.
                  </p>
                </div>
                <div className="pt-2">
                  <Link href="/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover">
                    Discuss Your Sanding Disc OEM Project
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
                  src="/images/sanding_screens.webp"
                  alt="SCOTTCHEN Sanding Discs Wholesale"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  B2B Sourcing Parameters
                </h3>
                <div className="space-y-4 text-xs font-mono">
                  <div><span className="text-industry-slate-500 block">MOQ:</span><span className="text-white font-bold">Quoted per grit, size, backing and pack</span></div>
                  <div><span className="text-industry-slate-500 block">Lead Time:</span><span className="text-white font-bold">Quoted by SKU, packaging and sample approval</span></div>
                  <div><span className="text-industry-slate-500 block">Grit Standards:</span><span className="text-white font-bold">FEPA (P-grit) or CAMI/ANSI as specified</span></div>
                  <div><span className="text-industry-slate-500 block">Pack Formats:</span><span className="text-white font-bold">25/50/100 packs, dispenser boxes, bulk cartons</span></div>
                  <div><span className="text-industry-slate-500 block">Documentation:</span><span className="text-white font-bold">Confirmed for quoted SKU and market</span></div>
                </div>
                <div className="pt-4 border-t border-industry-slate-850">
                  <Link href="/sample-kit" className="w-full inline-flex justify-center items-center rounded border border-industry-orange text-industry-orange font-bold uppercase tracking-wider py-3 hover:bg-industry-orange hover:text-white transition-all text-xs">
                    Request Sample Kit
                  </Link>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Related Categories
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/flap-discs" className="text-industry-orange hover:underline">Flap Discs</Link></li>
                  <li><Link href="/sanding-belts" className="text-industry-orange hover:underline">Sanding Belts</Link></li>
                  <li><Link href="/cutting-wheels" className="text-industry-orange hover:underline">Cutting Wheels</Link></li>
                  <li><Link href="/abrasive-kits" className="text-industry-orange hover:underline">Sanding Disc Assortment Kits</Link></li>
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
                "@id": absoluteUrl("/sanding-discs#productgroup"),
                "name": "SCOTTCHEN Sanding Discs",
                "description": "Wholesale aluminum oxide, zirconia, silicon carbide, ceramic, and mesh sanding discs in hook-and-loop, PSA, fiber, and quick-change types.",
                "url": absoluteUrl("/sanding-discs"),
                "image": absoluteUrl("/images/sanding_screens.webp"),
                "brand": { "@type": "Brand", "name": "SCOTTCHEN" },
                "manufacturer": { "@id": absoluteUrl("/#organization") },
                "category": "Sanding discs and sandpaper discs",
                "material": "Aluminum oxide, zirconia, silicon carbide, ceramic, mesh screen",
                "additionalProperty": [
                  { "@type": "PropertyValue", "name": "MOQ basis", "value": "Quoted by SKU, grit, packaging and order quantity" },
                  { "@type": "PropertyValue", "name": "Attachment types", "value": "Hook-and-loop, PSA, fiber, quick-change" }
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
