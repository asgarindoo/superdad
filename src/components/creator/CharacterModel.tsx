"use client"

import * as React from "react"
import { RoundedBox, ContactShadows } from "@react-three/drei"
import { useSpring, animated } from "@react-spring/three"

interface CharacterModelProps {
  skinTone: string;
  hairColor: string;
  hairStyle: string;
  clothingColor: string;
  hasBeard: boolean;
  eyeColor: string;
}

export function CharacterModel({
  skinTone,
  hairColor,
  hairStyle,
  clothingColor,
  hasBeard,
  eyeColor
}: CharacterModelProps) {
  
  // Smoothly animate colors when they change
  const { skin, hair, cloth, eye } = useSpring({
    skin: skinTone,
    hair: hairColor,
    cloth: clothingColor,
    eye: eyeColor,
    config: { mass: 1, tension: 170, friction: 26 }
  })

  return (
    <group position={[0, -2, 0]}>
      {/* Body / Torso */}
      <RoundedBox args={[1.5, 2.5, 1]} position={[0, 1.25, 0]} radius={0.2} smoothness={4} castShadow>
        <animated.meshStandardMaterial color={cloth} />
      </RoundedBox>

      {/* Neck */}
      <RoundedBox args={[0.5, 0.4, 0.5]} position={[0, 2.6, 0]} radius={0.1} smoothness={4} castShadow>
        <animated.meshStandardMaterial color={skin} />
      </RoundedBox>

      {/* Head */}
      <RoundedBox args={[1.2, 1.4, 1.2]} position={[0, 3.4, 0.1]} radius={0.4} smoothness={4} castShadow>
        <animated.meshStandardMaterial color={skin} />
      </RoundedBox>

      {/* Eyes */}
      <group position={[0, 3.5, 0.72]}>
        {/* Left Eye */}
        <RoundedBox args={[0.2, 0.1, 0.1]} position={[-0.25, 0, 0]} radius={0.05} smoothness={4}>
          <animated.meshStandardMaterial color={eye} />
        </RoundedBox>
        {/* Right Eye */}
        <RoundedBox args={[0.2, 0.1, 0.1]} position={[0.25, 0, 0]} radius={0.05} smoothness={4}>
          <animated.meshStandardMaterial color={eye} />
        </RoundedBox>
      </group>

      {/* Hair */}
      {hairStyle !== 'bald' && (
        <RoundedBox 
          args={hairStyle === 'long' ? [1.4, 1.8, 1.4] : [1.3, 0.6, 1.3]} 
          position={hairStyle === 'long' ? [0, 3.4, 0] : [0, 4.0, 0]} 
          radius={0.2} 
          smoothness={4} 
          castShadow
        >
          <animated.meshStandardMaterial color={hair} />
        </RoundedBox>
      )}

      {/* Beard */}
      {hasBeard && (
        <RoundedBox args={[1.3, 0.5, 0.6]} position={[0, 3.0, 0.5]} radius={0.1} smoothness={4} castShadow>
          <animated.meshStandardMaterial color={hair} />
        </RoundedBox>
      )}

      {/* Shadow floor */}
      <ContactShadows position={[0, 0, 0]} opacity={0.5} scale={10} blur={2} far={4} />
    </group>
  )
}
