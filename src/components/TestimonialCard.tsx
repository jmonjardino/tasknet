import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating?: number;
}

const TestimonialCard = ({ name, role, company, content, rating = 5 }: TestimonialCardProps) => {
  return (
    <Card className="h-full border-border hover:border-primary/50 transition-all duration-300">
      <CardContent className="p-6">
        <Quote className="h-8 w-8 text-primary/20 mb-4" />
        
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
          ))}
        </div>

        <p className="text-muted-foreground mb-6 italic">"{content}"</p>

        <div className="border-t border-border pt-4">
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">
            {role} • {company}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
