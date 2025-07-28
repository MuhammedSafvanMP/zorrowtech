
"use client"

import { useRef } from "react"
import { Canvas, useFrame }  from "@react-three/fiber"
import { OrbitControls, Float, Environment, MeshDistortMaterial } from "@react-three/drei"


function AnimatedSphere({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<any>(null)

  useFrame((state: any) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial color={color} attach="material" distort={0.3} speed={2} roughness={0.2} metalness={0.8} />
      </mesh>
    </Float>
  )
}

function AnimatedBox({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<any>(null)

  useFrame((state: any) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
      </mesh>
    </Float>
  )
}

function AnimatedTorus({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<any>(null)

  useFrame((state: any) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={3}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[1, 0.4, 16, 100]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  )
}

export function Scene3D({ variant = "default" }: { variant?: "default" | "services" | "team" | "contact" }) {
  const sceneConfigs = {
    default: {
      elements: [
        { type: "sphere", position: [0, 0, 0] as [number, number, number], color: "#8b5cf6" },
        { type: "box", position: [-4, 2, -2] as [number, number, number], color: "#6366f1" },
        { type: "torus", position: [4, -1, -3] as [number, number, number], color: "#a855f7" },
      ],
    },
    services: {
      elements: [
        { type: "sphere", position: [-2, 1, 0] as [number, number, number], color: "#06b6d4" },
        { type: "sphere", position: [2, -1, -1] as [number, number, number], color: "#8b5cf6" },
        { type: "box", position: [0, 2, -2] as [number, number, number], color: "#10b981" },
        { type: "torus", position: [-3, -2, 1] as [number, number, number], color: "#f59e0b" },
      ],
    },
    team: {
      elements: [
        { type: "sphere", position: [-1, 0, 0] as [number, number, number], color: "#ec4899" },
        { type: "sphere", position: [1, 1, -1] as [number, number, number], color: "#8b5cf6" },
        { type: "sphere", position: [0, -1, 1] as [number, number, number], color: "#06b6d4" },
        { type: "torus", position: [2, -2, -2] as [number, number, number], color: "#f59e0b" },
      ],
    },
    contact: {
      elements: [
        { type: "box", position: [0, 0, 0] as [number, number, number], color: "#10b981" },
        { type: "torus", position: [-3, 1, -1] as [number, number, number], color: "#8b5cf6" },
        { type: "torus", position: [3, -1, 1] as [number, number, number], color: "#06b6d4" },
      ],
    },
  }

  const config = sceneConfigs[variant]

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
      <Environment preset="night" />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />

      {config.elements.map((element, index) => {
        switch (element.type) {
          case "sphere":
            return <AnimatedSphere key={index} position={element.position} color={element.color} />
          case "box":
            return <AnimatedBox key={index} position={element.position} color={element.color} />
          case "torus":
            return <AnimatedTorus key={index} position={element.position} color={element.color} />
          default:
            return null
        }
      })}

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}
