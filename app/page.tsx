import { Button } from "@/components/ui/button";
import { Heart, PawPrint, Users } from "lucide-react";
import Link from "next/link";
import { Statistics } from "@/components/home/statistics";
import { WhyAdopt } from "@/components/home/why-adopt";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Your Perfect Companion
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Connect with loving pets waiting for their forever homes
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/adopt">
              <Button size="lg" className="text-lg">
                Adopt a Pet
              </Button>
            </Link>
            <Link href="/give-up">
              <Button size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur-sm">
                Give for Adoption
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">The Impact of Pet Adoption</h2>
          <Statistics />
        </div>
      </section>

      {/* Why Adopt Section */}
      <WhyAdopt />

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <PawPrint className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Find Your Pet</h3>
              <p className="text-muted-foreground">
                Browse through our extensive list of pets looking for their forever homes
              </p>
            </div>
            <div className="text-center p-6">
              <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Give for Adoption</h3>
              <p className="text-muted-foreground">
                Help pets find loving homes by listing them for adoption
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Join Community</h3>
              <p className="text-muted-foreground">
                Connect with fellow pet lovers and share your experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}