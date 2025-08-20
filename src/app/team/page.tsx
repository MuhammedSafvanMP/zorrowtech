"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Linkedin,  Github, Instagram } from "lucide-react"
// import { Scene3D } from "@/components/3d-scene"
import { StaggeredText } from "@/components/animated-text"

export default function TeamPage() {
  const team = [
    {
      name: "Muhammed Farhan",
      role: "CEO & Co-Founder",
      image: "/placeholder.svg?height=500&width=400",
      bio: "Entrepreneur with a strong focus on business growth and scaling tech solutions. Skilled in building teams, driving innovation, and setting strategic vision for long-term success.",
      expertise: [
        "Strategic Vision",
        "Product Development",
        "Team Leadership",
        "AI Strategy",
        "Scalable Systems",
        "Business Growth",
      ],
      achievements: ["Business Leader", "Tech Innovator"],
      social: { linkedin: "#", instagram: "#", github: "#" },
      stats: { experience: "4+ years" },
    },
    {
      name: "Anu",
      role: "Sales & Marketing Director",
      image: "/placeholder.svg?height=500&width=400",
      bio: "Marketing strategist experienced in digital campaigns, brand positioning, and scaling business reach. Specialized in SEO, Google Ads, and content strategies that drive measurable growth.",
      expertise: ["Google ads", "SEO", "Content Marketing", "Brand Strategy"],
      achievements: ["Marketing Specialist", "Brand Growth Expert"],
      social: { linkedin: "#", instagram: "#", github: "#" },
      stats: { experience: "2+ years", systems: "Enterprise scale", certifications: "15+" },
    },
    {
      name: "Muhammed Thasleem",
      role: "Full Stack Developer & Trainer",
      image: "/placeholder.svg?height=500&width=400",
      bio: "Experienced full stack engineer and trainer with a passion for building scalable web and mobile applications. Skilled in MERN, Python, Java, and React Native with a track record of mentoring teams.",
      expertise: ["MERN", "Python", "Java", "React Native"],
      achievements: ["Senior Engineer", "Team Leader", "Tech Conference Speaker", "Open Source Contributor"],
      social: { linkedin: "#", instagram: "#", github: "#" },
      stats: { experience: "3+ years", projects: "15+", teams: "15+" },
    },
    {
      name: "Muhammed Safvan MP",
      role: "Full Stack Developer & Trainer",
      image: "/placeholder.svg?height=500&width=400",
      bio: "MERN stack developer passionate about building modern web applications and cloud solutions. Skilled in Next.js, AWS, and React Native with hands-on experience delivering impactful projects.",
      expertise: ["MERN", "AWS", "React Native", "Blender", "Next.js"],
      achievements: ["Senior Engineer", "Team Leader", "Tech Conference Speaker", "Open Source Contributor"],
      social: { linkedin: "#", instagram: "#", github: "#" },
      stats: { experience: "3+ years", projects: "20+", teams: "10+" },
    },
    {
      name: "Anshad UK",
      role: "Python Django Developer",
      image: "/placeholder.svg?height=500&width=400",
      bio: "Backend-focused developer with expertise in Python and Django. Experienced in building scalable web applications, customizing Odoo solutions, and delivering high-quality software for businesses.",
      expertise: ["Python", "React", "Django", "Web Development", "Odoo Development"],
      achievements: ["Senior Engineer", "Web Expert", "Tech Conference Speaker"],
      social: { linkedin: "#", instagram: "#", github: "#" },
      stats: { experience: "3+ years", projects: "10+", teams: "5+" },
    },
    {
      name: "Nihal",
      role: "UI/UX Designer & Video Editor",
      image: "/placeholder.svg?height=500&width=400",
      bio: "Creative UI/UX designer and video editor with a strong eye for detail. Experienced in creating intuitive designs, engaging visuals, and brand-focused content that connects with audiences.",
      expertise: ["Figma", "Video Editing", "UI/UX Design", "Branding", "Prototyping"],
      achievements: ["Design System Creator", "Design Conference Speaker"],
      social: { linkedin: "#", instagram: "#", github: "#" },
      stats: { experience: "2+ years", projects: "16+", teams: "5+" },
    },
  ];

  return (
    <div className="relative min-h-screen text-white overflow-hidden pt-20">
      {/* ✅ Fixed background image */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/banner-2.png"
          alt="Background"
          className="w-full h-full object-cover blur-md"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Section */}
      <section className="py-32 relative z-10 overflow-hidden">
        <div className="absolute inset-0" />

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
            <StaggeredText
              text="Meet The Visionaries"
              className="text-5xl md:text-7xl font-bold mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-xl text-gray-300 max-w-4xl mx-auto"
            >
              Industry veterans who've built products used by billions at the world's leading tech companies. Our diverse team brings together expertise from Google, Microsoft, Apple, Tesla, and more.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 relative z-10">
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
                <Card className="bg-gradient-to-br from-black/70 via-black/50 to-black/20 border-white/10 hover:border-white/30 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                      {member.achievements.slice(0, 2).map((achievement, idx) => (
                        <Badge
                          key={idx}
                          className="bg-black/50 text-white border-white/20 backdrop-blur-sm text-xs"
                        >
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
                          icon: <Instagram className="w-5 h-5" />,
                          href: member.social.instagram,
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
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <StaggeredText
              text="Our Collective Impact"
              className="text-4xl md:text-6xl font-bold mb-8"
            />
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
                <div className="bg-gradient-to-br from-black/70 via-black/50 to-black/20 border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-500">
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
