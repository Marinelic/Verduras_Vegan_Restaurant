import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
        className={`fixed bottom-6 right-6 z-[999] pointer-events-auto transition-transform transition-opacity duration-300
            ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}
        `}
        >
        <button
            onClick={scrollToTop}
            className="bg-yellow-400 text-green-900 p-3 rounded-full shadow-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
            <ArrowUp className="w-5 h-5 text-green-900" />
        </button>
    </div>
  );
};

export default BackToTopButton;
