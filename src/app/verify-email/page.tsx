"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Heart } from "lucide-react"

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-4">
      <Link href="/" className="mb-8 flex items-center gap-2 group hover-lift">
        <Heart className="w-6 h-6 text-[var(--coral)] fill-current group-hover:scale-110 transition-transform" />
        <span className="font-heading text-xl font-medium text-primary-text">SuperDed</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border-border shadow-soft bg-card p-4 sm:p-6 text-center">
          <CardContent className="flex flex-col items-center gap-6 pt-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            
            <div>
              <h1 className="text-2xl font-heading font-medium text-primary-text mb-3">Check Your Mailbox</h1>
              <p className="text-secondary-text text-sm leading-relaxed">
                We've sent a special link to your email address. Click it to verify your account and step inside.
              </p>
            </div>

            <div className="w-full flex flex-col gap-3 mt-4">
              <Link href="/onboarding" className="w-full">
                <Button className="w-full h-12 text-base rounded-[var(--radius-button)] hover-lift">
                  I verified my email
                </Button>
              </Link>
              <Button variant="outline" className="w-full h-12 text-base rounded-[var(--radius-button)] hover-lift mt-2">
                Resend Email
              </Button>
              <Link href="/login" className="text-sm font-medium text-secondary-text hover:text-primary transition-colors mt-2">
                Back to Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
