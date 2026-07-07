"use client"

import * as React from "react"
import { RoundedBox, Sparkles, ContactShadows, Environment, Cylinder } from "@react-three/drei"

export function RoomEnvironment() {
  return (
    <group position={[0, -1, 0]}>
      {/* Floor */}
      <mesh receiveShadow position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#E8E4DB" />
      </mesh>
      
      {/* Walls */}
      <mesh receiveShadow position={[0, 4, -5]}>
        <boxGeometry args={[20, 10, 0.5]} />
        <meshStandardMaterial color="#F2EFEB" />
      </mesh>
      <mesh receiveShadow position={[-6, 4, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[20, 10, 0.5]} />
        <meshStandardMaterial color="#F2EFEB" />
      </mesh>

      {/* Sofa */}
      <group position={[0, 0, -2]}>
        {/* Base */}
        <RoundedBox args={[5, 1, 2]} position={[0, 0, 0]} radius={0.1} smoothness={4} castShadow receiveShadow>
          <meshStandardMaterial color="#A4B3A8" /> {/* Sage-like color */}
        </RoundedBox>
        {/* Backrest */}
        <RoundedBox args={[5, 2.5, 0.5]} position={[0, 1.25, -0.75]} radius={0.1} smoothness={4} castShadow receiveShadow>
          <meshStandardMaterial color="#A4B3A8" />
        </RoundedBox>
        {/* Armrests */}
        <RoundedBox args={[0.6, 1.5, 2]} position={[-2.2, 0.75, 0]} radius={0.1} smoothness={4} castShadow>
          <meshStandardMaterial color="#A4B3A8" />
        </RoundedBox>
        <RoundedBox args={[0.6, 1.5, 2]} position={[2.2, 0.75, 0]} radius={0.1} smoothness={4} castShadow>
          <meshStandardMaterial color="#A4B3A8" />
        </RoundedBox>
      </group>

      {/* Coffee Table */}
      <group position={[0, -0.2, 1]}>
        <RoundedBox args={[3, 0.2, 1.5]} position={[0, 0.6, 0]} radius={0.05} smoothness={4} castShadow receiveShadow>
          <meshStandardMaterial color="#D4A373" /> {/* Wood color */}
        </RoundedBox>
        <Cylinder args={[0.1, 0.1, 0.6]} position={[-1.3, 0.3, -0.5]} castShadow>
          <meshStandardMaterial color="#4A4A4A" />
        </Cylinder>
        <Cylinder args={[0.1, 0.1, 0.6]} position={[1.3, 0.3, -0.5]} castShadow>
          <meshStandardMaterial color="#4A4A4A" />
        </Cylinder>
        <Cylinder args={[0.1, 0.1, 0.6]} position={[-1.3, 0.3, 0.5]} castShadow>
          <meshStandardMaterial color="#4A4A4A" />
        </Cylinder>
        <Cylinder args={[0.1, 0.1, 0.6]} position={[1.3, 0.3, 0.5]} castShadow>
          <meshStandardMaterial color="#4A4A4A" />
        </Cylinder>
      </group>

      {/* Bookshelf */}
      <group position={[-4.5, 0, -3.5]} rotation={[0, Math.PI / 8, 0]}>
        <RoundedBox args={[2, 6, 1]} position={[0, 2.5, 0]} radius={0.1} smoothness={4} castShadow receiveShadow>
          <meshStandardMaterial color="#E97B57" /> {/* Terracotta accent */}
        </RoundedBox>
        {/* Books placeholders */}
        <mesh position={[-0.2, 3, 0.2]} castShadow>
          <boxGeometry args={[0.2, 0.6, 0.4]} />
          <meshStandardMaterial color="#4A4A4A" />
        </mesh>
        <mesh position={[0.1, 1.5, 0.2]} rotation={[0, 0, 0.2]} castShadow>
          <boxGeometry args={[0.15, 0.8, 0.5]} />
          <meshStandardMaterial color="#EAEAEA" />
        </mesh>
      </group>

      {/* Indoor Plant */}
      <group position={[3.5, 0, -3]}>
        <Cylinder args={[0.5, 0.4, 1]} position={[0, 0, 0]} castShadow receiveShadow>
          <meshStandardMaterial color="#EAEAEA" />
        </Cylinder>
        <RoundedBox args={[1.5, 2, 1.5]} position={[0, 1.5, 0]} radius={0.4} smoothness={4} castShadow>
          <meshStandardMaterial color="#72B38A" /> {/* Plant green */}
        </RoundedBox>
      </group>

      {/* Warm Lamp */}
      <group position={[4, 0, -1]}>
        <Cylinder args={[0.1, 0.3, 4]} position={[0, 1.5, 0]} castShadow>
          <meshStandardMaterial color="#4A4A4A" />
        </Cylinder>
        <Cylinder args={[0.6, 0.4, 0.8]} position={[0, 3.5, 0]} castShadow>
          <meshStandardMaterial color="#E7C25B" opacity={0.8} transparent />
        </Cylinder>
        <pointLight position={[0, 3.5, 0]} intensity={1.5} color="#FCE5CD" distance={10} castShadow />
      </group>

      {/* Sunlight Window Light */}
      <directionalLight position={[-10, 5, 5]} intensity={1.2} color="#FFFBF0" castShadow shadow-mapSize={[2048, 2048]} />
      <ambientLight intensity={0.4} color="#FFFBF0" />
      
      {/* Ambient Dust Particles */}
      <Sparkles count={50} scale={12} size={2} speed={0.2} opacity={0.1} color="#FFFFFF" position={[0, 2, 0]} />

      <Environment preset="city" />
      <ContactShadows position={[0, -0.49, 0]} opacity={0.6} scale={20} blur={2.5} far={4} />
    </group>
  )
}
