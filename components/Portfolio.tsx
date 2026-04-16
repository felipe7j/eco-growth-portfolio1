'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      title: 'Moda Elegance - Loja de Roupas',
      category: 'Identidade Visual & E-commerce',
      img: 'https://picsum.photos/seed/clothing-store/800/600',
      desc: 'Redesign completo da vitrine digital e branding exclusivo.'
    },
    {
      title: 'Empório das Frutas',
      category: 'Gestão de Anúncios & SEO',
      img: 'https://picsum.photos/seed/fruit-shop/800/600',
      desc: 'Estratégia de tráfego local com foco em vendas por WhatsApp.'
    },
    {
      title: 'PetShop Amigão',
      category: 'Social Media & Design',
      img: 'https://picsum.photos/seed/pet-shop/800/600',
      desc: 'Criação de autoridade e engajamento orgânico para comércio local.'
    }
  ]

  return (
    <section id="portfolio" className="py-24 eco-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold font-poppins text-eco-green-dark mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Criatividade com <span className="text-eco-green">Propósito</span>
            </motion.h2>
            <p className="text-lg text-[#666] font-inter">
              Conheça alguns dos projetos que ajudamos a florescer no ambiente digital.
            </p>
          </div>
          <motion.a
            href="https://wa.me/5518997312275"
            className="text-eco-green-dark font-bold flex items-center gap-2 hover:text-eco-green transition-colors pb-1 border-b-2 border-eco-green"
            whileHover={{ x: 5 }}
          >
            Ver portfólio completo
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group overflow-hidden rounded-[2.5rem] bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-eco-green-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8 text-center">
                  <p className="text-white font-inter text-sm italic">
                    {project.desc}
                  </p>
                </div>
                <div className="absolute top-4 left-4">
                   <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-eco-green-dark uppercase tracking-wider">
                     {project.category.split(' & ')[0]}
                   </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold font-poppins text-eco-green-dark mb-2">{project.title}</h3>
                <p className="text-eco-green font-medium font-inter text-sm">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
