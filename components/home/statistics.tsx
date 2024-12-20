import { Heart, SmilePlus, Users, PawPrint } from "lucide-react";

const stats = [
  {
    icon: SmilePlus,
    value: "87%",
    label: "Pet owners report improved mental health",
    description: "According to recent studies"
  },
  {
    icon: Heart,
    value: "6.5M",
    label: "Pets find homes annually",
    description: "Through adoption centers"
  },
  {
    icon: Users,
    value: "92%",
    label: "Feel more connected to their community",
    description: "After adopting a pet"
  },
  {
    icon: PawPrint,
    value: "15+",
    label: "Years of companionship",
    description: "Average pet lifespan"
  }
];

export function Statistics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-card p-6 rounded-lg text-center">
          <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
          <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
          <p className="font-medium mb-1">{stat.label}</p>
          <p className="text-sm text-muted-foreground">{stat.description}</p>
        </div>
      ))}
    </div>
  );
}