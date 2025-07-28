"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Sparkles, Target, Users, Globe, Shield, ChevronDown } from "lucide-react"
import { Scene3D } from "@/components/3d-scene"
import Link from "next/link"
import { Suspense } from "react"

// Loading fallback for 3D scene
function Scene3DFallback() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-40">
      <div className="w-full h-full bg-gradient-to-br from-violet-900/20 via-purple-900/20 to-indigo-900/20 animate-pulse" />
    </div>
  )
}

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* 3D Background with Suspense */}
        <Suspense fallback={<Scene3DFallback />}>
          <motion.div style={{ y: backgroundY }} className="absolute inset-0 w-full h-full opacity-40">
            <Scene3D variant="default" />
          </motion.div>
        </Suspense>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-violet-900/30 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        {/* Hero Content */}
        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Badge - Show immediately */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Badge className="bg-gradient-to-r from-violet-600/30 to-indigo-600/30 text-violet-300 border-violet-500/50 px-6 py-3 text-base backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              Transforming Ideas Into Digital Reality
            </Badge>
          </motion.div> */}

          {/* Main Heading - Show quickly */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Build The Future
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed"
          >
            We craft exceptional digital experiences powered by{" "}
            <span className="text-violet-400 font-semibold">AI</span> and{" "}
            <span className="text-indigo-400 font-semibold">cutting-edge technology</span> that drive exponential growth
            for forward-thinking companies worldwide.
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-2xl border border-white/20"
                >
                  Start Your Project <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-2xl text-lg font-semibold bg-transparent backdrop-blur-sm"
              >
                <Play className="mr-2 w-6 h-6" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {[
              { number: "500+", label: "Projects Delivered", icon: <Target className="w-6 h-6" /> },
              { number: "100+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
              { number: "50M+", label: "Users Reached", icon: <Globe className="w-6 h-6" /> },
              { number: "99.9%", label: "Uptime Guaranteed", icon: <Shield className="w-6 h-6" /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <div className="text-violet-400 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5, ease: "easeInOut" }}
            className="flex flex-col items-center text-gray-400 group cursor-pointer"
          >
            <span className="text-sm mb-3 group-hover:text-white transition-colors">Explore Our Services</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center group-hover:border-white transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5, ease: "easeInOut" }}
                className="w-1 h-3 bg-gradient-to-b from-violet-400 to-indigo-400 rounded-full mt-2"
              />
            </div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut", delay: 0.5 }}
              className="mt-2"
            >
              <ChevronDown className="w-5 h-5 text-violet-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Links Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Explore Our Expertise
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Services",
                href: "/services",
                description: "Cutting-edge solutions",
                color: "from-blue-600 to-cyan-600",
              },
              {
                title: "Projects",
                href: "/projects",
                description: "Success stories",
                color: "from-purple-600 to-pink-600",
              },
              { title: "Team", href: "/team", description: "Meet our experts", color: "from-green-600 to-emerald-600" },
              {
                title: "Contact",
                href: "/contact",
                description: "Let's build together",
                color: "from-orange-600 to-red-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group"
              >
                <Link href={item.href}>
                  <div
                    className={`h-64 bg-gradient-to-br ${item.color} rounded-3xl p-8 text-white relative overflow-hidden cursor-pointer`}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-white/80">{item.description}</p>
                      </div>
                      <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
