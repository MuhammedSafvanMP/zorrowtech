"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart3, ArrowRight, Clock, Users, Sparkles, Rocket, Code2, Zap } from "lucide-react"
import { useRouter } from "next/navigation"
// import { Scene3D } from "@/components/3d-scene"
import { StaggeredText } from "@/components/animated-text"

export default function ProjectsPage() {
  const router = useRouter()
  
  const projects = [
    {
      title: "Hosta Health Care",
      description:
        "Complete healthcare platform revolutionizing patient care with seamless booking, emergency ambulance dispatch, and life-saving blood donation network.",
      image: "/hosta-logo.png",
      tech: ["Flutter", "Node.js", "React", "MongoDB", "Firebase", "Twilio"],
      category: "HealthTech",
      color: "from-emerald-500 to-teal-600",
      metrics: {
        activeUsers: "5K+",
        hospitals: "50+",
        ambulance: "24/7",
        donors: "10K+"
      },
      status: "ongoing",
      progress: 75,
      features: ["Ambulance Contacts", "Instant blood donor matching", "Doctor Booking", "24/7 customer support"]
    },
    {
      title: "Saloan Booking App",
      description:
        "Your neighborhood salon at your fingertips - Book, pay, and get styled by top-rated local professionals with real-time availability and exclusive deals.",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["Flutter", "Node.js", "React", "MongoDB", "Firebase", "Twilio"],
      category: "Fashion & Beauty",
      color: "from-violet-500 to-fuchsia-600",
      metrics: {
        salons: "200+",
        stylists: "500+",
        bookings: "15K+",
        rating: "4.8★"
      },
      status: "ongoing",
      progress: 60,
      features: ["AI style recommendations", "Book your preferred staff", "24/7 customer support"]
    },
  ]

  return (
    <div className="relative min-h-screen text-white overflow-hidden pt-20">
      {/* Fixed background image with enhanced overlay */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/banner-2.png"
          alt="Background"
          className="w-full h-full object-cover blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Animated gradient orbs */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-20 right-10 w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Hero Section */}
      <section className="py-32 relative z-10 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm mb-6 px-6 py-2.5 rounded-full">
                <Rocket className="w-4 h-4 mr-2" />
                Innovation in Progress
              </Badge>
            </motion.div>

            <StaggeredText
              text="Building the Future"
              className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Two ambitious projects currently in development, pushing the boundaries of 
              what's possible in healthcare and personal grooming technology.
            </motion.p>

            {/* Progress indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="flex justify-center gap-8 mt-12"
            >
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span className="text-sm">2 Active Projects</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-violet-400" />
                <span className="text-sm">10+ Developers</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content Side */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  {/* Category and Status */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <Badge
                      className={`bg-gradient-to-r ${project.color} text-white border-0 px-4 py-2 rounded-full font-medium`}
                    >
                      {project.category}
                    </Badge>
                    <Badge variant="outline" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50 px-4 py-2 rounded-full">
                      <Zap className="w-3 h-3 mr-1" />
                      In Development
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Development Progress</span>
                      <span className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent font-bold`}>
                        {project.progress}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className={`h-full bg-gradient-to-r ${project.color} rounded-full`}
                      />
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-yellow-400" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`} />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {Object.entries(project.metrics).map(([key, value], idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="text-center bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
                      >
                        <div
                          className={`text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
                        >
                          {value}
                        </div>
                        <div className="text-sm text-gray-400 capitalize mt-1">
                          {key.replace(/([A-Z])/g, " $1")}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, idx) => (
                      <Badge
                        key={idx}
                        className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all px-3 py-1.5 rounded-full"
                      >
                        <Code2 className="w-3 h-3 mr-1 inline" />
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={() => router.push(`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`)}
                      className={`bg-gradient-to-r ${project.color} hover:opacity-90 rounded-full text-lg px-8 py-6 shadow-2xl border-0`}
                    >
                      Track Progress <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </div>

                {/* Image Side */}
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                >
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/20 shadow-2xl group">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${project.color}/30 via-transparent to-transparent mix-blend-overlay`}
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 px-4 py-2 rounded-full shadow-xl">
                        <Clock className="w-3 h-3 mr-1 animate-pulse" />
                        Ongoing Project
                      </Badge>
                    </div>

                    {/* Bottom Gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
                    
                    {/* Progress Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex justify-between text-white text-sm mb-2">
                        <span>Launch Timeline</span>
                        <span>Q2 2024</span>
                      </div>
                      <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${project.progress}%` }}
                          transition={{ duration: 1.5, delay: 0.8 }}
                          className={`h-full bg-gradient-to-r ${project.color} rounded-full`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center bg-gradient-to-r from-purple-600/20 to-emerald-600/20 backdrop-blur-sm rounded-3xl p-16 border border-white/10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Want to Collaborate?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate partners and early adopters to shape the future of these platforms.
            </p>
            <Button 
              onClick={() => router.push("/contact")} 
              className="bg-white text-black hover:bg-gray-200 rounded-full text-lg px-8 py-6"
            >
              Get Early Access <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}