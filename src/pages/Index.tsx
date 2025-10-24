import { Navigation } from "@/components/Navigation";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { DataTable } from "@/components/DataTable";
import { MetricCard } from "@/components/MetricCard";
import { InteractiveFeatureCard } from "@/components/InteractiveFeatureCard";
import { ImageSection } from "@/components/ImageSection";
import { ModelTabs } from "@/components/ModelTabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-blueberries.jpg";
import beeImage from "@/assets/bee-pollination.jpg";
import dataImage from "@/assets/data-analysis.jpg";
import weatherImage from "@/assets/weather-monitoring.jpg";
import mlImage from "@/assets/ml-model.jpg";
import labImage from "@/assets/research-lab.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/95" />
        </div>
        <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10 text-center py-32">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Wild Blueberry Yield{" "}
              <span className="bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                Prediction
              </span>
            </h1>
            <Badge variant="secondary" className="text-base px-4 py-2">
              Machine Learning Research Project
            </Badge>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Using XGBoost to predict agricultural yield based on pollination and climate factors
            </p>
          </div>
        </div>
      </section>

      {/* Abstract */}
      <Section id="abstract">
        <Card className="p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
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
            <ImageSection 
              image={beeImage}
              alt="Bee pollinating blueberry flowers"
              caption="Figure 1. Honeybee pollination - a critical factor in blueberry yield"
            />
          </div>
        </Card>
      </Section>

      {/* Objective */}
      <Section id="objective" gradient>
        <SectionHeader 
          icon="🎯"
          title="Objective"
          subtitle="To build a predictive model that estimates blueberry yield using measurable environmental and biological features, while exploring which variables most strongly affect outcomes."
        />
      </Section>

      {/* Dataset Overview */}
      <Section id="dataset">
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
      <Section id="preprocessing" gradient>
        <SectionHeader 
          icon="🧼"
          title="Data Preprocessing"
        />
        
        <div className="grid md:grid-cols-2 gap-6">
          <InteractiveFeatureCard
            icon="🔍"
            title="Data Quality"
            description="Checked for missing values and outliers"
            details="Comprehensive data validation including null checks, outlier detection using IQR method, and data type verification to ensure high-quality inputs for modeling."
          />
          <InteractiveFeatureCard
            icon="⚖️"
            title="Scaling & Encoding"
            description="Applied scaling and feature encoding"
            details="StandardScaler for numerical features and one-hot encoding for categorical variables. This ensures all features are on comparable scales for optimal model performance."
          />
          <InteractiveFeatureCard
            icon="✂️"
            title="Data Splitting"
            description="Split data into 80% training and 20% testing sets"
            details="Stratified split to maintain distribution of target variable across both sets. Training set used for model development, test set for final evaluation."
          />
          <InteractiveFeatureCard
            icon="📈"
            title="Distribution Analysis"
            description="Verified distribution of target variable"
            details="Analyzed yield distribution for normality, skewness, and outliers. Ensures model assumptions are met and predictions will be reliable."
          />
        </div>
      </Section>

      {/* EDA */}
      <Section id="analysis">
        <SectionHeader 
          icon="🔍"
          title="Exploratory Data Analysis"
          subtitle="Key insights discovered through comprehensive data exploration"
        />
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <ImageSection 
            image={weatherImage}
            alt="Weather monitoring equipment"
            caption="Figure 2. Environmental monitoring in blueberry fields"
          />
          <ImageSection 
            image={dataImage}
            alt="Data analysis dashboard"
            caption="Figure 3. Statistical analysis and correlation patterns"
          />
        </div>

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
      <Section id="modeling" gradient>
        <SectionHeader 
          icon="⚙️"
          title="Modeling Approach"
        />
        
        <div className="mb-12">
          <ImageSection 
            image={mlImage}
            alt="Machine learning model visualization"
            caption="Figure 4. Neural network architecture and feature connections"
          />
        </div>

        <ModelTabs />

        <Card className="mt-8 p-8">
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
      <Section id="results">
        <SectionHeader 
          icon="🧠"
          title="Model Training & Evaluation"
          subtitle="Comprehensive performance metrics across all tested models"
        />
        
        <div className="mb-12">
          <ImageSection 
            image={labImage}
            alt="Research laboratory"
            caption="Figure 5. Data analysis and model evaluation workspace"
          />
        </div>

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

        {/* Feature Importance */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
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
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-md hover:scale-102 transition-all duration-300 cursor-pointer"
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
        </div>

        <Card className="mt-8 p-6 bg-muted/50">
          <p className="text-center text-lg font-medium text-foreground">
            <span className="text-2xl mr-2">🧠</span>
            The presence of bee species contributes most to yield, while excessive rainfall negatively affects productivity.
          </p>
        </Card>

        {/* Results Summary */}
        <div className="mt-16">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
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

          <Card className="p-8">
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
        </div>
      </Section>

      {/* Conclusion */}
      <Section id="conclusion" gradient>
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
              <InteractiveFeatureCard
                icon="🔮"
                title="Enhanced Explainability"
                description="Integration of SHAP or LIME"
                details="Implement Shapley Additive Explanations (SHAP) and Local Interpretable Model-agnostic Explanations (LIME) for deeper insight into individual predictions and feature contributions."
              />
              <InteractiveFeatureCard
                icon="📅"
                title="Time-Series Modeling"
                description="Seasonal trends analysis"
                details="Develop ARIMA or Prophet models to capture temporal patterns, seasonal variations, and long-term trends in yield prediction across multiple growing seasons."
              />
              <InteractiveFeatureCard
                icon="🌐"
                title="Web Dashboard"
                description="Deployment for stakeholders"
                details="Create an interactive web application with real-time predictions, data visualization, and decision support tools for farmers and agricultural researchers."
              />
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
          <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
            <img src={heroImage} alt="Blueberries" className="w-full h-full object-cover" />
          </div>
          <p className="text-muted-foreground">
            Wild Blueberry Yield Prediction Research Project
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
