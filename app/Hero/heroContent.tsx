'use client';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../Utilities/Button";

export default function HeroContent() {
  return (
    <div className="relative z-20 max-w-4xl px-4 sm:px-6">

      <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 sm:mb-6 leading-tight bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
          We Build <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Modern</span><br />
          Digital Experiences
        </h1>
      </motion.div>

      <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-base sm:text-lg md:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-md sm:max-w-lg mx-auto">
        Creative design solutions that drive results for forward-thinking businesses
      </motion.p>

      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>
        <Button
          text="Get Started"
          className="group flex items-center gap-2 sm:gap-3 ml-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 border border-white/10 border border-white/20 hover:border-white/40 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg transition-all duration-500"
          icon={<ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />}
        />
      </motion.div>
    </div>
  );
}