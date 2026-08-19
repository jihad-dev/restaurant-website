import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PaymentShowcase from "@/components/PaymentShowcase";
import FeatureMatrix from "@/components/FeatureMatrix";
import ProductShowcase from "@/components/ProductShowcase";
import ROICalculator from "@/components/ROICalculator";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // পেজ এবং রিসোর্স লোড হওয়ার ৩ সেকেন্ড পর প্রি-লোডার হাইড হবে
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Fullscreen Animated Preloader */}
      <Preloader isLoading={isLoading} />

      <div
        className={`relative min-h-screen overflow-x-hidden bg-ink transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <main>
          <Hero />
          <PaymentShowcase />
          <FeatureMatrix />
          <ProductShowcase />
          <ROICalculator />
          <TechStack />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
