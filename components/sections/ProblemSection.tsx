import SectionLabel from '@/components/ui/SectionLabel';

export default function ProblemSection() {
  return (
    <section className="bg-surface-container py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <SectionLabel className="mb-4">The Problem</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-4 max-w-2xl mx-auto">
            Why Most Gardens Fail to Flourish
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <span className="material-symbols-outlined text-tertiary text-4xl">energy_savings_leaf</span>
            <h3 className="font-headline font-semibold text-primary">Uninspired Voids</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Outdoor spaces often remain unused, feeling like empty additions rather than functional rooms.
            </p>
          </div>
          <div className="space-y-4">
            <span className="material-symbols-outlined text-tertiary text-4xl">block</span>
            <h3 className="font-headline font-semibold text-primary">Decision Paralysis</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              The sheer scope of choices in planting and hardscaping prevents many from ever starting.
            </p>
          </div>
          <div className="space-y-4">
            <span className="material-symbols-outlined text-tertiary text-4xl">payments</span>
            <h3 className="font-headline font-semibold text-primary">Misallocated Budget</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Without a master plan, owners waste thousands on elements that don't survive or harmonize.
            </p>
          </div>
          <div className="space-y-4">
            <span className="material-symbols-outlined text-tertiary text-4xl">schedule</span>
            <h3 className="font-headline font-semibold text-primary">High Maintenance</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Poorly planned gardens quickly become a burden of labor rather than a place of rest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
