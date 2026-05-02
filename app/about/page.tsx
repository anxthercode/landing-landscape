import Image from 'next/image';
import CTABand from '@/components/sections/CTABand';
import ProblemSection from '@/components/sections/ProblemSection';
import StatsStrip from '@/components/sections/StatsStrip';
import Testimonials from '@/components/sections/Testimonials';
import CTAButton from '@/components/ui/CTAButton';
import InnerPageBanner from '@/components/ui/InnerPageBanner';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata = {
  title: 'About | Greenframe',
  description: 'Our approach to residential landscape design, build coordination, and long-term care.',
};

const principles = [
  {
    title: 'Design with structure',
    description:
      'We begin by clarifying circulation, levels, and the relationship between architecture and garden before layering in planting and detail.',
  },
  {
    title: 'Build with restraint',
    description:
      'Materials, joins, and edges matter. We aim for work that feels resolved and durable rather than overworked.',
  },
  {
    title: 'Care for the long term',
    description:
      'A successful garden must mature well after handover, not just photograph well on day one.',
  },
];

export default function AboutPage() {
  return (
    <main>
      <InnerPageBanner
        label="About the Studio"
        title="Our philosophy"
        imageSrc="/images/about-banner.jpg"
      />

      <section className="overflow-hidden bg-surface px-6 py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-24 lg:flex-row">
          <div className="relative min-h-[600px] w-full lg:w-1/2">
            <div className="absolute left-0 top-0 z-10 aspect-[3/4] w-3/4 overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/images/project-3.jpg"
                alt="Contemporary residential hardscape and planted edges"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 30vw, 75vw"
              />
            </div>
            <div className="absolute bottom-0 right-0 z-20 aspect-square w-2/3 overflow-hidden rounded-xl border-8 border-surface shadow-2xl">
              <Image
                src="/images/service-terrace.jpg"
                alt="Covered terrace with shaped planting and seating"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 24vw, 66vw"
              />
            </div>
          </div>

          <div className="w-full space-y-8 lg:w-1/2">
            <SectionLabel>OUR APPROACH</SectionLabel>
            <h2 className="font-display text-4xl leading-tight text-primary lg:text-5xl">
              Designed to feel lived-in, calm, and lasting.
            </h2>
            <div className="space-y-6 font-body text-lg leading-relaxed text-on-surface-variant">
              <p>
                Greenframe focuses on residential landscapes where structure, planting, and use are considered as one joined-up system. We work on gardens that need stronger direction — clearer movement, more useful hardscape, calmer planting, and a more coherent relationship to the home.
              </p>
              <p>
                Our role often sits between design intent and delivery: shaping the concept, refining key details, and helping coordinate the build so the finished space feels considered rather than pieced together.
              </p>
            </div>
            
            <figure className="mt-8 border-l-2 border-tertiary-container pl-6 italic text-primary">
              <blockquote className="font-display text-2xl leading-relaxed">
                "Our best work happens when a garden stops looking like a project and starts feeling like it has always belonged there."
              </blockquote>
              <figcaption className="mt-4 font-headline text-sm font-bold uppercase tracking-widest text-primary-fixed-dim">
                — Founder, Greenframe
              </figcaption>
            </figure>

            <div className="pt-8">
              <CTAButton href="/contact" size="lg">
                Start your project
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-surface-container-high py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
           <h3 className="font-headline text-sm font-bold uppercase tracking-widest text-tertiary-container mb-12">Where We Work</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-display text-2xl text-primary/80">
              <div>Central London</div>
              <div>Surrey & Sussex</div>
              <div>The Cotswolds</div>
              <div>Northern France</div>
           </div>
        </div>
      </section>

      <ProblemSection />

      <section className="bg-surface-container-low px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <SectionLabel>WHAT GUIDES THE WORK</SectionLabel>
            <h2 className="mt-6 font-display text-5xl text-primary">Principles, not performance</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title} className="rounded-xl border border-outline-variant/20 bg-surface p-10">
                <h3 className="mb-4 font-display text-3xl text-primary">{item.title}</h3>
                <p className="leading-relaxed text-on-surface-variant">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsStrip />
      <Testimonials />
      <CTABand />
    </main>
  );
}
