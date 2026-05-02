"use client";

import { motion } from 'motion/react';
import { MessageSquare, Lightbulb, Palette, HardHat, Leaf } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

const steps = [
  { num: 1, title: "Consultation", desc: "A focused conversation on site to clarify the priorities, constraints, and ambitions for the space.", icon: MessageSquare },
  { num: 2, title: "Concept", desc: "A unified masterplan defining circulation, scale, and the relationship between architecture and garden.", icon: Lightbulb },
  { num: 3, title: "Detailing", desc: "Material selection, lighting schemes, and planting palettes refined to the last specification.", icon: Palette },
  { num: 4, title: "Execution", desc: "Coordinating specialist trades, artisan nurseries, and phased installation on site.", icon: HardHat },
  { num: 5, title: "Aftercare", desc: "Long-term curation and seasonal care to ensure balanced, healthy maturation.", icon: Leaf },
];

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } }
};

export default function ProcessSteps() {
  return (
    <section className="py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <SectionLabel>OUR PROCESS</SectionLabel>
          <h2 className="font-display text-5xl text-primary mt-4">The Journey to Your Oasis</h2>
        </div>
        
        {/* Desktop: horizontal timeline */}
        <div className="relative hidden md:block">
          {/* Animated connecting line */}
          <motion.div
            className="absolute top-[32px] left-[10%] h-px bg-tertiary-container/30"
            initial={{ width: 0 }}
            whileInView={{ width: '80%' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.5, ease: EASE_OUT_EXPO, delay: 0.3 }}
          />
          
          <motion.div 
            className="grid grid-cols-5 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.num} variants={itemVariants} className="relative z-10 flex flex-col items-center text-center space-y-6 group">
                  <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center border-2 border-tertiary-container/30 group-hover:bg-tertiary-container group-hover:border-tertiary-container transition-all duration-500 z-10 shadow-card">
                    <Icon className="h-5 w-5 text-tertiary-container group-hover:text-on-tertiary-container transition-colors duration-500" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-primary text-lg">{step.title}</h4>
                    <p className="text-on-surface-variant text-sm mt-3 leading-relaxed max-w-[200px] mx-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden">
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-tertiary-container/20" />

            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  variants={itemVariants}
                  className="relative flex items-start gap-6 pb-12 last:pb-0 group"
                >
                  {/* Circle with icon on vertical line */}
                  <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-tertiary-container/30 bg-surface shadow-card group-hover:bg-tertiary-container group-hover:border-tertiary-container transition-all duration-500">
                    <Icon className="h-5 w-5 text-tertiary-container group-hover:text-on-tertiary-container transition-colors duration-500" />
                  </div>
                  {/* Content to the right */}
                  <div className="pt-3">
                    <span className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary-container">
                      Step {step.num}
                    </span>
                    <h4 className="font-headline font-bold text-primary text-lg mt-1">{step.title}</h4>
                    <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
