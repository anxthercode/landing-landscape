"use client";

import { motion } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const problems = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-8 w-8">
        {/* Empty frame — unused space */}
        <rect x="6" y="6" width="28" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 20h28M20 6v28" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    title: 'Uninspired Voids',
    body: 'Outdoor spaces often remain unused, feeling like empty additions rather than functional rooms.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-8 w-8">
        {/* Fork in the road — decision paralysis */}
        <path d="M20 34V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 22L12 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 22L28 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="34" r="2" fill="currentColor" />
        <circle cx="12" cy="14" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="28" cy="14" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="20" cy="22" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Decision Paralysis',
    body: 'The sheer scope of choices in planting and hardscaping prevents many from ever starting.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-8 w-8">
        {/* Coins leaking — misallocated budget */}
        <circle cx="20" cy="16" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 25v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
        <path d="M16 12.5h8M16 16h8M16 19.5h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
        <circle cx="20" cy="34" r="1.5" fill="currentColor" opacity="0.35" />
      </svg>
    ),
    title: 'Misallocated Budget',
    body: 'Without a master plan, owners waste thousands on elements that don\'t survive or harmonise.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-8 w-8">
        {/* Scissors — high maintenance burden */}
        <path d="M10 10l20 20M30 10L10 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="30" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 18l8-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'High Maintenance',
    body: 'Poorly planned gardens quickly become a burden of labour rather than a place of rest.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
};

export default function ProblemSection() {
  return (
    <section className="bg-surface-container py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <SectionLabel className="mb-4">The Problem</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-4 max-w-2xl mx-auto">
            Why Most Gardens Fail to Flourish
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {problems.map((problem) => (
            <motion.div key={problem.title} variants={itemVariants} className="space-y-5">
              <div className="text-tertiary-container">{problem.icon}</div>
              <h3 className="font-headline font-semibold text-primary">{problem.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{problem.body}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-display text-2xl md:text-3xl text-primary mb-8 max-w-2xl mx-auto">
            Studio Aethel resolves each of these — by design, not chance.
          </p>
          <a href="/services" className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 font-label text-xs font-medium uppercase tracking-[0.15em] text-surface transition-transform hover:-translate-y-1 hover:shadow-lg">
            See Our Approach
          </a>
        </motion.div>
      </div>
    </section>
  );
}
