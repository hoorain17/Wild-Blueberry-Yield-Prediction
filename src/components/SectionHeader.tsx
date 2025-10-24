import { ReactNode } from "react";

interface SectionHeaderProps {
  icon: string;
  title: string;
  subtitle?: ReactNode;
}

export const SectionHeader = ({ icon, title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="mb-12 text-center">
      <div className="text-5xl mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {icon}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {subtitle}
        </p>
      )}
    </div>
  );
};
