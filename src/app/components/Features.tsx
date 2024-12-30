'use client'

import { motion } from 'framer-motion'
import { Telescope, Zap, Compass, Star } from 'lucide-react'

const features = [
  { icon: Telescope, title: 'High-Precision Optics', description: 'Crystal-clear views of celestial objects' },
  { icon: Zap, title: 'Smart Tracking', description: 'Automated star-tracking technology' },
  { icon: Compass, title: 'Easy Navigation', description: 'User-friendly interface for effortless exploration' },
  { icon: Star, title: 'Deep Space Imaging', description: 'Capture stunning photos of distant galaxies' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export default function Features() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-20 bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mb-12 text-center"
        >
          Why Choose AstroTech
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

