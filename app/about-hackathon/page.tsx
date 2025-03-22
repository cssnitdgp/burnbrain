"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Target, Users, FileText, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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

// Timeline data
const timelineEvents = [
  {
    date: "March 1, 2025",
    title: "Registration Opens",
    description: "Team registration begins. Form your team of up to 4 members and register through our online portal.",
  },
  {
    date: "April 15, 2025",
    title: "Registration Closes",
    description: "Last day to register your team for HackFest 2025. No late registrations will be accepted.",
  },
  {
    date: "April 20, 2025",
    title: "Project Proposal Submission Begins",
    description: "Teams start submitting their project proposals and presentations outlining their approach.",
  },
  {
    date: "May 5, 2025",
    title: "Proposal Submission Deadline",
    description: "Final day to submit your project proposals. Teams will receive feedback from our panel of experts.",
  },
  {
    date: "May 10, 2025",
    title: "Selected Teams Announcement",
    description: "Announcement of teams selected to participate in the final hackathon event.",
  },
  {
    date: "May 15-17, 2025",
    title: "HackFest 2025 Main Event",
    description:
      "The 48-hour coding marathon begins! Teams will work on their projects at the Tech Campus Innovation Center.",
  },
  {
    date: "May 17, 2025",
    title: "Project Presentations & Award Ceremony",
    description: "Teams present their projects to judges followed by the award ceremony announcing the winners.",
  },
]

export default function AboutHackathonPage() {
  return (
    <div className="dark min-h-screen bg-gray-950 text-white">
      <div className="container py-12 md:py-24">
        <motion.div
          className="mx-auto max-w-5xl space-y-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Section 1: Name and Organized by */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                HackFest 2025
              </h1>
              <p className="mt-4 text-xl text-gray-300">The Ultimate Hackathon Experience</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="rounded-lg border-0 bg-gray-900 shadow-lg overflow-hidden w-full max-w-2xl">
                <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-0.5">
                  <div className="bg-gray-900 p-6 text-center">
                    <p className="text-xl font-semibold text-gray-300">Organized by</p>
                    <h2 className="text-2xl font-bold mt-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      CSE Students' Society
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 2: About the Hackathon with Image */}
          <motion.div variants={itemVariants} className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="overflow-hidden rounded-lg border-0 shadow-lg">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-0.5">
                <div className="h-full">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="HackFest 2025"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                About the Hackathon
              </h2>
              <p className="text-gray-300">
                HackFest 2025 is a premier 48-hour hackathon organized by the CSE Students' Society, bringing together
                the brightest minds in technology to solve real-world problems through innovation.
              </p>
              <p className="text-gray-300">
                Participants will work in teams to develop solutions to challenging problems across various domains
                including AI/ML, Web Development, Mobile Apps, IoT, and Cybersecurity.
              </p>
              <p className="text-gray-300">
                With mentorship from industry experts and academia, teams will have the opportunity to learn,
                collaborate, and create impactful solutions while competing for exciting prizes.
              </p>
            </div>
          </motion.div>

          {/* Section 3: Mission and Vision */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 bg-gray-900 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-0.5">
                <div className="bg-gray-900">
                  <CardContent className="p-8">
                    <div className="grid gap-8 md:grid-cols-2">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="rounded-full bg-blue-500/10 p-3 mr-4">
                            <Target className="h-6 w-6 text-blue-400" />
                          </div>
                          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Our Mission
                          </h2>
                        </div>
                        <p className="text-gray-300">
                          To create a platform where innovation thrives, where developers, designers, and creative
                          thinkers can come together to solve real-world problems through technology.
                        </p>
                        <p className="text-gray-300">
                          We aim to foster collaboration, learning, and growth among participants while creating
                          solutions that have the potential to make a positive impact on society.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="rounded-full bg-cyan-500/10 p-3 mr-4">
                            <Target className="h-6 w-6 text-cyan-400" />
                          </div>
                          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                            Our Vision
                          </h2>
                        </div>
                        <p className="text-gray-300">
                          To become the most impactful student-led hackathon that inspires the next generation of
                          innovators and problem-solvers in the field of technology.
                        </p>
                        <p className="text-gray-300">
                          We envision a community where diverse perspectives come together, where creativity is
                          celebrated, and where technology is leveraged to address meaningful challenges.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Section 4: Eligibility */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 bg-gray-900 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-0.5">
                <div className="bg-gray-900">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="rounded-full bg-teal-500/10 p-3 mr-4">
                        <Users className="h-6 w-6 text-teal-400" />
                      </div>
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                        Who Can Participate
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-teal-400 flex-shrink-0" />
                        <p className="text-gray-300">
                          <span className="font-semibold text-white">Students:</span> Currently enrolled undergraduate
                          or postgraduate students from any recognized educational institution.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <span className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-teal-400 flex-shrink-0" />
                        <p className="text-gray-300">
                          <span className="font-semibold text-white">Team Size:</span> Teams of 2-4 members.
                          Cross-institutional teams are welcome and encouraged.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <span className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-teal-400 flex-shrink-0" />
                        <p className="text-gray-300">
                          <span className="font-semibold text-white">Disciplines:</span> Open to students from all
                          disciplines, not just computer science or engineering. We encourage diverse teams!
                        </p>
                      </div>

                      <div className="flex items-start">
                        <span className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-teal-400 flex-shrink-0" />
                        <p className="text-gray-300">
                          <span className="font-semibold text-white">Experience Level:</span> All experience levels are
                          welcome, from beginners to advanced developers.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <span className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-teal-400 flex-shrink-0" />
                        <p className="text-gray-300">
                          <span className="font-semibold text-white">Requirements:</span> Valid student ID, completed
                          registration form, and submission of project proposal by the deadline.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 text-center">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          asChild
                          className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 border-0"
                        >
                          <Link href="/register">
                            Register Now <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Section 5: Important Timeline */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 bg-gray-900 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-0.5">
                <div className="bg-gray-900">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="rounded-full bg-emerald-500/10 p-3 mr-4">
                        <Calendar className="h-6 w-6 text-emerald-400" />
                      </div>
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                        Important Timeline
                      </h2>
                    </div>

                    <div className="space-y-6">
                      {timelineEvents.map((event, index) => (
                        <div
                          key={index}
                          className="relative pl-8 pb-6 border-l border-gray-800 last:border-0 last:pb-0"
                        >
                          <div className="absolute left-0 top-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 p-0.5">
                            <div className="bg-gray-900 rounded-full w-4 h-4">
                              <div className="w-2 h-2 rounded-full bg-emerald-400 m-1"></div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="text-sm font-semibold text-emerald-400">{event.date}</div>
                            <h3 className="text-lg font-bold text-white">{event.title}</h3>
                            <p className="text-gray-300">{event.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Section 6: Problem Statements */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 bg-gray-900 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-purple-500 p-0.5">
                <div className="bg-gray-900">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="rounded-full bg-purple-500/10 p-3 mr-4">
                            <FileText className="h-6 w-6 text-purple-400" />
                          </div>
                          <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
                            Problem Statements
                          </h2>
                        </div>
                        <p className="text-gray-300">
                          HackFest 2025 features 10 exciting problem statements across various domains including AI/ML,
                          IoT, Blockchain, Web Development, Cybersecurity, and more. Each problem statement offers a
                          unique opportunity to create impactful solutions using cutting-edge technologies.
                        </p>
                        <p className="text-gray-300">
                          Teams will choose one problem statement to work on during the hackathon. The problems are
                          designed to be challenging yet achievable within the 48-hour timeframe, with mentors available
                          to guide teams throughout the process.
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            asChild
                            size="lg"
                            className="bg-gradient-to-r from-emerald-500 to-purple-500 hover:from-emerald-600 hover:to-purple-600 border-0"
                          >
                            <Link href="/problem-statements">
                              View Problem Statements <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Section 7: Event Flow */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 bg-gray-900 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-0.5">
                <div className="bg-gray-900">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="rounded-full bg-blue-500/10 p-3 mr-4">
                            <Code className="h-6 w-6 text-blue-400" />
                          </div>
                          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Event Flow
                          </h2>
                        </div>
                        <p className="text-gray-300">
                          HackFest 2025 is structured in three key phases to ensure a smooth and productive experience
                          for all participants: Registration, PPT Submission, and the Final Hackathon.
                        </p>
                        <p className="text-gray-300">
                          The event flow is designed to provide teams with adequate time for preparation, feedback on
                          their initial ideas, and an intense but rewarding 48-hour coding marathon where they bring
                          their solutions to life.
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            asChild
                            size="lg"
                            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 border-0"
                          >
                            <Link href="/event-flow">
                              View Event Flow <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 bg-gray-900 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-0.5">
                <div className="bg-gray-900">
                  <CardContent className="p-8 text-center">
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      Ready to Join HackFest 2025?
                    </h2>
                    <p className="max-w-[700px] mx-auto text-gray-300 md:text-xl mb-6">
                      Register now to secure your spot in the most exciting hackathon of the year!
                    </p>
                    <motion.div className="inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 border-0 text-base h-12 px-8"
                      >
                        <Link href="/register">
                          Register Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

