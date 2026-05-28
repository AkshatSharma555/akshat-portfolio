import { cn } from "../../utils/cn";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

export const Section = ({ className, children, ...props }: SectionProps) => {
  return (
    <section
      className={cn(
        "w-full py-20 md:py-32", // Consistent vertical spacing rhythm
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};