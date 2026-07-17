import type { Metadata } from "next";
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
  title: "SCOTTCHEN Supplier Profile for B2B Buyers",
  description:
    "Review SCOTTCHEN's B2B product scope, private-label workflow, contact channels and the buyer verification checklist for RFQ preparation.",
  path: "/supplier-profile",
  alternatePath: "/zh/supplier-profile",
});

const facts = [
  ["Brand", SITE_NAME],
  ["B2B scope", "Abrasive, sanding and polishing accessory kits"],
  ["Buyer types", "Tool brands, distributors, industrial suppliers and online sellers"],
  ["Languages", "English and Chinese"],
  ["Sales contact", SITE_EMAIL],
] as const;

const verificationItems = [
  "Legal supplier name, registered address and beneficiary account shown on the commercial quotation or contract",
  "SKU-level specification covering dimensions, material, grit, backing, interface and packaging",
  "Approved reference sample and written acceptance criteria before mass production",
  "Applicable inspection records, certificate scope and third-party inspection terms",
  "Named Incoterms rule, delivery point, payment terms and responsibility for freight or customs",
];

export default function SupplierProfile() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": absoluteUrl("/supplier-profile#about"),
        url: absoluteUrl("/supplier-profile"),
        name: "SCOTTCHEN Supplier Profile",
        description:
          "Published B2B scope, contact channel, verification boundary and buyer due-diligence checklist for SCOTTCHEN.",
        inLanguage: "en",
        dateModified: SITE_UPDATED,
        isPartOf: { "@id": absoluteUrl("/#website") },
        about: { "@id": absoluteUrl("/#organization") },
        mainEntity: { "@id": absoluteUrl("/#organization") },
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/supplier-profile#published-facts"),
        name: "Published SCOTTCHEN supplier facts",
        itemListElement: facts.map(([label, value], index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: label,
          description: value,
        })),
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/supplier-profile#buyer-verification-checklist"),
        name: "Buyer verification checklist before purchase order",
        itemListElement: verificationItems.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item,
        })),
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <section className="border-b border-industry-slate-800 bg-industry-slate-950 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Supplier Profile", href: "/supplier-profile" },
            ]}
          />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            Buyer Due Diligence
          </span>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            SCOTTCHEN Supplier Profile
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-industry-slate-300">
            A concise record of what this site publishes, how B2B projects are scoped,
            and which supplier facts buyers should verify before issuing a purchase order.
          </p>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="glass-panel rounded-xl p-7 lg:col-span-3 sm:p-9">
            <h2 className="text-2xl font-bold text-white">Published entity facts</h2>
            <dl className="mt-6 divide-y divide-industry-slate-800 text-sm">
              {facts.map(([label, value]) => (
                <div key={label} className="grid gap-2 py-4 sm:grid-cols-3">
                  <dt className="font-bold text-industry-slate-300">{label}</dt>
                  <dd className="text-industry-slate-200 sm:col-span-2">
                    {label === "Sales contact" ? (
                      <a className="text-industry-orange-light hover:underline" href={`mailto:${SITE_EMAIL}`}>
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="rounded-xl border border-industry-orange/30 bg-industry-orange/5 p-7 lg:col-span-2">
            <h2 className="text-xl font-bold text-white">How we confirm supplier details</h2>
            <p className="mt-4 text-sm leading-relaxed text-industry-slate-300">
              SCOTTCHEN is the product brand used across this B2B site. For formal due
              diligence, the quotation must identify the contracting entity, production
              location and payment beneficiary. Any certificate or inspection-document
              availability must be stated against the exact SKU; this page does not imply
              that an original currently exists. Verify the written documents before PO placement.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-industry-slate-400">
              Last reviewed: {SITE_UPDATED}
            </p>
          </aside>
        </div>
      </section>

      <section className="border-y border-industry-slate-800 bg-industry-slate-950 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white">What can be scoped in an RFQ</h2>
              <p className="mt-4 leading-relaxed text-industry-slate-300">
                Buyers can request a project quotation covering product configuration,
                mixed-kit composition, private-label packaging, barcode placement,
                inspection scope and shipping assumptions.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link className="rounded bg-industry-orange-cta px-5 py-3 text-sm font-bold text-white" href="/contact">
                  Submit an RFQ
                </Link>
                <Link className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white" href="/products">
                  Review product scope
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Terms requiring confirmation</h2>
              <p className="mt-4 leading-relaxed text-industry-slate-300">
                MOQ, sample charges, order credits, lead time, tolerances, performance
                tests, certificates and logistics are configuration-dependent. They
                become commitments only when written into the quotation, quality plan
                or contract.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            Before Purchase Order
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white">Buyer verification checklist</h2>
          <ol className="mt-8 grid gap-4">
            {verificationItems.map((item, index) => (
              <li key={item} className="glass-panel flex gap-4 rounded-lg p-5">
                <span className="font-mono text-xl font-black text-industry-orange-light">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed text-industry-slate-300">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CTASection />
    </div>
  );
}
