import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "磨具制造厂出厂质量控制与标准体系 | SCOTTCHEN",
  description: "了解SCOTTCHEN系统化的出厂质量控制检测流程：缝线拉力强度、中心孔公差精控、磨片动平衡测试以及条码贴标清晰度扫描审计。",
  alternates: {
    canonical: "https://www.scottchentools.com/zh/quality-control",
    languages: {
      "en": "https://www.scottchentools.com/quality-control",
      "zh-CN": "https://www.scottchentools.com/zh/quality-control",
      "x-default": "https://www.scottchentools.com/quality-control",
    },
  },
};

export default function ChineseQualityControl() {
  const qcPoints = [
    {
      title: "1. 原原材料进厂校验",
      desc: "对于抛光棉布轮，我们严格检测棉纱等级，确保选用 100% 精梳天然纯棉纤维，杜绝在高速研磨时发生受热熔化的化纤混纺成分。对于砂纸类磨料，我们抽检背纸克重参数（C-wt、J-wt 纸重及乳胶纸基），确保良好的物理韧度不发生崩裂掉砂。",
    },
    {
      title: "2. 棉布轮叠合层数与密度抽检",
      desc: "棉布轮通常以层数 (Ply) 作为厚度基准。一个虚标厚度或低密度的布轮在受压打磨时会发生松懈偏移，极大削弱表面精抛效率。我们采用高精度数片机构对 30 Ply, 40 Ply, 50 Ply 或 60 Ply 进行逐批计数，保证生产的每一批产品密度完全一致。",
    },
    {
      title: "3. 缝线环绕抗拉力强度测试",
      desc: "同心圆螺旋缝线是锁紧棉层、防止布轮散架的关键。若线径断裂，在高转速 (RPM) 作业下布轮会发生甩线或飞边解体，危及操作人员的人身安全。我们在每班开工前，采用抗拉力检测仪对缝合棉线进行强力测试。",
    },
    {
      title: "4. 中心孔径与铁盘公差精准控制",
      desc: "一个松动偏心的中心孔径会导致布轮在台式砂轮机转轴上产生剧烈的抖动偏心，造成操作手部麻木、磨耗不均并损坏磨床轴心。我们引入通止规检测，将中心孔孔径公差牢牢控制在 &plusmn;0.05 mm 以内，使定位套环贴合密实。",
    },
    {
      title: "5. 砂粒均匀度与光学粒度标定",
      desc: "在 P400 级超细砂纸中如果混入一颗粗大磨粒，就会在实木家具或镜面钢板上留下无法挽回的刺眼划痕，废掉整道喷漆工序。我们通过光学显微放大，对砂面颗粒均匀度进行监控，完全隔绝粗矿粒污染。",
    },
    {
      title: "6. 纤维砂碟动平衡与防甩偏测试",
      desc: "角磨机锆刚玉砂碟的常规工作转速高达 13,000 RPM。动平衡失调的碟片在旋转时产生巨大振颤，加速轴承磨损并导致手臂瞬间酸痛。我们对下线成品进行随机抽样，装入动平衡机进行动态离心偏移量测试。",
    },
    {
      title: "7. 粘接强度与耐温树脂附着检测",
      desc: "我们对砂碟和自粘魔术贴砂碟进行弯折拉扯剥离试验。如果粘接胶水耐温性能不佳，在干打磨发热时就会产生严重掉砂或起皮脱胶，我们坚决使用高耐温改性树脂粘接剂。",
    },
    {
      title: "8. 电商标签及外箱条码扫码审计",
      desc: "对于向亚马逊 FBA 仓库供货的跨境电商卖家，条码无法读取是一场灾难。我们在出货封箱前，采用工业级高对比度条码检验设备对彩盒上印刷的 FNSKU、UPC 等条码进行反射度读取测试，确保 100% 入仓一次通过。",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header (Top CTA) */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">信任与出厂验证</span>
            <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
              工业级磨具出厂质量控制与标准体系
            </h1>
            <p className="mt-3 text-base text-industry-slate-400">
              我们对棉轮孔径、缝线强度、磨料粒度一致性以及商用条码扫码率执行严格的批量化测试。
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/zh/contact"
              className="inline-flex justify-center items-center rounded bg-industry-orange px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-orange-hover hover:scale-[1.02] text-center"
            >
              申请获取质检报告
            </Link>
            <Link
              href="/zh/sample-kit"
              className="inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-slate-750 text-center"
            >
              申请测试样品包
            </Link>
          </div>
        </div>
      </section>

      {/* Key Takeaways / B2B Quick Facts */}
      <section className="py-8 bg-industry-slate-900 border-b border-industry-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-industry-slate-800 bg-industry-slate-950/40 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="md:w-1/3">
                <span className="text-[10px] font-mono font-bold tracking-widest text-industry-orange uppercase">质检数据</span>
                <h2 className="text-2xl font-black text-white mt-1">生产过程管控规范</h2>
                <p className="text-xs text-industry-slate-400 mt-2 leading-relaxed">
                  严苛的出厂质检规程，为全球分销商提供安心无客诉的供应链支撑。
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>精控中心定位孔:</strong> 抛光轮内径孔径公差控制在 &plusmn;0.05 mm 极限偏差内，完全防止高速运转抖动。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>破坏性超速测试:</strong> 锆刚玉重载盘及带柄小布轮在 1.5 倍额定转速离心机中进行飞散抽检，保障安全防线。</span>
                  </li>
                </ul>
                <ul className="space-y-2.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>光学粒度校正:</strong> 严密的分离筛选环境，杜绝在极细目砂纸中混入大粗颗粒，保护最终高光表面。</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-industry-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-industry-slate-200"><strong>国际第三方监装:</strong> 大货入箱贴标符合国际物流抗压标准。支持 SGS、TUV 等指定验货机构进厂检验。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QC Detail Sections */}
      <section className="py-16 bg-industry-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content column */}
            <div className="lg:col-span-8 space-y-8">
              <h2 className="text-xl font-extrabold text-white tracking-wide border-b border-industry-slate-800 pb-2">
                出厂前抽检测试项目
              </h2>

              <div className="grid grid-cols-1 gap-6">
                {qcPoints.map((point) => (
                  <div key={point.title} className="glass-panel p-6 rounded-lg space-y-3">
                    <h3 className="text-base font-bold text-industry-orange">{point.title}</h3>
                    <div className="text-sm text-industry-slate-350 leading-relaxed">
                      {point.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Whitepaper Section */}
              <div className="glass-panel p-8 rounded-lg space-y-6 bg-industry-slate-950/40 border border-industry-slate-800">
                <span className="text-xs font-bold font-mono tracking-widest text-industry-orange uppercase">技术白皮书</span>
                <h3 className="text-xl font-extrabold text-white">
                  工业标准规程：高转速研磨抛光磨耗件动平衡校验与安全公差控制规范
                </h3>
                <p className="text-sm text-industry-slate-300 leading-relaxed">
                  在高负荷工业表面加工与精整作业中，打磨头及布轮高速旋转会产生极大的离心剪切应力。为从源头消除转动震颤并保护主轴与轴承，SCOTTCHEN 全线执行符合 ISO 1940-1 的动平衡精调规范。
                </p>
                <div className="space-y-4 text-xs text-industry-slate-400 font-mono">
                  <div className="border-l-2 border-industry-orange pl-3 space-y-1">
                    <strong className="text-white">一、 ISO 1940-1 动平衡等级（目标：G6.3 / G2.5 级）</strong>
                    <p className="leading-relaxed">
                      工厂出产的锆刚玉重载纤维片及加固金属盘棉布轮均需通过动平衡机校验，将允许的最大残余不平衡量控制在 G6.3 级限度内，完全杜绝轴承因交变剪切力发生金属疲劳损坏。
                    </p>
                  </div>
                  <div className="border-l-2 border-industry-orange pl-3 space-y-1">
                    <strong className="text-white">二、 离心力计算系数与超速安全系数</strong>
                    <p className="leading-relaxed">
                      基于离心应力公式 (sigma = rho * omega^2 * r^2) 精细核算强度，车缝线拉力与底材树脂背胶能够安全承受 1.5 倍额定转速运行而不发生基体崩裂，确保颗粒磨损掉落率低于 0.02%。
                    </p>
                  </div>
                  <div className="border-l-2 border-industry-orange pl-3 space-y-1">
                    <strong className="text-white">三、 中心同轴度与孔径尺寸配合参数</strong>
                    <p className="leading-relaxed">
                      我们把中心法兰盘及定位套的内孔直径偏差收窄在 &plusmn;0.05 mm 公差区间，与 bench grinder 轴心贴合紧密无间，彻底规避因偏心抖动引起的跳动和操作震手感。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Information Column */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="glass-panel rounded-lg overflow-hidden border border-industry-slate-800 shadow-xl relative">
                <img
                  src="/images/quality_inspection.png"
                  alt="SCOTTCHEN 抛光轮中心孔及动平衡检测"
                  className="object-cover w-full h-56 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industry-slate-950 via-transparent to-transparent" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  工厂出厂公差界限
                </h3>
                <ul className="space-y-3 text-xs font-mono">
                  <li className="flex justify-between">
                    <span className="text-industry-slate-500">中心孔孔径公差:</span>
                    <span className="text-white font-bold">&plusmn; 0.05 mm</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-industry-slate-500">外圆直径偏差:</span>
                    <span className="text-white font-bold">&plusmn; 1.0 mm</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-industry-slate-500">目数颗粒均匀率:</span>
                    <span className="text-white font-bold">99% 均匀一致</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-industry-slate-500">车缝缝线环距偏差:</span>
                    <span className="text-white font-bold">&plusmn; 0.5 mm</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-industry-slate-500">极限安全破坏转速:</span>
                    <span className="text-white font-bold">1.5倍额定转速无损</span>
                  </li>
                </ul>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  船前第三方检验
                </h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  我们全力支持采购代表或派遣第三方质检机构（如 SGS、V-Trust 验货服务）在集装箱装柜前进入工厂成品仓库进行批次复检，并提供完善的厂内批次检测单据。
                </p>
                <p className="text-xs text-industry-orange font-mono font-bold">
                  高一致性是 SCOTTCHEN 对全球分销体系的庄严承诺。
                </p>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4 text-center">
                <h4 className="text-sm font-bold text-white uppercase">亲自检验我们的工艺质量</h4>
                <p className="text-xs text-industry-slate-400">
                  申领一盒标准大货规格的物理样品包，在您本国的试验车间中对缝线强度和磨料目数进行实地检测。
                </p>
                <Link
                  href="/zh/sample-kit"
                  className="w-full inline-flex justify-center items-center rounded bg-industry-orange py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-industry-orange-hover"
                >
                  配置测试样品包
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-industry-slate-950 border-t border-industry-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">质检体系 FAQ</span>
            <h2 className="text-3xl font-extrabold text-white mt-3">质量控制常见问题</h2>
            <p className="mt-4 text-sm text-industry-slate-400">
              面向采购方整理的出厂物理公差、动平衡规范以及船前现场检验等流程问答。
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "SCOTTCHEN 对台式抛光布轮的中心孔（Bore）有什么公差限制？",
                a: "对于台磨机和手持钻适配的所有布轮产品，我们执行严苛的 &plusmn;0.05 mm 孔径公差限制。这保证了装机后的牢固同轴度，在运转时没有偏斜导致的摆动，最大程度降低由于震动对磨床主轴和轴承造成的径向损耗。"
              },
              {
                q: "如何确立棉布轮层数 (Ply) 的真实性与叠合密度？",
                a: "每一生产批次在裁布成型后均需称重。我们配有专业的层数计数机构，确保交货厚度完全匹配规格书（如 30 Ply, 40 Ply, 50 Ply 叠合层），在受挤压时布质坚韧饱满，绝不通过松散排布来克扣原料。"
              },
              {
                q: "纤维打磨砂盘的动平衡安全测试是怎么实施的？",
                a: "角磨机锆刚玉纤维片转速极快。我们在工厂端使用动态离心动平衡测试转轴，随机提取批量大货，加速到 1.5 倍的额定极限安全转速以做破坏性抗裂测试，防止树脂底胶受热龟裂或碟片变形甩偏造成安全意外。"
              },
              {
                q: "你们怎么防范大货磨料或研磨膏（蜡条）发生目数污染与粗颗粒渗漏？",
                a: "我们在出产车间实施完全物理隔离。粗目数抛光蜡（Emery 研磨蜡）和极细镜面蜡（如绿蜡、白蜡）的原料搅拌与注模区域完全独立；砂纸原砂的研磨筛选环境配有高目数气流除尘，防止任何大于标称目数的颗粒掺杂其中刮伤高光表面。"
              },
              {
                q: "我们可以安排我们本国的第三方验货公司装柜前去仓库检验么？",
                a: "完全支持。我们无缝对接 SGS、TUV、V-Trust 或您派遣的任意第三方常驻检测人员。我们免费提供厂区里的精密通止卡规、拉力测试仪和动平衡架以供检验，并在发运前提供完整的内质检报告底单。"
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://www.scottchentools.com/zh/quality-control#faqpage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "SCOTTCHEN 对台式抛光布轮的中心孔（Bore）有什么公差限制？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "对于台磨机和手持钻适配的所有布轮产品，我们执行严苛的 &plusmn;0.05 mm 孔径公差限制。这保证了装机后的牢固同轴度，在运转时没有偏斜导致的摆动，最大程度降低由于震动对磨床主轴和轴承造成的径向损耗。"
                }
              },
              {
                "@type": "Question",
                "name": "如何确立棉布轮层数 (Ply) 的真实性与叠合密度？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "每一生产批次在裁布成型后均需称重。我们配有专业的层数计数机构，确保交货厚度完全匹配规格书（如 30 Ply, 40 Ply, 50 Ply 叠合层），在受挤压时布质坚韧饱满，绝不通过松散排布来克扣原料。"
                }
              },
              {
                "@type": "Question",
                "name": "纤维打磨砂盘的动平衡安全测试是怎么实施的？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "角磨机锆刚玉纤维片转速极快。我们在工厂端使用动态离心动平衡测试转轴，随机提取批量大货，加速到 1.5 倍的额定极限安全转速以做破坏性抗裂测试，防止树脂底胶受热龟裂或碟片变形甩偏造成安全意外。"
                }
              },
              {
                "@type": "Question",
                "name": "你们怎么防范大货磨料或研磨膏（蜡条）发生目数污染与粗颗粒渗漏？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "我们在出产车间实施完全物理隔离。粗目数抛光蜡（Emery 研磨蜡）和极细镜面蜡（如绿蜡、白蜡）的原料搅拌与注模区域完全独立；砂纸原砂的研磨筛选环境配有高目数气流除尘，防止任何大于标称目数的颗粒掺杂其中刮伤高光表面。"
                }
              },
              {
                "@type": "Question",
                "name": "我们可以安排我们本国的第三方验货公司装柜前去仓库检验么？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "完全支持。我们无缝对接 SGS、TUV、V-Trust 或您派遣的任意第三方常驻检测人员。我们免费提供厂区里的精密通止卡规、拉力测试仪和动平衡架以供检验，并在发运前提供完整的内质检报告底单。"
                }
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
