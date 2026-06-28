import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import {
  absoluteUrl,
  RETAIL_SITE_URL,
  SITE_EMAIL,
  SITE_NAME,
  SITE_UPDATED,
} from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "SCOTTCHEN B2B 供应商档案与采购尽调",
  description:
    "查看 SCOTTCHEN 已公开的 B2B 产品范围、贴牌合作流程、联系渠道、买家尽调清单，以及必须在报价中书面确认的商务条款。",
  path: "/zh/supplier-profile",
  alternatePath: "/supplier-profile",
  locale: "zh-CN",
});

const facts = [
  ["品牌", SITE_NAME],
  ["B2B 范围", "磨料、砂纸与抛光配件组合套装"],
  ["目标买家", "工具品牌、五金分销商、工业供应商及电商卖家"],
  ["服务语言", "中文与英文"],
  ["销售邮箱", SITE_EMAIL],
  ["零售参考站", "scottchen.online"],
] as const;

const verificationItems = [
  "报价单或合同中的法定供应商名称、注册地址与收款账户",
  "覆盖尺寸、材质、目数、背基、接口及包装的 SKU 规格表",
  "量产前确认样，以及双方书面约定的允收标准",
  "适用的检验记录、证书覆盖范围与第三方验货条款",
  "完整的 Incoterms 规则、交付地点、付款方式及货运和清关责任",
];

export default function ChineseSupplierProfile() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": absoluteUrl("/zh/supplier-profile#about"),
    url: absoluteUrl("/zh/supplier-profile"),
    name: "SCOTTCHEN B2B 供应商档案",
    inLanguage: "zh-CN",
    dateModified: SITE_UPDATED,
    mainEntity: {
      "@type": "Organization",
      "@id": `${absoluteUrl("/")}#organization`,
      name: SITE_NAME,
      url: absoluteUrl("/"),
      email: SITE_EMAIL,
      sameAs: [RETAIL_SITE_URL],
      knowsAbout: ["涂附磨具", "棉布抛光轮", "贴牌工具配件套装", "零售包装与条码准备"],
    },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <section className="border-b border-industry-slate-800 bg-industry-slate-950 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            ariaLabel="面包屑导航"
            items={[
              { label: "首页", href: "/zh" },
              { label: "供应商档案", href: "/zh/supplier-profile" },
            ]}
          />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            采购尽职调查
          </span>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            SCOTTCHEN B2B 供应商档案
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-industry-slate-300">
            集中说明本站公开了哪些事实、B2B 项目如何界定，以及买家在发出采购订单前应核实哪些供应商资料。
          </p>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="glass-panel rounded-xl p-7 lg:col-span-3 sm:p-9">
            <h2 className="text-2xl font-bold text-white">已公开的实体信息</h2>
            <dl className="mt-6 divide-y divide-industry-slate-800 text-sm">
              {facts.map(([label, value]) => (
                <div key={label} className="grid gap-2 py-4 sm:grid-cols-3">
                  <dt className="font-bold text-industry-slate-300">{label}</dt>
                  <dd className="text-industry-slate-200 sm:col-span-2">
                    {label === "销售邮箱" ? (
                      <a className="text-industry-orange-light hover:underline" href={`mailto:${SITE_EMAIL}`}>
                        {value}
                      </a>
                    ) : label === "零售参考站" ? (
                      <a
                        className="text-industry-orange-light hover:underline"
                        href={RETAIL_SITE_URL}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="rounded-xl border border-industry-orange/30 bg-industry-orange/5 p-7 lg:col-span-2">
            <h2 className="text-xl font-bold text-white">范围说明</h2>
            <p className="mt-4 text-sm leading-relaxed text-industry-slate-300">
              SCOTTCHEN 是本站及所链接零售参考站使用的产品品牌。网站档案不能替代法定供应商文件；签约主体、生产地点及收款账户必须以具体项目的报价单或合同为准。
            </p>
            <p className="mt-4 text-xs leading-relaxed text-industry-slate-400">
              最近复核：2026 年 6 月 28 日
            </p>
          </aside>
        </div>
      </section>

      <section className="border-y border-industry-slate-800 bg-industry-slate-950 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white">RFQ 可界定的项目范围</h2>
              <p className="mt-4 leading-relaxed text-industry-slate-300">
                买家可要求项目报价覆盖产品配置、混装套装、贴牌包装、条码位置、检验范围及物流假设。
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link className="rounded bg-industry-orange-cta px-5 py-3 text-sm font-bold text-white" href="/zh/contact">
                  提交询价
                </Link>
                <Link className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white" href="/zh/products">
                  查看产品范围
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">必须书面确认的条款</h2>
              <p className="mt-4 leading-relaxed text-industry-slate-300">
                MOQ、样品费、订单抵扣、交期、公差、性能测试、证书及物流均取决于具体配置。只有写入报价单、质检计划或合同后，才构成项目承诺。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            下单之前
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white">买家尽调检查清单</h2>
          <ol className="mt-8 grid gap-4">
            {verificationItems.map((item, index) => (
              <li key={item} className="glass-panel flex gap-4 rounded-lg p-5">
                <span className="font-mono text-xl font-black text-industry-orange-light">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed text-industry-slate-300">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CTASection />
    </div>
  );
}
