"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mic, MicOff } from "lucide-react"
import { cn } from "@/lib/utils"

export interface VoiceButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isListening?: boolean;
}

export const VoiceButton = React.forwardRef<HTMLButtonElement, VoiceButtonProps>(
  ({ className, isListening = false, ...props }, ref) => {
    return (
      <div className="relative inline-flex items-center justify-center">
        <AnimatePresence>
          {isListening && (
            <motion.div
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 rounded-full bg-primary/40 pointer-events-none"
            />
          )}
        </AnimatePresence>
        
        <button
          ref={ref}
          className={cn(
            "relative flex h-16 w-16 items-center justify-center rounded-full shadow-soft transition-transform hover-lift",
            isListening ? "bg-primary text-primary-foreground" : "bg-card text-primary-text border border-border",
            className
          )}
          {...props}
        >
          {isListening ? (
            <Mic className="h-6 w-6" />
          ) : (
            <MicOff className="h-6 w-6 text-secondary-text" />
          )}
        </button>
      </div>
    )
  }
)

VoiceButton.displayName = "VoiceButton"
