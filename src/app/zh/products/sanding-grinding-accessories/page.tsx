import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "OEM 砂纸、砂带与锆刚玉砂碟配件系列 | SCOTTCHEN",
  description: "批量采购砂纸张、网格砂网、纤维砂碟、细节打磨棒及砂卷盒装；生产来源、规格、证据和商业条款按SKU报价。",
  path: "/zh/products/sanding-grinding-accessories",
  alternatePath: "/products/sanding-grinding-accessories",
  locale: "zh-CN",
});

export default function ChineseSandingGrindingAccessories() {
  const subtypes = [
    {
      name: "干湿两用砂纸与纸砂卷",
      desc: "砂纸张、砂卷或分装方案的询价类别。材料、背基、粒度、尺寸、来源和适用性只有在对应 SKU 形成文件并批准后才成立。",
      features: [
        "询价字段：基材、工艺、工具、干湿使用和目标表面",
        "SKU 证据：磨粒、背基、尺寸、粒度体系和使用限制",
        "批准要求：来源文件、样品、包装规格和书面商业条款",
      ],
    },
    {
      name: "锆刚玉重切削纤维砂碟",
      desc: "纤维砂碟和磨片的采购场景。磨粒、结合剂、背基、孔径、转速等级和基材适配必须通过来源资料与样品批准。",
      features: [
        "询价字段：磨片类型、工具、直径、孔径、基材和切削目标",
        "安全证据：标示使用限制、追溯信息和适用文件",
        "商业范围：样品费、MOQ、交期、付款与 Incoterms 按项目报价",
      ],
    },
    {
      name: "防堵塞石膏板网格砂网",
      desc: "开放式网格研磨产品的询价类别。网格结构、涂层、尺寸、连接方式和除尘兼容性须按所选来源和 SKU 核验。",
      features: [
        "询价字段：表面、打磨方式、托具、除尘结构和目标粒度",
        "SKU 证据：网格材料、涂层、尺寸和标示使用限制",
        "批准要求：适配样品、包装规格和日期化报价",
      ],
    },
    {
      name: "精细塑料打磨棒 / 砂纸笔",
      desc: "窄位手工打磨工具与可替换磨料部件的规划类别。手柄、张紧结构、砂带尺寸和用途声明须由报价来源确认。",
      features: [
        "询价字段：工件、操作空间、磨料尺寸、粒度顺序和包装概念",
        "兼容批准：手柄、张紧结构和替换砂带配合通过样品确认",
        "零售范围：BOM、警示、版稿、条码数据和渠道责任形成文件",
      ],
    },
    {
      name: "金刚石与石材石材特殊磨片",
      desc: "风险较高的特殊磨料询价类别。任何适用性声明都应先明确结构、工具、基材、使用限制和适用合规证据。",
      features: [
        "询价字段：基材、工艺、工具、转速、冷却方式和目标表面",
        "SKU 证据：磨料结构、背基或芯体、尺寸和警示",
        "批准要求：来源身份、测试依据、样品结果和书面用途边界",
      ],
    },
    {
      name: "工坊砂卷组合分装架套装",
      desc: "贴牌包装询价场景，不是已批准的现货套装。砂卷数量、粒度组合、裁切结构、包装材料和渠道要求都属于 RFQ 输入。",
      features: [
        "BOM 批准：逐项确认组件来源、身份、数量和兼容性",
        "包装批准：刀模权属、裁切安全、版稿、警示和条码数据",
        "商业批准：样品、MOQ、交期、装量检验和 Incoterms",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top CTA Area */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            ariaLabel="面包屑导航"
            items={[
              { label: "首页", href: "/zh" },
              { label: "产品目录", href: "/zh/products" },
              { label: "砂纸与磨片配件", href: "/zh/products/sanding-grinding-accessories" },
            ]}
          />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">参数与 OEM 定制选项</span>
              <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
                砂纸、研磨与打磨耗材配件
              </h1>
              <p className="mt-3 text-base text-industry-slate-400">
                面向砂纸、磨片、网格砂网、细节工具和贴牌分装方案的采购询价。
              </p>
            </div>

            <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Link
                href="/zh/contact"
                className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-orange-hover hover:scale-[1.02] text-center"
              >
                获取磨料报价
              </Link>
              <Link
                href="/zh/sample-kit"
                className="inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-slate-750 text-center"
              >
                申领样品测试包
              </Link>
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
                <span className="text-[10px] font-mono font-bold tracking-widest text-industry-orange uppercase">采购指南</span>
                <h2 className="text-2xl font-black text-white mt-1">询价规格字段</h2>
                <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">
                  在把 SKU、样品或商业条款视为已批准之前，买家与来源方应共同形成文件的字段。
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>全目数覆盖:</strong> 干湿两用砂纸目数涵盖粗磨 P60 至超细镜面 P2500，可定制乳胶纸基或高强度抗撕扯布基底。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>重载金属抛磨碟:</strong> 锆刚玉硫化纤维钢纸砂碟可选 7/8&quot; 圆孔或星型中心孔；装配、最高转速与工具兼容性须按批准规格确认。</span>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>开放式网格:</strong> 玻纤双面涂覆碳化硅，开放结构有助于排出石膏粉尘并减少堵塞；实际集尘效果取决于设备和工况。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>起订量报价:</strong> 实际数量和交期按产品结构、尺寸、粒度组合、包装和订单数量报价。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Specs Section */}
      <section className="py-16 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Specification details */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  磨具研磨耗材技术结构说明
                </h2>
                
                <div className="space-y-8">
                  {subtypes.map((sub) => (
                    <div key={sub.name} className="glass-panel p-6 rounded-lg space-y-4">
                      <h3 className="text-lg font-bold text-industry-orange" id={sub.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}>
                        {sub.name}
                      </h3>
                      <p className="text-sm text-industry-slate-300 leading-relaxed">
                        {sub.desc}
                      </p>
                      <div className="border-t border-industry-slate-800/80 pt-4">
                        <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">报价技术参数:</span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-industry-slate-400 font-mono">
                          {sub.features.map((feat) => (
                            <li key={feat} className="flex items-center space-x-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-industry-orange" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Middle CTA */}
              <div className="bg-industry-slate-950 border border-industry-slate-800 p-8 rounded-lg text-center space-y-4">
                <h3 className="text-lg font-bold text-white uppercase">自撕盒装砂卷及零售混合挂卡</h3>
                <p className="text-sm text-industry-slate-400 max-w-lg mx-auto">
                  泡壳、纸卡或自撕彩盒可结合买家批准的包装资料和买家提供的条码数据进行评估；执行范围、样品扫码和平台责任应写入报价。
                </p>
                <div className="pt-2">
                  <Link
                    href="/zh/oem-private-label"
                    className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover"
                  >
                    配置专属包装与贴标参数
                  </Link>
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="space-y-4">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  磨料与砂纸规格对照表
                </h2>
                
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">耗材产品类别</th>
                        <th className="px-4 py-3 font-semibold uppercase">研磨材质</th>
                        <th className="px-4 py-3 font-semibold uppercase">目数规格范围</th>
                        <th className="px-4 py-3 font-semibold uppercase">背基基材</th>
                        <th className="px-4 py-3 font-semibold uppercase">起订量依据</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr>
                        <td className="px-4 py-3 font-bold">干湿两用砂纸张</td>
                        <td className="px-4 py-3">碳化硅 / 棕刚玉</td>
                        <td className="px-4 py-3">P60 至 P2500</td>
                        <td className="px-4 py-3">C-wt / J-wt 乳胶防水纸</td>
                        <td className="px-4 py-3">按SKU报价</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3 font-bold">锆刚玉纤维磨片</td>
                        <td className="px-4 py-3">锆刚玉磨料</td>
                        <td className="px-4 py-3">P36 至 P120</td>
                        <td className="px-4 py-3">0.8mm 厚硫化纤维板</td>
                        <td className="px-4 py-3">按SKU报价</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-bold">镂空墙面网格砂网</td>
                        <td className="px-4 py-3">碳化硅双面涂层</td>
                        <td className="px-4 py-3">P80 至 P240</td>
                        <td className="px-4 py-3">高拉力玻璃纤维网格</td>
                        <td className="px-4 py-3">按SKU报价</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3 font-bold">塑料精细打磨棒</td>
                        <td className="px-4 py-3">棕刚玉软带</td>
                        <td className="px-4 py-3">P80 至 P400</td>
                        <td className="px-4 py-3">弹性 ABS 打磨杆及柔性带</td>
                        <td className="px-4 py-3">按SKU报价</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-bold">金刚石研磨盘</td>
                        <td className="px-4 py-3">电镀高硬度金刚石</td>
                        <td className="px-4 py-3">P50 至 P3000</td>
                        <td className="px-4 py-3">拉扣自粘背胶 / 钢制核心</td>
                        <td className="px-4 py-3">按SKU报价</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Tensile Strength & Fracturing Specifications Table */}
              <div id="tensile-table" className="space-y-4 pt-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  按报价 SKU 核验的磨料背基证据字段
                </h2>
                <p className="text-xs text-industry-slate-400 leading-relaxed font-mono">
                  没有来源文件与准确 SKU 时，本页不公开任何机械数值作为产品承诺。采购方应向负责来源索取背基身份、测试方法、实测结果与批准证据。
                </p>
                
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">磨料背基类型</th>
                        <th className="px-4 py-3 font-semibold uppercase">应索取的规格</th>
                        <th className="px-4 py-3 font-semibold uppercase">测试方法</th>
                        <th className="px-4 py-3 font-semibold uppercase">结果状态</th>
                        <th className="px-4 py-3 font-semibold uppercase">放行证据</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr>
                        <td className="px-4 py-3 font-bold">硫化钢纸背基</td>
                        <td className="px-4 py-3">材料、厚度、来源与批次身份</td>
                        <td className="px-4 py-3">由来源文件与买家质量计划定义</td>
                        <td className="px-4 py-3">未公开；按 SKU 记录实测值</td>
                        <td className="px-4 py-3">批准规格、来源文件与样品记录</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3 font-bold">乳胶防水 C-wt 纸张</td>
                        <td className="px-4 py-3">纸重、处理、来源与湿用声明</td>
                        <td className="px-4 py-3">由来源文件与买家质量计划定义</td>
                        <td className="px-4 py-3">未公开；对照批准样品核验</td>
                        <td className="px-4 py-3">批准规格、测试记录与样品签字</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-bold">柔性 J-wt 棉布基</td>
                        <td className="px-4 py-3">布重、纤维成分、柔性与来源</td>
                        <td className="px-4 py-3">由来源文件与买家质量计划定义</td>
                        <td className="px-4 py-3">未公开；记录纵横向数据</td>
                        <td className="px-4 py-3">来源文件、接头/样品测试与批准</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3 font-bold">玻璃纤维网格</td>
                        <td className="px-4 py-3">网格、结合剂、磨粒、尺寸与来源</td>
                        <td className="px-4 py-3">由来源文件与买家质量计划定义</td>
                        <td className="px-4 py-3">未公开；记录强度与保持率方法</td>
                        <td className="px-4 py-3">批准规格、样品结果与放行记录</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Sourcing Side Panel */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="glass-panel rounded-lg overflow-hidden border border-industry-slate-800 shadow-xl relative">
                <img
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  src="/images/sanding_tools.webp"
                  alt="SCOTTCHEN 研磨砂纸配件"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              {/* Sourcing parameters */}
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  B2B 采购物流参数
                </h3>
                
                <div className="space-y-4 text-xs font-mono">
                  <div>
                    <span className="text-industry-slate-500 block">交货期:</span>
                    <span className="text-white font-bold">按材料、样品、包装、生产、验货和出运节点书面确认</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">混合装分配:</span>
                    <span className="text-white font-bold">支持4-5种目数组合装于印刷盒</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">自粘防滑机制:</span>
                    <span className="text-white font-bold leading-normal">可选自粘或拉扣背基；粘接强度、底盘适配和最高转速按规格确认。</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">交货港口与贸易术语:</span>
                    <span className="text-white font-bold leading-normal">起运地、目的地、生产来源、FOB/CIF或其他Incoterms、清关与仓库责任按每票货物书面报价。</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-industry-slate-850">
                  <Link
                    href="/zh/sample-kit"
                    className="w-full inline-flex justify-center items-center rounded border border-industry-orange text-industry-orange font-bold uppercase tracking-wider py-3 hover:bg-industry-orange hover:text-white transition-all text-xs"
                  >
                    申请大货目数样品
                  </Link>
                </div>
              </div>

              {/* Substrate list */}
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  打磨底材兼容性
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {["实木 / 软木板", "墙面抹灰石膏", "高硬度碳钢", "合金钢焊缝", "玻璃纤维", "精细瓷砖", "大理石 / 花岗岩", "水晶宝石 / 玻璃"].map((sub) => (
                    <span key={sub} className="bg-industry-slate-950 px-2 py-1 rounded text-industry-slate-400 border border-industry-slate-800">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  买家证据中心
                </h3>
                <p className="text-xs leading-relaxed text-industry-slate-300">
                  查看当前文件状态、核验边界，以及下达 B2B 订单前应索取的资料。
                </p>
                <Link href="/zh/evidence-center" className="text-xs font-bold text-industry-orange hover:underline">
                  查看买家证据 &rarr;
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Amazon Retail Store Showcase */}
      <section className="py-20 bg-industry-slate-900 border-t border-industry-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">外部零售链接</span>
            <h2 className="text-3xl font-extrabold text-white mt-3">亚马逊零售商品参考</h2>
            <p className="mt-4 text-sm text-industry-slate-400 max-w-2xl mx-auto leading-relaxed">
              仅作外部零售商品参考。卡片标题与说明只是对平台定位的概括，不证明 SCOTTCHEN 的 OEM 来源、当前可供性、规格、合规、品牌权利或性能；商品状态与价格由亚马逊管理。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "锆刚玉重载纤维打磨钢纸碟片",
                asin: "B0G3PWBTQ5",
                desc: "高强度树脂锆刚玉纤维碟片，专为大负荷金属焊缝打磨、表面去斑与强力去锈而设计。",
                url: "https://www.amazon.com/SCOTTCHEN-Zirconia-Sanding-Grinding-Fiberglass/dp/B0G3PWBTQ5/ref=sr_1_34?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/fiber_discs.webp"
              },
              {
                title: "特级干湿两用乳胶防水砂纸张",
                asin: "B0F4R3QBTD",
                desc: "优质碳化硅磨粒配合柔韧浸渍乳胶 C-wt 纸张背基，专用于汽车车身打磨、修整与镜面抛光。",
                url: "https://www.amazon.com/SCOTTCHEN-Sandpaper-Metalworking-Woodworker-Furniture/dp/B0F4R3QBTD/ref=sr_1_32?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/sanding_sheets.webp"
              },
              {
                title: "工作坊多卷装拉扣砂纸分配箱",
                asin: "B0CW65P854",
                desc: "5排装工业级砂纸卷盒，涵盖 P150 至 P400 常用目数，配有盒装防尘金属锯齿切割锋刃。",
                url: "https://www.amazon.com/SCOTTCHEN-Abrasive-Sanding-Dispenser-Finishing/dp/B0CW65P854/ref=sr_1_33?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/sanding_dispenser.webp"
              },
              {
                title: "粗中细混装重载纸基砂纸卷",
                asin: "B0CGKS2Z37",
                desc: "专业高抗拉强度干磨砂纸卷套组，专攻高转速木旋、金属打磨及手工拉丝成型。",
                url: "https://www.amazon.com/SCOTTCHEN-Sanding-Sandpaper-Woodworking-Furniture/dp/B0CGKS2Z37/ref=sr_1_2?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/sanding_sheets.webp"
              },
              {
                title: "16英寸大规格石膏板防堵塞砂网",
                asin: "B07HDZX5M9",
                desc: "碳化硅双面覆层玻璃纤维网格砂网，开放式编织有助于排灰，并可配合兼容的吸尘设备使用。",
                url: "https://www.amazon.com/Drywall-Sanding-Screen-16in-x-12pcs/dp/B07HDZX5M9/ref=sr_1_5?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/sanding_screens.webp"
              },
              {
                title: "管道工专用超柔高负荷砂布卷",
                asin: "B0D45B7591",
                desc: "180目高抗挠聚酯棉布基砂带卷，专用于黄铜管道焊前除污及铜管件细部除锈打磨。",
                url: "https://www.amazon.com/SCOTTCHEN-Plumbing-Plumbers-Aluminum-180-1Roll/dp/B0D45B7591/ref=sr_1_6?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/sanding_sheets.webp"
              },
              {
                title: "带定位吸尘孔的墙面打磨砂纸",
                asin: "B0C4TNHRWZ",
                desc: "带有多孔分布的网格自粘砂纸片，涵盖 P80 至 P150 目数；设备兼容性需按底盘尺寸和孔位确认。",
                url: "https://www.amazon.com/SCOTTCHEN-Drywall-include-Sanding-80%EF%BC%8C100%EF%BC%8C150/dp/B0C4TNHRWZ/ref=sr_1_8?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/sanding_screens.webp"
              },
              {
                title: "细节精细打磨弹簧张力砂棒套装",
                asin: "B07ZQZT1Q6",
                desc: "细节打磨抛光塑柄工具配超窄目数替换砂带，适于比例模型修缝、手办及珠宝雕刻。",
                url: "https://www.amazon.com/SCOTTCHEN-Sanding-Sticks-Matchsticks-Detailing/dp/B07ZQZT1Q6/ref=sr_1_9?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/detail_sanding.webp"
              },
              {
                title: "掌上电镀高硬度金刚石手擦片",
                asin: "B0F66QL77V",
                desc: "电镀高纯度金刚石颗粒，适合对超硬岩石、玉石宝石、石英石、玻璃及精细瓷砖边缘去毛刺。",
                url: "https://www.amazon.com/SCOTTCHEN-Grinding-Polishing-Gemstone-Porcelain/dp/B0F66QL77V/ref=sr_1_12?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/diamond_polishing.webp"
              },
              {
                title: "多功能人体工学手持打磨砂块组合",
                asin: "B0CMXGQ8R3",
                desc: "高回弹硬质发泡手磨砂纸托，为汽车钣金修补与木器精细抛光提供均匀稳定的受力面。",
                url: "https://www.amazon.com/SCOTTCHEN-Multi-Use-Woodworking-Restoration-Automotive/dp/B0CMXGQ8R3/ref=sr_1_23?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/sanding_sheets.webp"
              },
              {
                title: "金刚石波段碗型砂轮打磨轮片",
                asin: "B08BFHBTCP",
                desc: "超重载波浪双排金刚石磨碗，专用于花岗岩、混凝土、大理石墙角磨削与边缘整平。",
                url: "https://www.amazon.com/Diamond-Grinding-Abrasive-Sanding-Granite/dp/B08BFHBTCP/ref=sr_1_25?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/diamond_polishing.webp"
              },
              {
                title: "真空钎焊金刚石圆角封边磨盘",
                asin: "B08BF8MZC1",
                desc: "高浓度钎焊金刚石磨盘，专用于石材台面、大理石及石英板材的半圆或罗马圆角封边打磨。",
                url: "https://www.amazon.com/Diamond-Grinding-Abrasive-Sanding-Granite/dp/B08BF8MZC1/ref=sr_1_27?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/diamond_polishing.webp"
              }
            ].map((prod) => (
              <div key={prod.asin} className="glass-panel rounded-lg overflow-hidden flex flex-col justify-between hover:border-industry-slate-700 transition-colors group">
                <div className="h-40 w-full overflow-hidden relative bg-industry-slate-950 border-b border-industry-slate-850">
                  <img
                    width={1024}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                    src={prod.img}
                    alt={prod.title}
                    className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-300 opacity-80"
                  />
                  <span className="absolute top-2 left-2 text-[9px] font-mono bg-industry-orange/20 text-industry-orange border border-industry-orange/30 px-1.5 py-0.5 rounded font-bold">
                    ASIN: {prod.asin}
                  </span>
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4 text-left">
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-white leading-snug">{prod.title}</h3>
                    <p className="text-xs text-industry-slate-400 leading-relaxed line-clamp-3">
                      {prod.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-industry-slate-850">
                    <a
                      href={prod.url}
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="w-full inline-flex justify-center items-center rounded bg-industry-orange py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover transition-colors text-center"
                    >
                      在亚马逊购买 &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-industry-slate-950 border-t border-industry-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">采购 FAQ 解答</span>
            <h2 className="text-3xl font-extrabold text-white mt-3">磨具研磨耗材技术常见问题</h2>
            <p className="mt-4 text-sm text-industry-slate-400">
              面向跨境商、实体采购渠道整理的粒度选择、基材纸重及交货安排等技术答疑。
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "SCOTTCHEN 砂纸张提供哪些背基纸重和基材材质？",
                a: "请在询价中写明干湿用途、工具、压力、目标表面与期望背基。纸重、纤维、处理、耐湿强度、粘接与工具适用性须由报价来源按准确 SKU 提供证据并通过代表性样品确认；本页不发布固定可供背基。"
              },
              {
                q: "为什么在墙面打磨时推荐碳化硅网格砂网，而不是普通氧化铝砂纸？",
                a: "碳化硅磨粒与开放式玻璃纤维网格组合可让石膏或腻子粉尘穿过网面，有助于减少表面堵塞。配合匹配的吸尘打磨设备可改善集尘效果，但不能视为无尘，结果取决于设备、密封和操作条件。"
              },
              {
                q: "纤维磨片支持哪些中心定位孔形式？有哪些加固措施？",
                a: "常见询价可讨论不同直径、圆孔或星型中心，但准确尺寸、背基、厚度、孔型、标示工作限制和工具兼容性必须由报价 SKU、来源文件和样品批准确认；本页不承诺固定规格可供。"
              },
              {
                q: "砂纸卷可以按照我们设计的彩盒样式进行多目数混合定制么？",
                a: "可按目标场景询价多粒度砂卷分装盒。粒度、裁切结构、印刷、买家提供的条码数据、样品扫码和渠道责任必须写入批准包装规格与报价，不能由网站保证直接上市。"
              },
              {
                q: "塑料精细打磨棒与备用砂带的最小起订量 (MOQ) 是多少？",
                a: "细节打磨棒的组件来源、握杆、砂带数量、粒度组合、包装、起订量和交期按具体 SKU 书面报价；本页不设固定起订数字。"
              }
            ].map((faq, idx) => (
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
                "@type": "CollectionPage",
                "@id": absoluteUrl("/zh/products/sanding-grinding-accessories#catalog"),
                "name": "研磨与打磨配件 RFQ 采购目录",
                "description": "用于询价规划的磨料配件结构参考；准确磨粒、背基、尺寸、使用限制、可供范围与条款须由带日期的 SKU 报价和批准证据确认。",
                "url": absoluteUrl("/zh/products/sanding-grinding-accessories"),
                "image": absoluteUrl("/images/sanding_tools.webp"),
                "isPartOf": { "@id": absoluteUrl("/#website") }
              }
            ]
          })
        }}
      />

      {/* Persistent CTA Banner */}
      <CTASection />
    </div>
  );
}
