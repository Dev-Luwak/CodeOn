import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AuthModal({ children, title = "", onClose }) {
  const location = useLocation();

  // Lock scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Close modal on route change
  useEffect(() => {
    onClose(); // Call onClose whenever the route changes
  }, [location, onClose]);

  return (
    <div className="fixed inset-0 z-50">
      {/* Blurred backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Card near top */}
      <div className="relative mx-auto mt-12 max-w-md px-4">
        <div className="border-gradient rounded-2xl shadow-glow">
          <div className="rounded-2xl bg-[#18181B] p-6">
            {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
