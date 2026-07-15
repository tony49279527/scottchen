import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { buildFaqPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "抛光轮 OEM 采购与抛光布轮批发 | SCOTTCHEN",
  description: "上海抛光轮OEM采购支持，提供抛光布轮、麻布轮、气道轮和抛光膏套装。按规格、包装、样品和订单数量书面报价。",
  path: "/zh/buffing-wheels",
  locale: "zh-CN",
  alternatePath: "/buffing-wheels",
});

export default function ZhBuffingWheelsPage() {
  const types = [
    {
      name: "硬质线布轮（密针/螺旋缝合布轮）",
      desc: "硬质线布轮通常通过螺旋或同心圆缝线固定多层布料，可作为金属粗抛或中抛项目的候选结构。询价应列明布料、层数、缝线、密度、内孔、额定转速、目标工件和验收方法，并以拟议生产来源的样品测试判断适用性。",
      specs: ["询价字段：直径与成品厚度", "询价字段：内孔、垫圈与设备接口", "询价字段：布料、层数与密度", "询价字段：缝线形式与间距", "额定转速与测试证据：按SKU确认"],
    },
    {
      name: "软质漂白布轮（软布轮/镜面抛光轮）",
      desc: "软质漂白布轮可采用细棉布或法兰绒，用于镜面精抛。采购时应确认布料、层数、缝线、孔径、密度、额定转速、平衡与掉屑验收标准，并以目标材料上的样品测试批准。",
      specs: ["常见布料：细棉布、法兰绒等", "询价字段：直径、厚度与内孔", "询价字段：中心缝合与成品密度", "抛光膏搭配：在目标工件上验证", "额定转速与验收标准：按SKU确认"],
    },
    {
      name: "风冷/气道抛光轮（通风抛光轮）",
      desc: "风冷抛光轮又称气道轮或通风布轮，采用折叠分段结构，常用于需要关注热量管理的连续抛光场景。散热、寿命、切削与出光效果会随布料、折数、轮径、夹盘、设备和工况变化，必须针对拟议生产来源进行文件核对和样品测试。",
      specs: ["询价字段：直径、厚度与内孔", "询价字段：折数、布型与夹盘结构", "设备接口与额定转速：按SKU确认", "散热与寿命：按工况做对比测试", "生产来源与检验方法：写入报价"],
    },
    {
      name: "麻布轮/油麻轮（剑麻轮）",
      desc: "麻布轮可采用剑麻、剑麻与棉布组合或其他经确认的处理结构，通常作为前段切削方案的候选。纤维来源、配比、处理剂、硬度、抛光膏搭配及对工件的影响不能由名称推断，应按SKU取得材料说明并完成样品验证。",
      specs: ["纤维与配比：按SKU书面确认", "处理剂与安全资料：按来源核对", "询价字段：直径、厚度、内孔与密度", "结构类型：以确认样和报价为准", "切削、发热与磨耗：按工况测试"],
    },
    {
      name: "台式砂轮机抛光轮",
      desc: "台式砂轮机抛光套装可按项目组合布轮、抛光膏与适配件。买家必须提供设备轴径、护罩空间、额定转速和安装要求；拟议生产来源需在报价与样品中确认轮径、内孔、垫圈、标识及安全说明，不能仅按设备品牌推定兼容。",
      specs: ["设备数据：轴径、转速、护罩与安装空间", "轮径、厚度、内孔与适配件：按SKU确认", "套装组成与抛光顺序：按样品批准", "警告语与说明书：按目标市场核对", "兼容性：由买家设备测试确认"],
    },
    {
      name: "手电钻抛光磨头（带柄抛光轮）",
      desc: "带柄抛光磨头常用于内孔、沟槽和曲面等大直径布轮难以触及的位置。采购项目应逐项确认磨头形状、材料、柄型、柄径、同心度、额定转速和工具接口，并由拟议生产来源提供样品供买家验证。",
      specs: ["常见形状：圆柱、圆锥、蘑菇、伞形、T形", "材料与密度：按SKU确认", "柄型、柄径与同心度：写入规格", "工具接口与额定转速：买家批准", "套装组成与包装：按报价确认"],
    },
    {
      name: "抛光膏/抛光蜡",
      desc: "抛光膏需与布轮、材料和目标表面匹配。颜色不能替代配方规格，RFQ应确认磨料、粒度、载体、单条重量、适用材料、包装和安全资料，并通过样品测试验证切削与出光结果。",
      specs: ["配方、粒度与载体：按SKU确认", "单条尺寸与净重：写入报价", "目标材料与工序：通过样品验证", "安全资料：按生产来源与市场核对", "包装与标签：以批准稿为准"],
    },
  ];

  const applications = [
    { name: "不锈钢制品抛光", desc: "可评估餐具、厨具、水槽、栏杆和装饰管等工件；轮型、抛光膏与验收效果需通过样品确认。" },
    { name: "汽车轮毂翻新", desc: "可比较铝合金或钢制轮毂的去氧化、划痕处理和出光方案，结果取决于工件与工艺参数。" },
    { name: "黄铜/铜件抛光", desc: "铜阀门、管件、工艺品和锁具可作为样品验证对象，轮型与化合物搭配按目标表面确定。" },
    { name: "五金卫浴抛光", desc: "水龙头、花洒和挂件等装饰表面可纳入测试，镀层与表面保护要求须由买家说明。" },
    { name: "首饰及精细工件", desc: "贵金属或精细工件应采用专门的污染、材料相容性和表面验收标准，不能套用通用说明。" },
    { name: "铝合金型材抛光", desc: "铝型材、铝板和压铸件可比较不同轮型与工序，效率、发热和表面效果以测试数据为准。" },
    { name: "模具维护抛光", desc: "型腔和细节位置可评估带柄磨头或毛毡类方案，尺寸、材料与工艺须按工件确认。" },
    { name: "工业批量抛光", desc: "自动线项目需先确认设备接口、速度、节拍、寿命、粉尘控制和验收方法，再选择拟议来源。" },
  ];

  const faqs = [
    {
      q: "抛光轮采购项目的MOQ（最小起订量）如何确认？",
      a: "MOQ按轮型、直径、厚度、孔径或柄径、布料、层数、包装和订单数量报价。试单、套装与混合SKU方案应分别列明单价、包装、检验和物流假设。",
    },
    {
      q: "抛光轮采购项目可以讨论哪些OEM贴牌范围？",
      a: "可以讨论OEM/ODM贴牌项目，包括品牌标签、零售包装、按图纸或确认样定制规格、布轮硬度与层数、抛光膏和套装组合。若涉及平台仓配，请由买家提供当前条码、标签和包装规则，报价中会确认可执行范围与责任边界。",
    },
    {
      q: "硬质布轮和软质布轮的区别是什么？如何选择？",
      a: "硬质布轮（线布轮/螺旋缝合轮）通过密线缝合固定布层，轮体硬、切削力强，配合粗粒度抛光膏（黑蜡、棕蜡）用于粗抛和中抛阶段，主要去除氧化皮、焊痕、砂眼、深划痕。软质布轮（漂白软布轮/法兰绒轮）不缝合或少缝合，布质柔软蓬松，配合细粒度抛光膏（白蜡、绿蜡）用于镜面精抛阶段，获得高光镜面效果。通常一套完整的抛光工序是：麻布轮/硬布轮（粗抛）→ 中硬布轮（中抛）→ 软布轮（精抛/镜面），配合对应的抛光膏依次使用。",
    },
    {
      q: "抛光轮交期和平台仓配如何确认？",
      a: "交期取决于轮型、尺寸、材料、包装、样品批准和订单数量，应以SKU书面报价中的里程碑为准。贸易条款必须注明适用的Incoterms规则、版本与指定地点；平台仓配由买家提供当前标签和入仓要求，并在订单前确认承运、贴标和验收责任。",
    },
    {
      q: "抛光轮使用寿命多久？如何判断更换时机？",
      a: "寿命受压力、转速、工件材质、抛光膏、设备和操作方式影响，网站不能给出适用于所有SKU的固定小时数。应在相同工况下比较拟议来源的样品并约定磨耗或更换标准；直径明显缩小、布层散开、缝线损坏、效率下降或振动变化时，应按设备与安全程序停机检查。",
    },
    {
      q: "抛光轮项目应索取哪些质量证据？",
      a: "建议在RFQ中列明尺寸公差、层数或密度、孔径或柄径、最高使用转速、平衡检查、外观和试抛验收标准。需要体系证书或第三方报告时，应核对签发机构、证书或报告编号、覆盖主体、产品范围、有效期以及具体SKU是否在覆盖范围内。",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "首页", href: "/zh" }, { label: "抛光轮", href: "/zh/buffing-wheels" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">B2B采购 · OEM项目</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              抛光轮 OEM 采购_抛光布轮批发
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              SCOTTCHEN为抛光布轮、麻布轮、气道轮、带柄抛光磨头和抛光膏项目提供OEM采购支持。起订量、生产来源、质量文件、包装和交期按具体SKU书面确认。
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
                <div className="text-2xl font-black text-industry-orange">按项目</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">质量证据核验</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">OEM/ODM</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">范围书面确认</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">按市场</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">出口文件确认</div>
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
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">采购与证据核验</span>
                <h2 className="text-2xl font-extrabold text-white tracking-wide">
                  SCOTTCHEN 上海抛光轮 B2B 采购与 OEM 项目支持
                </h2>
                <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                  <p>
                    SCOTTCHEN在上海支持抛光布轮、麻布轮、气道轮、抛光磨头和抛光膏B2B采购项目。选型、打样、包装与出口协调是否纳入范围，以具体报价为准；询价时应确认布料、层数、缝线、孔径或柄径、平衡标准、生产来源及检验记录。
                  </p>
                  <p>
                    拟议生产来源、棉布或剑麻规格、缝线、夹盘、处理剂和材料证明应按SKU写入报价。额定转速、平衡方法、检验频次、标识、测试条件和记录形式也需在质量计划中约定；只有与具体SKU和批准样一致的文件才能作为证据，页面不承诺统一材料或通用性能。
                  </p>
                  <p>
                    项目可面向金属加工、汽车翻新、卫浴、首饰、电商、工具品牌和批发渠道。产品选型、OEM包装、平台标签和物流范围均应由买卖双方在样品与订单文件中逐项确认。
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  抛光轮产品类型
                </h2>
                <div className="space-y-6">
                  {types.map((t) => (
                    <div key={t.name} className="glass-panel p-6 rounded-lg space-y-4 border border-industry-slate-800">
                      <h3 className="text-lg font-bold text-industry-orange">{t.name}</h3>
                      <p className="text-sm text-industry-slate-300 leading-relaxed">{t.desc}</p>
                      <div className="border-t border-industry-slate-800/80 pt-4">
                        <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">常见询价字段（按SKU确认）：</span>
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
                  抛光轮询价规格示例
                </h2>
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">产品类型</th>
                        <th className="px-4 py-3 font-semibold uppercase">常用直径</th>
                        <th className="px-4 py-3 font-semibold uppercase">内孔</th>
                        <th className="px-4 py-3 font-semibold uppercase">额定转速字段</th>
                        <th className="px-4 py-3 font-semibold uppercase">主要用途</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr><td className="px-4 py-3 font-bold text-industry-orange">硬质线布轮</td><td className="px-4 py-3">6\"/8\"/10\"</td><td className="px-4 py-3">1/2\"/5/8\"</td><td className="px-4 py-3">按SKU确认</td><td className="px-4 py-3">粗抛/中抛候选</td></tr>
                      <tr className="bg-industry-slate-900/40"><td className="px-4 py-3 font-bold text-industry-orange">软质布轮</td><td className="px-4 py-3">6\"/8\"</td><td className="px-4 py-3">1/2\"/5/8\"</td><td className="px-4 py-3">按SKU确认</td><td className="px-4 py-3">精抛候选</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-industry-orange">气道抛光轮</td><td className="px-4 py-3">8\"/10\"/12\"/14\"</td><td className="px-4 py-3">5/8\"/1\"/1.25\"</td><td className="px-4 py-3">按SKU确认</td><td className="px-4 py-3">连续抛光候选</td></tr>
                      <tr className="bg-industry-slate-900/40"><td className="px-4 py-3 font-bold text-industry-orange">麻布轮/处理麻轮</td><td className="px-4 py-3">6\"/8\"/10\"</td><td className="px-4 py-3">1/2\"/5/8\"</td><td className="px-4 py-3">按SKU确认</td><td className="px-4 py-3">前段切削候选</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-industry-orange">带柄抛光磨头</td><td className="px-4 py-3">1\"-3\"</td><td className="px-4 py-3">1/4\"柄</td><td className="px-4 py-3">按SKU确认</td><td className="px-4 py-3">细节/内孔/曲面候选</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-industry-slate-500 leading-relaxed">
                  表中尺寸和孔径仅为常见RFQ示例，不代表现货、兼容性或性能承诺。最终材料、结构、额定转速、标识、测试方法和证据由拟议生产来源按SKU提供，并经买家书面批准。
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  抛光轮应用场景
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
                  如何评估SCOTTCHEN抛光轮采购报价
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "可比报价", desc: "报价列明产品来源、材料、尺寸、包装、检验范围、数量和贸易术语，便于买家比较总到岸成本。" },
                    { title: "组合范围", desc: "拟议报价可组合硬质布轮、软质布轮、麻布轮、气道轮、磨头或抛光膏；来源与可执行范围逐SKU确认。" },
                    { title: "质量计划", desc: "买家与拟议生产来源书面约定来料、过程与成品检验、平衡方法、抽样、记录和验收标准。" },
                    { title: "OEM/ODM范围", desc: "品牌标签、彩盒包装、特殊规格、套装组合及买家提供规则的平台标签可在报价中逐项确认。" },
                    { title: "书面交期", desc: "打样、样品批准、物料准备、生产、验货和出运节点按SKU与订单数量写入报价。" },
                    { title: "应用评审", desc: "选型、方案或培训等技术支持仅在书面项目范围中确认，并以买家工件上的样品验证为准。" },
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
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">OEM贴牌采购</span>
                <h2 className="text-xl font-extrabold text-white">抛光轮OEM/ODM采购范围</h2>
                <div className="text-sm text-industry-slate-300 leading-relaxed space-y-4">
                  <p>
                    SCOTTCHEN从上海为工具品牌、五金渠道、电商卖家和工业MRO买家提供OEM/ODM采购项目支持。每个项目都应书面确认法律主体、拟议生产来源、适用SKU、材料与测试证据、样品费、MOQ、交期、付款方式、Incoterms规则与指定地点。
                  </p>
                  <p>
                    OEM范围可包括品牌标签、零售包装、按确认样或图纸定义的直径、厚度、内孔、硬度和层数、抛光膏规格及套装组合。平台条码、警告语和外箱标签由买家提供最终版本，供应范围在样品批准和订单文件中确认。
                  </p>
                  <p>
                    项目流程可包括：提交规格和目标市场 → 拟议来源与书面报价 → 打样 → 样品、证据与包装批准 → 订单确认 → 生产与验货 → 出运。每个阶段是否适用及其时间、费用、付款节点和责任，以具体项目文件为准。
                  </p>
                </div>
                <div className="pt-2">
                  <Link href="/zh/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover">
                    咨询OEM采购
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
                  src="/images/buffing_wheels.webp"
                  alt="抛光布轮、麻布轮与气道轮产品类别示意"
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
                  <div><span className="text-industry-slate-500 block">包装：</span><span className="text-white font-bold">按SKU、渠道规则和批准稿确认</span></div>
                  <div><span className="text-industry-slate-500 block">付款方式：</span><span className="text-white font-bold">以形式发票和合同为准</span></div>
                  <div><span className="text-industry-slate-500 block">价格条款：</span><span className="text-white font-bold">报价注明 Incoterms 规则与指定地点</span></div>
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
                  <li><Link href="/zh/sanding-discs" className="text-industry-orange hover:underline">砂纸片/砂碟</Link></li>
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
                "@id": absoluteUrl("/zh/buffing-wheels#productgroup"),
                "name": "SCOTTCHEN抛光轮、抛光布轮、麻布轮、气道轮",
                "description": "上海抛光轮OEM采购支持，覆盖抛光布轮、麻布轮、气道轮、抛光磨头和抛光膏，按SKU书面报价。",
                "url": absoluteUrl("/zh/buffing-wheels"),
                "image": absoluteUrl("/images/buffing_wheels.webp"),
                "brand": { "@type": "Brand", "name": "SCOTTCHEN" },
                "category": "棉布抛光轮与抛光配件",
                "additionalProperty": [
                  { "@type": "PropertyValue", "name": "起订量依据", "value": "按SKU、包装和订单数量书面确认" },
                  { "@type": "PropertyValue", "name": "交期依据", "value": "按规格、样品批准和订单数量书面确认" },
                  { "@type": "PropertyValue", "name": "贸易条款", "value": "报价注明 Incoterms 规则与指定地点" },
                  { "@type": "PropertyValue", "name": "付款方式", "value": "以形式发票和合同为准" },
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
