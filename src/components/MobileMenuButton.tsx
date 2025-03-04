'use client';

import { Button } from "./ui/button";

export function MobileMenuButton() {
  const toggleMenu = () => {
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu) {
      mobileMenu.classList.toggle("hidden");
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className="md:hidden text-white hover:text-[#C9A668]"
      onClick={toggleMenu}
    >
      Menu
    </Button>
  );
} 