import { Navbar } from "./components/layout/Navbar";
import DotGrid from "./components/react-bits/DotGrid";
import { useTheme } from "./hooks/useTheme";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen w-full bg-background text-foreground transition-colors duration-300">
      
      {/* BACKGROUND LAYER (Strict Removal with Viewport Size Guarantee) */}
      {theme === "dark" && (
        <div className="fixed top-0 left-0 w-screen h-screen z-0 overflow-hidden pointer-events-none">
          <DotGrid
            dotSize={2}
            gap={15}
            baseColor="#27272a"
            activeColor="#3b82f6"
            proximity={120}
            shockRadius={250}
            shockStrength={3}
          />
        </div>
      )}

      {/* NAVBAR */}
      <Navbar />

      {/* SCROLLABLE CONTENT LAYER */}
      <main className="relative z-10 w-full pt-32 pb-20 flex flex-col items-center">
        <section className="h-screen w-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight opacity-50">
            HERO SECTION
          </h1>
        </section>
        <section className="h-screen w-full flex items-center justify-center bg-muted/20">
           <h2 className="text-3xl font-bold opacity-50">SCROLL TEST</h2>
        </section>
      </main>

    </div>
  );
};

export default App;