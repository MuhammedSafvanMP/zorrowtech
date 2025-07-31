
// "use client"

// import { useRef } from "react"
// import { Canvas, useFrame }  from "@react-three/fiber"
// import { OrbitControls, Float, Environment, MeshDistortMaterial } from "@react-three/drei"


// function AnimatedSphere({ position, color }: { position: [number, number, number]; color: string }) {
//   const meshRef = useRef<any>(null)

//   useFrame((state: any) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
//       meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
//     }
//   })

//   return (
//     <Float speed={2} rotationIntensity={1} floatIntensity={2}>
//       <mesh ref={meshRef} position={position}>
//         <sphereGeometry args={[1, 64, 64]} />
//         <MeshDistortMaterial color={color} attach="material" distort={0.3} speed={2} roughness={0.2} metalness={0.8} />
//       </mesh>
//     </Float>
//   )
// }

// function AnimatedBox({ position, color }: { position: [number, number, number]; color: string }) {
//   const meshRef = useRef<any>(null)

//   useFrame((state: any) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
//       meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
//       meshRef.current.rotation.z = state.clock.elapsedTime * 0.15
//     }
//   })

//   return (
//     <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
//       <mesh ref={meshRef} position={position}>
//         <boxGeometry args={[1.5, 1.5, 1.5]} />
//         <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
//       </mesh>
//     </Float>
//   )
// }

// function AnimatedTorus({ position, color }: { position: [number, number, number]; color: string }) {
//   const meshRef = useRef<any>(null)

//   useFrame((state: any) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
//       meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
//     }
//   })

//   return (
//     <Float speed={3} rotationIntensity={2} floatIntensity={3}>
//       <mesh ref={meshRef} position={position}>
//         <torusGeometry args={[1, 0.4, 16, 100]} />
//         <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
//       </mesh>
//     </Float>
//   )
// }

// export function Scene3D({ variant = "default" }: { variant?: "default" | "services" | "team" | "contact" }) {
//   const sceneConfigs = {
//     default: {
//       elements: [
//         { type: "sphere", position: [0, 0, 0] as [number, number, number], color: "#92270a" },
//         { type: "box", position: [-4, 2, -2] as [number, number, number], color: "#7c0f08" },
//         { type: "torus", position: [4, -1, -3] as [number, number, number], color: "#92270a" },
//       ],
//     },
//     services: {
//       elements: [
//         { type: "sphere", position: [-2, 1, 0] as [number, number, number], color: "#92270a" },
//         { type: "sphere", position: [2, -1, -1] as [number, number, number], color: "#7D210F" },
//         { type: "box", position: [0, 2, -2] as [number, number, number], color: "#92270a" },
//         { type: "torus", position: [-3, -2, 1] as [number, number, number], color: "#92270a" },
//       ],
//     },
//     team: {
//       elements: [
//         { type: "sphere", position: [-1, 0, 0] as [number, number, number], color: "#92270a" },
//         { type: "sphere", position: [1, 1, -1] as [number, number, number], color: "#7c0f08" },
//         { type: "sphere", position: [0, -1, 1] as [number, number, number], color: "#92270a" },
//         { type: "torus", position: [2, -2, -2] as [number, number, number], color: "#7c0f08" },
//       ],
//     },
//     contact: {
//       elements: [
//         { type: "box", position: [0, 0, 0] as [number, number, number], color: "#92270a" },
//         { type: "torus", position: [-3, 1, -1] as [number, number, number], color: "#7c0f08" },
//         { type: "torus", position: [3, -1, 1] as [number, number, number], color: "#92270a" },
//       ],
//     },
//   }

//   const config = sceneConfigs[variant]

//   return (
//     <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
//       <Environment preset="night" />
//       <ambientLight intensity={0.3} />
//       <pointLight position={[10, 10, 10]} intensity={0.8} />
//       <pointLight position={[-10, -10, -10]} intensity={0.3} color="#7c0f08" />

//       {config.elements.map((element, index) => {
//         switch (element.type) {
//           case "sphere":
//             return <AnimatedSphere key={index} position={element.position} color={element.color} />
//           case "box":
//             return <AnimatedBox key={index} position={element.position} color={element.color} />
//           case "torus":
//             return <AnimatedTorus key={index} position={element.position} color={element.color} />
//           default:
//             return null
//         }
//       })}

//       <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
//     </Canvas>
//   )
// }



// "use client";

// import { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Float, Environment, MeshDistortMaterial } from "@react-three/drei";

// function AnimatedSphere({ position, color }: { position: [number, number, number]; color: string }) {
//   const meshRef = useRef<any>(null);

//   useFrame((state: any) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
//       meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
//     }
//   });

//   return (
//     <Float speed={2} rotationIntensity={1} floatIntensity={2}>
//       <mesh ref={meshRef} position={position}>
//         <sphereGeometry args={[1, 64, 64]} />
//         <MeshDistortMaterial
//           color={color}
//           distort={0.3}
//           speed={2}
//           roughness={0.2}
//           metalness={1}
//           emissive={color}
//           emissiveIntensity={0.2}
//         />
//       </mesh>
//     </Float>
//   );
// }

// function AnimatedBox({ position, color }: { position: [number, number, number]; color: string }) {
//   const meshRef = useRef<any>(null);

//   useFrame((state: any) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
//       meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
//       meshRef.current.rotation.z = state.clock.elapsedTime * 0.15;
//     }
//   });

//   return (
//     <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
//       <mesh ref={meshRef} position={position}>
//         <boxGeometry args={[1.5, 1.5, 1.5]} />
//         <meshStandardMaterial
//           color={color}
//           metalness={1}
//           roughness={0.2}
//           emissive={color}
//           emissiveIntensity={0.2}
//         />
//       </mesh>
//     </Float>
//   );
// }

// function AnimatedTorus({ position, color }: { position: [number, number, number]; color: string }) {
//   const meshRef = useRef<any>(null);

//   useFrame((state: any) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
//       meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
//     }
//   });

//   return (
//     <Float speed={3} rotationIntensity={2} floatIntensity={3}>
//       <mesh ref={meshRef} position={position}>
//         <torusGeometry args={[1, 0.4, 16, 100]} />
//         <meshStandardMaterial
//           color={color}
//           metalness={1}
//           roughness={0.1}
//           emissive={color}
//           emissiveIntensity={0.2}
//         />
//       </mesh>
//     </Float>
//   );
// }

// export function Scene3D({
//   variant = "default",
// }: {
//   variant?: "default" | "services" | "team" | "contact";
// }) {
//  const sceneConfigs: Record<
//   string,
//   { elements: { type: "sphere" | "box" | "torus"; position: [number, number, number]; color: string }[] }
// > = {
//   default: {
//     elements: [
//       { type: "sphere", position: [0, 0, 0], color: "#00BFFF" },
//       { type: "box", position: [-4, 2, -2], color: "#FF2D95" },
//       { type: "torus", position: [4, -1, -3], color: "#B400FF" },
//     ],
//   },
//   services: {
//     elements: [
//       { type: "sphere", position: [-2, 1, 0], color: "#00BFFF" },
//       { type: "sphere", position: [2, -1, -1], color: "#00FFC6" },
//       { type: "box", position: [0, 2, -2], color: "#FF2D95" },
//       { type: "torus", position: [-3, -2, 1], color: "#B400FF" },
//     ],
//   },
//   team: {
//     elements: [
//       { type: "sphere", position: [-1, 0, 0], color: "#00BFFF" },
//       { type: "sphere", position: [1, 1, -1], color: "#00FFC6" },
//       { type: "sphere", position: [0, -1, 1], color: "#FF2D95" },
//       { type: "torus", position: [2, -2, -2], color: "#B400FF" },
//     ],
//   },
//   contact: {
//     elements: [
//       { type: "box", position: [0, 0, 0], color: "#FF2D95" },
//       { type: "torus", position: [-3, 1, -1], color: "#00BFFF" },
//       { type: "torus", position: [3, -1, 1], color: "#00FFC6" },
//     ],
//   },
// };


//   const config = sceneConfigs[variant];

//   return (
//     <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
//       {/* Night HDRI environment */}
//       <Environment preset="night" />
//       {/* Ambient & Point Lights */}
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} intensity={1.0} color="#FFFFFF" />
//       <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FFFFFF" />
//       <pointLight position={[0, 5, 10]} intensity={0.6} color="#FFFFFF" />

//       {config.elements.map((element, index) => {
//         switch (element.type) {
//           case "sphere":
//             return <AnimatedSphere key={index} position={element.position} color={element.color} />;
//           case "box":
//             return <AnimatedBox key={index} position={element.position} color={element.color} />;
//           case "torus":
//             return <AnimatedTorus key={index} position={element.position} color={element.color} />;
//           default:
//             return null;
//         }
//       })}

//       <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
//     </Canvas>
//   );
// }


// "use client";

// import { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Environment } from "@react-three/drei";
// import * as THREE from "three";

// function Bubble({ position }: { position: [number, number, number] }) {
//   const meshRef = useRef<THREE.Mesh>(null!);

//   useFrame((state) => {
//     meshRef.current.position.y += 0.02;
//     if (meshRef.current.position.y > 5) {
//       meshRef.current.position.y = -5;
//     }
//     meshRef.current.rotation.x += 0.01;
//     meshRef.current.rotation.y += 0.01;
//   });

//   return (
//     <mesh ref={meshRef} position={position}>
//       <sphereGeometry args={[0.1, 16, 16]} />
//       <meshStandardMaterial color="#00BFFF" transparent opacity={0.7} />
//     </mesh>
//   );
// }

// function Pipe() {
//   return (
//     <mesh rotation={[Math.PI / 2, 0, 0]}>
//       <cylinderGeometry args={[0.5, 0.5, 10, 32, 1, true]} />
//       <meshStandardMaterial color="#555" side={THREE.BackSide} transparent opacity={0.2} />
//     </mesh>
//   );
// }

// function MovingBall() {
//   const meshRef = useRef<THREE.Mesh>(null!);

//   useFrame((state) => {
//     const t = state.clock.elapsedTime;
//     meshRef.current.position.y = 5 - (t % 10); // Move from 5 to -5, loop
//   });

//   return (
//     <mesh ref={meshRef} position={[0, 5, 0]}>
//       <sphereGeometry args={[0.2, 32, 32]} />
//       <meshStandardMaterial color="#FF2D95" emissive="#FF2D95" emissiveIntensity={0.5} />
//     </mesh>
//   );
// }

// export function Scene3D() {
//   // Generate 100 bubbles at random x,z
//   const bubbles = Array.from({ length: 100 }, () => ({
//     position: [
//       (Math.random() - 0.5) * 4,
//       Math.random() * -5,
//       (Math.random() - 0.5) * 4,
//     ] as [number, number, number],
//   }));

//   return (
//     <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
//       <Environment preset="night" />
//       <ambientLight intensity={0.5} />
//       <pointLight position={[5, 5, 5]} intensity={1} />

//       <Pipe />
//       <MovingBall />

//       {bubbles.map((b, i) => (
//         <Bubble key={i} position={b.position} />
//       ))}
//     </Canvas>
//   );
// }
