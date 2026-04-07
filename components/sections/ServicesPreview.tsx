"use client";

import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import { Box, Cuboid, Droplet, HardHat, Leaf, Lightbulb } from 'lucide-react';

const majorServices = [
  {
    title: 'Landscape Design',
    img: '/images/project-1.jpg',
  },
  {
    title: 'Planting & Greenery',
    img: '/images/service-planting.jpg',
  },
  {
    title: 'Paving & Pathways',
    img: '/images/service-paving.jpg',
  },
];

const minorServices = [
  { icon: Droplet, title: 'Irrigation', desc: 'Smart water management systems tailored to your local climate.' },
  { icon: Lightbulb, title: 'Outdoor Lighting', desc: 'Atmospheric and functional illumination for nighttime elegance.' },
  { icon: Cuboid, title: 'Terraces', desc: 'Expert foundation and construction for multi-level land.' },
  { icon: Leaf, title: 'Seasonal Care', desc: 'Bespoke maintenance packages to keep growth vibrant.' },
  { icon: HardHat, title: 'Turnkey PM', desc: 'Complete oversight from initial concept through final installation.' },
  { icon: Box, title: '3D Visualisation', desc: 'Photorealistic modelling to preview your finished garden.' },
];

export default function ServicesPreview() {
  return (
    <section className="overflow-hidden bg-surface px-6 py-32">
      <div className="mx-auto max-w-screen-2xl border-t border-surface-container-high pt-16">
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel>WHAT WE DO</SectionLabel>
            <h2 className="mt-4 font-display text-5xl text-primary">
              Elevating Every <br /> Green Detail
            </h2>
          </div>
          <p className="mb-2 max-w-sm font-body text-on-surface-variant">
            From concept planning to final planting, we shape outdoor spaces that read clearly, feel settled, and work beautifully in everyday life.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {majorServices.map((service) => (
            <div key={service.title} className="group relative h-[600px] overflow-hidden rounded-xl">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-primary/40 transition-colors group-hover:bg-primary/50" />
              <div className="absolute bottom-0 left-0 w-full translate-y-4 p-12 text-center text-surface transition-transform duration-500 group-hover:translate-y-0">
                <h3 className="font-display text-3xl">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {minorServices.map((item) => (
            <div key={item.title} className="flex flex-col items-start rounded-xl bg-surface-container-low p-8 transition-transform duration-300 hover:-translate-y-1">
              <item.icon className="mb-6 h-8 w-8 text-tertiary-container" strokeWidth={1.5} />
              <h4 className="mb-2 font-headline text-lg font-semibold text-primary">{item.title}</h4>
              <p className="text-sm text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
