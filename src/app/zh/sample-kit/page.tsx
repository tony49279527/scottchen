import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SampleKitForm from "@/components/SampleKitForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "申请表面打磨与抛光轮样品测试包 | SCOTTCHEN",
  description: "五金工具品牌商、渠道分销商或跨境电商卖家可申请抛光轮、锆刚玉纤维砂碟及防堵塞砂网样品，以评估结构、底基和磨料粒度。",
  path: "/zh/sample-kit",
  alternatePath: "/sample-kit",
  locale: "zh-CN",
});

export default function ChineseSampleKit() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "首页", href: "/zh" }, { label: "样品申领", href: "/zh/sample-kit" }]} />
          <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">产品质量校验评估</span>
          <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
            申请表面抛磨耗材样品测试包
          </h1>
          <p className="mt-4 text-base text-industry-slate-400 max-w-2xl mx-auto leading-relaxed">
            在批量采购前，实际检查车缝线密度、背基韧度和磨料粒度与采购要求的匹配程度。
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
                  为全球采购商提供样品审核、国际运费和规格定制说明。
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>商业样品审核:</strong> 经核实的品牌和渠道采购商可申请抛光轮、砂纸磨碟及细节打磨工具样品，具体费用按配置确认。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>样品与运费条款:</strong> 样品费、国际快递费及可能适用的订单抵扣政策会在发出前书面确认。</span>
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
                    <span className="text-industry-slate-200"><strong>书面样品计划:</strong> 备货、定制规格、包装稿件和快递要求审核后，再书面确认处理周期与发运目标。</span>
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
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  src="/images/sample_kit.webp"
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
                    <h4 className="font-bold text-white uppercase">样品费用如何确认？</h4>
                    <p className="text-industry-slate-400 mt-1 leading-relaxed">
                      费用取决于产品、数量、定制规格和包装范围。样品费与快递条款会在发出前书面确认，不默认承诺免费。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase">样品国际运费怎么安排？</h4>
                    <p className="text-industry-slate-400 mt-1 leading-relaxed">
                      我们可通过 DHL、FedEx、UPS 等国际快递发货。采购商通常承担快递费用，也可提供到付账号；如报价中包含合格订单抵扣条款，则按书面报价执行。
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
                      我们会在核对库存、定制工作、包装稿件和收货地后给出时间计划，并以书面样品方案中的发运目标为准。
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  商业资格审核条件
                </h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  样品申请需要填写有效的公司名称、网店或品牌官网网址以及联系邮箱。资料完整的申请通常会在一个工作日内完成初步审核。
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
                q: "哪些采购群体可以申请表面抛光打磨样品箱？",
                a: "样品申请主要面向有真实采购需求的商业客户，包括五金工具品牌、建材五金渠道、跨境电商采购和工业耗材分销商。样品可用性及费用按具体配置确认。"
              },
              {
                q: "对于样品产生的国际快递派送费用，SCOTTCHEN 是如何进行优惠扣减的？",
                a: "样品可采用 DHL、FedEx、UPS、TNT 或国际 EMS 快递。运费通常由买家承担或使用到付账号；任何订单抵扣安排必须以书面报价为准。"
              },
              {
                q: "我能否在样品中要求特定的棉布层数、适配器孔径或者特制砂纸粒度？",
                a: "可以。请在下面的表格中，列出您精确的打磨工艺配方（例如：6英寸 40 Ply 棉布轮、带 1/4\" 接柄的小毛刷、P80 到 P240 目数各 5 张的镂空砂网），我们将按您的图纸数据定制物理样品。"
              },
              {
                q: "样品的加工周期和跨国快递路途大概要多久？",
                a: "加工与运输时间会在核对库存、定制工作、包装稿件和收货地后报价，并以书面样品方案中的发运目标为准。"
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

    </div>
  );
}
