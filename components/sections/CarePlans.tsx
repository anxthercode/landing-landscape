import SectionLabel from '@/components/ui/SectionLabel';
import CTAButton from '@/components/ui/CTAButton';
import { Check } from 'lucide-react';

export default function CarePlans() {
  return (
    <section className="py-32 px-6 bg-surface-container-low">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <SectionLabel>GARDEN CARE</SectionLabel>
          <h2 className="font-display text-5xl text-primary mt-4">Maintenance Subscriptions</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Basic */}
          <div className="bg-surface p-12 rounded-xl flex flex-col shadow-sm border border-outline-variant/10">
            <h4 className="font-label uppercase tracking-widest text-xs text-primary mb-8">Basic Maintenance</h4>
            <p className="font-display text-4xl mb-6">€450<span className="text-sm font-body font-normal text-on-surface-variant">/mo</span></p>
            <ul className="space-y-4 mb-12 flex-grow">
              <li className="flex items-center gap-3 text-sm text-on-surface-variant"><Check className="text-tertiary-container w-5 h-5 flex-shrink-0" /> Monthly pruning & weeding</li>
              <li className="flex items-center gap-3 text-sm text-on-surface-variant"><Check className="text-tertiary-container w-5 h-5 flex-shrink-0" /> Seasonal irrigation check</li>
              <li className="flex items-center gap-3 text-sm text-on-surface-variant"><Check className="text-tertiary-container w-5 h-5 flex-shrink-0" /> Basic nutrient management</li>
            </ul>
            <CTAButton variant="ghost" className="w-full justify-center">Select Plan</CTAButton>
          </div>

          {/* Standard */}
          <div className="bg-primary-container p-12 rounded-xl flex flex-col shadow-2xl relative scale-[1.02] md:scale-105 z-10 text-surface">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-tertiary-container px-6 py-2 rounded-full">
              <span className="font-label text-[10px] uppercase tracking-widest text-on-tertiary-container font-bold">Most Popular</span>
            </div>
            <h4 className="font-label uppercase tracking-widest text-xs text-primary-fixed-dim mb-8">Full Curation</h4>
            <p className="font-display text-4xl mb-6">€950<span className="text-sm font-body font-normal text-primary-fixed-dim/80">/mo</span></p>
            <ul className="space-y-4 mb-12 flex-grow">
              <li className="flex items-center gap-3 text-sm text-surface/80"><Check className="text-tertiary-container w-5 h-5 flex-shrink-0" /> Bi-weekly specialist visits</li>
              <li className="flex items-center gap-3 text-sm text-surface/80"><Check className="text-tertiary-container w-5 h-5 flex-shrink-0" /> Soil & moisture monitoring</li>
              <li className="flex items-center gap-3 text-sm text-surface/80"><Check className="text-tertiary-container w-5 h-5 flex-shrink-0" /> Seasonal planting refreshes</li>
              <li className="flex items-center gap-3 text-sm text-surface/80"><Check className="text-tertiary-container w-5 h-5 flex-shrink-0" /> Lighting system care</li>
            </ul>
            <CTAButton variant="ghost" className="w-full justify-center bg-tertiary-container text-on-tertiary-container border-transparent hover:bg-tertiary-container/90">Select Plan</CTAButton>
          </div>

          {/* Premium */}
          <div className="bg-surface p-12 rounded-xl flex flex-col shadow-sm border border-outline-variant/10">
            <h4 className="font-label uppercase tracking-widest text-xs text-primary mb-8">Estate Management</h4>
            <p className="font-display text-4xl mb-6">€1,800<span className="text-sm font-body font-normal text-on-surface-variant">/mo</span></p>
            <ul className="space-y-4 mb-12 flex-grow">
              <li className="flex items-center gap-3 text-sm text-on-surface-variant"><Check className="text-tertiary-container w-5 h-5 flex-shrink-0" /> Weekly horticultural service</li>
              <li className="flex items-center gap-3 text-sm text-on-surface-variant"><Check className="text-tertiary-container w-5 h-5 flex-shrink-0" /> 24/7 dedicated account manager</li>
              <li className="flex items-center gap-3 text-sm text-on-surface-variant"><Check className="text-tertiary-container w-5 h-5 flex-shrink-0" /> Specialist arboricultural care</li>
              <li className="flex items-center gap-3 text-sm text-on-surface-variant"><Check className="text-tertiary-container w-5 h-5 flex-shrink-0" /> Custom seasonal decoration</li>
            </ul>
            <CTAButton variant="ghost" className="w-full justify-center">Select Plan</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
