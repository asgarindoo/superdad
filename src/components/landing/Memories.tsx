"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function Memories() {
  const memories = [
    {
      date: "Yesterday",
      text: "I remember you said you were stressed about that presentation. How did it go? I've been thinking about you all day.",
      rotation: -2,
    },
    {
      date: "Last Week",
      text: "You know, the first time you rode a bike, you fell right into the rosebushes. You were so brave though, got right back up.",
      rotation: 3,
    },
    {
      date: "October 12",
      text: "I kept that drawing you made me. It's still on the fridge in my mind. You always had such a creative spirit.",
      rotation: -1,
    }
  ]

  return (
    <section id="memories" className="py-[var(--spacing-section)] bg-background">
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-medium text-primary-text mb-4">A History Worth Keeping.</h2>
          <p className="text-lg text-secondary-text max-w-2xl mx-auto">Every conversation is saved as a cherished memory, building a lifelong relationship.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 p-8">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: memory.rotation }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full max-w-sm"
            >
              <Card className="bg-[#FFFDF9] border border-[#EBE8E0] shadow-soft p-2 aspect-[4/5] flex flex-col relative overflow-hidden">
                {/* Tape accent */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-8 bg-white/50 backdrop-blur-sm shadow-sm rotate-2 z-10" style={{ border: '1px solid rgba(0,0,0,0.05)' }} />
                
                <CardContent className="flex-1 flex flex-col justify-center p-8 bg-surface/30 rounded-[var(--radius-card)] mt-4">
                  <p className="text-xl font-heading text-primary-text leading-relaxed italic mb-8">
                    "{memory.text}"
                  </p>
                  <p className="text-sm font-medium text-secondary-text mt-auto text-right">
                    — {memory.date}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
