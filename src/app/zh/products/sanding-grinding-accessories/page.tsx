import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "OEM 砂纸、砂带与锆刚玉砂碟配件系列 | SCOTTCHEN",
  description: "批量采购标准砂纸张、防堵塞碳化硅网格砂网、高切削力锆刚玉纤维砂碟、精细打磨砂纸棒及定制砂带盒装。支持低起订量贴牌服务。",
  alternates: {
    canonical: "https://www.scottchentools.com/zh/products/sanding-grinding-accessories",
    languages: {
      "en": "https://www.scottchentools.com/products/sanding-grinding-accessories",
      "zh-CN": "https://www.scottchentools.com/zh/products/sanding-grinding-accessories",
      "x-default": "https://www.scottchentools.com/products/sanding-grinding-accessories",
    },
  },
};

export default function ChineseSandingGrindingAccessories() {
  const subtypes = [
    {
      name: "干湿两用砂纸与纸砂卷",
      desc: "工业级碳化硅（适用于汽车喷漆前湿磨）和棕刚玉（适用于木工打磨）。提供预裁切的捆装砂纸张，以及可配合分装盒拉撕的连续纸砂卷卷装。",
      features: [
        "目数范围: P60, P80, P120, P150, P180, P240, P320, P400, P600, P800, P1000",
        "标准尺寸: 9\" x 11\" 砂纸张, 2\" 至 4.5\" 宽度砂卷",
        "底纸基材: C-wt 乳胶抗水底纸，或高韧性 J-wt 软布基",
      ],
    },
    {
      name: "锆刚玉重切削纤维砂碟",
      desc: "高品质锆刚玉磨粒，通过高强度树脂牢固粘接于厚质钢纸（硫化纤维）基体上。专为高转速焊缝打磨、强力去毛刺、除锈以及碳钢、合金钢坡口精整而设计。",
      features: [
        "标准规格: 4.5\" (115mm), 5\" (125mm), 7\" (180mm) 外径",
        "中心孔径: 7/8\" (22.23mm) 圆孔或十字花心定位星型孔",
        "采购起订: 单规格目数 2,000 张起订",
      ],
    },
    {
      name: "防堵塞石膏板网格砂网",
      desc: "双面涂覆优质碳化硅磨料的玻璃纤维网格底材。网状镂空结构能在墙面批灰打磨和石膏板抚平时彻底避免积粉堵塞，完美适配带吸尘孔的打磨机。",
      features: [
        "网格基材: 高抗拉强度玻璃纤维网格",
        "目数配置: P80, P120, P150, P180, P220",
        "交货规格: 9x11 砂纸尺寸, 3.25\" x 11\" 手磨板尺寸或定制卷装",
      ],
    },
    {
      name: "精细塑料打磨棒 / 砂纸笔",
      desc: "配有弹簧张力机构的硬质塑料精细打磨棒，可自由更换超细目数环形砂带。适用于拼装比例模型、珠宝精抛、模具精整等轨道砂光机无法触及的窄缝狭角。",
      features: [
        "砂带宽度: 1/4\" (6.35mm), 1/2\" (12.7mm) 规格",
        "张力结构: 弹簧锁紧式塑料打磨杆",
        "零售包装: 多目数混合套装（1杆 + 每种目数各5条砂带），跨境电商直接零售",
      ],
    },
    {
      name: "金刚石与石材石材特殊磨片",
      desc: "高硬度电镀金刚石磨盘与软性橡胶背板。专门用于高硬度瓷砖、抛光砖、花岗岩、大理石、玉石玻璃等材料的崩边修整、边缘抛光与坡口打磨。",
      features: [
        "目数范围: 50, 100, 200, 400, 800, 1500, 3000 目",
        "粘接方式: 强力拉扣魔术贴（自粘式）或钢芯磨盘",
        "适用底材: 花岗岩、石英石、大理石、瓷砖、玉石及玻璃",
      ],
    },
    {
      name: "工坊砂卷组合分装架套装",
      desc: "适合工坊与零售货架展示的组合方案。配备钢制或厚硬纸板制的分装架，预装 4 到 5 卷不同目数的自撕砂卷。可快速撕取所需长度而不会把整卷弄乱。",
      features: [
        "砂卷数量: 4卷装与5卷装可选组合",
        "定制外包装: 印刷专属私有品牌标志，带金属自断切口瓦楞彩盒",
        "适合客群: 五金工具店、汽修工坊收纳整理货架",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top CTA Area */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">参数与 OEM 定制选项</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              砂纸、研磨与打磨耗材配件
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              大货批发抗水砂纸、锆刚玉钢纸砂碟、防堵塞网格砂布以及工坊自撕砂带卷架套装。
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
      </section>

      {/* Key Takeaways / B2B Quick Facts */}
      <section className="py-8 bg-industry-slate-900 border-b border-industry-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-industry-slate-800 bg-industry-slate-950/40 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="md:w-1/3">
                <span className="text-[10px] font-mono font-bold tracking-widest text-industry-orange uppercase">采购指南</span>
                <h2 className="text-2xl font-black text-white mt-1">磨料研磨性能参数</h2>
                <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">
                  为大批量采购商整理的技术参数、基材强度以及包装起订量说明。
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
                    <span className="text-industry-slate-200"><strong>重载金属抛磨碟:</strong> 锆刚玉硫化纤维钢纸砂碟配 7/8&quot; 星型花心定位中心孔，无震偏无偏心，安全贴合角磨机。</span>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>防塞镂空网格:</strong> 玻纤双面涂覆优质碳化硅，石膏粉尘自空隙瞬间排出，彻底避免热量积聚与耗材堵塞失效。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>采购参数:</strong> 砂纸 10,000 张起订，纤维砂碟 5,000 张起订，混合砂纸架或细节打磨笔 1,000 套起。交期 20-30 天。</span>
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
                        <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">出厂技术规格能力:</span>
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
                  我们在包装线上提供直接贴合跨境电商标准的泡壳热缩、纸卡以及印刷自撕彩盒，保证 FNSKU 条码清晰可扫。
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
                        <th className="px-4 py-3 font-semibold uppercase">B2B 大货起订量</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr>
                        <td className="px-4 py-3 font-bold">干湿两用砂纸张</td>
                        <td className="px-4 py-3">碳化硅 / 棕刚玉</td>
                        <td className="px-4 py-3">P60 至 P2500</td>
                        <td className="px-4 py-3">C-wt / J-wt 乳胶防水纸</td>
                        <td className="px-4 py-3">10,000 张</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3 font-bold">锆刚玉纤维磨片</td>
                        <td className="px-4 py-3">锆刚玉磨料</td>
                        <td className="px-4 py-3">P36 至 P120</td>
                        <td className="px-4 py-3">0.8mm 厚硫化纤维板</td>
                        <td className="px-4 py-3">5,000 张</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-bold">镂空墙面网格砂网</td>
                        <td className="px-4 py-3">碳化硅双面涂层</td>
                        <td className="px-4 py-3">P80 至 P240</td>
                        <td className="px-4 py-3">高拉力玻璃纤维网格</td>
                        <td className="px-4 py-3">5,000 张</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3 font-bold">塑料精细打磨棒</td>
                        <td className="px-4 py-3">棕刚玉软带</td>
                        <td className="px-4 py-3">P80 至 P400</td>
                        <td className="px-4 py-3">弹性 ABS 打磨杆及柔性带</td>
                        <td className="px-4 py-3">1,000 套</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-bold">金刚石研磨盘</td>
                        <td className="px-4 py-3">电镀高硬度金刚石</td>
                        <td className="px-4 py-3">P50 至 P3000</td>
                        <td className="px-4 py-3">拉扣自粘背胶 / 钢制核心</td>
                        <td className="px-4 py-3">500 个</td>
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
                  src="/images/sanding_tools.png"
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
                    <span className="text-industry-slate-500 block">常规交货期:</span>
                    <span className="text-white font-bold">20 - 30 个自然日</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">混合装分配:</span>
                    <span className="text-white font-bold">支持4-5种目数组合装于印刷盒</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">自粘防滑机制:</span>
                    <span className="text-white font-bold leading-normal">砂纸纸张可选自粘拉扣魔术贴，确保高速打磨不位移。</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">交货港口与贸易术语:</span>
                    <span className="text-white font-bold leading-normal">临近上海港/宁波港出货。支持 FOB、CIF 港口，或直接双清空海运派送到 FBA 仓库。</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-industry-slate-850">
                  <Link
                    href="/zh/sample-kit"
                    className="w-full inline-flex justify-center items-center rounded border border-industry-orange text-industry-orange font-bold uppercase tracking-wider py-3 hover:bg-industry-orange hover:text-white transition-all text-xs"
                  >
                    免费获取大货目数样品
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

              {/* YouTube Shorts Demo Links */}
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  视频展示与工作流
                </h3>
                <ul className="space-y-4 text-xs">
                  <li>
                    <a 
                      href="https://www.youtube.com/hashtag/scottchen" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-industry-orange font-bold hover:underline block"
                    >
                      YouTube 视频演示: #AF-03 &rarr;
                    </a>
                    <span className="text-industry-slate-300 block mt-1">锆刚玉重载磨碟在 15 秒内瞬间拉平 10mm 钢梁粗糙焊缝。</span>
                  </li>
                  <li>
                    <a 
                      href="https://www.youtube.com/hashtag/scottchen" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-industry-orange font-bold hover:underline block"
                    >
                      YouTube 视频演示: #AF-04 &rarr;
                    </a>
                    <span className="text-industry-slate-300 block mt-1">精细塑料砂纸笔对 ABS 模型极细凹槽进行无损合缝线打磨。</span>
                  </li>
                </ul>
              </div>

            </div>

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
                a: "我们为手磨、精细打磨砂纸提供 C-weight 涂油乳胶纸背基（在水磨湿磨时泡水不软烂、不脱砂）；为机械砂光机使用的纸卷则提供高抗拉力 J-weight 聚酯软布基，确保高速摩擦打磨或异形曲面研磨时不发生撕裂。"
              },
              {
                q: "为什么在墙面打磨时推荐碳化硅网格砂网，而不是普通氧化铝砂纸？",
                a: "碳化硅矿砂硬度极高且带有天然自锐性，能够保持平整切削。而镂空的玻璃纤维网格底材则允许打磨产生的石膏或腻子粉尘直接漏出，不积存在表面，彻底解决堵塞失效问题，配合吸尘打磨手板能实现无尘绿色施工。"
              },
              {
                q: "纤维磨片支持哪些中心定位孔形式？有哪些加固措施？",
                a: "锆刚玉硫化纸磨盘拥有 4.5\"、5\" 及 7\" 标准外径，配备 standard 7/8&quot; (22.23mm) 中心定位孔。采购商可选择圆形平面孔或带十字星型切口定位心。整个碟片选用 0.8mm 高韧硫化钢纸做底基，在重负荷打磨去毛刺时提供稳固支撑。"
              },
              {
                q: "砂纸卷可以按照我们设计的彩盒样式进行多目数混合定制么？",
                a: "可以。我们为五金渠道与亚马逊卖家提供极具零售竞争力的砂卷分装架彩盒定制。您可以根据目标场景混合 4 到 5 种特定目数卷（如 P150, P240, P320, P400），装入配有自断裁切齿的彩色瓦楞印刷盒内，直接贴条码上市发售。"
              },
              {
                q: "塑料精细打磨棒与备用砂带的最小起订量 (MOQ) 是多少？",
                a: "我们精细弹簧张力塑料磨棒套装的起订量为 1,000 套。标准零售套装包含 1 支高韧性弹簧定位塑料握杆和混合 15 条环形软砂布带（涵盖不同目数）。我们支持整套挂卡或吸塑彩色纸盒包装定制。"
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
                "@type": "ProductGroup",
                "@id": "https://www.scottchentools.com/zh/products/sanding-grinding-accessories#productgroup",
                "name": "SCOTTCHEN 研磨、打磨及砂纸配件大货产品目录",
                "description": "工业级抛磨耗材，包含乳胶防水干湿两用砂纸、玻璃纤维网格墙面砂网、高切削锆刚玉纤维钢纸磨片及细节塑料砂带笔。",
                "url": "https://www.scottchentools.com/zh/products/sanding-grinding-accessories",
                "brand": {
                  "@type": "Brand",
                  "name": "SCOTTCHEN"
                },
                "manufacturer": {
                  "@type": "Organization",
                  "name": "SCOTTCHEN"
                },
                "hasVariant": [
                  {
                    "@type": "Product",
                    "name": "干湿两用乳胶纸基砂纸片",
                    "description": "高品质碳化硅磨粒贴附于 C-weight 乳胶纸基上，适合汽车车漆打磨与湿抛光。",
                    "sku": "SC-SANDPAPER-SHEETS-ZH",
                    "offers": {
                      "@type": "AggregateOffer",
                      "priceCurrency": "USD",
                      "lowPrice": "0.12",
                      "highPrice": "0.35",
                      "offerCount": "12"
                    }
                  },
                  {
                    "@type": "Product",
                    "name": "锆刚玉硫化纤维钢纸磨片",
                    "description": "重负荷焊缝粗磨及除锈锆刚玉砂盘，带 7/8 英寸十字中心定位星型定位盘。",
                    "sku": "SC-ZIRCONIA-DISCS-ZH",
                    "offers": {
                      "@type": "AggregateOffer",
                      "priceCurrency": "USD",
                      "lowPrice": "0.22",
                      "highPrice": "0.85",
                      "offerCount": "8"
                    }
                  },
                  {
                    "@type": "Product",
                    "name": "防堵塞墙面石膏板网格镂空砂网",
                    "description": "双面涂覆优质碳化硅的镂空网格砂片，专为石膏板大面积抹灰批灰除粉吸尘设计。",
                    "sku": "SC-DRYWALL-MESH-ZH",
                    "offers": {
                      "@type": "AggregateOffer",
                      "priceCurrency": "USD",
                      "lowPrice": "0.15",
                      "highPrice": "0.45",
                      "offerCount": "6"
                    }
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://www.scottchentools.com/zh/products/sanding-grinding-accessories#faqpage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "SCOTTCHEN 砂纸张提供哪些背基纸重和基材材质？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "我们为手磨、精细打磨砂纸提供 C-weight 涂油乳胶纸背基（在水磨湿磨时泡水不软烂、不脱砂）；为机械砂光机使用的纸卷则提供高抗拉力 J-weight 聚酯软布基，确保高速摩擦打磨或异形曲面研磨时不发生撕裂。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "为什么在墙面打磨时推荐碳化硅网格砂网，而不是普通氧化铝砂纸？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "碳化硅矿砂硬度极高且带有天然自锐性，能够保持平整切削。而镂空的玻璃纤维网格底材则允许打磨产生的石膏或腻子粉尘直接漏出，不积存在表面，彻底解决堵塞失效问题，配合吸尘打磨手板能实现无尘绿色施工。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "纤维磨片支持哪些中心定位孔形式？有哪些加固措施？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "锆刚玉硫化纸磨盘拥有 4.5\"、5\" 及 7\" 标准外径，配备 standard 7/8&quot; (22.23mm) 中心定位孔。采购商可选择圆形平面孔或带十字星型切口定位心。整个碟片选用 0.8mm 高韧硫化钢纸做底基，在重负荷打磨去毛刺时提供稳固支撑。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "砂纸卷可以按照我们设计的彩盒样式进行多目数混合定制么？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "可以。我们为五金渠道与亚马逊卖家提供极具零售竞争力的砂卷分装架彩盒定制。您可以根据目标场景混合 4 到 5 种特定目数卷（如 P150, P240, P320, P400），装入配有自断裁切齿的彩色瓦楞印刷盒内，直接贴条码上市发售。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "塑料精细打磨棒与备用砂带的最小起订量 (MOQ) 是多少？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "我们精细弹簧张力塑料磨棒套装的起订量为 1,000 套。标准零售套装包含 1 支高韧性弹簧定位塑料握杆和混合 15 条环形软砂布带（涵盖不同目数）。我们支持整套挂卡或吸塑彩色纸盒包装定制。"
                    }
                  }
                ]
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
