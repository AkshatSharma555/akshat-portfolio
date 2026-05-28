import { useState } from "react";
import PillNav from "../react-bits/PillNav";
import { navLinks } from "../../config/nav";
import { useTheme } from "../../hooks/useTheme";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 md:px-8 pointer-events-none">
      {/* EXPANDED & PADDED GLASS CONTAINER */}
      <nav className="pointer-events-auto flex items-center justify-between px-8 py-3.5 w-full max-w-6xl rounded-full bg-background/60 backdrop-blur-lg border border-border shadow-sm transition-colors duration-300">
        
        {/* LEFT: LOGO */}
        <a href="#" className="font-extrabold tracking-tighter text-xl text-foreground">
          AKSHAT.
        </a>

        {/* CENTER: DESKTOP GSAP ANIMATED LINKS */}
        <div className="hidden md:flex items-center">
          <PillNav
            items={navLinks.map(link => ({ label: link.name, href: link.href }))}
            activeHref="#about" 
          />
        </div>

        {/* RIGHT: ACTIONS & MOBILE TOGGLE */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="p-2.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <a 
            href="/resume.pdf" 
            className="hidden md:block px-6 py-2.5 text-sm font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
          >
            Resume
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU (Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-24 left-4 right-4 p-6 rounded-2xl bg-background/90 backdrop-blur-xl border border-border shadow-2xl pointer-events-auto md:hidden flex flex-col gap-6"
          >
            <ul className="flex flex-col gap-4 text-base font-medium text-muted-foreground">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="hover:text-foreground transition-colors duration-200 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href="/resume.pdf" 
              className="w-full py-3 text-center text-sm font-medium bg-foreground text-background rounded-xl hover:opacity-90 transition-opacity"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};