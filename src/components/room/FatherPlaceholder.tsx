"use client"

import * as React from "react"
import { RoundedBox } from "@react-three/drei"
import { useSpring, animated } from "@react-spring/three"

export function FatherPlaceholder() {
  // A subtle breathing animation
  const { scale } = useSpring({
    from: { scale: 1 },
    to: async (next) => {
      while (1) {
        await next({ scale: 1.02 })
        await next({ scale: 1 })
      }
    },
    config: { duration: 2500, tension: 50, friction: 10 }
  })

  // Sitting position offsets
  return (
    <animated.group position={[0, -0.2, -1.2]} scale={scale}>
      {/* Torso */}
      <RoundedBox args={[1.4, 1.8, 1]} position={[0, 1.2, 0]} radius={0.2} smoothness={4} castShadow>
        <meshStandardMaterial color="#2C3E50" />
      </RoundedBox>

      {/* Head */}
      <RoundedBox args={[1.2, 1.4, 1.2]} position={[0, 2.9, 0.1]} radius={0.3} smoothness={4} castShadow>
        <meshStandardMaterial color="#E2B98F" />
      </RoundedBox>

      {/* Legs (Sitting) */}
      <group position={[0, 0.2, 0.6]}>
        {/* Thighs projecting forward */}
        <RoundedBox args={[1.3, 0.6, 1.2]} position={[0, 0, 0]} radius={0.1} smoothness={4} castShadow>
          <meshStandardMaterial color="#34495E" />
        </RoundedBox>
        {/* Calves going down */}
        <RoundedBox args={[1.3, 1.2, 0.6]} position={[0, -0.9, 0.3]} radius={0.1} smoothness={4} castShadow>
          <meshStandardMaterial color="#34495E" />
        </RoundedBox>
      </group>
    </animated.group>
  )
}
