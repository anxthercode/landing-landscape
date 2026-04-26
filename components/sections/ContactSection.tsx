"use client";

import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import ContactForm from './ContactForm';
import { siteContact } from '@/lib/site-data';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const contactDetails = [
  {
    icon: Phone,
    label: 'Direct line',
    value: siteContact.phone,
    href: `tel:${siteContact.phone.replace(/[^+\d]/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email us',
    value: siteContact.email,
    href: `mailto:${siteContact.email}`,
  },
  {
    icon: MapPin,
    label: 'Studio',
    value: `${siteContact.addressLine1}\n${siteContact.addressLine2}`,
  },
  {
    icon: Clock,
    label: 'Hours',
    value: siteContact.hours,
  },
];

export default function ContactSection() {
  return (
    <section className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left column — dark background with contact info */}
        <motion.div
          className="bg-primary-container px-8 py-24 text-surface md:px-16 lg:py-32"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
        >
          <div className="mx-auto max-w-lg">
            <span className="mb-4 inline-block font-label text-xs uppercase tracking-[0.15rem] text-tertiary-fixed">
              Get in Touch
            </span>
            <h2 className="mb-4 font-display text-4xl text-surface md:text-5xl">
              Let&apos;s Talk About Your Garden
            </h2>
            <p className="mb-12 font-body text-lg leading-relaxed text-surface/70">
              We respond within one business day. Tell us about your site, your priorities, and how you&apos;d like to use the space.
            </p>

            <div className="space-y-8">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                const Wrapper = detail.href ? 'a' : 'div';
                const wrapperProps = detail.href
                  ? { href: detail.href, className: 'group' }
                  : {};

                return (
                  <Wrapper key={detail.label} {...wrapperProps}>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-surface/15 bg-surface/5">
                        <Icon className="h-5 w-5 text-tertiary-fixed" />
                      </div>
                      <div>
                        <h4 className="font-label text-[10px] uppercase tracking-[0.15em] text-tertiary-fixed">
                          {detail.label}
                        </h4>
                        <p className="mt-1 whitespace-pre-line font-body text-lg font-medium text-surface/90 transition-colors group-hover:text-surface">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right column — light background with form */}
        <motion.div
          className="bg-surface-bright px-8 py-24 md:px-16 lg:py-32"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.1 }}
        >
          <div className="mx-auto max-w-lg">
            <h3 className="mb-2 font-display text-3xl text-primary">
              Project Enquiry
            </h3>
            <p className="mb-10 text-sm text-on-surface-variant">
              All fields except phone are required
            </p>
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
