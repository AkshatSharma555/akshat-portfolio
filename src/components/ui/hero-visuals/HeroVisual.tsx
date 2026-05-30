import { motion } from "framer-motion";
import { HeroPortrait } from "./HeroPortrait";

/* ==========================================
   SVG FILTER
========================================== */
const SVGFilters = () => (
  <svg className="hidden">
    <defs>
      <filter id="neon-bloom" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur1" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur2" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur3" />
        <feMerge>
          <feMergeNode in="blur3" />
          <feMergeNode in="blur2" />
          <feMergeNode in="blur1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

/* ==========================================
   Z-10: RINGS
========================================== */
const GlowingRing = ({ size, duration, thickness = 2, reverse = false, color = "59, 130, 246" }: any) => (
  <div className="absolute flex items-center justify-center" style={{ width: size, height: size }}>
    <div className="absolute inset-0 rounded-full border border-blue-500/10 dark:border-white/5" />
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 rounded-full"
      style={{
        background: `conic-gradient(from 0deg, transparent 60%, rgba(${color}, 0.2) 80%, rgba(${color}, 0.8) 95%, #ffffff 100%)`,
        maskImage: `radial-gradient(closest-side, transparent calc(100% - ${thickness}px), black calc(100% - ${thickness - 1}px))`,
        WebkitMaskImage: `radial-gradient(closest-side, transparent calc(100% - ${thickness}px), black calc(100% - ${thickness - 1}px))`,
      }}
    >
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full bg-white"
        style={{
          width: thickness * 3 + 'px', height: thickness * 4 + 'px',
          filter: "url(#neon-bloom)", marginTop: `-${thickness}px`
        }}
      />
    </motion.div>
  </div>
);

const RingSystem = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10" style={{ perspective: "1500px" }}>
    <motion.div
      // YAHAN CHANGE KIYA HAI: rotateX ko 15 aur rotateY ko -15 kiya hai.
      // Isse rings vertical (khadi) ho jayengi aur thoda sa premium 3D tilt aayega.
      initial={{ rotateX: 15, rotateY: -15, rotateZ: 0 }} 
      animate={{ rotateZ: 360 }} 
      transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      className="relative flex items-center justify-center -translate-x-5 md:-translate-x-12 lg:-translate-x-16"
      style={{ transformStyle: "preserve-3d" }}
    >
      <GlowingRing size="650px" duration={30} thickness={1} />
      <GlowingRing size="460px" duration={22} thickness={2} reverse={true} color="147, 197, 253" />
      <GlowingRing size="300px" duration={15} thickness={3} />
    </motion.div>
  </div>
);

/* ==========================================
   Z-20: GLASS CARD
========================================== */
const GlassCodeCard = () => (
  <div className="absolute top-[25%] right-0 md:right-[5%] lg:right-[10%] z-20" style={{ perspective: "1000px" }}>
    <motion.div
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="flex items-center justify-center rounded-2xl overflow-hidden relative group backdrop-blur-xl"
      style={{ 
        width: "120px", height: "140px", 
        background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)", 
        border: "1px solid rgba(255, 255, 255, 0.15)", borderTop: "1px solid rgba(255, 255, 255, 0.3)", borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 15px 35px rgba(0,0,0,0.2), inset 0 0 20px rgba(255,255,255,0.05)",
        transform: "rotateY(-10deg) rotateX(10deg) rotateZ(-2deg)" 
      }}
    >
      <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-50" />
      <span className="relative text-4xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-600 dark:from-blue-200 dark:to-blue-500" style={{ filter: "drop-shadow(0 0 10px rgba(59,130,246,0.5))" }}>
        {"</>"}
      </span>
    </motion.div>
  </div>
);

/* ==========================================
   SPHERES COMPONENT
========================================== */
const FloatingSphere = ({ size, delay, positionCSS, className }: any) => (
  <motion.div
    animate={{ y: [-15, 15, -15] }}
    transition={{ duration: 7, delay, repeat: Infinity, ease: "easeInOut" }}
    className={`absolute rounded-full backdrop-blur-md ${className}`}
    style={{ 
      width: size, height: size, ...positionCSS,
      background: "radial-gradient(circle at 30% 30%, rgba(191,219,254,0.9) 0%, rgba(59,130,246,0.6) 40%, rgba(30,58,138,0.2) 100%)",
      boxShadow: "0 20px 40px rgba(0,0,0,0.2), inset 0 0 20px rgba(255,255,255,0.3), 0 0 25px rgba(37,99,235,0.3)"
    }}
  />
);

/* ==========================================
   MAIN COMPOSER COMPONENT
========================================== */
export const HeroVisual = () => {
  return (
    <div className="relative w-full h-full min-h-[60vh] md:min-h-[85vh] flex items-end justify-center pointer-events-none">
      <SVGFilters />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[65%] aspect-square bg-blue-600/25 dark:bg-blue-500/20 rounded-full blur-[100px] z-0" />

      <RingSystem />
      <GlassCodeCard />
      
      <FloatingSphere size="50px" delay={0} positionCSS={{ top: '25%', left: '8%' }} className="z-30" />
      <FloatingSphere size="35px" delay={0.8} positionCSS={{ bottom: '40%', left: '0%' }} className="opacity-70 z-30" />

      <div className="absolute inset-x-0 bottom-[-20px] md:bottom-[-40px] flex justify-center md:justify-end md:pr-12 lg:pr-24 z-40 w-full h-[95%]">
        <HeroPortrait />
      </div>

      <FloatingSphere size="80px" delay={1.5} positionCSS={{ bottom: '20%', right: '2%' }} className="z-50 opacity-90" />
    </div>
  );
};