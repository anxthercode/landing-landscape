import InnerPageBanner from '@/components/ui/InnerPageBanner';
import CTABand from '@/components/sections/CTABand';
import StatsStrip from '@/components/sections/StatsStrip';
import Testimonials from '@/components/sections/Testimonials';
import SectionLabel from '@/components/ui/SectionLabel';
import QuoteIcon from '@/components/ui/QuoteIcon';
import CTAButton from '@/components/ui/CTAButton';
import Image from 'next/image';

export const metadata = {
  title: 'Who We Are | Studio Aethel',
  description: 'Our philosophy and history as elite landscape architects.',
};

export default function AboutPage() {
  return (
    <main>
      <InnerPageBanner 
        label="Who We Are" 
        title="A Studio Built on Obsession" 
        imageSrc="/images/about-banner.jpg" 
      />

      <section className="py-32 px-6 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          
          {/* Left: Overlapping photos */}
          <div className="w-full lg:w-1/2 relative min-h-[600px]">
            {/* TODO: replace with real images */}
            <div className="absolute top-0 left-0 w-3/4 aspect-[3/4] rounded-xl overflow-hidden shadow-2xl z-10">
              <Image src="/images/about-founder.jpg" alt="Founder inspecting foliage" fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-2/3 aspect-square rounded-xl overflow-hidden shadow-2xl z-20 border-8 border-surface">
              <Image src="/images/about-sketch.jpg" alt="Architectural drafting sketches" fill className="object-cover" />
            </div>
          </div>

          {/* Right: Story */}
          <div className="w-full lg:w-1/2 space-y-8">
            <SectionLabel>OUR STORY</SectionLabel>
            <h2 className="font-display text-4xl lg:text-5xl text-primary leading-tight">
              Elevating the ground beneath our feet.
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg font-body">
              <p>
                Studio Aethel was forged from a singular belief: that the space surrounding your home should command the same architectural reverence as the interior. For over twelve years, our London-based atelier has pushed the boundaries of horticulture and masonry, transforming static lawns into dynamic, living galleries across the European continent.
              </p>
              <p>
                We do not merely garden; we engineer micro-environments. Our team comprises master horticulturalists, structural engineers, and lighting artisans who collaborate on every site. By treating nature as an architectural medium, we guarantee spaces that provoke intense emotional resonance—spaces that ask to be inhabited, felt, and remembered.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-32 px-6 bg-surface-container-low text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center relative">
          <QuoteIcon className="absolute top-[-40px] left-1/2 -translate-x-1/2 opacity-10 w-24 h-24 text-tertiary-container" />
          <p className="font-display text-4xl lg:text-5xl text-primary italic leading-snug relative z-10 mb-8">
            "We view the soil not as dirt, but as an expansive canvas. Our legacy isn't built in brick alone, but in the oxygen our gardens exhale fifty years from now."
          </p>
          <div className="mb-12">
            <h4 className="font-headline font-bold text-lg text-primary uppercase tracking-widest">Alistair Sterling</h4>
            <p className="font-label text-xs uppercase tracking-widest text-primary-fixed-dim mt-2">Principal Director & Founder</p>
          </div>
          <CTAButton href="/contact" size="lg">Commission Our Team</CTAButton>
        </div>
      </section>

      <StatsStrip />
      <Testimonials />
      <CTABand />
    </main>
  );
}
