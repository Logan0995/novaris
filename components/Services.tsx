import React from "react";
import ScrollReveal from "./ui/ScrollReveal";
import GlassCard from "./ui/GlassCard";
import CardSpotlight from "./backgrounds/CardSpotlight";

const services = [
  {
    name: "Product Engineering",
    desc: "End-to-end software development — from database schema to deployed UI. Built to scale from day one.",
  },
  {
    name: "Mobile Applications",
    desc: "Native-quality mobile products on a single codebase. Performance and design that pass App Store scrutiny.",
  },
  {
    name: "Interface Design",
    desc: "Product design that converts users, not just impresses reviewers. Every screen is accountable to a goal.",
  },
  {
    name: "AI Integration",
    desc: "Custom intelligence embedded directly into your product workflow. Not a chatbot wrapper — actual capability.",
  }
];

export default function Services() {
  return (
    <section className="py-16 md:py-[160px] relative z-10" id="services">
      
      {/* Background Glow Node */}
      <div className="absolute top-1/2 -left-[200px] -translate-y-1/2 glow z-0" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="mb-16">
            <p className="text-[12px] font-semibold text-zinc-500 uppercase tracking-widest mb-6">
              Services
            </p>
            <h2 className="text-display-l font-display font-bold text-white mb-10 leading-[1.1]">
              Four disciplines.<br />
              One studio.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <ScrollReveal key={service.name} delay={idx * 100}>
              <CardSpotlight className="h-full rounded-[24px]">
                <GlassCard className="p-8 md:p-10 lg:p-12 h-full flex flex-col justify-center">
                  <div className="w-[24px] h-[2px] bg-accent-blue mb-8" />
                  <h3 className="text-[20px] font-display font-semibold text-white mb-4">
                    {service.name}
                  </h3>
                  <p className="text-[15px] text-zinc-400 leading-relaxed">
                    {service.desc}
                  </p>
                </GlassCard>
              </CardSpotlight>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
