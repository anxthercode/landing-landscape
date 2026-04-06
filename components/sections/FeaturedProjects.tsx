"use client";

import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import Link from 'next/link';
import { motion } from 'motion/react';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: EASE_OUT_EXPO } 
  }
};

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: EASE_OUT_EXPO }
  }
};

export default function FeaturedProjects() {
  return (
    <section className="py-32 bg-surface overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={titleVariants}>
            <SectionLabel>OUR WORK</SectionLabel>
          </motion.div>
          <motion.h2 variants={titleVariants} className="font-display text-5xl text-primary mt-4">Curated Gardens</motion.h2>
        </motion.div>
        
        <div className="space-y-40">
          {/* Block 1 */}
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-16"
            variants={projectVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="w-full md:w-3/5 overflow-hidden rounded-xl aspect-[4/3] relative">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChiuDgtEaxrsVa49OQBWgW35N1NDUbTBaqSJCA2wuCYgX5oU-nCxPieuYcq4xIKKHoblATlnR9Y3Lp0thlAhL3HgvmS9PR4OpyHcjN4NMEVS_7DNVqB0S-tmEyDNMnEz9JwB5cnW-Q5mb3CFWNmjdT1zXU-zDwVJnB2eAma3-wU-mTidJx2bp-ngFZUfL1yJztMGd3WeUm_rcIaVsH4jq5zJNNLDG6vatijHCGVOIi1oGMBqhRXHAslnXBuuMe3VhC1UrJMTMYY9s" 
                alt="The Lavender Hill Estate" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
            <div className="w-full md:w-2/5 space-y-6">
              <span className="font-label text-[10px] uppercase tracking-widest text-tertiary-container">Provence, France • 1200 SQM</span>
              <h3 className="font-display text-4xl text-primary">The Lavender Hill Estate</h3>
              <p className="text-on-surface-variant leading-relaxed">A restoration of a 17th-century farmhouse garden, integrating a modern infinity pool with traditional terraced olive groves.</p>
              <Link href="#" className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-tertiary-container group hover:opacity-80 transition-opacity">
                View Project 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>

          {/* Block 2 */}
          <motion.div 
            className="flex flex-col md:flex-row-reverse items-center gap-16"
            variants={projectVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="w-full md:w-3/5 overflow-hidden rounded-xl aspect-[4/3] relative group">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4m-ym6QUTEcGHRzHoR4MtzVeuxEztSjnItYh6kc32Mv-w-lGgk1RYIr5xcxJW0__GB2UrTrz12wqYzVb1XgFO0ZRXz19184jGQikbzV4ZZAcFKSCvZMU-ErpTSQx5-nbwzzF45e2SjxN6q1GzTp8EkUHksFbV3B7Ie14s_YnIv5LMIzrcVlDPqii7TAp_jxOXbCebFRBxUhvU7_rpI8rVW408q1u7xb9cfP8w2cltRCHvqQfDMOMhJMto5nh25P2lxsL5FkgUT7w" 
                alt="Kensington Sky Sanctuary" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
            <div className="w-full md:w-2/5 space-y-6">
              <span className="font-label text-[10px] uppercase tracking-widest text-tertiary-container">London, UK • 450 SQM</span>
              <h3 className="font-display text-4xl text-primary">Kensington Sky Sanctuary</h3>
              <p className="text-on-surface-variant leading-relaxed">Transforming a disconnected roof space into a lush, private living room under the stars with bespoke metalwork and subtle illumination.</p>
              <Link href="#" className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-tertiary-container group hover:opacity-80 transition-opacity">
                View Project 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
