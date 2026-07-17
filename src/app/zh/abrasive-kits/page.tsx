import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { buildFaqPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "磨具套装批发与 OEM 贴牌采购支持 | SCOTTCHEN",
  description:
    "抛光轮、砂纸、磨头与 DIY 磨具套装的 OEM/贴牌采购支持。按 BOM、包装、样品、平台标签与订单数量书面报价，不以网页数字作承诺。",
  path: "/zh/abrasive-kits",
  locale: "zh-CN",
  alternatePath: "/abrasive-kits",
});

export default function ZhAbrasiveKitsPage() {
  const kits = [
    {
      name: "抛光轮套装（含抛光膏）",
      desc: "多阶段抛光组合的候选采购场景。网站不定义现货套装，也不代表 BOM 已批准。",
      included: ["买家询价：工件、工具和目标表面", "组件来源、准确 SKU 与使用限制证据", "批准 BOM、数量和兼容性", "包装、说明、警示和条码数据责任方", "样品、MOQ、交期、付款和 Incoterms 写入日期化报价"],
    },
    {
      name: "砂纸碟片组合套装",
      desc: "面向指定工具和工序的候选多粒度组合。尺寸、孔型、背基和粒度顺序在批准前均为询价字段。",
      included: ["买家询价：工具、孔型、基材和打磨阶段", "组件来源、SKU、背基与粒度体系证据", "批准 BOM、数量和缓冲垫兼容性", "包装结构、版稿、警示和标签责任", "样品、MOQ、交期、付款和 Incoterms 写入日期化报价"],
    },
    {
      name: "汽车轮毂抛光套装",
      desc: "轮毂或饰件表面处理的项目概念。基材、涂层、工具、几何结构、抛光膏化学信息和目标结果须在买家工件上测试。",
      included: ["买家询价：基材、涂层、工具和目标表面", "组件来源、SKU、柄径和使用限制证据", "批准 BOM、抛光膏配对和兼容性", "说明、警示、版稿和条码数据责任方", "样品结果和商业条款在批准前形成文件"],
    },
    {
      name: "首饰抛光套装",
      desc: "需要材料、工具和交叉污染控制的小型工具精饰概念。没有来源资料和代表性测试，不承诺金属适用性或表面结果。",
      included: ["买家询价：金属、涂层、工具、操作空间和目标表面", "组件来源、准确 SKU、成分与安全资料", "批准 BOM、心轴适配和防交叉污染措施", "储存、说明、警示和包装批准", "样品、MOQ、交期、付款和 Incoterms 写入日期化报价"],
    },
    {
      name: "电钻抛光配件套装",
      desc: "针对指定电钻或旋转工具的混合配件询价，不描述为通用方案；每个柄径、转接件、布轮和使用限制均需确认。",
      included: ["买家询价：工具型号、夹头、速度范围和工件", "组件来源、准确 SKU 和标示使用限制", "批准 BOM、适配、平衡和使用顺序", "装量、说明、警示和渠道要求", "样品、MOQ、交期、付款和 Incoterms 写入日期化报价"],
    },
    {
      name: "磨刀砂带套装",
      desc: "针对指定机器、工序和材料的砂带组合场景。尺寸、接头、背基、磨粒和粒度顺序仅按报价来源与 SKU 批准。",
      included: ["买家询价：机器、砂带路径、速度、材料和工序阶段", "组件来源、SKU、接头、背基与粒度体系证据", "批准 BOM、适配测试和粒度顺序依据", "纸套或包装范围、警示和追溯字段", "样品、MOQ、交期、付款和 Incoterms 写入日期化报价"],
    },
    {
      name: "多功能DIY磨具套装",
      desc: "多来源套装概念，核验要求更高。每个组件都有独立制造方、适用文件、工具兼容性和安全边界。",
      included: ["买家询价：用户、工具、用途、市场和渠道", "逐组件的来源、SKU、证据和使用限制", "批准 BOM、隔离、兼容性和检验计划", "箱盒概念、内衬、警示和条码责任", "组装地点及全部商业条款按项目形成文件"],
    },
  ];

  const packaging = [
    { type: "彩盒包装（Color Box）", desc: "可作为询价形式；品牌权利、图片、批准文案、翻译、条码、安全警告、印刷来源与样品均需项目确认。" },
    { type: "吸卡/插卡包装（Blister Card）", desc: "可作为询价形式；泡壳材料、纸卡、挂孔、封合、刀模、跌落或渠道要求须由包装来源和批准样品确认。" },
    { type: "翻盖吸塑（Clamshell）", desc: "可作为询价形式；材料、闭合结构、展示和防拆目标、警示、测试及渠道接受均按项目批准。" },
    { type: "塑料手提箱（Plastic Carry Case）", desc: "可作为询价形式；箱体材料、锁扣、手柄、内衬、装量、运输测试和成本须写入包装规格。" },
    { type: "木盒/铁盒（Wood/Tin Box）", desc: "可作为询价形式；材料声明、来源、表面处理、内衬、印刷、运输保护和目标渠道须按样品确认。" },
    { type: "收缩膜/桶装（Shrink/Tub）", desc: "可作为询价形式；薄膜或容器材料、厚度、封装方式、标签、警示、装量和运输适用性须按项目确认。" },
  ];

  const faqs = [
    {
      q: "磨具套装/抛光套装贴牌MOQ是多少？",
      a: "MOQ按套装BOM、组件来源、包装形式、印刷、模具和订单数量报价。建议在同一询价中要求试单、补货和混合SKU情景，分别列明假设，便于比较。" },
    {
      q: "可以定制磨具套装的内容组合吗？",
      a: "可根据目标市场和BOM评估磨具套装内容，包括不同来源的磨具与非磨具配件。每个组件的生产来源、规格、数量、包装和检验范围必须在报价与样品中确认；起订量、交期、付款和Incoterms均按项目书面确定，不固定为FOB。" },
    {
      q: "你们提供哪些零售包装形式？",
      a: "彩盒、吸卡、翻盖吸塑、收缩膜、手提箱、泡沫内衬、木盒或铁盒均可用于询价。可行性、模具、设计稿、警告和买家提供的UPC/FNSKU数据必须写入批准包装规格和报价；本页不保证平台接受。" },
    {
      q: "套装包装可以使用买家提供的平台条码吗？",
      a: "买家提供的 FNSKU 或 UPC 数据、外箱唛头、警示文字和包装说明可纳入报价。必须写明责任方、版稿、样品阶段、扫码方法和留存记录；买家仍需确认目标平台当期要求。" },
    {
      q: "磨具套装生产组装需要多长时间？",
      a: "交期取决于组件供应、设计稿批准、包装模具、样品批准、组装和检验范围。书面报价应列明材料、样品、生产、验货和出运的日期与责任。" },
    {
      q: "客户可以在套装中放入自己品牌的物料吗？",
      a: "买家提供的说明书、保修卡或插页可在批准BOM中列明。材料、数量、交付地点、印刷责任、组装地点、泡沫或托盘工作、损耗和费用均按书面报价确认。" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "首页", href: "/zh" }, { label: "磨具套装", href: "/zh/abrasive-kits" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">B2B 套装贴牌 · 零售包装与条码</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              磨具套装批发与抛光工具套装 OEM 贴牌
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              面向品牌商、经销商和跨境卖家的磨具套装 OEM 方案，覆盖抛光轮、砂纸碟片、汽车轮毂抛光、电钻配件和多功能 DIY 组合。量产前确认 BOM、包装、买家提供的条码数据、样品和质检计划。
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link href="/zh/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-orange-hover hover:scale-[1.02] text-center">
              获取报价
            </Link>
            <Link href="/zh/sample-kit" className="inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-slate-750 text-center">
              申请样品套装
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-industry-slate-900 border-b border-industry-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-industry-slate-800 bg-industry-slate-950/40">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">按套装</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">起订量报价</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">零售包装</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">彩盒/吸塑/工具箱</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">条码准备</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">使用买家确认数据</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">定制组合</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">按BOM组装</div>
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
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">上海B2B套装项目支持</span>
                <h2 className="text-2xl font-extrabold text-white tracking-wide">
                  磨具套装BOM、包装与贴牌组装项目协调
                </h2>
                <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                  <p>
                    SCOTTCHEN面向经销商、电商卖家、工具品牌、五金连锁和零售自有品牌项目提供磨具套装 OEM 与贴牌组装支持。采购需求可以组合抛光轮、砂纸片、百叶片、砂带、切割片、抛光膏和带柄磨头。为便于买家横向比较，每份报价应明确组件来源、规格、包装工作和验收计划。
                  </p>
                  <p>
                    套装项目可以比较汽车轮毂抛光、磨刀砂带、电钻抛光或砂纸片组合。粒度、配件与包装建议应按目标渠道、组件来源、样品测试和买家批准确定，不声明任何平台销量或接受结果。
                  </p>
                  <p>
                    套装组装、检验和包装应依据买家确认的物料清单和包装规格执行。量产前书面确认组件身份、数量、外观检查、标签数据和外箱唛头。FNSKU 等平台条码或警示文字可以纳入报价范围，但平台最终是否接受仍由买家按照当期规则确认。
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  磨具套装&抛光套装产品类型
                </h2>
                <div className="space-y-6">
                  {kits.map((kit) => (
                    <div key={kit.name} className="glass-panel p-6 rounded-lg space-y-4 border border-industry-slate-800">
                      <h3 className="text-lg font-bold text-industry-orange">{kit.name}</h3>
                      <p className="text-sm text-industry-slate-300 leading-relaxed">{kit.desc}</p>
                      <div className="border-t border-industry-slate-800/80 pt-4">
                        <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">套装包含：</span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-industry-slate-400 font-mono">
                          {kit.included.map((item) => (
                            <li key={item} className="flex items-center space-x-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-industry-orange shrink-0" />
                              <span>{item}</span>
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
                  零售包装形式
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {packaging.map((p) => (
                    <div key={p.type} className="glass-panel p-5 rounded-lg border border-industry-slate-800">
                      <h3 className="text-sm font-bold text-industry-orange mb-2">{p.type}</h3>
                      <p className="text-xs text-industry-slate-400 leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                  为什么选择我们做磨具套装OEM
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "包装按报价确认", desc: "彩盒、吸卡、手提箱或其他形式的可行性、模具和印刷范围写入包装规格。" },
                    { title: "BOM来源透明", desc: "每个磨具、配件和非磨具组件的来源、规格与数量逐项列明。" },
                    { title: "买家批准设计稿", desc: "品牌、图片、翻译、警告与条码只按买家确认且有权使用的文件执行。" },
                    { title: "平台条码准备", desc: "买家提供的 FNSKU 或 UPC 数据、警示文字和外箱唛头可写入确认后的包装规格。" },
                    { title: "组件范围可核对", desc: "报价明确所选组件、规格、包装工作和双方约定的检验点。" },
                    { title: "上市物料范围", desc: "产品图片、说明书和 listing 辅助材料可以在报价中逐项讨论和确认。" },
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
                <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">套装定制流程</span>
                <h2 className="text-xl font-extrabold text-white">磨具套装OEM贴牌工作流程</h2>
                <div className="text-sm text-industry-slate-300 leading-relaxed space-y-4">
                  <p>
                    项目从目标市场、渠道、价格目标、拟议内容、包装和品牌简报开始。书面回复必须说明 BOM、包装稿或设计资源是否可行、由谁负责，以及模具费、单价、MOQ 与交期假设；本页不承诺一定提供这些交付物。
                  </p>
                  <p>
                    样品数量、费用、付款节点、组件来源、设计稿和包装范围按报价确认。买家应评估套装实物、产品表现和包装印刷，并在订单继续前书面批准样品及修改项。
                  </p>
                  <p>
                    生产期间应按批准规格记录组件来源、包装材料、组装作业和抽样检验。平台订单使用买家提供并批准的当前条码、警告和纸箱要求；混合SKU装运范围与物流假设写入报价。
                  </p>
                </div>
                <div className="pt-2">
                  <Link href="/zh/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover">
                    启动您的品牌套装项目
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
                  src="/images/hero_abrasives_kit.webp"
                  alt="SCOTTCHEN磨具套装批发 - 抛光套装砂纸套装五金工具套装贴牌"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  套装参数
                </h3>
                <div className="space-y-4 text-xs font-mono">
                  <div><span className="text-industry-slate-500 block">MOQ：</span><span className="text-white font-bold">按BOM、包装和数量报价</span></div>
                  <div><span className="text-industry-slate-500 block">交期：</span><span className="text-white font-bold">样品批准后书面确认里程碑</span></div>
                  <div><span className="text-industry-slate-500 block">包装：</span><span className="text-white font-bold">彩盒/吸塑/插卡/翻盖/塑料箱/木盒/铁盒</span></div>
                  <div><span className="text-industry-slate-500 block">平台条码：</span><span className="text-white font-bold">按买家提供的数据和报价范围执行</span></div>
                  <div><span className="text-industry-slate-500 block">设计：</span><span className="text-white font-bold">责任方、来源、格式与费用按项目报价</span></div>
                </div>
                <div className="pt-4 border-t border-industry-slate-850">
                  <Link href="/zh/sample-kit" className="w-full inline-flex justify-center items-center rounded border border-industry-orange text-industry-orange font-bold uppercase tracking-wider py-3 hover:bg-industry-orange hover:text-white transition-all text-xs">
                    申请样品套装
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
                  <li><Link href="/zh/cutting-wheels" className="text-industry-orange hover:underline">切割片/砂轮片</Link></li>
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
                "@type": "CollectionPage",
                "@id": absoluteUrl("/zh/abrasive-kits#catalog"),
                name: "磨具套装 RFQ 规划场景",
                description:
                  "贴牌磨具套装的规划场景。组件来源、BOM、兼容性、包装、条码范围、MOQ 与交期以带日期的报价和批准样品为准。",
                url: absoluteUrl("/zh/abrasive-kits"),
                image: absoluteUrl("/images/hero_abrasives_kit.webp"),
                inLanguage: "zh-CN",
                isPartOf: { "@id": absoluteUrl("/#website") },
                about: { "@id": absoluteUrl("/#organization") },
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
