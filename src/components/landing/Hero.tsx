"use client"

import * as React from "react"
import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, ContactShadows, RoundedBox } from "@react-three/drei"
import { Chip } from "@/components/shared/Chip"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const ROOM_STYLES = {
  scandinavian: { color: "#FCFCFA", light: "#ECECE8", name: "Scandinavian" },
  japanese: { color: "#72B38A", light: "#E7C25B", name: "Japanese" },
  coastal: { color: "#7FAFD9", light: "#FFFFFF", name: "Coastal" },
  cabin: { color: "#E97B57", light: "#F08C83", name: "Cabin" },
}

function RoomPlaceholder({ styleKey }: { styleKey: keyof typeof ROOM_STYLES }) {
  const currentStyle = ROOM_STYLES[styleKey]

  return (
    <group position={[0, -1, 0]}>
      {/* Floor */}
      <mesh receiveShadow position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color={currentStyle.color} />
      </mesh>
      
      {/* Walls */}
      <mesh receiveShadow position={[0, 2, -5]}>
        <boxGeometry args={[10, 5, 0.5]} />
        <meshStandardMaterial color={currentStyle.color} />
      </mesh>
      <mesh receiveShadow position={[-5, 2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[10, 5, 0.5]} />
        <meshStandardMaterial color={currentStyle.light} />
      </mesh>

      {/* Stylized Furniture Piece (Couch/Chair) */}
      <RoundedBox args={[2, 1, 1]} position={[-1, 0, -2]} radius={0.1} smoothness={4} castShadow>
        <meshStandardMaterial color={currentStyle.light} />
      </RoundedBox>

      {/* Character Placeholder (SuperDed) */}
      <RoundedBox args={[0.8, 2, 0.8]} position={[1, 0.5, -1]} radius={0.4} smoothness={4} castShadow>
        <meshStandardMaterial color="#202020" />
      </RoundedBox>

      <ContactShadows position={[0, -0.49, 0]} opacity={0.4} scale={10} blur={2} far={4} />
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} castShadow />
      <Environment preset="city" />
    </group>
  )
}

export function Hero() {
  const [roomStyle, setRoomStyle] = useState<keyof typeof ROOM_STYLES>("scandinavian")

  return (
    <section className="relative w-full h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden bg-surface">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing">
        <Canvas shadows camera={{ position: [0, 2, 8], fov: 45 }}>
          <RoomPlaceholder styleKey={roomStyle} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            maxPolarAngle={Math.PI / 2} 
            minAzimuthAngle={-Math.PI / 4} 
            maxAzimuthAngle={Math.PI / 4} 
          />
        </Canvas>
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 container mx-auto flex flex-col items-center text-center mt-[-10vh] pointer-events-none">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-heading font-medium tracking-tight text-primary-text max-w-3xl leading-tight"
        >
          Build Someone You'll Always Come Home To.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-xl text-secondary-text max-w-xl"
        >
          A place where someone is always there. Your home. Your dad. Your story.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 pointer-events-auto"
        >
          <Button size="lg" className="rounded-[var(--radius-button)] text-lg px-8 py-6 shadow-soft hover-lift">
            Start Building
          </Button>
        </motion.div>
      </div>

      {/* Interactive Controls Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="absolute bottom-12 z-10 bg-card/80 backdrop-blur-md rounded-[var(--radius-modal)] p-4 shadow-soft border border-border"
      >
        <p className="text-sm font-medium text-center mb-3 text-secondary-text">Customize the Atmosphere</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {(Object.keys(ROOM_STYLES) as Array<keyof typeof ROOM_STYLES>).map((key) => (
            <Chip
              key={key}
              active={roomStyle === key}
              onClick={() => setRoomStyle(key)}
            >
              {ROOM_STYLES[key].name}
            </Chip>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
