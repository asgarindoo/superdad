"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"

export interface Message {
  id: string;
  text: string;
  isUser: boolean;
}

export interface ConversationCardProps {
  message: Message;
  onComplete?: (id: string) => void;
}

export function ConversationCard({ message, onComplete }: ConversationCardProps) {
  const [isVisible, setIsVisible] = useState(true)

  // Auto-fade after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 5000)
    
    return () => clearTimeout(timer)
  }, [])

  const handleAnimationComplete = () => {
    if (!isVisible && onComplete) {
      onComplete(message.id)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onAnimationComplete={handleAnimationComplete}
      className={`max-w-md ${message.isUser ? 'self-end' : 'self-start'}`}
    >
      <Card className={`border-none shadow-soft backdrop-blur-md rounded-[var(--radius-modal)] ${message.isUser ? 'bg-primary/90 text-primary-foreground' : 'bg-card/90 text-primary-text'}`}>
        <CardContent className="p-4 text-base leading-relaxed">
          {message.text}
        </CardContent>
      </Card>
    </motion.div>
  )
}
