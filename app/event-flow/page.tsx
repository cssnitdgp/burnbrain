"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Calendar, FileText, Rocket, ArrowDown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const stages = [
  {
    id: 1,
    title: "Registration",
    description: "The first step to participate in HackFest 2025",
    icon: <Calendar className="h-10 w-10 text-primary" />,
    time: "March 1 - April 15, 2025",
    bullets: [
      "Complete the online registration form with your details",
      "Form your team or register as an individual participant",
      "Receive confirmation email with further instructions",
    ],
    color: "from-purple-500 to-blue-500",
  },
  {
    id: 2,
    title: "PPT Submission",
    description: "Present your idea before the final hackathon",
    icon: <FileText className="h-10 w-10 text-primary" />,
    time: "April 20 - May 5, 2025",
    bullets: [
      "Prepare a presentation outlining your project idea and approach",
      "Submit your presentation through the participant portal",
      "Receive feedback and suggestions from our panel of experts",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Final Hackathon",
    description: "The main event where ideas come to life",
    icon: <Rocket className="h-10 w-10 text-primary" />,
    time: "May 15-17, 2025",
    bullets: [
      "48-hour coding marathon at Tech Campus Innovation Center",
      "Present your final project to judges and industry experts",
      "Winners announced at the closing ceremony with prizes",
    ],
    color: "from-cyan-500 to-emerald-500",
  },
]

function AnimatedArrow() {
  return (
    <motion.div
      className="flex justify-center my-4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    >
      <ArrowDown className="h-12 w-12 text-primary" />
    </motion.div>
  )
}

function AnimatedStage({ stage, index }: { stage: (typeof stages)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            delay: index * 0.3,
          },
        },
      }}
      className="w-full"
    >
      <Card className="w-full overflow-hidden border-0 shadow-lg">
        <div className={`bg-gradient-to-r ${stage.color} p-0.5`}>
          <div className="bg-background dark:bg-gray-900">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="rounded-full bg-primary/10 p-4">{stage.icon}</div>
              <div className="flex-1">
                <CardTitle className="text-2xl md:text-3xl">{stage.title}</CardTitle>
                <CardDescription className="text-lg opacity-90">{stage.time}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-6 text-lg text-muted-foreground">{stage.description}</p>
              <ul className="space-y-4">
                {stage.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-primary" />
                    <span className="text-base">{bullet}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </div>
        </div>
      </Card>

      {index < stages.length - 1 && <AnimatedArrow />}
    </motion.div>
  )
}

export default function EventFlowPage() {
  return (
    <div className="dark min-h-screen bg-gray-950 text-white">
      <div className="container py-12 md:py-24">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Event Flow
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              HackFest 2025 is structured in three key phases to ensure a smooth and productive experience for all
              participants.
            </p>
          </div>

          <div className="space-y-8">
            {stages.map((stage, index) => (
              <AnimatedStage key={stage.id} stage={stage} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="rounded-lg border border-gray-800 bg-gray-900 p-8 text-center"
          >
            <h2 className="mb-4 text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Join the Journey?
            </h2>
            <p className="mb-6 text-gray-300">
              Don't miss out on this incredible opportunity to showcase your skills, learn from experts, and win amazing
              prizes!
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/register"
                className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-500 to-cyan-500 px-8 text-base font-medium text-white shadow transition-colors hover:from-purple-600 hover:to-cyan-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Register Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

