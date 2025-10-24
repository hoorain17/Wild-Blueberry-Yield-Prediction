import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Model {
  name: string;
  description: string;
  r2: string;
  mae: string;
  rmse: string;
  isWinner?: boolean;
}

const models: Model[] = [
  {
    name: "Linear Regression",
    description: "Baseline model for simple relationships. Assumes linear relationships between features and target.",
    r2: "0.72",
    mae: "0.085",
    rmse: "0.113",
  },
  {
    name: "Random Forest",
    description: "Ensemble approach using multiple decision trees. Handles non-linear patterns effectively.",
    r2: "0.84",
    mae: "0.063",
    rmse: "0.089",
  },
  {
    name: "XGBoost",
    description: "Gradient boosting algorithm with regularization. Best performance with feature importance built-in.",
    r2: "0.88",
    mae: "0.056",
    rmse: "0.074",
    isWinner: true,
  },
];

export const ModelTabs = () => {
  const [selectedModel, setSelectedModel] = useState(2); // XGBoost selected by default

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3 justify-center">
        {models.map((model, index) => (
          <Button
            key={model.name}
            variant={selectedModel === index ? "default" : "outline"}
            onClick={() => setSelectedModel(index)}
            className={cn(
              "transition-all duration-300",
              model.isWinner && "border-primary border-2"
            )}
          >
            {model.name}
            {model.isWinner && " ⭐"}
          </Button>
        ))}
      </div>

      <Card className="p-8 animate-in fade-in slide-in-from-bottom-4">
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">
              {models[selectedModel].name}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {models[selectedModel].description}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-1">
                {models[selectedModel].r2}
              </div>
              <div className="text-sm text-muted-foreground">R² Score</div>
            </div>
            <div className="text-center p-4 bg-secondary/5 rounded-lg">
              <div className="text-3xl font-bold text-secondary mb-1">
                {models[selectedModel].mae}
              </div>
              <div className="text-sm text-muted-foreground">MAE</div>
            </div>
            <div className="text-center p-4 bg-accent/5 rounded-lg">
              <div className="text-3xl font-bold text-accent-foreground mb-1">
                {models[selectedModel].rmse}
              </div>
              <div className="text-sm text-muted-foreground">RMSE</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
