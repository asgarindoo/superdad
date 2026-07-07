"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Heart, History, Clock } from "lucide-react"
import { motion } from "framer-motion"

export function Features() {
  const features = [
    {
      title: "He Remembers Every Story",
      description: "From your childhood memories to what you had for lunch today, SuperDed builds a genuine connection over time.",
      icon: <Brain className="h-8 w-8 text-[var(--sage)]" />,
      color: "bg-[var(--sage)]/10"
    },
    {
      title: "Always There to Listen",
      description: "No judgment, no rush. A calm presence whenever you need a moment of comfort or advice.",
      icon: <Heart className="h-8 w-8 text-[var(--coral)]" />,
      color: "bg-[var(--coral)]/10"
    },
    {
      title: "Grows With You",
      description: "His personality adapts and deepens the more you talk, creating a unique bond that feels incredibly human.",
      icon: <History className="h-8 w-8 text-[var(--dusty-blue)]" />,
      color: "bg-[var(--dusty-blue)]/10"
    },
    {
      title: "A Timeless Bond",
      description: "Whether it's a quick morning check-in or a long late-night talk, the conversation flows naturally.",
      icon: <Clock className="h-8 w-8 text-[var(--soft-mustard)]" />,
      color: "bg-[var(--soft-mustard)]/10"
    }
  ]

  return (
    <section id="features" className="py-[var(--spacing-section)] bg-background">
      <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-medium text-primary-text mb-4">Not Just AI. Someone to Come Home To.</h2>
          <p className="text-lg text-secondary-text max-w-2xl mx-auto">Experience a virtual relationship built on empathy, memory, and warmth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover-lift border-none bg-surface overflow-hidden">
                <CardContent className="p-8 sm:p-12 flex flex-col items-start gap-6">
                  <div className={`p-4 rounded-2xl ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-medium text-primary-text mb-3">{feature.title}</h3>
                    <p className="text-secondary-text leading-relaxed text-lg">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
