import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "OEM & 私有品牌抛光工具包定制方案 | SCOTTCHEN",
  description: "提供私有品牌彩盒挂卡、买家提供的 FNSKU/UPC 条码贴标与仓库交付需求规划，用于表面抛磨抛光轮及砂纸套装项目。",
  path: "/zh/oem-private-label",
  alternatePath: "/oem-private-label",
  locale: "zh-CN",
});

export default function ChineseOEMPrivateLabel() {
  const oemCapabilities = [
    {
      title: "1. 柔性化产品自由组合",
      desc: "采购商可在一个定制工具箱内跨类别搭配棉布轮、抛光膏蜡条、带柄中心轴、塑料细节打磨棒或多目数砂纸包，并按木工打磨、金属还原或车身抛光等工作流确认组合。",
      examples: "示例：1个6寸缝线棉轮 + 1个6寸松缝黄绒轮 + 2条抛光膏（绿蜡与白蜡）+ 1根电钻接柄轴。",
    },
    {
      title: "2. 多样化零售包装定制",
      desc: "包装的档次决定了产品的溢价。我们提供以下不同包装形态的结构打样与设计方案：",
      details: [
        "双泡壳挂卡包装：便于货架展示产品，适合建材超市及五金店挂钩陈列。",
        "彩色瓦楞彩盒：可按产品重量和运输要求确定纸板结构，适合砂碟、磨片或砂卷架。",
        "环保牛皮纸盒：极简轻量，特别适合跨境电商线上卖家，能有效降低运输重力体积及塑料废弃物。",
        "带卡头精装吊卡袋：高性价比，适合精细打磨砂纸笔或混合目数裁切好的砂纸片套装。",
      ],
    },
    {
      title: "3. 专业条码审计与合规标识",
      desc: "我们会在出货前依据买家提供的条码、警示语和原产地要求核对标签版式，并记录确认结果。最终平台和进口合规仍以目的国及平台当期规则为准。",
      details: [
        "FNSKU / UPC 数据：可把买家提供的条码印刷或粘贴于零售包装，并在量产批准前进行样品扫码检查。",
        "多语言技术说明书：提供清晰的配合工具型号对照表、磨料目数-底材推荐卡，有效避免由于买家误用导致的退单。",
        "安全警告与出口警示标：外箱粘贴标准警告图标、防潮图示及原产地标 (Made in China)。",
      ],
    },
    {
      title: "4. 专为跨境电商优化的物流封装",
      desc: "针对线上卖家，项目规格可纳入纸箱尺寸、包装重量、双方同意的搬运测试和运单标签区域。仓储费档位与入仓条件须按渠道当期规则复核。",
    },
  ];

  const oemSteps = [
    { step: "01", title: "申领样品包", desc: "在您本国的质检工段实际测试我们的布轮叠合密度、缝线强度和磨料切削力。" },
    { step: "02", title: "挑选套装搭配", desc: "与我们的工程师紧密协作，敲定所需的耗材规格、粒度级配和吸塑/泡棉内衬设计。" },
    { step: "03", title: "刀模线图设计", desc: "我们提供高精度的 CAD 刀模设计图（PDF/DXF），您的美工人员可直接排版印刷稿。" },
    { step: "04", title: "彩盒样品验证", desc: "在大货量产前，制作包装数码样以及条码贴标位置确认图，供您视觉及扫码核验。" },
    { step: "05", title: "批量制造", desc: "规格和包装稿确认后，报价单会写明生产时间及双方同意的批次检查项目。" },
    { step: "06", title: "仓库交付", desc: "装运、运费、交货点和清关责任按选定的 Incoterms 规则及物流方案书面确认。" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header section (Top CTA) */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "首页", href: "/zh" }, { label: "OEM定制", href: "/zh/oem-private-label" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">私有品牌 OEM 代工</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              OEM 贴牌与抛光工具包定制服务
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              我们协助五金品牌和跨境工具卖家规划专有彩盒、产品组合及买家提供的条码数据，并在量产前确认包装样。
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/zh/contact"
              className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-orange-hover hover:scale-[1.02] text-center"
            >
              讨论定制包装方案
            </Link>
            <Link
              href="/zh/sample-kit"
              className="inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-slate-750 text-center"
            >
              申领首批样品包
            </Link>
          </div>
        </div>
      </section>

      {/* Key Takeaways / B2B Quick Facts */}
      <section className="py-8 bg-industry-slate-900 border-b border-industry-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-industry-slate-800 bg-industry-slate-950/40 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="md:w-1/3">
                <span className="text-[10px] font-mono font-bold tracking-widest text-industry-orange uppercase">采购快指</span>
                <h2 className="text-2xl font-black text-white mt-1">OEM 代工核心能力</h2>
                <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">
                  为多规格打磨组合套装提供的供应链物流及包装合规说明。
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>模块化套装配置:</strong> 支持棉布轮、黄绒轮、抛光膏蜡块、精细砂纸棒和中心接柄的跨品类高度融合。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>商用包装结构:</strong> 自由定制双吸塑插卡、彩色瓦楞纸盒、高承载自撕砂纸轴架以及挂卡塑料卡头袋。</span>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>条码扫码检查:</strong> 可应用买家提供的 FNSKU、UPC 和警示信息并进行样品扫码；正式等级验证与平台验收要求需单独约定。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>项目书面范围:</strong> 500 套为参考起订点，实际数量、生产计划、检验范围和国际交付假设按配置写入报价单。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OEM Capabilities details */}
      <section className="py-16 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Main details */}
            <div className="lg:col-span-8 space-y-12">
              
              <div className="space-y-8">
                {oemCapabilities.map((cap) => (
                  <div key={cap.title} className="glass-panel p-8 rounded-lg space-y-4">
                    <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                      {cap.title}
                    </h2>
                    <p className="text-sm text-industry-slate-300 leading-relaxed">
                      {cap.desc}
                    </p>
                    
                    {cap.examples && (
                      <div className="bg-industry-slate-950 p-4 rounded border border-industry-slate-800 text-xs font-mono text-industry-orange">
                        {cap.examples}
                      </div>
                    )}

                    {cap.details && (
                      <ul className="space-y-2 text-xs text-industry-slate-400 font-mono pl-4 list-disc">
                        {cap.details.map((det) => (
                          <li key={det}>{det}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Step-by-Step Flow */}
              <div className="space-y-6">
                <h2 className="text-2xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  SCOTTCHEN 贴牌定制标准化流程
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {oemSteps.map((step) => (
                    <div key={step.step} className="glass-panel p-6 rounded-lg flex space-x-4 border-l-4 border-l-industry-orange">
                      <div className="text-2xl font-black text-industry-orange/40 font-mono shrink-0">{step.step}</div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-white text-sm">{step.title}</h3>
                        <p className="text-xs text-industry-slate-400 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Side Info Panel */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="glass-panel rounded-lg overflow-hidden border border-industry-slate-800 shadow-xl relative">
                <img
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  src="/images/oem_packaging.webp"
                  alt="私有品牌包装概念示意图"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-3 text-[10px] text-industry-slate-300">
                  包装概念示意图
                </span>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  贴牌采购规格概览
                </h3>
                <div className="space-y-3 text-xs font-mono">
                  <div>
                    <span className="text-industry-slate-500 block">标准代工起订量:</span>
                    <span className="text-white font-bold">参考：盒装套件 500 套</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">包装结构模版:</span>
                    <span className="text-white font-bold">刀模交付范围写入报价</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">数码盒打样周期:</span>
                    <span className="text-white font-bold">包装稿审核后报价确认</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">安全法律标识支持:</span>
                    <span className="text-white font-bold">使用买家批准的警示内容</span>
                  </div>
                </div>
              </div>

              {/* Why private label works */}
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  分销体系品牌溢价
                </h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  对工具分销商和电商卖家而言，差异化并非仅来自布砂原材料，而在于能为消费者提供直观的工作流配置指南、精美的挂卡彩盒展现以及放心的转速安全标识。
                </p>
                <p className="text-xs text-industry-orange font-mono font-bold">
                  我们不仅出产工业散装，更致力于为您孵化卓越的高端终端耗材品牌。
                </p>
              </div>

              {/* Action card */}
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4 text-center">
                <h4 className="text-sm font-bold text-white uppercase">索取高精度包装展开线图？</h4>
                <p className="text-xs text-industry-slate-400">
                  点击是在线询盘，并在留言中注明您的套装配置组合，以获取高清晰包装刀模线设计原图。
                </p>
                <Link
                  href="/zh/contact"
                  className="w-full inline-flex justify-center items-center rounded bg-industry-orange py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover"
                >
                  发送贴牌配置需求
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-industry-slate-950 border-t border-industry-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">贴牌合作答疑</span>
            <h2 className="text-3xl font-extrabold text-white mt-3">常见问题解答 FAQ</h2>
            <p className="mt-4 text-sm text-industry-slate-400">
              为您解答包装最小起订量、FBA 条码扫描合规性、模版图纸与国际联运安排。
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "为什么大货的最小起订量 (MOQ) 可以控制在 500 套？",
                a: "盒装定制套装常以 500 套作为询价起点，部分泡壳方案可能从 1,000 套起。实际 MOQ 取决于产品组合、印刷方式、包装结构和材料供应商，并以报价单为准。"
              },
              {
                q: "你们提供的 CAD 包装展开刀模线格式是什么？怎么排版？",
                a: "一旦确定了最终的棉轮规格与抛光膏目数组合，我们的包装结构工程师就会为您定制高精度的刀模底图文件（提供 PDF 和 DXF 格式），上面标有清晰的裁切实线、折叠虚线和出血边缘，您的美工只需在 Adobe Illustrator (AI) 里直接套版输出即可。"
              },
              {
                q: "如何规避亚马逊 FBA 扫码入库由于条码模糊而被拒收的客诉？",
                a: "可应用买家提供的 UPC 或 FNSKU 数据，并在出货前进行样品扫码检查。条码尺寸、静区、对比度、承印材料和位置应遵循 GS1 指南及平台当期要求；如需正式验证等级，必须在质检范围中单独约定。"
              },
              {
                q: "纸箱和说明书支持哪些防爆和多国语言印刷规格？",
                a: "可按产品重量和运输测试要求选用双瓦楞纸箱，以降低重负荷磨片运输中的破损风险。说明书或内页的纸张、克重、语言和折页方式均需在包装规格中确认。"
              },
              {
                q: "你们可以把定制工具包直接 DDP（完税后交货）发到我们国外的海外仓吗？",
                a: "在核对目的地、进口商要求、产品归类和物流服务可用性后，可由物流服务商评估仓库直送方案。选定的 Incoterms 规则、指定地点、税费、清关责任和除外事项必须书面列明。"
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


      {/* Persistent CTA Banner */}
      <CTASection />
    </div>
  );
}
