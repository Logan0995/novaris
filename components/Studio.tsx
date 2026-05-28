import React from "react";
import ScrollReveal from "./ui/ScrollReveal";
import GrainOverlay from "./backgrounds/GrainOverlay";

const stats = [
  { value: "3", label: "products shipped to production" },
  { value: "0", label: "missed launch commitments" },
  { value: "100%", label: "client ownership on handoff" }
];

export default function Studio() {
  return (
    <section className="py-16 md:py-[160px] relative z-10 overflow-hidden" id="studio">
      <GrainOverlay opacity={0.03} />
      <div className="studio-pulse" aria-hidden="true" />
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        <ScrollReveal>
          <div className="max-w-4xl mb-24">
            {/* Eyebrow */}
            <p className="text-[12px] font-semibold text-zinc-500 uppercase tracking-wide mb-6">
              The Studio
            </p>

            {/* Headline */}
            <h2 className="text-display-l font-display font-bold text-white mb-10 leading-[1.1]">
              Small enough to care.<br />
              Experienced enough to deliver.
            </h2>

            {/* Body */}
            <div className="space-y-6 text-[18px] text-zinc-400 leading-relaxed max-w-2xl">
              <p>
                Novaris was built on a simple observation: most software agencies are
                optimized for their own processes, not their clients&apos; outcomes.
              </p>
              <p>
                We run differently. Every project has a named lead with direct accountability.
                Every decision is documented. Every timeline is one we actually believe in.
              </p>
              <p>
                We have built startups from zero. We know what &quot;launch pressure&quot; feels like
                from the inside. That experience lives in how we work — not just what we build.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Stat Row */}
        <ScrollReveal delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pt-12 border-t border-white/5">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[48px] font-display font-extrabold text-white leading-tight mb-2">
                  {stat.value}
                </span>
                <span className="text-[13px] text-zinc-500 uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
