"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  children?: React.ReactNode;
}

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, logo, children, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          "sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm",
          className
        )}
        {...props}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-4">
            {logo ? (
              logo
            ) : (
              <span className="font-heading text-lg font-semibold tracking-tight">SuperDed</span>
            )}
          </div>
          <nav className="flex items-center gap-4">
            {children}
          </nav>
        </div>
      </header>
    )
  }
)

Navbar.displayName = "Navbar"
