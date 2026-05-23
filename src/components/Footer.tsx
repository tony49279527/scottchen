"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-industry-slate-950 border-t border-industry-slate-800 text-industry-slate-400 py-12 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info Column */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <svg
                className="h-7 w-7 text-industry-orange"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="text-lg font-black tracking-wider text-white">
                APEX<span className="text-industry-orange">FINISH</span>
              </span>
            </Link>
            <p className="text-sm text-industry-slate-400 leading-relaxed max-w-xs">
              OEM Abrasive, Sanding & Polishing Accessory Kits for Tool Brands, Hardware Distributors and Online Sellers.
            </p>
            <div className="pt-2 text-xs text-industry-slate-500 font-mono">
              Process: Grind &bull; Sand &bull; Finish &bull; Polish
            </div>
          </div>

          {/* Product Categories Column */}
          <div>
            <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-4">Abrasive Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products/buffing-polishing-wheels" className="hover:text-white transition-colors duration-200">
                  Buffing & Polishing Wheels
                </Link>
              </li>
              <li>
                <Link href="/products/buffing-polishing-wheels" className="hover:text-white transition-colors duration-200">
                  Polishing Wheel Kits
                </Link>
              </li>
              <li>
                <Link href="/products/sanding-grinding-accessories" className="hover:text-white transition-colors duration-200">
                  Sanding Sheets & Rolls
                </Link>
              </li>
              <li>
                <Link href="/products/sanding-grinding-accessories" className="hover:text-white transition-colors duration-200">
                  Grinding & Fiber Discs
                </Link>
              </li>
              <li>
                <Link href="/products/sanding-grinding-accessories" className="hover:text-white transition-colors duration-200">
                  Detail Sanding Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Applications Column */}
          <div>
            <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-4">Industries & Uses</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/applications" className="hover:text-white transition-colors duration-200">
                  Metalworking Prep & Polish
                </Link>
              </li>
              <li>
                <Link href="/applications" className="hover:text-white transition-colors duration-200">
                  Woodworking & Furniture
                </Link>
              </li>
              <li>
                <Link href="/applications" className="hover:text-white transition-colors duration-200">
                  Automotive Restoration
                </Link>
              </li>
              <li>
                <Link href="/applications" className="hover:text-white transition-colors duration-200">
                  Online Tool Seller Kits
                </Link>
              </li>
              <li>
                <Link href="/quality-control" className="hover:text-white transition-colors duration-200">
                  Quality Control Inspections
                </Link>
              </li>
            </ul>
          </div>

          {/* B2B Inquiries & Channels Column */}
          <div>
            <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-4">Direct B2B Channels</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-200 block">
                  <span className="font-semibold text-industry-orange">Request Custom Quote</span>
                </Link>
              </li>
              <li>
                <Link href="/sample-kit" className="hover:text-white transition-colors duration-200 block">
                  Request Sample Testing Kit
                </Link>
              </li>
              <li className="pt-2 border-t border-industry-slate-800">
                <span className="text-xs text-industry-slate-500 block">Email Inquiry:</span>
                <a href="mailto:sales@apexfinishkits.com" className="text-white hover:underline">
                  sales@apexfinishkits.com
                </a>
              </li>
              <li>
                <span className="text-xs text-industry-slate-500 block">Connect on Professional Network:</span>
                <a href="https://www.linkedin.com/company/apexfinish-tools" target="_blank" rel="noopener noreferrer" className="text-white hover:underline block">
                  LinkedIn Profile &bull; Supply Chain
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/hashtag/apexfinish" target="_blank" rel="noopener noreferrer" className="text-white hover:underline block text-xs flex items-center space-x-1">
                  <svg className="w-4 h-4 fill-current text-red-500 mr-1" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>YouTube Shorts &bull; Demos</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-industry-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-industry-slate-500">
          <div>
            &copy; {currentYear} APEXFINISH. All rights reserved. Industrial supplier of Surface Finishing Accessories.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button 
              className="hover:text-white cursor-pointer focus:outline-none focus:underline"
              onClick={() => alert('ApexFinish B2B Supply Terms: Standard Incoterms 2020 apply. Contact sales for formal policy agreements.')}
            >
              B2B Supply Terms
            </button>
            <button 
              className="hover:text-white cursor-pointer focus:outline-none focus:underline"
              onClick={() => alert('ApexFinish Privacy Policy: We only collect email and corporate details for professional quoting. We do not sell data to third parties.')}
            >
              Privacy Statement
            </button>
            <button 
              className="hover:text-white cursor-pointer focus:outline-none focus:underline"
              onClick={() => alert('ApexFinish Anti-CSRF & Data Protection Policy: Sourcing forms are protected. Data processed securely for lead qualification.')}
            >
              Anti-CSRF & Data Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
