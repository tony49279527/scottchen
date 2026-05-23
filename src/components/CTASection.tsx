import Link from "next/link";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = "Ready to Evaluate Our Surface Finishing Accessories?",
  subtitle = "Whether you are a tool brand expanding your catalog, a hardware distributor, or an online seller seeking custom retail-ready packaging, we have sourcing paths tailored to you.",
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-r from-industry-slate-950 via-industry-slate-900 to-industry-slate-950 border-t border-b border-industry-slate-800 py-16">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-industry-slate-400">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded bg-industry-orange px-8 py-4 text-base font-bold uppercase tracking-wider text-white transition-all-custom hover:bg-industry-orange-hover hover:scale-[1.02] shadow-lg shadow-industry-orange/20"
          >
            Request OEM Quote
          </Link>
          <Link
            href="/sample-kit"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded border-2 border-industry-slate-700 bg-transparent px-8 py-3.5 text-base font-bold uppercase tracking-wider text-white transition-all-custom hover:bg-industry-slate-800"
          >
            Get Sample Kit
          </Link>
          <a
            href="/catalog.pdf"
            download="APEXFINISH_B2B_Catalog.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-semibold text-industry-slate-400 hover:text-white transition-all-custom underline underline-offset-4 py-2"
          >
            Download Specifications Catalog
          </a>
        </div>
        <div className="mt-6 flex justify-center items-center space-x-6 text-xs text-industry-slate-500 font-mono">
          <span>&bull; Free Global Sample Shipping for Verified Businesses</span>
          <span>&bull; FBA Packaging Ready</span>
          <span>&bull; Mixed SKU Testing Orders</span>
        </div>
      </div>
    </section>
  );
}
