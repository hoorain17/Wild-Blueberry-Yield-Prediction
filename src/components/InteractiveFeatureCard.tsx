import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveFeatureCardProps {
  icon?: string;
  image?: string;
  title: string;
  description: string;
  details?: string;
}

export const InteractiveFeatureCard = ({
  icon,
  image,
  title,
  description,
  details,
}: InteractiveFeatureCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer",
        isExpanded && "ring-2 ring-primary"
      )}
      onClick={() => details && setIsExpanded(!isExpanded)}
    >
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}
      <div className="p-6">
        {icon && !image && <div className="text-4xl mb-4">{icon}</div>}
        <h3 className="text-xl font-semibold mb-2 text-foreground flex items-center justify-between">
          {title}
          {details && (
            <span className="text-primary">
              {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </span>
          )}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        
        {details && isExpanded && (
          <div className="mt-4 pt-4 border-t border-border animate-in fade-in slide-in-from-top-2">
            <p className="text-sm text-foreground leading-relaxed">{details}</p>
          </div>
        )}
      </div>
    </Card>
  );
};
