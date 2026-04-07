"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';
import { featuredProjects } from '@/lib/site-data';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: EASE_OUT_EXPO },
  },
};

export default function FeaturedProjects() {
  return (
    <section className="overflow-hidden bg-surface py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-24 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={titleVariants}>
            <SectionLabel>OUR WORK</SectionLabel>
          </motion.div>
          <motion.h2 variants={titleVariants} className="mt-4 font-display text-5xl text-primary">
            Curated Gardens
          </motion.h2>
        </motion.div>

        <div className="space-y-40">
          {featuredProjects.map((project, index) => {
            const reverse = project.accent === 'right' || index % 2 === 1;

            return (
              <motion.div
                key={project.title}
                className={`flex flex-col items-center gap-16 ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                variants={projectVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl md:w-3/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 60vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-primary/10" />
                </div>
                <div className="w-full space-y-6 md:w-2/5">
                  <span className="font-label text-[10px] uppercase tracking-widest text-tertiary-container">
                    {project.subtitle}
                  </span>
                  <h3 className="font-display text-4xl text-primary">{project.title}</h3>
                  <p className="leading-relaxed text-on-surface-variant">{project.summary}</p>
                  <p className="leading-relaxed text-on-surface-variant">{project.details}</p>
                  <Link
                    href={project.href}
                    className="group inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-tertiary-container transition-opacity hover:opacity-80"
                  >
                    View portfolio
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
