import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PaymentShowcase from '@/components/PaymentShowcase';
import FeatureMatrix from '@/components/FeatureMatrix';
import ProductShowcase from '@/components/ProductShowcase';
import ROICalculator from '@/components/ROICalculator';
import TechStack from '@/components/TechStack';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink">
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
  );
}

export default App;
