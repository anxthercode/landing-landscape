"use client";

import Link from 'next/link';
import { motion } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const services = [
  {
    code: 'LG',
    title: 'Landscaping',
    desc: 'Garden masterplanning, planting composition, and spatial design that gives the whole site structure and calm.',
  },
  {
    code: 'HS',
    title: 'Hardscaping',
    desc: 'Paving, steps, retaining walls, and crafted material detailing that form the architectural backbone of the garden.',
  },
  {
    code: 'OL',
    title: 'Outdoor Lighting',
    desc: 'Layered lighting schemes that add atmosphere, improve wayfinding, and extend the garden into the evening.',
  },
  {
    code: 'SC',
    title: 'Seasonal Care Plans',
    desc: 'Ongoing maintenance programmes designed to keep planting healthy, controlled, and visually settled across the year.',
  },
  {
    code: 'WF',
    title: 'Water Features & Pools',
    desc: 'Reflective water, pools, and still-surface features that introduce calm, movement, and a premium focal point.',
  },
  {
    code: 'RT',
    title: 'Roof Gardens & Terraces',
    desc: 'Urban rooftop and terrace spaces designed for exposure, drainage, and refined outdoor living above ground level.',
  },
] as const;

function ServiceCard({ code, title, desc }: (typeof services)[number]) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-surface-container-high bg-surface-container-low p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-tertiary-container/30 hover:shadow-xl lg:p-10">
      <div>
        <span className="mb-6 inline-flex items-center justify-center rounded-lg border border-primary/10 bg-surface px-3 py-1 font-label text-[10px] font-bold uppercase tracking-widest text-primary">
          {code}
        </span>
        <h3 className="mb-4 font-display text-3xl text-primary">{title}</h3>
        <p className="mb-8 font-body text-base leading-relaxed text-on-surface-variant">
          {desc}
        </p>
      </div>

      <div className="mt-auto border-t border-surface-container-high pt-6 border-dashed">
        <Link
          href="/services"
          className="inline-flex items-center gap-3 font-label text-[11px] uppercase tracking-[0.2em] text-tertiary-container transition-colors duration-300 hover:text-primary"
        >
          Learn more
          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default function ServicesPreview() {
  return (
    <section className="bg-surface px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] border-t border-surface-container-high pt-16 lg:pt-24">
        <motion.div
          className="mb-16 flex flex-col justify-between gap-8 md:mb-24 md:flex-row md:items-end"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
        >
          <div className="max-w-2xl">
            <SectionLabel>OUR SERVICES</SectionLabel>
            <h2 className="mt-4 font-display text-5xl tracking-tight text-primary md:text-6xl lg:text-7xl">
              A Complete Outdoor Service Framework
            </h2>
          </div>
          <p className="max-w-md font-body text-lg leading-relaxed text-on-surface-variant">
            From initial concept to ongoing care — six core disciplines that shape residential gardens into composed, lasting outdoor spaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
