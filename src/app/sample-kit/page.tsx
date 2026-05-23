import type { Metadata } from "next";
import SampleKitForm from "@/components/SampleKitForm";

export const metadata: Metadata = {
  title: "Request a Surface Finishing Sample Kit | SCOTTCHEN",
  description: "Request a free surface finishing sample kit for your tool brand, hardware distribution channel, or online retail store to evaluate quality, ply count, and grits.",
  alternates: {
    canonical: "https://www.scottchentools.com/sample-kit",
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
    </div>
  );
}
