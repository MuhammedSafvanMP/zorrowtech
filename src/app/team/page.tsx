"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  Linkedin,
  Github,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
   const team = [
    {
      name: "Fathima Minsha K",
      role: "HR Manager",
      image: "/minsha.jpeg",
      bio: "Dedicated HR Manager responsible for recruitment and employee coordination.",
      expertise: ["Recruitment", "Onboarding", "HR Management"],
      social: { linkedin: "", instagram: "minsha", github: "" },
      email: "minsha@gmail.com",
      phone: "7994960686",
      place: "Malappuram, Kerala",
    },
    {
      name: "Anjana Pambalath",
      role: "Marketing Manager",
      image: "/anjana.jpeg",
      bio: "Handles marketing strategies and digital coordination.",
      expertise: ["Marketing", "Social Media", "Client Handling"],
      social: {
        linkedin:
          "https://www.linkedin.com/in/anjana-pambalath-1548a330b",
        instagram: "anjana_pambalath",
        github: "",
      },
      email: "anjanapambalath@gmail.com",
      phone: "9633294701",
      place: "Malappuram, Kerala",
    },
    {
      name: "Suhaila Thasni",
      role: "Full-Stack Developer",
      image: "/suhaila.png",
      bio: "MERN stack developer specialized in scalable applications.",
      expertise: ["MERN", "AWS", "Next.js", "TypeScript"],
      social: {
        linkedin:
          "https://www.linkedin.com/in/suhaila-thasni-dev/",
        instagram: "_thas_nii_0",
        github: "https://github.com/suhaila-thasni",
      },
      email: "suhailathasni0@gmail.com",
      phone: "9633294701",
      place: "Malappuram, Kerala",
    },
    {
      name: "Shana Yasmin",
      role: "Full-Stack Developer",
      image: "/shana.jpeg",
      bio: "Builds modern scalable web applications.",
      expertise: ["MERN", "Next.js", "AWS"],
      social: {
        linkedin:
          "https://www.linkedin.com/in/shana-yasmin-449bb932b",
        instagram: "yasmin_shaa_",
        github: "https://github.com/Shanayasmin123",
      },
      email: "shanayasmin219@gmail.com",
      phone: "8714200361",
      place: "Malappuram, Kerala",
    },
    {
      name: "AYISHA SAFNA",
      role: "Full-Stack Developer",
      image: "/ayisha.jpeg",
      bio: "Full-stack developer focused on modern web apps.",
      expertise: ["MERN", "Next.js", "TypeScript"],
      social: {
        linkedin:
          "https://www.linkedin.com/in/ayisha-safna-2591b0294",
        instagram: "_thas_nii_0",
        github: "https://github.com/Ayshasafna8137",
      },
      email: "ayishasafna098@gmail.com",
      phone: "8137950410",
      place: "Malappuram, Kerala",
    },
    {
      name: "SAHAL V.K",
      role: "Creative Designer",
      image: "/sahal.jpeg",
      bio: "Creative designer and video editor.",
      expertise: ["Design", "Video Editing", "Content Creation"],
      social: { linkedin: "", instagram: "sahal._.shax", github: "" },
      email: "sahalvkmazin@gmail.com",
      phone: "6282017941",
      place: "Malappuram, Kerala",
    },
     {
  name: "Syamlal A.P",
  role: "Business Development Executive",
  image: "/syam.jpeg",
  bio: "Business Development Executive focused on driving company growth by identifying new business opportunities.",
  expertise: [
    "Business Development",
    "Client Relationship Management",
    "Market Research",
    "Sales Strategy",
    "Communication",
  ],
  social: {
    linkedin: "",
    instagram: "",
    github: ""
  },
  email: "syamlal@gmail.com",
  phone: "9072432327",
  place: "Malappuram, Kerala"
}
  ]

  const getInstagram = (value: string) => {
    if (!value) return ""
    if (value.startsWith("http")) return value
    return `https://instagram.com/${value}`
  }

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/banner-2.png"
          className="w-full h-full object-cover"
          alt="bg"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* HERO */}
      <section className="pt-28 pb-14 text-center">
        <Badge className="bg-purple-500/20 text-purple-200 border-purple-500/30 px-4 py-2 mb-6">
          <Users className="w-4 h-4 mr-2" />
          Our Team
        </Badge>

        <h1 className="text-5xl font-bold text-white mb-4">
          Meet Our Experts
        </h1>

        <p className="text-gray-300">
          A passionate team building modern digital solutions.
        </p>
      </section>

      {/* GRID */}
      <section className="px-6 pb-20">
        <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {team.map((member, i) => (
            <motion.div key={i} whileHover={{ y: -5 }}>

              <Card className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl">

                {/* IMAGE FIXED (NO GAP) */}
                <div className="relative w-full aspect-[4/5] overflow-hidden">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* SOCIAL ICONS */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition flex items-center justify-center gap-4">

                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        className="p-2 bg-white/10 rounded-full hover:bg-blue-600"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}

                    {member.social.instagram && (
                      <a
                        href={getInstagram(member.social.instagram)}
                        target="_blank"
                        className="p-2 bg-white/10 rounded-full hover:bg-pink-600"
                      >
                        <Instagram size={18} />
                      </a>
                    )}

                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        className="p-2 bg-white/10 rounded-full hover:bg-gray-700"
                      >
                        <Github size={18} />
                      </a>
                    )}

                  </div>
                </div>

                {/* CONTENT FIXED VISIBILITY */}
                <CardContent className="p-5">

                  {/* NAME FIX (VISIBLE ALWAYS) */}
                  <h3 className="text-xl font-bold text-white">
                    {member.name}
                  </h3>

                  <p className="text-purple-400 text-sm mb-2">
                    {member.role}
                  </p>

                  <p className="text-gray-300 text-sm mb-4">
                    {member.bio}
                  </p>

                  {/* SKILLS */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((e, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-purple-500/20 text-purple-200 px-2 py-1 rounded-full"
                      >
                        {e}
                      </span>
                    ))}
                  </div>

                  {/* CONTACT */}
                  <div className="text-xs text-gray-300 space-y-2 border-t border-white/10 pt-4">

                    <div className="flex items-center gap-2">
                      <Mail size={14} />
                      {member.email}
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone size={14} />
                      {member.phone}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      {member.place}
                    </div>

                  </div>

                </CardContent>

              </Card>

            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="text-center pb-20">
        <Sparkles className="mx-auto text-purple-400 mb-4" />
        <h2 className="text-3xl font-bold mb-2 text-white">
          Want to Join Our Team?
        </h2>
        <p className="text-gray-400 mb-6">
          We're always looking for talented people.
        </p>

        <Link href={'/careers'} className="bg-purple-600 hover:bg-purple-700 px-8 py-5 rounded-xl">
          View Open Positions
        </Link>
      </section>

    </div>
  )
}