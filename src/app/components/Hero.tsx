'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 500], [1, 1.5])
  const opacity = useTransform(scrollY, [0, 300, 500], [1, 0.5, 0])
  const textY = useTransform(scrollY, [0, 300], [0, 50])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg"
          alt="AstroTech Telescope"
          layout="fill"
          objectFit="cover"
          priority
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ y: textY }}
        className="relative z-10 text-center text-white"
      >
        <motion.h1
          className="text-9xl font-bold mb-4
          bg-gradient-to-r from-sky-100 via-sky-400 to-sky-700 text-transparent bg-clip-text"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          
        >
          AstroTech
        </motion.h1>
        <motion.p
          className="text-2xl"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          Explore the Universe
        </motion.p>
      </motion.div>
    </section>
  )
}

