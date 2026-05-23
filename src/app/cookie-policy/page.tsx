import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | SCOTTCHEN",
  description: "Read the Cookie Policy of SCOTTCHEN to learn about the essential and secure cookies we use to run our B2B catalog quoting forms safely.",
  alternates: {
    canonical: "https://www.scottchentools.com/cookie-policy",
    languages: {
      "en": "https://www.scottchentools.com/cookie-policy",
      "zh-CN": "https://www.scottchentools.com/zh/cookie-policy",
      "x-default": "https://www.scottchentools.com/cookie-policy",
    },
  },
};

export default function CookiePolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-industry-slate-900">
      {/* Header section */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">TECHNICAL TRANSPARENCY</span>
          <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
            Cookie Policy
          </h1>
          <p className="mt-4 text-base text-industry-slate-400 max-w-2xl mx-auto leading-relaxed">
            Effective Date: May 23, 2026. This policy explains what cookies are, how we use them on our B2B forms, and how you can manage them.
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
                Cookies are tiny text files stored in your web browser directory when you load certain websites. They allow web servers to recognize your browser, keep track of form sessions, and defend interactive portal scripts from cross-site injection attacks.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">2. What Cookies We Use</h2>
              <p>
                Unlike typical retail stores or consumer websites, we do not load invasive marketing track cookies, behavioral profile tracers, or retargeting scripts. We utilize only two categories of cookies:
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="border border-industry-slate-800 rounded bg-industry-slate-950/40 p-4">
                  <h3 className="font-bold text-white text-xs uppercase mb-1.5 flex items-center">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2" />
                    Essential Technical Cookies (Strictly Necessary)
                  </h3>
                  <p className="text-xs text-industry-slate-400">
                    These are required to enable secure B2B request submissions. They hold temporary tokens that protect our contact forms against spam submittals and Cross-Site Request Forgery (CSRF). Blocking these cookies will prevent RFQ submissions on our pages.
                  </p>
                </div>
                <div className="border border-industry-slate-800 rounded bg-industry-slate-950/40 p-4">
                  <h3 className="font-bold text-white text-xs uppercase mb-1.5 flex items-center">
                    <span className="h-2 w-2 rounded-full bg-industry-orange mr-2" />
                    Preference Cookies (Functional)
                  </h3>
                  <p className="text-xs text-industry-slate-400">
                    We use a small persistent preference cookie to store your cookie consent selection. This avoids loading the floating consent alert banner repeatedly when you navigate from products to application scenes.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">3. Cookieless Privacy Approach</h2>
              <p>
                Our server configurations align with strict data minimization principles. We do not load Google Analytics cookies, Facebook pixel tags, or programmatic ad platform trackers on our global or Chinese page sub-routes. Your visitor activity remains entirely private and untracked, ensuring high-speed catalog performance.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">4. How to Manage Cookies</h2>
              <p>
                You can configure, block, or delete cookies at any time through your browser settings. Be advised that blocking essential cookies will make it impossible to submit pricing sheets and sample specifications through our online forms. To disable cookies:
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
                We may periodically update our technical cookie usage as we refine B2B form encryptions. Any updates will be reflected on this page with an adjusted effective date.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">6. Contact Data Compliance</h2>
              <p>
                If you have questions regarding our essential cookie usage or data security layers, please reach our compliance team:
              </p>
              <div className="bg-industry-slate-950 p-6 rounded border border-industry-slate-800 font-mono text-xs text-industry-slate-400 space-y-2">
                <div><span className="text-white font-bold">Office:</span> Scottchen Tool Accessories Ltd.</div>
                <div><span className="text-white font-bold">Address:</span> No. 88 Industry Ring Road, Shanghai, 200120, China</div>
                <div><span className="text-white font-bold">Email:</span> <a href="mailto:sales@scottchentools.com" className="text-industry-orange hover:underline">sales@scottchentools.com</a></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
