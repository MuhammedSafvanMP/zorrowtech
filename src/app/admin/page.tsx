"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Users,
  Briefcase,
  FileText,
  ImageIcon,
  Settings,
  Plus,
  Edit,
  Trash2,
  Save,
  Lock,
  Unlock,
  BarChart3,
  MessageSquare,
  Upload,
  X,
} from "lucide-react"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState("")
  const [editingItem, setEditingItem] = useState<any>(null)

  // Mock data - in real app, this would come from a database
  const [dashboardStats] = useState({
    totalUsers: 1250,
    activeJobs: 12,
    applications: 89,
    blogPosts: 24,
    teamMembers: 15,
    projects: 45,
  })

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      salary: "$120k - $180k",
      status: "Active",
      applications: 23,
    },
    {
      id: 2,
      title: "AI/ML Engineer",
      department: "AI Research",
      location: "San Francisco",
      salary: "$140k - $200k",
      status: "Active",
      applications: 15,
    },
  ])

  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Alex Rodriguez",
      role: "CEO & Co-Founder",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Former Google Principal Engineer...",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "CTO & Co-Founder",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Ex-Microsoft Principal Architect...",
      status: "Active",
    },
  ])

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "FinTech Revolution Platform",
      description: "AI-powered financial platform...",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Next.js", "Python", "AWS"],
      status: "Live",
    },
  ])

  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "The Future of AI in Web Development",
      excerpt: "Exploring how AI is transforming...",
      author: "Alex Rodriguez",
      date: "2024-01-15",
      status: "Published",
    },
  ])

  const handleLogin = () => {
    if (password === "zorrow2024admin") {
      setIsAuthenticated(true)
    } else {
      alert("Invalid password!")
    }
  }

  const openModal = (type: string, item?: any) => {
    setModalType(type)
    setEditingItem(item || null)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalType("")
    setEditingItem(null)
  }

  const handleSave = (data: any) => {
    // In real app, this would save to database
    console.log("Saving:", data)
    closeModal()
  }

  const handleDelete = (type: string, id: number) => {
    if (confirm("Are you sure you want to delete this item?")) {
      // In real app, this would delete from database
      console.log("Deleting:", type, id)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full mx-4"
        >
          <Card className="bg-gradient-to-br from-gray-900/90 to-black/90 border-white/20 backdrop-blur-sm">
            <CardHeader className="text-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
              <CardTitle className="text-2xl font-bold text-white">Admin Access</CardTitle>
              <p className="text-gray-400">Enter the secret password to continue</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <Input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12 text-lg focus:ring-2 focus:ring-red-500"
              />
              <Button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 rounded-xl h-12 text-lg font-semibold"
              >
                <Lock className="w-5 h-5 mr-2" />
                Access Admin Panel
              </Button>
              <p className="text-xs text-gray-500 text-center">Hint: Company name + year + admin</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="text-gray-400 mt-2">Manage your website content and settings</p>
          </div>
          <Button
            onClick={() => setIsAuthenticated(false)}
            variant="outline"
            className="border-red-500/30 text-red-400 hover:bg-red-500/10"
          >
            <Unlock className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white/5 rounded-2xl p-2">
          {[
            { id: "dashboard", label: "Dashboard", icon: <BarChart3 className="w-4 h-4" /> },
            { id: "jobs", label: "Jobs", icon: <Briefcase className="w-4 h-4" /> },
            { id: "team", label: "Team", icon: <Users className="w-4 h-4" /> },
            { id: "projects", label: "Projects", icon: <FileText className="w-4 h-4" /> },
            { id: "blog", label: "Blog", icon: <MessageSquare className="w-4 h-4" /> },
            { id: "media", label: "Media", icon: <ImageIcon className="w-4 h-4" /> },
            { id: "settings", label: "Settings", icon: <Settings className="w-4 h-4" /> },
          ].map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              variant={activeTab === tab.id ? "default" : "ghost"}
              className={
                activeTab === tab.id
                  ? "bg-gradient-to-r from-red-600 to-pink-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              }
            >
              {tab.icon}
              <span className="ml-2">{tab.label}</span>
            </Button>
          ))}
        </div>

        {/* Dashboard Content */}
        <AnimatePresence mode="wait">
          {activeTab === "dashboard" && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Total Users",
                    value: dashboardStats.totalUsers,
                    icon: <Users className="w-6 h-6" />,
                    color: "from-blue-600 to-cyan-600",
                  },
                  {
                    title: "Active Jobs",
                    value: dashboardStats.activeJobs,
                    icon: <Briefcase className="w-6 h-6" />,
                    color: "from-green-600 to-emerald-600",
                  },
                  {
                    title: "Applications",
                    value: dashboardStats.applications,
                    icon: <FileText className="w-6 h-6" />,
                    color: "from-purple-600 to-pink-600",
                  },
                  {
                    title: "Blog Posts",
                    value: dashboardStats.blogPosts,
                    icon: <MessageSquare className="w-6 h-6" />,
                    color: "from-orange-600 to-red-600",
                  },
                  {
                    title: "Team Members",
                    value: dashboardStats.teamMembers,
                    icon: <Users className="w-6 h-6" />,
                    color: "from-indigo-600 to-purple-600",
                  },
                  {
                    title: "Projects",
                    value: dashboardStats.projects,
                    icon: <FileText className="w-6 h-6" />,
                    color: "from-teal-600 to-blue-600",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-white/10 hover:border-white/30 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-gray-400 text-sm">{stat.title}</p>
                            <p className="text-3xl font-bold text-white">{stat.value}</p>
                          </div>
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-white`}
                          >
                            {stat.icon}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "jobs" && (
            <motion.div
              key="jobs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Job Management</h2>
                <Button
                  onClick={() => openModal("job")}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Job
                </Button>
              </div>

              <div className="space-y-4">
                {jobs.map((job) => (
                  <Card key={job.id} className="bg-gradient-to-br from-gray-900/80 to-black/80 border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                            <span>{job.department}</span>
                            <span>{job.location}</span>
                            <span>{job.salary}</span>
                            <Badge className={job.status === "Active" ? "bg-green-600" : "bg-gray-600"}>
                              {job.status}
                            </Badge>
                          </div>
                          <p className="text-blue-400 mt-2">{job.applications} applications</p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => openModal("job", job)}
                            className="border-white/30 text-white hover:bg-white/10"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDelete("job", job.id)}
                            className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "team" && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Team Management</h2>
                <Button
                  onClick={() => openModal("team")}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Member
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member) => (
                  <Card key={member.id} className="bg-gradient-to-br from-gray-900/80 to-black/80 border-white/10">
                    <CardContent className="p-6 text-center">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white/20"
                      />
                      <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-blue-400 mb-4">{member.role}</p>
                      <div className="flex justify-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => openModal("team", member)}
                          className="border-white/30 text-white hover:bg-white/10"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete("team", member.id)}
                          className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "media" && (
            <motion.div
              key="media"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Media Library</h2>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Media
                </Button>
              </div>

              <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-white/10">
                <CardContent className="p-8 text-center">
                  <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Media Management</h3>
                  <p className="text-gray-400 mb-6">Upload and manage images, videos, and other media files</p>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600">Browse Media Library</Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                className="bg-gradient-to-br from-gray-900/95 to-black/95 border border-white/20 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    {editingItem ? `Edit ${modalType}` : `Add New ${modalType}`}
                  </h2>
                  <Button variant="ghost" size="sm" onClick={closeModal} className="text-white/60 hover:text-white">
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                <form className="space-y-6">
                  {modalType === "job" && (
                    <>
                      <Input
                        placeholder="Job Title"
                        defaultValue={editingItem?.title}
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12"
                      />
                      <Input
                        placeholder="Department"
                        defaultValue={editingItem?.department}
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12"
                      />
                      <Input
                        placeholder="Location"
                        defaultValue={editingItem?.location}
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12"
                      />
                      <Input
                        placeholder="Salary Range"
                        defaultValue={editingItem?.salary}
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12"
                      />
                      <Textarea
                        placeholder="Job Description"
                        rows={4}
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl"
                      />
                    </>
                  )}

                  {modalType === "team" && (
                    <>
                      <Input
                        placeholder="Full Name"
                        defaultValue={editingItem?.name}
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12"
                      />
                      <Input
                        placeholder="Role/Position"
                        defaultValue={editingItem?.role}
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12"
                      />
                      <Input
                        placeholder="Profile Image URL"
                        defaultValue={editingItem?.image}
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12"
                      />
                      <Textarea
                        placeholder="Bio/Description"
                        rows={4}
                        defaultValue={editingItem?.bio}
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl"
                      />
                    </>
                  )}

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      onClick={() => handleSave({})}
                      className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-xl h-12"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={closeModal}
                      className="border-white/30 text-white hover:bg-white/10 rounded-xl h-12 px-8 bg-transparent"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
