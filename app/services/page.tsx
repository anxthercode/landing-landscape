import InnerPageBanner from '@/components/ui/InnerPageBanner';
import ServicesPreview from '@/components/sections/ServicesPreview';
import FAQAccordion from '@/components/sections/FAQAccordion';
import CTABand from '@/components/sections/CTABand';
import { Droplet, Lightbulb, Cuboid, Leaf, HardHat, Box } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata = {
  title: 'Our Services | Studio Aethel',
  description: 'Bespoke landscape architecture and horticultural services.',
};

export default function ServicesPage() {
  const serviceDetails = [
    {
      icon: Droplet,
      title: "Smart Irrigation",
      desc: "Our intelligent hydration systems are specifically calibrated to the microclimates of your estate. We utilize discreet sensors and automated zoning to assure optimal moisture levels year-round. This approach eliminates water waste while protecting delicate botanicals during peak summer heat. The entire system can be monitored seamlessly from your device."
    },
    {
      icon: Lightbulb,
      title: "Atmospheric Lighting",
      desc: "The garden does not sleep when the sun sets; it transforms into a secondary living space. We design layered architectural lighting that accentuates specimen trees and textural stonework. Subdued path illumination ensures safety while preserving the romance of the evening shadow. Our fixtures are sourced from elite European brass and copper artisans."
    },
    {
      icon: Cuboid,
      title: "Terrace Construction",
      desc: "Mastering elevation changes is the true secret behind grand garden rooms. We build structurally robust, multi-tiered terraces utilizing locally sourced natural limestone and reclaimed brick. Expert retaining walls serve as aesthetic focal points rather than mere utility. Every joint and paver is laid by heritage craftsmen with decades of masonry experience."
    },
    {
      icon: Leaf,
      title: "Botanical Curation",
      desc: "Plants are the ultimate brushstrokes of our design philosophy, selected for resilience and evolving beauty. We source mature specimen trees from exclusive nurseries across Italy, France, and Belgium. Our planting schemes orchestrate sequential blooming across all four seasons. We prioritize native, climate-adaptive varieties that invite local biodiversity."
    },
    {
      icon: HardHat,
      title: "Turnkey Management",
      desc: "From initial concept sketches to the final placement of furniture, we handle the entire project lifecycle. Our dedicated managers coordinate all specialist trades, structural engineers, and local planning authorities. We provide transparent weekly updates to ensure complete peace of mind. By controlling the entire process, we guarantee the final outcome remains faithful to our vision."
    },
    {
      icon: Box,
      title: "3D Visualisation",
      desc: "Before a single spade enters the ground, experience your future landscape through stunning realism. We build precise photorealistic models tracking sunlight and shade throughout the solar year. Virtual walkthroughs allow us to refine sightlines from key interior windows. This ensures absolute confidence and alignment before committing to physical materials."
    }
  ];

  const serviceFaqs = [
    { q: "How do you handle local climate challenges?", a: "We embrace local environmental nuances by selecting indigenous flora and employing drought-tolerant design principles native to your specific region." },
    { q: "Do you offer ongoing care after installation?", a: "Yes, our dedicated estate management team offers bespoke subscriptions, ensuring the garden matures exactly as conceptualized." },
    { q: "Can we incorporate mature trees?", a: "Absolutely. We are highly proficient in crane operations and rootball stabilization to import and plant grand historical specimens." },
    { q: "Are your hardscaping materials sustainable?", a: "We prioritize European-quarried stone, reclaimed heritage brickwork, and ethically sourced timber to minimize our carbon footprint." },
    { q: "How are permits and planning managed?", a: "Our studio liaises directly with local councils, submitting all necessary architectural drawings, ecological surveys, and planning applications on your behalf." },
    { q: "Do you design outdoor kitchens or pools?", a: "Yes, we holistically integrate bespoke culinary spaces, natural swimming ponds, and heated architectural pools as seamless extensions of the landscape." },
    { q: "What is your approach to soil health?", a: "We conduct exhaustive scientific soil testing before planting, introducing organic mychorrizal fungi and tailored compost blends to guarantee vigorous root establishment." }
  ];

  return (
    <main>
      <InnerPageBanner 
        label="Our Services" 
        title="Crafted for Every Outdoor Vision" 
        imageSrc="/images/service-planting.jpg" 
      />
      
      <section className="py-24 px-6 bg-surface text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-display text-2xl leading-relaxed text-primary">
            We operate at the intersection of rigorous architecture and organic volatility. Every service we offer is designed to elevate your property from mere land into a curated, living masterpiece.
          </p>
        </div>
      </section>

      <ServicesPreview />

      <section className="py-32 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <SectionLabel>OUR EXPERTISE</SectionLabel>
            <h2 className="font-display text-5xl text-primary mt-4">Disciplines of Design</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {serviceDetails.map((service, i) => (
              <div key={i} className="flex flex-col bg-surface p-10 rounded-xl shadow-sm border border-outline-variant/10">
                <service.icon className="text-tertiary-container w-10 h-10 mb-6" strokeWidth={1.5} />
                <h3 className="font-headline font-bold text-2xl text-primary mb-4">{service.title}</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <SectionLabel className="block text-center mb-6">INVESTMENT</SectionLabel>
          <h2 className="font-display text-5xl text-primary text-center mb-16">How We Price Our Work</h2>
          
          <div className="space-y-8 text-on-surface-variant text-lg leading-relaxed font-body text-center">
            <p>
              True luxury is found in transparency. We believe our clients should enter conceptual stages with absolute clarity regarding financial commitments. Our pricing is structured in two distinct phases: a flat design fee based on acreage and architectural complexity, followed by an itemized implementation budget.
            </p>
            <p>
              During the initial consultation, we provide historical cost data from analogous estates to set realistic expectations. Once the architectural blueprint is finalized, we tender precise quotes from our trusted network of artisan masons, specialist nurseries, and engineers, ensuring uncompromising quality at the correct market value.
            </p>
            <p>
              There are no hidden premiums or vague allowances. Every bespoke pergola, specimen olive tree, and linear foot of irrigation is accounted for. This rigorous methodology protects the integrity of the design while honoring your overarching investment strategy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-surface-container-low text-primary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
             <SectionLabel>SERVICE INQUIRIES</SectionLabel>
             <h2 className="font-display text-5xl mt-6">Frequently Asked</h2>
          </div>
          <FAQAccordion faqs={serviceFaqs} />
        </div>
      </section>

      <CTABand />
    </main>
  );
}
