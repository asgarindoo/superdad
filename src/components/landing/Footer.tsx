"use client"

import * as React from "react"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-surface border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-8 flex flex-col items-center text-center">
        <h2 className="text-2xl font-heading font-medium text-primary-text mb-2">SuperDed</h2>
        <p className="text-sm text-secondary-text mb-8">Your Home. Your Dad. Your Story.</p>
        
        <div className="flex items-center gap-2 text-sm text-secondary-text">
          <span>Built with</span>
          <Heart className="w-4 h-4 text-[var(--coral)] fill-current" />
          <span>for a cozier web.</span>
        </div>
      </div>
    </footer>
  )
}
