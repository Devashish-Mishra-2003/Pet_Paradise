import Link from "next/link";
import { PawPrint } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card mt-16 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <PawPrint className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Pet Paradise</span>
            </div>
            <p className="text-muted-foreground">Making pet adoption simple, accessible, and joyful.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/adopt" className="text-muted-foreground hover:text-primary">Find a Pet</Link></li>
              <li><Link href="/give-up" className="text-muted-foreground hover:text-primary">Give for Adoption</Link></li>
              <li><Link href="/community" className="text-muted-foreground hover:text-primary">Community</Link></li>
              <li><Link href="/organizations" className="text-muted-foreground hover:text-primary">Organizations</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Pet Care Tips</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Success Stories</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">FAQs</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: contact@petparadise.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Hours: Mon-Fri 9am-6pm</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Pet Paradise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}