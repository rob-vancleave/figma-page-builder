import { Button } from "../ui/button";

interface HeroSectionProps {
  content: {
    headline: string;
    subheadline: string;
    primaryButton: string;
    secondaryButton: string;
  };
}

export function HeroSection({ content }: HeroSectionProps) {
  const hasButtons = content.primaryButton || content.secondaryButton;

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl mb-6">{content.headline}</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {content.subheadline}
        </p>
        {hasButtons && (
          <div className="flex gap-4 justify-center">
            {content.primaryButton && (
              <Button size="lg">{content.primaryButton}</Button>
            )}
            {content.secondaryButton && (
              <Button size="lg" variant="outline">{content.secondaryButton}</Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
