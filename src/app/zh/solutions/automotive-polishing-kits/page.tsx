import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import DecisionGuides from "@/components/DecisionGuides";
import { createPageMetadata } from "@/lib/seo";
import { buildFaqPageSchema } from "@/lib/schema";
import { absoluteUrl, SITE_UPDATED } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "汽车后市场贴牌抛光套装方案 | SCOTTCHEN",
  description:
    "为汽车后市场品牌配置轮毂与金属抛光贴牌套装：轮型、抛光膏、转接件、包装与样品审批路径说明。",
  path: "/zh/solutions/automotive-polishing-kits",
  alternatePath: "/solutions/automotive-polishing-kits",
  locale: "zh-CN",
});

const kitBlocks = [
  {
    title: "切削与表面准备",
    body: "先明确基材与初始状态，再选择湿/干磨料、打磨形状或首道切削抛光膏。",
  },
  {
    title: "电钻可达区域",
    body: "明确工具接口与作业区域，用于辐条、轮唇和凹陷处的锥形、圆柱、蘑菇头或轮型工具。",
  },
  {
    title: "抛光递进顺序",
    body: "按目标“切削到出光”顺序匹配轮体结构与抛光膏，并在买家目标基材上验证该顺序。",
  },
  {
    title: "包装审批计划",
    body: "在批准包装规格中确认组件图、说明书、警示、买家条码数据、外箱标识与样品扫码核验。",
  },
] as const;

const faqs = [
  {
    q: "汽车轮毂抛光套装可以包含什么？",
    a: "范围明确的套装可组合电钻棉轮形状、台式砂轮机用轮、匹配抛光膏、湿/干磨料、转接件与买家批准的说明书。最终内容取决于目标工作流。",
  },
  {
    q: "汽车抛光套装能否做贴牌包装？",
    a: "可以。彩盒、泡壳、插页、警示与买家提供的条码数据可在批准包装规格中讨论并确认。",
  },
  {
    q: "定制汽车抛光套装的 MOQ 是多少？",
    a: "MOQ 取决于组件、包装、印刷、刀模与订单数量，在套装规格评审后的书面报价中确认。",
  },
  {
    q: "汽车抛光套装应如何验证？",
    a: "在目标基材与工具上测试拟议顺序，记录组件身份、适配性、效果、包装内容与验收标准，再批准量产。",
  },
] as const;

export default function ChineseAutomotivePolishingKitsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/zh/solutions/automotive-polishing-kits#webpage"),
        url: absoluteUrl("/zh/solutions/automotive-polishing-kits"),
        name: "汽车后市场贴牌抛光套装方案",
        description: "面向 B2B 的汽车轮毂与金属抛光贴牌套装方案页。",
        inLanguage: "zh-CN",
        dateModified: SITE_UPDATED,
        isPartOf: { "@id": absoluteUrl("/#website") },
        about: { "@id": absoluteUrl("/#organization") },
      },
      {
        "@type": "Service",
        "@id": absoluteUrl("/zh/solutions/automotive-polishing-kits#service"),
        name: "汽车抛光套装贴牌采购支持",
        description:
          "为可配置汽车抛光套装提供 B2B 采购与样品审批支持，覆盖抛光轮、抛光膏、转接件、磨料与零售包装。",
        serviceType: "汽车抛光套装贴牌开发",
        provider: { "@id": absoluteUrl("/#organization") },
        audience: {
          "@type": "BusinessAudience",
          audienceType: "汽车后市场品牌、零售商与经销商",
        },
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
              { label: "汽车抛光套装", href: "/zh/solutions/automotive-polishing-kits" },
            ]}
          />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            汽车后市场方案
          </span>
          <h1 className="mt-3 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            面向后市场品牌的汽车抛光贴牌套装
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-industry-slate-300">
            围绕明确的基材、工具与抛光顺序配置轮毂/金属抛光套装，量产前先批准样品与包装。
          </p>
          <p className="mt-4 text-sm text-industry-slate-500">
            复核日期：{SITE_UPDATED}。抛光效果仅在买家样品验证后确认。
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/zh/sample-kit" className="rounded bg-industry-orange-cta px-6 py-3 text-sm font-bold text-white">
              申请样品套装
            </Link>
            <Link href="/zh/contact" className="rounded border border-industry-slate-700 px-6 py-3 text-sm font-bold text-white">
              获取书面报价
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white">后市场套装常见难点</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["兼容性不清", "工具接口、轮径、柄径与作业区域必须写清。"],
              ["顺序不完整", "套装需要合理的准备、切削与精抛递进。"],
              ["基材不匹配", "铝、镀铬与铁质零件需要不同验证方案。"],
              ["包装口径模糊", "组件图、说明书与标签必须与批准实物一致。"],
            ].map(([title, body]) => (
              <article key={title} className="glass-panel rounded-lg p-6">
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-industry-slate-400">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-industry-slate-800 bg-industry-slate-950 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white">套装规格如何搭建</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {kitBlocks.map((block) => (
              <article key={block.title} className="glass-panel rounded-lg p-7">
                <h3 className="text-lg font-bold text-industry-orange-light">{block.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-industry-slate-300">{block.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/zh/products/buffing-polishing-wheels"
              className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white"
            >
              查看抛光轮选项
            </Link>
            <Link href="/zh/quality-control" className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white">
              规划验收检查
            </Link>
            <Link href="/zh/oem-private-label" className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white">
              查看贴牌流程
            </Link>
            <Link
              href="/zh/packaging-private-label"
              className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white"
            >
              包装审批路径
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold text-white">量产订单前的证据</h2>
              <p className="mt-4 text-sm leading-relaxed text-industry-slate-400">
                本页不声称统一抛光结果。买家应在目标基材与工具上批准实际样品顺序。
              </p>
            </div>
            <ol className="space-y-4 text-sm text-industry-slate-300">
              <li className="glass-panel rounded-lg p-5">
                <strong className="text-white">1. 产品样品：</strong>在目标零件上核验适配、顺序与效果。
              </li>
              <li className="glass-panel rounded-lg p-5">
                <strong className="text-white">2. 包装样品：</strong>核验数量、标签、说明书与条码数据。
              </li>
              <li className="glass-panel rounded-lg p-5">
                <strong className="text-white">3. 书面质检计划：</strong>确认检验项、抽样与验收标准。
              </li>
              <li className="glass-panel rounded-lg p-5">
                <strong className="text-white">4. 书面报价：</strong>确认 MOQ、交期假设、贸易条款与排除项。
              </li>
            </ol>
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
        title="编写汽车抛光套装样品简报"
        subtitle="请提供目标基材、工具、抛光顺序、数量与包装形式，我们会确认样品与报价路径。"
      />
    </div>
  );
}
