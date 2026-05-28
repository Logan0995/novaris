import React from "react";
import MagneticButton from "./ui/MagneticButton";
import ScrollReveal from "./ui/ScrollReveal";
import GlowNode from "./ui/GlowNode";

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[100svh] flex flex-col overflow-hidden" id="contact">
      
      {/* Background Glow Node & Rings */}
      <div className="footer-glow" aria-hidden="true" />
      <div className="footer-ring" aria-hidden="true" />
      <div className="footer-ring footer-ring-2" aria-hidden="true" />

      {/* Subtle Dot Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />

      {/* Main CTA Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 py-20 text-center">
        <ScrollReveal className="flex flex-col items-center">
          <p className="text-[12px] font-semibold text-zinc-500 tracking-widest uppercase mb-8">
            Start a Project
          </p>
          
          <h2 className="text-display-xl font-display font-extrabold text-white mb-8 max-w-3xl mx-auto leading-[1.05]">
            Have a product to build?<br />
            Let&apos;s talk scope.
          </h2>
          
          <p className="text-[18px] text-zinc-400 max-w-lg mx-auto mb-12">
            One conversation to understand your goals, constraints, and timeline.
            No pitch. No retainer. Just clarity.
          </p>

          <MagneticButton href="#" variant="primary" className="w-full sm:w-auto px-8 sm:px-12 py-5 text-xl font-display font-semibold mb-6">
            Book a Discovery Call
          </MagneticButton>

          <a href="mailto:hello@novaris.com" className="text-[14px] text-zinc-500 hover:text-white transition-colors duration-200">
            or email us directly &rarr;
          </a>
        </ScrollReveal>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 w-full border-t border-white/5 pt-8 pb-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-zinc-600">
            © 2025 Novaris Studio.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-[13px] text-zinc-600">
            <a href="#" className="hover:text-zinc-400 transition-colors">LinkedIn</a>
            <span>&middot;</span>
            <a href="#" className="hover:text-zinc-400 transition-colors">Twitter</a>
            <span>&middot;</span>
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy</a>
            <span>&middot;</span>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
