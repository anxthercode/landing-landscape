"use client";

import { motion } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';

export default function ProcessSteps() {
  const steps = [
    { num: 1, title: "Consultation", desc: "A focused conversation on site to clarify the priorities." },
    { num: 2, title: "Concept", desc: "A unified masterplan defining circulation and scale." },
    { num: 3, title: "Detailing", desc: "Material selection, lighting, and planting palettes." },
    { num: 4, title: "Execution", desc: "Coordinating specialist trades and artisan nurseries." },
    { num: 5, title: "Aftercare", desc: "Long-term curation to ensure balanced maturation." }
  ];

  const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(2px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.6, ease: EASE_OUT_EXPO } }
  };

  return (
    <section className="py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <SectionLabel>OUR PROCESS</SectionLabel>
          <h2 className="font-display text-5xl text-primary mt-4">The Journey to Your Oasis</h2>
        </div>
        
        <div className="relative">
          <div className="hidden md:block absolute top-[32px] left-[10%] w-[80%] h-px bg-tertiary-container/30"></div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {steps.map((step, i) => (
              <motion.div key={i} variants={itemVariants} className="relative z-10 flex flex-col items-center text-center space-y-6 group">
                <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center border border-tertiary-container/50 group-hover:bg-tertiary-container group-hover:text-on-tertiary-container transition-all duration-500 text-tertiary-container z-10">
                  <span className="font-display text-xl">{step.num}</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-primary text-lg">{step.title}</h4>
                  <p className="text-on-surface-variant text-sm mt-3 leading-relaxed max-w-[200px] mx-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
