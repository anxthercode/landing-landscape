"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import { portfolioProjects } from '@/lib/site-data';

export default function GardensList() {
  return (
    <motion.div 
      className="space-y-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
      }}
    >
      {portfolioProjects.map((project, index) => {
        const reversed = index % 2 === 1;

        return (
          <motion.div 
            key={project.title} 
            className={`flex flex-col items-center gap-16 ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg lg:w-1/2">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 z-10 bg-primary-container/20 mix-blend-multiply" />
            </div>

            <div className="w-full space-y-8 lg:w-1/2">
              <div>
                <span className="font-label text-[10px] uppercase tracking-widest text-tertiary-container">
                  {project.subtitle}
                </span>
                <h3 className="mt-2 font-display text-4xl text-primary lg:text-5xl">{project.title}</h3>
              </div>

              <div className="space-y-6 leading-relaxed text-on-surface-variant">
                <div>
                  <h4 className="mb-2 font-headline text-sm font-bold uppercase tracking-widest text-primary">
                    What was improved
                  </h4>
                  <p>{project.summary}</p>
                </div>
                <div>
                  <h4 className="mb-2 font-headline text-sm font-bold uppercase tracking-widest text-primary">
                    Why it matters
                  </h4>
                  <p>{project.details}</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
