import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Manufacturing Quality Control Standards | SCOTTCHEN",
  description: "Learn about our systematic testing for abrasive tools: ply density checks, stitch tensile tests, arbor hole sizing tolerance verification, and barcode print validation.",
  path: "/quality-control",
  alternatePath: "/zh/quality-control",
});

export default function QualityControl() {
  const qcPoints = [
    {
      title: "1. Raw Material Verification",
      desc: "For cotton buffing wheels, we inspect declared yarn grades and construction. For sandpapers, we verify backing weight parameters (C-weight, J-weight, and waterproof latex) against the approved specification.",
    },
    {
      title: "2. Cotton Wheel Ply & Density Audits",
      desc: "Cotton wheels are sold by ply count. A wheel with lower density or fewer plies can compress under pressure and reduce polishing efficiency. Agreed 30, 40, 50, or 60 ply targets can be checked using the approved sampling plan.",
    },
    {
      title: "3. Stitching Tensile Strength Testing",
      desc: "Concentric spiral stitching locks cotton layers together. Stitching construction, thread condition, and any agreed tensile requirement are checked against the approved specification and reference sample.",
    },
    {
      title: "4. Arbor Hole Bore Sizing Tolerance",
      desc: "A loose or off-center arbor hole can cause wheel wobble, uneven wear, and spindle stress. Bore dimensions and fit criteria are checked against the approved SKU drawing and reference sample.",
    },
    {
      title: "5. Grit Calibration & Uniformity",
      desc: "Oversized abrasive grains can leave deep scratches on furniture or metal surfaces. Grit identity and surface distribution can be checked using the agreed test method and acceptance criteria.",
    },
    {
      title: "6. Disc Dynamic Balance Verification",
      desc: "High-speed abrasive accessories require clear labeled operating limits and suitable inspection criteria. Where applicable, the agreed quality plan can include runout or balance checks using a defined fixture and sampling method.",
    },
    {
      title: "7. Adhesion & Resin Backing Checks",
      desc: "Backing flexibility and abrasive adhesion can be sampled using an agreed bend, peel, or application check. Acceptance criteria are recorded in the SKU quality plan.",
    },
    {
      title: "8. Barcode Scanner Audits",
      desc: "For online sellers sending batches to Amazon FBA, barcode readability is an important release check. FNSKU or UPC labels can be scan-checked before shipment; final acceptance remains subject to the platform's current rules.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header (Top CTA) */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">TRUST & VERIFICATION</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              Manufacturing Quality Control & Standards
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              We execute batch-level checks on arbor tolerances, stitching strength, grit uniformity, and barcode readability.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/contact"
              className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-orange-hover hover:scale-[1.02] text-center"
            >
              Request Specs Audit
            </Link>
            <Link
              href="/sample-kit"
              className="inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-slate-750 text-center"
            >
              Order Quality Samples
            </Link>
          </div>
        </div>
      </section>

      {/* Key Takeaways / B2B Quick Facts */}
      <section className="py-8 bg-industry-slate-900 border-b border-industry-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-industry-slate-800 bg-industry-slate-950/40 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="md:w-1/3">
                <span className="text-[10px] font-mono font-bold tracking-widest text-industry-orange uppercase">B2B QUICK TAKEAWAYS</span>
                <h2 className="text-2xl font-black text-white mt-1">Quality Inspection Standards</h2>
                <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">
                  Rigorous manufacturing verification, dimensional tolerances, and ecommerce labeling QA.
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Dimensional Inspection:</strong> Center bore, outer diameter, thickness, and fit criteria are checked against the approved drawing and reference sample.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Applicable Performance Checks:</strong> Runout, balance, fit, or speed-related tests are defined per SKU and recorded in the agreed quality plan.</span>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Grit Calibration:</strong> Optical checks prevent grain contamination in sandpaper, ensuring scratch-free finishes on high-gloss jobs.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Labeling & Audit Support:</strong> Barcode scanners test print contrast of retail/FBA stickers. Third-party testing companies (SGS, TUV) welcomed.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QC Detail Sections */}
      <section className="py-16 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content column */}
            <div className="lg:col-span-8 space-y-8">
              <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                Batch Quality Checks
              </h2>

              <div className="grid grid-cols-1 gap-6">
                {qcPoints.map((point) => (
                  <div key={point.title} className="glass-panel p-6 rounded-lg space-y-3">
                    <h3 className="text-base font-bold text-industry-orange">{point.title}</h3>
                    <div className="text-sm text-industry-slate-350 leading-relaxed">
                      {point.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Whitepaper Section */}
              <div className="glass-panel p-8 rounded-lg space-y-6 bg-industry-slate-950/40 border border-industry-slate-800">
                <span className="text-xs font-bold font-mono tracking-widest text-industry-orange uppercase">INSPECTION PLAN</span>
                <h3 className="text-xl font-extrabold text-white">
                  Specification, Test Method, and Release Record
                </h3>
                <p className="text-sm text-industry-slate-300 leading-relaxed">
                  Different abrasive accessories require different acceptance methods. Before production, the buyer and supplier should confirm the applicable dimensions, operating limits, sampling level, test method, and evidence required for each SKU.
                </p>
                <div className="space-y-4 text-xs text-industry-slate-400 font-mono">
                  <div className="border-l-2 border-industry-orange pl-3 space-y-1">
                    <strong className="text-white">1. Approved Specification and Reference Sample</strong>
                    <p className="leading-relaxed">
                      Record dimensions, materials, construction, tool compatibility, labeled operating limits, packaging, and any agreed tolerance. Keep an identified approval sample where practical.
                    </p>
                  </div>
                  <div className="border-l-2 border-industry-orange pl-3 space-y-1">
                    <strong className="text-white">2. Applicable Test Method</strong>
                    <p className="leading-relaxed">
                      Depending on the product, checks may include dimensions, fit, visible construction, runout, balance, backing adhesion, grit assortment, barcode readability, and pack-out verification.
                    </p>
                  </div>
                  <div className="border-l-2 border-industry-orange pl-3 space-y-1">
                    <strong className="text-white">3. Batch Traceability and Release</strong>
                    <p className="leading-relaxed">
                      Link inspection results to the lot, purchase order, approved artwork, and sampling record. Define how nonconforming product is contained, reviewed, and corrected before release.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Information Column */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="glass-panel rounded-lg overflow-hidden border border-industry-slate-800 shadow-xl relative">
                <img
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  src="/images/quality_inspection.webp"
                  alt="SCOTTCHEN Quality Control Inspection Rig"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Typical QC Fields
                </h3>
                <ul className="space-y-3 text-xs font-mono">
                  <li className="flex justify-between">
                    <span className="text-industry-slate-500">Dimensions & Fit:</span>
                    <span className="text-white font-bold">Approved drawing</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-industry-slate-500">Construction:</span>
                    <span className="text-white font-bold">Reference sample</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-industry-slate-500">Operating Limit:</span>
                    <span className="text-white font-bold">SKU label/spec</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-industry-slate-500">Barcode & Pack:</span>
                    <span className="text-white font-bold">Approved artwork</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-industry-slate-500">Sampling & Evidence:</span>
                    <span className="text-white font-bold">Agreed QC plan</span>
                  </li>
                </ul>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Pre-Shipment Inspections
                </h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  We support third-party inspection audits (SGS, V-Trust, etc.) before container loading at our factory warehouse. We provide internal inspection reports with every production batch shipment.
                </p>
                <p className="text-xs text-industry-orange font-mono font-bold">
                  Safety and consistency are non-negotiable for tool brands.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4 text-center">
                <h4 className="text-sm font-bold text-white uppercase">Verify our materials yourself</h4>
                <p className="text-xs text-industry-slate-400">
                  Request a physical sample kit to run stitch, density, and grit checks in your local testing facility.
                </p>
                <Link
                  href="/sample-kit"
                  className="w-full inline-flex justify-center items-center rounded bg-industry-orange py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover"
                >
                  Configure Test Sample
                </Link>
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
              Technical tolerance boundaries, material test reports, and quality checking methodologies.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How is the inner bore tolerance confirmed for polishing wheels?",
                a: "The bore dimension and tolerance are confirmed per SKU in the approved drawing or specification. The inspection method, gauge, and sampling level should be agreed before production."
              },
              {
                q: "How do you verify the density and ply count of cotton polishing wheels?",
                a: "The approved specification records ply count, construction, and relevant weight or thickness criteria. Production samples can then be checked against those agreed values and the retained reference sample."
              },
              {
                q: "Do you run speed tests on grinding and fiber discs to prevent safety failures?",
                a: "Speed-related checks depend on the product design, labeled operating limit, and applicable standard. The required test method, sampling frequency, and report should be confirmed in the quality plan before ordering."
              },
              {
                q: "How do you prevent grit contamination in sandpapers and polishing compounds?",
                a: "The quality plan can define material segregation, line-clearance, supplier-lot control, and surface inspection requirements. Fine finishing products should be evaluated against an approved sample on the intended substrate."
              },
              {
                q: "Can we hire third-party inspection firms to audit the shipment before loading?",
                a: "Third-party pre-shipment inspection can be discussed during quotation. The buyer should confirm the inspection company, scope, timing, access requirements, and responsibility for inspection fees in writing."
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
            "@id": "https://www.scottchentools.com/quality-control#faqpage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How is the inner bore tolerance confirmed for polishing wheels?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The bore dimension and tolerance are confirmed per SKU in the approved drawing or specification. The inspection method, gauge, and sampling level should be agreed before production."
                }
              },
              {
                "@type": "Question",
                "name": "How do you verify the density and ply count of cotton polishing wheels?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The approved specification records ply count, construction, and relevant weight or thickness criteria. Production samples can then be checked against those agreed values and the retained reference sample."
                }
              },
              {
                "@type": "Question",
                "name": "Do you run speed tests on grinding and fiber discs to prevent safety failures?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Speed-related checks depend on the product design, labeled operating limit, and applicable standard. The required test method, sampling frequency, and report should be confirmed in the quality plan before ordering."
                }
              },
              {
                "@type": "Question",
                "name": "How do you prevent grit contamination in sandpapers and polishing compounds?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The quality plan can define material segregation, line-clearance, supplier-lot control, and surface inspection requirements. Fine finishing products should be evaluated against an approved sample on the intended substrate."
                }
              },
              {
                "@type": "Question",
                "name": "Can we hire third-party inspection firms to audit the shipment before loading?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Third-party pre-shipment inspection can be discussed during quotation. The buyer should confirm the inspection company, scope, timing, access requirements, and responsibility for inspection fees in writing."
                }
              }
            ]
          })
        }}
      />

      {/* Persistent CTA Banner */}
      <CTASection />
    </div>
  );
}
