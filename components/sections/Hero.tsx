"use client";

import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';
import CTAButton from '@/components/ui/CTAButton';
import WaveTransition from '@/components/ui/WaveTransition';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  
  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: shouldReduceMotion ? 0 : i * 0.06,
        duration: 0.8,
        ease: 'easeOut' as const,
      },
    }),
  };

  return (
    <section className="relative min-h-[870px] flex flex-col md:flex-row overflow-hidden bg-surface">
      <div className="absolute inset-0 pointer-events-none grain-texture z-10" />
      <div className="w-full md:w-[55%] px-6 md:pl-24 md:pr-12 py-20 flex flex-col justify-center items-start z-20">
        <SectionLabel className="mb-6">European Landscape Excellence</SectionLabel>
        
        <h1 className="font-display text-[clamp(52px,6vw,88px)] text-primary leading-[1.05] tracking-tight mb-8">
          <motion.span variants={wordVariants} custom={0} initial="hidden" animate="visible" className="inline-block mr-3">Living</motion.span>
          <motion.span variants={wordVariants} custom={1} initial="hidden" animate="visible" className="inline-block mr-3 drop-shadow-sm">Art</motion.span>
          <br />
          <motion.span variants={wordVariants} custom={2} initial="hidden" animate="visible" className="inline-block mr-3 italic text-tertiary-container drop-shadow-sm">Outside</motion.span>
          <motion.span variants={wordVariants} custom={3} initial="hidden" animate="visible" className="inline-block mr-3 italic text-tertiary-container drop-shadow-sm">Your</motion.span>
          <br />
          <motion.span variants={wordVariants} custom={4} initial="hidden" animate="visible" className="inline-block italic text-tertiary-container drop-shadow-sm">Window</motion.span>
        </h1>
        
        <div className="mb-8 relative h-3 w-[180px]">
          <svg className="absolute inset-0 w-full h-full text-tertiary-container opacity-60" fill="none" viewBox="0 0 180 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 6C15 6 15 1 29 1C43 1 43 11 57 11C71 11 71 1 85 1C99 1 99 11 113 11C127 11 127 1 141 1C155 1 155 11 169 11C183 11 183 1 197 1" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
          </svg>
        </div>
        
        <p className="font-body text-lg text-on-surface-variant max-w-lg mb-12 leading-relaxed">
          We craft bespoke outdoor sanctuaries that bridge the gap between contemporary architecture and the wild elegance of nature. Based in London, serving the Continent.
        </p>
        
        <div className="flex flex-wrap gap-6 items-center">
          <CTAButton variant="primary" size="lg">View Our Gardens</CTAButton>
          <CTAButton variant="ghost" className="border-b-2 border-transparent hover:border-tertiary-container border-x-0 border-t-0 rounded-none px-0 tracking-[0.2rem] uppercase text-xs text-primary font-label h-auto w-auto hover:bg-transparent shadow-none hover:opacity-100 active:scale-100 py-2">Our Design Philosophy</CTAButton>
        </div>
      </div>
      
      <div className="w-full md:w-[45%] h-[500px] md:h-auto relative z-10">
        <Image 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA81s8hSEwZdlNn4RTp3MfPeSzHoNvkKAxRFqLjlD1LOeAgvEcX7xHD4CfmMXcVKagAOcb-IxENt6FmMHAfZoYKG6SDwKAsE0RCvAoozTjt14xHLl0Zh-N7g1SEHbkOZ0_FwcFfHwri97Cpn32pFKn8gMi4nIFkR4-AAseypvN-GO6D8d_5XiXva8hVN9zwfdtG2z4j77C_pb0v7pum3qUZ40gIucjdR7u21fJZLFyuV6JNHZ4BWtYC9dVk8lbovED9mTvfS0W3ZS4" 
          alt="Luxury modern house with reflective pool" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary-container/25 mix-blend-multiply"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none">
        <WaveTransition fill="#fcf9f4" />
      </div>
    </section>
  );
}
