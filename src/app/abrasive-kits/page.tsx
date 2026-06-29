import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Abrasive Kit Wholesale | Polishing & Sanding Accessory Kits Private Label | SCOTTCHEN",
  description: "OEM private label abrasive kits. Buffing wheel kits, sanding disc kits, polishing compound sets. Retail-ready packaging, FBA compliant. MOQ 500 sets from China manufacturer.",
  path: "/abrasive-kits",
});

export default function AbrasiveKitsPage() {
  const kits = [
    {
      name: "Buffing & Polishing Wheel Kits",
      desc: "Complete buffing wheel kits combining spiral-stitched cotton wheels, loose flannel wheels, sisal wheels, and matched compound bars for multi-stage metal polishing. These kits are designed for bench grinders in 6-inch and 8-inch sizes, typically including three wheels (sisal cut, cotton cut, cotton color) and three to four compound bars (Black Emery, Red Tripoli, White Rouge, Green Chrome) for a complete cut-to-color polishing sequence. Packaged in retail color boxes or blister cards with arbor adapters and instructions.",
      included: ["3-8 buffing wheels (sisal/cotton/flannel)", "3-4 compound bars (black/red/white/green)", "Arbor adapters (1/2\", 5/8\", 3/4\")", "Bench grinder or drill mounting hardware", "Color box or blister pack retail packaging"],
    },
    {
      name: "Sanding Disc Assortment Kits",
      desc: "Assorted grit sanding disc kits that bundle multiple grits in one package for a complete sanding progression, from coarse stock removal through fine finishing. Available for 5-inch and 6-inch random orbital sanders in hook-and-loop backing, these kits typically include grits P40, P60, P80, P120, P220, and P400 in resealable dispenser packs or color boxes. Ideal for woodworkers, auto body shops, DIY enthusiasts, and gift/promotional channels.",
      included: ["Assorted grits (e.g., P40-P400 or P80-P3000)", "Hook & loop or PSA backing", "Foam interface pad optional", "Dispenser box or resealable bag packaging", "Grit reference chart included"],
    },
    {
      name: "Automotive Wheel Polishing Kits",
      desc: "Specialized polishing kits for aluminum wheel and automotive chrome restoration, combining drill-mounted buffing wheels in various shapes (cone, mushroom, cylinder, dome), airway buffs for large surfaces, and matched compound bars formulated for aluminum and chrome. These kits are packaged for retail in the automotive aftermarket and appeal to car enthusiasts, detailers, and wheel restoration shops. Includes 1/4\" hex shank accessories for cordless drills.",
      included: ["Drill-mounted buffs (cone/dome/cylinder/mushroom)", "Large airway or loose-section buffs", "Aluminum & chrome-specific compounds", "1/4\" hex shank mandrels", "Microfiber towel and step-by-step guide"],
    },
    {
      name: "Jewelry Polishing Kits",
      desc: "Compact jewelry polishing kits with small-diameter cotton buffs, muslin wheels, felt bobs, and rouge compounds for gold, silver, platinum, and precious metal finishing. Designed for rotary tools (Dremel-style), flex shafts, and small bench jewelry polishers. These kits are popular in jewelry supply catalogs, craft stores, and hobbyist channels, packaged in small plastic cases or wooden boxes with organized compartments.",
      included: ["1/8\" or 3/32\" shank felt and cotton bobs", "Small diameter muslin and flannel wheels", "Red rouge and jewelers white compound", "Mandrels and adapters for rotary tools", "Plastic storage case with compartments"],
    },
    {
      name: "Drill Polishing Accessory Kits",
      desc: "All-in-one drill polishing kits that turn any standard cordless or electric drill into a polishing and buffing tool. These kits include a range of shank-mounted buffing wheels, polishing pads, sanding accessories, compound bars, mandrels, and adapters in various shapes and materials for metal polishing, auto detailing, and DIY projects. Packaged in durable carrying cases or color boxes for hardware retail, auto parts stores, and online marketplaces.",
      included: ["8-30 piece shank-mounted buffing and polishing accessories", "1/4\" hex shank mandrels and adapters", "Assorted compound bars", "Wool/felt polishing pads for final finishing", "Carrying case or blister pack retail packaging"],
    },
    {
      name: "Knife Sharpening Belt Kits",
      desc: "Assorted grit belt packs for 2x72 knife making belt grinders, providing a complete sharpening and honing progression from coarse grinding to mirror polish. These kits typically include ceramic, zirconia, and fine silicon carbide belts in grits from P36 through P2000 or higher, and are packaged in sets for knife makers, bladesmiths, and sharpening services. Popular among knife making suppliers, blacksmith supply shops, and custom knife makers.",
      included: ["2x72 sanding belts in assorted grits (P36-P2000)", "Ceramic belts for hard steel, A/O for general", "Leather stropping belt optional", "Grit progression guide included", "Branded sleeve or box packaging"],
    },
    {
      name: "Multi-Purpose DIY Abrasive Kits",
      desc: "Broad assortment abrasive kits combining sandpaper sheets, sanding discs, cutting wheels, flap discs, buffing wheels, compounds, and accessories in a single carry case for home DIY, garage, and workshop use. These all-in-one kits appeal to gift buyers, first-time homeowners, and general tool users through hardware stores, department stores, and online marketplaces. Contents can be fully customized for seasonal promotions and retailer-specific assortments.",
      included: ["Sanding sheets, discs, belts assortment", "Cutting wheels and flap discs for angle grinders", "Buffing wheels and polishing compounds", "Drill-mounted accessories and mandrels", "Durable plastic carrying case with custom foam insert"],
    },
  ];

  const faqs = [
    {
      q: "What is the MOQ for private label abrasive kits?",
      a: "Our reference MOQ for wholesale abrasive kit and polishing kit private label orders is 500 sets per kit configuration. Kits with custom molded plastic cases, printed color boxes with custom die cuts, or complex assortments may have MOQs of 1,000 sets depending on packaging supplier minimums. Standard kit configurations using existing tooling and packaging formats can often be produced at the 500-set MOQ. We also offer mixed-container programs where distributors can combine multiple kit SKUs to fill a full container.",
    },
    {
      q: "Can I customize the contents of my abrasive kit?",
      a: "Absolutely. We specialize in custom kit assembly and can build abrasive kits to your exact specifications, including product selection, grit assortments, quantities, packaging formats, and accessory inclusions. You can combine any of our manufactured products—buffing wheels, sanding discs, flap discs, sanding belts, cutting wheels, compound bars, and accessories—into a kit, plus add non-abrasive items such as microfiber towels, safety gear, applicators, or instructions. We work from your BOM (bill of materials) to develop a custom quotation and pre-production sample.",
    },
    {
      q: "What retail packaging formats do you offer for kits?",
      a: "We offer a full range of retail packaging for abrasive and polishing kits including color boxes, blister card packs with hang tabs for peg display, clamshell packs, shrink-wrapped bundles, durable plastic carrying cases with custom foam inserts, wooden boxes for premium jewelry kits, and tin containers. All packaging can be printed with your brand, product images, multilingual descriptions, features and benefits, safety warnings, and UPC/FNSKU barcode labels. Packaging design and artwork services are available for buyers without finalized designs.",
    },
    {
      q: "Do you provide FBA-ready kit packaging?",
      a: "Yes. We are experienced in preparing abrasive and polishing kits for Amazon FBA fulfillment. Our FBA prep service includes polybag application with suffocation warnings (where required by Amazon), FNSKU barcode labels applied to each sellable unit, carton content labeling, carton weight and dimension labels, and shipment preparation per Amazon's current FBA packaging and prep requirements. We can also apply Amazon's \"Ships in Own Container\" (SIOC) frustration-free packaging for qualifying kit products.",
    },
    {
      q: "How long does kit production and assembly take?",
      a: "Standard lead time for abrasive kit production is 30 to 40 days from order confirmation and sample approval. This includes production of the individual abrasive components, printing and production of packaging materials, kitting and assembly, quality inspection, and carton packing. Custom packaging with new tooling, injection-molded cases, or complex die-cut boxes may extend lead time to 45-55 days. Rush production is available for urgent retail launch timelines on a case-by-case basis.",
    },
    {
      q: "Can I include my own branded materials or inserts in the kits?",
      a: "Yes. We can include your supplied branded materials such as instruction manuals, warranty cards, marketing inserts, catalogs, discount cards, or other promotional items in the kits. Buyers provide the printed materials delivered to our factory, or we can print materials in China to your specifications. We also handle the arrangement of items in custom foam inserts or molded trays to ensure a professional presentation when the customer opens the kit. Discuss your specific insert and unboxing requirements with our sales team.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Abrasive Kits", href: "/abrasive-kits" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">B2B Wholesale &amp; Private Label</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              Abrasive Kit Wholesale &amp; Polishing Kits Private Label
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              OEM private label abrasive kits, buffing wheel kits, sanding disc assortments, polishing compound sets, and drill accessory kits. Retail-ready packaging, FBA compliant, custom assortments. MOQ 500 sets from China manufacturer.
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
                <div className="text-2xl font-black text-industry-orange">MOQ 500</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Sets per Kit SKU</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">Retail-Ready</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Packaging</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">FBA Prep</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">Custom</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">Assortments</div>
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
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">Kitting &amp; Private Label</span>
                <h2 className="text-2xl font-extrabold text-white tracking-wide">
                  Wholesale Abrasive Kits With Custom Kitting, Assortment, and Retail Packaging
                </h2>
                <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                  <p>
                    SCOTTCHEN specializes in OEM abrasive kit manufacturing and private label polishing kit assembly for distributors, e-commerce sellers, tool brands, hardware chains, and retail private label programs worldwide. As a China-based abrasive kit manufacturer producing all core abrasive products in-house—buffing wheels, sanding discs, flap discs, sanding belts, cutting wheels, polishing compounds, and shank-mounted accessories—we have full control over component quality, pricing, and kitting customization. This vertical integration allows us to offer highly competitive pricing on assembled retail kits while maintaining strict quality control over every item that goes into the package.
                  </p>
                  <p>
                    Our kitting and assembly services go beyond simply bundling products into a box. We work with you to design the optimal kit assortment for your target market—whether that is an automotive wheel polishing kit for car enthusiasts, a knife making belt kit for bladesmiths, a general-purpose drill polishing kit for DIY consumers, or a sanding disc assortment pack for woodworkers. We select appropriate grit progressions, quantities, accessory inclusions, and packaging formats based on your channel (retail shelf, Amazon, distributor catalog, or promotional gift program).
                  </p>
                  <p>
                    All kit assembly, quality inspection, and packaging is performed in our Shanghai facility under ISO 9001 quality management. Each kit is assembled according to an approved bill of materials, visually inspected before packing, and carton-labeled per your requirements. We have extensive experience preparing kits for Amazon FBA fulfillment including FNSKU labeling, polybag prep, suffocation warnings, and SIOC (Ships in Own Container) packaging. Whether you are launching a new private label kit brand or scaling an existing product line, our engineering and packaging teams support you from concept development through mass production.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  Abrasive &amp; Polishing Kit Types
                </h2>
                <div className="space-y-6">
                  {kits.map((kit) => (
                    <div key={kit.name} className="glass-panel p-6 rounded-lg space-y-4 border border-industry-slate-800">
                      <h3 className="text-lg font-bold text-industry-orange">{kit.name}</h3>
                      <p className="text-sm text-industry-slate-300 leading-relaxed">{kit.desc}</p>
                      <div className="border-t border-industry-slate-800/80 pt-4">
                        <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">What's Included:</span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-industry-slate-400 font-mono">
                          {kit.included.map((item) => (
                            <li key={item} className="flex items-center space-x-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-industry-orange shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  Why Choose Our Abrasive Kits
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Retail-Ready Packaging", desc: "Blister cards, color boxes, clamshells, plastic carry cases, and wooden boxes with hang tabs, windows, and custom printed branding for immediate shelf placement." },
                    { title: "Custom Assortments", desc: "Fully customizable kit contents based on your bill of materials—mix any combination of abrasives, compounds, accessories, and non-abrasive items in one package." },
                    { title: "Private Label Branding", desc: "Your logo, brand colors, product images, multilingual descriptions, features and benefits, and safety warnings printed directly on packaging." },
                    { title: "FBA-Ready Prep", desc: "Complete FBA preparation including FNSKU labeling, polybag application, suffocation warnings, carton labels, and SIOC-compliant packaging for Amazon sellers." },
                    { title: "All Components Made In-House", desc: "Buffing wheels, sanding discs, belts, compounds, and shank accessories are produced in our own factory for consistent quality control and competitive pricing." },
                    { title: "Marketing Support Assets", desc: "We provide high-resolution product images, lifestyle photography, A+ content copy, and video assets for your Amazon listings and marketing materials." },
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
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">OEM &amp; Private Label Process</span>
                <h2 className="text-xl font-extrabold text-white">Custom Kitting &amp; Private Label Workflow</h2>
                <div className="text-sm text-industry-slate-300 leading-relaxed space-y-4">
                  <p>
                    The private label abrasive kit development process begins with your product concept and target market. We discuss your target audience, retail channel, price point, preferred contents, packaging format, and branding direction. Our team then proposes a kit configuration with a bill of materials, packaging mockups, and a detailed quotation including tooling costs, unit pricing, MOQ, and lead time.
                  </p>
                  <p>
                    Upon quotation acceptance and deposit, we produce pre-production samples with your artwork and packaging for your approval. This sample stage allows you to evaluate the physical kit, test product performance, review packaging print quality, and request any adjustments before mass production. Production begins only after written sample approval to ensure the final product meets your specifications exactly.
                  </p>
                  <p>
                    During production, all abrasive components are manufactured in our factory to approved specifications, packaging is printed and assembled, and kits are assembled by trained kitting staff following detailed work instructions. Each kit undergoes visual inspection before final carton packing. For FBA orders, we apply FNSKU labels and prepare cartons per Amazon's requirements. We can also arrange consolidated shipping with your other SCOTTCHEN products in a single container to reduce logistics costs.
                  </p>
                </div>
                <div className="pt-2">
                  <Link href="/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover">
                    Start Your Private Label Kit Project
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
                  loading="lazy"
                  src="/images/hero_abrasives_kit.webp"
                  alt="SCOTTCHEN Abrasive Kits and Polishing Kits Wholesale"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Kitting Parameters
                </h3>
                <div className="space-y-4 text-xs font-mono">
                  <div><span className="text-industry-slate-500 block">MOQ:</span><span className="text-white font-bold">500 sets per kit configuration</span></div>
                  <div><span className="text-industry-slate-500 block">Lead Time:</span><span className="text-white font-bold">30 - 40 days (45-55 with custom cases)</span></div>
                  <div><span className="text-industry-slate-500 block">Packaging:</span><span className="text-white font-bold">Color boxes, blister, clamshell, cases, tins</span></div>
                  <div><span className="text-industry-slate-500 block">FBA Prep:</span><span className="text-white font-bold">FNSKU labels, polybags, SIOC packaging</span></div>
                  <div><span className="text-industry-slate-500 block">Artwork:</span><span className="text-white font-bold">Custom design services available</span></div>
                </div>
                <div className="pt-4 border-t border-industry-slate-850">
                  <Link href="/sample-kit" className="w-full inline-flex justify-center items-center rounded border border-industry-orange text-industry-orange font-bold uppercase tracking-wider py-3 hover:bg-industry-orange hover:text-white transition-all text-xs">
                    Request Sample Kit
                  </Link>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  Individual Product Categories
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/buffing-wheels" className="text-industry-orange hover:underline">Buffing Wheels</Link></li>
                  <li><Link href="/sanding-discs" className="text-industry-orange hover:underline">Sanding Discs</Link></li>
                  <li><Link href="/flap-discs" className="text-industry-orange hover:underline">Flap Discs</Link></li>
                  <li><Link href="/sanding-belts" className="text-industry-orange hover:underline">Sanding Belts</Link></li>
                  <li><Link href="/cutting-wheels" className="text-industry-orange hover:underline">Cutting Wheels</Link></li>
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
                "@id": absoluteUrl("/abrasive-kits#productgroup"),
                "name": "SCOTTCHEN Abrasive Kits & Polishing Kits",
                "description": "OEM private label abrasive kits, buffing wheel kits, sanding disc assortments, polishing sets, and drill accessory kits with retail-ready packaging.",
                "url": absoluteUrl("/abrasive-kits"),
                "brand": { "@type": "Brand", "name": "SCOTTCHEN" },
              },
              {
                "@type": "FAQPage",
                "@id": absoluteUrl("/abrasive-kits#faqpage"),
                "mainEntity": faqs.map((faq) => ({
                  "@type": "Question",
                  "name": faq.q,
                  "acceptedAnswer": { "@type": "Answer", "text": faq.a },
                })),
              },
            ],
          }),
        }}
      />

      <CTASection />
    </div>
  );
}
