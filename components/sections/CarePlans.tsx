import SectionLabel from '@/components/ui/SectionLabel';
import CTAButton from '@/components/ui/CTAButton';
import { Check } from 'lucide-react';

export default function CarePlans() {
  return (
    <section className="py-32 px-6 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <SectionLabel>GARDEN CARE</SectionLabel>
          <h2 className="font-display text-5xl text-primary mt-4">Maintenance Subscriptions</h2>
          <p className="mt-4 max-w-lg mx-auto text-on-surface-variant text-lg leading-relaxed">
            Ongoing horticultural care to ensure your garden matures exactly as designed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Basic */}
          <div className="bg-surface p-12 rounded-2xl flex flex-col shadow-card border border-outline-variant/10 transition-shadow duration-500 hover:shadow-card-hover">
            <h4 className="font-label uppercase tracking-widest text-xs text-tertiary-container mb-8">Basic Maintenance</h4>
            <p className="font-display text-4xl mb-2 text-primary">€450<span className="text-sm font-body font-normal text-on-surface-variant">/mo</span></p>
            <p className="text-sm text-on-surface-variant mb-8">Essential seasonal upkeep</p>
            <ul className="space-y-4 mb-12 flex-grow">
              <li className="flex items-center gap-3 text-sm text-on-surface-variant"><Check className="text-tertiary-container w-5 h-5 flex-shrink-0" /> Monthly pruning & weeding</li>
              <li className="flex items-center gap-3 text-sm text-on-surface-variant"><Check className="text-tertiary-container w-5 h-5 flex-shrink-0" /> Seasonal irrigation check</li>
              <li className="flex items-center gap-3 text-sm text-on-surface-variant"><Check className="text-tertiary-container w-5 h-5 flex-shrink-0" /> Basic nutrient management</li>
            </ul>
            <CTAButton href="/contact" variant="ghost" className="w-full justify-center">Enquire</CTAButton>
          </div>

          {/* Standard — featured */}
          <div className="bg-primary-container p-12 rounded-2xl flex flex-col shadow-elevated relative z-10 text-surface ring-2 ring-tertiary-container/30">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-tertiary-container px-6 py-2 rounded-full shadow-glow-gold">
              <span className="font-label text-[10px] uppercase tracking-widest text-on-tertiary-container font-bold">Most Popular</span>
            </div>
            <h4 className="font-label uppercase tracking-widest text-xs text-tertiary-fixed mb-8">Full Curation</h4>
            <p className="font-display text-4xl mb-2 text-surface">€950<span className="text-sm font-body font-normal text-surface/60">/mo</span></p>
            <p className="text-sm text-surface/60 mb-8">Comprehensive specialist care</p>
            <ul className="space-y-4 mb-12 flex-grow">
              <li className="flex items-center gap-3 text-sm text-surface/80"><Check className="text-tertiary-fixed w-5 h-5 flex-shrink-0" /> Bi-weekly specialist visits</li>
              <li className="flex items-center gap-3 text-sm text-surface/80"><Check className="text-tertiary-fixed w-5 h-5 flex-shrink-0" /> Soil & moisture monitoring</li>
              <li className="flex items-center gap-3 text-sm text-surface/80"><Check className="text-tertiary-fixed w-5 h-5 flex-shrink-0" /> Seasonal planting refreshes</li>
              <li className="flex items-center gap-3 text-sm text-surface/80"><Check className="text-tertiary-fixed w-5 h-5 flex-shrink-0" /> Lighting system care</li>
            </ul>
            <CTAButton href="/contact" variant="accent" className="w-full justify-center">Get Started</CTAButton>
          </div>

          {/* Premium */}
          <div className="bg-surface p-12 rounded-2xl flex flex-col shadow-card border border-outline-variant/10 transition-shadow duration-500 hover:shadow-card-hover">
            <h4 className="font-label uppercase tracking-widest text-xs text-tertiary-container mb-8">Estate Management</h4>
            <p className="font-display text-4xl mb-2 text-primary">€1,800<span className="text-sm font-body font-normal text-on-surface-variant">/mo</span></p>
            <p className="text-sm text-on-surface-variant mb-8">White-glove estate service</p>
            <ul className="space-y-4 mb-12 flex-grow">
              <li className="flex items-center gap-3 text-sm text-on-surface-variant"><Check className="text-tertiary-container w-5 h-5 flex-shrink-0" /> Weekly horticultural service</li>
              <li className="flex items-center gap-3 text-sm text-on-surface-variant"><Check className="text-tertiary-container w-5 h-5 flex-shrink-0" /> 24/7 dedicated account manager</li>
              <li className="flex items-center gap-3 text-sm text-on-surface-variant"><Check className="text-tertiary-container w-5 h-5 flex-shrink-0" /> Specialist arboricultural care</li>
              <li className="flex items-center gap-3 text-sm text-on-surface-variant"><Check className="text-tertiary-container w-5 h-5 flex-shrink-0" /> Custom seasonal decoration</li>
            </ul>
            <CTAButton href="/contact" variant="primary" className="w-full justify-center">Enquire</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
