'use client'

import { motion } from 'motion/react'
import { 
  Palette, 
  Globe, 
  Instagram, 
  Image as ImageIcon, 
  TrendingUp, 
  BookOpen, 
  Users, 
  Search, 
  BarChart 
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Criação de logotipo',
      price: 'R$ 56',
      desc: '3 variações + manual de marca',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Site Institucional',
      price: 'R$ 883',
      desc: '5 páginas, responsivo + SEO',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: 'Gerenciamento de redes',
      price: 'R$ 650',
      desc: 'Mês: 12 posts + 4 reels',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <ImageIcon className="w-8 h-8" />,
      title: 'Identidade visual completa',
      price: 'R$ 900',
      desc: 'Cartão, papelaria, capa social',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Tráfego pago básico',
      price: 'R$ 400',
      desc: 'Google/Meta Ads (+ verba)',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Curso Digital',
      price: 'R$ 633',
      desc: 'eBook/vídeo + design completo',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Gestão Social Media',
      price: 'R$ 159',
      desc: 'Mês: 8 a 12 posts estrategicos',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Google & SEO',
      price: 'R$ 97',
      desc: 'Manutenção + SEO local mensal',
      color: 'bg-cyan-100 text-cyan-600'
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Tráfego pago básico (2)',
      price: 'R$ 237',
      desc: 'Estratégia inicial de anúncios',
      color: 'bg-emerald-100 text-emerald-600'
    }
  ]

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-left mb-10">
          <div className="section-title">Serviços Avulsos</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white/50 p-3 rounded-[10px] border border-black/5 flex items-center gap-3 hover:bg-white hover:shadow-md transition-all duration-300 group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="w-8 h-8 bg-eco-green rounded-lg flex items-center justify-center text-white flex-shrink-0">
                {service.icon}
              </div>
              
              <div className="flex-grow">
                <h4 className="text-[12px] font-bold text-eco-green-dark leading-tight">{service.title}</h4>
                <p className="text-[10px] text-[#777] font-medium leading-tight">
                  <span className="font-bold text-eco-green">{service.price}</span> - {service.desc.split(': ')[1] || service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
