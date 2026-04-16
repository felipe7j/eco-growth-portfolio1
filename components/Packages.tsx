'use client'

import { motion } from 'motion/react'
import { Check, Zap, Globe, Rocket } from 'lucide-react'

export default function Packages() {
  const packages = [
    {
      name: 'START',
      icon: <Zap className="w-8 h-8" />,
      price: '237',
      color: 'bg-green-500',
      tag: 'Ideal para iniciantes',
      features: [
        'Configuração Google Meu Negócio',
        'Instagram Básico (Bio + 3 posts)',
        'Estratégia de Bio Otimizada',
        'Analise de Público Alvo',
      ]
    },
    {
      name: 'PRESENÇA DIGITAL',
      icon: <Globe className="w-8 h-8" />,
      price: '380',
      color: 'bg-blue-500',
      tag: 'Mais vendido',
      popular: true,
      features: [
        'Tudo do Pacote Start',
        'Site Profissional (One Page)',
        'WhatsApp Business Integrado',
        'SEO Básico para Localização',
        'Botão de Orçamento Direto',
      ]
    },
    {
      name: 'CRESCIMENTO',
      icon: <Rocket className="w-8 h-8" />,
      price: '517',
      color: 'bg-purple-500',
      tag: 'Gestão Premium',
      features: [
        'Tudo do Pacote Presença',
        'Configuração Google/Meta Ads',
        'Estratégia de Conteúdo Mensal',
        '4 Reels Profissionais / Mês',
        'Relatório de Desempenho',
        'Consultoria Quinzenal',
      ]
    }
  ]

  return (
    <section id="pacotes" className="py-24 eco-gradient-soft overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-left mb-10">
          <div className="section-title">Nossos Planos</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              className={`relative flex flex-col p-[18px] rounded-[14px] transition-all duration-500 bg-white ${
                pkg.popular 
                ? 'border-2 border-eco-green shadow-xl shadow-eco-green/10 z-10' 
                : 'border border-black/5 shadow-sm'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {pkg.popular && (
                <div className="absolute -top-3 right-3 bg-eco-green text-white px-2.5 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider shadow-md">
                  {pkg.tag}
                </div>
              )}

              <div className="flex justify-between items-center mb-4">
                <span className="text-[14px] font-bold text-eco-green-dark/80 tracking-tight uppercase">
                  {pkg.name}
                </span>
                <div className={`${pkg.popular ? 'text-eco-green' : 'text-eco-green-dark/20'}`}>
                  {pkg.icon}
                </div>
              </div>

              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-sm font-medium opacity-70">R$</span>
                <span className="text-[24px] font-extrabold text-eco-green-dark">{pkg.price}</span>
              </div>

              <ul className="space-y-1.5 mb-8 flex-grow">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-[11px] text-[#666]">
                    <Check className={`w-3 h-3 shrink-0 ${pkg.popular ? 'text-eco-green-light' : 'text-eco-green'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contato"
                className={`w-full py-3 rounded-lg font-bold text-center text-[13px] transition-all ${
                  pkg.popular 
                  ? 'bg-eco-green text-white hover:bg-eco-green-dark shadow-md shadow-eco-green/20' 
                  : 'bg-eco-green/5 text-eco-green-dark hover:bg-eco-green/10 border border-eco-green/10'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Escolher Plano
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
