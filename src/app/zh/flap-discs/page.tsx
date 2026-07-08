import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "百叶片厂家_百叶轮批发_平面砂布轮OEM定制_SCOTTCHEN",
  description: "专业百叶片(百叶轮/花形叶轮)生产厂家，提供T27/T29锆刚玉、陶瓷氧化铝百叶片，4.5寸/5寸/7寸规格，出口品质，MOQ 500片起。",
  path: "/zh/flap-discs",
  locale: "zh-CN",
  alternatePath: "/flap-discs",
});

export default function ZhFlapDiscsPage() {
  const types = [
    {
      name: "T27平面百叶片（平型砂布轮）",
      desc: "T27型百叶片（又称平型百叶片、平面砂布轮）是最通用的百叶片类型，砂布片沿平面径向排列，工作面平坦，适合平面打磨、焊缝齐平磨平、大面积金属表面去毛刺和除锈。T27百叶片研磨时工作面与工件表面平行接触，接触面积大、磨削均匀，是金属加工车间、钢结构制造、五金制品厂最常用的打磨耗材。我司T27百叶片厂家生产4寸、4.5寸、5寸、7寸等规格，氧化铝/锆刚玉/陶瓷三种磨料可选，密度有标准密度（72片）和高密度（120片/160片）两种，支持OEM贴牌定制。",
      specs: ["直径：4\"/4.5\"/5\"/6\"/7\"（100-180mm）", "内孔：7/8\"（22.23mm）/M10/M14", "磨料：氧化铝/锆刚玉/陶瓷", "砂布片数：60/72/80/120/160片", "最高转速：13300 RPM（4.5寸）"],
    },
    {
      name: "T29钹型百叶片（锥型/翘头百叶片）",
      desc: "T29型百叶片又称钹型百叶片、锥形百叶片、翘头百叶轮，砂布片以一定角度（通常15-20度）向上倾斜排列，整体呈钹形/锥形。这种设计使砂布片边缘与工件表面呈角度接触，磨削更锋利、切削力更强，特别适合弧面打磨、角焊缝打磨、边角处理、不规则曲面和管道外壁打磨。T29比T27切削速度快约15-20%，但磨削纹路稍粗，是造船、压力容器、管道安装等重工业领域的首选。我司T29钹型百叶片批发供应，全规格全粒度P40-P120，MOQ 500片。",
      specs: ["直径：4\"/4.5\"/5\"/7\"", "内孔：7/8\"（22.23mm）", "角度：15°-20°锥面", "磨料：锆刚玉/陶瓷（推荐）", "应用：角焊缝/弧面/边角/管道打磨"],
    },
    {
      name: "锆刚玉百叶片",
      desc: "锆刚玉（Zirconia Alumina/ZA）百叶片采用锆刚玉砂布制造，锆刚玉磨料具有微晶结构，磨削时磨粒微破碎自锐，切削力强、磨削热低、不烧工件、寿命长，是不锈钢、碳钢、合金钢等金属高效打磨的最佳选择。锆刚玉百叶片寿命是普通氧化铝百叶片的2-3倍，综合使用成本更低，是工业级客户的首选磨料。我司锆刚玉百叶片选用优质德国ZWS锆刚玉砂布，全树脂粘结、玻璃纤维网盖加固，通过MPA EN12413安全认证，可承受13300RPM高转速重负荷作业。",
      specs: ["磨料：ZA40#/ZA60#/ZA80#/ZA120#", "布基：J-wt/Y-wt聚酯布", "粘结：全树脂双涂", "底板：玻璃纤维网盖（加厚）", "适配：不锈钢/碳钢/合金钢/铸铁"],
    },
    {
      name: "陶瓷磨料百叶片",
      desc: "陶瓷磨料（Ceramic Alumina）百叶片是最高端的百叶片产品，磨料采用陶瓷氧化铝凝胶烧结微晶结构，自锐性极佳，磨削过程中磨粒持续微细破碎露出新刃口，保持锋利度恒定，冷切削不易烧伤工件，磨削效率比锆刚玉再提升30-50%，寿命长达氧化铝百叶片的4-6倍。陶瓷百叶片适用于不锈钢、高温合金、钛合金、工具钢、淬火钢、硬金属等高硬度难磨材料的高效打磨，是航空航天、汽车制造、核电设备、高端铸件等高端工业领域的首选。我司陶瓷百叶片支持OEM定制，MOQ 1000片起。",
      specs: ["磨料：Ceramic陶瓷氧化铝", "粒度：P36/P40/P60/P80/P120", "添加剂：磨削助剂（减少发热）", "布基：Y-wt重型聚酯布", "应用：不锈钢/钛合金/高温合金/淬火钢"],
    },
    {
      name: "氧化铝百叶片",
      desc: "氧化铝（Aluminum Oxide/AO）百叶片是最经济型的百叶片，采用煅烧棕刚玉或半脆刚玉砂布制造，适合普通金属、木材、塑料等一般材料打磨，性价比极高。氧化铝百叶片通用性强，是五金店、DIY市场、维修车间、小型金属加工厂最常用的规格。我司氧化铝百叶片出厂前100%经过回转强度测试和动平衡测试，质量稳定、价格实惠，支持彩盒、插卡、吸塑等零售包装OEM。",
      specs: ["磨料：煅烧氧化铝（棕刚玉）", "粒度：P40/P60/P80/P120/P180/P240/P320", "布基：X-wt/J-wt棉布", "特点：价格经济/通用型", "适配：普通金属/木材/塑料/DIY"],
    },
    {
      name: "加厚高密度百叶片",
      desc: "加厚高密度百叶片采用更多片砂布片（120片/160片甚至更多）排列，砂布层更厚、工作面更宽、磨料量更大，相比普通密度（72片）百叶片寿命提升50-100%，减少换片频率，提高打磨效率。高密度百叶片适合长时间连续高强度打磨作业，如焊缝清根、铸件浇口去除、大面积钢板除锈等大工作量工业应用。我司高密度百叶片分T27平面型和T29钹型两种，锆刚玉和陶瓷磨料均可定制，底板采用加厚玻纤盖增强，确保高负荷作业安全。",
      specs: ["砂布片数：120片/160片/更多（定制）", "厚度：加厚12mm-18mm", "磨料：锆刚玉/陶瓷", "寿命：比标准型高50-100%", "应用：连续高强度工业打磨"],
    },
  ];

  const applications = [
    { name: "不锈钢加工", desc: "不锈钢板焊缝打磨、焊道整平、边角处理，推荐锆刚玉或陶瓷百叶片，冷切削不烧不锈钢。" },
    { name: "钢结构制造", desc: "钢结构厂房、桥梁、铁塔的焊缝打磨、除锈、切割边毛刺处理，T27/T29锆刚玉百叶片。" },
    { name: "造船与压力容器", desc: "船体钢板焊缝、管道环缝、容器封头打磨，T29钹型陶瓷/锆刚玉百叶片。" },
    { name: "汽车制造", desc: "汽车车架、排气管、车身钢板的焊缝打磨、冲压件飞边去除，自动化打磨专用规格可定制。" },
    { name: "五金制品", desc: "五金工具、铸件、铁艺制品、门窗配件的去毛刺、焊缝打磨、表面抛光前处理，氧化铝百叶片性价比高。" },
    { name: "铸造行业", desc: "铸钢、铸铁、铸铝件浇口、冒口、飞边的去除和表面修整，高密度陶瓷百叶片效率最高。" },
    { name: "管道安装", desc: "管道焊缝、管端坡口、管道对接焊缝打磨，T29钹型百叶片角度打磨更方便。" },
    { name: "维修与DIY", desc: "金属维修、设备维护、农机维修、金属表面锈迹旧漆去除，通用氧化铝百叶片经济实惠。" },
  ];

  const faqs = [
    {
      q: "百叶片（百叶轮）T27和T29型号有什么区别？怎么选？",
      a: "T27是平面型百叶片，砂布片水平排列，工作面平坦，打磨时百叶片与工件表面平行接触，接触面积大，适合平面打磨、焊缝与母材齐平处理、大面积表面磨削。T29是钹型/锥型百叶片，砂布片以15-20度角倾斜排列，工作面呈锥形，边缘与工件接触更锋利，切削速度更快，适合角焊缝、弧面、边角、管道外壁等需要角度磨削的场景。如果你主要是平面打磨选T27；如果经常打磨焊缝、边角或曲面选T29。我们也有T27/T29两种都做的通用型设计，具体联系销售咨询。",
    },
    {
      q: "百叶片批发MOQ是多少？支持OEM贴牌吗？",
      a: "标准规格百叶片（4.5寸7/8\"孔锆刚玉P40/P60/P80/P120等常规规格）的MOQ为500片/粒度/规格。陶瓷磨料百叶片和高密度百叶片的MOQ一般为1000片/规格。支持全面OEM/ODM贴牌服务：①网盖/铁盖上印刷品牌Logo和转速标识；②定制彩盒、插卡、吸塑、白盒等包装；③定制砂布片数量（密度）、磨料品牌（Vsm、Hermes、国产优质砂布均可）、底板颜色；④多粒度组合套装（10片装/20片装等零售包装）；⑤FBA贴标代发服务。我们已为全球40+国家的工具品牌和五金连锁提供百叶片贴牌代工。",
    },
    {
      q: "氧化铝、锆刚玉、陶瓷百叶片如何选择？",
      a: "氧化铝（AO）百叶片最经济，适合普通碳钢、木材、塑料等一般材料非连续打磨，适合DIY和小工作量场景。锆刚玉（ZA）百叶片磨削力强、自锐性好、寿命是氧化铝的2-3倍、磨削热低不易烧工件，是不锈钢、碳钢、合金钢等金属工业打磨的主流选择，性价比最高。陶瓷（Ceramic）百叶片是高端产品，磨削效率和寿命最高，冷切削适合不锈钢、高温合金、钛合金等难磨材料高强度连续作业，航空航天、汽车、高端铸件领域首选，但单价也最高。可根据加工材料、工作量和预算综合选择。",
    },
    {
      q: "百叶片的4.5寸、5寸、7寸是什么意思？怎么选直径和粒度？",
      a: "寸数指百叶片外径（英寸），4.5寸=115mm是100mm角磨机最常用规格，5寸=125mm是125mm角磨机常用规格，7寸=180mm是180mm角磨机规格。中国市场最常用4寸（100mm，16mm孔）和4.5寸（115mm，22.23mm孔），欧美市场最常用4.5寸和5寸。粒度选择：P36/P40极粗用于重负荷大余量磨削（浇口去除、焊缝粗磨）；P60/P80中粗用于焊缝处理、去毛刺、一般打磨（最常用粒度）；P120/P180细磨用于表面精磨、漆面/涂层前处理。建议初次采购以P60和P80为主力粒度。",
    },
    {
      q: "你们的百叶片安全性能如何？有MPA认证吗？",
      a: "安全是百叶片最重要的指标。SCOTTCHEN百叶片采用加厚玻璃纤维网盖底板（部分重型规格双网盖）、全树脂粘结、德国/国产优质砂布，每批次都经过回转强度爆破测试（超过额定转速1.5倍不破裂）。我们的锆刚玉和陶瓷百叶片通过MPA Hannover EN12413安全认证，符合欧盟oSA安全标准，可提供MPA测试报告。工厂通过ISO 9001:2015质量管理体系认证，所有产品出厂前经过外观检查、尺寸检验、回转测试和平衡测试，确保操作人员安全。产品上印有最大允许转速（RPM）和安全警告标识，符合ANSI和FEPA标准。",
    },
    {
      q: "百叶片使用寿命多久？如何判断更换时机？",
      a: "百叶片使用寿命取决于磨料类型、工件材质、打磨压力和使用习惯。在正常工业使用中（打磨不锈钢焊缝，角磨机11000RPM）：氧化铝百叶片寿命约15-30分钟，锆刚玉约30-60分钟，陶瓷百叶片约60-120分钟。判断更换时机：①砂布片磨耗殆尽露出尼龙搭扣或底板；②磨削效率明显下降、需要增大压力才能磨削；③百叶片振动明显增大、失去平衡；④砂布片大面积脱落或断裂；⑤打磨工件表面出现异常烧伤或焦痕（说明磨粒钝了）。建议不要使用磨耗到底板已露出的百叶片，否则底板可能破损飞出造成危险。",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "首页", href: "/zh" }, { label: "百叶片", href: "/zh/flap-discs" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">百叶片厂家 · 花形叶轮批发</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              百叶片厂家_百叶轮批发_平面砂布轮OEM定制
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              SCOTTCHEN上海专业百叶片（百叶轮/花形叶轮/平面砂布轮）生产厂家，提供T27平面型、T29钹型锆刚玉/陶瓷氧化铝百叶片批发，4寸/4.5寸/5寸/7寸全规格，MPA EN12413安全认证，出口品质，MOQ低至500片，支持OEM贴牌和FBA贴标发货。
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
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">起订量（片）</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">MPA认证</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">EN12413安全认证</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">T27/T29</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">平面/钹型齐全</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">AO/ZA/Ceramic</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">三种磨料选择</div>
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
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">百叶轮生产厂家</span>
                <h2 className="text-2xl font-extrabold text-white tracking-wide">
                  SCOTTCHEN — 专业百叶片厂家，T27/T29锆刚玉/陶瓷百叶片工厂直供
                </h2>
                <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                  <p>
                    SCOTTCHEN是坐落于上海的专业百叶片（百叶轮、花形叶轮、平面砂布轮）生产厂家，自2014年起致力于百叶片研发、生产和出口，是国内涂附磨具异型品（百叶片、百洁布轮、千叶轮）领域的头部制造商。作为百叶片厂家，我们拥有全自动化百叶片排片机、自动点胶机、自动成型机、动平衡测试仪、回转强度试验机等完整生产设备，日产百叶片超过5万片，产品通过MPA EN12413安全认证，出口北美、欧洲、澳洲、中东、东南亚等40+国家。
                  </p>
                  <p>
                    百叶片（Flap Disc）是将多片矩形砂布片以重叠扇形方式排列粘合在玻纤底板或铁盖上的涂附磨具，相比传统树脂砂轮片，百叶片同时具备磨削+打磨+初步抛光三重功能，磨削噪音低、振动小、不崩片、安全性高、使用寿命是树脂砂轮的15-30倍，是现代金属加工业替代砂轮打磨片的升级换代产品。我们的百叶片产品系列覆盖T27平面型、T29钹型、锆刚玉型、陶瓷型、氧化铝型、加厚高密度型等全系列规格，适配4寸（100mm）、4.5寸（115mm）、5寸（125mm）、7寸（180mm）所有主流角磨机。
                  </p>
                  <p>
                    作为专业百叶轮厂家，我们始终将产品安全放在首位——所有百叶片均采用加厚玻璃纤维网盖、全树脂双涂粘结工艺，每批次产品必须通过1.5倍额定转速的回转爆破测试方可出厂，绝不以牺牲安全为代价低价竞争。服务客户包括：国际工具品牌OEM、五金连锁超市、工业MRO分销商、焊接耗材经销商、电商卖家（Amazon/Shopify）、钢结构厂、造船厂、汽车零部件厂等。
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
                  百叶片常用规格参数表
                </h2>
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">规格（直径）</th>
                        <th className="px-4 py-3 font-semibold uppercase">内孔</th>
                        <th className="px-4 py-3 font-semibold uppercase">最高转速RPM</th>
                        <th className="px-4 py-3 font-semibold uppercase">适配角磨机</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr><td className="px-4 py-3 font-bold text-industry-orange">4\" (100mm)</td><td className="px-4 py-3">16mm / M10</td><td className="px-4 py-3">15300</td><td className="px-4 py-3">100mm角磨机</td></tr>
                      <tr className="bg-industry-slate-900/40"><td className="px-4 py-3 font-bold text-industry-orange">4.5\" (115mm)</td><td className="px-4 py-3">7/8\" (22.23mm)/M14</td><td className="px-4 py-3">13300</td><td className="px-4 py-3">115mm角磨机（最常用）</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-industry-orange">5\" (125mm)</td><td className="px-4 py-3">7/8\" (22.23mm)/M14</td><td className="px-4 py-3">12200</td><td className="px-4 py-3">125mm角磨机</td></tr>
                      <tr className="bg-industry-slate-900/40"><td className="px-4 py-3 font-bold text-industry-orange">6\" (150mm)</td><td className="px-4 py-3">7/8\" (22.23mm)/M14</td><td className="px-4 py-3">10200</td><td className="px-4 py-3">150mm角磨机</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-industry-orange">7\" (180mm)</td><td className="px-4 py-3">7/8\" (22.23mm)/M14</td><td className="px-4 py-3">8600</td><td className="px-4 py-3">180mm角磨机</td></tr>
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
                  为什么选择SCOTTCHEN百叶片厂家
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "MPA安全认证", desc: "锆刚玉/陶瓷百叶片通过MPA Hannover EN12413安全认证，符合欧盟oSA标准，回转爆破测试1.5倍额定转速合格。" },
                    { title: "优质砂布原料", desc: "选用德国Vsm、Hermes、ZWS及国产顶级砂布，锆刚玉/陶瓷磨料自锐性好、不烧工件，寿命比普通产品高2-4倍。" },
                    { title: "自动化生产", desc: "全自动排片/点胶/成型设备，砂布片排列均匀、胶量一致，每片百叶片动平衡测试合格，振动小运转平稳。" },
                    { title: "全系列覆盖", desc: "T27/T29两种形状，AO/ZA/Ceramic三种磨料，4寸-7寸全直径，P40-P320全粒度，72片/120片/160片密度可选。" },
                    { title: "OEM/ODM服务", desc: "网盖Logo印刷、彩盒/插卡/吸塑包装定制、零售套装、FBA贴标发货，10年+贴牌服务国际品牌经验。" },
                    { title: "工厂直供价格", desc: "源头工厂自产自销，无中间商加价，百叶片批发价格极具竞争力，大批量订单可享阶梯折扣。" },
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
                    SCOTTCHEN百叶片厂家为全球工具品牌、五金连锁、焊接耗材经销商、电商卖家提供专业的百叶片OEM/ODM贴牌代工服务。我们拥有10年以上的百叶片出口贴牌经验，熟悉欧美澳新中东东南亚各市场的产品标准和安全法规要求，可帮助客户快速开发自有品牌百叶片产品线。
                  </p>
                  <p>
                    OEM服务内容：①品牌印刷——玻璃纤维网盖或铁盖上丝印/彩印您的品牌Logo、产品规格、最高转速、安全警告标识；②包装定制——单盒、双盒、十片装彩盒、插卡、吸塑、白盒、工业散装等多种包装形式，多语言说明；③产品定制——可选T27/T29形状、砂布品牌（国产/Vsm/Hermes）、磨料类型（AO/ZA/Ceramic）、片数密度、底板颜色；④套装组合——不同粒度组合套装（如P40/P60/P80/P120四件套，10片装/20片装），配搭其他磨具产品；⑤FBA服务——FNSKU条码、防窒息标签、纸箱标签，直发亚马逊仓库。
                  </p>
                  <p>
                    合作流程：发送询盘和需求 → 我方提供产品方案和报价 → 双方确认后免费提供样品（10片内） → 样品测试通过后签订合同 → 支付30%定金 → 安排生产（25-35天） → 生产完成后客户验货或第三方验货 → 支付70%尾款 → 发货。标准产品大货交期25-30天，OEM彩盒订单30-40天。欢迎品牌商、批发商、工业客户前来洽谈合作。
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
                  alt="SCOTTCHEN百叶片厂家批发 - T27/T29锆刚玉陶瓷百叶轮"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  批发参数
                </h3>
                <div className="space-y-4 text-xs font-mono">
                  <div><span className="text-industry-slate-500 block">MOQ：</span><span className="text-white font-bold">500片/规格/粒度</span></div>
                  <div><span className="text-industry-slate-500 block">直径：</span><span className="text-white font-bold">4\"/4.5\"/5\"/7\"</span></div>
                  <div><span className="text-industry-slate-500 block">磨料：</span><span className="text-white font-bold">氧化铝/锆刚玉/陶瓷</span></div>
                  <div><span className="text-industry-slate-500 block">形状：</span><span className="text-white font-bold">T27平面型/T29钹型</span></div>
                  <div><span className="text-industry-slate-500 block">认证：</span><span className="text-white font-bold">MPA EN12413 / ISO 9001</span></div>
                  <div><span className="text-industry-slate-500 block">交货期：</span><span className="text-white font-bold">25-35天（标准品）</span></div>
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
            "@type": "ProductGroup",
            "@id": absoluteUrl("/zh/flap-discs#productgroup"),
            "name": "SCOTTCHEN百叶片、百叶轮、平面砂布轮",
            "description": "专业百叶片生产厂家，T27/T29锆刚玉陶瓷氧化铝百叶片批发，MPA认证，MOQ 500片起。",
            "url": absoluteUrl("/zh/flap-discs"),
            "brand": { "@type": "Brand", "name": "SCOTTCHEN" },
            "manufacturer": { "@id": absoluteUrl("/#organization") },
          }),
        }}
      />

      <CTASection />
    </div>
  );
}
