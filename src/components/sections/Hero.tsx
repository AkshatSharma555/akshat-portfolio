import { Badge } from "../ui/Badge";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-start pt-[140px] md:pt-[180px] px-8 md:px-16 lg:px-24 z-10 overflow-hidden">
      
      {/* Content Container (Left Side 45%) */}
      <div className="w-full md:w-[45%] flex flex-col gap-6">
        
        {/* Top Badge */}
        <Badge />

        {/* Hum name text aur baaki cheezein yahan baad me apne custom logic se daalenge */}

      </div>

    </section>
  );
};