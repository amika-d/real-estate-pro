"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Wand2, Calendar, Heart } from "lucide-react"

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const DiscoverSection = () => {
  const steps = [
    {
      imageSrc: "/landing-icon-wand.png",
      title: "Search for Properties",
      description: "Browse through our extensive collection of rental properties in your desired location.",
      icon: Wand2,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
    },
    {
      imageSrc: "/landing-icon-calendar.png",
      title: "Book Your Rental",
      description: "Once you've found the perfect rental property, easily book it online with just a few clicks.",
      icon: Calendar,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      imageSrc: "/landing-icon-heart.png",
      title: "Enjoy your New Home",
      description: "Move into your new rental property and start enjoying your dream home.",
      icon: Heart,
      color: "from-rose-500 to-orange-500",
      bgColor: "from-rose-50 to-orange-50",
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-blue-100 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-blue-600" />
            <span className="text-gray-700 text-sm font-medium">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Your Dream Home in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Searching for your dream rental property has never been easier. With our user-friendly process, you can
            quickly find and secure the perfect home that meets all your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants}>
              <DiscoverCard {...step} index={index + 1} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

const DiscoverCard = ({
  imageSrc,
  title,
  description,
  icon: Icon,
  color,
  bgColor,
  index,
}: {
  imageSrc: string
  title: string
  description: string
  icon: any
  color: string
  bgColor: string
  index: number
}) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className={`relative group bg-gradient-to-br ${bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden`}
  >
    {/* Step Number */}
    <div className="absolute top-6 right-6 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center">
      <span className="text-sm font-bold text-gray-700">{index}</span>
    </div>

    {/* Decorative Elements */}
    <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/30 rounded-full"></div>
    <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/20 rounded-full"></div>

    <div className="relative z-10 text-center">
      {/* Icon Container */}
      

      {/* Original Image */}
      <div className="mb-6 flex justify-center">
        <div className="w-16 h-16 bg-primary-700 rounded-xl shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <Image
            src={imageSrc || "/placeholder.svg"}
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
            alt={title}
          />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-blue-600 transition-all duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>

    {/* Connection Line (except for last card) */}
    {index < 3 && (
      <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform -translate-y-1/2 z-20">
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
      </div>
    )}
  </motion.div>
)

export default DiscoverSection
