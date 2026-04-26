"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const services = [
  {
    title: 'Landscaping',
    desc: 'Garden masterplanning, planting composition, and spatial design that gives the whole site structure and calm.',
    image: '/images/service-planting.jpg',
  },
  {
    title: 'Hardscaping',
    desc: 'Paving, steps, retaining walls, and crafted material detailing that form the architectural backbone of the garden.',
    image: '/images/service-paving.jpg',
  },
  {
    title: 'Outdoor Lighting',
    desc: 'Layered lighting schemes that add atmosphere, improve wayfinding, and extend the garden into the evening.',
    image: '/images/service-terrace.jpg',
  },
] as const;

function ServiceCard({ title, desc, image, index }: { title: string; desc: string; image: string; index: number }) {
  return (
    <motion.article
      className="group relative flex flex-col overflow-hidden rounded-lg bg-surface-container-low shadow-card transition-shadow duration-500 hover:shadow-card-hover"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: EASE_OUT_EXPO }}
    >
      {/* Image container — 60% height */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        {/* Hover overlay with extended description */}
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 via-primary/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <p className="p-6 font-body text-sm leading-relaxed text-white/90">
            {desc}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-8">
        <div>
          <h3 className="mb-3 font-display text-3xl text-primary">{title}</h3>
          <p className="mb-6 font-body text-base leading-relaxed text-on-surface-variant line-clamp-2">
            {desc}
          </p>
        </div>

        <Link
          href="/services"
          className="inline-flex items-center gap-3 font-label text-[11px] uppercase tracking-[0.2em] text-tertiary-container transition-colors duration-300 hover:text-primary"
        >
          Learn more
          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
        </Link>
      </div>
    </motion.article>
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
          <div className="flex flex-col items-start gap-4 md:items-end">
            <p className="max-w-md font-body text-lg leading-relaxed text-on-surface-variant">
              From initial concept to ongoing care — core disciplines that shape residential gardens into composed, lasting outdoor spaces.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-[0.2em] text-tertiary-container transition-colors hover:text-primary"
            >
              View All 6 Services
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
