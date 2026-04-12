'use client';

export default function ServiceCards({ services, handleMouseMove, handleMouseLeave }: any) {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32 place-items-center">
      {services.map((service: any, index: number) => (
        <div
          key={index}
          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
          className={`group relative bg-zinc-900/90 backdrop-blur-xl border border-zinc-700/80 rounded-3xl p-9 lg:p-10 transition-all duration-700 hover:z-20 hover:shadow-2xl hover:shadow-cyan-500/30 w-full max-w-[520px] overflow-hidden
            ${index === 0 ? 'lg:col-span-5 lg:-rotate-3' : ''}
            ${index === 1 ? 'lg:col-span-4 lg:translate-y-8 lg:rotate-2' : ''}
            ${index === 2 ? 'lg:col-span-5 lg:-translate-y-6 lg:-rotate-2' : ''}
            ${index === 3 ? 'lg:col-span-4 lg:translate-y-10' : ''}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

          <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center text-5xl mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500`}
            style={{ transform: "translateZ(40px)" }}>
            {service.emoji}
          </div>

          <h3 className="text-3xl font-semibold mb-5 tracking-tight text-center lg:text-left" style={{ transform: "translateZ(30px)" }}>
            {service.title}
          </h3>

          <p className="text-zinc-400 leading-relaxed mb-8 text-[15.2px] text-center lg:text-left" style={{ transform: "translateZ(20px)" }}>
            {service.desc}
          </p>

          <div className="uppercase text-xs tracking-widest text-cyan-400 border-l-2 border-cyan-400 pl-4 mx-auto lg:mx-0 max-w-fit" style={{ transform: "translateZ(25px)" }}>
            {service.focus}
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40" />
        </div>
      ))}
    </div>
  );
}