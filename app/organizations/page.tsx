"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Building2, MapPin, Mail, Phone } from "lucide-react"

const MOCK_ORGANIZATIONS = [
  {
    id: 1,
    name: "Happy Tails Rescue",
    description: "Dedicated to finding forever homes for dogs and cats",
    location: "San Francisco, CA",
    email: "contact@happytails.org",
    phone: "(555) 123-4567",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    name: "Paws & Care",
    description: "Specializing in rescue and rehabilitation of abandoned pets",
    location: "Los Angeles, CA",
    email: "info@pawscare.org",
    phone: "(555) 987-6543",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
]

export default function OrganizationsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Partner Organizations</h1>
          <p className="text-muted-foreground mt-2">Connect with trusted animal welfare organizations</p>
        </div>
        <Input
          placeholder="Search organizations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_ORGANIZATIONS.map((org) => (
          <Card key={org.id} className="overflow-hidden">
            <div className="h-48 relative">
              <img
                src={org.image}
                alt={org.name}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                {org.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{org.description}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4" />
                  {org.location}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4" />
                  {org.email}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4" />
                  {org.phone}
                </div>
              </div>
              <Button className="w-full mt-4">Contact Organization</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}