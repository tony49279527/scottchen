import type { Metadata } from "next";
import RFQForm from "@/components/RFQForm";

export const metadata: Metadata = {
  title: "Request an OEM / Wholesale Quote | SCOTTCHEN",
  description: "Contact SCOTTCHEN to request pricing sheets, manufacturing timelines, packaging dielines, and bulk shipping container options for surface finishing tools.",
  alternates: {
    canonical: "https://www.scottchentools.com/contact",
  },
};

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">B2B INQUIRY PORTAL</span>
          <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
            Request an OEM / Wholesale Quote
          </h1>
          <p className="mt-4 text-base text-industry-slate-400 max-w-2xl mx-auto leading-relaxed">
            Ready to integrate custom abrasive kits or private label buffing wheels into your product line? Submit your specification requirements below.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 bg-industry-slate-900 flex-grow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Form column */}
            <div className="lg:col-span-8">
              <RFQForm />
            </div>

            {/* Right Information Column */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Quote Response Time
                </h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  Our supply chain sales team reviews B2B specifications and will email product options, packaging suggestions, and price sheets within <strong>24 business hours</strong>.
                </p>
                <div className="text-xs font-mono text-industry-orange">
                  Response SLA: &lt; 24h guaranteed
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Direct Contact Info
                </h3>
                
                <div className="space-y-4 text-xs font-mono text-industry-slate-400">
                  <div>
                    <span className="text-industry-slate-500 block uppercase">Sales Office Address:</span>
                    <span className="text-white font-bold leading-normal">
                      Scottchen Tool Accessories Ltd.<br />
                      No. 88 Industry Ring Road, Shanghai, China
                    </span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block uppercase">Business Email:</span>
                    <a href="mailto:sales@scottchentools.com" className="text-white font-bold hover:underline">
                      sales@scottchentools.com
                    </a>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block uppercase">Supply Chain Hub:</span>
                    <a href="https://www.linkedin.com/company/scottchen-tools" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:underline">
                      linkedin.com/company/scottchen-tools &rarr;
                    </a>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block uppercase">Direct Inquiry Phone / WhatsApp:</span>
                    <a href="tel:+862161002008" className="text-white font-bold hover:underline">
                      +86-21-6100-2008
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Sourcing Specifications Checklist
                </h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  To speed up quote generation, please specify:
                </p>
                <ul className="space-y-1.5 text-xs text-industry-slate-400 pl-4 list-disc font-mono">
                  <li>Exact wheel diameters & ply count</li>
                  <li>Arbor hole center bore sizing</li>
                  <li>Sandpaper grit list and backing</li>
                  <li>Dieline requirements for color boxes</li>
                  <li>Estimated shipment volumes</li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
