'use client';

import { motion } from "framer-motion";

import {
  ArrowRight,
  Code2,
  Database,
  Layout,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

import Button from "../Utilities/Button";
import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-16 text-left pt-24 pb-16">

      {/* LEFT CONTENT */}
      <div className="flex-1 max-w-2xl">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-md">

            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

            Full Stack .NET Developer
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white mb-6">

            I Build Scalable
            <br />

            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Web Applications
            </span>

            <br />

            & APIs
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-zinc-400 mb-10 max-w-xl leading-relaxed"
        >
          I specialize in building secure, scalable, and modern applications
          using C#, ASP.NET Core, SQL Server, React, and modern frontend
          technologies.
        </motion.p>

        {/* Buttons + Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col gap-8"
        >

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">

            <Link href="/component/Contact">
              <Button
                text="Start Project"
                className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-xl shadow-purple-500/20 hover:shadow-cyan-500/30 hover:scale-105 px-8 py-3.5 rounded-xl transition-all duration-300"
                icon={
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                }
              />
            </Link>

            <button className="px-8 py-3.5 rounded-xl border border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-500 transition-all duration-300">
              Download Resume
            </button>

          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">

            {/* GitHub */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-white transition-all duration-300 hover:scale-110"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-blue-500 hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>

            {/* Twitter/X */}
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-sky-400 hover:border-sky-400/50 transition-all duration-300 hover:scale-110"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-pink-500 hover:border-pink-500/50 transition-all duration-300 hover:scale-110"
            >
              <FaInstagram className="w-5 h-5" />
            </a>

          </div>
        </motion.div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex-1 relative w-full flex justify-center lg:justify-end mt-10 lg:mt-0"
      >

        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl rounded-full" />

        {/* Main Circle */}
        <div
          className="
            relative
            w-[320px]
            h-[320px]
            sm:w-[430px]
            sm:h-[430px]
            rounded-full
            border border-zinc-800
            bg-gradient-to-b from-zinc-900/60 to-black/20
            flex items-center justify-center
            shadow-[0_0_100px_-20px_rgba(120,119,198,0.4)]
            overflow-hidden
          "
        >

          {/* Animated Rings */}
          <div className="absolute inset-4 rounded-full border border-cyan-500/20 border-dashed animate-[spin_60s_linear_infinite]" />

          <div className="absolute inset-12 rounded-full border border-purple-500/20 animate-[spin_40s_reverse_linear_infinite]" />

          {/* Floating Card 1 */}
          <div
            className="absolute -left-3 top-1/4 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 p-4 rounded-2xl shadow-2xl animate-bounce z-20"
            style={{ animationDuration: '3s' }}
          >
            <Code2 className="w-6 h-6 text-cyan-400" />
          </div>

          {/* Floating Card 2 */}
          <div
            className="absolute -right-3 top-1/3 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 p-4 rounded-2xl shadow-2xl animate-bounce z-20"
            style={{
              animationDuration: '4s',
              animationDelay: '1s',
            }}
          >
            <Database className="w-6 h-6 text-purple-400" />
          </div>

          {/* Floating Card 3 */}
          <div
            className="absolute bottom-16 -left-2 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 p-4 rounded-2xl shadow-2xl animate-bounce z-20"
            style={{
              animationDuration: '3.5s',
              animationDelay: '0.5s',
            }}
          >
            <Layout className="w-6 h-6 text-pink-400" />
          </div>

          {/* Profile Image */}
          <div className="absolute inset-0 flex items-center justify-center z-10">

            {/* Neon Circle */}
            <div
              className="
                absolute
                w-[88%]
                h-[88%]
                rounded-full
                border-[4px]
                border-cyan-400/80
                shadow-[0_0_40px_rgba(34,211,238,0.6)]
              "
            />

            {/* Image Wrapper */}
            <div
              className="
                relative
                w-[82%]
                h-[82%]
                rounded-full
                overflow-hidden
                border border-white/10
                shadow-[0_20px_80px_rgba(0,0,0,0.7)]
                bg-black
              "
            >

              <img
                src="/1000606114.jpg"
                alt="Developer"
                className="
                  object-cover
                  object-top
                  scale-105
                "
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop";
                }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}