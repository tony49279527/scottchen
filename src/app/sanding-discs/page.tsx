import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { buildFaqPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Sanding Disc Wholesale & OEM Sourcing | SCOTTCHEN",
  description: "OEM aluminum oxide, zirconia and silicon carbide sanding disc sourcing. Compare backing, attachment, grit, sample plans, packaging and quoted MOQ.",
  path: "/sanding-discs",
  alternatePath: "/zh/sanding-discs",
});

export default function SandingDiscsPage() {
  const subtypes = [
    {
      name: "Hook & Loop Sanding Discs",
      desc: "Hook-and-loop backed sanding discs are designed for quick changes on random orbital sanders and dual-action polishers. RFQs can cover aluminum oxide, zirconia alumina, ceramic or other quoted grain options with paper, film or cloth backing. The exact production source, grain, backing, attachment bond and application suitability must be confirmed for the quoted SKU and approved sample.",
      features: ["Reference diameters to quote: 4.5\", 5\", 6\", 7\", 9\"", "Grit range confirmed for the quoted SKU", "Paper, polyester film or cloth backing as specified", "Hole pattern matched to the approved pad drawing"],
    },
    {
      name: "PSA (Sticky / Self-Adhesive) Sanding Discs",
      desc: "Pressure-sensitive adhesive sanding discs attach directly to a matching backup pad without a hook-and-loop interface. The adhesive, liner, backing, grain, use temperature, removal method and residue acceptance criteria should be confirmed for the quoted SKU and tested on the buyer's pad and substrate.",
      features: ["Pressure-sensitive adhesive specified per SKU", "Pad diameter and surface confirmed before quotation", "Heat and residue criteria defined in the sample plan", "Grain and grit range documented in writing"],
    },
    {
      name: "Fiber Resin Discs",
      desc: "Rigid vulcanized fiber backing can be combined with aluminum oxide, zirconia alumina or ceramic grain for grinding applications. Buyers should confirm the disc diameter, arbor, backing, grain, labeled operating limit, compatible tool and guard, plus cut-rate and grain-retention acceptance criteria for the exact SKU.",
      features: ["Diameter and arbor confirmed per SKU", "Backing thickness documented in the specification", "Grain source identified in the material record", "Grit and operating limit confirmed on the label"],
    },
    {
      name: "Quick-Change / Roll-Lock Discs",
      desc: "Compact discs can use threaded or twist-lock backing to connect to a matching holder on die grinders and pneumatic tools. Interface type, dimensions, holder fit, grain, backing, labeled operating limit and application suitability must be confirmed for the quoted SKU and approved sample.",
      features: ["Reference diameters to quote: 2\", 3\", 4\"", "Type R, Type S or Type TS interface as specified", "Grain or non-woven construction documented per SKU", "Holder fit verified with the buyer's tool setup"],
    },
    {
      name: "Mesh Anti-Clog Net Sanding Discs",
      desc: "Open-mesh sanding discs use a porous structure intended to move dust through more of the disc surface than a fixed-hole paper disc. Dust extraction, loading, cut rate, service life and backup-pad compatibility depend on the complete tool and extraction setup and should be validated with representative samples.",
      features: ["Open-mesh structure for dust-extraction trials", "Grain and anti-loading treatment quoted per SKU", "Pad and extraction compatibility verified on an approved sample", "Grit and application range confirmed in the written specification"],
    },
    {
      name: "Wet/Dry Sanding Discs",
      desc: "Wet/dry sanding discs can use latex-paper or film backing with silicon carbide, aluminum oxide or another quoted grain. The buyer should define the liquid, soak time, substrate, attachment and acceptance criteria for curl, shedding and scratch consistency before approving the SKU.",
      features: ["Latex-paper or polyester-film options", "Grain selection confirmed per application", "Fine-grit range quoted per SKU", "Wet-use conditions validated on an approved sample"],
    },
  ];

  const faqs = [
    {
      q: "What is the MOQ for wholesale sanding disc orders?",
      a: "MOQ is quoted per diameter, grit, grain, backing, attachment, hole pattern and packaging format. Custom patterns, ceramic materials and printed packs can require different setup quantities. Ask for mixed-SKU and trial-order assumptions to be stated on the quotation.",
    },
    {
      q: "Which sanding-disc materials should an RFQ specify?",
      a: "Common grain families include aluminum oxide for general-purpose work, zirconia alumina for higher-pressure metal applications, silicon carbide for hard or coated surfaces, and ceramic options for demanding stock removal. The RFQ should identify the exact grain source, backing, bond, coating and attachment for each SKU; suitability and performance are approved against a representative sample rather than assumed from the grain name.",
    },
    {
      q: "How should custom sanding-disc hole patterns be quoted?",
      a: "Provide the sander model, backup-pad drawing, disc diameter and required extraction layout. Standard or custom hole patterns, die-cut tooling responsibility, tooling charges, ownership, revision limits and fit acceptance must be confirmed in the quotation, approved drawing and representative sample before production.",
    },
    {
      q: "Do you offer private label and retail packaging for sanding discs?",
      a: "Private-label scope can include sleeves, clamshells, color boxes, dispenser packs and cartons with buyer-approved artwork. The buyer supplies current warnings, translations, barcode data and channel rules; the approved packaging specification controls the final pack-out.",
    },
    {
      q: "How long does sanding disc production take?",
      a: "Lead time is quoted after the SKU, material source, quantity, tooling, sample status and packaging artwork are confirmed. The written quotation should separate material preparation, sample approval, production, inspection and shipment milestones; no website range overrides the project schedule.",
    },
    {
      q: "What is the shelf life and how should sanding discs be stored?",
      a: "Storage limits depend on the backing, resin system, adhesive, packaging and applicable product guidance. Keep the quoted SKU dry, protected from direct sunlight, heat and solvent vapors, and retain any PSA liner. Required temperature, humidity, shelf-life basis and incoming test should be stated in the approved specification and supporting document.",
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
              Sanding Disc Wholesale &amp; OEM Sourcing Support
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
                <div className="text-2xl font-black text-industry-orange">RFQ Defined</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Grit &amp; Backing</div>
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
                  Shanghai B2B Sourcing &amp; OEM Project Support for Sanding Discs
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
                        <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">RFQ Reference Specifications — Confirm Per SKU:</span>
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
                  Common RFQ Reference Configurations
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
                  Sanding Disc RFQ Verification Points
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Bond System & Shedding Test", desc: "Identify the resin or adhesive system and approve shedding, heat exposure and attachment-bond criteria on a representative SKU sample." },
                    { title: "Loading & Cut-Rate Test", desc: "Confirm any anti-loading treatment, target substrate, tool speed and comparison method before accepting cut-rate or service-life claims." },
                    { title: "Grit & Scratch Consistency", desc: "Define grit distribution, scratch-pattern and batch-consistency checks in the written quality plan." },
                    { title: "Hole Pattern & Tooling", desc: "Confirm the hole drawing, die-cut tooling responsibility, pad fit and dust-extraction result through the approved sample." },
                    { title: "Private Label & Retail Packaging", desc: "Shrink packs, clamshells, dispenser boxes and color sleeves can use buyer-approved barcode data, artwork and multilingual copy." },
                    { title: "SKU-Level Quotation", desc: "Grain, backing, attachment, grit, packaging, MOQ, lead time and inspection terms are confirmed for each quoted combination." },
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
                <h2 className="text-xl font-extrabold text-white">OEM / Private Label Project Scope</h2>
                <div className="text-sm text-industry-slate-300 leading-relaxed space-y-4">
                  <p>
                    SCOTTCHEN coordinates Shanghai-based B2B sourcing and OEM project support for sanding-disc programs. An RFQ can define grain, backing, hole pattern, attachment and packaging options, while the responsible production source, material documents, converting scope and inspection plan are identified for each quoted SKU.
                  </p>
                  <p>
                    Retail packaging options can include shrink-wrapped grit packs, clamshells, dispenser boxes, assortment packs and bulk contractor packs. Logo files, product specifications, grit designations, warnings and barcode data must be confirmed in buyer-approved artwork and checked against current channel rules.
                  </p>
                  <p>
                    Assorted-grit kits, interface pads, backup pads and related accessories can be included in the RFQ. Final availability, compatibility, component source, MOQ and commercial terms depend on the approved sample and written quotation. Share the target market, tool interface and projected quantity for a scoped response.
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
                  <div><span className="text-industry-slate-500 block">Pack Formats:</span><span className="text-white font-bold">Confirmed in the approved packaging specification</span></div>
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
                "brand": { "@id": absoluteUrl("/#brand") },
                "category": "Sanding discs and sandpaper discs",
                "material": "Grain and backing documented for each quoted SKU",
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
