import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "砂带厂家_环形砂带批发_砂带定制OEM代工_SCOTTCHEN",
  description: "上海砂带厂家，专业生产环形砂带、砂带套，氧化铝/锆刚玉/碳化硅材质，支持非标定制尺寸，适用于磨刀、木工、金属加工，厂家直供。",
  path: "/zh/sanding-belts",
  locale: "zh-CN",
  alternatePath: "/sanding-belts",
});

export default function ZhSandingBeltsPage() {
  const types = [
    {
      name: "手提砂带机砂带（3×21、4×24等便携规格）",
      desc: "手提砂带机砂带是配便携式手持砂带机使用的环形砂带，常见规格3\"×21\"（75×533mm）和4\"×24\"（100×610mm），适配Black+Decker、Makita、Bosch、DeWalt等主流品牌手持砂带机。这类砂带广泛用于木工平面打磨、金属除锈、旧漆去除、毛刺清理等DIY和维修场景。我司手提砂带机砂带选用优质X-wt/J-wt棉布基或聚酯布基，氧化铝磨料为主，也可做锆刚玉和碳化硅，接头采用对接+加强胶带工艺，运行平稳不跳接头，支持零售彩盒和多粒度套装定制。",
      specs: ["常见尺寸：3×21\"、4×24\"、3×18\"、4×36\"", "磨料：氧化铝/锆刚玉/碳化硅", "布基：X-wt/J-wt棉布 / 聚酯布", "粒度：P36-P400", "接头：斜搭接/对接加强胶带"],
    },
    {
      name: "台式砂带机砂带（6×48工业规格）",
      desc: "台式砂带机砂带是安装在工业级台式砂带机、立式砂带机上的环形砂带，最常见规格6\"×48\"（150×1220mm），还有2×42\"、6×90\"、6×120\"等规格，是金属加工车间、工具制造、刀具修磨、小五金生产的常用打磨耗材。台式砂带机用砂带要求布基强度高、接头强韧、磨削稳定，我司此类砂带采用Y-wt重型聚酯布、锆刚玉或陶瓷磨料、全树脂粘结，适合高压力工业连续打磨，广泛用于焊缝磨平、铸件去毛刺、刀坯成型、金属表面修整。",
      specs: ["常见尺寸：2×42\"、4×36\"、6×48\"、6×90\"", "磨料：氧化铝/锆刚玉/陶瓷", "布基：Y-wt聚酯布（重型）/X-wt棉布", "粒度：P36-P220", "应用：工业磨削/刀具/焊缝/铸件"],
    },
    {
      name: "窄砂带/锉刀砂带（1×30微型砂带）",
      desc: "窄砂带又称锉刀砂带、气动砂带机砂带，是宽度很窄（3mm-25mm）的环形小砂带，配气动/电动锉刀砂带机使用，专用于狭小空间、内角、缝隙、焊根、凹弧等难以触及部位的打磨。常见规格有1/2\"×18\"、1/4\"×18\"、3/8\"×13\"、10×330mm、12×520mm、20×520mm等，是管道安装、不锈钢制品、钣金加工、模具维护的必备工具。我司窄砂带可做氧化铝、锆刚玉、陶瓷磨料，柔性好、不断裂，支持非标定制。",
      specs: ["宽度：3mm-25mm（1/8\"-1\"）", "周长：305mm-800mm（常见330/520/610）", "磨料：AO/ZA/Ceramic", "布基：柔性J-wt/X-wt布", "应用：内角/焊根/缝隙/气动锉"],
    },
    {
      name: "宽幅砂带（板材/金属板/木工宽带）",
      desc: "宽幅砂带是宽度150mm以上（通常300-2200mm）、周长2000mm以上的大型环形砂带，安装在宽幅砂光机、金属板材砂光机、刨砂机、底漆砂光机等大型设备上，用于大尺寸板材的整面定厚砂光、漆面砂光、氧化皮去除。宽幅砂带分木工用（氧化铝+布基/纸基）和金属用（锆刚玉/陶瓷+Y-wt聚酯布），接头工艺要求极高。我司宽幅砂带可定制宽度最大2200mm、周长最长12米，对接/搭接接头平整无跳，支持批量定制，服务木工家具厂、不锈钢板材厂、铝板带厂。",
      specs: ["宽度：150-2200mm", "周长：2000-12000mm", "磨料：AO/SiC/ZA/Ceramic", "布基/纸基：按应用选择", "应用：板材/金属板/木工宽带砂光"],
    },
    {
      name: "制刀专用砂带（2×72刀匠砂带）",
      desc: "制刀专用砂带是刀匠和刀具厂用于刀坯成型、开刃、热处理后打磨、表面拉丝的高性能砂带，最经典规格为2\"×72\"（50×1830mm），适配Burr King、KMG、Wilton等品牌2×72刀磨机。制刀砂带从粗磨到镜面需要全套粒度：陶瓷砂带（P36-P80）用于刀坯粗磨和热处理后去除氧化皮；锆刚玉带（P80-P220）用于中磨成型；A/O带（P220-P600）用于细磨；碳化硅带（P800-P2000）用于精磨；毛毡/皮革带用于镜面抛光。我司提供全套粒度制刀砂带批发，支持套装组合和OEM贴牌。",
      specs: ["常见尺寸：2×72\"（最经典）、1×30\"、2×48\"", "磨料组合：陶瓷+ZA+AO+SiC全套", "粒度范围：P36-P2000", "可选涂层：防堵塞超涂层（Top Size）", "应用：刀匠制刀/刀具厂/刀友DIY"],
    },
    {
      name: "碳化硅砂带（玻璃/石材/漆面专用）",
      desc: "碳化硅砂带采用碳化硅磨料，磨粒锋利且硬度高（莫氏9.5），适合低抗拉强度材料如玻璃、石材、陶瓷、大理石、花岗岩、橡胶、塑料、漆面、复合材料的打磨。碳化硅砂带分干磨和水磨两种，水磨碳化硅砂带使用耐水布基和防水粘结剂，可加水研磨避免粉尘。碳化硅砂带常见应用：石材边缘打磨、玻璃磨边、漆面砂光、玻璃钢/碳纤维复合材料打磨、吉他漆面抛光前处理、皮革抛光前磨毛。我司碳化硅砂带可定制各种尺寸，粒度P60-P2500。",
      specs: ["磨料：黑色/绿色碳化硅", "粒度：P60-P2500", "布基：耐水Y/X-wt聚酯布/纸基", "可选：防水水磨型/干磨型", "应用：玻璃/石材/陶瓷/漆面/复合材料"],
    },
  ];

  const applications = [
    { name: "木工家具制造", desc: "实木板材定厚砂光、家具漆底漆打磨、木门地板砂光，氧化铝宽砂带和手提带组合。" },
    { name: "金属板材加工", desc: "不锈钢板、铝板、铁板的氧化皮去除、拉丝、焊缝磨平、去毛刺，锆刚玉/陶瓷宽砂带。" },
    { name: "制刀与刀具", desc: "刀坯成型、开V、热处理后氧化皮去除、镜面抛光前处理，2×72全套制刀砂带。" },
    { name: "铸造与五金", desc: "铸件浇口飞边打磨、五金工具抛光前磨削、压铸件去毛刺，台式砂带机工业砂带。" },
    { name: "汽车与零部件", desc: "汽车钣金焊缝处理、排气管抛光、零部件去毛刺、铸造件打磨，窄砂带和宽砂带组合。" },
    { name: "航空与高端制造", desc: "航空叶片、涡轮部件、钛合金构件打磨，高端陶瓷磨料窄砂带。" },
    { name: "玻璃石材加工", desc: "玻璃磨边、石材/大理石/人造石打磨、陶瓷打磨，碳化硅砂带。" },
    { name: "DIY与维修", desc: "家庭装修、金属除锈、旧漆去除、木工制作，3×21/4×24手提砂带机氧化铝砂带。" },
  ];

  const faqs = [
    {
      q: "砂带批发MOQ是多少？非标尺寸可以定制吗？",
      a: "标准常见尺寸（如3×21\"、4×24\"、6×48\"、2×72\"氧化铝常规粒度）MOQ为500条/规格/粒度；窄砂带、宽砂带、碳化硅、陶瓷等特殊规格MOQ一般为200-500条，具体视尺寸和材料而定。我们专业支持非标尺寸砂带定制——您只需提供砂带的宽度、周长（长度）、磨料类型、粒度和布基要求（或直接告诉我方配在什么品牌型号的砂带机上），我们就能为您生产。首次定制非标的客户如需测试样品，我们提供5-10条小批量打样服务。" },
    {
      q: "砂带接头有哪几种？你们用什么接头工艺？",
      a: "砂带接头主要有三种：①搭接（Overlap Joint）——砂带两端斜磨后重叠粘合，接头厚度略大，是最常见的接头形式，适合普通磨削；②对接（Butt Joint）——砂带两端对接后用强力胶带在背面粘合，接头平整、厚度一致，适合精细打磨和高精度磨削；③S形/W形接头——类似对接但切口为S形，接头强度更高、弯曲柔性好，是高端重型砂带常用接头。SCOTTCHEN根据砂带用途和客户要求选择合适的接头工艺，所有接头经过拉力测试和动态跑带测试，确保砂带高速运转不开裂、不跳接头。" },
    {
      q: "砂带如何选择磨料和粒度？",
      a: "磨料选择：氧化铝（AO）适合木材、普通钢材、通用打磨，性价比最高；锆刚玉（ZA）适合不锈钢、合金钢、碳钢中高压磨削，寿命比AO高2-3倍；陶瓷（Ceramic）适合硬金属（不锈钢、钛合金、工具钢、高温合金）高压高效磨削，寿命最长，冷切削不烧工件；碳化硅（SiC）适合玻璃、石材、陶瓷、漆面、复合材料、有色金属。粒度选择：P36-P60粗磨（大余量去除、浇口飞边、成型）；P80-P120中磨（焊缝、去毛刺、形状修整）；P150-P240细磨（表面准备、漆前打磨、轻毛刺）；P320-P600精磨（精细表面、漆面过渡）；P800以上超精磨/镜面预处理。" },
    {
      q: "砂带使用寿命多长？如何避免砂带断裂或脱砂？",
      a: "砂带寿命取决于磨料、布基、磨削压力、工件材质和使用方法，正常使用下：氧化铝木工砂带寿命约2-4小时连续使用；锆刚玉金属砂带约1-3小时；陶瓷砂带约2-5小时；碳化硅细砂带寿命较短约30-60分钟。延长砂带寿命注意：①使用前将砂带悬挂24小时让其自然展开定型（尤其宽砂带）；②调整砂带张力适中，过紧易断、过松易跑偏；③控制打磨压力，不要用力重压，砂带是靠磨粒速度切削而非压力；④选用正确粒度，粗磨用粗砂带不要用细砂带强行磨；⑤保持接触面平整，避免尖锐角大力冲击砂带。" },
    {
      q: "砂带支持OEM贴牌吗？可以做套装组合吗？",
      a: "完全支持。SCOTTCHEN作为砂带厂家提供全面OEM/ODM服务：①背面印刷品牌Logo、粒度号、规格、安全警告标识；②包装定制——单条装、多条装彩盒、插卡、吸塑、塑封、纸筒等零售包装；③多粒度组合套装——如3×21\"砂带5粒度套装（P40/P80/P120/P220/P400各2条）、2×72\"制刀全套砂带12条套装等；④磨料和布基定制——按客户应用场景推荐或按客户指定品牌砂布（Vsm、Hermes、3M等）加工；⑤FBA贴标代发服务——FNSKU标签、防窒息袋、纸箱标签直发亚马逊仓库。我们已为多个欧美工具品牌和电商卖家提供砂带贴牌服务。" },
    {
      q: "怎么确认我需要的砂带尺寸？",
      a: "确认砂带尺寸需要两个参数：宽度和周长（展开长度）。宽度用尺子量砂带的宽度即可。周长测量方法：①如果旧砂带还在，将其剪断展开测量总长度（最准确）；②如果砂带还在机器上，可以用一根细绳沿砂带内侧绕一圈，然后量绳子长度；③如果知道砂带机品牌和型号，可以查说明书或网上查该型号的砂带规格，我们的销售也熟悉主流品牌砂带机的标配尺寸，提供机型即可帮助确认。注意：砂带长度一般标注为周长（即环形一圈的长度），不是半圈。如果您提供错误的尺寸，砂带过长无法张紧、过短装不上，务必准确测量。" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "首页", href: "/zh" }, { label: "砂带", href: "/zh/sanding-belts" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">砂带厂家 · 非标定制</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              砂带厂家_环形砂带批发_砂带定制OEM代工
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              SCOTTCHEN上海专业砂带厂家，生产手提砂带机砂带、台式砂带机砂带、窄砂带/锉刀砂带、宽幅砂带、制刀专用2×72砂带、碳化硅砂带等全系列环形砂带，氧化铝/锆刚玉/陶瓷/碳化硅材质齐全，支持非标尺寸定制，工厂直供批发，MOQ低至200条，出口品质。
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
                <div className="text-2xl font-black text-industry-orange">全尺寸定制</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">非标可做</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">4种磨料</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">AO/ZA/Ceramic/SiC</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">MOQ 200条</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">起订量</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">接头平整</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">不跳不裂</div>
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
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">环形砂带生产厂家</span>
                <h2 className="text-2xl font-extrabold text-white tracking-wide">
                  SCOTTCHEN — 专业砂带厂家，环形砂带全尺寸定制工厂直供
                </h2>
                <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                  <p>
                    SCOTTCHEN是上海环形砂带专业生产厂家，自2014年起从事涂附磨具砂带转换加工，拥有多台进口砂带分切机、斜边机、压合机、拉力测试机，可转换加工宽度3mm至2200mm、周长300mm至12米的各种规格环形砂带，月产各类砂带20万条以上。作为砂带厂家，我们代理和使用Vsm、Hermes、韩国DEER、国产优质等多种品牌砂布卷，覆盖氧化铝、锆刚玉、陶瓷、碳化硅四大磨料类型，满足木工、金属、制刀、铸造、玻璃石材等全行业应用。
                  </p>
                  <p>
                    砂带是涂附磨具中效率最高、应用最广的磨削工具，相比砂轮和百叶片，砂带磨削具有接触面积大、散热快、不易烧伤工件、磨削效率高（是铣削的10倍、普通砂轮磨削的5倍）、更换方便、安全性高等优势，被誉为"万能磨削"工具。无论是手持砂带机的小型打磨作业，还是宽砂带机的大规模板材定厚砂光，环形砂带都能提供高效稳定的磨削效果。
                  </p>
                  <p>
                    作为砂带厂家，我们的核心优势是非标定制能力——不管您需要什么尺寸、什么磨料、什么布基、什么粒度，我们都能快速为您加工生产。标准品MOQ低至200条，大货交期7-15天（特殊规格25-30天）。我们服务的客户包括：砂带机品牌商、木工机械厂家、刀具厂、刀匠工作室、金属加工厂、铸造厂、家具厂、五金工具批发商、Amazon/Shopify电商卖家、DIY工具套装品牌等。
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  砂带产品类型
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
                  常用砂带机与对应砂带规格参考表
                </h2>
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">砂带机类型</th>
                        <th className="px-4 py-3 font-semibold uppercase">典型砂带尺寸</th>
                        <th className="px-4 py-3 font-semibold uppercase">典型应用</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      <tr><td className="px-4 py-3 font-bold text-industry-orange">1×30手提砂带机</td><td className="px-4 py-3">1\"×30\" (25×762mm)</td><td className="px-4 py-3">DIY/木工/小型磨削</td></tr>
                      <tr className="bg-industry-slate-900/40"><td className="px-4 py-3 font-bold text-industry-orange">3×21手提砂带机</td><td className="px-4 py-3">3\"×21\" (75×533mm)</td><td className="px-4 py-3">木工/金属/除锈（最普及）</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-industry-orange">4×24手提砂带机</td><td className="px-4 py-3">4\"×24\" (100×610mm)</td><td className="px-4 py-3">重型木工/金属工业</td></tr>
                      <tr className="bg-industry-slate-900/40"><td className="px-4 py-3 font-bold text-industry-orange">4×36台式砂带机</td><td className="px-4 py-3">4\"×36\" (100×915mm)</td><td className="px-4 py-3">车间/五金加工</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-industry-orange">2×42台式磨刀机</td><td className="px-4 py-3">2\"×42\" (50×1067mm)</td><td className="px-4 py-3">制刀/工具修磨</td></tr>
                      <tr className="bg-industry-slate-900/40"><td className="px-4 py-3 font-bold text-industry-orange">2×72刀磨机</td><td className="px-4 py-3">2\"×72\" (50×1830mm)</td><td className="px-4 py-3">专业制刀（经典规格）</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-industry-orange">6×48工业砂带机</td><td className="px-4 py-3">6\"×48\" (150×1220mm)</td><td className="px-4 py-3">工业金属加工/刀具</td></tr>
                      <tr className="bg-industry-slate-900/40"><td className="px-4 py-3 font-bold text-industry-orange">宽幅砂光机</td><td className="px-4 py-3">定制（150-2200mm宽）</td><td className="px-4 py-3">板材/木工/金属板整面</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  砂带应用领域
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
                  砂带厂家核心优势
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "全尺寸非标定制", desc: "宽度3mm-2200mm、周长300mm-12米，任何尺寸都可加工，只需提供宽度×周长即可。" },
                    { title: "优质砂布原料", desc: "选用Vsm、Hermes、DEER等顶级品牌砂布卷，磨料均匀、脱砂少、寿命长，全树脂粘结。" },
                    { title: "接头工艺精湛", desc: "搭接/对接/S形接头工艺精准选择，拉力测试通过，运行平整不跳、不开裂、不断带。" },
                    { title: "磨料全种类", desc: "氧化铝、锆刚玉、陶瓷、碳化硅四大磨料齐全，覆盖木工、金属、制刀、石材全行业应用。" },
                    { title: "快速打样交货", desc: "标准品有模具最快7-15天交货，标准规格5-10条免费打样，非标打样3-5天。" },
                    { title: "OEM/套装定制", desc: "Logo印刷、彩盒吸塑包装、多粒度组合套装（如2×72制刀12条套装）、FBA贴标代发。" },
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
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">砂带OEM代工</span>
                <h2 className="text-xl font-extrabold text-white">砂带OEM/ODM定制服务</h2>
                <div className="text-sm text-industry-slate-300 leading-relaxed space-y-4">
                  <p>
                    SCOTTCHEN砂带厂家为全球工具品牌、五金连锁、砂带机制造商、电商卖家、刀匠品牌提供专业的砂带OEM/ODM定制服务。我们的砂带转换加工车间配备多台进口设备，可按客户要求使用指定品牌砂布卷（包括Vsm、Hermes、3M、DEER、Norton等）或我们推荐的国产优质砂布进行转换加工。
                  </p>
                  <p>
                    OEM服务内容：①背面品牌印刷——砂带背面印刷品牌Logo、粒度号、规格、安装方向标识、安全警告；②包装定制——单条牛皮纸/塑料包装，多条彩盒、插卡、吸塑、纸筒包装；③套装组合——如3×21\"多粒度组合套装、2×72\"制刀全套砂带（P36/P60/P80/P120/P220/P400/P800/P1200各1条）、DIY五金店零售组合装；④特殊配方定制——按客户应用定制磨料、植砂密度、超涂层、布基类型；⑤FBA服务——FNSKU条码、防窒息袋、纸箱标签直发亚马逊仓库；⑥配套销售——砂带+砂带机配套开发，为砂带机品牌定制原厂砂带耗材。
                  </p>
                  <p>
                    合作流程：提供尺寸（宽×周长）、磨料、粒度、数量需求 → 我方报价并推荐最优材料方案 → 打样（5-10条，3-7天） → 客户测试样品 → 样品通过后签订合同付30%定金 → 批量生产（标准7-15天，非标25-30天） → QC验货 → 付尾款发货。我们支持混批和多规格合并生产，方便客户一站式采购。
                  </p>
                </div>
                <div className="pt-2">
                  <Link href="/zh/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover">
                    咨询砂带定制
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
                  src="/images/hero_sanding_belts.webp"
                  alt="SCOTTCHEN砂带厂家批发 - 环形砂带手提带制刀砂带定制"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  批发参数
                </h3>
                <div className="space-y-4 text-xs font-mono">
                  <div><span className="text-industry-slate-500 block">MOQ：</span><span className="text-white font-bold">标准品200-500条</span></div>
                  <div><span className="text-industry-slate-500 block">交货期：</span><span className="text-white font-bold">标准7-15天，非标25-30天</span></div>
                  <div><span className="text-industry-slate-500 block">宽度：</span><span className="text-white font-bold">3mm-2200mm</span></div>
                  <div><span className="text-industry-slate-500 block">周长：</span><span className="text-white font-bold">300mm-12000mm</span></div>
                  <div><span className="text-industry-slate-500 block">磨料：</span><span className="text-white font-bold">AO/ZA/Ceramic/SiC</span></div>
                  <div><span className="text-industry-slate-500 block">接头：</span><span className="text-white font-bold">搭接/对接/S形接头</span></div>
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
            "@graph": [
              {
                "@type": "ProductGroup",
                "@id": absoluteUrl("/zh/sanding-belts#productgroup"),
                "name": "SCOTTCHEN环形砂带、砂带、砂带套",
                "description": "上海砂带厂家，环形砂带批发，全尺寸非标定制，AO/ZA/Ceramic/SiC磨料，MOQ 200条起。",
                "url": absoluteUrl("/zh/sanding-belts"),
                "brand": { "@type": "Brand", "name": "SCOTTCHEN" },
              },
              {
                "@type": "FAQPage",
                "@id": absoluteUrl("/zh/sanding-belts#faqpage"),
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
