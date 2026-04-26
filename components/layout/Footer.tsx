"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { primaryNavigation, siteContact } from '@/lib/site-data';

const footerLinks = [
  { href: '/', label: 'Home' },
  ...primaryNavigation,
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative w-full overflow-hidden bg-primary-container text-surface">
      <div className="border-t border-surface/10 mx-auto grid max-w-screen-2xl grid-cols-1 gap-16 px-12 pb-12 pt-16 md:grid-cols-3">
          <div>
            <div className="mb-8 font-display text-3xl">{siteContact.studioName}</div>
            <p className="mb-8 max-w-sm text-sm leading-relaxed text-primary-fixed-dim">
              Landscape design, planting, and build coordination for residential gardens that feel settled, usable, and lasting.
            </p>
            <Link
              href="/contact"
              className="font-label text-[10px] uppercase tracking-[0.15rem] text-tertiary-container transition-colors hover:text-surface"
            >
              Start your enquiry
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="mb-8 font-label text-[10px] uppercase tracking-[0.15rem] text-tertiary-container">
                Explore
              </h4>
              <ul className="space-y-4">
                {footerLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-block text-surface/70 transition-colors hover:translate-x-1 hover:text-surface"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-8 font-label text-[10px] uppercase tracking-[0.15rem] text-tertiary-container">
                Contact
              </h4>
              <ul className="space-y-4 text-surface/70">
                <li>
                  <a href={`mailto:${siteContact.email}`} className="transition-colors hover:text-surface">
                    {siteContact.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${siteContact.phone.replace(/[^+\d]/g, '')}`} className="transition-colors hover:text-surface">
                    {siteContact.phone}
                  </a>
                </li>
                <li>{siteContact.addressLine1}</li>
                <li>{siteContact.addressLine2}</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="mb-8 font-label text-[10px] uppercase tracking-[0.15rem] text-tertiary-container">
              Stay Updated
            </h4>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-surface/70">
              Seasonal tips, project insights, and landscape design thinking — delivered monthly.
            </p>

            {subscribed ? (
              <p className="text-sm text-tertiary-fixed">Thank you — you&apos;re subscribed.</p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 rounded-lg border border-surface/15 bg-surface/5 px-4 py-3 text-sm text-surface placeholder:text-surface/40 focus:border-tertiary-container focus:outline-none focus:ring-1 focus:ring-tertiary-container/40 transition-all"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center rounded-lg bg-tertiary-container px-4 py-3 text-on-tertiary-container transition-colors hover:bg-tertiary-container/80"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-4 border-t border-surface/10 px-12 py-10 md:flex-row">
          <span className="font-label text-[10px] uppercase tracking-[0.15rem] text-tertiary-container">
            © {new Date().getFullYear()} {siteContact.studioName}. All rights reserved.
          </span>
          <div className="flex items-center gap-6 text-sm text-surface/50">
            <a href={`mailto:${siteContact.email}`} className="transition-colors hover:text-tertiary-container">
              Email us
            </a>
            <Link href="/contact" className="transition-colors hover:text-tertiary-container">
              Contact page
            </Link>
          </div>
        </div>
    </footer>
  );
}
