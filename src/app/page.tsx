import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "OEM Abrasive, Sanding & Polishing Accessory Kits | SCOTTCHEN",
  description: "SCOTTCHEN manufactures retail-ready surface finishing accessory kits. Private label packaging, custom grit assortments, and optimized compatibility. Low MOQs.",
  path: "/",
  alternatePath: "/zh",
});

export default function Home() {
  const categories = [
    {
      title: "Buffing & Polishing Wheels",
      desc: "Cotton buffing wheels, bench grinder polishing wheels, and drill-mount pads. Engineered with high-strength stitching and calibrated arbor hole accuracy.",
      link: "/products/buffing-polishing-wheels",
      badge: "Core Mainstay",
      img: "/images/buffing_wheels.webp",
      ctaText: "Explore Cotton Buffing Wheels Catalog",
    },
    {
      title: "Polishing Wheel Kits",
      desc: "Scenario-specific buffing kits complete with polishing compound bars. Ready for retail branding, online kits, and DIY automotive wheel restoration.",
      link: "/products/buffing-polishing-wheels",
      badge: "High Conversion",
      img: "/images/hero_abrasives_kit.webp",
      ctaText: "Browse Polishing Wheel Kits",
    },
    {
      title: "Sanding Sheets & Rolls",
      desc: "Silicon carbide and aluminum oxide abrasives. Available in assorted grit packs, rolls, and dispenser boxes for woodwork, metal prep, and paint prep.",
      link: "/products/sanding-grinding-accessories",
      badge: "High Volume",
      img: "/images/sanding_sheets.webp",
      ctaText: "View Grinding & Sanding Technical Specs",
    },
    {
      title: "Grinding & Fiber Discs",
      desc: "Heavy-duty zirconia alumina resin fiber discs and angle grinder attachments. Designed for rapid weld removal, rust removal, and metal prep.",
      link: "/products/sanding-grinding-accessories",
      badge: "Industrial Grade",
      img: "/images/fiber_discs.webp",
      ctaText: "Inspect Heavy Grinding Disc Specs",
    },
    {
      title: "Detail Sanding Tools",
      desc: "Mini sanding sticks and matchstick-style detail finishing tools. Crucial for craft, models, jewelry, and tight corner smoothing.",
      link: "/products/sanding-grinding-accessories",
      badge: "Specialty Niche",
      img: "/images/detail_sanding.webp",
      ctaText: "View Mini Sanding Stick Systems",
    },
    {
      title: "OEM Surface Finishing Kits",
      desc: "Fully customized accessory configurations, barcodes, custom instruction sheets, and FBA-compliant polybag or color box packaging.",
      link: "/oem-private-label",
      badge: "Made to Order",
      img: "/images/oem_packaging.webp",
      ctaText: "Configure Custom Packaging Specs",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-industry-slate-950 via-industry-slate-900 to-industry-slate-900 py-20 lg:py-28 overflow-hidden border-b border-industry-slate-800">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-industry-orange filter blur-[150px]" />
          <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-slate-800 filter blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
              <span className="inline-flex items-center rounded-md bg-industry-orange/10 px-3 py-1 text-xs font-bold tracking-wider text-industry-orange uppercase border border-industry-orange/20 w-fit">
                B2B Sourcing & Private Label
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                OEM Abrasive, Sanding & Polishing Accessory Kits
              </h1>
              <p className="text-lg text-industry-slate-300 leading-relaxed max-w-2xl">
                We help tool brands, hardware distributors, and online sellers build retail-ready surface finishing accessory kits. Private label packaging, custom grit assortments, and optimized compatibility.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded bg-industry-orange-cta px-8 py-4 text-base font-extrabold tracking-wide uppercase text-white transition-all-custom hover:bg-industry-orange-hover hover:scale-[1.02] shadow-lg shadow-industry-orange/25 text-center"
                >
                  Request OEM Quote
                </Link>
                <Link
                  href="/sample-kit"
                  className="inline-flex items-center justify-center rounded border border-industry-slate-700 bg-industry-slate-800/50 backdrop-blur-sm px-8 py-4 text-base font-bold uppercase tracking-wide text-white transition-all-custom hover:bg-industry-slate-800 text-center"
                >
                  Get Sample Kit
                </Link>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-industry-slate-800 max-w-lg">
                <div>
                  <div className="text-xl font-bold text-white">Small-Batch Testing</div>
                  <div className="text-xs text-industry-slate-400 mt-1">MOQs starting at 500 kits</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Online Seller Friendly</div>
                  <div className="text-xs text-industry-slate-400 mt-1">FNSKU barcode & carton labels</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Application Sized</div>
                  <div className="text-xs text-industry-slate-400 mt-1">Grits matched to substrate</div>
                </div>
              </div>
            </div>

            {/* Right Graphic/Schematic Column */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="glass-panel rounded-xl overflow-hidden border border-industry-slate-800 shadow-2xl relative">
                <div className="absolute top-4 right-4 z-10 flex items-center space-x-2 bg-industry-slate-950/85 backdrop-blur px-3 py-1 rounded border border-industry-slate-800">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
                  <span className="text-[10px] text-industry-slate-300 font-mono tracking-wider">SUPPLY CHAIN READY</span>
                </div>
                
                <div className="relative aspect-square w-full">
                  <img
                    width={1024}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                    src="/images/hero_abrasives_kit.webp"
                    alt="SCOTTCHEN Industrial Buffing and Sanding Kit Sourcing"
                    className="object-cover w-full h-full opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
                </div>
                
                <div className="p-6 bg-industry-slate-950/90 border-t border-industry-slate-850">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">SCOTTCHEN Premium Accessories</h3>
                  <p className="text-xs text-industry-slate-400 leading-relaxed">
                    Custom combined buffing wheels, sanding rolls, and compounds in unified retail-ready boxes.
                  </p>
                  <div className="mt-4 flex justify-between items-center text-[10px] text-industry-slate-500 font-mono pt-3 border-t border-industry-slate-900">
                    <span>MOQ: 500 sets</span>
                    <span className="text-industry-orange font-bold">RETAIL PACKAGING READY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways / B2B Quick Facts */}
      <section className="py-8 bg-industry-slate-900 border-b border-industry-slate-800/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-industry-slate-800/80 bg-industry-slate-950/40 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="md:w-1/3">
                <span className="text-[10px] font-mono font-bold tracking-widest text-industry-orange uppercase">B2B QUICK TAKEAWAYS</span>
                <h2 className="text-2xl font-black text-white mt-1">Sourcing Snapshot</h2>
                <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">
                  Fast checklist for tool brand procurement, importers, and hardware distributors.
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Flexible MOQs:</strong> Starting at 500 sets for custom kits; bulk components from 500 pcs.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Fulfillment Ready:</strong> Complete private labeling, FNSKU barcodes, and carton packaging for FBA.</span>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Specification-Based QC:</strong> Dimensions, fit, construction, and applicable performance checks recorded against the approved SKU specification.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Global Supply:</strong> Standard B2B lead times of 20-35 days via FOB, CIF, or DDP courier modes.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surface Finishing Workflow Section */}
      <section className="py-20 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Industrial Substrate Process</span>
            <h2 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              Workflow-Focused Surface Finishing
            </h2>
            <p className="mt-4 text-base text-industry-slate-400">
              Surface preparation and polishing is a structured process. We manufacture and package accessories that map precisely to each critical stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                name: "GRIND",
                tool: "Angle Grinder / Fiber Discs",
                substrate: "Metal Weld, Rust & Scale",
                desc: "High-grade zirconia fiber discs and backing plates designed to remove heavy material, level welds, and prepare surfaces rapidly.",
                color: "border-t-2 border-red-500",
              },
              {
                step: "02",
                name: "SAND",
                tool: "Orbital / Sheets & Rolls",
                substrate: "Wood, Paint, Primer, Drywall",
                desc: "C-weight backing sandpapers, mesh drywall screen sheets, and detail sticks. Calibrated grit consistency ensures uniform scratch patterns.",
                color: "border-t-2 border-amber-500",
              },
              {
                step: "03",
                name: "FINISH",
                tool: "Mini Tools / Detail Sticks",
                substrate: "Tight Corners, Crafts & Models",
                desc: "Rigid mini sanding sticks and assorted grit belts. Prevents rounding off critical edges on molds, jewelry, and wood detailing.",
                color: "border-t-2 border-yellow-500",
              },
              {
                step: "04",
                name: "POLISH",
                tool: "Bench Grinder / Drill Buffer",
                substrate: "Stainless, Aluminum, Brass, Wood",
                desc: "Cotton wheels, spiral stitched wheels, dome buffs, and compound bars. Delivers high luster, mirror shine, or matte satin finishes.",
                color: "border-t-2 border-emerald-500",
              },
            ].map((wf) => (
              <div key={wf.name} className={`glass-panel p-6 rounded-lg flex flex-col space-y-4 relative ${wf.color}`}>
                <div className="absolute top-4 right-4 text-3xl font-black text-industry-slate-500 font-mono">{wf.step}</div>
                <div className="text-lg font-black text-white tracking-wider">{wf.name}</div>
                <div>
                  <div className="text-xs text-industry-slate-400 font-mono">Substrate: {wf.substrate}</div>
                  <div className="text-xs text-industry-orange font-mono mt-1">Tool: {wf.tool}</div>
                </div>
                <p className="text-sm text-industry-slate-300 leading-relaxed pt-2">
                  {wf.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-20 bg-industry-slate-950 border-t border-b border-industry-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Product Catalog Matrix</span>
              <h2 className="text-3xl font-extrabold text-white mt-3">Abrasive Accessory Kits</h2>
            </div>
            <Link
              href="/products"
              className="text-sm font-bold text-industry-orange hover:text-industry-orange-light mt-4 md:mt-0 flex items-center transition-colors"
            >
              Explore Full Specifications Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.title} className="glass-panel rounded-lg overflow-hidden flex flex-col justify-between hover:border-industry-orange/50 transition-all-custom group">
                <div className="relative h-48 w-full overflow-hidden border-b border-industry-slate-850 bg-industry-slate-950">
                  <img
                    width={1024}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                    src={cat.img}
                    alt={cat.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 to-transparent opacity-60" />
                  <span className="absolute top-3 left-3 text-[9px] font-mono font-bold tracking-widest uppercase text-industry-slate-300 bg-industry-slate-950/80 border border-industry-slate-800 px-2 py-0.5 rounded backdrop-blur">
                    {cat.badge}
                  </span>
                </div>
                
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-industry-orange transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-industry-slate-400 leading-relaxed mb-6">
                      {cat.desc}
                    </p>
                  </div>
                  <Link
                    href={cat.link}
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-industry-orange group-hover:underline mt-auto"
                  >
                    {cat.ctaText} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM Capabilities Block */}
      <section className="py-20 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Graphics */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col space-y-6">
              <div className="glass-panel rounded-xl overflow-hidden border border-industry-slate-800 shadow-2xl relative">
                <img
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  src="/images/oem_packaging.webp"
                  alt="SCOTTCHEN Private Label Packaging Mockup"
                  className="object-cover w-full h-48 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 to-transparent" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-panel p-6 rounded-lg text-center border border-industry-slate-800">
                  <div className="text-2xl font-black text-white font-mono">CUSTOM</div>
                  <div className="text-xs text-industry-slate-400 font-semibold mt-1">Custom Kit Combination</div>
                  <p className="text-[11px] text-industry-slate-500 mt-2">Buffer pads + sandpaper roll grids + compounds in one box.</p>
                </div>
                <div className="glass-panel p-6 rounded-lg text-center border border-industry-slate-800">
                  <div className="text-2xl font-black text-white font-mono">FBA</div>
                  <div className="text-xs text-industry-slate-400 font-semibold mt-1">Amazon Ready</div>
                  <p className="text-[11px] text-industry-slate-500 mt-2">FNSKU barcode labeling, warning sheets, and carton layout specs.</p>
                </div>
                <div className="glass-panel p-6 rounded-lg text-center border border-industry-slate-800">
                  <div className="text-2xl font-black text-white font-mono">POLY/BOX</div>
                  <div className="text-xs text-industry-slate-400 font-semibold mt-1">Flexible Packaging</div>
                  <p className="text-[11px] text-industry-slate-500 mt-2">Blister packs, color boxes, kraft dispensers, or bulk shipping cartons.</p>
                </div>
                <div className="glass-panel p-6 rounded-lg text-center border border-industry-slate-800">
                  <div className="text-2xl font-black text-white font-mono">MOQ 500</div>
                  <div className="text-xs text-industry-slate-400 font-semibold mt-1">Low-Risk Testing</div>
                  <p className="text-[11px] text-industry-slate-500 mt-2">Small batch product verification to test local distribution.</p>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-7 flex flex-col space-y-6 order-1 lg:order-2">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Packaging & Private Branding</span>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                B2B OEM Private Label Solutions
              </h2>
              <p className="text-base text-industry-slate-300 leading-relaxed">
                Standard industrial abrasives gain value when packaged, labeled, and combinations are tuned for specific target user groups. We help tool accessory brands and online marketplace sellers launch private label kits from structural planning to retail-ready box packaging.
              </p>
              
              <ul className="space-y-3 text-sm text-industry-slate-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-industry-orange mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Component Sourcing Selection:</strong> Select cotton ply thickness, arbor hole inserts, sandpaper rolls, and mini detail sanders.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-industry-orange mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Custom Package Formats:</strong> Retail color boxes, blister packing, sliding cards, polybags, or customized workshop dispenser racks.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-industry-orange mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Seller Platform Compliance:</strong> Print product safety inserts, user instructions, barcode labels, and ensure carton packing rules are met.</span>
                </li>
              </ul>

              <div className="pt-4">
                <Link
                  href="/oem-private-label"
                  className="inline-flex items-center justify-center rounded bg-industry-slate-800 border border-industry-slate-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all-custom hover:bg-industry-orange"
                >
                  Configure OEM Private Label Specifications
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Buyer Audiences */}
      <section className="py-20 bg-industry-slate-950 border-t border-b border-industry-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">B2B Partners We Support</span>
            <h2 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              Who We Work With
            </h2>
            <p className="mt-4 text-base text-industry-slate-400">
              Our B2B shipping process matches the unique supply constraints and timelines of multiple commercial profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tool Accessory Brands",
                role: "SKU Expansion",
                focus: "Custom combination kits & private labels matching current color schemes.",
              },
              {
                title: "Hardware & Tool Distributors",
                role: "Bulk Supply & Sourcing",
                focus: "Bulk pallets, price sheet catalogs, predictable lead times, and structural sample checks.",
              },
              {
                title: "E-Commerce / Online Sellers",
                role: "Retail-Ready Kits",
                focus: "Optimized packaging weights, barcode compliance, and instruction inserts to reduce returns.",
              },
              {
                title: "Woodworking Supply Chains",
                role: "Wood Finish Specialization",
                focus: "Assorted grit sandpaper sheets, sanding rolls, and micro contour sticks.",
              },
              {
                title: "Metalwork & Weld Supply Channels",
                role: "High-Cut Deburring",
                focus: "Zirconia resin discs, stitch buffing wheels, and coarse tripoli polishing compounds.",
              },
              {
                title: "Automotive Refinishing Suppliers",
                role: "Paint & Rim Restore",
                focus: "Dome/cone shape drill polishing buffers, fine compounds, and detailing packs.",
              },
            ].map((partner) => (
              <div key={partner.title} className="glass-panel p-6 rounded-lg border border-industry-slate-850">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-white text-base">{partner.title}</h3>
                  <span className="text-[10px] font-mono uppercase bg-industry-orange/10 text-industry-orange border border-industry-orange/20 px-2 py-0.5 rounded">
                    {partner.role}
                  </span>
                </div>
                <p className="text-sm text-industry-slate-400 leading-relaxed">
                  {partner.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Quality Control */}
      <section className="py-20 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Verifiable Integrity</span>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                B2B Quality Control Inspections
              </h2>
              <p className="text-base text-industry-slate-300 leading-relaxed">
                Industrial accessories are subject to extreme forces. A polishing wheel or sanding disc must perform safely and consistently. We perform systematic testing checks on all batches before shipping:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-industry-slate-300">
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-industry-orange" />
                  <span>Stitching strength & density check</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-industry-orange" />
                  <span>Arbor hole dimensional accuracy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-industry-orange" />
                  <span>Disc static & dynamic balance checks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-industry-orange" />
                  <span>Grit consistency & backing adhesion</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/quality-control"
                  className="text-sm font-bold text-industry-orange hover:text-industry-orange-light flex items-center"
                >
                  Read our full Batch Testing Standards &rarr;
                </Link>
              </div>
            </div>

            {/* Right Graphic */}
            <div className="lg:col-span-5">
              <div className="border border-industry-slate-800 bg-industry-slate-950 p-8 rounded-xl flex flex-col space-y-4">
                <div className="text-xs font-mono text-industry-slate-500 flex justify-between">
                  <span>QC PLAN</span>
                  <span>SKU SPECIFICATION</span>
                </div>
                
                {/* Visual representation of a density inspection */}
                <div className="bg-industry-slate-900 p-4 rounded border border-industry-slate-850 space-y-3">
                  <div className="text-xs font-bold text-white uppercase tracking-wide">Buffing Wheel Construction Check</div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-industry-slate-400 font-mono">Cotton Ply Count:</span>
                    <span className="text-xs text-white font-mono font-bold">Per approved SKU</span>
                  </div>
                  <div className="w-full bg-industry-slate-800 rounded-full h-2">
                    <div className="bg-industry-orange h-2 rounded-full" style={{ width: "98%" }} />
                  </div>
                </div>

                <div className="bg-industry-slate-900 p-4 rounded border border-industry-slate-850 space-y-3">
                  <div className="text-xs font-bold text-white uppercase tracking-wide">Arbor Hole and Fit Criteria</div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-industry-slate-400 font-mono">Acceptance:</span>
                    <span className="text-xs text-green-400 font-mono font-bold">Approved drawing</span>
                  </div>
                  <div className="w-full bg-industry-slate-800 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "95%" }} />
                  </div>
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
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">B2B INQUIRIES & FAQS</span>
            <h2 className="text-3xl font-extrabold text-white mt-3">Frequently Asked Questions</h2>
            <p className="mt-4 text-sm text-industry-slate-400">
              Clear technical guidelines, shipping metrics, and minimum order compliance snapshots for sourcing buyers.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What is the minimum order quantity (MOQ) for custom private label kits?",
                a: "Our MOQ starts at 500 sets for custom combined kits (e.g. custom combined buffing wheels, compound wax bars, and sanding adapter arbors in a single box). For bulk raw component sourcing, MOQs start from 500 pcs per size or 10,000 sheets for sandpaper sheets."
              },
              {
                q: "Do you provide Amazon FBA-compliant packaging and barcode labeling?",
                a: "Yes, we are a direct manufacturer specializing in FBA compliance. We print and apply FNSKU barcode labels directly, bundle instruction sheets, print safety cards, and structure outbound shipping cartons to meet Amazon warehouse rules."
              },
              {
                q: "Can I request physical samples for laboratory testing before ordering?",
                a: "Verified commercial buyers can request product samples. Sample and courier charges depend on the requested configuration and are confirmed before dispatch; qualifying credits, if offered, are stated in the quotation."
              },
              {
                q: "How are buffing wheel tolerances confirmed?",
                a: "Dimensions, bore fit, construction, and any runout or balance criteria are confirmed in the approved SKU specification. Production checks and acceptance records are then matched to that agreed standard."
              },
              {
                q: "What is your standard B2B production lead time?",
                a: "Standard production lead time is 25 to 35 days for custom private label kits, and 20 days for raw bulk catalog items, following advance payment and artwork packaging approvals."
              },
              {
                q: "What shipping terms and export ports do you support?",
                a: "We support FOB, CIF, and door-to-door DDP courier options. Most cargo is shipped via Shanghai or Ningbo ports. We handle custom declarations, export clearances, and logistics container loading."
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
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the minimum order quantity (MOQ) for custom private label kits?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our MOQ starts at 500 sets for custom combined kits (e.g. custom combined buffing wheels, compound wax bars, and sanding adapter arbors in a single box). For bulk raw component sourcing, MOQs start from 500 pcs per size or 10,000 sheets for sandpaper sheets."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide Amazon FBA-compliant packaging and barcode labeling?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we are a direct manufacturer specializing in FBA compliance. We print and apply FNSKU barcode labels directly, bundle instruction sheets, print safety cards, and structure outbound shipping cartons to meet Amazon warehouse rules."
                }
              },
              {
                "@type": "Question",
                "name": "Can I request physical samples for laboratory testing before ordering?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Verified commercial buyers can request product samples. Sample and courier charges depend on the requested configuration and are confirmed before dispatch; qualifying credits, if offered, are stated in the quotation."
                }
              },
              {
                "@type": "Question",
                "name": "How are buffing wheel tolerances confirmed?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dimensions, bore fit, construction, and any runout or balance criteria are confirmed in the approved SKU specification. Production checks and acceptance records are then matched to that agreed standard."
                }
              },
              {
                "@type": "Question",
                "name": "What is your standard B2B production lead time?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Standard production lead time is 25 to 35 days for custom private label kits, and 20 days for raw bulk catalog items, following advance payment and artwork packaging approvals."
                }
              },
              {
                "@type": "Question",
                "name": "What shipping terms and export ports do you support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We support FOB, CIF, and door-to-door DDP courier options. Most cargo is shipped via Shanghai or Ningbo ports. We handle custom declarations, export clearances, and logistics container loading."
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
