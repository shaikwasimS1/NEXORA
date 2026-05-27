'use client';

import { useState } from 'react';
import Hero from './Hero';
import FeaturedProjects from './FeaturedProjects';
import CreatorNetwork from './CreatorNetwork';
import TrendingNow from './TrendingNow';
import FilterPills from './Filterpill';
import EmployeeManagementCaseStudy from './EmployeeManagementCaseStudy';

const projects = [
  {
    id: 1,
    title: "EMPLOYEE MANAGEMENT",
    desc: "Full-stack enterprise application with role-based access, task tracking, and secure API architecture.",
    category: "Full Stack & API",
    url: "#",
    preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["ASP.NET CORE", "REACT", "SQL"],
    accent: "#c084fc",
  },
  {
    id: 2,
    title: "HOSPITAL SITE",
    desc: "Modern healthcare website with appointment booking.",
    category: "Healthcare & Web Design",
    url: "https://hospital-site-psi.vercel.app/",
    preview: "https://api.microlink.io/?url=https://hospital-site-psi.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    tags: ["REACT.JS", "UI/UX", "HEALTHCARE","TAILWIND"],
    accent: "#4ade80",
  },
  {
    id: 3,
    title: "ATG Hotel UI",
    desc: "Luxury hotel booking interface using Tailwind.",
    category: "Hospitality & Branding",
    url: "https://atg-hotel-ui-tailwind-53we.vercel.app/",
    preview: "https://api.microlink.io/?url=https://atg-hotel-ui-tailwind-53we.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    tags: ["TAILWIND", "HOTEL", "BRANDING,REACT.JS"],
    accent: "#f59e0b",
  },
  {
   id: 4,
    title: "APPLE",
    desc: "Stunning interactive 3D car configurator with realistic lighting, animations and customization options.",
    category: "3D & Interactive",
    url: "https://en.wikipedia.org/wiki/Website#Static_website", 
    preview: "https://api.microlink.io/?url=https://www.apple.com/&screenshot=true&meta=false&embed=screenshot.url",      
    views: "Live",
    tags: ["NEXT.JS", "3D", "INTERACTIVE"],
    accent: "#06b6d4",
  },
  {
    id: 5,
    title: "PORSCHE Brand",
    desc: "Minimal luxury fashion brand identity and e-commerce experience with refined aesthetics.",
    category: "Fashion & Branding",
    url: "https://en.wikipedia.org/wiki/Website#Static_website",
    preview: "https://api.microlink.io/?url=https://www.porsche.com/&screenshot=true&meta=false&embed=screenshot.url",
    tags: ["BRANDING", "FASHION", "E-COMMERCE"],
    accent: "#ec4899",
  },
  {
   id: 7,
  title: "LAMBORGHINI 3D Cars",
  desc: "Interactive 3D car configurator with realistic lighting, color customization, interior exploration and performance specs — inspired by premium automotive websites.",
  category: "3D Car Configurator",
  url: "https://your-3d-car-project.vercel.app/",           // Replace with your actual link
  preview: "https://api.microlink.io/?url=https://www.lamborghini.com/&screenshot=true&meta=false&embed=screenshot.url",         // Or use one of the images above
  views: "Live",
  tags: ["NEXT.JS", "3D", "CONFIGURATOR", "AUTOMOTIVE"],
  accent: "#06b6d4",
  },
];

const filters = ['ALL WORKS', 'VISUAL DESIGN', 'MOTION GRAPHICS'];


const popularPosts = [
  { label: "TUTORIAL", title: "The Physics of Light", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800", accent: "#f59e0b" },
  { label: "SHOWCASE", title: "Neo-Minimalism", image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800", accent: "#22d3ee" },
  { label: "EXPERIMENT", title: "Chroma Displacement", image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800", accent: "#ec4899" },
  { label: "WORK", title: "Speed & Velocity", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800", accent: "#22d3ee" },
];

/* ---------------- COMPONENT ---------------- */

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('ALL WORKS');

  return (
    <div className="relative min-h-screen bg-[#0d0d10] text-white overflow-hidden">

      <Hero />

      <FilterPills
        filters={filters}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <EmployeeManagementCaseStudy />

      <FeaturedProjects projects={projects} />

      <CreatorNetwork />

      <TrendingNow popularPosts={popularPosts} />

    </div>
  );
}
