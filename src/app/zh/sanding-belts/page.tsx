import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { buildFaqPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "砂带采购与环形砂带批发支持 | SCOTTCHEN",
  description: "上海砂带B2B采购与OEM项目支持，尺寸、磨料、布基、接头、生产来源和商业条款按SKU书面确认。",
  path: "/zh/sanding-belts",
  locale: "zh-CN",
  alternatePath: "/sanding-belts",
});

export default function ZhSandingBeltsPage() {
  const types = [
    {
      name: "手提砂带机砂带（3×21、4×24等便携规格）",
      desc: "手提砂带机砂带常见规格包括3\"×21\"（75×533mm）和4\"×24\"（100×610mm），可用于木工、除锈、旧漆去除和去毛刺。布基、磨料、接头、设备兼容性和包装形式按具体SKU与样品测试确认。",
      specs: ["常见尺寸：3×21\"、4×24\"、3×18\"、4×36\"", "磨料：氧化铝/锆刚玉/碳化硅", "布基：X-wt/J-wt棉布 / 聚酯布", "粒度：P36-P400", "接头：斜搭接/对接加强胶带"],
    },
    {
      name: "台式砂带机砂带（6×48工业规格）",
      desc: "台式砂带机砂带常见规格包括6\"×48\"（150×1220mm）、2×42\"、6×90\"和6×120\"。布基强度、磨料、结合方式、接头和高压连续使用能力必须按具体设备、工况、生产来源和样品批准核验。",
      specs: ["常见尺寸：2×42\"、4×36\"、6×48\"、6×90\"", "磨料：氧化铝/锆刚玉/陶瓷", "布基：Y-wt聚酯布（重型）/X-wt棉布", "粒度：P36-P220", "应用：工业磨削/刀具/焊缝/铸件"],
    },
    {
      name: "窄砂带/锉刀砂带（1×30微型砂带）",
      desc: "窄砂带又称锉刀砂带或气动砂带机砂带，可用于狭小空间、内角和焊缝位置。常见规格与氧化铝、锆刚玉或陶瓷配置可用于询价；柔性、接头强度、尺寸可行性和非标供应范围按SKU样品与报价确认。",
      specs: ["宽度：3mm-25mm（1/8\"-1\"）", "周长：305mm-800mm（常见330/520/610）", "磨料：AO/ZA/Ceramic", "布基：柔性J-wt/X-wt布", "应用：内角/焊根/缝隙/气动锉"],
    },
    {
      name: "宽幅砂带（板材/金属板/木工宽带）",
      desc: "宽幅砂带通常用于宽幅砂光机、金属板材砂光机、刨砂机或底漆砂光机，覆盖大尺寸板材定厚、漆面砂光与氧化皮去除。木工与金属应用对磨料、背基、接头和设备张力要求不同；可加工宽度、周长、接头形式与实际性能必须由报价生产来源按设备和 SKU 提供依据并通过代表性样品确认。",
      specs: ["宽度：150-2200mm", "周长：2000-12000mm", "磨料：AO/SiC/ZA/Ceramic", "布基/纸基：按应用选择", "应用：板材/金属板/木工宽带砂光"],
    },
    {
      name: "制刀专用砂带（2×72刀匠砂带）",
      desc: "制刀砂带用于刀坯成型、开刃、热处理后打磨与表面拉丝，常见设备规格包括 2×72 英寸。粗磨、中磨、细磨到抛光可能采用不同磨料与粒度；具体组合、设备兼容性、可供规格、套装与贴牌范围需按报价来源、代表性样品和批准 SKU 文件确认。",
      specs: ["常见询价尺寸：2×72\"、1×30\"、2×48\"", "磨料组合：按工序与来源报价", "粒度范围：按SKU确认", "涂层要求：在RFQ中定义", "应用：刀具成形与表面处理"],
    },
    {
      name: "碳化硅砂带（玻璃/石材/漆面专用）",
      desc: "碳化硅砂带常用于玻璃、石材、陶瓷、漆面和部分复合材料的打磨，可根据应用讨论干磨或耐水结构。磨料、背基、胶黏体系、尺寸、粒度范围与湿磨适用性必须由报价来源在 SKU 规格中说明，并在目标工件和设备上通过样品验证。",
      specs: ["磨料：黑色/绿色碳化硅", "粒度：P60-P2500", "布基：耐水Y/X-wt聚酯布/纸基", "可选：防水水磨型/干磨型", "应用：玻璃/石材/陶瓷/漆面/复合材料"],
    },
  ];

  const applications = [
    { name: "木工家具制造", desc: "实木板材定厚砂光、家具漆底漆打磨、木门地板砂光，氧化铝宽砂带和手提带组合。" },
    { name: "金属板材加工", desc: "不锈钢板、铝板、铁板的氧化皮去除、拉丝、焊缝磨平、去毛刺，锆刚玉/陶瓷宽砂带。" },
    { name: "制刀与刀具", desc: "刀坯成型、开V、热处理后氧化皮去除、镜面抛光前处理，2×72全套制刀砂带。" },
    { name: "铸造与五金", desc: "铸件浇口飞边打磨、五金工具抛光前磨削、压铸件去毛刺，台式砂带机工业砂带。" },
    { name: "汽车与零部件", desc: "汽车钣金焊缝处理、排气管抛光、零部件去毛刺、铸造件打磨，窄砂带和宽砂带组合。" },
    { name: "航空与高端制造", desc: "航空叶片、涡轮部件、钛合金构件打磨，高端陶瓷磨料窄砂带。" },
    { name: "玻璃石材加工", desc: "玻璃磨边、石材/大理石/人造石打磨、陶瓷打磨，碳化硅砂带。" },
    { name: "DIY与维修", desc: "家庭装修、金属除锈、旧漆去除、木工制作，3×21/4×24手提砂带机氧化铝砂带。" },
  ];

  const faqs = [
    {
      q: "砂带批发MOQ是多少？非标尺寸可以定制吗？",
      a: "MOQ按宽度、周长、磨料、粒度、布基、接头、包装和订单数量报价。非标询价请提供设备型号、宽度、周长、应用材料、磨料与粒度要求；样品数量、费用和时间写入书面报价。" },
    {
      q: "砂带接头有哪几种？你们用什么接头工艺？",
      a: "搭接、对接或其他接头适用于不同设备与表面要求。批准规格应明确接头类型、方向、厚度或公差目标和测试方法；接头强度、跑带与表面效果按代表性样品和书面检验计划验证。" },
    {
      q: "砂带如何选择磨料和粒度？",
      a: "氧化铝、锆刚玉、陶瓷和碳化硅可分别纳入木材、普通钢材、不锈钢、合金钢、玻璃、石材、陶瓷或涂层等场景的样品比较，但不能用统一倍数、寿命或温升承诺代替测试。RFQ应记录工件、设备、速度、压力、粒度、终止条件和目标表面；在相同条件下比较切削、寿命、温升、接头和表面结果后再批准材料与粒度。" },
    {
      q: "砂带使用寿命多长？如何避免砂带断裂或脱砂？",
      a: "砂带寿命取决于磨料、布基、接头、压力、速度、工件、设备和操作方式，不能用统一小时数承诺。采购评估应在相同材料、设备、速度、压力和终止条件下比较代表性样品，并遵循设备与产品标签要求。" },
    {
      q: "砂带支持OEM贴牌吗？可以做套装组合吗？",
      a: "OEM范围可包括背面品牌、粒度、规格与警告印刷，单条或多条零售包装，多粒度套装，以及磨料和布基配置。平台条码、警告和入仓规则由买家提供最终版本，并在样品与包装批准文件中确认。" },
    {
      q: "怎么确认我需要的砂带尺寸？",
      a: "确认砂带尺寸需要宽度和周长（展开长度）。如有完好旧砂带，可按设备说明书的方法测量；也可提供设备品牌、型号、铭牌与旧带照片，由报价来源复核。最终尺寸、方向、接头和允许公差必须写入批准规格并以代表性样品试装，不能只凭通用机型印象下单。" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "首页", href: "/zh" }, { label: "砂带", href: "/zh/sanding-belts" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">上海B2B采购 · 砂带OEM支持</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              环形砂带采购_砂带批发_非标OEM项目支持
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              环形砂带OEM采购支持，覆盖手提、台式、窄幅、宽幅和2×72等应用。尺寸、磨料、布基、接头、粒度、包装、起订量和交期按SKU书面确认。
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link href="/zh/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-orange-hover hover:scale-[1.02] text-center">
              获取报价
            </Link>
            <Link href="/zh/sample-kit" className="inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-slate-750 text-center">
              申请样品
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-industry-slate-900 border-b border-industry-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-industry-slate-800 bg-industry-slate-950/40">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">全尺寸定制</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">非标可做</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">4种磨料</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">AO/ZA/Ceramic/SiC</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">按SKU</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">起订量报价</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">接头平整</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">不跳不裂</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-5">
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">上海B2B项目支持</span>
                <h2 className="text-2xl font-extrabold text-white tracking-wide">
                  环形砂带规格、样品与OEM采购协调
                </h2>
                <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                  <p>
                    SCOTTCHEN从上海为环形砂带询价提供B2B采购与OEM项目支持。负责生产的来源、设备能力、可加工尺寸、砂布品牌、材料来源和产能必须在对应SKU报价中列明并提供依据；网站不声明自有工厂、固定经营年限、进口设备或统一月产能。
                  </p>
                  <p>
                    砂带可用于手持、台式、窄幅、制刀和宽砂带设备。切削效率、温升、寿命、稳定性和表面效果取决于磨料、布基、接头、设备与工况，应通过同条件样品测试比较，不能使用固定倍数或绝对性能承诺。
                  </p>
                  <p>
                    砂带项目的核心是尺寸、磨料、布基、植砂、接头和应用条件匹配。非标能力、样品时间、起订量和批量交期应按具体组合核验并写入报价。项目可面向砂带机品牌、木工、制刀、金属加工、铸造、家具、批发和电商渠道。
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  砂带产品类型
                </h2>
                <div className="space-y-6">
                  {types.map((t) => (
                    <div key={t.name} className="glass-panel p-6 rounded-lg space-y-4 border border-industry-slate-800">
                      <h3 className="text-lg font-bold text-industry-orange">{t.name}</h3>
                      <p className="text-sm text-industry-slate-300 leading-relaxed">{t.desc}</p>
                      <div className="border-t border-industry-slate-800/80 pt-4">
                        <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">常见询价字段（不代表现货）：</span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-industry-slate-400 font-mono">
                          {t.specs.map((s) => (
                            <li key={s} className="flex items-center space-x-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-industry-orange shrink-0" />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  常用砂带机与对应砂带规格参考表
                </h2>
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">砂带机类型</th>
                        <th className="px-4 py-3 font-semibold uppercase">典型砂带尺寸</th>
                        <th className="px-4 py-3 font-semibold uppercase">典型应用</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr><td className="px-4 py-3 font-bold text-industry-orange">1×30手提砂带机</td><td className="px-4 py-3">1\"×30\" (25×762mm)</td><td className="px-4 py-3">DIY/木工/小型磨削</td></tr>
                      <tr className="bg-industry-slate-900/40"><td className="px-4 py-3 font-bold text-industry-orange">3×21手提砂带机</td><td className="px-4 py-3">3\"×21\" (75×533mm)</td><td className="px-4 py-3">木工/金属/除锈（最普及）</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-industry-orange">4×24手提砂带机</td><td className="px-4 py-3">4\"×24\" (100×610mm)</td><td className="px-4 py-3">重型木工/金属工业</td></tr>
                      <tr className="bg-industry-slate-900/40"><td className="px-4 py-3 font-bold text-industry-orange">4×36台式砂带机</td><td className="px-4 py-3">4\"×36\" (100×915mm)</td><td className="px-4 py-3">车间/五金加工</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-industry-orange">2×42台式磨刀机</td><td className="px-4 py-3">2\"×42\" (50×1067mm)</td><td className="px-4 py-3">制刀/工具修磨</td></tr>
                      <tr className="bg-industry-slate-900/40"><td className="px-4 py-3 font-bold text-industry-orange">2×72刀磨机</td><td className="px-4 py-3">2\"×72\" (50×1830mm)</td><td className="px-4 py-3">专业制刀（经典规格）</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-industry-orange">6×48工业砂带机</td><td className="px-4 py-3">6\"×48\" (150×1220mm)</td><td className="px-4 py-3">工业金属加工/刀具</td></tr>
                      <tr className="bg-industry-slate-900/40"><td className="px-4 py-3 font-bold text-industry-orange">宽幅砂光机</td><td className="px-4 py-3">定制（150-2200mm宽）</td><td className="px-4 py-3">板材/木工/金属板整面</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  砂带应用领域
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {applications.map((app) => (
                    <div key={app.name} className="glass-panel p-5 rounded-lg border border-industry-slate-800">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded bg-industry-orange/20 flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-industry-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <h3 className="text-sm font-bold text-white">{app.name}</h3>
                      </div>
                      <p className="text-xs text-industry-slate-400 leading-relaxed">{app.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  砂带项目如何降低采购风险
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "非标尺寸评估", desc: "宽度、周长、加工可行性和公差按设备、图纸或样品书面确认。" },
                    { title: "砂布来源可核验", desc: "砂布品牌、等级和原产地仅在对应SKU有文件支持时写入报价。" },
                    { title: "接头方法书面化", desc: "接头类型、强度、跑带、尺寸和抽样方法写入质量计划。" },
                    { title: "磨料按工况选择", desc: "磨料与布基通过买家工件、设备和测试方案进行比较。" },
                    { title: "书面样品与交期", desc: "样品数量、费用、材料准备、生产、验货和出运节点按尺寸与订单数量报价。" },
                    { title: "OEM/套装范围", desc: "Logo印刷、零售包装和多粒度套装可按批准文件确认；平台标签规则由买家提供。" },
                  ].map((adv) => (
                    <div key={adv.title} className="glass-panel p-5 rounded-lg border border-industry-slate-800">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded bg-industry-orange/20 flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-industry-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <h3 className="text-sm font-bold text-white">{adv.title}</h3>
                      </div>
                      <p className="text-xs text-industry-slate-400 leading-relaxed">{adv.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-industry-slate-950 border border-industry-slate-800 p-8 rounded-lg space-y-5">
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">砂带OEM代工</span>
                <h2 className="text-xl font-extrabold text-white">砂带OEM/ODM定制服务</h2>
                <div className="text-sm text-industry-slate-300 leading-relaxed space-y-4">
                  <p>
                    SCOTTCHEN支持经销商、工具品牌、工业采购方和电商项目进行砂带OEM询价。尺寸、磨料、布基、接头、特殊处理和指定品牌砂布的可行性由负责生产的来源逐项确认，并写入报价。
                  </p>
                  <p>
                    OEM范围可包括背面品牌、粒度、规格、安装方向和警告印刷，单条或多条包装，多粒度套装，以及磨料、植砂、涂层、布基和接头配置。平台条码、警告语与外箱标签由买家提供并批准，实际供应范围写入报价。
                  </p>
                  <p>
                    合作流程通常包括：提交宽度、周长、磨料、粒度、接头、应用和数量 → 书面报价 → 打样与测试 → 样品和包装批准 → 订单 → 生产、验货和发运。费用、付款条件和各阶段时间以具体项目文件为准。
                  </p>
                </div>
                <div className="pt-2">
                  <Link href="/zh/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover">
                    咨询砂带定制
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  常见问题解答
                </h2>
                <div className="space-y-4">
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

            <div className="lg:col-span-4 space-y-6">
              <div className="glass-panel rounded-lg overflow-hidden border border-industry-slate-800 shadow-xl relative">
                <Image
                  width={1024}
                  height={1024}
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  quality={70}
                  loading="lazy"
                  src="/images/sanding_tools.webp"
                  alt="SCOTTCHEN环形砂带采购与OEM项目支持"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  批发参数
                </h3>
                <div className="space-y-4 text-xs font-mono">
                  <div><span className="text-industry-slate-500 block">MOQ：</span><span className="text-white font-bold">按尺寸、材料、接头和数量报价</span></div>
                  <div><span className="text-industry-slate-500 block">交货期：</span><span className="text-white font-bold">按尺寸、材料、包装和数量确认</span></div>
                  <div><span className="text-industry-slate-500 block">宽度：</span><span className="text-white font-bold">3mm-2200mm</span></div>
                  <div><span className="text-industry-slate-500 block">周长：</span><span className="text-white font-bold">300mm-12000mm</span></div>
                  <div><span className="text-industry-slate-500 block">磨料：</span><span className="text-white font-bold">AO/ZA/Ceramic/SiC</span></div>
                  <div><span className="text-industry-slate-500 block">接头：</span><span className="text-white font-bold">搭接/对接/S形接头</span></div>
                </div>
                <div className="pt-4 border-t border-industry-slate-850">
                  <Link href="/zh/sample-kit" className="w-full inline-flex justify-center items-center rounded border border-industry-orange text-industry-orange font-bold uppercase tracking-wider py-3 hover:bg-industry-orange hover:text-white transition-all text-xs">
                    申请样品测试
                  </Link>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  相关产品分类
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/zh/resources/sanding-belt-rfq-guide" className="font-bold text-industry-orange hover:underline">砂带 RFQ 指南</Link></li>
                  <li><Link href="/zh/buffing-wheels" className="text-industry-orange hover:underline">抛光轮/布轮/麻布轮</Link></li>
                  <li><Link href="/zh/sanding-discs" className="text-industry-orange hover:underline">砂纸片/砂碟</Link></li>
                  <li><Link href="/zh/flap-discs" className="text-industry-orange hover:underline">百叶片/百叶轮</Link></li>
                  <li><Link href="/zh/cutting-wheels" className="text-industry-orange hover:underline">切割片/砂轮片</Link></li>
                  <li><Link href="/zh/abrasive-kits" className="text-industry-orange hover:underline">磨具套装组合</Link></li>
                  <li><Link href="/zh/wholesale-abrasives" className="text-industry-orange hover:underline">磨具批发合作</Link></li>
                </ul>
              </div>
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
                "@type": "ProductGroup",
                "@id": absoluteUrl("/zh/sanding-belts#productgroup"),
                "name": "SCOTTCHEN环形砂带、砂带、砂带套",
                "description": "环形砂带OEM采购支持，覆盖AO、ZA、Ceramic和SiC磨料，按尺寸、接头、包装与数量书面报价。",
                "url": absoluteUrl("/zh/sanding-belts"),
                "image": absoluteUrl("/images/sanding_tools.webp"),
                "brand": { "@type": "Brand", "name": "SCOTTCHEN" },
                "category": "环形砂带与砂带套",
                "material": "氧化铝、锆刚玉、陶瓷、碳化硅",
                "additionalProperty": [
                  { "@type": "PropertyValue", "name": "起订量依据", "value": "按尺寸、磨料、布基、接头、包装和订单数量报价" },
                  { "@type": "PropertyValue", "name": "非标尺寸", "value": "按确认图纸裁切宽度与周长" }
                ],
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
