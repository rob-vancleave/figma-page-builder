import { Plus } from "lucide-react";
import { Button } from "../ui/button";

interface ComponentLibraryProps {
  onAddComponent: (componentType: string) => void;
}

export function ComponentLibrary({ onAddComponent }: ComponentLibraryProps) {
  const components = [
    { id: "hero", name: "Hero Section", description: "Eye-catching header with CTA" },
    { id: "overview", name: "Overview", description: "Tagline, heading & 3 columns" },
    { id: "features", name: "Features", description: "Grid of feature highlights" },
    { id: "testimonials", name: "Testimonials", description: "Customer reviews" },
    { id: "cta", name: "Call to Action", description: "Conversion-focused section" },
    { id: "footer", name: "Footer", description: "Site navigation footer" }
  ];

  return (
    <div className="w-80 border-r border-border bg-card h-screen overflow-y-auto">
      <div className="p-6 border-b border-border">
        <h2 className="text-xl">Components</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Click to add to your page
        </p>
      </div>
      <div className="p-4 space-y-3">
        {components.map((component) => (
          <button
            key={component.id}
            onClick={() => onAddComponent(component.id)}
            className="w-full p-4 border border-border rounded-lg hover:bg-accent hover:border-primary transition-colors text-left group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="font-medium mb-1">{component.name}</div>
                <p className="text-sm text-muted-foreground">
                  {component.description}
                </p>
              </div>
              <Plus className="w-5 h-5 text-muted-foreground group-hover:text-primary flex-shrink-0 ml-2" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
