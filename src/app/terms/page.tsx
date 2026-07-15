import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Website & B2B Inquiry Terms | SCOTTCHEN",
  description: "Read the terms for using the SCOTTCHEN B2B website, requesting quotes and samples, and confirming project-specific commercial terms.",
  path: "/terms",
  alternatePath: "/zh/terms",
});

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-industry-slate-900">
      {/* Header section */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms", href: "/terms" }]} />
          <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">COMMERCIAL CONTRACT BASE</span>
          <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
            Website & B2B Inquiry Terms
          </h1>
          <p className="mt-4 text-base text-industry-slate-400 max-w-2xl mx-auto leading-relaxed">
            Effective Date: June 28, 2026. These website terms cover pre-contract inquiries; a signed quotation or contract controls any supply project.
          </p>
        </div>
      </section>

      {/* Main Text Content */}
      <section className="py-16 flex-grow">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-12 rounded-lg border border-industry-slate-800/80 bg-industry-slate-950/40 space-y-8 text-sm text-industry-slate-300 leading-relaxed">
            
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">1. Scope and Eligibility</h2>
              <p>
                These terms govern use of this website and pre-contract requests made to the SCOTTCHEN brand, including quotation, sample, product specification and packaging discussions.
              </p>
              <p>
                This website is dedicated to B2B sourcing and trade evaluation. It does not publish a verified SCOTTCHEN consumer-store link; buyers should independently verify any third-party marketplace listing.
              </p>
              <p>
                Submitting a form does not create a purchase, supply, agency or exclusivity agreement. The legal contracting entity and binding terms must be identified in the project quotation or contract.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">2. Minimum Order Quantities (MOQs)</h2>
              <p>
                Quantities shown on this website are reference RFQ starting points, not binding minimums. Actual MOQ depends on the SKU, materials, packaging and print process and must be stated in the quotation.
              </p>
              <ul className="list-disc pl-5 space-y-2 font-mono text-xs text-industry-slate-400">
                <li><strong>Buffing wheels and drill accessories:</strong> quoted by construction, dimensions, material, packaging and quantity.</li>
                <li><strong>Sheets, rolls, discs, screens and belts:</strong> quoted by grain, grit, backing, size, pack format and quantity.</li>
                <li><strong>Bonded or safety-critical products:</strong> quoted only after intended market, labeled limits and evidence requirements are reviewed.</li>
                <li><strong>Private-label kits:</strong> quoted after the bill of materials, artwork, packaging, barcode responsibilities and inspection plan are defined.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">3. Quotations and Pricing</h2>
              <p>
                Each quotation must state its currency, validity period, included and excluded costs, tax treatment and price-adjustment conditions. No currency or price basis is established by this website.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">4. Packaging, Branding & Barcodes</h2>
              <p>
                Responsibilities for artwork, trademarks, translations, warnings, barcode data, dielines, sample approval and revision rounds are confirmed per project. Any barcode scan check is limited to the method and sample defined in the quality plan; retailer or marketplace acceptance is not guaranteed by this website.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">5. Sizing & Quality Tolerances</h2>
              <p>
                Product requirements and acceptance criteria must be recorded in the approved SKU specification, reference sample and quality plan:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-industry-slate-350">
                <li><strong>Bore Center Arbor Tolerance:</strong> The applicable tolerance is confirmed in the signed specification sheet for each SKU.</li>
                <li><strong>Outer Diameter:</strong> Material and dimensional tolerances are confirmed before mass production.</li>
                <li><strong>Performance Checks:</strong> Any runout, balance, fit, or speed-related test must be defined in the signed product specification and quality plan.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">6. Delivery, Incoterms and Shipping</h2>
              <p>
                Indicative lead times are provided in each quotation and begin after payment terms, samples, and packaging artwork are approved.
              </p>
              <p>
                Supported Incoterms, ports, freight method, and delivery responsibilities are defined in the signed quotation or purchase agreement.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">7. Contracting Entity and Governing Terms</h2>
              <p>
                The supplier&apos;s legal name, registered address, payment beneficiary, governing law, dispute process and any warranty or remedy must be stated in the signed quotation or contract. This website does not independently establish those terms.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">8. Contact Sourcing Desk</h2>
              <p>
                For questions about this website or to request project-specific legal and technical details, contact:
              </p>
              <div className="bg-industry-slate-950 p-6 rounded border border-industry-slate-800 font-mono text-xs text-industry-slate-400 space-y-2">
                <div><span className="text-white font-bold">Brand:</span> SCOTTCHEN</div>
                <div><span className="text-white font-bold">Email:</span> <a href="mailto:sales@scottchentools.com" className="text-industry-orange hover:underline">sales@scottchentools.com</a></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
