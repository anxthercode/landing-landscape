"use client";

import { motion } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';
import { testimonials } from '@/lib/site-data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Testimonials() {
  return (
    <section className="w-full overflow-hidden bg-primary-container py-32 text-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-24 text-center">
          <SectionLabel>CLIENT COMMISSIONS</SectionLabel>
          <h2 className="mt-6 font-display text-4xl md:text-5xl text-surface/90">What matters in the work</h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants} 
              className="group flex flex-col justify-between rounded-2xl bg-surface/5 p-10 border border-surface/10 transition-colors hover:bg-surface/10"
            >
              <div className="mb-8 font-display text-xl leading-relaxed text-surface/90 italic">
                "{t.quote}"
              </div>
              <div className="border-t border-surface/10 pt-6">
                <div className="font-headline font-semibold text-tertiary-container">{t.author}</div>
                <div className="mt-1 flex items-center gap-3 font-body text-sm text-surface/60">
                  <span>{t.location}</span>
                  <span className="w-1 h-1 rounded-full bg-surface/30"></span>
                  <span>{t.projectType}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
