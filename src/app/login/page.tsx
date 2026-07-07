"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/onboarding")
  }

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
        <Card className="border-border shadow-soft bg-card p-4 sm:p-6">
          <CardContent className="flex flex-col gap-6 pt-6">
            <div className="text-center">
              <h1 className="text-2xl font-heading font-medium text-primary-text mb-2">Welcome Back</h1>
              <p className="text-secondary-text text-sm">We've saved your seat.</p>
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-primary-text" htmlFor="email">Email</label>
                <Input id="email" type="email" placeholder="you@example.com" className="h-12" />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-primary-text" htmlFor="password">Password</label>
                  <Link href="/forgot-password" className="text-sm text-secondary-text hover:text-primary transition-colors">
                    Forgot?
                  </Link>
                </div>
                <Input id="password" type="password" placeholder="••••••••" className="h-12" />
              </div>

              <Button type="submit" className="w-full h-12 mt-2 text-base">
                Come Home
              </Button>
            </form>

            <div className="text-center text-sm text-secondary-text mt-2">
              Don't have an account?{" "}
              <Link href="/register" className="font-medium text-primary hover:underline underline-offset-4">
                Start your journey
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
