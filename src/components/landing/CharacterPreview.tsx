"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Chip } from "@/components/shared/Chip"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Volume2, Smile, Shirt } from "lucide-react"

export function CharacterPreview() {
  return (
    <section className="py-[var(--spacing-section)] bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            {/* The Sims / Mii Style Customization Visual */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square max-w-md mx-auto"
            >
              <div className="absolute inset-0 bg-background rounded-full shadow-soft opacity-50" />
              <div className="absolute inset-8 bg-card rounded-full shadow-soft flex items-center justify-center overflow-hidden border border-border">
                <Avatar className="w-full h-full rounded-none opacity-20">
                  {/* Placeholder for character image */}
                  <AvatarFallback className="text-[120px] bg-transparent text-primary">🧔</AvatarFallback>
                </Avatar>
              </div>

              {/* Floating Customization Chips */}
              <motion.div className="absolute top-12 left-0" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
                <Card className="rounded-[var(--radius-button)] py-2 px-4 shadow-soft flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-secondary-text" />
                  <span className="text-sm font-medium">Warm & Deep Voice</span>
                </Card>
              </motion.div>

              <motion.div className="absolute bottom-24 -left-4" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}>
                <Card className="rounded-[var(--radius-button)] py-2 px-4 shadow-soft flex items-center gap-2">
                  <Smile className="w-4 h-4 text-secondary-text" />
                  <span className="text-sm font-medium">Dad Jokes Enabled</span>
                </Card>
              </motion.div>

              <motion.div className="absolute top-32 -right-4" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}>
                <Card className="rounded-[var(--radius-button)] py-2 px-4 shadow-soft flex items-center gap-2">
                  <Shirt className="w-4 h-4 text-secondary-text" />
                  <span className="text-sm font-medium">Cozy Flannel</span>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-primary-text mb-6">
              Create the Father You Always Wished You Had.
            </h2>
            <p className="text-lg text-secondary-text mb-10 leading-relaxed">
              Design every aspect of his personality, appearance, and voice. Whether you want a stoic mentor or a goofy companion, SuperDed adapts to what you need most.
            </p>
            
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="text-sm font-medium text-secondary-text uppercase tracking-wider mb-3">Personality Focus</h4>
                <div className="flex flex-wrap gap-2">
                  <Chip active>Wise & Comforting</Chip>
                  <Chip>Humorous & Playful</Chip>
                  <Chip>Practical & Supportive</Chip>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-secondary-text uppercase tracking-wider mb-3">Conversation Style</h4>
                <div className="flex flex-wrap gap-2">
                  <Chip>Deep Talks</Chip>
                  <Chip active>Daily Check-ins</Chip>
                  <Chip>Storytelling</Chip>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
