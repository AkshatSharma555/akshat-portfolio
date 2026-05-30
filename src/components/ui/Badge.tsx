import { motion } from "framer-motion";
import TextType from "../react-bits/TextType";

export const Badge = () => {
  const badgeTexts = [
    "SOFTWARE ENGINEER",
    "FULL STACK DEVELOPER",
    "JAVA BACKEND DEVELOPER",
    "MERN STACK DEVELOPER",
    "DIGITAL PRODUCT BUILDER",
    "PROBLEM SOLVER",
    "BUILDING SCALABLE SYSTEMS"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-fit inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md"
    >
      {/* Glowing Dot System */}
      <div className="relative flex items-center justify-center">
        {/* Core solid dot */}
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 z-10" />
        {/* Enhanced glowing bloom effect */}
        <div className="absolute w-3.5 h-3.5 rounded-full bg-blue-500 blur-[3px] opacity-70 animate-pulse z-0" />
      </div>

      {/* Typewriter Text System */}
      <TextType
        as="span"
        text={badgeTexts}
        typingSpeed={60}
        deletingSpeed={30}
        pauseDuration={2500}
        showCursor={true}
        cursorCharacter="|"
        className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground opacity-80 mt-[1px]"
        cursorClassName="text-blue-500" // Cursor ko blue glow ke sath match karne ke liye
      />
    </motion.div>
  );
};