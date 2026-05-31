import { 
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTypescript, 
  SiDocker, SiMysql, SiGit, SiGithub, 
  SiPostman, SiFigma, SiCanva, SiPython, SiTailwindcss 
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";

/* ==========================================
   TECHNOLOGY DATA LIST
========================================== */
const technologies = [
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Java", icon: FaJava },
  { name: "TypeScript", icon: SiTypescript },
  { name: "AWS", icon: FaAws },
  { name: "Docker", icon: SiDocker },
  { name: "MySQL", icon: SiMysql },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Postman", icon: SiPostman },
  { name: "Figma", icon: SiFigma },
  { name: "Canva", icon: SiCanva },
  { name: "Python", icon: SiPython },
  { name: "Tailwind CSS", icon: SiTailwindcss },
];

export const TechStackMarquee = () => {
  return (
    // 🔥 Removed bg-colors and py-16. Added strict height (80px) and z-20 to float above dot grid.
    <div className="relative w-full h-[80px] flex items-center justify-center overflow-hidden z-20 mt-4 md:mt-0">
      
      {/* INLINE CSS FOR SEAMLESS LOOP */}
      <style>
        {`
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 35s linear infinite;
            width: max-content;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
          
          /* Edge Fade Masks to blend smoothly into the page edges */
          .mask-edges {
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }
        `}
      </style>

      {/* Main Track Container with Mask */}
      <div className="relative w-full max-w-[1600px] mx-auto mask-edges overflow-hidden h-full flex items-center">
        
        {/* The Animated Flex Track */}
        <div className="flex animate-infinite-scroll gap-5 pl-5 items-center">
          
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              // 🔥 Premium Glassmorphism Pills
              className="group flex items-center gap-3 px-5 py-2.5 rounded-full cursor-default
                         bg-black/[0.03] dark:bg-white/[0.03] 
                         backdrop-blur-md
                         border border-black/[0.08] dark:border-white/[0.08]
                         hover:-translate-y-1 hover:bg-black/[0.05] dark:hover:bg-white/[0.05]
                         hover:shadow-[0_0_15px_rgba(37,99,235,0.15)] dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]
                         transition-all duration-300 ease-out"
            >
              <tech.icon className="text-[20px] text-[#111111]/60 dark:text-[#EAEAEA]/60 group-hover:text-[#2563EB] dark:group-hover:text-[#3B82F6] transition-colors duration-300" />
              
              <span className="text-[15px] font-medium text-[#111111]/80 dark:text-[#EAEAEA]/80 whitespace-nowrap group-hover:text-[#111111] dark:group-hover:text-[#ffffff] transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};