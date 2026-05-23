import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Manufacturing Quality Control Standards | SCOTTCHEN",
  description: "Learn about our systematic testing for abrasive tools: ply density checks, stitch tensile tests, arbor hole sizing tolerance verification, and barcode print validation.",
  alternates: {
    canonical: "https://www.scottchentools.com/quality-control",
    languages: {
      "en": "https://www.scottchentools.com/quality-control",
      "zh-CN": "https://www.scottchentools.com/zh/quality-control",
      "x-default": "https://www.scottchentools.com/quality-control",
    },
  },
};

export default function QualityControl() {
  const qcPoints = [
    {
      title: "1. Raw Material Verification",
      desc: "For cotton buffing wheels, we inspect yarn grades to ensure they are 100% carded natural cotton fibers, free from synthetic blends that melt under high-speed grinding. For sandpapers, we verify backing weight parameters (C-weight, J-weight, and waterproof latex) to guarantee flexibility without tearing.",
    },
    {
      title: "2. Cotton Wheel Ply & Density Audits",
      desc: "Cotton wheels are sold by ply count. A wheel with lower density or fewer plies will compress under pressure, reducing polishing efficiency. We count plies systematically: 30 Ply, 40 Ply, 50 Ply, or 60 Ply targets. We maintain density consistency across batch manufacturing runs.",
    },
    {
      title: "3. Stitching Tensile Strength Testing",
      desc: "Concentric spiral stitching locks cotton layers together. If threads snap, the wheel can fray or disintegrate at high RPMs, posing safety risks. We test stitching threads under a tensile load tester before manufacturing runs.",
    },
    {
      title: "4. Arbor Hole Bore Sizing Tolerance",
      desc: "A loose arbor hole causes wheel wobbling on bench grinders, leading to vibration, uneven wear, and dangerous spindle stress. We check inner diameters to ensure they fit a &plusmn; 0.05 mm tolerance scope. Adapters and metal plates must fit flush.",
    },
    {
      title: "5. Grit Calibration & Uniformity",
      desc: "A single oversized abrasive grain in a P400 grit sheet will leave deep scratches on furniture or metal surfaces, ruining final coatings. We verify sandpaper grit distribution under optical microscope checks to ensure uniformity.",
    },
    {
      title: "6. Disc Dynamic Balance Verification",
      desc: "Angle grinder zirconia fiber discs operate at up to 13,000 RPM. Out-of-balance discs cause extreme vibration, hand fatigue, and grinder motor damage. Random batch discs are tested on dynamic balancing spinner spindles.",
    },
    {
      title: "7. Adhesion & Resin Backing Checks",
      desc: "We perform flex adhesion tests on sandpapers and grinding discs. If the adhesive binder is weak, grains will shed (de-grit) instantly upon contact with workpieces, rendering the tool useless.",
    },
    {
      title: "8. Barcode Scanner Audits",
      desc: "For online sellers sending batches to Amazon FBA, an unreadable FNSKU barcode sticker triggers inventory blockages. We audit barcode print quality using scanner checking rigs to verify clarity, contrast, and alignment before loading export containers.",
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
                    <span className="text-industry-slate-200"><strong>Precision Machined Arbors:</strong> Center bore sizing limits kept strictly within a &plusmn;0.05 mm range to prevent dangerous spindle vibration.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Dynamic Balance Checks:</strong> Grinding discs and drill arbors tested at 1.5x operating speed for dynamic stability and user safety.</span>
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
                <span className="text-xs font-bold font-mono tracking-widest text-industry-orange uppercase">TECHNICAL WHITE PAPER</span>
                <h3 className="text-xl font-extrabold text-white">
                  Industrial Code: Dynamic Balancing Calibration & Safety Tolerance for High-Speed Abrasives
                </h3>
                <p className="text-sm text-industry-slate-300 leading-relaxed">
                  In high-performance industrial surfacing applications, abrasive accessories operate at high rotational velocities, generating severe centrifugal stress. Dynamic balancing is critical to eliminate operational vibrations and protect spindles under ISO 1940-1 Standards.
                </p>
                <div className="space-y-4 text-xs text-industry-slate-400 font-mono">
                  <div className="border-l-2 border-industry-orange pl-3 space-y-1">
                    <strong className="text-white">1. ISO 1940-1 Balancing Grade (Target: G6.3 / G2.5)</strong>
                    <p className="leading-relaxed">
                      All zirconia fiber discs and concentrated center-plate cotton wheels undergo rigid dynamic balancing testing. Our testing rig calibrates residual unbalance under a target limits grade of G6.3 to prevent spindle bearings from fatigue-induced breakdown.
                    </p>
                  </div>
                  <div className="border-l-2 border-industry-orange pl-3 space-y-1">
                    <strong className="text-white">2. Centripetal Force Coefficients & Safety Factor</strong>
                    <p className="leading-relaxed">
                      Calculated under centripetal stress limit formulas (sigma = rho * omega^2 * r^2), the adhesive binder and core stitching threads must handle up to 1.5 times the maximum rated RPM without fracturing, keeping grain displacement rates below 0.02%.
                    </p>
                  </div>
                  <div className="border-l-2 border-industry-orange pl-3 space-y-1">
                    <strong className="text-white">3. Concentricity and Sizing Tolerance Parameters</strong>
                    <p className="leading-relaxed">
                      Our manufacturing limits keep the inner bore diameters at a &plusmn;0.05 mm concentricity tolerance to ensure precise seating on standard tool arbor shafts. This eliminates radial runout, preventing operational chattering.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Information Column */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="glass-panel rounded-lg overflow-hidden border border-industry-slate-800 shadow-xl relative">
                <img
                  src="/images/quality_inspection.png"
                  alt="SCOTTCHEN Quality Control Inspection Rig"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Tolerance Limits
                </h3>
                <ul className="space-y-3 text-xs font-mono">
                  <li className="flex justify-between">
                    <span className="text-industry-slate-500">Arbor Hole Diameter:</span>
                    <span className="text-white font-bold">&plusmn; 0.05 mm</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-industry-slate-500">Outer Dia Tolerance:</span>
                    <span className="text-white font-bold">&plusmn; 1.0 mm</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-industry-slate-500">Grit Size Accuracy:</span>
                    <span className="text-white font-bold">99% Uniformity</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-industry-slate-500">Stitch ring offset:</span>
                    <span className="text-white font-bold">&plusmn; 0.5 mm</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-industry-slate-500">Max Operating RPM:</span>
                    <span className="text-white font-bold">Tested at 1.5x rating</span>
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
                q: "What is your standard inner bore diameter tolerance on polishing wheels?",
                a: "We maintain a strict &plusmn;0.05 mm center-hole tolerance limit for all industrial and retail wheels. This ensures a flush, tight fit on bench grinder shafts or drill adapters, eliminating rotational wobbling and minimizing friction vibration at high operating speeds."
              },
              {
                q: "How do you verify the density and ply count of cotton polishing wheels?",
                a: "Each production run undergoes structural weight and ply count verification. Plies are counted manually and double-checked against dynamic width guidelines under compression. This ensures the wheels meet the exact catalog thickness (e.g., 30 Ply, 40 Ply, 50 Ply) without hollow spacing."
              },
              {
                q: "Do you run speed tests on grinding and fiber discs to prevent safety failures?",
                a: "Yes. All zirconia grinding and fiber discs are subjected to rotational stress checking. We randomly test production batches at 1.5 times the maximum rated RPM to verify safety parameters and check that grain-bonding resin does not crack under heat."
              },
              {
                q: "How do you prevent grit contamination in sandpapers and polishing compounds?",
                a: "We maintain isolated milling and mixing environments for coarse and fine grit materials. Raw silicon carbide and aluminum oxide grains are optically filtered. We inspect grit surfaces under magnification to confirm that zero larger grains compromise fine polishing batches."
              },
              {
                q: "Can we hire third-party inspection firms to audit the shipment before loading?",
                a: "Absolutely. Sourcing managers can schedule SGS, TUV, V-Trust, or any certified local testing agent to inspect inventory in our warehouses. We provide access to checking equipment and provide full internal test logs with every shipment."
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
                "name": "What is your standard inner bore diameter tolerance on polishing wheels?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We maintain a strict &plusmn;0.05 mm center-hole tolerance limit for all industrial and retail wheels. This ensures a flush, tight fit on bench grinder shafts or drill adapters, eliminating rotational wobbling and minimizing friction vibration at high operating speeds."
                }
              },
              {
                "@type": "Question",
                "name": "How do you verify the density and ply count of cotton polishing wheels?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Each production run undergoes structural weight and ply count verification. Plies are counted manually and double-checked against dynamic width guidelines under compression. This ensures the wheels meet the exact catalog thickness (e.g., 30 Ply, 40 Ply, 50 Ply) without hollow spacing."
                }
              },
              {
                "@type": "Question",
                "name": "Do you run speed tests on grinding and fiber discs to prevent safety failures?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. All zirconia grinding and fiber discs are subjected to rotational stress checking. We randomly test production batches at 1.5 times the maximum rated RPM to verify safety parameters and check that grain-bonding resin does not crack under heat."
                }
              },
              {
                "@type": "Question",
                "name": "How do you prevent grit contamination in sandpapers and polishing compounds?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We maintain isolated milling and mixing environments for coarse and fine grit materials. Raw silicon carbide and aluminum oxide grains are optically filtered. We inspect grit surfaces under magnification to confirm that zero larger grains compromise fine polishing batches."
                }
              },
              {
                "@type": "Question",
                "name": "Can we hire third-party inspection firms to audit the shipment before loading?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. Sourcing managers can schedule SGS, TUV, V-Trust, or any certified local testing agent to inspect inventory in our warehouses. We provide access to checking equipment and provide full internal test logs with every shipment."
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
