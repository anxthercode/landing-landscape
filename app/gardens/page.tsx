import Image from 'next/image';
import CTABand from '@/components/sections/CTABand';
import InnerPageBanner from '@/components/ui/InnerPageBanner';
import SectionLabel from '@/components/ui/SectionLabel';
import { portfolioProjects } from '@/lib/site-data';

export const metadata = {
  title: 'Gardens | Studio Aethel',
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
              These projects span formal forecourts, family gardens, larger hardscape schemes, and more atmospheric landscape settings. Detailed project pages can be added next once the case-study structure is approved.
            </p>
          </div>

          <div className="space-y-32">
            {portfolioProjects.map((project, index) => {
              const reversed = index % 2 === 1;

              return (
                <div key={project.title} className={`flex flex-col items-center gap-16 ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg lg:w-1/2">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 z-10 bg-primary-container/20 mix-blend-multiply" />
                  </div>

                  <div className="w-full space-y-8 lg:w-1/2">
                    <div>
                      <span className="font-label text-[10px] uppercase tracking-widest text-tertiary-container">
                        {project.subtitle}
                      </span>
                      <h3 className="mt-2 font-display text-4xl text-primary lg:text-5xl">{project.title}</h3>
                    </div>

                    <div className="space-y-6 leading-relaxed text-on-surface-variant">
                      <div>
                        <h4 className="mb-2 font-headline text-sm font-bold uppercase tracking-widest text-primary">
                          What was improved
                        </h4>
                        <p>{project.summary}</p>
                      </div>
                      <div>
                        <h4 className="mb-2 font-headline text-sm font-bold uppercase tracking-widest text-primary">
                          Why it matters
                        </h4>
                        <p>{project.details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
