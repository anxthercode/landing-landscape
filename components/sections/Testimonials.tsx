import SectionLabel from '@/components/ui/SectionLabel';
import { trustPoints } from '@/lib/site-data';

export default function Testimonials() {
  return (
    <section className="w-full overflow-hidden bg-primary-container py-32 text-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-24 text-center">
          <SectionLabel>WHY CLIENTS COMMISSION US</SectionLabel>
          <h2 className="mt-6 font-display text-5xl">What matters in the work</h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {trustPoints.map((point) => (
            <div key={point.title} className="rounded-xl bg-primary/45 p-10 shadow-lg">
              <h3 className="mb-4 font-display text-3xl text-surface">{point.title}</h3>
              <p className="leading-relaxed text-primary-fixed-dim">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
