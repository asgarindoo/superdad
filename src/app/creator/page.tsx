"use client"

import * as React from "react"
import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { CharacterModel } from "@/components/creator/CharacterModel"
import { FloatingPanel } from "@/components/shared/FloatingPanel"
import { Chip } from "@/components/shared/Chip"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Check, Palette, Scissors, Eye, User, Shirt, Mic, Heart, Type } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

type Category = 'Name' | 'Skin Tone' | 'Hair' | 'Eyes' | 'Beard' | 'Clothing' | 'Voice' | 'Personality'

const COLORS = {
  skin: ["#FAD6B1", "#E2B98F", "#C68E5C", "#8D5524", "#3D2314"],
  hair: ["#2C222B", "#5C3836", "#A8715A", "#DDC0A3", "#E3E3E3"],
  eye: ["#4F3523", "#4A6B8C", "#5C755E", "#3A3A3A"],
  cloth: ["#72B38A", "#7FAFD9", "#E97B57", "#2C3E50", "#EAEAEA"]
}

export default function CreatorPage() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState<Category | null>(null)

  // Character State
  const [name, setName] = useState("Dad")
  const [skinTone, setSkinTone] = useState(COLORS.skin[1])
  const [hairColor, setHairColor] = useState(COLORS.hair[0])
  const [hairStyle, setHairStyle] = useState("short")
  const [eyeColor, setEyeColor] = useState(COLORS.eye[0])
  const [clothingColor, setClothingColor] = useState(COLORS.cloth[0])
  const [hasBeard, setHasBeard] = useState(true)
  const [voice, setVoice] = useState("Deep & Warm")
  const [personality, setPersonality] = useState("Wise")

  const categories = [
    { id: 'Name', icon: <Type className="w-5 h-5" /> },
    { id: 'Skin Tone', icon: <Palette className="w-5 h-5" /> },
    { id: 'Hair', icon: <Scissors className="w-5 h-5" /> },
    { id: 'Beard', icon: <User className="w-5 h-5" /> },
    { id: 'Eyes', icon: <Eye className="w-5 h-5" /> },
    { id: 'Clothing', icon: <Shirt className="w-5 h-5" /> },
    { id: 'Voice', icon: <Mic className="w-5 h-5" /> },
    { id: 'Personality', icon: <Heart className="w-5 h-5" /> }
  ]

  const handleFinish = () => {
    router.push('/room')
  }

  const renderOptions = () => {
    switch (activeCategory) {
      case 'Name':
        return (
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium text-secondary-text">What do you call him?</label>
            <Input 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="bg-background/50 h-12 text-lg"
              autoFocus
            />
          </div>
        )
      case 'Skin Tone':
        return (
          <div className="flex gap-3">
            {COLORS.skin.map(color => (
              <button 
                key={color} 
                onClick={() => setSkinTone(color)}
                className={`w-12 h-12 rounded-full shadow-soft transition-transform hover:scale-110 ${skinTone === color ? 'ring-2 ring-primary ring-offset-2 ring-offset-card' : ''}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )
      case 'Hair':
        return (
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              {['short', 'long', 'bald'].map(style => (
                <Chip key={style} active={hairStyle === style} onClick={() => setHairStyle(style)} className="capitalize">
                  {style}
                </Chip>
              ))}
            </div>
            {hairStyle !== 'bald' && (
              <div className="flex gap-3 pt-2 border-t border-border/50">
                {COLORS.hair.map(color => (
                  <button 
                    key={color} 
                    onClick={() => setHairColor(color)}
                    className={`w-10 h-10 rounded-full shadow-soft transition-transform hover:scale-110 ${hairColor === color ? 'ring-2 ring-primary ring-offset-2 ring-offset-card' : ''}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}
          </div>
        )
      case 'Eyes':
        return (
          <div className="flex gap-3">
            {COLORS.eye.map(color => (
              <button 
                key={color} 
                onClick={() => setEyeColor(color)}
                className={`w-12 h-12 rounded-full shadow-soft transition-transform hover:scale-110 ${eyeColor === color ? 'ring-2 ring-primary ring-offset-2 ring-offset-card' : ''}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )
      case 'Beard':
        return (
          <div className="flex gap-2">
            <Chip active={hasBeard} onClick={() => setHasBeard(true)}>Beard</Chip>
            <Chip active={!hasBeard} onClick={() => setHasBeard(false)}>Clean Shaven</Chip>
          </div>
        )
      case 'Clothing':
        return (
          <div className="flex gap-3">
            {COLORS.cloth.map(color => (
              <button 
                key={color} 
                onClick={() => setClothingColor(color)}
                className={`w-12 h-12 rounded-full shadow-soft transition-transform hover:scale-110 ${clothingColor === color ? 'ring-2 ring-primary ring-offset-2 ring-offset-card' : ''}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )
      case 'Voice':
        return (
          <div className="flex flex-wrap gap-2">
            {["Deep & Warm", "Soft & Calm", "Gruff & Strong", "Friendly & Upbeat"].map(v => (
              <Chip key={v} active={voice === v} onClick={() => setVoice(v)}>{v}</Chip>
            ))}
          </div>
        )
      case 'Personality':
        return (
          <div className="flex flex-wrap gap-2">
            {["Wise", "Goofy", "Practical", "Stoic", "Empathetic"].map(p => (
              <Chip key={p} active={personality === p} onClick={() => setPersonality(p)}>{p}</Chip>
            ))}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#F5F4F0]">
      
      {/* 3D Canvas (Background) */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows camera={{ position: [0, 2, 8], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} intensity={0.8} castShadow />
          <Environment preset="city" />
          
          <CharacterModel 
            skinTone={skinTone}
            hairColor={hairColor}
            hairStyle={hairStyle}
            clothingColor={clothingColor}
            hasBeard={hasBeard}
            eyeColor={eyeColor}
          />

          <OrbitControls 
            enableZoom={true} 
            minDistance={4}
            maxDistance={10}
            enablePan={false} 
            maxPolarAngle={Math.PI / 1.5} 
            minPolarAngle={Math.PI / 4}
          />
        </Canvas>
      </div>

      {/* Top Bar */}
      <div className="absolute top-6 left-6 right-6 z-10 flex justify-between items-start pointer-events-none">
        <Link href="/" className="pointer-events-auto">
          <FloatingPanel className="p-3 rounded-full hover:bg-background/90 transition-colors flex items-center gap-2">
            <ArrowLeft className="w-5 h-5 text-secondary-text" />
          </FloatingPanel>
        </Link>
        
        <div className="pointer-events-auto">
          <Button onClick={handleFinish} className="rounded-[var(--radius-button)] shadow-soft h-12 px-6 hover-lift gap-2 text-base">
            <Check className="w-5 h-5" /> Finish
          </Button>
        </div>
      </div>

      {/* Cinematic Name Display */}
      <div className="absolute top-1/4 left-12 z-10 pointer-events-none max-w-sm">
        <motion.h1 
          key={name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-heading font-medium text-primary-text drop-shadow-sm"
        >
          {name}
        </motion.h1>
        <p className="text-secondary-text text-lg mt-2 font-medium capitalize">{personality} • {voice}</p>
      </div>

      {/* Bottom AAA-style UI */}
      <div className="absolute bottom-6 left-0 w-full z-10 flex flex-col items-center gap-4 pointer-events-none">
        
        {/* Contextual Options Panel */}
        <AnimatePresence mode="wait">
          {activeCategory && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="pointer-events-auto"
            >
              <FloatingPanel className="px-6 py-4 min-w-[300px]">
                <h3 className="text-sm font-medium text-primary-text mb-3">{activeCategory}</h3>
                {renderOptions()}
              </FloatingPanel>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Category Bar */}
        <FloatingPanel className="pointer-events-auto flex items-center gap-1 sm:gap-2 p-2 mx-4 overflow-x-auto max-w-[calc(100%-2rem)] hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(activeCategory === cat.id as Category ? null : cat.id as Category)}
              className={`flex flex-col items-center justify-center min-w-[72px] p-3 rounded-[var(--radius-button)] transition-all ${
                activeCategory === cat.id 
                  ? 'bg-primary text-primary-foreground shadow-soft' 
                  : 'hover:bg-muted text-secondary-text'
              }`}
            >
              {cat.icon}
              <span className="text-xs font-medium mt-1">{cat.id}</span>
            </button>
          ))}
        </FloatingPanel>
      </div>

    </div>
  )
}
