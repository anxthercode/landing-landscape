"use client";

import Image from 'next/image';
import { motion } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';

interface Props {
  label: string;
  title: string;
  imageSrc: string;
}

export default function InnerPageBanner({ label, title, imageSrc }: Props) {
  return (
    <section className="relative w-full overflow-hidden bg-primary min-h-[50vh] md:min-h-[55vh] flex flex-col justify-center items-center text-center pt-24 pb-12">
      {/* Content — animated fade-in */}
      <motion.div 
        className="z-20 relative px-6 flex flex-col items-center w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <SectionLabel className="mb-6 text-tertiary-fixed drop-shadow-sm">
          {label}
        </SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl text-white max-w-4xl mx-auto leading-tight drop-shadow-lg">
          {title}
        </h1>
      </motion.div>
      
      {/* Background image + strong gradient overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover object-center"
          priority
        />
        {/* Multi-stop gradient for reliable text contrast on any photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/55 to-primary/30" />
      </div>
    </section>
  );
}
