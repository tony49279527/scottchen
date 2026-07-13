import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "磨料磨具产品质量控制与验货计划 | SCOTTCHEN",
  description: "了解磨料磨具项目可约定的层数、缝线、中心孔尺寸、工作限制、条码数据和出货前证据检查。",
  path: "/zh/quality-control",
  alternatePath: "/quality-control",
  locale: "zh-CN",
});

export default function ChineseQualityControl() {
  const qcPoints = [
    {
      title: "1. 原材料进厂校验",
      desc: "对于抛光棉布轮，可按确认规格核对棉纱材质、织物结构与来料标识。对于砂纸类磨料，可抽检 C-weight、J-weight 或乳胶纸基等背基参数，并记录批次结果。",
    },
    {
      title: "2. 棉布轮叠合层数与密度抽检",
      desc: "棉布轮通常以层数 (Ply) 作为厚度基准。30、40、50 或 60 Ply 等目标层数可依据确认的抽样方案进行计数，并与图纸、封样和允收标准比对。",
    },
    {
      title: "3. 缝线环绕抗拉力强度测试",
      desc: "同心圆螺旋缝线用于锁紧棉层。缝线结构、线材状态以及双方约定的拉力要求，可按确认的检验方法和封样进行检查。",
    },
    {
      title: "4. 中心孔径与铁盘公差精准控制",
      desc: "松动或偏心的中心孔会导致布轮在台式砂轮机上产生跳动。中心孔、外径、厚度和装配要求应依据双方确认的图纸与封样进行检验。",
    },
    {
      title: "5. 砂粒均匀度与光学粒度标定",
      desc: "异常粗粒可能在家具或金属表面留下明显划痕。砂粒标识与表面分布可依据双方确认的测试方法、抽样水平和允收标准进行检查。",
    },
    {
      title: "6. 纤维砂碟动平衡与防甩偏测试",
      desc: "高速磨料磨具需要清晰标示工作限制并设置合适的检验标准。在适用时，双方确认的质检计划可规定跳动或平衡检查所使用的夹具、方法和抽样水平。",
    },
    {
      title: "7. 粘接强度与耐温树脂附着检测",
      desc: "砂碟和自粘砂碟的背基柔韧性与磨料附着力，可按约定进行弯折、剥离或应用测试；具体允收条件写入对应 SKU 质检计划。",
    },
    {
      title: "8. 电商标签及外箱条码扫码审计",
      desc: "对于向亚马逊 FBA 仓库供货的跨境电商卖家，条码可读性非常重要。我们可在出货封箱前对彩盒上的 FNSKU、UPC 等条码进行扫描检查；最终入仓结果仍以平台当期规则为准。",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header (Top CTA) */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "首页", href: "/zh" }, { label: "质量控制", href: "/zh/quality-control" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">买家质量规划</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              磨料磨具产品质量控制与验货计划
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              逐 SKU 约定尺寸、结构、工作限制、磨料粒度、包装和出货前证据。
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/zh/contact"
              className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-orange-hover hover:scale-[1.02] text-center"
            >
              申请确认质检范围
            </Link>
            <Link
              href="/zh/sample-kit"
              className="inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-slate-750 text-center"
            >
              申请测试样品包
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
                <span className="text-[10px] font-mono font-bold tracking-widest text-industry-orange uppercase">质检数据</span>
                <h2 className="text-2xl font-black text-white mt-1">质量计划关键字段</h2>
                <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">
                  用于确认产品规格、抽样方法、检验记录和批次放行要求。
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>尺寸与装配检查:</strong> 中心孔、外径、厚度和装配要求依据确认图纸及封样进行检验。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>适用性能检查:</strong> 跳动、平衡、装配或转速相关测试按 SKU 和双方确认的质检计划执行并记录。</span>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>粒度与表面检查:</strong> 可在质检计划中约定物料隔离和表面检查，再依据封样及目标基材进行实际测试。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>标签与第三方验货:</strong> 买家条码数据可进行样品扫码；第三方验货的地点、时间、范围、准入和费用在报价阶段确认。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QC Detail Sections */}
      <section className="py-16 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content column */}
            <div className="lg:col-span-8 space-y-8">
              <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                可约定的抽检项目
              </h2>

              <div className="grid grid-cols-1 gap-6">
                {qcPoints.map((point) => (
                  <div key={point.title} className="glass-panel p-6 rounded-lg space-y-3">
                    <h3 className="text-base font-bold text-industry-orange">{point.title}</h3>
                    <div className="text-sm text-industry-slate-350 leading-relaxed">
                      {point.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Whitepaper Section */}
              <div className="glass-panel p-8 rounded-lg space-y-6 bg-industry-slate-950/40 border border-industry-slate-800">
                <span className="text-xs font-bold font-mono tracking-widest text-industry-orange uppercase">检验计划</span>
                <h3 className="text-xl font-extrabold text-white">
                  规格确认、检验方法与批次放行记录
                </h3>
                <p className="text-sm text-industry-slate-300 leading-relaxed">
                  不同磨料磨具适用的验收方法并不相同。量产前应逐 SKU 确认尺寸、工作限制、抽样水平、检验方法和需要提供的证据。
                </p>
                <div className="space-y-4 text-xs text-industry-slate-400 font-mono">
                  <div className="border-l-2 border-industry-orange pl-3 space-y-1">
                    <strong className="text-white">一、确认规格与封样</strong>
                    <p className="leading-relaxed">
                      记录尺寸、材料、结构、工具适配、标示工作限制、包装和双方认可的公差；在适用时保留有明确标识的确认样品。
                    </p>
                  </div>
                  <div className="border-l-2 border-industry-orange pl-3 space-y-1">
                    <strong className="text-white">二、适用检验方法</strong>
                    <p className="leading-relaxed">
                      根据产品类型，可检查尺寸、装配、外观结构、跳动、平衡、底基粘接、目数组合、条码可读性和包装装量。
                    </p>
                  </div>
                  <div className="border-l-2 border-industry-orange pl-3 space-y-1">
                    <strong className="text-white">三、批次追溯与放行</strong>
                    <p className="leading-relaxed">
                      检验记录应关联生产批次、订单、确认包装稿和抽样记录，并提前约定不合格品的隔离、评审和纠正方式。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Information Column */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="glass-panel rounded-lg overflow-hidden border border-industry-slate-800 shadow-xl relative">
                <img
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  src="/images/quality_inspection.webp"
                  alt="磨料磨具质检规划示意图"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-3 text-[10px] text-industry-slate-300">
                  流程示意图，不代表特定工厂或实验室实景
                </span>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  常用质检字段
                </h3>
                <ul className="space-y-3 text-xs font-mono">
                  <li className="flex justify-between">
                    <span className="text-industry-slate-500">尺寸与装配:</span>
                    <span className="text-white font-bold">确认图纸</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-industry-slate-500">产品结构:</span>
                    <span className="text-white font-bold">确认封样</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-industry-slate-500">工作限制:</span>
                    <span className="text-white font-bold">SKU 标签/规格</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-industry-slate-500">条码与包装:</span>
                    <span className="text-white font-bold">确认包装稿</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-industry-slate-500">抽样与证据:</span>
                    <span className="text-white font-bold">双方确认计划</span>
                  </li>
                </ul>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  船前第三方检验
                </h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  买家可申请第三方或内部出货前检验。验货机构、地点、抽样水平、证据、时间、现场准入和费用必须在报价及质检计划中确认。
                </p>
                <p className="text-xs text-industry-orange font-mono font-bold">
                  未列入订单范围的测试或报告不能视为默认包含。
                </p>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4 text-center">
                <h4 className="text-sm font-bold text-white uppercase">亲自检验我们的工艺质量</h4>
                <p className="text-xs text-industry-slate-400">
                  申领一盒标准大货规格的物理样品包，在您本国的试验车间中对缝线强度和磨料目数进行实地检测。
                </p>
                <Link
                  href="/zh/sample-kit"
                  className="w-full inline-flex justify-center items-center rounded bg-industry-orange py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover"
                >
                  配置测试样品包
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
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">质检体系 FAQ</span>
            <h2 className="text-3xl font-extrabold text-white mt-3">质量控制常见问题</h2>
            <p className="mt-4 text-sm text-industry-slate-400">
              面向采购方整理的出厂物理公差、动平衡规范以及船前现场检验等流程问答。
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "台式抛光布轮的中心孔公差如何确认？",
                a: "中心孔尺寸和公差应按 SKU 写入双方确认的图纸或规格表。量产前还应确认检验量具、方法和抽样水平。"
              },
              {
                q: "如何确立棉布轮层数 (Ply) 的真实性与叠合密度？",
                a: "确认规格应记录层数、结构以及适用的重量或厚度标准。生产样品可依据这些约定值和保留封样进行检查。"
              },
              {
                q: "纤维打磨砂盘的动平衡安全测试是怎么实施的？",
                a: "转速相关检验取决于产品设计、标示工作限制和适用标准。下单前应在质检计划中确认测试方法、抽样频率和需要提供的报告。"
              },
              {
                q: "你们怎么防范大货磨料或研磨膏（蜡条）发生目数污染与粗颗粒渗漏？",
                a: "质检计划可约定物料隔离、换线清场、供应批次管理和表面检查。精细抛光产品还应在实际底材上与确认样进行效果比较。"
              },
              {
                q: "我们可以安排我们本国的第三方验货公司装柜前去仓库检验么？",
                a: "第三方出货前验货可在报价阶段协商。买家应书面确认验货公司、范围、时间、现场要求和验货费用承担方式。"
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
