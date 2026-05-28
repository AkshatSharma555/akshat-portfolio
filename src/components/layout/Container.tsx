import { cn } from "../../utils/cn";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Container = ({ className, children, ...props }: ContainerProps) => {
  return (
    <div
      className={cn(
        "w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24", // Premium responsive whitespace
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};