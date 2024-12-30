'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductHighlight() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, 50])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-20 bg-black text-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Discover Our Latest Models
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div style={{ y: y1 }} className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://cdn.mos.cms.futurecdn.net/Y4koCE7VcDdtZKbRf3b9Q8.jpg"
              alt="AstroTech Model X"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            className="md:w-1/2 md:pl-12"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">AstroTech Model X</h3>
            <p className="text-xl mb-6">
              Experience the cosmos like never before with our cutting-edge Model X telescope.
              Featuring advanced optics and computerized tracking, it&apos;s perfect for both beginners and seasoned stargazers.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              <Link href="/products/product">Learn More</Link>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

