import Link from "next/link";

const guides = [
  {
    href: "/alternatives/abrasive-kit-sourcing-alternatives",
    label: "Sourcing alternatives",
    title: "Compare five abrasive-kit sourcing models",
    summary:
      "Decide when OEM production sourcing, a distributor, a trading company, a contract packer, or in-house assembly fits the buying brief.",
  },
  {
    href: "/compare/oem-vs-off-the-shelf-abrasive-kits",
    label: "OEM comparison",
    title: "OEM vs off-the-shelf abrasive kits",
    summary:
      "Compare branding, assortment control, MOQ, validation work and replenishment tradeoffs before requesting quotes.",
  },
  {
    href: "/solutions/automotive-polishing-kits",
    label: "Industry solution",
    title: "Automotive polishing kits for aftermarket brands",
    summary:
      "Map wheel-restoration and metal-polishing workflows to a private-label kit, sample plan and packaging specification.",
  },
] as const;

export default function DecisionGuides() {
  return (
    <section className="border-y border-industry-slate-800 bg-industry-slate-950 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            Buyer Decision Guides
          </span>
          <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
            Choose a sourcing route before you compare quotations
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-industry-slate-400">
            These short guides separate product fit, customization and verification
            questions so procurement teams can issue a more comparable RFQ.
          </p>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {guides.map((guide) => (
            <article key={guide.href} className="glass-panel rounded-lg p-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-industry-orange-light">
                {guide.label}
              </span>
              <h3 className="mt-3 text-lg font-bold text-white">{guide.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-industry-slate-400">
                {guide.summary}
              </p>
              <Link
                href={guide.href}
                className="mt-5 inline-flex text-sm font-bold text-industry-orange hover:text-industry-orange-light"
              >
                Open guide &rarr;
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
