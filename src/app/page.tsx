import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import DecisionGuides from "@/components/DecisionGuides";
import { createPageMetadata } from "@/lib/seo";
import { buildFaqPageSchema } from "@/lib/schema";
import { absoluteUrl, SITE_UPDATED } from "@/lib/site";
import { buildInquiryHref } from "@/lib/inquiryContext";

export const metadata: Metadata = createPageMetadata({
  title: "OEM Abrasive Kit Sourcing & Private Label | SCOTTCHEN",
  description: "Shanghai-based B2B sourcing and project support for abrasive, sanding and polishing kits. Production source, evidence and commercial terms are confirmed by SKU.",
  path: "/",
  alternatePath: "/zh",
});

const homeFaqs = [
  {
    q: "What is the minimum order quantity (MOQ) for custom private label kits?",
    a: "MOQ is quoted by SKU, assortment, packaging, print process, tooling and order quantity. Use the dated written quotation rather than a generic website number.",
  },
  {
    q: "Can you prepare buyer-supplied marketplace labels and packaging data?",
    a: "Buyer-supplied FNSKU or UPC data, instructions, safety cards and carton marks can be scoped in the quotation. It must identify the responsible party, approved artwork, sample stage, scan method and retained record; final acceptance depends on current marketplace rules.",
  },
  {
    q: "Can I request physical samples for laboratory testing before ordering?",
    a: "Verified commercial buyers can request product samples. Sample and courier charges depend on the requested configuration and are confirmed before dispatch; qualifying credits, if offered, are stated in the quotation.",
  },
  {
    q: "How are buffing wheel tolerances confirmed?",
    a: "Dimensions, bore fit, construction, and any runout or balance criteria are confirmed in the approved SKU specification. Production checks and acceptance records are then matched to that agreed standard.",
  },
  {
    q: "How is the B2B production lead time confirmed?",
    a: "The production target is quoted after quantity, materials, customization, artwork approval, sample status and capacity are reviewed. It becomes a commitment only when stated in the written order schedule.",
  },
  {
    q: "What shipping terms and export ports do you support?",
    a: "FOB, CIF or a door-to-door option may be quoted depending on destination and service availability. The Incoterms rule, named place, port, importer-of-record role, taxes and customs responsibilities are confirmed in writing.",
  },
] as const;

export default function Home() {
  const quoteHref = buildInquiryHref("/", "quote");
  const sampleHref = buildInquiryHref("/", "sample");
  const categories = [
    {
      title: "Buffing & Polishing Wheels",
      desc: "RFQ reference for cotton, bench-grinder and drill-mount wheel configurations. Fiber, stitching, bore, operating limit and performance are confirmed by quoted SKU.",
      link: "/products/buffing-polishing-wheels",
      badge: "RFQ Reference",
      img: "/images/buffing_wheels.webp",
      ctaText: "Explore Cotton Buffing Wheels Catalog",
    },
    {
      title: "Polishing Wheel Kits",
      desc: "Planning concepts for buffing wheels and compound bars. BOM, tool fit, packaging, source and channel requirements require written approval.",
      link: "/products/buffing-polishing-wheels",
      badge: "BOM Concept",
      img: "/images/hero_abrasives_kit.webp",
      ctaText: "Browse Polishing Wheel Kits",
    },
    {
      title: "Sanding Sheets & Rolls",
      desc: "Candidate silicon-carbide or aluminum-oxide sheets and rolls. Grain, backing, grit, format and application are confirmed per source and sample.",
      link: "/products/sanding-grinding-accessories",
      badge: "RFQ Reference",
      img: "/images/sanding_sheets.webp",
      ctaText: "View Grinding & Sanding Technical Specs",
    },
    {
      title: "Grinding & Fiber Discs",
      desc: "Candidate fiber-disc and grinder-accessory configurations. Grain, backing, arbor, rated speed, guard fit and performance require SKU evidence.",
      link: "/products/sanding-grinding-accessories",
      badge: "Evidence Required",
      img: "/images/fiber_discs.webp",
      ctaText: "Inspect Heavy Grinding Disc Specs",
    },
    {
      title: "Detail Sanding Tools",
      desc: "Detail-sanding tool concepts for confined areas. Component source, grit, dimensions, tool fit and pack scope are confirmed in the quotation.",
      link: "/products/sanding-grinding-accessories",
      badge: "RFQ Reference",
      img: "/images/detail_sanding.webp",
      ctaText: "View Mini Sanding Stick Systems",
    },
    {
      title: "OEM Surface Finishing Kits",
      desc: "Custom accessory configurations, buyer-supplied barcode data, instruction sheets, and marketplace-oriented polybag or color-box packaging.",
      link: "/oem-private-label",
      badge: "Concept Preview",
      img: "/images/oem-abrasive-packaging-concept-v2.jpg",
      concept: true,
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
                Shanghai B2B Sourcing · SKU-Level Disclosure · Private Label
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                OEM Abrasive, Sanding & Polishing Accessory Kits
              </h1>
              <p className="text-lg text-industry-slate-300 leading-relaxed max-w-2xl">
                Shanghai-based sourcing support for tool brands, distributors and online sellers. Candidate kit BOMs, packaging, compatibility, evidence and commercial terms are evaluated and confirmed per quoted SKU.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono uppercase tracking-wider text-industry-slate-400">
                <span>Shanghai project support</span>
                <span className="text-industry-slate-700">·</span>
                <span>Production source confirmed per SKU</span>
                <span className="text-industry-slate-700">·</span>
                <span>Commercial terms quoted in writing</span>
                <span className="text-industry-slate-700">·</span>
                <Link href="/about" className="text-industry-orange hover:underline">
                  About SCOTTCHEN
                </Link>
              </div>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link
                  href={quoteHref}
                  className="inline-flex items-center justify-center rounded bg-industry-orange-cta px-8 py-4 text-base font-extrabold tracking-wide uppercase text-white transition-all-custom hover:bg-industry-orange-hover hover:scale-[1.02] shadow-lg shadow-industry-orange/25 text-center"
                >
                  Request OEM Quote
                </Link>
                <Link
                  href={sampleHref}
                  className="inline-flex items-center justify-center rounded border border-industry-slate-700 bg-industry-slate-800/50 backdrop-blur-sm px-8 py-4 text-base font-bold uppercase tracking-wide text-white transition-all-custom hover:bg-industry-slate-800 text-center"
                >
                  Get Sample Kit
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 text-sm font-bold">
                <Link
                  href="/supplier-profile"
                  className="text-industry-orange hover:text-industry-orange-hover"
                >
                  Review supplier scope & RFQ checklist &rarr;
                </Link>
                <a
                  href="/catalog.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-industry-slate-300 hover:text-white underline underline-offset-4"
                >
                  Open specifications catalog
                </a>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-industry-slate-800 max-w-lg">
                <div>
                  <div className="text-xl font-bold text-white">Evidence Center</div>
                  <div className="text-xs text-industry-slate-400 mt-1">Public status and project files</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Barcode Prep</div>
                  <div className="text-xs text-industry-slate-400 mt-1">Buyer-supplied label data</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Terms by SKU</div>
                  <div className="text-xs text-industry-slate-400 mt-1">Written quotation controls</div>
                </div>
              </div>
            </div>
            {/* Right Graphic/Schematic Column */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="glass-panel rounded-xl overflow-hidden border border-industry-slate-800 shadow-2xl relative">
                <div className="absolute top-4 right-4 z-10 flex items-center space-x-2 bg-industry-slate-950/85 backdrop-blur px-3 py-1 rounded border border-industry-slate-800">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
                  <span className="text-[10px] text-industry-slate-300 font-mono tracking-wider">RFQ SCOPE CHECKED</span>
                </div>
                
                <div className="relative aspect-square w-full">
                  {/* Hero column is hidden below lg; media-scoped preload + eager
                      loading keep desktop LCP fast without mobile downloads. */}
                  <link
                    rel="preload"
                    as="image"
                    href="/images/hero_abrasives_kit.webp"
                    media="(min-width: 1024px)"
                  />
                  <img
                    width={1024}
                    height={1024}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    src="/images/hero_abrasives_kit.webp"
                    alt="SCOTTCHEN Industrial Buffing and Sanding Kit Sourcing"
                    className="object-cover w-full h-full opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
                </div>
                
                <div className="p-6 bg-industry-slate-950/90 border-t border-industry-slate-850">
                  <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-2">RFQ Kit Planning Concept</h2>
                  <p className="text-xs text-industry-slate-400 leading-relaxed">
                    Proposed wheel, sanding and compound combinations; component and packaging availability is confirmed only in the written quotation.
                  </p>
                  <div className="mt-4 flex justify-between items-center text-[10px] text-industry-slate-500 font-mono pt-3 border-t border-industry-slate-900">
                    <span>MOQ: quoted per configuration</span>
                    <span className="text-industry-orange font-bold">PACKAGING SCOPE DOCUMENTED</span>
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
                    <span className="text-industry-slate-200"><strong>Quoted minimums:</strong> Kit quantities depend on the component mix, packaging, print method and tooling.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>Fulfillment Preparation:</strong> Buyer-supplied FNSKU data, carton marks and packaging requirements can be included in the approved pack specification.</span>
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
                    <span className="text-industry-slate-200"><strong>Quoted Delivery Plan:</strong> Production timing, Incoterms rule, named place and logistics responsibilities are confirmed per project.</span>
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
              Surface preparation and polishing is a structured process. We support B2B sourcing and OEM kit planning for each stage, with component source, specification and evidence confirmed per SKU.
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
                desc: "C-weight backing sandpapers, mesh drywall screen sheets, and detail sticks. Grit, backing and scratch pattern are confirmed against the approved sample.",
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
                  <Image
                    width={1024}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                    src={cat.img}
                    sizes="(min-width: 1024px) 28vw, (min-width: 768px) 42vw, 92vw"
                    quality={68}
                    alt={cat.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 to-transparent opacity-60" />
                  <span className="absolute top-3 left-3 text-[9px] font-mono font-bold tracking-widest uppercase text-industry-slate-300 bg-industry-slate-950/80 border border-industry-slate-800 px-2 py-0.5 rounded backdrop-blur">
                    {cat.badge}
                  </span>
                  {"concept" in cat && cat.concept ? (
                    <span className="absolute bottom-2 left-3 right-3 text-[10px] text-industry-slate-200">
                      AI-generated packaging concept — not a shipped order or production proof
                    </span>
                  ) : null}
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
                <Image
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  src="/images/oem-abrasive-packaging-concept-v2.jpg"
                  sizes="(min-width: 1024px) 36vw, 92vw"
                  quality={68}
                  alt="AI-generated unbranded private-label abrasive packaging concept"
                  className="object-cover w-full h-48 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 to-transparent" />
                <span className="absolute bottom-2 left-3 text-[10px] text-industry-slate-300">
                  AI-generated concept — not production evidence or a shipped order
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-panel p-6 rounded-lg text-center border border-industry-slate-800">
                  <div className="text-2xl font-black text-white font-mono">CUSTOM</div>
                  <div className="text-xs text-industry-slate-400 font-semibold mt-1">Custom Kit Combination</div>
                  <p className="text-[11px] text-industry-slate-500 mt-2">Buffer pads + sandpaper roll grids + compounds in one box.</p>
                </div>
                <div className="glass-panel p-6 rounded-lg text-center border border-industry-slate-800">
                  <div className="text-2xl font-black text-white font-mono">FBA</div>
                  <div className="text-xs text-industry-slate-400 font-semibold mt-1">Marketplace Preparation</div>
                  <p className="text-[11px] text-industry-slate-500 mt-2">Buyer-supplied FNSKU data, warning sheets, and carton specifications.</p>
                </div>
                <div className="glass-panel p-6 rounded-lg text-center border border-industry-slate-800">
                  <div className="text-2xl font-black text-white font-mono">POLY/BOX</div>
                  <div className="text-xs text-industry-slate-400 font-semibold mt-1">Flexible Packaging</div>
                  <p className="text-[11px] text-industry-slate-500 mt-2">Blister packs, color boxes, kraft dispensers, or bulk shipping cartons.</p>
                </div>
                <div className="glass-panel p-6 rounded-lg text-center border border-industry-slate-800">
                  <div className="text-2xl font-black text-white font-mono">PER SKU</div>
                  <div className="text-xs text-industry-slate-400 font-semibold mt-1">Quoted Minimums</div>
                  <p className="text-[11px] text-industry-slate-500 mt-2">Trial quantities depend on the component mix and packaging scope.</p>
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
                Packaging and labeling can add value when responsibilities are controlled. The project brief can cover structure, buyer-approved artwork, barcode data and pack-out, but dieline availability, source capability, samples, scan evidence and channel acceptance require written confirmation.
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
                  <span><strong>Seller Platform Preparation:</strong> Add buyer-approved safety inserts, instructions, barcode data and carton requirements for review against current channel rules.</span>
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
                role: "Packaging-Approval Plans",
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
                Industrial accessories are subject to demanding operating conditions. The quoted source, exact SKU and target market must have a written quality plan. Checks such as the following are included only when defined in that plan, with methods, sampling and release evidence agreed in writing:
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
                  Review the SKU Quality-Planning Framework &rarr;
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
            {homeFaqs.map((faq, idx) => (
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
            "@graph": [
              {
                "@type": "WebPage",
                "@id": absoluteUrl("/#webpage"),
                url: absoluteUrl("/"),
                name: "OEM Abrasive, Sanding & Polishing Accessory Kits | SCOTTCHEN",
                description:
                  "Shanghai-based B2B sourcing support for abrasive accessory kit RFQs, with source, evidence, packaging and commercial terms confirmed per quoted SKU.",
                dateModified: SITE_UPDATED,
                inLanguage: "en",
                isPartOf: { "@id": absoluteUrl("/#website") },
                about: { "@id": absoluteUrl("/#organization") },
                primaryImageOfPage: absoluteUrl("/images/hero_abrasives_kit.webp"),
              },
              buildFaqPageSchema(homeFaqs),
            ],
          }),
        }}
      />

      {/* Persistent CTA Banner */}
      <DecisionGuides />
      <CTASection />
    </div>
  );
}
