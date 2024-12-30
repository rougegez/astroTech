'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const products = [
  { id: 1, name: 'AstroTech X1', price: 599, image: 'https://cdn.shoplightspeed.com/shops/609820/files/56110644/1600x2048x2/unistellar-unistellar-equinox-2-smart-telescope-fo.jpg' },
  { id: 2, name: 'AstroTech Pro', price: 999, image: 'https://cdn.store-assets.com/s/16684/i/24546458.jpg' },
  { id: 3, name: 'AstroTech Ultra', price: 1499, image: 'https://cdn.shoplightspeed.com/shops/609820/files/60350260/1600x2048x2/celestron-celestron-origin-intelligent-home-observ.jpg' },
  { id: 4, name: 'AstroTech Mini', price: 299, image: 'https://cdn.shoplightspeed.com/shops/609820/files/3800232/1600x2048x2/celestron-celestron-astromaster-114-eq.jpg' },
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

export default function ProductsPage() {
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
          Our Telescopes
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="w-full flex justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-6/12 max-h-48 object-cover"
              />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">${product.price}</p>
                <Link 
                  href={`/products/product`}
                  className="bg-blue-600 text-white py-2 px-4 rounded-full inline-block hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

