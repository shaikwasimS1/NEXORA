'use client';
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 sm:gap-3">
      <span className="text-xs tracking-widest text-white/40 uppercase">
        Scroll
      </span>
      <div className="w-px h-8 sm:h-10 bg-gradient-to-b from-purple-400/60 to-transparent" />
    </motion.div>
  );
}