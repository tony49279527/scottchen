import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl, SITE_UPDATED } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "磨料、背基与砂纸目数选型指南 | SCOTTCHEN",
  description:
    "面向 B2B 采购的磨料选型指南，覆盖磨粒、背基、FEPA P 目数、样品验收、GS1 条码质量与 Incoterms 报价要求。",
  path: "/zh/resources/abrasive-material-selection-guide",
  alternatePath: "/resources/abrasive-material-selection-guide",
  locale: "zh-CN",
});

const sources = [
  {
    label: "FEPA 磨料标准与 P 目数命名",
    href: "https://fepa-abrasives.org/abrasives/standards/",
  },
  {
    label: "FEPA 涂附磨具结构说明",
    href: "https://fepa-abrasives.org/abrasives/",
  },
  {
    label: "FEPA 磨料产品安全资料",
    href: "https://fepa-abrasives.org/safety/safety-publications/",
  },
  {
    label: "GS1 条码质量检查",
    href: "https://support.gs1.org/support/solutions/articles/43000734141-what-should-i-check-to-ensure-good-quality-barcodes-",
  },
  {
    label: "ICC Incoterms 2020 概览",
    href: "https://iccwbo.org/business-solutions/incoterms-rules/incoterms-2020/",
  },
] as const;

const grainRows = [
  {
    grain: "氧化铝",
    commonFit: "木材及多种金属的通用打磨起点",
    verify: "底材、涂层方式、背基、压力与目标表面效果",
  },
  {
    grain: "碳化硅",
    commonFit: "精细处理、湿磨及较硬或脆性表面",
    verify: "干湿用途、背基耐水性与实际划痕形态",
  },
  {
    grain: "锆刚玉",
    commonFit: "金属表面的较高压力余量去除",
    verify: "工具转速、磨片形式、工作压力与发热表现",
  },
] as const;

export default function ChineseAbrasiveMaterialSelectionGuide() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": absoluteUrl("/zh/resources/abrasive-material-selection-guide#article"),
    headline: "B2B 采购磨料、背基与砂纸目数选型指南",
    description: "帮助采购商编写可比较的磨料规格与样品验收条件。",
    inLanguage: "zh-CN",
    mainEntityOfPage: absoluteUrl("/zh/resources/abrasive-material-selection-guide"),
    author: { "@id": `${absoluteUrl("/")}#organization` },
    publisher: { "@id": `${absoluteUrl("/")}#organization` },
    datePublished: SITE_UPDATED,
    dateModified: SITE_UPDATED,
    citation: sources.map((source) => source.href),
    about: ["涂附磨具", "FEPA P 目数", "贴牌采购", "条码质量"],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <section className="border-b border-industry-slate-800 bg-industry-slate-950 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            ariaLabel="面包屑导航"
            items={[
              { label: "首页", href: "/zh" },
              { label: "采购资源", href: "/zh/resources/abrasive-sourcing-checklist" },
              {
                label: "磨料选型指南",
                href: "/zh/resources/abrasive-material-selection-guide",
              },
            ]}
          />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            规格编制指南
          </span>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            磨料、背基与砂纸目数选型指南
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-industry-slate-300">
            把实际工况转化为可比较的砂纸、磨片或表面处理套装 RFQ。
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-industry-slate-400">
            <span>发布：SCOTTCHEN 采购内容团队</span>
            <span>技术参考复核：2026 年 6 月 28 日</span>
          </div>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-industry-orange/30 bg-industry-orange/5 p-7 sm:p-9">
            <h2 className="text-2xl font-bold text-white">给采购团队的简短结论</h2>
            <p className="mt-4 leading-relaxed text-industry-slate-200">
              不要只凭目数批准磨料产品。可比较的规格至少应包含底材、工序、磨粒、背基、涂层或结合方式、尺寸、工具接口、工作限制、包装及双方同意的样品测试。
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-xl border border-industry-slate-800">
            <table className="min-w-full divide-y divide-industry-slate-800 text-left text-sm">
              <thead className="bg-industry-slate-950 text-industry-slate-300">
                <tr>
                  <th className="px-5 py-4 font-bold">磨粒类别</th>
                  <th className="px-5 py-4 font-bold">常见选型起点</th>
                  <th className="px-5 py-4 font-bold">买家必须验证</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-industry-slate-800 bg-industry-slate-900">
                {grainRows.map((row) => (
                  <tr key={row.grain}>
                    <th className="px-5 py-4 font-bold text-white">{row.grain}</th>
                    <td className="px-5 py-4 text-industry-slate-300">{row.commonFit}</td>
                    <td className="px-5 py-4 text-industry-slate-300">{row.verify}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-industry-slate-400">
            上表是采购起点，不是通用性能保证。最终选型必须在买家的真实工件和工具上进行代表性样品测试。
          </p>
        </div>
      </section>

      <section className="border-y border-industry-slate-800 bg-industry-slate-950 py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="glass-panel rounded-xl p-7 sm:p-9">
            <span className="font-mono text-sm font-bold text-industry-orange-light">01</span>
            <h2 className="mt-3 text-2xl font-bold text-white">使用正确的目数体系</h2>
            <p className="mt-4 leading-relaxed text-industry-slate-300">
              FEPA 将涂附磨具的 P 目数与固结磨具的 F 目数区分开。采购文件应记录完整标识，不要在不同产品类型之间只复制一个数字。FEPA 还指出，磨粒尺寸是分布范围，而不是单一粒径。
            </p>
          </article>
          <article className="glass-panel rounded-xl p-7 sm:p-9">
            <span className="font-mono text-sm font-bold text-industry-orange-light">02</span>
            <h2 className="mt-3 text-2xl font-bold text-white">写清背基要求</h2>
            <p className="mt-4 leading-relaxed text-industry-slate-300">
              涂附磨具由背基、磨粒及粘结涂层组成。应写明纸、布、薄膜、纤维或网格背基，并在确认规格中定义柔韧性、抗撕裂、干湿用途和安装方式。
            </p>
          </article>
          <article className="glass-panel rounded-xl p-7 sm:p-9">
            <span className="font-mono text-sm font-bold text-industry-orange-light">03</span>
            <h2 className="mt-3 text-2xl font-bold text-white">批准统一测试方法</h2>
            <p className="mt-4 leading-relaxed text-industry-slate-300">
              在目标底材上比较切削效率、划痕一致性、有效寿命、发热、掉砂、附着力及装配尺寸。保留确认样，并记录工具、转速、压力和测试时间。
            </p>
          </article>
          <article className="glass-panel rounded-xl p-7 sm:p-9">
            <span className="font-mono text-sm font-bold text-industry-orange-light">04</span>
            <h2 className="mt-3 text-2xl font-bold text-white">按 SKU 确认安全信息</h2>
            <p className="mt-4 leading-relaxed text-industry-slate-300">
              工作限制与安全说明取决于产品结构及工具兼容性。采购时应索取对应 SKU 的标示限制和适用说明，不要把一个通用 RPM 数值套用于不同布轮、磨片或带柄配件。
            </p>
          </article>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white">包装与商业放行</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="glass-panel rounded-xl p-7">
              <h3 className="text-xl font-bold text-white">条码放行检查</h3>
              <p className="mt-3 text-sm leading-relaxed text-industry-slate-300">
                GS1 将校验位、静区、对比度、符号尺寸、条高、包装干扰、破损和位置列为常见质量检查项。买家提供的条码数据仍应在最终包装材料上进行扫描检查。
              </p>
            </div>
            <div className="glass-panel rounded-xl p-7">
              <h3 className="text-xl font-bold text-white">写明交付规则</h3>
              <p className="mt-3 text-sm leading-relaxed text-industry-slate-300">
                ICC Incoterms 规则用于分配买卖双方的义务、风险和成本。报价中应写完整规则、指定地点及版本；FOB、CIF 或 DAP 如果没有具体地点，并不完整。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-industry-slate-800 bg-industry-slate-950 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">主要参考来源</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-industry-slate-400">
            以下官方资料支持本指南中的标准与采购原则。具体产品适用性和合同条款仍以项目文件为准。
          </p>
          <ul className="mt-6 grid gap-3">
            {sources.map((source) => (
              <li key={source.href}>
                <a
                  className="text-sm font-semibold text-industry-orange-light hover:underline"
                  href={source.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {source.label} ↗
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white" href="/zh/resources/abrasive-sourcing-checklist">
              打开 RFQ 检查清单
            </Link>
            <Link className="rounded border border-industry-slate-700 px-5 py-3 text-sm font-bold text-white" href="/zh/supplier-profile">
              查看供应商档案
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <CTASection />
    </div>
  );
}
