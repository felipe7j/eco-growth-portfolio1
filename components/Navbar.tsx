'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Leaf } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Pacotes', href: '#pacotes' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contato' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-3' : 'bg-white/80 backdrop-blur-sm py-4'} border-b border-black/5 h-[70px] flex items-center`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#inicio"
          className="flex items-center gap-2 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="text-[24px] font-[800] font-poppins tracking-tighter text-eco-green">
            Eco<span className="text-eco-green-dark">Growth</span>
          </span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              className={`text-[14px] font-[500] transition-colors relative group ${link.name === 'Início' ? 'text-eco-green' : 'text-[#333] opacity-70 hover:opacity-100'}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contato"
            className="bg-eco-green text-white px-5 py-2.5 rounded-lg font-bold text-[14px] hover:bg-eco-green-dark transition-colors shadow-md shadow-eco-green/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Falar com especialista
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-eco-green-dark p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-2xl md:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-eco-green-dark hover:text-eco-green py-2 transition-colors border-b border-eco-green/10"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contato"
                className="bg-eco-green text-white text-center py-4 rounded-xl font-bold mt-2"
                onClick={() => setIsOpen(false)}
              >
                Falar com especialista
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
