"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Target, Users, Globe } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      {/* ✅ Fixed background image */}
      <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
        <img
          src="/banner-2.png"
          alt="Background"
          className="w-full h-full object-cover blur-md"
        />

        {/* ✅ Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* ✅ HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Heading */}
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
            <span className="text-white font-semibold">cutting-edge technology</span> that drive exponential growth for forward-thinking companies worldwide.
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-black px-10 py-4 rounded-2xl text-lg font-semibold shadow-2xl border border-white/20"
                >
                  Start Your Project <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
            </motion.div> */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-2xl text-lg font-semibold bg-transparent backdrop-blur-sm"
              >
                                Start Your Project <ArrowRight className="ml-2 w-6 h-6" />

              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ✅ EXPERTISE SECTION */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0  -z-10" />
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
              { title: "Services", href: "/services", description: "AI-driven, scalable solutions", icon: <Sparkles className="w-6 h-6" /> },
              { title: "Projects", href: "/projects", description: "Proven success stories", icon: <Target className="w-6 h-6" /> },
              { title: "Team", href: "/team", description: "Meet our experts", icon: <Users className="w-6 h-6" /> },
              { title: "Contact", href: "/contact", description: "Bring ideas to life", icon: <Globe className="w-6 h-6" /> },
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
  );
}
