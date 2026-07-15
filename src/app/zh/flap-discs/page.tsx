import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { buildFaqPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "百叶片采购与百叶轮批发支持 | SCOTTCHEN",
  description: "T27/T29锆刚玉、陶瓷氧化铝百叶片OEM采购指南。按尺寸、粒度、底板、最高转速、样品、包装和数量书面报价。",
  path: "/zh/flap-discs",
  locale: "zh-CN",
  alternatePath: "/flap-discs",
});

export default function ZhFlapDiscsPage() {
  const types = [
    {
      name: "T27平面百叶片（平型砂布轮）",
      desc: "T27型百叶片（又称平型百叶片、平面砂布轮）适合平面打磨、焊缝修整、去毛刺和除锈。4寸、4.5寸、5寸、7寸及不同磨料、粒度、密度可作为询价范围；实际生产来源、结构、最高转速、适用文件和可供规格按SKU书面确认。",
      specs: ["常见询价直径：4\"/4.5\"/5\"/6\"/7\"", "内孔：按工具与SKU确认", "磨料：氧化铝/锆刚玉/陶瓷可询价", "砂布片数：按批准规格确认", "最高转速：按标签、报告与工具说明书核对"],
    },
    {
      name: "T29钹型百叶片（锥型/翘头百叶片）",
      desc: "T29型百叶片采用锥形工作面，常用于弧面、角焊缝、边角和管道外壁。T27与T29的切削、接触面积、纹路和操控感取决于砂布、片数、压力与角度，应在目标工件和工具上做对比样品测试。",
      specs: ["直径：4\"/4.5\"/5\"/7\"", "内孔：7/8\"（22.23mm）", "角度：15°-20°锥面", "磨料：锆刚玉/陶瓷（推荐）", "应用：角焊缝/弧面/边角/管道打磨"],
    },
    {
      name: "锆刚玉百叶片",
      desc: "锆刚玉（Zirconia Alumina/ZA）百叶片常用于不锈钢、碳钢和合金钢打磨。采购时应比较砂布来源、片数、底板、粘结、标称最高转速及代表性样品的切削、寿命、温升和脱落情况；任何安全标准或测试声明都应对应到具体SKU、尺寸和有效报告。",
      specs: ["磨料：ZA40#/ZA60#/ZA80#/ZA120#", "布基：J-wt/Y-wt聚酯布", "粘结：全树脂双涂", "底板：玻璃纤维网盖（加厚）", "适配：不锈钢/碳钢/合金钢/铸铁"],
    },
    {
      name: "陶瓷磨料百叶片",
      desc: "陶瓷氧化铝百叶片可用于不锈钢、高温合金、工具钢和其他难磨材料。实际切削、温升和寿命受砂布、密度、工件、工具、压力与操作影响，采购方应使用相同测试条件比较陶瓷、锆刚玉和氧化铝样品。",
      specs: ["磨料：Ceramic陶瓷氧化铝", "粒度：P36/P40/P60/P80/P120", "添加剂：磨削助剂（减少发热）", "布基：Y-wt重型聚酯布", "应用：不锈钢/钛合金/高温合金/淬火钢"],
    },
    {
      name: "氧化铝百叶片",
      desc: "氧化铝（Aluminum Oxide/AO）百叶片可用于普通金属、木材或一般打磨场景。磨料牌号、底板、结合方式、回转与平衡检验、零售包装范围应在具体SKU的报价、样品批准和质量计划中确认，网站不作100%测试或统一性能承诺。",
      specs: ["磨料：煅烧氧化铝（棕刚玉）", "粒度：P40/P60/P80/P120/P180/P240/P320", "布基：X-wt/J-wt棉布", "特点：价格经济/通用型", "适配：普通金属/木材/塑料/DIY"],
    },
    {
      name: "加厚高密度百叶片",
      desc: "高密度百叶片使用更多砂布片，可与标准密度方案进行对比测试。片数、厚度、磨料、底板、最高转速和预期寿命必须按报价SKU定义，并在买家实际工况下通过代表性样品核验。",
      specs: ["砂布片数：按SKU确认", "厚度：按批准规格确认", "磨料：锆刚玉/陶瓷可询价", "寿命：按共同测试条件比较", "应用：按工件、设备和工况批准"],
    },
  ];

  const applications = [
    { name: "不锈钢加工", desc: "不锈钢板焊缝、边角和表面处理可比较锆刚玉或陶瓷方案；切削、温升、变色和表面结果需按相同工况测试。" },
    { name: "钢结构制造", desc: "钢结构厂房、桥梁、铁塔的焊缝打磨、除锈、切割边毛刺处理，T27/T29锆刚玉百叶片。" },
    { name: "造船与压力容器", desc: "船体钢板焊缝、管道环缝、容器封头打磨，T29钹型陶瓷/锆刚玉百叶片。" },
    { name: "汽车制造", desc: "汽车车架、排气管或车身钢板的焊缝与飞边处理，应按设备、自动化接口、工件和节拍评估专用规格可行性。" },
    { name: "五金制品", desc: "五金工具、铸件、铁艺制品、门窗配件的去毛刺、焊缝打磨、表面抛光前处理，氧化铝百叶片性价比高。" },
    { name: "铸造行业", desc: "铸钢、铸铁或铸铝件浇口、冒口和飞边处理，可比较标准密度与高密度方案的切削、寿命、温升和成本。" },
    { name: "管道安装", desc: "管道焊缝、管端坡口、管道对接焊缝打磨，T29钹型百叶片角度打磨更方便。" },
    { name: "维修与DIY", desc: "金属维修、设备维护、农机维修、金属表面锈迹旧漆去除，通用氧化铝百叶片经济实惠。" },
  ];

  const faqs = [
    {
      q: "百叶片（百叶轮）T27和T29型号有什么区别？怎么选？",
      a: "T27呈相对平坦的工作面，可用于评估平面混磨与精整；T29呈锥形工作面，可用于评估角焊缝、弧面和边角。最终选择需记录角磨机、防护罩、角度、压力、工件、最高转速和代表性样品结果，不能只按型号名称推定切削或表面表现。",
    },
    {
      q: "百叶片批发MOQ是多少？支持OEM贴牌吗？",
      a: "MOQ应按直径、孔径、粒度、磨料、密度、底板、包装和订单数量分别报价。OEM范围可包括网盖或铁盖印刷、彩盒、插卡、吸塑、砂布片数和多粒度套装；平台标签和警告内容由买家提供最终规则，并在样品批准前确认。",
    },
    {
      q: "氧化铝、锆刚玉、陶瓷百叶片如何选择？",
      a: "氧化铝、锆刚玉和陶瓷配置可分别纳入一般金属、木材、不锈钢、合金钢或高压磨削场景的样品比较。价格、切削、寿命、温升和表面结果受砂布来源、片数、底板、工具、压力与工件影响；RFQ应统一测试条件并用结果决定材料，网站不承诺固定倍数或最佳等级。",
    },
    {
      q: "百叶片的4.5寸、5寸、7寸是什么意思？怎么选直径和粒度？",
      a: "寸数指百叶片外径。采购方应以角磨机和防护罩说明书、法兰与孔径、产品标签及适用报告核对直径、孔径和最高转速。粒度选择需结合去除量、目标纹路和后续工序，在同一工件上比较粗、中、细粒度样品；网站不按地区或销量推定最常用规格。",
    },
    {
      q: "百叶片项目应如何核验安全证据？",
      a: "RFQ应列明目标市场、适用安全标准、最高转速、角磨机与防护罩兼容性、标签和警告要求。索取报告编号、签发机构、覆盖尺寸、样品标识、测试日期和有效期，并确认报告覆盖报价中的准确SKU，而不是只接受笼统认证声明。",
    },
    {
      q: "百叶片使用寿命多久？如何判断更换时机？",
      a: "百叶片寿命取决于磨料、结构、工件、工具、压力、角度和终止条件，网站不能提供统一分钟数。采购测试应记录相同工件、工具、速度、压力、去除量和停止规则，并比较切削、温升、振动、砂布片状态与安全要求。使用与更换必须遵循产品标签、工具说明书和批准的安全文件。",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "首页", href: "/zh" }, { label: "百叶片", href: "/zh/flap-discs" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">上海B2B采购 · 百叶片OEM支持</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              百叶片采购_百叶轮批发_平面砂布轮OEM项目支持
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              T27/T29锆刚玉和陶瓷百叶片OEM采购支持。尺寸、粒度、底板、最高转速、适用市场文件、包装、起订量和交期按具体SKU书面确认。
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
                <div className="text-2xl font-black text-industry-orange">按市场</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">安全证据核验</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">T27/T29</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">平面/钹型询价</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">AO/ZA/Ceramic</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">三种磨料比较</div>
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
                  T27/T29百叶片采购、样品与OEM项目协调
                </h2>
                <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                  <p>
                    SCOTTCHEN在上海为百叶片项目提供选型、打样、包装和出口协调。买家应在询价中核验生产主体、砂布和底板来源、设备与检验能力、标称最高转速及具体SKU的测试证据，不应仅依据笼统的产能、市场覆盖或认证表述做决定。
                  </p>
                  <p>
                    百叶片由砂布片、底板和结合结构组成，可询价T27、T29及不同磨料、粒度、密度和尺寸。具体可供范围、工具与防护罩兼容性、最高转速和性能表现应按报价SKU、代表性样品和批准文件核验。
                  </p>
                  <p>
                    报价应列明生产来源、砂布、底板、结合结构、抽样与回转测试方法、报告覆盖和包装标签。是否采用特定结构、是否逐批测试以及测试比例只能由具体SKU的质量计划和记录证明，不能由网站统一承诺。
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  百叶片产品类型
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
                  百叶片 RFQ 核验表（不代表已批准 SKU）
                </h2>
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">规格（直径）</th>
                        <th className="px-4 py-3 font-semibold uppercase">内孔</th>
                        <th className="px-4 py-3 font-semibold uppercase">最高转速核对</th>
                        <th className="px-4 py-3 font-semibold uppercase">适配角磨机</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr><td className="px-4 py-3 font-bold text-industry-orange">4\" (100mm)</td><td className="px-4 py-3">按SKU确认</td><td className="px-4 py-3">标签/报告/工具说明书</td><td className="px-4 py-3">按实际工具批准</td></tr>
                      <tr className="bg-industry-slate-900/40"><td className="px-4 py-3 font-bold text-industry-orange">4.5\" (115mm)</td><td className="px-4 py-3">按SKU确认</td><td className="px-4 py-3">标签/报告/工具说明书</td><td className="px-4 py-3">按实际工具批准</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-industry-orange">5\" (125mm)</td><td className="px-4 py-3">按SKU确认</td><td className="px-4 py-3">标签/报告/工具说明书</td><td className="px-4 py-3">按实际工具批准</td></tr>
                      <tr className="bg-industry-slate-900/40"><td className="px-4 py-3 font-bold text-industry-orange">6\" (150mm)</td><td className="px-4 py-3">按SKU确认</td><td className="px-4 py-3">标签/报告/工具说明书</td><td className="px-4 py-3">按实际工具批准</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-industry-orange">7\" (180mm)</td><td className="px-4 py-3">按SKU确认</td><td className="px-4 py-3">标签/报告/工具说明书</td><td className="px-4 py-3">按实际工具批准</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  百叶片应用领域
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
                  百叶片项目如何降低采购风险
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "安全证据核验", desc: "按目标市场和具体SKU核对适用标准、报告编号、覆盖尺寸、测试日期、最高转速和标签要求。" },
                    { title: "材料来源可核验", desc: "砂布品牌、等级和原产地仅在对应SKU有文件支持时写入报价。" },
                    { title: "检验方法书面化", desc: "动平衡、跳动、结合强度和回转相关方法与抽样比例写入质量计划。" },
                    { title: "规格按SKU确认", desc: "形状、磨料、直径、粒度、片数和密度以批准规格为准。" },
                    { title: "OEM/ODM范围", desc: "网盖印刷、彩盒、插卡、吸塑和套装可按买家批准文件确认；平台标签规则由买家提供。" },
                    { title: "可比报价", desc: "报价列明生产来源、材料、结构、包装、检验、数量和贸易术语，便于比较总到岸成本。" },
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
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">百叶片OEM代工</span>
                <h2 className="text-xl font-extrabold text-white">百叶片OEM/ODM贴牌定制服务</h2>
                <div className="text-sm text-industry-slate-300 leading-relaxed space-y-4">
                  <p>
                    SCOTTCHEN为百叶片OEM项目提供上海B2B询价、样品、包装和出口协调。负责生产的主体、适用市场标准与报告覆盖必须在具体SKU报价中列明，网站不声明自有工厂、固定经营年限或自动符合任何市场要求。
                  </p>
                  <p>
                    OEM范围可包括网盖或铁盖印刷、零售或工业包装、T27/T29形状、砂布与磨料类型、片数密度、底板颜色和多粒度套装。产品规格、最高转速、安全警告、平台条码和外箱标签必须由买家批准，并与目标市场要求一并核验。
                  </p>
                  <p>
                    合作流程通常包括：提交SKU规格与目标市场 → 书面报价 → 样品和测试 → 标签与包装批准 → 订单确认 → 生产与验货 → 出运。样品费用、付款条件、交期和验货责任以具体报价、形式发票和合同为准。
                  </p>
                </div>
                <div className="pt-2">
                  <Link href="/zh/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover">
                    咨询百叶片OEM
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
                  src="/images/fiber_discs.webp"
                  alt="SCOTTCHEN百叶片采购与T27/T29 OEM项目支持"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  批发参数
                </h3>
                <div className="space-y-4 text-xs font-mono">
                  <div><span className="text-industry-slate-500 block">MOQ：</span><span className="text-white font-bold">按尺寸、粒度、结构和数量报价</span></div>
                  <div><span className="text-industry-slate-500 block">直径：</span><span className="text-white font-bold">4\"/4.5\"/5\"/7\"</span></div>
                  <div><span className="text-industry-slate-500 block">磨料：</span><span className="text-white font-bold">氧化铝/锆刚玉/陶瓷</span></div>
                  <div><span className="text-industry-slate-500 block">形状：</span><span className="text-white font-bold">T27平面型/T29钹型</span></div>
                  <div><span className="text-industry-slate-500 block">文件：</span><span className="text-white font-bold">按主体、SKU与目标市场核验</span></div>
                  <div><span className="text-industry-slate-500 block">交货期：</span><span className="text-white font-bold">按规格、包装与数量书面报价</span></div>
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
                  <li><Link href="/zh/resources/flap-disc-rfq-guide" className="font-bold text-industry-orange hover:underline">百叶片 RFQ 指南</Link></li>
                  <li><Link href="/zh/buffing-wheels" className="text-industry-orange hover:underline">抛光轮/布轮/麻布轮</Link></li>
                  <li><Link href="/zh/sanding-discs" className="text-industry-orange hover:underline">砂纸片/砂碟</Link></li>
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
                "@id": absoluteUrl("/zh/flap-discs#productgroup"),
                "name": "SCOTTCHEN百叶片、百叶轮、平面砂布轮",
                "description": "T27/T29锆刚玉和陶瓷氧化铝百叶片OEM采购支持，按SKU、包装和数量书面报价。",
                "url": absoluteUrl("/zh/flap-discs"),
                "image": absoluteUrl("/images/fiber_discs.webp"),
                "brand": { "@type": "Brand", "name": "SCOTTCHEN" },
                "category": "百叶片与平面砂布轮",
                "material": "锆刚玉、陶瓷、氧化铝，玻璃纤维网盖",
                "additionalProperty": [
                  { "@type": "PropertyValue", "name": "形状", "value": "T27 平面 / T29 锥面" },
                  { "@type": "PropertyValue", "name": "起订量依据", "value": "按尺寸、粒度、结构、包装和订单数量报价" }
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
