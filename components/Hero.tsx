import React from "react";
import MagneticButton from "./ui/MagneticButton";

import HeroBackground from "./backgrounds/HeroBackground";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col items-center overflow-hidden pt-32 pb-24">
      <HeroBackground />

      {/* Top Right Glow Node (Offset) */}
      <div className="absolute top-[-150px] right-[-150px] glow z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto my-auto px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <p className="text-[11px] text-zinc-500 tracking-[0.2em] uppercase mb-8 opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
          Software Studio &middot; Est. 2025
        </p>

        {/* Headline */}
        <h1 className="text-display-xl font-display font-extrabold text-white mb-8 flex flex-col items-center leading-[1.05]">
          <div className="hero-line"><span className="delay-[50ms]">We build software</span></div>
          <div className="hero-line"><span className="delay-[200ms]">that earns its keep.</span></div>
        </h1>

        {/* Subheadline */}
        <p className="text-[20px] text-zinc-400 max-w-[560px] text-center leading-relaxed mb-10 opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
          Novaris is a software studio that turns complex product challenges
          into clean, scalable digital infrastructure. For clients who need
          it done right the first time.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-4 opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards]">
          <MagneticButton href="#contact" variant="primary" className="w-full sm:w-auto px-8 py-4 text-[16px]">
            Start a Project
          </MagneticButton>
          <MagneticButton href="#work" variant="ghost" className="w-full sm:w-auto px-8 py-4 text-[16px]">
            See Our Work
          </MagneticButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-[pulse_2.5s_cubic-bezier(0.4,0,0.6,1)_infinite]">
        <span className="w-[1px] h-12 bg-white" />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hero-line {
          overflow: hidden;
          padding-bottom: 0.1em;
        }
        .hero-line span {
          display: block;
          transform: translateY(100%);
          animation: reveal 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes reveal {
          to { transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes heroMesh {
          0% { background: linear-gradient(135deg, #050505 0%, #070d15 100%); }
          100% { background: linear-gradient(135deg, #070d15 0%, #050505 100%); }
        }
      `}} />
    </section>
  );
}
