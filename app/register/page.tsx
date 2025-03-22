"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/hooks/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"

// Define the schema for a team member
const teamMemberSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  department: z.string().min(2, { message: "Department is required." }),
  regNumber: z.string().min(2, { message: "Registration number is required." }),
  semester: z.string().min(1, { message: "Semester is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
})

// Define the schema for the entire form
const formSchema = z.object({
  // Team Leader Details
  leaderName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  leaderEmail: z.string().email({ message: "Please enter a valid email address." }),
  leaderPhone: z.string().min(10, { message: "Please enter a valid phone number." }),
  leaderDepartment: z.string().min(2, { message: "Department is required." }),
  leaderRegNumber: z.string().min(2, { message: "Registration number is required." }),
  leaderSemester: z.string().min(1, { message: "Semester is required." }),

  // College Details
  collegeName: z.string().min(2, { message: "College name is required." }),
  collegeAddress: z.string().min(5, { message: "College address is required." }),

  // Project Details
  projectTitle: z.string().min(2, { message: "Project title is required." }),
  projectDescription: z.string().min(10, { message: "Please provide a brief description of your project." }),

  // Team Members
  member1: teamMemberSchema,
  member2: teamMemberSchema,
  member3: teamMemberSchema,

  // Terms
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
})

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Initialize the form with default values
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      leaderName: "",
      leaderEmail: "",
      leaderPhone: "",
      leaderDepartment: "",
      leaderRegNumber: "",
      leaderSemester: "",
      collegeName: "",
      collegeAddress: "",
      projectTitle: "",
      projectDescription: "",
      member1: {
        name: "",
        department: "",
        regNumber: "",
        semester: "",
        email: "",
      },
      member2: {
        name: "",
        department: "",
        regNumber: "",
        semester: "",
        email: "",
      },
      member3: {
        name: "",
        department: "",
        regNumber: "",
        semester: "",
        email: "",
      },
      termsAccepted: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      toast({
        title: "Registration Successful!",
        description: "Thank you for registering for HackFest 2025. We'll be in touch soon!",
      })
      form.reset()
    }, 1500)
  }

  // Animation variants for staggered animations
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

  return (
    <div className="dark min-h-screen bg-gray-950 text-white">
      <div className="container py-12 md:py-24">
        <motion.div
          className="mx-auto max-w-3xl space-y-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="space-y-2 text-center" variants={itemVariants}>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Register for HackFest 2025
            </h1>
            <p className="text-gray-300 md:text-xl">
              Team leaders, register your team below to secure your spot in the most exciting hackathon of the year.
            </p>
          </motion.div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Team Leader Section */}
              <motion.div variants={itemVariants}>
                <Card className="border-0 bg-gray-900 shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-0.5">
                    <div className="bg-gray-900">
                      <CardHeader>
                        <CardTitle className="text-2xl">Team Leader Details</CardTitle>
                        <CardDescription className="text-gray-400">
                          Information about the team leader who will be the primary contact.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="leaderName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-200">Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" {...field} className="bg-gray-800 border-gray-700" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="leaderEmail"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-200">Email</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="john.doe@example.com"
                                    type="email"
                                    {...field}
                                    className="bg-gray-800 border-gray-700"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="leaderPhone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-200">Phone Number</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="+1 (123) 456-7890"
                                    {...field}
                                    className="bg-gray-800 border-gray-700"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="leaderDepartment"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-200">Department</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Computer Science"
                                    {...field}
                                    className="bg-gray-800 border-gray-700"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="leaderRegNumber"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-200">Registration Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="CS12345" {...field} className="bg-gray-800 border-gray-700" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="leaderSemester"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-200">Semester</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="bg-gray-800 border-gray-700">
                                      <SelectValue placeholder="Select semester" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="bg-gray-800 border-gray-700">
                                    <SelectItem value="1">1st Semester</SelectItem>
                                    <SelectItem value="2">2nd Semester</SelectItem>
                                    <SelectItem value="3">3rd Semester</SelectItem>
                                    <SelectItem value="4">4th Semester</SelectItem>
                                    <SelectItem value="5">5th Semester</SelectItem>
                                    <SelectItem value="6">6th Semester</SelectItem>
                                    <SelectItem value="7">7th Semester</SelectItem>
                                    <SelectItem value="8">8th Semester</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* College Details Section */}
              <motion.div variants={itemVariants}>
                <Card className="border-0 bg-gray-900 shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-0.5">
                    <div className="bg-gray-900">
                      <CardHeader>
                        <CardTitle className="text-2xl">College Details</CardTitle>
                        <CardDescription className="text-gray-400">
                          Information about your educational institution.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <FormField
                          control={form.control}
                          name="collegeName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-200">College/Institution Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="University of Technology"
                                  {...field}
                                  className="bg-gray-800 border-gray-700"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="collegeAddress"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-200">College Address</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="123 Education Street, Knowledge City"
                                  {...field}
                                  className="bg-gray-800 border-gray-700"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Project Details Section */}
              <motion.div variants={itemVariants}>
                <Card className="border-0 bg-gray-900 shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-0.5">
                    <div className="bg-gray-900">
                      <CardHeader>
                        <CardTitle className="text-2xl">Project Details</CardTitle>
                        <CardDescription className="text-gray-400">
                          Tell us about your project idea (you can update this later).
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <FormField
                          control={form.control}
                          name="projectTitle"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-200">Project Title</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Smart Solution"
                                  {...field}
                                  className="bg-gray-800 border-gray-700"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="projectDescription"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-200">Project Description</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Briefly describe your project idea and the problem it solves"
                                  {...field}
                                  className="bg-gray-800 border-gray-700"
                                />
                              </FormControl>
                              <FormDescription className="text-gray-400">
                                This is a preliminary description and can be updated later.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Team Members Section */}
              <motion.div variants={itemVariants}>
                <Card className="border-0 bg-gray-900 shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-0.5">
                    <div className="bg-gray-900">
                      <CardHeader>
                        <CardTitle className="text-2xl">Team Members</CardTitle>
                        <CardDescription className="text-gray-400">
                          Add details for up to 3 additional team members.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-8">
                        {/* Member 1 */}
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <h3 className="text-lg font-semibold text-gray-200">Team Member 1</h3>
                            <Separator className="flex-1 ml-4 bg-gray-700" />
                          </div>

                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <FormField
                              control={form.control}
                              name="member1.name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-200">Full Name</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Jane Smith"
                                      {...field}
                                      className="bg-gray-800 border-gray-700"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="member1.department"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-200">Department</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Computer Science"
                                      {...field}
                                      className="bg-gray-800 border-gray-700"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="member1.regNumber"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-200">Registration Number</FormLabel>
                                  <FormControl>
                                    <Input placeholder="CS67890" {...field} className="bg-gray-800 border-gray-700" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="member1.semester"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-200">Semester</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="bg-gray-800 border-gray-700">
                                        <SelectValue placeholder="Select semester" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-gray-800 border-gray-700">
                                      <SelectItem value="1">1st Semester</SelectItem>
                                      <SelectItem value="2">2nd Semester</SelectItem>
                                      <SelectItem value="3">3rd Semester</SelectItem>
                                      <SelectItem value="4">4th Semester</SelectItem>
                                      <SelectItem value="5">5th Semester</SelectItem>
                                      <SelectItem value="6">6th Semester</SelectItem>
                                      <SelectItem value="7">7th Semester</SelectItem>
                                      <SelectItem value="8">8th Semester</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="member1.email"
                              render={({ field }) => (
                                <FormItem className="sm:col-span-2">
                                  <FormLabel className="text-gray-200">Email</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="jane.smith@example.com"
                                      type="email"
                                      {...field}
                                      className="bg-gray-800 border-gray-700"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        {/* Member 2 */}
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <h3 className="text-lg font-semibold text-gray-200">Team Member 2</h3>
                            <Separator className="flex-1 ml-4 bg-gray-700" />
                          </div>

                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <FormField
                              control={form.control}
                              name="member2.name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-200">Full Name</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Alex Johnson"
                                      {...field}
                                      className="bg-gray-800 border-gray-700"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="member2.department"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-200">Department</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Electrical Engineering"
                                      {...field}
                                      className="bg-gray-800 border-gray-700"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="member2.regNumber"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-200">Registration Number</FormLabel>
                                  <FormControl>
                                    <Input placeholder="EE12345" {...field} className="bg-gray-800 border-gray-700" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="member2.semester"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-200">Semester</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="bg-gray-800 border-gray-700">
                                        <SelectValue placeholder="Select semester" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-gray-800 border-gray-700">
                                      <SelectItem value="1">1st Semester</SelectItem>
                                      <SelectItem value="2">2nd Semester</SelectItem>
                                      <SelectItem value="3">3rd Semester</SelectItem>
                                      <SelectItem value="4">4th Semester</SelectItem>
                                      <SelectItem value="5">5th Semester</SelectItem>
                                      <SelectItem value="6">6th Semester</SelectItem>
                                      <SelectItem value="7">7th Semester</SelectItem>
                                      <SelectItem value="8">8th Semester</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="member2.email"
                              render={({ field }) => (
                                <FormItem className="sm:col-span-2">
                                  <FormLabel className="text-gray-200">Email</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="alex.johnson@example.com"
                                      type="email"
                                      {...field}
                                      className="bg-gray-800 border-gray-700"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        {/* Member 3 */}
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <h3 className="text-lg font-semibold text-gray-200">Team Member 3</h3>
                            <Separator className="flex-1 ml-4 bg-gray-700" />
                          </div>

                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <FormField
                              control={form.control}
                              name="member3.name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-200">Full Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Sam Lee" {...field} className="bg-gray-800 border-gray-700" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="member3.department"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-200">Department</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Mechanical Engineering"
                                      {...field}
                                      className="bg-gray-800 border-gray-700"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="member3.regNumber"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-200">Registration Number</FormLabel>
                                  <FormControl>
                                    <Input placeholder="ME54321" {...field} className="bg-gray-800 border-gray-700" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="member3.semester"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-gray-200">Semester</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="bg-gray-800 border-gray-700">
                                        <SelectValue placeholder="Select semester" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-gray-800 border-gray-700">
                                      <SelectItem value="1">1st Semester</SelectItem>
                                      <SelectItem value="2">2nd Semester</SelectItem>
                                      <SelectItem value="3">3rd Semester</SelectItem>
                                      <SelectItem value="4">4th Semester</SelectItem>
                                      <SelectItem value="5">5th Semester</SelectItem>
                                      <SelectItem value="6">6th Semester</SelectItem>
                                      <SelectItem value="7">7th Semester</SelectItem>
                                      <SelectItem value="8">8th Semester</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="member3.email"
                              render={({ field }) => (
                                <FormItem className="sm:col-span-2">
                                  <FormLabel className="text-gray-200">Email</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="sam.lee@example.com"
                                      type="email"
                                      {...field}
                                      className="bg-gray-800 border-gray-700"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Terms and Submit */}
              <motion.div variants={itemVariants} className="space-y-6">
                <FormField
                  control={form.control}
                  name="termsAccepted"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-gray-800 p-4 bg-gray-900">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-500 data-[state=checked]:to-cyan-500"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-gray-200">I accept the terms and conditions</FormLabel>
                        <FormDescription className="text-gray-400">
                          By checking this box, you agree to the HackFest 2025 rules and code of conduct.
                        </FormDescription>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full h-12 text-base font-medium bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 border-0"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Register Team"}
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </Form>
        </motion.div>
      </div>
    </div>
  )
}

