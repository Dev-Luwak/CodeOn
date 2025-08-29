import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "../components/Hero";
import FeaturesSection from "../components/Features";
import HowItWorksSection from "../components/HowItWorks";
import TestimonialsSection from "../components/Testimonial";
import Footer from "../components/Footer";
import Login from "./Login";

export default function Landing() {
  const [showModal, setShowModal] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const navbarRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNavbarVisible(entry.isIntersecting);
      },
      { threshold: 1.0 }
    );

    if (navbarRef.current) {
      observer.observe(navbarRef.current);
    }

    return () => {
      if (navbarRef.current) {
        observer.unobserve(navbarRef.current);
      }
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-black via-[#111113] to-black text-white min-h-screen flex flex-col">
      {/* Remove Navbar from here if it's already in App.jsx */}
      <div ref={navbarRef}></div>

      <div className={`${showModal ? "blur-sm" : ""}`}>
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

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="w-full max-w-md">
            <Login />
          </div>
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setShowModal(false)}
          >
            &times;
          </button>
        </div>
      )}

      {!isNavbarVisible && (
        <button
          className="fixed bottom-8 right-8 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
          onClick={() => setShowModal(true)}
        >
          Login/Register
        </button>
      )}
    </div>
  );
}
