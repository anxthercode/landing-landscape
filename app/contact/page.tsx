import InnerPageBanner from '@/components/ui/InnerPageBanner';
import CTABand from '@/components/sections/CTABand';
import ContactForm from '@/components/sections/ContactForm';
import SectionLabel from '@/components/ui/SectionLabel';
import Image from 'next/image';
import { Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact | Studio Aethel',
  description: 'Begin the conversation about your transformative landscape.',
};

export default function ContactPage() {
  return (
    <main>
      <InnerPageBanner 
        label="Get In Touch" 
        title="Begin Your Project" 
        imageSrc="/images/about-banner.jpg" 
      />

      <section className="py-32 px-6 bg-surface relative overflow-hidden">
        {/* Floating Shapes */}
        <div className="absolute top-40 left-10 opacity-10 animate-pulse pointer-events-none hidden lg:block">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" stroke="currentColor" className="text-tertiary-container" strokeWidth="2" strokeDasharray="10 10" />
          </svg>
        </div>
        <div className="absolute bottom-20 left-[40%] opacity-20 animate-bounce pointer-events-none hidden lg:block" style={{ animationDuration: '6s' }}>
          <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-primary-fixed-dim">
            <rect x="20" y="20" width="60" height="60" rx="12" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 relative z-10">
          
          {/* Left Column */}
          <div className="w-full lg:w-1/2 space-y-12">
            <div>
              <SectionLabel>LET'S TALK</SectionLabel>
              <h2 className="font-display text-5xl text-primary mt-4 mb-8">Discuss Your Vision</h2>
              <p className="font-body text-lg text-on-surface-variant max-w-md leading-relaxed">
                Whether you possess a finalized architectural blueprint or simply a quiet desire to reshape your boundaries, our senior design team is ready to listen.
              </p>
            </div>
            
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              {/* TODO: replace with real images */}
              <Image src="/images/after-3.jpg" alt="Quiet garden corner" fill className="object-cover" />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </div>

            <div className="space-y-6 pt-4 border-t border-outline-variant/30">
              <div className="flex items-center gap-4 text-primary">
                <div className="w-12 h-12 rounded-full border border-tertiary-container flex items-center justify-center text-tertiary-container">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-headline font-bold uppercase text-xs tracking-widest text-primary-fixed-dim">Direct Line</h4>
                  <p className="font-body font-medium text-lg">+44 (0) 20 7946 0123</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-primary">
                <div className="w-12 h-12 rounded-full border border-tertiary-container flex items-center justify-center text-tertiary-container">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-headline font-bold uppercase text-xs tracking-widest text-primary-fixed-dim">London Studio</h4>
                  <p className="font-body font-medium">12 Architecture Mews, Kensington</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-tertiary-container inline-block">
              <span className="font-display italic text-primary text-xl">"We respond to all inquiries within one business day."</span>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="w-full lg:w-1/2 bg-surface-container-lowest shadow-2xl p-10 md:p-16 rounded-2xl border border-outline-variant/10">
            <h3 className="font-display text-3xl text-primary mb-10 text-center">Private Booking Request</h3>
            <ContactForm />
          </div>

        </div>
      </section>

      <CTABand />
    </main>
  );
}
