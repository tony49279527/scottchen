import { Link } from "react-router-dom";
import CTASection from "@/components/CTASection";

export default function ApplicationsOverview() {
  const applications = [
    {
      id: "metalworking",
      name: "Metalworking Surface Prep & deburring",
      tag: "Heavy Weld Dressing & Rust Removal",
      challenges: "Welded steel plates, rusted tubular structures, and rough cast metals require high-grit grinding before receiving finishes. Standard sandpapers tear easily on metal edges; vulcanized backing fiber discs are required.",
      products: "Zirconia fiber discs, spiral stitched cotton buffing wheels, emery compound bars.",
      packaging: "Bulk supply cartons, heavy heat-shrink packs of 25 discs.",
    },
    {
      id: "woodworking",
      name: "Woodworking & Furniture Refinishing",
      tag: "Calibrated Grits for Grain Smoothing",
      challenges: "Furniture manufacturing, paint stripping, and contour sanding require consistent grits to prevent deep, uneven scratch lines. Sanding paper must be flexible enough to conform to curved chair legs and mouldings.",
      products: "Alumina oxide sanding rolls, C-weight paper sheets, detail mini sanding sticks.",
      packaging: "Cardboard dispenser boxes with metal tearing borders, assorted grit sheets sleeves.",
    },
    {
      id: "automotive",
      name: "Automotive Restoration & Wheel Polishing",
      tag: "Detail Buffing & Rim De-oxidation",
      challenges: "Mag wheels, chrome trim exhaust pipes, and body panels require drill-compatible shank tools for tight spaces. Compounds must match soft chrome or aluminum alloys without causing micro-scratch haze.",
      products: "Shank-mounted cone/cylinder drill polishing wheels, green chromium oxide bars, fine wet/dry sandpapers.",
      packaging: "Double blister retail hanger cards with wheel-shank adapters.",
    },
    {
      id: "jewelry",
      name: "Jewelry, Crafts & Model Detailing",
      tag: "Precision Small-Scale Surface Finishing",
      challenges: "Mold lines in resin models, silver jewelry, and delicate craft materials require miniature tooling. Standard orbital pads are too aggressive and round off fine design edges.",
      products: "Mini detail sanding sticks, micro-grit belt refills, loose cotton flannel buffer wheels.",
      packaging: "Clear plastic hanging display bags with retail card headers.",
    },
    {
      id: "drywall",
      name: "Drywall & Contractor Renovation",
      tag: "Mesh Sanding Screens for Dust-Free Operation",
      challenges: "Plaster and joint compounds clog typical sandpaper grains instantly, reducing performance. Open-mesh fiberglass screens are necessary to let dust pass through to vacuum systems.",
      products: "Drywall mesh sanding screen sheets, mesh rolls, contractor pack consumables.",
      packaging: "Bulk contract cases, paper-wrapped retail packs of 10 sheets.",
    },
    {
      id: "online-sellers",
      name: "Online Seller Specialty Accessory Kits",
      tag: "Amazon, eBay, and Shopify Retail-Ready Packs",
      challenges: "Abrasives online suffer from high return rates if tool compatibility is ambiguous. Custom kits must be lightweight to qualify for low tier storage fees, and include clear guides to prevent bad consumer feedback.",
      products: "Pre-bundled polishing wheel kits, assorted sandpaper rolls, multi-grit detail stick packs.",
      packaging: "Amazon-ready mailer boxes with barcode sticker applications, instruction sheets.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page header */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
          <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">APPLICATION WORKFLOWS</span>
          <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
            Scenario-Specific Surface Finishing
          </h1>
          <p className="mt-4 text-base text-industry-slate-400 max-w-3xl leading-relaxed">
            We build accessory combinations matched to specific substrates. Align your catalog with the exact workflows of your target buyers.
          </p>
        </div>
      </section>

      {/* Applications Matrix */}
      <section className="py-16 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app) => (
              <div
                key={app.id}
                id={app.id}
                className="glass-panel p-8 rounded-lg flex flex-col justify-between hover:border-industry-orange/40 transition-colors group border-t-2 border-t-industry-slate-800 focus-within:border-industry-orange"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-industry-orange font-mono uppercase tracking-wide">
                      {app.tag}
                    </span>
                    <span className="text-[10px] font-mono text-industry-slate-500 uppercase bg-industry-slate-950 px-2 py-0.5 rounded border border-industry-slate-800">
                      Workflow ID: {app.id.substring(0, 3).toUpperCase()}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-extrabold text-white group-hover:text-industry-orange transition-colors">
                    {app.name}
                  </h3>
                  
                  <p className="text-sm text-industry-slate-300 leading-relaxed pt-2">
                    <strong className="text-white text-xs block uppercase mb-1">Process Challenge:</strong>
                    {app.challenges}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-industry-slate-850 pt-4 text-xs font-mono">
                    <div>
                      <span className="text-industry-slate-500 block uppercase">Recommended Tools:</span>
                      <span className="text-white font-bold leading-normal">{app.products}</span>
                    </div>
                    <div>
                      <span className="text-industry-slate-500 block uppercase">Sourcing Packaging:</span>
                      <span className="text-white font-bold leading-normal">{app.packaging}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-industry-slate-850 pt-4">
                  <Link
                    to="/contact"
                    className="text-xs font-bold text-industry-orange hover:text-industry-orange-light uppercase tracking-wider transition-colors"
                  >
                    Request Application Quote &rarr;
                  </Link>
                  <Link
                    to="/sample-kit"
                    className="text-xs font-bold text-white bg-industry-slate-850 hover:bg-industry-slate-800 px-4 py-2 rounded transition-colors"
                  >
                    Request Sample Kit
                  </Link>
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
