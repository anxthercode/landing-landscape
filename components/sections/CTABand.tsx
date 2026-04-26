import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import CTAButton from '@/components/ui/CTAButton';

export default function CTABand() {
  return (
    <section className="relative overflow-hidden py-40 text-center px-6">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/project-3.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <SectionLabel className="mb-4 text-tertiary-fixed-dim">GET STARTED</SectionLabel>
        <h2 className="font-display text-5xl md:text-6xl text-surface mb-6">
          Ready to Design Your Legacy?
        </h2>
        <p className="mb-12 max-w-md font-body text-lg text-surface/70">
          We respond within one business day. Let&apos;s shape a garden that feels like it has always belonged there.
        </p>
        <CTAButton
          href="/contact"
          variant="accent"
          size="lg"
          className="px-12 py-6 text-xs tracking-[0.3em] uppercase shadow-glow-gold hover:shadow-[0_0_48px_rgba(184,138,68,0.4)] transition-shadow duration-500"
        >
          Book a Private Consultation
        </CTAButton>
      </div>
    </section>
  );
}
