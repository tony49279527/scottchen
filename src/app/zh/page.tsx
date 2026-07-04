import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl, SITE_UPDATED } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "SCOTTCHEN 磨料磨具与抛光轮 OEM/ODM 供应",
  description: "SCOTTCHEN 提供工业抛光轮、抛光布轮、气道布轮、砂碟及定制五金磨具套装的 B2B 供应、贴牌包装和条码准备支持。",
  path: "/zh",
  alternatePath: "/",
  locale: "zh-CN",
});

const homeFaqs = [
  {
    q: "你们抛光轮的最小起订量 (MOQ) 是多少？交期多久？",
    a: "500 件或 500 套是许多项目的询价起点，纸类磨料可能需要更大批量。实际 MOQ 和生产目标取决于 SKU、数量、包装、印刷、样品及产能，并在报价与订单计划中确认。",
  },
  {
    q: "发往海外仓的包装与条码如何检查？",
    a: "我们可按买家提供的 FNSKU/UPC 数据制作彩盒或标签，并在出货前进行扫描抽检。警告标签、纸箱标和最终入仓要求需依据平台当期规则确认。",
  },
  {
    q: "抛光轮中心孔 (Bore) 可以定制吗？如何适配不同的轴心？",
    a: "可以。我们提供包括 1/2英寸、5/8英寸、3/4英寸和 1英寸的中心孔。对于 bench grinder，我们提供 telescoping 阶梯塑料轴套或厚质纸套以实现多尺寸向下兼容。另外也提供带 1/4\" 铁柄或六角快速接头的夹持盘和迷你抛光磨头。",
  },
  {
    q: "砂纸和砂网有什么区别？我们如何为客户选择？",
    a: "传统砂纸可用于木工打磨及汽车漆面精饰，干湿两用乳胶纸基具有较好柔韧度；网格砂网采用开放式结构，有助于排灰并减少堵塞，常用于石膏板墙面打磨。实际集尘效果取决于打磨机、吸尘设备和操作条件。",
  },
  {
    q: "你们可以提供样品测试吗？",
    a: "可以。经核实的商业采购商可以申请样品。样品和国际快递费用取决于具体规格，并在发出前书面确认；如有合格订单抵扣政策，也会写入报价单。",
  },
] as const;

export default function ChineseHome() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-industry-slate-950 py-24 sm:py-32 border-b border-industry-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left: Heading text */}
            <div className="text-left lg:col-span-7 space-y-6">
              <span className="inline-flex items-center rounded bg-industry-orange/15 px-3 py-1 text-xs font-bold tracking-wider text-industry-orange uppercase border border-industry-orange/20">
                工业级抛光轮与磨料磨具 B2B 供应
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
                专注抛光轮及磨料磨具
                <span className="block text-industry-orange mt-2">B2B OEM/ODM 贴牌定制</span>
              </h1>
              <p className="text-lg text-industry-slate-300 leading-relaxed max-w-2xl">
                SCOTTCHEN 为工具品牌商、五金分销商及跨境电商卖家提供零售包装定制、砂碟组合与布轮产品供应，并按项目确认起订量、标签和出运要求。
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/zh/contact"
                  className="inline-flex justify-center items-center rounded bg-industry-orange-cta px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white transition-all-custom hover:bg-industry-orange-hover hover:scale-[1.02] text-center shadow-lg shadow-industry-orange/20"
                >
                  获取定制询价
                </Link>
                <Link
                  href="/zh/products"
                  className="inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800/80 px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white transition-all-custom hover:bg-industry-slate-750 text-center"
                >
                  浏览产品规格书
                </Link>
              </div>
              <Link
                href="/zh/supplier-profile"
                className="inline-block text-sm font-bold text-industry-orange hover:text-industry-orange-hover"
              >
                查看供应商范围、公开核验状态与询价要求 &rarr;
              </Link>
            </div>

            {/* Right: Graphic showcase */}
            <div className="lg:col-span-5 relative">
              <div className="glass-panel p-2 rounded-2xl border border-industry-slate-800 shadow-2xl overflow-hidden bg-industry-slate-900/40 relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-industry-orange/10 via-transparent to-transparent opacity-60 pointer-events-none" />
                <img
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  src="/images/hero_abrasives_kit.webp"
                  alt="SCOTTCHEN 抛光轮与打磨工具组合装"
                  className="object-cover w-full h-80 sm:h-96 rounded-xl opacity-90 group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Takeaways / B2B Quick Facts */}
      <section className="py-8 bg-industry-slate-900 border-b border-industry-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-industry-slate-800 bg-industry-slate-950/40 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="md:w-1/3">
                <span className="text-[10px] font-mono font-bold tracking-widest text-industry-orange uppercase">B2B 快速指引</span>
                <h2 className="text-2xl font-black text-white mt-1">供应链核心参数</h2>
                <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">
                  为全球采购经理与电商运营提供的数字化质检及合规参数。
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>参考起订量:</strong> 许多抛光轮或定制套装询价从 500 件/套起，实际 MOQ 取决于 SKU、包装和印刷方式。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>规格化质量控制:</strong> 中心孔、外径、结构和适用性能要求按 SKU 图纸、封样和双方确认的质检计划执行。</span>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>条码与包装审核:</strong> 可按买家提供的数据制作 FNSKU/UPC 标签并进行扫描抽检，最终要求以平台当期规则为准。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>国际货运:</strong> 可根据目的地讨论 FOB、CIF 或门到门方案，具体港口、责任和费用写入报价单。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="py-20 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div>
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">核心产品线</span>
            <h2 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">专业生产两大类别磨料磨具</h2>
            <p className="mt-4 text-sm text-industry-slate-400 max-w-2xl mx-auto leading-relaxed">
              我们为工业研磨和镜面抛光作业提供高度一致的规格，并接受自由组合包装，以配合特定的行业工作流。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            
            {/* Category Card 1 */}
            <div className="glass-panel rounded-xl overflow-hidden hover:border-industry-slate-700 transition-colors flex flex-col justify-between group">
              <div className="h-64 w-full overflow-hidden border-b border-industry-slate-800 relative bg-industry-slate-950">
                <img
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  src="/images/buffing_wheels.webp"
                  alt="SCOTTCHEN 布轮与抛光轮"
                  className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-300 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 to-transparent opacity-60" />
              </div>
              <div className="p-8 text-left space-y-4">
                <span className="text-[10px] font-mono text-industry-orange uppercase font-bold tracking-wider">镜面还原与表面精饰</span>
                <h3 className="text-2xl font-bold text-white">抛光轮及抛光耗材系列</h3>
                <p className="text-sm text-industry-slate-400 leading-relaxed">
                  提供密缝棉布轮、松缝黄 flannel 轮、气道布轮、剑麻重切削轮及带柄迷你抛光布轮。100g 到 500g 绿蜡、白蜡、红蜡等抛光膏可按目标表面效果与布轮结构搭配，实际结果需通过基材样件测试确认。
                </p>
                <div className="pt-4 flex justify-between items-center">
                  <Link href="/zh/products/buffing-polishing-wheels" className="text-xs font-bold uppercase tracking-wider text-industry-orange hover:text-industry-orange-hover">
                    查看抛光轮规格书 &rarr;
                  </Link>
                  <span className="text-[10px] font-mono text-industry-slate-500">MOQ: 500 件起</span>
                </div>
              </div>
            </div>

            {/* Category Card 2 */}
            <div className="glass-panel rounded-xl overflow-hidden hover:border-industry-slate-700 transition-colors flex flex-col justify-between group">
              <div className="h-64 w-full overflow-hidden border-b border-industry-slate-800 relative bg-industry-slate-950">
                <img
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  src="/images/sanding_sheets.webp"
                  alt="SCOTTCHEN 研磨与砂纸配件"
                  className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-300 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 to-transparent opacity-60" />
              </div>
              <div className="p-8 text-left space-y-4">
                <span className="text-[10px] font-mono text-industry-orange uppercase font-bold tracking-wider">材料去除与表面打磨</span>
                <h3 className="text-2xl font-bold text-white">砂纸、砂网及锆刚玉砂碟系列</h3>
                <p className="text-sm text-industry-slate-400 leading-relaxed">
                  包含干湿两用 C-wt 晚香玉纸砂纸卷、网格防堵塞玻璃纤维砂网、锆刚玉重切削纤维砂碟（配 7/8&quot; 星型中心孔），以及手部细节打磨棒和各种混合目数的零售砂纸套装。
                </p>
                <div className="pt-4 flex justify-between items-center">
                  <Link href="/zh/products/sanding-grinding-accessories" className="text-xs font-bold uppercase tracking-wider text-industry-orange hover:text-industry-orange-hover">
                    查看磨料研磨规格书 &rarr;
                  </Link>
                  <span className="text-[10px] font-mono text-industry-slate-500">MOQ: 10,000 张 / 1,000 套起</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-industry-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div>
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">行业应用工作流</span>
            <h2 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">量身定制的打磨与抛光工具包</h2>
            <p className="mt-4 text-sm text-industry-slate-400 max-w-2xl mx-auto leading-relaxed">
              无论您的目标客户是木工工匠、金属加工车间还是汽车美容店，我们都能合理配置目数和棉轮硬度以达到最佳效果。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "金属加工去毛刺", desc: "专为角磨机和台式砂轮机配置，结合强韧的锆刚玉砂碟和密缝线缝棉轮，快速去除金属焊缝与锈迹。", label: "金工工作流" },
              { title: "木工与家具打磨", desc: "配套提供从粗砂 P80 到细砂 P320 的乳胶干磨砂纸、砂布卷，配合塑料精细砂纸棒解决复杂造型细节。", label: "木工工作流" },
              { title: "汽车还原与抛光", desc: "带柄圆顶、圆柱形打磨轮可用于处理深槽轮毂。配套抛光膏用于氧化层处理和表面精饰，效果需通过基材测试确认。", label: "汽车美容工作流" },
              { title: "跨境电商专属套装", desc: "结合零售泡壳挂卡或彩色瓦楞彩盒设计，提供预先捆绑好的 1/4 适配柄、棉布轮与抛光膏组合，开箱即售。", label: "电商热销类目" }
            ].map((app, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-lg text-left space-y-3 hover:border-industry-slate-800 transition-colors">
                <span className="text-[10px] font-mono font-bold text-industry-orange uppercase bg-industry-orange/10 px-2 py-0.5 rounded border border-industry-orange/20">
                  {app.label}
                </span>
                <h3 className="text-base font-bold text-white pt-2">{app.title}</h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <Link
              href="/zh/applications"
              className="inline-flex justify-center items-center rounded bg-industry-slate-850 hover:bg-industry-slate-800 text-xs font-bold uppercase tracking-wider text-white py-3 px-6 transition-colors"
            >
              浏览所有应用场景配置 &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* OEM Capabilities & Quality Controls */}
      <section className="py-20 bg-industry-slate-900 border-t border-industry-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: QA Inspection Image */}
            <div className="lg:col-span-5">
              <div className="glass-panel p-2 rounded-2xl border border-industry-slate-800 shadow-2xl overflow-hidden bg-industry-slate-950/40 relative">
                <img
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  src="/images/quality_inspection.webp"
                  alt="磨料磨具质量计划示意图"
                  className="object-cover w-full h-80 rounded-xl opacity-90"
                />
                <span className="absolute bottom-4 left-5 text-[10px] text-industry-slate-300">
                  流程示意图，不代表特定工厂或实验室实景
                </span>
              </div>
            </div>

            {/* Right: Technical QA info */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">采购质检计划</span>
              <h2 className="text-3xl font-extrabold text-white">规格化质检与条码审核，降低客诉风险</h2>
              <p className="text-sm text-industry-slate-400 leading-relaxed">
                在 Scottchen (SCOTTCHEN)，我们深知工具配件的一致性对品牌声誉至关重要。一个重心偏移的抛光轮或目数混杂的砂纸，都会导致买家差评或退货。
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-industry-slate-950/50 p-4 rounded border border-industry-slate-800">
                  <span className="text-white font-bold block mb-1">物理尺寸控制</span>
                  <p className="text-industry-slate-400 leading-relaxed text-[11px]">
                    中心孔、外径、厚度和装配要求按确认图纸及封样进行检查，降低偏心跳动和装配异常风险。
                  </p>
                </div>
                <div className="bg-industry-slate-950/50 p-4 rounded border border-industry-slate-800">
                  <span className="text-white font-bold block mb-1">适用性能检查</span>
                  <p className="text-industry-slate-400 leading-relaxed text-[11px]">
                    跳动、平衡、装配和转速相关测试按产品设计、标示限制及双方确认的质检计划执行。
                  </p>
                </div>
                <div className="bg-industry-slate-950/50 p-4 rounded border border-industry-slate-800">
                  <span className="text-white font-bold block mb-1">缝线与织物拉力</span>
                  <p className="text-industry-slate-400 leading-relaxed text-[11px]">
                    层数、缝线、织物结构和适用的拉力要求依据确认规格与封样进行抽检并记录。
                  </p>
                </div>
                <div className="bg-industry-slate-950/50 p-4 rounded border border-industry-slate-800">
                  <span className="text-white font-bold block mb-1">彩盒与泡壳条码审计</span>
                  <p className="text-industry-slate-400 leading-relaxed text-[11px]">
                    可按买家提供的数据对 FNSKU 或 UPC 进行出货前扫描抽检，并保留约定的检查记录。
                  </p>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <Link href="/zh/quality-control" className="text-xs font-bold text-industry-orange hover:text-industry-orange-hover uppercase tracking-wider">
                  了解详细质量规划 &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-industry-slate-950 border-t border-industry-slate-850">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">技术答疑与合作流程</span>
            <h2 className="text-3xl font-extrabold text-white mt-3">常见问题解答</h2>
            <p className="mt-4 text-sm text-industry-slate-400">
              面向采购商、分销商及电商买家的技术规范、定制流程和货运政策。
            </p>
          </div>

          <div className="space-y-6">
            {homeFaqs.map((faq, idx) => (
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
            "@graph": [
              {
                "@type": "WebPage",
                "@id": absoluteUrl("/zh#webpage"),
                url: absoluteUrl("/zh"),
                name: "SCOTTCHEN 磨料磨具与抛光轮 OEM/ODM 供应",
                description:
                  "SCOTTCHEN 提供工业抛光轮、抛光布轮、气道布轮、砂碟及定制五金磨具套装的 B2B 供应、贴牌包装和条码准备支持。",
                dateModified: SITE_UPDATED,
                inLanguage: "zh-CN",
                isPartOf: { "@id": absoluteUrl("/#website") },
                about: { "@id": absoluteUrl("/#organization") },
                primaryImageOfPage: absoluteUrl("/images/hero_abrasives_kit.webp"),
              },
            ],
          }),
        }}
      />

      <CTASection />
    </div>
  );
}
