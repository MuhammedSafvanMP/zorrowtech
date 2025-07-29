// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"

// export function CustomCursor() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const [cursorText, setCursorText] = useState("")
//   const [isHovering, setIsHovering] = useState(false)
//   const [cursorVariant, setCursorVariant] = useState("default")

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//     }

//     const handleMouseEnterSafe = (e: MouseEvent) => {
//       const target = e.target as HTMLElement

//       // Safety check to ensure target exists and has classList
//       if (!target || !target.classList) return

//       if (target.tagName === "BUTTON") {
//         setCursorText("CLICK")
//         setCursorVariant("button")
//         setIsHovering(true)
//       } else if (target.tagName === "A") {
//         setCursorText("VISIT")
//         setCursorVariant("link")
//         setIsHovering(true)
//       } else if (target.classList.contains("project-card")) {
//         setCursorText("VIEW")
//         setCursorVariant("project")
//         setIsHovering(true)
//       } else if (target.classList.contains("team-card")) {
//         setCursorText("MEET")
//         setCursorVariant("team")
//         setIsHovering(true)
//       }
//     }

//     const handleMouseLeave = () => {
//       setCursorText("")
//       setCursorVariant("default")
//       setIsHovering(false)
//     }

//     // Add event listeners with error handling
//     try {
//       window.addEventListener("mousemove", handleMouseMove)
//       document.addEventListener("mouseenter", handleMouseEnterSafe, true)
//       document.addEventListener("mouseleave", handleMouseLeave, true)
//     } catch (error) {
//       console.warn("Custom cursor event listeners failed to attach:", error)
//     }

//     return () => {
//       try {
//         window.removeEventListener("mousemove", handleMouseMove)
//         document.removeEventListener("mouseenter", handleMouseEnterSafe, true)
//         document.removeEventListener("mouseleave", handleMouseLeave, true)
//       } catch (error) {
//         console.warn("Custom cursor event listeners failed to remove:", error)
//       }
//     }
//   }, [])

//   const variants = {
//     default: {
//       x: mousePosition.x - 12,
//       y: mousePosition.y - 12,
//       scale: 1,
//       backgroundColor: "rgba(139, 92, 246, 0.8)",
//     },
//     button: {
//       x: mousePosition.x - 25,
//       y: mousePosition.y - 25,
//       scale: 2,
//       backgroundColor: "rgba(99, 102, 241, 0.9)",
//     },
//     link: {
//       x: mousePosition.x - 20,
//       y: mousePosition.y - 20,
//       scale: 1.5,
//       backgroundColor: "rgba(34, 197, 94, 0.8)",
//     },
//     project: {
//       x: mousePosition.x - 30,
//       y: mousePosition.y - 30,
//       scale: 2.5,
//       backgroundColor: "rgba(168, 85, 247, 0.9)",
//     },
//     team: {
//       x: mousePosition.x - 25,
//       y: mousePosition.y - 25,
//       scale: 2,
//       backgroundColor: "rgba(236, 72, 153, 0.9)",
//     },
//   }

//   return (
//     <>
//       <motion.div
//         className="fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference"
//         animate={variants[cursorVariant as keyof typeof variants]}
//         transition={{ type: "spring", stiffness: 500, damping: 28 }}
//       />

//       <AnimatePresence>
//         {isHovering && cursorText && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5, y: -10 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.5, y: 10 }}
//             className="fixed pointer-events-none z-50 bg-black/90 text-white px-3 py-1 rounded-lg text-sm font-bold backdrop-blur-sm border border-white/20"
//             style={{
//               left: mousePosition.x + 20,
//               top: mousePosition.y - 40,
//             }}
//           >
//             {cursorText}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }
