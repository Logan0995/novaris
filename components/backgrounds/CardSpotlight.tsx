'use client';
import { useRef } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function CardSpotlight({ children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mouse-x', `${x}px`);
    el.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseEnter = () => {
    ref.current?.style.setProperty('--spotlight-opacity', '1');
  };

  const handleMouseLeave = () => {
    ref.current?.style.setProperty('--spotlight-opacity', '0');
  };

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
        '--spotlight-opacity': '0',
      } as React.CSSProperties}
    >
      {/* Spotlight layer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(0, 122, 255, 0.06), transparent 70%)`,
          opacity: 'var(--spotlight-opacity)',
        }}
        aria-hidden="true"
      />
      {/* Content sits above spotlight */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
