"use client";

import React, { useRef } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glowOnHover?: boolean;
}

export default function GlassCard({ children, className = '', hover = false, glowOnHover = false }: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!glowOnHover || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`glass relative overflow-hidden transition-transform duration-250 ease-out ${hover ? 'hover:scale-[1.02]' : ''} ${className}`}
    >
      {glowOnHover && (
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
          style={{
            background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 170, 255, 0.07), transparent 40%)'
          }}
        />
      )}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
