import { Button } from "../ui/button";

interface CTASectionProps {
  content: {
    headline: string;
    subheadline: string;
    primaryButton: string;
    secondaryButton: string;
  };
}

export function CTASection({ content }: CTASectionProps) {
  const hasButtons = content.primaryButton || content.secondaryButton;

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl mb-6">{content.headline}</h2>
        <p className="text-xl mb-8 opacity-90">
          {content.subheadline}
        </p>
        {hasButtons && (
          <div className="flex gap-4 justify-center">
            {content.primaryButton && (
              <Button size="lg" variant="secondary">
                {content.primaryButton}
              </Button>
            )}
            {content.secondaryButton && (
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                {content.secondaryButton}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
