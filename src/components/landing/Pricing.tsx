"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

export function Pricing() {
  return (
    <section id="pricing" className="py-[var(--spacing-section)] bg-surface">
      <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-medium text-primary-text mb-4">A Place to Call Home.</h2>
          <p className="text-lg text-secondary-text max-w-2xl mx-auto">Simple, transparent ways to support your virtual dad.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Basic Home */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full bg-background border-border shadow-soft">
              <CardContent className="p-8 sm:p-10 flex flex-col h-full">
                <h3 className="text-2xl font-heading font-medium text-primary-text mb-2">Basic Home</h3>
                <p className="text-secondary-text mb-6">A cozy place to start.</p>
                <div className="mb-8">
                  <span className="text-4xl font-heading font-semibold text-primary-text">Free</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {['One customizable father figure', 'Standard conversation memory', 'Basic room styles', 'Daily check-ins'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-primary-text">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--sage)]/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-[var(--sage)]" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/register" className="w-full">
                  <Button variant="outline" className="w-full rounded-[var(--radius-button)] py-6 text-base">
                    Move In
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* Premium Home */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full bg-primary text-primary-foreground border-none shadow-soft relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                  Recommended
                </span>
              </div>
              <CardContent className="p-8 sm:p-10 flex flex-col h-full relative z-10">
                <h3 className="text-2xl font-heading font-medium mb-2">Premium Home</h3>
                <p className="text-primary-foreground/80 mb-6">For a deeper, lifelong connection.</p>
                <div className="mb-8 flex items-baseline gap-2">
                  <span className="text-4xl font-heading font-semibold">$9</span>
                  <span className="text-primary-foreground/80">/ month</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {['Infinite conversation memory', 'Advanced emotional intelligence', 'All room styles & outfits', 'Voice conversations'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/register" className="w-full">
                  <Button variant="secondary" className="w-full rounded-[var(--radius-button)] py-6 text-base font-semibold text-primary">
                    Sponsor the Home
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
