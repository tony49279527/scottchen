import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "工业棉布轮、气道抛光轮及抛光膏 OEM 采购 | SCOTTCHEN",
  description: "布轮、台式机轮、带柄布轮及抛光膏的 OEM 采购询价；来源、SKU、结构、工具适配、样品和商业条款按项目确认。",
  path: "/zh/products/buffing-polishing-wheels",
  alternatePath: "/products/buffing-polishing-wheels",
  locale: "zh-CN",
});

export default function ChineseBuffingPolishingWheels() {
  const subtypes = [
    {
      name: "同心圆密缝棉线抛光布轮 (Spiral Stitched)",
      desc: "同心圆缝线结构可用于评估粗抛、去毛刺或表面准备。纤维成分、层数、缝线、针距、孔径、标称使用限制与性能必须按报价SKU和代表性样品确认。",
      features: ["层数：按报价 SKU 与样品确认", "缝线图案与针距：写入批准规格", "孔径与衬套：匹配买家机器并通过样品验证"],
    },
    {
      name: "松缝黄/白 flannel 镜面色彩抛光轮",
      desc: "松缝结构可用于较轻的抛光或上色评估。准确纤维成分、布轮结构、抛光膏配对、使用限制、发热和表面结果须在买家工件上批准。",
      features: ["材料：准确纤维成分按 SKU 规格确认", "缝线与边缘结构：由来源形成文件", "用途与表面结果：在买家工件上测试"],
    },
    {
      name: "台磨机缝线棉轮询价 (Bench Grinder Buffs)",
      desc: "台式抛光机棉布轮询价需提供机器、轴径、法兰、防护、速度、压力和目标工件。直径、厚度、结构、孔径、标称使用限制与安全证据按具体来源、SKU和样品批准确认。",
      features: ["直径：按工具与SKU确认", "叠层与厚度：按批准规格确认", "轴孔衬板：按机器、来源与样品确认"],
    },
    {
      name: "带柄圆顶及圆柱迷你布轮 (Mounted Buffs)",
      desc: "圆顶、圆柱、圆锥或蘑菇形带柄布轮可用于讨论凹槽和曲面应用。柄径、工具兼容性、标称使用限制、材料与性能须按具体SKU确认并在目标工件上测试。",
      features: ["柄部几何与尺寸：按工具确认", "形状和材料：根据工件与操作空间选择", "MOQ：按批准 SKU、材料、包装和数量报价"],
    },
    {
      name: "彩色抛光蜡 / 抛光膏条装系列 (Compound Bars)",
      desc: "抛光膏条可按切削与表面目标比较不同颜色或配方。成分、危害信息、适用基材、克重、储存与性能必须由负责来源提供，并与实际布轮和工件一起批准。",
      features: ["单条克重：按SKU报价", "配方与安全资料：向负责来源索取", "布轮、基材与表面目标：写入测试计划", "标签与条码：印刷前完成批准"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            ariaLabel="面包屑导航"
            items={[
              { label: "首页", href: "/zh" },
              { label: "产品目录", href: "/zh/products" },
              { label: "抛光布轮与抛光轮", href: "/zh/products/buffing-polishing-wheels" },
            ]}
          />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">参数规格与定制说明</span>
              <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
                工业棉布轮与抛光轮系列
              </h1>
              <p className="mt-3 text-base text-industry-slate-400">
                密缝、松缝、台式机与带柄布轮及抛光膏的采购询价；纤维成分、结构、适配工具、性能和可供范围按SKU核验。
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
                申请打样样品包
              </Link>
            </div>
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
                <h2 className="text-2xl font-black text-white mt-1">抛光布轮询价字段</h2>
                <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">
                  所有信息必须绑定准确来源、SKU、样品与书面报价后才能批准。
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>结构与尺寸:</strong> 直径、厚度、层数、纤维成分和缝线结构须通过来源文件与样品测量确认。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>工具适配:</strong> 孔径、衬套、法兰或柄部几何须匹配买家机器、防护与标示使用限制。</span>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>抛光膏配对:</strong> 成分、危害、克重、布轮配对与表面目标须由负责来源提供，并在工件上测试。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>书面商业条款:</strong> 生产来源、起订量、样品费、交期、付款和贸易术语按SKU与配置写入报价或合同。</span>
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
                  泡壳、彩卡或外箱可结合买家批准的设计稿、警告和买家提供的FNSKU/UPC数据进行评估；执行范围、样品扫码和平台责任应书面确认。
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
                  SKU 批准矩阵 — 网站不发布标准可供尺寸
                </h2>
                
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">询价字段</th>
                        <th className="px-4 py-3 font-semibold uppercase">买家输入</th>
                        <th className="px-4 py-3 font-semibold uppercase">来源证据</th>
                        <th className="px-4 py-3 font-semibold uppercase">样品检查</th>
                        <th className="px-4 py-3 font-semibold uppercase">批准记录</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr>
                        <td className="px-4 py-3">机器适配</td>
                        <td className="px-4 py-3">工具、主轴、法兰与防护</td>
                        <td className="px-4 py-3">图纸与标示使用限制</td>
                        <td className="px-4 py-3">装配、间隙与跳动</td>
                        <td className="px-4 py-3">签署 SKU 规格</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3">布轮结构</td>
                        <td className="px-4 py-3">切削、上色目标与工件</td>
                        <td className="px-4 py-3">纤维、层数与缝线记录</td>
                        <td className="px-4 py-3">尺寸与可见结构</td>
                        <td className="px-4 py-3">批准样品编号</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">抛光膏</td>
                        <td className="px-4 py-3">基材与目标表面</td>
                        <td className="px-4 py-3">成分、危害与储存资料</td>
                        <td className="px-4 py-3">代表性工件测试</td>
                        <td className="px-4 py-3">测试计划与结果</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3">包装</td>
                        <td className="px-4 py-3">渠道、警示与版稿</td>
                        <td className="px-4 py-3">来源、材料与刀模</td>
                        <td className="px-4 py-3">装量与标签检查</td>
                        <td className="px-4 py-3">批准包装规格</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">商业条款</td>
                        <td className="px-4 py-3">数量、目的地与时间</td>
                        <td className="px-4 py-3">具名来源与报价依据</td>
                        <td className="px-4 py-3">样品与里程碑批准</td>
                        <td className="px-4 py-3">日期化报价或合同</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Material Density & Thread Specifications Table */}
              <div id="density-table" className="space-y-4 pt-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  按报价布轮 SKU 核验的结构证据矩阵
                </h2>
                <p className="text-xs text-industry-slate-400 leading-relaxed font-mono">
                  没有来源文件与准确 SKU 时，网站不把纤维等级、纱支或缝线结构写成事实。批准前应索取以下证据：
                </p>
                
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">结构</th>
                        <th className="px-4 py-3 font-semibold uppercase">材料证据</th>
                        <th className="px-4 py-3 font-semibold uppercase">尺寸与缝线</th>
                        <th className="px-4 py-3 font-semibold uppercase">使用证据</th>
                        <th className="px-4 py-3 font-semibold uppercase">批准记录</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr>
                        <td className="px-4 py-3 font-bold">同心密缝布轮</td>
                        <td className="px-4 py-3">纤维声明与来源文件</td>
                        <td className="px-4 py-3">直径、层数、孔径、线与针距按SKU</td>
                        <td className="px-4 py-3">标签限制、工具适配与样品测试</td>
                        <td className="px-4 py-3">签字规格与参考样品</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3 font-bold">松缝绒布轮</td>
                        <td className="px-4 py-3">纤维声明与来源文件</td>
                        <td className="px-4 py-3">直径、层数、孔径与中心缝线按SKU</td>
                        <td className="px-4 py-3">标签限制、抛光膏与样品表面</td>
                        <td className="px-4 py-3">签字规格与参考样品</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-bold">剑麻或混合结构轮</td>
                        <td className="px-4 py-3">纤维混合、来源与安全资料</td>
                        <td className="px-4 py-3">直径、层数、孔径与缝线按SKU</td>
                        <td className="px-4 py-3">标签限制、工具适配与样品测试</td>
                        <td className="px-4 py-3">签字规格与来源证据</td>
                      </tr>
                      <tr className="bg-industry-slate-900/40">
                        <td className="px-4 py-3 font-bold">开放折叠精饰轮</td>
                        <td className="px-4 py-3">纤维声明与来源文件</td>
                        <td className="px-4 py-3">直径、折数、孔径与结构按SKU</td>
                        <td className="px-4 py-3">标签限制、抛光膏与样品表面</td>
                        <td className="px-4 py-3">签字规格与参考样品</td>
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
                  src="/images/buffing_wheels.webp"
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
                    <span className="text-white font-bold">按SKU、包装与样品批准确认</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">样品政策:</span>
                    <span className="text-white font-bold">样品和国际快递条件按配置书面确认</span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block">高等级用料挑选:</span>
                    <span className="text-white font-bold leading-normal">可按确认规格选用天然棉线、黄/白绒布及多层折边帆布。</span>
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
                title: "抛光棉轮与固体抛光膏组合装",
                asin: "B0828K5RH1",
                desc: "配手电钻快速换接铁杆及大中粗高光多重固体抛光蜡条，用于金属、汽车划痕精抛与表面还原。",
                url: "https://www.amazon.com/SCOTTCHEN-Buffing-Polishing-Cutting-Compounds/dp/B0828K5RH1/ref=sr_1_1?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/hero_abrasives_kit.webp"
              },
              {
                title: "同心缝线密缝棉布轮与特柔绒布轮",
                asin: "B086KR8H5Y",
                desc: "配合台磨机与砂轮机，适合不同硬度金属与工件的粗磨与精细镜面色彩还原。",
                url: "https://www.amazon.com/SCOTTCHEN-Abrasives-Buffing-Polishing-Grinder/dp/B086KR8H5Y/ref=sr_1_3?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/buffing_wheels.webp"
              },
              {
                title: "特厚高耐磨多层纯棉抛光布轮",
                asin: "B07BGV23GK",
                desc: "加厚版天然棉布轮，用于需要较高挺度的切削与表面处理；切削表现和寿命需按工件、压力、转速与抛光膏组合测试。",
                url: "https://www.amazon.com/SCOTTCHEN-Extra-Buffing-Polishing-grinder/dp/B07BGV23GK/ref=sr_1_4?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/buffing_wheels.webp"
              },
              {
                title: "珠宝及贵金属专用超细柔抛光布轮",
                asin: "B0DQCZYRXR",
                desc: "特细普梳无漂白高密度纯棉，适合黄金、白银、高档首饰、玉石及精细亚克力的镜面色彩上色。",
                url: "https://www.amazon.com/SCOTTCHEN-Buffing-Polishing-Lapidary-Metalworking/dp/B0DQCZYRXR/ref=sr_1_11?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/buffing_wheels.webp"
              },
              {
                title: "尼龙无纺布纤维抛光碟配抛光蜡",
                asin: "B0D6V976G5",
                desc: "高强度无纺布纤维结合不同粒度抛光固体膏，可快速去除大面积金属表面锈斑与焊缝拉丝。",
                url: "https://www.amazon.com/SCOTTCHEN-Buffing-Polishing-Compounds-Non-Woven/dp/B0D6V976G5/ref=sr_1_14?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/hero_abrasives_kit.webp"
              },
              {
                title: "中目工业级无纺布尼龙磨片砂轮",
                asin: "B07Y564CX4",
                desc: "专门用于中粗度金属毛刺清理、拉丝划痕整平及除漆，打磨柔和不易伤底材。",
                url: "https://www.amazon.com/SCOTTCHEN-Buffing-Polishing-Wheels-Medium/dp/B07Y564CX4/ref=sr_1_21?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/buffing_wheels.webp"
              },
              {
                title: "台磨机/手电钻加长接杆轴心适配器",
                asin: "B07ZP52HCK",
                desc: "高硬度焊接钢制轴套，将标准的抛光布轮牢固锁紧于砂轮机及各种电动打磨工具上。",
                url: "https://www.amazon.com/SCOTTCHEN-Buffing-Polishing-Extended-Extender/dp/B07ZP52HCK/ref=sr_1_24?m=A3OOZSPFZX1YUE&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true",
                img: "/images/detail_sanding.webp"
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
                a: "密缝布轮通过多圈缝线形成较高挺度，可作为中粗加工和金属表面处理的起点；松缝绒布轮仅在中心固定，适合上色与最终精饰。轮体、抛光膏、基材、压力和转速必须通过样件测试确认。"
              },
              {
                q: "如何合理匹配不同的抛光轮与抛光膏颜色？",
                a: "颜色名称不能证明配方或适用性。应向报价来源索取成分、危害和目标基材资料，再用准确布轮、工件、压力和转速比较各抛光膏，并以代表性样件结果批准组合。"
              },
              {
                q: "你们提供用于台磨机和手电钻的轴套和转接铁杆吗？",
                a: "可提出轴套、六角柄或圆柄需求，但可供范围、材料、尺寸、工具适配和标签工作限制必须由报价 SKU 与样品确认。"
              },
              {
                q: "你们对零售货架包装提供哪些合规支持？",
                a: "泡壳、彩卡、纸袋或彩盒可用于询价。来源、刀模、版稿、权利、警告、买家条码数据、样品与扫码记录须按项目批准；本页不承诺某种包装或平台接收。"
              },
              {
                q: "样品包的寄送流程是怎样的？",
                a: "经核实的工具品牌和五金分销商可以申请样品，并填写所需直径、层数和配蜡克重。样品费、国际快递费及可能适用的订单抵扣条件会在发出前书面确认。"
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
                "@type": "CollectionPage",
                "@id": absoluteUrl("/zh/products/buffing-polishing-wheels#catalog"),
                "name": "抛光轮与布轮 RFQ 采购目录",
                "description": "用于询价规划的结构参考；准确材料、尺寸、使用限制、可供范围与商业条款须由带日期的 SKU 报价和批准证据确认。",
                "url": absoluteUrl("/zh/products/buffing-polishing-wheels"),
                "image": absoluteUrl("/images/buffing_wheels.webp"),
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
