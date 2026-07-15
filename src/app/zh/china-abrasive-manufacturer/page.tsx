import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { buildFaqPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "中国磨料采购与上海 OEM 项目支持 | SCOTTCHEN",
  description: "SCOTTCHEN 提供上海 B2B 磨料采购与 OEM 项目支持；签约主体、生产来源、标准、证书和报告按报价 SKU 书面确认。",
  path: "/zh/china-abrasive-manufacturer",
  locale: "zh-CN",
  alternatePath: "/china-abrasive-manufacturer",
});

export default function ZhChinaAbrasiveManufacturerPage() {
  const capabilities = [
    { name: "抛光轮与布轮", link: "/zh/buffing-wheels", desc: "棉布轮、麻布轮、气道风冷轮、抛光膏、带柄磨头" },
    { name: "砂纸片与砂碟", link: "/zh/sanding-discs", desc: "植绒拉绒片、背胶PSA、钢纸磨片、网砂、快换转矩砂碟、水磨砂纸" },
    { name: "百叶片与百叶轮", link: "/zh/flap-discs", desc: "T27平面型、T29钹型，锆刚玉/陶瓷/氧化铝，4-7寸" },
    { name: "环形砂带", link: "/zh/sanding-belts", desc: "手提/台式/窄砂带/宽幅砂带/制刀砂带/碳化硅砂带，尺寸范围按报价确认" },
    { name: "树脂切割片", link: "/zh/cutting-wheels", desc: "金属、不锈钢、超薄、钹型、铸铁和石材切割片，安全文件按SKU与目标市场核验" },
    { name: "磨具套装", link: "/zh/abrasive-kits", desc: "抛光套装、砂纸套装、电钻配件套装、汽车/首饰/DIY套装" },
  ];

  const faqs = [
    {
      q: "为什么从中国磨料磨具厂家采购磨具？",
      a: "中国拥有覆盖磨料、背基、结合剂、转换加工和包装的广泛供应链。采购方应比较材料与生产来源、代表性样品表现、质量计划、包装、起订量、交期、贸易术语和总到岸成本，而不是依赖笼统的节省比例、工厂直供或认证声明。" },
    {
      q: "SCOTTCHEN 在磨料采购项目中承担什么角色？",
      a: "SCOTTCHEN 提供以上海为协调基地的 B2B 磨料采购与 OEM 项目支持。每份书面报价应列明签约主体、实际生产来源与地点、报价组件范围、商务条款，以及准确 SKU 可提供的证据。" },
    {
      q: "报价 SKU 的质量控制如何确定？",
      a: "买方应与报价生产来源书面确认质量计划，包括规格版本、样品标识、检验节点、抽样水平、测试方法、验收标准、记录和不合格品处理。不同产品与来源不预设统一 AQL、测试清单或放行流程。" },
    {
      q: "能提供第三方工厂审核报告或认证吗？",
      a: "如需体系证书、工厂审核或产品测试报告，应在RFQ中要求签发机构、证书或报告编号、覆盖法律主体与场地、产品和尺寸范围、标准版本、签发与到期日期。买家也可在报价阶段约定现场、视频或第三方审核的范围、费用和访问条件。" },
    {
      q: "新国际客户的付款方式是什么？",
      a: "付款方式、定金和尾款节点、币种、收款主体、银行费用及单据条件随签约主体和项目而变化。买方应仅以核对后的书面报价、形式发票和合同为准，并确认收款主体与批准的签约安排一致。" },
    {
      q: "如何开始从SCOTTCHEN采购磨料磨具？",
      a: "请通过联系表单或询价页面提交产品、数量、规格、包装、目标市场和贸易术语。报价应写明样品、物料、生产、验货和出运节点；海运时间由起运港、目的港、航线和订舱日期决定，应以货代或承运人当期方案为准。" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "首页", href: "/zh" }, { label: "中国磨料采购", href: "/zh/china-abrasive-manufacturer" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">采购 · OEM · 证据核验</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              中国磨料采购与上海 OEM 项目支持
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              SCOTTCHEN在上海为抛光轮、砂纸片、百叶片、切割片、砂带和磨具套装项目提供OEM采购与出口协调。生产主体、场地、证书、产品测试和市场覆盖按具体项目核验。
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link href="/zh/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-orange-hover hover:scale-[1.02] text-center">
              获取采购报价
            </Link>
            <Link href="/zh/sample-kit" className="inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-slate-750 text-center">
              索取样品
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-industry-slate-900 border-b border-industry-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-industry-slate-800 bg-industry-slate-950/40">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">上海</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">B2B 协调基地</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">按市场</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">范围书面确认</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">按 SKU</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">来源与证据定义</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">6大品类</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">采购范围</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">生产来源核验</span>
              <h2 className="text-2xl font-extrabold text-white tracking-wide">如何核验报价生产范围</h2>
              <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                <p>
                  SCOTTCHEN以上海为采购与出口协调基地。针对每个询价，买家应确认生产法律主体、实际场地、产品来源、外包工序、质量体系覆盖范围和装运港，不应把公司所在地自动等同于所有产品的生产地点。
                </p>
                <p>
                  抛光轮、涂附磨具、固结磨具、抛光膏和套装可能涉及不同材料、设备和生产来源。报价应列明实际来源与关键工序，并把样品、检验、变更控制和交期责任写入订单文件。
                </p>
                <p>
                  RFQ 还应写明目标市场、适用规则、质量记录、包装输入和出口文件。工程、审核、法规或第三方检验支持仅以项目书面确认的范围为准。
                </p>
              </div>
            </div>
            <div className="glass-panel rounded-lg overflow-hidden border border-industry-slate-800 relative">
              <Image
                width={1024}
                height={768}
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={70}
                loading="lazy"
                src="/images/qc-evidence-planning-concept-v2.jpg"
                alt="磨料质量证据规划概念示意图，非SCOTTCHEN或供应商工厂实拍"
                className="w-full h-80 object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
                <p className="text-xs font-semibold text-white">
                  质量证据规划概念示意图——不是工厂或生产设施实拍
                </p>
                <p className="text-[11px] text-industry-slate-300 leading-relaxed">
                  该图仅说明文件与检验规划流程。法律主体文件、设施证据、证书、测试报告和检验记录必须针对报价来源与 SKU 实际提供并核验。
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <Link href="/zh/contact" className="text-[11px] font-bold text-industry-orange hover:underline">
                    申请证据计划 →
                  </Link>
                  <Link href="/zh/about" className="text-[11px] font-bold text-industry-slate-300 hover:text-white hover:underline">
                    关于 SCOTTCHEN →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">产品采购范围</span>
              <h2 className="text-2xl font-extrabold text-white mt-2">可询价磨料磨具范围</h2>
              <p className="mt-3 text-sm text-industry-slate-400">
                六类产品的生产来源、质量体系、测试证据和适用市场文件按具体SKU确认。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((cap) => (
                <Link key={cap.name} href={cap.link} className="glass-panel p-6 rounded-lg border border-industry-slate-800 hover:border-industry-orange transition-colors block group">
                  <h3 className="text-lg font-bold text-white group-hover:text-industry-orange transition-colors">{cap.name}</h3>
                  <p className="text-xs text-industry-slate-400 mt-2">{cap.desc}</p>
                  <span className="inline-flex items-center text-xs font-bold text-industry-orange mt-4 group-hover:underline">
                    查看产品详情 &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">质量规划</span>
              <h2 className="text-2xl font-extrabold text-white mt-2">按 SKU 制定质量证据计划</h2>
              <p className="mt-3 text-sm text-industry-slate-400">
                检验和测试按实际来源、目标市场与 SKU 书面约定，不暗示所有产品采用统一工厂流程。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { stage: "来源与规格核对", desc: "记录签约主体、生产来源与地点、批准规格版本、材料或组件、标签范围，以及哪些变更必须重新取得买家批准。" },
                { stage: "样品与测试计划", desc: "明确代表性样品、适用市场要求、测试方法、验收标准、负责实验室或检验方，以及报价 SKU 需要保留的证据。" },
                { stage: "出货证据约定", desc: "在生产或出货前书面约定检验范围、抽样水平、包装和条码检查、报告格式、放行权限与不合格品处理。" },
              ].map((step, idx) => (
                <div key={step.stage} className="glass-panel p-6 rounded-lg border border-industry-slate-800">
                  <div className="w-12 h-12 rounded-full bg-industry-orange/20 flex items-center justify-center mb-4">
                    <span className="text-xl font-black text-industry-orange">{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{step.stage}</h3>
                  <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-5">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">OEM服务</span>
              <h2 className="text-2xl font-extrabold text-white tracking-wide">OEM/ODM贴牌服务</h2>
              <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                <p>
                  SCOTTCHEN 为经销商、工具品牌、五金渠道、电商卖家和工业采购方提供 OEM 与贴牌采购支持。产品可用性、实际来源、定制范围和包装选项以书面报价为准。
                </p>
                <p>OEM合作流程遵循结构化的五步法：</p>
                <ol className="space-y-3 mt-2">
                  <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-industry-orange text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">1</span><span><strong className="text-white">需求沟通与报价：</strong>提交产品要求、应用、用量预估和包装方向；书面回复会说明可提供的技术输入、候选来源、假设与报价范围。</span></li>
                  <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-industry-orange text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">2</span><span><strong className="text-white">代表性样品：</strong>在买家评估前记录拟议来源、样品标识、规格和测试责任。</span></li>
                  <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-industry-orange text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">3</span><span><strong className="text-white">书面批准与条款：</strong>下单前确认样品批准、MOQ、费用、付款节点、交期假设和变更控制。</span></li>
                  <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-industry-orange text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">4</span><span><strong className="text-white">生产与证据：</strong>报价生产来源按约定质量计划执行，并提供订单文件规定的检验或测试记录。</span></li>
                  <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-industry-orange text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">5</span><span><strong className="text-white">包装发货：</strong>按买家批准的散装、零售或平台包装文件执行，贸易术语与物流责任写入报价。</span></li>
                </ol>
              </div>
            </div>
            <div className="space-y-5">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">出口规划</span>
              <h2 className="text-2xl font-extrabold text-white tracking-wide">出口文件与询盘方类型</h2>
              <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                <p>
                  出口单证与产品合规要求随目的国、产品和贸易安排变化。商业发票、装箱单、提单、原产地文件和产品测试资料的提供范围，应在订单前按目标市场逐项确认。
                </p>
                <p>常见采购询盘方包括：</p>
                <ul className="space-y-2">
                  <li className="flex items-start"><svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>五金分销商与工业 MRO 供应链</span></li>
                  <li className="flex items-start"><svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>通过零售、分销和电商渠道销售的自有品牌工具品牌</span></li>
                  <li className="flex items-start"><svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>需要零售级包装的Amazon FBA和各类电商卖家</span></li>
                  <li className="flex items-start"><svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>有批量采购需求的工业终端用户和抛光加工厂</span></li>
                  <li className="flex items-start"><svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>拼柜混装的贸易公司和采购代理</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">证据核验</span>
              <h2 className="text-2xl font-extrabold text-white mt-2">供应商文件与产品证据</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "法律主体文件", desc: "核对公司名称、注册地址、经营范围以及与报价和收款主体的一致性" },
                { title: "体系证书", desc: "核对签发机构、证书编号、覆盖主体与场地、范围和有效期" },
                { title: "产品测试报告", desc: "核对标准版本、样品标识、覆盖SKU与尺寸、测试日期和报告真实性" },
                { title: "粒度体系", desc: "明确适用 FEPA、ANSI/CAMI 或其他粒度体系，并核验报价 SKU 的依据" },
              ].map((cert) => (
                <div key={cert.title} className="glass-panel p-6 rounded-lg border border-industry-slate-800 text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-industry-orange/20 flex items-center justify-center mb-3">
                    <svg className="w-7 h-7 text-industry-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                  </div>
                  <h3 className="text-sm font-bold text-white">{cert.title}</h3>
                  <p className="text-xs text-industry-slate-400 mt-1">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">供应链优势</span>
              <h2 className="text-2xl font-extrabold text-white tracking-wide">供应链规划</h2>
              <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                <p>
                  上海可作为报价和出口方案的协调点。书面报价应列明实际生产来源、原产地、拟议港口或交货点、运费假设和交期节点；这些信息不能由协调地址推定。
                </p>
                <p>
                  采购计划应列明拟议磨料、背基、转换加工、组装与包装来源及替代控制。进口材料、供应商关系、附近包装产能或缩短交期等说法，均需项目文件支持。
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">为什么选择中国磨具厂</span>
              <h2 className="text-2xl font-extrabold text-white tracking-wide">为什么从中国采购磨具？</h2>
              <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                <p>
                  中国拥有广泛的涂附磨具和固结磨具供应链，但不同供应商的材料、结构、检验和贸易条件差异很大。国际买家应通过同规格样品测试和总到岸成本模型验证实际价值，不应预设固定节省比例或性能等同。
                </p>
                <p>
                  中国可提供磨料转换加工、组装、固结磨具和包装等多种采购模式，但不同来源的能力、MOQ 和证据差异很大。买家应以同一规格和批准样品为基础获取可比报价。
                </p>
                <p>
                  应依据样品实测表现、主体与设施证据、变更控制、总到岸成本、交期节点和不合格品追索机制选择采购模式。产能和交付承诺必须针对报价来源与实际订单窗口书面确认。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-industry-slate-950 border border-industry-slate-800 p-8 rounded-lg space-y-5">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">如何开始合作</span>
            <h2 className="text-2xl font-extrabold text-white">如何开始从SCOTTCHEN采购</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1. 发送询盘", desc: "通过联系表单提交RFQ，告知感兴趣的产品、规格、数量和目标市场。" },
                { step: "2. 报价审核", desc: "核对书面报价中的价格基础、MOQ 假设、交期节点、文件范围和商务条款。" },
                { step: "3. 样品确认", desc: "按约定规格、测试计划和验收标准评估来源明确的代表性样品。" },
                { step: "4. 确认订单控制", desc: "采购订单前确认签约与生产主体、质量计划、包装、付款节点及 Incoterms 规则指定地点。" },
              ].map((s) => (
                <div key={s.step} className="border-l-2 border-industry-orange pl-4">
                  <h3 className="text-sm font-bold text-white">{s.step}</h3>
                  <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Link href="/zh/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-8 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover">
                立即发送询价
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-white tracking-wide text-center">
              常见问题解答
            </h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {faqs.map((faq, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-lg border border-industry-slate-800/80">
                  <h3 className="text-base font-bold text-white flex items-start">
                    <span className="text-industry-orange mr-2 shrink-0">Q{idx + 1}:</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-industry-slate-400 mt-2 pl-8 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
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
                "@type": "Brand",
                "@id": absoluteUrl("/zh#organization"),
                "name": "SCOTTCHEN",
                "url": absoluteUrl("/zh"),
                "description": "以上海为协调基地的 B2B 磨料采购与 OEM 项目支持，范围包括抛光轮、砂纸片、百叶片、切割片、砂带和贴牌套装。",
              },
              buildFaqPageSchema(faqs),
            ],
          }),
        }}
      />

      <CTASection />
    </div>
  );
}
