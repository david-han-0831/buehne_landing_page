'use client';

import { ChevronUp } from "lucide-react";

export function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="flex items-center justify-center rounded-full bg-[#C9A668] p-2 text-white hover:bg-[#B89658]"
      aria-label="맨 위로 이동"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
} 