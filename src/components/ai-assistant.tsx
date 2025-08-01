"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessagesSquare,  MessageSquare,  X, Send } from "lucide-react"

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

  useEffect(() => {
    if (isOpen && !hasInitialized) {
      const welcomeMessage: Message = {
        type: "bot",
        text: "👋 Hi! I'm your AI Assistant. How can I help you today?",
        timestamp: new Date(),
      }
      setMessages([welcomeMessage])
      setTimeout(() => {
        const followUp: Message = {
          type: "bot",
          text: "🚀 Ask me anything about our services, projects, or careers!",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, followUp])
      }, 1500)
      setHasInitialized(true)
    }
  }, [isOpen, hasInitialized])

  const responses = [
    "✅ We build modern web apps with React and Next.js.",
    "🚀 Our mobile apps reach millions of users.",
    "💼 We help businesses grow with cutting-edge tech.",
    "🎯 Need AI? We build AI models with high accuracy.",
  ]

  const handleSend = () => {
    if (!input.trim() || isTyping) return
    const userMsg: Message = {
      type: "user",
      text: input.trim(),
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const reply: Message = {
        type: "bot",
        text: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, reply])
      setIsTyping(false)
    }, 1200)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Toggle Button */}
      <motion.div className="fixed bottom-8 right-8 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-black/70 via-black/50 to-black/20 text-white flex items-center justify-center border border-white/10 shadow-lg"
        >
          <MessageSquare  className="w-7 h-7" />
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className="fixed bottom-28 right-8 w-[90vw] max-w-md h-[500px] bg-black border border-white/10 rounded-2xl flex flex-col shadow-2xl overflow-hidden z-50"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-white/10 bg-black">
              <div className="flex items-center gap-2 text-white font-semibold">
                <MessagesSquare  className="w-5 h-5" /> Zorrow AI
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`mb-3 ${msg.type === "user" ? "text-right" : "text-left"}`}
                >
                  <div
                    className={`inline-block px-4 py-2 rounded-xl ${
                      msg.type === "user"
                        ? "bg-white text-black"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="text-left">
                  <div className="inline-block px-4 py-2 rounded-xl bg-white/10 text-white">
                    Typing...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex gap-2 p-4 border-t border-white/10 bg-black">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-xl bg-white/5 text-white placeholder:text-gray-400 outline-none border border-white/10"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="px-4 py-2 rounded-xl bg-white text-black disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
