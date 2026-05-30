import { motion } from "framer-motion";

export const HeroPortrait = () => {
  return (
    <motion.div
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full max-w-[600px] md:max-w-[600px] lg:max-w-[490px] h-[100%] flex justify-center items-end z-40 pointer-events-none"
    >
      <img
        src="/images/hero-portrait.png"
        alt="Akshat Sharma"
        className="relative z-10 w-full h-full object-contain object-bottom"
        style={{
          // Extra blue glow hata diya. Sirf dark shadow rakha hai 3D depth ke liye.
          filter: `drop-shadow(15px 15px 30px rgba(0, 0, 0, 0.4))`,
        }}
        draggable="false"
      />

      {/* Ek halka sa overlay gradient portrait ke upar */}
      <div className="absolute inset-0 z-20 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent mix-blend-overlay rounded-b-full" />
    </motion.div>
  );
};