// app/Portfolio/components/ProjectCard.tsx
'use client';
import { useState } from 'react';
import TiltCard from './TiltCard'; // Import TiltCard if you keep it separate

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    desc: string;
    category: string;
    url: string;
    preview: string;
    tags: string[];
    accent: string;
  };
}

export default function ProjectCard({ project: p }: ProjectCardProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <TiltCard strength={10} className="group relative rounded-2xl overflow-hidden border border-zinc-800/80 bg-[#111116] cursor-pointer">
      <div className="relative h-52 overflow-hidden bg-zinc-900">
        {!hasError ? (
          <img
            src={p.preview}
            alt={p.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ background: `radial-gradient(ellipse at center, ${p.accent}18, #111116)` }}>
            <span className="text-zinc-500">Live Website</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="text-[11px] uppercase tracking-[2px] mb-2" style={{ color: p.accent }}>
          {p.category}
        </div>
        <h3 className="text-[18px] font-bold mb-2">{p.title}</h3>
        <p className="text-[12px] text-zinc-500 leading-relaxed mb-5">{p.desc}</p>

        <div className="flex items-center justify-between gap-3">
          <div className="flex gap-2 flex-wrap">
            {p.tags.map((tag) => (
              <span key={tag} className="text-[10px] tracking-widest px-2.5 py-1 rounded-md border border-zinc-700 text-zinc-400 bg-zinc-900/60">
                {tag}
              </span>
            ))}
          </div>
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="...">Visit</a>
        </div>
      </div>
    </TiltCard>
  );
}