"use client";
import React, { useEffect, useRef } from "react";
import ScrollReveal from "./ui/ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We audit your goals, constraints, and existing systems before a single line of code is agreed upon."
  },
  {
    num: "02",
    title: "Architecture",
    desc: "Technical plan, scope document, and timeline — approved by you before build begins. No surprises."
  },
  {
    num: "03",
    title: "Build",
    desc: "Iterative development with weekly delivery checkpoints. You see progress. We stay accountable."
  },
  {
    num: "04",
    title: "Launch & Handoff",
    desc: "Deployment, documentation, and a 30-day post-launch support window. You own everything, fully."
  }
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          lineRef.current?.classList.add('drawn');
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-[160px] relative z-10 bg-bg-surface" id="process">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        <ScrollReveal>
          <div className="mb-24 text-center md:text-left">
            <p className="text-[12px] font-semibold text-zinc-500 uppercase tracking-widest mb-6">
              Process
            </p>
            <h2 className="text-display-l font-display font-bold text-white mb-10 leading-[1.1]">
              How every project runs.
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Desktop Connecting Line */}
          <svg
            className="absolute top-[40px] left-0 w-full h-px hidden lg:block z-0"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              x1="12.5%"
              y1="0"
              x2="87.5%"
              y2="0"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
              className="connector-line"
              ref={lineRef}
            />
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <ScrollReveal key={step.num} delay={idx * 150} className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                {/* Number */}
                <div className="text-[80px] font-display font-extrabold text-zinc-800 leading-none mb-6 bg-bg-surface lg:pr-4">
                  {step.num}
                </div>
                
                {/* Title & Desc */}
                <h3 className="text-[20px] font-display font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-[14px] text-zinc-400 leading-relaxed max-w-[280px]">
                  {step.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
