import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustTicker from "@/components/TrustTicker";
import WhyChooseUs from "@/components/WhyChooseUs";
import Products from "@/components/Products";
import PrivateLabel from "@/components/PrivateLabel";
import BulkSupplier from "@/components/BulkSupplier";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust Ribbon Banner */}
        <TrustTicker />

        {/* 3. Natural Moroccan Beauty for Your Brand */}
        <WhyChooseUs />

        {/* 4. Best-Selling Moroccan Beauty Products */}
        <Products />

        {/* 5. Private Label Services (OEM/ODM) */}
        <PrivateLabel />

        {/* 6. Moroccan Oil Bulk Supplier (Dark Luxury Theme Section) */}
        <BulkSupplier />

        {/* 7. What Our Customers Say (Reviews and Ratings) */}
        <Testimonials />

        {/* 8. Popular FAQs for Your Business */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
