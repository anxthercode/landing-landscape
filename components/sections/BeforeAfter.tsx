"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';

const INITIAL_POSITION = 50; // percent

const comparisons = [
  {
    id: 1,
    title: 'Circular Stone Court',
    description: 'From overgrown plot to a structured forecourt with preserved mature tree and circular stone centrepiece.',
    before: '/images/before-1.jpg',
    after: '/images/after-1.png',
    beforeAlt: 'Before: Overgrown garden with bare soil and sparse planting before renovation',
    afterAlt: 'After: Completed residential garden with circular stone forecourt and preserved mature tree',
  },
  {
    id: 2,
    title: 'Layered Family Garden',
    description: 'A tired rear garden rebuilt into three distinct zones — dining terrace, planted borders, and quiet retreat.',
    before: '/images/before-2.jpg',
    after: '/images/after-2.png',
    beforeAlt: 'Before: Neglected family garden with basic lawn and tired patio',
    afterAlt: 'After: Layered family garden with structured terrace and border planting',
  },
  {
    id: 3,
    title: 'Contemporary Grounds',
    description: 'A barren frontage transformed into a resolved arrival sequence with clean paving and atmospheric lighting.',
    before: '/images/before-3.jpg',
    after: '/images/after-3.jpg',
    beforeAlt: 'Before: Bare front entrance with minimal landscaping',
    afterAlt: 'After: Contemporary grounds with clean hardscape and planted edges',
  },
];

export default function BeforeAfter() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(INITIAL_POSITION);
  const [isDragging, setIsDragging] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rafRef = useRef<number | null>(null);
  const pendingPositionRef = useRef<number>(INITIAL_POSITION);

  const active = comparisons[activeIndex];

  // Reset slider when switching tabs
  const handleTabChange = useCallback((index: number) => {
    setActiveIndex(index);
    setPosition(INITIAL_POSITION);
    pendingPositionRef.current = INITIAL_POSITION;
  }, []);

  // Convert a pointer x-coordinate to a percentage within the container
  const getPercent = useCallback((clientX: number): number => {
    const el = containerRef.current;
    if (!el) return INITIAL_POSITION;
    const rect = el.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    return Math.min(100, Math.max(0, raw));
  }, []);

  // Commit pending position via rAF to avoid mid-paint updates
  const scheduleUpdate = useCallback((clientX: number) => {
    pendingPositionRef.current = getPercent(clientX);
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      setPosition(pendingPositionRef.current);
      rafRef.current = null;
    });
  }, [getPercent]);

  // ── Pointer events ──────────────────────────────────────────────────────────
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    scheduleUpdate(e.clientX);
  }, [scheduleUpdate]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    scheduleUpdate(e.clientX);
  }, [isDragging, scheduleUpdate]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // ── Keyboard accessibility ──────────────────────────────────────────────────
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === 'ArrowLeft') setPosition((p) => Math.max(0, p - step));
    if (e.key === 'ArrowRight') setPosition((p) => Math.min(100, p + step));
    if (e.key === 'Home') setPosition(0);
    if (e.key === 'End') setPosition(100);
  }, []);

  // ── Touch support ───────────────────────────────────────────────────────────
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      if (touch) scheduleUpdate(touch.clientX);
    };
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    return () => el.removeEventListener('touchmove', onTouchMove);
  }, [scheduleUpdate]);

  // Cancel pending rAF on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="overflow-hidden bg-surface-bright py-0">
      {/* Label above the slider */}
      <motion.div
        className="mx-auto max-w-6xl px-6 pb-12 pt-32 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <SectionLabel className="mb-4">Transformation</SectionLabel>
        <h2 className="font-display text-4xl text-primary md:text-5xl">
          What a Transformation Looks Like
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-on-surface-variant">
          Drag the handle to reveal the difference
        </p>
      </motion.div>

      {/* Tab navigation */}
      <div className="mx-auto mb-8 flex max-w-xl items-center justify-center gap-2 px-6">
        {comparisons.map((comp, idx) => (
          <button
            key={comp.id}
            onClick={() => handleTabChange(idx)}
            className={`rounded-full px-5 py-2.5 font-label text-[11px] uppercase tracking-[0.15em] transition-all duration-300 ${
              idx === activeIndex
                ? 'bg-primary text-on-primary shadow-card'
                : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            {comp.title}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div className="mx-auto max-w-[1600px] px-0 md:px-6">
        <div
          ref={containerRef}
          className={`relative w-full select-none overflow-hidden sm:rounded-[2rem] aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] shadow-2xl ${
            isDragging ? 'cursor-col-resize' : 'cursor-grab'
          }`}
          role="slider"
          aria-label="Before and after comparison slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          tabIndex={0}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={handleKeyDown}
        >
          {/* AFTER — full-width base layer */}
          <div className="absolute inset-0">
            <Image
              src={active.after}
              alt={active.afterAlt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
              draggable={false}
            />
            {/* AFTER label */}
            <div
              className="pointer-events-none absolute bottom-6 right-6 z-10 md:bottom-10 md:right-10"
              aria-hidden="true"
            >
              <span className="font-label text-[10px] md:text-sm uppercase tracking-[0.2em] text-white bg-tertiary-container/90 px-4 py-2 md:px-6 md:py-3 backdrop-blur-md rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
                After
              </span>
            </div>
          </div>

          {/* BEFORE — clipped layer on top */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <Image
              src={active.before}
              alt={active.beforeAlt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
              draggable={false}
            />
            {/* BEFORE label */}
            <div
              className="pointer-events-none absolute bottom-6 left-6 z-10 md:bottom-10 md:left-10"
              aria-hidden="true"
            >
              <span className="font-label text-[10px] md:text-sm uppercase tracking-[0.2em] text-white bg-primary/90 px-4 py-2 md:px-6 md:py-3 backdrop-blur-md rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
                Before
              </span>
            </div>
          </div>

        {/* Divider line */}
        <div
          className="pointer-events-none absolute inset-y-0 z-20 w-px bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)]"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        />

        {/* Drag handle */}
        <div
          className={`pointer-events-none absolute top-1/2 z-30 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_24px_rgba(0,0,0,0.3)] transition-transform ${
            isDragging ? 'scale-110' : 'scale-100'
          }`}
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          {/* Left arrow */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary">
            <path d="M8 5l-5 5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        </div>
      </div>

      {/* Project caption */}
      <div className="mx-auto max-w-2xl px-6 py-10 text-center">
        <h3 className="font-display text-2xl text-primary">{active.title}</h3>
        <p className="mt-2 text-sm text-on-surface-variant">{active.description}</p>
      </div>

      {/* Dot pagination */}
      <div className="mx-auto flex items-center justify-center gap-3 pb-16">
        {comparisons.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleTabChange(idx)}
            aria-label={`View comparison ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === activeIndex
                ? 'w-8 bg-tertiary-container'
                : 'w-2 bg-outline-variant/40 hover:bg-outline-variant'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
