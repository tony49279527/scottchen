import type { ProcurementGuideData } from "@/components/ProcurementGuidePage";

export const flapDiscGuide = {
  path: "/resources/flap-disc-rfq-guide",
  language: "en",
  eyebrow: "Flap Disc RFQ Guide",
  title: "How to Write a Comparable Flap Disc RFQ",
  intro: "Define the disc construction, target material, operating limits, sample test and evidence needed so suppliers quote the same product rather than visually similar alternatives.",
  sections: [
    {
      title: "Lock the disc specification",
      body: "A product photo is not enough. Record every field that changes cost, safety or grinding behavior.",
      items: ["Type 27 or Type 29 profile", "Diameter, bore and maximum labeled RPM", "Aluminum oxide, zirconia or ceramic grain", "Grit, flap count, density and backing plate"],
    },
    {
      title: "Define the application",
      body: "Give suppliers the same workpiece and tool conditions so recommendations and samples are comparable.",
      items: ["Carbon steel, stainless or alloy grade", "Weld blending, edge work or surface finishing", "Grinder model, guard and operating angle", "Target cut, finish, heat and change frequency"],
    },
    {
      title: "Build the sample acceptance plan",
      body: "Test identified samples under controlled conditions and retain one approved reference disc.",
      items: ["Measure material removed in a fixed time", "Record disc wear and usable life", "Check vibration, shedding, glazing and heat", "Photograph labels and retain sample IDs"],
    },
    {
      title: "Complete packaging and commercial inputs",
      body: "Ask for one written quotation that separates product, packaging, inspection and logistics assumptions.",
      items: ["Label artwork, warnings and traceability code", "Retail pack and master-carton configuration", "Quantity scenarios and quoted MOQ", "Incoterm, destination, milestones and inspection"],
    },
  ],
  supplierQuestions: ["Which legal entity and facility make the quoted SKU?", "Which test report covers this diameter, construction and maximum RPM?", "Will any grain, backing plate, adhesive or flap source change after sample approval?", "How are sample approval, production inspection and nonconforming lots documented?"],
  relatedLinks: [
    { label: "Flap disc product scope", href: "/flap-discs" },
    { label: "Quality-control plan", href: "/quality-control" },
    { label: "Request samples", href: "/sample-kit" },
    { label: "Submit an RFQ", href: "/contact" },
  ],
} satisfies ProcurementGuideData;

export const flapDiscGuideZh = {
  path: "/zh/resources/flap-disc-rfq-guide",
  language: "zh-CN",
  eyebrow: "百叶片 RFQ 指南",
  title: "如何编写可比较的百叶片询价单",
  intro: "写清百叶片结构、目标材料、使用限制、样品测试和证据要求，让不同供应商报价的是同一产品，而不是外观相似的替代品。",
  sections: [
    { title: "锁定百叶片规格", body: "产品图片不足以定义采购对象，应记录所有影响成本、安全和磨削表现的字段。", items: ["T27平面型或T29锥形", "直径、孔径和标签最高转速", "氧化铝、锆刚玉或陶瓷磨料", "粒度、片数、密度和底板"] },
    { title: "定义实际应用", body: "向所有供应商提供相同工件与工具条件，才能比较推荐和样品。", items: ["碳钢、不锈钢或合金牌号", "焊缝打磨、边角处理或表面精整", "角磨机型号、防护罩和工作角度", "目标切削、纹路、温升和换片频率"] },
    { title: "建立样品验收计划", body: "在受控条件下测试有明确编号的样品，并保留一片确认样。", items: ["固定时间内测量去除量", "记录磨耗和有效寿命", "检查振动、掉片、堵塞和温升", "拍摄标签并保留样品编号"] },
    { title: "补齐包装与商务输入", body: "要求一份书面报价，分开列明产品、包装、验货和物流假设。", items: ["标签设计、警告和追溯编码", "零售包装与外箱配置", "数量情景和报价起订量", "贸易术语、目的地、里程碑和验货"] },
  ],
  supplierQuestions: ["报价SKU由哪个法律主体和场地生产？", "哪一份测试报告覆盖该直径、结构和最高转速？", "样品批准后磨料、底板、胶黏剂或砂布来源是否会变化？", "如何记录样品批准、量产检验和不合格批次？"],
  relatedLinks: [
    { label: "查看百叶片范围", href: "/zh/flap-discs" },
    { label: "查看质量控制", href: "/zh/quality-control" },
    { label: "申请样品", href: "/zh/sample-kit" },
    { label: "提交询价", href: "/zh/contact" },
  ],
} satisfies ProcurementGuideData;

export const sandingBeltGuide = {
  path: "/resources/sanding-belt-rfq-guide",
  language: "en",
  eyebrow: "Sanding Belt RFQ Guide",
  title: "Sanding Belt RFQ Guide: Size, Joint, Grain and Sample Tests",
  intro: "Specify the machine, belt dimensions, grain, backing, joint and application before comparing sanding-belt samples, prices or lead times.",
  sections: [
    { title: "Record the machine and dimensions", body: "Exact fit is the first acceptance gate for standard and custom belts.", items: ["Machine brand and model", "Finished belt width and circumference", "Contact wheel or platen arrangement", "Belt direction and tolerance"] },
    { title: "Specify abrasive construction", body: "Grain alone does not define the belt. Backing, coat and joint influence tracking and useful life.", items: ["Aluminum oxide, zirconia, ceramic or silicon carbide", "Backing weight and flexibility", "Open or closed coat and optional treatment", "Joint type, overlap direction and thickness"] },
    { title: "Run a representative sample test", body: "Use the same machine, material, pressure and endpoint for every candidate.", items: ["Track start-up and steady-state cut rate", "Record splice bump, tracking and edge fray", "Measure heat, loading and belt wear", "Retain an approved sample and test sheet"] },
    { title: "Quote the complete program", body: "Separate the belt price from packaging, print, inspection and freight assumptions.", items: ["Grit assortment and units per pack", "Back print, labels and safety instructions", "Trial, replenishment and annual quantity scenarios", "Sample, production, inspection and shipping milestones"] },
  ],
  supplierQuestions: ["Who converts the belt and makes the joint for this SKU?", "Which backing and jumbo-roll source is quoted, and how are substitutions controlled?", "What finished-size and joint-thickness tolerances are inspected?", "How will tracking, splice failure and edge defects be handled after delivery?"],
  relatedLinks: [
    { label: "Sanding belt product scope", href: "/sanding-belts" },
    { label: "Material selection guide", href: "/resources/abrasive-material-selection-guide" },
    { label: "Request samples", href: "/sample-kit" },
    { label: "Submit an RFQ", href: "/contact" },
  ],
} satisfies ProcurementGuideData;

export const sandingBeltGuideZh = {
  path: "/zh/resources/sanding-belt-rfq-guide",
  language: "zh-CN",
  eyebrow: "砂带 RFQ 指南",
  title: "砂带询价指南：尺寸、接头、磨料与样品测试",
  intro: "在比较砂带样品、价格或交期前，先写清设备、砂带尺寸、磨料、布基、接头和实际应用。",
  sections: [
    { title: "记录设备与成品尺寸", body: "准确适配是标准和非标砂带的第一道验收条件。", items: ["设备品牌和型号", "成品宽度与周长", "接触轮或平板结构", "运行方向和尺寸公差"] },
    { title: "定义磨料结构", body: "磨料种类不能单独定义砂带，布基、植砂和接头也影响跑偏与寿命。", items: ["氧化铝、锆刚玉、陶瓷或碳化硅", "布基克重与柔软度", "疏植或密植及可选涂层", "接头类型、搭接方向和厚度"] },
    { title: "执行代表性样品测试", body: "所有候选样品使用相同设备、材料、压力和终点。", items: ["记录初始和稳定切削表现", "检查接头跳动、跑偏和边缘磨损", "测量温升、堵塞和砂带磨耗", "保留确认样和测试表"] },
    { title: "报价完整采购方案", body: "把砂带价格与包装、印刷、验货和运费假设分开。", items: ["粒度组合与每包数量", "背印、标签和安全说明", "试单、补货和年度数量情景", "样品、生产、验货和出运里程碑"] },
  ],
  supplierQuestions: ["该SKU由谁转换加工并制作接头？", "报价使用哪种布基和大卷砂布来源，替换如何受控？", "检验哪些成品尺寸和接头厚度公差？", "到货后的跑偏、断接头和边缘缺陷如何处理？"],
  relatedLinks: [
    { label: "查看砂带范围", href: "/zh/sanding-belts" },
    { label: "阅读磨料选型指南", href: "/zh/resources/abrasive-material-selection-guide" },
    { label: "申请样品", href: "/zh/sample-kit" },
    { label: "提交询价", href: "/zh/contact" },
  ],
} satisfies ProcurementGuideData;

export const cuttingWheelChecklist = {
  path: "/resources/cutting-wheel-compliance-checklist",
  language: "en",
  eyebrow: "Cut-Off Wheel Evidence Checklist",
  title: "Cutting Wheel Compliance and Safety Evidence Checklist",
  intro: "Use this buyer checklist to connect each quoted cut-off wheel SKU to the applicable market standard, labeled operating limits, test evidence, traceability and approved packaging.",
  sections: [
    { title: "Define the exact wheel and use", body: "Safety evidence is meaningful only when it covers the product that will ship.", items: ["Type 1 or Type 27 profile", "Diameter, thickness and bore", "Target material and permitted operation", "Tool, guard and maximum operating speed"] },
    { title: "Identify market requirements", body: "The buyer should name the destination and applicable standard before requesting documents.", items: ["Destination country and sales channel", "Applicable standard and current version", "Required language, warnings and safety pictograms", "Import, distributor and traceability responsibilities"] },
    { title: "Verify documents against the SKU", body: "Do not accept a logo or general certificate as proof for every size and formulation.", items: ["Issuing body and report number", "Legal entity, facility and sample identification", "Covered sizes, formulations and rated speeds", "Issue date, validity and verification method"] },
    { title: "Control approval and shipment", body: "Link the approved sample, label and production batch before release.", items: ["Representative cutting and wear test", "Approved label artwork and batch code", "Inspection and retained-sample plan", "Change control and nonconformance process"] },
  ],
  supplierQuestions: ["Which report line identifies the exact wheel size and formulation?", "Does the certificate cover the quoted legal entity and actual production facility?", "How are batch codes linked to materials, test records and retained samples?", "What changes require new buyer approval or additional testing?"],
  relatedLinks: [
    { label: "Cutting wheel product scope", href: "/cutting-wheels" },
    { label: "Quality-control plan", href: "/quality-control" },
    { label: "Supplier evaluation guide", href: "/resources/oem-abrasive-supplier-evaluation" },
    { label: "Submit an RFQ", href: "/contact" },
  ],
} satisfies ProcurementGuideData;

export const cuttingWheelChecklistZh = {
  path: "/zh/resources/cutting-wheel-compliance-checklist",
  language: "zh-CN",
  eyebrow: "切割片安全证据清单",
  title: "切割片合规与安全证据核验清单",
  intro: "把每个报价切割片SKU与目标市场标准、标签使用限制、测试报告、追溯和批准包装逐项对应。",
  sections: [
    { title: "定义准确产品与用途", body: "只有覆盖实际出货产品的安全证据才有意义。", items: ["T1平型或T27钹型", "直径、厚度和孔径", "目标材料与允许用途", "工具、防护罩和最高使用转速"] },
    { title: "确认目标市场要求", body: "采购方应先写明目的国与适用标准，再要求文件。", items: ["目的国和销售渠道", "适用标准及当前版本", "语言、警告和安全图示", "进口商、分销商和追溯责任"] },
    { title: "把文件对应到SKU", body: "不能把一个标志或通用证书当作所有尺寸和配方的证据。", items: ["签发机构和报告编号", "法律主体、场地和样品标识", "覆盖尺寸、配方和额定转速", "签发日期、有效期和核验方式"] },
    { title: "控制批准与出货", body: "放行前把确认样、标签和生产批次关联起来。", items: ["代表性切割与磨耗测试", "批准标签稿和批次编码", "检验与留样计划", "变更控制和不合格处理"] },
  ],
  supplierQuestions: ["报告哪一行标识了准确尺寸和配方？", "证书是否覆盖报价法律主体和实际生产场地？", "批次编码如何关联材料、测试记录和留样？", "哪些变更必须重新获得买家批准或补充测试？"],
  relatedLinks: [
    { label: "查看切割片范围", href: "/zh/cutting-wheels" },
    { label: "查看质量控制", href: "/zh/quality-control" },
    { label: "阅读供应商评估指南", href: "/zh/resources/oem-abrasive-supplier-evaluation" },
    { label: "提交询价", href: "/zh/contact" },
  ],
} satisfies ProcurementGuideData;
