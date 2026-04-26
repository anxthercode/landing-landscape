"use client";

import { motion } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';
import FAQAccordion from './FAQAccordion';

const objectionsFaqs = [
  { q: "How long does a design take?", a: "Conceptual design typically spans 4-6 weeks, followed by technical detailing and tendering which takes another 4 weeks." },
  { q: "Do you handle construction?", a: "While we are architects, we work with a vetted network of boutique contractors whom we manage directly to ensure design integrity." },
  { q: "Can you work with existing features?", a: "Absolutely. We often integrate mature trees or heritage structures, treating them as architectural anchors for the new vision." },
  { q: "What about sustainable water usage?", a: "Every Greenframe garden includes rainwater harvesting and climate-resilient planting as standard." },
  { q: "Are you available internationally?", a: "Yes, we specialize in European projects, particularly in the Mediterranean and Northern European regions." }
];

export default function ObjectionsBlock() {
  return (
    <section className="py-32 px-6 bg-surface-bright">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <motion.div 
          className="sticky top-40 h-fit"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>COMMON QUESTIONS</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-6 mb-8 leading-tight">Questions? We&apos;ve Got Answers</h2>
          <div className="p-8 bg-surface-container-lowest rounded-2xl italic font-display text-xl text-primary border border-outline-variant/20 relative shadow-sm">
            <span className="absolute text-6xl text-tertiary-container/20 top-4 left-4 pointer-events-none">&ldquo;</span>
            <p className="relative z-10 leading-relaxed">
              We believe a successful residential project begins with absolute clarity — on timeline, on budget, and on the structural reality of the site.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 p-8 shadow-xl">
            <FAQAccordion faqs={objectionsFaqs} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
