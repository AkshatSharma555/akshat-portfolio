import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export const HeroButtons = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-wrap items-center gap-4 mt-4"
    >
      
      {/* 1. PRIMARY BUTTON: View Projects */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative group overflow-hidden rounded-2xl bg-blue-600 text-white font-semibold text-[15px] px-8 py-3.5 flex items-center gap-2 shadow-[0_4px_20px_rgba(37,99,235,0.3)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(37,99,235,0.5)]"
      >
        {/* Animated Shine Sweep Layer */}
        <span className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1s_forwards] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
        
        <span className="relative z-10">View Projects</span>
        
        {/* Animated Arrow */}
        <div className="relative z-10 overflow-hidden w-5 h-5 flex items-center justify-center">
          <ArrowUpRight 
            size={18} 
            className="absolute transition-transform duration-300 group-hover:translate-x-full group-hover:-translate-y-full" 
          />
          <ArrowUpRight 
            size={18} 
            className="absolute -translate-x-full translate-y-full transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" 
          />
        </div>
      </motion.button>

      {/* 2. SECONDARY BUTTON: Contact */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative group overflow-hidden rounded-2xl bg-transparent border border-black/10 dark:border-white/10 text-foreground font-medium text-[15px] px-8 py-3.5 flex items-center gap-2 transition-colors duration-300 hover:border-black/30 dark:hover:border-white/30 backdrop-blur-sm"
      >
        {/* Expanding Background Glow on Hover */}
        <span className="absolute inset-0 bg-black/5 dark:bg-white/5 translate-y-full rounded-2xl group-hover:translate-y-0 transition-transform duration-400 ease-out pointer-events-none" />
        
        <span className="relative z-10">Contact</span>
        
        {/* Slide Arrow */}
        <ArrowRight 
          size={18} 
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
        />
      </motion.button>

    </motion.div>
  );
};