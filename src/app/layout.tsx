import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "OEM Abrasive, Sanding & Polishing Accessory Kits | SCOTTCHEN",
  description: "SCOTTCHEN manufactures retail-ready surface finishing accessory kits. Private label packaging, custom grit assortments, and optimized compatibility. Low MOQs.",
  alternates: {
    canonical: "https://www.scottchentools.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="h-full antialiased bg-industry-slate-900 text-industry-slate-200 font-sans">
        <div className="min-h-full flex flex-col">
          <Header />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
