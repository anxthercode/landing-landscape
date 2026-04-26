import CTABand from '@/components/sections/CTABand';
import InnerPageBanner from '@/components/ui/InnerPageBanner';
import SectionLabel from '@/components/ui/SectionLabel';
import GardensList from '@/components/sections/GardensList';

export const metadata = {
  title: 'Gardens | Greenframe',
  description: 'A selection of residential landscape work across hardscape, planting, terraces, and lighting-led spaces.',
};

export default function GardensPage() {
  return (
    <main>
      <InnerPageBanner
        label="Selected Work"
        title="Landscapes shaped for real use and lasting presence"
        imageSrc="/images/project-1.jpg"
      />

      <section className="bg-surface py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 max-w-3xl">
            <SectionLabel>PORTFOLIO</SectionLabel>
            <h2 className="mt-4 font-display text-5xl text-primary">A selection of recent project types</h2>
            <p className="mt-6 leading-relaxed text-on-surface-variant">
              These projects span formal forecourts, family gardens, larger hardscape schemes, and more atmospheric landscape settings.
            </p>
          </div>

          <GardensList />
        </div>
      </section>

      <CTABand />
    </main>
  );
}
