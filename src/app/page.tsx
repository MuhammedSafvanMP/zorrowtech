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
      <div className="w-full h-full bg-gradient-to-br from-[#92270a] via-black/20 to-black/40 animate-pulse" />
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
            <Scene3D  />
          </motion.div>
        </Suspense>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/40 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        {/* Hero Content */}
        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
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
            <span className="text-white font-semibold">AI</span> and{" "}
            <span className="text-white font-semibold">cutting-edge technology</span> that drive exponential growth
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
                  className="bg-white text-black px-10 py-4 rounded-2xl text-lg font-semibold shadow-2xl border border-white/20"
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
          {/* <motion.div
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
                  <div className="text-white mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div> */}
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
                className="w-1 h-3 bg-white rounded-full mt-2"
              />
            </div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut", delay: 0.5 }}
              className="mt-2"
            >
              <ChevronDown className="w-5 h-5 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

          {/* Quick Links Section */}
    {/* Explore Our Expertise Section */}
<section className="py-32 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-black z-0" />

  <div className="container mx-auto px-6 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-20"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-100 via-white to-gray-300 bg-clip-text text-transparent">
        Explore Our Expertise
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Discover what makes us the trusted partner for innovation, design, and growth.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Services",
          href: "/services",
          description: "AI-driven, scalable solutions",
          icon: <Sparkles className="w-6 h-6" />,
        },
        {
          title: "Projects",
          href: "/projects",
          description: "Proven success stories",
          icon: <Target className="w-6 h-6" />,
        },
        {
          title: "Team",
          href: "/team",
          description: "Meet our experts",
          icon: <Users className="w-6 h-6" />,
        },
        {
          title: "Contact",
          href: "/contact",
          description: "Bring ideas to life",
          icon: <Globe className="w-6 h-6" />,
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ scale: 1.05, rotateX: 3 }}
          className="group"
        >
          <Link href={item.href} className="block">
            <div className="relative h-64 rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:bg-white/10">
              <div className="absolute -inset-px bg-gradient-to-br from-violet-600/30 to-indigo-600/30 opacity-0 group-hover:opacity-20 transition-opacity rounded-3xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/10 rounded-full text-white">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{item.description}</p>

              <ArrowRight className="w-6 h-6 text-gray-300 group-hover:translate-x-2 transition-transform" />
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
