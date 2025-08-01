"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Rocket,
  Heart,
  Coffee,
  Zap,
  Globe,
  Award,
  Upload,
  Send,
  ChevronLeft,
  ChevronRight,
  X,
  Mail,
} from "lucide-react";
// import { Scene3D } from "@/components/3d-scene";
import { useState } from "react";

export default function CareersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const jobsPerPage = 3;

  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      salary: "$120k - $180k",
      experience: "5+ years",
      description:
        "Join our engineering team to build next-generation web applications using React, Next.js, and Node.js.",
      requirements: [
        "5+ years of React/Next.js experience",
        "Strong Node.js and TypeScript skills",
        "Experience with cloud platforms (AWS/Azure)",
        "Knowledge of microservices architecture",
        "Experience with AI/ML integration",
      ],
      benefits: [
        "Equity package",
        "Health insurance",
        "Remote work",
        "Learning budget",
      ],
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      id: 2,
      title: "AI/ML Engineer",
      department: "AI Research",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$140k - $200k",
      experience: "4+ years",
      description:
        "Lead AI initiatives and develop machine learning models that power our intelligent applications.",
      requirements: [
        "PhD/MS in Computer Science or related field",
        "4+ years of ML/AI experience",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with NLP and Computer Vision",
        "Published research papers preferred",
      ],
      benefits: [
        "Stock options",
        "Conference budget",
        "Research time",
        "Top-tier equipment",
      ],
      gradient: "from-purple-600 to-pink-600",
    },
    {
      id: 3,
      title: "Senior UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      salary: "$100k - $150k",
      experience: "4+ years",
      description:
        "Create beautiful, intuitive user experiences that delight millions of users worldwide.",
      requirements: [
        "4+ years of UX/UI design experience",
        "Proficiency in Figma, Sketch, Adobe Creative Suite",
        "Strong portfolio of web and mobile designs",
        "Experience with design systems",
        "User research and testing experience",
      ],
      benefits: [
        "Creative freedom",
        "Design tools budget",
        "Flexible hours",
        "Team retreats",
      ],
      gradient: "from-green-600 to-emerald-600",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      salary: "$110k - $160k",
      experience: "3+ years",
      description:
        "Build and maintain scalable infrastructure that supports millions of users globally.",
      requirements: [
        "3+ years of DevOps experience",
        "Expertise in Kubernetes, Docker",
        "AWS/Azure/GCP certifications",
        "CI/CD pipeline experience",
        "Infrastructure as Code (Terraform)",
      ],
      benefits: [
        "Certification budget",
        "On-call compensation",
        "Latest tech",
        "Growth opportunities",
      ],
      gradient: "from-orange-600 to-red-600",
    },
    {
      id: 5,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$130k - $180k",
      experience: "5+ years",
      description:
        "Drive product strategy and work with cross-functional teams to deliver exceptional user experiences.",
      requirements: [
        "5+ years of product management experience",
        "Experience with B2B/B2C products",
        "Strong analytical and communication skills",
        "Technical background preferred",
        "Experience with agile methodologies",
      ],
      benefits: [
        "Product ownership",
        "Strategy involvement",
        "Cross-team collaboration",
        "Impact visibility",
      ],
      gradient: "from-indigo-600 to-purple-600",
    },
    {
      id: 6,
      title: "Sales Executive",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      salary: "$80k - $120k + Commission",
      experience: "3+ years",
      description:
        "Drive revenue growth by building relationships with enterprise clients and closing high-value deals.",
      requirements: [
        "3+ years of B2B sales experience",
        "Experience selling to enterprise clients",
        "Strong communication and negotiation skills",
        "CRM experience (Salesforce preferred)",
        "Tech industry background preferred",
      ],
      benefits: [
        "Uncapped commission",
        "Sales incentives",
        "Travel opportunities",
        "Client events",
      ],
      gradient: "from-teal-600 to-blue-600",
    },
    {
      id: 7,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $130k",
      experience: "3+ years",
      description:
        "Build responsive, high-performance user interfaces using modern frontend technologies.",
      requirements: [
        "3+ years of React experience",
        "Strong CSS and JavaScript skills",
        "Experience with TypeScript",
        "Knowledge of modern build tools",
        "Understanding of web performance optimization",
      ],
      benefits: [
        "Remote work",
        "Flexible hours",
        "Learning budget",
        "Health insurance",
      ],
      gradient: "from-cyan-600 to-blue-600",
    },
    {
      id: 8,
      title: "Backend Developer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      salary: "$100k - $140k",
      experience: "4+ years",
      description:
        "Design and implement scalable backend systems and APIs that power our applications.",
      requirements: [
        "4+ years of backend development experience",
        "Strong knowledge of Node.js or Python",
        "Experience with databases (SQL/NoSQL)",
        "Understanding of microservices architecture",
        "Experience with cloud platforms",
      ],
      benefits: [
        "Stock options",
        "Health insurance",
        "Remote work",
        "Professional development",
      ],
      gradient: "from-violet-600 to-purple-600",
    },
    {
      id: 9,
      title: "Data Scientist",
      department: "Data",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $170k",
      experience: "3+ years",
      description:
        "Extract insights from data to drive business decisions and improve our products.",
      requirements: [
        "3+ years of data science experience",
        "Strong Python and R skills",
        "Experience with machine learning frameworks",
        "Knowledge of statistical analysis",
        "Experience with data visualization tools",
      ],
      benefits: [
        "Research budget",
        "Conference attendance",
        "Flexible schedule",
        "Top equipment",
      ],
      gradient: "from-emerald-600 to-teal-600",
    },
    {
      id: 10,
      title: "Mobile Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$95k - $135k",
      experience: "3+ years",
      description:
        "Develop high-quality mobile applications for iOS and Android platforms.",
      requirements: [
        "3+ years of mobile development experience",
        "Proficiency in React Native or Flutter",
        "Experience with native iOS/Android development",
        "Knowledge of mobile app deployment",
        "Understanding of mobile UI/UX principles",
      ],
      benefits: [
        "Device allowance",
        "Remote work",
        "Flexible hours",
        "Health insurance",
      ],
      gradient: "from-pink-600 to-rose-600",
    },
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description:
        "Comprehensive health, dental, and vision insurance plus wellness programs",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Career Growth",
      description:
        "Continuous learning opportunities, mentorship, and clear career progression paths",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Work-Life Balance",
      description:
        "Flexible hours, remote work options, and unlimited PTO policy",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cutting-Edge Tech",
      description:
        "Work with the latest technologies and tools, plus budget for learning and conferences",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description:
        "Build products used by millions worldwide and make a real difference",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Equity & Rewards",
      description:
        "Competitive salary, equity packages, and performance-based bonuses",
      color: "from-violet-500 to-purple-500",
    },
  ];

  const stats = [
    { number: "50+", label: "Team Members", icon: "👥" },
    { number: "15+", label: "Countries", icon: "🌍" },
    { number: "4.9/5", label: "Employee Rating", icon: "⭐" },
    { number: "95%", label: "Retention Rate", icon: "💎" },
  ];

  // Pagination logic
  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = jobs.slice(startIndex, endIndex);

  const handleApplyClick = (job: any) => {
    setSelectedJob(job);
    setIsApplyModalOpen(true);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to jobs section
    document
      .getElementById("jobs-section")
      ?.scrollIntoView({ behavior: "smooth" });
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
        <div className="absolute inset-0 " />


        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <Badge className="bg-black text-white border border-white/20 mb-6 px-4 py-2">
              <Briefcase className="w-4 h-4 mr-2" />
              Join Our Team
            </Badge>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-8">
                Build The Future With Us
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-xl text-gray-300 max-w-4xl mx-auto"
              >
                Join a team of world-class engineers, designers, and innovators
                building technology that impacts millions of lives. We're
                looking for passionate individuals who want to shape the future
                of digital experiences.
              </motion.p>
            </motion.div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold bg-gradient-to-r text-white bg-clip-text  mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We believe in creating an environment where talented people can
                do their best work and grow their careers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="group"
                >
                  <Card className="h-full bg-gradient-to-br from-black/70 via-black/50 to-black/20 hover:border-white/30 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-8 text-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-3xl flex items-center justify-center mx-auto mb-6 text-white shadow-2xl`}
                      >
                        {benefit.icon}
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="jobs-section" className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Find your next opportunity and join our mission to transform the
                digital landscape.
              </p>
              <div className="text-gray-400">
                Showing {startIndex + 1}-{Math.min(endIndex, jobs.length)} of{" "}
                {jobs.length} positions
              </div>
            </motion.div>

            <div className="space-y-8">
              {currentJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-gradient-to-br from-black/70 via-black/50 to-black/20 hover:border-white/30 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                          <div className="flex flex-wrap items-center gap-4 mb-6">
                            <Badge
                              className={`bg-gradient-to-r ${job.gradient} text-white border-0 px-4 py-2`}
                            >
                              {job.department}
                            </Badge>
                            <div className="flex items-center text-gray-400 text-sm">
                              <MapPin className="w-4 h-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center text-gray-400 text-sm">
                              <Clock className="w-4 h-4 mr-1" />
                              {job.type}
                            </div>
                            <div className="flex items-center text-gray-400 text-sm">
                              <DollarSign className="w-4 h-4 mr-1" />
                              {job.salary}
                            </div>
                          </div>

                          <h3 className="text-2xl font-bold text-white mb-4">
                            {job.title}
                          </h3>
                          <p className="text-gray-300 mb-6 leading-relaxed">
                            {job.description}
                          </p>

                          <div className="mb-6">
                            <h4 className="text-lg font-semibold text-white mb-3">
                              Requirements:
                            </h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req, idx) => (
                                <li
                                  key={idx}
                                  className="text-gray-300 flex items-start"
                                >
                                  <span className="text-green-400 mr-2">•</span>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {job.benefits.map((benefit, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors"
                              >
                                {benefit}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col justify-center">
                          <div className="bg-white/5 rounded-2xl p-6 text-center mb-6">
                            <div className="text-sm text-gray-400 mb-2">
                              Experience Required
                            </div>
                            <div className="text-2xl font-bold text-white">
                              {job.experience}
                            </div>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              onClick={() => handleApplyClick(job)}
                              className={`w-full bg-gradient-to-r ${job.gradient} hover:opacity-90 rounded-xl text-lg py-3 shadow-2xl`}
                            >
                              Apply Now
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

              {totalPages > 1 && (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="flex justify-center items-center gap-4 mt-16"
  >
    {/* Previous */}
    <Button
      size="sm"
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="bg-gradient-to-r from-black via-black/40 to-black text-white px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <ChevronLeft className="w-4 h-4 mr-1" />
      Previous
    </Button>

    {/* Pages */}
    <div className="flex gap-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Button
          key={page}
          size="sm"
          onClick={() => handlePageChange(page)}
          className={`px-4 py-2 rounded-md text-white bg-gradient-to-r from-black via-black/40 to-black ${
            currentPage === page ? "ring-2 ring-white/50" : ""
          }`}
        >
          {page}
        </Button>
      ))}
    </div>

    {/* Next */}
    <Button
      size="sm"
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="bg-gradient-to-r from-black via-black/40 to-black text-white px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Next
      <ChevronRight className="w-4 h-4 ml-1" />
    </Button>
  </motion.div>
)}

         
          </motion.div>
        </div>
      </section>

      {/* Apply Modal */}
      <AnimatePresence>
        {isApplyModalOpen && selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsApplyModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              className="bg-gradient-to-br from-black/70 via-black/50 to-black/20 border-white/20 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Apply for {selectedJob.title}
                  </h2>
                  <p className="text-gray-400">
                    {selectedJob.department} • {selectedJob.location}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsApplyModalOpen(false)}
                  className="text-white/60 hover:text-white hover:bg-white/10 rounded-xl"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    placeholder="Full Name *"
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-14 text-lg focus:ring-2 focus:ring-purple-500"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-14 text-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    placeholder="Phone Number *"
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-14 text-lg focus:ring-2 focus:ring-purple-500"
                  />
                  <Input
                    placeholder="LinkedIn Profile"
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-14 text-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <Input
                  placeholder="Current Location *"
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-14 text-lg focus:ring-2 focus:ring-purple-500"
                />
                <Textarea
                  placeholder="Cover Letter - Tell us why you're perfect for this role... *"
                  rows={6}
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl text-lg focus:ring-2 focus:ring-purple-500"
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 rounded-xl h-14 px-8 bg-transparent backdrop-blur-sm"
                    >
                      <Upload className="mr-2 w-5 h-5" />
                      Upload Resume *
                    </Button>
                    <span className="text-gray-400 text-sm">
                      PDF, DOC, or DOCX (Max 5MB)
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 rounded-xl h-14 px-8 bg-transparent backdrop-blur-sm"
                    >
                      <Upload className="mr-2 w-5 h-5" />
                      Portfolio/Work Samples
                    </Button>
                    <span className="text-gray-400 text-sm">
                      Optional - Showcase your work
                    </span>
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Position Details:
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Salary:</span>
                      <span className="text-white ml-2">
                        {selectedJob.salary}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Experience:</span>
                      <span className="text-white ml-2">
                        {selectedJob.experience}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Type:</span>
                      <span className="text-white ml-2">
                        {selectedJob.type}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Location:</span>
                      <span className="text-white ml-2">
                        {selectedJob.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1"
                  >
                    <Button
                      type="submit"
                      className={`w-full bg-gradient-to-r ${selectedJob.gradient} hover:opacity-90 rounded-xl h-14 text-lg font-semibold shadow-2xl`}
                    >
                      <Send className="mr-2 w-5 h-5" />
                      Submit Application
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        const subject = `Application for ${selectedJob.title} Position`;
                        const body = `Dear Zorrow Tech Hiring Team,

I am interested in applying for the ${selectedJob.title} position in your ${selectedJob.department} department.

Position Details:
- Title: ${selectedJob.title}
- Department: ${selectedJob.department}
- Location: ${selectedJob.location}
- Salary: ${selectedJob.salary}

I believe my skills and experience make me a great fit for this role. Please find my resume attached.

Best regards,
[Your Name]`;
                        window.location.href = `mailto:careers@zorrowtech.com?subject=${encodeURIComponent(
                          subject
                        )}&body=${encodeURIComponent(body)}`;
                      }}
                      className="border-white/30 text-white hover:bg-white/10 rounded-xl h-14 px-6 bg-transparent backdrop-blur-sm"
                    >
                      <Mail className="w-5 h-5" />
                    </Button>
                  </motion.div>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Application Form */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Quick Application
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't see the perfect role? Send us your information and we'll
                reach out when something matches your skills.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              
              <Card className="bg-gradient-to-br from-black/70 via-black/50 to-black/20 border-white/10 backdrop-blur-sm">
                <CardContent className="p-10">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        placeholder="Full Name"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-14 text-lg focus:ring-2 focus:ring-purple-500"
                      />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-14 text-lg focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        placeholder="Phone Number"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-14 text-lg focus:ring-2 focus:ring-purple-500"
                      />
                      <Input
                        placeholder="Position of Interest"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-14 text-lg focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <Textarea
                      placeholder="Tell us about yourself and why you'd be a great fit..."
                      rows={6}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl text-lg focus:ring-2 focus:ring-purple-500"
                    />
                    <div className="flex items-center gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10 rounded-xl h-14 px-8 bg-transparent backdrop-blur-sm"
                      >
                        <Upload className="mr-2 w-5 h-5" />
                        Upload Resume
                      </Button>
                      <span className="text-gray-400 text-sm">
                        PDF, DOC, or DOCX (Max 5MB)
                      </span>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="w-full  from-black via-black/40 to-black rounded-xl h-14 text-lg font-semibold shadow-2xl">
                        Submit Application <Send className="ml-2 w-5 h-5" />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
