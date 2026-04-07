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

      <section className="bg-surface px-6 py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-24 md:grid-cols-2">
          <div>
            <h3 className="mb-10 font-display text-4xl text-primary">Inquire About Your Project</h3>
            <ContactForm />
          </div>
          <div>
            <h3 className="mb-10 font-display text-4xl text-primary">Frequently Asked</h3>
            <FAQAccordion />
          </div>
        </div>
      </section>
    </>
  );
}
