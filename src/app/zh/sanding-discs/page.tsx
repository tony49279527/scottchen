import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { buildFaqPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "砂纸片批发与砂碟 OEM 采购 | SCOTTCHEN",
  description: "植绒砂纸片、背胶砂纸、钢纸磨片和网砂OEM采购支持。按磨料、背基、孔型、粒度、包装、样品与数量书面报价。",
  path: "/zh/sanding-discs",
  locale: "zh-CN",
  alternatePath: "/sanding-discs",
});

export default function ZhSandingDiscsPage() {
  const types = [
    {
      name: "植绒砂纸片（拉绒片/魔术贴砂纸片）",
      desc: "植绒砂纸片又称拉绒片、魔术贴砂纸片或圆盘砂纸，背面连接层用于匹配带钩面的打磨托盘，常见于汽车腻子、木工家具、金属去毛刺和漆面研磨。具体直径、磨料、粒度、纸基或膜基、植绒连接和孔型应按目标工具、具体SKU、批准样和书面报价确认。",
      specs: ["直径：3\"/4\"/5\"/6\"/7\"/9\"（75-225mm）", "背基：红色拉绒/白色拉绒/通用", "磨料：氧化铝/碳化硅/锆刚玉/陶瓷", "粒度：P40-P2000（粗-细）", "孔型：无孔/5孔/6孔/8孔/15孔/多孔"],
    },
    {
      name: "背胶砂纸片（PSA自粘砂纸片）",
      desc: "背胶砂纸片（PSA砂纸片）使用压敏胶连接匹配的托盘或垫盘，可用于金属、木工和表面处理。采购时应确认纸基或膜基、胶层、尺寸、孔型、粒度、使用温度和残胶验收方法，并通过代表性样品验证。",
      specs: ["直径：4\"/5\"/6\"/8\"（100-200mm）", "背基：PSA压敏胶", "磨料：氧化铝/碳化硅/锆刚玉", "纸基：A-wt/C-wt/D-wt/E-wt纸基", "用途：金属/木工/石材打磨"],
    },
    {
      name: "钢纸磨片（纤维砂碟/砂轮片）",
      desc: "钢纸磨片以硬化钢纸为背基，常用于金属打磨、焊缝磨削、去毛刺和除锈。采购时应确认直径、孔径、磨料、粒度、背基、标称最高转速、工具与防护罩兼容性，并索取覆盖具体SKU和尺寸的适用安全证据。",
      specs: ["直径：按SKU书面确认", "背基：硫化钢纸，厚度按SKU确认", "磨料：按材料文件确认", "粒度：按用途与样品确认", "最高转速：按具体SKU标签与适用证据确认"],
    },
    {
      name: "快换/转矩砂碟（R型/S型锁扣）",
      desc: "快换砂碟（也称转矩砂碟、按钮砂碟或旋扣砂碟）通过背部锁扣连接匹配托盘，常用于狭小空间、内角、焊缝和不规则曲面。R型、S型及其他接口并非自动兼容；接口尺寸、托盘、磨料、背基、标称转速、生产来源和OEM范围必须按具体SKU、工具实配和批准样确认。",
      specs: ["直径：1\"/2\"/3\"（25-75mm）", "接口：R型（Roloc）/S型（TSM）", "磨料：AO/ZA/陶瓷/无纺布", "粒度：P36-P320", "适配：直磨机/气动刻磨机"],
    },
    {
      name: "网格防堵塞砂纸片（网砂/网格砂纸）",
      desc: "网格砂纸使用开放网孔结构，设计目标是让粉尘通过更多表面区域进入吸尘系统。实际吸尘、堵塞、切削效率、寿命和托盘兼容性取决于磨料、网基、工具、吸尘系统与工况，应通过代表性样品与书面测试方法验证。",
      specs: ["直径：按托盘与SKU确认", "背基：网格布与连接层按样品确认", "磨料：按材料文件确认", "粒度：按用途与报价确认", "特点：吸尘与防堵塞表现按测试条件确认"],
    },
    {
      name: "水磨耐水砂纸（干湿两用砂纸）",
      desc: "耐水砂纸可采用乳胶纸基、碳化硅或氧化铝磨料，用于汽车漆面、腻子、乐器涂层和五金精磨。RFQ应确认尺寸、磨料、粒度、耐水方法、浸泡时间、脱砂、卷曲和划痕一致性验收条件。",
      specs: ["规格：9\"×11\"（230×280mm）/圆形", "磨料：碳化硅/氧化铝", "基底：耐水乳胶纸（A-wt/C-wt）", "粒度：P60-P7000", "用途：汽车漆面/腻子/钢琴漆/五金精抛"],
    },
  ];

  const applications = [
    { name: "汽车维修与钣喷", desc: "汽车腻子打磨、原子灰研磨、漆面抛光、焊缝处理，植绒砂纸片+网砂+水砂纸搭配使用。" },
    { name: "木工家具制造", desc: "实木、板材、MDF、家具漆面前后的粗磨和精磨，氧化铝砂纸和碳化硅砂纸为主。" },
    { name: "金属加工与制造", desc: "不锈钢板、铁板、铝板、铸件的去毛刺、焊缝打磨、除锈、表面处理，钢纸磨片+锆刚玉砂纸片。" },
    { name: "船舶与钢结构", desc: "船板除锈、焊缝处理、钢结构防腐涂装前打磨，重负荷锆刚玉钢纸磨片。" },
    { name: "3C电子制造", desc: "手机外壳、笔记本电脑外壳、金属中框的表面研磨抛光，精细粒度薄膜砂纸和网砂。" },
    { name: "模具与铸造", desc: "铸铝件、铸铁件去毛刺、模具表面维护、冲压件飞边处理，快换转矩砂碟+陶瓷砂纸片。" },
    { name: "DIY与家装", desc: "墙面打磨、木门油漆翻新、金属件除锈维修，通用植绒砂纸片5寸套装。" },
    { name: "乐器与工艺品", desc: "吉他漆面、钢琴漆、工艺品打磨抛光，耐水水砂纸P1000-P5000。" },
  ];

  const gritGuide = [
    { grit: "P40-P80", use: "极粗磨：去除大量余料、焊缝整平、厚氧化皮、铸件飞边" },
    { grit: "P100-P180", use: "粗磨：除锈、去旧漆、粗打磨、基材平整化" },
    { grit: "P220-P320", use: "中磨：底漆打磨、腻子粗磨、金属中磨、木材初磨" },
    { grit: "P400-P600", use: "细磨：腻子精磨、漆间打磨、金属表面预备" },
    { grit: "P800-P1500", use: "精磨：面漆前水磨、漆面瑕疵处理、透明涂层打磨" },
    { grit: "P2000-P7000", use: "抛光前处理：镜面抛光前水磨、漆面橘皮纹处理、瑕疵点修复" },
  ];

  const faqs = [
    {
      q: "砂纸片批发MOQ是多少？可以混批吗？",
      a: "MOQ按直径、孔型、磨料、粒度、背基、连接方式、包装和订单数量报价。试单、混合粒度与混合SKU方案应分别列明单价、包装、检验和物流假设。",
    },
    {
      q: "氧化铝、碳化硅、锆刚玉、陶瓷砂纸片如何选择？",
      a: "氧化铝常用于通用木材、涂层和金属打磨；碳化硅常用于较硬或有涂层的表面；锆刚玉和陶瓷磨料可用于更高压力的金属去除场景。磨粒名称不能自动证明切削率、温升或寿命，买家应同时确认磨料来源、背基、粘结、涂层、工具速度和目标底材，并用批准样进行对比测试。",
    },
    {
      q: "植绒砂纸片的孔型怎么选？5孔、8孔、15孔有什么区别？",
      a: "孔型应与托盘孔位、直径、吸尘通道和工具型号对应，孔数更多不等于在所有系统中吸尘更好。请提供托盘图纸或实物，并在报价中确认孔型、模切工具责任、费用、所有权和修改次数；最终兼容性与吸尘表现以批准样实配测试为准。",
    },
    {
      q: "砂纸片可以OEM贴牌吗？包装和Logo定制怎么做？",
      a: "OEM范围可包括背面品牌与粒度印刷、彩盒、插卡、吸塑、标签、多语言说明、多粒度套装、特殊孔型和磨料配置。平台条码、警告和入仓规则由买家提供最终版本；起订量按SKU、包装复杂度和数量书面报价。",
    },
    {
      q: "如何比较不同砂纸片的切削率、寿命与总成本？",
      a: "应在相同底材、工具、转速、压力、吸尘和终止条件下进行并列样品测试，记录去除量、划痕、堵塞、脱砂、温升、换片次数和单件加工成本。任何材料来源、品牌对比、寿命比例或价格优势都必须由对应SKU的测试记录、样品和书面报价支持，不能由网页自动保证。",
    },
    {
      q: "网砂和普通砂纸片比有什么优势？",
      a: "网砂的开放结构便于在匹配的吸尘系统中从更多表面区域排出粉尘，而纸基或布基圆片可以提供不同的支撑、边缘强度和成本结构。哪一种更合适取决于托盘、吸尘、底材、压力和目标划痕；吸尘率、寿命和总成本应通过同条件样品测试确认。",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "首页", href: "/zh" }, { label: "砂纸片", href: "/zh/sanding-discs" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">上海B2B采购 · 圆形砂纸盘OEM</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              砂纸片批发与圆形砂碟 OEM 采购支持
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              植绒、背胶、钢纸、快换和网格砂碟OEM采购支持。磨料、背基、孔型、粒度、平台标签、起订量、交期和检验范围按具体SKU书面确认。
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
                <div className="text-2xl font-black text-industry-orange">按SKU</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">起订量报价</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">书面规格</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">磨料与背基</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">批准样</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">孔型与性能</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">OEM/ODM</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">贴牌定制</div>
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
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">上海B2B采购与OEM项目</span>
                <h2 className="text-2xl font-extrabold text-white tracking-wide">
                  SCOTTCHEN 砂纸片与砂碟采购支持
                </h2>
                <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                  <p>
                    SCOTTCHEN在上海为砂纸片和砂碟项目提供选型、打样、包装及出口协调。买家应核验生产主体、材料来源、模切与复合能力、检验记录和实际产能，并把这些信息写入供应商审核与订单文件。
                  </p>
                  <p>
                    磨料类型、具体来源、背基、粘结体系和防堵塞涂层都会影响切削、温升、堵塞与寿命。报价应把这些材料与工艺对应到具体SKU，并以供应商文件、批准样和双方约定的测试条件核验。
                  </p>
                  <p>
                    工具品牌、汽车钣喷耗材经销商、木工与金属加工采购方、电商卖家、五金连锁和工业MRO供应商，可按同一套SKU规格、包装、样品、检验和商务条件发出RFQ，便于比较真实供货范围与总成本。
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  砂纸片产品类型
                </h2>
                <div className="space-y-6">
                  {types.map((t) => (
                    <div key={t.name} className="glass-panel p-6 rounded-lg space-y-4 border border-industry-slate-800">
                      <h3 className="text-lg font-bold text-industry-orange">{t.name}</h3>
                      <p className="text-sm text-industry-slate-300 leading-relaxed">{t.desc}</p>
                      <div className="border-t border-industry-slate-800/80 pt-4">
                        <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">RFQ参考规格（按SKU书面确认）：</span>
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
                  砂纸粒度选择指南
                </h2>
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">粒度范围</th>
                        <th className="px-4 py-3 font-semibold uppercase">磨削级别</th>
                        <th className="px-4 py-3 font-semibold uppercase">典型应用</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      {gritGuide.map((g, i) => (
                        <tr key={g.grit} className={i % 2 === 1 ? "bg-industry-slate-900/40" : ""}>
                          <td className="px-4 py-3 font-bold text-industry-orange">{g.grit}</td>
                          <td className="px-4 py-3">{g.use.split("：")[0]}</td>
                          <td className="px-4 py-3">{g.use.split("：")[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  砂纸片应用领域
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
                  砂纸片采购与核验要点
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "规格按SKU确认", desc: "直径、粒度、孔型、磨料、背基和连接方式以报价、图纸与批准样为准，不以网页列表自动承诺。" },
                    { title: "材料来源按文件核验", desc: "磨料、纸基或布基、粘结与涂层应对应供应商、批次、材料文件和代表性样品。" },
                    { title: "文件按SKU核验", desc: "安全标准、体系证书和第三方报告应核对签发机构、覆盖主体、尺寸、SKU、日期和有效期。" },
                    { title: "书面产能与交期", desc: "样品、物料、生产、验货和出运节点按规格、包装及订单数量写入报价。" },
                    { title: "OEM贴牌范围", desc: "背面印刷、彩盒、吸塑、插卡、桶装和多粒度套装可按批准文件确认；平台规则由买家提供。" },
                    { title: "应用与测试输入", desc: "买家应提供底材、工具、转速、压力、目标划痕和验收方法，以便形成可比较的样品测试计划。" },
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
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">砂碟OEM项目</span>
                <h2 className="text-xl font-extrabold text-white">砂纸片OEM/ODM项目范围</h2>
                <div className="text-sm text-industry-slate-300 leading-relaxed space-y-4">
                  <p>
                    SCOTTCHEN在上海协调砂纸片B2B采购与OEM项目支持。每个项目应在报价中明确签约主体、实际生产来源、材料与转换工序、样品、包装、检验和交付责任。
                  </p>
                  <p>
                    砂碟OEM范围可包括背面品牌与粒度印刷、彩盒、插卡、吸塑、塑料袋、桶装、多粒度套装、非标直径、孔型、磨料和涂层。平台条码、警告语、原产地标识和外箱标签由买家批准，实际服务范围写入报价与样品批准文件。
                  </p>
                  <p>
                    平台包装与标签规则会变化，买家应提供当前版本并保留最终批准责任。合作流程通常包括规格询盘、书面报价、打样、样品与包装批准、订单、生产、验货和发运；各阶段时间与付款条件以项目文件为准。
                  </p>
                </div>
                <div className="pt-2">
                  <Link href="/zh/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover">
                    咨询砂碟OEM
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
                  src="/images/sanding_screens.webp"
                  alt="SCOTTCHEN砂纸片批发与植绒、背胶、钢纸及网砂采购支持"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  批发参数
                </h3>
                <div className="space-y-4 text-xs font-mono">
                  <div><span className="text-industry-slate-500 block">MOQ：</span><span className="text-white font-bold">按SKU、包装和数量报价</span></div>
                  <div><span className="text-industry-slate-500 block">交货期：</span><span className="text-white font-bold">按规格、样品批准和数量确认</span></div>
                  <div><span className="text-industry-slate-500 block">直径范围：</span><span className="text-white font-bold">按SKU与批准样确认</span></div>
                  <div><span className="text-industry-slate-500 block">磨料：</span><span className="text-white font-bold">按报价与材料文件确认</span></div>
                  <div><span className="text-industry-slate-500 block">包装：</span><span className="text-white font-bold">按批准包装规格确认</span></div>
                  <div><span className="text-industry-slate-500 block">文件：</span><span className="text-white font-bold">按主体、SKU与目标市场核验</span></div>
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
                  <li><Link href="/zh/buffing-wheels" className="text-industry-orange hover:underline">抛光轮/布轮/麻布轮</Link></li>
                  <li><Link href="/zh/flap-discs" className="text-industry-orange hover:underline">百叶片/百叶轮</Link></li>
                  <li><Link href="/zh/sanding-belts" className="text-industry-orange hover:underline">砂带/环形砂带</Link></li>
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
                "@id": absoluteUrl("/zh/sanding-discs#productgroup"),
                "name": "SCOTTCHEN砂纸片、砂碟、圆形砂纸盘",
                "description": "植绒、背胶、钢纸和网格砂碟OEM采购支持，按磨料、背基、孔型、包装和数量书面报价。",
                "url": absoluteUrl("/zh/sanding-discs"),
                "image": absoluteUrl("/images/sanding_screens.webp"),
                "brand": { "@type": "Brand", "name": "SCOTTCHEN" },
                "category": "砂纸片与砂碟",
                "material": "磨料与背基按报价SKU和材料文件确认",
                "additionalProperty": [
                  { "@type": "PropertyValue", "name": "起订量依据", "value": "按SKU、粒度、包装和订单数量书面确认" },
                  { "@type": "PropertyValue", "name": "背基/连接方式", "value": "植绒、背胶、钢纸、快换" }
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
