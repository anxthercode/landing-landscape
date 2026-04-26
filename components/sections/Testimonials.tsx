"use client";

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, BadgeCheck } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import { testimonials } from '@/lib/site-data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback((idx: number) => {
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
  }, [activeIndex]);

  const prev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setActiveIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  }, []);

  const t = testimonials[activeIndex];

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section className="w-full overflow-hidden bg-primary py-32 text-surface">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <SectionLabel className="text-tertiary-fixed-dim">CLIENT STORIES</SectionLabel>
          <h2 className="mt-6 font-display text-4xl md:text-5xl text-surface/90">
            Trusted by homeowners across the UK
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center"
            >
              {/* Stars */}
              <div className="mb-8 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-tertiary-fixed text-tertiary-fixed" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-10 max-w-2xl font-display text-xl md:text-2xl leading-relaxed text-surface/90 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author info */}
              <div className="flex flex-col items-center gap-4">
                {/* Avatar with initials */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-tertiary-container text-on-tertiary-container font-headline text-lg font-bold">
                  {t.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>

                <div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-headline font-semibold text-surface">{t.author}</span>
                    <BadgeCheck className="h-4 w-4 text-tertiary-fixed" />
                    <span className="font-label text-[10px] uppercase tracking-[0.15em] text-tertiary-fixed-dim">
                      Verified Client
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-center gap-3 font-body text-sm text-surface/50">
                    <span>{t.location}</span>
                    <span className="w-1 h-1 rounded-full bg-surface/30"></span>
                    <span>{t.projectType}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 flex h-10 w-10 items-center justify-center rounded-full border border-surface/20 bg-surface/5 text-surface/60 backdrop-blur-sm transition-colors hover:bg-surface/10 hover:text-surface md:-translate-x-14"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 flex h-10 w-10 items-center justify-center rounded-full border border-surface/20 bg-surface/5 text-surface/60 backdrop-blur-sm transition-colors hover:bg-surface/10 hover:text-surface md:translate-x-14"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-12 flex items-center justify-center gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? 'w-8 bg-tertiary-fixed'
                  : 'w-2 bg-surface/20 hover:bg-surface/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
