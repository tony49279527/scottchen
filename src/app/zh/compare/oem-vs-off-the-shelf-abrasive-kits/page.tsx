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
  title: "OEM 定制磨具套装 vs 现货套装对比 | SCOTTCHEN",
  description:
    "从 MOQ、品牌包装、组合控制、验证、风险与补货稳定性对比 OEM 定制与现货磨具套装，帮助 B2B 买家选择合适路径。",
  path: "/zh/compare/oem-vs-off-the-shelf-abrasive-kits",
  alternatePath: "/compare/oem-vs-off-the-shelf-abrasive-kits",
  locale: "zh-CN",
});

const comparison = [
  ["上市速度", "需确认规格、样品与版稿审批", "有库存时可更快启动"],
  ["品牌包装", "可贴牌包装、说明书与买家提供的条码数据", "沿用现有品牌与包装"],
  ["组合控制", "可配置尺寸、粒度、轮型与抛光膏", "由现货 SKU 固定"],
  ["MOQ", "按 SKU、包装与数量书面报价", "多为整箱或经销商起订量"],
  ["验证方式", "量产前批准产品与包装标准", "测试现有现货配置"],
  ["补货", "按已批准规格计划生产", "依赖经销商或品牌库存"],
  ["单价 / 总成本", "按配置、数量、包装、检验与贸易条款报价", "可能有公开价或账户价；到岸成本仍需运费与税费"],
  ["主要风险", "审批周期较长；简报不清易返工", "组合漂移、断货、品牌控制有限"],
] as const;

const faqs = [
  {
    q: "OEM 磨具套装一定比现货套装更好吗？",
    a: "当品牌包装、组合一致性和可重复补货重要时，OEM 更合适。当现货配置已匹配用途、且需要低量快速验证时，现货套装更合适。",
  },
  {
    q: "贴牌磨具套装的 MOQ 大概是多少？",
    a: "MOQ 取决于组件、包装、印刷方式、刀模与生产计划，需在规格评审后的书面报价中确认，不以网页通用数字为准。",
  },
  {
    q: "量产前可以先测 OEM 样品吗？",
    a: "可向已核验的商业买家提供样品。样品配置、费用、快递与验收标准在发运前书面确认。",
  },
  {
    q: "OEM 磨具套装规格应包含哪些内容？",
    a: "应列出每个组件、尺寸、材料、粒度或层数、工具兼容性、包装形式、标签数据、警示、检验标准、数量与运输假设。",
  },
] as const;

export default function ChineseOemVsStockAbrasiveKitsPage() {
  const reviewedAt = pageDateForPath("/zh/compare/oem-vs-off-the-shelf-abrasive-kits") ?? SITE_UPDATED;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/zh/compare/oem-vs-off-the-shelf-abrasive-kits#webpage"),
        url: absoluteUrl("/zh/compare/oem-vs-off-the-shelf-abrasive-kits"),
        name: "OEM 定制磨具套装 vs 现货套装对比",
        description: "面向 B2B 买家的 OEM 定制与现货磨具配件套装对比页。",
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
              { label: "OEM vs 现货套装", href: "/zh/compare/oem-vs-off-the-shelf-abrasive-kits" },
            ]}
          />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            B2B 产品对比
          </span>
          <h1 className="mt-3 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            OEM 定制 vs 现货磨具套装：哪条路径更适合你的上线？
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-industry-slate-300">
            需要可控品牌与可重复组合时选 OEM；不需要定制、只需低量快速验证时选现货套装。
          </p>
          <p className="mt-4 text-sm text-industry-slate-500">
            复核日期：{reviewedAt}。单价与 MOQ 仅以注明日期的书面报价为准。
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/zh/sample-kit" className="rounded bg-industry-orange-cta px-6 py-3 text-sm font-bold text-white">
              申请 OEM 样品
            </Link>
            <Link href="/zh/abrasive-kits" className="rounded border border-industry-slate-700 px-6 py-3 text-sm font-bold text-white">
              查看套装能力
            </Link>
            <Link href="/zh/oem-private-label" className="rounded border border-industry-slate-700 px-6 py-3 text-sm font-bold text-white">
              贴牌流程
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white">完整 B2B 对比</h2>
          <div className="mt-8 overflow-x-auto rounded border border-industry-slate-800">
            <table className="min-w-[760px] w-full text-left text-sm">
              <thead className="bg-industry-slate-950 text-industry-slate-300">
                <tr>
                  <th className="px-4 py-4 font-bold">决策因素</th>
                  <th className="px-4 py-4 font-bold">OEM 定制套装</th>
                  <th className="px-4 py-4 font-bold">现货套装</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-industry-slate-800 bg-industry-slate-900 text-industry-slate-300">
                {comparison.map(([factor, oem, stock]) => (
                  <tr key={factor}>
                    <th className="px-4 py-4 font-bold text-white">{factor}</th>
                    <td className="px-4 py-4">{oem}</td>
                    <td className="px-4 py-4">{stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-y border-industry-slate-800 bg-industry-slate-950 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="glass-panel rounded-lg p-7">
            <h2 className="text-xl font-bold text-white">当“控制”是约束时选 OEM</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-industry-slate-300">
              <li>需要贴牌包装与买家提供的条码数据。</li>
              <li>套装需要特定粒度、轮型、抛光膏或转接件顺序。</li>
              <li>后续订单必须匹配已批准的产品与包装规格。</li>
              <li>买家能配合样品、版稿与量产审批。</li>
            </ul>
          </article>
          <article className="glass-panel rounded-lg p-7">
            <h2 className="text-xl font-bold text-white">当“速度”是约束时选现货</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-industry-slate-300">
              <li>现成组合已匹配目标工作流。</li>
              <li>上线量低于合理的定制生产起订量。</li>
              <li>可接受现有品牌与包装。</li>
              <li>当前目标是验证需求或产品匹配度。</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white">结论条件</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-industry-slate-400">
            用下列条件决定下一步询价路径。本页不是价目表，也不保证统一抛光结果。
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="glass-panel rounded-lg p-7">
              <h3 className="text-lg font-bold text-industry-orange-light">满足以下条件时优先 OEM</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-industry-slate-300">
                <li>需要可控组合与贴牌包装支撑重复订单。</li>
                <li>可以在量产前批准样品与包装规格。</li>
                <li>接受 MOQ、交期与单价仅在范围确认后报价。</li>
              </ul>
            </article>
            <article className="glass-panel rounded-lg p-7">
              <h3 className="text-lg font-bold text-industry-orange-light">满足以下条件时优先现货</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-industry-slate-300">
                <li>现有套装已匹配工具、基材与目标效果。</li>
                <li>需要小批量试销，再决定是否定制。</li>
                <li>本阶段品牌包装控制不是硬性要求。</li>
              </ul>
            </article>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/zh/procurement-terms" className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white">
              查看采购条款
            </Link>
            <Link href="/zh/resources/oem-abrasive-supplier-evaluation" className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white">
              供应商评估指南
            </Link>
            <Link href="/zh/alternatives/abrasive-kit-sourcing-alternatives" className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white">
              其他采购路径
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-industry-slate-800 bg-industry-slate-950 py-16">
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
        title="把对比结论写成样品简报"
        subtitle="请提供目标工作流、组件清单、目标数量与包装要求，我们会确认可打样与可报价范围。"
      />
    </div>
  );
}
