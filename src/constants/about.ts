import { Code2, Trophy, Zap} from 'lucide-react';

/* ==========================================
   ABOUT SECTION DATA (TOP LEFT)
========================================== */
export const aboutHeroData = {
  badge: "01 — THE ENGINEER",
  title: {
    start: "I build\n",
    highlight1: "scalable systems\n",
    middle: "that solve\n",
    highlight2: "real problems."
  },
  subtitle: {
    start: "Turning ideas into high-performance digital\nproducts with ",
    highlight1: "clean code",
    middle: " and ",
    highlight2: "smart architecture."
  },
  statsLabel: "FOCUSED ON IMPACT",
  stats: [
    {
      id: "projects",
      icon: Code2,
      value: "10+",
      label: "Projects Built",
      iconColor: "text-blue-500"
    },
    {
      id: "hackathons",
      icon: Trophy,
      value: "Top 10",
      label: "Hackathon Finalist",
      iconColor: "text-gray-400"
    },
    {
      id: "internships",
      icon: Zap,
      value: "4",
      label: "Internships",
      iconColor: "text-blue-500"
    }
  ]
};