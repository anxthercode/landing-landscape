import SectionLabel from '@/components/ui/SectionLabel';
import QuoteIcon from '@/components/ui/QuoteIcon';

export default function Testimonials() {
  return (
    <section className="bg-primary-container text-surface py-32 overflow-hidden w-full">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-24">
          <SectionLabel>CLIENT STORIES</SectionLabel>
          <h2 className="font-display text-5xl mt-6">Voices from the Garden</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-primary/50 p-12 rounded-xl relative shadow-lg">
            <QuoteIcon className="absolute top-8 left-8 opacity-20 text-tertiary-container" />
            <p className="font-display text-xl leading-relaxed italic mb-8 relative z-10 pt-4">
              "Studio Aethel didn't just design a garden; they created a sanctuary that resonates with our soul. Every morning, the way the light hits the grasses is a piece of art."
            </p>
            <p className="font-label text-[10px] uppercase tracking-widest text-primary-fixed-dim">— MARCUS V., LAKE COMO</p>
          </div>
          
          <div className="bg-primary/50 p-12 rounded-xl relative shadow-lg">
            <QuoteIcon className="absolute top-8 left-8 opacity-20 text-tertiary-container" />
            <p className="font-display text-xl leading-relaxed italic mb-8 relative z-10 pt-4">
              "The attention to detail in the stonework is unparalleled. Their team managed the complex installation with absolute professionalism and grace."
            </p>
            <p className="font-label text-[10px] uppercase tracking-widest text-primary-fixed-dim">— ELENA S., KENSINGTON</p>
          </div>
        </div>
      </div>
    </section>
  );
}
