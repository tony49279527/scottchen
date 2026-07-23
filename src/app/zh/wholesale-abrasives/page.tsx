import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { buildFaqPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "磨具批发与五金分销合作支持 | SCOTTCHEN",
  description:
    "面向五金分销与渠道补货的磨具 B2B 采购与 OEM 项目支持。生产来源、包装、起订量、交期、付款与贸易术语按 SKU 书面确认。",
  path: "/zh/wholesale-abrasives",
  locale: "zh-CN",
  alternatePath: "/wholesale-abrasives",
});

export default function ZhWholesaleAbrasivesPage() {
  const categories = [
    { name: "抛光轮/布轮", link: "/zh/buffing-wheels", desc: "棉布轮、螺旋缝合轮、气道风冷轮、麻布油麻轮、抛光膏" },
    { name: "砂纸片/砂碟", link: "/zh/sanding-discs", desc: "植绒拉绒片、背胶PSA、钢纸磨片、快换转矩砂碟、网砂防堵片、干湿水磨砂纸" },
    { name: "百叶片/百叶轮", link: "/zh/flap-discs", desc: "T27平面型、T29钹型、锆刚玉/陶瓷/氧化铝百叶片" },
    { name: "环形砂带", link: "/zh/sanding-belts", desc: "手提、台式、窄锉刀、宽幅、制刀、碳化硅砂带，可定制尺寸" },
    { name: "树脂切割片", link: "/zh/cutting-wheels", desc: "金属、不锈钢INOX、超薄、钹型、铸铁、石材切割片" },
    { name: "磨具套装", link: "/zh/abrasive-kits", desc: "抛光套装、砂纸套装、电钻配件套装，包装范围按报价确认" },
  ];

  const buyerProfiles = [
    { title: "经销商与代理商", desc: "磨料磨具经销商、焊材焊割经销商、工业MRO供应商、面向区域/全国市场的分销合作伙伴。" },
    { title: "五金店与连锁店", desc: "独立五金零售店、五金连锁超市、家居建材卖场、汽配店销售零售包装磨具产品。" },
    { title: "电商卖家", desc: "淘宝、京东、拼多多、1688、抖音、快手、Amazon、Shopify、eBay等平台卖家需要自有品牌磨具。" },
    { title: "工业供应商", desc: "工业供应公司、目录商、B2B供应商，面向制造和加工终端用户供应磨具耗材。" },
  ];

  const faqs = [
    {
      q: "哪些客户可以申请磨具批发账户？",
      a: "项目面向经销商、零售商、工业供应公司、工具品牌、电商卖家和工业采购方。买家资格、试单数量、各SKU起订量及所需商业资料按项目审核，并写入书面报价。" },
    {
      q: "批发合作的付款方式是什么？",
      a: "付款方式、定金与尾款节点、币种、收款主体及账期按项目确认。只有法律供应主体与买家在报价、形式发票或合同中书面列明后才构成承诺；本页不设固定30/70比例或固定付款渠道。" },
    {
      q: "有批量折扣和整柜价格吗？",
      a: "价格按SKU、规格、包装、数量、贸易术语和当期材料成本报价。建议在同一份询价中要求试单、补货、混合SKU和整柜等情景，分别列明单价、包装、检验和物流假设，避免依赖网站上的固定折扣比例。" },
    {
      q: "批发订单支持哪些交货方式？",
      a: "可按项目比较EXW、FOB、CIF或门到门情景，但每票货物的指定地点、生产来源、进出口主体、清关范围、风险转移和运费责任必须在书面报价或合同中确认。本页不设固定贸易术语。" },
    {
      q: "可以授予区域独家代理权吗？",
      a: "可按品类和区域讨论独家合作。采购承诺、期限、渠道限制、支持范围和区域保护只有写入双方另行签署的协议后才生效；网站本身不授予独家权。" },
    {
      q: "平台包装或第三方仓配如何确认？",
      a: "买家应提供当前平台或第三方仓的条码、聚袋、警告、外箱和预约要求。报价会确认可执行的包装、贴标、发运与异常处理范围；平台规则持续变化，买家保留最终批准责任。" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "首页", href: "/zh" }, { label: "磨具批发", href: "/zh/wholesale-abrasives" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">批发采购 · 分销项目</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              磨具批发与五金分销采购支持
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              面向经销商、零售商、电商和工业买家的磨具批量采购支持。砂纸片、百叶片、切割片、砂带、抛光轮和套装按SKU、包装、检验、数量与贸易术语书面报价。
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link href="/zh/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-orange-hover hover:scale-[1.02] text-center">
              提交批发询价
            </Link>
            <Link href="/zh/sample-kit" className="inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-slate-750 text-center">
              申请产品样品
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-industry-slate-900 border-b border-industry-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-industry-slate-800 bg-industry-slate-950/40">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">按SKU</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">起订量报价</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">按报价</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">指定贸易术语</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">按品类</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">核验来源与 SKU</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">贴牌范围</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">按报价确认</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="space-y-5 max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">批发项目介绍</span>
            <h2 className="text-2xl font-extrabold text-white tracking-wide">
              面向经销商、零售商、工业买家的磨具批发项目
            </h2>
            <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
              <p>
                SCOTTCHEN为经销商、五金零售商、工业供应公司、工具品牌、电商和工业采购方提供多品类询价支持。报价应列明每个SKU的生产来源、材料与结构、包装、检验、起订量、交期和贸易术语，便于买家比较真实总成本。
              </p>
              <p>
                该采购流程可用于经销、零售、工业供应、电商和工业终端项目。生产来源、渠道包装、条码流程、订单数量与交付责任按实际SKU确认，不由买家类别直接推定。
              </p>
              <p>
                项目联系人可协调询价澄清、样品、书面批准和出运文件。负责供应的法律主体、生产来源、检验范围和售后责任必须在报价与合同中保持清晰。
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">适用买家</span>
            <h2 className="text-2xl font-extrabold text-white">本项目适用的买家类型</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {buyerProfiles.map((cust) => (
                <div key={cust.title} className="glass-panel p-6 rounded-lg border border-industry-slate-800">
                  <h3 className="text-base font-bold text-industry-orange">{cust.title}</h3>
                  <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">{cust.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">批发产品分类</span>
            <h2 className="text-2xl font-extrabold text-white">批发产品品类</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((cat) => (
                <Link key={cat.name} href={cat.link} className="glass-panel p-6 rounded-lg border border-industry-slate-800 hover:border-industry-orange transition-colors block group">
                  <h3 className="text-lg font-bold text-white group-hover:text-industry-orange transition-colors">{cat.name}</h3>
                  <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">{cat.desc}</p>
                  <span className="inline-flex items-center text-xs font-bold text-industry-orange mt-4 group-hover:underline">
                    查看批发详情 &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">价格体系</span>
              <h2 className="text-2xl font-extrabold text-white">批量价格与阶梯折扣</h2>
              <p className="text-sm text-industry-slate-300 leading-relaxed">
                建议在同一报价中比较试单、补货、混合SKU和整柜情景，并保持SKU规格、包装、质量计划与贸易术语一致，避免把不同范围误认为固定折扣。
              </p>
              <div className="overflow-x-auto rounded border border-industry-slate-800 bg-industry-slate-950">
                <table className="min-w-full divide-y divide-industry-slate-850 text-left text-xs font-mono">
                  <thead className="bg-industry-slate-900 text-industry-slate-400">
                    <tr>
                      <th className="px-4 py-3 font-semibold uppercase">级别</th>
                      <th className="px-4 py-3 font-semibold uppercase">单SKU数量</th>
                      <th className="px-4 py-3 font-semibold uppercase">折扣级别</th>
                      <th className="px-4 py-3 font-semibold uppercase">交期</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-industry-slate-850 text-white">
                    <tr>
                      <td className="px-4 py-3 font-bold text-industry-orange">评估订单</td>
                      <td className="px-4 py-3">按SKU报价</td>
                      <td className="px-4 py-3">列明计价依据</td>
                      <td className="px-4 py-3">书面排期</td>
                    </tr>
                    <tr className="bg-industry-slate-900/40">
                      <td className="px-4 py-3 font-bold text-industry-orange">批量</td>
                      <td className="px-4 py-3">按SKU报价</td>
                      <td className="px-4 py-3">批量情景</td>
                      <td className="px-4 py-3">书面排期</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-bold text-industry-orange">大批量</td>
                      <td className="px-4 py-3">按SKU报价</td>
                      <td className="px-4 py-3">补货情景</td>
                      <td className="px-4 py-3">书面排期</td>
                    </tr>
                    <tr className="bg-industry-slate-900/40">
                      <td className="px-4 py-3 font-bold text-industry-orange">整柜FCL</td>
                      <td className="px-4 py-3">20尺/40尺整柜</td>
                      <td className="px-4 py-3">整柜情景价</td>
                      <td className="px-4 py-3">按订舱计划确认</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-industry-slate-500 italic">
                * 本页不承诺通用折扣或交期；以注明日期的报价、批准SKU范围和合同为商业事实来源。
              </p>
            </div>

            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">物流发货</span>
              <h2 className="text-2xl font-extrabold text-white">物流配送</h2>
              <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                <p>
                  物流按每票货物报价。书面文件应列明生产来源、起运地与目的地、贸易术语和指定地点、进出口主体、内陆运输、清关、装货、运费与保险范围。FOB上海、CIF或门到门仅可作为比较情景，不是固定承诺。
                </p>
                <div className="grid grid-cols-1 gap-3">
                  <div className="glass-panel p-4 rounded border border-industry-slate-800">
                    <h3 className="text-sm font-bold text-white">拼箱LCL发货</h3>
                    <p className="text-xs text-industry-slate-400 mt-1">如采用拼箱，起运地、集运方或货代、仓储装载、货物兼容性与费用均以书面运输方案为准；是否适用取决于体积、包装和运输限制。</p>
                  </div>
                  <div className="glass-panel p-4 rounded border border-industry-slate-800">
                    <h3 className="text-sm font-bold text-white">整柜FCL发运</h3>
                    <p className="text-xs text-industry-slate-400 mt-1">整柜箱型、可用容积、装货地点、加固方式和成本依据按批准装载计划与货代报价确认。</p>
                  </div>
                  <div className="glass-panel p-4 rounded border border-industry-slate-800">
                    <h3 className="text-sm font-bold text-white">合并集运</h3>
                    <p className="text-xs text-industry-slate-400 mt-1">如需合并出运，仓储、多来源操作、检验、装货责任和额外费用应写入报价。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">配套服务</span>
            <h2 className="text-2xl font-extrabold text-white">平台包装、仓配与贴牌范围</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800">
                <h3 className="text-base font-bold text-industry-orange mb-3">买家批准的平台包装</h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  买家提供当前可售单元条码、聚袋、警告、纸箱内容、重量尺寸和预约要求。供应方可执行的贴标、包装和发运范围必须在报价与包装批准文件中确认，不能以网站文字替代平台当期规则。
                </p>
              </div>
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800">
                <h3 className="text-base font-bold text-industry-orange mb-3">批发贴牌服务</h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  贴牌可行性按SKU和生产来源确认。设计稿、包装形式、条码数据、警告文字、印刷开机量和起订量应写入批准包装规格与书面报价。
                </p>
              </div>
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800">
                <h3 className="text-base font-bold text-industry-orange mb-3">营销支持</h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  报价可逐项列出对应SKU现有的产品图、说明书、规格书、安全文件或listing辅助材料；本页不默认承诺其可用性或使用权。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-industry-slate-950 border border-industry-slate-800 p-8 rounded-lg space-y-5">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">启动采购</span>
            <h2 className="text-2xl font-extrabold text-white">如何启动批发询价</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1. 提交申请", desc: "通过批发询盘表、邮件或RFQ页面联系我们，提供公司信息、感兴趣的产品、预估用量和目标市场。" },
                { step: "2. 范围核对", desc: "我们核对买方主体、目标 SKU、数量、市场和现有文件，再确认样品或报价路径。" },
                { step: "3. 报价与样品方案", desc: "我们评估报价与样品选项，并以书面方式确认规格、包装和适用费用。" },
                { step: "4. 确认订单控制", desc: "批准样品、规格和包装稿，确认付款与 Incoterms，再按已识别生产来源的书面排期推进检验与发运。" },
              ].map((s) => (
                <div key={s.step} className="border-l-2 border-industry-orange pl-4">
                  <h3 className="text-sm font-bold text-white">{s.step}</h3>
                  <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Link href="/zh/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-8 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover">
                提交批发询价
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-white text-center">常见问题解答</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
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
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": absoluteUrl("/zh/wholesale-abrasives#webpage"),
                "name": "SCOTTCHEN磨具批发",
                "description": "上海磨具B2B采购与OEM项目支持，生产来源和商业条款按SKU书面确认。",
                "url": absoluteUrl("/zh/wholesale-abrasives"),
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
