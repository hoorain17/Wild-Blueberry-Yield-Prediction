import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { DataTable } from "@/components/DataTable";
import { MetricCard } from "@/components/MetricCard";
import { FeatureCard } from "@/components/FeatureCard";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
        <div className="container max-w-6xl mx-auto px-4 md:px-6 relative">
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="text-6xl md:text-7xl mb-6">🫐</div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Wild Blueberry Yield{" "}
              <span className="bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                Prediction
              </span>
            </h1>
            <Badge variant="secondary" className="text-base px-4 py-2">
              Machine Learning Research Project
            </Badge>
          </div>
        </div>
      </section>

      {/* Abstract */}
      <Section>
        <Card className="p-8 md:p-12 shadow-lg">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-4xl">📄</span>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Abstract</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This project focuses on predicting the yield of wild blueberries based on a variety of biological, 
                environmental, and climatic factors. Using machine learning—primarily the{" "}
                <span className="font-semibold text-primary">XGBoost Regression Model</span>—the project identifies 
                key drivers such as bee pollination patterns, rainfall, and temperature that significantly influence 
                blueberry yield. The study demonstrates how data-driven insights can help optimize agricultural 
                productivity and sustainability.
              </p>
            </div>
          </div>
        </Card>
      </Section>

      {/* Objective */}
      <Section gradient>
        <SectionHeader 
          icon="🎯"
          title="Objective"
          subtitle="To build a predictive model that estimates blueberry yield using measurable environmental and biological features, while exploring which variables most strongly affect outcomes."
        />
      </Section>

      {/* Dataset Overview */}
      <Section>
        <SectionHeader 
          icon="📊"
          title="Dataset Overview"
          subtitle="The dataset includes several important variables that influence yield"
        />
        
        <DataTable
          headers={["Category", "Example Features", "Description"]}
          rows={[
            ["Pollinator Activity", "honeybee, bumbles, andrena, osmia", "Frequency of different bee species observed"],
            ["Weather Conditions", "RainingDays, AvgTemp, MaxTemp, MinTemp", "Environmental conditions affecting pollination and growth"],
            ["Soil & Plant Variables", "Clonesize, Bloom, BerryWeight", "Biological and growth characteristics"],
            ["Target Variable", "Yield", "The predicted outcome variable"]
          ]}
        />
      </Section>

      {/* Data Preprocessing */}
      <Section gradient>
        <SectionHeader 
          icon="🧼"
          title="Data Preprocessing"
        />
        
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard
            icon="🔍"
            title="Data Quality"
            description="Checked for missing values and outliers to ensure data integrity"
          />
          <FeatureCard
            icon="⚖️"
            title="Scaling & Encoding"
            description="Applied scaling and feature encoding where necessary"
          />
          <FeatureCard
            icon="✂️"
            title="Data Splitting"
            description="Split data into 80% training and 20% testing sets"
          />
          <FeatureCard
            icon="📈"
            title="Distribution Analysis"
            description="Verified distribution of target variable for model stability"
          />
        </div>
      </Section>

      {/* EDA */}
      <Section>
        <SectionHeader 
          icon="🔍"
          title="Exploratory Data Analysis"
          subtitle="Key insights discovered through comprehensive data exploration"
        />
        
        <div className="space-y-6">
          <Card className="p-6 border-l-4 border-l-primary">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🐝</span>
              <p className="text-foreground leading-relaxed">
                <span className="font-semibold">Bee species frequencies</span> have a strong positive correlation with yield
              </p>
            </div>
          </Card>
          
          <Card className="p-6 border-l-4 border-l-secondary">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🌧️</span>
              <p className="text-foreground leading-relaxed">
                <span className="font-semibold">Excessive rainfall</span> negatively impacts yield due to reduced pollination activity
              </p>
            </div>
          </Card>
          
          <Card className="p-6 border-l-4 border-l-accent">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🌡️</span>
              <p className="text-foreground leading-relaxed">
                <span className="font-semibold">Temperature variation</span> influences bee activity and bloom timing
              </p>
            </div>
          </Card>
        </div>

        <Card className="mt-8 p-6 bg-muted/50">
          <p className="text-center text-lg font-medium text-foreground">
            <span className="text-2xl mr-2">🧠</span>
            More active pollinators and stable weather conditions tend to increase blueberry yield.
          </p>
        </Card>
      </Section>

      {/* Modeling Approach */}
      <Section gradient>
        <SectionHeader 
          icon="⚙️"
          title="Modeling Approach"
        />
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Linear Regression</h3>
            <p className="text-muted-foreground">Baseline model for simple relationships</p>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Random Forest</h3>
            <p className="text-muted-foreground">Ensemble approach for non-linear patterns</p>
          </Card>
          
          <Card className="p-6 border-2 border-primary">
            <h3 className="text-xl font-semibold mb-3 text-primary">XGBoost ⭐</h3>
            <p className="text-muted-foreground">Final selected model due to best performance</p>
          </Card>
        </div>

        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Why XGBoost?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-semibold mb-2 text-foreground">Non-linearity</h4>
              <p className="text-sm text-muted-foreground">Handles complex feature interactions efficiently</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🛡️</div>
              <h4 className="font-semibold mb-2 text-foreground">Robust</h4>
              <p className="text-sm text-muted-foreground">Resistant to overfitting through regularization</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💡</div>
              <h4 className="font-semibold mb-2 text-foreground">Interpretable</h4>
              <p className="text-sm text-muted-foreground">Built-in feature importance analysis</p>
            </div>
          </div>
        </Card>
      </Section>

      {/* Model Evaluation */}
      <Section>
        <SectionHeader 
          icon="🧠"
          title="Model Training & Evaluation"
          subtitle="Comprehensive performance metrics across all tested models"
        />
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <MetricCard label="R² Score" value="Explained Variance" icon="📐" />
          <MetricCard label="MAE" value="Mean Absolute Error" icon="📏" />
          <MetricCard label="RMSE" value="Root Mean Squared Error" icon="📊" />
        </div>

        <DataTable
          headers={["Model", "R²", "MAE", "RMSE"]}
          rows={[
            ["Linear Regression", "0.72", "0.085", "0.113"],
            ["Random Forest", "0.84", "0.063", "0.089"],
            ["XGBoost ⭐", "0.88", "0.056", "0.074"]
          ]}
        />

        <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
          <p className="text-center text-lg font-medium text-foreground">
            ✅ The XGBoost model performed the best, showing high predictive accuracy and stability.
          </p>
        </Card>
      </Section>

      {/* Feature Importance */}
      <Section gradient>
        <SectionHeader 
          icon="🧩"
          title="Feature Importance & Explainability"
          subtitle="Understanding which variables drive blueberry yield predictions"
        />
        
        <Card className="p-8 mb-8">
          <h3 className="text-xl font-semibold mb-6 text-center text-foreground">
            Top 5 Influential Features
          </h3>
          
          <div className="space-y-4">
            {[
              { rank: 1, feature: "honeybee", description: "Primary pollinator impact", icon: "🐝" },
              { rank: 2, feature: "bumbles", description: "Significant pollination role", icon: "🐝" },
              { rank: 3, feature: "RainingDays", description: "Affects bee activity and bloom", icon: "🌧️" },
              { rank: 4, feature: "andrena", description: "Secondary pollinator species", icon: "🐝" },
              { rank: 5, feature: "osmia", description: "Correlated with stable yield increase", icon: "🐝" }
            ].map((item) => (
              <div
                key={item.rank}
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {item.rank}
                </div>
                <div className="text-2xl">{item.icon}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{item.feature}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-muted/50">
          <p className="text-center text-lg font-medium text-foreground">
            <span className="text-2xl mr-2">🧠</span>
            The presence of bee species contributes most to yield, while excessive rainfall negatively affects productivity.
          </p>
        </Card>
      </Section>

      {/* Results Summary */}
      <Section>
        <SectionHeader 
          icon="📈"
          title="Results Summary"
        />
        
        <div className="grid md:grid-cols-3 gap-6">
          <MetricCard 
            icon="🎯"
            label="R² Score Achieved"
            value="0.88"
            className="bg-primary/5"
          />
          <MetricCard 
            icon="🐝"
            label="Key Factor"
            value="Bee Activity"
            className="bg-secondary/5"
          />
          <MetricCard 
            icon="🌧️"
            label="Critical Variable"
            value="Rainfall"
            className="bg-accent/5"
          />
        </div>

        <Card className="mt-12 p-8">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <p className="text-foreground leading-relaxed">
                XGBoost achieved an R² of <span className="font-semibold text-primary">0.88</span>, outperforming all baseline models.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🐝</span>
              <p className="text-foreground leading-relaxed">
                <span className="font-semibold">Bee activity and rainfall</span> emerged as the most critical factors influencing yield.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🌱</span>
              <p className="text-foreground leading-relaxed">
                The model provides a strong foundation for <span className="font-semibold">precision agriculture</span> and can guide pollination management and climate adaptation strategies.
              </p>
            </li>
          </ul>
        </Card>
      </Section>

      {/* Conclusion */}
      <Section gradient>
        <SectionHeader 
          icon="🧭"
          title="Conclusion"
        />
        
        <Card className="p-8">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            The study successfully developed a reliable prediction model for wild blueberry yield. 
            It demonstrates that <span className="font-semibold text-primary">pollinator behavior</span> and{" "}
            <span className="font-semibold text-secondary">environmental stability</span> are key determinants of agricultural output.
          </p>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Future Improvements</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-4 bg-background">
                <div className="text-2xl mb-2">🔮</div>
                <p className="text-sm text-muted-foreground">Integration of SHAP or LIME for enhanced explainability</p>
              </Card>
              <Card className="p-4 bg-background">
                <div className="text-2xl mb-2">📅</div>
                <p className="text-sm text-muted-foreground">Time-series modeling with seasonal trends</p>
              </Card>
              <Card className="p-4 bg-background">
                <div className="text-2xl mb-2">🌐</div>
                <p className="text-sm text-muted-foreground">Deployment as a web dashboard for farmers and researchers</p>
              </Card>
            </div>
          </div>
        </Card>
      </Section>

      {/* References */}
      <Section>
        <SectionHeader 
          icon="📚"
          title="References"
        />
        
        <Card className="p-8">
          <ol className="space-y-3 list-decimal list-inside">
            <li className="text-muted-foreground">
              Chen & Guestrin (2016). <span className="font-semibold text-foreground">XGBoost: A Scalable Tree Boosting System</span>.
            </li>
            <li className="text-muted-foreground">
              Ribeiro et al. (2016). <span className="font-semibold text-foreground">LIME: Local Interpretable Model-Agnostic Explanations</span>.
            </li>
            <li className="text-muted-foreground">
              Lundberg & Lee (2017). <span className="font-semibold text-foreground">SHAP: Unified Approach to Interpreting Model Predictions</span>.
            </li>
          </ol>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container max-w-6xl mx-auto px-4 md:px-6 text-center">
          <div className="text-4xl mb-4">🫐</div>
          <p className="text-muted-foreground">
            Wild Blueberry Yield Prediction Research Project
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
