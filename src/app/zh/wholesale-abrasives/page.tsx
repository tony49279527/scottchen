import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "磨具批发_磨料磨具批发供货_五金工具分销合作_SCOTTCHEN",
  description: "SCOTTCHEN磨具厂家直供批发，面向经销商、五金店、电商卖家、工业采购商提供磨料磨具批量采购服务，支持混批、柜货、贴牌、一件代发。",
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
    { name: "磨具套装", link: "/zh/abrasive-kits", desc: "抛光套装、砂纸套装、电钻配件套装，零售级包装" },
  ];

  const customers = [
    { title: "经销商与代理商", desc: "磨料磨具经销商、焊材焊割经销商、工业MRO供应商、面向区域/全国市场的分销合作伙伴。" },
    { title: "五金店与连锁店", desc: "独立五金零售店、五金连锁超市、家居建材卖场、汽配店销售零售包装磨具产品。" },
    { title: "电商卖家", desc: "淘宝、京东、拼多多、1688、抖音、快手、Amazon、Shopify、eBay等平台卖家需要自有品牌磨具。" },
    { title: "工业供应商", desc: "工业供应公司、目录商、B2B供应商，面向制造和加工终端用户供应磨具耗材。" },
  ];

  const faqs = [
    {
      q: "哪些客户可以申请磨具批发账户？",
      a: "我们的磨具批发项目面向经销商、五金零售商、工业供应公司、工具品牌、电商卖家、Amazon FBA卖家以及大批量采购的工业终端用户开放。我们不向普通零售消费者提供批发价格。申请批发价格的买家需为转售或工业使用目的采购，并达到我们的最低起订量。我们会通过您的公司网站、营业执照、税务登记证或转售证书核实商业资质。新批发客户通常从试单开始评估产品质量，再建立长期整柜补货合作。" },
    {
      q: "批发合作的付款方式是什么？",
      a: "新批发客户标准付款条件：订单确认时30% T/T电汇定金，余款70%在发货前（见提单副本）支付。对有长期稳定订单记录和良好付款表现的回头客户，可根据具体情况适当放宽付款条件，如降低定金比例或提供账期。超过一定金额门槛的大额订单我们也接受即期信用证（L/C at sight）。样品订单通常通过T/T、PayPal、Alibaba信用保障等平台预付全款。所有付款条件在生产前以形式发票书面确认。" },
    {
      q: "有批量折扣和整柜价格吗？",
      a: "有。我们按订单数量提供阶梯价格折扣，整柜（FCL）订单享受最优惠价格。阶梯价格大致为：MOQ级别（每SKU 500件起）起批；5000件/ SKU享受5-10%折扣；20000件以上享受10-18%折扣；20尺/40尺整柜订单享受最优工厂直供价。我们鼓励客户将多个品类产品混拼一个集装箱（Mixed-SKU Container），只要整柜货量达到门槛即可享受FCL价格。对承诺年度采购量的客户我们还提供年度合同协议价。" },
    {
      q: "批发订单支持哪些交货方式？",
      a: "标准交货条件为FOB上海（船上交货）——我们负责工厂到上海港的内陆运输、出口清关和装船，风险和运费责任在货物越过船舷时转移给买方。我们也可以报EXW（工厂交货）、CIF（成本+保险+运费到目的港），或通过我们的货代合作伙伴安排门到门（DDP/DDU）送货。拼箱（LCL）订单由我们与合作货代安排拼柜；整柜（FCL）订单使用标准20尺和40尺集装箱，我们可在工厂直接装柜、加固，避免运输途中货损。" },
    {
      q: "可以授予区域独家代理权吗？",
      a: "我们考虑向能够证明有强大市场覆盖能力、销量承诺、品牌建设投入、能在当地专业代表SCOTTCHEN品牌的成熟经销商授予独家分销权。独家授权按产品类别和国家/地区授予，并设最低年度采购额要求。独家代理商可获得更强的营销支持、优先排产权、新品开发参与权和区域保护。如果您有兴趣申请独家代理，请将贵公司简介、市场覆盖范围和销量预测发送给我们的销售团队进行评估。" },
    {
      q: "是否提供一件代发或FBA代发服务？",
      a: "虽然我们主要以批量批发和OEM制造为主，但我们支持电商客户按Amazon FBA规格预备订单，包括FNSKU条码贴标、聚袋包装、防窒息警告标签、纸箱标签等，可直接从工厂发往全球各站点Amazon运营中心或您指定的第三方海外仓/预备仓。对有稳定销量的长期贴牌客户，我们可在有限范围内提供一件代发履约服务。但我们不面向个人消费者提供单件一件代发业务。" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "首页", href: "/zh" }, { label: "磨具批发", href: "/zh/wholesale-abrasives" }]} />
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">批发合作 · 分销招募</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              磨具批发_磨料磨具批发供货_五金工具分销合作
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              SCOTTCHEN磨具厂家直供批发，面向经销商、五金零售商、电商卖家、工业采购商提供砂纸片、百叶片、切割片、砂带、抛光轮、磨具套装等磨料磨具批量采购服务，中国上海工厂直供价格，支持混批、柜货、OEM贴牌、FBA代发、一件代发，MOQ低至500件。
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link href="/zh/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-orange-hover hover:scale-[1.02] text-center">
              开通批发账户
            </Link>
            <Link href="/zh/sample-kit" className="inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-slate-750 text-center">
              索取批发目录
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
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">起订量</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">FOB上海</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">交货条款</div>
              </div>
              <div className="text-center border-r border-industry-slate-800 last:border-r-0">
                <div className="text-2xl font-black text-industry-orange">6大品类</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">全系列磨具</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-industry-orange">贴牌支持</div>
                <div className="text-xs text-industry-slate-400 mt-1 uppercase tracking-wider">OEM/ODM</div>
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
                SCOTTCHEN运营专门的磨料磨具批发项目，面向全球经销商、五金零售商、工业供应公司、工具品牌、电商卖家和大型工业采购商提供磨具工厂直供批发服务。作为中国磨具源头厂家，我们直接生产供应全系列磨具产品——砂纸片、百叶片、切割片、砂带、抛光轮、抛光膏、零售级磨具套装，全部在我们通过ISO 9001认证的上海工厂生产，省去多层贸易商和进口商的加价环节。
              </p>
              <p>
                我们服务多种商业模式的批发客户：传统磨料磨具分销商和工业MRO公司采购我们的产品批发给加工厂、焊接车间、承包商和工业客户；五金零售商和家居连锁超市将我们的零售包装产品放在货架销售；电商卖家和Amazon FBA商家在线销售我们的自有品牌产品；金属加工车间、铸造厂、抛光加工厂等大型工业终端用户以批发价批量采购自用。无论您的商业模式如何，我们都能根据您的采购量、包装和配送需求设计合适的批发方案。
              </p>
              <p>
                开通SCOTTCHEN批发账户后，您将拥有专属销售联系人负责您的订单管理、报价、样品协调、生产进度跟踪和售后支持。我们的销售团队具备丰富的国际磨料磨具贸易经验，精通英文沟通、出口单证和物流协调，让从中国采购磨具简单可靠。
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">合作伙伴类型</span>
            <h2 className="text-2xl font-extrabold text-white">我们的批发合作伙伴</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {customers.map((cust) => (
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
                我们的批发价格按订单量分层定价，采购量越大折扣越深。以下参考阶梯展示我们的折扣结构，具体价格按SKU根据产品规格和包装要求单独报价。
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
                      <td className="px-4 py-3 font-bold text-industry-orange">MOQ起订</td>
                      <td className="px-4 py-3">500件</td>
                      <td className="px-4 py-3">标准批发价</td>
                      <td className="px-4 py-3">25-35天</td>
                    </tr>
                    <tr className="bg-industry-slate-900/40">
                      <td className="px-4 py-3 font-bold text-industry-orange">批量</td>
                      <td className="px-4 py-3">5000件</td>
                      <td className="px-4 py-3">5-10%折扣</td>
                      <td className="px-4 py-3">25-35天</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-bold text-industry-orange">大批量</td>
                      <td className="px-4 py-3">20000件</td>
                      <td className="px-4 py-3">10-18%折扣</td>
                      <td className="px-4 py-3">30-40天</td>
                    </tr>
                    <tr className="bg-industry-slate-900/40">
                      <td className="px-4 py-3 font-bold text-industry-orange">整柜FCL</td>
                      <td className="px-4 py-3">20尺/40尺整柜</td>
                      <td className="px-4 py-3">最优工厂价</td>
                      <td className="px-4 py-3">30-45天</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-industry-slate-500 italic">
                * 折扣百分比为参考区间。实际报价按SKU单独核算，可能因产品品类、磨料类型、包装形式和原材料实时价格有所浮动。
              </p>
            </div>

            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">物流发货</span>
              <h2 className="text-2xl font-extrabold text-white">物流配送</h2>
              <div className="space-y-4 text-sm text-industry-slate-300 leading-relaxed">
                <p>
                  标准批发订单以FOB上海交货，我们的工厂距上海港约一小时车程。我们负责全部内陆运输、出口清关和集装箱装柜。对没有指定货代的买家，我们可以推荐可靠货代并报价CIF或门到门送达您指定的目的港或仓库。
                </p>
                <div className="grid grid-cols-1 gap-3">
                  <div className="glass-panel p-4 rounded border border-industry-slate-800">
                    <h3 className="text-sm font-bold text-white">拼箱LCL发货</h3>
                    <p className="text-xs text-industry-slate-400 mt-1">不足整柜的订单在合作货代仓库拼柜发运，适合试单或10CBM以下的小批量多品类混合订单。</p>
                  </div>
                  <div className="glass-panel p-4 rounded border border-industry-slate-800">
                    <h3 className="text-sm font-bold text-white">整柜FCL发运</h3>
                    <p className="text-xs text-industry-slate-400 mt-1">20尺柜（约26-28CBM）和40尺高柜（约66-68CBM）在工厂直接装柜加固，防止运输货损，单位运费最经济。</p>
                  </div>
                  <div className="glass-panel p-4 rounded border border-industry-slate-800">
                    <h3 className="text-sm font-bold text-white">合并集运</h3>
                    <p className="text-xs text-industry-slate-400 mt-1">我们可分批生产后合单，将多品类产品合并在同一个集装箱发运，降低您的总物流成本和收货复杂度。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">配套服务</span>
            <h2 className="text-2xl font-extrabold text-white">一件代发、FBA与贴牌服务</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800">
                <h3 className="text-base font-bold text-industry-orange mb-3">FBA代发预备</h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  按Amazon FBA规格预备订单，包括每个可售单元贴FNSKU条码、聚袋包装、防窒息警告标签、纸箱内容标签和重量尺寸标签，符合Amazon现行规范。可从工厂直发美国、欧洲、英国、日本等各站点Amazon运营中心。
                </p>
              </div>
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800">
                <h3 className="text-base font-bold text-industry-orange mb-3">批发贴牌服务</h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  所有产品均可以您的自有品牌供货，包括定制标签、彩盒、吸卡、模塑箱、品牌外箱。自有品牌按SKU设置MOQ。我们提供包装设计支持、产品摄影和营销素材，助力您上线推广自有品牌产品线。
                </p>
              </div>
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800">
                <h3 className="text-base font-bold text-industry-orange mb-3">营销支持</h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  批发合作伙伴可获取高清产品图、场景图、产品描述文案、A+页面文案、安全数据表、规格书和应用指南，供您的网站、目录和电商listing使用。重点客户可联合开发联名营销物料。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-industry-slate-950 border border-industry-slate-800 p-8 rounded-lg space-y-5">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">开通合作</span>
            <h2 className="text-2xl font-extrabold text-white">如何开通批发账户</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1. 提交申请", desc: "通过批发询盘表、邮件或RFQ页面联系我们，提供公司信息、感兴趣的产品、预估用量和目标市场。" },
                { step: "2. 资质审核", desc: "我们审核您的商业资质，指派专属销售代表全程对接合作。" },
                { step: "3. 报价样品", desc: "获取详细批发报价，申请产品样品评估，最终确认规格和包装。" },
                { step: "4. 首单下单", desc: "样品确认后下首单、支付定金，我们开始生产并全程更新进度直至发货。" },
              ].map((s) => (
                <div key={s.step} className="border-l-2 border-industry-orange pl-4">
                  <h3 className="text-sm font-bold text-white">{s.step}</h3>
                  <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Link href="/zh/contact" className="inline-flex justify-center items-center rounded bg-industry-orange px-8 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover">
                申请批发账户
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
                "description": "磨料磨具工厂直供批发，面向经销商、零售商、工业买家，中国厂家直供价格。",
                "url": absoluteUrl("/zh/wholesale-abrasives"),
              },
              {
                "@type": "FAQPage",
                "@id": absoluteUrl("/zh/wholesale-abrasives#faqpage"),
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
