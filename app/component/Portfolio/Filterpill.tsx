// app/Portfolio/components/FilterPills.tsx
interface FilterPillsProps {
    filters: string[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export default function FilterPills({ activeFilter, setActiveFilter }: FilterPillsProps) {
  const filters = ['ALL WORKS', 'VISUAL DESIGN', 'MOTION GRAPHICS', 'DIGITAL ART', 'ARCHITECTURE'];

  return (
    <div className="flex items-center justify-center gap-2 pb-10 bg-[#0a0a0a] px-6 flex-wrap ">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setActiveFilter(f)}
          className={`px-5 py-2 rounded-full text-[11px] tracking-widest transition-all duration-300 border ${
            activeFilter === f
              ? 'bg-cyan-400 text-black border-cyan-400 font-bold'
              : 'text-zinc-400 border-zinc-700/60 bg-transparent hover:border-zinc-500 hover:text-white'
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}


