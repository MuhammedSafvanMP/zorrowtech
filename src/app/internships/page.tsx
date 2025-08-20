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
} from "lucide-react";
import { useState } from "react";

export default function InternshipsPage() {
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  // ✅ Internship Programs (Updated)
  const programs = [
    {
      id: 1,
      title: "MERN Stack Development Internship",
      duration: "3 months",
      type: "Paid Internship",
      online: "₹1499/month",
      offline: "₹1799/month",
      location: "Remote / Hybrid",
      spots: "10 positions",
      description:
        "Master full stack development with MongoDB, Express, React, and Node.js while working on real-world projects.",
      skills: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "Git"],
      requirements: [
        "Basic knowledge of JavaScript and HTML/CSS",
        "Passion for learning and problem-solving",
        "Available for 20+ hours per week",
      ],
      benefits: [
        "Mentorship from senior developers",
        "Real project experience",
        "Certificate of completion",
        "Job referral support",
      ],
      gradient: "from-blue-600 to-cyan-600",
      startDate: "September 2025",
    },
        {
      id: 2,
      title: "PERN Stack Development Internship",
      duration: "3 months",
      type: "Paid Internship",
      online: "₹1499/month",
      offline: "₹1799/month",
      location: "Remote / Hybrid",
      spots: "10 positions",
      description:
        "Master full stack development with Postgresql, Express, React, and Node.js while working on real-world projects.",
      skills: ["React", "Node.js", "Express", "Postgresql", "TypeScript", "Git"],
      requirements: [
        "Basic knowledge of JavaScript and HTML/CSS",
        "Passion for learning and problem-solving",
        "Available for 20+ hours per week",
      ],
      benefits: [
        "Mentorship from senior developers",
        "Real project experience",
        "Certificate of completion",
        "Job referral support",
      ],
      gradient: "from-indigo-600 to-purple-600",
      startDate: "September 2025",
    },
    {
      id: 3,
      title: "Django Development Internship",
      duration: "3 months",
      type: "Paid Internship",
      online: "₹1499/month",
      offline: "₹1799/month",
      location: "Remote / Hybrid",
      spots: "8 positions",
      description:
        "Learn backend development with Django, REST APIs, and databases while building scalable applications.",
      skills: ["Python", "Django", "REST API", "PostgreSQL/MySQL", "Git"],
      requirements: [
        "Good understanding of Python",
        "Knowledge of basic web concepts",
        "Problem-solving mindset",
      ],
      benefits: [
        "Backend development expertise",
        "Certificate of completion",
        "Industry mentorship",
        "Real project exposure",
      ],
      gradient: "from-green-600 to-emerald-600",
      startDate: "September 2025",
    },
    {
      id: 4,
      title: "Flutter Development Internship",
      duration: "3 months",
      type: "Paid Internship",
      online: "₹1499/month",
      offline: "₹1799/month",
      location: "Remote / Hybrid",
      spots: "6 positions",
      description:
        "Build cross-platform mobile apps for Android and iOS using Flutter and Dart.",
      skills: ["Flutter", "Dart", "Firebase", "REST API", "Mobile UI/UX"],
      requirements: [
        "Basic understanding of programming (OOP)",
        "Interest in mobile development",
        "Problem-solving skills",
      ],
      benefits: [
        "App development expertise",
        "Certificate of completion",
        "Mentorship from mobile experts",
        "Portfolio projects",
      ],
      gradient: "from-orange-600 to-red-600",
      startDate: "September 2025",
    },
  ];

  // ✅ Learning Programs (keeping original)
  const learningPrograms = [
    {
      title: "Zero to Full Stack Developer",
      duration: "6 months",
      level: "Beginner",
      price: "Free",
      description:
        "Complete bootcamp covering HTML, CSS, JavaScript, React, Node.js, and databases.",
      modules: 12,
      projects: 8,
      gradient: "from-indigo-600 to-purple-600",
    },
    {
      title: "AI/ML Mastery Program",
      duration: "4 months",
      level: "Intermediate",
      price: "$299",
      description:
        "Deep dive into machine learning, neural networks, and AI application development.",
      modules: 10,
      projects: 6,
      gradient: "from-violet-600 to-pink-600",
    },
    {
      title: "Cloud Architecture Certification",
      duration: "3 months",
      level: "Advanced",
      price: "$199",
      description:
        "Master AWS, Azure, and GCP with hands-on projects and certification preparation.",
      modules: 8,
      projects: 4,
      gradient: "from-cyan-600 to-blue-600",
    },
  ];

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
      quote:
        "Working on real AI projects gave me the confidence to pursue my PhD. The mentorship was incredible.",
      rating: 5,
      position: "PhD Student at Stanford",
    },
    {
      name: "Maria Rodriguez",
      program: "UX Design Internship",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "I built an amazing portfolio and landed my dream job. The design mentorship was world-class.",
      rating: 5,
      position: "Senior Designer at Apple",
    },
  ];

const handleWhatsappClick = (program: any) => {
  const phoneNumber = "9400517720"; // 📞 Your WhatsApp number
  const message = `Hello, I'm interested in the ${program.title} program.`; // customize message
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank"); // Open in new tab
};
  return (
    <div className="relative min-h-screen text-white overflow-hidden pt-20">
      {/* ✅ Fixed blurred background */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/banner-2.png"
          alt="Background"
          className="w-full h-full object-cover blur-md"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden z-10">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <Badge className="bg-black text-white border border-white/20 mb-6 px-4 py-2">
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
              Join our world-class internship programs and learning initiatives.
              Get hands-on experience, mentorship from industry experts, and
              launch your career in technology.
            </motion.p>
          </motion.div>
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
              Gain real-world experience working on cutting-edge projects with
              mentorship from industry experts.
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
                <Card className="relative h-full bg-gradient-to-br from-black/70 via-black/50 to-black/20 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <Badge
                        className={`bg-gradient-to-r ${program.gradient} text-white border-0 px-4 py-2`}
                      >
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

                    <h3 className="text-2xl font-bold text-white mb-4">
                      {program.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    {/* ✅ Show Online/Offline Fees */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/5 rounded-xl p-4 text-center">
                        <div className="text-sm text-gray-400 mb-1">
                          Online Fee
                        </div>
                        <div className="text-lg font-bold text-green-400">
                          {program.online}
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 text-center">
                        <div className="text-sm text-gray-400 mb-1">
                          Offline Fee
                        </div>
                        <div className="text-lg font-bold text-blue-400">
                          {program.offline}
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Skills You'll Learn:
                      </h4>
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

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                       onClick={() => handleWhatsappClick(program)}
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
    </div>
  );
}
