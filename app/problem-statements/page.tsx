"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import {
  Code,
  Database,
  Globe,
  Shield,
  Cpu,
  Smartphone,
  Zap,
  Brain,
  Layers,
  BotIcon as Robot,
  ChevronDown,
  ArrowRight,
  Tag,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Problem statement data
const problemStatements = [
  {
    id: 1,
    title: "AI-Powered Healthcare Assistant",
    description:
      "Design an AI-powered healthcare assistant that can help patients track their medications, schedule appointments, and provide basic health advice. The solution should be accessible via web and mobile interfaces and prioritize user privacy and data security. The assistant should be able to understand natural language queries, maintain context across conversations, and provide personalized recommendations based on the patient's medical history and current medications. Additionally, the system should include features for medication reminders, appointment scheduling with healthcare providers, and basic symptom assessment with appropriate recommendations for seeking professional medical care when necessary.",
    category: "AI/ML",
    difficulty: "Hard",
    icon: <Brain className="h-8 w-8" />,
    color: "from-purple-500 to-blue-500",
    textColor: "text-purple-400",
  },
  {
    id: 2,
    title: "Sustainable Smart City Dashboard",
    description:
      "Create a dashboard for city officials to monitor and manage smart city infrastructure with a focus on sustainability. Include real-time data visualization for energy usage, waste management, traffic flow, and air quality with actionable insights. The dashboard should integrate data from various IoT sensors deployed throughout the city and present it in an intuitive interface that allows officials to identify patterns, detect anomalies, and make data-driven decisions. Key features should include predictive analytics for resource optimization, alert systems for critical thresholds, historical data comparison, and scenario planning tools to simulate the impact of potential policy changes or infrastructure improvements on sustainability metrics.",
    category: "IoT",
    difficulty: "Medium",
    icon: <Globe className="h-8 w-8" />,
    color: "from-blue-500 to-cyan-500",
    textColor: "text-blue-400",
  },
  {
    id: 3,
    title: "Decentralized Student Credential System",
    description:
      "Develop a blockchain-based system for educational institutions to issue, verify, and share student credentials. The solution should prevent credential fraud, ensure privacy, and allow easy verification by employers and other institutions. The system should enable educational institutions to issue digital diplomas, certificates, and transcripts that are cryptographically signed and stored on a blockchain. Students should have control over their credentials and be able to selectively share them with third parties. Employers and other educational institutions should be able to verify the authenticity of credentials without needing to contact the issuing institution directly. The solution should also include features for credential revocation and updates while maintaining an immutable record of all transactions.",
    category: "Blockchain",
    difficulty: "Hard",
    icon: <Layers className="h-8 w-8" />,
    color: "from-amber-500 to-orange-500",
    textColor: "text-amber-400",
  },
  {
    id: 4,
    title: "Accessible E-Learning Platform",
    description:
      "Build an e-learning platform that is fully accessible to users with disabilities. The platform should support various learning materials, interactive assessments, and social learning features while complying with WCAG guidelines. The solution should include features such as screen reader compatibility, keyboard navigation, customizable text size and contrast, closed captioning for videos, and alternative text for images. The platform should support different learning styles through various content formats (text, audio, video, interactive exercises) and provide tools for educators to create accessible content. Additionally, the platform should include collaborative features like discussion forums, peer review, and group projects that are accessible to all users regardless of their abilities.",
    category: "Web",
    difficulty: "Medium",
    icon: <Code className="h-8 w-8" />,
    color: "from-cyan-500 to-teal-500",
    textColor: "text-cyan-400",
  },
  {
    id: 5,
    title: "Cybersecurity Training Simulator",
    description:
      "Create an interactive simulator that trains users to identify and respond to common cybersecurity threats. The simulator should include realistic scenarios, provide immediate feedback, and adapt difficulty based on user performance. The training scenarios should cover a range of threats including phishing attempts, social engineering, malware infections, and data breaches. Users should be able to practice making decisions in simulated environments that mimic real-world systems like email clients, web browsers, and corporate networks. The simulator should track user progress, identify areas for improvement, and provide educational resources tailored to the user's knowledge gaps. The difficulty should automatically adjust based on performance to ensure an appropriate learning curve for users with different levels of cybersecurity expertise.",
    category: "Security",
    difficulty: "Hard",
    icon: <Shield className="h-8 w-8" />,
    color: "from-red-500 to-pink-500",
    textColor: "text-red-400",
  },
  {
    id: 6,
    title: "Real-time Language Translation App",
    description:
      "Develop a mobile application that provides real-time translation of spoken conversations between people speaking different languages. The app should work offline, support at least 5 languages, and maintain conversation context. The solution should use speech recognition to convert spoken language to text, translate the text to the target language, and then use text-to-speech to deliver the translation audibly with minimal delay. The app should be able to distinguish between different speakers in a conversation and maintain the flow of dialogue. It should also include features for saving common phrases, learning from corrections, and adapting to user-specific vocabulary and speech patterns. The offline functionality should ensure the app remains useful in areas with limited connectivity.",
    category: "Mobile",
    difficulty: "Medium",
    icon: <Smartphone className="h-8 w-8" />,
    color: "from-green-500 to-emerald-500",
    textColor: "text-green-400",
  },
  {
    id: 7,
    title: "Optimized Supply Chain Management System",
    description:
      "Design a system that uses data analytics and machine learning to optimize supply chain operations. The solution should predict demand, identify bottlenecks, suggest inventory levels, and visualize the entire supply chain process. The system should integrate with existing ERP systems to collect data on inventory levels, production capacity, transportation logistics, and customer orders. It should use this data to create predictive models for demand forecasting, optimize inventory levels to minimize costs while avoiding stockouts, identify potential disruptions before they occur, and suggest alternative suppliers or routes when issues arise. The visualization component should provide a clear overview of the entire supply chain with drill-down capabilities for detailed analysis of specific segments or processes.",
    category: "Data",
    difficulty: "Hard",
    icon: <Database className="h-8 w-8" />,
    color: "from-violet-500 to-purple-500",
    textColor: "text-violet-400",
  },
  {
    id: 8,
    title: "Energy Consumption Monitoring IoT Solution",
    description:
      "Create an IoT solution that monitors and optimizes energy consumption in homes or offices. The system should collect data from various appliances, provide insights on usage patterns, and suggest ways to reduce energy consumption. The solution should include hardware sensors that can be attached to or integrated with existing appliances to measure power usage, as well as a central hub for data collection and processing. The software component should analyze energy usage patterns, identify energy-intensive appliances or behaviors, and provide actionable recommendations for reducing consumption. Features should include real-time monitoring, historical usage analysis, customizable alerts for unusual consumption patterns, and integration with smart home systems to automate energy-saving actions.",
    category: "IoT",
    difficulty: "Medium",
    icon: <Zap className="h-8 w-8" />,
    color: "from-yellow-500 to-amber-500",
    textColor: "text-yellow-400",
  },
  {
    id: 9,
    title: "Automated Code Review Assistant",
    description:
      "Build a tool that automatically reviews code for security vulnerabilities, performance issues, and adherence to best practices. The tool should integrate with common version control systems and provide actionable feedback to developers. The solution should be able to analyze code in multiple programming languages, identify potential security vulnerabilities (such as SQL injection, XSS, etc.), detect performance bottlenecks, and check compliance with coding standards and best practices. It should integrate with popular version control platforms like GitHub, GitLab, or Bitbucket to automatically review pull requests and provide inline comments on problematic code. The feedback should include explanations of the issues found, their potential impact, and suggested fixes with code examples.",
    category: "DevTools",
    difficulty: "Hard",
    icon: <Cpu className="h-8 w-8" />,
    color: "from-teal-500 to-green-500",
    textColor: "text-teal-400",
  },
  {
    id: 10,
    title: "AR-Based Educational Experience",
    description:
      "Develop an augmented reality application that enhances educational experiences for K-12 students. The app should make abstract concepts tangible through interactive 3D models and gamified learning experiences across multiple subjects. The solution should use a device's camera to overlay educational content onto the real world, allowing students to interact with 3D models of historical artifacts, scientific phenomena, mathematical concepts, and more. The app should include guided lessons with interactive elements, quizzes to test understanding, and gamified challenges to increase engagement. It should support collaborative learning experiences where multiple students can interact with the same AR content simultaneously. The content should be aligned with educational standards and customizable by teachers to support their curriculum.",
    category: "AR/VR",
    difficulty: "Medium",
    icon: <Robot className="h-8 w-8" />,
    color: "from-pink-500 to-rose-500",
    textColor: "text-pink-400",
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

// Problem Card Component
const ProblemCard = ({ problem, index }: { problem: (typeof problemStatements)[0]; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemVariants}
      custom={index}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="w-full mb-6"
    >
      <Card className="w-full border-0 bg-gray-900 shadow-lg overflow-hidden">
        <div className={`bg-gradient-to-r ${problem.color} p-0.5`}>
          <div className="bg-gray-900 w-full">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className={`rounded-full bg-gray-800 p-4 ${problem.textColor} flex-shrink-0`}>{problem.icon}</div>
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="text-2xl font-bold">{problem.title}</h3>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="border-gray-700 text-gray-400">
                        <Tag className="mr-1 h-3 w-3" />
                        {problem.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={`border-gray-700 ${
                          problem.difficulty === "Hard"
                            ? "text-red-400"
                            : problem.difficulty === "Medium"
                              ? "text-yellow-400"
                              : "text-green-400"
                        }`}
                      >
                        {problem.difficulty}
                      </Badge>
                    </div>
                  </div>

                  <motion.div
                    initial={{ height: isExpanded ? "auto" : "80px", overflow: "hidden" }}
                    animate={{
                      height: isExpanded ? "auto" : "80px",
                      overflow: isExpanded ? "visible" : "hidden",
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <p className="text-gray-300 text-base">{problem.description}</p>
                    {!isExpanded && (
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-900 to-transparent" />
                    )}
                  </motion.div>

                  <div className="pt-2 flex justify-between items-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-gray-400 hover:text-white p-0"
                    >
                      {isExpanded ? "Show Less" : "Read More"}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                    </Button>

                    <Button variant="ghost" size="sm" className={`${problem.textColor} hover:bg-gray-800`} asChild>
                      <Link href="/register">
                        Solve This <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

// Main Page Component
export default function ProblemStatementsPage() {
  const categories = ["All", ...new Set(problemStatements.map((p) => p.category))]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProblems =
    activeCategory === "All" ? problemStatements : problemStatements.filter((p) => p.category === activeCategory)

  return (
    <div className="dark min-h-screen bg-gray-950 text-white">
      <div className="container py-12 md:py-24">
        <motion.div
          className="mx-auto max-w-5xl space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="space-y-4 text-center">
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Problem Statements
            </motion.h1>
            <motion.p
              className="mx-auto max-w-[800px] text-gray-300 md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Choose from these exciting challenges and showcase your innovation and technical skills. Each problem
              statement offers a unique opportunity to create impactful solutions.
            </motion.p>
          </div>

          {/* Category Tabs */}
          <Tabs defaultValue="All" className="w-full" onValueChange={setActiveCategory}>
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <TabsList className="bg-gray-900 border border-gray-800">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Problem Cards - Vertical Layout */}
            <TabsContent value={activeCategory} className="mt-0">
              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key={activeCategory} // Force re-render of animation when category changes
              >
                {filteredProblems.map((problem, index) => (
                  <ProblemCard key={problem.id} problem={problem} index={index} />
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="border-0 bg-gray-900 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-0.5">
                <div className="bg-gray-900">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Ready to Take on the Challenge?
                    </h2>
                    <p className="max-w-[600px] mx-auto text-gray-300 mb-6">
                      Register now to participate in HackFest 2025 and start working on these exciting problem
                      statements!
                    </p>
                    <motion.div className="inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 border-0"
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

