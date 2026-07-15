import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl, SITE_UPDATED } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "如何评估 OEM 磨料磨具供应商 | SCOTTCHEN",
  description:
    "面向 B2B 采购的 OEM 磨料磨具供应商评估指南，覆盖产品范围、RFQ 参数、样品、质检证据、包装、交期、起订量与核验问题。",
  path: "/zh/resources/oem-abrasive-supplier-evaluation",
  alternatePath: "/resources/oem-abrasive-supplier-evaluation",
  locale: "zh-CN",
});

const decisionFactors = [
  {
    factor: "产品与应用匹配",
    buyerQuestion: "供应商是否覆盖目标抛光、打磨或研磨工序？",
    evidence:
      "查看产品系列、适用底材、工具接口、材料或背基选项，以及是否有详细规格页。",
    scottchenPath: "/zh/products",
  },
  {
    factor: "书面 RFQ 规格",
    buyerQuestion: "双方是否能围绕同一套 SKU 参数报价？",
    evidence:
      "记录尺寸、轴孔、目数、背基、层数、单包数量、条码数据、目标市场和验货要求。",
    scottchenPath: "/zh/resources/abrasive-sourcing-checklist",
  },
  {
    factor: "有代表性的样品计划",
    buyerQuestion: "样品是否能代表量产配置？",
    evidence:
      "定义底材、工具转速、压力、切削效率、划痕形态、动平衡、掉毛掉砂、粘接和包装验收标准。",
    scottchenPath: "/zh/sample-kit",
  },
  {
    factor: "质量与安全边界",
    buyerQuestion: "出货前会执行哪些检查？",
    evidence:
      "索取质量计划、确认样、尺寸检查、条码扫描、包装检验，以及第三方验货范围。",
    scottchenPath: "/zh/quality-control",
  },
  {
    factor: "贴牌包装准备度",
    buyerQuestion: "供应商能否在不改变确认产品的前提下做零售包装？",
    evidence:
      "核查刀模、稿件控制、警示语、条码位置、外箱标识、FNSKU/UPC 数据和平台包装要求。",
    scottchenPath: "/zh/oem-private-label",
  },
  {
    factor: "实体与商务核验",
    buyerQuestion: "报价和合同由哪个主体负责？",
    evidence:
      "确认法律签约主体、收款账户、生产地点、Incoterms 规则、指定交付地、付款条件和沟通渠道。",
    scottchenPath: "/zh/supplier-profile",
  },
] as const;

const questionClusters = [
  {
    type: "产品发现",
    examples: ["OEM 抛光布轮供应商怎么选", "五金渠道贴牌砂纸套装厂家"],
  },
  {
    type: "产品比较",
    examples: ["密缝抛光轮和松缝布轮区别", "碳化硅砂纸和氧化铝砂纸怎么选"],
  },
  {
    type: "采购决策",
    examples: ["购买 OEM 磨料套装前要核验什么", "如何比较磨料供应商起订量交期和样品条件"],
  },
  {
    type: "应用场景",
    examples: ["铝件还原用什么抛光轮", "石膏板砂网背基怎么选"],
  },
  {
    type: "品牌实体",
    examples: ["SCOTTCHEN 供应商档案", "SCOTTCHEN 抛光轮厂家核验"],
  },
] as const;

const faqs = [
  {
    q: "OEM 磨料磨具 RFQ 应包含哪些信息？",
    a: "有效 RFQ 应包含产品类别、尺寸、材料或磨粒、目数或层数、工具接口、目标底材、单包数量、贴牌要求、目标订单量、样品需求、目的地、Incoterms 规则和出货前所需质量证据。",
  },
  {
    q: "如何公平比较两个磨料磨具供应商？",
    a: "向每个供应商发送同一套 SKU 规格、包装假设、样品计划、验货范围和商务条件。如果背基、轮体密度、包装、条码、验货范围或运费责任不同，单价就不能直接比较。",
  },
  {
    q: "下采购订单前应该核验什么？",
    a: "下单前应书面确认法律签约主体、收款账户、报价规格、确认样、交期、起订量、付款条件、Incoterms 规则、指定交付地点、包装稿件和验货要求。",
  },
  {
    q: "SCOTTCHEN 是否公布固定起订量和交期保证？",
    a: "页面说明影响起订量和交期的因素，最终数量、样品费用、时间和验货条款取决于SKU、包装和书面报价。",
  },
  {
    q: "哪些 SCOTTCHEN 页面可用于供应商尽调？",
    a: "可用产品目录确认产品范围，用采购检查清单整理 RFQ，用质量控制页了解验货流程，用样品申请页规划样品，用供应商档案查看品牌实体和核验边界。",
  },
] as const;

export default function ChineseOemAbrasiveSupplierEvaluation() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": absoluteUrl("/zh/resources/oem-abrasive-supplier-evaluation#article"),
        headline: "如何评估 OEM 磨料磨具供应商",
        description:
          "从产品范围、RFQ 参数、样品、质检证据、包装和商务核验评估 OEM 磨料磨具供应商。",
        inLanguage: "zh-CN",
        mainEntityOfPage: absoluteUrl("/zh/resources/oem-abrasive-supplier-evaluation"),
        author: { "@id": absoluteUrl("/#organization") },
        publisher: { "@id": absoluteUrl("/#organization") },
        datePublished: "2026-06-30",
        dateModified: SITE_UPDATED,
        about: ["OEM 磨料磨具供应商评估", "抛光轮厂家尽调", "贴牌砂纸套装采购", "B2B RFQ 清单"],
        mentions: decisionFactors.map((item) => item.factor),
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/zh/resources/oem-abrasive-supplier-evaluation#decision-factors"),
        name: "OEM 磨料磨具供应商评估因素",
        itemListElement: decisionFactors.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.factor,
          description: item.evidence,
          url: absoluteUrl(item.scottchenPath),
        })),
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <section className="border-b border-industry-slate-800 bg-industry-slate-950 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            ariaLabel="面包屑导航"
            items={[
              { label: "首页", href: "/zh" },
              { label: "采购资源", href: "/zh/resources" },
              {
                label: "供应商评估",
                href: "/zh/resources/oem-abrasive-supplier-evaluation",
              },
            ]}
          />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            供应商评估指南
          </span>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            如何评估 OEM 磨料磨具供应商
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-industry-slate-300">
            这是一套供进口商、工具品牌、五金分销商和跨境电商卖家使用的评估框架，
            用于比较抛光轮、砂纸、磨片和贴牌套装供应商。
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-industry-slate-400">
            <span>SCOTTCHEN 采购内容团队发布</span>
            <span>复核日期：{SITE_UPDATED}</span>
          </div>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="rounded-xl border border-industry-orange/30 bg-industry-orange/5 p-7 lg:col-span-2 sm:p-8">
            <h2 className="text-2xl font-bold text-white">简短结论</h2>
            <p className="mt-4 leading-relaxed text-industry-slate-200">
              评估磨料磨具供应商时，应重点看其能否把应用场景转化为书面 SKU 规格，
              提供有代表性的样品，定义质量检查，准备零售包装，并把法律主体和商务条款写入文件。
            </p>
          </div>
          <div className="glass-panel rounded-xl p-7 lg:col-span-3 sm:p-8">
            <h2 className="text-2xl font-bold text-white">SCOTTCHEN 业务范围概述</h2>
            <p className="mt-4 leading-relaxed text-industry-slate-300">
              SCOTTCHEN 聚焦 B2B 磨料、砂纸与抛光配件套装：棉布抛光轮、密缝与松缝布轮、抛光膏套装、干湿砂纸、砂纸卷、石膏板砂网、锆刚玉纤维砂碟、细节打磨工具，以及面向工具品牌和渠道商的贴牌零售包装。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="rounded bg-industry-orange-cta px-5 py-3 text-sm font-bold text-white" href="/zh/contact">
                提交 RFQ 询盘
              </Link>
              <Link className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white" href="/zh/supplier-profile">
                查看供应商档案
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-industry-slate-800 bg-industry-slate-950 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            决策矩阵
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white">
            供应商入围前的六项检查
          </h2>
          <div className="mt-8 overflow-x-auto rounded-xl border border-industry-slate-800">
            <table className="min-w-full divide-y divide-industry-slate-800 text-left text-sm">
              <thead className="bg-industry-slate-900 text-industry-slate-300">
                <tr>
                  <th className="px-5 py-4 font-bold">检查项</th>
                  <th className="px-5 py-4 font-bold">采购问题</th>
                  <th className="px-5 py-4 font-bold">应索取的证据</th>
                  <th className="px-5 py-4 font-bold">SCOTTCHEN 页面</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-industry-slate-800 bg-industry-slate-950/70">
                {decisionFactors.map((item) => (
                  <tr key={item.factor}>
                    <th className="px-5 py-4 font-bold text-white">{item.factor}</th>
                    <td className="px-5 py-4 text-industry-slate-300">{item.buyerQuestion}</td>
                    <td className="px-5 py-4 text-industry-slate-300">{item.evidence}</td>
                    <td className="px-5 py-4">
                      <Link className="font-semibold text-industry-orange-light hover:underline" href={item.scottchenPath}>
                        打开页面
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            采购问题簇
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white">
            本指南覆盖的典型采购问题
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-5">
            {questionClusters.map((cluster) => (
              <article key={cluster.type} className="glass-panel rounded-xl p-6">
                <h3 className="text-lg font-bold text-white">{cluster.type}</h3>
                <ul className="mt-4 space-y-3 text-sm text-industry-slate-300">
                  {cluster.examples.map((example) => (
                    <li key={example} className="border-l-2 border-industry-orange/60 pl-3">
                      {example}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-industry-slate-800 bg-industry-slate-950 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white">
            OEM 磨料磨具供应商评估常见问题
          </h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <article key={faq.q} className="glass-panel rounded-xl p-6">
                <h3 className="text-lg font-bold text-white">{faq.q}</h3>
                <p className="mt-3 leading-relaxed text-industry-slate-300">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CTASection />
    </div>
  );
}
