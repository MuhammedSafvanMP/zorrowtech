"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart3, ArrowRight } from "lucide-react"
import { Scene3D } from "@/components/3d-scene"
import { StaggeredText } from "@/components/animated-text"

export default function ProjectsPage() {
  const projects = [
    {
      title: "FinTech Revolution Platform",
      description: "AI-powered financial platform serving 2M+ users with real-time trading and portfolio management",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["Next.js 14", "Python", "TensorFlow", "AWS", "WebSocket"],
      metrics: {
        users: "2M+",
        growth: "+450%",
        rating: "4.9/5",
        revenue: "$50M+ processed",
      },
      category: "FinTech",
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "HealthTech Telemedicine Suite",
      description: "Complete healthcare platform with AI diagnostics and global patient connectivity",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["React Native", "Node.js", "WebRTC", "MongoDB", "AI Vision"],
      metrics: {
        users: "500K+",
        growth: "+380%",
        rating: "4.8/5",
        consultations: "1M+ completed",
      },
      category: "HealthTech",
      color: "from-green-600 to-emerald-600",
    },
    {
      title: "E-Commerce AI Marketplace",
      description: "Multi-vendor marketplace with AI recommendations and automated inventory management",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["Vue.js", "Laravel", "Redis", "Elasticsearch", "ML Algorithms"],
      metrics: {
        users: "1M+",
        growth: "+520%",
        rating: "4.9/5",
        sales: "$100M+ GMV",
      },
      category: "E-Commerce",
      color: "from-purple-600 to-pink-600",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Scene3D  />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <Badge className="bg-black text-white border border-white/20 mb-6 px-4 py-2">
              <BarChart3 className="w-4 h-4 mr-2" />
              Featured Work
            </Badge>
            <StaggeredText text="Success Stories" className="text-5xl md:text-7xl font-bold mb-8" />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-xl text-gray-300 max-w-4xl mx-auto"
            >
              Explore our portfolio of transformative projects that showcase innovation and deliver exceptional results
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 1 }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Badge className={`bg-gradient-to-r ${project.color} text-white border-0 mb-6 px-4 py-2`}>
                    {project.category}
                  </Badge>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">{project.title}</h3>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">{project.description}</p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {Object.entries(project.metrics).map(([key, value], idx) => (
                      <div key={idx} className="text-center bg-white/5 rounded-2xl p-4 backdrop-blur-sm">
                        <div
                          className={`text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
                        >
                          {value}
                        </div>
                        <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, " $1")}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech, idx) => (
                      <Badge
                        key={idx}
                        className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      className={`bg-gradient-to-r ${project.color} hover:opacity-90 rounded-xl text-lg px-8 py-3 shadow-2xl project-card`}
                    >
                      View Case Study <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                >
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/20 shadow-2xl">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-96 object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${project.color.replace("from-", "from-").replace("to-", "to-")}/20 via-transparent to-transparent`}
                    />
                    <div className="absolute top-6 right-6">
                      <Badge className={`bg-gradient-to-r ${project.color} text-white border-0`}>Live Project</Badge>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
