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
      desc: "Brand presence is determined by packaging format. We offer structural mockup planning for various formats:",
      details: [
        "Double Blister Pack: High visual clarity for retail shelves and hardware store racks.",
        "Color Corrugated Box: High strength for heavy grinding discs, diamond pads, or sanding roll dispenser grids.",
        "Eco-friendly Kraft Box: Ideal for online sellers looking to reduce plastic waste and courier shipping weights.",
        "Header Card Polybag: Highly cost-efficient for mini detail sanders or assorted grit paper sheets.",
      ],
    },
    {
      title: "3. Professional Labeling & Barcode Compliance",
      desc: "We review supplied barcode, warning, and country-of-origin requirements before shipment and document the approved label layout. Final marketplace and import compliance remains subject to the buyer's current destination rules.",
      details: [
        "FNSKU / UPC Data: Buyer-supplied symbols can be printed or applied to retail packaging and sample-scanned before production approval.",
        "Instruction Cards: Clear user manuals, tool compatibility tables, and substrate usage guides to reduce avoidable consumer returns.",
        "Warning & Regulatory Stickers: Standard compliance markings, warnings, and country-of-origin labels on cartons.",
      ],
    },
    {
      title: "4. Online Seller Fulfillment Planning",
      desc: "For online sellers, the project specification can include carton dimensions, pack weight, agreed handling tests and shipping-label space. Marketplace fee tiers and warehouse acceptance must be checked against the channel's current rules.",
    },
  ];

  const oemSteps = [
    { step: "01", title: "Request Sample Kit", desc: "Test our cotton wheel densities, stitch tolerances, and sandpaper grits in your own facility." },
    { step: "02", title: "Select Kit Combination", desc: "Work with our engineers to configure your accessory selection, grits, and custom inserts." },
    { step: "03", title: "Design Packaging", desc: "We provide structural die-lines for color boxes or blister backing cards. You provide artwork." },
    { step: "04", title: "Approve Mockups", desc: "We produce physical packaging mockups and barcode placements for visual validation before production." },
    { step: "05", title: "Batch Production", desc: "The quotation confirms production timing and the agreed batch checks after specification and artwork approval." },
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
              We help tool brands and online sellers plan retail-ready accessory bundles with custom packaging, branding, and buyer-supplied barcode data.
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
                    <span className="text-industry-slate-200"><strong>Configurable Bundles:</strong> Combine buffing wheels, compound bars, sandpapers, arbors, or detail sticks into workflow-specific kits.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Retail-Ready Packaging:</strong> Select double blister packs, corrugated boxes, eco-friendly kraft wraps, or hang-tag bags.</span>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Barcode Verification:</strong> FNSKU, UPC, and required warning labels can be applied and scan-checked against buyer-supplied data before shipment.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Quoted Project Scope:</strong> A 500-set reference MOQ, production schedule, inspection scope and international delivery assumptions are confirmed for each configuration.</span>
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
                  src="/images/oem_packaging.webp"
                  alt="Illustrative private-label packaging concept"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-3 text-[10px] text-industry-slate-300">
                  Illustrative packaging concept
                </span>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  OEM Sourcing Specs
                </h3>
                <div className="space-y-3 text-xs font-mono">
                  <div>
                    <span className="text-industry-slate-500 block">Sourcing MOQ:</span>
                    <span className="text-white font-bold">Reference: 500 boxed kits</span>
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
                  We supply both raw bulk abrasives and full retail bundles.
                </p>
              </div>

              {/* Action card */}
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4 text-center">
                <h4 className="text-sm font-bold text-white uppercase">Ready to get structural die-lines?</h4>
                <p className="text-xs text-industry-slate-400">
                  Request a quote and check the custom package selection field to receive CAD die-lines for your box designs.
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
                a: "A common starting point is 500 sets for boxed custom kits and 1,000 sets for some blister-card configurations. The actual MOQ depends on the product mix, print process, packaging structure and material suppliers, and is confirmed in the quotation."
              },
              {
                q: "Can packaging dielines and structural mockups be included?",
                a: "Yes. After the kit configuration is fixed, the project can include PDF or DXF dielines plus digital or physical mockups. Deliverables, revision rounds, sample charges and ownership are confirmed in the quotation."
              },
              {
                q: "How do you verify barcode scannability for marketplace fulfillment?",
                a: "We can apply buyer-supplied UPC or FNSKU data and perform sample scan checks before shipment. Barcode size, quiet zones, contrast, substrate and placement should follow GS1 guidance and the marketplace's current requirements; a formal verification grade must be separately specified."
              },
              {
                q: "What options do you support for multi-language instruction manuals and packaging inserts?",
                a: "Warning sheets, process guides and grit-to-substrate charts can be printed in agreed languages. Paper stock, weight, dimensions, translation responsibility and fold pattern are confirmed in the packaging specification."
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
