import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "OEM 砂纸、砂带与锆刚玉砂碟配件系列 | SCOTTCHEN",
  description: "批量采购标准砂纸张、防堵塞碳化硅网格砂网、高切削力锆刚玉纤维砂碟、精细打磨砂纸棒及定制砂带盒装。支持低起订量贴牌服务。",
  path: "/zh/products/sanding-grinding-accessories",
  alternatePath: "/products/sanding-grinding-accessories",
  locale: "zh-CN",
});

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
      desc: "双面涂覆碳化硅磨料的玻璃纤维网格底材。开放式结构有助于墙面批灰和石膏板打磨时排灰并减少堵塞，设备兼容性需按尺寸与孔位确认。",
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
                  可按买家确认的包装资料制作泡壳热缩、纸卡及印刷自撕彩盒，并在出货前对 FNSKU 条码进行扫描抽检。
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

              {/* Tensile Strength & Fracturing Specifications Table */}
              <div id="tensile-table" className="space-y-4 pt-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  砂带与磨片背基抗拉强度与磨粒附着力规格表
                </h2>
                <p className="text-xs text-industry-slate-400 leading-relaxed font-mono">
                  针对工业磨削大负荷作业环境，背基基材必须承受巨大的剪切与机械拉力负荷，避免磨料崩裂及脱砂失效：
                </p>
                
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">磨料背基类型</th>
                        <th className="px-4 py-3 font-semibold uppercase">基础材料规格</th>
                        <th className="px-4 py-3 font-semibold uppercase">纵向抗拉强度 (N/50mm)</th>
                        <th className="px-4 py-3 font-semibold uppercase">横向抗拉强度 (N/50mm)</th>
                        <th className="px-4 py-3 font-semibold uppercase">背胶强度与颗粒受载极限</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr>
                        <td className="px-4 py-3 font-bold">硫化钢纸背基</td>
                        <td className="px-4 py-3">0.8 毫米高密度硫化纯棉纤维板</td>
                        <td className="px-4 py-3">&ge; 1,050 N / 50mm</td>
                        <td className="px-4 py-3">&ge; 750 N / 50mm</td>
                        <td className="px-4 py-3">双层酚醛树脂粘结 / 锆刚玉颗粒受压微崩自锐点 &ge; 120 N</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3 font-bold">乳胶防水 C-wt 纸张</td>
                        <td className="px-4 py-3">140 g/m&sup2; 特级浸渍乳胶防水纸基</td>
                        <td className="px-4 py-3">&ge; 350 N / 50mm</td>
                        <td className="px-4 py-3">&ge; 220 N / 50mm</td>
                        <td className="px-4 py-3">超韧双覆背胶 / 碳化硅微崩针锐自洁特性</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-bold">柔性 J-wt 棉布基</td>
                        <td className="px-4 py-3">180 g/m&sup2; 高抗挠聚酯棉布混纺</td>
                        <td className="px-4 py-3">&ge; 820 N / 50mm</td>
                        <td className="px-4 py-3">&ge; 480 N / 50mm</td>
                        <td className="px-4 py-3">混合柔性动物胶加高韧树脂粘结 / 棕刚玉颗粒渐进式损耗控制</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3 font-bold">玻璃纤维网格</td>
                        <td className="px-4 py-3">110 g/m&sup2; 无碱玻璃纤维镂空扣织网</td>
                        <td className="px-4 py-3">&ge; 450 N / 50mm</td>
                        <td className="px-4 py-3">&ge; 400 N / 50mm</td>
                        <td className="px-4 py-3">酚醛树脂耐高温涂覆 / 碳化硅磨粒高附着保持率 &ge; 98%</td>
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
                    <span className="text-industry-slate-500 block">常规交货期:</span>
                    <span className="text-white font-bold">20 - 30 个自然日</span>
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
                    <span className="text-white font-bold leading-normal">临近上海港/宁波港出货。支持 FOB、CIF 港口，或直接双清空海运派送到 FBA 仓库。</span>
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
                  现有零售产品参考
                </h3>
                <p className="text-xs leading-relaxed text-industry-slate-300">
                  可先查看 SCOTTCHEN 现有零售产品，了解砂纸、磨片和工具包的常见组合，再提交 B2B 定制要求。
                </p>
                <a href="https://scottchen.online" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-industry-orange hover:underline">
                  查看 SCOTTCHEN 零售产品站 &rarr;
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Amazon Retail Store Showcase */}
      <section className="py-20 bg-industry-slate-900 border-t border-industry-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">亚马逊零售样品直达</span>
            <h2 className="text-3xl font-extrabold text-white mt-3">亚马逊零售商品参考</h2>
            <p className="mt-4 text-sm text-industry-slate-400 max-w-2xl mx-auto leading-relaxed">
              下方为部分亚马逊零售商品链接，可用于了解现有产品形式。库存、价格、卖家状态和 Prime 资格均由亚马逊平台管理，可能随时变化。
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
                a: "可提供用于手工湿磨的 C-weight 乳胶纸背基，以及用于曲面或机械打磨的柔性布基选项。耐水性、抗拉强度、粘接和工具适用性需按批准规格及样品测试确认。"
              },
              {
                q: "为什么在墙面打磨时推荐碳化硅网格砂网，而不是普通氧化铝砂纸？",
                a: "碳化硅磨粒与开放式玻璃纤维网格组合可让石膏或腻子粉尘穿过网面，有助于减少表面堵塞。配合匹配的吸尘打磨设备可改善集尘效果，但不能视为无尘，结果取决于设备、密封和操作条件。"
              },
              {
                q: "纤维磨片支持哪些中心定位孔形式？有哪些加固措施？",
                a: "锆刚玉硫化纸磨盘拥有 4.5\"、5\" 及 7\" 标准外径，配备 7/8\" (22.23mm) 中心定位孔。采购商可选择圆形平面孔或带十字星型切口定位心。背基材质、厚度、标示工作限制和工具兼容性必须写入批准规格。"
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
                "@id": absoluteUrl("/zh/products/sanding-grinding-accessories#productgroup"),
                "name": "SCOTTCHEN 研磨、打磨及砂纸配件大货产品目录",
                "description": "工业级抛磨耗材，包含乳胶防水干湿两用砂纸、玻璃纤维网格墙面砂网、高切削锆刚玉纤维钢纸磨片及细节塑料砂带笔。",
                "url": absoluteUrl("/zh/products/sanding-grinding-accessories"),
                "image": absoluteUrl("/images/sanding_tools.webp"),
                "brand": {
                  "@type": "Brand",
                  "name": "SCOTTCHEN"
                },
                "manufacturer": {
                  "@id": absoluteUrl("/#organization")
                },
                "category": "砂纸、研磨砂碟及打磨配件套装",
                "material": "碳化硅、氧化铝、锆刚玉、玻璃纤维网格、乳胶纸基、硫化纤维及布基",
                "additionalProperty": [
                  {
                    "@type": "PropertyValue",
                    "name": "起订量依据",
                    "value": "砂纸 10,000 张、纤维砂碟 5,000 张、混合砂纸架或细节打磨笔 1,000 套；实际数量和交期按 SKU 报价"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "规格控制项",
                    "value": "磨粒类型、FEPA P 目数范围、基材、尺寸、中心孔、连接方式和包装数量"
                  }
                ],
                "hasVariant": [
                  {
                    "@type": "Product",
                    "name": "干湿两用乳胶纸基砂纸片",
                    "description": "高品质碳化硅磨粒贴附于 C-weight 乳胶纸基上，适合汽车车漆打磨与湿抛光。",
                    "sku": "SC-SANDPAPER-SHEETS-ZH",
                    "manufacturer": {
                      "@id": absoluteUrl("/#organization")
                    },
                    "material": "碳化硅磨粒配 C-weight 乳胶纸基"
                  },
                  {
                    "@type": "Product",
                    "name": "锆刚玉硫化纤维钢纸磨片",
                    "description": "重负荷焊缝粗磨及除锈锆刚玉砂盘，带 7/8 英寸十字中心定位星型定位盘。",
                    "sku": "SC-ZIRCONIA-DISCS-ZH",
                    "manufacturer": {
                      "@id": absoluteUrl("/#organization")
                    },
                    "material": "锆刚玉磨粒配硫化纤维基材",
                    "additionalProperty": [
                      { "@type": "PropertyValue", "name": "中心孔", "value": "7/8 英寸星型中心定位孔" },
                      { "@type": "PropertyValue", "name": "起订量依据", "value": "按尺寸、粒度、背基、包装和订单数量报价" }
                    ]
                  },
                  {
                    "@type": "Product",
                    "name": "防堵塞墙面石膏板网格镂空砂网",
                    "description": "双面涂覆优质碳化硅的镂空网格砂片，专为石膏板大面积抹灰批灰除粉吸尘设计。",
                    "sku": "SC-DRYWALL-MESH-ZH",
                    "manufacturer": {
                      "@id": absoluteUrl("/#organization")
                    },
                    "material": "双面碳化硅涂覆玻璃纤维网格"
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
