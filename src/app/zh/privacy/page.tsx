import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "隐私政策 | SCOTTCHEN",
  description:
    "了解 SCOTTCHEN 如何收集、使用、保护和管理 B2B 询盘、样品申请、网站分析与商务沟通信息。",
  path: "/zh/privacy",
  alternatePath: "/privacy",
  locale: "zh-CN",
});

export default function ChinesePrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-industry-slate-900">
      <section className="bg-industry-slate-950 border-b border-industry-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs
            ariaLabel="面包屑导航"
            items={[{ label: "首页", href: "/zh" }, { label: "隐私政策", href: "/zh/privacy" }]}
          />
          <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">
            B2B 信任与数据安全
          </span>
          <h1 className="text-3xl font-extrabold text-white mt-3 sm:text-4xl">
            隐私政策
          </h1>
          <p className="mt-4 text-base text-industry-slate-400 max-w-2xl mx-auto leading-relaxed">
            生效日期：2026年6月28日。本政策说明 SCOTTCHEN 网站如何处理商务询盘和样品申请信息。
          </p>
        </div>
      </section>

      <section className="py-16 flex-grow">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-12 rounded-lg border border-industry-slate-800/80 bg-industry-slate-950/40 space-y-8 text-sm text-industry-slate-300 leading-relaxed">
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                1. 概述
              </h2>
              <p>
                SCOTTCHEN 使用您主动提交的商务信息来回复批发报价、评估样品申请，并沟通定制产品、包装、条码和交付需求。
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                2. 我们收集的信息
              </h2>
              <p>当您提交询价或样品申请表单时，我们可能收集以下信息：</p>
              <ul className="list-disc pl-5 space-y-2.5 font-mono text-xs text-industry-slate-400">
                <li>
                  <strong>联系信息：</strong>姓名、公司名称、邮箱和所在国家或地区。
                </li>
                <li>
                  <strong>商务背景：</strong>公司网站、买家类型、目标市场、预计采购量和应用场景。
                </li>
                <li>
                  <strong>技术需求：</strong>产品类别、尺寸、粒度、材质、包装、贴牌和条码需求。
                </li>
                <li>
                  <strong>提交上下文：</strong>语言、着陆页、来源页面、UTM 参数、提交时间、IP、浏览器 User-Agent 和内部线索评分。
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                3. 信息使用方式
              </h2>
              <p>我们仅围绕 B2B 商务沟通和网站安全使用这些信息，包括：</p>
              <ul className="list-disc pl-5 space-y-2 text-industry-slate-350">
                <li>在报价前理解产品、包装、工具接口和验收要求。</li>
                <li>将询盘发送到配置的业务邮箱或内部 webhook，并防止自动化滥用。</li>
                <li>在项目推进时沟通样品、物流、包装稿件和买家提供的条码资料。</li>
                <li>在配置 GA4 且访客同意后，用匿名化或聚合方式衡量页面和询盘入口效果。</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                4. 共享与保留
              </h2>
              <p>
                我们不会出售或出租询盘联系人数据用于第三方广告。信息可能由网站托管、询盘投递、安全、同意后的分析服务商处理；如项目进入执行阶段，也可能与物流、检验或履约所需服务商共享必要信息。
              </p>
              <p>
                我们仅在回复需求、维护商务记录和满足适用法律义务所需期间保留信息。您可以在适用法律允许的范围内申请访问、更正或删除。
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                5. 您的请求
              </h2>
              <p>
                如需访问、更正、删除、限制处理或索取个人信息副本，请联系{" "}
                <a href="mailto:sales@scottchentools.com" className="text-industry-orange hover:underline font-bold font-mono">
                  sales@scottchentools.com
                </a>
                。我们可能需要核验请求人身份，并在法律要求或维权需要时保留必要记录。
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                6. Cookie 与本地存储
              </h2>
              <p>
                网站会在浏览器本地保存主题偏好和分析同意状态。Google Analytics 仅在配置并获得同意后加载。我们不使用广告再营销或跨站追踪像素。更多信息请查看{" "}
                <a href="/zh/cookie-policy" className="text-industry-orange hover:underline font-bold">
                  Cookie 政策
                </a>
                。
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider border-b border-industry-slate-800 pb-2">
                7. 联系方式
              </h2>
              <p>如有数据安全、隐私或商务合规问题，请联系：</p>
              <div className="bg-industry-slate-950 p-6 rounded border border-industry-slate-800 font-mono text-xs text-industry-slate-400 space-y-2">
                <div>
                  <span className="text-white font-bold">品牌：</span>SCOTTCHEN
                </div>
                <div>
                  <span className="text-white font-bold">邮箱：</span>
                  <a href="mailto:sales@scottchentools.com" className="text-industry-orange hover:underline">
                    sales@scottchentools.com
                  </a>
                </div>
              </div>
              <p className="text-xs text-industry-slate-500">
                本中文页面用于方便中文访客理解；实际项目的数据处理和合同义务以适用法律及双方确认的项目文件为准。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
