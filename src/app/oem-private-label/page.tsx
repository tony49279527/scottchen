import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import DecisionGuides from "@/components/DecisionGuides";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "OEM & Private Label Surface Finishing Kits | SCOTTCHEN",
  description: "Plan custom branding, retail packaging, buyer-supplied barcode labeling and warehouse-delivery requirements for industrial tool accessory kits.",
  path: "/oem-private-label",
  alternatePath: "/zh/oem-private-label",
});

export default function OEMPrivateLabel() {
  const oemCapabilities = [
    {
      title: "1. Custom Product Combinations",
      desc: "Move beyond a fixed catalog by combining product families in one quoted kit. Cotton wheels, compound bars, hex arbors, detail sticks or assorted sandpapers can be scoped around a workflow such as metal restoration or woodworking preparation.",
      examples: "Example: 1x 6-inch cotton wheel + 1x 6-inch loose flannel wheel + 2x compound bars (green and white) + 1x drill adapter arbor shank.",
    },
    {
      title: "2. Custom Retail Packaging",
      desc: "Packaging formats can be discussed as a structural brief. The quotation must identify format availability, dieline owner, materials, sample method, approval evidence and setup cost:",
      details: [
        "Double Blister Pack: High visual clarity for retail shelves and hardware store racks.",
        "Color Corrugated Box: High strength for heavy grinding discs, diamond pads, or sanding roll dispenser grids.",
        "Eco-friendly Kraft Box: Ideal for online sellers looking to reduce plastic waste and courier shipping weights.",
        "Header Card Polybag: Highly cost-efficient for mini detail sanders or assorted grit paper sheets.",
      ],
    },
    {
      title: "3. Professional Labeling & Barcode Compliance",
      desc: "The order plan can include a review of buyer-supplied barcode, warning and origin requirements plus an approved label layout. The responsible checker, method and retained record must be named; final marketplace and import compliance remains subject to current destination rules.",
      details: [
        "FNSKU / UPC Data: Quote only after a packaging source accepts the buyer data and a responsible scan method is agreed.",
        "Instruction Cards: Buyer-approved content, translation, compatibility statements and use boundaries require named owners.",
        "Warning & Origin Labels: Applicable text, legal basis, placement and responsible party must be confirmed for the destination and SKU.",
      ],
    },
    {
      title: "4. Online Seller Fulfillment Planning",
      desc: "For online sellers, the project specification can include carton dimensions, pack weight, agreed handling tests and shipping-label space. Marketplace fee tiers and warehouse acceptance must be checked against the channel's current rules.",
    },
  ];

  const oemSteps = [
    { step: "01", title: "Request Sample Kit", desc: "Test the quoted cotton-wheel construction, stitch criteria and sandpaper grits in your own facility." },
    { step: "02", title: "Select Kit Combination", desc: "Define the accessory selection, grits, component sources and custom inserts with the project contact." },
    { step: "03", title: "Confirm Dieline Responsibility", desc: "The quotation states whether the buyer, packaging source or another named party supplies the dieline, which format is used and who approves it." },
    { step: "04", title: "Approve Mockups", desc: "Physical packaging mockups and barcode placement checks can be scoped for visual validation before order approval." },
    { step: "05", title: "Confirm Order Plan", desc: "The quotation names each SKU's production source, written schedule and agreed inspection points after specification and artwork approval." },
    { step: "06", title: "Warehouse Delivery", desc: "Loading, freight, delivery point and customs responsibilities are confirmed with the selected Incoterms rule and logistics plan." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header section (Top CTA) */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "OEM Private Label", href: "/oem-private-label" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">PRIVATE LABEL INSTRUCTIONS</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              OEM & Private Label Surface Finishing Kits
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              Plan proposed accessory bundles, packaging responsibilities, branding and buyer-supplied barcode data; source capability and approval evidence are confirmed per project.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/contact"
              className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-orange-hover hover:scale-[1.02] text-center"
            >
              Discuss Custom Packaging
            </Link>
            <Link
              href="/sample-kit"
              className="inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-slate-750 text-center"
            >
              Order Sample Pack
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
                <h2 className="text-2xl font-black text-white mt-1">OEM Capabilities</h2>
                <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">
                  Logistics, branding capabilities, and compliance standards for custom-packaged kits.
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Proposed Bundles:</strong> A BOM can combine categories after each source, specification, compatibility and inspection scope is quoted.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Packaging Feasibility:</strong> Candidate blister, box, kraft or bag formats require a named source, dieline owner, approved sample and artwork sign-off.</span>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Barcode Verification Plan:</strong> The quotation names the buyer data, responsible party, artwork, sample stage, scanner and retained record; no production scan result is implied.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Quoted Project Scope:</strong> Production source, MOQ, written schedule, evidence, inspection and delivery assumptions are confirmed for each SKU and packaging configuration.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OEM Capabilities details */}
      <section className="py-16 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Main details */}
            <div className="lg:col-span-8 space-y-12">
              
              <div className="space-y-8">
                {oemCapabilities.map((cap) => (
                  <div key={cap.title} className="glass-panel p-8 rounded-lg space-y-4">
                    <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                      {cap.title}
                    </h2>
                    <p className="text-sm text-industry-slate-300 leading-relaxed">
                      {cap.desc}
                    </p>
                    
                    {cap.examples && (
                      <div className="bg-industry-slate-950 p-4 rounded border border-industry-slate-800 text-xs font-mono text-industry-orange">
                        {cap.examples}
                      </div>
                    )}

                    {cap.details && (
                      <ul className="space-y-2 text-xs text-industry-slate-400 font-mono pl-4 list-disc">
                        {cap.details.map((det) => (
                          <li key={det}>{det}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Step-by-Step Flow */}
              <div className="space-y-6">
                <h2 className="text-2xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  The OEM Custom Sourcing Process
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {oemSteps.map((step) => (
                    <div key={step.step} className="glass-panel p-6 rounded-lg flex space-x-4 border-l-4 border-l-industry-orange">
                      <div className="text-2xl font-black text-industry-orange/40 font-mono shrink-0">{step.step}</div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-white text-sm">{step.title}</h3>
                        <p className="text-xs text-industry-slate-400 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Side Info Panel */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="glass-panel rounded-lg overflow-hidden border border-industry-slate-800 shadow-xl relative">
                <img
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  src="/images/oem-abrasive-packaging-concept-v2.jpg"
                  alt="AI-generated unbranded private-label abrasive packaging concept"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-3 text-[10px] text-industry-slate-300">
                  AI-generated concept — not a customer order, dieline, label or shipment
                </span>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  OEM Sourcing Specs
                </h3>
                <div className="space-y-3 text-xs font-mono">
                  <div>
                    <span className="text-industry-slate-500 block">Sourcing MOQ:</span>
                    <span className="text-white font-bold">Quoted by SKU, packaging and quantity</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">Package Toolings:</span>
                    <span className="text-white font-bold">Dieline scope confirmed in quote</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">Mockup lead time:</span>
                    <span className="text-white font-bold">Quoted after artwork review</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">Import Compliance:</span>
                    <span className="text-white font-bold">Buyer-approved warning content</span>
                  </div>
                </div>
              </div>

              {/* Why private label works */}
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Distribution Value
                </h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  For tool brand distributors, product differentiation comes from custom combinations, clear substrate compatibility guides, and clean retail branding — not just the abrasive raw material itself.
                </p>
                <p className="text-xs text-industry-orange font-mono font-bold">
                  Bulk and retail-bundle scopes are quoted only after the component and packaging sources are identified.
                </p>
              </div>

              {/* Action card */}
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4 text-center">
                <h4 className="text-sm font-bold text-white uppercase">Need to confirm a dieline source?</h4>
                <p className="text-xs text-industry-slate-400">
                  Send the pack format and dimensions. The written response will state whether a CAD dieline exists, who owns it, any setup charge and what approval sample is available.
                </p>
                <Link
                  href="/contact"
                  className="w-full inline-flex justify-center items-center rounded bg-industry-orange py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover"
                >
                  Send OEM Requirements
                </Link>
              </div>

            </div>

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
              Private label packaging rules, barcode compatibility, lead times, and shipping processes for B2B distributors.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What is the typical minimum order quantity (MOQ) for custom private label kits?",
                a: "MOQ depends on product mix, print process, packaging structure, tooling, material source and order quantity. It is stated in the dated written quotation after the SKU and pack specification are reviewed."
              },
              {
                q: "Can packaging dielines and structural mockups be included?",
                a: "The quotation can state whether a PDF, DXF or other dieline exists, who owns and supplies it, which digital or physical mockup is feasible, and the charges and revision limits. No dieline or mockup is promised by this page."
              },
              {
                q: "How do you verify barcode scannability for marketplace fulfillment?",
                a: "A quotation can scope use of buyer-supplied UPC or FNSKU data and name the party, scanner, sample stage and retained scan record. Barcode size, quiet zones, contrast, substrate and placement remain subject to the buyer's current GS1 and marketplace requirements. No production scan record is currently published."
              },
              {
                q: "What options do you support for multi-language instruction manuals and packaging inserts?",
                a: "Warning sheets, process guides or grit-to-substrate charts can be evaluated for quotation. Languages, approved copy, translation responsibility, usage rights, paper, dimensions, fold and print source must be confirmed in the packaging specification."
              },
              {
                q: "Can you ship custom kits directly to international fulfillment centers (DDP)?",
                a: "Direct warehouse delivery may be quoted through a logistics provider after the destination, importer-of-record requirements, product classification and service availability are reviewed. The selected Incoterms rule, named place, taxes, customs responsibilities and exclusions must be stated in writing."
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


      {/* Persistent CTA Banner */}
      <DecisionGuides />
      <CTASection />
    </div>
  );
}
