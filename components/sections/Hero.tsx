"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';
import CTAButton from '@/components/ui/CTAButton';
import WaveTransition from '@/components/ui/WaveTransition';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: shouldReduceMotion ? 0 : index * 0.06,
        duration: 0.8,
        ease: 'easeOut' as const,
      },
    }),
  };

  return (
    <section ref={heroRef} className="relative flex min-h-[870px] flex-col overflow-hidden bg-surface md:flex-row">
      <div className="pointer-events-none absolute inset-0 z-10 grain-texture" />
      <div className="z-20 flex w-full flex-col items-start justify-center px-6 py-20 md:w-[55%] md:pl-24 md:pr-12">
        <SectionLabel className="mb-6">Landscape design, build, and care</SectionLabel>

        <h1 className="mb-8 font-display text-[clamp(52px,6vw,88px)] leading-[1.05] tracking-tight text-primary">
          <motion.span variants={wordVariants} custom={0} initial="hidden" animate="visible" className="mr-3 inline-block">
            Living
          </motion.span>
          <motion.span variants={wordVariants} custom={1} initial="hidden" animate="visible" className="mr-3 inline-block drop-shadow-sm">
            Art
          </motion.span>
          <br />
          <motion.span variants={wordVariants} custom={2} initial="hidden" animate="visible" className="mr-3 inline-block italic text-tertiary-container drop-shadow-sm">
            Outside
          </motion.span>
          <motion.span variants={wordVariants} custom={3} initial="hidden" animate="visible" className="mr-3 inline-block italic text-tertiary-container drop-shadow-sm">
            Your
          </motion.span>
          <br />
          <motion.span variants={wordVariants} custom={4} initial="hidden" animate="visible" className="inline-block italic text-tertiary-container drop-shadow-sm">
            Window
          </motion.span>
        </h1>

        <div className="relative mb-8 h-3 w-[180px]">
          <svg className="absolute inset-0 h-full w-full text-tertiary-container opacity-60" fill="none" viewBox="0 0 180 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 6C15 6 15 1 29 1C43 1 43 11 57 11C71 11 71 1 85 1C99 1 99 11 113 11C127 11 127 1 141 1C155 1 155 11 169 11C183 11 183 1 197 1" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>

        <p className="mb-12 max-w-lg font-body text-lg leading-relaxed text-on-surface-variant">
          We design and deliver residential landscapes with a stronger sense of structure, atmosphere, and long-term ease — from first concept through final planting.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <CTAButton href="/gardens" variant="primary" size="lg">
            View our gardens
          </CTAButton>
          <CTAButton
            href="/about"
            variant="ghost"
            className="h-auto w-auto rounded-none border-x-0 border-b-2 border-t-0 border-transparent px-0 py-2 text-xs uppercase tracking-[0.2rem] text-primary shadow-none hover:border-tertiary-container hover:bg-transparent hover:opacity-100 active:scale-100"
          >
            Our approach
          </CTAButton>
        </div>
      </div>

      <div className="relative z-10 h-[500px] w-full overflow-hidden md:h-auto md:w-[45%]">
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={shouldReduceMotion ? undefined : { y: imageY, scale: imageScale }}
        >
          <Image
            src="/images/hero.jpg"
            alt="Finished residential garden with layered lawn, hedging, and water feature"
            fill
            className="object-cover"
            priority
            sizes="(min-width: 768px) 45vw, 100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-primary-container/25 mix-blend-multiply" />
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 z-30 w-full">
        <WaveTransition fill="#fcf9f4" />
      </div>
    </section>
  );
}
