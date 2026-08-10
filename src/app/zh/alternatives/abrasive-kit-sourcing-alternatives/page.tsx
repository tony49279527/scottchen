import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import DecisionGuides from "@/components/DecisionGuides";
import { createPageMetadata } from "@/lib/seo";
import { buildFaqPageSchema } from "@/lib/schema";
import { pageDateForPath } from "@/lib/pageDates";
import { absoluteUrl, SITE_UPDATED } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "磨具套装五种 B2B 采购路径对比 | SCOTTCHEN",
  description:
    "对比 OEM 生产、经销商、贸易商、代工包装与自有组装五种磨具套装采购模式，选定路径后再发范围明确的询价。",
  path: "/zh/alternatives/abrasive-kit-sourcing-alternatives",
  alternatePath: "/alternatives/abrasive-kit-sourcing-alternatives",
  locale: "zh-CN",
});

const models = [
  {
    name: "OEM 生产采购",
    cost: "按规格报价",
    minimum: "按 SKU、包装与数量确认生产 MOQ",
    control: "产品、组合与包装控制高",
    bestFor: "有重复需求、贴牌简报清晰的品牌",
  },
  {
    name: "工业经销商",
    cost: "公开价或账户价",
    minimum: "多为较低整箱量",
    control: "低；沿用现有品牌与包装",
    bestFor: "定制前的快速补货与产品验证",
  },
  {
    name: "贸易公司",
    cost: "跨多家工厂报价",
    minimum: "随货源与拼柜计划变化",
    control: "中等；需核验生产来源与检验责任",
    bestFor: "单一货源无法覆盖的多品类组合",
  },
  {
    name: "代工包装商",
    cost: "组件 + 组装 + 包装",
    minimum: "随人工、刀模与印刷方式变化",
    control: "包装控制高；组件另行采购",
    bestFor: "已有合格组件供应商的买家",
  },
  {
    name: "自有组装",
    cost: "组件、人工、库存与合规成本",
    minimum: "灵活，受组件起订量限制",
    control: "最高；买家负责组装与放行",
    bestFor: "试销或本地有组套能力的团队",
  },
] as const;

const faqs = [
  {
    q: "不想做 OEM 生产采购时，磨具套装还有什么替代路径？",
    a: "低量验证通常最快的是经销商。若买家已有合格组件供应商，代工包装或自有组装能提供更高包装控制。",
  },
  {
    q: "什么情况下适合磨具套装 OEM 生产采购？",
    a: "当有重复 B2B 需求，且需要可控组合、贴牌包装、书面规格和可重复的样品到量产流程时更合适。每个报价 SKU 仍须单独确认生产来源。",
  },
  {
    q: "买家应如何横向比较采购报价？",
    a: "让所有候选方使用同一 SKU 清单、材料、尺寸、包装版稿、标签、检验范围、贸易条款与目的地假设。未书面确认的项目一律排除。",
  },
  {
    q: "SCOTTCHEN 是否公布固定套装价格？",
    a: "否。价格取决于组件、数量、包装、印刷、检验范围与运输假设，由书面报价确认。",
  },
] as const;

export default function ChineseAbrasiveKitSourcingAlternativesPage() {
  const reviewedAt = pageDateForPath("/zh/alternatives/abrasive-kit-sourcing-alternatives") ?? SITE_UPDATED;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/zh/alternatives/abrasive-kit-sourcing-alternatives#webpage"),
        url: absoluteUrl("/zh/alternatives/abrasive-kit-sourcing-alternatives"),
        name: "磨具套装五种 B2B 采购路径对比",
        description: "面向买家的五种磨具配件套装采购模式对比。",
        inLanguage: "zh-CN",
        dateModified: reviewedAt,
        isPartOf: { "@id": absoluteUrl("/#website") },
        about: { "@id": absoluteUrl("/#organization") },
      },
      buildFaqPageSchema(faqs),
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <section className="border-b border-industry-slate-800 bg-industry-slate-950 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "首页", href: "/zh" },
              { label: "采购路径对比", href: "/zh/alternatives/abrasive-kit-sourcing-alternatives" },
            ]}
          />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            B2B 采购路径
          </span>
          <h1 className="mt-3 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            磨具套装的五种 B2B 采购路径
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-industry-slate-300">
            重复贴牌项目更适合 OEM 生产采购；小批量试销通常更快走经销商。先比较五种模式再发 RFQ。
            SCOTTCHEN 提供 B2B 采购与 OEM 项目支持；生产来源按报价 SKU 书面确认，不能从本页推断。
          </p>
          <p className="mt-4 text-sm text-industry-slate-500">
            复核日期：{reviewedAt}。成本与起订量是决策因素，不是公开价目。
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/zh/contact" className="rounded bg-industry-orange-cta px-6 py-3 text-sm font-bold text-white">
              提交范围明确的询价
            </Link>
            <Link
              href="/zh/resources/abrasive-sourcing-checklist"
              className="rounded border border-industry-slate-700 px-6 py-3 text-sm font-bold text-white"
            >
              打开 RFQ 清单
            </Link>
            <Link
              href="/zh/compare/oem-vs-off-the-shelf-abrasive-kits"
              className="rounded border border-industry-slate-700 px-6 py-3 text-sm font-bold text-white"
            >
              OEM vs 现货对比
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white">采购模式对比</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-industry-slate-400">
            在各方按同一组合、质检计划、包装与运输假设报价前，成本和起订量不能直接横向比较。
          </p>
          <div className="mt-8 overflow-x-auto rounded border border-industry-slate-800">
            <table className="min-w-[900px] w-full text-left text-sm">
              <thead className="bg-industry-slate-950 text-industry-slate-300">
                <tr>
                  {["采购模式", "计价基础", "起订量", "买家控制力", "最适合"].map((heading) => (
                    <th key={heading} className="px-4 py-4 font-bold">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-industry-slate-800 bg-industry-slate-900 text-industry-slate-300">
                {models.map((model) => (
                  <tr key={model.name}>
                    <th className="px-4 py-4 font-bold text-white">{model.name}</th>
                    <td className="px-4 py-4">{model.cost}</td>
                    <td className="px-4 py-4">{model.minimum}</td>
                    <td className="px-4 py-4">{model.control}</td>
                    <td className="px-4 py-4">{model.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-y border-industry-slate-800 bg-industry-slate-950 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["1. 先定义决策目标", "确认本次上线更看重速度、贴牌控制、多品类拼柜，还是本地组装灵活性。"],
            ["2. 统一 RFQ 口径", "给每个候选方同一产品清单、目标数量、包装文件、验收标准与目的地假设。"],
            ["3. 下单前核验", "在采购订单前复核样品、供应商身份、质量证据、收款主体与书面商业条款。"],
          ].map(([title, body]) => (
            <article key={title} className="glass-panel rounded-lg p-6">
              <h2 className="text-lg font-bold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-industry-slate-400">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white">常见问题</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <article key={faq.q} className="glass-panel rounded-lg p-6">
                <h3 className="font-bold text-white">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-industry-slate-400">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <DecisionGuides />
      <CTASection
        title="需要 OEM 磨具套装报价？"
        subtitle="请提供目标组合、数量、包装与目的地。我们会书面确认范围、生产来源、MOQ 与商业假设。"
      />
    </div>
  );
}
