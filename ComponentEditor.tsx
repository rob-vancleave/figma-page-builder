import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

interface ComponentEditorProps {
  open: boolean;
  onClose: () => void;
  componentType: string;
  content: any;
  onSave: (content: any) => void;
}

export function ComponentEditor({
  open,
  onClose,
  componentType,
  content,
  onSave,
}: ComponentEditorProps) {
  const [editedContent, setEditedContent] = useState(content);

  useEffect(() => {
    setEditedContent(content);
  }, [content]);

  const handleSave = () => {
    onSave(editedContent);
    onClose();
  };

  const updateField = (field: string, value: any) => {
    setEditedContent({ ...editedContent, [field]: value });
  };

  const updateArrayItem = (arrayField: string, index: number, itemField: string, value: any) => {
    const newArray = [...editedContent[arrayField]];
    newArray[index] = { ...newArray[index], [itemField]: value };
    setEditedContent({ ...editedContent, [arrayField]: newArray });
  };

  const renderHeroEditor = () => (
    <div className="space-y-4">
      <div>
        <Label>Headline</Label>
        <Input
          value={editedContent.headline || ""}
          onChange={(e) => updateField("headline", e.target.value)}
          className="mt-1"
        />
      </div>
      <div>
        <Label>Subheadline</Label>
        <Textarea
          value={editedContent.subheadline || ""}
          onChange={(e) => updateField("subheadline", e.target.value)}
          className="mt-1"
          rows={3}
        />
      </div>
      <div>
        <Label>Primary Button Text</Label>
        <Input
          value={editedContent.primaryButton || ""}
          onChange={(e) => updateField("primaryButton", e.target.value)}
          className="mt-1"
        />
      </div>
      <div>
        <Label>Secondary Button Text</Label>
        <Input
          value={editedContent.secondaryButton || ""}
          onChange={(e) => updateField("secondaryButton", e.target.value)}
          className="mt-1"
        />
      </div>
    </div>
  );

  const renderFeaturesEditor = () => (
    <div className="space-y-4">
      <div>
        <Label>Section Title</Label>
        <Input
          value={editedContent.title || ""}
          onChange={(e) => updateField("title", e.target.value)}
          className="mt-1"
        />
      </div>
      <div>
        <Label>Section Subtitle</Label>
        <Input
          value={editedContent.subtitle || ""}
          onChange={(e) => updateField("subtitle", e.target.value)}
          className="mt-1"
        />
      </div>
      {editedContent.features?.map((feature: any, index: number) => (
        <div key={index} className="border border-border rounded-lg p-4 space-y-3">
          <h4>Feature {index + 1}</h4>
          <div>
            <Label>Title</Label>
            <Input
              value={feature.title || ""}
              onChange={(e) => updateArrayItem("features", index, "title", e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label>Description</Label>
            <Textarea
              value={feature.description || ""}
              onChange={(e) => updateArrayItem("features", index, "description", e.target.value)}
              className="mt-1"
              rows={2}
            />
          </div>
        </div>
      ))}
    </div>
  );

  const renderTestimonialsEditor = () => (
    <div className="space-y-4">
      <div>
        <Label>Section Title</Label>
        <Input
          value={editedContent.title || ""}
          onChange={(e) => updateField("title", e.target.value)}
          className="mt-1"
        />
      </div>
      <div>
        <Label>Section Subtitle</Label>
        <Input
          value={editedContent.subtitle || ""}
          onChange={(e) => updateField("subtitle", e.target.value)}
          className="mt-1"
        />
      </div>
      {editedContent.testimonials?.map((testimonial: any, index: number) => (
        <div key={index} className="border border-border rounded-lg p-4 space-y-3">
          <h4>Testimonial {index + 1}</h4>
          <div>
            <Label>Name</Label>
            <Input
              value={testimonial.name || ""}
              onChange={(e) => updateArrayItem("testimonials", index, "name", e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label>Role</Label>
            <Input
              value={testimonial.role || ""}
              onChange={(e) => updateArrayItem("testimonials", index, "role", e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label>Content</Label>
            <Textarea
              value={testimonial.content || ""}
              onChange={(e) => updateArrayItem("testimonials", index, "content", e.target.value)}
              className="mt-1"
              rows={2}
            />
          </div>
        </div>
      ))}
    </div>
  );

  const renderCTAEditor = () => (
    <div className="space-y-4">
      <div>
        <Label>Headline</Label>
        <Input
          value={editedContent.headline || ""}
          onChange={(e) => updateField("headline", e.target.value)}
          className="mt-1"
        />
      </div>
      <div>
        <Label>Subheadline</Label>
        <Textarea
          value={editedContent.subheadline || ""}
          onChange={(e) => updateField("subheadline", e.target.value)}
          className="mt-1"
          rows={2}
        />
      </div>
      <div>
        <Label>Primary Button Text</Label>
        <Input
          value={editedContent.primaryButton || ""}
          onChange={(e) => updateField("primaryButton", e.target.value)}
          className="mt-1"
        />
      </div>
      <div>
        <Label>Secondary Button Text</Label>
        <Input
          value={editedContent.secondaryButton || ""}
          onChange={(e) => updateField("secondaryButton", e.target.value)}
          className="mt-1"
        />
      </div>
    </div>
  );

  const renderOverviewEditor = () => (
    <div className="space-y-4">
      <div>
        <Label>Tagline</Label>
        <Input
          value={editedContent.tagline || ""}
          onChange={(e) => updateField("tagline", e.target.value)}
          className="mt-1"
        />
      </div>
      <div>
        <Label>Heading</Label>
        <Textarea
          value={editedContent.heading || ""}
          onChange={(e) => updateField("heading", e.target.value)}
          className="mt-1"
          rows={2}
        />
      </div>
      <div>
        <Label>Description</Label>
        <Textarea
          value={editedContent.description || ""}
          onChange={(e) => updateField("description", e.target.value)}
          className="mt-1"
          rows={3}
        />
      </div>
      {editedContent.columns?.map((column: any, index: number) => (
        <div key={index} className="border border-border rounded-lg p-4 space-y-3">
          <h4>Column {index + 1}</h4>
          <div>
            <Label>Heading</Label>
            <Textarea
              value={column.heading || ""}
              onChange={(e) => updateArrayItem("columns", index, "heading", e.target.value)}
              className="mt-1"
              rows={2}
            />
          </div>
          <div>
            <Label>Description</Label>
            <Textarea
              value={column.description || ""}
              onChange={(e) => updateArrayItem("columns", index, "description", e.target.value)}
              className="mt-1"
              rows={3}
            />
          </div>
        </div>
      ))}
      <div>
        <Label>Primary Button Text</Label>
        <Input
          value={editedContent.primaryButton || ""}
          onChange={(e) => updateField("primaryButton", e.target.value)}
          className="mt-1"
        />
      </div>
      <div>
        <Label>Secondary Button Text</Label>
        <Input
          value={editedContent.secondaryButton || ""}
          onChange={(e) => updateField("secondaryButton", e.target.value)}
          className="mt-1"
        />
      </div>
    </div>
  );

  const renderFooterEditor = () => (
    <div className="space-y-4">
      <div>
        <Label>Copyright Text</Label>
        <Input
          value={editedContent.copyright || ""}
          onChange={(e) => updateField("copyright", e.target.value)}
          className="mt-1"
        />
      </div>
    </div>
  );

  const renderEditor = () => {
    switch (componentType) {
      case "hero":
        return renderHeroEditor();
      case "overview":
        return renderOverviewEditor();
      case "features":
        return renderFeaturesEditor();
      case "testimonials":
        return renderTestimonialsEditor();
      case "cta":
        return renderCTAEditor();
      case "footer":
        return renderFooterEditor();
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Component</DialogTitle>
          <DialogDescription>
            Customize the text content for this section
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">{renderEditor()}</div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
