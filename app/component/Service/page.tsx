'use client';

import ServiceCards from "./SercicesCard";
import ServicesHeader from "./ServicesHeader";
import StatsSection from "./StatsSections";
import Technologies from "./Technologies";

export default function Services() {

 const services = [
  {
    title: "UI/UX Design",
    emoji: "🎨",
    color: "from-purple-500 to-pink-500",
    desc: "Hyper-personalized, multimodal interfaces with AI-driven intent detection, tactile maximalism, kinetic typography, glassmorphism 2.0, and predictive experiences that feel alive.",
    focus: "2026 Focus: Agentic UX • Multimodal • Tactile Surfaces",
  },
  {
    title: "Web Development",
    emoji: "💻",
    color: "from-cyan-400 to-blue-500",
    desc: "AI-first development with agentic workflows, server-first architectures, WebGPU-powered 3D experiences, and lightning-fast performance.",
    focus: "2026 Focus: AI-Driven Code • WebGL 3D • Performance-First",
  },
  {
    title: "Branding",
    emoji: "✨",
    color: "from-amber-400 to-rose-500",
    desc: "Strategic identity systems with motion-first logos, warm organic aesthetics, and emotionally resonant storytelling.",
    focus: "2026 Focus: Felt Experiences • Kinetic Motion • Authentic Storytelling",
  },
  {
    title: "Digital Marketing",
    emoji: "📈",
    color: "from-emerald-500 to-teal-500",
    desc: "Agentic AI campaigns, Answer Engine Optimization, hyper-personalized content, and community-driven growth.",
    focus: "2026 Focus: AI Agents • AEO • Privacy-First • Creator-Led",
  },
];

 const technologies = [
  { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: ".NET", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
];

  const handleMouseMove = (e: any, card: any) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) * -0.08;
    const rotateY = (x - centerX) * 0.08;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = (card: any) => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <section className="mt-10 py-28 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#22d3ee_0%,transparent_50%)] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ServicesHeader />
        <StatsSection />
        <ServiceCards services={services} handleMouseMove={handleMouseMove} handleMouseLeave={handleMouseLeave} />
        <Technologies technologies={technologies} />
      </div>
    </section>
  );
}

