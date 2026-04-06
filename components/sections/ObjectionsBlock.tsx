import SectionLabel from '@/components/ui/SectionLabel';

export default function ObjectionsBlock() {
  return (
    <section className="py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="sticky top-40 h-fit">
          <SectionLabel>COMMON QUESTIONS</SectionLabel>
          <h2 className="font-display text-5xl text-primary mt-6 mb-8">Transparency in Every Seed</h2>
          <div className="p-8 bg-surface-container-low rounded-xl italic font-display text-lg text-primary border-l-4 border-tertiary-container">
            "The best time to plant a tree was twenty years ago. The second best time is today."
          </div>
        </div>
        
        <div className="space-y-12">
          <div>
            <h4 className="font-headline font-bold text-xl text-primary mb-4">How long does a design take?</h4>
            <p className="text-on-surface-variant leading-relaxed">Conceptual design typically spans 4-6 weeks, followed by technical detailing and tendering which takes another 4 weeks.</p>
          </div>
          <div>
            <h4 className="font-headline font-bold text-xl text-primary mb-4">Do you handle construction?</h4>
            <p className="text-on-surface-variant leading-relaxed">While we are architects, we work with a vetted network of boutique contractors whom we manage directly to ensure design integrity.</p>
          </div>
          <div>
            <h4 className="font-headline font-bold text-xl text-primary mb-4">Can you work with existing features?</h4>
            <p className="text-on-surface-variant leading-relaxed">Absolutely. We often integrate mature trees or heritage structures, treating them as architectural anchors for the new vision.</p>
          </div>
          <div>
            <h4 className="font-headline font-bold text-xl text-primary mb-4">What about sustainable water usage?</h4>
            <p className="text-on-surface-variant leading-relaxed">Every Studio Aethel garden includes rainwater harvesting and climate-resilient planting as standard.</p>
          </div>
          <div>
            <h4 className="font-headline font-bold text-xl text-primary mb-4">Are you available internationally?</h4>
            <p className="text-on-surface-variant leading-relaxed">Yes, we specialize in European projects, particularly in the Mediterranean and Northern European regions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
