"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Users, Lightbulb, Trophy, Award, Brain, Smartphone, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
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

// Organizing Committee data
const organizingCommittee = {
  logo: "/placeholder.svg?height=150&width=150",
  name: "CSE Students' Society",
  description:
    "The Computer Science and Engineering Students' Society is a student-led organization dedicated to fostering innovation, collaboration, and technical excellence among CSE students. We organize various events, workshops, and competitions throughout the year to enhance the learning experience and provide practical exposure to emerging technologies.",
}

// Judges data
const judges = [
  {
    name: "Prof. Subrata Nandi",
    designation: "NIT Durgapur",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Dr. Johnson specializes in artificial intelligence and machine learning with over 15 years of experience in the field. She has published numerous papers on neural networks and has been a judge for several international hackathons.",
  },
  {
    name: "Asst Prof. Parag Kumar",
    designation: "NIT Durgapur",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Prof. Chen leads the Computer Science Department and has extensive experience in software engineering and systems design. His research focuses on distributed systems and cloud computing architectures.",
  },
  {
    name: "Prof. S roy",
    designation: "NIT Durgapur",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Ms. Patel is a tech industry veteran with expertise in product development and technology strategy. She has founded two successful tech startups and mentors young entrepreneurs in the software industry.",
  },
]

// Mentors data
const mentors = [
  {
    name: "Web Development",
    icon: <Code className="h-8 w-8 text-cyan-400" />,
    description:
      "Expert mentors from leading tech companies will guide teams on modern web development frameworks, responsive design, and backend integration.",
  },
  {
    name: "AI & Machine Learning",
    icon: <Brain className="h-8 w-8 text-purple-400" />,
    description:
      "Specialists in AI and ML will provide hands-on assistance with model development, data processing, and implementing intelligent features in your projects.",
  },
  {
    name: "Mobile App Development",
    icon: <Smartphone className="h-8 w-8 text-green-400" />,
    description:
      "Industry professionals will mentor teams on creating responsive, feature-rich mobile applications for both Android and iOS platforms.",
  },
  {
    name: "UI/UX Design",
    icon: <Palette className="h-8 w-8 text-pink-400" />,
    description:
      "Design experts will help teams create intuitive, accessible, and visually appealing user interfaces that enhance the user experience.",
  },
]

// Flip Card Component for Countdown
const FlipCard = ({ value, label }: { value: number; label: string }) => {
  const [flip, setFlip] = useState(false)
  const prevValue = useRef(value)

  useEffect(() => {
    // Only trigger flip animation when the value changes
    if (prevValue.current !== value) {
      setFlip(true)
      const timer = setTimeout(() => {
        setFlip(false)
        prevValue.current = value
      }, 600) // Match this with the animation duration
      return () => clearTimeout(timer)
    }
  }, [value])

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full aspect-square perspective">
        <div className="w-full h-full rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 p-0.5">
          <div className="relative w-full h-full preserve-3d">
            {/* Top half (static) */}
            <div className="absolute w-full h-1/2 overflow-hidden rounded-t-lg bg-gray-900 backface-hidden">
              <div className="flex items-end justify-center w-full h-full pb-0.5">
                <span className="text-2xl md:text-4xl font-bold">{value}</span>
              </div>
            </div>

            {/* Bottom half (flips) */}
            <div className="absolute w-full h-1/2 top-1/2 overflow-hidden rounded-b-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={flip ? "flipping" : "static"}
                  initial={flip ? { rotateX: 0 } : { rotateX: -90 }}
                  animate={flip ? { rotateX: 90 } : { rotateX: 0 }}
                  exit={{ rotateX: 90 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute w-full h-full bg-gray-900 origin-top backface-hidden"
                >
                  <div className="flex items-start justify-center w-full h-full pt-0.5">
                    <span className="text-2xl md:text-4xl font-bold">{value}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Divider line */}
            <div className="absolute w-full h-px bg-gray-800 top-1/2 z-10"></div>
          </div>
        </div>
      </div>
      <span className="mt-2 text-sm text-gray-400">{label}</span>
    </div>
  )
}

// Countdown Timer Component
function CountdownTimer() {
  // Set the target date to May 15, 2025 (as mentioned in the event flow page)
  const targetDate = new Date("May 15, 2025 00:00:00").getTime()
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="w-full">
      <h3 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
        Time To Go
      </h3>
      <div className="grid grid-cols-4 gap-4">
        <FlipCard value={timeLeft.days} label="Days" />
        <FlipCard value={timeLeft.hours} label="Hours" />
        <FlipCard value={timeLeft.minutes} label="Minutes" />
        <FlipCard value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="dark min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="w-full  py-12  lg:py-[16rem] bg-gradient-to-b from-gray-950 to-gray-900">
        <div className=" px-4 md:px-6 h-50">
          <motion.div
            className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-4 gap-5">
              <div className="space-y-2 lg:w-[78%]">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-[5.5rem] bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  BurnBrain 2025
                </h1>
                <p className="text-xl text-gray-300">
                  Join the ultimate hackathon experience. Build, learn, and connect with fellow developers.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 border-0"
                  >
                    <Link href="/register">
                      Register Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="border-gray-700 bg-gray-900 text-white hover:bg-gray-800 hover:text-white"
                  >
                    <Link href="/problem-statements">Problem Statements</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="overflow-hidden rounded-lg border-0 shadow-lg bg-gray-900 p-6"
            >
              <CountdownTimer />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="w-full py-[3rem] md:py-[4rem] lg:py-[6rem] bg-gray-950">
        <div className="container px-4 md:px-6">
          <motion.div
            className="mx-auto max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                Prizes Worth ₹10,000
              </h2>
              <p className="mt-4 text-gray-300 md:text-xl">Compete for amazing cash prizes and exclusive goodies</p>
            </motion.div>

            <motion.div className="grid gap-6 md:grid-cols-3" variants={containerVariants}>
              {/* First Prize */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="order-2 md:order-1"
              >
                 <Card className="h-full border-0 bg-gray-900 shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-0.5">
                    <div className="bg-gray-900 h-full">
                      <CardContent className="p-6 flex flex-col items-center space-y-4">
                        <div className="rounded-full  p-4">
                        <Award className="h-8 w-8 text-gray-300" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-300">First Prize</h3>
                        <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                          ₹3,000
                        </div>
                        <p className="text-center text-gray-300">Cash prize + Premium goodies</p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Second Prize */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="order-1 md:order-2 -mt-4 md:mt-0  z-10"
              >
                <Card className="h-full border-0 bg-gray-900 shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-0.5">
                    <div className="bg-gray-900 h-full">
                      <CardContent className="p-6 flex flex-col items-center space-y-4">
                        <div className="rounded-full  p-4">
                        <Award className="h-8 w-8 text-gray-300" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-300">First Prize</h3>
                        <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                          ₹3,000
                        </div>
                        <p className="text-center text-gray-300">Cash prize + Premium goodies</p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Third Prize */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="order-3"
              >
                 <Card className="h-full border-0 bg-gray-900 shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-0.5">
                    <div className="bg-gray-900 h-full">
                      <CardContent className="p-6 flex flex-col items-center space-y-4">
                        <div className="rounded-full  p-4">
                        <Award className="h-8 w-8 text-gray-300" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-300">First Prize</h3>
                        <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                          ₹3,000
                        </div>
                        <p className="text-center text-gray-300">Cash prize + Premium goodies</p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-20 text-center">
              <p className="text-2xl text-gray-400">
                Additional special prizes for Best UI/UX, Most Innovative Idea, and Best Technical Implementation
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Organizing Committee Section */}
      <section className="font-mono w-full py-12 md:py-24 lg:py-[10rem] bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container px-4 md:px-6">
          <motion.div
            className="mx-auto max-w-5xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-7xl py-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Organizing Committee
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-0 bg-gray-900 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-0.5">
                  <div className="bg-gray-900">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-shrink-0">
                          <div className="rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 p-0.5">
                            <div className="bg-gray-900 rounded-full p-1">
                              <Image
                                src={organizingCommittee.logo || "/placeholder.svg"}
                                alt={organizingCommittee.name}
                                width={150}
                                height={150}
                                className="rounded-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 space-y-4 text-center md:text-left">
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            {organizingCommittee.name}
                          </h3>
                          <p className="text-gray-300">{organizingCommittee.description}</p>
                          <div>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="inline-block"
                            >
                              <Button
                                asChild
                                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0"
                              >
                                <Link href="/about">
                                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                              </Button>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="font-mono w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  About the HackFest
                </h2>
                <p className="text-gray-300 md:text-lg">
                  HackFest 2025 is a premier hackathon organized by the CSE Students' Society, bringing together the
                  brightest minds in technology to solve real-world problems through innovation.
                </p>
                <p className="text-gray-300 md:text-lg">
                  Over the course of 48 hours, participants will work in teams to develop solutions to challenging
                  problems, with mentorship from industry experts and academia.
                </p>
                <p className="text-gray-300 md:text-lg">
                  With tracks spanning AI/ML, Web Development, Mobile Apps, IoT, and Cybersecurity, there's an
                  opportunity for everyone to showcase their skills and creativity.
                </p>
                <div className="pt-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0"
                    >
                      <Link href="/about-hackathon">Learn More</Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="order-1 md:order-2 overflow-hidden rounded-lg border-0 shadow-lg"
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-0.5">
                <div className="bg-gray-900">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="About HackFest"
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Judges Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container px-4 md:px-6">
          <motion.div
            className="mx-auto max-w-5xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Meet Our Judges
              </h2>
              <p className="mt-4 text-gray-300 md:text-xl max-w-3xl mx-auto">
                Our panel of distinguished judges brings expertise from academia and industry to evaluate your
                innovative solutions
              </p>
            </motion.div>

            <motion.div className="grid gap-8 md:grid-cols-3" variants={containerVariants}>
              {judges.map((judge, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.2 } }}>
                  <Card className="h-full border-0 bg-gray-900 shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-0.5">
                      <div className="bg-gray-900 h-full">
                        <CardContent className="p-6 flex flex-col items-center space-y-4">
                          <div className="rounded-full overflow-hidden bg-gradient-to-r from-cyan-500 to-teal-500 p-0.5 w-32 h-32">
                            <Image
                              src={judge.image || "/placeholder.svg"}
                              alt={judge.name}
                              width={200}
                              height={200}
                              className="rounded-full w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-center">{judge.name}</h3>
                          <p className="text-sm text-center text-teal-400 font-medium">{judge.designation}</p>
                          <p className="text-center text-gray-300 text-sm">{judge.description}</p>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Section with Mentors */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Why Join HackFest?
              </h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl">
                Experience the most exciting hackathon of the year with amazing prizes, networking opportunities, and
                more.
              </p>
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.div
            className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.2 } }}>
              <Card className="h-full border-0 bg-gray-900 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-0.5">
                  <div className="bg-gray-900 h-full">
                    <CardContent className="p-6 flex flex-col items-center space-y-4">
                      <div className="rounded-full bg-teal-500/10 p-3">
                        <Code className="h-8 w-8 text-teal-400" />
                      </div>
                      <h3 className="text-xl font-bold">Code & Create</h3>
                      <p className="text-center text-gray-300">
                        Build innovative solutions to real-world problems with cutting-edge technologies.
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.2 } }}>
              <Card className="h-full border-0 bg-gray-900 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-0.5">
                  <div className="bg-gray-900 h-full">
                    <CardContent className="p-6 flex flex-col items-center space-y-4">
                      <div className="rounded-full bg-emerald-500/10 p-3">
                        <Users className="h-8 w-8 text-emerald-400" />
                      </div>
                      <h3 className="text-xl font-bold">Network & Collaborate</h3>
                      <p className="text-center text-gray-300">
                        Connect with like-minded developers, designers, and industry professionals.
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.2 } }}>
              <Card className="h-full border-0 bg-gray-900 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-lime-500 p-0.5">
                  <div className="bg-gray-900 h-full">
                    <CardContent className="p-6 flex flex-col items-center space-y-4">
                      <div className="rounded-full bg-green-500/10 p-3">
                        <Lightbulb className="h-8 w-8 text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold">Learn & Grow</h3>
                      <p className="text-center text-gray-300">
                        Attend workshops, mentoring sessions, and gain valuable skills for your career.
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Hands-on Mentors Section */}
          <motion.div
            className="mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent">
                Hands-on Mentors
              </h3>
              <p className="mt-2 text-gray-300 md:text-lg max-w-3xl mx-auto">
                Get guidance from industry experts who will help you bring your ideas to life
              </p>
            </motion.div>

            <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" variants={containerVariants}>
              {mentors.map((mentor, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                  <Card className="h-full border-0 bg-gray-900 shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-lime-500 to-yellow-500 p-0.5">
                      <div className="bg-gray-900 h-full">
                        <CardContent className="p-6 flex flex-col items-center space-y-4">
                          <div className="rounded-full bg-lime-500/10 p-3">{mentor.icon}</div>
                          <h3 className="text-lg font-bold text-center">{mentor.name}</h3>
                          <p className="text-center text-gray-300 text-sm">{mentor.description}</p>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container px-4 md:px-6">
          <motion.div
            className="mx-auto max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Card className="border-0 bg-gray-900 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-0.5">
                  <div className="bg-gray-900">
                    <CardContent className="p-8 text-center">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Ready to Hack?
                      </h2>
                      <p className="max-w-[600px] mx-auto text-gray-300 md:text-xl mb-6">
                        Join hundreds of developers in this exciting journey. Registration is open now!
                      </p>
                      <motion.div className="inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          asChild
                          size="lg"
                          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 border-0 text-base h-12 px-8"
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
      </section>
    </div>
  )
}

