import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { AIAssistant } from "@/components/ai-assistant"
import { CustomCursor } from "@/components/custom-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zorrow Tech - Build The Future",
  description: "Transforming ideas into digital reality with cutting-edge technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        <CustomCursor />
        <Navigation />
        {children}
        <AIAssistant />
      </body>
    </html>
  )
}
