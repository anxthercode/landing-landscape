import SectionLabel from '@/components/ui/SectionLabel';
import CTAButton from '@/components/ui/CTAButton';

export default function CTABand() {
  return (
    <section className="bg-primary py-24 text-center px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <SectionLabel className="mb-4 text-primary-fixed-dim">GET STARTED</SectionLabel>
        <h2 className="font-display text-5xl md:text-6xl text-surface mb-12">Ready to Design Your Legacy?</h2>
        <CTAButton variant="ghost" className="bg-tertiary-container text-on-tertiary-container border-none hover:bg-tertiary-container/90 px-12 py-6 text-xs tracking-[0.3em] uppercase transition-all">
          Book a Private Consultation
        </CTAButton>
      </div>
    </section>
  );
}
