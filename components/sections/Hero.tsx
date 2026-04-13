"use client";

import { Fragment, useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import CTAButton from '@/components/ui/CTAButton';

/* ─── Trust metrics shown at bottom of hero ──────────────────────────────── */

const trustMetrics = [
  { value: '12+',   label: 'Years\nExperience' },
  { value: '340+',  label: 'Projects\nDelivered' },
  { value: '4.9★',  label: 'Google\nRating' },
] as const;

/* ─── Smooth easing constant ─────────────────────────────────────────────── */

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ─────────────────────────────────────────────────────────────────────────── */

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  /* Parallax: subtle scale on the background image + content fade-out */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const imageScale    = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY      = useTransform(scrollYProgress, [0, 0.5], ['0%', '14%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-svh w-full items-end overflow-hidden bg-primary"
    >
      {/* ── Background image with parallax zoom ────────────────────────── */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={shouldReduceMotion ? undefined : { scale: imageScale }}
      >
        <Image
          src="/images/hero_2.jpg"
          alt="Completed residential garden with stone terrace, structured planting, and mature trees"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={80}
        />
      </motion.div>

      {/* ── Gradient overlay — dark at bottom for text legibility ─────── */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10"
        aria-hidden="true"
      />

      {/* ── Content: positioned at bottom of viewport ────────────────── */}
      <motion.div
        className="relative z-10 w-full px-6 pb-20 pt-44 md:px-12 md:pb-28 lg:pb-32"
        style={
          shouldReduceMotion
            ? undefined
            : { y: contentY, opacity: contentOpacity }
        }
      >
        <div className="mx-auto max-w-screen-2xl">
          {/* Section label */}
          <motion.span
            className="mb-6 inline-block font-label text-[11px] uppercase tracking-[0.25em] text-tertiary-container"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT_EXPO }}
          >
            Landscape Design · Build · Care
          </motion.span>

          {/* Headline */}
          <motion.h1
            className="mb-8 max-w-4xl font-display text-[clamp(2.75rem,6vw,6.5rem)] leading-[1.05] tracking-tight text-white"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE_OUT_EXPO }}
          >
            Gardens Designed With{' '}
            <em className="text-tertiary-container">
              Structure&nbsp;&amp;&nbsp;Soul
            </em>
          </motion.h1>

          {/* Supporting paragraph */}
          <motion.p
            className="mb-12 max-w-xl font-body text-lg leading-relaxed text-white/75 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: EASE_OUT_EXPO }}
          >
            We design, build, and maintain residential landscapes with
            architectural clarity and natural ease — from first concept
            through years of growth.
          </motion.p>

          {/* CTA pair */}
          <motion.div
            className="mb-16 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: EASE_OUT_EXPO }}
          >
            <CTAButton href="/contact" variant="accent" size="lg">
              Book Free Consultation
            </CTAButton>
            <CTAButton href="/gardens" variant="outline-light" size="lg">
              View Our Work
            </CTAButton>
          </motion.div>

          {/* Trust metrics strip */}
          <motion.div
            className="flex flex-wrap items-center gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            {trustMetrics.map((metric, i) => (
              <Fragment key={metric.label}>
                {i > 0 && (
                  <span
                    className="hidden h-8 w-px bg-white/20 sm:block"
                    aria-hidden="true"
                  />
                )}
                <div className="flex items-center gap-3">
                  <span className="font-display text-2xl text-white md:text-3xl">
                    {metric.value}
                  </span>
                  <span className="whitespace-pre-line text-[11px] leading-tight text-white/50">
                    {metric.label}
                  </span>
                </div>
              </Fragment>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ─────────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-5 w-5 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
