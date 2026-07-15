export type InquiryDestination = "quote" | "sample";

export interface InquiryContext {
  quoteCategory: string;
  sampleCategories: string[];
}

export const INQUIRY_SOURCE_KEY = "scottchen_inquiry_source";

export const quoteCategoryOptions = [
  { value: "Buffing Wheels", en: "Buffing & Polishing Wheels", zh: "车缝棉布轮与抛光轮" },
  { value: "Polishing Kits", en: "Pre-Packaged Polishing Wheel Kits", zh: "挂卡/零售抛光轮套装" },
  { value: "Sanding Discs", en: "Sanding Discs & Hook-and-Loop Discs", zh: "砂纸片、砂碟与植绒砂盘" },
  { value: "Sanding Sheets", en: "Sanding Sheets & Sandpaper Rolls", zh: "干湿两用砂纸与连续砂卷" },
  { value: "Flap Discs", en: "Flap Discs", zh: "百叶片与平面砂布轮" },
  { value: "Sanding Belts", en: "Sanding Belts", zh: "环形砂带与定制砂带" },
  { value: "Cutting Wheels", en: "Cutting & Cut-Off Wheels", zh: "树脂切割片与切割砂轮" },
  { value: "Grinding Discs", en: "Grinding & Zirconia Fiber Discs", zh: "锆刚玉重切削硫化纤维砂碟" },
  { value: "Detail Tools", en: "Detail Sanding Tools (Mini Sticks)", zh: "细节塑料打磨棒 (Mini 砂带杆)" },
  { value: "Sanding Screens", en: "Drywall Sanding Screens", zh: "防堵塞镂空墙面砂网" },
  { value: "Diamond Abrasives", en: "Diamond & Stone Specialty Abrasives", zh: "石材石英石电镀金刚石磨片" },
  { value: "Dispenser Kits", en: "Sanding Dispenser Workshop Kits", zh: "自撕自断纸砂卷架彩盒套装" },
  { value: "Custom Mixed Kits", en: "Custom Mixed Surface Prep Kits", zh: "自定义多品类磨抛工具箱" },
] as const;

export const sampleCategoryOptions = [
  { value: "Buffing Wheels", en: "Spiral Stitched Buffing Wheels", zh: "螺旋车缝密缝棉布轮" },
  { value: "Loose Flannel", en: "Loose Flannel Coloring Wheels", zh: "松缝纯棉黄 Flannel 绒轮" },
  { value: "Shank Buffs", en: "Shank-Mounted Polishing Buffs", zh: "带柄凹槽打磨抛光布头" },
  { value: "Compounds", en: "Abrasive Compound Bars", zh: "研磨抛光蜡膏条" },
  { value: "Sanding Discs", en: "Sanding Discs", zh: "砂纸片、砂碟与植绒砂盘" },
  { value: "Sanding Sheets", en: "Sanding Sheets & Rolls", zh: "干湿两用防水乳胶砂纸片" },
  { value: "Flap Discs", en: "Flap Discs", zh: "百叶片与平面砂布轮" },
  { value: "Sanding Belts", en: "Sanding Belts", zh: "环形砂带与定制砂带" },
  { value: "Cutting Wheels", en: "Cutting & Cut-Off Wheels", zh: "树脂切割片与切割砂轮" },
  { value: "Sanding Screens", en: "Drywall Sanding Screens", zh: "防堵塞镂空玻璃纤维砂网" },
  { value: "Detail Sticks", en: "Detail Mini Sanding Sticks", zh: "精细塑料打磨棒 (Mini 砂带)" },
  { value: "Diamond Abrasives", en: "Diamond Specialty Discs", zh: "大理石瓷砖电镀金刚石磨片" },
] as const;

const sourceRules: Array<{ pattern: RegExp; context: InquiryContext }> = [
  {
    pattern: /\/(?:products\/)?buffing-(?:polishing-)?wheels$/,
    context: { quoteCategory: "Buffing Wheels", sampleCategories: ["Buffing Wheels"] },
  },
  {
    pattern: /\/sanding-discs$/,
    context: { quoteCategory: "Sanding Discs", sampleCategories: ["Sanding Discs"] },
  },
  {
    pattern: /\/products\/sanding-grinding-accessories$/,
    context: { quoteCategory: "Sanding Discs", sampleCategories: ["Sanding Discs"] },
  },
  {
    pattern: /\/flap-discs$/,
    context: { quoteCategory: "Flap Discs", sampleCategories: ["Flap Discs"] },
  },
  {
    pattern: /\/sanding-belts$/,
    context: { quoteCategory: "Sanding Belts", sampleCategories: ["Sanding Belts"] },
  },
  {
    pattern: /\/cutting-wheels$/,
    context: { quoteCategory: "Cutting Wheels", sampleCategories: ["Cutting Wheels"] },
  },
  {
    pattern: /\/(?:solutions\/automotive-polishing-kits|abrasive-kits)$/,
    context: {
      quoteCategory: "Polishing Kits",
      sampleCategories: ["Buffing Wheels", "Compounds"],
    },
  },
  {
    pattern: /\/oem-private-label$/,
    context: { quoteCategory: "Custom Mixed Kits", sampleCategories: [] },
  },
];

export function normalizeInquirySource(source?: string | null): string {
  if (!source) return "";

  try {
    const url = new URL(source, "https://www.scottchentools.com");
    if (url.protocol !== "http:" && url.protocol !== "https:") return "";
    return url.pathname.slice(0, 300);
  } catch {
    return "";
  }
}

export function buildInquiryHref(pathname: string, destination: InquiryDestination): string {
  const sourcePath = normalizeInquirySource(pathname) || "/";
  const isZh = sourcePath === "/zh" || sourcePath.startsWith("/zh/");
  const destinationPath = destination === "quote"
    ? (isZh ? "/zh/contact" : "/contact")
    : (isZh ? "/zh/sample-kit" : "/sample-kit");
  const params = new URLSearchParams({ from: sourcePath });

  return `${destinationPath}?${params.toString()}`;
}

export function inferInquiryContext(source?: string | null): InquiryContext {
  const pathname = normalizeInquirySource(source).replace(/^\/zh(?=\/|$)/, "") || "/";
  const match = sourceRules.find((rule) => rule.pattern.test(pathname));

  return match?.context || { quoteCategory: "", sampleCategories: [] };
}
