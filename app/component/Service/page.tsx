'use client';

import ServiceCards from "./SercicesCard";
import ServicesHeader from "./ServicesHeader";
import StatsSection from "./StatsSections";
import Technologies from "./Technologies";
import ApiArchitecture from "./ApiArchitecture";

export default function Services() {

 const services = [
  {
    title: "Backend Development",
    emoji: "⚙️",
    color: "from-purple-500 to-pink-500",
    desc: "Scalable architecture using ASP.NET Core, RESTful APIs, JWT Authentication, Entity Framework, and optimized SQL Server database design.",
    focus: "Tech: C# • ASP.NET Core • SQL Server • Entity Framework",
  },
  {
    title: "Frontend Development",
    emoji: "💻",
    color: "from-cyan-400 to-blue-500",
    desc: "Responsive and dynamic user interfaces built with React, Next.js, and Tailwind CSS, focused on performance and seamless user experiences.",
    focus: "Tech: React • Next.js • Tailwind CSS • Blazor",
  },
  {
    title: "Full Stack Systems",
    emoji: "🚀",
    color: "from-amber-400 to-rose-500",
    desc: "End-to-end enterprise applications including Employee Management, CRM Systems, and Admin Dashboards with Role-Based Access Control.",
    focus: "Expertise: System Design • Dashboards • RBAC • CRM",
  },
  {
    title: "API Architecture",
    emoji: "🔗",
    color: "from-emerald-500 to-teal-500",
    desc: "Secure, documented, and performance-optimized APIs with clean architecture principles, seamless frontend integration, and robust data handling.",
    focus: "Expertise: REST • Clean Architecture • Swagger • Security",
  },
];

 const technologies = [
  { name: "C#", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: ".NET Core", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
  { name: "SQL Server", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
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
        <ApiArchitecture />
        <Technologies technologies={technologies} />
      </div>
    </section>
  );
}

