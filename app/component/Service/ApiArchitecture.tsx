'use client';

import { motion } from 'framer-motion';
import { Database, Server, Layout, ArrowRight } from 'lucide-react';

export default function ApiArchitecture() {
  const backendSkills = [
    "Secure REST APIs",
    "Authentication & Authorization",
    "Role-based access control",
    "SQL database design",
    "Entity Framework Core",
    "Performance optimization",
    "Clean architecture",
    "API integration"
  ];

  return (
    <div className="mt-32 mb-20 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          API Architecture & Workflow
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Building secure, scalable, and high-performance systems from the database to the client.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Workflow Diagram */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(at_center,#06b6d4_0%,transparent_60%)] opacity-[0.03]" />
          
          <div className="flex flex-col space-y-8 relative z-10">
            {/* Frontend */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-6 bg-zinc-950 border border-zinc-800 p-6 rounded-2xl"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30">
                <Layout className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Frontend Client</h3>
                <p className="text-zinc-400 text-sm">React, Next.js, UI Components</p>
              </div>
            </motion.div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-zinc-600 rotate-90" />
            </div>

            {/* API */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-6 bg-zinc-950 border border-purple-500/30 p-6 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.1)]"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30">
                <Server className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">ASP.NET Core API</h3>
                <p className="text-zinc-400 text-sm">Controllers, Services, JWT Auth</p>
              </div>
            </motion.div>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-zinc-600 rotate-90" />
            </div>

            {/* Database */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-6 bg-zinc-950 border border-zinc-800 p-6 rounded-2xl"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center border border-emerald-500/30">
                <Database className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">SQL Server Database</h3>
                <p className="text-zinc-400 text-sm">Entity Framework, Tables, Stored Procs</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Expertise List */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Backend Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {backendSkills.map((skill, index) => (
              <div key={index} className="flex items-start gap-3 bg-zinc-900/30 border border-zinc-800/50 p-4 rounded-xl">
                <div className="mt-1 w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
                <span className="text-zinc-300 text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
