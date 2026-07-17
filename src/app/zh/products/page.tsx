import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "OEM 磨料磨具产品目录 — 抛光轮、砂纸片、百叶片 | SCOTTCHEN",
  description:
    "比较抛光轮、砂碟、百叶片、砂带、切割片与贴牌套装类别；规格控制、生产来源、证据边界与商业条款按报价 SKU 确认。",
  path: "/zh/products",
  alternatePath: "/products",
  locale: "zh-CN",
});

export default function ChineseProductsOverview() {
  const categories = [
    {
      family: "抛光与精饰耗材 (核心类别)",
      items: [
        {
          name: "抛光布轮及抛光轮",
          url: "/zh/products/buffing-polishing-wheels",
          types: "候选布轮结构与带柄概念；纤维、结构、尺寸、使用限制和来源须按 SKU 提供证据。",
          moq: "按 SKU 报价",
          pack: "RFQ：来源、材料、刀模、装量和批准样品",
          img: "/images/buffing_wheels.webp",
        },
        {
          name: "抛光轮与抛光膏组合装",
          url: "/zh/products/buffing-polishing-wheels",
          types: "候选布轮、抛光膏、转接件与装量组合；本页没有已批准的现货 BOM。",
          moq: "按 SKU 报价",
          pack: "RFQ：BOM、模具、版稿、警示和渠道要求",
          img: "/images/hero_abrasives_kit.webp",
        },
      ],
    },
    {
      family: "研磨与砂纸打磨系列",
      items: [
        {
          name: "砂纸及连续砂纸卷",
          url: "/zh/products/sanding-grinding-accessories",
          types: "候选砂纸张、砂卷与分装询价；磨粒、背基、粒度体系、尺寸和干湿用途须有来源证据。",
          moq: "按 SKU 报价",
          pack: "RFQ：砂卷或砂纸数量、材料、裁切安全和刀模",
          img: "/images/sanding_sheets.webp",
        },
        {
          name: "网格打磨砂网（吸尘设备兼容）",
          url: "/zh/products/sanding-grinding-accessories",
          types: "候选网格砂网张材或卷材询价；网格结构、涂层和设备兼容性须按 SKU 确认。",
          moq: "按 SKU 报价",
          pack: "RFQ：保护、标签、警示、装量和运输测试",
          img: "/images/sanding_screens.webp",
        },
        {
          name: "精细打磨细节砂纸棒",
          url: "/zh/products/sanding-grinding-accessories",
          types: "候选手工打磨工具与替换磨料；手柄、张紧结构和磨料适配须通过样品批准。",
          moq: "按 SKU 报价",
          pack: "RFQ：包装形式、版稿权利、警示和买家条码数据",
          img: "/images/detail_sanding.webp",
        },
      ],
    },
    {
      family: "重力切削与特殊材质磨料",
      items: [
        {
          name: "重切削锆刚玉纤维砂碟",
          url: "/zh/products/sanding-grinding-accessories",
          types: "候选纤维砂碟或磨片询价；磨粒、结合剂、背基、孔径和使用限制须有准确来源证据。",
          moq: "按 SKU 报价",
          pack: "RFQ：产品保护、警示、追溯和纸箱范围",
          img: "/images/fiber_discs.webp",
        },
        {
          name: "金刚石特殊打磨抛光碟",
          url: "/zh/products/sanding-grinding-accessories",
          types: "高风险特殊磨料询价类别；结构、工具、基材、冷却和安全证据必须批准。",
          moq: "按 SKU 报价",
          pack: "RFQ：保护形式、警示、说明与来源文件",
          img: "/images/diamond_polishing.webp",
        },
        {
          name: "工作坊砂纸卷架展示套装",
          url: "/zh/products/sanding-grinding-accessories",
          types: "候选多砂卷分装或补充装概念；BOM、裁切结构、砂卷尺寸、粒度组合和来源均为 RFQ 字段。",
          moq: "按 SKU 报价",
          pack: "RFQ：结构样品、裁切安全、版稿和装量批准",
          img: "/images/sanding_dispenser.webp",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header section */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          <Breadcrumbs
            ariaLabel="面包屑导航"
            items={[
              { label: "首页", href: "/zh" },
              { label: "产品目录", href: "/zh/products" },
            ]}
          />
          <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">技术规格目录</span>
          <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
            OEM 磨料磨具产品目录
          </h1>
          <p className="mt-4 text-base text-industry-slate-400 max-w-3xl leading-relaxed">
            上海 B2B 采购与 OEM 项目支持：抛光轮、砂纸片、百叶片、砂带、切割片与贴牌套装。生产来源、核心规格、证据、起订量和包装范围按 SKU 书面确认。
          </p>
        </div>
      </section>

      <section className="border-b border-industry-slate-850 bg-industry-slate-950 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                title: "评估供应商匹配度",
                body: "入围供应商前，比较产品范围、样品、质检证据、包装准备度和商务核验边界。",
                href: "/zh/resources/oem-abrasive-supplier-evaluation",
              },
              {
                title: "准备可比较 RFQ",
                body: "用采购检查清单写清尺寸、背基、目数、包装数量、样品计划和验货要求。",
                href: "/zh/resources/abrasive-sourcing-checklist",
              },
              {
                title: "选择磨粒与背基",
                body: "查看磨粒类别、背基材料、FEPA P 目数、条码检查和交付条款。",
                href: "/zh/resources/abrasive-material-selection-guide",
              },
            ].map((item) => (
              <Link
                key={item.href}
                className="glass-panel rounded-xl p-6 hover:border-industry-orange"
                href={item.href}
              >
                <h2 className="text-lg font-bold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-industry-slate-400">
                  {item.body}
                </p>
                <span className="mt-4 inline-block text-sm font-bold text-industry-orange-light">
                  打开指南 &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways / B2B Quick Facts */}
      <section className="py-8 bg-industry-slate-900 border-b border-industry-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-industry-slate-800 bg-industry-slate-950/40 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="md:w-1/3">
                <span className="text-[10px] font-mono font-bold tracking-widest text-industry-orange uppercase">目录指标概览</span>
                <h2 className="text-2xl font-black text-white mt-1">定制工艺与合规参数</h2>
                <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">
                  提供给全球五金供应链管理者的技术与交付参数汇总。
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>询价品类:</strong> 可讨论布轮、砂卷、开放式砂网与纤维砂碟等候选采购类别；可供范围按 SKU 确认。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>起订量控制:</strong> 不在网页承诺统一数字；按 SKU、材料、包装、印刷、模具、组合和订单数量写入带日期报价。</span>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>包装询价简报:</strong> 纸套、分装盒、吸塑概念或纸箱均为 RFQ 形式；来源、刀模、材料与样品按项目批准。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>进口证据:</strong> 买家条码数据、警示、目的地规则及第三方验货责任须写入日期化报价；本页不代表已获得放行。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Matrix */}
      <section className="py-16 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {categories.map((familyGroup) => (
              <div key={familyGroup.family} className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  {familyGroup.family}
                </h2>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {familyGroup.items.map((item) => (
                    <div key={item.name} className="glass-panel rounded-lg overflow-hidden flex flex-col justify-between hover:border-industry-slate-700 transition-colors group">
                      <div className="relative h-48 w-full overflow-hidden border-b border-industry-slate-850 bg-industry-slate-950">
                        <img
                          width={1024}
                          height={1024}
                          loading="lazy"
                          decoding="async"
                          src={item.img}
                          alt={item.name}
                          className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-300 opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 to-transparent opacity-60" />
                      </div>
                      
                      <div className="p-8 flex-grow flex flex-col justify-between">
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-bold text-white">{item.name}</h3>
                            <span className="text-[10px] font-mono text-industry-orange bg-industry-orange/10 border border-industry-orange/20 px-2 py-0.5 rounded">
                              RFQ 类别 — 非现货
                            </span>
                          </div>
                          <p className="text-sm text-industry-slate-400 leading-relaxed">
                            <strong className="text-industry-slate-300">候选询价范围:</strong> {item.types}
                          </p>
                          
                          {/* B2B Sourcing Parameters */}
                          <div className="grid grid-cols-2 gap-4 border-t border-industry-slate-850 pt-4 text-xs font-mono">
                            <div>
                              <span className="text-industry-slate-500 block">MOQ 依据:</span>
                              <span className="text-white font-bold">{item.moq}</span>
                            </div>
                            <div>
                              <span className="text-industry-slate-500 block">包装询价字段:</span>
                              <span className="text-white font-bold leading-normal">{item.pack}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 flex items-center justify-between border-t border-industry-slate-850 pt-4">
                          <Link
                            href={item.url}
                            className="text-xs font-bold text-industry-orange hover:text-industry-orange-light uppercase tracking-wider transition-colors"
                          >
                            打开 RFQ 详情 &rarr;
                          </Link>
                          <Link
                            href="/zh/contact"
                            className="text-xs font-bold text-white bg-industry-slate-800 hover:bg-industry-slate-700 px-4 py-2 rounded transition-colors"
                          >
                            获取批量定制报价
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-industry-slate-950 border-t border-industry-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">参数及询盘解答</span>
            <h2 className="text-3xl font-extrabold text-white mt-3">常见问题解答</h2>
            <p className="mt-4 text-sm text-industry-slate-400">
              面向采购经理、电商运营和分销商的 SKU 规格、证据要求、定制范围与报价物流假设。
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "你们对定制化的打磨抛光工具组合套装提供哪些包装形式？",
                a: "B2B 套装可按 SKU 评估布轮结构、抛光膏、粒度组合与包装形式。每个组件的生产来源、规格、证据和商业范围必须在报价与批准样品中确认。"
              },
              {
                q: "你们对锆刚玉纤维砂片和切割片提供哪些质量检测证书？",
                a: "需要提供的报告取决于产品、目的国和双方确认的质检计划。买家应在下单前明确适用标准、测试方法、抽样水平和所需证据。"
              },
              {
                q: "海运纸箱和托盘要求如何确认？",
                a: "可依据产品重量和运输条件，在包装规格中约定瓦楞结构、护角、打包带、托盘材料和缠绕膜。最终装箱方式及任何运输测试按项目报价确认。"
              },
              {
                q: "你们抛光布轮支持哪些规格的中心轴孔尺寸？",
                a: "请提供工具、主轴或夹头、法兰、防护与工作限制。轴套、中心孔材料和柄径仅按报价 SKU 与负责来源确认，并通过适配与样品检查批准；网站不承诺固定规格现货。"
              }
            ].map((faq, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-lg border border-industry-slate-800/80">
                <h3 className="text-base font-bold text-white flex items-start">
                  <span className="text-industry-orange mr-2 shrink-0">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-industry-slate-400 mt-2 pl-5 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": absoluteUrl("/zh/products#collection"),
            name: "磨料磨具与抛光轮规格目录",
            url: absoluteUrl("/zh/products"),
            inLanguage: "zh-CN",
            isPartOf: { "@id": absoluteUrl("/#website") },
            about: { "@id": absoluteUrl("/#organization") },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: categories
                .flatMap((family) => family.items)
                .map((item, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  name: item.name,
                  description: item.types,
                  url: absoluteUrl(item.url),
                })),
            },
          }),
        }}
      />

      {/* Persistent CTA Banner */}
      <CTASection />
    </div>
  );
}
