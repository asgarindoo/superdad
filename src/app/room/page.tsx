"use client"

import * as React from "react"
import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { RoomEnvironment } from "@/components/room/RoomEnvironment"
import { FatherPlaceholder } from "@/components/room/FatherPlaceholder"
import { ConversationDock } from "@/components/room/ConversationDock"
import { ConversationCard, Message } from "@/components/room/ConversationCard"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"

export default function RoomPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState("")
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isListening, setIsListening] = useState(false)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputText.trim()) return

    const newMessage: Message = { id: Date.now().toString(), text: inputText, isUser: true }
    setMessages(prev => [...prev, newMessage])
    setInputText("")
    setIsChatOpen(false)

    // Simulate father response
    setTimeout(() => {
      const response: Message = { 
        id: (Date.now() + 1).toString(), 
        text: "I'm always here for you, kiddo. Tell me more about your day.", 
        isUser: false 
      }
      setMessages(prev => [...prev, response])
    }, 1500)
  }

  const handleRemoveMessage = (id: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== id))
  }

  const handleVoiceClick = () => {
    setIsListening(!isListening)
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false)
        const response: Message = { 
          id: Date.now().toString(), 
          text: "I'm listening. Take your time.", 
          isUser: false 
        }
        setMessages(prev => [...prev, response])
      }, 2000)
    }
  }

  return (
    <main className="relative w-full h-screen overflow-hidden bg-background">
      
      {/* 3D Environment */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows camera={{ position: [0, 1.5, 7], fov: 45 }}>
          <RoomEnvironment />
          <FatherPlaceholder />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            maxPolarAngle={Math.PI / 2} 
            minPolarAngle={Math.PI / 3}
            minAzimuthAngle={-Math.PI / 8}
            maxAzimuthAngle={Math.PI / 8}
          />
        </Canvas>
      </div>

      {/* Ephemeral Conversation Cards Overlay */}
      <div className="absolute inset-x-0 bottom-32 z-20 flex flex-col items-center justify-end pointer-events-none p-4">
        <div className="w-full max-w-2xl flex flex-col gap-4">
          <AnimatePresence>
            {messages.map(msg => (
              <div key={msg.id} className="pointer-events-auto">
                <ConversationCard 
                  message={msg} 
                  onComplete={handleRemoveMessage} 
                />
              </div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Chat Input Overlay (Appears when chat icon is clicked) */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-32 left-1/2 -translate-x-1/2 w-full max-w-lg z-30 px-4"
          >
            <form onSubmit={handleSendMessage} className="relative">
              <Input 
                autoFocus
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Share your thoughts..."
                className="w-full h-14 pl-6 pr-12 rounded-[var(--radius-modal)] bg-card/90 backdrop-blur-md shadow-soft border-border text-lg"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Floating Interaction Dock */}
      <ConversationDock 
        onChatClick={() => setIsChatOpen(!isChatOpen)}
        isListening={isListening}
        onVoiceClick={handleVoiceClick}
      />
    </main>
  )
}
