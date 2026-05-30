import { useRef } from "react";
import { Badge } from "../ui/Badge";
import ShinyText from "../react-bits/ShinyText";
import VariableProximity from "../react-bits/VariableProximity";
import { HeroButtons } from "../ui/HeroButtons";
import { AvailabilityBadge } from "../ui/AvailabilityBadge";
import { HeroVisual } from "../ui/hero-visuals/HeroVisual"; // IMPORT NEW VISUAL SYSTEM
import { motion } from "framer-motion";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 pb-10 px-6 md:px-16 lg:px-24 z-10 overflow-hidden">
      
      {/* MAIN GRID LAYOUT */}
      <div className="w-full max-w-[1400px] flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-0 mt-8 md:mt-0">
        
        {/* ==========================================
            LEFT SIDE: CONTENT (45% - 50%)
        ========================================== */}
        <div 
          ref={containerRef}
          className="relative w-full md:w-[50%] flex flex-col gap-4 md:gap-5 z-30"
        >
          <Badge />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col select-none -mt-1 md:-mt-2"
          >
            <h1 className="font-['Satoshi-Extrabold',sans-serif] font-black uppercase text-foreground leading-[0.85] tracking-[-0.04em] text-[clamp(50px,7.5vw,120px)]">
              <ShinyText text="AKSHAT" speed={4} className="block w-fit" />
              <ShinyText text="SHARMA" speed={4} delay={1} className="block w-fit" />
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[500px] cursor-default"
          >
            <VariableProximity
              label="Building scalable digital products for modern businesses."
              className="text-[18px] md:text-[22px] lg:text-[28px] leading-[1.3] text-muted-foreground"
              fromFontVariationSettings="'wght' 400"
              toFontVariationSettings="'wght' 900"
              containerRef={containerRef}
              radius={80}
              falloff="gaussian"
            />
          </motion.div>

          <HeroButtons />
          <AvailabilityBadge />
        </div>

        {/* ==========================================
            RIGHT SIDE: VISUAL ENVIRONMENT (50%)
        ========================================== */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full md:w-[50%] h-[50vh] md:h-[80vh] flex items-center justify-center z-20"
        >
          <HeroVisual />
        </motion.div>

      </div>
    </section>
  );
};