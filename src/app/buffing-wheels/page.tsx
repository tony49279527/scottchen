import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { buildFaqPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Buffing Wheel OEM Sourcing & Wholesale | SCOTTCHEN",
  description: "Compare cotton buffing and polishing wheel specifications, samples, packaging and quotation controls. Production source and evidence are confirmed by SKU.",
  path: "/buffing-wheels",
  alternatePath: "/zh/buffing-wheels",
});

export default function BuffingWheelsPage() {
  const subtypes = [
    {
      name: "Spiral Stitched Cotton Buffs",
      desc: "Spiral or concentric stitching is commonly used to hold cotton layers together for cutting and intermediate polishing steps. Buyers can compare cloth grade, ply count, stitch pattern, density, bore, rated speed and the target substrate through a proposed-source sample test.",
      features: ["Common RFQ field: ply count and finished thickness", "Common RFQ field: stitch pattern and spacing", "Common RFQ field: diameter, bore and machine interface", "Cloth grade and thread specification: confirm by SKU"],
    },
    {
      name: "Loose Section Cotton Buffs",
      desc: "Loose-section wheels use limited center stitching so the cloth face can flex during a coloring or final-polish step. Surface result, heat behavior and compound pairing depend on the quoted construction, machine settings and workpiece, so approval should be based on a controlled sample test.",
      features: ["Common materials: muslin, flannel or other specified cloth", "RFQ field: center stitching and finished density", "Compound pairing: validate on the target substrate", "Bore, rated speed and acceptance criteria: confirm by SKU"],
    },
    {
      name: "Airway / Ventilated Buffs",
      desc: "Airway and ventilated constructions use pleated sections intended to move air through the wheel. They may be evaluated for continuous polishing lines where heat management matters, but cooling, life and output must be verified for the proposed source, wheel size, hub and operating conditions.",
      features: ["RFQ field: pleat count and section construction", "RFQ field: diameter, hub, bore and machine interface", "Rated speed: source document and SKU approval required", "Heat and service-life comparison: validate by sample test"],
    },
    {
      name: "Sisal-Cotton Treated Buffs",
      desc: "Sisal, sisal-cotton and treated constructions are commonly considered for an initial cutting step before finer cotton-wheel stages. Fiber composition, treatment chemistry, density, compound compatibility and achievable finish vary by source and must be documented and sample-tested for the application.",
      features: ["Fiber composition and treatment: confirm by SKU", "Construction and density: state in the approved sample", "Compound pairing: test on the buyer's workpiece", "Performance and wear criteria: agree before order release"],
    },
    {
      name: "Bench Grinder Polishing Wheel Kits",
      desc: "A proposed kit can combine wheels, compounds and adapters for a defined bench-grinder interface. Machine compatibility, rated speed, sequence and safety information must be checked against the buyer's equipment, while packaging and barcode placement follow buyer-supplied channel requirements.",
      features: ["Wheel diameter, bore and adapter: confirm against the machine", "Sequence and compound pairing: approve by sample test", "Packaging format: quoted by SKU and order quantity", "Buyer-supplied UPC/FNSKU data and carton marks: approve in artwork"],
    },
    {
      name: "Drill-Mounted Buffing Sets",
      desc: "Shank-mounted formats are commonly used to reach recesses and contours that a bench-mounted wheel cannot access. A sourcing quote should identify shape, cloth or felt construction, shank geometry, tool compatibility, rated speed and the proposed production source for every component.",
      features: ["Common RFQ field: shank type and dimensions", "Common shapes: cylinder, cone, dome, mushroom and T-shape", "Kit composition and compound pairing: quoted by SKU", "Tool compatibility and rated speed: buyer approval required"],
    },
    {
      name: "Polishing Compound Bars",
      desc: "Compound color alone does not define abrasive chemistry or suitability. An RFQ should state abrasive type, particle range, binder, bar weight, target substrate, safety-document requirements and packaging, followed by a sample comparison with the selected wheel construction.",
      features: ["Formula, grit and binder: confirm by SKU", "Bar dimensions and net weight: state in quotation", "Safety and composition documents: identify by source and market", "Wrapper, label and retail pack-out: approve as artwork"],
    },
  ];

  const faqs = [
    {
      q: "What is the minimum order quantity for wholesale cotton buffing wheels?",
      a: "Order quantity is confirmed per size, ply, construction and packaging format. Standard configurations may support smaller evaluation orders, while custom constructions, printed packaging and mixed kits can require higher setup quantities. Ask for the MOQ assumptions to be stated on the SKU-level quotation.",
    },
    {
      q: "How long is the typical lead time for buffing wheel production?",
      a: "Lead time is quoted after the wheel construction, quantity, sample status, artwork and packaging process are confirmed. The written quotation should separate sample approval, artwork approval, production and shipment milestones rather than relying on a generic website estimate.",
    },
    {
      q: "Can a buffing-wheel sourcing quote include matched compound bars?",
      a: "A quoted sourcing scope can include compound bars alongside buffing wheels. The proposed production source, formula, grit, binder, bar weight, safety documents, packaging and wheel pairing must be confirmed by SKU and approved through sample testing; color names alone are not a performance specification.",
    },
    {
      q: "How should buyers specify an arbor hole for a polishing wheel?",
      a: "Common RFQs reference dimensions such as 1/4\", 3/8\", 1/2\", 5/8\", 3/4\", 1\" or 1-1/4\", but none should be assumed compatible from the website alone. State the machine spindle, bore tolerance, insert or washer construction, wheel diameter and rated speed; the proposed source and approved sample must confirm the final SKU.",
    },
    {
      q: "How should balance and rated speed be verified for a buffing wheel?",
      a: "Balance, bore tolerance, rated RPM and the inspection method should be written into the approved SKU specification. For large-diameter airway and ventilated buffs, buyers should also confirm hub construction, concentricity criteria and the sample test setup before production.",
    },
    {
      q: "Can a sourcing project include private-label buffing wheels and packaging?",
      a: "A proposed scope can include wheel specifications, compound wrappers, color boxes, blister cards, polybags and buyer-supplied UPC or FNSKU data. Feasibility, MOQ, sample fees, production source and terms are confirmed in the SKU quotation. Marketplace or retailer acceptance is not implied: current channel rules, warnings, barcode placement and carton marks must be supplied by the buyer and approved in the packaging specification.",
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
              Buffing Wheel OEM Sourcing &amp; Wholesale
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              Shanghai-based B2B sourcing and OEM project support for cotton buffing wheels, spiral-stitched wheels, airway buffs and polishing compounds. The proposed production source, specification, inspection scope, evidence, MOQ and terms are confirmed for each quoted SKU.
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
                <div className="text-2xl font-black text-industry-orange">Per SKU</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">MOQ Quoted</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">Written Plan</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Lead Time</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">Named Terms</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Incoterm + Place in Quote</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">Documented</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Inspection Scope</div>
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
                  Compare Buffing Wheel Constructions Through a Documented Sourcing Process
                </h2>
                <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                  <p>
                    SCOTTCHEN supports buffing wheel and polishing accessory sourcing projects from Shanghai, China. The quoted scope can cover cotton wheel construction, matched compounds, adapters and retail packaging for distributors, tool brands and industrial polishing buyers. The responsible production source and inspection scope for each component must be identified in the quotation.
                  </p>
                  <p>
                    Industrial buyers require more than a wheel name: density, arbor fit, rated speed, construction and compound pairing must be explicit. The approved sample and quality plan should define balance, ply count, bore tolerance and any application-specific acceptance checks before an order is released.
                  </p>
                  <p>
                    Distributors can request a quotation that separates wheel construction, compound selection, packaging, barcode data, MOQ assumptions and sample validation. Specialized or regulated applications require buyer-defined performance and documentation requirements; suitability is not established by a general website description.
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
                        <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">Common RFQ Fields — Confirm by SKU:</span>
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
                  RFQ Specification Examples
                </h2>
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">Diameter</th>
                        <th className="px-4 py-3 font-semibold uppercase">Ply Count</th>
                        <th className="px-4 py-3 font-semibold uppercase">Arbor Hole</th>
                        <th className="px-4 py-3 font-semibold uppercase">Rated Speed</th>
                        <th className="px-4 py-3 font-semibold uppercase">Material</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr>
                        <td className="px-4 py-3">3\" (75mm)</td>
                        <td className="px-4 py-3">30 / 40 Ply</td>
                        <td className="px-4 py-3">1/4\" Hex Shank</td>
                        <td className="px-4 py-3">Confirm by SKU</td>
                        <td className="px-4 py-3">Cotton / Shank-mounted</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3">4\" (100mm)</td>
                        <td className="px-4 py-3">30 / 40 Ply</td>
                        <td className="px-4 py-3">3/8\", 1/2\"</td>
                        <td className="px-4 py-3">Confirm by SKU</td>
                        <td className="px-4 py-3">Cotton Muslin</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">6\" (150mm)</td>
                        <td className="px-4 py-3">40 / 50 / 60 Ply</td>
                        <td className="px-4 py-3">1/2\", 5/8\"</td>
                        <td className="px-4 py-3">Confirm by SKU</td>
                        <td className="px-4 py-3">Cotton / Sisal-Cotton</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3">8\" (200mm)</td>
                        <td className="px-4 py-3">40 / 50 / 60 Ply</td>
                        <td className="px-4 py-3">5/8\", 3/4\", 1\"</td>
                        <td className="px-4 py-3">Confirm by SKU</td>
                        <td className="px-4 py-3">Cotton / Airway</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">10\" (250mm)</td>
                        <td className="px-4 py-3">50 / 60 / 80 Ply</td>
                        <td className="px-4 py-3">5/8\", 3/4\", 1\"</td>
                        <td className="px-4 py-3">Confirm by SKU</td>
                        <td className="px-4 py-3">Cotton / Sisal / Airway</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3">12\" (300mm)</td>
                        <td className="px-4 py-3">60 / 80 Ply</td>
                        <td className="px-4 py-3">1\", 1-1/4\"</td>
                        <td className="px-4 py-3">Confirm by SKU</td>
                        <td className="px-4 py-3">Airway / Steel-center</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-industry-slate-500 leading-relaxed">
                  Dimensions, ply counts, bores and materials above are common RFQ examples, not a stock or performance commitment. The quoted production source must confirm the final construction, rated speed, marking, test method and supporting evidence for each SKU before buyer approval.
                </p>
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
                  How to Evaluate a Buffing Wheel Quote
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Balance & Bore Criteria", desc: "Put the balance method, bore tolerance, rated speed and acceptance sample into the written SKU specification." },
                    { title: "Documented Quality Plan", desc: "Confirm incoming, in-process and final inspection scope, sampling level and records for the quoted configuration." },
                    { title: "Wheel and Compound Pairing", desc: "A quoted scope can pair proposed wheels and compounds, with the source, formula, sequence and sample result documented by SKU." },
                    { title: "OEM & Private-Label Scope", desc: "Proposed ply configurations, branded packaging, blister cards, color boxes and buyer-supplied barcode data can be evaluated and quoted." },
                    { title: "Channel-Specific Packaging", desc: "Document polybag, warning, barcode and carton requirements against the buyer's current retailer or marketplace rules." },
                    { title: "Application Review", desc: "Any technical support, custom construction or multi-step sequence is defined in the written project scope and validated on buyer-approved samples." },
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
                <h2 className="text-xl font-extrabold text-white">OEM / Private-Label Sourcing Scope</h2>
                <div className="text-sm text-industry-slate-300 leading-relaxed space-y-4">
                  <p>
                    SCOTTCHEN supports OEM and private-label sourcing projects for distributors, importers, tool brands and e-commerce sellers. A proposed scope may compare cloth types, ply counts, stitch patterns, bores and compounds, but the responsible production source, material specification, sample fee, MOQ, evidence and commercial terms are confirmed in the SKU quotation.
                  </p>
                  <p>
                    Private-label packaging options can include industrial cartons, color boxes, hang-tag blister cards, heat-shrink polybags and clamshells. Logo files, specifications, translations, warnings and barcode data remain buyer-controlled inputs; the approved artwork and current channel rules determine the final pack-out.
                  </p>
                  <p>
                    A project can follow this documented sequence: buyer specification and target market, proposed-source quotation, sample and evidence review, artwork approval, order confirmation, production and inspection, then shipment. Any consultation, sampling, kitting or retail-display work is included only when stated in the written quotation and approved project scope.
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
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  quality={70}
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
                    <span className="text-white font-bold">Quoted by SKU, packaging and quantity</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">Lead Time:</span>
                    <span className="text-white font-bold">Quoted by SKU, packaging and sample approval</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">Shipping Terms:</span>
                    <span className="text-white font-bold">Incoterms rule and named place stated in quotation</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">Payment Terms:</span>
                    <span className="text-white font-bold">Method and milestones stated in quotation or contract</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">Materials:</span>
                    <span className="text-white font-bold leading-normal">Proposed material and component source confirmed by SKU</span>
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
                  <li><Link href="/cutting-wheels" className="text-industry-orange hover:underline">Cutting Wheels</Link></li>
                  <li><Link href="/wholesale-abrasives" className="text-industry-orange hover:underline">Wholesale Abrasives Program</Link></li>
                  <li><Link href="/china-abrasive-manufacturer" className="text-industry-orange hover:underline">China Sourcing Profile</Link></li>
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
                "@id": absoluteUrl("/buffing-wheels#productgroup"),
                "name": "SCOTTCHEN Buffing Wheels & Polishing Wheels",
                "description": "Shanghai B2B sourcing and OEM project support for cotton buffing wheels, spiral-stitched wheels, airway buffs, sisal-cotton constructions and polishing compounds, quoted by SKU.",
                "url": absoluteUrl("/buffing-wheels"),
                "image": absoluteUrl("/images/buffing_wheels.webp"),
                "brand": { "@id": absoluteUrl("/#brand") },
                "category": "Cotton buffing wheels and polishing accessories",
                "additionalProperty": [
                  { "@type": "PropertyValue", "name": "MOQ basis", "value": "Quoted by wheel construction, size, packaging and quantity" },
                  { "@type": "PropertyValue", "name": "Lead-time basis", "value": "Quoted after specification, packaging and sample approval" },
                  { "@type": "PropertyValue", "name": "Shipping terms", "value": "Incoterms rule and named place stated in quotation" },
                  { "@type": "PropertyValue", "name": "Payment terms", "value": "Method and milestones stated in quotation or contract" }
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
