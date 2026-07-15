import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "磨具抛光工具包应用场景工作流 | SCOTTCHEN",
  description: "了解针对不同材质与底材量身定制的磨料磨具配件配置：金属研磨去毛刺、木工抛光、汽车轮毂镜面还原、珠宝模型打磨等一站式B2B搭配方案。",
  path: "/zh/applications",
  alternatePath: "/applications",
  locale: "zh-CN",
});

export default function ChineseApplicationsOverview() {
  const applications = [
    {
      id: "metalworking",
      name: "金属打磨、去焊缝与表面处理",
      tag: "重负荷焊道抛磨与除锈除氧化层",
      challenges: "钢板焊接接头、生锈管件和粗糙铸件在涂装前通常需要较高切削力。锐角会加速普通纸基磨料损耗，可把硫化纤维背基磨片作为选型起点，并通过工件测试确认。",
      products: "锆刚玉重载纤维砂碟、密缝线缝棉轮、红/黑 Emery 粗磨研磨蜡条。",
      packaging: "大货散装瓦楞箱，单包 25 张强力热缩包装。",
    },
    {
      id: "woodworking",
      name: "木工家具打磨与油漆翻新",
      tag: "连续目数级配与木纹表面准备",
      challenges: "实木家具、木蜡油前处理和曲面打磨通常需要连续过渡的目数，以控制划痕变化。背基柔韧度、砂粒和目数应在目标木材及涂层工艺上测试。",
      products: "棕刚玉氧化铝砂卷、C-weight 乳胶纸砂纸、细节迷你塑料打磨棒。",
      packaging: "带自撕金属切齿的高韧纸瓦楞卷装分装盒，多目数混合挂卡袋装。",
    },
    {
      id: "automotive",
      name: "汽配轮毂修复与金属饰条抛光",
      tag: "异形狭缝打磨与镁铝合金深度镜面还原",
      challenges: "铝合金轮毂、不锈钢排气管出口和车身镀铬条有大量深槽、盲角，需要适配具体工具和工件的带柄抛光轮。研磨膏蜡与布轮组合应先在基材样件上验证切削力、光泽和划痕表现。",
      products: "带柄圆台/圆柱形高密度打磨布轮、绿铬高镜面抛光膏、精细碳化硅干湿两用砂纸。",
      packaging: "双吸塑吸卡零售纸板挂卡（带柄轮接头）。",
    },
    {
      id: "jewelry",
      name: "珠宝、精细手作与 3D 打印模型后处理",
      tag: "高精度微细尺寸表面拋光精整",
      challenges: "树脂模型合模线、金银首饰死角以及精致手工艺品在修边时需要微型工具。标准轨道打磨机力度过猛，极易磨圆工件本身的精细棱角或损坏浮雕造型。",
      products: "细节弹簧打磨杆、替换超细目数环形砂带、松缝白色 flannel 黄绒精抛布轮。",
      packaging: "透明悬挂带吊卡头吊带，专为零售设计的展示塑料袋。",
    },
    {
      id: "drywall",
      name: "石膏板墙面打磨与装修施工",
      tag: "镂空玻璃纤维网格防堵塞吸尘打磨",
      challenges: "白灰、腻子和石膏接缝层容易使普通砂纸快速积灰。开放式网格可让粉尘穿过，并在匹配的吸尘设备和密封条件下改善集尘效果。",
      products: "碳化硅双面网格砂网、墙面打磨砂卷、工装大包装耗材。",
      packaging: "大包工程简易箱，单袋 10 张纸卡塑封零售包。",
    },
    {
      id: "online-sellers",
      name: "跨境电商专属打磨抛光工具包",
      tag: "面向亚马逊、Shopify 及沃尔玛的包装规划",
      challenges: "跨境五金电商退货的一大诱因是兼容性含糊和说明书缺失。线上套装包装需要做到自重极轻以节省仓储物流阶梯费用，同时内附图解指引以消除不必要的买家差评。",
      products: "精装抛光轮+抛光蜡大礼包、多目数混合纸砂卷、细节打磨杆带备用带套装。",
      packaging: "飞机盒、买家提供的条码与图文说明卡可作为询价范围；平台、警告语、扫码与入仓要求须按项目当期规则批准。",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page header */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 text-left">
              <Breadcrumbs items={[{ label: "首页", href: "/zh" }, { label: "应用场景", href: "/zh/applications" }]} />
              <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">行业应用工作流</span>
              <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
                针对不同底材的表面研磨与抛光搭配
              </h1>
              <p className="mt-4 text-base text-industry-slate-400 leading-relaxed">
                这些场景用于起草不同材质的耗材 RFQ；产品来源、工具兼容性、性能与包装需通过书面报价和代表性样品批准。
              </p>
            </div>
            
            <div className="lg:col-span-5 hidden lg:block">
              <div className="glass-panel rounded-xl overflow-hidden border border-industry-slate-800 shadow-2xl relative">
                <img
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  src="/images/applications_banner.webp"
                  alt="SCOTTCHEN 研磨抛光应用场景"
                  className="object-cover w-full h-48 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways / B2B Quick Facts */}
      <section className="py-8 bg-industry-slate-900 border-b border-industry-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-industry-slate-800 bg-industry-slate-950/40 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="md:w-1/3">
                <span className="text-[10px] font-mono font-bold tracking-widest text-industry-orange uppercase">应用搭配</span>
                <h2 className="text-2xl font-black text-white mt-1">打磨工艺协同效应</h2>
                <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">
                  专为金工、木作、汽修、珠宝模型与家装批灰定制的科学工艺参数。
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>金属打磨询价:</strong> 写清金属、缺陷、工具、工序与目标表面；磨片、布轮和抛光膏配对须由来源资料与工件测试批准。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>木工与墙面询价:</strong> 写清基材、干湿方式、吸尘设备、尺寸与目标粒度；砂纸、砂网或砂卷结构按 SKU 核验。</span>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>异形件与精细工件:</strong> 写清工具接口、操作空间、基材与表面目标；柄部、形状、材料和使用限制按样品批准。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>分销零售配套:</strong> 可讨论吸塑、彩卡和礼盒方案；最终数量、条码扫描检查及平台要求写入报价与包装确认稿。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Matrix */}
      <section className="py-16 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app) => (
              <div
                key={app.id}
                id={app.id}
                className="glass-panel p-8 rounded-lg flex flex-col justify-between hover:border-industry-orange/40 transition-colors group border-t-2 border-t-industry-slate-800 focus-within:border-industry-orange"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-industry-orange font-mono uppercase tracking-wide">
                      {app.tag}
                    </span>
                    <span className="text-[10px] font-mono text-industry-slate-500 uppercase bg-industry-slate-950 px-2 py-0.5 rounded border border-industry-slate-800">
                      工作流代号: {app.id.substring(0, 3).toUpperCase()}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-extrabold text-white group-hover:text-industry-orange transition-colors">
                    {app.name}
                  </h3>
                  
                  <div className="text-sm text-industry-slate-300 leading-relaxed pt-2">
                    <strong className="text-white text-xs block uppercase mb-1">核心工艺痛点:</strong>
                    {app.challenges}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-industry-slate-850 pt-4 text-xs font-mono">
                    <div>
                      <span className="text-industry-slate-500 block uppercase">推荐工具组合:</span>
                      <span className="text-white font-bold leading-normal">{app.products}</span>
                    </div>
                    <div>
                      <span className="text-industry-slate-500 block uppercase">建议包装形式:</span>
                      <span className="text-white font-bold leading-normal">{app.packaging}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-industry-slate-850 pt-4">
                  <Link
                    href="/zh/contact"
                    className="text-xs font-bold text-industry-orange hover:text-industry-orange-light uppercase tracking-wider transition-colors"
                  >
                    索取专属工艺包报价 &rarr;
                  </Link>
                  <Link
                    href="/zh/sample-kit"
                    className="text-xs font-bold text-white bg-industry-slate-850 hover:bg-industry-slate-800 px-4 py-2 rounded transition-colors"
                  >
                    申请样品包
                  </Link>
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
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">技术答疑 FAQ</span>
            <h2 className="text-3xl font-extrabold text-white mt-3">工艺搭配与耗材选择</h2>
            <p className="mt-4 text-sm text-industry-slate-400">
              为您解答磨料材质搭配、目数范围级配、吸尘打磨机兼容性以及贴牌混装定制。
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "在金属研磨抛光中，如何配合使用锆刚玉纤维磨片与棉布抛光轮？",
                a: "纤维磨片与棉布轮可用于不同工序。应先定义工件、缺陷、工具、目标表面和安全要求，再在相同条件下比较报价方案，不应由网站预设固定磨料、速度或工艺结果。"
              },
              {
                q: "木工家具砂纸与精细打磨棒的常规目数是如何级配配置的？",
                a: "本页没有默认套装。买家应定义木材、涂层、去除工序与目标表面；报价 BOM 再列明各粒度、背基、组件来源和包装数量，并由代表性样品批准。"
              },
              {
                q: "镂空墙面网格砂网可以配合市场上主流的吸尘抛磨设备使用吗？",
                a: "开放式网格方案必须与买家的具体打磨机、底盘、集尘路径和密封条件一起测试。网格材料、尺寸、孔型、集尘表现和工具适配按报价 SKU 与代表性试用确认；本页不作无尘或固定尺寸兼容承诺。"
              },
              {
                q: "汽车轮毂和不锈钢排气管抛光的柄装棉轮有什么转速和适配要求？",
                a: "可在询价中提出圆柄或六角接柄需求，但必须核对夹头、工具、标签工作限制和制造商要求。柄径、形状、材料与转速以报价 SKU 和样件测试为准。"
              },
              {
                q: "我们可以根据特定的网店主打场景进行贴牌设计吗？",
                a: "可以。采购商可定义目标工作场景，再共同确认布轮结构、抛光膏组合、彩盒稿件、条码数据和外箱标识。量产与上线条件以双方批准的规格、样品及平台当期规则为准。"
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


      {/* Persistent CTA Banner */}
      <CTASection />
    </div>
  );
}
