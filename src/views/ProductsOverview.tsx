import { Link } from "react-router-dom";
import CTASection from "@/components/CTASection";

export default function ProductsOverview() {
  const categories = [
    {
      family: "Polishing & Finishing (Core)",
      items: [
        {
          name: "Buffing & Polishing Wheels",
          url: "/products/buffing-polishing-wheels",
          types: "Cotton spiral stitched, loose cotton flannel, airway wheels, sisal wheels, felt wheels, drill polishers.",
          moq: "500 pcs/size",
          pack: "Bulk carton / customized private label box",
        },
        {
          name: "Polishing Wheel Kits",
          url: "/products/buffing-polishing-wheels",
          types: "Drill polishing kits, bench grinder restoration kits, mixed size compound kits, retail blister packs.",
          moq: "500 sets",
          pack: "Double blister pack / custom color box / polybag",
        },
      ],
    },
    {
      family: "Sanding & Substrate Prep",
      items: [
        {
          name: "Sanding Sheets & Sandpaper Rolls",
          url: "/products/sanding-grinding-accessories",
          types: "Woodworking sandpaper, automotive wet/dry sheets, furniture refinishing sanding rolls, assorted grits.",
          moq: "10,000 sheets / 200 rolls",
          pack: "Grit-assorted sleeves, cardboard roll dispenser boxes",
        },
        {
          name: "Sanding Screens & Drywall Abrasives",
          url: "/products/sanding-grinding-accessories",
          types: "Silicon carbide drywall mesh sanding screen, dust-free sanding screens, contractor rolls.",
          moq: "5,000 sheets",
          pack: "Individually wrapped paper covers / shrink wrap",
        },
        {
          name: "Detail Sanding Tools",
          url: "/products/sanding-grinding-accessories",
          types: "Sanding sticks, mini matchstick details, mold polishing blocks, scale craft smoothing rods.",
          moq: "1,000 packs",
          pack: "Clear hanging bags / retail barcode header cards",
        },
      ],
    },
    {
      family: "Heavy Grinding & Special Substrates",
      items: [
        {
          name: "Grinding & Fiber Discs",
          url: "/products/sanding-grinding-accessories",
          types: "Zirconia alumina fiber discs, angle grinder discs, metal weld removal, fiberglass sanding backings.",
          moq: "2,000 discs/grit",
          pack: "Shrink packs / inner white boxes / bulk export cartons",
        },
        {
          name: "Diamond & Specialty Abrasives",
          url: "/products/sanding-grinding-accessories",
          types: "Diamond polishing sheets, stone grinding discs, marble and granite grinders, tile tile/porcelain finishers.",
          moq: "500 discs",
          pack: "Inner boxes with warning cards",
        },
        {
          name: "Sanding Dispenser Kits",
          url: "/products/sanding-grinding-accessories",
          types: "Workshop multi-roll dispenser kits, sandpaper roll refills, assorted grit rolls with racks.",
          moq: "300 racks",
          pack: "Color display box with metal tearing edge",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header section */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">SPECIFICATIONS CATALOG</span>
          <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
            Surface Finishing Accessories Catalog
          </h1>
          <p className="mt-4 text-base text-industry-slate-400 max-w-3xl leading-relaxed">
            ApexFinish specializes in supplying configured, customized accessory kits to tool brand catalogs and high-volume retail sellers. Explore our technical dimensions, standard MOQ parameters, and packaging options.
          </p>
        </div>
      </section>

      {/* Catalog Matrix */}
      <section className="py-16 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {categories.map((familyGroup) => (
              <div key={familyGroup.family} className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  {familyGroup.family}
                </h2>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {familyGroup.items.map((item) => (
                    <div key={item.name} className="glass-panel p-8 rounded-lg flex flex-col justify-between hover:border-industry-slate-700 transition-colors">
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-bold text-white">{item.name}</h3>
                          <span className="text-[10px] font-mono text-industry-orange bg-industry-orange/10 border border-industry-orange/20 px-2 py-0.5 rounded">
                            Verified B2B MOQ
                          </span>
                        </div>
                        <p className="text-sm text-industry-slate-400 leading-relaxed">
                          <strong className="text-industry-slate-300">Description / Subtypes:</strong> {item.types}
                        </p>
                        
                        {/* B2B Sourcing Parameters */}
                        <div className="grid grid-cols-2 gap-4 border-t border-industry-slate-850 pt-4 text-xs font-mono">
                          <div>
                            <span className="text-industry-slate-500 block">Sourcing MOQ:</span>
                            <span className="text-white font-bold">{item.moq}</span>
                          </div>
                          <div>
                            <span className="text-industry-slate-500 block">Standard Packaging:</span>
                            <span className="text-white font-bold leading-normal">{item.pack}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 flex items-center justify-between border-t border-industry-slate-850 pt-4">
                        <Link
                          to={item.url}
                          className="text-xs font-bold text-industry-orange hover:text-industry-orange-light uppercase tracking-wider transition-colors"
                        >
                          View Full Spec Sheet &rarr;
                        </Link>
                        <Link
                          to="/contact"
                          className="text-xs font-bold text-white bg-industry-slate-800 hover:bg-industry-slate-700 px-4 py-2 rounded transition-colors"
                        >
                          Request Spec Quote
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Persistent CTA Banner */}
      <CTASection />
    </div>
  );
}
