"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Linkedin, Twitter, Github } from "lucide-react"
import { Scene3D } from "@/components/3d-scene"
import { StaggeredText } from "@/components/animated-text"

export default function TeamPage() {
 const team = [
    {
      name: "Alex Rodriguez",
      role: "CEO & Co-Founder",
      image: "/placeholder.svg?height=500&width=400",
      bio: "Former Google Principal Engineer with 12+ years building products used by billions. Led teams that developed core infrastructure serving 2B+ users daily.",
      expertise: [
        "Strategic Vision",
        "Product Development",
        "Team Leadership",
        "AI Strategy",
        "Scalable Systems",
        "Business Growth",
      ],
      achievements: ["Ex-Google Principal Engineer", "Stanford CS PhD", "Forbes 30 Under 30", "TEDx Speaker"],
      social: { linkedin: "#", twitter: "#", github: "#" },
      stats: { experience: "12+ years", projects: "100+", teams: "50+ people" },
    },
    {
      name: "Sarah Chen",
      role: "CTO & Co-Founder",
      image: "/placeholder.svg?height=500&width=400",
      bio: "Ex-Microsoft Principal Architect specializing in distributed systems and AI. Built cloud infrastructure that processes 10TB+ data daily.",
      expertise: ["System Architecture", "Cloud Computing", "AI/ML", "Security", "DevOps", "Data Engineering"],
      achievements: ["Ex-Microsoft Principal", "MIT PhD Computer Science", "AWS Certified", "Open Source Contributor"],
      social: { linkedin: "#", twitter: "#", github: "#" },
      stats: { experience: "10+ years", systems: "Enterprise scale", certifications: "15+" },
    },
    {
      name: "Marcus Johnson",
      role: "Head of Design & UX",
      image: "/placeholder.svg?height=500&width=400",
      bio: "Award-winning designer from Apple's Human Interface team. Created design systems used by millions of users across multiple platforms.",
      expertise: ["UX/UI Design", "Design Systems", "User Research", "Prototyping", "Brand Identity", "Accessibility"],
      achievements: ["Ex-Apple Design Team", "Design Awards Winner", "IDEO Alumni", "Design Mentor"],
      social: { linkedin: "#", twitter: "#", github: "#" },
      stats: { experience: "8+ years", designs: "200+ products", awards: "25+" },
    },
    {
      name: "Emily Zhang",
      role: "Head of AI & Data Science",
      image: "/placeholder.svg?height=500&width=400",
      bio: "PhD in Machine Learning from Stanford. Former Tesla AI researcher who developed autonomous driving algorithms and computer vision systems.",
      expertise: ["Machine Learning", "Computer Vision", "NLP", "Data Science", "Deep Learning", "AI Research"],
      achievements: ["Stanford PhD ML", "Ex-Tesla AI Team", "Research Publications", "AI Conference Speaker"],
      social: { linkedin: "#", twitter: "#", github: "#" },
      stats: { experience: "9+ years", models: "50+ AI models", papers: "20+ published" },
    },
    {
      name: "David Kim",
      role: "Head of Mobile Development",
      image: "/placeholder.svg?height=500&width=400",
      bio: "Mobile development expert with apps downloaded 50M+ times. Former Uber engineer who built real-time location services at global scale.",
      expertise: [
        "React Native",
        "Flutter",
        "iOS Development",
        "Android Development",
        "Mobile Architecture",
        "Performance",
      ],
      achievements: ["Ex-Uber Senior Engineer", "50M+ App Downloads", "Mobile Expert", "Tech Conference Speaker"],
      social: { linkedin: "#", twitter: "#", github: "#" },
      stats: { experience: "7+ years", downloads: "50M+", apps: "100+" },
    },
    {
      name: "Lisa Wang",
      role: "Head of Cloud & DevOps",
      image: "/placeholder.svg?height=500&width=400",
      bio: "Cloud infrastructure specialist from Amazon Web Services. Built systems that handle Black Friday traffic spikes and maintain 99.99% uptime.",
      expertise: ["AWS/Azure/GCP", "Kubernetes", "DevOps", "Infrastructure", "Security", "Monitoring"],
      achievements: [
        "Ex-AWS Solutions Architect",
        "Cloud Certifications",
        "DevOps Expert",
        "Infrastructure Specialist",
      ],
      social: { linkedin: "#", twitter: "#", github: "#" },
      stats: { experience: "6+ years", uptime: "99.99%", deployments: "1000+" },
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Scene3D />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <Badge className="bg-black text-white border border-white/20 mb-6 px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Leadership Team
            </Badge>
            <StaggeredText text="Meet The Visionaries" className="text-5xl md:text-7xl font-bold mb-8" />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-xl text-gray-300 max-w-4xl mx-auto"
            >
              Industry veterans who've built products used by billions at the world's leading tech companies. Our
              diverse team brings together expertise from Google, Microsoft, Apple, Tesla, and more.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group team-card"
              >
                <Card className="h-full bg-gradient-to-br from-gray-900/90 to-black/90 border-white/10 hover:border-white/30 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                      {member.achievements.slice(0, 2).map((achievement, idx) => (
                        <Badge key={idx} className="bg-black/50 text-white border-white/20 backdrop-blur-sm text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-gray-200 font-semibold mb-4 text-lg">{member.role}</p>
                    <p className="text-gray-300 mb-6 leading-relaxed">{member.bio}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white/5 rounded-xl">
                      {Object.entries(member.stats).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-white">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Expertise */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {member.expertise.map((skill, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-white/10 text-white border-white/20 text-xs justify-center"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3">
                      {[
                        {
                          icon: <Linkedin className="w-5 h-5" />,
                          href: member.social.linkedin,
                          color: "hover:text-blue-400",
                        },
                        {
                          icon: <Twitter className="w-5 h-5" />,
                          href: member.social.twitter,
                          color: "hover:text-sky-400",
                        },
                        {
                          icon: <Github className="w-5 h-5" />,
                          href: member.social.github,
                          color: "hover:text-gray-300",
                        },
                      ].map((social, idx) => (
                        <motion.div key={idx} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button
                            size="sm"
                            variant="ghost"
                            className={`text-gray-400 ${social.color} hover:bg-white/10 rounded-xl p-3`}
                          >
                            {social.icon}
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <StaggeredText text="Our Collective Impact" className="text-4xl md:text-6xl font-bold mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Years Combined Experience", icon: "🎯" },
              { number: "2B+", label: "Users Impacted", icon: "👥" },
              { number: "500M+", label: "App Downloads", icon: "📱" },
              { number: "99.9%", label: "System Uptime", icon: "⚡" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-500">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
