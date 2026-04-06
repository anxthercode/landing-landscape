"use client";
import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

function Counter({ end, suffix = "", duration = 2.5 }: { end: number; suffix?: string; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      animate(0, end, {
        duration,
        ease: EASE_OUT_EXPO,
        onUpdate: (latest) => count.set(latest)
      });
    }
  }, [inView, count, end, duration]);

  return (
    <>
      <motion.span ref={ref}>{rounded}</motion.span>
      {suffix}
    </>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE_OUT_EXPO } 
  }
};

export default function StatsStrip() {
  return (
    <section className="bg-primary-container text-surface py-20">
      <motion.div 
        className="max-w-7xl mx-auto px-12 grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="relative group">
          <p className="font-display text-5xl mb-3"><Counter end={12} suffix="+" /></p>
          <p className="font-label text-[10px] uppercase tracking-[0.2em] text-primary-fixed-dim">Years</p>
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-tertiary-container/30"></div>
        </motion.div>
        <motion.div variants={itemVariants} className="relative group">
          <p className="font-display text-5xl mb-3"><Counter end={340} suffix="+" /></p>
          <p className="font-label text-[10px] uppercase tracking-[0.2em] text-primary-fixed-dim">Projects</p>
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-tertiary-container/30"></div>
        </motion.div>
        <motion.div variants={itemVariants} className="relative group">
          <p className="font-display text-5xl mb-3"><Counter end={94} suffix="%" /></p>
          <p className="font-label text-[10px] uppercase tracking-[0.2em] text-primary-fixed-dim">Referrals</p>
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-tertiary-container/30"></div>
        </motion.div>
        <motion.div variants={itemVariants} className="group">
          <p className="font-display text-5xl mb-3"><Counter end={5} suffix=".0" /></p>
          <p className="font-label text-[10px] uppercase tracking-[0.2em] text-primary-fixed-dim">Rating</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
