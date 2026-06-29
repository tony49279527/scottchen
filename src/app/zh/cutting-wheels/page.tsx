import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "切割片厂家_树脂切割片批发_不锈钢切割片OEM代工_SCOTTCHEN",
  description: "上海树脂切割片生产厂家，提供金属/不锈钢专用切割片(切割砂轮)，超薄1.0-1.6mm，EN12413认证，双网增强，MOQ 1000片起。",
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
      desc: "不锈钢专用切割片（INOX切割片）是专为304/316不锈钢、不锈钢管、不锈钢板、不锈钢型材切割设计的配方树脂切割片。磨料采用白刚玉（WA）或棕刚玉+白刚玉混合配方，不含铁（Fe）、硫（S）、氯（Cl）等会导致不锈钢切割后生锈的有害元素（Fe＜0.1%），切割不锈钢不会产生后期锈蚀问题，切口无烧伤不变色。INOX切割片是不锈钢制品厂、食品医药设备厂、化工管道安装、不锈钢装饰工程的必备切割耗材。我司INOX切割片符合oSA和EN12413标准，可提供MPA检测报告。",
      specs: ["磨料：白刚玉/单晶刚玉/混合磨料", "有害元素：Fe+S+Cl≤0.1%", "厚度：1.0mm/1.2mm/1.6mm/2.0mm", "特点：不烧伤/不变色/不锈蚀", "应用：304/316不锈钢管/板/型材切割"],
    },
    {
      name: "超薄切割片（1.0-1.6mm）",
      desc: "超薄切割片是厚度1.0mm、1.2mm、1.6mm的树脂切割砂轮，主要用于精密切割不锈钢管、细金属管、薄板、毛细管等，切口窄（损失材料少）、切口平整无毛刺、切割速度快、工件不烧伤变形，是不锈钢装饰工程、不锈钢制品加工、精密五金行业的首选。超薄切割片对配方和生产工艺要求极高，必须双网或三网增强确保安全性，且要求平整度高、摆动小。我司超薄切割片采用进口白刚玉磨料、双玻纤网增强、精密压制成型，切割锋利不崩边、安全可靠，MOQ 1000片起批。",
      specs: ["厚度：1.0mm/1.2mm/1.6mm", "直径：4\"(107mm)/4.5\"(115mm)/5\"(125mm)", "磨料：WA白刚玉+高级树脂", "增强：双网玻璃纤维", "特点：切口窄/无毛刺/不变形/锋利"],
    },
    {
      name: "钹型切割片（T27/T42钹型切割砂轮）",
      desc: "T27/T42型钹型切割片（ depressed center cut-off wheel，也叫凹心切割片）中心下沉呈钹形，相比平型切割片切割角度更灵活，可在角磨机上做倾斜切割、切断加打磨两用，特别适合角焊缝根部切割、槽钢/工字钢等不规则断面切割、角落处切割等平型片难以操作的场景。钹型切割片强度高、安全系数高，是钢结构施工、船厂焊接切割、管道安装等重工业领域的常用选择。我司钹型切割片厚度2.5-3.2mm，双网增强，MPA EN12413认证，工业级品质。",
      specs: ["类型：T27/T42钹型（凹心型）", "直径：4.5\"/5\"/7\"/9\"", "厚度：2.5mm/3.0mm/3.2mm", "磨料：A/WA棕白刚玉混合", "特点：可斜切/切割打磨两用/强度高"],
    },
    {
      name: "铸铁专用切割片（灰口铸铁/球墨铸铁）",
      desc: "铸铁专用切割片是针对灰口铸铁、球墨铸铁、铸钢等高硬度、高脆性金属铸件切割开发的专用配方切割片，磨料采用黑碳化硅（C）或碳化硅+棕刚玉复合磨料，树脂配方经过特殊优化，切割锋利不卡片、切割效率高、寿命长，可有效解决普通切割片切不动铸铁、磨损极快的问题。这类切割片主要服务铸造厂、汽车零部件厂、机床厂、阀门厂、管道厂等，用于切割浇口、冒口、飞边和成品下料。我司铸铁切割片支持工业大规格（350mm-400mm）和常用规格，MOQ 1000片起。",
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
      a: "常规规格切割片（4.5寸/5寸/7寸、1.2mm/1.6mm/3.0mm、金属/不锈钢/INOX切割片）MOQ为1000片/规格，部分标准常备品可降低至500片试单。支持全面OEM/ODM贴牌服务：①切割片表面印刷品牌Logo、规格、最高转速、安全标识、MPA/EN12413认证标记；②定制铁圈/贴纸标签；③定制彩盒、白盒、工业收缩包装、贴标等包装形式；④可定制磨料配方（切金属/切不锈钢/切铸铁/切石材）；⑤套装组合（如10片/25片/50片装，多规格组合）；⑥FBA贴标代发。我们已有10年+出口贴牌经验，产品通过MPA EN12413认证，出口欧洲、北美、中东、东南亚。" },
    {
      q: "超薄切割片（1.0/1.2/1.6mm）的优势是什么？什么场景用？",
      a: "超薄切割片相比普通3.0mm切割片有三大优势：①切口窄，材料浪费少（1.0mm切口只有1.2mm左右宽，3.0mm切口超过3.5mm），切割昂贵的不锈钢管材时能节省材料；②切割锋利快速，切割同样工件速度比厚片快30-50%，且切割阻力小、角磨机负荷低；③切口平整无毛刺、工件不烧伤变形，切割后无需再打磨处理，提高工作效率。超薄切割片特别适合：不锈钢装饰管切割、不锈钢栏杆/门窗工程、医疗器械/食品设备不锈钢管加工、精密五金下料、毛细管和薄壁管切割。注意：超薄片不适合切厚壁实心材料（超过5mm实心圆钢建议用2.5mm以上厚片）。" },
    {
      q: "金属切割片和不锈钢切割片有什么区别？可以混用吗？",
      a: "不建议混用。金属切割片（普通棕刚玉）含Fe、S、Cl元素较高，切割不锈钢时高温下这些元素会附着在不锈钢切口表面，造成切口后期生锈（不锈钢最怕铁离子污染）；金属片切割不锈钢效率也低、切口发黑变形。不锈钢专用切割片（INOX）使用白刚玉/单晶刚玉磨料，配方严格控制Fe+S+Cl≤0.1%，不会污染不锈钢，切割锋利不变色不生锈，但价格比普通金属片略高。建议：切黑色金属（铁、角钢、螺纹钢、普通钢管）用普通金属切割片性价比高；切不锈钢必须用INOX不锈钢专用切割片；切铸铁用碳化硅铸铁片；切石材用碳化硅石材片。按材质选对应切割片效果最好、效率最高、最安全。" },
    {
      q: "你们的切割片有什么质量认证？安全性能如何？",
      a: "切割片属于高速旋转的危险磨具，安全是最重要的质量指标。SCOTTCHEN树脂切割片生产严格按照EN12413欧洲安全标准组织生产，通过MPA Hannover第三方检测认证，具备MPA证书和oSA认证资格。所有切割片采用双网（超薄1.0mm也采用双网增强，厚片可定制三网增强）优质玻璃纤维网增强，选用一级棕刚玉/白刚玉/碳化硅磨料和高性能酚醛树脂结合剂。每批次产品经过回转强度爆破测试（1.5倍最高工作转速不破裂）、偏摆测试、静平衡测试、切割寿命测试、硬度测试方可出厂。工厂通过ISO 9001:2015质量管理体系认证。" },
    {
      q: "切割片4.5寸、5寸、7寸、14寸分别配什么机器？",
      a: "切割片尺寸必须和切割机规格匹配：4寸(100/107mm)配100mm角磨机；4.5寸(115mm)配115mm角磨机（欧洲市场最常用）；5寸(125mm)配125mm角磨机；7寸(180mm)配180mm角磨机（工业重型角磨机）；9寸(230mm)配230mm大型角磨机；12寸(300mm)配300mm型材切割机/砂轮切割机；14寸(350/355mm)配355型材切割机（中国市场工地最常用的钢材切割机尺寸）；16寸(400mm)配400型重型切割机（钢材市场/钢结构厂常用）。注意：切割片的内孔直径也要匹配机器主轴或法兰盘，常见内孔为7/8\"(22.23mm，角磨机)和25.4mm/32mm（型材切割机）。" },
    {
      q: "如何判断切割片质量好坏？切割片使用寿命多长？",
      a: "判断切割片质量的几个维度：①看外观——表面平整无裂纹、商标清晰、网布分布均匀不歪斜、内孔圆正；②重量感觉——过轻说明密度低、不耐用；过重说明可能使用了劣质填料；③切割测试——好的切割片切割平稳不抖动、声音清脆不刺耳、切割速度快、切口平整无毛刺、磨损均匀不崩边、没有明显烧焦发蓝现象；④安全性——好切割片在有效期内（2年）不会发生爆裂、脱网。使用寿命取决于切割材料、切割片厚度和使用习惯，以4.5寸×1.2mm不锈钢切割片切1.5mm厚不锈钢管为例，一般可切80-150刀；4.5寸×3.0mm金属切割片切3mm角铁约50-100刀；14寸金属切割片切φ16螺纹钢约30-60刀。我们的工业级切割片寿命比市场普通切割片高30-50%。" },
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
              SCOTTCHEN上海专业树脂切割片生产厂家，提供金属切割片、不锈钢INOX专用切割片、超薄切割片(1.0-1.6mm)、钹型切割片、铸铁切割片、石材混凝土切割片，全规格4寸-16寸，EN12413/MPA安全认证，双网增强，MOQ低至1000片，工厂直供批发，出口全球。
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
                <div className="text-2xl font-black text-industry-orange">MPA/EN12413</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">安全认证</div>
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
                <div className="text-2xl font-black text-industry-orange">MOQ 1000</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">起订量（片）</div>
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
                    SCOTTCHEN是上海专业树脂切割片（树脂砂轮片、切割砂轮）生产厂家，自2014年起致力于树脂固结磨具研发、生产和出口，拥有全自动液压压机、隧道式固化炉、回转强度试验机、硬度测试仪、切割寿命测试台等完整生产和检测设备。作为切割片厂家，我们严格按照EN12413欧洲安全标准和GB/T 2485国标组织生产，产品通过MPA Hannover第三方安全认证，出口欧洲、北美、中东、东南亚、南美、非洲等40+国家和地区，广泛服务于钢结构工程、不锈钢制品、金属加工、铸造、汽车、建筑装修、五金批发等行业。
                  </p>
                  <p>
                    树脂切割片是工业和建筑领域使用量最大的磨具耗材之一，是以树脂为结合剂、以玻璃纤维网为增强材料、结合棕刚玉/白刚玉/碳化硅等磨料制成的薄型固结磨具，主要配角磨机、型材切割机（砂轮切割机）使用，用于金属、不锈钢、铸铁、石材等各种材料的切断和切槽。相比金属锯片，树脂切割片切割速度快、切口平整、成本低、使用轻便，是五金工具领域的易耗品，市场需求量巨大。
                  </p>
                  <p>
                    SCOTTCHEN切割片厂家始终将安全放在第一位——所有切割片均采用双网玻璃纤维增强（超薄1.0mm也坚持双网），使用高强度酚醛树脂结合剂，100%通过回转强度爆破测试（1.5倍额定转速不破裂），绝不以减薄网布、降低树脂含量等方式进行恶性低价竞争。无论是批发经销商、五金连锁、工具品牌OEM、工业用户，我们都能为您提供安全可靠、性价比高的树脂切割片产品。
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
                    { title: "MPA/EN12413认证", desc: "通过MPA Hannover EN12413安全认证，符合欧盟oSA标准，回转爆破测试合格，安全有保障。" },
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
                    OEM服务内容：①切割片本体印刷——可在切割片表面（商标圈）彩印您的品牌Logo、产品规格、最高线速度/RPM、EN12413/MPA/oSA认证标识、安全警告图示、条形码；②内孔铁圈贴纸印刷；③包装定制——工业收缩包装、盒装（25片/50片/100片白盒/彩盒）、铁盒、塑桶、吸塑等多种包装形式，多语言说明；④套装组合——不同规格组合装、切割片+百叶片+磨片套装、工具套装搭配；⑤FBA贴标代发——FNSKU条码、外箱标签直发亚马逊仓库。可根据客户目标市场和价格定位定制不同档次产品（经济型/工业级/专业级）。
                  </p>
                  <p>
                    合作流程：发送规格、数量、包装需求询盘 → 我方报价并推荐合适档次 → 提供免费样品（10片内）供测试 → 样品测试通过后签订合同 → 30%定金 → 安排生产（25-35天） → MPA检测/客户验货 → 付尾款发货。欢迎国内外品牌商、批发商、工业采购商前来洽谈长期合作。
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
                  loading="lazy"
                  src="/images/hero_cutting_discs.webp"
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
                  <div><span className="text-industry-slate-500 block">MOQ：</span><span className="text-white font-bold">1000片/规格</span></div>
                  <div><span className="text-industry-slate-500 block">直径：</span><span className="text-white font-bold">4寸-16寸（100-400mm）</span></div>
                  <div><span className="text-industry-slate-500 block">厚度：</span><span className="text-white font-bold">1.0/1.2/1.6/2.0/2.5/3.0/3.2/4.0mm</span></div>
                  <div><span className="text-industry-slate-500 block">磨料：</span><span className="text-white font-bold">A/WA/C（棕刚玉/白刚玉/碳化硅）</span></div>
                  <div><span className="text-industry-slate-500 block">认证：</span><span className="text-white font-bold">MPA EN12413 / ISO 9001</span></div>
                  <div><span className="text-industry-slate-500 block">交货期：</span><span className="text-white font-bold">25-35天</span></div>
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
                "description": "上海树脂切割片厂家批发金属/不锈钢/超薄切割片，MPA EN12413认证双网增强，MOQ 1000片起。",
                "url": absoluteUrl("/zh/cutting-wheels"),
                "brand": { "@type": "Brand", "name": "SCOTTCHEN" },
              },
              {
                "@type": "FAQPage",
                "@id": absoluteUrl("/zh/cutting-wheels#faqpage"),
                "mainEntity": faqs.map((faq) => ({
                  "@type": "Question",
                  "name": faq.q,
                  "acceptedAnswer": { "@type": "Answer", "text": faq.a },
                })),
              },
            ],
          }),
        }}
      />

      <CTASection />
    </div>
  );
}
