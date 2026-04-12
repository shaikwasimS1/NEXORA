'use client';

export default function StatsSection() {
  return (
    <div className="text-white px-10 pt-10 pb-0 mb-28">
      <div className="grid grid-cols-1 sm:grid-cols-3 border border-zinc-800/80 rounded-3xl overflow-hidden bg-zinc-950 shadow-xl">
        {[
          { num: "50+", label: "Projects Delivered", color: "cyan" },
          { num: "7", label: "Core Technologies", color: "violet" },
          { num: "4", label: "Service Pillars", color: "emerald" },
        ].map((s, i) => (
          <div
            key={i}
            className="group relative bg-[#0f0f11] px-8 py-11 text-center border-r border-zinc-800/60 last:border-r-0 hover:bg-zinc-900 transition-all duration-300"
          >
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-1 w-10 bg-${s.color}-500/70 rounded-b-full group-hover:w-16 transition-all duration-500`} />

            <div className={`text-5xl font-bold tracking-tighter text-white group-hover:text-${s.color}-400 transition-colors duration-300`}>
              {s.num}
            </div>

            <div className="mt-3 text-sm uppercase tracking-widest text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">
              {s.label}
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-2/3 bg-gradient-to-r from-transparent via-zinc-400 to-transparent transition-all duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
}