import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy | SCOTTCHEN",
  description: "Learn about how SCOTTCHEN collects, stores, protects and manages B2B commercial inquiry data and sample request information.",
  path: "/privacy",
  alternatePath: "/zh/privacy",
});

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-industry-slate-900">
      {/* Header section */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy", href: "/privacy" }]} />
          <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">B2B TRUST & SECURITY</span>
          <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base text-industry-slate-400 max-w-2xl mx-auto leading-relaxed">
            Effective Date: June 28, 2026. This policy describes how the SCOTTCHEN website handles business inquiry and sample-request information.
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
                <li><strong>Request context:</strong> Locale, landing page, selected source page, referrer, UTM parameters, submission time, IP address, browser user agent, and internal lead-routing score.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">3. How We Process Your Data</h2>
              <p>
                We use collected information solely for B2B transaction routing, specifically:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-industry-slate-350">
                <li>Reviewing product, packaging and tool-interface requirements before preparing a quotation.</li>
                <li>Routing the inquiry to the configured email or business webhook and preventing automated abuse.</li>
                <li>Discussing samples, logistics, artwork and buyer-supplied barcode requirements if the project progresses.</li>
                <li>Measuring site usage through consent-based analytics when that feature is configured and accepted.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">4. Data Sharing and Retention</h2>
              <p>
                We do not sell or rent inquiry contact data for third-party advertising. Information may be processed by service providers used for website hosting, inquiry delivery, security, consent-based analytics, and, if a project proceeds, the logistics or inspection providers needed for the requested service.
              </p>
              <p>
                We retain inquiry information only as long as reasonably needed to respond, maintain commercial records, and meet applicable legal obligations. You may request deletion where applicable.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">5. Privacy Requests and Applicable Rights</h2>
              <p>
                Depending on your location and applicable law, you may have rights to request access, correction, deletion, restriction, objection, or a copy of personal information. Requests can be sent to <a href="mailto:sales@scottchentools.com" className="text-industry-orange hover:underline font-bold font-mono">sales@scottchentools.com</a>. We may need to verify the requester and may retain records where legally required or needed to establish, exercise, or defend claims.
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
