"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Brain, X, Send } from "lucide-react"

interface Message {
  type: "user" | "bot"
  text: string
  timestamp: Date
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [hasInitialized, setHasInitialized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Initialize with welcome message when AI opens for the first time
  useEffect(() => {
    if (isOpen && !hasInitialized) {
      const welcomeMessage: Message = {
        type: "bot",
        text: "👋 Hi there! Welcome to Zorrow Tech! I'm your AI assistant. How can I help you today, sir?",
        timestamp: new Date(),
      }
      setMessages([welcomeMessage])

      // Add follow-up message after 2 seconds
      setTimeout(() => {
        const followUpMessage: Message = {
          type: "bot",
          text: "🚀 I'm here to help you learn about our cutting-edge technology solutions. Feel free to ask me anything about our services, projects, careers, or how we can transform your business, sir!",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, followUpMessage])
      }, 2000)

      setHasInitialized(true)
    }
  }, [isOpen, hasInitialized])

  const responses = [
    "💡 We specialize in AI-powered web applications that scale to millions of users! Our React and Next.js solutions are industry-leading with 99.9% uptime, sir.",
    "📱 Our mobile apps have achieved 4.9+ ratings on both App Store and Google Play. We use React Native and Flutter for cross-platform excellence that reaches 50M+ users, sir.",
    "🎯 Need a custom solution? We've built everything from fintech platforms processing $50M+ to healthcare systems serving 500K+ patients. Our portfolio includes 500+ successful projects, sir.",
    "🎓 Our training programs have helped 1000+ developers land their dream jobs at top tech companies like Google, Microsoft, and Apple. Want to level up your team, sir?",
    "⚡ We provide white-glove support with 99.9% uptime guarantee. Our global team of experts is available 24/7 to ensure your project's success and growth, sir.",
    "🔥 Our latest project increased client revenue by 340% in just 6 months using AI automation. Let's discuss how we can achieve similar results for your business, sir!",
    "🌟 We're experts in AI integration, cloud computing, and modern web technologies. From MVP to enterprise scale - what specific challenges can we help you solve, sir?",
    "💼 From startups to Fortune 500 companies, we've delivered transformative solutions. Our team includes ex-Google, Microsoft, and Apple engineers. Want to see our case studies, sir?",
    "🚀 Looking to integrate AI into your business? We've built 50+ AI models with 95%+ accuracy. From chatbots to computer vision - we've got you covered, sir!",
    "💰 Our solutions typically pay for themselves within 6 months through increased efficiency and revenue. Ready to discuss your project budget and timeline, sir?",
    "🎨 Our design team creates stunning user experiences that convert visitors into customers. We focus on user-centered design that drives results, sir.",
    "☁️ We're cloud experts with certifications in AWS, Azure, and GCP. We can migrate your infrastructure or build new cloud-native solutions, sir.",
    "👥 We're actively hiring talented individuals! Check out our careers page for exciting opportunities in engineering, design, AI, and more, sir.",
    "🏆 Our team has won multiple industry awards and our clients have seen an average of 300% growth after working with us, sir.",
    "🔒 Security is our top priority. We implement enterprise-grade security measures and comply with all major industry standards, sir.",
  ]

  const handleSend = () => {
    if (!input.trim() || isTyping) return

    const userMessage: Message = {
      type: "user",
      text: input.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)
    setInput("")

    // Simulate AI response with realistic timing
    setTimeout(
      () => {
        const randomResponse = responses[Math.floor(Math.random() * responses.length)]
        const botMessage: Message = {
          type: "bot",
          text: randomResponse,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
        setIsTyping(false)
      },
      1200 + Math.random() * 800,
    ) // Random delay between 1.2-2 seconds
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="relative">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="w-20 h-20 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 shadow-2xl border-4 border-white/20 backdrop-blur-sm relative overflow-hidden"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
            <Brain className="w-8 h-8 relative z-10" />
          </Button>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="absolute -inset-2 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full opacity-20 blur-xl"
          />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: 100, scale: 0.8, rotateX: -15 }}
            className="fixed bottom-32 right-8 w-96 h-[600px] bg-black/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 bg-gradient-to-r from-violet-600/30 via-purple-600/30 to-indigo-600/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-12 h-12 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full flex items-center justify-center"
                  >
                    <Brain className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <span className="font-bold text-white text-lg">Zorro AI</span>
                    <div className="text-xs text-green-400 flex items-center gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                        className="w-2 h-2 bg-green-400 rounded-full"
                      />
                      Online & Ready to Help
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white/60 hover:text-white hover:bg-white/10 rounded-xl"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-6 h-96 overflow-y-auto custom-scrollbar">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`mb-6 ${message.type === "user" ? "text-right" : "text-left"}`}
                >
                  <div
                    className={`inline-block p-4 rounded-2xl max-w-xs ${
                      message.type === "user"
                        ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg"
                        : "bg-white/10 text-white border border-white/20 backdrop-blur-sm"
                    }`}
                  >
                    <div className="text-sm leading-relaxed">{message.text}</div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1 px-2">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-left mb-6">
                  <div className="inline-block p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                    <motion.div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                          className="w-2 h-2 bg-violet-400 rounded-full"
                        />
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-6 border-t border-white/10 bg-black/50">
              <div className="flex gap-3">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything about our services..."
                  onKeyPress={handleKeyPress}
                  disabled={isTyping}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-xl h-12 focus:ring-2 focus:ring-violet-500 disabled:opacity-50"
                />
                <Button
                  onClick={handleSend}
                  disabled={isTyping || !input.trim()}
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 rounded-xl h-12 px-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #6366f1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #4f46e5);
        }
      `}</style>
    </>
  )
}
