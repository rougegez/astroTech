'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const ProductPage = () => {
  return (
    <div className="container mx-auto px-4 py-20">
        <Navbar />
      <h1 className="text-4xl font-bold mb-6">AstroTech Model X</h1>
      <Image
        src="https://cdn.mos.cms.futurecdn.net/Y4koCE7VcDdtZKbRf3b9Q8.jpg"
        alt="AstroTech Model X"
        width={500}
        height={500}
        className="rounded-lg mb-6"
      />
      <p className="text-xl mb-4">
        Experience the cosmos like never before with our cutting-edge Model X telescope.
        Featuring advanced optics and computerized tracking, it's perfect for both beginners and seasoned stargazers.
      </p>
      <h2 className="text-2xl font-bold mb-4">Key Features:</h2>
      <ul className="list-disc list-inside mb-6">
        <li>High-resolution optics for clear images</li>
        <li>Computerized tracking for easy navigation</li>
        <li>Lightweight and portable design</li>
        <li>Compatible with various accessories</li>
      </ul>
      <button className="bg-blue-600 text-white py-2 px-4 rounded">
        Buy Now
      </button>
    </div>
  )
}

export default ProductPage