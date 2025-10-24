import { Zap, Shield, Palette, Globe, LucideIcon } from "lucide-react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  content: {
    title: string;
    subtitle: string;
    features: Feature[];
  };
}

const iconMap: Record<string, LucideIcon> = {
  zap: Zap,
  shield: Shield,
  palette: Palette,
  globe: Globe,
};

export function FeaturesSection({ content }: FeaturesSectionProps) {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">{content.title}</h2>
          <p className="text-xl text-muted-foreground">
            {content.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Zap;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
