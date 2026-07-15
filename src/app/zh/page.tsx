import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { buildFaqPageSchema } from "@/lib/schema";
import { absoluteUrl, SITE_UPDATED } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "SCOTTCHEN 磨料磨具 B2B 采购与贴牌项目支持",
  description: "为抛光轮、砂碟和磨具套装提供上海 B2B 采购与项目支持；生产来源、证据、包装和商业条款按 SKU 书面确认。",
  path: "/zh",
  alternatePath: "/",
  locale: "zh-CN",
});

const homeFaqs = [
  {
    q: "你们抛光轮的最小起订量 (MOQ) 是多少？交期多久？",
    a: "MOQ 按 SKU、组合、包装、印刷方式、模具及数量报价；请以带日期的书面报价为准，不使用网页上的通用数字作为承诺。",
  },
  {
    q: "发往海外仓的包装与条码如何检查？",
    a: "买家提供的 FNSKU/UPC 数据、警告、纸箱标与包装稿可纳入报价；必须写明责任方、样品阶段、扫码方法和留存记录，最终入仓仍以平台当期规则为准。",
  },
  {
    q: "抛光轮中心孔 (Bore) 可以定制吗？如何适配不同的轴心？",
    a: "采购方应提供工具、轴径或夹头、法兰、防护、速度和目标工件。中心孔、轴套、柄径与兼容性按报价 SKU、来源文件和代表性样品确认；网站不承诺固定孔径或转接件现货。",
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
                上海 B2B 采购支持 · SKU 级披露 · 贴牌项目
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
                抛光轮及磨料磨具采购
                <span className="block text-industry-orange mt-2">B2B OEM 与贴牌项目支持</span>
              </h1>
              <p className="text-lg text-industry-slate-300 leading-relaxed max-w-2xl">
                为工具品牌、五金分销商和跨境卖家提供上海采购与项目支持；候选产品、包装、证据、起订量、标签和出运要求按 SKU 与书面报价确认。
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono uppercase tracking-wider text-industry-slate-400">
                <span>上海项目支持</span>
                <span className="text-industry-slate-700">·</span>
                <span>按 SKU 确认生产来源</span>
                <span className="text-industry-slate-700">·</span>
                <span>商业条款书面报价</span>
                <span className="text-industry-slate-700">·</span>
                <Link href="/zh/about" className="text-industry-orange hover:underline">
                  关于 SCOTTCHEN
                </Link>
              </div>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/zh/contact"
                  className="inline-flex justify-center items-center rounded bg-industry-orange-cta px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white transition-all-custom hover:bg-industry-orange-hover hover:scale-[1.02] text-center shadow-lg shadow-industry-orange/20"
                >
                  获取定制询价
                </Link>
                <Link
                  href="/zh/sample-kit"
                  className="inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800/80 px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white transition-all-custom hover:bg-industry-slate-750 text-center"
                >
                  申领样品包
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 text-sm font-bold">
                <Link
                  href="/zh/supplier-profile"
                  className="text-industry-orange hover:text-industry-orange-hover"
                >
                  查看供应商范围与询价要求 &rarr;
                </Link>
                <a
                  href="/catalog.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-industry-slate-300 hover:text-white underline underline-offset-4"
                >
                  打开规格目录 PDF
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-industry-slate-800 max-w-lg">
                <div>
                  <div className="text-xl font-bold text-white">证据中心</div>
                  <div className="text-xs text-industry-slate-400 mt-1">公开状态与项目文件</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">条码范围</div>
                  <div className="text-xs text-industry-slate-400 mt-1">仅使用买家提供的数据</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">按SKU报价</div>
                  <div className="text-xs text-industry-slate-400 mt-1">规格与包装决定起订量</div>
                </div>
              </div>
            </div>

            {/* Right: Graphic showcase */}
            <div className="lg:col-span-5 relative">
              <div className="glass-panel p-2 rounded-2xl border border-industry-slate-800 shadow-2xl overflow-hidden bg-industry-slate-900/40 relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-industry-orange/10 via-transparent to-transparent opacity-60 pointer-events-none" />
                <Image
                  width={1024}
                  height={1024}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  src="/images/hero_abrasives_kit.webp"
                  sizes="(min-width: 1024px) 40vw, 92vw"
                  quality={72}
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
                    <span className="text-industry-slate-200"><strong>起订量报价:</strong> 实际数量取决于SKU结构、材料、包装、印刷方式和订单组合。</span>
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
                    <span className="text-industry-slate-200"><strong>条码与包装审核:</strong> 报价需写明买家数据、责任方、批准稿、扫码方法和留存记录；网站目前没有生产扫码记录。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>国际货运:</strong> 可行路线、Incoterms、主体、指定地点、责任和费用按目的地评估并写入报价。</span>
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
            <h2 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">两大类别磨料磨具 B2B 采购支持</h2>
            <p className="mt-4 text-sm text-industry-slate-400 max-w-2xl mx-auto leading-relaxed">
              可围绕工业研磨与镜面抛光工作流比较产品规格和组合包装；生产来源、证据、可供范围与商业条款按 SKU 书面确认。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            
            {/* Category Card 1 */}
            <div className="glass-panel rounded-xl overflow-hidden hover:border-industry-slate-700 transition-colors flex flex-col justify-between group">
              <div className="h-64 w-full overflow-hidden border-b border-industry-slate-800 relative bg-industry-slate-950">
                <Image
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  src="/images/buffing_wheels.webp"
                  sizes="(min-width: 768px) 42vw, 92vw"
                  quality={68}
                  alt="SCOTTCHEN 布轮与抛光轮"
                  className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-300 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 to-transparent opacity-60" />
              </div>
              <div className="p-8 text-left space-y-4">
                <span className="text-[10px] font-mono text-industry-orange uppercase font-bold tracking-wider">镜面还原与表面精饰</span>
                <h3 className="text-2xl font-bold text-white">抛光轮及抛光耗材系列</h3>
                <p className="text-sm text-industry-slate-400 leading-relaxed">
                  可围绕密缝、松缝、气道、剑麻或带柄布轮及抛光膏提出询价。纤维成分、结构、克重、工具适配、可供范围与表面结果按 SKU、来源文件和样件测试确认。
                </p>
                <div className="pt-4 flex justify-between items-center">
                  <Link href="/zh/products/buffing-polishing-wheels" className="text-xs font-bold uppercase tracking-wider text-industry-orange hover:text-industry-orange-hover">
                    查看抛光轮规格书 &rarr;
                  </Link>
                  <span className="text-[10px] font-mono text-industry-slate-500">MOQ: 按 SKU 与包装报价</span>
                </div>
              </div>
            </div>

            {/* Category Card 2 */}
            <div className="glass-panel rounded-xl overflow-hidden hover:border-industry-slate-700 transition-colors flex flex-col justify-between group">
              <div className="h-64 w-full overflow-hidden border-b border-industry-slate-800 relative bg-industry-slate-950">
                <Image
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  src="/images/sanding_sheets.webp"
                  sizes="(min-width: 768px) 42vw, 92vw"
                  quality={68}
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
                  <span className="text-[10px] font-mono text-industry-slate-500">MOQ: 按规格、套装与包装报价</span>
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
              木工、金属加工和汽车美容项目可按目标工件、工具与渠道询价不同粒度和棉轮结构，并通过代表性样品确认效果。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "金属加工去毛刺", desc: "专为角磨机和台式砂轮机配置，结合强韧的锆刚玉砂碟和密缝线缝棉轮，快速去除金属焊缝与锈迹。", label: "金工工作流" },
              { title: "木工与家具打磨", desc: "可比较不同粒度、背基的砂纸、砂布卷与细节打磨工具；准确组合、来源和表面结果由样件测试批准。", label: "木工工作流" },
              { title: "汽车还原与抛光", desc: "带柄圆顶、圆柱形打磨轮可用于处理深槽轮毂。配套抛光膏用于氧化层处理和表面精饰，效果需通过基材测试确认。", label: "汽车美容工作流" },
              { title: "跨境电商套装项目", desc: "可评估泡壳挂卡或彩色瓦楞彩盒，以及 1/4 英寸适配柄、棉布轮与抛光膏组合；组件来源、条码、警告和最终可售性由批准文件确认。", label: "电商渠道场景" }
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
                <Image
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  src="/images/qc-evidence-planning-concept-v2.jpg"
                  sizes="(min-width: 1024px) 36vw, 92vw"
                  quality={68}
                  alt="AI 生成的磨料磨具质量证据规划概念图"
                  className="object-cover w-full h-80 rounded-xl opacity-90"
                />
                <span className="absolute bottom-4 left-5 text-[10px] text-industry-slate-300">
                  AI 生成的证据规划概念图，不代表特定工厂、实验室或实测结果
                </span>
              </div>
            </div>

            {/* Right: Technical QA info */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">采购质检计划</span>
              <h2 className="text-3xl font-extrabold text-white">规格化质检与条码审核，降低客诉风险</h2>
              <p className="text-sm text-industry-slate-400 leading-relaxed">
                工具配件的一致性会影响品牌声誉。质检计划应把偏心、粒度混杂、包装错误等风险转成可记录的 SKU 检验与放行要求。
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-industry-slate-950/50 p-4 rounded border border-industry-slate-800">
                  <span className="text-white font-bold block mb-1">物理尺寸控制</span>
                  <p className="text-industry-slate-400 leading-relaxed text-[11px]">
                    质检计划可按确认图纸与封样定义中心孔、外径、厚度、量具、抽样和装配检查。
                  </p>
                </div>
                <div className="bg-industry-slate-950/50 p-4 rounded border border-industry-slate-800">
                  <span className="text-white font-bold block mb-1">适用性能检查</span>
                  <p className="text-industry-slate-400 leading-relaxed text-[11px]">
                    跳动、平衡、装配和转速相关方法、责任方、样本与记录按具体SKU和质检计划确认。
                  </p>
                </div>
                <div className="bg-industry-slate-950/50 p-4 rounded border border-industry-slate-800">
                  <span className="text-white font-bold block mb-1">缝线与织物拉力</span>
                  <p className="text-industry-slate-400 leading-relaxed text-[11px]">
                    层数、缝线、织物结构和拉力要求需由来源文件、确认规格、方法与封样共同定义。
                  </p>
                </div>
                <div className="bg-industry-slate-950/50 p-4 rounded border border-industry-slate-800">
                  <span className="text-white font-bold block mb-1">彩盒与泡壳条码审计</span>
                  <p className="text-industry-slate-400 leading-relaxed text-[11px]">
                    如项目约定扫码，应明确买家数据、责任方、设备、样本、阶段和留存记录；目前无公开生产扫码记录。
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
                name: "SCOTTCHEN 磨料磨具 B2B 采购与贴牌项目支持",
                description:
                  "上海 B2B 磨料采购与贴牌项目支持；候选产品来源、证据、包装、条码范围和商业条款按 SKU 书面确认。",
                dateModified: SITE_UPDATED,
                inLanguage: "zh-CN",
                isPartOf: { "@id": absoluteUrl("/#website") },
                about: { "@id": absoluteUrl("/#organization") },
                primaryImageOfPage: absoluteUrl("/images/hero_abrasives_kit.webp"),
              },
              buildFaqPageSchema(homeFaqs),
            ],
          }),
        }}
      />

      <CTASection />
    </div>
  );
}
