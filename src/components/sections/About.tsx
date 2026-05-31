import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { aboutHeroData } from "../../constants/about";

/* ==========================================
   PHILOSOPHY WORKFLOW (Perfect N-E-S-W Placement)
   Clockwise Cycle: Think -> Build -> Ship -> Improve
========================================== */
const workflowNodes = [
  { id: "think", label: "THINK", top: "0%", left: "50%" },      // North
  { id: "build", label: "BUILD", top: "50%", left: "100%" },    // East
  { id: "ship", label: "SHIP", top: "100%", left: "50%" },      // South
  { id: "improve", label: "IMPROVE", top: "50%", left: "0%" },  // West
];

export const About = () => {
  // Ultra-smooth Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 30;
    const y = (clientY / innerHeight - 0.5) * 30;
    mouseX.set(x);
    mouseY.set(y);
  };

  const springX = useSpring(mouseX, { stiffness: 80, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 30 });

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative w-full py-24 md:py-32 px-6 md:px-16 lg:px-24 flex justify-center z-10 overflow-hidden"
    >
      {/* Background Deep Space Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(37,99,235,0.08)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1400px] flex flex-col gap-24">
        
        {/* ==========================================
            TOP ROW: TEXT (LEFT) & OS VISUAL (RIGHT)
        ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* --- LEFT COLUMN: TYPOGRAPHY & STATS --- */}
          <div className="flex flex-col gap-8 w-full max-w-xl z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <span className="text-blue-500 text-sm font-bold tracking-wider uppercase">
                {aboutHeroData.badge.split('—')[0]}
              </span>
              <span className="text-muted-foreground text-sm font-semibold tracking-widest uppercase">
                — {aboutHeroData.badge.split('—')[1]}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(40px,5vw,64px)] leading-[1.1] font-bold tracking-tight text-foreground"
            >
              <span className="block">{aboutHeroData.title.start}</span>
              <span className="block text-blue-500 dark:text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                {aboutHeroData.title.highlight1}
              </span>
              <span className="block">{aboutHeroData.title.middle}</span>
              <span className="block">{aboutHeroData.title.highlight2}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[17px] md:text-[19px] leading-relaxed text-muted-foreground/80 max-w-[90%]"
            >
              {aboutHeroData.subtitle.start}
              <span className="text-blue-500 dark:text-blue-400 font-medium">{aboutHeroData.subtitle.highlight1}</span>
              {aboutHeroData.subtitle.middle}
              <span className="text-blue-500 dark:text-blue-400 font-medium">{aboutHeroData.subtitle.highlight2}</span>
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-5 mt-4"
            >
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground/60">
                {aboutHeroData.statsLabel}
              </span>
              
              <div className="flex flex-wrap gap-x-12 gap-y-8">
                {aboutHeroData.stats.map((stat) => (
                  <div key={stat.id} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
                      <span className="text-2xl md:text-3xl font-bold text-foreground">
                        {stat.value}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 pl-1">
                      <div className="w-1 h-1 rounded-full bg-blue-500/50" />
                      <span className="text-sm font-medium text-muted-foreground">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-4"
            >
              <button className="group flex items-center gap-4 px-6 py-3 rounded-full bg-black/5 dark:bg-white/[0.03] border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/[0.08] transition-all duration-300 backdrop-blur-md">
                <span className="text-sm font-semibold text-foreground">Explore My Work</span>
                <div className="w-8 h-8 rounded-full bg-white dark:bg-white/10 flex items-center justify-center border border-black/10 dark:border-white/10 shadow-sm group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-black dark:text-white group-hover:text-white" />
                </div>
              </button>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: THE ENGINEERING OS SYSTEM --- */}
          <div className="w-full h-[500px] lg:h-[650px] flex items-center justify-center relative z-10 perspective-[1000px] select-none mt-10 lg:mt-0">
            
            <motion.div 
              style={{ x: springX, y: springY }}
              className="relative w-[320px] md:w-[400px] aspect-square flex items-center justify-center"
            >
              {/* === STATIC RINGS (Depth) === */}
              <div className="absolute inset-[-15%] rounded-full border border-black/[0.03] dark:border-white/[0.03]" />
              <div className="absolute inset-[15%] rounded-full border border-black/[0.05] dark:border-white/[0.05]" />

              {/* === ROTATING CYCLE ARROWS RING === */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-black/20 dark:border-white/20 z-0"
              >
                {/* Arrow Top (Pointing Right) */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background text-black/40 dark:text-white/40">
                  <ChevronRight className="w-5 h-5" />
                </div>
                {/* Arrow Right (Pointing Down) */}
                <div className="absolute top-1/2 -right-3 -translate-y-1/2 rotate-90 bg-background text-black/40 dark:text-white/40">
                  <ChevronRight className="w-5 h-5" />
                </div>
                {/* Arrow Bottom (Pointing Left) */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rotate-180 bg-background text-black/40 dark:text-white/40">
                  <ChevronRight className="w-5 h-5" />
                </div>
                {/* Arrow Left (Pointing Up) */}
                <div className="absolute top-1/2 -left-3 -translate-y-1/2 -rotate-90 bg-background text-black/40 dark:text-white/40">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </motion.div>

              {/* === CONNECTION LINES (Energy Flow) === */}
              <div className="absolute top-[10%] bottom-[10%] left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-blue-500/40 dark:via-blue-500/20 to-transparent z-0" />
              <div className="absolute left-[10%] right-[10%] top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 dark:via-blue-500/20 to-transparent z-0" />

              {/* === DATA PULSES === */}
              <motion.div 
                animate={{ y: ["-120px", "120px"], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 -translate-x-1/2 w-[2px] h-10 bg-gradient-to-b from-transparent via-blue-500 to-transparent blur-[1px]"
              />
              <motion.div 
                animate={{ x: ["-120px", "120px"], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
                className="absolute top-1/2 -translate-y-1/2 h-[2px] w-10 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[1px]"
              />

              {/* === THE CORE (AS LOGO) === */}
              <div className="relative z-20 flex items-center justify-center">
                {/* Breathing Core Glow */}
                <motion.div 
                  animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-32 h-32 bg-blue-500/30 rounded-full blur-[25px] pointer-events-none"
                />
                
                {/* 
                  🔥 LIGHT MODE FIX: bg-white/80 added so it doesn't look like muddy grey.
                  Dark mode retains bg-black/60.
                */}
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl md:rounded-3xl bg-white/80 dark:bg-black/60 border border-black/10 dark:border-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_40px_rgba(59,130,246,0.2),_0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center transition-transform hover:scale-105 duration-500 cursor-default">
                  <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-black/5 dark:border-white/5" />
                  <img 
                    src="/logo.svg" 
                    alt="Akshat Logo" 
                    // Added dark:invert if your SVG is black by default, otherwise adjust accordingly
                    className="w-10 h-10 md:w-12 md:h-12 relative z-10 drop-shadow-[0_0_10px_rgba(59,130,246,0.4)] opacity-90 object-contain dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" 
                  />
                </div>
              </div>

              {/* === THE OS NODES (THINK, BUILD, SHIP, IMPROVE) === */}
              {workflowNodes.map((node) => (
                <div 
                  key={node.id}
                  className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
                  style={{ top: node.top, left: node.left }}
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="group flex flex-col items-center justify-center cursor-default"
                  >
                    {/* Glowing Connection Dot */}
                    <div className="w-1.5 h-1.5 mb-1.5 rounded-full bg-blue-500/30 group-hover:bg-blue-500 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:block" />
                    
                    {/* 
                      🔥 LIGHT MODE FIX: bg-white added for crisp contrast.
                    */}
                    <div className="relative px-5 py-2.5 rounded-full bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.05)] dark:shadow-none transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                      <span className="text-xs md:text-[13px] font-bold tracking-[0.2em] text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {node.label}
                      </span>
                    </div>
                  </motion.div>
                </div>
              ))}

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};