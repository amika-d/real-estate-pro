"use client";
import { motion } from "framer-motion";
import { Shield, Search, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const FeaturesSection = () => {
  const features = [
  {
    imageSrc: "/landing-search3.png",
    title: "Trustworthy & Verified Listings",
    description:
      "Every property is thoroughly verified with authentic photos and accurate details. Browse with confidence knowing all listings meet our quality standards.",
    linkText: "Explore",
    linkHref: "/explore",
    gradient: "from-rose-400 to-rose-500", // soft red to rose
  },
  {
    imageSrc: "/landing-search2.png",
    title: "Advanced Search Filters",
    description:
      "Find exactly what you're looking for with our powerful search tools. Filter by price, location, amenities, and more to discover your perfect match.",
    linkText: "Search",
    linkHref: "/search",
    gradient: "from-rose-400 to-rose-500", // lighter pink fade
  },
  {
    imageSrc: "/landing-search1.png",
    title: "Real User Reviews & Ratings",
    description:
      "Make informed decisions with genuine reviews from previous tenants. See ratings, photos, and detailed feedback to choose the best property.",
    linkText: "Discover",
    linkHref: "/discover",
    gradient: "from-rose-400 to-rose-500", // peachy pink to soft pastel
  },
];


  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/5 to-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600/5 to-emerald-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the future of rental property search with our
              cutting-edge features designed to make finding your dream home
              effortless.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({
    imageSrc,
  title,
  description,
  linkText,
  linkHref,
  gradient,
}: {
    imageSrc: string,
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  gradient: string;
}) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className="group relative bg-gray-900/80 backdrop-blur-sm border border-gray-800/80 rounded-2xl p-8 hover:border-gray-700/80 transition-all duration-300"
  >
    {/* Gradient Border Effect */}
    <div
      className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}
    ></div>

    <div className="relative z-10">
      
        <div className={`inline-flex items-center justify-center w-30 h-30  rounded-xl mb-6 shadow-lg`}>
      
        <Image
          src={imageSrc}
          alt="Search illustration"
          width={600} // adjust size as needed
          height={600}
          className="object-contain"
        />
      </div>

      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
        {title}
      </h3>

      <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>

      <Link
        href={linkHref}
        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${gradient} text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
      >
        {linkText}
        <motion.div
          className="ml-2"
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          →
        </motion.div>
      </Link>
    </div>
  </motion.div>
);

export default FeaturesSection;
