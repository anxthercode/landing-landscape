import InnerPageBanner from '@/components/ui/InnerPageBanner';
import ServicesPreview from '@/components/sections/ServicesPreview';
import ProcessSteps from '@/components/sections/ProcessSteps';
import FAQAccordion from '@/components/sections/FAQAccordion';
import CTABand from '@/components/sections/CTABand';
import CarePlans from '@/components/sections/CarePlans';
import SectionLabel from '@/components/ui/SectionLabel';
import { Check } from 'lucide-react';

export const metadata = {
  title: 'Our Services | Greenframe',
  description: 'Bespoke landscape architecture and horticultural services.',
};

export default function ServicesPage() {
  const allFaqs = [
    // Service-specific
    { q: "How do you handle local climate challenges?", a: "We embrace local environmental nuances by selecting indigenous flora and employing drought-tolerant design principles native to your specific region." },
    { q: "Do you offer ongoing care after installation?", a: "Yes, our dedicated estate management team offers bespoke subscriptions, ensuring the garden matures exactly as conceptualized." },
    { q: "Can we incorporate mature trees?", a: "Absolutely. We are highly proficient in crane operations and rootball stabilization to import and plant grand historical specimens." },
    { q: "Are your hardscaping materials sustainable?", a: "We prioritize European-quarried stone, reclaimed heritage brickwork, and ethically sourced timber to minimize our carbon footprint." },
    // Common questions (from ObjectionsBlock)
    { q: "How long does a design take?", a: "Conceptual design typically spans 4-6 weeks, followed by technical detailing and tendering which takes another 4 weeks." },
    { q: "Do you handle construction?", a: "While we are architects, we work with a vetted network of boutique contractors whom we manage directly to ensure design integrity." },
    { q: "Can you work with existing features?", a: "Absolutely. We often integrate mature trees or heritage structures, treating them as architectural anchors for the new vision." },
    { q: "What about sustainable water usage?", a: "Every Greenframe garden includes rainwater harvesting and climate-resilient planting as standard." },
    { q: "How are permits and planning managed?", a: "Our studio liaises directly with local councils, submitting all necessary architectural drawings, ecological surveys, and planning applications on your behalf." },
    { q: "Do you design outdoor kitchens or pools?", a: "Yes, we holistically integrate bespoke culinary spaces, natural swimming ponds, and heated architectural pools as seamless extensions of the landscape." },
  ];

  return (
    <main>
      <InnerPageBanner 
        label="Our Services" 
        title="Crafted for Every Outdoor Vision" 
        imageSrc="/images/service-planting.jpg" 
      />
      
      <section className="py-24 px-6 bg-surface text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-display text-2xl leading-relaxed text-primary">
            We operate at the intersection of rigorous architecture and organic volatility. Every service we offer is designed to elevate your property from mere land into a curated, living masterpiece.
          </p>
        </div>
      </section>

      <ServicesPreview />

      <ProcessSteps />

      {/* Investment — condensed */}
      <section className="py-32 px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <SectionLabel className="block text-center mb-6">INVESTMENT</SectionLabel>
          <h2 className="font-display text-5xl text-primary text-center mb-12">How We Price Our Work</h2>
          
          <p className="text-on-surface-variant text-lg leading-relaxed font-body text-center mb-12">
            True luxury is found in transparency. Our pricing is structured in two clear phases: a flat design fee based on acreage and complexity, followed by an itemized implementation budget — no hidden premiums.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <Check className="text-tertiary-container w-5 h-5 mt-1 flex-shrink-0" />
              <span className="text-on-surface-variant text-base">Historical cost data from analogous estates during consultation</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-tertiary-container w-5 h-5 mt-1 flex-shrink-0" />
              <span className="text-on-surface-variant text-base">Precise quotes from trusted artisan masons and specialist nurseries</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-tertiary-container w-5 h-5 mt-1 flex-shrink-0" />
              <span className="text-on-surface-variant text-base">Every element itemized — from pergolas to irrigation</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-tertiary-container w-5 h-5 mt-1 flex-shrink-0" />
              <span className="text-on-surface-variant text-base">Money-back guarantee on the design phase</span>
            </div>
          </div>
        </div>
      </section>

      <CarePlans />

      <section className="py-32 px-6 bg-surface-container-low text-primary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
             <SectionLabel>COMMON QUESTIONS</SectionLabel>
             <h2 className="font-display text-5xl mt-6">Frequently Asked</h2>
          </div>
          <FAQAccordion faqs={allFaqs} />
        </div>
      </section>

      <CTABand />
    </main>
  );
}
