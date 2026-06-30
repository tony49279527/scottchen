import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "磨料磨具与抛光轮规格目录 | SCOTTCHEN",
  description: "浏览技术参数、参考 B2B 起订量及包装选项，涵盖缝线棉轮、松缝布轮、气道轮、锆刚玉砂碟、开放式砂网及细节砂棒组合。",
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
          types: "同心圆密缝棉布轮、松缝黄 flannel 细轮、气道折叠轮、剑麻重切削轮、羊毛毡轮、带柄打磨轮。",
          moq: "单规格 500 件起",
          pack: "出口大箱 / 定制零售彩色挂盒",
          img: "/images/buffing_wheels.webp",
        },
        {
          name: "抛光轮与抛光膏组合装",
          url: "/zh/products/buffing-polishing-wheels",
          types: "带柄圆柱/圆顶布轮套装、台磨机镜面还原套装、多规格复合抛光膏套装（绿/白/红/黑蜡）、吸塑插卡零售装。",
          moq: "500 套起",
          pack: "双吸塑吸卡 / 提手彩盒 / OPP挂袋",
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
          types: "干湿两用乳胶纸基砂纸、高抗拉强度 J-wt 软布基砂布卷、家具漆面精细抛光砂纸、目数混装套。",
          moq: "10,000 张 / 200 卷起",
          pack: "按目数纸盒套封 / 带金属切割边缘的卷装 dispenser 盒",
          img: "/images/sanding_sheets.webp",
        },
        {
          name: "网格打磨砂网（吸尘设备兼容）",
          url: "/zh/products/sanding-grinding-accessories",
          types: "碳化硅双面覆层玻璃纤维网格砂网、吸尘设备兼容墙面砂纸、大卷工业砂网。",
          moq: "5,000 张起",
          pack: "独立纸卡塑封包 / 大包热收缩膜",
          img: "/images/sanding_screens.webp",
        },
        {
          name: "精细打磨细节砂纸棒",
          url: "/zh/products/sanding-grinding-accessories",
          types: "弹簧张力塑料砂棒、超细 1/4\" 与 1/2\" 细节替换砂带卷、首饰精饰砂带棒、模型制作修缝器。",
          moq: "1,000 套起",
          pack: "透明塑料挂袋 / 零售吸卡纸板",
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
          types: "树脂粘接重载钢性锆刚玉纤维砂碟、角磨机打磨片、焊缝去除磨片、星型中心孔碟。",
          moq: "单目数 2,000 张起",
          pack: "25张热收缩包 / 内置白盒保护 / 重载出口标准大木箱",
          img: "/images/fiber_discs.webp",
        },
        {
          name: "金刚石特殊打磨抛光碟",
          url: "/zh/products/sanding-grinding-accessories",
          types: "电镀金刚石手擦片、石材打磨磨片、大理石与花岗岩抛光耗材、瓷砖与玻璃打磨磨片。",
          moq: "500 片起",
          pack: "配警告说明书的内纸盒装",
          img: "/images/diamond_polishing.webp",
        },
        {
          name: "工作坊砂纸卷架展示套装",
          url: "/zh/products/sanding-grinding-accessories",
          types: "5排砂纸卷工作坊架装组件、金属或木制排盒配锯齿切割刀口、高档五金店展示架架装。",
          moq: "300 套起",
          pack: "配提手的高强度彩盒防震包装",
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
            表面处理研磨抛光配件规格目录
          </h1>
          <p className="mt-4 text-base text-industry-slate-400 max-w-3xl leading-relaxed">
            Scottchen (SCOTTCHEN) 专注于为五金品牌商和高采购量零售商提供定制化研磨抛光套装方案。在此您可以浏览我们的核心规格、标准起订量 (MOQ) 与出运包装规范。
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
                    <span className="text-industry-slate-200"><strong>完整产品线:</strong> 涵盖缝线棉轮、松缝 flannel 轮、干磨 latex 纸砂纸、开放式玻璃纤维网格砂网、锆刚玉重切削砂碟等。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>标准批量起订量 (MOQ):</strong> 抛光轮/布轮 500 件起，打磨抛光组合套 500 套起，打磨砂纸 10,000 张起，锆刚玉砂片 2,000 片起。</span>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>包装定制能力:</strong> 提供预分目数彩盒装、双吸塑卡装、带金属切割锋刃的牛皮纸分配盒或跨境电商小体积挂卡袋。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>标签与货运范围:</strong> 可应用买家提供的 FNSKU 数据，并讨论第三方验货及上海/宁波港口方案；最终范围写入报价。</span>
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
                              参考 B2B 起订量
                            </span>
                          </div>
                          <p className="text-sm text-industry-slate-400 leading-relaxed">
                            <strong className="text-industry-slate-300">细分类别与子型号:</strong> {item.types}
                          </p>
                          
                          {/* B2B Sourcing Parameters */}
                          <div className="grid grid-cols-2 gap-4 border-t border-industry-slate-850 pt-4 text-xs font-mono">
                            <div>
                              <span className="text-industry-slate-500 block">常规批量起订量:</span>
                              <span className="text-white font-bold">{item.moq}</span>
                            </div>
                            <div>
                              <span className="text-industry-slate-500 block">标准出口包装规格:</span>
                              <span className="text-white font-bold leading-normal">{item.pack}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 flex items-center justify-between border-t border-industry-slate-850 pt-4">
                          <Link
                            href={item.url}
                            className="text-xs font-bold text-industry-orange hover:text-industry-orange-light uppercase tracking-wider transition-colors"
                          >
                            获取详细规格书 &rarr;
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
              面向采购经理、电商运营和分销商的生产规格、合规参数与出运货运解答。
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "你们对定制化的打磨抛光工具组合套装提供哪些包装形式？",
                a: "我们提供高度柔性的打磨打样套装定制。您可以自定义棉布轮的缝线圈数、选配定制抛光膏的化学成份，亦可在一个展示彩盒或吸塑卡版里，打包混合各种目数的砂纸（从粗砂 P60 到极细 P2500）。"
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
                a: "支持。我们提供标准的 telescoping 轴套（纸管、塑料）或带黄铜圈、铁垫片加强型的中心轴孔。直径涵盖 1/2英寸、5/8英寸、3/4英寸、1英寸，以及用于 power drills 和 impact 气动螺丝批的 1/4\" 圆柄或六角快换手柄柄部适配器。"
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

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": absoluteUrl("/zh/products#faqpage"),
            "mainEntity": [
              {
                "@type": "Question",
                "name": "你们对定制化的打磨抛光工具组合套装提供哪些包装形式？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "我们提供高度柔性的打磨打样套装定制。您可以自定义棉布轮的缝线圈数、选配定制抛光膏的化学成份，亦可在一个展示彩盒或吸塑卡版里，打包混合各种目数的砂纸（从粗砂 P60 到极细 P2500）。"
                }
              },
              {
                "@type": "Question",
                "name": "你们对锆刚玉纤维砂片和切割片提供哪些质量检测证书？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "需要提供的报告取决于产品、目的国和双方确认的质检计划。买家应在下单前明确适用标准、测试方法、抽样水平和所需证据。"
                }
              },
              {
                "@type": "Question",
                "name": "海运纸箱和托盘要求如何确认？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "可依据产品重量和运输条件，在包装规格中约定瓦楞结构、护角、打包带、托盘材料和缠绕膜。最终装箱方式及任何运输测试按项目报价确认。"
                }
              },
              {
                "@type": "Question",
                "name": "你们抛光布轮支持哪些规格的中心轴孔尺寸？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "支持。我们提供标准的 telescoping 轴套（纸管、塑料）或带黄铜圈、铁垫片加强型的中心轴孔。直径涵盖 1/2英寸、5/8英寸、3/4英寸、1英寸，以及用于 power drills 和 impact 气动螺丝批的 1/4\" 圆柄或六角快换手柄柄部适配器。"
                }
              }
            ]
          })
        }}
      />

      {/* Persistent CTA Banner */}
      <CTASection />
    </div>
  );
}
