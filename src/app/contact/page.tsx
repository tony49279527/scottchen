import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import RFQForm from "@/components/RFQForm";
import { createPageMetadata } from "@/lib/seo";
import {
  absoluteUrl,
  RETAIL_SITE_URL,
  SITE_EMAIL,
  SITE_NAME,
  SITE_UPDATED,
} from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Request an OEM / Wholesale Quote | SCOTTCHEN",
  description: "Contact SCOTTCHEN to request pricing sheets, manufacturing timelines, packaging dielines, and bulk shipping container options for surface finishing tools.",
  path: "/contact",
  alternatePath: "/zh/contact",
});

const rfqSpecificationItems = [
  "Product category and target application",
  "Wheel diameter, ply count, arbor hole or shank sizing",
  "Abrasive grain, grit list, backing material and assortment ratio",
  "Private-label packaging format, dieline, barcode and carton mark requirements",
  "Target quantity, destination market, Incoterms rule and preferred shipment plan",
] as const;

export default function Contact() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": absoluteUrl("/contact#contactpage"),
        url: absoluteUrl("/contact"),
        name: "Request an OEM / Wholesale Quote | SCOTTCHEN",
        description:
          "B2B RFQ page for OEM abrasive, sanding and polishing accessory kits, private-label packaging and wholesale sourcing requests.",
        inLanguage: "en",
        dateModified: SITE_UPDATED,
        isPartOf: { "@id": absoluteUrl("/#website") },
        about: { "@id": absoluteUrl("/#organization") },
        mainEntity: { "@id": absoluteUrl("/#organization") },
      },
      {
        "@type": "Organization",
        "@id": absoluteUrl("/#organization"),
        name: SITE_NAME,
        url: absoluteUrl("/"),
        email: SITE_EMAIL,
        sameAs: [RETAIL_SITE_URL],
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: SITE_EMAIL,
            contactType: "B2B sales and OEM quotation",
            availableLanguage: ["English", "Chinese"],
            areaServed: "Worldwide",
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/contact#rfq-specification-checklist"),
        name: "RFQ specification details requested by SCOTTCHEN",
        itemListElement: rfqSpecificationItems.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item,
        })),
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />
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
                  Our team reviews B2B specifications and typically emails product options, packaging suggestions, and next steps within <strong>one business day</strong>.
                </p>
                <div className="text-xs font-mono text-industry-orange">
                  Target response time: within 1 business day
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Verified Contact Routes
                </h3>
                
                <div className="space-y-4 text-xs font-mono text-industry-slate-400">
                  <div>
                    <span className="text-industry-slate-500 block uppercase">Business Email:</span>
                    <a href="mailto:sales@scottchentools.com" className="text-white font-bold hover:underline">
                      sales@scottchentools.com
                    </a>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block uppercase">Existing Product Store:</span>
                    <a href="https://scottchen.online" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:underline">
                      scottchen.online &rarr;
                    </a>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block uppercase">Files After Submission:</span>
                    <span className="text-white font-bold leading-normal">
                      Reply by email with drawings, artwork, barcode files, or specification sheets.
                    </span>
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
                  {rfqSpecificationItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
