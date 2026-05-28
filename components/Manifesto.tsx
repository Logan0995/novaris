import React from "react";
import ScrollReveal from "./ui/ScrollReveal";
import GrainOverlay from "./backgrounds/GrainOverlay";

export default function Manifesto() {
  return (
    <section className="py-24 md:py-[160px] relative z-10" id="manifesto">
      <GrainOverlay opacity={0.03} />
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        <ScrollReveal>
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <p className="text-[12px] font-semibold text-zinc-500 uppercase tracking-wide mb-6">
              Our Position
            </p>

            {/* Headline */}
            <h2 className="text-display-l font-display font-bold text-white mb-10 leading-[1.1]">
              Most software fails before<br />
              it&apos;s ever shipped.
            </h2>

            {/* Body */}
            <div className="space-y-6 text-[18px] text-zinc-400 leading-relaxed max-w-2xl mb-12">
              <p>
                Not because of bad engineers. Because of bad decisions made before
                a line of code is written — wrong scope, wrong architecture,
                wrong assumptions about what the product actually needs to do.
              </p>
              <p>
                We fix that upstream. Every engagement starts with a structured
                discovery phase: goals, constraints, and a technical plan that
                the entire build is held accountable to.
              </p>
              <p>
                The result is software that does exactly what was promised,
                on a timeline that was actually realistic.
              </p>
            </div>

            {/* Pull Quote */}
            <div className="pl-8 border-l-2 border-accent-blue py-2">
              <p className="text-[24px] font-display font-medium text-zinc-200 leading-snug max-w-xl">
                &quot;We don&apos;t just build what you ask for.<br />
                We build what you need.&quot;
              </p>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
