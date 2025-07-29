"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Lightbulb,
  Mail,
  Phone,
  MapPin,
  Send,
  Rocket,
  Zap,
  Shield,
  Globe,
  Brain,
  TrendingUp,
  Github,
  Linkedin,
  Twitter,
  Navigation,
  Clock,
} from "lucide-react";
import { Scene3D } from "@/components/3d-scene";
import { StaggeredText } from "@/components/animated-text";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Scene3D  />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <Badge className="bg-black text-white border border-white/20 mb-6 px-4 py-2">
              <Lightbulb className="w-4 h-4 mr-2" />
              Let's Connect
            </Badge>
            <StaggeredText
              text="Start Your Journey"
              className="text-5xl md:text-7xl font-bold mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-xl text-gray-300 max-w-4xl mx-auto"
            >
              Ready to transform your business with cutting-edge technology?
              Let's discuss how we can bring your vision to life and create
              something extraordinary together.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gradient-to-br from-gray-900/90 to-black/90 border-white/10 backdrop-blur-sm">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold text-white mb-8">
                    Get In Touch
                  </h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        placeholder="Your Name"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-14 text-lg focus:ring-2 focus:ring-violet-500"
                      />
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-14 text-lg focus:ring-2 focus:ring-violet-500"
                      />
                    </div>
                    <Input
                      placeholder="Company Name"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-14 text-lg focus:ring-2 focus:ring-violet-500"
                    />
                    <Input
                      placeholder="Project Budget (Optional)"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-14 text-lg focus:ring-2 focus:ring-violet-500"
                    />
                    <Textarea
                      placeholder="Tell us about your project and goals..."
                      rows={6}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl text-lg focus:ring-2 focus:ring-violet-500"
                    />
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="w-full  from-black via-black/40 to-black rounded-xl h-14 text-lg font-semibold shadow-2xl">
                        Send Message <Send className="ml-2 w-5 h-5" />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-white mb-8">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center text-gray-300 bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center mr-6">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-lg">
                        Email
                      </div>
                      <div className="text-violet-400">
                        hello@zorrowtech.com
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center text-gray-300 bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mr-6">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-lg">
                        Phone
                      </div>
                      <div className="text-green-400">+1 (555) 123-4567</div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center text-gray-300 bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mr-6">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-lg">
                        Office
                      </div>
                      <div className="text-purple-400">San Francisco, CA</div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Why Partner With Us */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-indigo-600/20 rounded-3xl p-8 border border-white/20 backdrop-blur-sm"
              >
                <h4 className="text-2xl font-bold text-white mb-6">
                  Why Partner With Us?
                </h4>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Rocket className="w-5 h-5" />,
                      text: "Proven track record with 500+ successful projects",
                    },
                    {
                      icon: <Zap className="w-5 h-5" />,
                      text: "Rapid development with agile methodologies",
                    },
                    {
                      icon: <Shield className="w-5 h-5" />,
                      text: "Enterprise-grade security and compliance",
                    },
                    {
                      icon: <Globe className="w-5 h-5" />,
                      text: "Global team available 24/7 support",
                    },
                    {
                      icon: <Brain className="w-5 h-5" />,
                      text: "Cutting-edge AI and technology stack",
                    },
                    {
                      icon: <TrendingUp className="w-5 h-5" />,
                      text: "Focus on measurable business outcomes",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <div className="text-violet-400 mr-3">{item.icon}</div>
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Located in the heart of San Francisco's tech district, our office
              is easily accessible and designed for innovation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-900/90 to-black/90 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl">
                <div className="h-96 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019284332489!2d-122.41941492404069!3d37.77492971928168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2us"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-3xl" />
                </div>
              </div>
            </motion.div>

            {/* Office Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Card className="bg-gradient-to-br from-gray-900/90 to-black/90 border-white/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Office Details
                  </h3>

                  <div className="space-y-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start text-gray-300 bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-lg mb-1">
                          Address
                        </div>
                        <div className="text-blue-400">
                          1355 Market Street, Suite 900
                          <br />
                          San Francisco, CA 94103
                          <br />
                          United States
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start text-gray-300 bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-lg mb-1">
                          Office Hours
                        </div>
                        <div className="text-green-400">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 4:00 PM
                          <br />
                          Sunday: Closed
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start text-gray-300 bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                        <Navigation className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-lg mb-1">
                          Getting Here
                        </div>
                        <div className="text-purple-400">
                          • BART: Civic Center Station (2 blocks)
                          <br />• Muni: Multiple lines nearby
                          <br />• Parking: Available in building garage
                          <br />• Bike parking: Secure bike storage
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-8"
                  >
                    <Button
                      onClick={() =>
                        window.open(
                          "https://maps.google.com/?q=1355+Market+Street+San+Francisco+CA",
                          "_blank"
                        )
                      }
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl h-14 text-lg font-semibold shadow-2xl"
                    >
                      <MapPin className="mr-2 w-5 h-5" />
                      Get Directions
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>

              {/* Nearby Landmarks */}
              <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-white mb-4">
                    Nearby Landmarks
                  </h4>
                  <div className="space-y-3">
                    {[
                      { name: "Twitter HQ", distance: "0.2 miles", icon: "🏢" },
                      { name: "Uber HQ", distance: "0.3 miles", icon: "🚗" },
                      {
                        name: "Civic Center Plaza",
                        distance: "0.1 miles",
                        icon: "🏛️",
                      },
                      { name: "UN Plaza", distance: "0.2 miles", icon: "🌍" },
                      {
                        name: "SOMA District",
                        distance: "0.5 miles",
                        icon: "🏙️",
                      },
                    ].map((landmark, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between text-gray-300 py-2 border-b border-white/10 last:border-b-0"
                      >
                        <div className="flex items-center">
                          <span className="text-xl mr-3">{landmark.icon}</span>
                          <span>{landmark.name}</span>
                        </div>
                        <span className="text-sm text-blue-400">
                          {landmark.distance}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <StaggeredText
              text="Frequently Asked Questions"
              className="text-4xl md:text-6xl font-bold mb-8"
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on complexity. Simple websites take 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our discovery phase.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "Yes! We offer comprehensive support packages including maintenance, updates, monitoring, and 24/7 technical support to ensure your project continues to perform optimally.",
              },
              {
                question: "What technologies do you specialize in?",
                answer:
                  "We specialize in React, Next.js, React Native, Flutter, Node.js, Python, AI/ML, cloud platforms (AWS, Azure, GCP), and modern DevOps practices.",
              },
              {
                question: "Can you work with our existing team?",
                answer:
                  "We can integrate seamlessly with your existing team, provide consulting services, or take full ownership of development based on your needs.",
              },
              {
                question: "What's your pricing model?",
                answer:
                  "We offer flexible pricing including fixed-price projects, hourly rates, and dedicated team models. Pricing depends on project scope, timeline, and complexity.",
              },
              {
                question: "Do you sign NDAs?",
                answer:
                  "Yes, we're happy to sign NDAs and maintain strict confidentiality. We understand the importance of protecting your intellectual property and business ideas.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-500"
              >
                <h4 className="text-xl font-bold text-white mb-3">
                  {faq.question}
                </h4>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black/80 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12  bg-black/50 rounded-2xl flex items-center justify-center"
              >
                {/* <Zap className="w-6 h-6 text-white" /> */}
                <Image
                  src="/zorrow.jpeg"
                  alt="icon"
                  width={8}
                  height={8}
                  className="object-cover rounded-2xl w-6 h-6"
                />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Zorrow Tech
              </span>
            </motion.div>

            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Transforming ideas into digital reality with cutting-edge
              technology solutions.
            </p>

            <div className="flex justify-center gap-4 mb-6">
              {[
                {
                  icon: <Github className="w-5 h-5" />,
                  href: "#",
                  color: "hover:text-gray-300",
                },
                {
                  icon: <Linkedin className="w-5 h-5" />,
                  href: "#",
                  color: "hover:text-blue-400",
                },
                {
                  icon: <Twitter className="w-5 h-5" />,
                  href: "#",
                  color: "hover:text-sky-400",
                },
                {
                  icon: <Mail className="w-5 h-5" />,
                  href: "#",
                  color: "hover:text-violet-400",
                },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`text-gray-400 ${social.color} hover:bg-white/10 rounded-xl p-3 transition-all duration-300`}
                  >
                    {social.icon}
                  </Button>
                </motion.div>
              ))}
            </div>

            <div className="text-gray-500 text-sm">
              © 2024 Zorrow Tech IT Solutions. All rights reserved. | Crafted
              with <span className="text-red-400">❤️</span> in San Francisco
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
