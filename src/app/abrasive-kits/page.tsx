import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import DecisionGuides from "@/components/DecisionGuides";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { buildFaqPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Private-Label Abrasive & Polishing Kit Sourcing | SCOTTCHEN",
  description: "OEM private-label abrasive kits: buffing wheel kits, sanding disc kits and compound sets. Compare BOM, packaging, samples and quoted minimums.",
  path: "/abrasive-kits",
  alternatePath: "/zh/abrasive-kits",
});

export default function AbrasiveKitsPage() {
  const kits = [
    {
      name: "Buffing & Polishing Wheel Kits",
      desc: "A candidate sourcing scenario for a staged buffing assortment. The website does not define a stock kit or approved bill of materials.",
      included: ["Buyer RFQ: workpiece, tool and finish target", "Component source, exact SKU and operating-limit evidence", "Approved BOM, quantities and compatibility", "Packaging, instructions, warnings and barcode-data owner", "Sample, MOQ, timing, payment and Incoterms in a dated quote"],
    },
    {
      name: "Sanding Disc Assortment Kits",
      desc: "A candidate multi-grit assortment for a defined tool and process. Disc size, hole pattern, backing and grit progression remain RFQ fields until approved.",
      included: ["Buyer RFQ: tool, hole pattern, substrate and sanding stages", "Component source, SKU, backing and grit-system evidence", "Approved BOM, counts and interface-pad compatibility", "Pack structure, artwork, warnings and label responsibility", "Sample, MOQ, timing, payment and Incoterms in a dated quote"],
    },
    {
      name: "Automotive Wheel Polishing Kits",
      desc: "A project concept for wheel or trim finishing. Substrate, coating, tool, geometry, compound chemistry and desired result must be tested on the buyer's workpiece.",
      included: ["Buyer RFQ: substrate, coating, tool and finish target", "Component source, SKU, shank and operating-limit evidence", "Approved BOM, compound pairing and compatibility", "Instructions, warnings, artwork and barcode-data owner", "Sample outcome and commercial terms documented before approval"],
    },
    {
      name: "Jewelry Polishing Kits",
      desc: "A small-tool finishing concept that requires material, tool and contamination controls. No metal suitability or finish result is promised without source data and representative testing.",
      included: ["Buyer RFQ: metal, coating, tool, access and finish target", "Component source, exact SKU, composition and safety information", "Approved BOM, mandrel fit and cross-contamination controls", "Storage, instructions, warnings and packaging approval", "Sample, MOQ, timing, payment and Incoterms in a dated quote"],
    },
    {
      name: "Drill Polishing Accessory Kits",
      desc: "A mixed-accessory inquiry for a specified drill or rotary tool. It is not described as universal; every shank, adapter, wheel and operating limit requires confirmation.",
      included: ["Buyer RFQ: tool model, chuck, speed range and workpiece", "Component source, exact SKU and labeled operating limits", "Approved BOM, fit, balance and use sequence", "Pack-out, instructions, warnings and channel requirements", "Sample, MOQ, timing, payment and Incoterms in a dated quote"],
    },
    {
      name: "Knife Sharpening Belt Kits",
      desc: "A belt-assortment scenario for a named machine, process and material. Belt dimensions, joint, backing, grain and grit progression are approved only for the quoted source and SKU.",
      included: ["Buyer RFQ: machine, belt path, speed, material and process stages", "Component source, SKU, joint, backing and grit-system evidence", "Approved BOM, fit test and progression rationale", "Sleeve or box scope, warnings and traceability fields", "Sample, MOQ, timing, payment and Incoterms in a dated quote"],
    },
    {
      name: "Multi-Purpose DIY Abrasive Kits",
      desc: "A multi-source kitting concept with a higher verification burden. Each component retains its own manufacturer, applicable documents, tool compatibility and safety boundary.",
      included: ["Buyer RFQ: user, tools, applications, market and channel", "Per-component source, SKU, evidence and operating limits", "Approved BOM, segregation, compatibility and inspection plan", "Case or carton concept, inserts, warnings and barcode responsibility", "Assembly location and all commercial terms documented per project"],
    },
  ];

  const faqs = [
    {
      q: "What is the MOQ for private label abrasive kits?",
      a: "MOQ is quoted by kit BOM, component sources, packaging format, artwork, tooling and order quantity. Ask for evaluation, replenishment and mixed-SKU scenarios in the same quotation so the commercial assumptions remain comparable.",
    },
    {
      q: "Can I customize the contents of my abrasive kit?",
      a: "A custom kit can be evaluated from the buyer's bill of materials, target market and acceptance requirements. Candidate components may include buffing wheels, sanding discs, flap discs, belts, cutting wheels, compounds and accessories, but each component's production source, specification, quantity, packaging and inspection scope must be identified in the written quotation and approved sample.",
    },
    {
      q: "What retail packaging formats do you offer for kits?",
      a: "Color boxes, blister cards, clamshells, shrink wrap, carry cases, foam inserts, wooden boxes or tins can be evaluated. Feasibility, tooling, artwork, warnings and buyer-supplied UPC or FNSKU data are confirmed in the approved pack specification and quotation; marketplace acceptance is not guaranteed by this page.",
    },
    {
      q: "Can kit packaging include buyer-supplied marketplace labels?",
      a: "Buyer-supplied FNSKU or UPC data, carton marks, warning text and packaging instructions can be scoped in the quotation. It must identify the responsible party, artwork, sample stage, scan method and retained record; the buyer remains responsible for current marketplace requirements.",
    },
    {
      q: "How long does kit production and assembly take?",
      a: "Lead time depends on component availability, artwork approval, packaging tooling, sample approval, assembly and inspection scope. Require dated milestones for materials, samples, production, inspection and shipment in the written quotation.",
    },
    {
      q: "Can I include my own branded materials or inserts in the kits?",
      a: "Buyer-supplied inserts can be included when the approved BOM and pack specification identify the material, quantity, delivery location, printing responsibility and placement. Assembly site, foam or tray work, sample approval, loss allowance and cost are confirmed in the quotation.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Abrasive Kits", href: "/abrasive-kits" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">B2B Wholesale &amp; Private Label</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              Abrasive Kit Wholesale &amp; Polishing Kits Private Label
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              OEM private label abrasive kits, buffing wheel kits, sanding disc assortments, polishing compound sets, and drill accessory kits. Configure the assortment, packaging, buyer-supplied barcode data, sample approval and written quality plan before production.
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
                <div className="text-2xl font-black text-industry-orange">Per Kit</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Quoted Minimums</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">Per Project</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Packaging Approved</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">Buyer Data</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Barcode Scope Quoted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">Per BOM</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Feasibility Quoted</div>
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
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Kitting &amp; Private Label</span>
                <h2 className="text-2xl font-extrabold text-white tracking-wide">
                  Wholesale Abrasive Kits With Custom Kitting, Assortment, and Retail Packaging
                </h2>
                <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                  <p>
                    SCOTTCHEN provides Shanghai-based B2B sourcing and OEM project support for abrasive kits and private-label assembly. The sourcing brief can combine buffing wheels, sanding discs, flap discs, sanding belts, cutting wheels, compounds and accessories. Each quotation must identify every component source, specification, packaging scope and acceptance plan.
                  </p>
                  <p>
                    The page shows kit-planning scenarios, not stocked products or an approved BOM. The buyer can submit an automotive, knife-making, drill-polishing or sanding concept; identified sources then quote component feasibility, grit progression, quantities, packaging and approval samples for the target channel.
                  </p>
                  <p>
                    Kit assembly, inspection and packaging should follow the buyer-approved bill of materials and pack specification. Before production, confirm component identity, quantities, visual checks, label data and carton marks in writing. Marketplace-related items such as buyer-supplied FNSKU labels or warning text can be scoped in the quotation, but current platform acceptance remains the buyer's responsibility.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  RFQ Kit Concepts — Availability Not Implied
                </h2>
                <div className="space-y-6">
                  {kits.map((kit) => (
                    <div key={kit.name} className="glass-panel p-6 rounded-lg space-y-4 border border-industry-slate-800">
                      <h3 className="text-lg font-bold text-industry-orange">{kit.name}</h3>
                      <p className="text-sm text-industry-slate-300 leading-relaxed">{kit.desc}</p>
                      <div className="border-t border-industry-slate-800/80 pt-4">
                        <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">What's Included:</span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-industry-slate-400 font-mono">
                          {kit.included.map((item) => (
                            <li key={item} className="flex items-center space-x-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-industry-orange shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  Why Choose Our Abrasive Kits
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Retail-Packaging Scope", desc: "Blister cards, color boxes, clamshells, cases or other formats can be quoted. Dieline source, materials, warnings, artwork, pack-out and channel acceptance require project approval." },
                    { title: "Assortment Feasibility", desc: "A proposed BOM can mix categories only after each source, specification, compatibility, safety requirement, assembly site and pack constraint is quoted and approved." },
                    { title: "Private-Label Artwork Control", desc: "Brand files, product images, approved multilingual copy and safety warnings are itemized in the artwork brief; printing is authorized only after rights, revision and sign-off are recorded." },
                    { title: "Marketplace Label Preparation", desc: "Buyer-supplied FNSKU or UPC data, warning text and carton marks can be included in the approved pack specification." },
                    { title: "Documented Component Scope", desc: "The quotation identifies the selected components, specifications, packaging work and agreed inspection points." },
                    { title: "Launch Asset Scope", desc: "Product images, instructions and listing-support materials can be discussed and itemized in the quotation." },
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
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">OEM &amp; Private Label Process</span>
                <h2 className="text-xl font-extrabold text-white">Custom Kitting &amp; Private Label Workflow</h2>
                <div className="text-sm text-industry-slate-300 leading-relaxed space-y-4">
                  <p>
                    Start with the target market, channel, price target, proposed contents, packaging and branding brief. The written response must state whether a BOM, packaging mockup or design resource is available, who is responsible, and the tooling, unit price, MOQ and lead-time assumptions; this page does not promise those deliverables.
                  </p>
                  <p>
                    Sample quantity, fee, payment milestone, component source, artwork and packaging scope are confirmed in the quotation. The buyer should evaluate the physical kit, product performance and packaging print, then approve the sample and any changes in writing before an order proceeds.
                  </p>
                  <p>
                    During order execution, component sources, assembly location, packaging work and inspection sampling follow the approved BOM, pack specification and quality plan. Buyer-supplied FNSKU or other channel data can be scoped and sample-scanned when written into those documents, but the buyer remains responsible for current marketplace rules and final acceptance. Consolidation and shipping responsibilities are confirmed in the quotation and Incoterms clause.
                  </p>
                </div>
                <div className="pt-2">
                  <Link href="/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover">
                    Start Your Private Label Kit Project
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
                  src="/images/hero_abrasives_kit.webp"
                  alt="SCOTTCHEN Abrasive Kits and Polishing Kits Wholesale"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Kitting Parameters
                </h3>
                <div className="space-y-4 text-xs font-mono">
                  <div><span className="text-industry-slate-500 block">MOQ:</span><span className="text-white font-bold">Quoted per BOM and packaging</span></div>
                  <div><span className="text-industry-slate-500 block">Lead Time:</span><span className="text-white font-bold">Written milestones after sample approval</span></div>
                  <div><span className="text-industry-slate-500 block">Packaging:</span><span className="text-white font-bold">Color boxes, blister, clamshell, cases, tins</span></div>
                  <div><span className="text-industry-slate-500 block">Marketplace Labels:</span><span className="text-white font-bold">Buyer-supplied data scoped per quotation</span></div>
                  <div><span className="text-industry-slate-500 block">Artwork:</span><span className="text-white font-bold">Owner, source, format and fees quoted per project</span></div>
                </div>
                <div className="pt-4 border-t border-industry-slate-850">
                  <Link href="/sample-kit" className="w-full inline-flex justify-center items-center rounded border border-industry-orange text-industry-orange font-bold uppercase tracking-wider py-3 hover:bg-industry-orange hover:text-white transition-all text-xs">
                    Request Sample Kit
                  </Link>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Individual Product Categories
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/buffing-wheels" className="text-industry-orange hover:underline">Buffing Wheels</Link></li>
                  <li><Link href="/sanding-discs" className="text-industry-orange hover:underline">Sanding Discs</Link></li>
                  <li><Link href="/flap-discs" className="text-industry-orange hover:underline">Flap Discs</Link></li>
                  <li><Link href="/sanding-belts" className="text-industry-orange hover:underline">Sanding Belts</Link></li>
                  <li><Link href="/cutting-wheels" className="text-industry-orange hover:underline">Cutting Wheels</Link></li>
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
                "@type": "CollectionPage",
                "@id": absoluteUrl("/abrasive-kits#catalog"),
                "name": "Abrasive Kit RFQ Concepts",
                "description": "Planning scenarios for private-label abrasive kits. Component source, BOM, compatibility, packaging, barcode scope, MOQ and timing require a dated quotation and approved samples.",
                "url": absoluteUrl("/abrasive-kits"),
                "image": absoluteUrl("/images/hero_abrasives_kit.webp"),
                "inLanguage": "en",
                "isPartOf": { "@id": absoluteUrl("/#website") },
                "about": { "@id": absoluteUrl("/#organization") }
              },
              buildFaqPageSchema(faqs),
            ],
          }),
        }}
      />

      <DecisionGuides />
      <CTASection />
    </div>
  );
}
