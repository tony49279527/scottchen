import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { buildFaqPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Cutting Disc & Cut-Off Wheel Manufacturer | SCOTTCHEN",
  description: "China OEM cut-off wheel sourcing for metal and stainless steel in 4.5 to 9 inch sizes. Compare specifications, safety documents, samples and quoted MOQ.",
  path: "/cutting-wheels",
  alternatePath: "/zh/cutting-wheels",
});

export default function CuttingWheelsPage() {
  const subtypes = [
    {
      name: "Metal Cutting-Off Wheels (Type 1 / Type 41)",
      desc: "Flat Type 1 (Type 41) straight cutting wheels designed for general-purpose metal cutting on angle grinders and chop saws. These thin bonded abrasive wheels cut carbon steel, structural steel, angle iron, sheet metal, and solid bar stock quickly and efficiently. Type 1 flat profile wheels provide a straight, clean cut with minimum burr formation and are the standard choice for metal fabrication, construction, steel erection, and general industrial metal cutting.",
      features: ["Flat Type 1/Type 41 profile for straight cutting", "Thickness: 1.0mm to 3.2mm depending on diameter", "Aluminum oxide or premium A/O blend grain", "2-fiberglass reinforcement for burst safety"],
    },
    {
      name: "Stainless Steel (INOX) Cutting Discs",
      desc: "Specially formulated contaminant-free cutting discs for stainless steel and high-alloy metals that require Fe+S+Cl content below 0.1% to prevent after-corrosion and weld contamination. INOX cutting discs use high-purity white aluminum oxide or specialty aluminum oxide-silicon carbide blends without iron, sulfur, or chlorine fillers that can cause rust contamination on stainless steel cut edges. These discs are essential for food processing equipment, chemical processing, pharmaceutical, and architectural stainless applications.",
      features: ["Contaminant-free: Fe + S + Cl less than 0.1%", "High-purity white A/O or A/O+SiC blend grain", "No after-rust or heat discoloration on stainless", "Thin kerf for fast, cool cutting on INOX materials"],
    },
    {
      name: "Thin Cut-Off Wheels (1.0-1.6mm)",
      desc: "Ultra-thin cut-off wheels in 1.0mm, 1.2mm, and 1.6mm thickness for fast, precise cutting with minimal material loss and reduced burr formation. Thin cut-off wheels cut faster with less effort and less heat generation than thicker wheels, making them the preferred choice for sheet metal, thin-wall tube, exhaust pipe, and precision metal cutting applications. Available for both general metal and stainless steel (INOX) specifications.",
      features: ["Ultra-thin: 1.0mm, 1.2mm, 1.6mm thickness options", "Fast cutting with minimum kerf material loss", "Reduced heat buildup and workpiece discoloration", "Ideal for sheet metal, thin tube, exhaust, auto body"],
    },
    {
      name: "Depressed Center Cutting Wheels (Type 27)",
      desc: "Type 27 depressed-center cutting wheels feature a raised hub that provides spindle nut clearance while allowing both cutting and light grinding with the same wheel. The depressed center design gives the wheel additional rigidity and is compatible with standard Type 27 angle grinder guards. Type 27 cutting wheels are popular with welders and fabricators who need to switch between cutting and light grinding without changing wheels, though they do not replace dedicated grinding wheels for heavy stock removal.",
      features: ["Depressed center (Type 27) profile for grinder clearance", "Thickness: 2.5mm to 3.2mm for rigidity", "Suitable for both cutting and light grinding", "Available in metal-grade and INOX-grade formulations"],
    },
    {
      name: "Cast Iron & Foundry Cutting Wheels",
      desc: "Heavy-duty cutting wheels formulated with hard, durable silicon carbide or premium aluminum oxide grain blends for cutting cast iron, ductile iron, and foundry materials that quickly wear out standard cutting discs. These wheels use a harder bond matrix for longer life on dense, abrasive cast materials, and are reinforced with double fiberglass mesh for safety under high-torque cutting conditions found in foundries, casting cleaning operations, and heavy equipment repair.",
      features: ["Silicon carbide or premium A/O blend for cast iron", "Hard bond for extended life on dense cast materials", "Double fiberglass reinforcement for heavy loads", "Available in 4.5\" through 14\" diameters for industrial saws"],
    },
    {
      name: "Masonry & Stone Cutting Discs",
      desc: "Silicon carbide or specialty abrasive grain cutting wheels for cutting masonry materials including concrete, brick, block, stone, granite, and tile. Masonry cutting discs use a softer bond that allows the hard silicon carbide grain to fracture and expose fresh cutting edges when cutting hard, brittle mineral materials. Available as Type 1 flat wheels for chop saws and angle grinders in standard masonry diameters, as well as depressed center Type 27 profiles.",
      features: ["Silicon carbide grain for concrete, brick, stone", "C-type hard bond for mineral material cutting", "Available in 4.5\" through 14\" diameters", "Double fiberglass reinforcement for safety"],
    },
  ];

  const faqs = [
    {
      q: "What is the MOQ for wholesale cut-off wheel orders?",
      a: "MOQ is quoted per diameter, thickness, formulation, label and packaging format. Thin wheels, INOX formulations, printed labels and retail packs can have different setup quantities. Require the quotation to identify every MOQ assumption instead of applying one website number across all cut-off wheels.",
    },
    {
      q: "Which cutting-wheel safety documents should a buyer request?",
      a: "State the target market and applicable standard in the RFQ, then request the certificate or test report number, issuing body, covered product family, dimensions, validity and label requirements for the exact quoted SKU. Do not rely on a general website statement as evidence of EN12413, ANSI B7.1, MPA, oSa or any other market requirement.",
    },
    {
      q: "What sizes and thicknesses are available?",
      a: "We produce cutting discs in standard angle grinder and chop saw diameters: 4\" (100mm), 4.5\" (115mm), 5\" (125mm), 6\" (150mm), 7\" (180mm), 9\" (230mm), 12\" (300mm), and 14\" (355mm). Common arbor hole sizes are 7/8\" (22.23mm) for hand-held angle grinders and 1\" (25.4mm) or 20mm for chop saws. Disc thickness ranges from ultra-thin 1.0mm for precision sheet metal cutting to 3.2mm for heavy-duty general-purpose cutting, with 1.6mm being the most popular all-purpose thickness.",
    },
    {
      q: "Can I use metal cutting discs on stainless steel?",
      a: "Standard metal cutting discs may contain iron, sulfur, and chlorine fillers that can cause after-rust and contamination on stainless steel cut edges. For stainless steel applications, we recommend using our dedicated INOX-grade cutting discs, which are formulated with contaminant-free raw materials (Fe+S+Cl < 0.1%) to prevent corrosion and weld contamination. Using INOX-specific discs also reduces heat buildup and discoloration on stainless, producing cleaner cuts that require less post-cut finishing.",
    },
    {
      q: "How are cutting discs packaged for wholesale distribution?",
      a: "Packaging can be quoted as industrial cartons, shrink-wrapped bundles, color boxes, blister packs or storage tins. The buyer must provide current safety text, translations, barcode data and channel requirements; the final label and carton scope is controlled by the approved artwork rather than an assumed marketplace-compliance claim.",
    },
    {
      q: "What is the shelf life and storage recommendation for cutting wheels?",
      a: "Bonded abrasive cutting wheels have a recommended shelf life of 3 years from the manufacture date when stored properly in cool, dry conditions away from moisture, extreme temperatures, and chemical exposure. Fiberglass-reinforced resinoid wheels should be stored flat on a level surface, not standing on edge, to prevent warping. We print manufacture dates and recommended-use periods on each wheel label and recommend rotating stock on a first-in, first-out basis.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cutting Wheels", href: "/cutting-wheels" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">B2B Wholesale &amp; OEM</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              Cutting Disc Manufacturer &amp; Cut-Off Wheels Supplier
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              OEM cut-off wheel sourcing for metal, stainless steel (INOX), cast iron, and masonry applications. Confirm reinforcement, formulation, rated speed, safety documents, MOQ and inspection scope for the exact quoted SKU.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link href="/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-orange-hover hover:scale-[1.02] text-center">
              Request Quote
            </Link>
            <Link href="/sample-kit" className="inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-slate-750 text-center">
              Get Samples
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-industry-slate-900 border-b border-industry-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-industry-slate-800 bg-industry-slate-950/40">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">Per SKU</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">MOQ Quoted</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">Per Market</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Documents Checked</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">Fe+S+Cl&lt;0.1%</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">INOX Grade</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">2-Fiberglass</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Reinforced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-5">
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Why SCOTTCHEN</span>
                <h2 className="text-2xl font-extrabold text-white tracking-wide">
                  Cut-Off Wheel Specifications and Safety Evidence for B2B Buyers
                </h2>
                <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                  <p>
                    SCOTTCHEN has manufactured bonded abrasive cutting wheels and cut-off discs at our Shanghai production facility since 2014, supplying metal fabricators, welding distributors, construction suppliers, hardware chains, and industrial tool brands across North America, Europe, the Middle East, and Asia-Pacific. As a dedicated cutting disc manufacturer, we produce Type 1/Type 41 flat cutting wheels and Type 27 depressed-center cutting discs in a full range of sizes from 4-inch angle grinder discs to 14-inch chop saw wheels for metal, stainless steel (INOX), cast iron, and masonry applications.
                  </p>
                  <p>
                    Cutting wheel safety is non-negotiable, so the RFQ must name the applicable market standard, rated speed, guard and tool compatibility, reinforcement construction, label warnings and required test evidence. For INOX wheels, state the allowed iron, sulfur and chlorine limits and request test evidence for the quoted formulation. Approval should be based on applicable documents and representative samples, not generic marketing claims.
                  </p>
                  <p>
                    As a wholesale cut-off wheels supplier, we understand that distributors and industrial buyers demand consistent cut rate, long wheel life, minimum burr formation, and predictable performance. Our thin 1.0-1.6mm cut-off wheels are engineered for fast, cool cutting with minimal material waste and reduced heat-affected zones on the workpiece. We offer both premium-grade cutting wheels for professional fabricators and value-grade options for price-sensitive markets, each with consistent quality control from raw material mixing through final packaging.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  Cutting Wheel Types &amp; Product Range
                </h2>
                <div className="space-y-6">
                  {subtypes.map((sub) => (
                    <div key={sub.name} className="glass-panel p-6 rounded-lg space-y-4 border border-industry-slate-800">
                      <h3 className="text-lg font-bold text-industry-orange">{sub.name}</h3>
                      <p className="text-sm text-industry-slate-300 leading-relaxed">{sub.desc}</p>
                      <div className="border-t border-industry-slate-800/80 pt-4">
                        <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">Key Specifications:</span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-industry-slate-400 font-mono">
                          {sub.features.map((feat) => (
                            <li key={feat} className="flex items-center space-x-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-industry-orange shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  Standard Specifications
                </h2>
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">Size</th>
                        <th className="px-4 py-3 font-semibold uppercase">Thickness</th>
                        <th className="px-4 py-3 font-semibold uppercase">Arbor</th>
                        <th className="px-4 py-3 font-semibold uppercase">Max RPM</th>
                        <th className="px-4 py-3 font-semibold uppercase">Application</th>
                        <th className="px-4 py-3 font-semibold uppercase">Material</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr>
                        <td className="px-4 py-3">4.5\" (115mm)</td>
                        <td className="px-4 py-3">1.0 / 1.2 / 1.6 / 2.5 / 3.2mm</td>
                        <td className="px-4 py-3">7/8\" (22.23mm)</td>
                        <td className="px-4 py-3">13,300 RPM</td>
                        <td className="px-4 py-3">Metal / INOX</td>
                        <td className="px-4 py-3">A/O / White A/O</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3">5\" (125mm)</td>
                        <td className="px-4 py-3">1.0 / 1.2 / 1.6 / 2.5 / 3.2mm</td>
                        <td className="px-4 py-3">7/8\" (22.23mm)</td>
                        <td className="px-4 py-3">12,200 RPM</td>
                        <td className="px-4 py-3">Metal / INOX</td>
                        <td className="px-4 py-3">A/O / White A/O</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">7\" (180mm)</td>
                        <td className="px-4 py-3">1.6 / 2.0 / 2.5 / 3.2mm</td>
                        <td className="px-4 py-3">7/8\" (22.23mm)</td>
                        <td className="px-4 py-3">8,500 RPM</td>
                        <td className="px-4 py-3">Metal / INOX</td>
                        <td className="px-4 py-3">A/O / White A/O</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3">9\" (230mm)</td>
                        <td className="px-4 py-3">1.9 / 2.0 / 2.5 / 3.2mm</td>
                        <td className="px-4 py-3">7/8\" (22.23mm)</td>
                        <td className="px-4 py-3">6,600 RPM</td>
                        <td className="px-4 py-3">Metal / INOX / Cast Iron</td>
                        <td className="px-4 py-3">A/O / SiC Blend</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">14\" (355mm)</td>
                        <td className="px-4 py-3">2.5 / 3.0 / 3.2 / 4.0mm</td>
                        <td className="px-4 py-3">1\" (25.4mm) / 20mm</td>
                        <td className="px-4 py-3">4,400 RPM</td>
                        <td className="px-4 py-3">Chop saw: Metal / Masonry</td>
                        <td className="px-4 py-3">A/O / SiC</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  Applications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Steel fabrication and structural steel cutting",
                    "Pipe and tube cutting (steel, stainless, EMT)",
                    "Stainless steel fabrication and food equipment",
                    "Sheet metal and auto body panel cutting",
                    "Rebar and reinforcing steel cutting",
                    "Foundry and cast iron cutting",
                    "Construction site metal cutting",
                    "Masonry, brick, block, and concrete cutting",
                  ].map((app) => (
                    <div key={app} className="glass-panel p-4 rounded border border-industry-slate-800 flex items-start">
                      <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-industry-slate-200">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  Why Choose Our Cutting Wheels
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Safety Evidence by SKU", desc: "Request the applicable standard, report number, issuing body, covered dimensions, validity and label scope for the exact wheel." },
                    { title: "Dual Fiberglass Reinforcement", desc: "Two layers of high-tensile fiberglass mesh reinforcement provide burst resistance and structural integrity at maximum operating RPM." },
                    { title: "Contaminant-Free INOX Grade", desc: "Stainless steel cutting discs contain Fe+S+Cl below 0.1%, preventing after-rust, weld contamination, and surface discoloration on stainless." },
                    { title: "Thin Kerf Fast Cutting", desc: "1.0-1.6mm ultra-thin wheels deliver fast, precise cuts with minimal burr formation, reduced material waste, and less heat buildup on the workpiece." },
                    { title: "Consistent Quality Control", desc: "Each batch undergoes rotational burst testing, side load testing, and dimensional inspection before release to ensure wheel-to-wheel consistency." },
                    { title: "Private Label Scope", desc: "Branded labels, color boxes, tins and multilingual instructions can be scoped from buyer-approved safety and channel requirements." },
                  ].map((adv) => (
                    <div key={adv.title} className="glass-panel p-5 rounded-lg border border-industry-slate-800">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded bg-industry-orange/20 flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-industry-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-sm font-bold text-white">{adv.title}</h3>
                      </div>
                      <p className="text-xs text-industry-slate-400 leading-relaxed">{adv.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-industry-slate-950 border border-industry-slate-800 p-8 rounded-lg space-y-5">
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">OEM &amp; Private Label</span>
                <h2 className="text-xl font-extrabold text-white">OEM / Private Label Capabilities</h2>
                <div className="text-sm text-industry-slate-300 leading-relaxed space-y-4">
                  <p>
                    SCOTTCHEN provides complete OEM and private label cut-off wheel manufacturing for distributors, welding supply brands, private label tool companies, and industrial supply chains worldwide. Our OEM services include abrasive grain selection (aluminum oxide, white aluminum oxide for INOX, silicon carbide for masonry), wheel thickness and hardness grade specification, Type 1 or Type 27 profile, and custom label printing with your brand name, logo, specifications, and safety warnings.
                  </p>
                  <p>
                    Private-label options can include shrink wrap, printed labels, color boxes, storage tins, blister packs and industrial cartons. The buyer is responsible for confirming the applicable standard, maximum RPM, safety pictograms, translations and channel barcode data; the approved artwork defines what may appear on the wheel and packaging.
                  </p>
                  <p>
                    For large OEM customers with consistent volume, we can develop custom wheel formulations including specialized grain blends and bond hardness tailored to specific applications such as stainless steel pipe production, automotive exhaust manufacturing, or heavy structural steel fabrication. Contact our sales engineering team with your performance targets and application requirements for a custom quotation and pre-production samples.
                  </p>
                </div>
                <div className="pt-2">
                  <Link href="/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover">
                    Request OEM Cutting Disc Quote
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="glass-panel p-6 rounded-lg border border-industry-slate-800/80">
                      <h3 className="text-base font-bold text-white flex items-start">
                        <span className="text-industry-orange mr-2 shrink-0">Q{idx + 1}:</span>
                        <span>{faq.q}</span>
                      </h3>
                      <p className="text-sm text-industry-slate-400 mt-2 pl-8 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="glass-panel rounded-lg overflow-hidden border border-industry-slate-800 shadow-xl relative">
                <Image
                  width={1024}
                  height={1024}
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  quality={70}
                  loading="lazy"
                  src="/images/fiber_discs.webp"
                  alt="SCOTTCHEN Cutting Wheels and Cut-Off Discs"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  B2B Sourcing Parameters
                </h3>
                <div className="space-y-4 text-xs font-mono">
                  <div><span className="text-industry-slate-500 block">MOQ:</span><span className="text-white font-bold">Quoted per size, formulation and pack</span></div>
                  <div><span className="text-industry-slate-500 block">Lead Time:</span><span className="text-white font-bold">Confirmed in written order schedule</span></div>
                  <div><span className="text-industry-slate-500 block">Safety Evidence:</span><span className="text-white font-bold">Confirmed for target market and SKU</span></div>
                  <div><span className="text-industry-slate-500 block">Diameters:</span><span className="text-white font-bold">4\" - 14\" (100mm - 355mm)</span></div>
                  <div><span className="text-industry-slate-500 block">Packaging:</span><span className="text-white font-bold">Bulk, color boxes, metal tins, blister packs</span></div>
                </div>
                <div className="pt-4 border-t border-industry-slate-850">
                  <Link href="/sample-kit" className="w-full inline-flex justify-center items-center rounded border border-industry-orange text-industry-orange font-bold uppercase tracking-wider py-3 hover:bg-industry-orange hover:text-white transition-all text-xs">
                    Request Sample Discs
                  </Link>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Related Categories
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/resources/cutting-wheel-compliance-checklist" className="font-bold text-industry-orange hover:underline">Compliance Checklist</Link></li>
                  <li><Link href="/flap-discs" className="text-industry-orange hover:underline">Flap Discs</Link></li>
                  <li><Link href="/sanding-discs" className="text-industry-orange hover:underline">Sanding Discs</Link></li>
                  <li><Link href="/sanding-belts" className="text-industry-orange hover:underline">Sanding Belts</Link></li>
                  <li><Link href="/buffing-wheels" className="text-industry-orange hover:underline">Buffing Wheels</Link></li>
                  <li><Link href="/wholesale-abrasives" className="text-industry-orange hover:underline">Wholesale Abrasives Program</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ProductGroup",
                "@id": absoluteUrl("/cutting-wheels#productgroup"),
                "name": "SCOTTCHEN Cutting Wheels & Cut-Off Discs",
                "description": "Cut-off wheels for metal, stainless steel INOX, cast iron, and masonry with dual fiberglass reinforcement. Compliance claims are confirmed per approved SKU specification.",
                "url": absoluteUrl("/cutting-wheels"),
                "image": absoluteUrl("/images/fiber_discs.webp"),
                "brand": { "@type": "Brand", "name": "SCOTTCHEN" },
                "manufacturer": { "@id": absoluteUrl("/#organization") },
                "category": "Cutting wheels and cut-off discs",
                "material": "Resin-bonded abrasive with dual fiberglass reinforcement",
                "additionalProperty": [
                  { "@type": "PropertyValue", "name": "MOQ basis", "value": "Quoted by size, formulation, label, packaging and quantity" },
                  { "@type": "PropertyValue", "name": "Reinforcement", "value": "Dual fiberglass mesh" }
                ],
              },
              buildFaqPageSchema(faqs),
            ],
          }),
        }}
      />

      <CTASection />
    </div>
  );
}
