import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { absoluteUrl, SITE_UPDATED } from "@/lib/site";

export interface ProcurementGuideData {
  path: string;
  language: "en" | "zh-CN";
  eyebrow: string;
  title: string;
  intro: string;
  sections: ReadonlyArray<{
    title: string;
    body: string;
    items: readonly string[];
  }>;
  supplierQuestions: readonly string[];
  relatedLinks: ReadonlyArray<{ label: string; href: string }>;
}

export default function ProcurementGuidePage({ data }: { data: ProcurementGuideData }) {
  const isZh = data.language === "zh-CN";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": absoluteUrl(`${data.path}#article`),
        headline: data.title,
        description: data.intro,
        inLanguage: data.language,
        mainEntityOfPage: absoluteUrl(data.path),
        datePublished: SITE_UPDATED,
        dateModified: SITE_UPDATED,
        author: { "@id": absoluteUrl("/#organization") },
        publisher: { "@id": absoluteUrl("/#organization") },
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl(`${data.path}#checklist`),
        name: `${data.title} checklist`,
        itemListElement: data.sections.flatMap((section) => section.items).map((item, index) => ({
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
            ariaLabel={isZh ? "面包屑导航" : "Breadcrumb"}
            items={[
              { label: isZh ? "首页" : "Home", href: isZh ? "/zh" : "/" },
              { label: isZh ? "采购资源" : "Buyer Resources", href: isZh ? "/zh/resources" : "/resources" },
              { label: data.title, href: data.path },
            ]}
          />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            {data.eyebrow}
          </span>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            {data.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-industry-slate-300">
            {data.intro}
          </p>
          <div className="mt-6 text-xs text-industry-slate-400">
            {isZh ? `复核日期：${SITE_UPDATED}` : `Reviewed ${SITE_UPDATED}`}
          </div>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-5xl space-y-7 px-4 sm:px-6 lg:px-8">
          {data.sections.map((section, index) => (
            <article key={section.title} className="glass-panel rounded-xl p-7 sm:p-9">
              <div className="flex flex-col gap-5 sm:flex-row">
                <div className="font-mono text-3xl font-black text-industry-orange-light">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="min-w-0">
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  <p className="mt-3 leading-relaxed text-industry-slate-300">{section.body}</p>
                  <ul className="mt-5 grid gap-3 text-sm text-industry-slate-300 sm:grid-cols-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 rounded-lg border border-industry-slate-800 bg-industry-slate-950/50 p-4">
                        <span aria-hidden="true" className="text-industry-orange-light">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-industry-slate-800 bg-industry-slate-950 py-16">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
              {isZh ? "供应商核验" : "Supplier Verification"}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white">
              {isZh ? "发送询价前要问的问题" : "Questions to ask before issuing the order"}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-industry-slate-400">
              {isZh
                ? "要求回答对应到具体SKU、文件编号和订单责任，不接受只写在网站上的通用承诺。"
                : "Require answers tied to the exact SKU, document number and order responsibility, not a generic website claim."}
            </p>
          </div>
          <ol className="grid gap-3 lg:col-span-3">
            {data.supplierQuestions.map((question, index) => (
              <li key={question} className="rounded-lg border border-industry-slate-800 bg-industry-slate-900 p-4 text-sm text-industry-slate-200">
                <span className="mr-3 font-mono font-bold text-industry-orange-light">{index + 1}.</span>
                {question}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white">{isZh ? "继续准备采购" : "Continue preparing the sourcing brief"}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-lg border border-industry-slate-700 p-5 font-bold text-white hover:border-industry-orange hover:text-industry-orange-light">
                {link.label} &rarr;
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CTASection />
    </div>
  );
}
