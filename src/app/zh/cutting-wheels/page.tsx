import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { buildFaqPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "切割片厂家与树脂切割片批发 | SCOTTCHEN",
  description: "金属与不锈钢树脂切割片 OEM 采购指南，覆盖 1.0-1.6mm 超薄规格、额定转速、安全文件、样品验证与逐项报价。",
  path: "/zh/cutting-wheels",
  locale: "zh-CN",
  alternatePath: "/cutting-wheels",
});

export default function ZhCuttingWheelsPage() {
  const types = [
    {
      name: "金属切割片（T41/T1平型切割片）",
      desc: "T41型（也叫T1型）平型切割片是最通用的金属切割树脂砂轮片，切割面平直、适合方管、圆管、角铁、扁钢、螺纹钢等各种黑色金属型材的切断作业。我们的金属通用切割片采用一级棕刚玉/煅烧氧化铝磨料，双网玻璃纤维增强，树脂结合剂配方平衡了切削速度和耐用性，切割锋利不烧伤工件、不崩边、不抖动，广泛应用于钢结构工程、金属加工车间、五金加工、建筑装修、机械维修等领域。",
      specs: ["直径：4\"/4.5\"/5\"/6\"/7\"/9\"/12\"/14\"/16\"", "厚度：2.5mm/3.0mm/3.2mm", "内孔：7/8\"(22.23mm)/16mm/20mm/25.4mm/32mm", "磨料：棕刚玉/煅烧氧化铝(A)", "适配：角磨机/型材切割机/固定式切割机"],
    },
    {
      name: "不锈钢专用切割片（INOX切割片）",
      desc: "INOX 切割片用于对铁、硫、氯含量有明确限制的不锈钢应用。采购方应在 RFQ 中写明允许限值、目标材质、额定转速、切割测试方法和所需第三方文件，并以对应配方的检测结果和样品表现作为批准依据。",
      specs: ["磨料：白刚玉/单晶刚玉/混合磨料", "有害元素：Fe+S+Cl≤0.1%", "厚度：1.0mm/1.2mm/1.6mm/2.0mm", "特点：不烧伤/不变色/不锈蚀", "应用：304/316不锈钢管/板/型材切割"],
    },
    {
      name: "超薄切割片（1.0-1.6mm）",
      desc: "超薄切割片常见厚度包括1.0mm、1.2mm和1.6mm，可用于薄壁金属与不锈钢切割。采购时应确认直径、厚度、磨料、增强结构、标称最高转速、工具和防护罩兼容性，并以覆盖具体SKU的安全文件与代表性样品测试批准。",
      specs: ["厚度：1.0mm/1.2mm/1.6mm", "直径：4\"(107mm)/4.5\"(115mm)/5\"(125mm)", "磨料：WA白刚玉+高级树脂", "增强：双网玻璃纤维", "特点：切口窄/无毛刺/不变形/锋利"],
    },
    {
      name: "钹型切割片（T27/T42钹型切割砂轮）",
      desc: "T27/T42 型钹型切割片采用下沉中心结构，采购时必须核对角磨机、护罩、安装方式、允许用途、厚度和额定转速。任何安全标准或第三方报告都应核验报告编号、覆盖尺寸、有效期和标签范围，不能由通用网页文案代替。",
      specs: ["类型：T27/T42钹型（凹心型）", "直径：4.5\"/5\"/7\"/9\"", "厚度：2.5mm/3.0mm/3.2mm", "磨料：A/WA棕白刚玉混合", "特点：可斜切/切割打磨两用/强度高"],
    },
    {
      name: "铸铁专用切割片（灰口铸铁/球墨铸铁）",
      desc: "铸铁切割片可采用碳化硅或复合磨料，应用于灰口铸铁、球墨铸铁和铸钢的浇口、冒口、飞边与下料。采购方应提供材料牌号、截面、设备、转速和目标节拍，通过同条件样品测试比较切削、磨耗、温升和安全表现。",
      specs: ["磨料：黑碳化硅(C)/复合磨料", "硬度：R/P硬度级", "适配：固定式切割机/型材切割机", "直径：14\"(355mm)/16\"(400mm)", "应用：灰铁/球铁/铸钢浇冒口切割"],
    },
    {
      name: "石材/混凝土切割片（树脂型）",
      desc: "石材混凝土树脂切割片采用碳化硅磨料或专用石材磨料配方，适用于大理石、花岗岩、人造石、混凝土、瓷砖、耐火砖、红砖等非金属硬脆材料的切割。树脂型石材切割片相比金刚石锯片成本更低，适合一般装修、石材加工、建筑施工的简单切割作业，也可用于钢材+石材混合切割场景。需要注意：树脂石材切割片主要用于普通切割，大规模石材加工推荐使用金刚石锯片（我司可协助采购）。我司石材切割片直径4寸-14寸齐全，批发供应。",
      specs: ["磨料：黑碳化硅(C)/GC绿碳化硅", "切割对象：石材/混凝土/瓷砖/耐火砖", "直径：4\"-14\"", "厚度：2.5-3.2mm", "提示：石材深加工推荐金刚石锯片"],
    },
  ];

  const safety = [
    "切割片最大使用速度不得超过标签标注的RPM和线速度（通常80m/s）",
    "安装切割片前检查是否有裂纹、破损、受潮，有问题严禁使用",
    "安装时必须使用符合规格的法兰盘压紧，法兰直径不小于切割片直径1/3",
    "切割时操作人员必须佩戴防护眼镜、防尘口罩、防护手套、劳保鞋",
    "切割片严禁用于打磨作业（应使用专用磨片），侧向施压会导致切割片破裂飞出",
    "切割片存放需防潮、防压、平放，避免阳光直射和高温环境，保质期2年",
    "新装切割片应空转1分钟以上确认无异常方可使用",
    "切割工件应牢固固定，切割片要垂直切入，不得强力扭转或斜压",
  ];

  const faqs = [
    {
      q: "切割片批发MOQ是多少？可以OEM贴牌吗？",
      a: "MOQ 按直径、厚度、配方、标签和包装逐项报价。OEM 标签只能使用采购方已批准且有权使用的品牌、额定转速、安全图示和认证信息；彩盒、组合装和条码要求也必须写入包装规格，网站不承诺统一起订量或市场准入。" },
    {
      q: "超薄切割片（1.0/1.2/1.6mm）的优势是什么？什么场景用？",
      a: "较薄的切割片通常可减少切缝，但切削速度、毛刺、温升、寿命和稳定性取决于配方、增强结构、工件、设备和操作。应在同一材料、截面、转速和进给条件下测试不同厚度，并遵循工具、护罩和切割片制造商的说明。" },
    {
      q: "金属切割片和不锈钢切割片有什么区别？可以混用吗？",
      a: "不建议混用。金属切割片（普通棕刚玉）含Fe、S、Cl元素较高，切割不锈钢时高温下这些元素会附着在不锈钢切口表面，造成切口后期生锈（不锈钢最怕铁离子污染）；金属片切割不锈钢效率也低、切口发黑变形。不锈钢专用切割片（INOX）使用白刚玉/单晶刚玉磨料，配方严格控制Fe+S+Cl≤0.1%，不会污染不锈钢，切割锋利不变色不生锈，但价格比普通金属片略高。建议：切黑色金属（铁、角钢、螺纹钢、普通钢管）用普通金属切割片性价比高；切不锈钢必须用INOX不锈钢专用切割片；切铸铁用碳化硅铸铁片；切石材用碳化硅石材片。按材质选对应切割片效果最好、效率最高、最安全。" },
    {
      q: "你们的切割片有什么质量认证？安全性能如何？",
      a: "切割片属于高速旋转危险磨具。采购方应明确目标市场适用标准、工具与护罩兼容性、额定转速、增强结构、抽样和回转测试方法，并索取对应 SKU 的报告编号、签发机构、覆盖规格和有效期。没有这些文件时，不应把通用网页声明视为 EN12413、MPA、oSa 或其他安全认证证据。" },
    {
      q: "切割片4.5寸、5寸、7寸、14寸分别配什么机器？",
      a: "切割片尺寸必须和切割机规格匹配：4寸(100/107mm)配100mm角磨机；4.5寸(115mm)配115mm角磨机（欧洲市场最常用）；5寸(125mm)配125mm角磨机；7寸(180mm)配180mm角磨机（工业重型角磨机）；9寸(230mm)配230mm大型角磨机；12寸(300mm)配300mm型材切割机/砂轮切割机；14寸(350/355mm)配355型材切割机（中国市场工地最常用的钢材切割机尺寸）；16寸(400mm)配400型重型切割机（钢材市场/钢结构厂常用）。注意：切割片的内孔直径也要匹配机器主轴或法兰盘，常见内孔为7/8\"(22.23mm，角磨机)和25.4mm/32mm（型材切割机）。" },
    {
      q: "如何判断切割片质量好坏？切割片使用寿命多长？",
      a: "质量评估应包括外观、尺寸、孔径、平整度、标签、追溯信息和适用安全证据，再在规定设备、防护罩、材料、截面、转速和进给条件下比较切削时间、切缝、毛刺、温升、磨耗和异常。寿命不能用通用刀数承诺，应以双方批准的测试方案和代表性样品为准。" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "首页", href: "/zh" }, { label: "切割片", href: "/zh/cutting-wheels" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">树脂切割片厂家 · 安全认证</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              切割片厂家_树脂切割片批发_不锈钢切割片OEM代工
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              面向金属、不锈钢 INOX、超薄、钹型、铸铁与石材应用的树脂切割片 OEM 采购。直径、厚度、配方、增强结构、额定转速、安全文件和 MOQ 均按具体 SKU 核验与报价。
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
                <div className="text-2xl font-black text-industry-orange">按市场</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">核验安全文件</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">双网增强</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">安全加固</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">4-16寸</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">全规格</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">按SKU</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">起订量报价</div>
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
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">树脂砂轮切割片生产厂家</span>
                <h2 className="text-2xl font-extrabold text-white tracking-wide">
                  SCOTTCHEN — 专业切割片厂家，双网增强树脂切割片工厂直供
                </h2>
                <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                  <p>
                    SCOTTCHEN 从上海协调树脂切割片 OEM 采购。报价应明确负责生产的来源、设备与工艺范围、适用标准、检验项目、第三方文件和出口目的地要求；任何认证、产能或市场覆盖都必须由对应文件证明，不能由网站统一承诺。
                  </p>
                  <p>
                    树脂切割片是工业和建筑领域使用量最大的磨具耗材之一，是以树脂为结合剂、以玻璃纤维网为增强材料、结合棕刚玉/白刚玉/碳化硅等磨料制成的薄型固结磨具，主要配角磨机、型材切割机（砂轮切割机）使用，用于金属、不锈钢、铸铁、石材等各种材料的切断和切槽。相比金属锯片，树脂切割片切割速度快、切口平整、成本低、使用轻便，是五金工具领域的易耗品，市场需求量巨大。
                  </p>
                  <p>
                    安全要求必须落实到具体 SKU：增强结构、结合剂、额定转速、回转测试、抽样比例、标签和追溯信息均应写入批准规格。采购决定应基于对应文件、代表性样品和约定检验记录，而不是“全部通过”或“绝对安全”等营销措辞。
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  切割片产品类型
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
                  切割片常用规格表（角磨机/型材切割机）
                </h2>
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">直径</th>
                        <th className="px-4 py-3 font-semibold uppercase">常用厚度</th>
                        <th className="px-4 py-3 font-semibold uppercase">内孔</th>
                        <th className="px-4 py-3 font-semibold uppercase">适配机器</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr><td className="px-4 py-3 font-bold text-industry-orange">4\" (100/107mm)</td><td className="px-4 py-3">1.0/1.2/1.6/2.5/3.0mm</td><td className="px-4 py-3">16mm/22.23mm</td><td className="px-4 py-3">100mm角磨机</td></tr>
                      <tr className="bg-industry-slate-900/40"><td className="px-4 py-3 font-bold text-industry-orange">4.5\" (115mm)</td><td className="px-4 py-3">1.0/1.2/1.6/2.5/3.0mm</td><td className="px-4 py-3">22.23mm</td><td className="px-4 py-3">115mm角磨机（欧洲常用）</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-industry-orange">5\" (125mm)</td><td className="px-4 py-3">1.0/1.2/1.6/2.5/3.0mm</td><td className="px-4 py-3">22.23mm</td><td className="px-4 py-3">125mm角磨机</td></tr>
                      <tr className="bg-industry-slate-900/40"><td className="px-4 py-3 font-bold text-industry-orange">7\" (180mm)</td><td className="px-4 py-3">1.6/2.0/2.5/3.0mm</td><td className="px-4 py-3">22.23mm</td><td className="px-4 py-3">180mm重型角磨机</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-industry-orange">9\" (230mm)</td><td className="px-4 py-3">2.0/2.5/3.0/3.2mm</td><td className="px-4 py-3">22.23mm</td><td className="px-4 py-3">230mm大型角磨机</td></tr>
                      <tr className="bg-industry-slate-900/40"><td className="px-4 py-3 font-bold text-industry-orange">14\" (350/355mm)</td><td className="px-4 py-3">2.5/3.0/3.2/4.0mm</td><td className="px-4 py-3">25.4mm/32mm</td><td className="px-4 py-3">355型材切割机（工地最常用）</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-industry-orange">16\" (400/405mm)</td><td className="px-4 py-3">3.0/3.2/4.0mm</td><td className="px-4 py-3">25.4mm/32mm</td><td className="px-4 py-3">400重型切割机（钢材市场）</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  切割片安全使用须知
                </h2>
                <div className="glass-panel p-6 rounded-lg border border-industry-red-900/50 bg-industry-red-950/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {safety.map((s, i) => (
                      <div key={i} className="flex items-start text-xs text-industry-slate-300">
                        <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  为什么选择SCOTTCHEN切割片厂家
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "按 SKU 核验安全文件", desc: "核对适用标准、报告编号、签发机构、覆盖尺寸、有效期与标签使用范围。" },
                    { title: "双网增强工艺", desc: "包括1.0mm超薄规格在内的所有切割片均采用双网玻璃纤维增强，拒绝单网/无网劣质工艺。" },
                    { title: "一级磨料原料", desc: "选用河南一级棕刚玉、白刚玉、黑碳化硅磨料，高强度酚醛树脂，切割锋利、寿命长。" },
                    { title: "全规格覆盖", desc: "直径4寸-16寸、厚度1.0-4.0mm全规格，金属/不锈钢/铸铁/石材四大应用配方齐全。" },
                    { title: "自动化生产", desc: "全自动压机+电脑控温隧道固化炉，产品密度均匀、硬度稳定、每批次质量一致。" },
                    { title: "OEM/ODM服务", desc: "表面印刷Logo、彩盒/收缩包装定制、零售套装、FBA贴标代发，10年+出口贴牌经验。" },
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
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">切割片OEM代工</span>
                <h2 className="text-xl font-extrabold text-white">切割片OEM/ODM贴牌定制服务</h2>
                <div className="text-sm text-industry-slate-300 leading-relaxed space-y-4">
                  <p>
                    SCOTTCHEN切割片厂家为全球工具品牌、五金连锁、焊接耗材经销商、建材超市、电商卖家提供专业的树脂切割片OEM/ODM贴牌代工服务。我们有10年以上的切割片出口贴牌经验，熟悉各国市场的标准要求和包装规范。
                  </p>
                  <p>
                    OEM 范围可包括本体标签、内孔贴纸、工业或零售包装、组合装和采购方提供的条码数据。品牌、额定转速、安全图示、认证标识、翻译与渠道标签必须由采购方确认其适用性和使用权，并写入批准稿件。
                  </p>
                  <p>
                    合作流程：提交规格、数量、目标市场和包装要求 → 审核报价与文件范围 → 确认样品费用和测试方法 → 书面批准样品与合同 → 按约定付款和排产 → 按质量计划验货 → 按书面 Incoterms 与付款节点发货。样品费、付款比例、交期和第三方检测均以项目文件为准。
                  </p>
                </div>
                <div className="pt-2">
                  <Link href="/zh/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover">
                    咨询切割片OEM
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
                  alt="SCOTTCHEN树脂切割片厂家批发 - 金属不锈钢超薄切割片"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  批发参数
                </h3>
                <div className="space-y-4 text-xs font-mono">
                  <div><span className="text-industry-slate-500 block">MOQ：</span><span className="text-white font-bold">按尺寸、配方、标签和数量报价</span></div>
                  <div><span className="text-industry-slate-500 block">直径：</span><span className="text-white font-bold">4寸-16寸（100-400mm）</span></div>
                  <div><span className="text-industry-slate-500 block">厚度：</span><span className="text-white font-bold">1.0/1.2/1.6/2.0/2.5/3.0/3.2/4.0mm</span></div>
                  <div><span className="text-industry-slate-500 block">磨料：</span><span className="text-white font-bold">A/WA/C（棕刚玉/白刚玉/碳化硅）</span></div>
                  <div><span className="text-industry-slate-500 block">安全文件：</span><span className="text-white font-bold">按目标市场与具体 SKU 确认</span></div>
                  <div><span className="text-industry-slate-500 block">交货期：</span><span className="text-white font-bold">按样品批准、包装和数量确认</span></div>
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
                  <li><Link href="/zh/resources/cutting-wheel-compliance-checklist" className="font-bold text-industry-orange hover:underline">切割片安全证据清单</Link></li>
                  <li><Link href="/zh/buffing-wheels" className="text-industry-orange hover:underline">抛光轮/布轮/麻布轮</Link></li>
                  <li><Link href="/zh/sanding-discs" className="text-industry-orange hover:underline">砂纸片/砂碟</Link></li>
                  <li><Link href="/zh/flap-discs" className="text-industry-orange hover:underline">百叶片/百叶轮</Link></li>
                  <li><Link href="/zh/sanding-belts" className="text-industry-orange hover:underline">砂带/环形砂带</Link></li>
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
                "@id": absoluteUrl("/zh/cutting-wheels#productgroup"),
                "name": "SCOTTCHEN树脂切割片、金属不锈钢切割片",
                "description": "金属、不锈钢和超薄树脂切割片OEM采购支持，按SKU、安全证据、包装和数量书面报价。",
                "url": absoluteUrl("/zh/cutting-wheels"),
                "image": absoluteUrl("/images/fiber_discs.webp"),
                "brand": { "@type": "Brand", "name": "SCOTTCHEN" },
                "manufacturer": { "@id": absoluteUrl("/#organization") },
                "category": "树脂切割片",
                "material": "树脂结合剂磨料，双层玻璃纤维网增强",
                "additionalProperty": [
                  { "@type": "PropertyValue", "name": "起订量依据", "value": "按尺寸、配方、标签、包装和订单数量书面确认" },
                  { "@type": "PropertyValue", "name": "增强结构", "value": "双网玻璃纤维增强" }
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
