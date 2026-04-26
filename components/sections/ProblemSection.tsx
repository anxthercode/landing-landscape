"use client";

import { motion } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';
import { Square, Split, CircleDollarSign, Scissors } from 'lucide-react';
import Link from 'next/link';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const problems = [
  {
    icon: <Square strokeWidth={1.5} className="h-7 w-7" />,
    title: 'Uninspired Voids',
    body: 'Outdoor spaces often remain unused, feeling like empty additions rather than functional rooms.',
  },
  {
    icon: <Split strokeWidth={1.5} className="h-7 w-7" />,
    title: 'Decision Paralysis',
    body: 'The sheer scope of choices in planting and hardscaping prevents many from ever starting.',
  },
  {
    icon: <CircleDollarSign strokeWidth={1.5} className="h-7 w-7" />,
    title: 'Misallocated Budget',
    body: 'Without a master plan, owners waste thousands on elements that don\'t survive or harmonise.',
  },
  {
    icon: <Scissors strokeWidth={1.5} className="h-7 w-7" />,
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
    <section className="bg-surface-bright py-32 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left column: Sticky Title */}
        <div className="lg:w-1/3 lg:shrink-0">
          <div className="sticky top-32">
            <SectionLabel className="mb-4">THE PROBLEM</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-primary mt-4">
              Why Most Gardens Fail to Flourish
            </h2>
          </div>
        </div>

        {/* Right column: Stack of problems */}
        <motion.div
          className="lg:w-2/3 flex flex-col gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {problems.map((problem) => (
            <motion.div key={problem.title} variants={itemVariants} className="flex flex-col sm:flex-row gap-6 sm:gap-8 group">
              <div className="shrink-0 text-tertiary-container bg-surface-container rounded-2xl w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-colors duration-500 group-hover:bg-tertiary-container group-hover:text-surface">
                {problem.icon}
              </div>
              <div className="pt-1">
                <h3 className="font-headline font-semibold text-2xl text-primary mb-3">{problem.title}</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">{problem.body}</p>
              </div>
            </motion.div>
          ))}
          
          {/* Bridge text */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 pt-12 border-t border-surface-container-high"
          >
            <Link 
              href="/services" 
              className="group flex flex-col gap-6"
            >
              <p className="font-display text-3xl md:text-4xl text-primary transition-colors duration-300 group-hover:text-tertiary-container">
                This is exactly what Greenframe was designed to solve.
              </p>
              <span className="inline-flex items-center gap-3 font-label text-xs font-bold uppercase tracking-[0.15em] text-tertiary-container transition-colors duration-300 group-hover:text-primary">
                See Our Approach
                <span className="transition-transform duration-300 group-hover:translate-x-2" aria-hidden="true">→</span>
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
