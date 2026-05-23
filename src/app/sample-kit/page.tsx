import type { Metadata } from "next";
import SampleKitForm from "@/components/SampleKitForm";

export const metadata: Metadata = {
  title: "Request a Surface Finishing Sample Kit | SCOTTCHEN",
  description: "Request a free surface finishing sample kit for your tool brand, hardware distribution channel, or online retail store to evaluate quality, ply count, and grits.",
  alternates: {
    canonical: "https://www.scottchentools.com/sample-kit",
    languages: {
      "en": "https://www.scottchentools.com/sample-kit",
      "zh-CN": "https://www.scottchentools.com/zh/sample-kit",
      "x-default": "https://www.scottchentools.com/sample-kit",
    },
  },
};

export default function SampleKit() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">PRODUCT EVALUATION</span>
          <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
            Request a Surface Finishing Sample Kit
          </h1>
          <p className="mt-4 text-base text-industry-slate-400 max-w-2xl mx-auto leading-relaxed">
            Evaluate our stitching density, backing paper tear strength, and grit calibrations before placing bulk container orders.
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
                    <span className="text-industry-slate-200"><strong>Free Tools for Businesses:</strong> Polishing wheels, sandpaper grits, and mini detail stick samples provided free to verified buyers.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Freight Deduction Policy:</strong> International shipping handled via DHL/FedEx/UPS; freight costs fully credited on the first bulk contract.</span>
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
                    <span className="text-industry-slate-200"><strong>Rapid Processing:</strong> Standard sample configurations packed in 3-5 days. Custom package mockups with barcodes take 7-10 days.</span>
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
                  src="/images/sample_kit.png"
                  alt="SCOTTCHEN Sample Testing Kit Box"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Sample Sourcing FAQs
                </h3>
                
                <div className="space-y-4 text-xs">
                  <div>
                    <h4 className="font-bold text-white uppercase">Is the sample kit free?</h4>
                    <p className="text-industry-slate-400 mt-1 leading-relaxed">
                      Yes, the abrasive, sanding, and buffing wheel components are free for verified businesses (distributors, online sellers, tool brands).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase">How is shipping handled?</h4>
                    <p className="text-industry-slate-400 mt-1 leading-relaxed">
                      We ship samples internationally via DHL, FedEx, or UPS. Sourcing buyers are responsible for courier freight charges, which are deducted from the first bulk contract.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase">Can I request specific grits?</h4>
                    <p className="text-industry-slate-400 mt-1 leading-relaxed">
                      Absolutely. Please list your exact sizing (diameters, shanks), stitch specifications, grit selections, and backing papers in the message field.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase">How long does it take?</h4>
                    <p className="text-industry-slate-400 mt-1 leading-relaxed">
                      Standard sample configurations are packed and dispatched within 3-5 working days. Custom packaging mockups require 7-10 days.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Verification Criteria
                </h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  To prevent retail consumer abuse, sample kit requests require a valid business name, website, and commercial email address. We review all applications within 24 hours.
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
                q: "Who is eligible to receive a free surface finishing sample kit?",
                a: "Abrasive, sanding, and buffing wheel samples are provided free of charge to verified commercial entities, including tool brand manufacturers, hardware catalog distributors, online retail sellers, and industrial detailing supply chains."
              },
              {
                q: "How are international shipping and courier freight charges handled for samples?",
                a: "We ship sample kits globally using DHL, FedEx, UPS, or TNT. The recipient covers the courier shipping charges. However, we credit 100% of these shipping expenses back to you upon signing your first bulk container contract."
              },
              {
                q: "Can I request custom wheel plies, shank shapes, or sanding grits in my sample pack?",
                a: "Yes. Please specify your desired dimensions (e.g., 6-inch 40 Ply cotton wheel, 1/4\" hex shank Adaptor, drywall mesh screens from P80 to P240) in the contact form, and our technicians will configure the kit accordingly."
              },
              {
                q: "What is the typical transit and processing time for sample delivery?",
                a: "Standard stock components are cataloged and shipped within 3 to 5 business days. Custom configurations or physical packaging mockups featuring your brand artwork require 7 to 10 working days for structural setup and printing."
              },
              {
                q: "Can we request branded box and barcode label mockups alongside the physical tools?",
                a: "Yes. Sourcing buyers can upload their logo and barcode artwork. We will print high-resolution sample packaging mockups, apply the FNSKU/UPC barcodes, and ship them so you can verify print contrast and scan readability before production."
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://www.scottchentools.com/sample-kit#faqpage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Who is eligible to receive a free surface finishing sample kit?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Abrasive, sanding, and buffing wheel samples are provided free of charge to verified commercial entities, including tool brand manufacturers, hardware catalog distributors, online retail sellers, and industrial detailing supply chains."
                }
              },
              {
                "@type": "Question",
                "name": "How are international shipping and courier freight charges handled for samples?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We ship sample kits globally using DHL, FedEx, UPS, or TNT. The recipient covers the courier shipping charges. However, we credit 100% of these shipping expenses back to you upon signing your first bulk container contract."
                }
              },
              {
                "@type": "Question",
                "name": "Can I request custom wheel plies, shank shapes, or sanding grits in my sample pack?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Please specify your desired dimensions (e.g., 6-inch 40 Ply cotton wheel, 1/4\" hex shank Adaptor, drywall mesh screens from P80 to P240) in the contact form, and our technicians will configure the kit accordingly."
                }
              },
              {
                "@type": "Question",
                "name": "What is the typical transit and processing time for sample delivery?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Standard stock components are cataloged and shipped within 3 to 5 business days. Custom configurations or physical packaging mockups featuring your brand artwork require 7 to 10 working days for structural setup and printing."
                }
              },
              {
                "@type": "Question",
                "name": "Can we request branded box and barcode label mockups alongside the physical tools?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Sourcing buyers can upload their logo and barcode artwork. We will print high-resolution sample packaging mockups, apply the FNSKU/UPC barcodes, and ship them so you can verify print contrast and scan readability before production."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
