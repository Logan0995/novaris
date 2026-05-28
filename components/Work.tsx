"use client";

import React from "react";
import ScrollReveal from "./ui/ScrollReveal";
import GlassCard from "./ui/GlassCard";

const projects = [
  {
    name: "SAFEOPEN",
    tag: "Platform · Security",
    result: "A production-grade security platform, launched and operating at scale.",
    challenge: "The client needed a secure, modern platform architecture that could handle real user data with enterprise-grade reliability — without the cost of an in-house engineering team.",
    delivered: [
      "Full-stack platform architecture and development",
      "Secure authentication and data handling infrastructure",
      "Scalable deployment pipeline, production-ready on launch day"
    ],
    url: "https://safeopen.co",
    gradient: "linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #071020 100%)"
  },
  {
    name: "RIVO",
    tag: "Product · Growth",
    result: "Zero-to-one product build, shipped within timeline and budget.",
    challenge: "The client had a clear vision and a tight window. They needed an engineering partner who could move fast without creating technical debt that would need to be unwound six months later.",
    delivered: [
      "Product architecture and technical scoping from discovery",
      "Full-stack development across web and mobile surfaces",
      "Handoff with documentation, deployment, and onboarding support"
    ],
    url: "#",
    gradient: "linear-gradient(135deg, #0a1a14 0%, #0d2a1e 50%, #071510 100%)"
  },
  {
    name: "SENTINEL",
    tag: "AI Product · Legal Tech",
    result: "An AI-powered document analysis platform using risk-based taxonomy, built to production quality for a legal-tech client.",
    challenge: "Legal document review is slow, expensive, and error-prone at scale. The client needed an AI product that structured contract analysis into a consistent, risk-based taxonomy — one that legal professionals could actually rely on.",
    delivered: [
      "AI pipeline design and integration for document classification",
      "Cross-platform product (mobile + web) with clean review interface",
      "Risk taxonomy framework, validated against real legal agreement corpus"
    ],
    url: null,
    gradient: "linear-gradient(135deg, #0f0a1a 0%, #1a0f2e 50%, #0a0714 100%)"
  }
];

export default function Work() {
  return (
    <section className="py-24 md:py-[160px] relative z-10" id="work">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        <ScrollReveal>
          <div className="mb-16">
            <p className="text-[12px] font-semibold text-zinc-500 uppercase tracking-widest mb-6">
              Selected Work
            </p>
            <h2 className="text-display-l font-display font-bold text-white mb-10 leading-[1.1]">
              Built for clients<br />
              who ship.
            </h2>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-12">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <ScrollReveal key={project.name} delay={100}>
                <GlassCard glowOnHover hover className="group min-h-[480px] p-0 flex flex-col lg:flex-row overflow-hidden transition-transform duration-500 ease-out hover:scale-[1.01]">
                  
                  {/* Info Section */}
                  <div className={`w-full lg:w-1/2 p-10 md:p-14 flex flex-col justify-center relative z-10 order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <p className="text-[12px] text-zinc-500 uppercase tracking-wide mb-4">
                      {project.tag}
                    </p>
                    <h3 className="text-[28px] font-display font-bold text-white mb-6">
                      {project.name}
                    </h3>
                    <p className="text-[18px] text-zinc-300 font-medium mb-6 leading-relaxed">
                      {project.result}
                    </p>
                    <p className="text-[15px] text-zinc-400 mb-8 leading-relaxed">
                      {project.challenge}
                    </p>
                    <ul className="space-y-3 mb-10">
                      {project.delivered.map((item, i) => (
                        <li key={i} className="text-[14px] text-zinc-400 flex items-start">
                          <span className="text-zinc-600 mr-3">&middot;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {project.url && (
                      <div className="mt-auto pt-4">
                        <a 
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[14px] font-medium text-white transition-all duration-250 lg:opacity-0 lg:-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 hover:text-accent-cyan"
                        >
                          View Project
                          <svg className="w-4 h-4 ml-1.5 transition-transform duration-250 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Gradient Mockup Section */}
                  <div className={`w-full lg:w-1/2 h-[300px] lg:h-auto overflow-hidden relative z-0 order-1 work-card ${isEven ? 'lg:order-2 border-b lg:border-b-0 lg:border-l border-white/5' : 'lg:order-1 border-b lg:border-b-0 lg:border-r border-white/5'}`}>
                    <div className="work-card-grid absolute inset-0 z-0" aria-hidden="true" />
                    <div 
                      className="work-card-mockup absolute inset-0 z-10"
                      style={{ background: project.gradient }}
                    />
                    {/* Add a subtle inner shadow/border for depth */}
                    <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none z-20" />
                  </div>

                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
