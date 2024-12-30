'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '../components/Navbar'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export default function LearnMorePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 pt-24"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-12"
        >
          Discover the Universe with AstroTech
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <Image
              src="https://physicsworld.com/wp-content/uploads/2024/10/GSFC_LISA_small.jpg"
              alt="Space exploration"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-semibold mb-4">Why Choose AstroTech?</h2>
            <p className="text-gray-700 mb-6">
              At AstroTech, we're passionate about bringing the wonders of the universe closer to you. Our state-of-the-art telescopes are designed to provide unparalleled views of celestial objects, from the craters on the Moon to distant galaxies.
            </p>
            <p className="text-gray-700 mb-6">
              Whether you're a beginner stargazer or an experienced astronomer, our range of telescopes offers something for everyone. With easy-to-use interfaces, advanced tracking systems, and high-quality optics, AstroTech telescopes make exploring the night sky an unforgettable experience.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore Our Products
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

