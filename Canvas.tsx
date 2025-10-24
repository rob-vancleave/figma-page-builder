import { forwardRef } from "react";
import { GripVertical, Trash2, Edit } from "lucide-react";
import { HeroSection } from "../landing-page-sections/HeroSection";
import { OverviewSection } from "../landing-page-sections/OverviewSection";
import { FeaturesSection } from "../landing-page-sections/FeaturesSection";
import { TestimonialsSection } from "../landing-page-sections/TestimonialsSection";
import { CTASection } from "../landing-page-sections/CTASection";
import { FooterSection } from "../landing-page-sections/FooterSection";
import { Button } from "../ui/button";

interface CanvasComponent {
  id: string;
  type: string;
  content: any;
}

interface CanvasProps {
  components: CanvasComponent[];
  onRemoveComponent: (id: string) => void;
  onMoveComponent: (id: string, direction: "up" | "down") => void;
  onEditComponent: (id: string) => void;
  previewMode?: boolean;
}

const componentMap: Record<string, React.ComponentType<any>> = {
  hero: HeroSection,
  overview: OverviewSection,
  features: FeaturesSection,
  testimonials: TestimonialsSection,
  cta: CTASection,
  footer: FooterSection
};

export const Canvas = forwardRef<HTMLDivElement, CanvasProps>(
  ({ components, onRemoveComponent, onMoveComponent, onEditComponent, previewMode = false }, ref) => {
    return (
      <div className="flex-1 h-screen overflow-y-auto bg-slate-100" ref={ref}>
        {components.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h3 className="text-2xl mb-2 text-muted-foreground">Start Building</h3>
              <p className="text-muted-foreground">
                Select components from the sidebar to add them to your page
              </p>
            </div>
          </div>
        ) : (
          <div className="relative">
            {components.map((component, index) => {
              const Component = componentMap[component.type];
              if (!Component) return null;

              return (
                <div
                  key={component.id}
                  className="relative group"
                >
                  {!previewMode && (
                    <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                      <div className="bg-white rounded-lg shadow-lg border border-border p-1 flex gap-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => onEditComponent(component.id)}
                          className="h-8 w-8 p-0"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => onMoveComponent(component.id, "up")}
                          disabled={index === 0}
                          className="h-8 w-8 p-0"
                        >
                          <GripVertical className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => onMoveComponent(component.id, "down")}
                          disabled={index === components.length - 1}
                          className="h-8 w-8 p-0"
                        >
                          <GripVertical className="w-4 h-4 rotate-180" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => onRemoveComponent(component.id)}
                          className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                  <div className={previewMode ? "" : "group-hover:ring-2 group-hover:ring-primary transition-all"}>
                    <Component content={component.content} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
);

Canvas.displayName = "Canvas";
