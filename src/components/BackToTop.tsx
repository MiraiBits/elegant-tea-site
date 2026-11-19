"use client";

import { ArrowUp } from "lucide-react";
import useThrottledScroll from "../hooks/useThrottledScroll";

export default function BackToTop() {
  const isScrolled = useThrottledScroll(100, 400);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-40 bg-accent text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-accent/90 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
        isScrolled ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-10"
      }`}
    >
      <ArrowUp size={24} aria-hidden="true" />
    </button>
  );
}
