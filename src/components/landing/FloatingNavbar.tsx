"use client"

import * as React from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Button } from "@/components/ui/button"

export function FloatingNavbar() {
  return (
    <div className="fixed top-6 left-1/2 z-50 w-full max-w-4xl -translate-x-1/2 px-4">
      <Navbar className="rounded-[var(--radius-modal)] shadow-soft border border-border bg-card/80 backdrop-blur-md">
        <div className="hidden sm:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium text-secondary-text hover:text-primary-text transition-colors">Features</a>
          <a href="#memories" className="text-sm font-medium text-secondary-text hover:text-primary-text transition-colors">Memories</a>
          <a href="#pricing" className="text-sm font-medium text-secondary-text hover:text-primary-text transition-colors">Pricing</a>
        </div>
        <Button variant="default" className="rounded-[var(--radius-button)]">
          Move In
        </Button>
      </Navbar>
    </div>
  )
}
