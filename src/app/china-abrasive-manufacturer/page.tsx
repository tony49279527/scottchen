import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { buildFaqPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "China Abrasive Sourcing & OEM Support | SCOTTCHEN",
  description: "Shanghai B2B abrasive sourcing and OEM support. Entity, production source, standards, certificates and reports are confirmed per quoted SKU.",
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
    { name: "Abrasive Kits", link: "/abrasive-kits", desc: "Polishing and sanding kit concepts quoted by BOM, source and packaging scope" },
  ];

  const faqs = [
    {
      q: "Why should I source abrasive tools from a China abrasive manufacturer?",
      a: "China has a broad coated- and bonded-abrasive supply base covering grains, backings, converting, bonding and pack-out. Buyers should compare total landed cost, component source, quality plan, sample evidence, MOQ, lead time and logistics assumptions instead of relying on a generic percentage-saving or factory-direct claim.",
    },
    {
      q: "What is SCOTTCHEN's role in an abrasive sourcing project?",
      a: "SCOTTCHEN provides Shanghai-based B2B sourcing and OEM project support. Each written quotation should identify the contracting entity, responsible production source and location, quoted component scope, commercial terms and the evidence available for the exact SKU.",
    },
    {
      q: "How is quality control defined for a quoted SKU?",
      a: "The buyer and quoted production source should agree a written quality plan covering specification revision, sample identity, inspection points, sampling level, test method, acceptance criteria, records and nonconforming-product handling. No fixed AQL, test list or release process is implied across all products or sources.",
    },
    {
      q: "Can you provide third-party factory audit reports or certifications?",
      a: "Request entity documents, the responsible production source, the applicable certificate or test report for each SKU, inspection records and any buyer-arranged audit scope. Certificate numbers, issuing bodies, product coverage and validity must be checked against the exact quotation before they are used for market access or product claims.",
    },
    {
      q: "What are the payment terms for new international customers?",
      a: "Payment method, deposit or balance milestones, currency, beneficiary, banking charges and document conditions vary by contracting entity and project. Buyers should rely only on the written quotation, pro-forma invoice and contract after verifying that the beneficiary matches the approved contracting arrangement.",
    },
    {
      q: "How do I start sourcing abrasive tools from SCOTTCHEN?",
      a: "Submit the product, quantity, specification, packaging, target market and requested Incoterms rule. The written quotation should then identify the proposed source, sample plan, evidence scope, MOQ, fees, lead-time milestones, payment terms and named Incoterms place before any order is approved.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "China Abrasive Sourcing", href: "/china-abrasive-manufacturer" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Sourcing &amp; Verification</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              China Abrasive Sourcing &amp; OEM Project Support
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              SCOTTCHEN is the brand used for Shanghai-based abrasive sourcing and OEM project support covering buffing wheels, sanding discs, flap discs, cutting wheels, sanding belts and private-label kits. Production source, legal entity, documents and export scope are confirmed per quotation.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link href="/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-orange-hover hover:scale-[1.02] text-center">
              Request Sourcing Quote
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
                <div className="text-2xl font-black text-industry-orange">Shanghai</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">B2B Coordination Base</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">Per Market</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Scope Confirmed in Writing</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">Per SKU</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Source &amp; Evidence Defined</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">6 Product Lines</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Sourcing Scope</div>
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
                src="/images/qc-evidence-planning-concept-v2.jpg"
                alt="Illustrative abrasive quality-evidence planning concept, not a production-facility photograph"
                className="w-full h-80 object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
                <p className="text-xs font-semibold text-white">
                  Illustrative quality-evidence planning concept — not a facility photograph
                </p>
                <p className="text-[11px] text-industry-slate-300 leading-relaxed">
                  This image illustrates a review workflow only. Actual entity documents,
                  facility evidence, certificates, test reports and inspection records must
                  be supplied and verified for the quoted source and SKU.
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <Link href="/contact" className="text-[11px] font-bold text-industry-orange hover:underline">
                    Request an evidence plan →
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
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Product Sourcing Scope</span>
              <h2 className="text-2xl font-extrabold text-white mt-2">Quoted Abrasive Product Scope</h2>
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
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Quality Planning</span>
              <h2 className="text-2xl font-extrabold text-white mt-2">SKU-Level Quality Evidence Plan</h2>
              <p className="mt-3 text-sm text-industry-slate-400">
                Inspection and testing are agreed for the exact source, market and SKU; no universal factory process is implied.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { stage: "Source & Specification Review", desc: "Record the contracting entity, production source and location, approved specification revision, materials or components, labeling scope and any substitutions that require buyer approval." },
                { stage: "Sample & Test Plan", desc: "Identify the representative sample, applicable market requirement, test method, acceptance criteria, responsible laboratory or inspector and evidence to be retained for the quoted SKU." },
                { stage: "Shipment Evidence", desc: "Agree the inspection scope, sampling level, packaging and barcode checks, report format, release authority and handling of nonconforming goods before production or shipment." },
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
                  <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-industry-orange text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">1</span><span><strong className="text-white">Specification &amp; Quotation:</strong> Submit product requirements, target application, volume projections and packaging direction. The written response states available technical input, candidate sources, assumptions and quotation scope.</span></li>
                  <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-industry-orange text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">2</span><span><strong className="text-white">Representative Samples:</strong> The proposed source, sample identity, specification and test responsibility are recorded before buyer evaluation.</span></li>
                  <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-industry-orange text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">3</span><span><strong className="text-white">Written Approval &amp; Terms:</strong> Sample approval, MOQ, fees, payment milestones, lead-time assumptions and change controls are documented before order placement.</span></li>
                  <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-industry-orange text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">4</span><span><strong className="text-white">Production &amp; Evidence:</strong> The quoted source follows the agreed quality plan and provides the inspection or test records specified in the order documents.</span></li>
                  <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-industry-orange text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">5</span><span><strong className="text-white">Packing &amp; Shipment:</strong> Goods are packed to buyer-approved requirements; Incoterms, named place and logistics responsibilities are confirmed in writing.</span></li>
                </ol>
              </div>
            </div>
            <div className="space-y-5">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Export Planning</span>
              <h2 className="text-2xl font-extrabold text-white tracking-wide">Export Documents &amp; Buyer Profiles</h2>
              <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                <p>
                  Export documentation depends on the contracting entity, origin, destination, product and Incoterms rule. The quotation and shipping plan should identify invoices, packing lists, bills of lading, origin documents and any product-specific market-access evidence required for the shipment.
                </p>
                <p>Common sourcing briefs may come from:</p>
                <ul className="space-y-2">
                  <li className="flex items-start"><svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>Hardware distributors and industrial MRO supply chains</span></li>
                  <li className="flex items-start"><svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>Private label tool brands selling through retail, distribution, and e-commerce</span></li>
                  <li className="flex items-start"><svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0z" /></svg><span>Amazon FBA and e-commerce sellers needing a documented packaging and barcode approval plan</span></li>
                  <li className="flex items-start"><svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>Industrial end-users and polishing operations buying direct in volume</span></li>
                  <li className="flex items-start"><svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>Trading companies and sourcing agents consolidating mixed abrasive containers</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Evidence Scope</span>
              <h2 className="text-2xl font-extrabold text-white mt-2">Supplier Documents &amp; Product Evidence</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "Entity Documents", desc: "Confirm the contracting entity, business registration and beneficiary details before payment." },
                { title: "Product Standards", desc: "Name the applicable market and product standard in the RFQ for each safety-critical SKU." },
                { title: "Third-Party Reports", desc: "Verify report number, issuing body, product coverage and validity against the exact quotation." },
                { title: "Grit System", desc: "Identify whether FEPA, ANSI/CAMI or another grading system applies and confirm the reference for the quoted SKU." },
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
              <h2 className="text-2xl font-extrabold text-white tracking-wide">Supply Chain Planning</h2>
              <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                <p>
                  Shanghai serves as a coordination point for quotations and export planning. The written offer should name the actual production source, country of origin, proposed port or handover point, freight assumptions and lead-time milestones; none of these should be inferred from the coordination address.
                </p>
                <p>
                  A sourcing plan should identify the proposed grain, backing, converting, assembly and packaging sources plus substitution controls. Any claim about imported materials, supplier relationships, nearby packaging capacity or shortened lead time requires project-specific documentation.
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
                  China can offer multiple sourcing models across abrasive conversion, assembly, bonded products and packaging, but capability, MOQ and evidence vary by source. Buyers should request like-for-like quotations tied to the same specification and approved sample.
                </p>
                <p>
                  Select the sourcing model using measured sample performance, entity and facility evidence, change control, total landed cost, lead-time milestones and recourse for nonconforming goods. Capacity and delivery claims should be confirmed for the quoted source and order window.
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
                { step: "3. Approve Samples", desc: "Evaluate an identified representative sample against the agreed specification, test plan and acceptance criteria." },
                { step: "4. Confirm Order Controls", desc: "Confirm the contracting and production entities, quality plan, packaging, payment milestones and named Incoterms place before the purchase order." },
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
                "@type": "Brand",
                "@id": absoluteUrl("/#organization"),
                "name": "SCOTTCHEN",
                "url": absoluteUrl("/"),
                "description": "Shanghai-based B2B abrasive sourcing and OEM project support for buffing wheels, sanding discs, flap discs, cutting wheels, sanding belts and private-label kits.",
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
