'use client'

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Packages from '@/components/Packages';
import Differentials from '@/components/Differentials';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion, useScroll, useSpring } from 'motion/react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-eco-green z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <Hero />
      
      <Services />
      
      <Packages />
      
      <Differentials />
      
      <Portfolio />
      
      <Testimonials />
      
      <ContactForm />
      
      <Footer />

      <WhatsAppButton />
    </main>
  );
}
