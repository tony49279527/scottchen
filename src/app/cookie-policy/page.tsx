import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Cookie Policy | SCOTTCHEN",
  description: "Learn how SCOTTCHEN stores site preferences and uses optional website measurement only after visitor approval.",
  path: "/cookie-policy",
  alternatePath: "/zh/cookie-policy",
});

export default function CookiePolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-industry-slate-900">
      {/* Header section */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cookie Policy", href: "/cookie-policy" }]} />
          <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">TECHNICAL TRANSPARENCY</span>
          <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
            Cookie Policy
          </h1>
          <p className="mt-4 text-base text-industry-slate-400 max-w-2xl mx-auto leading-relaxed">
            Effective Date: June 29, 2026. This policy explains what browser storage is used, how optional analytics works, and how you can manage your preferences.
          </p>
        </div>
      </section>

      {/* Main Text Content */}
      <section className="py-16 flex-grow">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-12 rounded-lg border border-industry-slate-800/80 bg-industry-slate-950/40 space-y-8 text-sm text-industry-slate-300 leading-relaxed">
            
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">1. What Are Cookies?</h2>
              <p>
                Cookies and similar browser storage technologies can remember preferences or help measure how a website is used. This page explains the limited browser storage used by this site.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">2. What Cookies We Use</h2>
              <p>
                We do not use advertising, retargeting, or cross-site profiling cookies. The site uses the following browser storage:
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="border border-industry-slate-800 rounded bg-industry-slate-950/40 p-4">
                  <h3 className="font-bold text-white text-xs uppercase mb-1.5 flex items-center">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2" />
                    Consent Preference (Local Storage)
                  </h3>
                  <p className="text-xs text-industry-slate-400">
                    Your analytics choice is stored in your browser so the consent panel does not appear on every page. This preference does not identify you and is not required to submit an RFQ.
                  </p>
                </div>
                <div className="border border-industry-slate-800 rounded bg-industry-slate-950/40 p-4">
                  <h3 className="font-bold text-white text-xs uppercase mb-1.5 flex items-center">
                    <span className="h-2 w-2 rounded-full bg-industry-slate-500 mr-2" />
                    Display Theme (Local Storage)
                  </h3>
                  <p className="text-xs text-industry-slate-400">
                    Your light or dark display choice is stored locally so the site can preserve your preferred appearance. It is not sent with inquiry forms and does not identify you.
                  </p>
                </div>
                <div className="border border-industry-slate-800 rounded bg-industry-slate-950/40 p-4">
                  <h3 className="font-bold text-white text-xs uppercase mb-1.5 flex items-center">
                    <span className="h-2 w-2 rounded-full bg-industry-orange mr-2" />
                    Google Analytics (Optional)
                  </h3>
                  <p className="text-xs text-industry-slate-400">
                    If analytics is configured and you select “Allow Analytics,” Google Analytics may set measurement cookies and receive usage information such as page views, device type, and approximate location. Analytics scripts are not loaded before consent.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">3. Data Minimization</h2>
              <p>
                We do not use Facebook Pixel, programmatic advertising tags, or cross-site behavioral profiles. Declining analytics does not affect product pages, catalog downloads, or inquiry forms.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">4. How to Manage Cookies</h2>
              <p>
                You can decline analytics in the consent panel and can clear stored choices or cookies through your browser settings at any time:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs text-industry-slate-400 font-mono">
                <li><strong>Google Chrome:</strong> Settings &rarr; Privacy and security &rarr; Cookies and other site data.</li>
                <li><strong>Mozilla Firefox:</strong> Options &rarr; Privacy & Security &rarr; Cookies and Site Data.</li>
                <li><strong>Apple Safari:</strong> Preferences &rarr; Privacy &rarr; Manage Website Data.</li>
                <li><strong>Microsoft Edge:</strong> Settings &rarr; Cookies and site permissions &rarr; Manage and delete cookies.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">5. Updates to This Policy</h2>
              <p>
                We may update this policy when measurement or website functionality changes. Material changes will be reflected on this page with an updated effective date.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">6. Contact Data Compliance</h2>
              <p>
                If you have questions regarding our essential cookie usage or data security layers, please reach our compliance team:
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
