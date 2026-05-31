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
          filter: `drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.25))`,
        }}
        draggable="false"
      />

      <div className="absolute inset-0 z-20 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent mix-blend-overlay rounded-b-full" />

      {/* 🔥 THE FIX: FADE ONLY IN DARK MODE 🔥 
          Yahan maine "hidden dark:block" laga diya hai. 
          Iska matlab Light Mode me ye div bilkul nahi dikhega (sharp cut rahega),
          aur Dark Mode me ye on ho jayega aur ekdum premium dark fade dega!
      */}
      <div className="hidden dark:block absolute bottom-0 left-0 w-full h-[18%] bg-gradient-to-t from-background via-background/90 to-transparent z-30 pointer-events-none" />
    </motion.div>
  );
};