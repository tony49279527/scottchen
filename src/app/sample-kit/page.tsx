import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SampleKitForm from "@/components/SampleKitForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Request a Surface Finishing Sample Kit | SCOTTCHEN",
  description: "Request a surface finishing sample kit for your tool brand, hardware distribution channel, or online retail store to evaluate quality, ply count, and grits.",
  path: "/sample-kit",
  alternatePath: "/zh/sample-kit",
});

export default function SampleKit() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Sample Kit", href: "/sample-kit" }]} />
          <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">PRODUCT EVALUATION</span>
          <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
            Request a Surface Finishing Sample Kit
          </h1>
          <p className="mt-4 text-base text-industry-slate-400 max-w-2xl mx-auto leading-relaxed">
            Request source-identified samples and define checks for construction, backing, grit marking, fit and the intended workpiece before approving a bulk order.
          </p>
        </div>
      </section>

      {/* Key Takeaways / B2B Quick Facts */}
      <section className="py-8 bg-industry-slate-900 border-b border-industry-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-industry-slate-800 bg-industry-slate-950/40 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="md:w-1/3">
                <span className="text-[10px] font-mono font-bold tracking-widest text-industry-orange uppercase">B2B QUICK TAKEAWAYS</span>
                <h2 className="text-2xl font-black text-white mt-1">Sample Evaluation</h2>
                <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">
                  Verification criteria, shipping rules, and custom specification requests for sample kits.
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Commercial Sample Review:</strong> Availability and charges are confirmed after the requested products, quantities, and packaging scope are reviewed.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Sample & Freight Terms:</strong> Any sample, courier, or qualifying order-credit terms are confirmed in writing before dispatch.</span>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Fully Configurable:</strong> Sourcing agents can specify exact wheel ply, backing paper weight, grit selection, or shank adapter type.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Written Sample Plan:</strong> Processing time is quoted after stock, custom specification, artwork, and courier requirements are reviewed.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form content and instructions */}
      <section className="py-16 bg-industry-slate-900 flex-grow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Interactive Form */}
            <div className="lg:col-span-8">
              <SampleKitForm />
            </div>

            {/* Right: Sourcing guidelines */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="glass-panel rounded-lg overflow-hidden border border-industry-slate-800 shadow-xl relative">
                <img
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  src="/images/sample_kit.webp"
                  alt="Illustrative surface-finishing sample-kit concept"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-3 right-3 text-[10px] text-industry-slate-300">
                  Illustrative concept — not a shipped sample or customer order
                </span>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Sample Sourcing FAQs
                </h3>
                
                <div className="space-y-4 text-xs">
                  <div>
                    <h4 className="font-bold text-white uppercase">How are sample charges confirmed?</h4>
                    <p className="text-industry-slate-400 mt-1 leading-relaxed">
                      Charges depend on the products, quantities, custom specifications, and packaging requested. We confirm sample and courier terms in writing before dispatch.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase">How is shipping handled?</h4>
                    <p className="text-industry-slate-400 mt-1 leading-relaxed">
                      Courier route, dispatch party, freight charge, collect or prepaid method, customs responsibility and any later credit are confirmed in writing before dispatch.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase">Can I request specific grits?</h4>
                    <p className="text-industry-slate-400 mt-1 leading-relaxed">
                      Yes. Please list your exact sizing (diameters, shanks), stitch specifications, grit selections, and backing papers in the message field.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase">How long does it take?</h4>
                    <p className="text-industry-slate-400 mt-1 leading-relaxed">
                      Timing is quoted after stock availability, custom work, artwork, and courier destination are reviewed. The written sample plan controls the dispatch target.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Verification Criteria
                </h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  Sample requests require a valid business name, website or store URL and contact email. Review timing, sample feasibility, charges and dispatch details are confirmed after the requested configuration is assessed.
                </p>
                <div className="bg-industry-slate-950 p-3 rounded border border-industry-slate-800 text-[10px] font-mono text-industry-orange">
                  Commercial channels verified: Tool Brands, Distributors, Online Store Owners, Detailing Suppliers.
                </div>
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
              Courier shipping rules, custom grit requests, validation criteria, and packaging mockup parameters.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Who can request a commercial surface finishing sample kit?",
                a: "Sample requests are reviewed for commercial buyers, including tool brands, hardware distributors, online sellers, and industrial supply channels. Availability and any sample charge depend on the requested configuration."
              },
              {
                q: "How are international shipping and courier freight charges handled for samples?",
                a: "Courier route, dispatch party, freight charge, collect or prepaid method, customs responsibility and any later credit are confirmed in writing before dispatch."
              },
              {
                q: "Can I request custom wheel plies, shank shapes, or sanding grits in my sample pack?",
                a: "List the desired dimensions, construction, shank and grit in the request. The written sample plan must confirm the responsible source, feasibility, exact contents, evidence, charges and dispatch target; the site does not promise a particular physical sample."
              },
              {
                q: "What is the typical transit and processing time for sample delivery?",
                a: "Processing and transit timing is quoted after stock availability, custom work, artwork, and courier destination are reviewed. The written sample plan controls the dispatch target."
              },
              {
                q: "Can we request branded box and barcode label mockups alongside the physical tools?",
                a: "A packaging or barcode mockup can be requested, but the written sample plan must state whether it is feasible, who supplies the dieline and artwork, which buyer data may be used, the sample and scan method, fees and retained record. No mockup is guaranteed by this page."
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

    </div>
  );
}
