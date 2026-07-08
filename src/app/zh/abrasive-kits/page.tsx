import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "磨具套装批发_抛光工具套装贴牌_砂磨套装OEM定制_SCOTTCHEN",
  description: "专业磨具套装OEM厂家，提供抛光轮套装、砂纸套装、磨头套装、DIY五金工具组合套装，零售包装，FBA贴标，支持自有品牌定制。",
  path: "/zh/abrasive-kits",
  locale: "zh-CN",
  alternatePath: "/abrasive-kits",
});

export default function ZhAbrasiveKitsPage() {
  const kits = [
    {
      name: "抛光轮套装（含抛光膏）",
      desc: "抛光轮套装是面向金属抛光DIY用户和小型加工厂的完整抛光解决方案，通常包含不同硬度的布轮（硬质线布轮、软质漂白布轮、麻布轮）+多种颜色抛光膏（黑膏、红膏、白膏、绿膏）+内孔适配器垫圈+连接杆/心轴，一套即可完成从粗抛到镜面的完整抛光工序。套装规格分为6寸/8寸台式砂轮机款（3轮+3-4支抛光膏）和手电钻款。所有套装可配精美的彩盒或吸塑卡包装，印有使用说明和粒度/颜色指南（Polishing Compound Chart），非常适合五金零售、Amazon电商、礼品渠道销售。",
      included: ["3-8个抛光轮（麻轮/硬布轮/软布轮/法兰绒）", "3-4支抛光膏（黑/红/白/绿）", "内孔适配器（1/2\"、5/8\"、3/4\"）", "连接杆/心轴（手电钻款）", "彩盒/吸塑卡零售包装"],
    },
    {
      name: "砂纸碟片组合套装",
      desc: "砂纸碟片组合套装将多种粒度的植绒砂纸片/圆形砂纸盘打包在一起，为木工、汽车钣喷、DIY用户提供从粗磨到细磨的一整套砂纸解决方案。常见组合为5寸/6寸8孔植绒砂纸片，包含P40/P60/P80/P120/P220/P320/P400/P600/P800等多种粒度，每种粒度5-10片，共50-100片装，采用透明盖分配器塑料盒或彩盒包装，方便用户收纳和按顺序取用。套装可搭配泡沫缓冲垫、托盘等配件。这类套装在Amazon/Ebay/Shopify等电商平台非常热销，我司支持定制粒度组合、包装设计、品牌印刷。",
      included: ["多粒度组合（P40-P800或更细）", "植绒/背胶两种可选", "可选配海绵缓冲垫/托盘", "分配器盒/可重复封口包装", "含粒度参考指南卡"],
    },
    {
      name: "汽车轮毂抛光套装",
      desc: "汽车轮毂抛光套装是针对汽车美容、轮毂翻新店铺和DIY车主开发的专用抛光套装，包含手电钻安装的多种形状带柄抛光磨头（锥形、蘑菇形、圆柱形、伞形、圆顶形）+大型气道轮或软布轮+铝合金/铬面专用抛光膏（白蜡/紫蜡/蓝蜡）+1/4\"六角柄连接杆+超细纤维毛巾+分步使用指南。套装可处理轮毂整个表面、辐条间隙、螺丝孔周围等细节部位，去除氧化层、划痕、水渍，恢复铝轮毂镜面光泽。该套装是汽车后市场热销产品，在Amazon、汽车用品连锁店销量极高。我司可按客户需求定制套装组件，包装精美，支持FBA贴标。",
      included: ["带柄抛光磨头（锥形/蘑菇/圆柱/伞形/圆顶）", "大型气道轮/软布轮", "铝/铬专用抛光膏（白/紫/蓝）", "1/4\"六角柄连接杆/心轴", "超细纤维毛巾+分步指南"],
    },
    {
      name: "首饰抛光套装",
      desc: "首饰抛光套装是面向珠宝加工作坊、首饰设计师、手工爱好者和珠宝维修店的小型精密抛光套装，包含小直径棉布轮、绒布轮、毛毡磨头、毛刷轮和红膏（Rouge）、白膏（White Rouge）等首饰专用抛光膏，适配吊磨机、Dremel等旋转工具（1/8\"或3/32\"柄径）。套装通常包装在带隔层的精美塑料收纳盒或小木盒中，分类清晰、方便收纳。首饰抛光套装在珠宝供应链、工艺品店、Amazon手工类别、礼品渠道非常受欢迎。我司可定制套装配置，使用优质棉布和进口抛光膏配方，也可在包装盒上定制客户品牌。",
      included: ["1/8\"或3/32\"柄毛毡/棉布磨头", "小直径棉布轮/绒布轮", "红膏（Rouge）+白膏首饰抛光蜡", "心轴和转接杆", "带隔层塑料盒/木盒包装"],
    },
    {
      name: "电钻抛光配件套装",
      desc: "电钻抛光配件套装是一款万能型DIY工具配件套装，可让任何普通手电钻/充电钻变身抛光、打磨、清洁多用工具。套装包含8-30件配件：各种形状带柄布轮、毛毡抛光轮、砂纸圈、砂鼓、尼龙磨头、钢丝刷、抛光膏、心轴和接杆等，适配1/4\"六角柄夹头，用于金属抛光、汽车细节美容、镀铬件翻新、家庭DIY修复、除锈去毛刺等多种用途。这类套装包装在坚固的手提塑料工具箱或吸塑插卡中，是五金店、礼品店、电商平台的经典畅销产品。我司提供丰富的配件组合和定制工具箱包装服务。",
      included: ["8-30件带柄抛光/打磨/清洁配件", "1/4\"六角柄心轴和接杆", "多支抛光膏（不同颜色）", "羊毛/毛毡抛光垫（镜面用）", "手提塑料箱/吸塑卡零售包装"],
    },
    {
      name: "磨刀砂带套装",
      desc: "磨刀砂带套装为制刀工匠、刀匠工作室、刀具打磨爱好者提供完整的2×72刀磨机或其他规格磨刀机用砂带组合。套装通常包含陶瓷砂带（P36-P80粗磨开V）、锆刚玉带（P80-P220中磨成型）、氧化带（P220-P600细磨）、碳化硅带（P800-P2000精磨），有些还包含皮革 stropping 镜面带上光带。砂带套装通常按粒度从粗到细6-12条装一筒，使用纸筒或硬纸盒包装，印有粒度进度参考表。我司提供2×72、1×30、2×42等各种规格制刀砂带套装定制，支持使用Vsm、Hermes等进口砂布制作高端套装，也可提供国产性价比版本。",
      included: ["2×72等规格多粒度砂带（P36-P2000）", "陶瓷/锆刚玉/AO/SiC组合", "可选皮革strop镜面带", "含粒度进度参考指南", "品牌纸筒/硬纸盒包装"],
    },
    {
      name: "多功能DIY磨具套装",
      desc: "多功能DIY磨具套装是面向家庭DIY用户、新房主、礼品渠道的综合型大套装，将砂纸、砂纸片、切割片、百叶片、抛光轮、抛光膏、带柄磨头等多种磨具产品组合在一个坚固的手提工具箱中，内含定制泡沫内衬将每一件产品固定到位，开箱体验极佳。这类套装覆盖了家庭维护、车库工坊、DIY制作最常用的研磨抛光耗材，是礼品市场（圣诞节/父亲节礼物）、会员店（Costco/Sam's Club类）、五金促销套装的理想产品。套装组件可完全按客户要求和价格定位定制，我司可协助开发套装BOM（物料清单）并完成全部采购组装。",
      included: ["砂纸/砂纸片/砂带组合", "角磨机用切割片+百叶片", "抛光轮+抛光膏", "电钻配件+心轴", "坚固塑料手提箱+定制泡沫内衬"],
    },
  ];

  const packaging = [
    { type: "彩盒包装（Color Box）", desc: "最常见的零售包装形式，可全彩印刷品牌Logo、产品图片、多语言描述、功能卖点、条形码、安全警告。适合各类套装产品和电商销售。" },
    { type: "吸卡/插卡包装（Blister Card）", desc: "吸塑泡壳+纸卡包装，带有挂孔可挂在货架挂钩上，是五金连锁店（Home Depot/Lowe's类）的主流包装形式，展示性好。" },
    { type: "翻盖吸塑（Clamshell）", desc: "两片对合式吸塑包装，全透明展示产品，防盗性好，适合小件套装和单件零售包装。" },
    { type: "塑料手提箱（Plastic Carry Case）", desc: "坚固耐用的PP塑料工具箱，带金属搭扣和手柄，内部可配定制EVA泡沫内衬固定每件产品，适合高端DIY大套装和礼品渠道。" },
    { type: "木盒/铁盒（Wood/Tin Box）", desc: "高端包装形式，适合首饰抛光套装、礼品套装、限量版套装，外观精美、质感强，提升产品档次。" },
    { type: "收缩膜/桶装（Shrink/Tub）", desc: "经济型批量包装，适用于分销商和工业用户散装供货，也可做透明塑料桶+标签的半零售包装形式。" },
  ];

  const faqs = [
    {
      q: "磨具套装/抛光套装贴牌MOQ是多少？",
      a: "标准磨具套装和抛光套装（使用现有模具和包装形式）MOQ为500套/款。需要新开模具的定制塑料箱、特殊形状吸塑、定制模切彩盒等，根据包装供应商起订量要求，MOQ一般为1000套/款。使用我司已开模的标准工具箱和通用包装尺寸的套装可以保持500套的MOQ。我们也提供混柜计划（Mixed Container Program），允许批发商在一个集装箱内组合多款不同套装SKU，满足多SKU少量库存的需求。" },
    {
      q: "可以定制磨具套装的内容组合吗？",
      a: "完全可以。SCOTTCHEN专业提供磨具套装和抛光工具套装的定制组装服务，可根据您的目标市场和BOM清单（物料清单）完全定制套装内容——您可以任意组合我们自产的抛光轮、砂纸片、百叶片、砂带、切割片、抛光膏、带柄磨头等产品，也可以加入非磨具类配件（超细纤维毛巾、安全护目镜、手套、连接杆、心轴、说明书等）。我们可根据您的目标零售价位推荐最优的产品配置方案，并提供详细的FOB报价和样品确认。" },
    {
      q: "你们提供哪些零售包装形式？",
      a: "我们提供全面的零售包装选择：①彩盒——全彩印刷、挂孔、展示窗可选；②吸卡/插卡（Blister Card）——带挂孔，适合五金店货架挂装销售；③翻盖吸塑（Clamshell）——全透明展示防盗；④热收缩膜捆装；⑤坚固塑料手提箱（带定制EVA泡沫内衬）；⑥木盒/铁盒（高端礼品套装）；⑦纸筒/桶装。所有包装均可印刷您的品牌Logo、产品图片、多语言描述、卖点说明、安全警告，以及UPC/FNSKU条码。对于没有完成包装设计的客户，我们可提供包装设计和美工服务。" },
    {
      q: "你们能做Amazon FBA贴标代发吗？",
      a: "完全可以。SCOTTCHEN在为Amazon等电商卖家准备FBA订单方面经验丰富。我们的FBA预备服务包括：按Amazon要求贴塑料袋（必要时贴防窒息警告标签）；在每个可售单元上贴FNSKU条码；纸箱内容标签、纸箱重量尺寸标签；按Amazon最新FBA包装和预备要求装箱打包。对符合条件的套装产品，我们还可以提供Amazon SIOC（Ships in Own Container，原箱发货）免亚马逊额外包装认证方案。我们可以从工厂直接发往美国、欧洲、英国、日本等各站点的亚马逊运营中心，也可发往您指定的第三方预备仓库。" },
    {
      q: "磨具套装生产组装需要多长时间？",
      a: "标准磨具套装（使用现有包装和常规产品）的生产组装周期为订单确认和样品批准后30-40天，包括套装内各磨具组件的生产、包装材料印刷和生产、组装车间Kitting组装、质量检验和纸箱打包。使用新开模具（如定制注塑塑料箱、复杂模切彩盒）的套装，生产周期可能延长至45-55天。紧急零售旺季上架的加急订单，可根据实际情况协商优先排产。我们的标准样品准备周期为10-15天。" },
    {
      q: "客户可以在套装中放入自己品牌的物料吗？",
      a: "可以。我们可以将客户提供的品牌物料装入套装中，例如说明书、保修卡、营销插页、产品目录、折扣卡或其他促销物品。客户可以将印刷物料直接发货到我们工厂，也可以委托我们在国内印制您的物料。我们还负责在定制泡沫内衬或模塑托盘中安排各产品的位置和固定方式，确保客户打开套装时的开箱体验专业完美。如有具体的插页物料或开箱体验（Unboxing Experience）要求，请与销售团队沟通讨论，我们会为您量身定制。" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "首页", href: "/zh" }, { label: "磨具套装", href: "/zh/abrasive-kits" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">B2B套装贴牌 · FBA零售包装</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              磨具套装批发_抛光工具套装贴牌_砂磨套装OEM定制
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              SCOTTCHEN专业磨具套装OEM厂家，提供抛光轮套装（含抛光膏）、砂纸碟片组合套装、汽车轮毂抛光套装、首饰抛光套装、电钻抛光配件套装、磨刀砂带套装、多功能DIY磨具套装等，零售级彩盒/吸塑/工具箱包装，FBA贴标，支持自有品牌定制，MOQ 500套起。
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link href="/zh/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-orange-hover hover:scale-[1.02] text-center">
              获取报价
            </Link>
            <Link href="/zh/sample-kit" className="inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-slate-750 text-center">
              申请样品套装
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
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">套/款起订</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">零售包装</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">彩盒/吸塑/工具箱</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">FBA贴标</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">直发亚马逊仓</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">定制组合</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">按BOM组装</div>
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
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">磨具套装OEM代工</span>
                <h2 className="text-2xl font-extrabold text-white tracking-wide">
                  SCOTTCHEN — 专业磨具套装OEM厂家，抛光/砂磨/DIY工具套装贴牌定制
                </h2>
                <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                  <p>
                    SCOTTCHEN专业为全球经销商、电商卖家、工具品牌、五金连锁、零售自有品牌项目提供磨具套装OEM代工和抛光工具套装贴牌组装服务。作为磨具套装厂家，我们核心优势是自产所有主要磨具产品——抛光轮、砂纸片、百叶片、砂带、切割片、抛光膏、带柄磨头，实现磨具套装核心组件的自产自控，对产品质量、价格和交期拥有完全控制权。这种垂直整合能力让我们在为客户提供高性价比组装套装的同时，保持对套装内每一件产品质量的严格把控。
                  </p>
                  <p>
                    我们的套装组装（Kitting & Assembly）服务远不止把产品装进盒子那么简单。我们与客户共同设计最适合目标市场的套装配置方案——无论是面向汽车爱好者的汽车轮毂抛光套装、面向刀匠的磨刀砂带套装、面向DIY消费者的通用电钻抛光套装，还是面向木工的砂纸片多粒度套装，我们都会根据客户的销售渠道（零售货架、Amazon电商、经销商目录或促销礼品渠道）选择合适的磨料粒度组合、配件配置和包装形式。
                  </p>
                  <p>
                    所有磨具套装的组装、质检和包装均在SCOTTCHEN上海ISO 9001认证工厂完成，每一套都按照经过客户确认的物料清单组装，装箱前进行外观检验，并按客户要求贴标。我们在为Amazon FBA电商客户准备套装产品方面经验丰富，包括FNSKU条码贴标、聚袋预备、防窒息警告、纸箱标签和SIOC认证原箱包装。无论您是准备新推出自有品牌套装产品线，还是扩展现有产品系列，我们的工程和包装团队都能从产品概念开发到大货生产全程支持。
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  磨具套装&抛光套装产品类型
                </h2>
                <div className="space-y-6">
                  {kits.map((kit) => (
                    <div key={kit.name} className="glass-panel p-6 rounded-lg space-y-4 border border-industry-slate-800">
                      <h3 className="text-lg font-bold text-industry-orange">{kit.name}</h3>
                      <p className="text-sm text-industry-slate-300 leading-relaxed">{kit.desc}</p>
                      <div className="border-t border-industry-slate-800/80 pt-4">
                        <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">套装包含：</span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-industry-slate-400 font-mono">
                          {kit.included.map((item) => (
                            <li key={item} className="flex items-center space-x-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-industry-orange shrink-0" />
                              <span>{item}</span>
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
                  零售包装形式
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {packaging.map((p) => (
                    <div key={p.type} className="glass-panel p-5 rounded-lg border border-industry-slate-800">
                      <h3 className="text-sm font-bold text-industry-orange mb-2">{p.type}</h3>
                      <p className="text-xs text-industry-slate-400 leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  为什么选择我们做磨具套装OEM
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "零售级精美包装", desc: "彩盒、吸卡、翻盖吸塑、塑料手提箱、木盒、铁盒多种包装选择，带挂孔、展示窗和全彩印刷，开箱即上架。" },
                    { title: "完全定制组合", desc: "按客户BOM任意组合套装内容——可混合任何磨具产品、配件和非磨具物品，灵活满足不同市场需求。" },
                    { title: "自有品牌印刷", desc: "包装上直接印刷您的品牌Logo、产品图片、多语言描述、功能卖点和安全警告，打造独立品牌形象。" },
                    { title: "FBA代发服务", desc: "提供完整FBA预备服务：FNSKU条码、聚袋、防窒息标签、纸箱标签、SIOC认证包装，直发Amazon各站点仓库。" },
                    { title: "核心组件自产", desc: "抛光轮、砂纸片、砂带、百叶片、切割片、抛光膏全部自产，质量统一可控，价格有竞争力。" },
                    { title: "营销物料支持", desc: "提供高清产品摄影图、场景图、A+页面文案、视频素材，助力客户Amazon listing和市场推广。" },
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
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">套装定制流程</span>
                <h2 className="text-xl font-extrabold text-white">磨具套装OEM贴牌工作流程</h2>
                <div className="text-sm text-industry-slate-300 leading-relaxed space-y-4">
                  <p>
                    磨具套装自有品牌开发流程从客户的产品概念和目标市场开始。我们与您讨论目标用户群、销售渠道、价位、偏好的套装内容、包装形式和品牌方向，然后由团队提出包含BOM物料清单、包装设计稿和详细报价（含模具费、单价、MOQ、交期）的套装方案。
                  </p>
                  <p>
                    报价确认并支付定金后，我们生产带客户品牌和包装的产前样品供您确认。样品阶段让您实际评估套装实物、测试产品性能、检查包装印刷质量，在大货生产前提出任何调整要求。只有在收到客户书面样品批准后才开始大货生产，确保最终产品完全符合客户规格。
                  </p>
                  <p>
                    生产期间，所有磨具组件在我司工厂按批准规格生产，包装材料完成印刷和制作，组装车间经过培训的组装人员按照详细作业指导书进行套装组装。每一套装箱前都经过目视检验。FBA订单我们会按Amazon要求贴FNSKU标签并预备纸箱。我们也可以安排客户的其他SCOTTCHEN产品在同一集装箱内合并发货，降低物流成本。
                  </p>
                </div>
                <div className="pt-2">
                  <Link href="/zh/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover">
                    启动您的品牌套装项目
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
                  src="/images/hero_abrasives_kit.webp"
                  alt="SCOTTCHEN磨具套装批发 - 抛光套装砂纸套装五金工具套装贴牌"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  套装参数
                </h3>
                <div className="space-y-4 text-xs font-mono">
                  <div><span className="text-industry-slate-500 block">MOQ：</span><span className="text-white font-bold">500套/款</span></div>
                  <div><span className="text-industry-slate-500 block">交期：</span><span className="text-white font-bold">标准30-40天（定制箱45-55天）</span></div>
                  <div><span className="text-industry-slate-500 block">包装：</span><span className="text-white font-bold">彩盒/吸塑/插卡/翻盖/塑料箱/木盒/铁盒</span></div>
                  <div><span className="text-industry-slate-500 block">FBA服务：</span><span className="text-white font-bold">FNSKU贴标、聚袋、SIOC包装</span></div>
                  <div><span className="text-industry-slate-500 block">设计：</span><span className="text-white font-bold">提供包装设计和美工服务</span></div>
                </div>
                <div className="pt-4 border-t border-industry-slate-850">
                  <Link href="/zh/sample-kit" className="w-full inline-flex justify-center items-center rounded border border-industry-orange text-industry-orange font-bold uppercase tracking-wider py-3 hover:bg-industry-orange hover:text-white transition-all text-xs">
                    申请样品套装
                  </Link>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  相关产品分类
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/zh/buffing-wheels" className="text-industry-orange hover:underline">抛光轮/布轮/麻布轮</Link></li>
                  <li><Link href="/zh/sanding-discs" className="text-industry-orange hover:underline">砂纸片/砂碟</Link></li>
                  <li><Link href="/zh/flap-discs" className="text-industry-orange hover:underline">百叶片/百叶轮</Link></li>
                  <li><Link href="/zh/sanding-belts" className="text-industry-orange hover:underline">砂带/环形砂带</Link></li>
                  <li><Link href="/zh/cutting-wheels" className="text-industry-orange hover:underline">切割片/砂轮片</Link></li>
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
            "@id": absoluteUrl("/zh/abrasive-kits#productgroup"),
            "name": "SCOTTCHEN磨具套装、抛光工具套装、砂磨套装",
            "description": "专业磨具套装OEM厂家，抛光轮套装、砂纸套装、DIY五金工具组合套装，零售包装，FBA贴标，MOQ 500套起。",
            "url": absoluteUrl("/zh/abrasive-kits"),
            "brand": { "@type": "Brand", "name": "SCOTTCHEN" },
            "manufacturer": { "@id": absoluteUrl("/#organization") },
          }),
        }}
      />

      <CTASection />
    </div>
  );
}
