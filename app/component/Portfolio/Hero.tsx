import Button from "@/app/Utilities/Button";

export default function Hero() {
  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      
      {/* Premium Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-950" />
      
      {/* Subtle Radial Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top,#22d3ee10_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_bottom_right,#a78bfa15_0%,transparent_60%)]" />
      
      {/* Very subtle grid / texture (optional luxury feel) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
          <span className="text-[11px] tracking-[3px] text-zinc-500 uppercase font-medium">
            Selected work
          </span>
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
        </div>

        <h1 className="text-4xl md:text-7xl md:text-[8rem] font-black tracking-[-4px] leading-none mb-6">
          <span 
            style={{
              background: 'linear-gradient(90deg, #22d3ee 0%, #a78bfa 45%, #67e8f9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            className="bg-clip-text"
          >
            W. CREATORS
          </span>
        </h1>

        <p className="text-[13px] md:text-base tracking-[4px] text-zinc-400 uppercase mb-12 font-light">
          Architects of the digital astral &amp; immersive narrative
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button 
            text="Explore Works" 
            className="bg-gradient-to-r from-cyan-400 to-violet-400 hover:from-cyan-300 hover:to-violet-300 
                       text-black font-bold px-10 py-4 rounded-2xl text-sm tracking-wider 
                       transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-cyan-500/20"
          />
          
          <Button 
            text="Our Process" 
            className="text-white border border-zinc-700 hover:border-zinc-400 
                       px-10 py-4 rounded-2xl text-sm tracking-wider transition-all 
                       duration-300 hover:bg-white/5 hover:scale-105 active:scale-95"
          />
        </div>
      </div>

      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </div>
  );
}