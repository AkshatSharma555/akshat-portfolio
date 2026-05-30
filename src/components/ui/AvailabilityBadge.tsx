import { motion } from "framer-motion";

export const AvailabilityBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-3 md:gap-4 mt-2 md:mt-4 group cursor-pointer w-fit"
    >
      {/* Glowing Dot System */}
      <div className="relative flex items-center justify-center">
        {/* Core Dot (Scales up slightly on hover) */}
        <div className="w-2 h-2 rounded-full bg-blue-500 z-10 transition-transform duration-300 group-hover:scale-125" />
        {/* Ambient Pulse Glow (Expands and brightens on hover) */}
        <div className="absolute w-4 h-4 rounded-full bg-blue-500/50 blur-[3px] z-0 animate-pulse transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:bg-blue-500/70 group-hover:blur-[6px]" />
      </div>

      {/* 2-Line Text Content */}
      <div className="flex flex-col">
        <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-all duration-300 group-hover:text-blue-400">
          Available For
        </span>
        <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-all duration-300 group-hover:text-foreground group-hover:shadow-blue-500/50 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
          New Opportunities
        </span>
      </div>
    </motion.div>
  );
};