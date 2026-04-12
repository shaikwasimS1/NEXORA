'use client';
import TiltCard from "./TiltCard";

export default function TrendingNow({ popularPosts }: any) {
  return (
    <div className="px-8 mb-24">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-8 h-px bg-zinc-600" />
        <h2 className="text-2xl font-bold tracking-tight">Trending Now</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {popularPosts.map((post: any, i: number) => (
          <TiltCard
            key={i}
            strength={8}
            className="group relative overflow-hidden rounded-2xl aspect-video bg-zinc-900 cursor-pointer"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(135deg, ${post.accent}22 0%, transparent 60%)`,
              }}
            />

            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ boxShadow: `inset 0 0 0 1px ${post.accent}40` }}
            />

            <div className="absolute bottom-0 p-4" style={{ transform: 'translateZ(30px)' }}>
              <div
                className="text-[10px] tracking-[2px] mb-1 font-semibold"
                style={{ color: post.accent }}
              >
                {post.label}
              </div>

              <p className="text-[13px] font-semibold text-white leading-snug">
                {post.title}
              </p>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}