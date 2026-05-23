import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Manufacturing Quality Control Standards | SCOTTCHEN",
  description: "Learn about our systematic testing for abrasive tools: ply density checks, stitch tensile tests, arbor hole sizing tolerance verification, and barcode print validation.",
  alternates: {
    canonical: "https://www.scottchentools.com/quality-control",
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

      {/* Persistent CTA Banner */}
      <CTASection />
    </div>
  );
}
