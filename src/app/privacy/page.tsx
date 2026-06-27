import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy | SCOTTCHEN",
  description: "Learn about how SCOTTCHEN collects, stores, protects and manages B2B commercial inquiry data and sample request information.",
  path: "/privacy",
});

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-industry-slate-900">
      {/* Header section */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">B2B TRUST & SECURITY</span>
          <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base text-industry-slate-400 max-w-2xl mx-auto leading-relaxed">
            Effective Date: May 23, 2026. This policy outlines how SCOTTCHEN manages business inquiry data in compliance with international privacy rules.
          </p>
        </div>
      </section>

      {/* Main Text Content */}
      <section className="py-16 flex-grow">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-12 rounded-lg border border-industry-slate-800/80 bg-industry-slate-950/40 space-y-8 text-sm text-industry-slate-300 leading-relaxed">
            
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">1. Overview</h2>
              <p>
                SCOTTCHEN (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses submitted business information to respond to wholesale quote requests, evaluate sample requests, and discuss custom product or packaging requirements.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">2. What Information We Collect</h2>
              <p>
                We collect information directly when you submit an RFQ form or request a sample pack on our website. This includes:
              </p>
              <ul className="list-disc pl-5 space-y-2.5 font-mono text-xs text-industry-slate-400">
                <li><strong>Contact details:</strong> Full name and email address.</li>
                <li><strong>Business metadata:</strong> Registered company name, corporate website URL, target geographic markets, and standard business profile type (e.g., brand manager, distributor, or online seller).</li>
                <li><strong>Technical specifications:</strong> Targeted tool categories, custom ply counts, bore sizes, sandpaper grits, packaging preferences, and estimated batch volumes.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">3. How We Process Your Data</h2>
              <p>
                We use collected information solely for B2B transaction routing, specifically:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-industry-slate-350">
                <li>Analyzing material dimensions and dynamic speed testing tolerances to verify product manufacturing feasibility.</li>
                <li>Drafting formal wholesale price sheets, custom carton die-lines, and production batch lead times.</li>
                <li>Fulfilling sample shipping parcels via international couriers (DHL, FedEx, UPS) and coordinating freight charge credit terms.</li>
                <li>Ensuring compliance with platform-specific packaging guidelines (such as Amazon FNSKU/UPC barcode visibility standards).</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">4. Data Sharing and Retention</h2>
              <p>
                We do not sell, rent, or lease your corporate database contacts to any third-party advertising companies. Your inquiry parameters are shared only with essential supply chain logistics partners (e.g., customs brokers, shipping carriers, and pre-shipment auditing agencies like SGS or V-Trust) to arrange delivery contracts.
              </p>
              <p>
                We retain inquiry information only as long as reasonably needed to respond, maintain commercial records, and meet applicable legal obligations. You may request deletion where applicable.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">5. GDPR and International Rights</h2>
              <p>
                If you are accessing this site from the European Economic Area (EEA), you possess standard rights under General Data Protection Regulation (GDPR) rules. You have the right to request access to the personal data we store, request rectification of inaccurate records, object to B2B quoting communications, or request immediate deletion of your inquiry details. Contact our data compliance officer at <a href="mailto:sales@scottchentools.com" className="text-industry-orange hover:underline font-bold font-mono">sales@scottchentools.com</a> to exercise these rights.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">6. Cookies</h2>
              <p>
                The site stores your analytics preference locally in your browser. If Google Analytics is configured, it loads only after you consent. We do not use advertising or retargeting pixels. Refer to our <a href="/cookie-policy" className="text-industry-orange hover:underline font-bold">Cookie Policy</a> for details.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">7. Contact Information</h2>
              <p>
                For direct inquiries regarding data safety, data audits, or wholesale supply contracts, please reach out to our team:
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
