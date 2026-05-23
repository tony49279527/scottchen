import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/views/Home";
import ProductsOverview from "@/views/ProductsOverview";
import BuffingPolishingWheels from "@/views/BuffingPolishingWheels";
import SandingGrindingAccessories from "@/views/SandingGrindingAccessories";
import OEMPrivateLabel from "@/views/OEMPrivateLabel";
import Applications from "@/views/Applications";
import QualityControl from "@/views/QualityControl";
import SampleKit from "@/views/SampleKit";
import Contact from "@/views/Contact";
import ThankYou from "@/views/ThankYou";

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-full flex flex-col bg-industry-slate-900 text-industry-slate-200">
        <Header />
        <main className="flex-grow flex flex-col">
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
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
