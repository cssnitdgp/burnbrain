import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-gray-400 border-t-2 bg-gray-950 text-white">
      <div className="container py-8 md:py-12 px-4 font-mono">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="HackFest Logo"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="font-bold text-xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                BurnBrain 2025
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Join us for the most exciting hackathon of the year. Build, learn, and connect with fellow developers.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-hackathon" className="text-gray-400 hover:text-white transition-colors">
                  About Hackathon
                </Link>
              </li>
              <li>
                <Link href="/problem-statements" className="text-gray-400 hover:text-white transition-colors">
                  Problem Statements
                </Link>
              </li>
              <li>
                <Link href="/event-flow" className="text-gray-400 hover:text-white transition-colors">
                  Event Flow
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-400 hover:text-white transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Developers
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-white">Lead Developer</p>
                <p className="text-gray-400">Alex Johnson</p>
                <Link href="https://github.com/alexjohnson" className="text-cyan-400 hover:underline text-xs">
                  @alexjohnson
                </Link>
              </div>
              <div>
                <p className="font-medium text-white">Junior Developer</p>
                <p className="text-gray-400">Sarah Chen</p>
                <Link href="https://github.com/sarahchen" className="text-cyan-400 hover:underline text-xs">
                  @sarahchen
                </Link>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <Mail className="h-4 w-4 text-emerald-400 mt-1 mr-2" />
                <span className="text-gray-400">info@hackfest2025.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-emerald-400 mt-1 mr-2" />
                <span className="text-gray-400">+91 8721916798</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 text-emerald-400 mt-1 mr-2" />
                <span className="text-gray-400">NIT Durgapur, MG Avenue</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} BurnBrain 2025. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            {" • "}
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

