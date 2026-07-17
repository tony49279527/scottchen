import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import RFQForm from "@/components/RFQForm";
import { createPageMetadata } from "@/lib/seo";
import {
  absoluteUrl,
  SITE_UPDATED,
} from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "索取 OEM / 磨料磨具批发大货报价 | SCOTTCHEN",
  description: "联系 SCOTTCHEN 获取磨料磨具 B2B 采购与 OEM 项目支持，包括按 SKU 确认的生产来源、证据、报价排期、包装和物流假设。",
  path: "/zh/contact",
  alternatePath: "/contact",
  locale: "zh-CN",
});

const rfqSpecificationItems = [
  "产品类别与目标应用场景",
  "抛光轮外径、叠层数、中心孔或柄部尺寸",
  "磨粒类别、目数清单、背基材料和组合比例",
  "贴牌包装形式、刀模、条码和外箱唛头要求",
  "目标数量、目的市场、Incoterms 规则和优先出运方案",
] as const;

const firstReplyItems = [
  "建议的产品或套装配置，以及仍需确认的规格问题",
  "基于目标数量和包装范围的 MOQ 与报价口径",
  "订单执行前的样品、证据、审批和质检计划路径",
  "书面项目排期、Incoterms 假设和下一步所需资料",
] as const;

export default function ChineseContact() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": absoluteUrl("/zh/contact#contactpage"),
        url: absoluteUrl("/zh/contact"),
        name: "索取 OEM / 磨料磨具批发大货报价 | SCOTTCHEN",
        description:
          "SCOTTCHEN 面向磨料、砂纸和抛光配件套装的 B2B 询价页面，覆盖贴牌包装、批发采购和 OEM 项目报价。",
        inLanguage: "zh-CN",
        dateModified: SITE_UPDATED,
        isPartOf: { "@id": absoluteUrl("/#website") },
        about: { "@id": absoluteUrl("/#organization") },
        mainEntity: { "@id": absoluteUrl("/#organization") },
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/zh/contact#rfq-specification-checklist"),
        name: "SCOTTCHEN 询盘建议提供的规格信息",
        itemListElement: rfqSpecificationItems.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item,
        })),
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "首页", href: "/zh" }, { label: "联系我们", href: "/zh/contact" }]} />
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
                  我们的商务团队会核对 B2B 询盘参数，目标是在 <strong>1 个工作日内</strong>通过电子邮件回复产品方向、待确认规格和下一步报价路径。
                </p>
                <div className="text-xs font-mono text-industry-orange">
                  目标答复时效：1 个工作日内
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg border border-industry-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                  首轮回复会包含什么
                </h3>
                <ul className="space-y-2 text-xs leading-relaxed text-industry-slate-300">
                  {firstReplyItems.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true" className="mt-1 text-industry-orange">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
                    <span className="text-industry-slate-500 block uppercase">证据状态:</span>
                    <a href="/zh/evidence-center" className="text-white font-bold hover:underline">
                      买家证据中心 &rarr;
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
                  {rfqSpecificationItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
