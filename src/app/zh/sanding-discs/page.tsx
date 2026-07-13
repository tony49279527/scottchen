import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { buildFaqPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "砂纸片批发与砂碟厂家 | SCOTTCHEN",
  description: "上海砂纸片生产厂家，提供植绒砂纸片、背胶砂纸、钢纸磨片、网格砂纸、网砂等产品批发，氧化铝/碳化硅/锆刚玉材质齐全，MOQ 500片起。",
  path: "/zh/sanding-discs",
  locale: "zh-CN",
  alternatePath: "/sanding-discs",
});

export default function ZhSandingDiscsPage() {
  const types = [
    {
      name: "植绒砂纸片（拉绒片/魔术贴砂纸片）",
      desc: "植绒砂纸片又称拉绒片、魔术贴砂纸片、圆盘砂纸，背面为尼龙搭扣绒毛面，可快速粘贴在带钩面的打磨托盘上使用，更换快捷方便。这是目前气动打磨机、电动偏心打磨机最常用的砂纸耗材，广泛用于汽车腻子打磨、木工家具打磨、金属去毛刺、漆面研磨等场景。我司作为专业砂纸片厂家，提供5寸（125mm）、6寸（150mm）、3寸（75mm）、4寸（100mm）等直径规格，氧化铝、碳化硅、锆刚玉、陶瓷磨料材质齐全，粒度P40-P2000全覆盖，支持红砂、白砂、黄砂、金砂等多种纸基和布基。",
      specs: ["直径：3\"/4\"/5\"/6\"/7\"/9\"（75-225mm）", "背基：红色拉绒/白色拉绒/通用", "磨料：氧化铝/碳化硅/锆刚玉/陶瓷", "粒度：P40-P2000（粗-细）", "孔型：无孔/5孔/6孔/8孔/15孔/多孔"],
    },
    {
      name: "背胶砂纸片（PSA自粘砂纸片）",
      desc: "背胶砂纸片（PSA砂纸片）背面涂有压敏胶层，可直接粘贴在胶面托盘或橡胶垫上使用，粘接力强、适合高压力打磨作业。相比植绒砂纸片，PSA背胶砂纸片在高速打磨和重压打磨下不易脱落，适用于金属磨削、木工平面打磨、石材抛光前处理等工业级应用。我司背胶砂纸片采用高强度柔性纸基或聚酯薄膜基，胶层均匀、贴合平整、撕除不留残胶，支持OEM品牌印刷和定制包装，MOQ 500片起。",
      specs: ["直径：4\"/5\"/6\"/8\"（100-200mm）", "背基：PSA压敏胶", "磨料：氧化铝/碳化硅/锆刚玉", "纸基：A-wt/C-wt/D-wt/E-wt纸基", "用途：金属/木工/石材打磨"],
    },
    {
      name: "钢纸磨片（纤维砂碟/砂轮片）",
      desc: "钢纸磨片是以高强度硬化钢纸为背基、表面粘合氧化铝或锆刚玉磨料的圆形砂碟，通常安装在角磨机上进行金属打磨、焊缝磨削、去毛刺、除锈作业。钢纸磨片比普通植绒砂纸片更厚更坚韧，可承受角磨机10000RPM以上的高转速重负荷磨削，是金属加工、钢结构制造、船厂焊接的必备耗材。常见规格为4寸、4.5寸、5寸、7寸，粒度P16-P120。我司钢纸磨片批发出口欧美市场多年，通过MPA安全认证，双磨料覆盖，质量稳定。",
      specs: ["直径：4\"/4.5\"/5\"/7\"（100-180mm）", "背基：高强度硫化钢纸（0.8mm）", "磨料：氧化铝/锆刚玉", "粒度：P16-P120", "最高转速：13300 RPM（4.5寸）"],
    },
    {
      name: "快换/转矩砂碟（R型/S型锁扣）",
      desc: "快换砂碟（也称转矩砂碟、按钮砂碟、旋扣砂碟）背面带有塑料扭锁扣结构，可快速旋入配套托盘上实现一秒换片，特别适合狭小空间、内角、焊缝、不规则曲面的精细打磨。常见接口类型为R型（Roll-On/Roloc型）和S型（TSM/II型），直径1寸至3寸，磨料有氧化铝、锆刚玉、陶瓷、无纺布（表面处理）四种材质。广泛应用于汽车制造、航空航天、模具加工、金属冲压件去毛刺等高端工业领域。我司快换砂碟厂家支持OEM贴牌和定制套装。",
      specs: ["直径：1\"/2\"/3\"（25-75mm）", "接口：R型（Roloc）/S型（TSM）", "磨料：AO/ZA/陶瓷/无纺布", "粒度：P36-P320", "适配：直磨机/气动刻磨机"],
    },
    {
      name: "网格防堵塞砂纸片（网砂/网格砂纸）",
      desc: "网格防堵塞砂纸片（网砂、网眼砂纸）是一种创新型网状结构砂纸，采用聚酯网格布基涂覆磨料，网孔结构可使打磨产生的粉尘90%以上通过吸尘系统吸走，有效解决传统砂纸堵塞、积灰、粉尘污染问题。网砂非常适合汽车腻子打磨、原子灰研磨、木工漆面打磨、复合材料打磨等粉尘量大的应用，打磨效率比普通砂纸提升30%以上，使用寿命更长。网砂为通用多规格孔型，兼容吸尘5寸/6寸打磨机托盘，无需对孔，使用方便。我司提供陶瓷网砂、氧化铝网砂批发，OEM定制。",
      specs: ["直径：5\"/6\"（125mm/150mm）", "背基：聚酯网格布+拉绒", "磨料：陶瓷/氧化铝/碳化硅", "粒度：P80-P800", "特点：防堵塞/吸尘效率>90%/长寿命"],
    },
    {
      name: "水磨耐水砂纸（干湿两用砂纸）",
      desc: "水磨耐水砂纸（水磨砂纸）以耐水乳胶纸为基底，采用碳化硅或氧化铝磨料、全树脂防水粘结剂制造，可在水中或油中浸泡使用而不脱砂、不卷曲。水砂纸是汽车漆面抛光、腻子精磨、钢琴漆面打磨、吉他油漆、五金件镜面抛光前处理的必备耗材。粒度范围极广，从粗磨P60到镜面精抛P5000、P7000均可提供。我司水砂纸批发供应金阳砂、海豚砂、富士星同款质量等级，支持9\"×11\"方形水砂纸和圆形水磨砂纸片定制，MOQ低至500张。",
      specs: ["规格：9\"×11\"（230×280mm）/圆形", "磨料：碳化硅/氧化铝", "基底：耐水乳胶纸（A-wt/C-wt）", "粒度：P60-P7000", "用途：汽车漆面/腻子/钢琴漆/五金精抛"],
    },
  ];

  const applications = [
    { name: "汽车维修与钣喷", desc: "汽车腻子打磨、原子灰研磨、漆面抛光、焊缝处理，植绒砂纸片+网砂+水砂纸搭配使用。" },
    { name: "木工家具制造", desc: "实木、板材、MDF、家具漆面前后的粗磨和精磨，氧化铝砂纸和碳化硅砂纸为主。" },
    { name: "金属加工与制造", desc: "不锈钢板、铁板、铝板、铸件的去毛刺、焊缝打磨、除锈、表面处理，钢纸磨片+锆刚玉砂纸片。" },
    { name: "船舶与钢结构", desc: "船板除锈、焊缝处理、钢结构防腐涂装前打磨，重负荷锆刚玉钢纸磨片。" },
    { name: "3C电子制造", desc: "手机外壳、笔记本电脑外壳、金属中框的表面研磨抛光，精细粒度薄膜砂纸和网砂。" },
    { name: "模具与铸造", desc: "铸铝件、铸铁件去毛刺、模具表面维护、冲压件飞边处理，快换转矩砂碟+陶瓷砂纸片。" },
    { name: "DIY与家装", desc: "墙面打磨、木门油漆翻新、金属件除锈维修，通用植绒砂纸片5寸套装。" },
    { name: "乐器与工艺品", desc: "吉他漆面、钢琴漆、工艺品打磨抛光，耐水水砂纸P1000-P5000。" },
  ];

  const gritGuide = [
    { grit: "P40-P80", use: "极粗磨：去除大量余料、焊缝整平、厚氧化皮、铸件飞边" },
    { grit: "P100-P180", use: "粗磨：除锈、去旧漆、粗打磨、基材平整化" },
    { grit: "P220-P320", use: "中磨：底漆打磨、腻子粗磨、金属中磨、木材初磨" },
    { grit: "P400-P600", use: "细磨：腻子精磨、漆间打磨、金属表面预备" },
    { grit: "P800-P1500", use: "精磨：面漆前水磨、漆面瑕疵处理、透明涂层打磨" },
    { grit: "P2000-P7000", use: "抛光前处理：镜面抛光前水磨、漆面橘皮纹处理、瑕疵点修复" },
  ];

  const faqs = [
    {
      q: "砂纸片批发MOQ是多少？可以混批吗？",
      a: "标准规格砂纸片（如5寸8孔氧化铝P80-P400）的MOQ为500片/粒度/规格。特殊规格（定制直径、定制孔型、特殊磨料如陶瓷或特殊纸基）的MOQ一般为1000-2000片。我们支持同一直径不同粒度混批采购，也支持不同品类产品（砂纸片+百叶片+切割片）混装整柜，方便经销商一站式采购。新客户试单可灵活协商数量，具体请联系销售团队咨询。",
    },
    {
      q: "氧化铝、碳化硅、锆刚玉、陶瓷砂纸片如何选择？",
      a: "氧化铝（AO）是通用型磨料，适合木材、有色金属、普通金属的常规打磨，性价比最高。碳化硅（SiC）硬度更高、磨粒更锋利但脆性大，适合低抗拉强度材料如石材、玻璃、塑料、漆面和水磨砂纸。锆刚玉（ZA）磨粒坚韧、自锐性好，适合不锈钢、碳钢等高压力重负荷金属磨削，寿命长。陶瓷磨料（Ceramic）具有微晶自锐结构，切削力最强、冷切削不烧工件，是不锈钢、高温合金、硬金属高效打磨的高端选择，价格也最高。",
    },
    {
      q: "植绒砂纸片的孔型怎么选？5孔、8孔、15孔有什么区别？",
      a: "孔型设计是为了配合打磨机吸尘孔使用，孔数越多吸尘效率越高。5孔和8孔是老式气动/电动打磨机常见配置；15孔（含多品牌通用孔型）是目前主流5寸/6寸偏心打磨机的通用孔型，兼容Mirka、Festool、3M、Bosch等品牌吸尘系统；无孔砂纸片用于不带吸尘功能的打磨机。如果不确定客户使用的打磨机品牌，建议采购通用多规格孔型或网砂（网眼砂）——网砂的网状结构天然全孔吸尘，无需对孔，兼容性最好。",
    },
    {
      q: "砂纸片可以OEM贴牌吗？包装和Logo定制怎么做？",
      a: "完全可以。我们作为砂纸片厂家为全球工具品牌、电商卖家、五金连锁提供全面OEM/ODM服务：①砂纸片背面印刷品牌Logo和粒度号；②定制彩盒、插卡、吸塑、塑封筒等零售包装；③定制不干胶标签和多语言说明；④支持组合套装（不同粒度混装，如P40/P80/P120/P220/P400五粒度套装）；⑤FBA贴标服务（FNSKU条码、防窒息标签、纸箱标签）；⑥可定制特殊孔型、特殊磨料配方。OEM MOQ根据定制内容从500-5000套不等。",
    },
    {
      q: "你们的砂纸片使用寿命如何？和3M、Norton相比怎样？",
      a: "我们生产的工业级砂纸片采用优质国产和进口磨料（德国锆刚玉、美国陶瓷磨料），使用高韧性E-wt/D-wt纸基或Y-wt聚酯布基，全树脂粘结（树脂底胶+树脂复胶），添加防堵塞涂层（stearate涂层），打磨性能和使用寿命达到欧美一线品牌同级水平。在标准木材和金属打磨测试中，我们的陶瓷网砂和锆刚玉钢纸磨片寿命达到3M同规格产品的80-90%，但价格仅为其40-50%，性价比极高。我们免费提供样品供客户实测对比。",
    },
    {
      q: "网砂和普通砂纸片比有什么优势？",
      a: "网格防堵塞砂纸片（网砂）相比传统纸基/布基砂纸片有三大优势：①防堵塞——网状结构让90%以上粉尘通过孔眼被吸走，砂面不易积粉堵塞，寿命延长2-4倍；②无尘打磨——有效减少车间粉尘污染，保护工人健康，符合环保要求；③无需对孔——网状结构兼容所有吸尘孔型托盘，不需要按孔型选购，库存管理简化。网砂的缺点是单价略高于普通砂纸片，但综合使用成本（含换片时间和砂纸消耗量）实际更低，是汽车钣喷行业的发展趋势。",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "首页", href: "/zh" }, { label: "砂纸片", href: "/zh/sanding-discs" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">砂纸片厂家 · 圆形砂纸盘批发</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              砂纸片批发_砂碟厂家_圆形砂纸盘OEM定制
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              SCOTTCHEN上海砂纸片生产厂家，专业提供植绒砂纸片（拉绒片）、背胶砂纸片（PSA）、钢纸磨片、快换转矩砂碟、网格防堵塞网砂、耐水水磨砂纸等全系列砂碟产品，氧化铝/碳化硅/锆刚玉/陶瓷磨料齐全，支持OEM贴牌定制、FBA贴标发货，MOQ低至500片。
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
                <div className="text-2xl font-black text-industry-orange">4种磨料</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">AO/SiC/ZA/Ceramic</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">P40-P7000</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">全粒度覆盖</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">OEM/ODM</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">贴牌定制</div>
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
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">砂碟生产厂家</span>
                <h2 className="text-2xl font-extrabold text-white tracking-wide">
                  SCOTTCHEN — 专业砂纸片厂家，全系列砂碟一站式工厂直供
                </h2>
                <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                  <p>
                    SCOTTCHEN是位于上海的专业砂纸片、砂碟生产厂家，自2014年起从事涂附磨具转换加工和出口业务，是国内集研发、生产、销售为一体的砂碟制造商。作为圆形砂纸盘厂家，我们拥有多台高精度模切机、冲床、拉绒复合机、PSA涂胶生产线，日产各类砂纸片、砂碟产品超过20万片，产品出口北美、欧洲、澳洲、中东、东南亚等40+国家和地区。
                  </p>
                  <p>
                    作为砂碟厂家，我们深知磨料质量、背基强度和粘结剂工艺是决定砂纸片寿命和打磨效果的三大核心。我们严格选用优质磨料——普通级选用国产优质煅烧氧化铝，工业级选用德国ZWS锆刚玉和美国陶瓷磨料；背基采用进口E-wt/D-wt高韧性乳胶纸、Y-wt聚酯布和耐水乳胶纸；粘结采用"全树脂双涂"工艺（树脂底胶+树脂复胶），添加防堵塞硬脂酸锌涂层，确保砂纸片在高速打磨下不脱砂、不糊砂、寿命长。
                  </p>
                  <p>
                    我们服务的客户群体包括：五金工具品牌商（OEM贴牌）、汽车钣喷耗材经销商、木工家具厂、金属加工企业、钢结构制造厂、电商平台卖家（Amazon/eBay/Shopify）、五金连锁超市、工业MRO供应商等。无论您是需要大批量砂纸片批发采购，还是需要开发自有品牌的砂碟产品，SCOTTCHEN都能为您提供专业的解决方案和有竞争力的工厂价格。
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  砂纸片产品类型
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
                  砂纸粒度选择指南
                </h2>
                <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                  <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                    <thead className="bg-industry-slate-900 text-industry-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase">粒度范围</th>
                        <th className="px-4 py-3 font-semibold uppercase">磨削级别</th>
                        <th className="px-4 py-3 font-semibold uppercase">典型应用</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-industry-slate-850 text-white">
                      {gritGuide.map((g, i) => (
                        <tr key={g.grit} className={i % 2 === 1 ? "bg-industry-slate-900/40" : ""}>
                          <td className="px-4 py-3 font-bold text-industry-orange">{g.grit}</td>
                          <td className="px-4 py-3">{g.use.split("：")[0]}</td>
                          <td className="px-4 py-3">{g.use.split("：")[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  砂纸片应用领域
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
                  砂纸片厂家核心优势
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "全规格一站式供应", desc: "3寸-9寸全直径、多孔型/无孔、四种磨料、全粒度P40-P7000覆盖，从粗磨到镜面抛光一站式采购。" },
                    { title: "优质原材料", desc: "精选德国锆刚玉、美国陶瓷磨料、高韧性乳胶纸基，全树脂双涂工艺+防堵塞涂层，寿命远超普通市场货。" },
                    { title: "MPA/ISO认证", desc: "工厂通过ISO 9001:2015认证，钢纸磨片通过MPA EN12413安全认证，产品符合FEPA/ANSI磨料标准。" },
                    { title: "高产能快交期", desc: "日产砂纸片20万片+，标准品7-15天交货，OEM订单30-40天，大订单产能可弹性扩充。" },
                    { title: "OEM贴牌服务", desc: "背面印刷Logo、彩盒/吸塑/插卡/桶装定制、多粒度套装组合、FBA贴标代发，10年+贴牌经验。" },
                    { title: "专业技术支持", desc: "磨料应用工程师团队协助客户选型、开发专用砂纸配方、提供打磨工艺优化建议。" },
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
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">砂碟OEM代工</span>
                <h2 className="text-xl font-extrabold text-white">砂纸片OEM/ODM贴牌定制服务</h2>
                <div className="text-sm text-industry-slate-300 leading-relaxed space-y-4">
                  <p>
                    SCOTTCHEN砂纸片厂家为全球工具品牌、汽车耗材经销商、电商卖家、五金连锁企业提供专业的砂纸片OEM/ODM贴牌代工服务。我们拥有10年以上的涂附磨具贴牌经验，深谙欧美、东南亚市场的产品标准和包装要求，可帮助客户从零开始打造自有品牌砂纸产品线。
                  </p>
                  <p>
                    我们的砂碟OEM服务包括：①背面品牌印刷——砂纸片背面可印刷您的Logo、品牌名、粒度号、原产地标识；②包装定制——彩盒、插卡、吸塑、塑料袋、塑封筒、组合装桶等多种零售包装；③多粒度套装——不同粒度混装（如P40/P80/P120/P220/P400五件套或十件套），带分配器盒；④特殊规格定制——非标直径、特殊孔型、特殊磨料配方、特殊涂层；⑤FBA服务——FNSKU贴标、防窒息袋、纸箱标签，直发亚马逊运营中心；⑥营销物料支持——高-resolution产品图、应用图、视频素材、A+页面文案。
                  </p>
                  <p>
                    我们已为Amazon、eBay、Shopify等平台的众多电商客户提供砂纸片FBA贴标代发服务，熟悉Amazon包装和标签规范，有效避免入库被拒。OEM砂纸片合作流程：发送需求询盘 → 我方报价和方案 → 打样确认（7-10天） → 签订合同 → 支付定金 → 批量生产（25-35天） → 验货发货。欢迎品牌商和批发商前来洽谈合作。
                  </p>
                </div>
                <div className="pt-2">
                  <Link href="/zh/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover">
                    咨询砂碟OEM
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
                  src="/images/sanding_screens.webp"
                  alt="SCOTTCHEN砂纸片批发 - 植绒拉绒片背胶钢纸磨片网砂厂家"
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
                  <div><span className="text-industry-slate-500 block">交货期：</span><span className="text-white font-bold">标准品25-30天，OEM 30-40天</span></div>
                  <div><span className="text-industry-slate-500 block">直径范围：</span><span className="text-white font-bold">3寸-9寸（75-225mm）</span></div>
                  <div><span className="text-industry-slate-500 block">磨料：</span><span className="text-white font-bold">AO/SiC/ZA/Ceramic</span></div>
                  <div><span className="text-industry-slate-500 block">包装：</span><span className="text-white font-bold">散装100片/塑封 / 彩盒 / 插卡 / 定制</span></div>
                  <div><span className="text-industry-slate-500 block">认证：</span><span className="text-white font-bold">ISO 9001 / MPA / FEPA</span></div>
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
                  <li><Link href="/zh/flap-discs" className="text-industry-orange hover:underline">百叶片/百叶轮</Link></li>
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
            "@graph": [
              {
                "@type": "ProductGroup",
                "@id": absoluteUrl("/zh/sanding-discs#productgroup"),
                "name": "SCOTTCHEN砂纸片、砂碟、圆形砂纸盘",
                "description": "上海砂纸片生产厂家批发植绒砂纸片、背胶砂纸、钢纸磨片、网砂，氧化铝/碳化硅/锆刚玉/陶瓷磨料，MOQ 500片起。",
                "url": absoluteUrl("/zh/sanding-discs"),
                "image": absoluteUrl("/images/sanding_screens.webp"),
                "brand": { "@type": "Brand", "name": "SCOTTCHEN" },
                "manufacturer": { "@id": absoluteUrl("/#organization") },
                "category": "砂纸片与砂碟",
                "material": "氧化铝、锆刚玉、碳化硅、陶瓷、网砂",
                "additionalProperty": [
                  { "@type": "PropertyValue", "name": "参考起订量", "value": "常见规格与粒度 500 片起" },
                  { "@type": "PropertyValue", "name": "背基/连接方式", "value": "植绒、背胶、钢纸、快换" }
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
