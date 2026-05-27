'use client';

export default function ServicesHeader() {
  return (
    <>
      <div className="flex items-center justify-center gap-3 mb-5">
        <div className="w-10 h-px bg-zinc-700" />
        <span className="text-[11px] tracking-[3px] text-zinc-500 uppercase">What I Specialize In</span>
        <div className="w-10 h-px bg-zinc-700" />
      </div>

      <div className="text-center mb-20">
        <h2 className="text-6xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r from-white via-cyan-300 to-white bg-clip-text text-transparent">
          Expertise
        </h2>
        <p className="mt-5 text-xl text-zinc-400 max-w-3xl mx-auto">
          Building scalable, high-performance applications from database design to seamless user interfaces.
        </p>
      </div>
    </>
  );
}