import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "抛光轮厂家_抛光布轮批发_抛光轮生产厂家_SCOTTCHEN",
  description: "SCOTTCHEN上海抛光轮生产厂家，专业提供抛光布轮、麻布轮、气道轮、抛光膏套装的OEM/ODM代工与批发，MOQ 500件，支持贴牌定制，出口全球。",
  path: "/zh/buffing-wheels",
  locale: "zh-CN",
  alternatePath: "/buffing-wheels",
});

export default function ZhBuffingWheelsPage() {
  const types = [
    {
      name: "硬质线布轮（密针/螺旋缝合布轮）",
      desc: "硬质线布轮，又称密针布轮、螺旋缝合布轮，是金属粗抛和中抛最常用的抛光布轮类型。采用优质漂白棉布或原色棉布多层叠压，通过螺旋缝线或同心圆缝线固定，轮体硬度高、切削力强，配合黑砂蜡（Emery）或棕刚玉抛光膏可快速去除不锈钢、铁件、铜件表面的氧化皮、焊痕、砂眼和粗划痕。常用直径6寸、8寸、10寸，适配台式砂轮机和抛光机。我司作为专业抛光布轮厂家，可按客户要求生产不同硬度（硬/中/软）、不同层数、不同孔径的硬质线布轮，支持OEM贴牌定制。",
      specs: ["直径：3\"-14\"（75mm-350mm）", "内孔：1/2\"、5/8\"、3/4\"、1\"、定制", "层数：20-80层可选", "硬度：硬/中/软三种", "缝线：螺旋缝/同心圆缝/直缝"],
    },
    {
      name: "软质漂白布轮（软布轮/镜面抛光轮）",
      desc: "软质漂白布轮采用高支数漂白细棉布或法兰绒布制作，不缝合或仅局部缝合，质地柔软蓬松，专用于镜面精抛工序。配合白蜡（White Rouge）或绿蜡（Green Chrome Oxide）使用，可在不锈钢、黄铜、铝合金、银器等表面获得高光镜面效果。软布轮是首饰抛光、卫浴五金、餐具抛光的必备耗材。我司生产的软质漂白布轮布质均匀、不掉布屑、平衡性能好，支持批发和来样定制，MOQ低至500件。",
      specs: ["直径：3\"-12\"（75mm-300mm）", "内孔：1/4\"、1/2\"、5/8\"、定制", "材质：漂白细布/法兰绒/纯棉布", "厚度：1/2\"-2\"可选", "用途：镜面精抛、出光"],
    },
    {
      name: "风冷/气道抛光轮（通风抛光轮）",
      desc: "风冷抛光轮又称气道轮、通风布轮，是大型金属工件（如汽车轮毂、铝型材、不锈钢管）高效抛光的首选。轮体内部设计有多层气道和导流槽，高速旋转时能形成强力气流散热，防止工件过热烧糊或变形。气道轮配合黄蜡、白蜡、紫蜡使用，切削力强、抛光效率高、散热快，广泛应用于汽车轮毂翻新、铝型材抛光、不锈钢板材抛光等工业场景。我司是专业气道抛光轮生产厂家，可生产6寸-16寸各种规格，支持OEM贴牌。",
      specs: ["直径：6\"-16\"（150mm-400mm）", "内孔：5/8\"、3/4\"、1\"、1.25\"", "布型：16折/20折/24折气道结构", "适配：固定式抛光机/自动抛光线", "特点：散热好、效率高、寿命长"],
    },
    {
      name: "麻布轮/油麻轮（剑麻轮）",
      desc: "麻布轮采用天然剑麻纤维（Sisal）和棉布叠合缝制而成，硬度高、磨削力强，是不锈钢、铁件、铸铜件等金属粗抛和去氧化皮的理想选择。油麻轮（浸油麻布轮）经特殊油脂浸渍处理，研磨切削效果更佳，且不易烧伤工件表面。麻布轮配合黑蜡或紫蜡使用，可快速去除焊道、氧化皮、毛刺等缺陷，是不锈钢餐具、五金工具、卫浴挂件抛光的首道工序耗材。SCOTTCHEN作为上海麻布轮厂家，提供各种规格麻布轮批发，支持定制硬度和直径。",
      specs: ["直径：4\"-12\"（100mm-300mm）", "内孔：1/2\"、5/8\"、3/4\"、定制", "材质：天然剑麻+棉布/纯剑麻", "类型：干麻轮/油麻轮/胶合麻轮", "硬度：超硬/硬/中硬可选"],
    },
    {
      name: "台式砂轮机抛光轮",
      desc: "台式砂轮机抛光轮专配6寸、8寸台式砂轮机（Bench Grinder），是DIY爱好者、小型工坊、维修车间的常用抛光配件。轮体两侧配有适配垫圈和内孔套，可直接安装在标准1/2英寸轴径的台式砂轮机上使用，无需额外适配器。通常包含硬质线布轮+软布轮组合，配合抛光膏即可进行从粗抛到镜面的完整抛光作业。我司生产的台式砂轮机抛光轮套装出口欧美市场多年，适配DeWalt、Black+Decker、Benchmark等主流品牌砂轮机，支持OEM贴牌包装。",
      specs: ["直径：6\"（150mm）、8\"（200mm）", "内孔：1/2\"标配（含5/8\"、3/4\"适配器）", "厚度：1/2\"-1\"", "套装：硬轮+软轮+抛光膏组合", "适配：所有主流品牌台式砂轮机"],
    },
    {
      name: "手电钻抛光磨头（带柄抛光轮）",
      desc: "手电钻抛光磨头又称带柄布轮、磨头抛光轮，柄径为1/4英寸六角柄或圆柄，可直接安装在手电钻、充电钻、直磨机上使用，适合不规则形状、内孔、沟槽、曲面等难以用大抛光轮触及的部位抛光。磨头形状多样，包括圆柱形、圆锥形、蘑菇形、伞形、T形等，材质分棉布、麻布、羊毛、毛毡等。广泛用于汽车轮毂细节抛光、模具抛光、首饰加工、管道内壁抛光等。我司抛光磨头厂家提供多种规格套装批发，支持OEM定制组合。",
      specs: ["柄径：1/4\"六角柄/6mm圆柄/3mm柄", "磨头直径：10mm-80mm", "形状：圆柱/圆锥/蘑菇/伞形/T形", "材质：棉布/麻布/羊毛/毛毡", "适配：手电钻/直磨机/吊磨机"],
    },
    {
      name: "抛光膏/抛光蜡",
      desc: "抛光膏（抛光蜡）是配合抛光布轮使用的研磨耗材，不同颜色的抛光膏含有不同粒度和成分的磨料，用于不同抛光阶段。黑膏（Emery/黑色金刚砂膏）用于粗抛去氧化皮；红膏（Tripoli/红铁矿膏）用于中抛除划痕；白膏（White Rouge）用于不锈钢和有色金属镜面精抛；绿膏（Green Chrome Oxide）用于不锈钢和铬面镜面出光；蓝膏（Blue）用于塑料和漆面抛光。SCOTTCHEN抛光膏厂家生产各种颜色抛光蜡，支持OEM贴牌包装和配方定制，MOQ低至500条。",
      specs: ["单条规格：约100g-500g/条", "颜色/粒度：黑/棕/红/白/绿/蓝", "包装：纸盒/散装/吸塑/贴标", "形状：方条形/圆柱形/定制", "适用材质：不锈钢/铜/铝/塑料/漆面"],
    },
  ];

  const applications = [
    { name: "不锈钢制品抛光", desc: "不锈钢餐具、厨具、水槽、扶手栏杆、装饰管的从粗抛到镜面全工序抛光。" },
    { name: "汽车轮毂翻新", desc: "铝合金轮毂、钢制轮毂氧化层去除、划痕修复和镜面抛光，气道轮+软布轮组合。" },
    { name: "黄铜/铜件抛光", desc: "铜阀门、铜管件、铜工艺品、铜锁具的焊痕去除和高光抛光。" },
    { name: "五金卫浴抛光", desc: "水龙头、花洒、毛巾架等卫浴五金件的装饰性镜面抛光加工。" },
    { name: "首饰金银抛光", desc: "金、银、铂金等贵金属首饰的镜面精抛，使用软布轮+红/白抛光膏。" },
    { name: "铝合金型材抛光", desc: "铝型材、铝板、铝压铸件的表面抛光和氧化前处理，气道轮效率最高。" },
    { name: "模具维护抛光", desc: "注塑模具、冲压模具的型腔镜面抛光维护，使用带柄磨头和毛毡轮。" },
    { name: "工业批量抛光", desc: "自动抛光线配合专用抛光轮大批量处理金属工件，可定制特殊规格。" },
  ];

  const faqs = [
    {
      q: "你们作为抛光轮厂家，MOQ（最小起订量）是多少？",
      a: "标准规格抛光布轮（如6寸、8寸直径，1/2\"或5/8\"内孔）的MOQ为500件/款。非标准规格定制（特殊直径、特殊内孔、特殊硬度）的MOQ一般为1000件/款。抛光膏套装和成品零售包装套装的MOQ通常为500套。首次合作客户可灵活协商试单数量，具体请联系销售团队确认。我们也接受多个SKU混批凑整柜的订单模式，方便批发商和经销商一站式采购。",
    },
    {
      q: "抛光轮可以OEM贴牌吗？支持哪些定制？",
      a: "完全可以。SCOTTCHEN作为专业抛光轮生产厂家，提供全面的OEM/ODM贴牌服务，包括：1）印刷您的品牌Logo和标签；2）定制彩盒、吸塑、插卡等零售包装；3）按您的样品或图纸定制特殊规格；4）定制布轮硬度、层数、缝线密度；5）开发专属抛光膏配方；6）组合套装定制（布轮+抛光膏+适配器一站式包装）；7）FBA贴标和准备。我们已为全球40多个国家的工具品牌、五金连锁、电商卖家提供贴牌代工服务。",
    },
    {
      q: "硬质布轮和软质布轮的区别是什么？如何选择？",
      a: "硬质布轮（线布轮/螺旋缝合轮）通过密线缝合固定布层，轮体硬、切削力强，配合粗粒度抛光膏（黑蜡、棕蜡）用于粗抛和中抛阶段，主要去除氧化皮、焊痕、砂眼、深划痕。软质布轮（漂白软布轮/法兰绒轮）不缝合或少缝合，布质柔软蓬松，配合细粒度抛光膏（白蜡、绿蜡）用于镜面精抛阶段，获得高光镜面效果。通常一套完整的抛光工序是：麻布轮/硬布轮（粗抛）→ 中硬布轮（中抛）→ 软布轮（精抛/镜面），配合对应的抛光膏依次使用。",
    },
    {
      q: "你们的抛光轮交期多长？支持一件代发或FBA发货吗？",
      a: "标准规格抛光布轮的交货周期为收到定金后25-35天，OEM贴牌订单（含定制包装）约30-40天。大批量订单（整柜）交期可协商提前安排生产排期。我们支持多种发货方式：FOB上海出厂价、CIF目的港、或安排门到门物流。针对电商客户，我们提供完整的FBA代发服务，包括FNSKU贴标、塑料袋包装、防窒息标签、纸箱标签等，可直接从工厂发往亚马逊仓库。对于合作稳定的客户，可商议一件代发服务。",
    },
    {
      q: "抛光轮使用寿命多久？如何判断更换时机？",
      a: "抛光轮的使用寿命取决于使用条件（压力、转速、工件材质、抛光膏类型），一般工业连续使用情况下，硬质布轮寿命约20-40小时，软质布轮约30-60小时，麻布轮约15-30小时，气道轮可达50-80小时。判断更换的信号包括：布轮直径明显缩小、布层散开或脱落、缝线断裂、抛光效率明显下降、工件表面出现布屑划痕、抛光轮平衡变差产生振动。建议定期修整抛光轮表面（用轮修整器或砂纸棒）以保持工作面平整，可有效延长使用寿命。",
    },
    {
      q: "作为抛光布轮厂家，你们有哪些质量认证？",
      a: "SCOTTCHEN工厂通过ISO 9001:2015质量管理体系认证，所有抛光轮产品在出厂前经过动平衡测试、尺寸检验、外观检验和试抛测试。产品符合FEPA和ANSI磨料标准，出口欧洲的产品可提供CE相关文件。我们为多家欧美知名工具品牌和五金连锁供应抛光轮产品长达10年以上，产品质量稳定可靠。可根据客户要求提供SGS、TÜV等第三方检测报告，也欢迎客户委托第三方机构来厂验货。",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "首页", href: "/zh" }, { label: "抛光轮", href: "/zh/buffing-wheels" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">抛光轮厂家 · 工厂直供</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              抛光轮厂家_抛光布轮批发_布轮厂家
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              SCOTTCHEN上海抛光轮生产厂家，专业生产抛光布轮、麻布轮、气道轮（风冷轮）、带柄抛光磨头、抛光膏/抛光蜡等全系列抛光耗材，提供OEM/ODM贴牌代工与批发服务，MOQ低至500件，出口全球40+国家。
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
                <div className="text-2xl font-black text-industry-orange">MOQ 500</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">起订量（件）</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">ISO 9001</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">质量认证</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">OEM/ODM</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">贴牌定制</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">40+国家</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">出口市场</div>
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
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">抛光轮厂家直供</span>
                <h2 className="text-2xl font-extrabold text-white tracking-wide">
                  SCOTTCHEN — 专业抛光轮生产厂家，布轮/麻轮/气道轮全系列工厂直供
                </h2>
                <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                  <p>
                    SCOTTCHEN是坐落于上海的专业抛光轮厂家，自2014年起深耕抛光耗材行业十余年，是国内领先的抛光布轮、麻布轮、气道轮、抛光磨头及抛光膏研发、生产和出口企业。作为抛光轮生产厂家，我们拥有完整的布轮生产线——从布料裁切、多层叠压、螺旋缝合、组装平衡到成品检验全工序自主完成，严格执行ISO 9001质量管理体系，为全球客户提供稳定可靠的抛光耗材产品。
                  </p>
                  <p>
                    作为布轮厂家，我们深知抛光轮的品质直接决定工件最终抛光效果。因此我们在原材料采购环节严格把关：所用棉布均选用优质高密棉坯布，麻布轮采用进口天然剑麻纤维，缝线选用高拉力涤纶线，金属夹盘采用精密冲压件。每一只抛光轮在出厂前均经过动平衡测试，确保在3000-6000RPM转速下平稳运转、无振动、不掉布屑，保障操作人员安全和工件抛光质量。
                  </p>
                  <p>
                    我们不仅是抛光轮厂家，更是您抛光工艺解决方案的合作伙伴。无论您是不锈钢餐具加工厂、汽车轮毂翻新厂、五金卫浴制造商、首饰加工厂，还是电商卖家、工具品牌商、五金批发商，SCOTTCHEN都能为您提供从产品选型、工艺咨询到OEM贴牌的一站式服务。支持抛光轮批发、定制加工、OEM/ODM代工、FBA贴标发货，服务全球40+国家和地区的客户。
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
                        <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">常用规格：</span>
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
                  抛光轮常用规格参数表
                </h2>
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">产品类型</th>
                        <th className="px-4 py-3 font-semibold uppercase">常用直径</th>
                        <th className="px-4 py-3 font-semibold uppercase">内孔</th>
                        <th className="px-4 py-3 font-semibold uppercase">最高转速</th>
                        <th className="px-4 py-3 font-semibold uppercase">主要用途</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr><td className="px-4 py-3 font-bold text-industry-orange">硬质线布轮</td><td className="px-4 py-3">6\"/8\"/10\"</td><td className="px-4 py-3">1/2\"/5/8\"</td><td className="px-4 py-3">3600 RPM</td><td className="px-4 py-3">粗抛/中抛（金属）</td></tr>
                      <tr className="bg-industry-slate-900/40"><td className="px-4 py-3 font-bold text-industry-orange">软质漂白布轮</td><td className="px-4 py-3">6\"/8\"</td><td className="px-4 py-3">1/2\"/5/8\"</td><td className="px-4 py-3">3600 RPM</td><td className="px-4 py-3">镜面精抛</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-industry-orange">气道抛光轮</td><td className="px-4 py-3">8\"/10\"/12\"/14\"</td><td className="px-4 py-3">5/8\"/1\"/1.25\"</td><td className="px-4 py-3">3000 RPM</td><td className="px-4 py-3">轮毂/铝型材/大件抛光</td></tr>
                      <tr className="bg-industry-slate-900/40"><td className="px-4 py-3 font-bold text-industry-orange">麻布轮/油麻轮</td><td className="px-4 py-3">6\"/8\"/10\"</td><td className="px-4 py-3">1/2\"/5/8\"</td><td className="px-4 py-3">3600 RPM</td><td className="px-4 py-3">粗抛去氧化皮</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-industry-orange">带柄抛光磨头</td><td className="px-4 py-3">1\"-3\"</td><td className="px-4 py-3">1/4\"柄</td><td className="px-4 py-3">4500 RPM</td><td className="px-4 py-3">细节/内孔/曲面抛光</td></tr>
                    </tbody>
                  </table>
                </div>
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
                  为什么选择SCOTTCHEN作为您的抛光轮厂家
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "工厂直供价格", desc: "我们是抛光轮源头生产厂家，自有工厂直销，省去中间商层层加价，为批发商和品牌商提供最具竞争力的出厂价格。" },
                    { title: "全系列产品", desc: "硬质布轮、软质布轮、麻布轮、气道轮、磨头、抛光膏一站式采购，减少多供应商采购的沟通成本和物流成本。" },
                    { title: "严格质量管控", desc: "ISO 9001认证工厂，每只抛光轮经动平衡测试，原材料到成品三阶段质检，确保出厂产品合格率达99%以上。" },
                    { title: "OEM/ODM定制", desc: "10年+贴牌代工经验，支持品牌标签、彩盒包装、特殊规格、套装组合、FBA贴标等全方位定制服务。" },
                    { title: "快速交货", desc: "标准品7-15天发货，OEM订单30-40天交货，上海港口紧邻工厂，船期密集，物流成本低、时效快。" },
                    { title: "专业技术支持", desc: "拥有资深抛光工艺工程师团队，可协助客户选型、设计抛光方案、解决抛光难题，提供工艺培训和指导。" },
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
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">OEM贴牌代工</span>
                <h2 className="text-xl font-extrabold text-white">抛光轮OEM/ODM贴牌定制服务</h2>
                <div className="text-sm text-industry-slate-300 leading-relaxed space-y-4">
                  <p>
                    SCOTTCHEN抛光轮厂家为全球工具品牌、五金连锁、电商卖家、工业MRO供应商提供专业的OEM/ODM贴牌代工服务。经过十余年的出口代工经验积累，我们深谙欧美、东南亚、中东等市场对抛光轮产品的标准要求和包装规范，能够精准匹配客户的品牌定位和市场需求。
                  </p>
                  <p>
                    我们的OEM服务涵盖以下内容：①品牌标签印刷——在抛光轮夹盘或包装上印刷您的品牌Logo、产品信息、安全警告；②零售包装定制——彩盒、吸塑卡、插卡、塑料袋、桶装等多种包装形式；③产品规格定制——按您的样品或图纸定制直径、厚度、内孔、硬度、层数等参数；④抛光膏定制——颜色、粒度、配方、包装均可定制；⑤套装组合开发——布轮+抛光膏+适配器组合套装，一站式零售解决方案；⑥FBA服务——FNSKU贴标、防窒息袋、纸箱标签，直接发往亚马逊仓库。
                  </p>
                  <p>
                    OEM合作流程：发送询盘和需求 → 我方提供方案和报价 → 确认后打样（7-10天） → 客户确认样品 → 签订合同支付定金 → 批量生产（25-40天） → 验货/QC → 尾款支付 → 发货。我们的销售团队会全程跟踪订单进度，定期向客户反馈生产状态，确保订单按时保质交付。
                  </p>
                </div>
                <div className="pt-2">
                  <Link href="/zh/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover">
                    咨询OEM定制
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
                  loading="lazy"
                  src="/images/buffing_wheels.webp"
                  alt="SCOTTCHEN抛光布轮厂家批发 - 硬质线布轮软布轮气道轮"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  批发参数
                </h3>
                <div className="space-y-4 text-xs font-mono">
                  <div><span className="text-industry-slate-500 block">MOQ：</span><span className="text-white font-bold">500件/款（标准品）</span></div>
                  <div><span className="text-industry-slate-500 block">交货期：</span><span className="text-white font-bold">标准品25-35天，OEM 30-40天</span></div>
                  <div><span className="text-industry-slate-500 block">包装：</span><span className="text-white font-bold">散装/彩盒/吸塑/插卡/定制</span></div>
                  <div><span className="text-industry-slate-500 block">付款方式：</span><span className="text-white font-bold">T/T 30%定金，70%见提单副本</span></div>
                  <div><span className="text-industry-slate-500 block">价格条款：</span><span className="text-white font-bold">FOB上海 / CIF / 门到门</span></div>
                  <div><span className="text-industry-slate-500 block">认证：</span><span className="text-white font-bold">ISO 9001:2015 / FEPA / ANSI</span></div>
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
            "@type": "ProductGroup",
            "@id": absoluteUrl("/zh/buffing-wheels#productgroup"),
            "name": "SCOTTCHEN抛光轮、抛光布轮、麻布轮、气道轮",
            "description": "上海抛光轮生产厂家，批发抛光布轮、麻布轮、气道轮、抛光磨头、抛光膏，MOQ 500件，OEM贴牌定制。",
            "url": absoluteUrl("/zh/buffing-wheels"),
            "brand": { "@type": "Brand", "name": "SCOTTCHEN" },
            "manufacturer": { "@id": absoluteUrl("/#organization") },
          }),
        }}
      />

      <CTASection />
    </div>
  );
}
