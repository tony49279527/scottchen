"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { buildSamplePayload, submitInquiry } from "@/lib/inquiryClient";

interface SampleFormFields {
  fullName: string;
  companyName: string;
  email: string;
  country: string;
  website: string;
  categories: string[];
  application: string;
  targetMaterial: string;
  estimatedQuantity: string;
  oemNeeded: string;
  message: string;
  consent: boolean;
  hpField: string;
}

export default function SampleKitForm() {
  const router = useRouter();
  const pathname = usePathname() || "";
  const isZh = pathname === "/zh" || pathname.startsWith("/zh/");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formStartedAt] = useState(() => new Date().toISOString());

  const [fields, setFields] = useState<SampleFormFields>({
    fullName: "",
    companyName: "",
    email: "",
    country: "",
    website: "",
    categories: [],
    application: "",
    targetMaterial: "",
    estimatedQuantity: "",
    oemNeeded: "no",
    message: "",
    consent: false,
    hpField: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof SampleFormFields, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof SampleFormFields, boolean>>>({});

  const validateField = (name: keyof SampleFormFields, value: string | string[] | boolean): string => {
    if (name === "consent") {
      if (value) return "";
      return isZh ? "您必须同意我们的条款方可继续" : "You must consent to proceed";
    }
    if (name === "hpField") {
      return "";
    }
    if (name === "categories") {
      const arr = value as string[];
      if (!arr || arr.length === 0) {
        return isZh ? "请至少选择一种产品类别" : "Please select at least one product category";
      }
      return "";
    }
    if (!value && name !== "message" && name !== "application" && name !== "targetMaterial") {
      return isZh ? "此项为必填项" : "This field is required";
    }
    if (name === "email" && typeof value === "string" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return isZh ? "请输入有效的公司电子邮箱" : "Please enter a valid business email address";
      }
      const freeDomains = /@(gmail|hotmail|outlook|yahoo|163|126|qq|foxmail|icloud|protonmail|aol)\./i;
      if (freeDomains.test(value)) {
        return isZh ? "请填写公司域名邮箱，不要使用免费个人邮箱" : "Please use a business email address instead of a free personal mailbox";
      }
    }
    if (name === "website" && typeof value === "string" && value) {
      const normalized = /^https?:\/\//i.test(value) ? value : `https://${value}`;
      try {
        const url = new URL(normalized);
        if (!url.hostname.includes(".")) {
          return isZh ? "请输入有效的公司官网或店铺网址" : "Please enter a valid company website or store URL";
        }
      } catch {
        return isZh ? "请输入有效的公司官网或店铺网址" : "Please enter a valid company website or store URL";
      }
    }
    return "";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const name = e.target.name as keyof SampleFormFields;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, fields[name]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const name = e.target.name as keyof SampleFormFields;
    const value = e.target.value;
    setFields((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    let updatedCategories = [...fields.categories];
    if (isChecked) {
      updatedCategories.push(value);
    } else {
      updatedCategories = updatedCategories.filter((cat) => cat !== value);
    }

    setFields((prev) => ({ ...prev, categories: updatedCategories }));
    setTouched((prev) => ({ ...prev, categories: true }));
    const error = validateField("categories", updatedCategories);
    setErrors((prev) => ({ ...prev, categories: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    // Trigger validation
    const newErrors: Partial<Record<keyof SampleFormFields, string>> = {};
    let hasError = false;

    (Object.keys(fields) as Array<keyof SampleFormFields>).forEach((key) => {
      const error = validateField(key, fields[key]);
      if (error) {
        newErrors[key] = error;
        hasError = true;
      }
    });

    if (hasError) {
      setErrors(newErrors);
      setTouched(
        (Object.keys(fields) as Array<keyof SampleFormFields>).reduce(
          (acc, key) => ({ ...acc, [key]: true }),
          {}
        )
      );
      
      const firstErrorKey = Object.keys(newErrors)[0];
      const element = document.getElementsByName(firstErrorKey)[0];
      if (element) {
        element.focus();
      }
      return;
    }

    if (fields.hpField) {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 800));
      router.push(isZh ? "/zh/thank-you" : "/thank-you");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitInquiry(
        {
          ...buildSamplePayload(pathname, {
            fullName: fields.fullName,
            companyName: fields.companyName,
            email: fields.email,
            country: fields.country,
            website: fields.website,
            categories: fields.categories,
            application: fields.application,
            targetMaterial: fields.targetMaterial,
            estimatedQuantity: fields.estimatedQuantity,
            oemNeeded: fields.oemNeeded,
            message: fields.message,
          }),
          formStartedAt,
        }
      );

      if (!result.ok) {
        trackEvent({
          event: "sample_submit_error",
          locale: isZh ? "zh-CN" : "en",
          formType: "sample",
          category: fields.categories.join(", "),
        });
        setSubmitError(
          result.message ||
            (isZh
              ? "样品申请暂时未能送达，请稍后重试，或直接发送邮件至 sales@scottchentools.com。"
              : "We could not deliver your sample request just now. Please try again or email sales@scottchentools.com directly.")
        );
        setIsSubmitting(false);
        return;
      }
      trackEvent({
        event: "sample_submit_success",
        locale: isZh ? "zh-CN" : "en",
        formType: "sample",
        category: fields.categories.join(", "),
      });
    } catch (error) {
      console.error("Sample request submission failed:", error);
      trackEvent({
        event: "sample_submit_error",
        locale: isZh ? "zh-CN" : "en",
        formType: "sample",
        category: fields.categories.join(", "),
      });
      setSubmitError(
        isZh
          ? "样品申请暂时未能送达，请稍后重试，或直接发送邮件至 sales@scottchentools.com。"
          : "We could not deliver your sample request just now. Please try again or email sales@scottchentools.com directly."
      );
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    router.push(isZh ? "/zh/thank-you" : "/thank-you");
  };

  const inputClass = (name: keyof SampleFormFields) => `
    mt-2 block w-full rounded border px-4 py-3 bg-industry-slate-950 text-white font-medium text-base min-h-[48px]
    transition-all duration-200 outline-none
    ${
      touched[name] && errors[name]
        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
        : "border-industry-slate-700 focus:border-industry-orange focus:ring-1 focus:ring-industry-orange"
    }
  `;

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto glass-panel p-8 rounded-lg shadow-xl">
      <div className="border-b border-industry-slate-800 pb-4 mb-6">
        <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
          {isZh ? "B2B 物理样品申领表格" : "B2B Material Sample Request"}
        </h2>
        <p className="mt-1 text-sm text-industry-slate-400">
          {isZh
            ? "在您本国的车间实际核验我们的车缝密度、背胶强度及磨料级配标准。"
            : "Verify our manufacturing standards, stitching densities, and grit ranges in your own workshop."}
        </p>
      </div>

      {/* Honeypot hidden spam field */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="hpField"
          tabIndex={-1}
          autoComplete="off"
          value={fields.hpField}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-industry-slate-300">
            {isZh ? "姓名" : "Full Name"} <span className="text-industry-orange">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            autoComplete="name"
            value={fields.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass("fullName")}
          />
          {touched.fullName && errors.fullName && (
            <p className="mt-1 text-xs text-red-500 font-medium" role="alert">{errors.fullName}</p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="companyName" className="block text-sm font-semibold text-industry-slate-300">
            {isZh ? "公司名称" : "Company Name"} <span className="text-industry-orange">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            required
            autoComplete="organization"
            value={fields.companyName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass("companyName")}
          />
          {touched.companyName && errors.companyName && (
            <p className="mt-1 text-xs text-red-500 font-medium" role="alert">{errors.companyName}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Business Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-industry-slate-300">
            {isZh ? "公司电子邮箱" : "Business Email"} <span className="text-industry-orange">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            value={fields.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass("email")}
          />
          {touched.email && errors.email && (
            <p className="mt-1 text-xs text-red-500 font-medium" role="alert">{errors.email}</p>
          )}
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-sm font-semibold text-industry-slate-300">
            {isZh ? "寄送目的国" : "Shipping Country"} <span className="text-industry-orange">*</span>
          </label>
          <input
            type="text"
            id="country"
            name="country"
            required
            autoComplete="country-name"
            value={fields.country}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass("country")}
          />
          {touched.country && errors.country && (
            <p className="mt-1 text-xs text-red-500 font-medium" role="alert">{errors.country}</p>
          )}
        </div>
      </div>

      {/* Website */}
      <div>
        <label htmlFor="website" className="block text-sm font-semibold text-industry-slate-300">
          {isZh ? "公司官网 / 线上店铺 URL" : "Company Website / Store URL"} <span className="text-industry-orange">*</span>
        </label>
        <input
          type="url"
          id="website"
          name="website"
          placeholder="e.g. www.mytoolbrand.com"
          required
          value={fields.website}
          onChange={handleChange}
          onBlur={handleBlur}
          className="mt-2 block w-full rounded border border-industry-slate-700 px-4 py-3 bg-industry-slate-950 text-white font-medium text-base min-h-[48px] focus:border-industry-orange focus:ring-1 focus:ring-industry-orange outline-none"
        />
        {touched.website && errors.website && (
          <p className="mt-1 text-xs text-red-500 font-medium" role="alert">{errors.website}</p>
        )}
      </div>

      {/* Target Products Categories */}
      <div>
        <label className="block text-sm font-semibold text-industry-slate-300 mb-2">
          {isZh ? "选择样品包中需要放入的耗材类别" : "Select Accessories Needed in Sample Kit"} <span className="text-industry-orange">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 bg-industry-slate-950/60 p-4 rounded border border-industry-slate-800">
          {[
            { label: isZh ? "螺旋车缝密缝棉布轮" : "Spiral Stitched Buffing Wheels", val: "Buffing Wheels" },
            { label: isZh ? "松缝纯棉黄 Flannel 绒轮" : "Loose Flannel Coloring Wheels", val: "Loose Flannel" },
            { label: isZh ? "带柄凹槽打磨抛光布头" : "Shank-Mounted Polishing Buffs", val: "Shank Buffs" },
            { label: isZh ? "研磨抛光蜡膏条" : "Abrasive Compound Bars", val: "Compounds" },
            { label: isZh ? "干湿两用防水乳胶砂纸片" : "Sanding Sheets & Rolls", val: "Sanding Sheets" },
            { label: isZh ? "防堵塞镂空玻璃纤维砂网" : "Drywall Sanding Screens", val: "Sanding Screens" },
            { label: isZh ? "精细塑料打磨棒 (Mini 砂带)" : "Detail Mini Sanding Sticks", val: "Detail Sticks" },
            { label: isZh ? "大理石瓷砖电镀金刚石磨片" : "Diamond Specialty Discs", val: "Diamond Abrasives" },
          ].map((cat) => (
            <label key={cat.val} className="inline-flex items-center text-white cursor-pointer select-none">
              <input
                type="checkbox"
                name="categories"
                value={cat.val}
                checked={fields.categories.includes(cat.val)}
                onChange={handleCheckboxChange}
                className="h-5 w-5 rounded accent-industry-orange border-industry-slate-700 bg-industry-slate-950 focus:ring-industry-orange"
              />
              <span className="ml-2.5 text-xs text-industry-slate-300 font-medium">{cat.label}</span>
            </label>
          ))}
        </div>
        {touched.categories && errors.categories && (
          <p className="mt-1 text-xs text-red-500 font-medium" role="alert">{errors.categories}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Industry Application */}
        <div>
          <label htmlFor="application" className="block text-sm font-semibold text-industry-slate-300">
            {isZh ? "应用行业场景" : "Work Industry / Application"}
          </label>
          <select
            id="application"
            name="application"
            value={fields.application}
            onChange={handleChange}
            className="mt-2 block w-full rounded border border-industry-slate-700 px-4 py-3 bg-industry-slate-950 text-white font-medium text-base min-h-[48px] focus:border-industry-orange focus:ring-1 focus:ring-industry-orange outline-none"
          >
            {isZh ? (
              <>
                <option value="">请选择应用领域...</option>
                <option value="Metalworking">金属加工 / 结构焊道去毛刺</option>
                <option value="Woodworking">家具制造 / 实木板抛磨涂装</option>
                <option value="Automotive">汽车钣金喷漆 / 铝合金毂修复</option>
                <option value="Jewelry">首饰精抛 / 3D打印微细件</option>
                <option value="Drywall/Contracting">工装石膏板墙面接缝批灰</option>
                <option value="Retail Brand Catalog">贴牌专有零售渠道选品</option>
                <option value="Other">其他研磨应用</option>
              </>
            ) : (
              <>
                <option value="">Select application...</option>
                <option value="Metalworking">Metal Fabrication / Welds</option>
                <option value="Woodworking">Woodworking / Joinery</option>
                <option value="Automotive">Automotive Painting / Rim restore</option>
                <option value="Jewelry">Jewelry & Precision Crafts</option>
                <option value="Drywall/Contracting">Drywall & Renovations</option>
                <option value="Retail Brand Catalog">OEM Retail Brand Catalog</option>
                <option value="Other">Other Application</option>
              </>
            )}
          </select>
        </div>

        {/* Target Material */}
        <div>
          <label htmlFor="targetMaterial" className="block text-sm font-semibold text-industry-slate-300">
            {isZh ? "主要被磨打磨底材" : "Target Material Substrate"}
          </label>
          <select
            id="targetMaterial"
            name="targetMaterial"
            value={fields.targetMaterial}
            onChange={handleChange}
            className="mt-2 block w-full rounded border border-industry-slate-700 px-4 py-3 bg-industry-slate-950 text-white font-medium text-base min-h-[48px] focus:border-industry-orange focus:ring-1 focus:ring-industry-orange outline-none"
          >
            {isZh ? (
              <>
                <option value="">请选择被打磨底材...</option>
                <option value="Stainless Steel">不锈钢 / 碳钢 / 铁艺焊缝</option>
                <option value="Aluminum / Copper">铝合金、黄铜等有色软金属</option>
                <option value="Hardwood / Softwood">实木板、红木家具、板材</option>
                <option value="Drywall Plaster">粉墙腻子、石膏抹灰层</option>
                <option value="Glass / Gems / Ceramic">瓷砖坡口、钢化玻璃、玉石石材</option>
                <option value="Multi-substrate catalog">跨多类底材的工具商目录</option>
              </>
            ) : (
              <>
                <option value="">Select target substrate...</option>
                <option value="Stainless Steel">Stainless Steel / Steel Alloys</option>
                <option value="Aluminum / Copper">Aluminum, Brass, Soft metals</option>
                <option value="Hardwood / Softwood">Hardwoods or Softwoods</option>
                <option value="Drywall Plaster">Plaster / Drywall joints</option>
                <option value="Glass / Gems / Ceramic">Ceramics, Tiles, Stone, Glass</option>
                <option value="Multi-substrate catalog">Multi-substrate tool catalog</option>
              </>
            )}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Expected annual purchase quantity */}
        <div>
          <label htmlFor="estimatedQuantity" className="block text-sm font-semibold text-industry-slate-300">
            {isZh ? "年度大货意向采购量" : "Expected Annual Purchase Volume"} <span className="text-industry-orange">*</span>
          </label>
          <select
            id="estimatedQuantity"
            name="estimatedQuantity"
            required
            value={fields.estimatedQuantity}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass("estimatedQuantity")}
          >
            {isZh ? (
              <>
                <option value="">请选择年度柜量...</option>
                <option value="Small Batch (<1000 Kits/Year)">小批量补充采购 (&lt;1000 套/年)</option>
                <option value="Medium OEM (1000-5000 Kits/Year)">常规贴牌量 (1000-5000 套/年)</option>
                <option value="High Volume Container (5000+ Kits/Year)">整柜集中大规模订柜 (5000 套以上/年)</option>
                <option value="Testing Phase Sourcing">新项目前期研发评估 (暂不确定)</option>
              </>
            ) : (
              <>
                <option value="">Select annual estimate...</option>
                <option value="Small Batch (<1000 Kits/Year)">Small Batch (&lt;1000 Kits/Year)</option>
                <option value="Medium OEM (1000-5000 Kits/Year)">Medium OEM (1000-5000 Kits/Year)</option>
                <option value="High Volume Container (5000+ Kits/Year)">High Volume Container (5000+ Kits/Year)</option>
                <option value="Testing Phase Sourcing">Testing Phase Sourcing (Unsure yet)</option>
              </>
            )}
          </select>
          {touched.estimatedQuantity && errors.estimatedQuantity && (
            <p className="mt-1 text-xs text-red-500 font-medium" role="alert">{errors.estimatedQuantity}</p>
          )}
        </div>

        {/* OEM custom packaging needed */}
        <div>
          <label className="block text-sm font-semibold text-industry-slate-300">
            {isZh ? "您是否需要印刷您自主品牌的彩盒样？" : "Do You Need Custom Branding / Mockups?"} <span className="text-industry-orange">*</span>
          </label>
          <div className="mt-4 flex space-x-6">
            <label className="inline-flex items-center text-white cursor-pointer select-none">
              <input
                type="radio"
                name="oemNeeded"
                value="yes"
                checked={fields.oemNeeded === "yes"}
                onChange={handleChange}
                className="h-5 w-5 accent-industry-orange border-industry-slate-700 bg-industry-slate-950 focus:ring-industry-orange"
              />
              <span className="ml-2 font-medium">{isZh ? "是，需要贴牌打印样" : "Yes, branding required"}</span>
            </label>
            <label className="inline-flex items-center text-white cursor-pointer select-none">
              <input
                type="radio"
                name="oemNeeded"
                value="no"
                checked={fields.oemNeeded === "no"}
                onChange={handleChange}
                className="h-5 w-5 accent-industry-orange border-industry-slate-700 bg-industry-slate-950 focus:ring-industry-orange"
              />
              <span className="ml-2 font-medium">{isZh ? "否，常规大货工业散装样" : "No, bulk white box ok"}</span>
            </label>
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-industry-slate-300">
          {isZh ? "列明特定的打磨外径、层缝线或者特定目数规格需求" : "List Specific Sizes, Stitch Options or Grits Required"}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={
            isZh
              ? "如：请在箱中装入：2个带柄凹槽打磨布头 (1/4寸六角快速接头)，1个多层车缝棉布轮，5张批灰打磨镂空网格砂片 P120。"
              : "e.g. Please include: 2x Dome cotton buffers (1/4 hex shank), 1x Concentric Spiral stitched 6-inch wheel, 5x Drywall Sanding screens P120."
          }
          value={fields.message}
          onChange={handleChange}
          className="mt-2 block w-full rounded border border-industry-slate-700 px-4 py-3 bg-industry-slate-950 text-white font-medium text-base min-h-[120px] focus:border-industry-orange focus:ring-1 focus:ring-industry-orange outline-none resize-y"
        />
      </div>

      {/* GDPR Consent */}
      <div className="pt-2">
        <label className="inline-flex items-start text-white cursor-pointer select-none">
          <input
            type="checkbox"
            name="consent"
            checked={fields.consent}
            onChange={(e) => {
              setFields((prev) => ({ ...prev, consent: e.target.checked }));
              if (errors.consent) setErrors((prev) => ({ ...prev, consent: "" }));
            }}
            className="mt-1 h-4 w-4 accent-industry-orange border-industry-slate-700 bg-industry-slate-950 rounded focus:ring-industry-orange"
          />
          <span className="ml-3 text-xs text-industry-slate-400 leading-relaxed">
            {isZh
              ? "我同意本站的隐私条款，同意将我的公司资料授权 SCOTTCHEN 的质检测试团队寄送样品大货并联系我。"
              : "I agree to the privacy policy and consent to being contacted by SCOTTCHEN for commercial quotes and custom packaging consultations."}{" "}
            <span className="text-industry-orange">*</span>
          </span>
        </label>
        {touched.consent && errors.consent && (
          <p className="mt-1 text-xs text-red-500 font-medium" role="alert">{errors.consent}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        {submitError ? (
          <div
            className="mb-4 rounded border border-red-500/40 bg-red-950/40 px-4 py-3 text-sm text-red-200"
            role="alert"
          >
            {submitError}
          </div>
        ) : null}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center rounded bg-industry-orange py-4 text-base font-extrabold tracking-wider uppercase text-white transition-all-custom hover:bg-industry-orange-hover hover:scale-[1.01] shadow-lg shadow-industry-orange/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              {isZh ? "正在处理样品申请资料..." : "Processing Material Sourcing Details..."}
            </>
          ) : (
            isZh ? "提交免费样品申领申请" : "Request Free Product Samples"
          )}
        </button>
      </div>
    </form>
  );
}
