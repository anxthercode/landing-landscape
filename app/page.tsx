import type { Metadata } from 'next';

import Hero from '@/components/sections/Hero';
import ServicesPreview from '@/components/sections/ServicesPreview';
import ProblemSection from '@/components/sections/ProblemSection';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import BeforeAfter from '@/components/sections/BeforeAfter';
import StatsStrip from '@/components/sections/StatsStrip';
import ProcessSteps from '@/components/sections/ProcessSteps';
import Testimonials from '@/components/sections/Testimonials';
import ObjectionsBlock from '@/components/sections/ObjectionsBlock';
import CTABand from '@/components/sections/CTABand';
import ContactForm from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Studio Aethel — Landscape Design, Build & Care',
  description:
    'European residential landscape studio. We design and deliver gardens with structure, atmosphere, and long-term ease — from first concept through final planting.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ProblemSection />
      <FeaturedProjects />
      <BeforeAfter />
      <StatsStrip />
      <ProcessSteps />
      <Testimonials />
      <ObjectionsBlock />
      <CTABand />

      {/* Contact form */}
      <section className="bg-surface px-6 py-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="font-display text-4xl text-primary md:text-5xl">
              Inquire About Your Project
            </h2>
            <p className="mx-auto mt-4 max-w-md text-on-surface-variant">
              Tell us about your site and vision — we respond within one business day.
            </p>
          </div>
          <div className="rounded-2xl border border-outline-variant/10 bg-surface-container-lowest p-10 shadow-2xl md:p-16">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
