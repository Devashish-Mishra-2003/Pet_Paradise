"use client"

import { PawPrint } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <PawPrint className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">Pet Paradise</span>
        </Link>
        
        <div className="ml-auto flex items-center space-x-4">
          <Link href="/adopt">
            <Button variant="ghost">Find a Pet</Button>
          </Link>
          <Link href="/give-up">
            <Button variant="ghost">Give for Adoption</Button>
          </Link>
          <Link href="/community">
            <Button variant="ghost">Community</Button>
          </Link>
          <Link href="/organizations">
            <Button variant="ghost">Organizations</Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}