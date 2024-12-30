'use client'

import { motion } from 'framer-motion'
import { Telescope, Zap, Compass, Star, Moon, Sun, Camera, Wifi } from 'lucide-react'
import Navbar from '../components/Navbar'

const features = [
  { icon: Telescope, title: 'High-Precision Optics', description: 'Crystal-clear views of celestial objects with our advanced lens technology.' },
  { icon: Zap, title: 'Smart Tracking', description: 'Automated star-tracking technology keeps your target in view.' },
  { icon: Compass, title: 'Easy Navigation', description: 'User-friendly interface for effortless exploration of the night sky.' },
  { icon: Star, title: 'Deep Space Imaging', description: 'Capture stunning photos of distant galaxies and nebulae.' },
  { icon: Moon, title: 'Lunar Observation', description: 'Detailed views of the Moon\'s craters and surface features.' },
  { icon: Sun, title: 'Solar Filters', description: 'Safely observe the Sun with our specialized solar filters.' },
  { icon: Camera, title: 'Astrophotography', description: 'Built-in camera adapter for easy astrophotography setup.' },
  { icon: Wifi, title: 'Wireless Control', description: 'Control your telescope remotely with our mobile app.' },
]

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

export default function FeaturesPage() {
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
          AstroTech Features
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

