import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import {
  absoluteUrl,
  SITE_EMAIL,
  SITE_NAME,
  SITE_UPDATED,
} from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "About SCOTTCHEN | Shanghai Abrasive Sourcing & OEM Support",
  description:
    "Shanghai-based B2B abrasive sourcing and OEM support. Production source, documents, terms and evidence are confirmed by SKU in writing.",
  path: "/about",
  alternatePath: "/zh/about",
});

const highlights = [
  { label: "Base", value: "Shanghai, China" },
  { label: "Scope", value: "6 abrasive product families" },
  { label: "Focus", value: "OEM / private-label abrasive kits" },
  { label: "Sales", value: SITE_EMAIL },
] as const;

const productLines = [
  { name: "Buffing & polishing wheels", href: "/buffing-wheels" },
  { name: "Sanding discs & fiber discs", href: "/sanding-discs" },
  { name: "Flap discs", href: "/flap-discs" },
  { name: "Sanding belts", href: "/sanding-belts" },
  { name: "Cutting wheels", href: "/cutting-wheels" },
  { name: "Private-label abrasive kits", href: "/abrasive-kits" },
] as const;

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": absoluteUrl("/about#webpage"),
        url: absoluteUrl("/about"),
        name: "About SCOTTCHEN",
        description:
          "Company overview for SCOTTCHEN, a Shanghai-based B2B abrasive sourcing and OEM project support team.",
        inLanguage: "en",
        dateModified: SITE_UPDATED,
        isPartOf: { "@id": absoluteUrl("/#website") },
        about: { "@id": absoluteUrl("/#organization") },
        mainEntity: { "@id": absoluteUrl("/#organization") },
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <section className="border-b border-industry-slate-800 bg-industry-slate-950 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
            ]}
          />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            Company Overview
          </span>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            About SCOTTCHEN
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-industry-slate-300">
            SCOTTCHEN provides Shanghai-based B2B sourcing and OEM project support for
            buffing wheels, sanding discs, flap discs, sanding belts, cutting wheels and
            private-label surface-finishing kits.
          </p>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-12 border-b border-industry-slate-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label} className="glass-panel rounded-lg p-5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-industry-slate-500">
                  {item.label}
                </div>
                <div className="mt-2 text-sm font-bold text-white break-all">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-industry-slate-950 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl font-extrabold text-white">Who we are</h2>
            <p className="text-sm leading-relaxed text-industry-slate-300">
              SCOTTCHEN supports B2B buyers who need abrasive accessories with clear
              specifications, private-label packaging options and written quotation terms.
              The responsible contracting entity, production source and process scope are
              identified for the quoted SKU rather than inferred from this website.
            </p>
            <p className="text-sm leading-relaxed text-industry-slate-300">
              Buyers typically engage us for OEM kit design, mixed-SKU assortments,
              buyer-approved barcode and packaging preparation, sample evaluation and
              replenishment planning. MOQ, sample charges, lead time, payment terms,
              Incoterms, certificate scope and test-report availability are confirmed in
              writing for each project.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/china-abrasive-manufacturer"
                className="rounded bg-industry-orange-cta px-5 py-3 text-sm font-bold text-white"
              >
                View sourcing profile
              </Link>
              <Link
                href="/supplier-profile"
                className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white"
              >
                Supplier due diligence
              </Link>
              <Link
                href="/contact"
                className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white"
              >
                Contact sales
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="glass-panel overflow-hidden rounded-xl border border-industry-slate-800">
              <Image
                width={1024}
                height={1024}
                sizes="(min-width: 1024px) 36vw, 92vw"
                quality={70}
                loading="lazy"
                src="/images/hero_abrasives_kit.webp"
                alt="SCOTTCHEN abrasive accessory kit product photography"
                className="h-56 w-full object-cover opacity-90"
              />
              <div className="space-y-2 p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  Product families
                </h3>
                <ul className="space-y-2 text-sm text-industry-slate-300">
                  {productLines.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-industry-orange hover:underline">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-industry-slate-800 bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white">How buyers usually start</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Share target SKU & market",
                body: "Tell us the product family, size, grit or ply, packaging format and destination market.",
              },
              {
                step: "02",
                title: "Request samples or RFQ",
                body: "Verified commercial buyers can request samples and a written quotation with MOQ and lead-time assumptions.",
              },
              {
                step: "03",
                title: "Approve specs before mass run",
                body: "Dimensions, materials, packaging artwork and acceptance criteria are locked before production scheduling.",
              },
            ].map((item) => (
              <div key={item.step} className="glass-panel rounded-lg p-6">
                <div className="font-mono text-xs text-industry-orange">{item.step}</div>
                <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-industry-slate-400">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-industry-slate-400">
            Buyer evidence center:{" "}
            <Link href="/evidence-center" className="text-industry-orange hover:underline">
              Review current evidence status
            </Link>
            . Brand name on this B2B site: {SITE_NAME}.
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CTASection
        title="Talk with the SCOTTCHEN B2B team"
        subtitle="Share your target SKU, packaging and destination market. We respond with a written quotation path for verified commercial buyers."
      />
    </div>
  );
}
