"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Users, GraduationCap } from "lucide-react"

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "President",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Final year CSE student specializing in AI and Machine Learning. Passionate about fostering tech innovation on campus.",
  },
  {
    name: "Sarah Chen",
    role: "Technical Lead",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Third year CSE student with expertise in full-stack development and cloud computing. Leads workshops and coding bootcamps.",
  },
  {
    name: "Michael Rodriguez",
    role: "Event Coordinator",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Second year CSE student focused on cybersecurity. Organizes hackathons, tech talks, and networking events for the society.",
  },
  {
    name: "Priya Patel",
    role: "Community Manager",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Third year CSE student passionate about creating an inclusive tech community. Manages outreach and social media presence.",
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export default function AboutPage() {
  return (
    <div className="dark min-h-screen bg-gray-950 text-white">
      <div className="container py-12 md:py-24">
        <motion.div
          className="mx-auto max-w-4xl space-y-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div className="space-y-4 text-center" variants={itemVariants}>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About CSE Students' Society
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              A community of passionate Computer Science & Engineering students driving innovation and excellence.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div className="grid gap-8 md:grid-cols-2 lg:gap-12" variants={itemVariants}>
            <div className="overflow-hidden rounded-lg border-0 shadow-lg">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-0.5">
                <div className="h-full">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="CSE Students' Society"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-gray-300">
                The CSE Students' Society was founded with a clear mission: to create a vibrant community where Computer
                Science and Engineering students can collaborate, learn, and grow together.
              </p>
              <p className="text-gray-300">
                We aim to bridge the gap between academic learning and industry requirements by organizing workshops,
                hackathons, and networking events that provide practical experience and exposure to the latest
                technologies.
              </p>
              <p className="text-gray-300">
                Our goal is to empower every CSE student with the skills, connections, and opportunities they need to
                thrive in the rapidly evolving tech landscape.
              </p>
            </div>
          </motion.div>

          {/* Who We Are Section */}
          <motion.div className="space-y-8 text-center" variants={itemVariants}>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Who We Are & What We Do
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-0 bg-gray-900 shadow-lg overflow-hidden text-left">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-0.5">
                  <div className="bg-gray-900 h-full p-6">
                    <div className="mb-4 flex items-center">
                      <div className="rounded-full bg-blue-500/10 p-3 mr-4">
                        <Users className="h-6 w-6 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold">Who We Are</h3>
                    </div>
                    <p className="text-gray-300">
                      We are a student-led organization comprising passionate Computer Science and Engineering students
                      from all years of study. Our diverse community includes programmers, designers, AI enthusiasts,
                      cybersecurity specialists, and more, all united by our love for technology and innovation.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-0 bg-gray-900 shadow-lg overflow-hidden text-left">
                <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-0.5">
                  <div className="bg-gray-900 h-full p-6">
                    <div className="mb-4 flex items-center">
                      <div className="rounded-full bg-cyan-500/10 p-3 mr-4">
                        <Code className="h-6 w-6 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-bold">What We Do</h3>
                    </div>
                    <p className="text-gray-300">
                      We organize a wide range of activities including coding competitions, hackathons, technical
                      workshops, industry talks, project showcases, and networking events. Our flagship annual hackathon
                      brings together the brightest minds to solve real-world problems through technology and
                      innovation.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-center text-gray-300">The dedicated individuals who lead the CSE Students' Society.</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <motion.div key={index} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                  <Card className="border-0 bg-gray-900 shadow-lg overflow-hidden h-full">
                    <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-0.5">
                      <div className="bg-gray-900 h-full">
                        <div className="aspect-square relative">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg">{member.name}</CardTitle>
                          <CardDescription className="text-gray-400">{member.role}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm text-gray-300">{member.bio}</p>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 bg-gray-900 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-purple-500 p-0.5">
                <div className="bg-gray-900">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
                      Our Values
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      The principles that guide everything we do
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="flex flex-col items-center space-y-2 text-center">
                        <div className="rounded-full bg-emerald-500/10 p-3">
                          <Code className="h-6 w-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-bold">Innovation</h3>
                        <p className="text-sm text-gray-300">
                          We believe in pushing boundaries and exploring new possibilities through technology.
                        </p>
                      </div>
                      <div className="flex flex-col items-center space-y-2 text-center">
                        <div className="rounded-full bg-teal-500/10 p-3">
                          <Users className="h-6 w-6 text-teal-400" />
                        </div>
                        <h3 className="text-xl font-bold">Collaboration</h3>
                        <p className="text-sm text-gray-300">
                          Great ideas emerge when diverse minds work together toward common goals.
                        </p>
                      </div>
                      <div className="flex flex-col items-center space-y-2 text-center">
                        <div className="rounded-full bg-purple-500/10 p-3">
                          <GraduationCap className="h-6 w-6 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-bold">Learning</h3>
                        <p className="text-sm text-gray-300">
                          We're committed to continuous learning and sharing knowledge within our community.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Join Us CTA */}
          <motion.div
            className="text-center space-y-6"
            variants={itemVariants}
            whileInView={{ scale: [0.95, 1.02, 1], transition: { duration: 0.8 } }}
          >
            <Card className="border-0 bg-gray-900 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-0.5">
                <div className="bg-gray-900 p-8">
                  <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Join Us Now
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-300 mb-6">
                    Whether you're a coding expert or just starting your journey in Computer Science, the CSE Students'
                    Society welcomes you. Register for our upcoming hackathon and be part of our vibrant community!
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/register"
                      className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-500 to-blue-500 px-8 text-base font-medium text-white shadow transition-colors hover:from-purple-600 hover:to-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                      Register for the Event
                    </Link>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

