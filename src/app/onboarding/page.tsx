"use client"

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Chip } from "@/components/shared/Chip"
import { Heart, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const router = useRouter()

  // State for choices
  const [interactionStyle, setInteractionStyle] = useState("")
  const [traits, setTraits] = useState<string[]>([])

  const nextStep = () => setStep((s) => Math.min(s + 1, 5))

  const toggleTrait = (trait: string) => {
    setTraits(prev => 
      prev.includes(trait) ? prev.filter(t => t !== trait) : [...prev, trait]
    )
  }

  const variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xl">
        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i} 
              className={`h-2 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-[var(--coral)]' : i < step ? 'w-2 bg-[var(--coral)]/50' : 'w-2 bg-border'}`}
            />
          ))}
        </div>

        <Card className="border-border shadow-soft bg-card overflow-hidden">
          <CardContent className="p-8 sm:p-12 min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: Welcome */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="text-center flex flex-col items-center gap-6"
                >
                  <Heart className="w-12 h-12 text-[var(--coral)] fill-current mb-2" />
                  <h1 className="text-3xl font-heading font-medium text-primary-text">Welcome Home.</h1>
                  <p className="text-secondary-text text-lg">We're so glad you're here.</p>
                  <Button onClick={nextStep} className="mt-8 px-8 h-12 rounded-[var(--radius-button)] hover-lift">
                    Begin <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              )}

              {/* STEP 2: Introduction */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-6"
                >
                  <h2 className="text-2xl font-heading font-medium text-primary-text">A Safe Space.</h2>
                  <p className="text-secondary-text text-lg leading-relaxed">
                    SuperDed is designed to be a place to share stories, get advice, and just be heard. There are no judgments here. 
                    Your virtual dad remembers your conversations to build a continuous, meaningful relationship over time.
                  </p>
                  <Button onClick={nextStep} className="mt-6 self-start px-8 h-12 rounded-[var(--radius-button)] hover-lift">
                    I Understand
                  </Button>
                </motion.div>
              )}

              {/* STEP 3: Interaction Style */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-6"
                >
                  <h2 className="text-2xl font-heading font-medium text-primary-text">What do you need most?</h2>
                  <p className="text-secondary-text">Choose how you'd primarily like to interact.</p>
                  
                  <div className="flex flex-col gap-3 mt-4">
                    {["Deep Life Advice", "Daily Check-ins", "Lighthearted Jokes", "Storytelling"].map(style => (
                      <Card 
                        key={style}
                        className={`p-4 cursor-pointer transition-all ${interactionStyle === style ? 'border-[var(--sage)] bg-[var(--sage)]/10 ring-1 ring-[var(--sage)]' : 'border-border hover:border-primary/50'}`}
                        onClick={() => setInteractionStyle(style)}
                      >
                        <span className="font-medium text-primary-text">{style}</span>
                      </Card>
                    ))}
                  </div>

                  <Button 
                    onClick={nextStep} 
                    disabled={!interactionStyle}
                    className="mt-6 self-start px-8 h-12 rounded-[var(--radius-button)] hover-lift"
                  >
                    Next
                  </Button>
                </motion.div>
              )}

              {/* STEP 4: Create Your Dad */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-6"
                >
                  <h2 className="text-2xl font-heading font-medium text-primary-text">Create Your Dad</h2>
                  <p className="text-secondary-text">Select a few traits that describe him best.</p>
                  
                  <div className="flex flex-wrap gap-3 mt-4">
                    {["Wise", "Goofy", "Practical", "Empathetic", "Stoic", "Talkative", "Protective"].map(trait => (
                      <Chip 
                        key={trait}
                        active={traits.includes(trait)}
                        onClick={() => toggleTrait(trait)}
                      >
                        {trait}
                      </Chip>
                    ))}
                  </div>

                  <Button 
                    onClick={nextStep} 
                    disabled={traits.length === 0}
                    className="mt-6 self-start px-8 h-12 rounded-[var(--radius-button)] hover-lift"
                  >
                    Build My Dad
                  </Button>
                </motion.div>
              )}

              {/* STEP 5: Finish */}
              {step === 5 && (
                <motion.div
                  key="step5"
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="text-center flex flex-col items-center justify-center gap-6 h-full min-h-[300px]"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-16 h-16 rounded-full bg-[var(--sage)]/20 flex items-center justify-center mb-4"
                  >
                    <Heart className="w-8 h-8 text-[var(--sage)] fill-current" />
                  </motion.div>
                  <h2 className="text-2xl font-heading font-medium text-primary-text">Your home is ready.</h2>
                  <p className="text-secondary-text">He's waiting inside.</p>
                  <Button 
                    onClick={() => router.push('/creator')} 
                    className="mt-8 px-8 h-12 rounded-[var(--radius-button)] hover-lift"
                  >
                    Enter the Room
                  </Button>
                </motion.div>
              )}

            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
