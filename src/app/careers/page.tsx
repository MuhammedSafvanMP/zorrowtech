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
  Users,
  Smile,
  Frown,
  AlertCircle,
  Bell,
  Download,
  FileText,
} from "lucide-react";
// import { Scene3D } from "@/components/3d-scene";
import { useState, useRef } from "react";

export default function CareersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    position: "",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const jobsPerPage = 3;

  // Empty jobs array - no current openings
  const jobs: any[] = [];

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

  // Pagination logic (handles empty array)
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
    document
      .getElementById("jobs-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // WhatsApp number
      const phoneNumber = "7994960686";
      
      // Format the message with all form data
      let message = `*New Job Application*%0A%0A`;
      message += `*Full Name:* ${formData.fullName}%0A`;
      message += `*Email:* ${formData.email}%0A`;
      message += `*Phone:* ${formData.phone}%0A`;
      message += `*Location:* ${formData.location || 'Not provided'}%0A`;
      message += `*Position Interested:* ${formData.position || 'Not specified'}%0A`;
      message += `*Message:*%0A${formData.message || 'No message provided'}%0A%0A`;
      
      if (resumeFile) {
        message += `*Resume:* ${resumeFile.name} (${(resumeFile.size / 1024).toFixed(2)} KB)%0A`;
        message += `*Note:* Please request the resume file separately if needed.%0A`;
      }

      // Add timestamp
      const now = new Date();
      message += `%0A*Submitted:* ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, "_blank");

      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        position: "",
        message: "",
      });
      setResumeFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      // Show success message (optional)
      alert("Application data sent to WhatsApp! Please complete the message on WhatsApp.");
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error sending your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuickApplyWhatsApp = () => {
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert("Please fill in all required fields (Name, Email, and Phone)");
      return;
    }

    handleSubmit(new Event('submit') as any);
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
        <div className="absolute inset-0 bg-black/40" />
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
                <Briefcase className="w-4 h-4 mr-2" />
                Join Our Team
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent"
            >
              Build The Future With Us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Join a team of world-class engineers, designers, and innovators
              building technology that impacts millions of lives. We're looking
              for passionate individuals who want to shape the future of digital
              experiences.
            </motion.p>

            {/* WhatsApp Info Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-8 inline-flex items-center gap-2 bg-green-500/20 text-green-400 border border-green-500/30 px-4 py-2 rounded-full"
            >
              <Download className="w-4 h-4" />
              <span>Apply via WhatsApp for faster response</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-2xl md:text-3xl mb-2">{stat.icon}</div>
                  <div className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Work With Us?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We believe in creating an environment where talented people can
              do their best work and grow their careers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-black/70 via-black/50 to-black/40 border-white/10 hover:border-white/30 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6 md:p-8 text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${benefit.color} rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 text-white shadow-2xl`}
                    >
                      {benefit.icon}
                    </motion.div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="jobs-section" className="py-20 md:py-32 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Open Positions
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
              Find your next opportunity and join our mission to transform the
              digital landscape.
            </p>
          </motion.div>

          {/* No Jobs Available Message */}
          {jobs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <Card className="bg-gradient-to-br from-black/70 via-black/50 to-black/40 border-white/10 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-12 md:p-16 text-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
                  >
                    <Users className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  </motion.div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    No Open Positions Right Now
                  </h3>
                  
                  <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                    We're always on the lookout for talented individuals to join our team. 
                    Even though we don't have any immediate openings, we'd love to hear from you!
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={() => {
                          document.getElementById("quick-apply")?.scrollIntoView({ 
                            behavior: "smooth" 
                          });
                        }}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 rounded-full text-lg px-8 py-6 shadow-2xl"
                      >
                        <Send className="mr-2 w-5 h-5" />
                        Send Open Application
                      </Button>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                    </motion.div>
                  </div>

             
              
                </CardContent>
              </Card>

             
            </motion.div>
          ) : (
            <>
              <div className="space-y-8">
                {currentJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    {/* Job card content - same as before */}
                    <Card className="bg-gradient-to-br from-black/70 via-black/50 to-black/20 hover:border-white/30 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                      {/* ... job card JSX ... */}
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Pagination - only show if there are jobs */}
              {totalPages > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex justify-center items-center gap-4 mt-16"
                >
                  {/* ... pagination JSX ... */}
                </motion.div>
              )}
            </>
          )}
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
            {/* Modal content - same as before */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              className="bg-gradient-to-br from-black/70 via-black/50 to-black/20 border-white/20 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ... modal JSX ... */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Application Form */}
      <section id="quick-apply" className="py-20 md:py-32 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Quick Application
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Don't see the perfect role? Send us your information via WhatsApp for faster response.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-black/70 via-black/50 to-black/40 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm text-gray-400 mb-1 block">Full Name *</label>
                      <Input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12 md:h-14 text-base md:text-lg focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-1 block">Email Address *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12 md:h-14 text-base md:text-lg focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm text-gray-400 mb-1 block">Phone Number *</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12 md:h-14 text-base md:text-lg focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-1 block">Current Location</label>
                      <Input
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Mumbai, India"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12 md:h-14 text-base md:text-lg focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-400 mb-1 block">Position of Interest</label>
                    <Input
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      placeholder="e.g., Full Stack Developer"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12 md:h-14 text-base md:text-lg focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-400 mb-1 block">Tell us about yourself</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share your experience, skills, and why you'd like to join us..."
                      rows={6}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl text-base md:text-lg focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex-1">
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        id="resume-upload"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => fileInputRef.current?.click()}
                        className="border-white/30 text-white hover:bg-white/10 rounded-xl h-12 md:h-14 px-6 md:px-8 bg-transparent backdrop-blur-sm w-full sm:w-auto"
                      >
                        <Upload className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                        {resumeFile ? resumeFile.name : "Upload Resume"}
                      </Button>
                    </div>
                    <span className="text-gray-400 text-xs md:text-sm">
                      PDF, DOC, or DOCX (Max 5MB)
                    </span>
                  </div>

                  {resumeFile && (
                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-3 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-green-400" />
                      <span className="text-sm text-green-400">{resumeFile.name}</span>
                      <span className="text-xs text-gray-400 ml-auto">
                        {(resumeFile.size / 1024).toFixed(2)} KB
                      </span>
                    </div>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="button"
                      onClick={handleQuickApplyWhatsApp}
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90 rounded-xl h-12 md:h-14 text-base md:text-lg font-semibold shadow-2xl"
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <Download className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                          Send Application via WhatsApp
                        </>
                      )}
                    </Button>
                  </motion.div>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    By submitting, you agree to share your information via WhatsApp for recruitment purposes.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}