
'use client';
import { useState, useRef, useCallback, ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  style?: React.CSSProperties;
}

function useTilt(strength = 12) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const { left, top, width, height } = el.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * strength;
    const y = ((e.clientY - top) / height - 0.5) * -strength;

    el.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) scale(1.03)`;
  }, [strength]);

  const onLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
  }, []);

  return { ref, onMove, onLeave };
}

export default function TiltCard({ 
  children, 
  className = '', 
  strength = 10, 
  style 
}: TiltCardProps) {
  const { ref, onMove, onLeave } = useTilt(strength);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ 
        transformStyle: 'preserve-3d', 
        transition: 'transform 0.35s ease', 
        ...style 
      }}
    >
      {children}
    </div>
  );
}