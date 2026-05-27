'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Server, Database, Shield } from 'lucide-react';

export default function EmployeeManagementCaseStudy() {
  const features = [
    "Secure login system with JWT",
    "Role-based admin dashboard",
    "Employee CRUD management",
    "Task assignment & tracking",
    "Advanced search & filtering",
    "Responsive React UI"
  ];

  const challenges = [
    "Built scalable backend APIs to handle concurrent requests",
    "Managed authentication and authorization securely",
    "Created reusable and accessible dashboard components",
    "Designed optimized relational database schemas"
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_top_right,#c084fc_0%,transparent_50%)] opacity-[0.08]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_bottom_left,#67e8f9_0%,transparent_50%)] opacity-[0.05]" />

        <div className="grid lg:grid-cols-2 gap-0 relative z-10">
          
          {/* Content Section */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-widest uppercase mb-6 w-max">
              Featured Case Study
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Enterprise Employee <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Management System</span>
            </h2>

            <p className="text-zinc-400 text-lg mb-8">
              A comprehensive full-stack application built to manage organizational workflows, 
              handle secure authentication, and provide role-based access for admins and employees.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-white font-semibold flex items-center gap-2 mb-4">
                  <Server className="w-4 h-4 text-cyan-400" /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['ASP.NET Core', 'SQL Server', 'Entity Framework', 'JWT Auth', 'React', 'Tailwind CSS'].map(tech => (
                    <span key={tech} className="text-xs bg-zinc-800 border border-zinc-700 text-zinc-300 px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-semibold flex items-center gap-2 mb-4">
                  <Shield className="w-4 h-4 text-purple-400" /> Features
                </h3>
                <ul className="space-y-2">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold flex items-center gap-2 mb-4">
                <Database className="w-4 h-4 text-amber-400" /> Challenges Solved
              </h3>
              <ul className="space-y-2">
                {challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                    <ArrowRight className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" /> {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image/Mockup Section */}
          <div className="bg-zinc-950 p-8 flex items-center justify-center border-l border-zinc-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            {/* Main Mockup Placeholder */}
            <div className="w-full max-w-lg aspect-video bg-[#0f0f13] border border-zinc-800 rounded-xl shadow-2xl relative z-10 flex flex-col overflow-hidden">
              {/* Browser Header */}
              <div className="h-8 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto bg-zinc-800/80 h-4 w-40 rounded flex items-center justify-center px-2">
                  <div className="w-24 h-1.5 bg-zinc-700 rounded-full" />
                </div>
              </div>
              
              {/* Dashboard Wireframe */}
              <div className="flex-1 p-4 flex gap-4">
                {/* Sidebar */}
                <div className="w-1/4 h-full bg-zinc-900/50 rounded-lg border border-zinc-800/50 p-3 flex flex-col gap-2">
                  <div className="h-4 w-3/4 bg-zinc-700/50 rounded mb-4" />
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-2 w-full bg-zinc-800 rounded" />
                  ))}
                </div>
                {/* Main Content */}
                <div className="flex-1 flex flex-col gap-4">
                  {/* Top Stats */}
                  <div className="flex gap-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-12 flex-1 bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-lg border border-zinc-800/50 p-2 flex flex-col gap-1.5">
                        <div className="h-2 w-8 bg-zinc-800 rounded" />
                        <div className="h-4 w-12 bg-zinc-700 rounded" />
                      </div>
                    ))}
                  </div>
                  {/* Chart/Table Area */}
                  <div className="flex-1 bg-zinc-900/50 rounded-lg border border-zinc-800/50 p-3">
                    <div className="h-3 w-1/4 bg-zinc-700/50 rounded mb-3" />
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-2 w-full bg-zinc-800 rounded mb-2" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 right-8 bg-zinc-900 border border-zinc-700 text-xs px-3 py-2 rounded-lg shadow-xl shadow-black/50 z-20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> API Active
            </div>
            <div className="absolute bottom-1/4 left-8 bg-zinc-900 border border-zinc-700 text-xs px-3 py-2 rounded-lg shadow-xl shadow-black/50 z-20 flex flex-col gap-1">
              <span className="text-zinc-500 text-[10px]">AUTH TOKEN</span>
              <span className="font-mono text-purple-400">eyJhbGciOiJIUzI1Ni...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
