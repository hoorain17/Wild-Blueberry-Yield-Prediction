import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

export const Section = ({ id, children, className, gradient = false }: SectionProps) => {
  return (
    <section 
      id={id}
      className={cn(
        "py-16 md:py-24",
        gradient && "bg-gradient-to-b from-background to-muted",
        className
      )}
    >
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};
