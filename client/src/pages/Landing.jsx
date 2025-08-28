import HeroSection from "../components/Hero";
import FeaturesSection from "../components/Features";
import HowItWorksSection from "../components/HowItWorks";
import TestimonialsSection from "../components/Testimonial";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div className="bg-gradient-to-b from-black via-[#111113] to-black text-white min-h-screen flex flex-col">
      <HeroSection />
      <div className="h-[1px] bg-gradient-to-r from-white/10 via-transparent to-white/10 my-12"></div>
      <FeaturesSection />
      <div className="h-[1px] bg-gradient-to-r from-white/10 via-transparent to-white/10 my-12"></div>
      <HowItWorksSection />
      <div className="h-[1px] bg-gradient-to-r from-white/10 via-transparent to-white/10 my-12"></div>
      <TestimonialsSection />
      <div className="h-[1px] bg-gradient-to-r from-white/10 via-transparent to-white/10 my-12"></div>
      <Footer />
    </div>
  );
}
