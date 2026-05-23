import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "工业棉布轮、气道抛光轮及抛光膏 OEM 厂家 | SCOTTCHEN",
  description: "定制高密度密缝线缝布轮、松缝 flannel 镜面轮、ベンチグラインダー 台式砂轮机棉轮、带柄迷你布轮及精细抛光膏。支持 MOQ 500，出厂物理公差 &plusmn;0.05 mm 严控。",
  alternates: {
    canonical: "https://www.scottchentools.com/zh/products/buffing-polishing-wheels",
    languages: {
      "en": "https://www.scottchentools.com/products/buffing-polishing-wheels",
      "zh-CN": "https://www.scottchentools.com/zh/products/buffing-polishing-wheels",
      "x-default": "https://www.scottchentools.com/products/buffing-polishing-wheels",
    },
  },
};

export default function ChineseBuffingPolishingWheels() {
  const subtypes = [
    {
      name: "同心圆密缝棉线抛光布轮 (Spiral Stitched)",
      desc: "使用高强力棉线进行同心圆缝线锁边。大幅增加了布轮表面的切削硬度，适合配合粗抛光蜡进行粗抛、除锈、拉丝与表面初级精饰。是黄铜、不锈钢和粗糙铝材切削打磨的首选。",
      features: ["层数可调: 30 Ply, 40 Ply, 50 Ply, 60 Ply 层缝线棉轮", "线圈间距: 标准 3/8英寸 或超密 1/4英寸 间距缝线", "孔径规格: 支持 1/2\", 5/8\", 3/4\", 1\" 中心纸管或塑料法兰圈"],
    },
    {
      name: "松缝黄/白 flannel 镜面色彩抛光轮",
      desc: "多层 100% 精梳软毛 flannel 叠合，仅围绕中心孔进行同心车线固定。布轮边缘呈自然蓬松状，能在高转速下完全散开，配合绿铬镜面抛光膏（青棒）可完美呈现极其细腻的金属镜面反光及上色（Coloring）效果，避免灼烧涂层。",
      features: ["选料工艺: 100% 细柔绒毛精梳纯棉 flannel 织物", "缝制手法: 仅轴心一圈车线固定，边缘全松缝呈现", "适用材质: 珠宝饰品精饰、汽车轮毂最终上色、高光亚克力/有机树脂"],
    },
    {
      name: "台磨机超厚缝线棉轮 (Bench Grinder Buffs)",
      desc: "为标准 6英寸 与 8英寸 台式砂轮机/抛光机设计的超厚棉布轮。能够承受强力打磨压力不变形，双线踩边设计，可防织物高速飞边或纤维松脱，极大提升生产安全性。",
      features: ["产品直径: 6英寸 (150mm), 8英寸 (200mm), 10英寸 (250mm)", "叠层厚度: 1/2英寸 到 2.5英寸 夹层叠加厚度均可定制", "轴孔衬板: 提供钢板扣法兰、金属加强圈及伸缩套套管组合"],
    },
    {
      name: "带柄圆顶及圆柱迷你布轮 (Mounted Buffs)",
      desc: "配备 1/4\" 金属固定柄的圆顶、圆柱、圆锥和蘑菇形抛光布轮。专门用于手电钻及冲击批打磨，针对深孔、轮毂内凹死角、排气管管道及不规则曲面提供优异的通过性与去氧化能力。",
      features: ["适配手柄: 1/4&quot; (6.35mm) 标准六角快装柄或圆形不锈钢接柄", "外观形态: 提供 T型布碟、圆柱形、圆锥形、圆顶形、蘑菇形", "MOQ 要求: 单一器形 1,000 件起批，或定制整套多形态彩盒"],
    },
    {
      name: "彩色抛光蜡 / 抛光膏条装系列 (Compound Bars)",
      desc: "高品质研磨切削油脂，按粗细级级区分：绿蜡（铬绿高光氧化铬镜面）、白蜡（硬质不锈钢最终光泽）、红蜡（红 Tripoli 铜铝中抛切削）、黑蜡（Emery 强力金属去锈去氧化）。",
      features: ["单条克重: 100g, 250g, 500g 封塑防潮纸盒标签定制", "基础基质: 高等级动物脂肪与天然硬石蜡粘合基质", "安全贴标: 封塑热收缩贴条码，满足直接零售货架要求"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">参数规格与定制说明</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              工业棉布轮与抛光轮系列
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              高密度工业纯棉缝线布轮、镜面绒布轮、台式砂轮机厚棉轮、电钻迷你打磨轮及专属色标抛光膏。
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/zh/contact"
              className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-orange-hover hover:scale-[1.02] text-center"
            >
              获取抛光轮定制报价
            </Link>
            <Link
              href="/zh/sample-kit"
              className="inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-slate-750 text-center"
            >
              免费申请打样样品包
            </Link>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-8 bg-industry-slate-900 border-b border-industry-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-industry-slate-800 bg-industry-slate-950/40 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="md:w-1/3">
                <span className="text-[10px] font-mono font-bold tracking-widest text-industry-orange uppercase">核心指标</span>
                <h2 className="text-2xl font-black text-white mt-1">抛光布轮定制细节</h2>
                <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">
                  为工业买家汇总的叠层、中心孔和抛光辅料核心工艺参数。
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>叠层与厚度控制:</strong> 直径从 3英寸 到 10英寸，厚度层数提供 30 Ply 到 80 Ply，依据重力切削和镜面还原要求精细定制。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>柔性轴心接头:</strong> 标准 1/2&quot;, 5/8&quot;, 3/4&quot;, 1&quot; 伸缩管轴孔。针对手电钻提供快速卡入的 1/4&quot; 六角铁柄接头。</span>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>抛光膏适配协同:</strong> 定制克重的固体抛光蜡条（绿铬高光蜡、白镜面蜡、红 Tripoli 中抛蜡、黑 Emery 去氧化粗蜡），防潮塑封标。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>批量起订与货运:</strong> 棉轮单规格 500 件起，带柄电钻磨头 1,000 件起，25-35 天快速批量制造，免费打样评估。</span>
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
                  产品子类别及 B2B 核心参数
                </h2>
                
                <div className="space-y-8">
                  {subtypes.map((sub) => (
                    <div key={sub.name} className="glass-panel p-6 rounded-lg space-y-4">
                      <h3 className="text-lg font-bold text-industry-orange">{sub.name}</h3>
                      <p className="text-sm text-industry-slate-300 leading-relaxed">
                        {sub.desc}
                      </p>
                      <div className="border-t border-industry-slate-800/80 pt-4">
                        <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">可定制参数范畴:</span>
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
                <h3 className="text-lg font-bold text-white uppercase">寻找磨料抛光套装的专属品牌定制与扫码合规？</h3>
                <p className="text-sm text-industry-slate-400 max-w-lg mx-auto">
                  我们为跨境电商卖家提供布轮目数、夹心孔径的自由组合，提供全彩版面吸塑纸卡或牛皮外箱设计，并在每套出厂产品贴附 FNSKU/UPC 条形码。
                </p>
                <div className="pt-2">
                  <Link
                    href="/zh/oem-private-label"
                    className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover"
                  >
                    配置我们的专属包装解决方案
                  </Link>
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div id="spec-table" className="space-y-4">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  标准抛光轮尺寸与中心轴孔孔径规格表
                </h2>
                
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">标准外径</th>
                        <th className="px-4 py-3 font-semibold uppercase">布轮厚度层数 (Ply)</th>
                        <th className="px-4 py-3 font-semibold uppercase">中心孔孔径选项 (Arbor ID)</th>
                        <th className="px-4 py-3 font-semibold uppercase">同心缝线间距 (Stitch)</th>
                        <th className="px-4 py-3 font-semibold uppercase">标准批量起订量 (MOQ)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr>
                        <td className="px-4 py-3">3&quot; (75mm)</td>
                        <td className="px-4 py-3">30 Ply / 40 Ply</td>
                        <td className="px-4 py-3">1/4&quot; 六角接柄快速换合</td>
                        <td className="px-4 py-3">3/8&quot; (9.5mm)</td>
                        <td className="px-4 py-3">1,000 件起</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3">4&quot; (100mm)</td>
                        <td className="px-4 py-3">30 Ply / 40 Ply</td>
                        <td className="px-4 py-3">3/8&quot;, 1/2&quot;</td>
                        <td className="px-4 py-3">3/8&quot; 或 1/4&quot; 间距</td>
                        <td className="px-4 py-3">1,000 件起</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">6&quot; (150mm)</td>
                        <td className="px-4 py-3">40 Ply / 50 Ply / 60 Ply</td>
                        <td className="px-4 py-3">1/2&quot;, 5/8&quot;</td>
                        <td className="px-4 py-3">3/8&quot;, 1/4&quot;, 1/8&quot;（折叠气道轮）</td>
                        <td className="px-4 py-3">500 件起</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3">8&quot; (200mm)</td>
                        <td className="px-4 py-3">40 Ply / 50 Ply / 60 Ply</td>
                        <td className="px-4 py-3">5/8&quot;, 3/4&quot;, 1&quot;</td>
                        <td className="px-4 py-3">3/8&quot; 或 1/4&quot; 间距</td>
                        <td className="px-4 py-3">500 件起</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">10&quot; (250mm)</td>
                        <td className="px-4 py-3">50 Ply / 60 Ply / 80 Ply</td>
                        <td className="px-4 py-3">5/8&quot;, 3/4&quot;, 1&quot;, 1-1/4&quot;</td>
                        <td className="px-4 py-3">3/8&quot; 或 1/4&quot; 间距</td>
                        <td className="px-4 py-3">300 件起</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Material Density & Thread Specifications Table */}
              <div id="density-table" className="space-y-4 pt-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  棉纤维经纬密度与缝线针距技术参数表
                </h2>
                <p className="text-xs text-industry-slate-400 leading-relaxed font-mono">
                  针对不同金属的打磨与精抛表面精饰要求，SCOTTCHEN 精细调配经纬纱支线数与表面缝合间距：
                </p>
                
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">纯棉材质等级</th>
                        <th className="px-4 py-3 font-semibold uppercase">经纬纱支密度</th>
                        <th className="px-4 py-3 font-semibold uppercase">车缝线规格</th>
                        <th className="px-4 py-3 font-semibold uppercase">同心缝线间距</th>
                        <th className="px-4 py-3 font-semibold uppercase">目标加工应用</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr>
                        <td className="px-4 py-3 font-bold">特级天然无漂白纯棉布</td>
                        <td className="px-4 py-3">21s / 21s (84 x 72 股/英寸)</td>
                        <td className="px-4 py-3">32s / 2股 普梳纯棉车缝线</td>
                        <td className="px-4 py-3">1/4&quot; (6.35 毫米) 密缝同心圆</td>
                        <td className="px-4 py-3">铜件/不锈钢件重载粗抛与拉丝</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3 font-bold">细柔黄 flannel 双面绒布</td>
                        <td className="px-4 py-3">32s / 32s (100 x 80 股/英寸)</td>
                        <td className="px-4 py-3">21s / 2股 柔性车缝线</td>
                        <td className="px-4 py-3">3/8&quot; (9.53 毫米) 宽缝同心圆</td>
                        <td className="px-4 py-3">汽车漆面清漆层镜面抛光及高光提亮</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-bold">剑麻棉线混织强化层</td>
                        <td className="px-4 py-3">10s / 10s 粗支重磅帆布织造</td>
                        <td className="px-4 py-3">40s / 3股 高强防割尼龙芯缝线</td>
                        <td className="px-4 py-3">1/8&quot; (3.18 毫米) 超致密连锁交织</td>
                        <td className="px-4 py-3">铸铁件焊缝整平与强力去毛刺</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3 font-bold">特柔白 open-fold 镜面绒布</td>
                        <td className="px-4 py-3">40s / 40s (120 x 100 股/英寸)</td>
                        <td className="px-4 py-3">16s / 2股 无捻超柔纯棉线</td>
                        <td className="px-4 py-3">无车线 (自然层叠松装版型)</td>
                        <td className="px-4 py-3">高档珠宝与贵金属镜面上色提亮</td>
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
                  src="/images/buffing_wheels.png"
                  alt="SCOTTCHEN 抛光棉轮与麻轮系列"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              {/* Sourcing parameters */}
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  B2B 采购与货运政策
                </h3>
                
                <div className="space-y-4 text-xs font-mono">
                  <div>
                    <span className="text-industry-slate-500 block">生产周期:</span>
                    <span className="text-white font-bold">25 - 35 天（开单确认设计稿后）</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">免费样品政策:</span>
                    <span className="text-white font-bold">免费样品评估包（买家付国际空运快递费）</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">高等级用料挑选:</span>
                    <span className="text-white font-bold leading-normal">100% 工业级天然棉线，特柔黄/白绒布，多层防崩丝折边帆布。</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">轴心加强盘:</span>
                    <span className="text-white font-bold leading-normal">高强力卡扣钢板盘、梯级防震中心塑料垫圈或金属垫圈支撑。</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-industry-slate-850">
                  <Link
                    href="/zh/sample-kit"
                    className="w-full inline-flex justify-center items-center rounded border border-industry-orange text-industry-orange font-bold uppercase tracking-wider py-3 hover:bg-industry-orange hover:text-white transition-all text-xs"
                  >
                    在线申请打样物理样品
                  </Link>
                </div>
              </div>

              {/* Substrate Compatibility */}
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  抛光金属及材料兼容性
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {["不锈钢", "铝合金", "铜件 / 黄铜", "碳钢", "亚克力 / 有机玻璃", "镀铬装饰件", "木器表面精饰"].map((sub) => (
                    <span key={sub} className="bg-industry-slate-950 px-2 py-1 rounded text-industry-slate-400 border border-industry-slate-800">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* YouTube Shorts Demo Links */}
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  工作视频实机演示
                </h3>
                <ul className="space-y-4 text-xs">
                  <li>
                    <a 
                      href="https://www.youtube.com/hashtag/scottchen" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-industry-orange font-bold hover:underline block"
                    >
                      手电钻抛光头测试: #AF-01 &rarr;
                    </a>
                    <span className="text-industry-slate-300 block mt-1">迷你带柄布轮在 30 秒内去除汽车轮毂深槽中沉积的氧化层。</span>
                  </li>
                  <li>
                    <a 
                      href="https://www.youtube.com/hashtag/scottchen" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-industry-orange font-bold hover:underline block"
                    >
                      黄铜上色抛光: #AF-02 &rarr;
                    </a>
                    <span className="text-industry-slate-300 block mt-1">松缝黄布轮配合白蜡，对铜饰件进行最终高反光镜面上色。</span>
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
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">技术答疑 & 采购指引</span>
            <h2 className="text-3xl font-extrabold text-white mt-3">常见问题解答</h2>
            <p className="mt-4 text-sm text-industry-slate-400">
              面向采购商关于棉轮缝线工艺、磨料选择、货架合规及样机测试包的深度答疑。
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Spiral Stitched（密缝）棉线布轮和 Loose Flannel（松缝绒布）轮有什么本质区别？",
                a: "密缝布轮在表面进行一圈圈致密的缝线，使得布轮在高压打磨时保持极高的硬度与挺度，具备较强的磨削力，适合中粗加工和金属拉丝；而松缝绒布轮仅在中心轴孔有一圈车线，绒布层自然向外撑开，质地极软，适合精抛上色和实现无划痕镜面反光。"
              },
              {
                q: "如何合理匹配不同的抛光轮与抛光膏颜色？",
                a: "若要粗切削金属去斑去锈，使用密缝布轮配合黑 Emery 砂蜡；中度切削和拉丝黄铜使用红 Tripoli 蜡；若要对不锈钢和一般钢件进行镜面还原，使用白蜡配合密缝棉轮；若要对铝材或高级铜饰品进行无痕镜面色彩提亮，使用绿蜡配合松缝 flannel 绒布轮。"
              },
              {
                q: "你们提供用于台磨机和手电钻的轴套和转接铁杆吗？",
                a: "提供。我们的台磨机超厚棉布轮内配伸缩轴套，兼容 1/2英寸、5/8英寸、3/4英寸、1英寸的砂轮机轴。针对手电钻，所有的 Mounted 迷你抛光布轮出厂均焊接有 1/4&quot; 六角铁柄或圆柄，动平衡校正极佳，保障高转速电钻操作安全。"
              },
              {
                q: "你们对零售货架包装提供哪些合规支持？",
                a: "我们可以按买家图纸制作全套双面透明泡壳吸卡、悬挂彩色卡纸袋和定制加强瓦楞硬纸彩盒。所有包装均可以印制您的品牌、多国安全警示文字及 300DPI 极速识别 FNSKU/UPC 条形码贴标，直接达到海外各大超市和亚马逊 FBA 入仓要求。"
              },
              {
                q: "样品包的寄送流程是怎样的？",
                a: "对于经过商户资质认证的工具品牌商和五金分销商，样品本身的材料是完全免费的。您只需要在线提交申领，选择您需要的直径、厚度层数及配蜡克重。快递费（DHL/FedEx）由买家自理，但在您正式签订第一笔货柜合同时，该样品快递费将 100% 予以扣减返还。"
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

      {/* Combined Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ProductGroup",
                "@id": "https://www.scottchentools.com/zh/products/buffing-polishing-wheels#productgroup",
                "name": "SCOTTCHEN 工业级抛光轮及棉布轮规格目录",
                "description": "专业出口纯棉密缝布轮、松缝黄 flannel 绒布轮、带柄迷你打磨轮及多规格固体抛光蜡条。专为金属打磨、镜面色彩还原及五金分销商定制设计。",
                "url": "https://www.scottchentools.com/zh/products/buffing-polishing-wheels",
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
                    "name": "Spiral Stitched Cotton Buffing Wheel (密缝棉布轮)",
                    "description": "密缝线缝，高硬度大打磨力，适于金属拉丝及去锈。",
                    "sku": "SC-SPIRAL-COTTON-ZH",
                    "offers": {
                      "@type": "AggregateOffer",
                      "priceCurrency": "USD",
                      "lowPrice": "1.10",
                      "highPrice": "4.50",
                      "offerCount": "15"
                    }
                  },
                  {
                    "@type": "Product",
                    "name": "Loose Cotton Flannel Coloring Wheel (松缝 flannel 绒布轮)",
                    "description": "特柔松缝，在高速下自然撑开，适于极高亮镜面上色及精细打磨。",
                    "sku": "SC-LOOSE-FLANNEL-ZH",
                    "offers": {
                      "@type": "AggregateOffer",
                      "priceCurrency": "USD",
                      "lowPrice": "0.90",
                      "highPrice": "3.80",
                      "offerCount": "10"
                    }
                  },
                  {
                    "@type": "Product",
                    "name": "Mounted Drill Buffing Wheels (带柄迷你手电钻布轮)",
                    "description": "焊接 1/4英寸 六角/圆形适配铁柄，专攻深槽、死角和汽车排气管打磨。",
                    "sku": "SC-SHANK-BUFFER-ZH",
                    "offers": {
                      "@type": "AggregateOffer",
                      "priceCurrency": "USD",
                      "lowPrice": "0.75",
                      "highPrice": "2.20",
                      "offerCount": "20"
                    }
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://www.scottchentools.com/zh/products/buffing-polishing-wheels#faqpage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Spiral Stitched（密缝）棉线布轮和 Loose Flannel（松缝绒布）轮有什么本质区别？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "密缝布轮在表面进行一圈圈致密的缝线，使得布轮在高压打磨时保持极高的硬度与挺度，具备较强的磨削力，适合中粗加工和金属拉丝；而松缝绒布轮仅在中心轴孔有一圈车线，绒布层自然向外撑开，质地极软，适合精抛上色和实现无划痕镜面反光。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "如何合理匹配不同的抛光轮与抛光膏颜色？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "若要粗切削金属去斑去锈，使用密缝布轮配合黑 Emery 砂蜡；中度切削 and 拉丝黄铜使用红 Tripoli 蜡；若要对不锈钢和一般钢件进行镜面还原，使用白蜡配合密缝棉轮；若要对铝材或高级铜饰品进行无痕镜面色彩提亮，使用绿蜡配合松缝 flannel 绒布轮。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "你们提供用于台磨机和手电钻的轴套和转接铁杆吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "提供。我们的台磨机超厚棉布轮内配伸缩轴套，兼容 1/2英寸、5/8英寸、3/4英寸、1英寸的砂轮机轴。针对手电钻，所有的 Mounted 迷你抛光布轮出厂均焊接有 1/4\" 六角铁柄或圆柄，动平衡校正极佳，保障高转速电钻操作安全。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "你们对零售货架包装提供哪些合规支持？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "我们可以按买家图纸制作全套双面透明泡壳吸卡、悬挂彩色卡纸袋和定制加强瓦楞硬纸彩盒。所有包装均可以印制您的品牌、多国安全警示文字及 300DPI 极速识别 FNSKU/UPC 条形码贴标，直接达到海外各大超市和亚马逊 FBA 入仓要求。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "样品包的寄送流程是怎样的？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "对于经过商户资质认证的工具品牌商和五金分销商，样品本身的材料是完全免费的。您只需要在线提交申领，选择您需要的直径、厚度层数及配蜡克重。快递费（DHL/FedEx）由买家自理，但在您正式签订第一笔货柜合同时，该样品快递费将 100% 予以扣减返还。"
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
