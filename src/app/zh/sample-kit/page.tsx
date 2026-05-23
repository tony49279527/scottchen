import type { Metadata } from "next";
import SampleKitForm from "@/components/SampleKitForm";

export const metadata: Metadata = {
  title: "免费申领表面打磨与抛光轮样品测试包 | SCOTTCHEN",
  description: "为五金工具品牌商、渠道分销商或跨境电商大卖家提供免费抛光轮布轮、锆刚玉纤维砂碟及防堵塞网格砂网物理样品，以评估缝合拉力、纸质韧性及磨料粒度。",
  alternates: {
    canonical: "https://www.scottchentools.com/zh/sample-kit",
    languages: {
      "en": "https://www.scottchentools.com/sample-kit",
      "zh-CN": "https://www.scottchentools.com/zh/sample-kit",
      "x-default": "https://www.scottchentools.com/sample-kit",
    },
  },
};

export default function ChineseSampleKit() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">产品质量校验评估</span>
          <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
            免费申领表面抛磨耗材样品测试包
          </h1>
          <p className="mt-4 text-base text-industry-slate-400 max-w-2xl mx-auto leading-relaxed">
            在大批量订柜前，实际检测我们的车缝线密度、防拉扯布纸韧度、磨料目数级配是否完全符合您的质量要求。
          </p>
        </div>
      </section>

      {/* Key Takeaways / B2B Quick Facts */}
      <section className="py-8 bg-industry-slate-900 border-b border-industry-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-industry-slate-800 bg-industry-slate-950/40 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="md:w-1/3">
                <span className="text-[10px] font-mono font-bold tracking-widest text-industry-orange uppercase">评估快指</span>
                <h2 className="text-2xl font-black text-white mt-1">样品评估规则</h2>
                <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">
                  为全球采购商提供的免费样品申领、国际运费扣减政策以及规格定制说明。
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>商用免费评估:</strong> 抛光棉轮、砂纸磨碟以及细节打磨笔等实体大货样品，对核实过的五金品牌及卖家免费提供。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>首单扣减快递费:</strong> 国际快递使用 DHL/FedEx/UPS 派送。样品快递费将在您签署首笔量产合同大货中 100% 抵扣。</span>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>高度可定制:</strong> 采购经理可自定义样品厚度层数 (Ply)、定位孔径公差、自磨砂纸背基类型或特定柄装接头尺寸。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>快捷加工处理:</strong> 常规库存储备样品在 3-5 天内包装出厂，附带您的私有品牌彩盒与高清条码的包装样需 7-10 天。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form content and instructions */}
      <section className="py-16 bg-industry-slate-900 flex-grow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Interactive Form */}
            <div className="lg:col-span-8">
              <SampleKitForm />
            </div>

            {/* Right: Sourcing guidelines */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="glass-panel rounded-lg overflow-hidden border border-industry-slate-800 shadow-xl relative">
                <img
                  src="/images/sample_kit.png"
                  alt="SCOTTCHEN 抛磨耗材样品测试箱"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  样品申领常见提问 FAQ
                </h3>
                
                <div className="space-y-4 text-xs">
                  <div>
                    <h4 className="font-bold text-white uppercase">样品物理耗材真的免费吗？</h4>
                    <p className="text-industry-slate-400 mt-1 leading-relaxed">
                      是的。棉布轮、砂碟磨碟、砂纸纸样对于核实身份的商业实体（工具分销商、网店卖家、五金供应链商）是完全免收材料费的。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase">样品国际运费怎么安排？</h4>
                    <p className="text-industry-slate-400 mt-1 leading-relaxed">
                      我们通过 DHL、FedEx、UPS 等快速国际物流发货。采购商需承担快递发货费（亦可通过您的快递到付账号发运）。该运费会在首笔大货量产合同中获得全额返还扣减。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase">我可以索取特定的磨料规格或层数吗？</h4>
                    <p className="text-industry-slate-400 mt-1 leading-relaxed">
                      当然可以。请在表格正文留言中写明您需要的直径大小、缝线层数、砂粒目数分配（如 C-wt Latex P240 砂纸、十字花星孔锆砂碟）或适配钻柄材质，我们技术部门会据此精准挑配。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase">样品发货的周期大概多久？</h4>
                    <p className="text-industry-slate-400 mt-1 leading-relaxed">
                      仓库储备规格的耗材通常在 3 到 5 个工作日内打包并贴单发运。若需附加您的 logo 图标做包装样，需要 7 到 10 个工作日进行印刷打板。
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  商业资格审核条件
                </h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  为了把有限的高价值物理样机包合理分发，申请需要填写有效的公司商业名称、网店或品牌官网网址以及合法的商业电子邮箱。我们会在 24 小时内完成审核反馈。
                </p>
                <div className="bg-industry-slate-950 p-3 rounded border border-industry-slate-800 text-[10px] font-mono text-industry-orange">
                  已审核的商用渠道包括：五金工具品牌、跨国批发分销商、亚马逊/Shopify 店主、工业抛磨耗材供货链经理。
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-industry-slate-950 border-t border-industry-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">样品规则 FAQ</span>
            <h2 className="text-3xl font-extrabold text-white mt-3">常见问题解答 FAQ</h2>
            <p className="mt-4 text-sm text-industry-slate-400">
              为您解答快递物流政策、目数特定搭配、代工包装样机打样以及商业审核机制。
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "哪些采购群体有资格申请免费的表面抛光打磨样品箱？",
                a: "磨盘磨具、棉布轮和打磨笔样品只面向有真实采购意向的商业客户免费发运，包括自有五金工具品牌持有者、建材五金渠道批发经理、跨境电商网店采购及汽配抛磨大宗分销买手。"
              },
              {
                q: "对于样品产生的国际快递派送费用，SCOTTCHEN 是如何进行优惠扣减的？",
                a: "样品大货采用 DHL、FedEx、UPS、TNT 或国际 EMS 快递。起航运费由买家承担（或提供您的账号到付）。样品派送产生的每一分快递费用，都将 100% 记录在案，并在您签订首笔集装箱量产大货时全额返还扣减。"
              },
              {
                q: "我能否在样品中要求特定的棉布层数、适配器孔径或者特制砂纸粒度？",
                a: "可以。请在下面的表格中，列出您精确的打磨工艺配方（例如：6英寸 40 Ply 棉布轮、带 1/4\" 接柄的小毛刷、P80 到 P240 目数各 5 张的镂空砂网），我们将按您的图纸数据定制物理样品。"
              },
              {
                q: "样品的加工周期和跨国快递路途大概要多久？",
                a: "普通的储备规格一般在 3 至 5 天内拼配出厂并上传运单号。涉及为您印刷定制品牌图案、或制作专属贴膜条码的物理样板，需要 7 到 10 个工作日进行盒样裁切印刷打样。"
              },
              {
                q: "在发运磨料耗材的同时，我们能够索取彩盒印刷数码样和条码贴纸的扫码样么？",
                a: "可以。您提交样品申请后，我们的商务团队会通过邮件向您索取矢量 logo 和 FNSKU/UPC 条码稿件，再安排制作带条码的包装样和物理样品，供您在量产前核验外观和扫码效果。"
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
            "@id": "https://www.scottchentools.com/zh/sample-kit#faqpage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "哪些采购群体有资格申请免费的表面抛光打磨样品箱？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "磨盘磨具、棉布轮和打磨笔样品只面向有真实采购意向的商业客户免费发运，包括自有五金工具品牌持有者、建材五金渠道批发经理、跨境电商网店采购及汽配抛磨大宗分销买手。"
                }
              },
              {
                "@type": "Question",
                "name": "对于样品产生的国际快递派送费用，SCOTTCHEN 是如何进行优惠扣减的？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "样品大货采用 DHL、FedEx、UPS、TNT 或国际 EMS 快递。起航运费由买家承担（或提供您的账号到付）。样品派送产生的每一分快递费用，都将 100% 记录在案，并在您签订首笔集装箱量产大货时全额返还扣减。"
                }
              },
              {
                "@type": "Question",
                "name": "我能否在样品中要求特定的棉布层数、适配器孔径或者特制砂纸粒度？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "可以。请在下面的表格中，列出您精确的打磨工艺配方（例如：6英寸 40 Ply 棉布轮、带 1/4\" 接柄的小毛刷、P80 到 P240 目数各 5 张的镂空砂网），我们将按您的图纸数据定制物理样品。"
                }
              },
              {
                "@type": "Question",
                "name": "样品的加工周期和跨国快递路途大概要多久？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "普通的储备规格一般在 3 至 5 天内拼配出厂并上传运单号。涉及为您印刷定制品牌图案、或制作专属贴膜条码的物理样板，需要 7 到 10 个工作日进行盒样裁切印刷打样。"
                }
              },
              {
                "@type": "Question",
                "name": "在发运磨料耗材的同时，我们能够索取彩盒印刷数码样和条码贴纸的扫码样么？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "可以。您提交样品申请后，我们的商务团队会通过邮件向您索取矢量 logo 和 FNSKU/UPC 条码稿件，再安排制作带条码的包装样和物理样品，供您在量产前核验外观和扫码效果。"
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
