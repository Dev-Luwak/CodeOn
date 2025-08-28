import HeroSection from "../components/Hero";
import FeaturesSection from "../components/Features";
import HowItWorksSection from "../components/HowItWorks";
import TestimonialsSection from "../components/Testimonial";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div className="bg-[#111113] text-white min-h-screen flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
