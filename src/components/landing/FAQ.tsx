"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function FAQ() {
  const faqs = [
    {
      question: "Is this a chatbot?",
      answer: "No. SuperDed is designed to be a virtual companion and father figure. While it uses AI, the interface, memory retention, and emotional design make it feel like an ongoing relationship, not a transactional tool."
    },
    {
      question: "Will he remember me?",
      answer: "Yes. He remembers your stories, your preferences, and your past conversations, creating a continuous thread of connection."
    },
    {
      question: "Can I customize how he looks and talks?",
      answer: "Absolutely. You can choose his voice, his personality traits (from wise to goofy), and the style of the room he lives in."
    },
    {
      question: "Is my data private?",
      answer: "Your conversations are private and securely stored. We believe a home should be a safe space."
    }
  ]

  return (
    <section className="py-[var(--spacing-section)] bg-background">
      <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-medium text-primary-text mb-4">Common Questions</h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-[var(--radius-card)] bg-surface hover-lift border border-transparent hover:border-border transition-colors cursor-default"
            >
              <h4 className="text-lg font-heading font-medium text-primary-text mb-2">{faq.question}</h4>
              <p className="text-secondary-text leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
