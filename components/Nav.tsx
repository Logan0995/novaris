"use client";

import React, { useState, useEffect } from "react";
import MagneticButton from "./ui/MagneticButton";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" }
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "glass" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="font-display font-bold text-white text-xl tracking-tight">
                Novaris.
              </a>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-[14px] font-medium text-zinc-400 hover:text-white transition-colors duration-150"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <a 
                href="#contact"
                className="bg-accent-blue text-white rounded-full px-5 py-2.5 text-[14px] font-medium hover:bg-blue-600 transition-colors duration-300"
              >
                Start a Project
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-bg-void/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white p-2"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-display font-medium text-zinc-400 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 bg-accent-blue text-white rounded-full px-8 py-4 text-lg font-medium"
          >
            Start a Project
          </a>
        </div>
      )}
    </>
  );
}
