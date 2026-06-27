import Link from "next/link";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "磨料磨具采购检查清单：规格、样品与质检 | SCOTTCHEN",
  description:
    "面向进口商、工具品牌与渠道采购的磨料磨具 RFQ 清单，覆盖抛光轮、砂纸、磨片和贴牌套装的规格、样品、质检、包装与交付。",
  path: "/zh/resources/abrasive-sourcing-checklist",
  alternatePath: "/resources/abrasive-sourcing-checklist",
  locale: "zh-CN",
});

const sections = [
  {
    number: "01",
    title: "先定义实际工况",
    body: "先明确被加工材质、配套工具、工作转速和目标表面效果。同样直径的耗材，在底基、轮体密度、磨粒或抛光膏搭配不同的情况下，性能差异会非常明显。",
    checks: [
      "材质：碳钢、不锈钢、铝、木材、油漆、石膏板或复合材料",
      "工具接口：台式砂轮机、角磨机、手电钻、轨道砂光机或手工打磨",
      "工序：去除余量、找平、细化划痕、上色或镜面精抛",
    ],
  },
  {
    number: "02",
    title: "锁定书面技术规格",
    body: "不要只凭产品图片询价。要求供应商依据书面参数报价，并把尺寸与公差记录在封样或双方确认的规格表中。",
    checks: [
      "外形尺寸、轴孔、层数、底基材料、磨料类型及目数范围",
      "最高工作转速，以及与目标电动工具的适配要求",
      "单包数量、混合规格、替换件和标签信息",
    ],
  },
  {
    number: "03",
    title: "建立有代表性的样品计划",
    body: "有效样品应尽量代表量产配置，而不是仅提供相似的库存品。应在真实材质和工具上测试，并在量产前写清验收标准。",
    checks: [
      "比较切削效率、划痕一致性、发热和有效寿命",
      "检查跳动、平衡、掉毛掉砂、粘接强度和装配尺寸",
      "保留一套确认样，作为后续来料或出货检验基准",
    ],
  },
  {
    number: "04",
    title: "确认包装与标识",
    body: "对于零售和跨境电商项目，包装本身就是产品的一部分。印刷前确认刀模、条码位置、警示语、原产地标识和外箱装量。",
    checks: [
      "零售形式：彩盒、吸塑、吊卡袋、分配盒或大货散装",
      "条码类型与静区、说明书语言和必要安全信息",
      "外箱装量、尺寸、毛重和托盘要求",
    ],
  },
  {
    number: "05",
    title: "让不同报价可以比较",
    body: "向所有候选供应商发送同一套商务条件。缺少数量、包装、贸易术语和质量范围的单价，不具备可靠的可比性。",
    checks: [
      "目标订单量、年度预估量和可接受起订量",
      "样品时间、量产交期、贸易术语、目的地和付款条件",
      "验货方式、缺陷处理和出货前需要提供的文件",
    ],
  },
];

export default function ChineseAbrasiveSourcingChecklist() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "磨料磨具采购检查清单：规格、样品、质检与包装",
    description: "面向进口商、工具品牌和渠道采购人员的磨料磨具 RFQ 实用清单。",
    inLanguage: "zh-CN",
    mainEntityOfPage: absoluteUrl("/zh/resources/abrasive-sourcing-checklist"),
    publisher: { "@id": "https://www.scottchentools.com/#organization" },
    datePublished: "2026-06-27",
    dateModified: "2026-06-27",
  };

  return (
    <div className="flex min-h-screen flex-col">
      <section className="border-b border-industry-slate-800 bg-industry-slate-950 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 text-xs text-industry-slate-400" aria-label="面包屑导航">
            <Link href="/zh" className="hover:text-white">首页</Link>
            <span className="mx-2">/</span>
            <span>采购资源</span>
          </nav>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-industry-orange-light">
            采购实务指南
          </span>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            磨料磨具采购检查清单
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-industry-slate-300">
            用这份清单把模糊的产品需求转化为可比较的 RFQ、有效的样品计划和可执行的出货质量标准。
          </p>
        </div>
      </section>

      <section className="bg-industry-slate-900 py-16">
        <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6 lg:px-8">
          {sections.map((section) => (
            <article key={section.number} className="glass-panel rounded-xl p-7 sm:p-9">
              <div className="flex flex-col gap-5 sm:flex-row">
                <div className="font-mono text-3xl font-black text-industry-orange-light">
                  {section.number}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  <p className="mt-3 leading-relaxed text-industry-slate-300">{section.body}</p>
                  <ul className="mt-5 space-y-2 text-sm text-industry-slate-300">
                    {section.checks.map((check) => (
                      <li key={check} className="flex gap-3">
                        <span className="mt-1 text-industry-orange-light">✓</span>
                        <span>{check}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}

          <div className="grid gap-5 pt-4 sm:grid-cols-3">
            <Link href="/zh/products" className="rounded-lg border border-industry-slate-700 p-5 font-bold text-white hover:border-industry-orange">
              查看产品系列 →
            </Link>
            <Link href="/zh/quality-control" className="rounded-lg border border-industry-slate-700 p-5 font-bold text-white hover:border-industry-orange">
              查看质量控制 →
            </Link>
            <Link href="/zh/sample-kit" className="rounded-lg border border-industry-slate-700 p-5 font-bold text-white hover:border-industry-orange">
              规划样品申请 →
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
