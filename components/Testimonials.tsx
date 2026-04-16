'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { Quote } from 'lucide-react'

export default function Testimonials() {
  const reviews = [
    {
      name: 'Mariana Silva',
      role: 'Dona da Vibe Natural',
      text: 'A Eco Growth transformou nossa presença online. O novo logotipo e o suporte no tráfego pago nos trouxeram clientes que realmente valorizam nossa proposta sustentável.',
      avatar: 'https://picsum.photos/seed/woman1/200/200'
    },
    {
      name: 'Ricardo Mendes',
      role: 'CEO da TechRoot',
      text: 'Trabalho impecável e entrega dentro do prazo. O site ficou rápido, moderno e o atendimento humanizado faz toda a diferença no dia a dia.',
      avatar: 'https://picsum.photos/seed/man1/200/200'
    }
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-4 bg-eco-green/10 rounded-full mb-6"
          >
            <Quote className="text-eco-green w-8 h-8" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-eco-green-dark">O que dizem nossos clientes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              className="glass p-10 rounded-[3rem] relative border-2 border-eco-green/5"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-[#555] font-inter italic mb-8 leading-relaxed">
                &quot;{review.text}&quot;
              </p>
              
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-eco-green">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-eco-green-dark text-lg">{review.name}</h4>
                  <p className="text-sm text-eco-green font-medium">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
