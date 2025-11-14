import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const CTASection = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: CTASectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-brand-blue-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="accent"
              size="lg"
              asChild
              className="bg-background text-primary hover:bg-background/90 group"
            >
              <Link to={primaryButtonLink}>
                {primaryButtonText}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            {secondaryButtonText && secondaryButtonLink && (
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
