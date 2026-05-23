"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      return value ? "" : "You must consent to proceed";
    }
    if (name === "hpField") {
      return "";
    }
    if (name === "categories") {
      const arr = value as string[];
      if (!arr || arr.length === 0) {
        return "Please select at least one product category";
      }
      return "";
    }
    if (!value && name !== "message" && name !== "website" && name !== "application" && name !== "targetMaterial") {
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
            website: fields.website || "Not specified",
            categories: fields.categories.join(", "),
            application: fields.application || "Not specified",
            target_material: fields.targetMaterial || "Not specified",
            estimated_quantity: fields.estimatedQuantity,
            oem_needed: fields.oemNeeded,
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
        <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">B2B Material Sample Request</h2>
        <p className="mt-1 text-sm text-industry-slate-400">
          Verify our manufacturing standards, stitching densities, and grit ranges in your own workshop.
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

        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-sm font-semibold text-industry-slate-300">
            Shipping Country <span className="text-industry-orange">*</span>
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
          Company Website / Store URL
        </label>
        <input
          type="url"
          id="website"
          name="website"
          placeholder="e.g. www.mytoolbrand.com"
          value={fields.website}
          onChange={handleChange}
          className="mt-2 block w-full rounded border border-industry-slate-700 px-4 py-3 bg-industry-slate-950 text-white font-medium text-base min-h-[48px] focus:border-industry-orange focus:ring-1 focus:ring-industry-orange outline-none"
        />
      </div>

      {/* Target Products Categories */}
      <div>
        <label className="block text-sm font-semibold text-industry-slate-300 mb-2">
          Select Accessories Needed in Sample Kit <span className="text-industry-orange">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 bg-industry-slate-950/60 p-4 rounded border border-industry-slate-800">
          {[
            { label: "Spiral Stitched Buffing Wheels", val: "Buffing Wheels" },
            { label: "Loose Flannel Coloring Wheels", val: "Loose Flannel" },
            { label: "Shank-Mounted Polishing Buffs", val: "Shank Buffs" },
            { label: "Abrasive Compound Bars", val: "Compounds" },
            { label: "Sanding Sheets & Rolls", val: "Sanding Sheets" },
            { label: "Drywall Sanding Screens", val: "Sanding Screens" },
            { label: "Detail Mini Sanding Sticks", val: "Detail Sticks" },
            { label: "Diamond Specialty Discs", val: "Diamond Abrasives" },
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
            Work Industry / Application
          </label>
          <select
            id="application"
            name="application"
            value={fields.application}
            onChange={handleChange}
            className="mt-2 block w-full rounded border border-industry-slate-700 px-4 py-3 bg-industry-slate-950 text-white font-medium text-base min-h-[48px] focus:border-industry-orange focus:ring-1 focus:ring-industry-orange outline-none"
          >
            <option value="">Select application...</option>
            <option value="Metalworking">Metal Fabrication / Welds</option>
            <option value="Woodworking">Woodworking / Joinery</option>
            <option value="Automotive">Automotive Painting / Rim restore</option>
            <option value="Jewelry">Jewelry & Precision Crafts</option>
            <option value="Drywall/Contracting">Drywall & Renovations</option>
            <option value="Retail Brand Catalog">OEM Retail Brand Catalog</option>
            <option value="Other">Other Application</option>
          </select>
        </div>

        {/* Target Material */}
        <div>
          <label htmlFor="targetMaterial" className="block text-sm font-semibold text-industry-slate-300">
            Target Material Substrate
          </label>
          <select
            id="targetMaterial"
            name="targetMaterial"
            value={fields.targetMaterial}
            onChange={handleChange}
            className="mt-2 block w-full rounded border border-industry-slate-700 px-4 py-3 bg-industry-slate-950 text-white font-medium text-base min-h-[48px] focus:border-industry-orange focus:ring-1 focus:ring-industry-orange outline-none"
          >
            <option value="">Select target substrate...</option>
            <option value="Stainless Steel">Stainless Steel / Steel Alloys</option>
            <option value="Aluminum / Copper">Aluminum, Brass, Soft metals</option>
            <option value="Hardwood / Softwood">Hardwoods or Softwoods</option>
            <option value="Drywall Plaster">Plaster / Drywall joints</option>
            <option value="Glass / Gems / Ceramic">Ceramics, Tiles, Stone, Glass</option>
            <option value="Multi-substrate catalog">Multi-substrate tool catalog</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Expected annual purchase quantity */}
        <div>
          <label htmlFor="estimatedQuantity" className="block text-sm font-semibold text-industry-slate-300">
            Expected Annual Purchase Volume <span className="text-industry-orange">*</span>
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
            <option value="">Select annual estimate...</option>
            <option value="Small Batch (<1000 Kits/Year)">Small Batch (&lt;1000 Kits/Year)</option>
            <option value="Medium OEM (1000-5000 Kits/Year)">Medium OEM (1000-5000 Kits/Year)</option>
            <option value="High Volume Container (5000+ Kits/Year)">High Volume Container (5000+ Kits/Year)</option>
            <option value="Testing Phase Sourcing">Testing Phase Sourcing (Unsure yet)</option>
          </select>
          {touched.estimatedQuantity && errors.estimatedQuantity && (
            <p className="mt-1 text-xs text-red-500 font-medium" role="alert">{errors.estimatedQuantity}</p>
          )}
        </div>

        {/* OEM custom packaging needed */}
        <div>
          <label className="block text-sm font-semibold text-industry-slate-300">
            Do You Need Custom Branding / Mockups? <span className="text-industry-orange">*</span>
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
              <span className="ml-2 font-medium">Yes, branding required</span>
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
              <span className="ml-2 font-medium">No, bulk white box ok</span>
            </label>
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-industry-slate-300">
          List Specific Sizes, Stitch Options or Grits Required
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="e.g. Please include: 2x Dome cotton buffers (1/4 hex shank), 1x Concentric Spiral stitched 6-inch wheel, 5x Drywall Sanding screens P120."
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
              Processing Material Sourcing Details...
            </>
          ) : (
            "Request Free Product Samples"
          )}
        </button>
      </div>
    </form>
  );
}
