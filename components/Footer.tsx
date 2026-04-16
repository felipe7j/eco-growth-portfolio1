'use client'

import { motion } from 'motion/react'
import { Leaf, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Empresa',
      links: [
        { name: 'Início', href: '#inicio' },
        { name: 'Diferenciais', href: '#diferenciais' },
        { name: 'Portfólio', href: '#portfolio' },
      ]
    },
    {
      title: 'Serviços',
      links: [
        { name: 'Identidade Visual', href: '#servicos' },
        { name: 'Desenvolvimento Web', href: '#servicos' },
        { name: 'Gestão de Tráfego', href: '#servicos' },
        { name: 'Social Media', href: '#servicos' },
      ]
    },
    {
      title: 'Suporte',
      links: [
        { name: 'Falar com especialista', href: '#contato' },
        { name: 'Política de Privacidade', href: '#' },
        { name: 'Termos de Uso', href: '#' },
      ]
    }
  ]

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-eco-green/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-2 mb-8">
              <div className="bg-eco-green p-2 rounded-lg">
                <Leaf className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-poppins text-eco-green-dark">
                Eco <span className="text-eco-green-light font-medium">Growth</span>
              </span>
            </a>
            <p className="text-[#666] font-inter max-w-sm mb-8 leading-relaxed">
              Especialistas em fazer negócios crescerem de forma saudável e sustentável no ambiente digital. Sua marca, nossa paixão.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-eco-green/5 text-eco-green flex items-center justify-center hover:bg-eco-green hover:text-white transition-all shadow-sm"
                  whileHover={{ y: -5 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold font-poppins text-eco-green-dark mb-6 text-lg">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-[#777] hover:text-eco-green font-inter transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-[#EEE] flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-wrap gap-12 order-2 md:order-1">
            <div className="flex flex-col">
              <strong className="text-[18px] text-eco-green font-extrabold leading-none">+150</strong>
              <span className="text-[12px] text-[#999]">Clientes Satisfeitos</span>
            </div>
            <div className="flex flex-col">
              <strong className="text-[18px] text-eco-green font-extrabold leading-none">15 Dias</strong>
              <span className="text-[12px] text-[#999]">Entrega Recorde</span>
            </div>
            <div className="flex flex-col">
              <strong className="text-[18px] text-eco-green font-extrabold leading-none">100%</strong>
              <span className="text-[12px] text-[#999]">Transparência</span>
            </div>
          </div>
          
          <div className="text-right order-1 md:order-2">
            <p className="text-[#999] font-inter text-sm mb-1">
              © {currentYear} Eco Growth - Todos os direitos reservados.
            </p>
            <div className="flex gap-4 justify-end">
              <p className="text-[10px] font-bold text-eco-green/40 uppercase tracking-widest">Eco-friendly Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
