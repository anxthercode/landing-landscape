import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';
import CTABand from '@/components/sections/CTABand';
import ContactForm from '@/components/sections/ContactForm';
import InnerPageBanner from '@/components/ui/InnerPageBanner';
import SectionLabel from '@/components/ui/SectionLabel';
import { siteContact } from '@/lib/site-data';

export const metadata = {
  title: 'Contact | Studio Aethel',
  description: 'Start the conversation about your landscape project.',
};

export default function ContactPage() {
  return (
    <main>
      <InnerPageBanner label="Get in Touch" title="Begin your project" imageSrc="/images/project-1.jpg" />

      <section className="relative overflow-hidden bg-surface px-6 py-32">
        <div className="absolute left-10 top-40 hidden animate-pulse opacity-10 pointer-events-none lg:block">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" stroke="currentColor" className="text-tertiary-container" strokeWidth="2" strokeDasharray="10 10" />
          </svg>
        </div>
        <div className="pointer-events-none absolute bottom-20 left-[40%] hidden animate-bounce opacity-20 lg:block" style={{ animationDuration: '6s' }}>
          <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-primary-fixed-dim">
            <rect x="20" y="20" width="60" height="60" rx="12" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-24 lg:flex-row">
          <div className="w-full space-y-12 lg:w-1/2">
            <div>
              <SectionLabel>LET'S TALK</SectionLabel>
              <h2 className="mb-8 mt-4 font-display text-5xl text-primary">Discuss your space</h2>
              <p className="max-w-md font-body text-lg leading-relaxed text-on-surface-variant">
                Whether you already have plans in motion or you are still clarifying what the garden needs, we can begin with a focused conversation about the site, priorities, and budget.
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/images/service-terrace.jpg"
                alt="Covered terrace with planted edges and dining area"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>

            <div className="space-y-6 border-t border-outline-variant/30 pt-4">
              <div className="flex items-center gap-4 text-primary">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-tertiary-container text-tertiary-container">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-primary-fixed-dim">Direct line</h4>
                  <p className="font-body text-lg font-medium">{siteContact.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-primary">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-tertiary-container text-tertiary-container">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-primary-fixed-dim">Studio</h4>
                  <p className="font-body font-medium">{siteContact.addressLine1}</p>
                  <p className="font-body font-medium">{siteContact.addressLine2}</p>
                </div>
              </div>
            </div>

            <div className="inline-block rounded-xl border-l-4 border-tertiary-container bg-surface-container-low p-6">
              <span className="font-display text-xl italic text-primary">“{siteContact.responseTime}”</span>
            </div>
          </div>

          <div className="w-full rounded-2xl border border-outline-variant/10 bg-surface-container-lowest p-10 shadow-2xl lg:w-1/2 md:p-16">
            <h3 className="mb-10 text-center font-display text-3xl text-primary">Project enquiry</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
