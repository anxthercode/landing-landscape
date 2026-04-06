"use client";

import Hero from '@/components/sections/Hero';
import ProblemSection from '@/components/sections/ProblemSection';
import ServicesPreview from '@/components/sections/ServicesPreview';
import StatsStrip from '@/components/sections/StatsStrip';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import BeforeAfter from '@/components/sections/BeforeAfter';
import ProcessSteps from '@/components/sections/ProcessSteps';
import Testimonials from '@/components/sections/Testimonials';
import CarePlans from '@/components/sections/CarePlans';
import ObjectionsBlock from '@/components/sections/ObjectionsBlock';
import CTABand from '@/components/sections/CTABand';
import ContactForm from '@/components/sections/ContactForm';
import FAQAccordion from '@/components/sections/FAQAccordion';
import { motion, useReducedMotion } from 'motion/react';
import { ReactNode } from 'react';

function RevealSection({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <>{children}</>;
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <RevealSection><Hero /></RevealSection>
      <RevealSection><ProblemSection /></RevealSection>
      <RevealSection><ServicesPreview /></RevealSection>
      <RevealSection><StatsStrip /></RevealSection>
      <RevealSection><FeaturedProjects /></RevealSection>
      <RevealSection><BeforeAfter /></RevealSection>
      <RevealSection><ProcessSteps /></RevealSection>
      <RevealSection><Testimonials /></RevealSection>
      <RevealSection><CarePlans /></RevealSection>
      <RevealSection><ObjectionsBlock /></RevealSection>
      <RevealSection><CTABand /></RevealSection>
      
      {/* Contact & FAQ Sections Grouped Together */ }
      <RevealSection>
        <section className="py-32 px-6 bg-surface">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
             <div>
               <h3 className="font-display text-4xl text-primary mb-10">Inquire About Your Project</h3>
               <ContactForm />
             </div>
             <div>
               <h3 className="font-display text-4xl text-primary mb-10">Frequently Asked</h3>
               <FAQAccordion />
             </div>
          </div>
        </section>
      </RevealSection>
    </>
  );
}
