# SCOTTCHEN 盘刷产品页（Wire Brush / Disc Brush）开发规范与一手数据待办清单

> 更新时间：2026-10-10  
> 状态：待用户核准一手资料后进入代码实施（Stage: Blocked on First-Hand Data）  
> 目标页面建议路由：`/products/wire-cup-disc-brushes` 或 `/wire-brushes`（镜像：`/zh/wire-brushes`）

---

## 一、 铁律声明（严格执行）
根据《SCOTTCHEN 优化铁律》，**绝不编造**认证、MOQ、交期、测试数据、公司主体与工厂信息。以下结构框架已就绪，所有标记 `[待用户提供一手数据]` 的部分在收到真实凭据前**坚决不上线**。

---

## 二、 页面信息架构与 SEO 元数据规划

### 1. 核心定位与搜索意图
- **目标买家**：工业维护、焊接前/后清理、管道加工、金属表面抛光去毛刺的批发商、品牌商与 MRO 采购经理。
- **核心关键词群**：
  - `wire cup brush wholesale`
  - `knotted wire brush manufacturer`
  - `crimped wire wheel brush OEM`
  - `abrasive nylon disc brush china`
  - `industrial deburring brushes bulk`

### 2. Meta 标签建议
- **English Title** (<=60 chars):  
  `Industrial Wire & Disc Brush Wholesale | SCOTTCHEN` (50 chars)
- **English Meta Description** (<=155 chars):  
  `Wholesale knotted & crimped wire cup brushes, wheel brushes & abrasive nylon disc brushes. OEM packaging, arbor fitment & export terms quoted per SKU.` (149 chars)
- **Chinese Title** (<=60 chars):  
  `工业钢丝碗刷与盘刷批发定制 | SCOTTCHEN`
- **Chinese Meta Description** (<=155 chars):  
  `供应工业级扭丝碗刷、波纹丝钢丝轮及磨料尼龙盘刷。支持OEM贴牌、定制规格与外贸批量采购，具体MOQ与测试标准按SKU核定。`

---

## 三、 需用户提供的一手真实参数核对表（阻断项）

| 字段编码 | 审查字段 | 备选/行业常规参考 | [待用户填入真实事实] | 影响页面模块 |
| :---: | :--- | :--- | :--- | :--- |
| **SPEC-01** | **供应款式形态** | 1. 扭丝碗刷 (Knotted Cup Brush)<br>2. 波纹丝碗刷 (Crimped Cup Brush)<br>3. 钢丝轮刷 (Wire Wheel Brush)<br>4. 磨料尼龙盘刷 (Abrasive Nylon Disc Brush) | `[请用户勾选或补充实际供应系列]` | Hero 区、产品系列卡片 |
| **SPEC-02** | **丝材规格** | - 碳钢丝（高碳钢丝、油淬火钢丝）<br>- 不锈钢丝（304/316，防污染焊缝打磨）<br>- 镀铜碳钢丝（防锈、降火花）<br>- 磨料尼龙（碳化硅/氧化铝 80#–320#）<br>- 常用丝径：0.014" (0.35mm) / 0.020" (0.50mm) | `[请用户确认丝材牌号与标准丝径范围]` | 规格对照表（Spec Matrix） |
| **SPEC-03** | **接口与安装规格** | - 螺纹：5/8"-11 UNC（北美角磨机标准）、M14x2.0（欧亚标准）<br>- 内孔：1/2", 5/8", 7/8", 1"<br>- 轴柄：1/4" 六角柄或圆柄（配电钻/直磨机） | `[请用户确认标配接口与可定制接口]` | 配合机具参数区 |
| **SPEC-04** | **安全与极限转速** | - 3" 碗刷：最高安全转速 12,500 RPM<br>- 4" 碗刷：最高安全转速 8,500 RPM<br>- 是否具备动平衡实测（Dynamic Balance Test）？ | `[请用户提供实测最高转速表或质检说明]` | 安全与技术参数卡 |
| **SPEC-05** | **质检与执行标准** | - ANSI B165.1 (美国动力刷安全标准)<br>- EN 1083-2 (欧洲动力刷安全规范)<br>- 若暂无第三方证书，写“按客户图纸与样品封样标准执行” | `[请用户确认是否有送检证书或工厂质检标准]` | 合规说明与 FAQ |
| **SPEC-06** | **外贸与包装条款** | - MOQ：建议按箱或 500/1000 pcs 起订？<br>- 包装：单只彩盒、双泡壳挂卡（Retail Clamshell）、工业散装？<br>- 交期基准：试样 3-7 天，批量 25-35 天？ | `[请用户确认常规外贸基准区间]` | 商务采购与 RFQ 区 |

---

## 四、 页面落地代码结构规范（待物料到位后实施）

1. **路由放置**：
   - `src/app/products/wire-brushes/page.tsx`
   - `src/app/zh/products/wire-brushes/page.tsx`
2. **结构化数据（JSON-LD）**：
   - 采用 `CollectionPage` + `BreadcrumbList` + `FAQPage`。
   - 严禁单品虚标 `aggregateRating` 或虚构价格。
3. **转化 CTA**：
   - 接入统一的 `buildInquiryHref` 机制，参数带 `source=products-wire-brushes`，确保买家在 Contact/RFQ 页面保留询盘上下文。
