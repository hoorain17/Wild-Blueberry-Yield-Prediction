import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string | number;
  icon?: string;
  className?: string;
}

export const MetricCard = ({ label, value, icon, className }: MetricCardProps) => {
  return (
    <Card className={cn(
      "p-6 text-center transition-all hover:shadow-lg hover:scale-105 duration-300",
      className
    )}>
      {icon && <div className="text-4xl mb-3">{icon}</div>}
      <div className="text-3xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sm text-muted-foreground font-medium">{label}</div>
    </Card>
  );
};
