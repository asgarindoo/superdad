"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Heart, ArrowLeft } from "lucide-react"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-4 relative">
      <Link href="/login" className="absolute top-8 left-8 flex items-center gap-2 text-secondary-text hover:text-primary-text transition-colors">
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back</span>
      </Link>

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
        <Card className="border-border shadow-soft bg-card p-4 sm:p-6">
          <CardContent className="flex flex-col gap-6 pt-6">
            <div className="text-center">
              <h1 className="text-2xl font-heading font-medium text-primary-text mb-2">Find Your Way Back</h1>
              <p className="text-secondary-text text-sm">Enter your email and we'll send you a link to get back inside.</p>
            </div>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-primary-text" htmlFor="email">Email</label>
                <Input id="email" type="email" placeholder="you@example.com" className="h-12" />
              </div>

              <Button type="submit" className="w-full h-12 mt-2 text-base">
                Send Reset Link
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
