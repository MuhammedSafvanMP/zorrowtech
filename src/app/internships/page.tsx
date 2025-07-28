"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, MapPin, Clock, Users, Award, BookOpen, Target, Star } from "lucide-react"
import { Scene3D } from "@/components/3d-scene"
import { useState } from "react"

export default function InternshipsPage() {
  const [selectedProgram, setSelectedProgram] = useState<any>(null)
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false)

  const programs = [
    {
      id: 1,
      title: "Full Stack Development Internship",
      duration: "3 months",
      type: "Paid Internship",
      stipend: "$2,000/month",
      location: "Remote/Hybrid",
      spots: "10 positions",
      description: "Learn modern web development with React, Next.js, and Node.js while working on real projects.",
      skills: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "Git"],
      requirements: [
        "Currently pursuing CS/IT degree or bootcamp graduate",
        "Basic knowledge of JavaScript and HTML/CSS",
        "Passion for learning and problem-solving",
        "Available for 20+ hours per week",
      ],
      benefits: [
        "Mentorship from senior developers",
        "Real project experience",
        "Certificate of completion",
        "Job referral",
      ],
      gradient: "from-blue-600 to-cyan-600",
      startDate: "January 2024",
    },
    {
      id: 2,
      title: "AI/ML Research Internship",
      duration: "4 months",
      type: "Research Program",
      stipend: "$2,500/month",
      location: "San Francisco, CA",
      spots: "5 positions",
      description: "Work on cutting-edge AI research projects and contribute to machine learning innovations.",
      skills: ["Python", "TensorFlow", "PyTorch", "Data Science", "Research", "Statistics"],
      requirements: [
        "CS/AI/ML degree student (Junior/Senior level)",
        "Strong Python programming skills",
        "Understanding of ML fundamentals",
        "Research experience preferred",
      ],
      benefits: [
        "Research publication opportunities",
        "Conference presentations",
        "PhD pathway guidance",
        "Industry connections",
      ],
      gradient: "from-purple-600 to-pink-600",
      startDate: "February 2024",
    },
    {
      id: 3,
      title: "UX/UI Design Internship",
      duration: "3 months",
      type: "Design Program",
      stipend: "$1,800/month",
      location: "Remote",
      spots: "8 positions",
      description: "Create beautiful user experiences and learn design thinking from industry experts.",
      skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping", "Design Systems", "Usability Testing"],
      requirements: [
        "Design student or self-taught designer",
        "Portfolio showcasing design work",
        "Understanding of design principles",
        "Eagerness to learn and iterate",
      ],
      benefits: ["Portfolio development", "Design mentorship", "Client project exposure", "Design tool licenses"],
      gradient: "from-green-600 to-emerald-600",
      startDate: "March 2024",
    },
    {
      id: 4,
      title: "Mobile Development Internship",
      duration: "3 months",
      type: "Development Program",
      stipend: "$2,200/month",
      location: "Remote/Hybrid",
      spots: "6 positions",
      description: "Build mobile applications for iOS and Android using React Native and Flutter.",
      skills: ["React Native", "Flutter", "Mobile UI/UX", "API Integration", "App Store Deployment", "Testing"],
      requirements: [
        "Basic mobile development knowledge",
        "Understanding of JavaScript or Dart",
        "Interest in mobile technologies",
        "Problem-solving mindset",
      ],
      benefits: [
        "App store publications",
        "Mobile development expertise",
        "Industry mentorship",
        "Device testing access",
      ],
      gradient: "from-orange-600 to-red-600",
      startDate: "April 2024",
    },
  ]

  const learningPrograms = [
    {
      title: "Zero to Full Stack Developer",
      duration: "6 months",
      level: "Beginner",
      price: "Free",
      description: "Complete bootcamp covering HTML, CSS, JavaScript, React, Node.js, and databases.",
      modules: 12,
      projects: 8,
      gradient: "from-indigo-600 to-purple-600",
    },
    {
      title: "AI/ML Mastery Program",
      duration: "4 months",
      level: "Intermediate",
      price: "$299",
      description: "Deep dive into machine learning, neural networks, and AI application development.",
      modules: 10,
      projects: 6,
      gradient: "from-violet-600 to-pink-600",
    },
    {
      title: "Cloud Architecture Certification",
      duration: "3 months",
      level: "Advanced",
      price: "$199",
      description: "Master AWS, Azure, and GCP with hands-on projects and certification preparation.",
      modules: 8,
      projects: 4,
      gradient: "from-cyan-600 to-blue-600",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      program: "Full Stack Internship",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The internship at Zorrow Tech transformed my career. I learned more in 3 months than in 2 years of college!",
      rating: 5,
      position: "Now Software Engineer at Google",
    },
    {
      name: "Alex Chen",
      program: "AI/ML Research",
      image: "/placeholder.svg?height=100&width=100",
      quote: "Working on real AI projects gave me the confidence to pursue my PhD. The mentorship was incredible.",
      rating: 5,
      position: "PhD Student at Stanford",
    },
    {
      name: "Maria Rodriguez",
      program: "UX Design Internship",
      image: "/placeholder.svg?height=100&width=100",
      quote: "I built an amazing portfolio and landed my dream job. The design mentorship was world-class.",
      rating: 5,
      position: "Senior Designer at Apple",
    },
  ]

  const handleApplyClick = (program: any) => {
    setSelectedProgram(program)
    setIsApplyModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Scene3D variant="services" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-900/20 to-black" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <Badge className="bg-indigo-600/20 text-indigo-300 border-indigo-500/30 mb-6 px-4 py-2">
              <GraduationCap className="w-4 h-4 mr-2" />
              Internships & Learning
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Launch Your Tech Career
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-xl text-gray-300 max-w-4xl mx-auto"
            >
              Join our world-class internship programs and learning initiatives. Get hands-on experience, mentorship
              from industry experts, and launch your career in technology.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Interns Trained", icon: <Users className="w-6 h-6" /> },
              { number: "95%", label: "Job Placement Rate", icon: <Target className="w-6 h-6" /> },
              { number: "50+", label: "Partner Companies", icon: <Award className="w-6 h-6" /> },
              { number: "4.9/5", label: "Program Rating", icon: <Star className="w-6 h-6" /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-indigo-400 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Programs */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Internship Programs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Gain real-world experience working on cutting-edge projects with mentorship from industry experts.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-gray-900/90 to-black/90 border-white/10 hover:border-white/30 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <Badge className={`bg-gradient-to-r ${program.gradient} text-white border-0 px-4 py-2`}>
                        {program.type}
                      </Badge>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {program.location}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {program.duration}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Users className="w-4 h-4 mr-1" />
                        {program.spots}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{program.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/5 rounded-xl p-4 text-center">
                        <div className="text-sm text-gray-400 mb-1">Stipend</div>
                        <div className="text-lg font-bold text-green-400">{program.stipend}</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 text-center">
                        <div className="text-sm text-gray-400 mb-1">Start Date</div>
                        <div className="text-lg font-bold text-blue-400">{program.startDate}</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Skills You'll Learn:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.skills.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        onClick={() => handleApplyClick(program)}
                        className={`w-full bg-gradient-to-r ${program.gradient} hover:opacity-90 rounded-xl text-lg py-3 shadow-2xl`}
                      >
                        Apply Now
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Programs */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Learning Programs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive courses designed to take you from beginner to industry-ready professional.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {learningPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-gray-900/80 to-black/80 border-white/10 hover:border-white/30 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 bg-gradient-to-r ${program.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 text-white shadow-2xl`}
                    >
                      <BookOpen className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">{program.description}</p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">{program.modules}</div>
                        <div className="text-xs text-gray-400">Modules</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">{program.projects}</div>
                        <div className="text-xs text-gray-400">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400">{program.duration}</div>
                        <div className="text-xs text-gray-400">Duration</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <Badge className={`bg-gradient-to-r ${program.gradient} text-white border-0`}>
                        {program.level}
                      </Badge>
                      <div className="text-2xl font-bold text-white">{program.price}</div>
                    </div>

                    <Button
                      className={`w-full bg-gradient-to-r ${program.gradient} hover:opacity-90 rounded-xl shadow-lg`}
                    >
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Success Stories
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-gray-900/80 to-black/80 border-white/10 hover:border-white/30 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-8 text-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-white/20"
                    />
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                    <h4 className="text-xl font-bold text-white mb-2">{testimonial.name}</h4>
                    <p className="text-indigo-400 font-semibold mb-2">{testimonial.program}</p>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
