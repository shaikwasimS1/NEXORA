'use client';
import { useState, useEffect } from "react";

export default function Technologies({ technologies }: any) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % (technologies.length - 3));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <h3 className="text-center text-4xl font-bold tracking-tight mb-12 bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
        Technologies We Master
      </h3>

      <div className="relative overflow-hidden py-8">
        <div
          className="flex gap-8 transition-transform duration-1000 ease-out"
          style={{ transform: `translateX(-${current * 210}px)` }}
        >
          {[...technologies, ...technologies].map((tech: any, i: number) => (
            <div
              key={i}
              className="min-w-[190px] h-[210px] bg-zinc-900/90 border border-zinc-700 hover:border-cyan-400 rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-all hover:scale-105 group shadow-xl relative overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-2xl mb-6 transition-transform group-hover:rotate-6"
                style={{ transform: "translateZ(50px)" }}>
                <img src={tech.img} alt={tech.name} className="w-16 h-16 object-contain drop-shadow-lg" />
              </div>
              <p className="font-medium text-lg text-white" style={{ transform: "translateZ(30px)" }}>
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-10">
        {Array.from({ length: technologies.length - 3 }).map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full cursor-pointer transition-all ${current === i ? 'bg-cyan-400 w-9' : 'bg-zinc-600 w-2.5'}`}
          />
        ))}
      </div>
    </div>
  );
}