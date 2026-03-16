"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  MapPin,
  Clock,
  Users,
  Award,
  BookOpen,
  Target,
  Star,
  Calendar,
  CheckCircle,
  Sparkles,
  Rocket,
  Gift,
} from "lucide-react";
import { useState } from "react";

export default function InternshipsPage() {
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  // ✅ FREE Internship Programs with Certificate
  const programs = [
    {
      id: 1,
      title: "MERN Stack Development Internship",
      duration: "3 months",
      type: "Free Internship",
      fee: "FREE",
      location: "Remote / Hybrid",
      spots: "10 positions",
      description:
        "Master full stack development with MongoDB, Express, React, and Node.js while working on real-world projects. Get hands-on experience and build production-ready applications.",
      skills: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "Git"],
      requirements: [
        "Basic knowledge of JavaScript and HTML/CSS",
        "Passion for learning and problem-solving",
        "Available for 20+ hours per week",
      ],
      benefits: [
        "Free mentorship from senior developers",
        "Real project experience",
        "Certificate of completion",
        "Job referral support",
        "Letter of recommendation"
      ],
      gradient: "from-blue-600 to-cyan-600",
      startDate: "September 2025",
      certificate: true,
    },
    {
      id: 2,
      title: "PERN Stack Development Internship",
      duration: "3 months",
      type: "Free Internship",
      fee: "FREE",
      location: "Remote / Hybrid",
      spots: "10 positions",
      description:
        "Master full stack development with PostgreSQL, Express, React, and Node.js while working on real-world projects. Build scalable and robust web applications.",
      skills: ["React", "Node.js", "Express", "PostgreSQL", "TypeScript", "Git"],
      requirements: [
        "Basic knowledge of JavaScript and HTML/CSS",
        "Passion for learning and problem-solving",
        "Available for 20+ hours per week",
      ],
      benefits: [
        "Free mentorship from senior developers",
        "Real project experience",
        "Certificate of completion",
        "Job referral support",
        "Letter of recommendation"
      ],
      gradient: "from-indigo-600 to-purple-600",
      startDate: "September 2025",
      certificate: true,
    },
    {
      id: 3,
      title: "Django Development Internship",
      duration: "3 months",
      type: "Free Internship",
      fee: "FREE",
      location: "Remote / Hybrid",
      spots: "8 positions",
      description:
        "Learn backend development with Django, REST APIs, and databases while building scalable applications. Master Python web development with industry best practices.",
      skills: ["Python", "Django", "REST API", "PostgreSQL/MySQL", "Git"],
      requirements: [
        "Good understanding of Python",
        "Knowledge of basic web concepts",
        "Problem-solving mindset",
        "Available for 20+ hours per week",
      ],
      benefits: [
        "Free backend development expertise",
        "Certificate of completion",
        "Industry mentorship",
        "Real project exposure",
        "Job referral support"
      ],
      gradient: "from-green-600 to-emerald-600",
      startDate: "September 2025",
      certificate: true,
    },
    {
      id: 4,
      title: "Flutter Development Internship",
      duration: "3 months",
      type: "Free Internship",
      fee: "FREE",
      location: "Remote / Hybrid",
      spots: "6 positions",
      description:
        "Build cross-platform mobile apps for Android and iOS using Flutter and Dart. Create beautiful, natively compiled applications for mobile from a single codebase.",
      skills: ["Flutter", "Dart", "Firebase", "REST API", "Mobile UI/UX"],
      requirements: [
        "Basic understanding of programming (OOP)",
        "Interest in mobile development",
        "Problem-solving skills",
        "Available for 20+ hours per week",
      ],
      benefits: [
        "Free app development expertise",
        "Certificate of completion",
        "Mentorship from mobile experts",
        "Portfolio projects",
        "Job referral support"
      ],
      gradient: "from-orange-600 to-red-600",
      startDate: "September 2025",
      certificate: true,
    },
  ];

  // ✅ Additional Free Learning Resources
  const freeResources = [
    {
      title: "Web Development Fundamentals",
      duration: "2 months",
      level: "Beginner",
      modules: 8,
      projects: 4,
      description: "Learn HTML, CSS, and JavaScript from scratch with hands-on projects.",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "Python for Beginners",
      duration: "6 weeks",
      level: "Beginner",
      modules: 6,
      projects: 3,
      description: "Master Python programming with practical examples and mini-projects.",
      gradient: "from-yellow-600 to-orange-600",
    },
    {
      title: "Database Design & SQL",
      duration: "1 month",
      level: "Intermediate",
      modules: 5,
      projects: 2,
      description: "Learn database design, SQL queries, and work with PostgreSQL and MongoDB.",
      gradient: "from-teal-600 to-cyan-600",
    },
  ];

  const handleWhatsappClick = (program: any) => {
    const phoneNumber = "7994960686";
    const message = `Hello, I'm interested in the FREE ${program.title} internship program. I'd like to apply and learn more about the certificate opportunities.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden pt-20">
      {/* Fixed blurred background */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/banner-2.png"
          alt="Background"
          className="w-full h-full object-cover blur-md"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Animated gradient orbs */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-20 right-10 w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden z-10">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm mb-6 px-6 py-2.5 rounded-full">
                <GraduationCap className="w-4 h-4 mr-2" />
                Free Internship Programs
              </Badge>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Launch Your Tech Career
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Join our <span className="text-yellow-400 font-bold">FREE internship programs</span> and get hands-on experience 
              with mentorship from industry experts. All programs include a 
              <span className="text-green-400 font-bold"> certificate of completion</span> to boost your career.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12"
            >
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Free Certificate</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-sm">34 Open Positions</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
                <Rocket className="w-4 h-4 text-green-400" />
                <span className="text-sm">Real Projects</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FREE Internship Programs */}
      <section className="py-20 md:py-32 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Free Internship Programs
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Gain real-world experience working on cutting-edge projects with
              mentorship from industry experts. All programs are 
              <span className="text-yellow-400 font-bold"> completely free</span> and include a 
              <span className="text-green-400 font-bold"> verified certificate</span>.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="relative h-full bg-gradient-to-br from-black/70 via-black/50 to-black/40 border-white/10 hover:border-white/30 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6 md:p-8">
                    {/* Top Badges */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <Badge
                        className={`bg-gradient-to-r ${program.gradient} text-white border-0 px-4 py-2 rounded-full font-medium`}
                      >
                        {program.type}
                      </Badge>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/50 px-4 py-2 rounded-full">
                        <Gift className="w-3 h-3 mr-1" />
                        {program.fee}
                      </Badge>
                      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50 px-4 py-2 rounded-full">
                        <Award className="w-3 h-3 mr-1" />
                        Certificate
                      </Badge>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
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
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {program.startDate}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {program.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    {/* FREE Badge Highlight */}
                    <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-4 mb-6 border border-yellow-500/30">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-yellow-500/30 rounded-full flex items-center justify-center">
                          <Gift className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div>
                          <div className="text-yellow-400 font-bold text-lg">100% FREE Program</div>
                          <div className="text-sm text-gray-300">Includes verified certificate upon completion</div>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-yellow-400" />
                        Skills You'll Learn:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {program.skills.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors px-3 py-1.5 rounded-full"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {program.requirements.map((req, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {program.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${program.gradient}`} />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={() => handleWhatsappClick(program)}
                        className={`w-full bg-gradient-to-r ${program.gradient} hover:opacity-90 rounded-full text-lg py-6 shadow-2xl border-0 font-semibold`}
                      >
                        Apply for Free Internship
                        <Rocket className="ml-2 w-5 h-5" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Learning Resources */}
      <section className="py-20 md:py-32 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Free Learning Resources
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Start your journey with our free learning materials and build a strong foundation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {freeResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-to-br from-black/70 via-black/50 to-black/40 border-white/10 hover:border-white/30 transition-all duration-500 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${resource.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                    <div className="flex justify-center gap-4 mb-4">
                      <Badge variant="outline" className="border-white/20 text-gray-300">
                        {resource.duration}
                      </Badge>
                      <Badge variant="outline" className="border-white/20 text-gray-300">
                        {resource.level}
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{resource.description}</p>
                    <div className="flex justify-center gap-4 text-sm text-gray-400">
                      <span>{resource.modules} Modules</span>
                      <span>{resource.projects} Projects</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Highlight Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-white/10"
          >
            <Award className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get a Verified Certificate</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              All our free internship programs include a verified certificate of completion 
              to showcase your skills and boost your career.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span>Industry Recognized</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span>Shareable on LinkedIn</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span>QR Code Verified</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}