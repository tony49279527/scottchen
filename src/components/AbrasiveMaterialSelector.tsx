"use client";

import { useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { buildInquiryHref } from "@/lib/inquiryContext";

interface SelectorProps {
  locale?: "en" | "zh";
}

interface SelectionResult {
  grain: string;
  grit: string;
  format: string;
  productHref: string;
  productName: string;
  technicalNotes: string;
  qaCheck: string;
}

export default function AbrasiveMaterialSelector({ locale = "en" }: SelectorProps) {
  const isZh = locale === "zh";

  const materials = [
    { id: "carbon-steel", name: isZh ? "碳钢与结构钢" : "Carbon & Structural Steel" },
    { id: "stainless-steel", name: isZh ? "不锈钢与特种合金 (INOX)" : "Stainless Steel & Alloys (INOX)" },
    { id: "aluminum", name: isZh ? "铝合金与有色金属" : "Aluminum & Non-Ferrous Metals" },
    { id: "wood", name: isZh ? "硬木/实木与板材" : "Hardwood & Engineered Wood" },
    { id: "automotive", name: isZh ? "汽车漆面与清漆底漆" : "Automotive Paint & Clear Coat" },
    { id: "stone-composite", name: isZh ? "石材、玻璃与硬质复合材料" : "Stone, Glass & Hard Composites" },
  ] as const;

  const stages = [
    { id: "heavy-removal", name: isZh ? "重磨/除焊缝/剥皮" : "Heavy Stock Removal & Weld Blending" },
    { id: "deburring", name: isZh ? "去毛刺与切边倒角" : "Deburring & Edge Chamfering" },
    { id: "intermediate", name: isZh ? "中度砂光与修平划痕" : "Intermediate Sanding & Scratch Refining" },
    { id: "fine-finishing", name: isZh ? "精细精修与预抛" : "Fine Pre-Polish Finishing" },
    { id: "buffing-polishing", name: isZh ? "镜面出光与抛光" : "Mirror Buffing & Final Gloss" },
  ] as const;

  const [selectedMaterial, setSelectedMaterial] = useState<string>("carbon-steel");
  const [selectedStage, setSelectedStage] = useState<string>("heavy-removal");

  function getRecommendation(material: string, stage: string): SelectionResult {
    const lang = isZh ? "zh" : "en";

    // 1. Carbon Steel
    if (material === "carbon-steel") {
      switch (stage) {
        case "heavy-removal":
          return {
            grain: lang === "zh" ? "锆刚玉 (Zirconia Alumina) 或 陶瓷刚玉" : "Zirconia Alumina or Ceramic Alumina",
            grit: "FEPA P36 – P60",
            format: lang === "zh" ? "Type 27 / Type 29 百叶片或重磨砂碟" : "Type 27 / Type 29 Flap Discs",
            productHref: isZh ? "/zh/flap-discs" : "/flap-discs",
            productName: lang === "zh" ? "工业级百叶片" : "Industrial Flap Discs",
            technicalNotes: lang === "zh" 
              ? "高切削压力下自锐性极佳，有效减少打磨换片频次并降低发热。" 
              : "High-pressure self-sharpening behavior maximizes metal removal and extends disc service life.",
            qaCheck: lang === "zh" 
              ? "按批量核查玻纤基体层数、动平衡跳动量及安全破损转速。" 
              : "Verify fiberglass backing layers, dynamic unbalance limits and rated maximum RPM per SKU.",
          };
        case "deburring":
          return {
            grain: lang === "zh" ? "氧化铝 (Aluminum Oxide) 或 锆刚玉" : "Premium Aluminum Oxide or Zirconia",
            grit: "FEPA P60 – P80",
            format: lang === "zh" ? "百叶片或环形打磨砂带" : "Flap Discs or Abrasive Sanding Belts",
            productHref: isZh ? "/zh/sanding-belts" : "/sanding-belts",
            productName: lang === "zh" ? "环形耐磨砂带" : "Abrasive Sanding Belts",
            technicalNotes: lang === "zh"
              ? "抗撕裂重磅布基，适应锐边与冲压毛刺冲击，不易崩边飞砂。"
              : "Heavy polyester or cotton cloth backing withstands severe edge impact without premature fraying.",
            qaCheck: lang === "zh"
              ? "复核砂带搭接胶水抗拉强度，确保高速运转平顺无顿挫。"
              : "Test belt joint tensile strength and overlap flatness under rated operational tension.",
          };
        case "intermediate":
          return {
            grain: lang === "zh" ? "煅烧氧化铝 (Calcined Alumina)" : "Calcined / Semi-Friable Aluminum Oxide",
            grit: "FEPA P100 – P180",
            format: lang === "zh" ? "植绒自粘圆盘砂纸 (Hook & Loop)" : "Hook-and-Loop Sanding Discs",
            productHref: isZh ? "/zh/sanding-discs" : "/sanding-discs",
            productName: lang === "zh" ? "植绒砂碟/圆盘砂" : "Hook-and-Loop Sanding Discs",
            technicalNotes: lang === "zh"
              ? "均匀密植砂粒，有效修平粗磨深划痕，为涂装或电镀提供平整锚固面。"
              : "Close-coat grain arrangement uniformizes scratch depth for subsequent powder coating or plating.",
            qaCheck: lang === "zh"
              ? "检测魔术贴绒布与磨料纸基的复合剥离强度，避免高速偏摆脱离。"
              : "Confirm loop velvet backing peel strength under rotary and random-orbital tool speeds.",
          };
        case "fine-finishing":
          return {
            grain: lang === "zh" ? "精炼氧化铝或碳化硅 (Silicon Carbide)" : "Fine Silicon Carbide or Calcined A/O",
            grit: "FEPA P240 – P400",
            format: lang === "zh" ? "干湿两用乳胶纸基砂纸" : "Wet / Dry Latex Sandpaper Sheets",
            productHref: isZh ? "/zh/sanding-discs" : "/sanding-discs",
            productName: lang === "zh" ? "精修砂片与砂碟" : "Finishing Sanding Sheets",
            technicalNotes: lang === "zh"
              ? "乳胶浸渍防水纸基，柔韧贴合微曲面，消除表面涡卷纹与粗糙点。"
              : "Flexible latex-impregnated paper backing conforms to curves with consistent scratch pattern.",
            qaCheck: lang === "zh"
              ? "确认耐水浸润不起泡，涂层无游离大颗粒杂质。"
              : "Validate paper water soak stability and verify grit distribution free of rogue coarse particles.",
          };
        case "buffing-polishing":
        default:
          return {
            grain: lang === "zh" ? "剑麻轮预抛 + 螺旋车缝硬棉布轮" : "Sisal Buff + Spiral Stitched Cotton Buff",
            grit: lang === "zh" ? "黑色/棕色快切蜡 (Fast-Cut Tripol/Emery)" : "Emery / Fast-Cut Black Compound",
            format: lang === "zh" ? "螺旋车缝重磅棉布抛光轮" : "Spiral Stitched Buffing Wheels",
            productHref: isZh ? "/zh/buffing-wheels" : "/buffing-wheels",
            productName: lang === "zh" ? "车缝棉布抛光轮" : "Spiral Stitched Buffing Wheels",
            technicalNotes: lang === "zh"
              ? "硬度适中的密缝布轮配合研磨膏快速带走残余划痕，呈现金属光泽。"
              : "Dense row stitching delivers firm working pressure to cut through remaining tooling marks.",
            qaCheck: lang === "zh"
              ? "核验中心金属孔或牛皮孔牢固度，线迹平整无跳针走线。"
              : "Verify leather / metal arbor center integrity and balanced spiral stitching density.",
          };
      }
    }

    // 2. Stainless Steel (INOX)
    if (material === "stainless-steel") {
      switch (stage) {
        case "heavy-removal":
          return {
            grain: lang === "zh" ? "优质陶瓷微晶刚玉 (Ceramic Alumina) 带自冷却涂层" : "Ceramic Alumina with Top-Size Cooling Aid",
            grit: "FEPA P36 – P60",
            format: lang === "zh" ? "Type 29 陶瓷百叶片或硫化钢纸磨片" : "Type 29 Ceramic Flap Discs",
            productHref: isZh ? "/zh/flap-discs" : "/flap-discs",
            productName: lang === "zh" ? "不锈钢专用陶瓷百叶盘" : "Ceramic INOX Flap Discs",
            technicalNotes: lang === "zh"
              ? "含有自冷却助磨剂（Top Size），显著降低磨削区发热，杜绝不锈钢热应力退火变色。"
              : "Active grinding aid reduces interface heat to prevent thermal discoloration and blue burn on stainless.",
            qaCheck: lang === "zh"
              ? "严格要求铁(Fe)、硫(S)、氯(Cl)化学杂质限量 <= 0.1%，杜绝焊缝晶间腐蚀隐患。"
              : "Enforce Fe + S + Cl contaminants <= 0.1% to eliminate risk of post-weld pitting or rouge corrosion.",
          };
        case "deburring":
          return {
            grain: lang === "zh" ? "优质锆刚玉 (Zirconia Alumina) INOX 专用" : "Zirconia Alumina (INOX Grade)",
            grit: "FEPA P60 – P80",
            format: lang === "zh" ? "百叶片或强力窄砂带" : "Flap Discs or Narrow Belts",
            productHref: isZh ? "/zh/sanding-belts" : "/sanding-belts",
            productName: lang === "zh" ? "耐高温打磨砂带" : "High-Performance Sanding Belts",
            technicalNotes: lang === "zh"
              ? "自锐切削刃持续暴露，避免不锈钢切削硬化（Work Hardening）导致效率骤降。"
              : "Continuous self-sharpening micro-fracture minimizes work hardening on austenitic stainless steel.",
            qaCheck: lang === "zh"
              ? "确认砂带接头抗热敏性与无铁污染胶粘剂体系。"
              : "Verify thermo-resistant bond formulation with certified low-halogen adhesive.",
          };
        case "intermediate":
          return {
            grain: lang === "zh" ? "高阶氧化铝或碳化硅柔性无纺布 / 砂布" : "Surface Conditioning / Calcined A/O",
            grit: "FEPA P120 – P220",
            format: lang === "zh" ? "背绒砂片或不织布拉丝轮" : "Surface Prep Hook & Loop Discs",
            productHref: isZh ? "/zh/sanding-discs" : "/sanding-discs",
            productName: lang === "zh" ? "不锈钢表面处理砂碟" : "Surface Conditioning Sanding Discs",
            technicalNotes: lang === "zh"
              ? "形成均匀一致的直纹拉丝或哑光纹理，过渡焊道与母材色泽差异。"
              : "Blends heat-tint zone and yields uniform satin or hairline architectural finish.",
            qaCheck: lang === "zh"
              ? "检查纹理一致性，杜绝局部分布不均的偶发深划痕。"
              : "Validate grain spacing consistency and confirm zero iron cross-contamination in manufacturing.",
          };
        case "fine-finishing":
          return {
            grain: lang === "zh" ? "超微细碳化硅 (Silicon Carbide)" : "Micro-Grit Silicon Carbide",
            grit: "FEPA P400 – P800",
            format: lang === "zh" ? "超涂层柔性砂碟或水磨砂纸" : "Fine Finishing Film or Waterproof Discs",
            productHref: isZh ? "/zh/sanding-discs" : "/sanding-discs",
            productName: lang === "zh" ? "超细水磨砂纸片" : "Waterproof Finishing Discs",
            technicalNotes: lang === "zh"
              ? "微细切削，彻底修整氧化膜，为最高等级镜面抛光建立基底。"
              : "Eliminates micro-peaks for ultra-low Ra surface profile prior to mirror buffing.",
            qaCheck: lang === "zh"
              ? "核验耐水与平整度公差，膜基/纸基厚度公差 <= 5%。"
              : "Inspect film / paper backing uniformity and thickness tolerance under +/- 5%.",
          };
        case "buffing-polishing":
        default:
          return {
            grain: lang === "zh" ? "漂白纯棉轮 + 绿色氧化铬抛光膏 (Green Rouge)" : "Bleached Cotton Buff + Green Chromium Oxide Compound",
            grit: lang === "zh" ? "镜面出光级 (Mirror Finish)" : "Ultra-Fine Mirror Lustre",
            format: lang === "zh" ? "松缝精梳纯棉抛光布轮 (Loose Cotton Buff)" : "Loose / Flannel Buffing Wheels",
            productHref: isZh ? "/zh/buffing-wheels" : "/buffing-wheels",
            productName: lang === "zh" ? "精梳纯棉抛光轮" : "Loose Cotton Coloring Wheels",
            technicalNotes: lang === "zh"
              ? "绿色氧化铬微粉研磨膏针对不锈钢高硬度特性设计，高速抛光出清晰无雾影的高清倒影。"
              : "Chromium oxide formulation specifically targets stainless steel hardness for a haze-free mirror reflection.",
            qaCheck: lang === "zh"
              ? "布料纯度 100% 棉质，不含任何合成化纤混纺，防止摩擦过热烧焦拉丝。"
              : "100% natural cotton verification without synthetic polyester blend to prevent melt-smearing.",
          };
      }
    }

    // 3. Aluminum & Non-Ferrous Metals
    if (material === "aluminum") {
      switch (stage) {
        case "heavy-removal":
        case "deburring":
          return {
            grain: lang === "zh" ? "氧化锆 / 氧化铝 搭配防粘堵涂层 (Stearate / Anti-Clog)" : "Zirconia or A/O with Anti-Loading Stearate",
            grit: "FEPA P40 – P80",
            format: lang === "zh" ? "开孔防堵百叶盘或粗砂碟" : "Flap Discs or Open-Coat Sanding Discs",
            productHref: isZh ? "/zh/flap-discs" : "/flap-discs",
            productName: lang === "zh" ? "铝材防堵百叶片" : "Flap Discs for Soft Metals",
            technicalNotes: lang === "zh"
              ? "铝屑熔点低易糊盘，特殊疏植配方与硬脂酸干润滑层极大延缓铝屑粘附。"
              : "Open-coat structure and zinc stearate coating prevent molten aluminum chips from loading onto abrasive grains.",
            qaCheck: lang === "zh"
              ? "抽检防粘涂层均匀度，严禁切削过热引起砂盘瞬间失切。"
              : "Verify anti-loading stearate uniformity and measure heat dissipation during test cutting.",
          };
        case "intermediate":
        case "fine-finishing":
          return {
            grain: lang === "zh" ? "碳化硅 (Silicon Carbide) 疏植砂碟" : "Silicon Carbide Open-Coat Discs",
            grit: "FEPA P180 – P400",
            format: lang === "zh" ? "带吸尘孔植绒砂碟" : "Multi-Hole Hook & Loop Sanding Discs",
            productHref: isZh ? "/zh/sanding-discs" : "/sanding-discs",
            productName: lang === "zh" ? "多孔吸尘砂碟" : "Multi-Hole Sanding Discs",
            technicalNotes: lang === "zh"
              ? "配合偏心振动砂光机强制排屑，防止脱落硬砂粒在软铝表面划出深度涡纹。"
              : "Paired with dust extraction to evacuate soft aluminum dust and eliminate pigtail swirl marks.",
            qaCheck: lang === "zh"
              ? "检查吸尘孔位冲压平整无毛刺，孔位同心度与工具底盘相符。"
              : "Check extraction hole punch clean edges and concentric alignment with standard sander backing pads.",
          };
        case "buffing-polishing":
        default:
          return {
            grain: lang === "zh" ? "法兰绒抛光轮 (Flannel) + 白色/棕色专用铝材抛光蜡" : "Flannel Buff + White / Brown Aluminum Tripoli Compound",
            grit: lang === "zh" ? "高光深邃镜面" : "High-Lustre Aluminum Finish",
            format: lang === "zh" ? "松缝黄色法兰绒布轮" : "Flannel Coloring Buffing Wheels",
            productHref: isZh ? "/zh/buffing-wheels" : "/buffing-wheels",
            productName: lang === "zh" ? "法兰绒抛光轮" : "Flannel Polishing Wheels",
            technicalNotes: lang === "zh"
              ? "铝合金材质质软，需使用极柔软的法兰绒轮与低切削力膏体，避免在表面产生微拉伤。"
              : "Extra-soft flannel fabric protects malleable non-ferrous surfaces from drag scratches during final glossing.",
            qaCheck: lang === "zh"
              ? "轮面经脱脂柔软处理，车线松紧度均匀，动平衡运转平稳。"
              : "Verify fabric softness and gentle balancing to prevent chatter marks on soft alloy surfaces.",
          };
      }
    }

    // 4. Wood
    if (material === "wood") {
      switch (stage) {
        case "heavy-removal":
          return {
            grain: lang === "zh" ? "重磅氧化铝 (Aluminum Oxide)" : "Heavy-Duty Aluminum Oxide",
            grit: "FEPA P40 – P60",
            format: lang === "zh" ? "宽砂带或重型窄砂带" : "Wide or Narrow Sanding Belts",
            productHref: isZh ? "/zh/sanding-belts" : "/sanding-belts",
            productName: lang === "zh" ? "重型木工砂带" : "Woodworking Sanding Belts",
            technicalNotes: lang === "zh"
              ? "坚韧布基经受原木厚度修平和接缝找平的高张力冲击，平整度高。"
              : "Robust cloth backing provides dimensional stability for high-tension wood calibrating and thicknessing.",
            qaCheck: lang === "zh"
              ? "测定砂带接口平整度与厚度偏差，避免在木材表面产生周期性接头压痕。"
              : "Ensure zero-thickness-variance splice joint to eliminate repetitive chatter lines on timber panels.",
          };
        case "deburring":
        case "intermediate":
          return {
            grain: lang === "zh" ? "半脆刚玉 / 氧化铝 疏植涂层" : "Semi-Friable Aluminum Oxide (Open Coat)",
            grit: "FEPA P80 – P150",
            format: lang === "zh" ? "圆盘植绒砂碟或纸质砂带" : "Hook-and-Loop Sanding Discs or Paper Belts",
            productHref: isZh ? "/zh/sanding-discs" : "/sanding-discs",
            productName: lang === "zh" ? "木工专用防堵砂纸片" : "Anti-Clog Wood Sanding Discs",
            technicalNotes: lang === "zh"
              ? "疏植砂粒有效容纳木纤维与木脂粉尘，大幅延长换纸周期。"
              : "Open-coat distribution prevents resinous wood dust build-up between mineral grains.",
            qaCheck: lang === "zh"
              ? "核对防静电纸基绝缘电阻参数，确保排屑吸尘顺畅不积尘。"
              : "Verify anti-static paper backing resistivity to ensure continuous dust extraction.",
          };
        case "fine-finishing":
        case "buffing-polishing":
        default:
          return {
            grain: lang === "zh" ? "碳化硅或极细氧化铝超涂层砂纸" : "Silicon Carbide or Calcined A/O Stearated Paper",
            grit: "FEPA P180 – P320",
            format: lang === "zh" ? "柔性海绵砂块或超柔乳胶圆盘" : "Flexible Foam Sanding Pads / Paper Sheets",
            productHref: isZh ? "/zh/sanding-discs" : "/sanding-discs",
            productName: lang === "zh" ? "精细木工砂磨片" : "Fine Wood Sanding Sheets",
            technicalNotes: lang === "zh"
              ? "顺着木纹方向轻磨，切断木毛刺，为底漆与清漆涂装呈现细腻手感。"
              : "Uniformly slices raised wood fibers along the grain, preparing ideal mechanical key for lacquers.",
            qaCheck: lang === "zh"
              ? "检验砂纸柔软性与抗折裂性能，折叠不掉砂。"
              : "Inspect grain adhesion upon 180-degree folding; no mineral flaking or backing cracking.",
          };
      }
    }

    // 5. Automotive Paint & Clear Coat
    if (material === "automotive") {
      switch (stage) {
        case "heavy-removal":
        case "deburring":
          return {
            grain: lang === "zh" ? "煅烧氧化铝快速排屑砂碟" : "Fast-Cutting Calcined A/O with Multi-Hole",
            grit: "FEPA P80 – P180",
            format: lang === "zh" ? "多孔网格砂布或多孔植绒砂碟" : "Abrasive Mesh Screens or Multi-Hole Discs",
            productHref: isZh ? "/zh/sanding-discs" : "/sanding-discs",
            productName: lang === "zh" ? "汽车钣金打磨砂碟" : "Automotive Body Sanding Discs",
            technicalNotes: lang === "zh"
              ? "原子灰、腻子与底漆打磨专用，全网面镂空通风结构彻底根除积灰堵塞。"
              : "Ideal for polyester body filler shaping; mesh flow-through geometry prevents dust loading.",
            qaCheck: lang === "zh"
              ? "检测网格丝径强度与边缘抗撕裂度，杜绝打磨高速脱扣。"
              : "Verify mesh edge tear strength and uniform tensile stability across all operational speeds.",
          };
        case "intermediate":
        case "fine-finishing":
          return {
            grain: lang === "zh" ? "碳化硅薄膜基 (Film Backing) 精修砂碟" : "Micro-Graded Silicon Carbide on Polyester Film",
            grit: "FEPA P1000 – P2500",
            format: lang === "zh" ? "超平薄膜水磨砂片" : "Precision Film Sanding Discs",
            productHref: isZh ? "/zh/sanding-discs" : "/sanding-discs",
            productName: lang === "zh" ? "汽车漆面精细精修砂片" : "Precision Film Finishing Discs",
            technicalNotes: lang === "zh"
              ? "聚酯薄膜背基平整度达到微米级，平整切除清漆橘皮与尘点，且划痕极其浅细。"
              : "Polyester film backing delivers micron-level flatness to flatten clear coat orange peel without deep scouring.",
            qaCheck: lang === "zh"
              ? "显微镜抽测颗粒粒径分布，严禁孤立超标粗颗粒造成深划痕返工。"
              : "Sample grain size distribution to confirm zero rogue oversized particles that could cause re-sanding.",
          };
        case "buffing-polishing":
        default:
          return {
            grain: lang === "zh" ? "高密度羊毛轮 / 超细海绵盘 + 纳米微切研磨剂" : "High-Density Lambswool / Fine Foam + Micro-Abrasive Polish",
            grit: lang === "zh" ? "镜面还原出光级 (Hologram-Free)" : "High-Gloss Hologram-Free Mirror",
            format: lang === "zh" ? "汽车漆面专用抛光套装组件" : "Automotive Polishing Kit Components",
            productHref: isZh ? "/zh/solutions/automotive-polishing-kits" : "/solutions/automotive-polishing-kits",
            productName: lang === "zh" ? "汽车抛光与还原套组" : "Automotive Polishing Solutions",
            technicalNotes: lang === "zh"
              ? "羊毛快速切削消除 1500#–2500# 砂纸划痕，后续搭配细海绵盘与无硅油光亮剂彻底清除眩光太阳纹。"
              : "Wool pad quickly levels 1500-2500 grit sanding scratches; fine foam pad eliminates buffer swirls and holograms.",
            qaCheck: lang === "zh"
              ? "羊毛盘脱温洗涤无脱胶，背部耐撕拉魔术贴耐受高温高速旋转。"
              : "Inspect hook-and-loop bond thermal resistance under sustained high-speed dual-action polishing friction.",
          };
      }
    }

    // 6. Stone, Glass & Hard Composites
    if (material === "stone-composite") {
      switch (stage) {
        case "heavy-removal":
        case "deburring":
          return {
            grain: lang === "zh" ? "电镀金刚石 (Electroplated Diamond) 或 黑色碳化硅" : "Diamond Electroplated or Black Silicon Carbide",
            grit: lang === "zh" ? "金刚石 50# – 100# / 碳化硅 P36 – P60" : "Diamond 50# - 100# / SiC P36 - P60",
            format: lang === "zh" ? "金刚石软磨片或重磅碳化硅砂碟" : "Diamond Flexible Pads or Heavy-Duty SiC Discs",
            productHref: isZh ? "/zh/cutting-wheels" : "/cutting-wheels",
            productName: lang === "zh" ? "石材切磨专用工具" : "Specialty Hard Material Wheels",
            technicalNotes: lang === "zh"
              ? "针对莫氏硬度 6-8 的硬质基体，利用超硬颗粒的高剪切力剥离脆性裂纹。"
              : "Ultra-hard mineral crystal matrices micro-fracture brittle stone and composite structures cleanly.",
            qaCheck: lang === "zh"
              ? "测定金刚石颗粒电镀附着力和基盘耐水粘接强度。"
              : "Verify diamond plating adhesion and backing resin water resistance under continuous wet grinding.",
          };
        case "intermediate":
        case "fine-finishing":
          return {
            grain: lang === "zh" ? "树脂结合金刚石 (Resin-Bond Diamond) 或 绿色碳化硅" : "Resin-Bond Diamond or Green Silicon Carbide",
            grit: "200# – 800# (Wet / Dry)",
            format: lang === "zh" ? "加厚蜂窝软磨片" : "Honeycomb Diamond Polishing Pads",
            productHref: isZh ? "/zh/sanding-discs" : "/sanding-discs",
            productName: lang === "zh" ? "硬质表面处理磨片" : "Hard-Surface Finishing Discs",
            technicalNotes: lang === "zh"
              ? "树脂基体耐磨耗，在花岗岩、石英石与玻璃边缘产生温和磨光作用。"
              : "Resin-matrix bond gently wears down mineral facets on granite, quartz and engineered stone.",
            qaCheck: lang === "zh"
              ? "检测湿磨条件下结合剂耐水解性与褪色抗性，防止石材被染色。"
              : "Test resin bond hydrolysis resistance and ensure zero dye leaching onto white stone workpieces.",
          };
        case "buffing-polishing":
        default:
          return {
            grain: lang === "zh" ? "白刚玉微粉或微晶羊毛抛光垫" : "White Alumina / Cerium Oxide Felt Buff",
            grit: lang === "zh" ? "超高光洁度 (Gloss > 90 GU)" : "High Specular Gloss (> 90 GU)",
            format: lang === "zh" ? "压缩羊毛抛光轮 (Compressed Wool Felt)" : "Felt Buffing Wheels & Polishing Kits",
            productHref: isZh ? "/zh/buffing-wheels" : "/buffing-wheels",
            productName: lang === "zh" ? "羊毛毡轮与抛光套组" : "Wool Felt Polishing Wheels",
            technicalNotes: lang === "zh"
              ? "纯羊毛毡的高密度孔隙能均匀吸附氧化铈或抛光粉，达到晶莹剔透的出光效果。"
              : "High-density wool felt pores retain polishing slurries evenly, achieving crystal-clear specular gloss.",
            qaCheck: lang === "zh"
              ? "羊毛密度指标均匀，无砂石杂质嵌入，动平衡良好。"
              : "Strict density calibration and purity inspection to ensure zero foreign abrasive particles in the felt.",
          };
      }
    }

    // Default fallback
    return {
      grain: lang === "zh" ? "精选氧化铝" : "Premium Aluminum Oxide",
      grit: "P80 – P120",
      format: lang === "zh" ? "标准圆盘砂纸片" : "Standard Sanding Discs",
      productHref: isZh ? "/zh/sanding-discs" : "/sanding-discs",
      productName: lang === "zh" ? "砂纸片" : "Sanding Discs",
      technicalNotes: lang === "zh" ? "通用工业级配方，适用多类工况。" : "General industrial formulation.",
      qaCheck: lang === "zh" ? "按 SKU 订购前核验样品。" : "Verify on representative samples.",
    };
  }

  const result = getRecommendation(selectedMaterial, selectedStage);
  const quoteHref = buildInquiryHref("/resources/abrasive-material-selection-guide", "quote");
  const sampleHref = buildInquiryHref("/resources/abrasive-material-selection-guide", "sample");

  return (
    <div className="rounded-xl border border-industry-orange/30 bg-industry-slate-950 p-6 sm:p-8 my-8 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-industry-slate-800 pb-5">
        <div>
          <span className="text-xs font-bold tracking-widest text-industry-orange uppercase">
            {isZh ? "交互式工况选型工具" : "Interactive Engineering Helper"}
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            {isZh ? "工件材质与表面加工磨料匹配矩阵" : "Material & Process Finishing Matrix"}
          </h3>
          <p className="text-xs sm:text-sm text-industry-slate-400 mt-1">
            {isZh
              ? "根据工件基材与当前打磨阶段，即时匹配标准矿砂种类、FEPA 粒度范围与品控验收关键项。"
              : "Select workpiece material and finishing stage to instantly view mineral recommendations, FEPA grit ranges and critical QA checks."}
          </p>
        </div>
        <div className="inline-flex items-center gap-1.5 self-start md:self-auto rounded-full bg-industry-orange/10 px-3 py-1 text-xs font-semibold text-industry-orange border border-industry-orange/20">
          <span className="h-2 w-2 rounded-full bg-industry-orange animate-pulse" />
          <span>{isZh ? "FEPA & 工业基准" : "FEPA & ISO Aligned"}</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Interactive Controls */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-industry-slate-300 mb-2.5">
              {isZh ? "1. 选择工件基材 (Workpiece Material)" : "1. Select Workpiece Material"}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {materials.map((mat) => {
                const active = selectedMaterial === mat.id;
                return (
                  <button
                    key={mat.id}
                    type="button"
                    onClick={() => {
                      setSelectedMaterial(mat.id);
                    }}
                    className={`text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all border flex items-center justify-between ${
                      active
                        ? "bg-industry-orange text-white border-industry-orange shadow-md shadow-industry-orange/20"
                        : "bg-industry-slate-900 text-industry-slate-300 border-industry-slate-800 hover:border-industry-slate-700 hover:text-white"
                    }`}
                  >
                    <span>{mat.name}</span>
                    {active && <span className="text-white text-sm">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-industry-slate-300 mb-2.5">
              {isZh ? "2. 选择工艺阶段 (Finishing Stage)" : "2. Select Finishing Stage"}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {stages.map((stg) => {
                const active = selectedStage === stg.id;
                return (
                  <button
                    key={stg.id}
                    type="button"
                    onClick={() => {
                      setSelectedStage(stg.id);
                    }}
                    className={`text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all border flex items-center justify-between ${
                      active
                        ? "bg-industry-orange-cta text-white border-industry-orange shadow-md"
                        : "bg-industry-slate-900 text-industry-slate-300 border-industry-slate-800 hover:border-industry-slate-700 hover:text-white"
                    }`}
                  >
                    <span>{stg.name}</span>
                    {active && <span className="text-white text-sm">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Recommendation Card */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-xl border border-industry-slate-800 bg-industry-slate-900/90 p-6 sm:p-7 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-industry-orange/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-industry-slate-800 pb-3">
              <span className="text-xs font-mono font-bold text-industry-orange-light uppercase tracking-wider">
                {isZh ? "匹配结果与工程建议" : "Engineering Match Result"}
              </span>
              <span className="text-[11px] font-mono text-industry-slate-400">
                {materials.find((m) => m.id === selectedMaterial)?.name} • {stages.find((s) => s.id === selectedStage)?.name}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg bg-industry-slate-950 p-4 border border-industry-slate-850">
                <div className="text-[11px] font-bold uppercase tracking-wider text-industry-slate-400">
                  {isZh ? "推荐磨料矿物" : "Recommended Grain"}
                </div>
                <div className="text-sm font-extrabold text-white mt-1">
                  {result.grain}
                </div>
              </div>

              <div className="rounded-lg bg-industry-slate-950 p-4 border border-industry-slate-850">
                <div className="text-[11px] font-bold uppercase tracking-wider text-industry-slate-400">
                  {isZh ? "基准目数/粒度" : "Standard Grit Range"}
                </div>
                <div className="text-sm font-extrabold text-industry-orange mt-1 font-mono">
                  {result.grit}
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-industry-slate-950 p-4 border border-industry-slate-850 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-industry-slate-400">
                  {isZh ? "推荐产品品类" : "Target Product Category"}
                </span>
                <Link
                  href={result.productHref}
                  className="text-xs font-bold text-industry-orange hover:underline inline-flex items-center gap-1"
                >
                  <span>{isZh ? "查看品类详情" : "View Category"}</span>
                  <span>→</span>
                </Link>
              </div>
              <div className="text-sm font-bold text-white">
                {result.format} ({result.productName})
              </div>
            </div>

            <div className="space-y-3 pt-1">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-industry-slate-400 block mb-1">
                  {isZh ? "工艺特性与操作建议" : "Engineering Rationale"}
                </span>
                <p className="text-xs text-industry-slate-300 leading-relaxed bg-industry-slate-950/60 p-3 rounded border border-industry-slate-850">
                  {result.technicalNotes}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-industry-orange-light block mb-1">
                  {isZh ? "采购核验与质检红线 (QA Boundary)" : "Critical QA & Sourcing Verification"}
                </span>
                <p className="text-xs text-industry-slate-300 leading-relaxed bg-industry-slate-950/60 p-3 rounded border border-industry-orange/20">
                  {result.qaCheck}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-industry-slate-800 flex flex-col sm:flex-row gap-3">
            <Link
              href={quoteHref}
              onClick={() =>
                trackEvent({
                  event: "quote_cta_click",
                  locale: isZh ? "zh-CN" : "en",
                  formType: "quote",
                  sourcePage: isZh
                    ? "/zh/resources/abrasive-material-selection-guide"
                    : "/resources/abrasive-material-selection-guide",
                })
              }
              className="flex-1 inline-flex justify-center items-center rounded bg-industry-orange px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-orange-hover text-center"
            >
              {isZh ? "按工况提交询盘 (RFQ)" : "Submit Scoped RFQ"}
            </Link>
            <Link
              href={sampleHref}
              onClick={() =>
                trackEvent({
                  event: "sample_cta_click",
                  locale: isZh ? "zh-CN" : "en",
                  formType: "sample",
                  sourcePage: isZh
                    ? "/zh/resources/abrasive-material-selection-guide"
                    : "/resources/abrasive-material-selection-guide",
                })
              }
              className="flex-1 inline-flex justify-center items-center rounded border border-industry-slate-700 bg-industry-slate-800 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-industry-slate-750 text-center"
            >
              {isZh ? "申领对照测试样品" : "Request Sample For Testing"}
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-industry-slate-850 text-center">
        <span className="text-[11px] text-industry-slate-400">
          {isZh
            ? "注：以上为通用磨削冶金工程基准，实际切削效率、寿命与粗糙度 Ra 表现需在买家具体工件及转速条件下经样品打样确认。"
            : "Note: Recommendations reflect standard abrasive engineering principles. Specific stock removal rate, Ra surface roughness and belt/disc service life must be confirmed on representative samples under buyer operating speeds and pressures."}
        </span>
      </div>
    </div>
  );
}
