"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div >
      <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 z-50 w-full"
    >
      {/* Glassmorphism Background */}
      <div className="bg-black/40 backdrop-blur-md border-b border-white/20 shadow-2xl">
        <div className="flex justify-between items-center py-4 px-6 md:px-8 lg:px-12">
          {/* Logo Section */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-4 md:gap-6">
            <Link href="/" className="cursor-pointer group" scroll={false}>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-primary-800 rounded-lg p-1">
                    <Image src="/logo.svg" alt="Rentiful logo" width={24} height={24} className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  RENT
                  <span className="text-blue-300 font-light group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400">
                    iful
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Tagline - Hidden on mobile */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white/80 hidden lg:block text-center max-w-md"
          >
            Discover your perfect rental apartment with our advanced search
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center gap-3 md:gap-4"
          >
            <Link href="/signin">
              <Button
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-gray-900 rounded-xl px-4 md:px-6 py-2 font-medium backdrop-blur-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Sign in
              </Button>
            </Link>

            <Link href="/signup">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl px-4 md:px-6 py-2 font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0">
                Sign up
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Subtle gradient line at bottom */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </motion.div>
    </div>
    
  )
}

export default Navbar
