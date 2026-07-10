import type { Metadata } from "next";
import Image from "next/image";
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
  title: "关于 SCOTTCHEN | 上海磨料磨具 OEM 厂家",
  description:
    "SCOTTCHEN 是成立于 2014 年的上海磨料磨具 OEM 厂家，提供抛光轮、砂碟、百叶片、砂带、切割片与贴牌套装，支持询价、打样与出口交付。",
  path: "/zh/about",
  alternatePath: "/about",
  locale: "zh-CN",
});

const highlights = [
  { label: "成立年份", value: "2014" },
  { label: "总部", value: "中国上海" },
  { label: "业务重点", value: "OEM / 贴牌磨抛套装" },
  { label: "销售邮箱", value: SITE_EMAIL },
] as const;

const productLines = [
  { name: "抛光轮 / 抛光布轮", href: "/zh/buffing-wheels" },
  { name: "砂纸片 / 纤维砂碟", href: "/zh/sanding-discs" },
  { name: "百叶片", href: "/zh/flap-discs" },
  { name: "砂带", href: "/zh/sanding-belts" },
  { name: "切割片", href: "/zh/cutting-wheels" },
  { name: "贴牌磨具套装", href: "/zh/abrasive-kits" },
] as const;

export default function ZhAboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": absoluteUrl("/zh/about#webpage"),
        url: absoluteUrl("/zh/about"),
        name: "关于 SCOTTCHEN",
        description: "SCOTTCHEN 上海磨料磨具 OEM 厂家公司介绍与采购入口。",
        inLanguage: "zh-CN",
        dateModified: SITE_UPDATED,
        isPartOf: { "@id": absoluteUrl("/#website") },
        about: { "@id": absoluteUrl("/#organization") },
        mainEntity: { "@id": absoluteUrl("/#organization") },
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <section className="border-b border-industry-slate-800 bg-industry-slate-950 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            ariaLabel="面包屑"
            items={[
              { label: "首页", href: "/zh" },
              { label: "关于我们", href: "/zh/about" },
            ]}
          />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            公司介绍
          </span>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            关于 SCOTTCHEN
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-industry-slate-300">
            SCOTTCHEN 是位于上海的磨料磨具 OEM 厂家，面向工具品牌、分销商与跨境卖家，提供抛光轮、砂碟、百叶片、砂带、切割片及贴牌表面处理套装。
          </p>
        </div>
      </section>

      <section className="border-b border-industry-slate-800 bg-industry-slate-900 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label} className="glass-panel rounded-lg p-5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-industry-slate-500">
                  {item.label}
                </div>
                <div className="mt-2 break-all text-sm font-bold text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-industry-slate-950 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="space-y-5 lg:col-span-7">
            <h2 className="text-2xl font-extrabold text-white">我们是谁</h2>
            <p className="text-sm leading-relaxed text-industry-slate-300">
              自 2014 年起，SCOTTCHEN 服务需要明确规格、可贴牌包装与书面报价条款的 B2B 采购方。我们聚焦涂附磨具与棉布抛光类配件，覆盖打磨、砂光、精修与抛光流程。
            </p>
            <p className="text-sm leading-relaxed text-industry-slate-300">
              常见合作包括 OEM 套装设计、混合 SKU 组合、条码/FNSKU 准备、样品评估与整柜补货。起订量、交期、证书范围与贸易条款以各项目书面报价为准。
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/zh/china-abrasive-manufacturer"
                className="rounded bg-industry-orange-cta px-5 py-3 text-sm font-bold text-white"
              >
                查看工厂介绍
              </Link>
              <Link
                href="/zh/supplier-profile"
                className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white"
              >
                供应商尽调档案
              </Link>
              <Link
                href="/zh/contact"
                className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white"
              >
                联系销售
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="glass-panel overflow-hidden rounded-xl border border-industry-slate-800">
              <Image
                width={1024}
                height={1024}
                sizes="(min-width: 1024px) 36vw, 92vw"
                quality={70}
                loading="lazy"
                src="/images/hero_abrasives_kit.webp"
                alt="SCOTTCHEN 磨抛套装产品图"
                className="h-56 w-full object-cover opacity-90"
              />
              <div className="space-y-2 p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">产品线</h3>
                <ul className="space-y-2 text-sm text-industry-slate-300">
                  {productLines.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-industry-orange hover:underline">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-industry-slate-800 bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white">采购通常如何开始</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "说明目标 SKU 与市场",
                body: "告知产品类别、尺寸、粒度/层数、包装形式与目标市场。",
              },
              {
                step: "02",
                title: "申请样品或询价",
                body: "已验证的商业买家可申请样品，并获取含起订量与交期假设的书面报价。",
              },
              {
                step: "03",
                title: "量产前确认规格",
                body: "尺寸、材料、包装稿与验收标准在排产前书面锁定。",
              },
            ].map((item) => (
              <div key={item.step} className="glass-panel rounded-lg p-6">
                <div className="font-mono text-xs text-industry-orange">{item.step}</div>
                <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-industry-slate-400">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-industry-slate-400">
            零售参考站：{" "}
            <a
              href={RETAIL_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-industry-orange hover:underline"
            >
              {RETAIL_SITE_URL.replace(/^https?:\/\//, "")}
            </a>
            。本站品牌名：{SITE_NAME}。
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CTASection />
    </div>
  );
}
