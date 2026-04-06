import InnerPageBanner from '@/components/ui/InnerPageBanner';
import CTABand from '@/components/sections/CTABand';
import SectionLabel from '@/components/ui/SectionLabel';
import QuoteIcon from '@/components/ui/QuoteIcon';
import Image from 'next/image';

export const metadata = {
  title: 'Our Portfolio | Studio Aethel',
  description: 'View our curated architectural landscaping projects.',
};

export default function ProjectsPage() {
  const projects = [
    {
      name: "The Cotswold Manor Revival",
      location: "Gloucestershire, UK",
      sqm: "4,500 SQM",
      image: "/images/project-cotswold.jpg",
      done: "We implemented a sweeping ecological restoration of the original 18th-century gardens. We utilized locally quarried limestone and introduced advanced water-capture techniques. A modern glasshouse was integrated seamlessly among heritage apple trees.",
      outcome: "The estate was honored with the Royal Horticultural Heritage Award in 2023. It now serves as a biodiverse haven supporting local wildlife while providing phenomenal private entertaining spaces.",
      quote: "Studio Aethel navigated our home's deep history with profound respect, marrying modern elegant functionality with the soul of the traditional English countryside.",
      author: "Lord & Lady H., Owners"
    },
    {
      name: "Villa Azure Clifftop",
      location: "Amalfi Coast, Italy",
      sqm: "950 SQM",
      image: "/images/project-amalfi.jpg",
      done: "Carved entirely into existing bedrock, we engineered three soaring, staggered terraces connected by brutalist concrete stairs. We imported mature olive trees by crane and installed a highly complex, invisible drip irrigation network.",
      outcome: "A spectacular triumph of spatial engineering that feels effortlessly organic. The panoramic infinity pool blends limitlessly into the Tyrrhenian Sea horizon.",
      quote: "I thought my vision was impossible due to the sheer rock face. They didn't just build a garden; they sculpted an architectural miracle.",
      author: "Matteo R., Owner"
    },
    {
      name: "Mayfair Townhouse Courtyard",
      location: "London, UK",
      sqm: "120 SQM",
      image: "/images/project-mayfair.jpg",
      done: "We transformed a dark, unused subterranean lightwell into a luminous, living sanctuary. Bespoke bronze mirrors and white limestone amplify natural light, whilst lush, shade-tolerant ferns provide deep textual contrast.",
      outcome: "A tranquil urban refuge that fundamentally changed the atmosphere of the interior home, proving that limited square footage is no barrier to absolute luxury.",
      quote: "It feels as though we've gained an entirely new wing to our home. The lighting design at night is simply breathtaking.",
      author: "Sarah W., Owner"
    }
  ];

  return (
    <main>
      <InnerPageBanner 
        label="Our Portfolio" 
        title="Landscapes That Endure" 
        imageSrc="/images/projects-banner.jpg" 
      />

      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 space-y-40">
          {projects.map((project, index) => {
            const isFlipped = index % 2 !== 0;
            return (
              <div key={index} className={`flex flex-col ${isFlipped ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
                {/* Image */}
                <div className="w-full lg:w-1/2 overflow-hidden rounded-xl aspect-[4/3] relative shadow-lg">
                  {/* TODO: replace with real image */}
                  <div className="absolute inset-0 bg-primary-container/20 mix-blend-multiply z-10"></div>
                  <Image 
                    src={project.image} 
                    alt={project.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div>
                    <span className="font-label text-[10px] uppercase tracking-widest text-tertiary-container">{project.location} • {project.sqm}</span>
                    <h3 className="font-display text-4xl lg:text-5xl text-primary mt-2">{project.name}</h3>
                  </div>
                  
                  <div className="space-y-6 text-on-surface-variant leading-relaxed">
                    <div>
                      <h4 className="font-headline font-bold text-primary mb-2 text-sm uppercase tracking-widest">The Brief & Execution</h4>
                      <p>{project.done}</p>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-primary mb-2 text-sm uppercase tracking-widest">The Outcome</h4>
                      <p>{project.outcome}</p>
                    </div>
                  </div>

                  {/* Quote Block */}
                  <div className="bg-surface-container-low p-8 rounded-xl relative mt-8 border border-outline-variant/20">
                    <QuoteIcon className="absolute top-6 left-6 opacity-10 text-tertiary-container w-12 h-12" />
                    <p className="font-display text-lg leading-relaxed italic mb-4 relative z-10 text-primary pt-2">
                      "{project.quote}"
                    </p>
                    <p className="font-label text-[10px] uppercase tracking-widest text-primary-fixed-dim">— {project.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTABand />
    </main>
  );
}
