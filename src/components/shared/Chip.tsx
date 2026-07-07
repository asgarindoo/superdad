"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  ({ className, active, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium transition-all",
          "border hover-lift",
          active
            ? "bg-primary text-primary-foreground border-primary shadow-soft"
            : "bg-surface text-secondary-foreground border-border hover:bg-muted",
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Chip.displayName = "Chip"
