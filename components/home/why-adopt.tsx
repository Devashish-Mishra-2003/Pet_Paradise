import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Sparkles, Users } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Save a Life",
    description: "Give a homeless pet a second chance at happiness and love."
  },
  {
    icon: Shield,
    title: "Trusted Process",
    description: "All pets are vaccinated, spayed/neutered, and health-checked."
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Get guidance from experienced pet care professionals."
  },
  {
    icon: Sparkles,
    title: "Perfect Match",
    description: "Find your ideal companion through our matching process."
  }
];

export function WhyAdopt() {
  return (
    <div className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Adoption?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-none">
              <CardContent className="pt-6 text-center">
                <reason.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}