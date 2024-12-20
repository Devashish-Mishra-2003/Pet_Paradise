"use client"

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PETS } from "@/data/pets";
import { Heart } from "lucide-react";

export default function AdoptPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [petType, setPetType] = useState("all");
  const [size, setSize] = useState("all");

  const filteredPets = PETS.filter(pet => {
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = petType === "all" || pet.type.toLowerCase() === petType.toLowerCase();
    const matchesSize = size === "all" || pet.size.toLowerCase() === size.toLowerCase();
    return matchesSearch && matchesType && matchesSize;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Find Your Perfect Pet</h1>
      
      <div className="flex flex-wrap gap-4 mb-8">
        <Input
          placeholder="Search pets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Select value={petType} onValueChange={setPetType}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Pet type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Pets</SelectItem>
            <SelectItem value="dog">Dogs</SelectItem>
            <SelectItem value="cat">Cats</SelectItem>
          </SelectContent>
        </Select>
        <Select value={size} onValueChange={setSize}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sizes</SelectItem>
            <SelectItem value="small">Small</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="large">Large</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPets.map((pet) => (
          <Card key={pet.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-48 object-cover"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <CardTitle>{pet.name}</CardTitle>
                <Badge variant="secondary">{pet.type}</Badge>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{pet.breed} • {pet.age}</p>
                <div className="flex gap-2">
                  <Badge variant="outline">{pet.gender}</Badge>
                  <Badge variant="outline">{pet.size}</Badge>
                </div>
                <p className="text-sm mt-2">{pet.description}</p>
                <Button className="w-full mt-4">Meet {pet.name}</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}