"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, TrendingUp, Shield, Rocket } from "lucide-react";
// import {  Scene3D } from "@/components/3d-scene";
import { StaggeredText } from "@/components/animated-text";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
        <div className="absolute inset-0 opacity-30">
          {/* <Scene3D /> */}
        </div>
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <Badge className="bg-black text-white border border-white/20 mb-6 px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              About Zorrow Tech
            </Badge>
            <StaggeredText
              text="Innovation Meets Excellence"
              className="text-5xl md:text-7xl font-bold mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed"
            >
              At Zorrow Tech, we're passionate about transforming businesses
              through technology. Our team of experts combines innovation with
              practical solutions to help you stay ahead in the digital age.
              With a focus on quality and customer satisfaction, we deliver
              results that exceed expectations.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "Growth Focused",
                desc: "Every solution is designed to scale exponentially with your business and drive measurable ROI.",
                gradient: "from-green-600 via-emerald-600 to-teal-600",
                stats: "300% avg growth",
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Security First",
                desc: "Enterprise-grade security and compliance built into every project from day one.",
                gradient: "from-blue-600 via-cyan-600 to-indigo-600",
                stats: "Zero breaches",
              },
              {
                icon: <Rocket className="w-12 h-12" />,
                title: "Future Ready",
                desc: "Leveraging AI, quantum computing, and emerging technologies to future-proof your business.",
                gradient: "from-purple-600 via-pink-600 to-rose-600",
                stats: "Next-gen tech",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-gray-900/80 to-black/80 border-white/10 hover:border-white/30 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-8 text-center relative">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-24 h-24 bg-gradient-to-r ${item.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 text-white shadow-2xl`}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                    <Badge
                      className={`bg-gradient-to-r ${item.gradient} text-white border-0`}
                    >
                      {item.stats}
                    </Badge>
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
