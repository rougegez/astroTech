'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function CallToAction() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-20 text-white relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://source.unsplash.com/random/1920x1080/?galaxy,nebula")',
          backgroundSize: 'cover',
          scale
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Ready to Explore the Cosmos?
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8"
          >
            Join thousands of stargazers who have already discovered the wonders of the universe with AstroTech.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Telescopes
          </motion.button>
        </div>
      </div>
    </motion.section>
  )
}

