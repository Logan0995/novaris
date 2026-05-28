import React from 'react';

interface GlowNodeProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function GlowNode({ className = '', style }: GlowNodeProps) {
  return (
    <div
      className={`absolute w-[700px] h-[700px] rounded-full pointer-events-none z-0 blur-[100px] ${className}`}
      style={{
        background: 'radial-gradient(circle, rgba(0, 122, 255, 0.07) 0%, transparent 70%)',
        ...style
      }}
    />
  );
}
