import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "中国磨料磨具厂家_上海磨具OEM工厂_磨具批发出口_SCOTTCHEN",
  description: "SCOTTCHEN是位于上海的中国磨料磨具专业生产厂家，成立于2014年，为全球客户提供抛光轮、砂纸片、百叶片等磨具的OEM/ODM代工与出口服务。",
  path: "/zh/china-abrasive-manufacturer",
  locale: "zh-CN",
  alternatePath: "/china-abrasive-manufacturer",
});

export default function ZhChinaAbrasiveManufacturerPage() {
  const capabilities = [
    { name: "抛光轮与布轮", link: "/zh/buffing-wheels", desc: "棉布轮、麻布轮、气道风冷轮、抛光膏、带柄磨头" },
    { name: "砂纸片与砂碟", link: "/zh/sanding-discs", desc: "植绒拉绒片、背胶PSA、钢纸磨片、网砂、快换转矩砂碟、水磨砂纸" },
    { name: "百叶片与百叶轮", link: "/zh/flap-discs", desc: "T27平面型、T29钹型，锆刚玉/陶瓷/氧化铝，4-7寸" },
    { name: "环形砂带", link: "/zh/sanding-belts", desc: "手提/台式/窄砂带/宽幅砂带/制刀砂带/碳化硅砂带，全尺寸定制" },
    { name: "树脂切割片", link: "/zh/cutting-wheels", desc: "金属/不锈钢INOX/超薄/钹型/铸铁/石材切割片，MPA EN12413认证" },
    { name: "磨具套装", link: "/zh/abrasive-kits", desc: "抛光套装、砂纸套装、电钻配件套装、汽车/首饰/DIY套装" },
  ];

  const faqs = [
    {
      q: "为什么从中国磨料磨具厂家采购磨具？",
      a: "中国是全球最大的涂附磨具和固结磨具生产国，拥有完整的产业链——磨料冶炼（棕刚玉、白刚玉、碳化硅、锆刚玉、陶瓷磨料）、基布/基纸制造、树脂结合剂生产、最终成品加工均在长三角、河南、山东等产业集群集中完成。从成熟的中国磨具厂家（如SCOTTCHEN）采购可获得显著的成本优势（同质量产品相比欧美/日本品牌价格低30-60%）、丰富的定制能力和自有品牌开发能力，以及从试单到整柜补货的生产规模弹性。我们的直接工厂模式省去多层贸易商加价，同时保持ISO 9001质控体系。" },
    {
      q: "SCOTTCHEN作为中国磨具厂已经生产多少年了？",
      a: "SCOTTCHEN2014年在中国上海成立，截至目前已持续生产磨料磨具产品超过十年。创始人在创立SCOTTCHEN之前已有多年涂附磨具制造和抛光轮生产经验，公司成立初衷是面向不断增长的中国磨具出口市场提供高品质产品。多年来我们不断扩建生产设施，增加固结磨具（切割片、百叶片）生产线，建立了完善的OEM/ODM项目体系，服务客户遍及北美、欧洲、澳洲、中东、东南亚、南美和非洲。" },
    {
      q: "你们工厂实施哪些质量控制流程？",
      a: "我们的质量控制体系分为三个阶段：①来料检验（IQC）——所有原材料（磨料、基布/基纸、树脂、玻纤网、棉布）到货时按批准的材料规格检验测试，不合格材料退回不进入生产；②过程检验（IPQC）——各生产工位进行生产参数监控、尺寸检查、重量校验、附着力测试，百叶片砂布排列均匀性检查、砂带接头拉力测试、切割片回转强度测试等，操作工自检+QC巡检贯穿整个生产过程；③成品终检（FQC）——成品按AQL 2.5标准抽样检验，包括切割片回转爆破测试、百叶片/抛光轮平衡测试、RPM校验、砂带跑带测试、粒度核验、包装标签检查、纸箱摔箱测试等，合格方可放行出货。" },
    {
      q: "能提供第三方工厂审核报告或认证吗？",
      a: "可以。我们持有ISO 9001:2015质量管理体系认证，切割片产品通过EN12413标准测试并可提供MPA认证供欧盟市场使用。我们已为多家大型零售客户完成工厂审核，可向合格买家提供审核报告、营业执照、出口单证以及SGS、Bureau Veritas或TÜV第三方验货报告。我们欢迎买家安排工厂验厂，无法亲临的客户我们可安排视频工厂参观，实时展示车间、生产线、质检实验室和包装区。" },
    {
      q: "新国际客户的付款方式是什么？",
      a: "新客户标准付款条件为：订单确认时支付30% T/T电汇定金，余款70%在发货前（见提单副本）支付。对有长期合作记录和良好付款表现的老客户，可根据具体情况适当放宽付款条件，例如降低定金比例或账期。大额订单我们也接受即期信用证（L/C at sight）。样品订单通常T/T全额预付、PayPal或通过Alibaba信用保障等贸易保障平台支付。所有付款条件在生产前以形式发票（PI）书面确认。" },
    {
      q: "如何开始从SCOTTCHEN采购磨料磨具？",
      a: "与SCOTTCHEN开始采购合作非常简单。首先通过我们的联系表单、邮件或询价页面发送询盘，注明感兴趣的产品、数量、规格、包装要求和目标市场。我们24-48小时内回复详细报价。报价接受后我们生产产前样品并发给您测试。收到书面样品批准后我们开立形式发票、收取定金、安排生产。整个生产和发货过程中您的专属销售联系人会定期提供订单进度更新。海运到北美/欧洲基本港约25-35天，全程由我们出口团队协调单证和物流。" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "首页", href: "/zh" }, { label: "中国磨具厂家", href: "/zh/china-abrasive-manufacturer" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">工厂实力 · 公司介绍</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              中国磨料磨具厂家_上海磨具OEM工厂
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              SCOTTCHEN是坐落于上海的中国磨料磨具专业生产厂家，自2014年起生产抛光轮、砂纸片、百叶片、切割片、砂带、磨具套装等全系列磨具产品，为全球客户提供OEM/ODM代工与出口服务，通过ISO 9001认证，产品出口40+国家。
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link href="/zh/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-orange-hover hover:scale-[1.02] text-center">
              获取工厂报价
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
                <div className="text-2xl font-black text-industry-orange">2014年创立</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">上海工厂</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">40+国家</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">出口市场</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">ISO 9001</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">认证体系</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">6大品类</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">全系列磨具</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">关于我们的工厂</span>
              <h2 className="text-2xl font-extrabold text-white tracking-wide">关于上海工厂</h2>
              <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                <p>
                  SCOTTCHEN在中国上海拥有自建磨料磨具生产基地，地理位置优越——工厂距全球最繁忙集装箱港口之一的上海港仅约一小时车程，确保货物能够以低廉的成本和高效的船期运往全球各大主要市场。自2014年成立以来，经过十余年持续发展，我们已成长为一体化的中国磨具厂家，在同一质量管理体系下生产涂附磨具、固结磨具、非织造磨具和棉布抛光产品。
                </p>
                <p>
                  上海工厂内设有多条专业生产线：棉布抛光轮生产线（布料裁切、螺旋缝合、组装、平衡）、涂附磨具转换加工线（砂纸分切、模切、砂带接头）、固结磨具压制和固化线（切割片压制、百叶片组装）、抛光膏配方和成型线，以及零售套装组装包装线。这种工厂内部垂直整合模式让我们对质量、交期和价格拥有直接控制权，同时能够为国际客户开发定制产品和自有品牌项目。
                </p>
                <p>
                  我们的团队由磨料磨具工艺工程师、质量控制专员、包装设计师和外贸销售专业人员组成，拥有丰富的服务北美、欧洲、亚太市场经验。我们熟悉磨具产品的国际法规要求、零售包装标准和电商物流要求，能够从初次询盘到后续整柜补货全程支持客户的采购之旅。
                </p>
              </div>
            </div>
            <div className="glass-panel rounded-lg overflow-hidden border border-industry-slate-800 relative">
              <Image
                width={1024}
                height={768}
                loading="lazy"
                src="/images/quality_inspection.webp"
                alt="SCOTTCHEN上海磨料磨具工厂质量检测车间"
                className="w-full h-80 object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">生产能力</span>
              <h2 className="text-2xl font-extrabold text-white mt-2">生产制造能力</h2>
              <p className="mt-3 text-sm text-industry-slate-400">
                我们在ISO 9001认证质量管理体系下生产6大类别、覆盖全面的磨具产品。
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
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">质量控制</span>
              <h2 className="text-2xl font-extrabold text-white mt-2">质量控制流程</h2>
              <p className="mt-3 text-sm text-industry-slate-400">
                每一批次产品出货前都经过三阶段质检流程。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { stage: "来料检验IQC", desc: "所有原材料——磨料（氧化铝、锆刚玉、陶瓷、碳化硅）、基布/基纸、棉布、树脂结合剂、玻纤增强网、包装材料——到货时按批准的材料规格检验测试。不合格原材料在进入生产前予以拒收退回。" },
                { stage: "过程检验IPQC", desc: "各生产工位进行生产线质量检查，包括尺寸检查、重量校验、附着力测试、内孔精度、百叶片砂布排列均匀性、目视检验。操作工执行自检，QC巡检员在生产过程中定期巡检。" },
                { stage: "成品终检FQC", desc: "成品按AQL 2.5抽样标准进行批次终检，包括切割片回转爆破测试、百叶片/抛光轮平衡测试、RPM校验、粒度核验、包装标签核验以及纸箱摔箱测试，全部合格方可放行出货。" },
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
                  SCOTTCHEN为全球经销商、工具品牌、五金连锁、电商卖家、工业供应公司提供全面的OEM/ODM自有品牌磨具制造服务。我们的OEM项目覆盖所有产品线，并可根据客户规格、性能要求和包装标准进行量身定制。
                </p>
                <p>OEM合作流程遵循结构化的五步法：</p>
                <ol className="space-y-3 mt-2">
                  <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-industry-orange text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">1</span><span><strong className="text-white">需求沟通与报价：</strong>提交您的产品要求、应用场景、用量预估和包装方向，我们提供技术咨询和详细报价。</span></li>
                  <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-industry-orange text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">2</span><span><strong className="text-white">产前样品：</strong>按确认规格生产样品，发送给客户实物评估和实地测试。</span></li>
                  <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-industry-orange text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">3</span><span><strong className="text-white">样品确认下单：</strong>收到书面样品批准后开立形式发票，收取定金后排产。</span></li>
                  <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-industry-orange text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">4</span><span><strong className="text-white">大货生产与质检：</strong>在过程质量监控下生产，包装前完成AQL终检。</span></li>
                  <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-industry-orange text-white flex items-center justify-center text-xs font-bold mr-3 shrink-0">5</span><span><strong className="text-white">包装发货：</strong>按客户包装要求（散装/零售/FBA）包装，FOB上海或安排门到门发运。</span></li>
                </ol>
              </div>
            </div>
            <div className="space-y-5">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">出口经验</span>
              <h2 className="text-2xl font-extrabold text-white tracking-wide">出口经验与服务市场</h2>
              <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                <p>
                  自2014年首单出口以来，SCOTTCHEN已向北美洲、欧洲、大洋洲、中东、东南亚、拉丁美洲超过40个国家的客户发运磨具产品。我们的出口团队精通国际货运单证操作，包括商业发票、装箱单、提单、原产地证、FORM A/E/R以及欧盟市场所需的CE/MPA文件。
                </p>
                <p>我们长期服务多种商业模式客户：</p>
                <ul className="space-y-2">
                  <li className="flex items-start"><svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>北美和欧洲五金分销商、工业MRO供应链</span></li>
                  <li className="flex items-start"><svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>通过零售、分销和电商渠道销售的自有品牌工具品牌</span></li>
                  <li className="flex items-start"><svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>需要零售级包装的Amazon FBA和各类电商卖家</span></li>
                  <li className="flex items-start"><svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>批量直采的工业终端用户和抛光加工厂</span></li>
                  <li className="flex items-start"><svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>拼柜混装的贸易公司和采购代理</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">认证资质</span>
              <h2 className="text-2xl font-extrabold text-white mt-2">认证与合规</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "ISO 9001:2015", desc: "生产基地质量管理体系认证" },
                { title: "EN12413", desc: "固结磨具切割片/打磨片欧洲安全标准" },
                { title: "MPA认证", desc: "供欧盟市场销售的切割片MPA Hannover测试报告" },
                { title: "FEPA/ANSI", desc: "磨料粒度符合FEPA（P粒度）和ANSI/CAMI标准" },
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
              <h2 className="text-2xl font-extrabold text-white tracking-wide">供应链优势</h2>
              <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                <p>
                  我们的上海区位带来显著的供应链优势。上海港是全球最繁忙集装箱港口，每周都有发往北美、欧洲、亚太各主要港口的班轮，海运价格有竞争力，运输时效短。长三角地区集中了主要磨料生产商、基布基纸织造厂和原材料供应商，使我们能够以较短交期和有利价格采购高品质原材料。
                </p>
                <p>
                  我们与国内领先涂附磨具基布厂保持长期供应商关系，并进口德国锆刚玉磨料用于高端百叶片和砂带生产线。我们的区位还让我们能够便捷对接专业化包装供应商——彩盒印刷厂、吸塑包装厂、注塑箱厂、标签印刷厂——都在短物流半径内，为定制自有品牌包装项目提供快速响应。
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">为什么选择中国磨具厂</span>
              <h2 className="text-2xl font-extrabold text-white tracking-wide">为什么从中国采购磨具？</h2>
              <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                <p>
                  中国已发展成为全球最大的涂附磨具和固结磨具生产国，受益于完整的国内产业链、规模经济和数十年制造经验积累。对国际买家而言，从有信誉的中国磨料磨具供应商采购，相比欧洲、日本或高端美国品牌，可在相当工业应用性能前提下节省30-60%的采购成本。
                </p>
                <p>
                  中国磨具工厂拥有西方市场难以匹敌的灵活定制和自有品牌能力——在欧美磨具制造已整合为少数几个大品牌、产品系列僵化、自有品牌起订量极高的背景下，SCOTTCHEN等中国厂家可以平易近人的MOQ提供定制产品、定制包装和自有品牌项目，使中小品牌启动自有磨具产品线变得切实可行。
                </p>
                <p>
                  中国庞大的制造规模还意味着即使大订单也能快速交付，丰富的产能可以在季节性需求高峰或整柜补货计划时迅速拉升产量。配合经验丰富的出口团队和成熟的国际航运基础设施，与中国磨具工厂合作对全球买家而言简单可靠。
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
                { step: "2. 报价审核", desc: "24-48小时内收到含价格、MOQ、交期、条款的详细报价。" },
                { step: "3. 样品确认", desc: "我们生产并发产前样品供您测试，获得您的书面确认。" },
                { step: "4. 生产发货", desc: "下单、付定金，我们生产、质检、包装并发货。" },
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
                "@type": "Organization",
                "@id": absoluteUrl("/zh#organization"),
                "name": "SCOTTCHEN",
                "url": absoluteUrl("/zh"),
                "foundingDate": "2014",
                "description": "上海中国磨料磨具生产厂家，生产抛光轮、砂纸片、百叶片、切割片、砂带、磨具套装。",
                "address": { "@type": "PostalAddress", "addressLocality": "上海", "addressCountry": "CN" },
              },
            ],
          }),
        }}
      />

      <CTASection />
    </div>
  );
}
