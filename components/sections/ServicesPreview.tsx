"use client";

import SectionLabel from '@/components/ui/SectionLabel';

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
    <article className="group relative min-h-[380px] overflow-visible rounded-[28px] border border-surface-container-high bg-surface-container-low px-8 pb-8 pt-[92px] shadow-[0_12px_32px_rgba(5,36,26,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-tertiary-container/35 hover:shadow-[0_20px_48px_rgba(5,36,26,0.08)]">
      <div className="absolute left-7 top-[-24px] z-20 flex h-[84px] w-[84px] items-center justify-center rounded-[24px] border border-primary/8 bg-surface shadow-[0_10px_24px_rgba(5,36,26,0.08)] transition-transform duration-300 group-hover:-translate-y-1">
        <div className="flex h-[58px] w-[58px] flex-col items-center justify-center rounded-[18px] border border-surface-container-high bg-surface-container-lowest">
          <span className="font-label text-[10px] font-medium uppercase tracking-[0.24em] text-mid-green/70">{code}</span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-6 top-6 h-[148px] overflow-hidden rounded-[22px] border border-outline-variant/25 bg-[radial-gradient(circle_at_top_left,rgba(184,151,90,0.10),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.80),rgba(246,243,238,0.92))] opacity-90 transition-all duration-300 group-hover:border-tertiary-container/25 group-hover:bg-[radial-gradient(circle_at_top_left,rgba(184,151,90,0.14),transparent_46%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(246,243,238,0.98))]">
        <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.2em] text-mid-green/45">
          <span>Scene</span>
          <span>Reserved</span>
        </div>
        <div className="absolute inset-x-5 bottom-5 h-px bg-gradient-to-r from-transparent via-tertiary-container/35 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary/[0.07] to-transparent transition-all duration-300 group-hover:from-primary/[0.1]" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end">
        <div className="mb-6 max-w-[18rem]">
          <h3 className="font-headline text-[2rem] font-semibold leading-[1.02] tracking-[-0.03em] text-primary">
            {title}
          </h3>
          <p className="mt-4 max-w-[28ch] font-body text-[1.05rem] leading-8 text-on-surface-variant">
            {desc}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-surface-container-high pt-5">
          <span className="font-label text-[11px] uppercase tracking-[0.24em] text-tertiary-container">Interactive service card</span>
          <span className="font-label text-[11px] uppercase tracking-[0.24em] text-mid-green/60 transition-transform duration-300 group-hover:translate-x-1">Future SVG</span>
        </div>
      </div>
    </article>
  );
}

export default function ServicesPreview() {
  return (
    <section className="overflow-hidden bg-surface px-6 py-32">
      <div className="mx-auto max-w-[1460px] border-t border-surface-container-high pt-16">
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel>OUR SERVICES</SectionLabel>
            <h2 className="mt-4 font-display text-5xl text-primary md:text-6xl">
              A Complete Outdoor <br /> Service Framework
            </h2>
          </div>
          <p className="mb-2 max-w-[30rem] font-body text-[1.05rem] leading-8 text-on-surface-variant">
            Six core services, rebuilt as premium interactive cards. The composition, spacing, badge placement, and reserved scene area are now ready for custom SVG animation in the next pass.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-11 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
