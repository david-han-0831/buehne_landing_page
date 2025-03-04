'use client';

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export function MobileMenu() {
  const toggleMenu = () => {
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu) {
      mobileMenu.classList.toggle("hidden");
    }
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-white hover:text-gold"
        onClick={toggleMenu}
      >
        <Menu className="h-6 w-6" />
      </Button>

      <div id="mobile-menu" className="hidden md:hidden absolute top-16 left-0 right-0 bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/60 border-b">
        <div className="container py-4 space-y-2">
          <Link href="#about" className="block text-base font-medium text-white hover:text-gold transition-colors">
            About
          </Link>
          <Link href="#founder" className="block text-base font-medium text-white hover:text-gold transition-colors">
            Founder
          </Link>
          <Link href="#activities" className="block text-base font-medium text-white hover:text-gold transition-colors">
            Activities
          </Link>
          <Link href="#portfolio" className="block text-base font-medium text-white hover:text-gold transition-colors">
            Portfolio
          </Link>
          <Link href="#contact" className="block text-base font-medium text-white hover:text-gold transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
} 