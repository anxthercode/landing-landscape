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
import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Greenframe — Landscape Design, Build & Care',
  description:
    'European residential landscape studio. We design and deliver gardens with structure, atmosphere, and long-term ease — from first concept through final planting.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ProblemSection />
      <ServicesPreview />
      <FeaturedProjects />
      <BeforeAfter />
      <ProcessSteps />
      <Testimonials />
      <ObjectionsBlock />
      <ContactSection />
      <CTABand />
    </>
  );
}
