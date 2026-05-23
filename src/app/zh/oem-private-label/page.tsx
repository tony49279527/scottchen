import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "OEM & 私有品牌抛光工具包定制方案 | SCOTTCHEN",
  description: "提供私有品牌彩盒挂卡设计、FNSKU/UPC条码贴标、亚马逊FBA合规发货支持，为您的表面抛磨抛光轮及砂纸套装打造一站式零售代工服务。",
  alternates: {
    canonical: "https://www.scottchentools.com/zh/oem-private-label",
    languages: {
      "en": "https://www.scottchentools.com/oem-private-label",
      "zh-CN": "https://www.scottchentools.com/zh/oem-private-label",
      "x-default": "https://www.scottchentools.com/oem-private-label",
    },
  },
};

export default function ChineseOEMPrivateLabel() {
  const oemCapabilities = [
    {
      title: "1. 柔性化产品自由组合",
      desc: "绝不受限于常规单一产品目录！我们支持您在一个定制工具箱内跨类别自由搭配。您可以将棉布轮、抛光膏蜡条、带柄中心轴、塑料细节打磨棒或多目数砂纸包进行自由组合，从而针对木工打磨、金属还原或车身抛光等具体工作流定制专属套装。",
      examples: "示例：1个6寸缝线棉轮 + 1个6寸松缝黄绒轮 + 2条抛光膏（绿蜡与白蜡）+ 1根电钻接柄轴。",
    },
    {
      title: "2. 多样化零售包装定制",
      desc: "包装的档次决定了产品的溢价。我们提供以下不同包装形态的结构打样与设计方案：",
      details: [
        "双泡壳挂卡包装：极高的产品视觉通透度，适合建材超市货架及五金店挂钩展示。",
        "彩色瓦楞彩盒：具备极高抗压强度，适合重负荷锆刚玉砂碟、金刚石磨片或自撕纸砂卷架。",
        "环保牛皮纸盒：极简轻量，特别适合跨境电商线上卖家，能有效降低运输重力体积及塑料废弃物。",
        "带卡头精装吊卡袋：高性价比，适合精细打磨砂纸笔或混合目数裁切好的砂纸片套装。",
      ],
    },
    {
      title: "3. 专业条码审计与合规标识",
      desc: "我们在出厂集装箱装柜前，100% 确保您的每批大货彻底符合目标电商平台及进口国海关的各项标识合规。绝不在货抵国外后再进行二次手工改贴。",
      details: [
        "FNSKU / UPC 条码：直接印刷或采用耐磨标签粘贴于最小零售包上，无缝满足亚马逊 FBA 扫码入库。",
        "多语言技术说明书：提供清晰的配合工具型号对照表、磨料目数-底材推荐卡，有效避免由于买家误用导致的退单。",
        "安全警告与出口警示标：外箱粘贴标准警告图标、防潮图示及原产地标 (Made in China)。",
      ],
    },
    {
      title: "4. 专为跨境电商优化的物流封装",
      desc: "针对亚马逊、Shopify、Walmart等线上五金工具大卖家，防损与仓储计费极其关键。我们对包装进行1.5米六面防摔跌落测试，优化纸盒物理尺寸使其落在最合算的轻小或标准仓储计费区间内，大箱直接成套出运，免除仓配前置二次加工。",
    },
  ];

  const oemSteps = [
    { step: "01", title: "申领样品包", desc: "在您本国的质检工段实际测试我们的布轮叠合密度、缝线强度和磨料切削力。" },
    { step: "02", title: "挑选套装搭配", desc: "与我们的工程师紧密协作，敲定所需的耗材规格、粒度级配和吸塑/泡棉内衬设计。" },
    { step: "03", title: "刀模线图设计", desc: "我们提供高精度的 CAD 刀模设计图（PDF/DXF），您的美工人员可直接排版印刷稿。" },
    { step: "04", title: "彩盒样品验证", desc: "在大货量产前，制作包装数码样以及条码贴标位置确认图，供您视觉及扫码核验。" },
    { step: "05", title: "严格批量制造", desc: "标准交期通常在 25 到 35 天，包含动平衡抽检、孔径尺寸通规控制等出厂质检标准。" },
    { step: "06", title: "FBA及港口出运", desc: "完成货柜装运，可配合专业的货代提供 DDU/DDP 门到门双清海空运，直接发往海外仓。" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header section (Top CTA) */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">私有品牌 OEM 代工</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              OEM 贴牌与抛光工具包定制服务
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              我们助力全球五金品牌、跨境工具大卖家打造具有专有彩盒、丰富配套和条码完全合规的零售端磨耗耗材套装。
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
                    <span className="text-industry-slate-200"><strong>条码扫码审计:</strong> 工厂端直接审计并粘贴清晰的 FNSKU、UPC 以及安全合规标识，坚决杜绝因漏扫导致的入库异常。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>柔性代工供应链:</strong> 定制工具包 500 套即可起订彩盒设计。25-35 天快捷量产，无缝承接上海/宁波双港口订柜发货。</span>
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
                  src="/images/oem_packaging.png"
                  alt="SCOTTCHEN OEM 代工零售挂卡与彩盒外包装"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  贴牌采购规格概览
                </h3>
                <div className="space-y-3 text-xs font-mono">
                  <div>
                    <span className="text-industry-slate-500 block">标准代工起订量:</span>
                    <span className="text-white font-bold">500 套起（支持跨类别混装）</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">包装结构模版:</span>
                    <span className="text-white font-bold">免费提供 CAD 刀模展开图纸</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">数码盒打样周期:</span>
                    <span className="text-white font-bold">提供艺术稿排版后 5-7 天</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">安全法律标识支持:</span>
                    <span className="text-white font-bold">提供多国文字标准的警告说明模版</span>
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
                a: "我们在彩印及泡壳代工段进行了柔性化优化。对于台式磨轮、抛光膏混合的盒装，我们和高质彩印厂达成了500套即可开机的代工协议。这极大降低了线上五金卖家新品上市或定制特殊目数配方的试错成本。"
              },
              {
                q: "你们提供的 CAD 包装展开刀模线格式是什么？怎么排版？",
                a: "一旦确定了最终的棉轮规格与抛光膏目数组合，我们的包装结构工程师就会为您定制高精度的刀模底图文件（提供 PDF 和 DXF 格式），上面标有清晰的裁切实线、折叠虚线和出血边缘，您的美工只需在 Adobe Illustrator (AI) 里直接套版输出即可。"
              },
              {
                q: "如何规避亚马逊 FBA 扫码入库由于条码模糊而被拒收的客诉？",
                a: "我们在贴装线上应用了 300DPI 热敏高清工业级打印，或直接精细四色套印条码。条码采用全阻光的抗磨哑光涂层合成纸贴纸，在批量装箱前，逐箱用条码阅读器进行反射率与清晰度等级测试，坚决杜绝脏墨或破损条码出厂。"
              },
              {
                q: "纸箱和说明书支持哪些防爆和多国语言印刷规格？",
                a: "对于外箱，我们选用双波纹（五层）高强度瓦楞纸箱，彻底防止重负荷磨片运输中发生破损。说明书或内贴纸采用标准 128g 双铜纸进行高速折页，支持英文、德文、法文、西班牙文等主流外贸语种翻译排版。"
              },
              {
                q: "你们可以把定制工具包直接 DDP（完税后交货）发到我们国外的海外仓吗？",
                a: "可以。我们有丰富的跨国跨境电商大货物流经验。我们可以全权协助您对接海运整柜/拼箱、跨国铁运和国际空运大货，提供包办出口退税、进口报关缴税并门到门派送（DDP 完税交货），直接清关交付给您的亚马逊 FBA 仓库或指定海外散货站。"
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
            "@type": "FAQPage",
            "@id": "https://www.scottchentools.com/zh/oem-private-label#faqpage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "为什么大货的最小起订量 (MOQ) 可以控制在 500 套？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "我们在彩印及泡壳代工段进行了柔性化优化。对于台式磨轮、抛光膏混合的盒装，我们和高质彩印厂达成了500套即可开机的代工协议。这极大降低了线上五金卖家新品上市或定制特殊目数配方的试错成本。"
                }
              },
              {
                "@type": "Question",
                "name": "你们提供的 CAD 包装展开刀模线格式是什么？怎么排版？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "一旦确定了最终的棉轮规格与抛光膏目数组合，我们的包装结构工程师就会为您定制高精度的刀模底图文件（提供 PDF 和 DXF 格式），上面标有清晰的裁切实线、折叠虚线和出血边缘，您的美工只需在 Adobe Illustrator (AI) 里直接套版输出即可。"
                }
              },
              {
                "@type": "Question",
                "name": "如何规避亚马逊 FBA 扫码入库由于条码模糊而被拒收的客诉？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "我们在贴装线上应用了 300DPI 热敏高清工业级打印，或直接精细四色套印条码。条码采用全阻光的抗磨哑光涂层合成纸贴纸，在批量装箱前，逐箱用条码阅读器进行反射率与清晰度等级测试，坚决杜绝脏墨或破损条码出厂。"
                }
              },
              {
                "@type": "Question",
                "name": "纸箱和说明书支持哪些防爆和多国语言印刷规格？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "对于外箱，我们选用双波纹（五层）高强度瓦楞纸箱，彻底防止重负荷磨片运输中发生破损。说明书或内贴纸采用标准 128g 双铜纸进行高速折页，支持英文、德文、法文、西班牙文等主流外贸语种翻译排版。"
                }
              },
              {
                "@type": "Question",
                "name": "你们可以把定制工具包直接 DDP（完税后交货）发到我们国外的海外仓吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "可以。我们有丰富的跨国跨境电商大货物流经验。我们可以全权协助您对接海运整柜/拼箱、跨国铁运和国际空运大货，提供包办出口退税、进口报关缴税并门到门派送（DDP 完税交货），直接清关交付给您的亚马逊 FBA 仓库或指定海外散货站。"
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
