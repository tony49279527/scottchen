"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";

interface FormFields {
  fullName: string;
  companyName: string;
  email: string;
  country: string;
  buyerType: string;
  productCategory: string;
  quantity: string;
  customPackaging: string;
  targetMarket: string;
  message: string;
  consent: boolean;
  hpField: string;
}

export default function RFQForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [fields, setFields] = useState<FormFields>({
    fullName: "",
    companyName: "",
    email: "",
    country: "",
    buyerType: "",
    productCategory: "",
    quantity: "",
    customPackaging: "no",
    targetMarket: "",
    message: "",
    consent: false,
    hpField: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormFields, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});

  const validateField = (name: keyof FormFields, value: string | boolean): string => {
    if (name === "consent") {
      return value ? "" : "You must consent to our privacy policy to proceed";
    }
    if (name === "hpField") {
      return "";
    }
    if (!value && name !== "message" && name !== "targetMarket") {
      return "This field is required";
    }
    if (name === "email" && typeof value === "string" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Please enter a valid business email address";
      }
    }
    return "";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const name = e.target.name as keyof FormFields;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, fields[name]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const name = e.target.name as keyof FormFields;
    const value = e.target.value;
    setFields((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger validation for all fields
    const newErrors: Partial<Record<keyof FormFields, string>> = {};
    let hasError = false;

    (Object.keys(fields) as Array<keyof FormFields>).forEach((key) => {
      const error = validateField(key, fields[key]);
      if (error) {
        newErrors[key] = error;
        hasError = true;
      }
    });

    if (hasError) {
      setErrors(newErrors);
      setTouched(
        (Object.keys(fields) as Array<keyof FormFields>).reduce(
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
      router.push("/thank-you");
      return;
    }

    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || process.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || process.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || process.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: fields.fullName,
            company_name: fields.companyName,
            from_email: fields.email,
            country: fields.country,
            buyer_type: fields.buyerType,
            product_category: fields.productCategory,
            quantity: fields.quantity,
            custom_packaging: fields.customPackaging,
            target_market: fields.targetMarket || "Not specified",
            message: fields.message || "No message provided",
          },
          publicKey
        );
      } catch (error) {
        console.error("EmailJS Error:", error);
      }
    } else {
      console.warn("EmailJS credentials missing. Form submission simulated.");
      await new Promise((resolve) => setTimeout(resolve, 1500));
    }

    setIsSubmitting(false);
    router.push("/thank-you");
  };

  const inputClass = (name: keyof FormFields) => `
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
        <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">B2B Request for Quote</h2>
        <p className="mt-1 text-sm text-industry-slate-400">
          Submit your wholesale, custom private label, or volume specifications below.
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
            Full Name <span className="text-industry-orange">*</span>
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
            Company Name <span className="text-industry-orange">*</span>
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
            Business Email <span className="text-industry-orange">*</span>
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

        {/* Country / Region */}
        <div>
          <label htmlFor="country" className="block text-sm font-semibold text-industry-slate-300">
            Country / Region <span className="text-industry-orange">*</span>
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

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Buyer Type */}
        <div>
          <label htmlFor="buyerType" className="block text-sm font-semibold text-industry-slate-300">
            Buyer Profile Type <span className="text-industry-orange">*</span>
          </label>
          <select
            id="buyerType"
            name="buyerType"
            required
            value={fields.buyerType}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass("buyerType")}
          >
            <option value="">Select buyer profile...</option>
            <option value="Tool Brand">Tool Brand / OEM Seeker</option>
            <option value="Hardware Distributor">Hardware Distributor</option>
            <option value="Online Seller">Online Tool Seller (Amazon/eBay/Shopify)</option>
            <option value="Automotive Supplier">Automotive Detailing & Repair Supplier</option>
            <option value="Woodworking Supplier">Woodworking & Furniture Supplier</option>
            <option value="Welding/Metalworking Supplier">Welding & Metalworking Distributor</option>
            <option value="Contractor Supply">Contractor & Renovation Supply</option>
            <option value="Other">Other Business Channel</option>
          </select>
          {touched.buyerType && errors.buyerType && (
            <p className="mt-1 text-xs text-red-500 font-medium" role="alert">{errors.buyerType}</p>
          )}
        </div>

        {/* Product Category */}
        <div>
          <label htmlFor="productCategory" className="block text-sm font-semibold text-industry-slate-300">
            Primary Accessory Category <span className="text-industry-orange">*</span>
          </label>
          <select
            id="productCategory"
            name="productCategory"
            required
            value={fields.productCategory}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass("productCategory")}
          >
            <option value="">Select target category...</option>
            <option value="Buffing Wheels">Buffing & Polishing Wheels</option>
            <option value="Polishing Kits">Pre-Packaged Polishing Wheel Kits</option>
            <option value="Sanding Sheets">Sanding Sheets & Sandpaper Rolls</option>
            <option value="Grinding Discs">Grinding & Zirconia Fiber Discs</option>
            <option value="Detail Tools">Detail Sanding Tools (Mini Sticks)</option>
            <option value="Sanding Screens">Drywall Sanding Screens</option>
            <option value="Diamond Abrasives">Diamond & Stone Specialty Abrasives</option>
            <option value="Dispenser Kits">Sanding Dispenser Workshop Kits</option>
            <option value="Custom Mixed Kits">Custom Mixed Surface Prep Kits</option>
          </select>
          {touched.productCategory && errors.productCategory && (
            <p className="mt-1 text-xs text-red-500 font-medium" role="alert">{errors.productCategory}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Estimated Volume */}
        <div>
          <label htmlFor="quantity" className="block text-sm font-semibold text-industry-slate-300">
            Target Batch Quantity <span className="text-industry-orange">*</span>
          </label>
          <select
            id="quantity"
            name="quantity"
            required
            value={fields.quantity}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass("quantity")}
          >
            <option value="">Select order volume range...</option>
            <option value="Trial Batch (100-500 Kits)">Trial Batch (100-500 Kits)</option>
            <option value="Small Batch OEM (500-2000 Kits)">Small Batch OEM (500-2000 Kits)</option>
            <option value="Container Wholesale (2000-5000 Kits)">Container Wholesale (2000-5000 Kits)</option>
            <option value="High Volume Industrial (5000+ Kits)">High Volume Industrial (5000+ Kits)</option>
            <option value="Sample Evaluation Only">Sample Evaluation Only (Testing first)</option>
          </select>
          {touched.quantity && errors.quantity && (
            <p className="mt-1 text-xs text-red-500 font-medium" role="alert">{errors.quantity}</p>
          )}
        </div>

        {/* Custom Packaging */}
        <div>
          <label className="block text-sm font-semibold text-industry-slate-300">
            Custom Packaging & Private Label? <span className="text-industry-orange">*</span>
          </label>
          <div className="mt-4 flex space-x-6">
            <label className="inline-flex items-center text-white cursor-pointer select-none">
              <input
                type="radio"
                name="customPackaging"
                value="yes"
                checked={fields.customPackaging === "yes"}
                onChange={handleChange}
                className="h-5 w-5 accent-industry-orange border-industry-slate-700 bg-industry-slate-950 focus:ring-industry-orange"
              />
              <span className="ml-2 font-medium">Yes, branding required</span>
            </label>
            <label className="inline-flex items-center text-white cursor-pointer select-none">
              <input
                type="radio"
                name="customPackaging"
                value="no"
                checked={fields.customPackaging === "no"}
                onChange={handleChange}
                className="h-5 w-5 accent-industry-orange border-industry-slate-700 bg-industry-slate-950 focus:ring-industry-orange"
              />
              <span className="ml-2 font-medium">No, bulk white box fine</span>
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Target Market */}
        <div>
          <label htmlFor="targetMarket" className="block text-sm font-semibold text-industry-slate-300">
            Target Market Destination
          </label>
          <input
            type="text"
            id="targetMarket"
            name="targetMarket"
            autoComplete="country"
            placeholder="e.g. North America, Germany (FBA)"
            value={fields.targetMarket}
            onChange={handleChange}
            className="mt-2 block w-full rounded border border-industry-slate-700 px-4 py-3 bg-industry-slate-950 text-white font-medium text-base min-h-[48px] focus:border-industry-orange focus:ring-1 focus:ring-industry-orange outline-none"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-industry-slate-300">
          Specific Product Requirements or Kit Bundling Needs
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Describe your dimensions, grit ranges, cloth plys, backing materials, packaging details (FNSKU barcodes, instructions) or sample list."
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
            I agree to the privacy policy and consent to being contacted by SCOTTCHEN for commercial quotes and custom packaging consultations. <span className="text-industry-orange">*</span>
          </span>
        </label>
        {touched.consent && errors.consent && (
          <p className="mt-1 text-xs text-red-500 font-medium" role="alert">{errors.consent}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
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
              Processing RFQ Details...
            </>
          ) : (
            "Submit Request for Quote"
          )}
        </button>
      </div>
    </form>
  );
}
