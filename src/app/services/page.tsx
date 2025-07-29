"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Cloud, Brain, ArrowRight, CheckCircle, Cpu } from "lucide-react"
import { Scene3D } from "@/components/3d-scene"
import { AnimatedText, StaggeredText } from "@/components/animated-text"

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "AI-Powered Web Development",
      description: "Next-generation web applications with integrated AI capabilities that scale to millions of users",
      features: [
        "React & Next.js 14",
        "AI Integration",
        "Serverless Architecture",
        "Real-time Analytics",
        "Progressive Web Apps",
        "Advanced SEO",
      ],
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      stats: { projects: "200+", satisfaction: "99%", performance: "3x faster" },
      price: "Starting at $15,000",
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Cross-Platform Mobile Apps",
      description: "Native performance with cross-platform efficiency for iOS and Android platforms",
      features: [
        "React Native",
        "Flutter",
        "Native iOS/Android",
        "AR/VR Integration",
        "Push Notifications",
        "Offline Support",
      ],
      gradient: "from-purple-600 via-pink-600 to-rose-600",
      stats: { downloads: "5M+", rating: "4.9★", platforms: "iOS & Android" },
      price: "Starting at $25,000",
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Cloud & DevOps Solutions",
      description: "Scalable infrastructure with automated deployment and monitoring systems",
      features: ["AWS/Azure/GCP", "Kubernetes", "CI/CD Pipelines", "Monitoring", "Auto-scaling", "Security"],
      gradient: "from-green-600 via-emerald-600 to-teal-600",
      stats: { uptime: "99.9%", scale: "1M+ users", deployment: "10x faster" },
      price: "Starting at $10,000",
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "AI & Machine Learning",
      description: "Custom AI solutions for business automation and intelligent decision making",
      features: [
        "Custom Models",
        "NLP Processing",
        "Computer Vision",
        "Predictive Analytics",
        "Chatbots",
        "Data Science",
      ],
      gradient: "from-orange-600 via-red-600 to-pink-600",
      stats: { accuracy: "95%+", models: "50+", automation: "80% reduction" },
      price: "Starting at $30,000",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We analyze your business needs and create a comprehensive strategy",
      duration: "1-2 weeks",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating user-centered designs and interactive prototypes",
      duration: "2-3 weeks",
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous testing and quality assurance",
      duration: "4-12 weeks",
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deployment, monitoring, and ongoing support and maintenance",
      duration: "Ongoing",
    },
  ]

  const openWhatsApp = () => {
    window.open("https://wa.me/919876543210", "_blank") // ✅ replace with your WhatsApp number
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
        <div className="absolute inset-0 opacity-30">
          <Scene3D  />
        </div>
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 from-black via-black/40 to-black" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <Badge className="bg-black text-white border border-white/20 mb-6 px-4 py-2">
              <Cpu className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <StaggeredText text="What We Create" className="text-5xl md:text-7xl font-bold mb-8" />
            <AnimatedText delay={1} className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive technology solutions that drive innovation and accelerate business growth through
              cutting-edge development and AI integration
            </AnimatedText>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.02, rotateX: 2 }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-gray-900/90 to-black/90 border-white/10 hover:border-white/30 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white shadow-2xl`}
                      >
                        {service.icon}
                      </motion.div>
                      <Badge className={`bg-gradient-to-r ${service.gradient} text-white border-0`}>
                        {service.price}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">{service.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white/5 rounded-xl">
                      {Object.entries(service.stats).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div
                            className={`text-lg font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                          >
                            {value}
                          </div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={openWhatsApp}
                      className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 rounded-xl shadow-lg`}
                    >
                      Get Started <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 relative">
            <div className="absolute inset-0 opacity-30">
          <Scene3D  />
        </div>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <StaggeredText text="Our Process" className="text-5xl md:text-6xl font-bold mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10 rounded-3xl p-8 h-full group-hover:border-white/30 transition-all duration-500">
                  <div className="text-6xl font-bold text-white mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 mb-4">{step.description}</p>
                  <Badge className="bg-black text-white border border-white/20">{step.duration}</Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
