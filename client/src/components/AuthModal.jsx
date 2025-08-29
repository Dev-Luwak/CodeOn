import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AuthModal({
  children,
  title = "",
  onClose,
  standalone = false,
}) {
  const location = useLocation();

  // Lock scroll only if not standalone
  useEffect(() => {
    if (!standalone) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [standalone]);

  // Close modal on route change only if not standalone
  useEffect(() => {
    if (!standalone && onClose) {
      onClose();
    }
  }, [location, onClose, standalone]);

  return (
    <div className={standalone ? "" : "fixed inset-0 z-50"}>
      {/* Blurred backdrop only if not standalone */}
      {!standalone && (
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-md"
          onClick={onClose}
        />
      )}

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
