'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Features', href: '/features' },
  { name: 'Learn More', href: '/learn-more' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false) // State for mobile menu
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Only add scroll listener on homepage
    if (isHomePage) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [isHomePage])

  // Define background color based on path and scroll position
  const navBackground = isHomePage
    ? (isScrolled ? 'bg-stone-900' : 'bg-transparent')
    : 'bg-stone-900' // Default background for other pages

  // Define text color based on path and scroll position
  const logoColor = isHomePage
    ? (isScrolled ? 'text-blue-600' : 'text-white')
    : 'text-blue-600' // Default logo color for other pages

  const linkColor = isHomePage
    ? (isScrolled ? 'text-white hover:text-blue-600' : 'text-white hover:text-gray-200')
    : 'text-white hover:text-blue-600' // Default link color for other pages

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${navBackground} ${isScrolled ? 'shadow-md' : ''}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className={`text-2xl font-bold ${logoColor}`}>
              AstroTech
            </Link>
          </motion.div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? '✖' : '☰'} {/* Hamburger icon */}
            </button>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={item.href}
                  className={`text-lg font-medium ${linkColor}`}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)} />
      <motion.ul
        className={`fixed top-0 right-0 w-64 h-full bg-stone-900 shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        initial={{ x: 300 }}
        animate={{ x: isOpen ? 0 : 300 }}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-white">
            ✖
          </button>
        </div>
        {navItems.map((item) => (
          <motion.li
            key={item.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 border-b border-gray-700"
          >
            <Link
              href={item.href}
              className={`text-lg font-medium text-white`}
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {item.name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  )
}