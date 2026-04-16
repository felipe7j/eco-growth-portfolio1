'use client'

import { motion } from 'motion/react'
import { ArrowRight, Leaf, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-eco-gradient-soft opacity-50" />
      <motion.div 
        className="absolute top-[20%] right-[10%] w-64 h-64 bg-eco-green-light/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-[10%] left-[5%] w-96 h-96 bg-eco-green/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-2 bg-eco-green/10 w-fit px-4 py-1.5 rounded-full text-eco-green-dark font-semibold text-sm mb-6 border border-eco-green/20">
            <Sparkles className="w-4 h-4 text-eco-green" />
            <span>Marketing Sustentável & Eficaz</span>
          </div>
          
          <h1 className="text-[42px] md:text-[56px] font-bold font-poppins leading-[1.1] text-eco-green-dark mb-4 tracking-tight">
            Sua marca cresce <br />
            <span className="text-eco-green">com a gente.</span>
          </h1>
          
          <p className="text-[16px] text-[#666] font-inter max-w-lg mb-8 leading-relaxed">
            Estratégias de marketing digital focadas em crescimento real e sustentável para o seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 h-fit">
            <motion.a
              href="#contato"
              className="bg-eco-green text-white px-7 py-3.5 rounded-lg font-bold text-[15px] flex items-center justify-center gap-3 shadow-lg shadow-eco-green/10"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Falar com especialista
            </motion.a>
            <motion.a
              href="#servicos"
              className="bg-white text-eco-green-dark px-7 py-3.5 rounded-lg font-bold text-[15px] flex items-center justify-center gap-3 border border-black/10 hover:border-eco-green transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver serviços
            </motion.a>
          </div>
        </motion.div>

        {/* Hero Visual Element */}
        <motion.div
          className="relative hidden md:block"
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative z-10 glass rounded-[3rem] p-12 overflow-hidden border-2 border-white/50 shadow-2xl">
            <motion.div 
               className="bg-eco-gradient w-full aspect-square rounded-[2rem] flex items-center justify-center relative overflow-hidden"
               animate={{ rotate: 360 }}
               transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
            >
              <Leaf className="text-white w-48 h-48 opacity-20 absolute -top-10 -right-10" />
              <Leaf className="text-white w-32 h-32 opacity-10 absolute bottom-12 left-8" />
            </motion.div>
            
            {/* Overlay stats card */}
            <motion.div
              className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl border-white/40 flex items-center gap-4 max-w-[200px]"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="bg-eco-green p-3 rounded-lg">
                <Sparkles className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-eco-green-dark">+150</p>
                <p className="text-xs text-eco-green font-bold">Projetos Entregues</p>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative Circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border-8 border-eco-green/10 rounded-full" />
          <div className="absolute -bottom-10 right-1/2 w-20 h-20 bg-eco-green-light/20 rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
