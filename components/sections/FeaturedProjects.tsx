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
    <section className="overflow-hidden bg-primary-container py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-24 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={titleVariants}>
            <SectionLabel className="text-tertiary-fixed">OUR WORK</SectionLabel>
          </motion.div>
          <motion.h2 variants={titleVariants} className="mt-4 font-display text-5xl text-surface">
            Curated Gardens
          </motion.h2>
        </motion.div>

        <div className="space-y-40">
          {featuredProjects.map((project, index) => {
            const reverse = project.accent === 'right' || index % 2 === 1;

            return (
              <motion.div
                key={project.title}
                className={`flex flex-col items-center gap-12 lg:gap-24 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                variants={projectVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                {/* Decorative project number */}
                <div className="absolute left-0 hidden lg:block">
                </div>

                {/* Image — wider aspect ratio, editorial rounded corners */}
                <div className="group relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-lg lg:w-1/2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                
                {/* Text column */}
                <div className="w-full space-y-8 lg:w-1/2 lg:px-8">
                  <div>
                    <span className="font-display text-7xl font-light text-tertiary-fixed/20">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span className="mt-2 block font-label text-[10px] uppercase tracking-[0.2em] text-tertiary-fixed">
                      {project.subtitle}
                    </span>
                    <h3 className="mt-3 font-display text-4xl leading-[1.1] text-surface lg:text-5xl">{project.title}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="font-body text-lg leading-relaxed text-surface/80">{project.summary}</p>
                    <p className="font-body text-base leading-relaxed text-surface/60">{project.details}</p>
                  </div>

                  <Link
                    href={project.href}
                    className="group inline-flex items-center gap-3 font-label text-xs uppercase tracking-[0.2em] text-tertiary-fixed transition-colors hover:text-surface"
                  >
                    View portfolio
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
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
