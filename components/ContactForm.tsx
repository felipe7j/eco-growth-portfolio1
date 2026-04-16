'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react'

export default function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('sending')
    // Simulate sending
    setTimeout(() => {
      setFormState('success')
      setTimeout(() => setFormState('idle'), 5000)
    }, 1500)
  }

  return (
    <section id="contato" className="py-24 eco-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-2/5 eco-gradient p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold font-poppins mb-6">Vamos conversar?</h2>
              <p className="text-white/80 font-inter mb-12 text-lg">
                Estamos prontos para entender seu projeto e propor a melhor estratégia de crescimento.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-60 font-bold uppercase tracking-wider">Telefone / WhatsApp</p>
                    <p className="text-xl font-bold font-poppins">(18) 99731-2275</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-60 font-bold uppercase tracking-wider">E-mail</p>
                    <p className="text-xl font-bold font-poppins">fgoncalves116@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-60 font-bold uppercase tracking-wider">Endereço</p>
                    <p className="text-xl font-bold font-poppins">Junqueirópolis, SP - Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/20">
              <p className="text-sm italic opacity-80">
                Atendimento de Segunda a Sexta, das 09h às 18h.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-12 md:p-16">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="section-title !mb-6">Contato Rápido</div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-eco-green-dark uppercase tracking-wide opacity-80">Nome Completo</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Seu nome" 
                    className="w-full px-4 py-3 rounded-lg bg-white border border-black/10 focus:border-eco-green transition-all outline-none font-inter text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-eco-green-dark uppercase tracking-wide opacity-80">E-mail Corporativo</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="exemplo@empresa.com" 
                    className="w-full px-4 py-3 rounded-lg bg-white border border-black/10 focus:border-eco-green transition-all outline-none font-inter text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-eco-green-dark uppercase tracking-wide opacity-80">WhatsApp / Telefone</label>
                <input 
                  required 
                  type="tel" 
                  placeholder="(18) 99731-2275" 
                  className="w-full px-4 py-3 rounded-lg bg-white border border-black/10 focus:border-eco-green transition-all outline-none font-inter text-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-eco-green-dark uppercase tracking-wide opacity-80">Mensagem</label>
                <textarea 
                  required 
                  rows={3} 
                  placeholder="Como podemos ajudar?" 
                  className="w-full px-4 py-3 rounded-lg bg-white border border-black/10 focus:border-eco-green transition-all outline-none font-inter text-sm resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={formState !== 'idle'}
                className={`w-full py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-3 shadow-md transition-all ${
                  formState === 'success' 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-eco-green text-white hover:bg-eco-green-dark'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {formState === 'idle' && (
                  <>
                    Enviar mensagem
                    <Send className="w-5 h-5" />
                  </>
                )}
                {formState === 'sending' && (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                )}
                {formState === 'success' && (
                  <>
                    Enviado com sucesso!
                    <CheckCircle2 className="w-6 h-6" />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
