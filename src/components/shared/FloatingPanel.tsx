"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

export interface FloatingPanelProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export const FloatingPanel = React.forwardRef<HTMLDivElement, FloatingPanelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "rounded-[var(--radius-modal)] bg-card/80 backdrop-blur-md border border-border/50 shadow-soft p-4",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

FloatingPanel.displayName = "FloatingPanel"
