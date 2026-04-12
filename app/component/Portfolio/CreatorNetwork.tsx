
import Button from "@/app/Utilities/Button";
import TiltCard from "./TiltCard";




const tableRows = [
  { name: "Eco.Sustainable", role: "Lead Architect", team: "Bio-Design Lab", spec: "SUSTAINABLE SYSTEMS", status: "ACTIVE", dot: "#22d3ee" },
  { name: "Motion.Flux", role: "Creative Director", team: "Kinetic Studio", spec: "PHYSICS SIMULATIONS", status: "ACTIVE", dot: "#22d3ee" },
  { name: "Digital.Ethereal", role: "3D Sculptor", team: "Avatar Foundry", spec: "CHAR SCULPTING", status: "ON ASSIGNMENT", dot: "#f59e0b" },
  { name: "Liquidia Design", role: "Studio", team: "2", spec: "INTERACTIVE + 3D", status: "ACTIVE", dot: "#22d3ee" },
];

export default function CreatorNetwork() {
  return (
    <div className="px-8 mb-32">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Creator Network</h2>
          <p className="text-[11px] tracking-[2px] text-zinc-600 uppercase mt-1">
            The collective of visionaries behind our studio.
          </p>
        </div>
        <Button 
          text="View All Members"
          className="text-[11px] tracking-[2px] text-zinc-500 uppercase hover:text-cyan-400 transition-colors"
        />
      </div>

      <TiltCard
        strength={3}
        className="relative rounded-2xl border border-zinc-800/60 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(6,182,212,0.04) 0%, #0f0f14 40%, rgba(124,58,237,0.04) 100%)',
        }}
      >
        <div className="overflow-x-auto relative z-10">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-zinc-800/60">
                {['NAME', 'ROLE', 'TEAM', 'SPECIALIZATION', 'STATUS'].map((h) => (
                  <th key={h} className="px-7 py-4 text-left text-[10px] tracking-[2px] text-zinc-600 font-normal">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr key={i} className="group border-b border-zinc-800/40 last:border-b-0 hover:bg-white/[0.02] transition-colors duration-200">
                  <td className="px-7 py-5 font-semibold text-[14px] text-white">{row.name}</td>
                  <td className="px-7 py-5 text-[13px] text-zinc-400">{row.role}</td>
                  <td className="px-7 py-5 text-[13px] text-zinc-400">{row.team}</td>
                  <td className="px-7 py-5">
                    <span className="text-[10px] tracking-widest px-3 py-1.5 rounded-md border border-zinc-700/80 text-zinc-400 bg-zinc-900/60">
                      {row.spec}
                    </span>
                  </td>
                  <td className="px-7 py-5">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: row.dot }} />
                      <span className="text-[11px] text-zinc-500">{row.status}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </TiltCard>
    </div>
  );
}