import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Lazy-loaded views
const Home = lazy(() => import("@/views/Home"));
const ProductsOverview = lazy(() => import("@/views/ProductsOverview"));
const BuffingPolishingWheels = lazy(() => import("@/views/BuffingPolishingWheels"));
const SandingGrindingAccessories = lazy(() => import("@/views/SandingGrindingAccessories"));
const OEMPrivateLabel = lazy(() => import("@/views/OEMPrivateLabel"));
const Applications = lazy(() => import("@/views/Applications"));
const QualityControl = lazy(() => import("@/views/QualityControl"));
const SampleKit = lazy(() => import("@/views/SampleKit"));
const Contact = lazy(() => import("@/views/Contact"));
const ThankYou = lazy(() => import("@/views/ThankYou"));
const NotFound = lazy(() => import("@/views/NotFound"));

// Suspense loading fallback component
function LoadingFallback() {
  return (
    <div className="flex-grow flex items-center justify-center min-h-[50vh] bg-industry-slate-900">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-10 w-10 border-4 border-t-industry-orange border-industry-slate-800 rounded-full animate-spin"></div>
        <span className="text-xs font-mono tracking-widest text-industry-slate-400 uppercase">
          Loading catalog details...
        </span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-full flex flex-col bg-industry-slate-900 text-industry-slate-200">
        <Header />
        <main className="flex-grow flex flex-col">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductsOverview />} />
              <Route path="/products/buffing-polishing-wheels" element={<BuffingPolishingWheels />} />
              <Route path="/products/sanding-grinding-accessories" element={<SandingGrindingAccessories />} />
              <Route path="/oem-private-label" element={<OEMPrivateLabel />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/quality-control" element={<QualityControl />} />
              <Route path="/sample-kit" element={<SampleKit />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
