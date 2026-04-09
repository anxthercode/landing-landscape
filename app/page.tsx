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

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServicesPreview />
      <StatsStrip />
      <FeaturedProjects />
      <BeforeAfter />
      <ProcessSteps />
      <Testimonials />
      <CarePlans />
      <ObjectionsBlock />
      <CTABand />

      {/* Contact form — FAQ removed here, lives on /contact page only */}
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
