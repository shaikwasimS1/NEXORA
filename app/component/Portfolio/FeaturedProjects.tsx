// app/Portfolio/components/FeaturedProjects.tsx
'use client';
import TiltCard from './TiltCard';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  desc: string;
  category: string;
  url: string;
  preview: string;
  tags: string[];
  accent: string;
}

interface FeaturedProjectsProps {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const handleImgError = (id: number) => {
    setImgErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="px-8 mb-32 bg-[#0a0a0a] ">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight">Featured Projects</h2>
        <p className="text-zinc-500 mt-2">Selected works that define our craft</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <TiltCard
            key={p.id}
            strength={10}
            className="group relative rounded-2xl overflow-hidden border border-zinc-800/80 bg-[#111116] cursor-pointer"
          >
            {/* Hover glow ring */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
              style={{ boxShadow: `inset 0 0 0 1px ${p.accent}50` }}
            />
            {/* Ambient glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at top left, ${p.accent}15, transparent 60%)` }}
            />

            {/* Preview Image */}
            <div className="relative h-52 overflow-hidden bg-zinc-900">
              {!imgErrors[p.id] ? (
                <img
                  src={p.preview}
                  alt={p.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  onError={() => handleImgError(p.id)}
                />
              ) : (
                <div
                  className="w-full h-full flex flex-col items-center justify-center gap-3"
                  style={{ background: `radial-gradient(ellipse at center, ${p.accent}18, #111116)` }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-zinc-700" style={{ background: `${p.accent}15` }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={p.accent} strokeWidth="1.8">
                      <rect x="2" y="3" width="20" height="14" rx="2"/>
                      <path d="M8 21h8M12 17v4"/>
                    </svg>
                  </div>
                  <span className="text-[11px] text-zinc-500 tracking-widest uppercase">Live Website</span>
                </div>
              )}

              {/* Browser chrome bar */}
              <div className="absolute top-0 left-0 right-0 flex items-center gap-1.5 px-3 py-2 bg-black/70 backdrop-blur-sm border-b border-white/5">
                <div className="flex-1 mx-2 bg-zinc-800/80 rounded px-2 py-0.5 text-[9px] text-zinc-500 truncate">
                  {p.url.replace('https://', '')}
                </div>
                <div className="flex items-center gap-1 bg-green-500/10 border border-green-500/30 rounded-full px-2 py-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[9px] text-green-400 font-semibold">LIVE</span>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 relative z-10" style={{ transform: 'translateZ(20px)' }}>
              <div className="text-[11px] uppercase tracking-[2px] mb-2 font-semibold" style={{ color: p.accent }}>
                {p.category}
              </div>
              <h3 className="text-[18px] font-bold text-white mb-2">{p.title}</h3>
              <p className="text-[12px] text-zinc-500 leading-relaxed mb-5">{p.desc}</p>

              <div className="flex items-center justify-between gap-3">
                <div className="flex gap-2 flex-wrap">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-[10px] tracking-widest px-2.5 py-1 rounded-md border border-zinc-700 text-zinc-400 bg-zinc-900/60">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center gap-1.5 text-[12px] border px-4 py-1.5 rounded-xl transition-all duration-300 text-zinc-400 hover:text-white"
                  style={{ borderColor: `${p.accent}40` }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = p.accent;
                    (e.currentTarget as HTMLElement).style.color = p.accent;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${p.accent}40`;
                    (e.currentTarget as HTMLElement).style.color = '';
                  }}
                >
                  Visit
                </a>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}