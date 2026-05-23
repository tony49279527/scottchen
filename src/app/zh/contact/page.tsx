import type { Metadata } from "next";
import RFQForm from "@/components/RFQForm";

export const metadata: Metadata = {
  title: "索取 OEM / 磨料磨具批发大货报价 | SCOTTCHEN",
  description: "联系 SCOTTCHEN 索取抛光布轮、打磨耗材大货批发价格表、交期进度、定制彩盒刀模图及国际物流集装箱出口方案。",
  alternates: {
    canonical: "https://www.scottchentools.com/zh/contact",
    languages: {
      "en": "https://www.scottchentools.com/contact",
      "zh-CN": "https://www.scottchentools.com/zh/contact",
      "x-default": "https://www.scottchentools.com/contact",
    },
  },
};

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
                  询盘答复时效：工作日 &lt; 24小时 100% 反馈
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  直连联系渠道
                </h3>
                
                <div className="space-y-4 text-xs font-mono text-industry-slate-400">
                  <div>
                    <span className="text-industry-slate-500 block uppercase">销售中心地址:</span>
                    <span className="text-white font-bold leading-normal">
                      Scottchen (SCOTTCHEN) 磨耗工具有限公司<br />
                      中国上海市工业环路88号
                    </span>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block uppercase">商业询盘邮箱:</span>
                    <a href="mailto:sales@scottchentools.com" className="text-white font-bold hover:underline">
                      sales@scottchentools.com
                    </a>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block uppercase">供应链领英:</span>
                    <a href="https://www.linkedin.com/company/scottchen-tools" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:underline">
                      linkedin.com/company/scottchen-tools &rarr;
                    </a>
                  </div>
                  <div>
                    <span className="text-industry-slate-500 block uppercase">商业直通热线 / WhatsApp:</span>
                    <a href="tel:+862161002008" className="text-white font-bold hover:underline">
                      +86-21-6100-2008
                    </a>
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
