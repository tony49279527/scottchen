import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { buildFaqPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "China Abrasive Manufacturer & OEM Supplier | SCOTTCHEN",
  description: "SCOTTCHEN is a Shanghai abrasive manufacturer supplying OEM buffing wheels, sanding discs, flap discs and private-label abrasive kits since 2014.",
  path: "/china-abrasive-manufacturer",
  alternatePath: "/zh/china-abrasive-manufacturer",
});

export default function ChinaAbrasiveManufacturerPage() {
  const capabilities = [
    { name: "Buffing & Polishing Wheels", link: "/buffing-wheels", desc: "Cotton buffs, sisal wheels, airway buffs, compound bars" },
    { name: "Sanding Discs", link: "/sanding-discs", desc: "Hook & loop, PSA, fiber, mesh, quick-change discs" },
    { name: "Flap Discs", link: "/flap-discs", desc: "Type 27/29, zirconia, ceramic, aluminum oxide" },
    { name: "Sanding Belts", link: "/sanding-belts", desc: "Portable, bench, file, wide, knife making belts" },
    { name: "Cutting Wheels", link: "/cutting-wheels", desc: "Metal, INOX stainless, thin cut-off, masonry" },
    { name: "Abrasive Kits", link: "/abrasive-kits", desc: "Polishing kits, sanding assortments, retail-ready sets" },
  ];

  const faqs = [
    {
      q: "Why should I source abrasive tools from a China abrasive manufacturer?",
      a: "China has a broad coated- and bonded-abrasive supply base covering grains, backings, converting, bonding and pack-out. Buyers should compare total landed cost, component source, quality plan, sample evidence, MOQ, lead time and logistics assumptions instead of relying on a generic percentage-saving or factory-direct claim.",
    },
    {
      q: "How long has SCOTTCHEN been manufacturing abrasive tools?",
      a: "SCOTTCHEN was founded in 2014 in Shanghai, China, and has been manufacturing abrasive tools continuously for over a decade. Our founders brought extensive experience in coated abrasive manufacturing and buffing wheel production before establishing SCOTTCHEN to serve the growing export market for high-quality Chinese-made abrasives. Over the years we have expanded our production facilities, added bonded abrasive (cutting wheel and flap disc) manufacturing capabilities, and developed a comprehensive private label and OEM program serving customers across North America, Europe, Australia, the Middle East, and Southeast Asia.",
    },
    {
      q: "What quality control processes do you implement in your factory?",
      a: "Our quality control system operates at three stages. Incoming QC tests and inspects all raw materials—abrasive grain, backing cloth/paper, resin, fiberglass reinforcements, and cotton cloth—upon arrival. In-process QC includes monitoring line production parameters, conducting dimensional checks, weight verification, and adhesion testing at each production station. Final QC performs AQL-based batch inspection (typically AQL 2.5 level) including rotational burst testing for cutting wheels, balance testing for buffing wheels and flap discs, grit grading verification, packaging inspection, and labeling accuracy checks before shipment release.",
    },
    {
      q: "Can you provide third-party factory audit reports or certifications?",
      a: "Request entity documents, the responsible production source, the applicable certificate or test report for each SKU, inspection records and any buyer-arranged audit scope. Certificate numbers, issuing bodies, product coverage and validity must be checked against the exact quotation before they are used for market access or product claims.",
    },
    {
      q: "What are the payment terms for new international customers?",
      a: "For new customers, standard payment terms are 30% T/T deposit at order confirmation with the remaining 70% balance paid before shipment (against copy of bill of lading). For established repeat customers with a consistent order history, we may extend more flexible payment terms on a case-by-case basis. We also accept L/C at sight for larger orders. Sample orders are typically paid in full via T/T, PayPal, or trade assurance platforms. All payment terms are confirmed in writing in the pro-forma invoice before production begins.",
    },
    {
      q: "How do I start sourcing abrasive tools from SCOTTCHEN?",
      a: "Starting a sourcing relationship with SCOTTCHEN is straightforward. First, send us an inquiry via our contact form, email, or RFQ page specifying the products you are interested in, quantities, specifications, packaging requirements, and target market. We will respond within 24-48 hours with a detailed quotation. Upon quotation acceptance, we produce pre-production samples for your approval and arrange sample shipment for testing. After written sample approval, we issue a pro-forma invoice, collect the deposit, and schedule production. Throughout production and shipping, your dedicated sales contact provides regular updates on order status.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "China Abrasive Manufacturer", href: "/china-abrasive-manufacturer" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Factory &amp; Company</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              China Abrasive Manufacturer &amp; OEM Abrasive Tools Supplier
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              SCOTTCHEN is a Shanghai-based abrasive sourcing and OEM support company covering buffing wheels, sanding discs, flap discs, cutting wheels, sanding belts and private-label kits. Production source, documents and export scope are confirmed per quotation.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link href="/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-orange-hover hover:scale-[1.02] text-center">
              Request Factory Quote
            </Link>
            <Link href="/sample-kit" className="inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-slate-750 text-center">
              Order Sample Kit
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-industry-slate-900 border-b border-industry-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-industry-slate-800 bg-industry-slate-950/40">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">Since 2014</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Shanghai Sourcing Base</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">Per Market</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Export Scope Checked</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">Per SKU</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Documents Checked</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">6 Product Lines</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Full Abrasive Range</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Production-Source Verification</span>
              <h2 className="text-2xl font-extrabold text-white tracking-wide">How buyers should verify the quoted production scope</h2>
              <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                <p>
                  SCOTTCHEN coordinates abrasive sourcing and OEM projects from Shanghai. A quotation should identify the contracting entity, responsible production source, component scope, named Incoterms place and the documents available for buyer verification.
                </p>
                <p>
                  Different product families can involve different converting, assembly, bonding, compound and packaging processes. Buyers should request a process map for the quoted SKU and confirm which operations are performed by which source rather than assume that every component is made at one facility.
                </p>
                <p>
                  The RFQ should also name the target market, applicable product rules, quality records, approved packaging inputs and export documents. Any engineering, audit or regulatory support is confirmed for the specific project in writing.
                </p>
              </div>
            </div>
            <div className="glass-panel rounded-lg overflow-hidden border border-industry-slate-800 relative">
              <Image
                width={1024}
                height={768}
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={70}
                loading="lazy"
                src="/images/quality_inspection.webp"
                alt="SCOTTCHEN abrasive sourcing quality-plan review"
                className="w-full h-80 object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
                <p className="text-xs font-semibold text-white">
                  Quality inspection at our Shanghai abrasive manufacturing facility
                </p>
                <p className="text-[11px] text-industry-slate-300 leading-relaxed">
                  Ask which production-line photos, entity documents, certificates or third-party reports are available for the exact quoted source and SKU. Availability is not implied until confirmed in writing.
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <Link href="/contact" className="text-[11px] font-bold text-industry-orange hover:underline">
                    Request factory visit / video tour →
                  </Link>
                  <Link href="/about" className="text-[11px] font-bold text-industry-slate-300 hover:text-white hover:underline">
                    About SCOTTCHEN →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Manufacturing Capabilities</span>
              <h2 className="text-2xl font-extrabold text-white mt-2">Our Manufacturing Capabilities</h2>
              <p className="mt-3 text-sm text-industry-slate-400">
                The sourcing scope covers six abrasive categories. The responsible source, applicable quality system and supporting documents are confirmed per quoted product.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((cap) => (
                <Link key={cap.name} href={cap.link} className="glass-panel p-6 rounded-lg border border-industry-slate-800 hover:border-industry-orange transition-colors block group">
                  <h3 className="text-lg font-bold text-white group-hover:text-industry-orange transition-colors">{cap.name}</h3>
                  <p className="text-xs text-industry-slate-400 mt-2">{cap.desc}</p>
                  <span className="inline-flex items-center text-xs font-bold text-industry-orange mt-4 group-hover:underline">
                    View Product Details &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Quality Control</span>
              <h2 className="text-2xl font-extrabold text-white mt-2">Quality Control Process</h2>
              <p className="mt-3 text-sm text-industry-slate-400">
                Every production batch passes through a three-stage QC process before shipment release.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { stage: "Incoming QC", desc: "All incoming raw materials—abrasive grain (aluminum oxide, zirconia, ceramic, silicon carbide), backing cloth/paper, cotton cloth, resin bonds, fiberglass reinforcements, and packaging materials—are inspected and tested upon arrival against approved material specifications. Materials that fail inspection are rejected before entering production." },
                { stage: "In-Process QC", desc: "Production line quality checks occur at every manufacturing station including dimensional checks, weight verification, bond adhesion testing, arbor hole accuracy, flap placement uniformity for flap discs, and visual inspection. Operators perform self-checks and QC inspectors conduct regular patrol inspections throughout production runs." },
                { stage: "Final AQL Inspection", desc: "Finished goods undergo final batch inspection using AQL 2.5 sampling standards. Tests include rotational burst testing (cutting wheels), balance testing (flap discs, buffing wheels), RPM verification, grit grading checks, packaging and labeling verification, and carton drop-testing for packaged products before release for shipment." },
              ].map((step, idx) => (
                <div key={step.stage} className="glass-panel p-6 rounded-lg border border-industry-slate-800">
                  <div className="w-12 h-12 rounded-full bg-industry-orange/20 flex items-center justify-center mb-4">
                    <span className="text-xl font-black text-industry-orange">{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{step.stage}</h3>
                  <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-5">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">OEM Services</span>
              <h2 className="text-2xl font-extrabold text-white tracking-wide">OEM / Private Label Services</h2>
              <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                <p>
                  SCOTTCHEN supports OEM and private-label sourcing for distributors, tool brands, hardware channels and industrial buyers. Product availability, responsible source, customization scope and packaging options are confirmed per quotation.
                </p>
                <p>The OEM workflow follows a structured five-step process:</p>
                <ol className="space-y-3 mt-2">
                  <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-industry-orange text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">1</span><span><strong className="text-white">Specification &amp; Quotation:</strong> Submit your product requirements, target application, volume projections, and packaging direction. We provide technical consultation and a detailed quotation.</span></li>
                  <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-industry-orange text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">2</span><span><strong className="text-white">Pre-Production Samples:</strong> We produce samples per approved specifications and send them for your physical evaluation and field testing.</span></li>
                  <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-industry-orange text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">3</span><span><strong className="text-white">Sample Approval &amp; Order:</strong> After written sample approval, we issue a pro-forma invoice and schedule production upon deposit.</span></li>
                  <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-industry-orange text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">4</span><span><strong className="text-white">Mass Production &amp; QC:</strong> Production proceeds under in-process QC monitoring, with final AQL inspection before packing.</span></li>
                  <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-industry-orange text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">5</span><span><strong className="text-white">Packing &amp; Shipment:</strong> Goods are packed to buyer-approved requirements; Incoterms, named place and logistics responsibilities are confirmed in writing.</span></li>
                </ol>
              </div>
            </div>
            <div className="space-y-5">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Export Experience</span>
              <h2 className="text-2xl font-extrabold text-white tracking-wide">Export Experience &amp; Markets Served</h2>
              <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                <p>
                  Export documentation depends on the contracting entity, origin, destination, product and Incoterms rule. The quotation and shipping plan should identify invoices, packing lists, bills of lading, origin documents and any product-specific market-access evidence required for the shipment.
                </p>
                <p>
                  We regularly work with customers across diverse business models:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start"><svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>Hardware distributors and industrial supply chains in North America and Europe</span></li>
                  <li className="flex items-start"><svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>Private label tool brands selling through retail, distribution, and e-commerce</span></li>
                  <li className="flex items-start"><svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>Amazon FBA and e-commerce sellers requiring retail-ready packaging</span></li>
                  <li className="flex items-start"><svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>Industrial end-users and polishing operations buying direct in volume</span></li>
                  <li className="flex items-start"><svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>Trading companies and sourcing agents consolidating mixed abrasive containers</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Certifications</span>
              <h2 className="text-2xl font-extrabold text-white mt-2">Certifications &amp; Compliance</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "Entity Documents", desc: "Confirm the contracting entity, business registration and beneficiary details before payment." },
                { title: "Product Standards", desc: "Name the applicable market and product standard in the RFQ for each safety-critical SKU." },
                { title: "Third-Party Reports", desc: "Verify report number, issuing body, product coverage and validity against the exact quotation." },
                { title: "FEPA / ANSI", desc: "Grit grading compliant with FEPA (P-grit) and ANSI/CAMI standards" },
              ].map((cert) => (
                <div key={cert.title} className="glass-panel p-6 rounded-lg border border-industry-slate-800 text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-industry-orange/20 flex items-center justify-center mb-3">
                    <svg className="w-7 h-7 text-industry-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                  </div>
                  <h3 className="text-sm font-bold text-white">{cert.title}</h3>
                  <p className="text-xs text-industry-slate-400 mt-1">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Supply Chain</span>
              <h2 className="text-2xl font-extrabold text-white tracking-wide">Supply Chain Advantages</h2>
              <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                <p>
                  Our Shanghai location provides significant supply chain advantages. Shanghai Port is the world's busiest container port, offering weekly sailings to every major North American, European, and Asia-Pacific port with competitive freight rates and short transit times. Major abrasive grain producers, backing cloth mills, and raw material suppliers are concentrated in the Yangtze River Delta region surrounding Shanghai, enabling us to source high-quality raw materials with short lead times and favorable pricing.
                </p>
                <p>
                  We maintain long-term supplier relationships with leading Chinese coated abrasive backing cloth manufacturers and import premium German zirconia grain for our high-performance flap disc and sanding belt lines. Our location also gives us access to specialized packaging suppliers—color box printers, blister pack manufacturers, injection-molded case producers, and label printers—all within short logistics distance, supporting fast turnaround for custom private label packaging projects.
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Why China</span>
              <h2 className="text-2xl font-extrabold text-white tracking-wide">Why Source Abrasives from China?</h2>
              <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                <p>
                  China has a broad coated- and bonded-abrasive supply base. International buyers should compare landed cost and measured performance from representative samples rather than assume a universal percentage saving or equivalent quality across suppliers.
                </p>
                <p>
                  Chinese abrasive factories offer extensive customization and private label capabilities that are difficult to match with domestic suppliers in Western markets, where abrasive manufacturing has consolidated into a small number of large brands with rigid product lines and high private label minimums. In China, manufacturers like SCOTTCHEN can produce custom products, custom packaging, and private label programs at accessible MOQs, making it feasible for small and medium-sized brands to launch their own abrasive product lines.
                </p>
                <p>
                  China's massive manufacturing scale also means fast lead times even for large orders, with extensive production capacity that can ramp up quickly for seasonal demand surges or container replenishment programs. With experienced export teams and mature international shipping infrastructure, working with a Chinese abrasive factory is straightforward and reliable for buyers worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-industry-slate-950 border border-industry-slate-800 p-8 rounded-lg space-y-5">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">How to Start</span>
            <h2 className="text-2xl font-extrabold text-white">How to Start Sourcing From SCOTTCHEN</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1. Send Inquiry", desc: "Submit an RFQ via our contact form with product interests, specs, quantities, and target market." },
                { step: "2. Review Quotation", desc: "Review pricing basis, MOQ assumptions, lead-time milestones, documents and commercial terms in the written quotation." },
                { step: "3. Approve Samples", desc: "We produce and ship pre-production samples for your testing and written approval." },
                { step: "4. Production & Ship", desc: "Place your order, pay deposit, and we produce, QC, pack, and ship your order." },
              ].map((s) => (
                <div key={s.step} className="border-l-2 border-industry-orange pl-4">
                  <h3 className="text-sm font-bold text-white">{s.step}</h3>
                  <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-8 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover">
                Send Your RFQ Today
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-white tracking-wide text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 max-w-4xl mx-auto">
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
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": absoluteUrl("/#organization"),
                "name": "SCOTTCHEN",
                "url": absoluteUrl("/"),
                "foundingDate": "2014",
                "description": "Shanghai-based China abrasive manufacturer producing buffing wheels, sanding discs, flap discs, cutting wheels, sanding belts, and private label abrasive kits.",
                "address": { "@type": "PostalAddress", "addressLocality": "Shanghai", "addressCountry": "CN" },
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
