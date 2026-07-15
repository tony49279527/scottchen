import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl, SITE_UPDATED } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "B2B 磨料磨具采购资源中心 | SCOTTCHEN",
  description:
    "面向进口商、工具品牌和渠道采购的磨料磨具资源中心，覆盖供应商评估、RFQ 清单、磨粒背基选型、样品计划和贴牌包装核验。",
  path: "/zh/resources",
  alternatePath: "/resources",
  locale: "zh-CN",
});

const resources = [
  {
    title: "OEM 磨料磨具供应商评估指南",
    href: "/zh/resources/oem-abrasive-supplier-evaluation",
    intent: "供应商发现、比较与尽调",
    summary:
      "用于核查产品范围、书面规格、样品计划、质检证据、包装准备度和商务条款的采购决策框架。",
  },
  {
    title: "磨料磨具采购检查清单",
    href: "/zh/resources/abrasive-sourcing-checklist",
    intent: "RFQ 准备",
    summary:
      "把抛光轮、砂纸或磨片的模糊需求转化为可比较的 RFQ、样品确认计划和出货质量标准。",
  },
  {
    title: "磨料、背基与砂纸目数选型指南",
    href: "/zh/resources/abrasive-material-selection-guide",
    intent: "技术规格编制",
    summary:
      "覆盖磨粒类别、背基材料、FEPA P 目数、样品测试、GS1 条码检查和 Incoterms 报价要求。",
  },
  {
    title: "百叶片 RFQ 询价指南",
    href: "/zh/resources/flap-disc-rfq-guide",
    intent: "百叶片规格与样品测试",
    summary:
      "定义T27/T29、磨料、粒度、密度、底板、转速、样品验收、安全证据、包装和商务假设。",
  },
  {
    title: "砂带 RFQ 询价指南",
    href: "/zh/resources/sanding-belt-rfq-guide",
    intent: "非标砂带规格编制",
    summary:
      "从设备到砂带的采购清单，覆盖尺寸、布基、磨料、接头、跑偏测试、包装和书面交期。",
  },
  {
    title: "切割片合规与安全证据清单",
    href: "/zh/resources/cutting-wheel-compliance-checklist",
    intent: "安全证据核验",
    summary:
      "把每个切割片SKU对应到目标市场标准、测试报告、使用限制、追溯和批准标签。",
  },
  {
    title: "SCOTTCHEN 供应商档案",
    href: "/zh/supplier-profile",
    intent: "品牌实体与核验边界",
    summary:
      "公开 SCOTTCHEN 的 B2B 业务范围、联系渠道、零售参考、报价边界和买家核验清单。",
  },
] as const;

const queryClusters = [
  "如何选择 OEM 磨料磨具供应商",
  "抛光布轮厂家采购前需要核验什么",
  "贴牌砂纸套装 RFQ 应该包含哪些参数",
  "砂纸背基和磨粒如何选择",
  "抛光轮起订量交期包装和质检清单",
  "百叶片 RFQ 规格与样品测试清单",
  "如何按 SKU 核验切割片安全报告",
] as const;

export default function ChineseResourcesHub() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": absoluteUrl("/zh/resources#collection"),
        url: absoluteUrl("/zh/resources"),
        name: "B2B 磨料磨具采购资源中心",
        description:
          "面向磨料磨具供应商评估、RFQ 准备、选材和 SCOTTCHEN 采购核验的资源中心。",
        inLanguage: "zh-CN",
        dateModified: SITE_UPDATED,
        publisher: { "@id": absoluteUrl("/#organization") },
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/zh/resources#resource-list"),
        name: "SCOTTCHEN B2B 采购资源",
        itemListElement: resources.map((resource, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: resource.title,
          description: resource.summary,
          url: absoluteUrl(resource.href),
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
            ]}
          />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            采购资源中心
          </span>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            面向进口商与工具品牌的 B2B 磨料磨具采购资源
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-industry-slate-300">
            通过这些指南评估磨料磨具供应商，写清抛光轮、砂纸或打磨套装规格，
            规划有代表性的样品测试，并把技术要求连接到 SCOTTCHEN 询盘流程。
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-industry-slate-400">
            <span>SCOTTCHEN 采购内容团队维护</span>
            <span>复核日期：{SITE_UPDATED}</span>
          </div>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {resources.map((resource) => (
              <article key={resource.href} className="glass-panel rounded-xl p-7 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
                  {resource.intent}
                </span>
                <h2 className="mt-3 text-2xl font-bold text-white">{resource.title}</h2>
                <p className="mt-4 leading-relaxed text-industry-slate-300">
                  {resource.summary}
                </p>
                <Link
                  className="mt-6 inline-flex rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white hover:border-industry-orange hover:text-industry-orange-light"
                  href={resource.href}
                >
                  打开资源 &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-industry-slate-800 bg-industry-slate-950 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
                搜索与 AI 问题覆盖
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-white">
                这些页面回答的采购问题
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-industry-slate-400">
                资源中心按真实采购任务组织，而不是只围绕单一关键词。每个主题都会导向产品页、样品申请、质量控制和供应商档案。
              </p>
            </div>
            <ul className="grid gap-3 lg:col-span-3">
              {queryClusters.map((query) => (
                <li
                  key={query}
                  className="rounded-lg border border-industry-slate-800 bg-industry-slate-900/70 p-4 text-sm font-semibold text-industry-slate-200"
                >
                  {query}
                </li>
              ))}
            </ul>
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
