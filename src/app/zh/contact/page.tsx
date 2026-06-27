import type { Metadata } from "next";
import RFQForm from "@/components/RFQForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "索取 OEM / 磨料磨具批发大货报价 | SCOTTCHEN",
  description: "联系 SCOTTCHEN 索取抛光布轮、打磨耗材大货批发价格表、交期进度、定制彩盒刀模图及国际物流集装箱出口方案。",
  path: "/zh/contact",
  alternatePath: "/contact",
  locale: "zh-CN",
});

export default function ChineseContact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">B2B 在线询盘通道</span>
          <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
            在线索取 OEM 代工 / 大货批发报价
          </h1>
          <p className="mt-4 text-base text-industry-slate-400 max-w-2xl mx-auto leading-relaxed">
            准备将定制打磨抛光工具包或您的私有品牌棉布轮引入您的产品目录么？请在下方提交您的规格参数需求。
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 bg-industry-slate-900 flex-grow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Form column */}
            <div className="lg:col-span-8">
              <RFQForm />
            </div>

            {/* Right Information Column */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  报价反馈时间
                </h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  我们的供应链销售团队会在收到 B2B 询盘参数后进行精细核算，并在 <strong>24小时（工作日）</strong>内通过电子邮件向您发送产品组合报价、交期安排及物流价格表。
                </p>
                <div className="text-xs font-mono text-industry-orange">
                  目标答复时效：1 个工作日内
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  可验证联系渠道
                </h3>
                
                <div className="space-y-4 text-xs font-mono text-industry-slate-400">
                  <div>
                    <span className="text-industry-slate-500 block uppercase">商业询盘邮箱:</span>
                    <a href="mailto:sales@scottchentools.com" className="text-white font-bold hover:underline">
                      sales@scottchentools.com
                    </a>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block uppercase">现有产品零售站:</span>
                    <a href="https://scottchen.online" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:underline">
                      scottchen.online &rarr;
                    </a>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block uppercase">提交询盘后补充文件:</span>
                    <span className="text-white font-bold leading-normal">
                      可直接通过回复邮件发送图纸、包装设计、条码文件或详细规格表。
                    </span>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  采购规格核对清单
                </h3>
                <p className="text-xs text-industry-slate-400 leading-relaxed">
                  为了最快速度为您定制高品质的报价，建议在留言中写明：
                </p>
                <ul className="space-y-1.5 text-xs text-industry-slate-400 pl-4 list-disc font-mono">
                  <li>棉轮的具体外径与叠层数 (Ply)</li>
                  <li>中心轴径内孔尺寸规格</li>
                  <li>砂纸所需的目数配比及纸重底基</li>
                  <li>包装盒/泡壳印刷的 CAD 刀模需求</li>
                  <li>首批大货预估采购柜量/数量</li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
