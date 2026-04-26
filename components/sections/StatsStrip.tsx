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
    <section className="bg-primary py-24">
      <motion.div 
        className="max-w-7xl mx-auto px-12 grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="relative group">
          <p className="font-display text-6xl md:text-[80px] mb-3 text-surface leading-none"><Counter end={12} suffix="+" /></p>
          <p className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary-fixed mb-2 mt-4">Years</p>
          <p className="font-body text-sm text-surface/70 max-w-[15ch] mx-auto hidden md:block">Crafting residential landscapes</p>
          <div className="hidden md:block absolute right-[-24px] top-1/2 -translate-y-1/2 w-px h-24 bg-surface/10"></div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="relative group">
          <p className="font-display text-6xl md:text-[80px] mb-3 text-surface leading-none"><Counter end={340} suffix="+" /></p>
          <p className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary-fixed mb-2 mt-4">Projects</p>
          <p className="font-body text-sm text-surface/70 max-w-[15ch] mx-auto hidden md:block">Delivered across Europe</p>
          <div className="hidden md:block absolute right-[-24px] top-1/2 -translate-y-1/2 w-px h-24 bg-surface/10"></div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="relative group">
          <p className="font-display text-6xl md:text-[80px] mb-3 text-surface leading-none"><Counter end={94} suffix="%" /></p>
          <p className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary-fixed mb-2 mt-4">Referrals</p>
          <p className="font-body text-sm text-surface/70 max-w-[15ch] mx-auto hidden md:block">Clients who return or refer us</p>
          <div className="hidden md:block absolute right-[-24px] top-1/2 -translate-y-1/2 w-px h-24 bg-surface/10"></div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="group">
          <p className="font-display text-6xl md:text-[80px] mb-3 text-surface leading-none"><Counter end={4} suffix=".9" /></p>
          <p className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary-fixed mb-2 mt-4">Rating</p>
          <p className="font-body text-sm text-surface/70 max-w-[19ch] mx-auto hidden md:block">Average Google Reviews rating</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
