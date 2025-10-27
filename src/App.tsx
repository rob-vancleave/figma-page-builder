import { useState, useRef } from "react";
import { ComponentLibrary } from "./components/landing-page-builder/ComponentLibrary";
import { Canvas } from "./components/landing-page-builder/Canvas";
import { ComponentEditor } from "./components/landing-page-builder/ComponentEditor";
import { Button } from "./components/ui/button";
import { Toaster } from "./components/ui/sonner";
import { Download, Eye } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { toast } from "sonner";

interface PageComponent {
  id: string;
  type: string;
  content: any;
}

const defaultContent: Record<string, any> = {
  hero: {
    headline: "Build Your Dream Product",
    subheadline: "Transform your ideas into reality with our powerful platform. Start building today and see results tomorrow.",
    primaryButton: "Get Started",
    secondaryButton: "Learn More"
  },
  overview: {
    tagline: "Tagline",
    heading: "Medium length section heading goes here",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    columns: [
      {
        heading: "Medium length section heading goes here",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
      },
      {
        heading: "Medium length section heading goes here",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
      },
      {
        heading: "Medium length section heading goes here",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
      }
    ],
    primaryButton: "Primary Button LG",
    secondaryButton: "Button"
  },
  features: {
    title: "Powerful Features",
    subtitle: "Everything you need to succeed, all in one place",
    features: [
      {
        icon: "zap",
        title: "Lightning Fast",
        description: "Optimized performance that delivers results in milliseconds."
      },
      {
        icon: "shield",
        title: "Secure by Default",
        description: "Enterprise-grade security built into every layer."
      },
      {
        icon: "palette",
        title: "Fully Customizable",
        description: "Tailor every aspect to match your brand perfectly."
      },
      {
        icon: "globe",
        title: "Global Scale",
        description: "Deploy worldwide with our distributed infrastructure."
      }
    ]
  },
  testimonials: {
    title: "What Our Customers Say",
    subtitle: "Join thousands of satisfied users",
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "CEO, TechCorp",
        content: "This platform has transformed how we work. The results speak for themselves.",
        rating: 5
      },
      {
        name: "Michael Chen",
        role: "Designer, Creative Co",
        content: "Incredible tool that saved us countless hours. Highly recommended!",
        rating: 5
      },
      {
        name: "Emily Rodriguez",
        role: "Product Manager",
        content: "The best investment we've made this year. Outstanding support and features.",
        rating: 5
      }
    ]
  },
  cta: {
    headline: "Ready to Get Started?",
    subheadline: "Join thousands of users who are already building amazing things",
    primaryButton: "Start Free Trial",
    secondaryButton: "Contact Sales"
  },
  footer: {
    copyright: "© 2025 Your Company. All rights reserved."
  }
};

export default function App() {
  const [components, setComponents] = useState<PageComponent[]>([]);
  const [previewMode, setPreviewMode] = useState(false);
  const [editingComponent, setEditingComponent] = useState<PageComponent | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleAddComponent = (componentType: string) => {
    const newComponent: PageComponent = {
      id: `${componentType}-${Date.now()}`,
      type: componentType,
      content: JSON.parse(JSON.stringify(defaultContent[componentType]))
    };
    setComponents([...components, newComponent]);
  };

  const handleRemoveComponent = (id: string) => {
    setComponents(components.filter(c => c.id !== id));
  };

  const handleMoveComponent = (id: string, direction: "up" | "down") => {
    const index = components.findIndex(c => c.id === id);
    if (index === -1) return;

    const newComponents = [...components];
    const targetIndex = direction === "up" ? index - 1 : index + 1;

    if (targetIndex < 0 || targetIndex >= newComponents.length) return;

    [newComponents[index], newComponents[targetIndex]] = 
      [newComponents[targetIndex], newComponents[index]];

    setComponents(newComponents);
  };

  const handleEditComponent = (id: string) => {
    const component = components.find(c => c.id === id);
    if (component) {
      setEditingComponent(component);
    }
  };

  const handleSaveContent = (content: any) => {
    if (!editingComponent) return;

    setComponents(components.map(c => 
      c.id === editingComponent.id 
        ? { ...c, content }
        : c
    ));
  };

  const handleExportPDF = async () => {
    if (!canvasRef.current) return;

    try {
      setIsExporting(true);
      toast.loading("Generating PDF...");

      // Wait a bit for any transitions to complete
      await new Promise(resolve => setTimeout(resolve, 300));

      // Capture the canvas content
      const canvas = await html2canvas(canvasRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#f1f5f9"
      });

      // Calculate dimensions for PDF (A4 size)
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Create PDF
      const pdf = new jsPDF({
        orientation: imgHeight > imgWidth ? "portrait" : "portrait",
        unit: "mm",
        format: "a4"
      });

      // Add image to PDF
      const imgData = canvas.toDataURL("image/png");
      
      // If content is longer than one page, add multiple pages
      let heightLeft = imgHeight;
      let position = 0;
      const pageHeight = 297; // A4 height in mm

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Download PDF
      pdf.save("landing-page.pdf");
      
      toast.dismiss();
      toast.success("PDF exported successfully!");
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.dismiss();
      toast.error("Failed to export PDF");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="size-full flex">
      {!previewMode && (
        <ComponentLibrary onAddComponent={handleAddComponent} />
      )}
      
      <div className="flex-1 flex flex-col">
        <div className="border-b border-border bg-card px-6 py-3 flex items-center justify-between">
          <h1 className="text-xl">Landing Page Builder</h1>
          <div className="flex gap-2">
            <Button
              variant={previewMode ? "default" : "outline"}
              onClick={() => setPreviewMode(!previewMode)}
            >
              <Eye className="w-4 h-4 mr-2" />
              {previewMode ? "Exit Preview" : "Preview"}
            </Button>
            <Button 
              variant="outline" 
              disabled={components.length === 0 || isExporting}
              onClick={handleExportPDF}
            >
              <Download className="w-4 h-4 mr-2" />
              {isExporting ? "Exporting..." : "Export PDF"}
            </Button>
          </div>
        </div>
        
        <Canvas
          ref={canvasRef}
          components={components}
          onRemoveComponent={handleRemoveComponent}
          onMoveComponent={handleMoveComponent}
          onEditComponent={handleEditComponent}
          previewMode={previewMode}
        />
      </div>

      {editingComponent && (
        <ComponentEditor
          open={!!editingComponent}
          onClose={() => setEditingComponent(null)}
          componentType={editingComponent.type}
          content={editingComponent.content}
          onSave={handleSaveContent}
        />
      )}
      
      <Toaster />
    </div>
  );
}
