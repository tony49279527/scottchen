import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Supply Terms & Service | SCOTTCHEN",
  description: "Read the SCOTTCHEN B2B supply terms, MOQ policies, customized tooling parameters, quality tolerances, and Incoterms 2020 delivery rules.",
  alternates: {
    canonical: "https://www.scottchentools.com/terms",
    languages: {
      "en": "https://www.scottchentools.com/terms",
      "zh-CN": "https://www.scottchentools.com/zh/terms",
      "x-default": "https://www.scottchentools.com/terms",
    },
  },
};

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-industry-slate-900">
      {/* Header section */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">COMMERCIAL CONTRACT BASE</span>
          <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
            B2B Supply Terms & Service
          </h1>
          <p className="mt-4 text-base text-industry-slate-400 max-w-2xl mx-auto leading-relaxed">
            Effective Date: May 23, 2026. General terms governing bulk price sheets, tooling mockups, dynamic testing, and container logistics.
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
                These terms govern all commercial requests for quotes, physical material sampling, custom carton structural planning, and bulk manufacturing batches arranged between Scottchen Tool Accessories Ltd. (&quot;SCOTTCHEN&quot;) and business entities seeking supply catalog integrations (&quot;Buyer&quot;).
              </p>
              <p>
                This website is dedicated solely to B2B sourcing and trade evaluation. Individual consumers seeking small-volume retail orders are referred to authorized distributor retail listings on third-party platforms (e.g., Amazon, Walmart).
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">2. Minimum Order Quantities (MOQs)</h2>
              <p>
                To maintain production-line optimization and raw material economies of scale, standard batch minimums apply to all custom contracts:
              </p>
              <ul className="list-disc pl-5 space-y-2 font-mono text-xs text-industry-slate-400">
                <li><strong>Cotton Buffing & Airway Wheels:</strong> 500 pieces per size/stitch style.</li>
                <li><strong>Shank-mounted Drill Polishing Pads:</strong> 1,000 pieces per shape.</li>
                <li><strong>Sanding Sheets & Sandpaper Rolls:</strong> 10,000 sheets or 200 rolls per grit level.</li>
                <li><strong>Zirconia Fiber Grinding Discs:</strong> 2,000 discs per grit dimension.</li>
                <li><strong>Drywall Sanding Fiberglass Screens:</strong> 5,000 sheets per size.</li>
                <li><strong>Custom Mixed Sourcing Tool Kits:</strong> 500 pre-packaged sets.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">3. Quotations and Pricing</h2>
              <p>
                All wholesale price quotes issued by our sales engineers are provided in U.S. Dollars (USD) and remain valid for a standard duration of **thirty (30) calendar days** from the date of issuance. Fluctuations in raw carded cotton index rates, silicon carbide commodity prices, or ocean transport freight indexes may require price adjustments upon contract signing.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">4. Packaging, Branding & Barcodes</h2>
              <p>
                For private label contracts, the Buyer is responsible for submitting digital artwork and logo vectors on the structural CAD die-lines provided by our design team. Slipped print alignments or unreadable FNSKU/UPC barcode scans caused by poor artwork files supplied by the Buyer are exempt from standard factory warranty returns. We run resolution scanners to verify barcode print contrast before container sealing.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">5. Sizing & Quality Tolerances</h2>
              <p>
                Abrasives and polishing wheels are precision-manufactured within high-durability B2B safety guidelines:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-industry-slate-350">
                <li><strong>Bore Center Arbor Tolerance:</strong> Guaranteed within a strict **&plusmn;0.05 mm** margin to prevent grinder shaft vibrations.</li>
                <li><strong>Outer Diameter Bias:</strong> Normal physical stretch allows a **&plusmn;1.0 mm** buffer.</li>
                <li><strong>Dynamic Balancing:</strong> Grinding discs and shanks are batch-tested to operate stably up to 1.5x maximum rated operating RPMs.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">6. Delivery, Incoterms and Shipping</h2>
              <p>
                Standard bulk shipment batches require a lead time of **20 to 35 calendar days**, beginning from the receipt of deposit and packaging design approvals.
              </p>
              <p>
                Our standard trading terms are **FOB Shanghai** or **FOB Ningbo** port, China, in accordance with Incoterms 2020 rules. We also support CFR, CIF, and door-to-door DDU/DDP air/sea shipping to regional warehousing hubs (including direct logistics coordination to FBA delivery zones).
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">7. Disputes and Jurisdiction</h2>
              <p>
                These terms and any bulk sales contracts established under them shall be governed by and interpreted under the commercial trading laws of China, with Shanghai designated as the exclusive legal jurisdiction for resolving trade disputes.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">8. Contact Sourcing Desk</h2>
              <p>
                If you have legal or technical questions about our manufacturing standards, B2B logistics rules, or payment methods, please reach our sales office:
              </p>
              <div className="bg-industry-slate-950 p-6 rounded border border-industry-slate-800 font-mono text-xs text-industry-slate-400 space-y-2">
                <div><span className="text-white font-bold">Office:</span> Scottchen Tool Accessories Ltd.</div>
                <div><span className="text-white font-bold">Address:</span> No. 88 Industry Ring Road, Shanghai, 200120, China</div>
                <div><span className="text-white font-bold">Telephone:</span> +86-21-6100-2008</div>
                <div><span className="text-white font-bold">Email:</span> <a href="mailto:sales@scottchentools.com" className="text-industry-orange hover:underline">sales@scottchentools.com</a></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
