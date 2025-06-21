"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { Search, UserPlus, ArrowRight, Sparkles } from "lucide-react"

const CallToActionSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/landing-call-to-action.jpg"
        alt="Rentiful Search Section Background"
        fill
        className="object-cover object-center"
      />

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6"
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-white/90 text-sm font-medium">Ready to Get Started?</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              >
                Find Your Dream{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Rental Property
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-white/80 mb-8 max-w-2xl"
              >
                Discover a wide range of rental properties in your desired location. Join thousands of happy tenants who
                found their perfect home with us.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8"
              >
                {[
                  { number: "10K+", label: "Properties" },
                  { number: "25K+", label: "Happy Tenants" },
                  { number: "50+", label: "Cities" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row lg:flex-col gap-4 min-w-fit"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl px-8 py-4 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Search className="w-5 h-5" />
                Start Searching
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/signup"
                  className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white rounded-2xl px-8 py-4 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                  scroll={false}
                >
                  <UserPlus className="w-5 h-5" />
                  Sign Up Free
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default CallToActionSection
