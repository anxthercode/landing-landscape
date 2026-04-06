import SectionLabel from '@/components/ui/SectionLabel';

export default function ProcessSteps() {
  const steps = [
    { num: 1, title: "Free Consultation" },
    { num: 2, title: "Site Visit" },
    { num: 3, title: "Concept & Estimate" },
    { num: 4, title: "Implementation" },
    { num: 5, title: "Care & Support" }
  ];

  return (
    <section className="py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-32">
          <SectionLabel>OUR PROCESS</SectionLabel>
          <h2 className="font-display text-5xl text-primary mt-4">The Journey to Your Oasis</h2>
        </div>
        
        <div className="relative">
          <div className="hidden md:block absolute top-[32px] left-[10%] w-[80%] h-px bg-tertiary-container/40"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {steps.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-6 group">
                <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center border border-tertiary-container/50 group-hover:bg-tertiary-container group-hover:text-on-tertiary-container transition-all duration-500 text-tertiary-container z-10">
                  <span className="font-display text-xl">{step.num}</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-primary">{step.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
