"use client";

import React, { useRef, useEffect } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'ghost';
  href?: string;
  onClick?: () => void;
}

export default function MagneticButton({ children, className = '', variant = 'primary', href, onClick }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    let x = 0;
    let y = 0;
    let hover = false;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      // Calculate cursor position relative to the center of the button
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      if (hover) {
        x = (e.clientX - centerX) * 0.35;
        y = (e.clientY - centerY) * 0.35;
      }
    };

    const handleMouseEnter = () => {
      hover = true;
    };

    const handleMouseLeave = () => {
      hover = false;
      x = 0;
      y = 0;
    };

    const animate = () => {
      if (button) {
        button.style.transform = `translate(${x}px, ${y}px)`;
        if (!hover) {
          button.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
        } else {
          button.style.transition = 'none';
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
    
    animate();

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 relative text-center";
  
  const variants = {
    primary: "bg-accent-grad text-white hover:scale-[1.03] shadow-accent-glow hover:shadow-[0_0_80px_rgba(0,122,255,0.35),0_0_140px_rgba(0,240,255,0.1)]",
    ghost: "border border-white/10 text-white hover:border-white/30 hover:scale-[1.03]"
  };

  const Component = href ? 'a' : 'button';
  const props: any = {
    ref: buttonRef,
    className: `${baseStyles} ${variants[variant]} ${className}`,
    onClick,
  };

  if (href) {
    props.href = href;
  }

  return (
    <Component {...props}>
      <span className="relative z-10 pointer-events-none">{children}</span>
    </Component>
  );
}
