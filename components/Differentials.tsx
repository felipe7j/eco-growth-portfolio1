'use client'

import { motion } from 'motion/react'
import { HeartHandshake, ShieldCheck, Clock, FileText } from 'lucide-react'

export default function Differentials() {
  const diffs = [
    {
      icon: <HeartHandshake className="w-10 h-10" />,
      title: 'Atendimento Humanizado',
      desc: 'Nada de bots genéricos. Nossa equipe está sempre disponível para entender suas necessidades reais.'
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: 'Estratégia Sustentável',
      desc: 'Focamos em crescimento real e perene, não em métricas de vaidade ou promessas impossíveis.'
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: 'Entrega Rápida',
      desc: 'Sabemos que tempo é dinheiro. Projetos de identidade visual entregues em até 15 dias úteis.'
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Relatórios Transparentes',
      desc: 'Toda decisão é baseada em dados. Você recebe relatórios mensais claros sobre cada centavo investido.'
    }
  ]

  return (
    <section id="diferenciais" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold font-poppins text-eco-green-dark mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Por que escolher a <span className="text-eco-green">Eco Growth</span>?
            </motion.h2>
            <p className="text-lg text-[#555] font-inter mb-8 leading-relaxed">
              Diferente de agências tradicionais, nossa preocupação é com o ecossistema do seu negócio. 
              Criamos raízes fortes para que seus frutos sejam abundantes e duradouros.
            </p>
            
            <div className="bg-eco-gradient p-1 rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-white p-8 rounded-[1.4rem]">
                <p className="text-eco-green-dark font-bold text-xl italic mb-4">
                  &quot;Nosso compromisso é com o seu sucesso genuíno.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-eco-green/10 flex items-center justify-center">
                    <HeartHandshake className="text-eco-green w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-eco-green-dark">Equipe Eco Growth</p>
                    <p className="text-xs text-eco-green font-semibold uppercase tracking-wider">Estrategistas Digitais</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {diffs.map((diff, index) => (
              <motion.div
                key={diff.title}
                className="p-8 rounded-[2.5rem] bg-[#F9F9F9] border border-[#EEE] hover:border-eco-green/30 hover:bg-white hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-eco-green mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                  {diff.icon}
                </div>
                <h3 className="text-xl font-bold font-poppins text-eco-green-dark mb-3">{diff.title}</h3>
                <p className="text-[#777] font-inter text-sm leading-relaxed">{diff.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
