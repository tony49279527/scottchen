"use client";

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

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
}

export default function SampleKitForm() {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
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
  });

  const [errors, setErrors] = useState<Partial<Record<keyof SampleFormFields, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof SampleFormFields, boolean>>>({});

  const validateField = (name: keyof SampleFormFields, value: string | string[]): string => {
    if (name === "categories") {
      if (!value || value.length === 0) {
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

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    navigate("/thank-you");
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
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto glass-panel p-8 rounded-lg shadow-xl">
      <div className="border-b border-industry-slate-800 pb-4 mb-6">
        <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">Request a Sample Testing Kit</h2>
        <p className="mt-1 text-sm text-industry-slate-400">
          Verify our material thickness, stitch density, and grit uniformity in your own workshop before ordering.
        </p>
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
        {/* Website Link */}
        <div>
          <label htmlFor="website" className="block text-sm font-semibold text-industry-slate-300">
            Company Website / Store URL
          </label>
          <input
            type="text"
            id="website"
            name="website"
            placeholder="e.g. www.mytoolbrand.com"
            value={fields.website}
            onChange={handleChange}
            className="mt-2 block w-full rounded border border-industry-slate-700 px-4 py-3 bg-industry-slate-950 text-white font-medium text-base min-h-[48px] focus:border-industry-orange focus:ring-1 focus:ring-industry-orange outline-none"
          />
        </div>

        {/* Volume Expectation */}
        <div>
          <label htmlFor="estimatedQuantity" className="block text-sm font-semibold text-industry-slate-300">
            Expected Annual Purchase Quantity <span className="text-industry-orange">*</span>
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
            <option value="">Select expected scale...</option>
            <option value="Under 1,000 units/year">Under 1,000 units/year (Testing phase)</option>
            <option value="1,000 - 5,000 units/year">1,000 - 5,000 units/year</option>
            <option value="5,000 - 20,000 units/year">5,000 - 20,000 units/year</option>
            <option value="20,000+ units/year">20,000+ units/year (Volume supply)</option>
          </select>
          {touched.estimatedQuantity && errors.estimatedQuantity && (
            <p className="mt-1 text-xs text-red-500 font-medium" role="alert">{errors.estimatedQuantity}</p>
          )}
        </div>
      </div>

      {/* Product categories of interest (Checkbox group) */}
      <div>
        <label className="block text-sm font-semibold text-industry-slate-300 mb-2">
          Select Accessories Needed in Sample Kit <span className="text-industry-orange">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          {[
            { value: "cotton-wheels", label: "Cotton Buffing & Polishing Wheels" },
            { value: "polishing-compounds", label: "Polishing Compounds (Green/Red/White)" },
            { value: "bench-grinder-wheels", label: "Bench Grinder Wheels (Thick)" },
            { value: "drill-polishing-kits", label: "Drill Polishing/Shank Kits" },
            { value: "sanding-sheets-rolls", label: "Wood/Metal Sandpaper Sheets & Rolls" },
            { value: "zirconia-fiber-discs", label: "Zirconia Grinding & Fiber Discs" },
            { value: "drywall-sanding-screens", label: "Drywall Mesh Sanding Screens" },
            { value: "mini-sanding-sticks", label: "Detail Sanding Mini Sticks" },
          ].map((cat) => (
            <label key={cat.value} className="inline-flex items-center text-sm text-industry-slate-300 cursor-pointer select-none">
              <input
                type="checkbox"
                name="categories"
                value={cat.value}
                checked={fields.categories.includes(cat.value)}
                onChange={handleCheckboxChange}
                className="h-5 w-5 rounded border-industry-slate-700 bg-industry-slate-950 text-industry-orange focus:ring-industry-orange accent-industry-orange"
              />
              <span className="ml-3 font-medium text-white">{cat.label}</span>
            </label>
          ))}
        </div>
        {touched.categories && errors.categories && (
          <p className="mt-1 text-xs text-red-500 font-medium" role="alert">{errors.categories}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Target Material */}
        <div>
          <label htmlFor="targetMaterial" className="block text-sm font-semibold text-industry-slate-300">
            Work Substrate / Target Material
          </label>
          <select
            id="targetMaterial"
            name="targetMaterial"
            value={fields.targetMaterial}
            onChange={handleChange}
            className="mt-2 block w-full rounded border border-industry-slate-700 px-4 py-3 bg-industry-slate-950 text-white font-medium text-base min-h-[48px] focus:border-industry-orange focus:ring-1 focus:ring-industry-orange outline-none"
          >
            <option value="">Select target material...</option>
            <option value="Stainless Steel">Stainless Steel / Chrome</option>
            <option value="Aluminum / Copper / Brass">Aluminum / Copper / Brass</option>
            <option value="Wood (Softwood/Hardwood)">Wood (Furniture & Finish)</option>
            <option value="Drywall & Plaster">Drywall & Plaster</option>
            <option value="Stone / Granite / Marble">Stone / Granite / Tile</option>
            <option value="Glass / Gemstones / Ceramics">Glass / Gem / Ceramics</option>
            <option value="Multiple Materials">Mixed/General Work</option>
          </select>
        </div>

        {/* Private Label Support */}
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
              <span className="ml-2 font-medium">Yes (OEM / Barcode)</span>
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
              <span className="ml-2 font-medium">No (Bulk / Standard)</span>
            </label>
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-industry-slate-300">
          Specific Sample Sizing, Grits, or Density Specifications
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="e.g. green polishing bar, 1/4 inch shank drill polishing pad, 80 grit zirconia sanding disc."
          value={fields.message}
          onChange={handleChange}
          className="mt-2 block w-full rounded border border-industry-slate-700 px-4 py-3 bg-industry-slate-950 text-white font-medium text-base min-h-[100px] focus:border-industry-orange focus:ring-1 focus:ring-industry-orange outline-none resize-y"
        />
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
              Preparing Sample Kit Configuration...
            </>
          ) : (
            "Request Sample Kit Now"
          )}
        </button>
      </div>
    </form>
  );
}
